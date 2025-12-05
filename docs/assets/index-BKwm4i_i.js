(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Fg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Kf={exports:{}},Ro={};var Sx;function Ry(){if(Sx)return Ro;Sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return Ro.Fragment=t,Ro.jsx=i,Ro.jsxs=i,Ro}var Mx;function Cy(){return Mx||(Mx=1,Kf.exports=Ry()),Kf.exports}var E=Cy(),Qf={exports:{}},lt={};var Ex;function wy(){if(Ex)return lt;Ex=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.iterator;function b(N){return N===null||typeof N!="object"?null:(N=y&&N[y]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function _(N,X,se){this.props=N,this.context=X,this.refs=S,this.updater=se||M}_.prototype.isReactComponent={},_.prototype.setState=function(N,X){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,X,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function z(){}z.prototype=_.prototype;function L(N,X,se){this.props=N,this.context=X,this.refs=S,this.updater=se||M}var P=L.prototype=new z;P.constructor=L,R(P,_.prototype),P.isPureReactComponent=!0;var B=Array.isArray;function O(){}var H={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function D(N,X,se){var pe=se.ref;return{$$typeof:o,type:N,key:X,ref:pe!==void 0?pe:null,props:se}}function A(N,X){return D(N.type,X,N.props)}function j(N){return typeof N=="object"&&N!==null&&N.$$typeof===o}function Y(N){var X={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(se){return X[se]})}var Q=/\/+/g;function re(N,X){return typeof N=="object"&&N!==null&&N.key!=null?Y(""+N.key):X.toString(36)}function ae(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(O,O):(N.status="pending",N.then(function(X){N.status==="pending"&&(N.status="fulfilled",N.value=X)},function(X){N.status==="pending"&&(N.status="rejected",N.reason=X)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function I(N,X,se,pe,Me){var K=typeof N;(K==="undefined"||K==="boolean")&&(N=null);var ie=!1;if(N===null)ie=!0;else switch(K){case"bigint":case"string":case"number":ie=!0;break;case"object":switch(N.$$typeof){case o:case t:ie=!0;break;case x:return ie=N._init,I(ie(N._payload),X,se,pe,Me)}}if(ie)return Me=Me(N),ie=pe===""?"."+re(N,0):pe,B(Me)?(se="",ie!=null&&(se=ie.replace(Q,"$&/")+"/"),I(Me,X,se,"",function(Ue){return Ue})):Me!=null&&(j(Me)&&(Me=A(Me,se+(Me.key==null||N&&N.key===Me.key?"":(""+Me.key).replace(Q,"$&/")+"/")+ie)),X.push(Me)),1;ie=0;var _e=pe===""?".":pe+":";if(B(N))for(var Ee=0;Ee<N.length;Ee++)pe=N[Ee],K=_e+re(pe,Ee),ie+=I(pe,X,se,K,Me);else if(Ee=b(N),typeof Ee=="function")for(N=Ee.call(N),Ee=0;!(pe=N.next()).done;)pe=pe.value,K=_e+re(pe,Ee++),ie+=I(pe,X,se,K,Me);else if(K==="object"){if(typeof N.then=="function")return I(ae(N),X,se,pe,Me);throw X=String(N),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return ie}function G(N,X,se){if(N==null)return N;var pe=[],Me=0;return I(N,pe,"","",function(K){return X.call(se,K,Me++)}),pe}function U(N){if(N._status===-1){var X=N._result;X=X(),X.then(function(se){(N._status===0||N._status===-1)&&(N._status=1,N._result=se)},function(se){(N._status===0||N._status===-1)&&(N._status=2,N._result=se)}),N._status===-1&&(N._status=0,N._result=X)}if(N._status===1)return N._result.default;throw N._result}var V=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},J={map:G,forEach:function(N,X,se){G(N,function(){X.apply(this,arguments)},se)},count:function(N){var X=0;return G(N,function(){X++}),X},toArray:function(N){return G(N,function(X){return X})||[]},only:function(N){if(!j(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return lt.Activity=g,lt.Children=J,lt.Component=_,lt.Fragment=i,lt.Profiler=l,lt.PureComponent=L,lt.StrictMode=s,lt.Suspense=m,lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,lt.__COMPILER_RUNTIME={__proto__:null,c:function(N){return H.H.useMemoCache(N)}},lt.cache=function(N){return function(){return N.apply(null,arguments)}},lt.cacheSignal=function(){return null},lt.cloneElement=function(N,X,se){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var pe=R({},N.props),Me=N.key;if(X!=null)for(K in X.key!==void 0&&(Me=""+X.key),X)!$.call(X,K)||K==="key"||K==="__self"||K==="__source"||K==="ref"&&X.ref===void 0||(pe[K]=X[K]);var K=arguments.length-2;if(K===1)pe.children=se;else if(1<K){for(var ie=Array(K),_e=0;_e<K;_e++)ie[_e]=arguments[_e+2];pe.children=ie}return D(N.type,Me,pe)},lt.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},lt.createElement=function(N,X,se){var pe,Me={},K=null;if(X!=null)for(pe in X.key!==void 0&&(K=""+X.key),X)$.call(X,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(Me[pe]=X[pe]);var ie=arguments.length-2;if(ie===1)Me.children=se;else if(1<ie){for(var _e=Array(ie),Ee=0;Ee<ie;Ee++)_e[Ee]=arguments[Ee+2];Me.children=_e}if(N&&N.defaultProps)for(pe in ie=N.defaultProps,ie)Me[pe]===void 0&&(Me[pe]=ie[pe]);return D(N,K,Me)},lt.createRef=function(){return{current:null}},lt.forwardRef=function(N){return{$$typeof:h,render:N}},lt.isValidElement=j,lt.lazy=function(N){return{$$typeof:x,_payload:{_status:-1,_result:N},_init:U}},lt.memo=function(N,X){return{$$typeof:p,type:N,compare:X===void 0?null:X}},lt.startTransition=function(N){var X=H.T,se={};H.T=se;try{var pe=N(),Me=H.S;Me!==null&&Me(se,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(O,V)}catch(K){V(K)}finally{X!==null&&se.types!==null&&(X.types=se.types),H.T=X}},lt.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},lt.use=function(N){return H.H.use(N)},lt.useActionState=function(N,X,se){return H.H.useActionState(N,X,se)},lt.useCallback=function(N,X){return H.H.useCallback(N,X)},lt.useContext=function(N){return H.H.useContext(N)},lt.useDebugValue=function(){},lt.useDeferredValue=function(N,X){return H.H.useDeferredValue(N,X)},lt.useEffect=function(N,X){return H.H.useEffect(N,X)},lt.useEffectEvent=function(N){return H.H.useEffectEvent(N)},lt.useId=function(){return H.H.useId()},lt.useImperativeHandle=function(N,X,se){return H.H.useImperativeHandle(N,X,se)},lt.useInsertionEffect=function(N,X){return H.H.useInsertionEffect(N,X)},lt.useLayoutEffect=function(N,X){return H.H.useLayoutEffect(N,X)},lt.useMemo=function(N,X){return H.H.useMemo(N,X)},lt.useOptimistic=function(N,X){return H.H.useOptimistic(N,X)},lt.useReducer=function(N,X,se){return H.H.useReducer(N,X,se)},lt.useRef=function(N){return H.H.useRef(N)},lt.useState=function(N){return H.H.useState(N)},lt.useSyncExternalStore=function(N,X,se){return H.H.useSyncExternalStore(N,X,se)},lt.useTransition=function(){return H.H.useTransition()},lt.version="19.2.0",lt}var Tx;function Dh(){return Tx||(Tx=1,Qf.exports=wy()),Qf.exports}var Ye=Dh();const Fd=Fg(Ye);var Jf={exports:{}},Co={},$f={exports:{}},ed={};var Ax;function Dy(){return Ax||(Ax=1,(function(o){function t(I,G){var U=I.length;I.push(G);e:for(;0<U;){var V=U-1>>>1,J=I[V];if(0<l(J,G))I[V]=G,I[U]=J,U=V;else break e}}function i(I){return I.length===0?null:I[0]}function s(I){if(I.length===0)return null;var G=I[0],U=I.pop();if(U!==G){I[0]=U;e:for(var V=0,J=I.length,N=J>>>1;V<N;){var X=2*(V+1)-1,se=I[X],pe=X+1,Me=I[pe];if(0>l(se,U))pe<J&&0>l(Me,se)?(I[V]=Me,I[pe]=U,V=pe):(I[V]=se,I[X]=U,V=X);else if(pe<J&&0>l(Me,U))I[V]=Me,I[pe]=U,V=pe;else break e}}return G}function l(I,G){var U=I.sortIndex-G.sortIndex;return U!==0?U:I.id-G.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,g=null,y=3,b=!1,M=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,z=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;function P(I){for(var G=i(p);G!==null;){if(G.callback===null)s(p);else if(G.startTime<=I)s(p),G.sortIndex=G.expirationTime,t(m,G);else break;G=i(p)}}function B(I){if(R=!1,P(I),!M)if(i(m)!==null)M=!0,O||(O=!0,Y());else{var G=i(p);G!==null&&ae(B,G.startTime-I)}}var O=!1,H=-1,$=5,D=-1;function A(){return S?!0:!(o.unstable_now()-D<$)}function j(){if(S=!1,O){var I=o.unstable_now();D=I;var G=!0;try{e:{M=!1,R&&(R=!1,z(H),H=-1),b=!0;var U=y;try{t:{for(P(I),g=i(m);g!==null&&!(g.expirationTime>I&&A());){var V=g.callback;if(typeof V=="function"){g.callback=null,y=g.priorityLevel;var J=V(g.expirationTime<=I);if(I=o.unstable_now(),typeof J=="function"){g.callback=J,P(I),G=!0;break t}g===i(m)&&s(m),P(I)}else s(m);g=i(m)}if(g!==null)G=!0;else{var N=i(p);N!==null&&ae(B,N.startTime-I),G=!1}}break e}finally{g=null,y=U,b=!1}G=void 0}}finally{G?Y():O=!1}}}var Y;if(typeof L=="function")Y=function(){L(j)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=j,Y=function(){re.postMessage(null)}}else Y=function(){_(j,0)};function ae(I,G){H=_(function(){I(o.unstable_now())},G)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(I){I.callback=null},o.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<I?Math.floor(1e3/I):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(I){switch(y){case 1:case 2:case 3:var G=3;break;default:G=y}var U=y;y=G;try{return I()}finally{y=U}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(I,G){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var U=y;y=I;try{return G()}finally{y=U}},o.unstable_scheduleCallback=function(I,G,U){var V=o.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?V+U:V):U=V,I){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=U+J,I={id:x++,callback:G,priorityLevel:I,startTime:U,expirationTime:J,sortIndex:-1},U>V?(I.sortIndex=U,t(p,I),i(m)===null&&I===i(p)&&(R?(z(H),H=-1):R=!0,ae(B,U-V))):(I.sortIndex=J,t(m,I),M||b||(M=!0,O||(O=!0,Y()))),I},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(I){var G=y;return function(){var U=y;y=G;try{return I.apply(this,arguments)}finally{y=U}}}})(ed)),ed}var Rx;function Ny(){return Rx||(Rx=1,$f.exports=Dy()),$f.exports}var td={exports:{}},Dn={};var Cx;function Uy(){if(Cx)return Dn;Cx=1;var o=Dh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,x){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,x)},Dn.flushSync=function(m){var p=d.T,x=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=x,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin),y=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:y,fetchPriority:b}):x==="script"&&s.d.X(m,{crossOrigin:g,integrity:y,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,g=h(x,p.crossOrigin);s.d.L(m,x,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var wx;function Ly(){if(wx)return td.exports;wx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),td.exports=Uy(),td.exports}var Dx;function Oy(){if(Dx)return Co;Dx=1;var o=Ny(),t=Dh(),i=Ly();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,C=u.child;C;){if(C===a){v=!0,a=u,r=f;break}if(C===r){v=!0,r=u,a=f;break}C=C.sibling}if(!v){for(C=f.child;C;){if(C===a){v=!0,a=f,r=u;break}if(C===r){v=!0,r=f,a=u;break}C=C.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,y=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),z=Symbol.for("react.consumer"),L=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),B=Symbol.for("react.suspense"),O=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),A=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Q?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case B:return"Suspense";case O:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case M:return"Portal";case L:return e.displayName||"Context";case z:return(e._context.displayName||"Context")+".Consumer";case P:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return n=e.displayName||null,n!==null?n:re(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return re(e(n))}catch{}}return null}var ae=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},V=[],J=-1;function N(e){return{current:e}}function X(e){0>J||(e.current=V[J],V[J]=null,J--)}function se(e,n){J++,V[J]=e.current,e.current=n}var pe=N(null),Me=N(null),K=N(null),ie=N(null);function _e(e,n){switch(se(K,n),se(Me,e),se(pe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Xm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Xm(n),e=qm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(pe),se(pe,e)}function Ee(){X(pe),X(Me),X(K)}function Ue(e){e.memoizedState!==null&&se(ie,e);var n=pe.current,a=qm(n,e.type);n!==a&&(se(Me,e),se(pe,a))}function $e(e){Me.current===e&&(X(pe),X(Me)),ie.current===e&&(X(ie),Mo._currentValue=U)}var yt,Ke;function ct(e){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",Ke=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+e+Ke}var q=!1;function mt(e,n){if(!e||q)return"";q=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var be=function(){throw Error()};if(Object.defineProperty(be.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(be,[])}catch(me){var fe=me}Reflect.construct(e,[],be)}else{try{be.call()}catch(me){fe=me}e.call(be.prototype)}}else{try{throw Error()}catch(me){fe=me}(be=e())&&typeof be.catch=="function"&&be.catch(function(){})}}catch(me){if(me&&fe&&typeof me.stack=="string")return[me.stack,fe.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],C=f[1];if(v&&C){var k=v.split(`
`),ce=C.split(`
`);for(u=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;u<ce.length&&!ce[u].includes("DetermineComponentFrameRoot");)u++;if(r===k.length||u===ce.length)for(r=k.length-1,u=ce.length-1;1<=r&&0<=u&&k[r]!==ce[u];)u--;for(;1<=r&&0<=u;r--,u--)if(k[r]!==ce[u]){if(r!==1||u!==1)do if(r--,u--,0>u||k[r]!==ce[u]){var ge=`
`+k[r].replace(" at new "," at ");return e.displayName&&ge.includes("<anonymous>")&&(ge=ge.replace("<anonymous>",e.displayName)),ge}while(1<=r&&0<=u);break}}}finally{q=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ct(a):""}function gt(e,n){switch(e.tag){case 26:case 27:case 5:return ct(e.type);case 16:return ct("Lazy");case 13:return e.child!==n&&n!==null?ct("Suspense Fallback"):ct("Suspense");case 19:return ct("SuspenseList");case 0:case 15:return mt(e.type,!1);case 11:return mt(e.type.render,!1);case 1:return mt(e.type,!0);case 31:return ct("Activity");default:return""}}function It(e){try{var n="",a=null;do n+=gt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ve=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,Ze=o.unstable_cancelCallback,ot=o.unstable_shouldYield,F=o.unstable_requestPaint,T=o.unstable_now,le=o.unstable_getCurrentPriorityLevel,ye=o.unstable_ImmediatePriority,Te=o.unstable_UserBlockingPriority,xe=o.unstable_NormalPriority,qe=o.unstable_LowPriority,ze=o.unstable_IdlePriority,et=o.log,Xe=o.unstable_setDisableYieldValue,Ae=null,Ce=null;function We(e){if(typeof et=="function"&&Xe(e),Ce&&typeof Ce.setStrictMode=="function")try{Ce.setStrictMode(Ae,e)}catch{}}var ke=Math.clz32?Math.clz32:W,Ie=Math.log,st=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Ie(e)/st|0)|0}var Le=256,De=262144,Ne=4194304;function Re(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Se(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?u=Re(r):(v&=C,v!==0?u=Re(v):a||(a=C&~e,a!==0&&(u=Re(a))))):(C=r&~f,C!==0?u=Re(C):v!==0?u=Re(v):a||(a=r&~e,a!==0&&(u=Re(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function rt(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ht(){var e=Ne;return Ne<<=1,(Ne&62914560)===0&&(Ne=4194304),e}function wt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qn(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,ce=e.hiddenUpdates;for(a=v&~a;0<a;){var ge=31-ke(a),be=1<<ge;C[ge]=0,k[ge]=-1;var fe=ce[ge];if(fe!==null)for(ce[ge]=null,ge=0;ge<fe.length;ge++){var me=fe[ge];me!==null&&(me.lane&=-536870913)}a&=~be}r!==0&&Wo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function Wo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-ke(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Or(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-ke(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function zr(e,n){var a=n&-n;return a=(a&42)!==0?1:gi(a),(a&(e.suspendedLanes|n))!==0?0:a}function gi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $a(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Pr(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:mx(e.type))}function Ir(e,n){var a=G.p;try{return G.p=e,n()}finally{G.p=a}}var Wn=Math.random().toString(36).slice(2),on="__reactFiber$"+Wn,hn="__reactProps$"+Wn,Pi="__reactContainer$"+Wn,ws="__reactEvents$"+Wn,kc="__reactListeners$"+Wn,jc="__reactHandles$"+Wn,Yo="__reactResources$"+Wn,es="__reactMarker$"+Wn;function Fr(e){delete e[on],delete e[hn],delete e[ws],delete e[kc],delete e[jc]}function ma(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Pi]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=$m(e);e!==null;){if(a=e[on])return a;e=$m(e)}return n}e=a,a=e.parentNode}return null}function w(e){if(e=e[on]||e[Pi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ee(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function he(e){var n=e[Yo];return n||(n=e[Yo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ue(e){e[es]=!0}var ne=new Set,we={};function Oe(e,n){Fe(e,n),Fe(e+"Capture",n)}function Fe(e,n){for(we[e]=n,e=0;e<n.length;e++)ne.add(n[e])}var He=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nt={},at={};function Qe(e){return Ve.call(at,e)?!0:Ve.call(nt,e)?!1:He.test(e)?at[e]=!0:(nt[e]=!0,!1)}function dt(e,n,a){if(Qe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ct(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Dt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function Mt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Pt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tt(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function qt(e){if(!e._valueTracker){var n=Pt(e)?"checked":"value";e._valueTracker=tt(e,n,""+e[n])}}function Et(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Pt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var xa=/[\n"\\]/g;function Yt(e){return e.replace(xa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ii(e,n,a,r,u,f,v,C){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Mt(n)):e.value!==""+Mt(n)&&(e.value=""+Mt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?vn(e,v,Mt(n)):a!=null?vn(e,v,Mt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Mt(C):e.removeAttribute("name")}function Zt(e,n,a,r,u,f,v,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){qt(e);return}a=a!=null?""+Mt(a):"",n=n!=null?""+Mt(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),qt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+Mt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+Mt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Mt(a):""}function En(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(ae(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=Mt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),qt(e)}function Ai(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Fi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Vh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Fi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function kh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Vh(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Vh(e,f,n[f])}function Xc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var M_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),E_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Zo(e){return E_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var qc=null;function Wc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ds=null,Ns=null;function jh(e){var n=w(e);if(n&&(e=n.stateNode)){var a=e[hn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ii(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Yt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[hn]||null;if(!u)throw Error(s(90));Ii(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Et(r)}break e;case"textarea":yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&pn(e,!!a.multiple,n,!1)}}}var Yc=!1;function Xh(e,n,a){if(Yc)return e(n,a);Yc=!0;try{var r=e(n);return r}finally{if(Yc=!1,(Ds!==null||Ns!==null)&&(Pl(),Ds&&(n=Ds,e=Ns,Ns=Ds=null,jh(n),e)))for(n=0;n<e.length;n++)jh(e[n])}}function Br(e,n){var a=e.stateNode;if(a===null)return null;var r=a[hn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Hi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zc=!1;if(Hi)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){Zc=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{Zc=!1}var ga=null,Kc=null,Ko=null;function qh(){if(Ko)return Ko;var e,n=Kc,a=n.length,r,u="value"in ga?ga.value:ga.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Ko=u.slice(e,1<r?1-r:void 0)}function Qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Jo(){return!0}function Wh(){return!1}function Fn(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Jo:Wh,this.isPropagationStopped=Wh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Jo)},persist:function(){},isPersistent:Jo}),n}var ts={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},$o=Fn(ts),Gr=g({},ts,{view:0,detail:0}),T_=Fn(Gr),Qc,Jc,Vr,el=g({},Gr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:eu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Qc=e.screenX-Vr.screenX,Jc=e.screenY-Vr.screenY):Jc=Qc=0,Vr=e),Qc)},movementY:function(e){return"movementY"in e?e.movementY:Jc}}),Yh=Fn(el),A_=g({},el,{dataTransfer:0}),R_=Fn(A_),C_=g({},Gr,{relatedTarget:0}),$c=Fn(C_),w_=g({},ts,{animationName:0,elapsedTime:0,pseudoElement:0}),D_=Fn(w_),N_=g({},ts,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),U_=Fn(N_),L_=g({},ts,{data:0}),Zh=Fn(L_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},z_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function I_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=P_[e])?!!n[e]:!1}function eu(){return I_}var F_=g({},Gr,{key:function(e){if(e.key){var n=O_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?z_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:eu,charCode:function(e){return e.type==="keypress"?Qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),B_=Fn(F_),H_=g({},el,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kh=Fn(H_),G_=g({},Gr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:eu}),V_=Fn(G_),k_=g({},ts,{propertyName:0,elapsedTime:0,pseudoElement:0}),j_=Fn(k_),X_=g({},el,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=Fn(X_),W_=g({},ts,{newState:0,oldState:0}),Y_=Fn(W_),Z_=[9,13,27,32],tu=Hi&&"CompositionEvent"in window,kr=null;Hi&&"documentMode"in document&&(kr=document.documentMode);var K_=Hi&&"TextEvent"in window&&!kr,Qh=Hi&&(!tu||kr&&8<kr&&11>=kr),Jh=" ",$h=!1;function e0(e,n){switch(e){case"keyup":return Z_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function t0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Us=!1;function Q_(e,n){switch(e){case"compositionend":return t0(n);case"keypress":return n.which!==32?null:($h=!0,Jh);case"textInput":return e=n.data,e===Jh&&$h?null:e;default:return null}}function J_(e,n){if(Us)return e==="compositionend"||!tu&&e0(e,n)?(e=qh(),Ko=Kc=ga=null,Us=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Qh&&n.locale!=="ko"?null:n.data;default:return null}}var $_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!$_[e.type]:n==="textarea"}function i0(e,n,a,r){Ds?Ns?Ns.push(r):Ns=[r]:Ds=r,n=kl(n,"onChange"),0<n.length&&(a=new $o("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var jr=null,Xr=null;function ev(e){Bm(e,0)}function tl(e){var n=ee(e);if(Et(n))return e}function a0(e,n){if(e==="change")return n}var s0=!1;if(Hi){var nu;if(Hi){var iu="oninput"in document;if(!iu){var r0=document.createElement("div");r0.setAttribute("oninput","return;"),iu=typeof r0.oninput=="function"}nu=iu}else nu=!1;s0=nu&&(!document.documentMode||9<document.documentMode)}function o0(){jr&&(jr.detachEvent("onpropertychange",l0),Xr=jr=null)}function l0(e){if(e.propertyName==="value"&&tl(Xr)){var n=[];i0(n,Xr,e,Wc(e)),Xh(ev,n)}}function tv(e,n,a){e==="focusin"?(o0(),jr=n,Xr=a,jr.attachEvent("onpropertychange",l0)):e==="focusout"&&o0()}function nv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return tl(Xr)}function iv(e,n){if(e==="click")return tl(n)}function av(e,n){if(e==="input"||e==="change")return tl(n)}function sv(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:sv;function qr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ve.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function c0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function u0(e,n){var a=c0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=c0(a)}}function f0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?f0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function d0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function au(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var rv=Hi&&"documentMode"in document&&11>=document.documentMode,Ls=null,su=null,Wr=null,ru=!1;function h0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ru||Ls==null||Ls!==_n(r)||(r=Ls,"selectionStart"in r&&au(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wr&&qr(Wr,r)||(Wr=r,r=kl(su,"onSelect"),0<r.length&&(n=new $o("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Ls)))}function ns(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Os={animationend:ns("Animation","AnimationEnd"),animationiteration:ns("Animation","AnimationIteration"),animationstart:ns("Animation","AnimationStart"),transitionrun:ns("Transition","TransitionRun"),transitionstart:ns("Transition","TransitionStart"),transitioncancel:ns("Transition","TransitionCancel"),transitionend:ns("Transition","TransitionEnd")},ou={},p0={};Hi&&(p0=document.createElement("div").style,"AnimationEvent"in window||(delete Os.animationend.animation,delete Os.animationiteration.animation,delete Os.animationstart.animation),"TransitionEvent"in window||delete Os.transitionend.transition);function is(e){if(ou[e])return ou[e];if(!Os[e])return e;var n=Os[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in p0)return ou[e]=n[a];return e}var m0=is("animationend"),x0=is("animationiteration"),g0=is("animationstart"),ov=is("transitionrun"),lv=is("transitionstart"),cv=is("transitioncancel"),_0=is("transitionend"),v0=new Map,lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lu.push("scrollEnd");function _i(e,n){v0.set(e,n),Oe(n,[e])}var nl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],zs=0,cu=0;function il(){for(var e=zs,n=cu=zs=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&y0(a,u,f)}}function al(e,n,a,r){si[zs++]=e,si[zs++]=n,si[zs++]=a,si[zs++]=r,cu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function uu(e,n,a,r){return al(e,n,a,r),sl(e)}function as(e,n){return al(e,null,null,n),sl(e)}function y0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-ke(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function sl(e){if(50<xo)throw xo=0,yf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ps={};function uv(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new uv(e,n,a,r)}function fu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function b0(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function rl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")fu(e)&&(v=1);else if(typeof e=="string")v=my(e,a,pe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Zn(31,a,n,u),e.elementType=D,e.lanes=f,e;case R:return ss(a.children,u,f,n);case S:v=8,u|=24;break;case _:return e=Zn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case B:return e=Zn(13,a,n,u),e.elementType=B,e.lanes=f,e;case O:return e=Zn(19,a,n,u),e.elementType=O,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case L:v=10;break e;case z:v=9;break e;case P:v=11;break e;case H:v=14;break e;case $:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function ss(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function du(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function S0(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function hu(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var M0=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=M0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:It(n)},M0.set(e,n),n)}return{value:e,source:n,stack:It(n)}}var Is=[],Fs=0,ol=null,Yr=0,oi=[],li=0,_a=null,Ri=1,Ci="";function Vi(e,n){Is[Fs++]=Yr,Is[Fs++]=ol,ol=e,Yr=n}function E0(e,n,a){oi[li++]=Ri,oi[li++]=Ci,oi[li++]=_a,_a=e;var r=Ri;e=Ci;var u=32-ke(r)-1;r&=~(1<<u),a+=1;var f=32-ke(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ri=1<<32-ke(n)+u|a<<u|r,Ci=f+e}else Ri=1<<f|a<<u|r,Ci=e}function pu(e){e.return!==null&&(Vi(e,1),E0(e,1,0))}function mu(e){for(;e===ol;)ol=Is[--Fs],Is[Fs]=null,Yr=Is[--Fs],Is[Fs]=null;for(;e===_a;)_a=oi[--li],oi[li]=null,Ci=oi[--li],oi[li]=null,Ri=oi[--li],oi[li]=null}function T0(e,n){oi[li++]=Ri,oi[li++]=Ci,oi[li++]=_a,Ri=n.id,Ci=n.overflow,_a=e}var Tn=null,Kt=null,Tt=!1,va=null,ci=!1,xu=Error(s(519));function ya(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Zr(ri(n,e)),xu}function A0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[hn]=r,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<_o.length;a++)vt(_o[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Zt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),En(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||km(n.textContent,a)?(r.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),r.onScroll!=null&&vt("scroll",n),r.onScrollEnd!=null&&vt("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||ya(e,!0)}function R0(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Bs(e){if(e!==Tn)return!1;if(!Tt)return R0(e),Tt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||zf(e.type,e.memoizedProps)),a=!a),a&&Kt&&ya(e),R0(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Jm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Jm(e)}else n===27?(n=Kt,Oa(e.type)?(e=Hf,Hf=null,Kt=e):Kt=n):Kt=Tn?fi(e.stateNode.nextSibling):null;return!0}function rs(){Kt=Tn=null,Tt=!1}function gu(){var e=va;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),va=null),e}function Zr(e){va===null?va=[e]:va.push(e)}var _u=N(null),os=null,ki=null;function ba(e,n,a){se(_u,n._currentValue),n._currentValue=a}function ji(e){e._currentValue=_u.current,X(_u)}function vu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function yu(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var C=f;f=u;for(var k=0;k<n.length;k++)if(C.context===n[k]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),vu(f.return,a,e),r||(v=null);break e}f=C.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),vu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Hs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var C=u.type;Yn(u.pendingProps.value,v.value)||(e!==null?e.push(C):e=[C])}}else if(u===ie.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Mo):e=[Mo])}u=u.return}e!==null&&yu(n,e,a,r),n.flags|=262144}function ll(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ls(e){os=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return C0(os,e)}function cl(e,n){return os===null&&ls(e),C0(e,n)}function C0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var fv=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},dv=o.unstable_scheduleCallback,hv=o.unstable_NormalPriority,ln={$$typeof:L,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new fv,data:new Map,refCount:0}}function Kr(e){e.refCount--,e.refCount===0&&dv(hv,function(){e.controller.abort()})}var Qr=null,Su=0,Gs=0,Vs=null;function pv(e,n){if(Qr===null){var a=Qr=[];Su=0,Gs=Af(),Vs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Su++,n.then(w0,w0),n}function w0(){if(--Su===0&&Qr!==null){Vs!==null&&(Vs.status="fulfilled");var e=Qr;Qr=null,Gs=0,Vs=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function mv(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var D0=I.S;I.S=function(e,n){hm=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&pv(e,n),D0!==null&&D0(e,n)};var cs=N(null);function Mu(){var e=cs.current;return e!==null?e:Wt.pooledCache}function ul(e,n){n===null?se(cs,cs.current):se(cs,n.pool)}function N0(){var e=Mu();return e===null?null:{parent:ln._currentValue,pool:e}}var ks=Error(s(460)),Eu=Error(s(474)),fl=Error(s(542)),dl={then:function(){}};function U0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function L0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,z0(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,z0(e),e}throw fs=n,ks}}function us(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(fs=a,ks):a}}var fs=null;function O0(){if(fs===null)throw Error(s(459));var e=fs;return fs=null,e}function z0(e){if(e===ks||e===fl)throw Error(s(483))}var js=null,Jr=0;function hl(e){var n=Jr;return Jr+=1,js===null&&(js=[]),L0(js,e,n)}function $r(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function pl(e,n){throw n.$$typeof===y?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function P0(e){function n(te,Z){if(e){var oe=te.deletions;oe===null?(te.deletions=[Z],te.flags|=16):oe.push(Z)}}function a(te,Z){if(!e)return null;for(;Z!==null;)n(te,Z),Z=Z.sibling;return null}function r(te){for(var Z=new Map;te!==null;)te.key!==null?Z.set(te.key,te):Z.set(te.index,te),te=te.sibling;return Z}function u(te,Z){return te=Gi(te,Z),te.index=0,te.sibling=null,te}function f(te,Z,oe){return te.index=oe,e?(oe=te.alternate,oe!==null?(oe=oe.index,oe<Z?(te.flags|=67108866,Z):oe):(te.flags|=67108866,Z)):(te.flags|=1048576,Z)}function v(te){return e&&te.alternate===null&&(te.flags|=67108866),te}function C(te,Z,oe,ve){return Z===null||Z.tag!==6?(Z=du(oe,te.mode,ve),Z.return=te,Z):(Z=u(Z,oe),Z.return=te,Z)}function k(te,Z,oe,ve){var Je=oe.type;return Je===R?ge(te,Z,oe.props.children,ve,oe.key):Z!==null&&(Z.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===$&&us(Je)===Z.type)?(Z=u(Z,oe.props),$r(Z,oe),Z.return=te,Z):(Z=rl(oe.type,oe.key,oe.props,null,te.mode,ve),$r(Z,oe),Z.return=te,Z)}function ce(te,Z,oe,ve){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==oe.containerInfo||Z.stateNode.implementation!==oe.implementation?(Z=hu(oe,te.mode,ve),Z.return=te,Z):(Z=u(Z,oe.children||[]),Z.return=te,Z)}function ge(te,Z,oe,ve,Je){return Z===null||Z.tag!==7?(Z=ss(oe,te.mode,ve,Je),Z.return=te,Z):(Z=u(Z,oe),Z.return=te,Z)}function be(te,Z,oe){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=du(""+Z,te.mode,oe),Z.return=te,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return oe=rl(Z.type,Z.key,Z.props,null,te.mode,oe),$r(oe,Z),oe.return=te,oe;case M:return Z=hu(Z,te.mode,oe),Z.return=te,Z;case $:return Z=us(Z),be(te,Z,oe)}if(ae(Z)||Y(Z))return Z=ss(Z,te.mode,oe,null),Z.return=te,Z;if(typeof Z.then=="function")return be(te,hl(Z),oe);if(Z.$$typeof===L)return be(te,cl(te,Z),oe);pl(te,Z)}return null}function fe(te,Z,oe,ve){var Je=Z!==null?Z.key:null;if(typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint")return Je!==null?null:C(te,Z,""+oe,ve);if(typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:return oe.key===Je?k(te,Z,oe,ve):null;case M:return oe.key===Je?ce(te,Z,oe,ve):null;case $:return oe=us(oe),fe(te,Z,oe,ve)}if(ae(oe)||Y(oe))return Je!==null?null:ge(te,Z,oe,ve,null);if(typeof oe.then=="function")return fe(te,Z,hl(oe),ve);if(oe.$$typeof===L)return fe(te,Z,cl(te,oe),ve);pl(te,oe)}return null}function me(te,Z,oe,ve,Je){if(typeof ve=="string"&&ve!==""||typeof ve=="number"||typeof ve=="bigint")return te=te.get(oe)||null,C(Z,te,""+ve,Je);if(typeof ve=="object"&&ve!==null){switch(ve.$$typeof){case b:return te=te.get(ve.key===null?oe:ve.key)||null,k(Z,te,ve,Je);case M:return te=te.get(ve.key===null?oe:ve.key)||null,ce(Z,te,ve,Je);case $:return ve=us(ve),me(te,Z,oe,ve,Je)}if(ae(ve)||Y(ve))return te=te.get(oe)||null,ge(Z,te,ve,Je,null);if(typeof ve.then=="function")return me(te,Z,oe,hl(ve),Je);if(ve.$$typeof===L)return me(te,Z,oe,cl(Z,ve),Je);pl(Z,ve)}return null}function Ge(te,Z,oe,ve){for(var Je=null,Nt=null,je=Z,ht=Z=0,St=null;je!==null&&ht<oe.length;ht++){je.index>ht?(St=je,je=null):St=je.sibling;var Ut=fe(te,je,oe[ht],ve);if(Ut===null){je===null&&(je=St);break}e&&je&&Ut.alternate===null&&n(te,je),Z=f(Ut,Z,ht),Nt===null?Je=Ut:Nt.sibling=Ut,Nt=Ut,je=St}if(ht===oe.length)return a(te,je),Tt&&Vi(te,ht),Je;if(je===null){for(;ht<oe.length;ht++)je=be(te,oe[ht],ve),je!==null&&(Z=f(je,Z,ht),Nt===null?Je=je:Nt.sibling=je,Nt=je);return Tt&&Vi(te,ht),Je}for(je=r(je);ht<oe.length;ht++)St=me(je,te,ht,oe[ht],ve),St!==null&&(e&&St.alternate!==null&&je.delete(St.key===null?ht:St.key),Z=f(St,Z,ht),Nt===null?Je=St:Nt.sibling=St,Nt=St);return e&&je.forEach(function(Ba){return n(te,Ba)}),Tt&&Vi(te,ht),Je}function it(te,Z,oe,ve){if(oe==null)throw Error(s(151));for(var Je=null,Nt=null,je=Z,ht=Z=0,St=null,Ut=oe.next();je!==null&&!Ut.done;ht++,Ut=oe.next()){je.index>ht?(St=je,je=null):St=je.sibling;var Ba=fe(te,je,Ut.value,ve);if(Ba===null){je===null&&(je=St);break}e&&je&&Ba.alternate===null&&n(te,je),Z=f(Ba,Z,ht),Nt===null?Je=Ba:Nt.sibling=Ba,Nt=Ba,je=St}if(Ut.done)return a(te,je),Tt&&Vi(te,ht),Je;if(je===null){for(;!Ut.done;ht++,Ut=oe.next())Ut=be(te,Ut.value,ve),Ut!==null&&(Z=f(Ut,Z,ht),Nt===null?Je=Ut:Nt.sibling=Ut,Nt=Ut);return Tt&&Vi(te,ht),Je}for(je=r(je);!Ut.done;ht++,Ut=oe.next())Ut=me(je,te,ht,Ut.value,ve),Ut!==null&&(e&&Ut.alternate!==null&&je.delete(Ut.key===null?ht:Ut.key),Z=f(Ut,Z,ht),Nt===null?Je=Ut:Nt.sibling=Ut,Nt=Ut);return e&&je.forEach(function(Ay){return n(te,Ay)}),Tt&&Vi(te,ht),Je}function kt(te,Z,oe,ve){if(typeof oe=="object"&&oe!==null&&oe.type===R&&oe.key===null&&(oe=oe.props.children),typeof oe=="object"&&oe!==null){switch(oe.$$typeof){case b:e:{for(var Je=oe.key;Z!==null;){if(Z.key===Je){if(Je=oe.type,Je===R){if(Z.tag===7){a(te,Z.sibling),ve=u(Z,oe.props.children),ve.return=te,te=ve;break e}}else if(Z.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===$&&us(Je)===Z.type){a(te,Z.sibling),ve=u(Z,oe.props),$r(ve,oe),ve.return=te,te=ve;break e}a(te,Z);break}else n(te,Z);Z=Z.sibling}oe.type===R?(ve=ss(oe.props.children,te.mode,ve,oe.key),ve.return=te,te=ve):(ve=rl(oe.type,oe.key,oe.props,null,te.mode,ve),$r(ve,oe),ve.return=te,te=ve)}return v(te);case M:e:{for(Je=oe.key;Z!==null;){if(Z.key===Je)if(Z.tag===4&&Z.stateNode.containerInfo===oe.containerInfo&&Z.stateNode.implementation===oe.implementation){a(te,Z.sibling),ve=u(Z,oe.children||[]),ve.return=te,te=ve;break e}else{a(te,Z);break}else n(te,Z);Z=Z.sibling}ve=hu(oe,te.mode,ve),ve.return=te,te=ve}return v(te);case $:return oe=us(oe),kt(te,Z,oe,ve)}if(ae(oe))return Ge(te,Z,oe,ve);if(Y(oe)){if(Je=Y(oe),typeof Je!="function")throw Error(s(150));return oe=Je.call(oe),it(te,Z,oe,ve)}if(typeof oe.then=="function")return kt(te,Z,hl(oe),ve);if(oe.$$typeof===L)return kt(te,Z,cl(te,oe),ve);pl(te,oe)}return typeof oe=="string"&&oe!==""||typeof oe=="number"||typeof oe=="bigint"?(oe=""+oe,Z!==null&&Z.tag===6?(a(te,Z.sibling),ve=u(Z,oe),ve.return=te,te=ve):(a(te,Z),ve=du(oe,te.mode,ve),ve.return=te,te=ve),v(te)):a(te,Z)}return function(te,Z,oe,ve){try{Jr=0;var Je=kt(te,Z,oe,ve);return js=null,Je}catch(je){if(je===ks||je===fl)throw je;var Nt=Zn(29,je,null,te.mode);return Nt.lanes=ve,Nt.return=te,Nt}finally{}}}var ds=P0(!0),I0=P0(!1),Sa=!1;function Tu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Au(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ea(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(zt&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=sl(e),y0(e,null,a),n}return al(e,r,n,a),sl(e)}function eo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Or(e,a)}}function Ru(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Cu=!1;function to(){if(Cu){var e=Vs;if(e!==null)throw e}}function no(e,n,a,r){Cu=!1;var u=e.updateQueue;Sa=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,C=u.shared.pending;if(C!==null){u.shared.pending=null;var k=C,ce=k.next;k.next=null,v===null?f=ce:v.next=ce,v=k;var ge=e.alternate;ge!==null&&(ge=ge.updateQueue,C=ge.lastBaseUpdate,C!==v&&(C===null?ge.firstBaseUpdate=ce:C.next=ce,ge.lastBaseUpdate=k))}if(f!==null){var be=u.baseState;v=0,ge=ce=k=null,C=f;do{var fe=C.lane&-536870913,me=fe!==C.lane;if(me?(bt&fe)===fe:(r&fe)===fe){fe!==0&&fe===Gs&&(Cu=!0),ge!==null&&(ge=ge.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var Ge=e,it=C;fe=n;var kt=a;switch(it.tag){case 1:if(Ge=it.payload,typeof Ge=="function"){be=Ge.call(kt,be,fe);break e}be=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=it.payload,fe=typeof Ge=="function"?Ge.call(kt,be,fe):Ge,fe==null)break e;be=g({},be,fe);break e;case 2:Sa=!0}}fe=C.callback,fe!==null&&(e.flags|=64,me&&(e.flags|=8192),me=u.callbacks,me===null?u.callbacks=[fe]:me.push(fe))}else me={lane:fe,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ge===null?(ce=ge=me,k=be):ge=ge.next=me,v|=fe;if(C=C.next,C===null){if(C=u.shared.pending,C===null)break;me=C,C=me.next,me.next=null,u.lastBaseUpdate=me,u.shared.pending=null}}while(!0);ge===null&&(k=be),u.baseState=k,u.firstBaseUpdate=ce,u.lastBaseUpdate=ge,f===null&&(u.shared.lanes=0),wa|=v,e.lanes=v,e.memoizedState=be}}function F0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function B0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)F0(a[e],n)}var Xs=N(null),ml=N(0);function H0(e,n){e=$i,se(ml,e),se(Xs,n),$i=e|n.baseLanes}function wu(){se(ml,$i),se(Xs,Xs.current)}function Du(){$i=ml.current,X(Xs),X(ml)}var Kn=N(null),ui=null;function Ta(e){var n=e.alternate;se(an,an.current&1),se(Kn,e),ui===null&&(n===null||Xs.current!==null||n.memoizedState!==null)&&(ui=e)}function Nu(e){se(an,an.current),se(Kn,e),ui===null&&(ui=e)}function G0(e){e.tag===22?(se(an,an.current),se(Kn,e),ui===null&&(ui=e)):Aa()}function Aa(){se(an,an.current),se(Kn,Kn.current)}function Qn(e){X(Kn),ui===e&&(ui=null),X(an)}var an=N(0);function xl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ff(a)||Bf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Xi=0,ft=null,Gt=null,cn=null,gl=!1,qs=!1,hs=!1,_l=0,io=0,Ws=null,xv=0;function $t(){throw Error(s(321))}function Uu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Lu(e,n,a,r,u,f){return Xi=f,ft=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,I.H=e===null||e.memoizedState===null?Ep:Yu,hs=!1,f=a(r,u),hs=!1,qs&&(f=k0(n,a,r,u)),V0(e),f}function V0(e){I.H=ro;var n=Gt!==null&&Gt.next!==null;if(Xi=0,cn=Gt=ft=null,gl=!1,io=0,Ws=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&ll(e)&&(un=!0))}function k0(e,n,a,r){ft=e;var u=0;do{if(qs&&(Ws=null),io=0,qs=!1,25<=u)throw Error(s(301));if(u+=1,cn=Gt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}I.H=Tp,f=n(a,r)}while(qs);return f}function gv(){var e=I.H,n=e.useState()[0];return n=typeof n.then=="function"?ao(n):n,e=e.useState()[0],(Gt!==null?Gt.memoizedState:null)!==e&&(ft.flags|=1024),n}function Ou(){var e=_l!==0;return _l=0,e}function zu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pu(e){if(gl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}gl=!1}Xi=0,cn=Gt=ft=null,qs=!1,io=_l=0,Ws=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ft.memoizedState=cn=e:cn=cn.next=e,cn}function sn(){if(Gt===null){var e=ft.alternate;e=e!==null?e.memoizedState:null}else e=Gt.next;var n=cn===null?ft.memoizedState:cn.next;if(n!==null)cn=n,Gt=e;else{if(e===null)throw ft.alternate===null?Error(s(467)):Error(s(310));Gt=e,e={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},cn===null?ft.memoizedState=cn=e:cn=cn.next=e}return cn}function vl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ao(e){var n=io;return io+=1,Ws===null&&(Ws=[]),e=L0(Ws,e,n),n=ft,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,I.H=n===null||n.memoizedState===null?Ep:Yu),e}function yl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ao(e);if(e.$$typeof===L)return An(e)}throw Error(s(438,String(e)))}function Iu(e){var n=null,a=ft.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ft.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vl(),ft.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=A;return n.index++,a}function qi(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=sn();return Fu(n,Gt,e)}function Fu(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var C=v=null,k=null,ce=n,ge=!1;do{var be=ce.lane&-536870913;if(be!==ce.lane?(bt&be)===be:(Xi&be)===be){var fe=ce.revertLane;if(fe===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),be===Gs&&(ge=!0);else if((Xi&fe)===fe){ce=ce.next,fe===Gs&&(ge=!0);continue}else be={lane:0,revertLane:ce.revertLane,gesture:null,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=be,v=f):k=k.next=be,ft.lanes|=fe,wa|=fe;be=ce.action,hs&&a(f,be),f=ce.hasEagerState?ce.eagerState:a(f,be)}else fe={lane:be,revertLane:ce.revertLane,gesture:ce.gesture,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null},k===null?(C=k=fe,v=f):k=k.next=fe,ft.lanes|=be,wa|=be;ce=ce.next}while(ce!==null&&ce!==n);if(k===null?v=f:k.next=C,!Yn(f,e.memoizedState)&&(un=!0,ge&&(a=Vs,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=k,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Bu(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function j0(e,n,a){var r=ft,u=sn(),f=Tt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Yn((Gt||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,Vu(W0.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,Ys(9,{destroy:void 0},q0.bind(null,r,u,a,n),null),Wt===null)throw Error(s(349));f||(Xi&127)!==0||X0(r,n,a)}return a}function X0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ft.updateQueue,n===null?(n=vl(),ft.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function q0(e,n,a,r){n.value=a,n.getSnapshot=r,Y0(n)&&Z0(e)}function W0(e,n,a){return a(function(){Y0(n)&&Z0(e)})}function Y0(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Z0(e){var n=as(e,2);n!==null&&kn(n,e,2)}function Hu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),hs){We(!0);try{a()}finally{We(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:e},n}function K0(e,n,a,r){return e.baseState=a,Fu(e,Gt,typeof r=="function"?r:qi)}function _v(e,n,a,r,u){if(El(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};I.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Q0(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Q0(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=I.T,v={};I.T=v;try{var C=a(u,r),k=I.S;k!==null&&k(v,C),J0(e,n,C)}catch(ce){Gu(e,n,ce)}finally{f!==null&&v.types!==null&&(f.types=v.types),I.T=f}}else try{f=a(u,r),J0(e,n,f)}catch(ce){Gu(e,n,ce)}}function J0(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){$0(e,n,r)},function(r){return Gu(e,n,r)}):$0(e,n,a)}function $0(e,n,a){n.status="fulfilled",n.value=a,ep(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Q0(e,a)))}function Gu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ep(n),n=n.next;while(n!==r)}e.action=null}function ep(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function tp(e,n){return n}function np(e,n){if(Tt){var a=Wt.formState;if(a!==null){e:{var r=ft;if(Tt){if(Kt){t:{for(var u=Kt,f=ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=fi(u.nextSibling),r=u.data==="F!";break e}}ya(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:tp,lastRenderedState:n},a.queue=r,a=bp.bind(null,ft,r),r.dispatch=a,r=Hu(!1),f=Wu.bind(null,ft,!1,r.queue),r=On(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=_v.bind(null,ft,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function ip(e){var n=sn();return ap(n,Gt,e)}function ap(e,n,a){if(n=Fu(e,n,tp)[0],e=bl(qi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ao(n)}catch(v){throw v===ks?fl:v}else r=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ft.flags|=2048,Ys(9,{destroy:void 0},vv.bind(null,u,a),null)),[r,f,e]}function vv(e,n){e.action=n}function sp(e){var n=sn(),a=Gt;if(a!==null)return ap(n,a,e);sn(),n=n.memoizedState,a=sn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Ys(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ft.updateQueue,n===null&&(n=vl(),ft.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function rp(){return sn().memoizedState}function Sl(e,n,a,r){var u=On();ft.flags|=e,u.memoizedState=Ys(1|n,{destroy:void 0},a,r===void 0?null:r)}function Ml(e,n,a,r){var u=sn();r=r===void 0?null:r;var f=u.memoizedState.inst;Gt!==null&&r!==null&&Uu(r,Gt.memoizedState.deps)?u.memoizedState=Ys(n,f,a,r):(ft.flags|=e,u.memoizedState=Ys(1|n,f,a,r))}function op(e,n){Sl(8390656,8,e,n)}function Vu(e,n){Ml(2048,8,e,n)}function yv(e){ft.flags|=4;var n=ft.updateQueue;if(n===null)n=vl(),ft.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function lp(e){var n=sn().memoizedState;return yv({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function cp(e,n){return Ml(4,2,e,n)}function up(e,n){return Ml(4,4,e,n)}function fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function dp(e,n,a){a=a!=null?a.concat([e]):null,Ml(4,4,fp.bind(null,n,e),a)}function ku(){}function hp(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function pp(e,n){var a=sn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uu(n,r[1]))return r[0];if(r=e(),hs){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r}function ju(e,n,a){return a===void 0||(Xi&1073741824)!==0&&(bt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=mm(),ft.lanes|=e,wa|=e,a)}function mp(e,n,a,r){return Yn(a,n)?a:Xs.current!==null?(e=ju(e,a,r),Yn(e,n)||(un=!0),e):(Xi&42)===0||(Xi&1073741824)!==0&&(bt&261930)===0?(un=!0,e.memoizedState=a):(e=mm(),ft.lanes|=e,wa|=e,n)}function xp(e,n,a,r,u){var f=G.p;G.p=f!==0&&8>f?f:8;var v=I.T,C={};I.T=C,Wu(e,!1,n,a);try{var k=u(),ce=I.S;if(ce!==null&&ce(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ge=mv(k,r);so(e,n,ge,ei(e))}else so(e,n,r,ei(e))}catch(be){so(e,n,{then:function(){},status:"rejected",reason:be},ei())}finally{G.p=f,v!==null&&C.types!==null&&(v.types=C.types),I.T=v}}function bv(){}function Xu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=gp(e).queue;xp(e,u,n,U,a===null?bv:function(){return _p(e),a(r)})}function gp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:U},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:qi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function _p(e){var n=gp(e);n.next===null&&(n=e.alternate.memoizedState),so(e,n.next.queue,{},ei())}function qu(){return An(Mo)}function vp(){return sn().memoizedState}function yp(){return sn().memoizedState}function Sv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ma(a);var r=Ea(n,e,a);r!==null&&(kn(r,n,a),eo(r,n,a)),n={cache:bu()},e.payload=n;return}n=n.return}}function Mv(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},El(e)?Sp(n,a):(a=uu(e,n,a,r),a!==null&&(kn(a,e,r),Mp(a,n,r)))}function bp(e,n,a){var r=ei();so(e,n,a,r)}function so(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(El(e))Sp(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,C=f(v,a);if(u.hasEagerState=!0,u.eagerState=C,Yn(C,v))return al(e,n,u,0),Wt===null&&il(),!1}catch{}finally{}if(a=uu(e,n,u,r),a!==null)return kn(a,e,r),Mp(a,n,r),!0}return!1}function Wu(e,n,a,r){if(r={lane:2,revertLane:Af(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},El(e)){if(n)throw Error(s(479))}else n=uu(e,a,r,2),n!==null&&kn(n,e,2)}function El(e){var n=e.alternate;return e===ft||n!==null&&n===ft}function Sp(e,n){qs=gl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Mp(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Or(e,a)}}var ro={readContext:An,use:yl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};ro.useEffectEvent=$t;var Ep={readContext:An,use:yl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Sl(4194308,4,fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Sl(4194308,4,e,n)},useInsertionEffect:function(e,n){Sl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(hs){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var u=a(n);if(hs){We(!0);try{a(n)}finally{We(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=Mv.bind(null,ft,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Hu(e);var n=e.queue,a=bp.bind(null,ft,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ku,useDeferredValue:function(e,n){var a=On();return ju(a,e,n)},useTransition:function(){var e=Hu(!1);return e=xp.bind(null,ft,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ft,u=On();if(Tt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Wt===null)throw Error(s(349));(bt&127)!==0||X0(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,op(W0.bind(null,r,f,e),[e]),r.flags|=2048,Ys(9,{destroy:void 0},q0.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=Wt.identifierPrefix;if(Tt){var a=Ci,r=Ri;a=(r&~(1<<32-ke(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=_l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=xv++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:qu,useFormState:np,useActionState:np,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Wu.bind(null,ft,!0,a),a.dispatch=n,[e,n]},useMemoCache:Iu,useCacheRefresh:function(){return On().memoizedState=Sv.bind(null,ft)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Yu={readContext:An,use:yl,useCallback:hp,useContext:An,useEffect:Vu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:bl,useRef:rp,useState:function(){return bl(qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=sn();return mp(a,Gt.memoizedState,e,n)},useTransition:function(){var e=bl(qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:j0,useId:vp,useHostTransitionStatus:qu,useFormState:ip,useActionState:ip,useOptimistic:function(e,n){var a=sn();return K0(a,Gt,e,n)},useMemoCache:Iu,useCacheRefresh:yp};Yu.useEffectEvent=lp;var Tp={readContext:An,use:yl,useCallback:hp,useContext:An,useEffect:Vu,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:up,useMemo:pp,useReducer:Bu,useRef:rp,useState:function(){return Bu(qi)},useDebugValue:ku,useDeferredValue:function(e,n){var a=sn();return Gt===null?ju(a,e,n):mp(a,Gt.memoizedState,e,n)},useTransition:function(){var e=Bu(qi)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:ao(e),n]},useSyncExternalStore:j0,useId:vp,useHostTransitionStatus:qu,useFormState:sp,useActionState:sp,useOptimistic:function(e,n){var a=sn();return Gt!==null?K0(a,Gt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Iu,useCacheRefresh:yp};Tp.useEffectEvent=lp;function Zu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ku={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ma(r);u.payload=n,a!=null&&(u.callback=a),n=Ea(e,u,r),n!==null&&(kn(n,e,r),eo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ma(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ea(e,u,r),n!==null&&(kn(n,e,r),eo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=Ma(a);r.tag=2,n!=null&&(r.callback=n),n=Ea(e,r,a),n!==null&&(kn(n,e,a),eo(n,e,a))}};function Ap(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!qr(a,r)||!qr(u,f):!0}function Rp(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Ku.enqueueReplaceState(n,n.state,null)}function ps(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Cp(e){nl(e)}function wp(e){console.error(e)}function Dp(e){nl(e)}function Tl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Np(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Qu(e,n,a){return a=Ma(a),a.tag=3,a.payload={element:null},a.callback=function(){Tl(e,n)},a}function Up(e){return e=Ma(e),e.tag=3,e}function Lp(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){Np(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){Np(n,a,r),typeof u!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function Ev(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Hs(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Il():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Mf(e,r,u)),!1;case 22:return a.flags|=65536,r===dl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Mf(e,r,u)),!1}throw Error(s(435,a.tag))}return Mf(e,r,u),Il(),!1}if(Tt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==xu&&(e=Error(s(422),{cause:r}),Zr(ri(e,a)))):(r!==xu&&(n=Error(s(423),{cause:r}),Zr(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ri(r,a),u=Qu(e.stateNode,r,u),Ru(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),mo===null?mo=[f]:mo.push(f),en!==4&&(en=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Qu(a.stateNode,r,e),Ru(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Da===null||!Da.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Up(u),Lp(u,e,a,r),Ru(a,u),!1}a=a.return}while(a!==null);return!1}var Ju=Error(s(461)),un=!1;function Rn(e,n,a,r){n.child=e===null?I0(n,null,a,r):ds(n,e.child,a,r)}function Op(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var C in r)C!=="ref"&&(v[C]=r[C])}else v=r;return ls(n),r=Lu(e,n,a,v,f,u),C=Ou(),e!==null&&!un?(zu(e,n,u),Wi(e,n,u)):(Tt&&C&&pu(n),n.flags|=1,Rn(e,n,r,u),n.child)}function zp(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!fu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Pp(e,n,f,r,u)):(e=rl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!of(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:qr,a(v,r)&&e.ref===n.ref)return Wi(e,n,u)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function Pp(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(qr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,of(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Wi(e,n,u)}return $u(e,n,a,r,u)}function Ip(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return Fp(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&ul(n,f!==null?f.cachePool:null),f!==null?H0(n,f):wu(),G0(n);else return r=n.lanes=536870912,Fp(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ul(n,f.cachePool),H0(n,f),Aa(),n.memoizedState=null):(e!==null&&ul(n,null),wu(),Aa());return Rn(e,n,u,a),n.child}function oo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fp(e,n,a,r,u){var f=Mu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&ul(n,null),wu(),G0(n),e!==null&&Hs(e,n,r,!0),n.childLanes=u,null}function Al(e,n){return n=Cl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Bp(e,n,a){return ds(n,e.child,null,a),e=Al(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function Tv(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Tt){if(r.mode==="hidden")return e=Al(n,r),n.lanes=536870912,oo(null,e);if(Nu(n),(e=Kt)?(e=Qm(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=S0(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw ya(n);return n.lanes=536870912,null}return Al(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Nu(n),u)if(n.flags&256)n.flags&=-257,n=Bp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Hs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=Wt,r!==null&&(v=zr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,as(e,v),kn(r,e,v),Ju;Il(),n=Bp(e,n,a)}else e=f.treeContext,Kt=fi(v.nextSibling),Tn=n,Tt=!0,va=null,ci=!1,e!==null&&T0(n,e),n=Al(n,r),n.flags|=4096;return n}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function $u(e,n,a,r,u){return ls(n),a=Lu(e,n,a,r,void 0,u),r=Ou(),e!==null&&!un?(zu(e,n,u),Wi(e,n,u)):(Tt&&r&&pu(n),n.flags|=1,Rn(e,n,a,u),n.child)}function Hp(e,n,a,r,u,f){return ls(n),n.updateQueue=null,a=k0(n,r,a,u),V0(e),r=Ou(),e!==null&&!un?(zu(e,n,f),Wi(e,n,f)):(Tt&&r&&pu(n),n.flags|=1,Rn(e,n,a,f),n.child)}function Gp(e,n,a,r,u){if(ls(n),n.stateNode===null){var f=Ps,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ku,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Tu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Ps,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Zu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Ku.enqueueReplaceState(f,f.state,null),no(n,r,f,u),to(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,k=ps(a,C);f.props=k;var ce=f.context,ge=a.contextType;v=Ps,typeof ge=="object"&&ge!==null&&(v=An(ge));var be=a.getDerivedStateFromProps;ge=typeof be=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ge||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||ce!==v)&&Rp(n,f,r,v),Sa=!1;var fe=n.memoizedState;f.state=fe,no(n,r,f,u),to(),ce=n.memoizedState,C||fe!==ce||Sa?(typeof be=="function"&&(Zu(n,a,be,r),ce=n.memoizedState),(k=Sa||Ap(n,a,k,r,fe,ce,v))?(ge||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=ce),f.props=r,f.state=ce,f.context=v,r=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Au(e,n),v=n.memoizedProps,ge=ps(a,v),f.props=ge,be=n.pendingProps,fe=f.context,ce=a.contextType,k=Ps,typeof ce=="object"&&ce!==null&&(k=An(ce)),C=a.getDerivedStateFromProps,(ce=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==be||fe!==k)&&Rp(n,f,r,k),Sa=!1,fe=n.memoizedState,f.state=fe,no(n,r,f,u),to();var me=n.memoizedState;v!==be||fe!==me||Sa||e!==null&&e.dependencies!==null&&ll(e.dependencies)?(typeof C=="function"&&(Zu(n,a,C,r),me=n.memoizedState),(ge=Sa||Ap(n,a,ge,r,fe,me,k)||e!==null&&e.dependencies!==null&&ll(e.dependencies))?(ce||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,me,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,me,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=me),f.props=r,f.state=me,f.context=k,r=ge):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&fe===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Rl(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=ds(n,e.child,null,u),n.child=ds(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Wi(e,n,u),e}function Vp(e,n,a,r){return rs(),n.flags|=256,Rn(e,n,a,r),n.child}var ef={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function tf(e){return{baseLanes:e,cachePool:N0()}}function nf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function kp(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Tt){if(u?Ta(n):Aa(),(e=Kt)?(e=Qm(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:_a!==null?{id:Ri,overflow:Ci}:null,retryLane:536870912,hydrationErrors:null},a=S0(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw ya(n);return Bf(e)?n.lanes=32:n.lanes=536870912,null}var C=r.children;return r=r.fallback,u?(Aa(),u=n.mode,C=Cl({mode:"hidden",children:C},u),r=ss(r,u,a,null),C.return=n,r.return=n,C.sibling=r,n.child=C,r=n.child,r.memoizedState=tf(a),r.childLanes=nf(e,v,a),n.memoizedState=ef,oo(null,r)):(Ta(n),af(n,C))}var k=e.memoizedState;if(k!==null&&(C=k.dehydrated,C!==null)){if(f)n.flags&256?(Ta(n),n.flags&=-257,n=sf(e,n,a)):n.memoizedState!==null?(Aa(),n.child=e.child,n.flags|=128,n=null):(Aa(),C=r.fallback,u=n.mode,r=Cl({mode:"visible",children:r.children},u),C=ss(C,u,a,null),C.flags|=2,r.return=n,C.return=n,r.sibling=C,n.child=r,ds(n,e.child,null,a),r=n.child,r.memoizedState=tf(a),r.childLanes=nf(e,v,a),n.memoizedState=ef,n=oo(null,r));else if(Ta(n),Bf(C)){if(v=C.nextSibling&&C.nextSibling.dataset,v)var ce=v.dgst;v=ce,r=Error(s(419)),r.stack="",r.digest=v,Zr({value:r,source:null,stack:null}),n=sf(e,n,a)}else if(un||Hs(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=Wt,v!==null&&(r=zr(v,a),r!==0&&r!==k.retryLane))throw k.retryLane=r,as(e,r),kn(v,e,r),Ju;Ff(C)||Il(),n=sf(e,n,a)}else Ff(C)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,Kt=fi(C.nextSibling),Tn=n,Tt=!0,va=null,ci=!1,e!==null&&T0(n,e),n=af(n,r.children),n.flags|=4096);return n}return u?(Aa(),C=r.fallback,u=n.mode,k=e.child,ce=k.sibling,r=Gi(k,{mode:"hidden",children:r.children}),r.subtreeFlags=k.subtreeFlags&65011712,ce!==null?C=Gi(ce,C):(C=ss(C,u,a,null),C.flags|=2),C.return=n,r.return=n,r.sibling=C,n.child=r,oo(null,r),r=n.child,C=e.child.memoizedState,C===null?C=tf(a):(u=C.cachePool,u!==null?(k=ln._currentValue,u=u.parent!==k?{parent:k,pool:k}:u):u=N0(),C={baseLanes:C.baseLanes|a,cachePool:u}),r.memoizedState=C,r.childLanes=nf(e,v,a),n.memoizedState=ef,oo(e.child,r)):(Ta(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function af(e,n){return n=Cl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Cl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function sf(e,n,a){return ds(n,e.child,null,a),e=af(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jp(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),vu(e.return,n,a)}function rf(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function Xp(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=an.current,C=(v&2)!==0;if(C?(v=v&1|2,n.flags|=128):v&=1,se(an,v),Rn(e,n,r,a),r=Tt?Yr:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jp(e,a,n);else if(e.tag===19)jp(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&xl(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),rf(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&xl(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}rf(n,!0,a,null,f,r);break;case"together":rf(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),wa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function of(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ll(e)))}function Av(e,n,a){switch(n.tag){case 3:_e(n,n.stateNode.containerInfo),ba(n,ln,e.memoizedState.cache),rs();break;case 27:case 5:Ue(n);break;case 4:_e(n,n.stateNode.containerInfo);break;case 10:ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Nu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?kp(e,n,a):(Ta(n),e=Wi(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Hs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return Xp(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),se(an,an.current),r)break;return null;case 22:return n.lanes=0,Ip(e,n,a,n.pendingProps);case 24:ba(n,ln,e.memoizedState.cache)}return Wi(e,n,a)}function qp(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!of(e,a)&&(n.flags&128)===0)return un=!1,Av(e,n,a);un=(e.flags&131072)!==0}else un=!1,Tt&&(n.flags&1048576)!==0&&E0(n,Yr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=us(n.elementType),n.type=e,typeof e=="function")fu(e)?(r=ps(e,r),n.tag=1,n=Gp(null,n,e,r,a)):(n.tag=0,n=$u(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===P){n.tag=11,n=Op(null,n,e,r,a);break e}else if(u===H){n.tag=14,n=zp(null,n,e,r,a);break e}}throw n=re(e)||e,Error(s(306,n,""))}}return n;case 0:return $u(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ps(r,n.pendingProps),Gp(e,n,r,u,a);case 3:e:{if(_e(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Au(e,n),no(n,r,null,a);var v=n.memoizedState;if(r=v.cache,ba(n,ln,r),r!==f.cache&&yu(n,[ln],a,!0),to(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Vp(e,n,r,a);break e}else if(r!==u){u=ri(Error(s(424)),n),Zr(u),n=Vp(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=fi(e.firstChild),Tn=n,Tt=!0,va=null,ci=!0,a=I0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(rs(),r===u){n=Wi(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Rl(e,n),e===null?(a=ix(n.type,null,n.pendingProps,null))?n.memoizedState=a:Tt||(a=n.type,e=n.pendingProps,r=jl(K.current).createElement(a),r[on]=n,r[hn]=e,Cn(r,a,e),ue(r),n.stateNode=r):n.memoizedState=ix(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ue(n),e===null&&Tt&&(r=n.stateNode=ex(n.type,n.pendingProps,K.current),Tn=n,ci=!0,u=Kt,Oa(n.type)?(Hf=u,Kt=fi(r.firstChild)):Kt=u),Rn(e,n,n.pendingProps.children,a),Rl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Tt&&((u=r=Kt)&&(r=ny(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,Tn=n,Kt=fi(r.firstChild),ci=!1,u=!0):u=!1),u||ya(n)),Ue(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,zf(u,f)?r=null:v!==null&&zf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Lu(e,n,gv,null,null,a),Mo._currentValue=u),Rl(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&Tt&&((e=a=Kt)&&(a=iy(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Kt=null,e=!0):e=!1),e||ya(n)),null;case 13:return kp(e,n,a);case 4:return _e(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=ds(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return Op(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,ba(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,ls(n),u=An(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return zp(e,n,n.type,n.pendingProps,a);case 15:return Pp(e,n,n.type,n.pendingProps,a);case 19:return Xp(e,n,a);case 31:return Tv(e,n,a);case 22:return Ip(e,n,a,n.pendingProps);case 24:return ls(n),r=An(ln),e===null?(u=Mu(),u===null&&(u=Wt,f=bu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Tu(n),ba(n,ln,u)):((e.lanes&a)!==0&&(Au(e,n),no(n,null,null,a),to()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),ba(n,ln,r)):(r=f.cache,ba(n,ln,r),r!==u.cache&&yu(n,[ln],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Yi(e){e.flags|=4}function lf(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(vm())e.flags|=8192;else throw fs=dl,Eu}else e.flags&=-16777217}function Wp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!lx(n))if(vm())e.flags|=8192;else throw fs=dl,Eu}function wl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ht():536870912,e.lanes|=n,Js|=n)}function lo(e,n){if(!Tt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function Rv(e,n,a){var r=n.pendingProps;switch(mu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ji(ln),Ee(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?Yi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Yi(n),f!==null?(Qt(n),Wp(n,f)):(Qt(n),lf(n,u,null,r,a))):f?f!==e.memoizedState?(Yi(n),Qt(n),Wp(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Yi(n),Qt(n),lf(n,u,e,r,a)),null;case 27:if($e(n),a=K.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=pe.current,Bs(n)?A0(n):(e=ex(u,r,a),n.stateNode=e,Yi(n))}return Qt(n),null;case 5:if($e(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=pe.current,Bs(n))A0(n);else{var v=jl(K.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[on]=n,f[hn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Yi(n)}}return Qt(n),lf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Yi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=K.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||km(e.nodeValue,a)),e||ya(n,!0)}else e=jl(e).createTextNode(r),e[on]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Bs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Bs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=gu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),wl(n,n.updateQueue),Qt(n),null);case 4:return Ee(),e===null&&Df(n.stateNode.containerInfo),Qt(n),null;case 10:return ji(n.type),Qt(n),null;case 19:if(X(an),r=n.memoizedState,r===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)lo(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=xl(e),f!==null){for(n.flags|=128,lo(r,!1),e=f.updateQueue,n.updateQueue=e,wl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)b0(a,e),a=a.sibling;return se(an,an.current&1|2),Tt&&Vi(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&T()>Ol&&(n.flags|=128,u=!0,lo(r,!1),n.lanes=4194304)}else{if(!u)if(e=xl(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,wl(n,e),lo(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Tt)return Qt(n),null}else 2*T()-r.renderingStartTime>Ol&&a!==536870912&&(n.flags|=128,u=!0,lo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=T(),e.sibling=null,a=an.current,se(an,u?a&1|2:a&1),Tt&&Vi(n,r.treeForkCount),e):(Qt(n),null);case 22:case 23:return Qn(n),Du(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&wl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&X(cs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ji(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function Cv(e,n){switch(mu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ji(ln),Ee(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return $e(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return X(an),null;case 4:return Ee(),null;case 10:return ji(n.type),null;case 22:case 23:return Qn(n),Du(),e!==null&&X(cs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ji(ln),null;case 25:return null;default:return null}}function Yp(e,n){switch(mu(n),n.tag){case 3:ji(ln),Ee();break;case 26:case 27:case 5:$e(n);break;case 4:Ee();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:X(an);break;case 10:ji(n.type);break;case 22:case 23:Qn(n),Du(),e!==null&&X(cs);break;case 24:ji(ln)}}function co(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(C){Bt(n,n.return,C)}}function Ra(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,C=v.destroy;if(C!==void 0){v.destroy=void 0,u=n;var k=a,ce=C;try{ce()}catch(ge){Bt(u,k,ge)}}}r=r.next}while(r!==f)}}catch(ge){Bt(n,n.return,ge)}}function Zp(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{B0(n,a)}catch(r){Bt(e,e.return,r)}}}function Kp(e,n,a){a.props=ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Bt(e,n,r)}}function uo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Bt(e,n,u)}}function wi(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Bt(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Bt(e,n,u)}else a.current=null}function Qp(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Bt(e,e.return,u)}}function cf(e,n,a){try{var r=e.stateNode;Kv(r,e.type,a,n),r[hn]=n}catch(u){Bt(e,e.return,u)}}function Jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Oa(e.type)||e.tag===4}function uf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Oa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ff(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(r!==4&&(r===27&&Oa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(ff(e,n,a),e=e.sibling;e!==null;)ff(e,n,a),e=e.sibling}function Dl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&Oa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Dl(e,n,a),e=e.sibling;e!==null;)Dl(e,n,a),e=e.sibling}function $p(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[on]=e,n[hn]=a}catch(f){Bt(e,e.return,f)}}var Zi=!1,fn=!1,df=!1,em=typeof WeakSet=="function"?WeakSet:Set,bn=null;function wv(e,n){if(e=e.containerInfo,Lf=Ql,e=d0(e),au(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,C=-1,k=-1,ce=0,ge=0,be=e,fe=null;t:for(;;){for(var me;be!==a||u!==0&&be.nodeType!==3||(C=v+u),be!==f||r!==0&&be.nodeType!==3||(k=v+r),be.nodeType===3&&(v+=be.nodeValue.length),(me=be.firstChild)!==null;)fe=be,be=me;for(;;){if(be===e)break t;if(fe===a&&++ce===u&&(C=v),fe===f&&++ge===r&&(k=v),(me=be.nextSibling)!==null)break;be=fe,fe=be.parentNode}be=me}a=C===-1||k===-1?null:{start:C,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Of={focusedElem:e,selectionRange:a},Ql=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var Ge=ps(a.type,u);e=r.getSnapshotBeforeUpdate(Ge,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(it){Bt(a,a.return,it)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)If(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":If(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function tm(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),r&4&&co(5,a);break;case 1:if(Qi(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Bt(a,a.return,v)}else{var u=ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Bt(a,a.return,v)}}r&64&&Zp(a),r&512&&uo(a,a.return);break;case 3:if(Qi(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{B0(e,n)}catch(v){Bt(a,a.return,v)}}break;case 27:n===null&&r&4&&$p(a);case 26:case 5:Qi(e,a),n===null&&r&4&&Qp(a),r&512&&uo(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),r&4&&am(e,a);break;case 13:Qi(e,a),r&4&&sm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Fv.bind(null,a),ay(e,a))));break;case 22:if(r=a.memoizedState!==null||Zi,!r){n=n!==null&&n.memoizedState!==null||fn,u=Zi;var f=fn;Zi=r,(fn=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),Zi=u,fn=f}break;case 30:break;default:Qi(e,a)}}function nm(e){var n=e.alternate;n!==null&&(e.alternate=null,nm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Fr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Bn=!1;function Ki(e,n,a){for(a=a.child;a!==null;)im(e,n,a),a=a.sibling}function im(e,n,a){if(Ce&&typeof Ce.onCommitFiberUnmount=="function")try{Ce.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:fn||wi(a,n),Ki(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||wi(a,n);var r=Jt,u=Bn;Oa(a.type)&&(Jt=a.stateNode,Bn=!1),Ki(e,n,a),yo(a.stateNode),Jt=r,Bn=u;break;case 5:fn||wi(a,n);case 6:if(r=Jt,u=Bn,Jt=null,Ki(e,n,a),Jt=r,Bn=u,Jt!==null)if(Bn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Bn?(e=Jt,Zm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rr(e)):Zm(Jt,a.stateNode));break;case 4:r=Jt,u=Bn,Jt=a.stateNode.containerInfo,Bn=!0,Ki(e,n,a),Jt=r,Bn=u;break;case 0:case 11:case 14:case 15:Ra(2,a,n),fn||Ra(4,a,n),Ki(e,n,a);break;case 1:fn||(wi(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&Kp(a,n,r)),Ki(e,n,a);break;case 21:Ki(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,Ki(e,n,a),fn=r;break;default:Ki(e,n,a)}}function am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rr(e)}catch(a){Bt(n,n.return,a)}}}function sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rr(e)}catch(a){Bt(n,n.return,a)}}function Dv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new em),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new em),n;default:throw Error(s(435,e.tag))}}function Nl(e,n){var a=Dv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Bv.bind(null,e,r);r.then(u,u)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,C=v;e:for(;C!==null;){switch(C.tag){case 27:if(Oa(C.type)){Jt=C.stateNode,Bn=!1;break e}break;case 5:Jt=C.stateNode,Bn=!1;break e;case 3:case 4:Jt=C.stateNode.containerInfo,Bn=!0;break e}C=C.return}if(Jt===null)throw Error(s(160));im(f,v,u),Jt=null,Bn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)rm(n,e),n=n.sibling}var vi=null;function rm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),r&4&&(Ra(3,e,e.return),co(3,e),Ra(5,e,e.return));break;case 1:Hn(n,e),Gn(e),r&512&&(fn||a===null||wi(a,a.return)),r&64&&Zi&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=vi;if(Hn(n,e),Gn(e),r&512&&(fn||a===null||wi(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[es]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[on]=e,ue(f),r=f;break e;case"link":var v=rx("link","href",u).get(r+(a.href||""));if(v){for(var C=0;C<v.length;C++)if(f=v[C],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(C,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=rx("meta","content",u).get(r+(a.content||""))){for(C=0;C<v.length;C++)if(f=v[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(C,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,ue(f),r=f}e.stateNode=r}else ox(u,e.type,e.stateNode);else e.stateNode=sx(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ox(u,e.type,e.stateNode):sx(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&cf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),r&512&&(fn||a===null||wi(a,a.return)),a!==null&&r&4&&cf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),r&512&&(fn||a===null||wi(a,a.return)),e.flags&32){u=e.stateNode;try{Ai(u,"")}catch(Ge){Bt(e,e.return,Ge)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,cf(e,u,a!==null?a.memoizedProps:u)),r&1024&&(df=!0);break;case 6:if(Hn(n,e),Gn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(Ge){Bt(e,e.return,Ge)}}break;case 3:if(Wl=null,u=vi,vi=Xl(n.containerInfo),Hn(n,e),vi=u,Gn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{rr(n.containerInfo)}catch(Ge){Bt(e,e.return,Ge)}df&&(df=!1,om(e));break;case 4:r=vi,vi=Xl(e.stateNode.containerInfo),Hn(n,e),Gn(e),vi=r;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ll=T()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 22:u=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,ce=Zi,ge=fn;if(Zi=ce||u,fn=ge||k,Hn(n,e),fn=ge,Zi=ce,Gn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||k||Zi||fn||ms(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(f=k.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{C=k.stateNode;var be=k.memoizedProps.style,fe=be!=null&&be.hasOwnProperty("display")?be.display:null;C.style.display=fe==null||typeof fe=="boolean"?"":(""+fe).trim()}}catch(Ge){Bt(k,k.return,Ge)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=u?"":k.memoizedProps}catch(Ge){Bt(k,k.return,Ge)}}}else if(n.tag===18){if(a===null){k=n;try{var me=k.stateNode;u?Km(me,!0):Km(k.stateNode,!1)}catch(Ge){Bt(k,k.return,Ge)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Nl(e,a))));break;case 19:Hn(n,e),Gn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Nl(e,r)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Jp(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=uf(e);Dl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ai(v,""),a.flags&=-33);var C=uf(e);Dl(e,C,v);break;case 3:case 4:var k=a.stateNode.containerInfo,ce=uf(e);ff(e,ce,k);break;default:throw Error(s(161))}}catch(ge){Bt(e,e.return,ge)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)tm(e,n.alternate,n),n=n.sibling}function ms(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ra(4,n,n.return),ms(n);break;case 1:wi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Kp(n,n.return,a),ms(n);break;case 27:yo(n.stateNode);case 26:case 5:wi(n,n.return),ms(n);break;case 22:n.memoizedState===null&&ms(n);break;case 30:ms(n);break;default:ms(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(u,f,a),co(4,f);break;case 1:if(Ji(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ce){Bt(r,r.return,ce)}if(r=f,u=r.updateQueue,u!==null){var C=r.stateNode;try{var k=u.shared.hiddenCallbacks;if(k!==null)for(u.shared.hiddenCallbacks=null,u=0;u<k.length;u++)F0(k[u],C)}catch(ce){Bt(r,r.return,ce)}}a&&v&64&&Zp(f),uo(f,f.return);break;case 27:$p(f);case 26:case 5:Ji(u,f,a),a&&r===null&&v&4&&Qp(f),uo(f,f.return);break;case 12:Ji(u,f,a);break;case 31:Ji(u,f,a),a&&v&4&&am(u,f);break;case 13:Ji(u,f,a),a&&v&4&&sm(u,f);break;case 22:f.memoizedState===null&&Ji(u,f,a),uo(f,f.return);break;case 30:break;default:Ji(u,f,a)}n=n.sibling}}function hf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Kr(a))}function pf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e))}function yi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)lm(e,n,a,r),n=n.sibling}function lm(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:yi(e,n,a,r),u&2048&&co(9,n);break;case 1:yi(e,n,a,r);break;case 3:yi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Kr(e)));break;case 12:if(u&2048){yi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,C=f.onPostCommit;typeof C=="function"&&C(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){Bt(n,n.return,k)}}else yi(e,n,a,r);break;case 31:yi(e,n,a,r);break;case 13:yi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?yi(e,n,a,r):fo(e,n):f._visibility&2?yi(e,n,a,r):(f._visibility|=2,Zs(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&hf(v,n);break;case 24:yi(e,n,a,r),u&2048&&pf(n.alternate,n);break;default:yi(e,n,a,r)}}function Zs(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,C=a,k=r,ce=v.flags;switch(v.tag){case 0:case 11:case 15:Zs(f,v,C,k,u),co(8,v);break;case 23:break;case 22:var ge=v.stateNode;v.memoizedState!==null?ge._visibility&2?Zs(f,v,C,k,u):fo(f,v):(ge._visibility|=2,Zs(f,v,C,k,u)),u&&ce&2048&&hf(v.alternate,v);break;case 24:Zs(f,v,C,k,u),u&&ce&2048&&pf(v.alternate,v);break;default:Zs(f,v,C,k,u)}n=n.sibling}}function fo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:fo(a,r),u&2048&&hf(r.alternate,r);break;case 24:fo(a,r),u&2048&&pf(r.alternate,r);break;default:fo(a,r)}n=n.sibling}}var ho=8192;function Ks(e,n,a){if(e.subtreeFlags&ho)for(e=e.child;e!==null;)cm(e,n,a),e=e.sibling}function cm(e,n,a){switch(e.tag){case 26:Ks(e,n,a),e.flags&ho&&e.memoizedState!==null&&xy(a,vi,e.memoizedState,e.memoizedProps);break;case 5:Ks(e,n,a);break;case 3:case 4:var r=vi;vi=Xl(e.stateNode.containerInfo),Ks(e,n,a),vi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=ho,ho=16777216,Ks(e,n,a),ho=r):Ks(e,n,a));break;default:Ks(e,n,a)}}function um(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function po(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,dm(r,e)}um(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)fm(e),e=e.sibling}function fm(e){switch(e.tag){case 0:case 11:case 15:po(e),e.flags&2048&&Ra(9,e,e.return);break;case 3:po(e);break;case 12:po(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ul(e)):po(e);break;default:po(e)}}function Ul(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];bn=r,dm(r,e)}um(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ra(8,n,n.return),Ul(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ul(n));break;default:Ul(n)}e=e.sibling}}function dm(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Ra(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Kr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,bn=r;else e:for(a=e;bn!==null;){r=bn;var u=r.sibling,f=r.return;if(nm(r),r===a){bn=null;break e}if(u!==null){u.return=f,bn=u;break e}bn=f}}}var Nv={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},Uv=typeof WeakMap=="function"?WeakMap:Map,zt=0,Wt=null,_t=null,bt=0,Ft=0,Jn=null,Ca=!1,Qs=!1,mf=!1,$i=0,en=0,wa=0,xs=0,xf=0,$n=0,Js=0,mo=null,Vn=null,gf=!1,Ll=0,hm=0,Ol=1/0,zl=null,Da=null,mn=0,Na=null,$s=null,ea=0,_f=0,vf=null,pm=null,xo=0,yf=null;function ei(){return(zt&2)!==0&&bt!==0?bt&-bt:I.T!==null?Af():Pr()}function mm(){if($n===0)if((bt&536870912)===0||Tt){var e=De;De<<=1,(De&3932160)===0&&(De=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function kn(e,n,a){(e===Wt&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)&&(er(e,0),Ua(e,bt,$n,!1)),wn(e,a),((zt&2)===0||e!==Wt)&&(e===Wt&&((zt&2)===0&&(xs|=a),en===4&&Ua(e,bt,$n,!1)),Di(e))}function xm(e,n,a){if((zt&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),u=r?zv(e,n):Sf(e,n,!0),f=r;do{if(u===0){Qs&&!r&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Lv(a)){u=Sf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var C=e;u=mo;var k=C.current.memoizedState.isDehydrated;if(k&&(er(C,v).flags|=256),v=Sf(C,v,!1),v!==2){if(mf&&!k){C.errorRecoveryDisabledLanes|=f,xs|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){er(e,0),Ua(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ua(r,n,$n,!Ca);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ll+300-T(),10<u)){if(Ua(r,n,$n,!Ca),Se(r,0,!0)!==0)break e;ea=n,r.timeoutHandle=Wm(gm.bind(null,r,a,Vn,zl,gf,n,$n,xs,Js,Ca,f,"Throttled",-0,0),u);break e}gm(r,a,Vn,zl,gf,n,$n,xs,Js,Ca,f,null,-0,0)}}break}while(!0);Di(e)}function gm(e,n,a,r,u,f,v,C,k,ce,ge,be,fe,me){if(e.timeoutHandle=-1,be=n.subtreeFlags,be&8192||(be&16785408)===16785408){be={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},cm(n,f,be);var Ge=(f&62914560)===f?Ll-T():(f&4194048)===f?hm-T():0;if(Ge=gy(be,Ge),Ge!==null){ea=f,e.cancelPendingCommit=Ge(Tm.bind(null,e,n,f,a,r,u,v,C,k,ge,be,null,fe,me)),Ua(e,f,v,!ce);return}}Tm(e,n,f,a,r,u,v,C,k)}function Lv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,r){n&=~xf,n&=~xs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-ke(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&Wo(e,a,n)}function Pl(){return(zt&6)===0?(go(0),!1):!0}function bf(){if(_t!==null){if(Ft===0)var e=_t.return;else e=_t,ki=os=null,Pu(e),js=null,Jr=0,e=_t;for(;e!==null;)Yp(e.alternate,e),e=e.return;_t=null}}function er(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,$v(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ea=0,bf(),Wt=e,_t=a=Gi(e.current,null),bt=n,Ft=0,Jn=null,Ca=!1,Qs=Be(e,n),mf=!1,Js=$n=xf=xs=wa=en=0,Vn=mo=null,gf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-ke(r),f=1<<u;n|=e[u],r&=~f}return $i=n,il(),a}function _m(e,n){ft=null,I.H=ro,n===ks||n===fl?(n=O0(),Ft=3):n===Eu?(n=O0(),Ft=4):Ft=n===Ju?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,_t===null&&(en=1,Tl(e,ri(n,e.current)))}function vm(){var e=Kn.current;return e===null?!0:(bt&4194048)===bt?ui===null:(bt&62914560)===bt||(bt&536870912)!==0?e===ui:!1}function ym(){var e=I.H;return I.H=ro,e===null?ro:e}function bm(){var e=I.A;return I.A=Nv,e}function Il(){en=4,Ca||(bt&4194048)!==bt&&Kn.current!==null||(Qs=!0),(wa&134217727)===0&&(xs&134217727)===0||Wt===null||Ua(Wt,bt,$n,!1)}function Sf(e,n,a){var r=zt;zt|=2;var u=ym(),f=bm();(Wt!==e||bt!==n)&&(zl=null,er(e,n)),n=!1;var v=en;e:do try{if(Ft!==0&&_t!==null){var C=_t,k=Jn;switch(Ft){case 8:bf(),v=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var ce=Ft;if(Ft=0,Jn=null,tr(e,C,k,ce),a&&Qs){v=0;break e}break;default:ce=Ft,Ft=0,Jn=null,tr(e,C,k,ce)}}Ov(),v=en;break}catch(ge){_m(e,ge)}while(!0);return n&&e.shellSuspendCounter++,ki=os=null,zt=r,I.H=u,I.A=f,_t===null&&(Wt=null,bt=0,il()),v}function Ov(){for(;_t!==null;)Sm(_t)}function zv(e,n){var a=zt;zt|=2;var r=ym(),u=bm();Wt!==e||bt!==n?(zl=null,Ol=T()+500,er(e,n)):Qs=Be(e,n);e:do try{if(Ft!==0&&_t!==null){n=_t;var f=Jn;t:switch(Ft){case 1:Ft=0,Jn=null,tr(e,n,f,1);break;case 2:case 9:if(U0(f)){Ft=0,Jn=null,Mm(n);break}n=function(){Ft!==2&&Ft!==9||Wt!==e||(Ft=7),Di(e)},f.then(n,n);break e;case 3:Ft=7;break e;case 4:Ft=5;break e;case 7:U0(f)?(Ft=0,Jn=null,Mm(n)):(Ft=0,Jn=null,tr(e,n,f,7));break;case 5:var v=null;switch(_t.tag){case 26:v=_t.memoizedState;case 5:case 27:var C=_t;if(v?lx(v):C.stateNode.complete){Ft=0,Jn=null;var k=C.sibling;if(k!==null)_t=k;else{var ce=C.return;ce!==null?(_t=ce,Fl(ce)):_t=null}break t}}Ft=0,Jn=null,tr(e,n,f,5);break;case 6:Ft=0,Jn=null,tr(e,n,f,6);break;case 8:bf(),en=6;break e;default:throw Error(s(462))}}Pv();break}catch(ge){_m(e,ge)}while(!0);return ki=os=null,I.H=r,I.A=u,zt=a,_t!==null?0:(Wt=null,bt=0,il(),en)}function Pv(){for(;_t!==null&&!ot();)Sm(_t)}function Sm(e){var n=qp(e.alternate,e,$i);e.memoizedProps=e.pendingProps,n===null?Fl(e):_t=n}function Mm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Hp(a,n,n.pendingProps,n.type,void 0,bt);break;case 11:n=Hp(a,n,n.pendingProps,n.type.render,n.ref,bt);break;case 5:Pu(n);default:Yp(a,n),n=_t=b0(n,$i),n=qp(a,n,$i)}e.memoizedProps=e.pendingProps,n===null?Fl(e):_t=n}function tr(e,n,a,r){ki=os=null,Pu(n),js=null,Jr=0;var u=n.return;try{if(Ev(e,u,n,a,bt)){en=1,Tl(e,ri(a,e.current)),_t=null;return}}catch(f){if(u!==null)throw _t=u,f;en=1,Tl(e,ri(a,e.current)),_t=null;return}n.flags&32768?(Tt||r===1?e=!0:Qs||(bt&536870912)!==0?e=!1:(Ca=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Em(n,e)):Fl(n)}function Fl(e){var n=e;do{if((n.flags&32768)!==0){Em(n,Ca);return}e=n.return;var a=Rv(n.alternate,n,$i);if(a!==null){_t=a;return}if(n=n.sibling,n!==null){_t=n;return}_t=n=e}while(n!==null);en===0&&(en=5)}function Em(e,n){do{var a=Cv(e.alternate,e);if(a!==null){a.flags&=32767,_t=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){_t=e;return}_t=e=a}while(e!==null);en=6,_t=null}function Tm(e,n,a,r,u,f,v,C,k){e.cancelPendingCommit=null;do Bl();while(mn!==0);if((zt&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=cu,qn(e,a,f,v,C,k),e===Wt&&(_t=Wt=null,bt=0),$s=n,Na=e,ea=a,_f=f,vf=u,pm=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Hv(xe,function(){return Dm(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=I.T,I.T=null,u=G.p,G.p=2,v=zt,zt|=4;try{wv(e,n,a)}finally{zt=v,G.p=u,I.T=r}}mn=1,Am(),Rm(),Cm()}}function Am(){if(mn===1){mn=0;var e=Na,n=$s,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=I.T,I.T=null;var r=G.p;G.p=2;var u=zt;zt|=4;try{rm(n,e);var f=Of,v=d0(e.containerInfo),C=f.focusedElem,k=f.selectionRange;if(v!==C&&C&&C.ownerDocument&&f0(C.ownerDocument.documentElement,C)){if(k!==null&&au(C)){var ce=k.start,ge=k.end;if(ge===void 0&&(ge=ce),"selectionStart"in C)C.selectionStart=ce,C.selectionEnd=Math.min(ge,C.value.length);else{var be=C.ownerDocument||document,fe=be&&be.defaultView||window;if(fe.getSelection){var me=fe.getSelection(),Ge=C.textContent.length,it=Math.min(k.start,Ge),kt=k.end===void 0?it:Math.min(k.end,Ge);!me.extend&&it>kt&&(v=kt,kt=it,it=v);var te=u0(C,it),Z=u0(C,kt);if(te&&Z&&(me.rangeCount!==1||me.anchorNode!==te.node||me.anchorOffset!==te.offset||me.focusNode!==Z.node||me.focusOffset!==Z.offset)){var oe=be.createRange();oe.setStart(te.node,te.offset),me.removeAllRanges(),it>kt?(me.addRange(oe),me.extend(Z.node,Z.offset)):(oe.setEnd(Z.node,Z.offset),me.addRange(oe))}}}}for(be=[],me=C;me=me.parentNode;)me.nodeType===1&&be.push({element:me,left:me.scrollLeft,top:me.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<be.length;C++){var ve=be[C];ve.element.scrollLeft=ve.left,ve.element.scrollTop=ve.top}}Ql=!!Lf,Of=Lf=null}finally{zt=u,G.p=r,I.T=a}}e.current=n,mn=2}}function Rm(){if(mn===2){mn=0;var e=Na,n=$s,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=I.T,I.T=null;var r=G.p;G.p=2;var u=zt;zt|=4;try{tm(e,n.alternate,n)}finally{zt=u,G.p=r,I.T=a}}mn=3}}function Cm(){if(mn===4||mn===3){mn=0,F();var e=Na,n=$s,a=ea,r=pm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,$s=Na=null,wm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Da=null),$a(a),n=n.stateNode,Ce&&typeof Ce.onCommitFiberRoot=="function")try{Ce.onCommitFiberRoot(Ae,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=I.T,u=G.p,G.p=2,I.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var C=r[v];f(C.value,{componentStack:C.stack})}}finally{I.T=n,G.p=u}}(ea&3)!==0&&Bl(),Di(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===yf?xo++:(xo=0,yf=e):xo=0,go(0)}}function wm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Kr(n)))}function Bl(){return Am(),Rm(),Cm(),Dm()}function Dm(){if(mn!==5)return!1;var e=Na,n=_f;_f=0;var a=$a(ea),r=I.T,u=G.p;try{G.p=32>a?32:a,I.T=null,a=vf,vf=null;var f=Na,v=ea;if(mn=0,$s=Na=null,ea=0,(zt&6)!==0)throw Error(s(331));var C=zt;if(zt|=4,fm(f.current),lm(f,f.current,v,a),zt=C,go(0,!1),Ce&&typeof Ce.onPostCommitFiberRoot=="function")try{Ce.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{G.p=u,I.T=r,wm(e,n)}}function Nm(e,n,a){n=ri(a,n),n=Qu(e.stateNode,n,2),e=Ea(e,n,2),e!==null&&(wn(e,2),Di(e))}function Bt(e,n,a){if(e.tag===3)Nm(e,e,a);else for(;n!==null;){if(n.tag===3){Nm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Da===null||!Da.has(r))){e=ri(a,e),a=Up(2),r=Ea(n,a,2),r!==null&&(Lp(a,r,n,e),wn(r,2),Di(r));break}}n=n.return}}function Mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Uv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(mf=!0,u.add(a),e=Iv.bind(null,e,n,a),n.then(e,e))}function Iv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(bt&a)===a&&(en===4||en===3&&(bt&62914560)===bt&&300>T()-Ll?(zt&2)===0&&er(e,0):xf|=a,Js===bt&&(Js=0)),Di(e)}function Um(e,n){n===0&&(n=Ht()),e=as(e,n),e!==null&&(wn(e,n),Di(e))}function Fv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Um(e,a)}function Bv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Um(e,a)}function Hv(e,n){return Xt(e,n)}var Hl=null,nr=null,Ef=!1,Gl=!1,Tf=!1,La=0;function Di(e){e!==nr&&e.next===null&&(nr===null?Hl=nr=e:nr=nr.next=e),Gl=!0,Ef||(Ef=!0,Vv())}function go(e,n){if(!Tf&&Gl){Tf=!0;do for(var a=!1,r=Hl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-ke(42|e)+1)-1,f&=u&~(v&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Pm(r,f))}else f=bt,f=Se(r,r===Wt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Be(r,f)||(a=!0,Pm(r,f));r=r.next}while(a);Tf=!1}}function Gv(){Lm()}function Lm(){Gl=Ef=!1;var e=0;La!==0&&Jv()&&(e=La);for(var n=T(),a=null,r=Hl;r!==null;){var u=r.next,f=Om(r,n);f===0?(r.next=null,a===null?Hl=u:a.next=u,u===null&&(nr=a)):(a=r,(e!==0||(f&3)!==0)&&(Gl=!0)),r=u}mn!==0&&mn!==5||go(e),La!==0&&(La=0)}function Om(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-ke(f),C=1<<v,k=u[v];k===-1?((C&a)===0||(C&r)!==0)&&(u[v]=rt(C,n)):k<=n&&(e.expiredLanes|=C),f&=~C}if(n=Wt,a=bt,a=Se(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(Ft===2||Ft===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ze(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ze(r),$a(a)){case 2:case 8:a=Te;break;case 32:a=xe;break;case 268435456:a=ze;break;default:a=xe}return r=zm.bind(null,e),a=Xt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ze(r),e.callbackPriority=2,e.callbackNode=null,2}function zm(e,n){if(mn!==0&&mn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Bl()&&e.callbackNode!==a)return null;var r=bt;return r=Se(e,e===Wt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(xm(e,r,n),Om(e,T()),e.callbackNode!=null&&e.callbackNode===a?zm.bind(null,e):null)}function Pm(e,n){if(Bl())return null;xm(e,n,!0)}function Vv(){ey(function(){(zt&6)!==0?Xt(ye,Gv):Lm()})}function Af(){if(La===0){var e=Gs;e===0&&(e=Le,Le<<=1,(Le&261888)===0&&(Le=256)),La=e}return La}function Im(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Zo(""+e)}function Fm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function kv(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Im((u[hn]||null).action),v=r.submitter;v&&(n=(n=v[hn]||null)?Im(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var C=new $o("action","action",null,r,u);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(La!==0){var k=v?Fm(u,v):new FormData(u);Xu(a,{pending:!0,data:k,method:u.method,action:f},null,k)}}else typeof f=="function"&&(C.preventDefault(),k=v?Fm(u,v):new FormData(u),Xu(a,{pending:!0,data:k,method:u.method,action:f},f,k))},currentTarget:u}]})}}for(var Rf=0;Rf<lu.length;Rf++){var Cf=lu[Rf],jv=Cf.toLowerCase(),Xv=Cf[0].toUpperCase()+Cf.slice(1);_i(jv,"on"+Xv)}_i(m0,"onAnimationEnd"),_i(x0,"onAnimationIteration"),_i(g0,"onAnimationStart"),_i("dblclick","onDoubleClick"),_i("focusin","onFocus"),_i("focusout","onBlur"),_i(ov,"onTransitionRun"),_i(lv,"onTransitionStart"),_i(cv,"onTransitionCancel"),_i(_0,"onTransitionEnd"),Fe("onMouseEnter",["mouseout","mouseover"]),Fe("onMouseLeave",["mouseout","mouseover"]),Fe("onPointerEnter",["pointerout","pointerover"]),Fe("onPointerLeave",["pointerout","pointerover"]),Oe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Oe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Oe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Oe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Oe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),qv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_o));function Bm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var C=r[v],k=C.instance,ce=C.currentTarget;if(C=C.listener,k!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(ge){nl(ge)}u.currentTarget=null,f=k}else for(v=0;v<r.length;v++){if(C=r[v],k=C.instance,ce=C.currentTarget,C=C.listener,k!==f&&u.isPropagationStopped())break e;f=C,u.currentTarget=ce;try{f(u)}catch(ge){nl(ge)}u.currentTarget=null,f=k}}}}function vt(e,n){var a=n[ws];a===void 0&&(a=n[ws]=new Set);var r=e+"__bubble";a.has(r)||(Hm(n,e,2,!1),a.add(r))}function wf(e,n,a){var r=0;n&&(r|=4),Hm(a,e,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Df(e){if(!e[Vl]){e[Vl]=!0,ne.forEach(function(a){a!=="selectionchange"&&(qv.has(a)||wf(a,!1,e),wf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,wf("selectionchange",!1,n))}}function Hm(e,n,a,r){switch(mx(n)){case 2:var u=yy;break;case 8:u=by;break;default:u=Xf}a=u.bind(null,n,a,e),u=void 0,!Zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Nf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var C=r.stateNode.containerInfo;if(C===u)break;if(v===4)for(v=r.return;v!==null;){var k=v.tag;if((k===3||k===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;C!==null;){if(v=ma(C),v===null)return;if(k=v.tag,k===5||k===6||k===26||k===27){r=f=v;continue e}C=C.parentNode}}r=r.return}Xh(function(){var ce=f,ge=Wc(a),be=[];e:{var fe=v0.get(e);if(fe!==void 0){var me=$o,Ge=e;switch(e){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":me=B_;break;case"focusin":Ge="focus",me=$c;break;case"focusout":Ge="blur",me=$c;break;case"beforeblur":case"afterblur":me=$c;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":me=Yh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":me=R_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":me=V_;break;case m0:case x0:case g0:me=D_;break;case _0:me=j_;break;case"scroll":case"scrollend":me=T_;break;case"wheel":me=q_;break;case"copy":case"cut":case"paste":me=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":me=Kh;break;case"toggle":case"beforetoggle":me=Y_}var it=(n&4)!==0,kt=!it&&(e==="scroll"||e==="scrollend"),te=it?fe!==null?fe+"Capture":null:fe;it=[];for(var Z=ce,oe;Z!==null;){var ve=Z;if(oe=ve.stateNode,ve=ve.tag,ve!==5&&ve!==26&&ve!==27||oe===null||te===null||(ve=Br(Z,te),ve!=null&&it.push(vo(Z,ve,oe))),kt)break;Z=Z.return}0<it.length&&(fe=new me(fe,Ge,null,a,ge),be.push({event:fe,listeners:it}))}}if((n&7)===0){e:{if(fe=e==="mouseover"||e==="pointerover",me=e==="mouseout"||e==="pointerout",fe&&a!==qc&&(Ge=a.relatedTarget||a.fromElement)&&(ma(Ge)||Ge[Pi]))break e;if((me||fe)&&(fe=ge.window===ge?ge:(fe=ge.ownerDocument)?fe.defaultView||fe.parentWindow:window,me?(Ge=a.relatedTarget||a.toElement,me=ce,Ge=Ge?ma(Ge):null,Ge!==null&&(kt=c(Ge),it=Ge.tag,Ge!==kt||it!==5&&it!==27&&it!==6)&&(Ge=null)):(me=null,Ge=ce),me!==Ge)){if(it=Yh,ve="onMouseLeave",te="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(it=Kh,ve="onPointerLeave",te="onPointerEnter",Z="pointer"),kt=me==null?fe:ee(me),oe=Ge==null?fe:ee(Ge),fe=new it(ve,Z+"leave",me,a,ge),fe.target=kt,fe.relatedTarget=oe,ve=null,ma(ge)===ce&&(it=new it(te,Z+"enter",Ge,a,ge),it.target=oe,it.relatedTarget=kt,ve=it),kt=ve,me&&Ge)t:{for(it=Wv,te=me,Z=Ge,oe=0,ve=te;ve;ve=it(ve))oe++;ve=0;for(var Je=Z;Je;Je=it(Je))ve++;for(;0<oe-ve;)te=it(te),oe--;for(;0<ve-oe;)Z=it(Z),ve--;for(;oe--;){if(te===Z||Z!==null&&te===Z.alternate){it=te;break t}te=it(te),Z=it(Z)}it=null}else it=null;me!==null&&Gm(be,fe,me,it,!1),Ge!==null&&kt!==null&&Gm(be,kt,Ge,it,!0)}}e:{if(fe=ce?ee(ce):window,me=fe.nodeName&&fe.nodeName.toLowerCase(),me==="select"||me==="input"&&fe.type==="file")var Nt=a0;else if(n0(fe))if(s0)Nt=av;else{Nt=nv;var je=tv}else me=fe.nodeName,!me||me.toLowerCase()!=="input"||fe.type!=="checkbox"&&fe.type!=="radio"?ce&&Xc(ce.elementType)&&(Nt=a0):Nt=iv;if(Nt&&(Nt=Nt(e,ce))){i0(be,Nt,a,ge);break e}je&&je(e,fe,ce),e==="focusout"&&ce&&fe.type==="number"&&ce.memoizedProps.value!=null&&vn(fe,"number",fe.value)}switch(je=ce?ee(ce):window,e){case"focusin":(n0(je)||je.contentEditable==="true")&&(Ls=je,su=ce,Wr=null);break;case"focusout":Wr=su=Ls=null;break;case"mousedown":ru=!0;break;case"contextmenu":case"mouseup":case"dragend":ru=!1,h0(be,a,ge);break;case"selectionchange":if(rv)break;case"keydown":case"keyup":h0(be,a,ge)}var ht;if(tu)e:{switch(e){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else Us?e0(e,a)&&(St="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(St="onCompositionStart");St&&(Qh&&a.locale!=="ko"&&(Us||St!=="onCompositionStart"?St==="onCompositionEnd"&&Us&&(ht=qh()):(ga=ge,Kc="value"in ga?ga.value:ga.textContent,Us=!0)),je=kl(ce,St),0<je.length&&(St=new Zh(St,e,null,a,ge),be.push({event:St,listeners:je}),ht?St.data=ht:(ht=t0(a),ht!==null&&(St.data=ht)))),(ht=K_?Q_(e,a):J_(e,a))&&(St=kl(ce,"onBeforeInput"),0<St.length&&(je=new Zh("onBeforeInput","beforeinput",null,a,ge),be.push({event:je,listeners:St}),je.data=ht)),kv(be,e,ce,a,ge)}Bm(be,n)})}function vo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function kl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Br(e,a),u!=null&&r.unshift(vo(e,u,f)),u=Br(e,n),u!=null&&r.push(vo(e,u,f))),e.tag===3)return r;e=e.return}return[]}function Wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Gm(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var C=a,k=C.alternate,ce=C.stateNode;if(C=C.tag,k!==null&&k===r)break;C!==5&&C!==26&&C!==27||ce===null||(k=ce,u?(ce=Br(a,f),ce!=null&&v.unshift(vo(a,ce,k))):u||(ce=Br(a,f),ce!=null&&v.push(vo(a,ce,k)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Yv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function Vm(e){return(typeof e=="string"?e:""+e).replace(Yv,`
`).replace(Zv,"")}function km(e,n){return n=Vm(n),Vm(e)===n}function Vt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ai(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ai(e,""+r);break;case"className":Ct(e,"class",r);break;case"tabIndex":Ct(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ct(e,a,r);break;case"style":kh(e,r,f);break;case"data":if(n!=="object"){Ct(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",u.name,u,null),Vt(e,n,"formEncType",u.formEncType,u,null),Vt(e,n,"formMethod",u.formMethod,u,null),Vt(e,n,"formTarget",u.formTarget,u,null)):(Vt(e,n,"encType",u.encType,u,null),Vt(e,n,"method",u.method,u,null),Vt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Zo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"onScroll":r!=null&&vt("scroll",e);break;case"onScrollEnd":r!=null&&vt("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Zo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":vt("beforetoggle",e),vt("toggle",e),dt(e,"popover",r);break;case"xlinkActuate":Dt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":Dt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":Dt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":Dt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":Dt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":Dt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":Dt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":dt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=M_.get(a)||a,dt(e,a,r))}}function Uf(e,n,a,r,u,f){switch(a){case"style":kh(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ai(e,r):(typeof r=="number"||typeof r=="bigint")&&Ai(e,""+r);break;case"onScroll":r!=null&&vt("scroll",e);break;case"onScrollEnd":r!=null&&vt("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!we.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[hn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):dt(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",e),vt("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,f,v,a,null)}}u&&Vt(e,n,"srcSet",a.srcSet,a,null),r&&Vt(e,n,"src",a.src,a,null);return;case"input":vt("invalid",e);var C=f=v=u=null,k=null,ce=null;for(r in a)if(a.hasOwnProperty(r)){var ge=a[r];if(ge!=null)switch(r){case"name":u=ge;break;case"type":v=ge;break;case"checked":k=ge;break;case"defaultChecked":ce=ge;break;case"value":f=ge;break;case"defaultValue":C=ge;break;case"children":case"dangerouslySetInnerHTML":if(ge!=null)throw Error(s(137,n));break;default:Vt(e,n,r,ge,a,null)}}Zt(e,f,C,k,ce,v,u,!1);return;case"select":vt("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(C=a[u],C!=null))switch(u){case"value":f=C;break;case"defaultValue":v=C;break;case"multiple":r=C;default:Vt(e,n,u,C,a,null)}n=f,a=v,e.multiple=!!r,n!=null?pn(e,!!r,n,!1):a!=null&&pn(e,!!r,a,!0);return;case"textarea":vt("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(C=a[v],C!=null))switch(v){case"value":r=C;break;case"defaultValue":u=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Vt(e,n,v,C,a,null)}En(e,r,u,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Vt(e,n,k,r,a,null)}return;case"dialog":vt("beforetoggle",e),vt("toggle",e),vt("cancel",e),vt("close",e);break;case"iframe":case"object":vt("load",e);break;case"video":case"audio":for(r=0;r<_o.length;r++)vt(_o[r],e);break;case"image":vt("error",e),vt("load",e);break;case"details":vt("toggle",e);break;case"embed":case"source":case"link":vt("error",e),vt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(ce in a)if(a.hasOwnProperty(ce)&&(r=a[ce],r!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,ce,r,a,null)}return;default:if(Xc(n)){for(ge in a)a.hasOwnProperty(ge)&&(r=a[ge],r!==void 0&&Uf(e,n,ge,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&Vt(e,n,C,r,a,null))}function Kv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,C=null,k=null,ce=null,ge=null;for(me in a){var be=a[me];if(a.hasOwnProperty(me)&&be!=null)switch(me){case"checked":break;case"value":break;case"defaultValue":k=be;default:r.hasOwnProperty(me)||Vt(e,n,me,null,r,be)}}for(var fe in r){var me=r[fe];if(be=a[fe],r.hasOwnProperty(fe)&&(me!=null||be!=null))switch(fe){case"type":f=me;break;case"name":u=me;break;case"checked":ce=me;break;case"defaultChecked":ge=me;break;case"value":v=me;break;case"defaultValue":C=me;break;case"children":case"dangerouslySetInnerHTML":if(me!=null)throw Error(s(137,n));break;default:me!==be&&Vt(e,n,fe,me,r,be)}}Ii(e,v,C,k,ce,ge,f,u);return;case"select":me=v=C=fe=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":me=k;default:r.hasOwnProperty(f)||Vt(e,n,f,null,r,k)}for(u in r)if(f=r[u],k=a[u],r.hasOwnProperty(u)&&(f!=null||k!=null))switch(u){case"value":fe=f;break;case"defaultValue":C=f;break;case"multiple":v=f;default:f!==k&&Vt(e,n,u,f,r,k)}n=C,a=v,r=me,fe!=null?pn(e,!!a,fe,!1):!!r!=!!a&&(n!=null?pn(e,!!a,n,!0):pn(e,!!a,a?[]:"",!1));return;case"textarea":me=fe=null;for(C in a)if(u=a[C],a.hasOwnProperty(C)&&u!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Vt(e,n,C,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":fe=u;break;case"defaultValue":me=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(e,n,v,u,r,f)}yn(e,fe,me);return;case"option":for(var Ge in a)if(fe=a[Ge],a.hasOwnProperty(Ge)&&fe!=null&&!r.hasOwnProperty(Ge))switch(Ge){case"selected":e.selected=!1;break;default:Vt(e,n,Ge,null,r,fe)}for(k in r)if(fe=r[k],me=a[k],r.hasOwnProperty(k)&&fe!==me&&(fe!=null||me!=null))switch(k){case"selected":e.selected=fe&&typeof fe!="function"&&typeof fe!="symbol";break;default:Vt(e,n,k,fe,r,me)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var it in a)fe=a[it],a.hasOwnProperty(it)&&fe!=null&&!r.hasOwnProperty(it)&&Vt(e,n,it,null,r,fe);for(ce in r)if(fe=r[ce],me=a[ce],r.hasOwnProperty(ce)&&fe!==me&&(fe!=null||me!=null))switch(ce){case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:Vt(e,n,ce,fe,r,me)}return;default:if(Xc(n)){for(var kt in a)fe=a[kt],a.hasOwnProperty(kt)&&fe!==void 0&&!r.hasOwnProperty(kt)&&Uf(e,n,kt,void 0,r,fe);for(ge in r)fe=r[ge],me=a[ge],!r.hasOwnProperty(ge)||fe===me||fe===void 0&&me===void 0||Uf(e,n,ge,fe,r,me);return}}for(var te in a)fe=a[te],a.hasOwnProperty(te)&&fe!=null&&!r.hasOwnProperty(te)&&Vt(e,n,te,null,r,fe);for(be in r)fe=r[be],me=a[be],!r.hasOwnProperty(be)||fe===me||fe==null&&me==null||Vt(e,n,be,fe,r,me)}function jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Qv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,C=u.duration;if(f&&C&&jm(v)){for(v=0,C=u.responseEnd,r+=1;r<a.length;r++){var k=a[r],ce=k.startTime;if(ce>C)break;var ge=k.transferSize,be=k.initiatorType;ge&&jm(be)&&(k=k.responseEnd,v+=ge*(k<C?1:(C-ce)/(k-ce)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lf=null,Of=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function Xm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function zf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Pf=null;function Jv(){var e=window.event;return e&&e.type==="popstate"?e===Pf?!1:(Pf=e,!0):(Pf=null,!1)}var Wm=typeof setTimeout=="function"?setTimeout:void 0,$v=typeof clearTimeout=="function"?clearTimeout:void 0,Ym=typeof Promise=="function"?Promise:void 0,ey=typeof queueMicrotask=="function"?queueMicrotask:typeof Ym<"u"?function(e){return Ym.resolve(null).then(e).catch(ty)}:Wm;function ty(e){setTimeout(function(){throw e})}function Oa(e){return e==="head"}function Zm(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),rr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")yo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,yo(a);for(var f=a.firstChild;f;){var v=f.nextSibling,C=f.nodeName;f[es]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&yo(e.ownerDocument.body);a=u}while(a);rr(n)}function Km(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function If(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":If(a),Fr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ny(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[es])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function iy(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Qm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Ff(e){return e.data==="$?"||e.data==="$~"}function Bf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ay(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Hf=null;function Jm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function $m(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ex(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function yo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Fr(e)}var di=new Map,tx=new Set;function Xl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ta=G.d;G.d={f:sy,r:ry,D:oy,C:ly,L:cy,m:uy,X:dy,S:fy,M:hy};function sy(){var e=ta.f(),n=Pl();return e||n}function ry(e){var n=w(e);n!==null&&n.tag===5&&n.type==="form"?_p(n):ta.r(e)}var ir=typeof document>"u"?null:document;function nx(e,n,a){var r=ir;if(r&&typeof n=="string"&&n){var u=Yt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),tx.has(u)||(tx.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",e),ue(n),r.head.appendChild(n)))}}function oy(e){ta.D(e),nx("dns-prefetch",e,null)}function ly(e,n){ta.C(e,n),nx("preconnect",e,n)}function cy(e,n,a){ta.L(e,n,a);var r=ir;if(r&&e&&n){var u='link[rel="preload"][as="'+Yt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Yt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Yt(a.imageSizes)+'"]')):u+='[href="'+Yt(e)+'"]';var f=u;switch(n){case"style":f=ar(e);break;case"script":f=sr(e)}di.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(bo(f))||n==="script"&&r.querySelector(So(f))||(n=r.createElement("link"),Cn(n,"link",e),ue(n),r.head.appendChild(n)))}}function uy(e,n){ta.m(e,n);var a=ir;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Yt(r)+'"][href="'+Yt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=sr(e)}if(!di.has(f)&&(e=g({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}r=a.createElement("link"),Cn(r,"link",e),ue(r),a.head.appendChild(r)}}}function fy(e,n,a){ta.S(e,n,a);var r=ir;if(r&&e){var u=he(r).hoistableStyles,f=ar(e);n=n||"default";var v=u.get(f);if(!v){var C={loading:0,preload:null};if(v=r.querySelector(bo(f)))C.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Gf(e,a);var k=v=r.createElement("link");ue(k),Cn(k,"link",e),k._p=new Promise(function(ce,ge){k.onload=ce,k.onerror=ge}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ql(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:C},u.set(f,v)}}}function dy(e,n){ta.X(e,n);var a=ir;if(a&&e){var r=he(a).hoistableScripts,u=sr(e),f=r.get(u);f||(f=a.querySelector(So(u)),f||(e=g({src:e,async:!0},n),(n=di.get(u))&&Vf(e,n),f=a.createElement("script"),ue(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function hy(e,n){ta.M(e,n);var a=ir;if(a&&e){var r=he(a).hoistableScripts,u=sr(e),f=r.get(u);f||(f=a.querySelector(So(u)),f||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Vf(e,n),f=a.createElement("script"),ue(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function ix(e,n,a,r){var u=(u=K.current)?Xl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ar(a.href),a=he(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ar(a.href);var f=he(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(bo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||py(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=sr(a),a=he(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function ar(e){return'href="'+Yt(e)+'"'}function bo(e){return'link[rel="stylesheet"]['+e+"]"}function ax(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function py(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),ue(n),e.head.appendChild(n))}function sr(e){return'[src="'+Yt(e)+'"]'}function So(e){return"script[async]"+e}function sx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Yt(a.href)+'"]');if(r)return n.instance=r,ue(r),r;var u=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),ue(r),Cn(r,"style",u),ql(r,a.precedence,e),n.instance=r;case"stylesheet":u=ar(a.href);var f=e.querySelector(bo(u));if(f)return n.state.loading|=4,n.instance=f,ue(f),f;r=ax(a),(u=di.get(u))&&Gf(r,u),f=(e.ownerDocument||e).createElement("link"),ue(f);var v=f;return v._p=new Promise(function(C,k){v.onload=C,v.onerror=k}),Cn(f,"link",r),n.state.loading|=4,ql(f,a.precedence,e),n.instance=f;case"script":return f=sr(a.src),(u=e.querySelector(So(f)))?(n.instance=u,ue(u),u):(r=a,(u=di.get(f))&&(r=g({},a),Vf(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),ue(u),Cn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ql(r,a.precedence,e));return n.instance}function ql(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var C=r[v];if(C.dataset.precedence===n)f=C;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Gf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Vf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Wl=null;function rx(e,n,a){if(Wl===null){var r=new Map,u=Wl=new Map;u.set(a,r)}else u=Wl,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[es]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var C=r.get(v);C?C.push(f):r.set(v,[f])}}return r}function ox(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function my(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function lx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function xy(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ar(r.href),f=n.querySelector(bo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Yl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,ue(f);return}f=n.ownerDocument||n,r=ax(r),(u=di.get(u))&&Gf(r,u),f=f.createElement("link"),ue(f);var v=f;v._p=new Promise(function(C,k){v.onload=C,v.onerror=k}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Yl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var kf=0;function gy(e,n){return e.stylesheets&&e.count===0&&Kl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&kf===0&&(kf=62500*Qv());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Kl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>kf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Yl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Kl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Zl=null;function Kl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Zl=new Map,n.forEach(_y,e),Zl=null,Yl.call(e))}function _y(e,n){if(!(n.state.loading&4)){var a=Zl.get(e);if(a)var r=a.get(null);else{a=new Map,Zl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=Yl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Mo={$$typeof:L,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function vy(e,n,a,r,u,f,v,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=wt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wt(0),this.hiddenUpdates=wt(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function cx(e,n,a,r,u,f,v,C,k,ce,ge,be){return e=new vy(e,n,a,v,k,ce,ge,be,C),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=bu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Tu(f),e}function ux(e){return e?(e=Ps,e):Ps}function fx(e,n,a,r,u,f){u=ux(u),r.context===null?r.context=u:r.pendingContext=u,r=Ma(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ea(e,r,n),a!==null&&(kn(a,e,n),eo(a,e,n))}function dx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function jf(e,n){dx(e,n),(e=e.alternate)&&dx(e,n)}function hx(e){if(e.tag===13||e.tag===31){var n=as(e,67108864);n!==null&&kn(n,e,67108864),jf(e,67108864)}}function px(e){if(e.tag===13||e.tag===31){var n=ei();n=gi(n);var a=as(e,n);a!==null&&kn(a,e,n),jf(e,n)}}var Ql=!0;function yy(e,n,a,r){var u=I.T;I.T=null;var f=G.p;try{G.p=2,Xf(e,n,a,r)}finally{G.p=f,I.T=u}}function by(e,n,a,r){var u=I.T;I.T=null;var f=G.p;try{G.p=8,Xf(e,n,a,r)}finally{G.p=f,I.T=u}}function Xf(e,n,a,r){if(Ql){var u=qf(r);if(u===null)Nf(e,n,r,Jl,a),xx(e,r);else if(My(u,e,n,a,r))r.stopPropagation();else if(xx(e,r),n&4&&-1<Sy.indexOf(e)){for(;u!==null;){var f=w(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Re(f.pendingLanes);if(v!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;v;){var k=1<<31-ke(v);C.entanglements[1]|=k,v&=~k}Di(f),(zt&6)===0&&(Ol=T()+500,go(0))}}break;case 31:case 13:C=as(f,2),C!==null&&kn(C,f,2),Pl(),jf(f,2)}if(f=qf(r),f===null&&Nf(e,n,r,Jl,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Nf(e,n,r,null,a)}}function qf(e){return e=Wc(e),Wf(e)}var Jl=null;function Wf(e){if(Jl=null,e=ma(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Jl=e,null}function mx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(le()){case ye:return 2;case Te:return 8;case xe:case qe:return 32;case ze:return 268435456;default:return 32}default:return 32}}var Yf=!1,za=null,Pa=null,Ia=null,Eo=new Map,To=new Map,Fa=[],Sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xx(e,n){switch(e){case"focusin":case"focusout":za=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Ia=null;break;case"pointerover":case"pointerout":Eo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(n.pointerId)}}function Ao(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&hx(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function My(e,n,a,r,u){switch(n){case"focusin":return za=Ao(za,e,n,a,r,u),!0;case"dragenter":return Pa=Ao(Pa,e,n,a,r,u),!0;case"mouseover":return Ia=Ao(Ia,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return Eo.set(f,Ao(Eo.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,To.set(f,Ao(To.get(f)||null,e,n,a,r,u)),!0}return!1}function gx(e){var n=ma(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ir(e.priority,function(){px(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ir(e.priority,function(){px(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function $l(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qf(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);qc=r,a.target.dispatchEvent(r),qc=null}else return n=w(a),n!==null&&hx(n),e.blockedOn=a,!1;n.shift()}return!0}function _x(e,n,a){$l(e)&&a.delete(n)}function Ey(){Yf=!1,za!==null&&$l(za)&&(za=null),Pa!==null&&$l(Pa)&&(Pa=null),Ia!==null&&$l(Ia)&&(Ia=null),Eo.forEach(_x),To.forEach(_x)}function ec(e,n){e.blockedOn===n&&(e.blockedOn=null,Yf||(Yf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Ey)))}var tc=null;function vx(e){tc!==e&&(tc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){tc===e&&(tc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Wf(r||a)===null)continue;break}var f=w(a);f!==null&&(e.splice(n,3),n-=3,Xu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function rr(e){function n(k){return ec(k,e)}za!==null&&ec(za,e),Pa!==null&&ec(Pa,e),Ia!==null&&ec(Ia,e),Eo.forEach(n),To.forEach(n);for(var a=0;a<Fa.length;a++){var r=Fa[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Fa.length&&(a=Fa[0],a.blockedOn===null);)gx(a),a.blockedOn===null&&Fa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[hn]||null;if(typeof f=="function")v||vx(a);else if(v){var C=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[hn]||null)C=v.formAction;else if(Wf(u)!==null)continue}else C=v.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),vx(a)}}}function yx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Zf(e){this._internalRoot=e}nc.prototype.render=Zf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();fx(a,r,e,n,null,null)},nc.prototype.unmount=Zf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;fx(e.current,2,null,e,null,null),Pl(),n[Pi]=null}};function nc(e){this._internalRoot=e}nc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Pr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Fa.length&&n!==0&&n<Fa[a].priority;a++);Fa.splice(a,0,e),a===0&&gx(e)}};var bx=t.version;if(bx!=="19.2.0")throw Error(s(527,bx,"19.2.0"));G.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Ty={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Ae=ic.inject(Ty),Ce=ic}catch{}}return Co.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=Cp,f=wp,v=Dp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=cx(e,1,!1,null,null,a,r,null,u,f,v,yx),e[Pi]=n.current,Df(e),new Zf(n)},Co.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=Cp,v=wp,C=Dp,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=cx(e,1,!0,n,a??null,r,u,k,f,v,C,yx),n.context=ux(null),a=n.current,r=ei(),r=gi(r),u=Ma(r),u.callback=null,Ea(a,u,r),a=r,n.current.lanes=a,wn(n,a),Di(n),e[Pi]=n.current,Df(e),new nc(n)},Co.version="19.2.0",Co}var Nx;function zy(){if(Nx)return Jf.exports;Nx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Jf.exports=Oy(),Jf.exports}var Py=zy();const Iy=Fg(Py),Fy=[{id:"inicio",label:"Inicio"},{id:"electricidad",label:"Electricidad"}];function By({currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:s}){return E.jsx("header",{className:"sticky top-0 z-40 backdrop-blur-sm bg-slate-50/80 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-700",children:E.jsxs("nav",{className:"max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-6",children:[E.jsxs("div",{className:"flex items-center gap-3 cursor-pointer select-none",onClick:()=>t("inicio"),"aria-label":"Ir al inicio",children:[E.jsx("div",{className:"w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 flex items-center justify-center text-slate-900 font-extrabold shadow-md",children:"⚡"}),E.jsxs("div",{className:"leading-tight",children:[E.jsx("div",{className:"text-base font-extrabold text-slate-900 dark:text-white",children:"Física"}),E.jsx("div",{className:"text-xs text-slate-500 dark:text-slate-300",children:"Electricidad"})]})]}),E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"hidden md:flex items-center gap-3 bg-slate-50/50 dark:bg-slate-800/40 p-1 rounded-full",children:Fy.map(l=>E.jsx("button",{onClick:()=>t(l.id),className:`px-3 py-1.5 text-sm font-medium rounded-full transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-yellow-400 ${o===l.id?"bg-yellow-500 text-white shadow":"text-slate-700 dark:text-slate-200 hover:bg-slate-800/40 hover:text-white"}`,"aria-current":o===l.id?"page":void 0,children:l.label},l.id))}),E.jsx("button",{onClick:s,className:"ml-2 p-2 rounded-full bg-white/60 dark:bg-slate-700 hover:scale-105 transition-transform shadow-sm flex items-center justify-center",title:"Cambiar modo","aria-pressed":i,children:E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-4 h-4 text-yellow-500",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",children:i?E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"}):E.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42M18.36 18.36l-1.42-1.42M7.05 7.05L5.64 5.64"})})})]})]})})}function Hy({onChangeSection:o}){const[t,i]=Ye.useState(!1);Ye.useEffect(()=>{const h=setTimeout(()=>i(!0),50);return()=>clearTimeout(h)},[]);const s=({className:h="w-6 h-6"})=>E.jsx("svg",{className:h,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{d:"M13 2L3 14h7l-1 8L21 10h-7l-1-8z",fill:"currentColor"})}),l=({className:h="w-6 h-6"})=>E.jsx("svg",{className:h,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{d:"M12 2a10 10 0 100 20 10 10 0 000-20zm0 2v2m0 12v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4",stroke:"currentColor",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round"})}),c=({className:h="w-6 h-6"})=>E.jsx("svg",{className:h,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-hidden":!0,children:E.jsx("path",{d:"M12 2c3 0 5 2 5 5a5 5 0 01-5 5 5 5 0 01-5-5c0-3 2-5 5-5zM7 22h10",stroke:"currentColor",strokeWidth:"1.4",strokeLinecap:"round",strokeLinejoin:"round"})}),d=[{key:"ley-coulomb",title:"Ley de Coulomb",desc:"Constante k y fuerza entre dos cargas puntuales.",icon:E.jsx(s,{}),lightClasses:"from-yellow-50 to-yellow-100",darkClasses:"dark:from-yellow-500 dark:to-yellow-600"},{key:"campo-electrico",title:"Campo Eléctrico",desc:"Definición, líneas de campo y cálculo de magnitudes.",icon:E.jsx(l,{}),lightClasses:"from-sky-50 to-sky-100",darkClasses:"dark:from-blue-500 dark:to-blue-600"},{key:"ley-ohm",title:"Ley de Ohm",desc:"Relación entre voltaje, corriente y resistencia en circuitos.",icon:E.jsx(c,{}),lightClasses:"from-rose-50 to-rose-100",darkClasses:"dark:from-rose-500 dark:to-rose-600"}];return E.jsx("section",{id:"inicio",className:"max-w-6xl mx-auto px-4 py-12",children:E.jsxs("div",{className:"rounded-3xl p-6 md:p-10 shadow-2xl border border-slate-200 dark:border-slate-700 bg-gradient-to-br from-slate-50/80 to-slate-100/60 dark:bg-gradient-to-r dark:from-slate-900/80 dark:via-slate-800/70 dark:to-slate-900/80 dark:backdrop-blur-sm",children:[E.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-8",children:[E.jsx("div",{className:"w-full md:w-64 flex-shrink-0",children:E.jsxs("div",{className:"space-y-4 md:space-y-6",children:[E.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-yellow-400 tracking-tight leading-tight",children:"Electricidad"}),E.jsx("p",{className:"text-sm md:text-base text-slate-300 leading-relaxed",children:"Recursos y simuladores para entender cargas, campos electricos y circuitos."}),E.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Diseñado para estudiantes: unidades SI, fórmulas renderizadas y modos claro/oscuro."})]})}),E.jsx("nav",{className:"flex-1",children:E.jsxs("div",{className:"space-y-4",children:[E.jsxs("div",{className:"rounded-lg p-6 max-w-3xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 dark:backdrop-blur-sm",children:[E.jsx("h4",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100",children:"¿Qué es la electricidad?"}),E.jsx("p",{className:"mt-2 text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:"Fenómeno físico relacionado con la presencia y el movimiento de cargas eléctricas; incluye fuerzas entre cargas, campos eléctricos y corriente en circuitos."})]}),E.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-8 w-full items-stretch",children:d.map((h,m)=>E.jsx("button",{onClick:()=>{try{const x={"ley-coulomb":"coulomb","campo-electrico":"campo","ley-ohm":"ohm"}[h.key]||"coulomb";localStorage.setItem("electricidad:tab",x)}catch{}o("electricidad")},style:{transitionDelay:`${m*80}ms`},className:`group relative overflow-hidden rounded-xl p-6 flex flex-col justify-between gap-3 w-full max-w-[20rem] min-h-[6.25rem] transform transition-all duration-500 ${t?"opacity-100 translate-y-0":"opacity-0 translate-y-3"} hover:-translate-y-1 focus:-translate-y-1 focus:outline-none border border-slate-200 dark:border-slate-600 bg-gradient-to-br ${h.lightClasses} ${h.darkClasses} text-slate-900 dark:text-white shadow-lg`,"aria-label":`Ir a ${h.title}`,children:E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx("div",{className:"p-1 rounded-full bg-white/10 dark:bg-white/10",children:E.jsx("span",{className:"inline-block text-current",children:h.icon})}),E.jsxs("div",{children:[E.jsx("div",{className:"font-semibold text-lg leading-tight text-slate-900 dark:text-white",children:h.title}),E.jsx("div",{className:"text-xs opacity-90 mt-1 text-slate-700 dark:text-slate-200",children:h.desc})]})]})},h.key))})]})})]}),E.jsxs("div",{className:"mt-8 grid md:grid-cols-2 gap-6",children:[E.jsxs("div",{className:"rounded-xl bg-slate-900/70 dark:bg-slate-900/80 border border-slate-700 p-6 shadow-sm",children:[E.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Constantes físicas"}),E.jsx("p",{className:"mt-3 text-sm text-slate-300 leading-relaxed",children:"Constante de Coulomb k = 8.99×10⁹ N·m²/C²"})]}),E.jsx("div",{className:"rounded-xl bg-slate-900/70 dark:bg-slate-900/80 border border-slate-700 p-6 flex flex-col justify-between shadow-sm",children:E.jsxs("div",{children:[E.jsx("h3",{className:"text-sm font-semibold text-slate-100",children:"Recursos rápidos"}),E.jsxs("ul",{className:"mt-3 text-sm text-slate-300 space-y-2",children:[E.jsx("li",{children:"Fórmulas renderizadas"}),E.jsx("li",{children:"Calculadoras interactivas"}),E.jsx("li",{children:"Material de apoyo y ejercicios"}),E.jsx("li",{children:"Asistente de IA"})]})]})})]})]})})}const Nh="181",Gy=0,Ux=1,Vy=2,Bg=1,ky=2,la=3,Ja=0,Xn=1,ca=2,da=0,br=1,Lx=2,Ox=3,zx=4,jy=5,Es=100,Xy=101,qy=102,Wy=103,Yy=104,Zy=200,Ky=201,Qy=202,Jy=203,Bd=204,Hd=205,$y=206,eb=207,tb=208,nb=209,ib=210,ab=211,sb=212,rb=213,ob=214,Gd=0,Vd=1,kd=2,Mr=3,jd=4,Xd=5,qd=6,Wd=7,Hg=0,lb=1,cb=2,Qa=0,ub=1,fb=2,db=3,hb=4,pb=5,mb=6,xb=7,Gg=300,Er=301,Tr=302,Yd=303,Zd=304,Ic=306,Kd=1e3,ua=1001,Qd=1002,ai=1003,gb=1004,ac=1005,mi=1006,nd=1007,As=1008,Oi=1009,Vg=1010,kg=1011,Fo=1012,Uh=1013,Rs=1014,fa=1015,Dr=1016,Lh=1017,Oh=1018,Bo=1020,jg=35902,Xg=35899,qg=1021,Wg=1022,Ti=1023,Ho=1026,Go=1027,Yg=1028,zh=1029,Ph=1030,Ih=1031,Fh=1033,Rc=33776,Cc=33777,wc=33778,Dc=33779,Jd=35840,$d=35841,eh=35842,th=35843,nh=36196,ih=37492,ah=37496,sh=37808,rh=37809,oh=37810,lh=37811,ch=37812,uh=37813,fh=37814,dh=37815,hh=37816,ph=37817,mh=37818,xh=37819,gh=37820,_h=37821,vh=36492,yh=36494,bh=36495,Sh=36283,Mh=36284,Eh=36285,Th=36286,_b=3200,vb=3201,Zg=0,yb=1,Wa="",pi="srgb",Ar="srgb-linear",Uc="linear",jt="srgb",or=7680,Px=519,bb=512,Sb=513,Mb=514,Kg=515,Eb=516,Tb=517,Ab=518,Rb=519,Ix=35044,Fx="300 es",Ui=2e3,Lc=2001;function Qg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Oc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Cb(){const o=Oc("canvas");return o.style.display="block",o}const Bx={};function Hx(...o){const t="THREE."+o.shift();console.log(t,...o)}function ut(...o){const t="THREE."+o.shift();console.warn(t,...o)}function rn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Vo(...o){const t=o.join(" ");t in Bx||(Bx[t]=!0,ut(...o))}function wb(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Nr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],id=Math.PI/180,Ah=180/Math.PI;function ko(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function At(o,t,i){return Math.max(t,Math.min(i,o))}function Db(o,t){return(o%t+t)%t}function ad(o,t,i){return(1-i)*o+i*t}function wo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ot{constructor(t=0,i=0){Ot.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(At(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],x=s[l+2],g=s[l+3],y=c[d+0],b=c[d+1],M=c[d+2],R=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g;return}if(h>=1){t[i+0]=y,t[i+1]=b,t[i+2]=M,t[i+3]=R;return}if(g!==R||m!==y||p!==b||x!==M){let S=m*y+p*b+x*M+g*R;S<0&&(y=-y,b=-b,M=-M,R=-R,S=-S);let _=1-h;if(S<.9995){const z=Math.acos(S),L=Math.sin(z);_=Math.sin(_*z)/L,h=Math.sin(h*z)/L,m=m*_+y*h,p=p*_+b*h,x=x*_+M*h,g=g*_+R*h}else{m=m*_+y*h,p=p*_+b*h,x=x*_+M*h,g=g*_+R*h;const z=1/Math.sqrt(m*m+p*p+x*x+g*g);m*=z,p*=z,x*=z,g*=z}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],x=s[l+3],g=c[d],y=c[d+1],b=c[d+2],M=c[d+3];return t[i]=h*M+x*g+m*b-p*y,t[i+1]=m*M+x*y+p*g-h*b,t[i+2]=p*M+x*b+h*y-m*g,t[i+3]=x*M-h*g-m*y-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),x=h(l/2),g=h(c/2),y=m(s/2),b=m(l/2),M=m(c/2);switch(d){case"XYZ":this._x=y*x*g+p*b*M,this._y=p*b*g-y*x*M,this._z=p*x*M+y*b*g,this._w=p*x*g-y*b*M;break;case"YXZ":this._x=y*x*g+p*b*M,this._y=p*b*g-y*x*M,this._z=p*x*M-y*b*g,this._w=p*x*g+y*b*M;break;case"ZXY":this._x=y*x*g-p*b*M,this._y=p*b*g+y*x*M,this._z=p*x*M+y*b*g,this._w=p*x*g-y*b*M;break;case"ZYX":this._x=y*x*g-p*b*M,this._y=p*b*g+y*x*M,this._z=p*x*M-y*b*g,this._w=p*x*g+y*b*M;break;case"YZX":this._x=y*x*g+p*b*M,this._y=p*b*g+y*x*M,this._z=p*x*M-y*b*g,this._w=p*x*g-y*b*M;break;case"XZY":this._x=y*x*g-p*b*M,this._y=p*b*g-y*x*M,this._z=p*x*M+y*b*g,this._w=p*x*g+y*b*M;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],g=i[10],y=s+h+g;if(y>0){const b=.5/Math.sqrt(y+1);this._w=.25/b,this._x=(x-m)*b,this._y=(c-p)*b,this._z=(d-l)*b}else if(s>h&&s>g){const b=2*Math.sqrt(1+s-h-g);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(c+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-s-g);this._w=(c-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+g-s-h);this._w=(d-l)/b,this._x=(c+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(At(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=s*x+d*h+l*p-c*m,this._y=l*x+d*m+c*h-s*p,this._z=c*x+d*p+s*m-l*h,this._w=d*x-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(t=0,i=0,s=0){de.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Gx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Gx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),x=2*(h*i-c*l),g=2*(c*s-d*i);return this.x=i+m*p+d*g-h*x,this.y=s+m*x+h*p-c*g,this.z=l+m*g+c*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return sd.copy(this).projectOnVector(t),this.sub(sd)}reflect(t){return this.sub(sd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(At(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new de,Gx=new jo;class pt{constructor(t,i,s,l,c,d,h,m,p){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=c,x[5]=m,x[6]=s,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],x=s[4],g=s[7],y=s[2],b=s[5],M=s[8],R=l[0],S=l[3],_=l[6],z=l[1],L=l[4],P=l[7],B=l[2],O=l[5],H=l[8];return c[0]=d*R+h*z+m*B,c[3]=d*S+h*L+m*O,c[6]=d*_+h*P+m*H,c[1]=p*R+x*z+g*B,c[4]=p*S+x*L+g*O,c[7]=p*_+x*P+g*H,c[2]=y*R+b*z+M*B,c[5]=y*S+b*L+M*O,c[8]=y*_+b*P+M*H,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-s*c*x+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=x*d-h*p,y=h*m-x*c,b=p*c-d*m,M=i*g+s*y+l*b;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return t[0]=g*R,t[1]=(l*p-x*s)*R,t[2]=(h*s-l*d)*R,t[3]=y*R,t[4]=(x*i-l*m)*R,t[5]=(l*c-h*i)*R,t[6]=b*R,t[7]=(s*m-p*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(rd.makeScale(t,i)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,i){return this.premultiply(rd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const rd=new pt,Vx=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kx=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nb(){const o={enabled:!0,workingColorSpace:Ar,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=ha(l.r),l.g=ha(l.g),l.b=ha(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Sr(l.r),l.g=Sr(l.g),l.b=Sr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Uc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Ar]:{primaries:t,whitePoint:s,transfer:Uc,toXYZ:Vx,fromXYZ:kx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:jt,toXYZ:Vx,fromXYZ:kx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Lt=Nb();function ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Sr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let lr;class Ub{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{lr===void 0&&(lr=Oc("canvas")),lr.width=t.width,lr.height=t.height;const l=lr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=lr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Oc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ha(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ha(i[s]/255)*255):i[s]=ha(i[s]);return{data:i,width:t.width,height:t.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Lb=0;class Bh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Lb++}),this.uuid=ko(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(od(l[d].image)):c.push(od(l[d]))}else c=od(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function od(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Ub.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let Ob=0;const ld=new de;class Pn extends Nr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=ua,l=ua,c=mi,d=As,h=Ti,m=Oi,p=Pn.DEFAULT_ANISOTROPY,x=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=ko(),this.name="",this.source=new Bh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ot(0,0),this.repeat=new Ot(1,1),this.center=new Ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ld).x}get height(){return this.source.getSize(ld).y}get depth(){return this.source.getSize(ld).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Kd:t.x=t.x-Math.floor(t.x);break;case ua:t.x=t.x<0?0:1;break;case Qd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Kd:t.y=t.y-Math.floor(t.y);break;case ua:t.y=t.y<0?0:1;break;case Qd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=Gg;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],x=m[4],g=m[8],y=m[1],b=m[5],M=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(x-y)<.01&&Math.abs(g-R)<.01&&Math.abs(M-S)<.01){if(Math.abs(x+y)<.1&&Math.abs(g+R)<.1&&Math.abs(M+S)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const L=(p+1)/2,P=(b+1)/2,B=(_+1)/2,O=(x+y)/4,H=(g+R)/4,$=(M+S)/4;return L>P&&L>B?L<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(L),l=O/s,c=H/s):P>B?P<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),s=O/l,c=$/l):B<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(B),s=H/c,l=$/c),this.set(s,l,c,i),this}let z=Math.sqrt((S-M)*(S-M)+(g-R)*(g-R)+(y-x)*(y-x));return Math.abs(z)<.001&&(z=1),this.x=(S-M)/z,this.y=(g-R)/z,this.z=(y-x)/z,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this.w=At(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this.w=At(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(At(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zb extends Nr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Bh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Cs extends zb{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Jg extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pb extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ai,this.minFilter=ai,this.wrapR=ua,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xo{constructor(t=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(c,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),sc.copy(s.boundingBox)),sc.applyMatrix4(t.matrixWorld),this.union(sc)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Do),rc.subVectors(this.max,Do),cr.subVectors(t.a,Do),ur.subVectors(t.b,Do),fr.subVectors(t.c,Do),Ha.subVectors(ur,cr),Ga.subVectors(fr,ur),gs.subVectors(cr,fr);let i=[0,-Ha.z,Ha.y,0,-Ga.z,Ga.y,0,-gs.z,gs.y,Ha.z,0,-Ha.x,Ga.z,0,-Ga.x,gs.z,0,-gs.x,-Ha.y,Ha.x,0,-Ga.y,Ga.x,0,-gs.y,gs.x,0];return!cd(i,cr,ur,fr,rc)||(i=[1,0,0,0,1,0,0,0,1],!cd(i,cr,ur,fr,rc))?!1:(oc.crossVectors(Ha,Ga),i=[oc.x,oc.y,oc.z],cd(i,cr,ur,fr,rc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(na[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),na[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),na[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),na[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),na[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),na[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),na[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),na[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(na),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const na=[new de,new de,new de,new de,new de,new de,new de,new de],bi=new de,sc=new Xo,cr=new de,ur=new de,fr=new de,Ha=new de,Ga=new de,gs=new de,Do=new de,rc=new de,oc=new de,_s=new de;function cd(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){_s.fromArray(o,c);const h=l.x*Math.abs(_s.x)+l.y*Math.abs(_s.y)+l.z*Math.abs(_s.z),m=t.dot(_s),p=i.dot(_s),x=s.dot(_s);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Ib=new Xo,No=new de,ud=new de;class Fc{constructor(t=new de,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Ib.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;No.subVectors(t,this.center);const i=No.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(No,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ud.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(No.copy(t.center).add(ud)),this.expandByPoint(No.copy(t.center).sub(ud))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ia=new de,fd=new de,lc=new de,Va=new de,dd=new de,cc=new de,hd=new de;class $g{constructor(t=new de,i=new de(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ia)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ia.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ia.copy(this.origin).addScaledVector(this.direction,i),ia.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){fd.copy(t).add(i).multiplyScalar(.5),lc.copy(i).sub(t).normalize(),Va.copy(this.origin).sub(fd);const c=t.distanceTo(i)*.5,d=-this.direction.dot(lc),h=Va.dot(this.direction),m=-Va.dot(lc),p=Va.lengthSq(),x=Math.abs(1-d*d);let g,y,b,M;if(x>0)if(g=d*m-h,y=d*h-m,M=c*x,g>=0)if(y>=-M)if(y<=M){const R=1/x;g*=R,y*=R,b=g*(g+d*y+2*h)+y*(d*g+y+2*m)+p}else y=c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;else y=-c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;else y<=-M?(g=Math.max(0,-(-d*c+h)),y=g>0?-c:Math.min(Math.max(-c,-m),c),b=-g*g+y*(y+2*m)+p):y<=M?(g=0,y=Math.min(Math.max(-c,-m),c),b=y*(y+2*m)+p):(g=Math.max(0,-(d*c+h)),y=g>0?c:Math.min(Math.max(-c,-m),c),b=-g*g+y*(y+2*m)+p);else y=d>0?-c:c,g=Math.max(0,-(d*y+h)),b=-g*g+y*(y+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(fd).addScaledVector(lc,y),b}intersectSphere(t,i){ia.subVectors(t.center,this.origin);const s=ia.dot(this.direction),l=ia.dot(ia)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,g=1/this.direction.z,y=this.origin;return p>=0?(s=(t.min.x-y.x)*p,l=(t.max.x-y.x)*p):(s=(t.max.x-y.x)*p,l=(t.min.x-y.x)*p),x>=0?(c=(t.min.y-y.y)*x,d=(t.max.y-y.y)*x):(c=(t.max.y-y.y)*x,d=(t.min.y-y.y)*x),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-y.z)*g,m=(t.max.z-y.z)*g):(h=(t.max.z-y.z)*g,m=(t.min.z-y.z)*g),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,ia)!==null}intersectTriangle(t,i,s,l,c){dd.subVectors(i,t),cc.subVectors(s,t),hd.crossVectors(dd,cc);let d=this.direction.dot(hd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Va.subVectors(this.origin,t);const m=h*this.direction.dot(cc.crossVectors(Va,cc));if(m<0)return null;const p=h*this.direction.dot(dd.cross(Va));if(p<0||m+p>d)return null;const x=-h*Va.dot(hd);return x<0?null:this.at(x/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class nn{constructor(t,i,s,l,c,d,h,m,p,x,g,y,b,M,R,S){nn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,x,g,y,b,M,R,S)}set(t,i,s,l,c,d,h,m,p,x,g,y,b,M,R,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=x,_[10]=g,_[14]=y,_[3]=b,_[7]=M,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new nn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/dr.setFromMatrixColumn(t,0).length(),c=1/dr.setFromMatrixColumn(t,1).length(),d=1/dr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),x=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=d*x,b=d*g,M=h*x,R=h*g;i[0]=m*x,i[4]=-m*g,i[8]=p,i[1]=b+M*p,i[5]=y-R*p,i[9]=-h*m,i[2]=R-y*p,i[6]=M+b*p,i[10]=d*m}else if(t.order==="YXZ"){const y=m*x,b=m*g,M=p*x,R=p*g;i[0]=y+R*h,i[4]=M*h-b,i[8]=d*p,i[1]=d*g,i[5]=d*x,i[9]=-h,i[2]=b*h-M,i[6]=R+y*h,i[10]=d*m}else if(t.order==="ZXY"){const y=m*x,b=m*g,M=p*x,R=p*g;i[0]=y-R*h,i[4]=-d*g,i[8]=M+b*h,i[1]=b+M*h,i[5]=d*x,i[9]=R-y*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const y=d*x,b=d*g,M=h*x,R=h*g;i[0]=m*x,i[4]=M*p-b,i[8]=y*p+R,i[1]=m*g,i[5]=R*p+y,i[9]=b*p-M,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const y=d*m,b=d*p,M=h*m,R=h*p;i[0]=m*x,i[4]=R-y*g,i[8]=M*g+b,i[1]=g,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=b*g+M,i[10]=y-R*g}else if(t.order==="XZY"){const y=d*m,b=d*p,M=h*m,R=h*p;i[0]=m*x,i[4]=-g,i[8]=p*x,i[1]=y*g+R,i[5]=d*x,i[9]=b*g-M,i[2]=M*g-b,i[6]=h*x,i[10]=R*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Fb,t,Bb)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ka.crossVectors(s,ti),ka.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ka.crossVectors(s,ti)),ka.normalize(),uc.crossVectors(ti,ka),l[0]=ka.x,l[4]=uc.x,l[8]=ti.x,l[1]=ka.y,l[5]=uc.y,l[9]=ti.y,l[2]=ka.z,l[6]=uc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],x=s[1],g=s[5],y=s[9],b=s[13],M=s[2],R=s[6],S=s[10],_=s[14],z=s[3],L=s[7],P=s[11],B=s[15],O=l[0],H=l[4],$=l[8],D=l[12],A=l[1],j=l[5],Y=l[9],Q=l[13],re=l[2],ae=l[6],I=l[10],G=l[14],U=l[3],V=l[7],J=l[11],N=l[15];return c[0]=d*O+h*A+m*re+p*U,c[4]=d*H+h*j+m*ae+p*V,c[8]=d*$+h*Y+m*I+p*J,c[12]=d*D+h*Q+m*G+p*N,c[1]=x*O+g*A+y*re+b*U,c[5]=x*H+g*j+y*ae+b*V,c[9]=x*$+g*Y+y*I+b*J,c[13]=x*D+g*Q+y*G+b*N,c[2]=M*O+R*A+S*re+_*U,c[6]=M*H+R*j+S*ae+_*V,c[10]=M*$+R*Y+S*I+_*J,c[14]=M*D+R*Q+S*G+_*N,c[3]=z*O+L*A+P*re+B*U,c[7]=z*H+L*j+P*ae+B*V,c[11]=z*$+L*Y+P*I+B*J,c[15]=z*D+L*Q+P*G+B*N,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],g=t[6],y=t[10],b=t[14],M=t[3],R=t[7],S=t[11],_=t[15];return M*(+c*m*g-l*p*g-c*h*y+s*p*y+l*h*b-s*m*b)+R*(+i*m*b-i*p*y+c*d*y-l*d*b+l*p*x-c*m*x)+S*(+i*p*g-i*h*b-c*d*g+s*d*b+c*h*x-s*p*x)+_*(-l*h*x-i*m*g+i*h*y+l*d*g-s*d*y+s*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],g=t[9],y=t[10],b=t[11],M=t[12],R=t[13],S=t[14],_=t[15],z=g*S*p-R*y*p+R*m*b-h*S*b-g*m*_+h*y*_,L=M*y*p-x*S*p-M*m*b+d*S*b+x*m*_-d*y*_,P=x*R*p-M*g*p+M*h*b-d*R*b-x*h*_+d*g*_,B=M*g*m-x*R*m-M*h*y+d*R*y+x*h*S-d*g*S,O=i*z+s*L+l*P+c*B;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const H=1/O;return t[0]=z*H,t[1]=(R*y*c-g*S*c-R*l*b+s*S*b+g*l*_-s*y*_)*H,t[2]=(h*S*c-R*m*c+R*l*p-s*S*p-h*l*_+s*m*_)*H,t[3]=(g*m*c-h*y*c-g*l*p+s*y*p+h*l*b-s*m*b)*H,t[4]=L*H,t[5]=(x*S*c-M*y*c+M*l*b-i*S*b-x*l*_+i*y*_)*H,t[6]=(M*m*c-d*S*c-M*l*p+i*S*p+d*l*_-i*m*_)*H,t[7]=(d*y*c-x*m*c+x*l*p-i*y*p-d*l*b+i*m*b)*H,t[8]=P*H,t[9]=(M*g*c-x*R*c-M*s*b+i*R*b+x*s*_-i*g*_)*H,t[10]=(d*R*c-M*h*c+M*s*p-i*R*p-d*s*_+i*h*_)*H,t[11]=(x*h*c-d*g*c-x*s*p+i*g*p+d*s*b-i*h*b)*H,t[12]=B*H,t[13]=(x*R*l-M*g*l+M*s*y-i*R*y-x*s*S+i*g*S)*H,t[14]=(M*h*l-d*R*l-M*s*m+i*R*m+d*s*S-i*h*S)*H,t[15]=(d*g*l-x*h*l+x*s*m-i*g*m-d*s*y+i*h*y)*H,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,x=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+s,x*m-l*d,0,p*m-l*h,x*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,x=d+d,g=h+h,y=c*p,b=c*x,M=c*g,R=d*x,S=d*g,_=h*g,z=m*p,L=m*x,P=m*g,B=s.x,O=s.y,H=s.z;return l[0]=(1-(R+_))*B,l[1]=(b+P)*B,l[2]=(M-L)*B,l[3]=0,l[4]=(b-P)*O,l[5]=(1-(y+_))*O,l[6]=(S+z)*O,l[7]=0,l[8]=(M+L)*H,l[9]=(S-z)*H,l[10]=(1-(y+R))*H,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=dr.set(l[0],l[1],l[2]).length();const d=dr.set(l[4],l[5],l[6]).length(),h=dr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Si.copy(this);const p=1/c,x=1/d,g=1/h;return Si.elements[0]*=p,Si.elements[1]*=p,Si.elements[2]*=p,Si.elements[4]*=x,Si.elements[5]*=x,Si.elements[6]*=x,Si.elements[8]*=g,Si.elements[9]*=g,Si.elements[10]*=g,i.setFromRotationMatrix(Si),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Ui,m=!1){const p=this.elements,x=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),b=(s+l)/(s-l);let M,R;if(m)M=c/(d-c),R=d*c/(d-c);else if(h===Ui)M=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(h===Lc)M=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=y,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Ui,m=!1){const p=this.elements,x=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),b=-(s+l)/(s-l);let M,R;if(m)M=1/(d-c),R=d/(d-c);else if(h===Ui)M=-2/(d-c),R=-(d+c)/(d-c);else if(h===Lc)M=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=y,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const dr=new de,Si=new nn,Fb=new de(0,0,0),Bb=new de(1,1,1),ka=new de,uc=new de,ti=new de,jx=new nn,Xx=new jo;class zi{constructor(t=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],g=l[2],y=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(At(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,b),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return jx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(jx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Xx.setFromEuler(this),this.setFromQuaternion(Xx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class e_{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Hb=0;const qx=new de,hr=new jo,aa=new nn,fc=new de,Uo=new de,Gb=new de,Vb=new jo,Wx=new de(1,0,0),Yx=new de(0,1,0),Zx=new de(0,0,1),Kx={type:"added"},kb={type:"removed"},pr={type:"childadded",child:null},pd={type:"childremoved",child:null};class Mn extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hb++}),this.uuid=ko(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new de,i=new zi,s=new jo,l=new de(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new nn},normalMatrix:{value:new pt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new e_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.multiply(hr),this}rotateOnWorldAxis(t,i){return hr.setFromAxisAngle(t,i),this.quaternion.premultiply(hr),this}rotateX(t){return this.rotateOnAxis(Wx,t)}rotateY(t){return this.rotateOnAxis(Yx,t)}rotateZ(t){return this.rotateOnAxis(Zx,t)}translateOnAxis(t,i){return qx.copy(t).applyQuaternion(this.quaternion),this.position.add(qx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Wx,t)}translateY(t){return this.translateOnAxis(Yx,t)}translateZ(t){return this.translateOnAxis(Zx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(aa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?fc.copy(t):fc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?aa.lookAt(Uo,fc,this.up):aa.lookAt(fc,Uo,this.up),this.quaternion.setFromRotationMatrix(aa),l&&(aa.extractRotation(l.matrixWorld),hr.setFromRotationMatrix(aa),this.quaternion.premultiply(hr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(rn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kx),pr.child=t,this.dispatchEvent(pr),pr.child=null):rn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(kb),pd.child=t,this.dispatchEvent(pd),pd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),aa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),aa.multiply(t.parent.matrixWorld)),t.applyMatrix4(aa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kx),pr.child=t,this.dispatchEvent(pr),pr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,t,Gb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Uo,Vb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const g=m[p];c(t.shapes,g)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),g=d(t.shapes),y=d(t.skeletons),b=d(t.animations),M=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),x.length>0&&(s.images=x),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),b.length>0&&(s.animations=b),M.length>0&&(s.nodes=M)}return s.object=l,s;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new de(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Mi=new de,sa=new de,md=new de,ra=new de,mr=new de,xr=new de,Qx=new de,xd=new de,gd=new de,_d=new de,vd=new tn,yd=new tn,bd=new tn;class Ei{constructor(t=new de,i=new de,s=new de){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Mi.subVectors(t,i),l.cross(Mi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Mi.subVectors(l,i),sa.subVectors(s,i),md.subVectors(t,i);const d=Mi.dot(Mi),h=Mi.dot(sa),m=Mi.dot(md),p=sa.dot(sa),x=sa.dot(md),g=d*p-h*h;if(g===0)return c.set(0,0,0),null;const y=1/g,b=(p*m-h*x)*y,M=(d*x-h*m)*y;return c.set(1-b-M,M,b)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,ra)===null?!1:ra.x>=0&&ra.y>=0&&ra.x+ra.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,ra)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,ra.x),m.addScaledVector(d,ra.y),m.addScaledVector(h,ra.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return vd.setScalar(0),yd.setScalar(0),bd.setScalar(0),vd.fromBufferAttribute(t,i),yd.fromBufferAttribute(t,s),bd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(vd,c.x),d.addScaledVector(yd,c.y),d.addScaledVector(bd,c.z),d}static isFrontFacing(t,i,s,l){return Mi.subVectors(s,i),sa.subVectors(t,i),Mi.cross(sa).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Mi.subVectors(this.c,this.b),sa.subVectors(this.a,this.b),Mi.cross(sa).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ei.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ei.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Ei.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Ei.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ei.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;mr.subVectors(l,s),xr.subVectors(c,s),xd.subVectors(t,s);const m=mr.dot(xd),p=xr.dot(xd);if(m<=0&&p<=0)return i.copy(s);gd.subVectors(t,l);const x=mr.dot(gd),g=xr.dot(gd);if(x>=0&&g<=x)return i.copy(l);const y=m*g-x*p;if(y<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(s).addScaledVector(mr,d);_d.subVectors(t,c);const b=mr.dot(_d),M=xr.dot(_d);if(M>=0&&b<=M)return i.copy(c);const R=b*p-m*M;if(R<=0&&p>=0&&M<=0)return h=p/(p-M),i.copy(s).addScaledVector(xr,h);const S=x*M-b*g;if(S<=0&&g-x>=0&&b-M>=0)return Qx.subVectors(c,l),h=(g-x)/(g-x+(b-M)),i.copy(l).addScaledVector(Qx,h);const _=1/(S+R+y);return d=R*_,h=y*_,i.copy(s).addScaledVector(mr,d).addScaledVector(xr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ja={h:0,s:0,l:0},dc={h:0,s:0,l:0};function Sd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Rt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Lt.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Lt.workingColorSpace){return this.r=t,this.g=i,this.b=s,Lt.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Lt.workingColorSpace){if(t=Db(t,1),i=At(i,0,1),s=At(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=Sd(d,c,t+1/3),this.g=Sd(d,c,t),this.b=Sd(d,c,t-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&ut("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ut("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=t_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ha(t.r),this.g=ha(t.g),this.b=ha(t.b),this}copyLinearToSRGB(t){return this.r=Sr(t.r),this.g=Sr(t.g),this.b=Sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Lt.workingToColorSpace(Un.copy(this),t),Math.round(At(Un.r*255,0,255))*65536+Math.round(At(Un.g*255,0,255))*256+Math.round(At(Un.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Lt.workingColorSpace){Lt.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=x<=.5?g/(d+h):g/(2-d-h),d){case s:m=(l-c)/g+(l<c?6:0);break;case l:m=(c-s)/g+2;break;case c:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Lt.workingColorSpace){return Lt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=pi){Lt.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ja),this.setHSL(ja.h+t,ja.s+i,ja.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ja),t.getHSL(dc);const s=ad(ja.h,dc.h,i),l=ad(ja.s,dc.s,i),c=ad(ja.l,dc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Rt;Rt.NAMES=t_;let jb=0;class Ur extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=ko(),this.name="",this.type="Material",this.blending=br,this.side=Ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bd,this.blendDst=Hd,this.blendEquation=Es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=or,this.stencilZFail=or,this.stencilZPass=or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==br&&(s.blending=this.blending),this.side!==Ja&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bd&&(s.blendSrc=this.blendSrc),this.blendDst!==Hd&&(s.blendDst=this.blendDst),this.blendEquation!==Es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Mr&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Px&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==or&&(s.stencilFail=this.stencilFail),this.stencilZFail!==or&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==or&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Rr extends Ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Hg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new de,hc=new Ot;let Xb=0;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ix,this.updateRanges=[],this.gpuType=fa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)hc.fromBufferAttribute(this,i),hc.applyMatrix3(t),this.setXY(i,hc.x,hc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=wo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=wo(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=wo(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=wo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=wo(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ix&&(t.usage=this.usage),t}}class n_ extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class i_ extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class In extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let qb=0;const hi=new nn,Md=new Mn,gr=new de,ni=new Xo,Lo=new Xo,Sn=new de;class xi extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=ko(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qg(t)?i_:n_)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new pt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new In(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&rn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fc);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){rn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];Lo.setFromBufferAttribute(h),this.morphTargetsRelative?(Sn.addVectors(ni.min,Lo.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,Lo.max),ni.expandByPoint(Sn)):(ni.expandByPoint(Lo.min),ni.expandByPoint(Lo.max))}ni.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Sn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)Sn.fromBufferAttribute(h,p),m&&(gr.fromBufferAttribute(t,p),Sn.add(gr)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&rn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){rn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let $=0;$<s.count;$++)h[$]=new de,m[$]=new de;const p=new de,x=new de,g=new de,y=new Ot,b=new Ot,M=new Ot,R=new de,S=new de;function _($,D,A){p.fromBufferAttribute(s,$),x.fromBufferAttribute(s,D),g.fromBufferAttribute(s,A),y.fromBufferAttribute(c,$),b.fromBufferAttribute(c,D),M.fromBufferAttribute(c,A),x.sub(p),g.sub(p),b.sub(y),M.sub(y);const j=1/(b.x*M.y-M.x*b.y);isFinite(j)&&(R.copy(x).multiplyScalar(M.y).addScaledVector(g,-b.y).multiplyScalar(j),S.copy(g).multiplyScalar(b.x).addScaledVector(x,-M.x).multiplyScalar(j),h[$].add(R),h[D].add(R),h[A].add(R),m[$].add(S),m[D].add(S),m[A].add(S))}let z=this.groups;z.length===0&&(z=[{start:0,count:t.count}]);for(let $=0,D=z.length;$<D;++$){const A=z[$],j=A.start,Y=A.count;for(let Q=j,re=j+Y;Q<re;Q+=3)_(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const L=new de,P=new de,B=new de,O=new de;function H($){B.fromBufferAttribute(l,$),O.copy(B);const D=h[$];L.copy(D),L.sub(B.multiplyScalar(B.dot(D))).normalize(),P.crossVectors(O,D);const j=P.dot(m[$])<0?-1:1;d.setXYZW($,L.x,L.y,L.z,j)}for(let $=0,D=z.length;$<D;++$){const A=z[$],j=A.start,Y=A.count;for(let Q=j,re=j+Y;Q<re;Q+=3)H(t.getX(Q+0)),H(t.getX(Q+1)),H(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,b=s.count;y<b;y++)s.setXYZ(y,0,0,0);const l=new de,c=new de,d=new de,h=new de,m=new de,p=new de,x=new de,g=new de;if(t)for(let y=0,b=t.count;y<b;y+=3){const M=t.getX(y+0),R=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),h.fromBufferAttribute(s,M),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),h.add(x),m.add(x),p.add(x),s.setXYZ(M,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,b=i.count;y<b;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),d.fromBufferAttribute(i,y+2),x.subVectors(d,c),g.subVectors(l,c),x.cross(g),s.setXYZ(y+0,x.x,x.y,x.z),s.setXYZ(y+1,x.x,x.y,x.z),s.setXYZ(y+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Sn.fromBufferAttribute(t,i),Sn.normalize(),t.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,g=h.normalized,y=new p.constructor(m.length*x);let b=0,M=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?b=m[R]*h.data.stride+h.offset:b=m[R]*x;for(let _=0;_<x;_++)y[M++]=p[b++]}return new Li(y,x,g)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new xi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let x=0,g=p.length;x<g;x++){const y=p[x],b=t(y,s);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let g=0,y=p.length;g<y;g++){const b=p[g];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const c=t.morphAttributes;for(const p in c){const x=[],g=c[p];for(let y=0,b=g.length;y<b;y++)x.push(g[y].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jx=new nn,vs=new $g,pc=new Fc,$x=new de,mc=new de,xc=new de,gc=new de,Ed=new de,_c=new de,eg=new de,vc=new de;class Ln extends Mn{constructor(t=new xi,i=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){_c.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const x=h[m],g=c[m];x!==0&&(Ed.fromBufferAttribute(g,t),d?_c.addScaledVector(Ed,x):_c.addScaledVector(Ed.sub(i),x))}i.add(_c)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),pc.copy(s.boundingSphere),pc.applyMatrix4(c),vs.copy(t.ray).recast(t.near),!(pc.containsPoint(vs.origin)===!1&&(vs.intersectSphere(pc,$x)===null||vs.origin.distanceToSquared($x)>(t.far-t.near)**2))&&(Jx.copy(c).invert(),vs.copy(t.ray).applyMatrix4(Jx),!(s.boundingBox!==null&&vs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,vs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,x=c.attributes.uv1,g=c.attributes.normal,y=c.groups,b=c.drawRange;if(h!==null)if(Array.isArray(d))for(let M=0,R=y.length;M<R;M++){const S=y[M],_=d[S.materialIndex],z=Math.max(S.start,b.start),L=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let P=z,B=L;P<B;P+=3){const O=h.getX(P),H=h.getX(P+1),$=h.getX(P+2);l=yc(this,_,t,s,p,x,g,O,H,$),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(h.count,b.start+b.count);for(let S=M,_=R;S<_;S+=3){const z=h.getX(S),L=h.getX(S+1),P=h.getX(S+2);l=yc(this,d,t,s,p,x,g,z,L,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let M=0,R=y.length;M<R;M++){const S=y[M],_=d[S.materialIndex],z=Math.max(S.start,b.start),L=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let P=z,B=L;P<B;P+=3){const O=P,H=P+1,$=P+2;l=yc(this,_,t,s,p,x,g,O,H,$),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const M=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let S=M,_=R;S<_;S+=3){const z=S,L=S+1,P=S+2;l=yc(this,d,t,s,p,x,g,z,L,P),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Wb(o,t,i,s,l,c,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===Ja,h),m===null)return null;vc.copy(h),vc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(vc);return p<i.near||p>i.far?null:{distance:p,point:vc.clone(),object:o}}function yc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,mc),o.getVertexPosition(m,xc),o.getVertexPosition(p,gc);const x=Wb(o,t,i,s,mc,xc,gc,eg);if(x){const g=new de;Ei.getBarycoord(eg,mc,xc,gc,g),l&&(x.uv=Ei.getInterpolatedAttribute(l,h,m,p,g,new Ot)),c&&(x.uv1=Ei.getInterpolatedAttribute(c,h,m,p,g,new Ot)),d&&(x.normal=Ei.getInterpolatedAttribute(d,h,m,p,g,new de),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const y={a:h,b:m,c:p,normal:new de,materialIndex:0};Ei.getNormal(mc,xc,gc,y.normal),x.face=y,x.barycoord=g}return x}class qo extends xi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],x=[],g=[];let y=0,b=0;M("z","y","x",-1,-1,s,i,t,d,c,0),M("z","y","x",1,-1,s,i,-t,d,c,1),M("x","z","y",1,1,t,s,i,l,d,2),M("x","z","y",1,-1,t,s,-i,l,d,3),M("x","y","z",1,-1,t,i,s,l,c,4),M("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new In(p,3)),this.setAttribute("normal",new In(x,3)),this.setAttribute("uv",new In(g,2));function M(R,S,_,z,L,P,B,O,H,$,D){const A=P/H,j=B/$,Y=P/2,Q=B/2,re=O/2,ae=H+1,I=$+1;let G=0,U=0;const V=new de;for(let J=0;J<I;J++){const N=J*j-Q;for(let X=0;X<ae;X++){const se=X*A-Y;V[R]=se*z,V[S]=N*L,V[_]=re,p.push(V.x,V.y,V.z),V[R]=0,V[S]=0,V[_]=O>0?1:-1,x.push(V.x,V.y,V.z),g.push(X/H),g.push(1-J/$),G+=1}}for(let J=0;J<$;J++)for(let N=0;N<H;N++){const X=y+N+ae*J,se=y+N+ae*(J+1),pe=y+(N+1)+ae*(J+1),Me=y+(N+1)+ae*J;m.push(X,se,Me),m.push(se,pe,Me),U+=6}h.addGroup(b,U,D),b+=U,y+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)t[l]=s[l]}return t}function Yb(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function a_(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Lt.workingColorSpace}const Zb={clone:Cr,merge:zn};var Kb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pa extends Ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kb,this.fragmentShader=Qb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Yb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class s_ extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new de,tg=new Ot,ng=new Ot;class ii extends s_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Ah*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(id*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ah*2*Math.atan(Math.tan(id*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,tg,ng),i.subVectors(ng,tg)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(id*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const _r=-90,vr=1;class Jb extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ii(_r,vr,t,i);l.layers=this.layers,this.add(l);const c=new ii(_r,vr,t,i);c.layers=this.layers,this.add(c);const d=new ii(_r,vr,t,i);d.layers=this.layers,this.add(d);const h=new ii(_r,vr,t,i);h.layers=this.layers,this.add(h);const m=new ii(_r,vr,t,i);m.layers=this.layers,this.add(m);const p=new ii(_r,vr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ui)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Lc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,x]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),M=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,x),t.setRenderTarget(g,y,b),t.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class r_ extends Pn{constructor(t=[],i=Er,s,l,c,d,h,m,p,x){super(t,i,s,l,c,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class $b extends Cs{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new r_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new qo(5,5,5),c=new pa({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:da});c.uniforms.tEquirect.value=i;const d=new Ln(l,c),h=i.minFilter;return i.minFilter===As&&(i.minFilter=mi),new Jb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Ya extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eS={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ya,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ya,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ya,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,s),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const x=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],y=x.position.distanceTo(g.position),b=.02,M=.005;p.inputState.pinching&&y>b+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&y<=b-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(eS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ya;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class o_ extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class tS extends Pn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=ai,x=ai,g,y){super(null,d,h,m,p,x,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ad=new de,nS=new de,iS=new pt;class Ms{constructor(t=new de(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ad.subVectors(s,i).cross(nS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ad),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||iS.getNormalMatrix(t),l=this.coplanarPoint(Ad).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Fc,aS=new Ot(.5,.5),bc=new de;class Hh{constructor(t=new Ms,i=new Ms,s=new Ms,l=new Ms,c=new Ms,d=new Ms){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ui,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],x=c[4],g=c[5],y=c[6],b=c[7],M=c[8],R=c[9],S=c[10],_=c[11],z=c[12],L=c[13],P=c[14],B=c[15];if(l[0].setComponents(p-d,b-x,_-M,B-z).normalize(),l[1].setComponents(p+d,b+x,_+M,B+z).normalize(),l[2].setComponents(p+h,b+g,_+R,B+L).normalize(),l[3].setComponents(p-h,b-g,_-R,B-L).normalize(),s)l[4].setComponents(m,y,S,P).normalize(),l[5].setComponents(p-m,b-y,_-S,B-P).normalize();else if(l[4].setComponents(p-m,b-y,_-S,B-P).normalize(),i===Ui)l[5].setComponents(p+m,b+y,_+S,B+P).normalize();else if(i===Lc)l[5].setComponents(m,y,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const i=aS.distanceTo(t.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class l_ extends Ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const zc=new de,Pc=new de,ig=new nn,Oo=new $g,Sc=new Fc,Rd=new de,ag=new de;class sS extends Mn{constructor(t=new xi,i=new l_){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)zc.fromBufferAttribute(i,l-1),Pc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=zc.distanceTo(Pc);t.setAttribute("lineDistance",new In(s,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,d=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Sc.copy(s.boundingSphere),Sc.applyMatrix4(l),Sc.radius+=c,t.ray.intersectsSphere(Sc)===!1)return;ig.copy(l).invert(),Oo.copy(t.ray).applyMatrix4(ig);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=h*h,p=this.isLineSegments?2:1,x=s.index,y=s.attributes.position;if(x!==null){const b=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let R=b,S=M-1;R<S;R+=p){const _=x.getX(R),z=x.getX(R+1),L=Mc(this,t,Oo,m,_,z,R);L&&i.push(L)}if(this.isLineLoop){const R=x.getX(M-1),S=x.getX(b),_=Mc(this,t,Oo,m,R,S,M-1);_&&i.push(_)}}else{const b=Math.max(0,d.start),M=Math.min(y.count,d.start+d.count);for(let R=b,S=M-1;R<S;R+=p){const _=Mc(this,t,Oo,m,R,R+1,R);_&&i.push(_)}if(this.isLineLoop){const R=Mc(this,t,Oo,m,M-1,b,M-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Mc(o,t,i,s,l,c,d){const h=o.geometry.attributes.position;if(zc.fromBufferAttribute(h,l),Pc.fromBufferAttribute(h,c),i.distanceSqToSegment(zc,Pc,Rd,ag)>s)return;Rd.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(Rd);if(!(p<t.near||p>t.far))return{distance:p,point:ag.clone().applyMatrix4(o.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:o}}class c_ extends Pn{constructor(t,i,s=Rs,l,c,d,h=ai,m=ai,p,x=Ho,g=1){if(x!==Ho&&x!==Go)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,d,h,m,x,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Bh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class u_ extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gh extends xi{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const x=[],g=[],y=[],b=[];let M=0;const R=[],S=s/2;let _=0;z(),d===!1&&(t>0&&L(!0),i>0&&L(!1)),this.setIndex(x),this.setAttribute("position",new In(g,3)),this.setAttribute("normal",new In(y,3)),this.setAttribute("uv",new In(b,2));function z(){const P=new de,B=new de;let O=0;const H=(i-t)/s;for(let $=0;$<=c;$++){const D=[],A=$/c,j=A*(i-t)+t;for(let Y=0;Y<=l;Y++){const Q=Y/l,re=Q*m+h,ae=Math.sin(re),I=Math.cos(re);B.x=j*ae,B.y=-A*s+S,B.z=j*I,g.push(B.x,B.y,B.z),P.set(ae,H,I).normalize(),y.push(P.x,P.y,P.z),b.push(Q,1-A),D.push(M++)}R.push(D)}for(let $=0;$<l;$++)for(let D=0;D<c;D++){const A=R[D][$],j=R[D+1][$],Y=R[D+1][$+1],Q=R[D][$+1];(t>0||D!==0)&&(x.push(A,j,Q),O+=3),(i>0||D!==c-1)&&(x.push(j,Y,Q),O+=3)}p.addGroup(_,O,0),_+=O}function L(P){const B=M,O=new Ot,H=new de;let $=0;const D=P===!0?t:i,A=P===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,S*A,0),y.push(0,A,0),b.push(.5,.5),M++;const j=M;for(let Y=0;Y<=l;Y++){const re=Y/l*m+h,ae=Math.cos(re),I=Math.sin(re);H.x=D*I,H.y=S*A,H.z=D*ae,g.push(H.x,H.y,H.z),y.push(0,A,0),O.x=ae*.5+.5,O.y=I*.5*A+.5,b.push(O.x,O.y),M++}for(let Y=0;Y<l;Y++){const Q=B+Y,re=j+Y;P===!0?x.push(re,re+1,Q):x.push(re+1,re,Q),$+=3}p.addGroup(_,$,P===!0?1:2),_+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Bc extends Gh{constructor(t=1,i=1,s=32,l=1,c=!1,d=0,h=Math.PI*2){super(0,t,i,s,l,c,d,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(t){return new Bc(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hc extends xi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,x=m+1,g=t/h,y=i/m,b=[],M=[],R=[],S=[];for(let _=0;_<x;_++){const z=_*y-d;for(let L=0;L<p;L++){const P=L*g-c;M.push(P,-z,0),R.push(0,0,1),S.push(L/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let z=0;z<h;z++){const L=z+p*_,P=z+p*(_+1),B=z+1+p*(_+1),O=z+1+p*_;b.push(L,P,O),b.push(P,B,O)}this.setIndex(b),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hc(t.width,t.height,t.widthSegments,t.heightSegments)}}class wr extends xi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const x=[],g=new de,y=new de,b=[],M=[],R=[],S=[];for(let _=0;_<=s;_++){const z=[],L=_/s;let P=0;_===0&&d===0?P=.5/i:_===s&&m===Math.PI&&(P=-.5/i);for(let B=0;B<=i;B++){const O=B/i;g.x=-t*Math.cos(l+O*c)*Math.sin(d+L*h),g.y=t*Math.cos(d+L*h),g.z=t*Math.sin(l+O*c)*Math.sin(d+L*h),M.push(g.x,g.y,g.z),y.copy(g).normalize(),R.push(y.x,y.y,y.z),S.push(O+P,1-L),z.push(p++)}x.push(z)}for(let _=0;_<s;_++)for(let z=0;z<i;z++){const L=x[_][z+1],P=x[_][z],B=x[_+1][z],O=x[_+1][z+1];(_!==0||d>0)&&b.push(L,P,O),(_!==s-1||m<Math.PI)&&b.push(P,B,O)}this.setIndex(b),this.setAttribute("position",new In(M,3)),this.setAttribute("normal",new In(R,3)),this.setAttribute("uv",new In(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Rh extends Ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class rS extends Ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class oS extends Ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class f_ extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const Cd=new nn,sg=new de,rg=new de;class lS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ot(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new nn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new Ot(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;sg.setFromMatrixPosition(t.matrixWorld),i.position.copy(sg),rg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(rg),i.updateMatrixWorld(),Cd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class d_ extends s_{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cS extends lS{constructor(){super(new d_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class h_ extends f_{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new cS}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class p_ extends f_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class uS extends ii{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class m_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}const og=new de;let Ec,wd;class fS extends Mn{constructor(t=new de(0,0,1),i=new de(0,0,0),s=1,l=16776960,c=s*.2,d=c*.2){super(),this.type="ArrowHelper",Ec===void 0&&(Ec=new xi,Ec.setAttribute("position",new In([0,0,0,0,1,0],3)),wd=new Bc(.5,1,5,1),wd.translate(0,-.5,0)),this.position.copy(i),this.line=new sS(Ec,new l_({color:l,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ln(wd,new Rr({color:l,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(t),this.setLength(s,c,d)}setDirection(t){if(t.y>.99999)this.quaternion.set(0,0,0,1);else if(t.y<-.99999)this.quaternion.set(1,0,0,0);else{og.set(t.z,0,-t.x).normalize();const i=Math.acos(t.y);this.quaternion.setFromAxisAngle(og,i)}}setLength(t,i=t*.2,s=i*.2){this.line.scale.set(1,Math.max(1e-4,t-i),1),this.line.updateMatrix(),this.cone.scale.set(s,i,s),this.cone.position.y=t,this.cone.updateMatrix()}setColor(t){this.line.material.color.set(t),this.cone.material.color.set(t)}copy(t){return super.copy(t,!1),this.line.copy(t.line),this.cone.copy(t.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}function lg(o,t,i,s){const l=dS(s);switch(i){case qg:return o*t;case Yg:return o*t/l.components*l.byteLength;case zh:return o*t/l.components*l.byteLength;case Ph:return o*t*2/l.components*l.byteLength;case Ih:return o*t*2/l.components*l.byteLength;case Wg:return o*t*3/l.components*l.byteLength;case Ti:return o*t*4/l.components*l.byteLength;case Fh:return o*t*4/l.components*l.byteLength;case Rc:case Cc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case wc:case Dc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case $d:case th:return Math.max(o,16)*Math.max(t,8)/4;case Jd:case eh:return Math.max(o,8)*Math.max(t,8)/2;case nh:case ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case sh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case rh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case oh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case lh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case ch:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case uh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case fh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case dh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ph:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case mh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case xh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case gh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case _h:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case vh:case yh:case bh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Sh:case Mh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Eh:case Th:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function dS(o){switch(o){case Oi:case Vg:return{byteLength:1,components:1};case Fo:case kg:case Dr:return{byteLength:2,components:1};case Lh:case Oh:return{byteLength:2,components:4};case Rs:case Uh:case fa:return{byteLength:4,components:1};case jg:case Xg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Nh}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Nh);function x_(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function hS(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,g=p.byteLength,y=o.createBuffer();o.bindBuffer(m,y),o.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function s(h,m,p){const x=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,x);else{g.sort((b,M)=>b.start-M.start);let y=0;for(let b=1;b<g.length;b++){const M=g[y],R=g[b];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++y,g[y]=R)}g.length=y+1;for(let b=0,M=g.length;b<M;b++){const R=g[b];o.bufferSubData(p,R.start*x.BYTES_PER_ELEMENT,x,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var pS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mS=`#ifdef USE_ALPHAHASH
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
#endif`,xS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_S=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yS=`#ifdef USE_AOMAP
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
#endif`,bS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SS=`#ifdef USE_BATCHING
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
#endif`,MS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ES=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,AS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,RS=`#ifdef USE_IRIDESCENCE
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
#endif`,CS=`#ifdef USE_BUMPMAP
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,DS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,NS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,US=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,OS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,PS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,IS=`#define PI 3.141592653589793
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
} // validated`,FS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,BS=`vec3 transformedNormal = objectNormal;
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
#endif`,HS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,GS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,VS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jS="gl_FragColor = linearToOutputTexel( gl_FragColor );",XS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,YS=`#ifdef USE_ENVMAP
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
#endif`,ZS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,KS=`#ifdef USE_ENVMAP
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
#endif`,QS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,JS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$S=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,e1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,t1=`#ifdef USE_GRADIENTMAP
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
}`,n1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,s1=`uniform bool receiveShadow;
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
#endif`,r1=`#ifdef USE_ENVMAP
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
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,l1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,c1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,f1=`PhysicalMaterial material;
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
#endif`,d1=`uniform sampler2D dfgLUT;
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
}`,h1=`
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
#endif`,p1=`#if defined( RE_IndirectDiffuse )
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
#endif`,m1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,b1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M1=`#if defined( USE_POINTS_UV )
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
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,A1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,R1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w1=`#ifdef USE_MORPHTARGETS
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
#endif`,D1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,U1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,L1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,O1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,P1=`#ifdef USE_NORMALMAP
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
#endif`,I1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,F1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,H1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,V1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J1=`float getShadowMask() {
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
}`,$1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,bM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,AM=`uniform vec3 diffuse;
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
}`,RM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,wM=`#define LAMBERT
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
}`,DM=`#define LAMBERT
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
}`,NM=`#define MATCAP
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
}`,UM=`#define MATCAP
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
}`,LM=`#define NORMAL
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
}`,OM=`#define NORMAL
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
}`,zM=`#define PHONG
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
}`,PM=`#define PHONG
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
}`,IM=`#define STANDARD
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
}`,FM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,HM=`#define TOON
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
}`,GM=`uniform float size;
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
}`,VM=`uniform vec3 diffuse;
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
}`,kM=`#include <common>
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
}`,jM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:pS,alphahash_pars_fragment:mS,alphamap_fragment:xS,alphamap_pars_fragment:gS,alphatest_fragment:_S,alphatest_pars_fragment:vS,aomap_fragment:yS,aomap_pars_fragment:bS,batching_pars_vertex:SS,batching_vertex:MS,begin_vertex:ES,beginnormal_vertex:TS,bsdfs:AS,iridescence_fragment:RS,bumpmap_pars_fragment:CS,clipping_planes_fragment:wS,clipping_planes_pars_fragment:DS,clipping_planes_pars_vertex:NS,clipping_planes_vertex:US,color_fragment:LS,color_pars_fragment:OS,color_pars_vertex:zS,color_vertex:PS,common:IS,cube_uv_reflection_fragment:FS,defaultnormal_vertex:BS,displacementmap_pars_vertex:HS,displacementmap_vertex:GS,emissivemap_fragment:VS,emissivemap_pars_fragment:kS,colorspace_fragment:jS,colorspace_pars_fragment:XS,envmap_fragment:qS,envmap_common_pars_fragment:WS,envmap_pars_fragment:YS,envmap_pars_vertex:ZS,envmap_physical_pars_fragment:r1,envmap_vertex:KS,fog_vertex:QS,fog_pars_vertex:JS,fog_fragment:$S,fog_pars_fragment:e1,gradientmap_pars_fragment:t1,lightmap_pars_fragment:n1,lights_lambert_fragment:i1,lights_lambert_pars_fragment:a1,lights_pars_begin:s1,lights_toon_fragment:o1,lights_toon_pars_fragment:l1,lights_phong_fragment:c1,lights_phong_pars_fragment:u1,lights_physical_fragment:f1,lights_physical_pars_fragment:d1,lights_fragment_begin:h1,lights_fragment_maps:p1,lights_fragment_end:m1,logdepthbuf_fragment:x1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:y1,map_pars_fragment:b1,map_particle_fragment:S1,map_particle_pars_fragment:M1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:T1,morphinstance_vertex:A1,morphcolor_vertex:R1,morphnormal_vertex:C1,morphtarget_pars_vertex:w1,morphtarget_vertex:D1,normal_fragment_begin:N1,normal_fragment_maps:U1,normal_pars_fragment:L1,normal_pars_vertex:O1,normal_vertex:z1,normalmap_pars_fragment:P1,clearcoat_normal_fragment_begin:I1,clearcoat_normal_fragment_maps:F1,clearcoat_pars_fragment:B1,iridescence_pars_fragment:H1,opaque_fragment:G1,packing:V1,premultiplied_alpha_fragment:k1,project_vertex:j1,dithering_fragment:X1,dithering_pars_fragment:q1,roughnessmap_fragment:W1,roughnessmap_pars_fragment:Y1,shadowmap_pars_fragment:Z1,shadowmap_pars_vertex:K1,shadowmap_vertex:Q1,shadowmask_pars_fragment:J1,skinbase_vertex:$1,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:aM,tonemapping_fragment:sM,tonemapping_pars_fragment:rM,transmission_fragment:oM,transmission_pars_fragment:lM,uv_pars_fragment:cM,uv_pars_vertex:uM,uv_vertex:fM,worldpos_vertex:dM,background_vert:hM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:xM,cube_vert:gM,cube_frag:_M,depth_vert:vM,depth_frag:yM,distanceRGBA_vert:bM,distanceRGBA_frag:SM,equirect_vert:MM,equirect_frag:EM,linedashed_vert:TM,linedashed_frag:AM,meshbasic_vert:RM,meshbasic_frag:CM,meshlambert_vert:wM,meshlambert_frag:DM,meshmatcap_vert:NM,meshmatcap_frag:UM,meshnormal_vert:LM,meshnormal_frag:OM,meshphong_vert:zM,meshphong_frag:PM,meshphysical_vert:IM,meshphysical_frag:FM,meshtoon_vert:BM,meshtoon_frag:HM,points_vert:GM,points_frag:VM,shadow_vert:kM,shadow_frag:jM,sprite_vert:XM,sprite_frag:qM},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new Ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},Ni={basic:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:zn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:zn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:zn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:zn([Pe.points,Pe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:zn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:zn([Pe.common,Pe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:zn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:zn([Pe.sprite,Pe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distanceRGBA:{uniforms:zn([Pe.common,Pe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distanceRGBA_vert,fragmentShader:xt.distanceRGBA_frag},shadow:{uniforms:zn([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ni.physical={uniforms:zn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new Ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new Ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new Ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Tc={r:0,b:0,g:0},bs=new zi,WM=new nn;function YM(o,t,i,s,l,c,d){const h=new Rt(0);let m=c===!0?0:1,p,x,g=null,y=0,b=null;function M(L){let P=L.isScene===!0?L.background:null;return P&&P.isTexture&&(P=(L.backgroundBlurriness>0?i:t).get(P)),P}function R(L){let P=!1;const B=M(L);B===null?_(h,m):B&&B.isColor&&(_(B,1),P=!0);const O=o.xr.getEnvironmentBlendMode();O==="additive"?s.buffers.color.setClear(0,0,0,1,d):O==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(L,P){const B=M(P);B&&(B.isCubeTexture||B.mapping===Ic)?(x===void 0&&(x=new Ln(new qo(1,1,1),new pa({name:"BackgroundCubeMaterial",uniforms:Cr(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(O,H,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),bs.copy(P.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,B.isCubeTexture&&B.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),x.material.uniforms.envMap.value=B,x.material.uniforms.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(WM.makeRotationFromEuler(bs)),x.material.toneMapped=Lt.getTransfer(B.colorSpace)!==jt,(g!==B||y!==B.version||b!==o.toneMapping)&&(x.material.needsUpdate=!0,g=B,y=B.version,b=o.toneMapping),x.layers.enableAll(),L.unshift(x,x.geometry,x.material,0,0,null)):B&&B.isTexture&&(p===void 0&&(p=new Ln(new Hc(2,2),new pa({name:"BackgroundMaterial",uniforms:Cr(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:Ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=B,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=Lt.getTransfer(B.colorSpace)!==jt,B.matrixAutoUpdate===!0&&B.updateMatrix(),p.material.uniforms.uvTransform.value.copy(B.matrix),(g!==B||y!==B.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,g=B,y=B.version,b=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function _(L,P){L.getRGB(Tc,a_(o)),s.buffers.color.setClear(Tc.r,Tc.g,Tc.b,P,d)}function z(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(L,P=1){h.set(L),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,_(h,m)},render:R,addToRenderList:S,dispose:z}}function ZM(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,d=!1;function h(A,j,Y,Q,re){let ae=!1;const I=g(Q,Y,j);c!==I&&(c=I,p(c.object)),ae=b(A,Q,Y,re),ae&&M(A,Q,Y,re),re!==null&&t.update(re,o.ELEMENT_ARRAY_BUFFER),(ae||d)&&(d=!1,P(A,j,Y,Q),re!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(re).buffer))}function m(){return o.createVertexArray()}function p(A){return o.bindVertexArray(A)}function x(A){return o.deleteVertexArray(A)}function g(A,j,Y){const Q=Y.wireframe===!0;let re=s[A.id];re===void 0&&(re={},s[A.id]=re);let ae=re[j.id];ae===void 0&&(ae={},re[j.id]=ae);let I=ae[Q];return I===void 0&&(I=y(m()),ae[Q]=I),I}function y(A){const j=[],Y=[],Q=[];for(let re=0;re<i;re++)j[re]=0,Y[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:Y,attributeDivisors:Q,object:A,attributes:{},index:null}}function b(A,j,Y,Q){const re=c.attributes,ae=j.attributes;let I=0;const G=Y.getAttributes();for(const U in G)if(G[U].location>=0){const J=re[U];let N=ae[U];if(N===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(N=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(N=A.instanceColor)),J===void 0||J.attribute!==N||N&&J.data!==N.data)return!0;I++}return c.attributesNum!==I||c.index!==Q}function M(A,j,Y,Q){const re={},ae=j.attributes;let I=0;const G=Y.getAttributes();for(const U in G)if(G[U].location>=0){let J=ae[U];J===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(J=A.instanceColor));const N={};N.attribute=J,J&&J.data&&(N.data=J.data),re[U]=N,I++}c.attributes=re,c.attributesNum=I,c.index=Q}function R(){const A=c.newAttributes;for(let j=0,Y=A.length;j<Y;j++)A[j]=0}function S(A){_(A,0)}function _(A,j){const Y=c.newAttributes,Q=c.enabledAttributes,re=c.attributeDivisors;Y[A]=1,Q[A]===0&&(o.enableVertexAttribArray(A),Q[A]=1),re[A]!==j&&(o.vertexAttribDivisor(A,j),re[A]=j)}function z(){const A=c.newAttributes,j=c.enabledAttributes;for(let Y=0,Q=j.length;Y<Q;Y++)j[Y]!==A[Y]&&(o.disableVertexAttribArray(Y),j[Y]=0)}function L(A,j,Y,Q,re,ae,I){I===!0?o.vertexAttribIPointer(A,j,Y,re,ae):o.vertexAttribPointer(A,j,Y,Q,re,ae)}function P(A,j,Y,Q){R();const re=Q.attributes,ae=Y.getAttributes(),I=j.defaultAttributeValues;for(const G in ae){const U=ae[G];if(U.location>=0){let V=re[G];if(V===void 0&&(G==="instanceMatrix"&&A.instanceMatrix&&(V=A.instanceMatrix),G==="instanceColor"&&A.instanceColor&&(V=A.instanceColor)),V!==void 0){const J=V.normalized,N=V.itemSize,X=t.get(V);if(X===void 0)continue;const se=X.buffer,pe=X.type,Me=X.bytesPerElement,K=pe===o.INT||pe===o.UNSIGNED_INT||V.gpuType===Uh;if(V.isInterleavedBufferAttribute){const ie=V.data,_e=ie.stride,Ee=V.offset;if(ie.isInstancedInterleavedBuffer){for(let Ue=0;Ue<U.locationSize;Ue++)_(U.location+Ue,ie.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<U.locationSize;Ue++)S(U.location+Ue);o.bindBuffer(o.ARRAY_BUFFER,se);for(let Ue=0;Ue<U.locationSize;Ue++)L(U.location+Ue,N/U.locationSize,pe,J,_e*Me,(Ee+N/U.locationSize*Ue)*Me,K)}else{if(V.isInstancedBufferAttribute){for(let ie=0;ie<U.locationSize;ie++)_(U.location+ie,V.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ie=0;ie<U.locationSize;ie++)S(U.location+ie);o.bindBuffer(o.ARRAY_BUFFER,se);for(let ie=0;ie<U.locationSize;ie++)L(U.location+ie,N/U.locationSize,pe,J,N*Me,N/U.locationSize*ie*Me,K)}}else if(I!==void 0){const J=I[G];if(J!==void 0)switch(J.length){case 2:o.vertexAttrib2fv(U.location,J);break;case 3:o.vertexAttrib3fv(U.location,J);break;case 4:o.vertexAttrib4fv(U.location,J);break;default:o.vertexAttrib1fv(U.location,J)}}}}z()}function B(){$();for(const A in s){const j=s[A];for(const Y in j){const Q=j[Y];for(const re in Q)x(Q[re].object),delete Q[re];delete j[Y]}delete s[A]}}function O(A){if(s[A.id]===void 0)return;const j=s[A.id];for(const Y in j){const Q=j[Y];for(const re in Q)x(Q[re].object),delete Q[re];delete j[Y]}delete s[A.id]}function H(A){for(const j in s){const Y=s[j];if(Y[A.id]===void 0)continue;const Q=Y[A.id];for(const re in Q)x(Q[re].object),delete Q[re];delete Y[A.id]}}function $(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:$,resetDefaultState:D,dispose:B,releaseStatesOfGeometry:O,releaseStatesOfProgram:H,initAttributes:R,enableAttribute:S,disableUnusedAttributes:z}}function KM(o,t,i){let s;function l(p){s=p}function c(p,x){o.drawArrays(s,p,x),i.update(x,s,1)}function d(p,x,g){g!==0&&(o.drawArraysInstanced(s,p,x,g),i.update(x,s,g))}function h(p,x,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,x,0,g);let b=0;for(let M=0;M<g;M++)b+=x[M];i.update(b,s,1)}function m(p,x,g,y){if(g===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let M=0;M<p.length;M++)d(p[M],x[M],y[M]);else{b.multiDrawArraysInstancedWEBGL(s,p,0,x,0,y,0,g);let M=0;for(let R=0;R<g;R++)M+=x[R]*y[R];i.update(M,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function QM(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const H=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(H.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(H){return!(H!==Ti&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(H){const $=H===Dr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(H!==Oi&&s.convert(H)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&H!==fa&&!$)}function m(H){if(H==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";H="mediump"}return H==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ut("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),z=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),B=M>0,O=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:b,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:z,maxVaryings:L,maxFragmentUniforms:P,vertexTextures:B,maxSamples:O}}function JM(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Ms,h=new pt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const b=g.length!==0||y||s!==0||l;return l=y,s=g.length,b},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=x(g,y,0)},this.setState=function(g,y,b){const M=g.clippingPlanes,R=g.clipIntersection,S=g.clipShadows,_=o.get(g);if(!l||M===null||M.length===0||c&&!S)c?x(null):p();else{const z=c?0:s,L=z*4;let P=_.clippingState||null;m.value=P,P=x(M,y,L,b);for(let B=0;B!==L;++B)P[B]=i[B];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=z}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function x(g,y,b,M){const R=g!==null?g.length:0;let S=null;if(R!==0){if(S=m.value,M!==!0||S===null){const _=b+R*4,z=y.matrixWorldInverse;h.getNormalMatrix(z),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,P=b;L!==R;++L,P+=4)d.copy(g[L]).applyMatrix4(z,h),d.normal.toArray(S,P),S[P+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function $M(o){let t=new WeakMap;function i(d,h){return h===Yd?d.mapping=Er:h===Zd&&(d.mapping=Tr),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Yd||h===Zd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new $b(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Za=4,cg=[.125,.215,.35,.446,.526,.582],Ts=20,e3=256,zo=new d_,ug=new Rt;let Dd=null,Nd=0,Ud=0,Ld=!1;const t3=new de;class fg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=t3}=c;Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dd,Nd,Ud),this._renderer.xr.enabled=Ld,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Er||t.mapping===Tr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dd=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ud=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:Dr,format:Ti,colorSpace:Ar,depthBuffer:!1},l=dg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dg(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=n3(c)),this._blurMaterial=a3(c,t,i)}return l}_compileMaterial(t){const i=new Ln(new xi,t);this._renderer.compile(i,zo)}_sceneToCubeUV(t,i,s,l,c){const m=new ii(90,1,i,s),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,b=g.toneMapping;g.getClearColor(ug),g.toneMapping=Qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ln(new qo,new Rr({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let _=!1;const z=t.background;z?z.isColor&&(S.color.copy(z),t.background=null,_=!0):(S.color.copy(ug),_=!0);for(let L=0;L<6;L++){const P=L%3;P===0?(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+x[L],c.y,c.z)):P===1?(m.up.set(0,0,p[L]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+x[L],c.z)):(m.up.set(0,p[L],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+x[L]));const B=this._cubeSize;yr(l,P*B,L>2?B:0,B,B),g.setRenderTarget(l),_&&g.render(R,m),g.render(t,m)}g.toneMapping=b,g.autoClear=y,t.background=z}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Er||t.mapping===Tr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=pg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;yr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,zo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const z=3*Math.max(this._cubeSize,16),L=4*this._cubeSize;this._ggxMaterial=i3(this._lodMax,z,L)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-x*x),y=.05+p*.95,b=g*y,{_lodMax:M}=this,R=this._sizeLods[s],S=3*R*(s>M-Za?s-M+Za:0),_=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=M-i,yr(c,S,_,3*R,2*R),l.setRenderTarget(c),l.render(h,zo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=M-s,yr(t,S,_,3*R,2*R),l.setRenderTarget(t),l.render(h,zo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&rn("blur direction must be either latitudinal or longitudinal!");const x=3,g=this._lodMeshes[l];g.material=p;const y=p.uniforms,b=this._sizeLods[s]-1,M=isFinite(c)?Math.PI/(2*b):2*Math.PI/(2*Ts-1),R=c/M,S=isFinite(c)?1+Math.floor(x*R):Ts;S>Ts&&ut(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ts}`);const _=[];let z=0;for(let H=0;H<Ts;++H){const $=H/R,D=Math.exp(-$*$/2);_.push(D),H===0?z+=D:H<S&&(z+=2*D)}for(let H=0;H<_.length;H++)_[H]=_[H]/z;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=d==="latitudinal",h&&(y.poleAxis.value=h);const{_lodMax:L}=this;y.dTheta.value=M,y.mipInt.value=L-s;const P=this._sizeLods[l],B=3*P*(l>L-Za?l-L+Za:0),O=4*(this._cubeSize-P);yr(i,B,O,3*P,2*P),m.setRenderTarget(i),m.render(g,zo)}}function n3(o){const t=[],i=[],s=[];let l=o;const c=o-Za+1+cg.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Za?m=cg[d-o+Za-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,g=1+p,y=[x,x,g,x,g,g,x,x,g,g,x,g],b=6,M=6,R=3,S=2,_=1,z=new Float32Array(R*M*b),L=new Float32Array(S*M*b),P=new Float32Array(_*M*b);for(let O=0;O<b;O++){const H=O%3*2/3-1,$=O>2?0:-1,D=[H,$,0,H+2/3,$,0,H+2/3,$+1,0,H,$,0,H+2/3,$+1,0,H,$+1,0];z.set(D,R*M*O),L.set(y,S*M*O);const A=[O,O,O,O,O,O];P.set(A,_*M*O)}const B=new xi;B.setAttribute("position",new Li(z,R)),B.setAttribute("uv",new Li(L,S)),B.setAttribute("faceIndex",new Li(P,_)),s.push(new Ln(B,null)),l>Za&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function dg(o,t,i){const s=new Cs(o,t,i);return s.texture.mapping=Ic,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function i3(o,t,i){return new pa({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:e3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function a3(o,t,i){const s=new Float32Array(Ts),l=new de(0,1,0);return new pa({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function hg(){return new pa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gc(),fragmentShader:`

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
		`,blending:da,depthTest:!1,depthWrite:!1})}function pg(){return new pa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:da,depthTest:!1,depthWrite:!1})}function Gc(){return`

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
	`}function s3(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Yd||m===Zd,x=m===Er||m===Tr;if(p||x){let g=t.get(h);const y=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==y)return i===null&&(i=new fg(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new fg(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",c),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function r3(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vo("WebGLRenderer: "+s+" extension not supported."),l}}}function o3(o,t,i,s){const l={},c=new WeakMap;function d(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const M in y.attributes)t.remove(y.attributes[M]);y.removeEventListener("dispose",d),delete l[y.id];const b=c.get(y);b&&(t.remove(b),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function h(g,y){return l[y.id]===!0||(y.addEventListener("dispose",d),l[y.id]=!0,i.memory.geometries++),y}function m(g){const y=g.attributes;for(const b in y)t.update(y[b],o.ARRAY_BUFFER)}function p(g){const y=[],b=g.index,M=g.attributes.position;let R=0;if(b!==null){const z=b.array;R=b.version;for(let L=0,P=z.length;L<P;L+=3){const B=z[L+0],O=z[L+1],H=z[L+2];y.push(B,O,O,H,H,B)}}else if(M!==void 0){const z=M.array;R=M.version;for(let L=0,P=z.length/3-1;L<P;L+=3){const B=L+0,O=L+1,H=L+2;y.push(B,O,O,H,H,B)}}else return;const S=new(Qg(y)?i_:n_)(y,1);S.version=R;const _=c.get(g);_&&t.remove(_),c.set(g,S)}function x(g){const y=c.get(g);if(y){const b=g.index;b!==null&&y.version<b.version&&p(g)}else p(g);return c.get(g)}return{get:h,update:m,getWireframeAttribute:x}}function l3(o,t,i){let s;function l(y){s=y}let c,d;function h(y){c=y.type,d=y.bytesPerElement}function m(y,b){o.drawElements(s,b,c,y*d),i.update(b,s,1)}function p(y,b,M){M!==0&&(o.drawElementsInstanced(s,b,c,y*d,M),i.update(b,s,M))}function x(y,b,M){if(M===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,b,0,c,y,0,M);let S=0;for(let _=0;_<M;_++)S+=b[_];i.update(S,s,1)}function g(y,b,M,R){if(M===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)p(y[_]/d,b[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(s,b,0,c,y,0,R,0,M);let _=0;for(let z=0;z<M;z++)_+=b[z]*R[z];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=g}function c3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:rn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function u3(o,t,i){const s=new WeakMap,l=new tn;function c(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=x!==void 0?x.length:0;let y=s.get(h);if(y===void 0||y.count!==g){let A=function(){$.dispose(),s.delete(h),h.removeEventListener("dispose",A)};var b=A;y!==void 0&&y.texture.dispose();const M=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],z=h.morphAttributes.normal||[],L=h.morphAttributes.color||[];let P=0;M===!0&&(P=1),R===!0&&(P=2),S===!0&&(P=3);let B=h.attributes.position.count*P,O=1;B>t.maxTextureSize&&(O=Math.ceil(B/t.maxTextureSize),B=t.maxTextureSize);const H=new Float32Array(B*O*4*g),$=new Jg(H,B,O,g);$.type=fa,$.needsUpdate=!0;const D=P*4;for(let j=0;j<g;j++){const Y=_[j],Q=z[j],re=L[j],ae=B*O*4*j;for(let I=0;I<Y.count;I++){const G=I*D;M===!0&&(l.fromBufferAttribute(Y,I),H[ae+G+0]=l.x,H[ae+G+1]=l.y,H[ae+G+2]=l.z,H[ae+G+3]=0),R===!0&&(l.fromBufferAttribute(Q,I),H[ae+G+4]=l.x,H[ae+G+5]=l.y,H[ae+G+6]=l.z,H[ae+G+7]=0),S===!0&&(l.fromBufferAttribute(re,I),H[ae+G+8]=l.x,H[ae+G+9]=l.y,H[ae+G+10]=l.z,H[ae+G+11]=re.itemSize===4?l.w:1)}}y={count:g,texture:$,size:new Ot(B,O)},s.set(h,y),h.addEventListener("dispose",A)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let M=0;for(let S=0;S<p.length;S++)M+=p[S];const R=h.morphTargetsRelative?1:1-M;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:c}}function f3(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,x=m.geometry,g=t.get(m,x);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const y=m.skeleton;l.get(y)!==p&&(y.update(),l.set(y,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const g_=new Pn,mg=new c_(1,1),__=new Jg,v_=new Pb,y_=new r_,xg=[],gg=[],_g=new Float32Array(16),vg=new Float32Array(9),yg=new Float32Array(4);function Lr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=xg[l];if(c===void 0&&(c=new Float32Array(l),xg[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Vc(o,t){let i=gg[t];i===void 0&&(i=new Int32Array(t),gg[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function d3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function h3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function p3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function m3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function x3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;yg.set(s),o.uniformMatrix2fv(this.addr,!1,yg),gn(i,s)}}function g3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;vg.set(s),o.uniformMatrix3fv(this.addr,!1,vg),gn(i,s)}}function _3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,s))return;_g.set(s),o.uniformMatrix4fv(this.addr,!1,_g),gn(i,s)}}function v3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function b3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function S3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function M3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function E3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function T3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function A3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function R3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(mg.compareFunction=Kg,c=mg):c=g_,i.setTexture2D(t||c,l)}function C3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||v_,l)}function w3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||y_,l)}function D3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||__,l)}function N3(o){switch(o){case 5126:return d3;case 35664:return h3;case 35665:return p3;case 35666:return m3;case 35674:return x3;case 35675:return g3;case 35676:return _3;case 5124:case 35670:return v3;case 35667:case 35671:return y3;case 35668:case 35672:return b3;case 35669:case 35673:return S3;case 5125:return M3;case 36294:return E3;case 36295:return T3;case 36296:return A3;case 35678:case 36198:case 36298:case 36306:case 35682:return R3;case 35679:case 36299:case 36307:return C3;case 35680:case 36300:case 36308:case 36293:return w3;case 36289:case 36303:case 36311:case 36292:return D3}}function U3(o,t){o.uniform1fv(this.addr,t)}function L3(o,t){const i=Lr(t,this.size,2);o.uniform2fv(this.addr,i)}function O3(o,t){const i=Lr(t,this.size,3);o.uniform3fv(this.addr,i)}function z3(o,t){const i=Lr(t,this.size,4);o.uniform4fv(this.addr,i)}function P3(o,t){const i=Lr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function I3(o,t){const i=Lr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function F3(o,t){const i=Lr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function B3(o,t){o.uniform1iv(this.addr,t)}function H3(o,t){o.uniform2iv(this.addr,t)}function G3(o,t){o.uniform3iv(this.addr,t)}function V3(o,t){o.uniform4iv(this.addr,t)}function k3(o,t){o.uniform1uiv(this.addr,t)}function j3(o,t){o.uniform2uiv(this.addr,t)}function X3(o,t){o.uniform3uiv(this.addr,t)}function q3(o,t){o.uniform4uiv(this.addr,t)}function W3(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||g_,c[d])}function Y3(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||v_,c[d])}function Z3(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||y_,c[d])}function K3(o,t,i){const s=this.cache,l=t.length,c=Vc(i,l);xn(s,c)||(o.uniform1iv(this.addr,c),gn(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||__,c[d])}function Q3(o){switch(o){case 5126:return U3;case 35664:return L3;case 35665:return O3;case 35666:return z3;case 35674:return P3;case 35675:return I3;case 35676:return F3;case 5124:case 35670:return B3;case 35667:case 35671:return H3;case 35668:case 35672:return G3;case 35669:case 35673:return V3;case 5125:return k3;case 36294:return j3;case 36295:return X3;case 36296:return q3;case 35678:case 36198:case 36298:case 36306:case 35682:return W3;case 35679:case 36299:case 36307:return Y3;case 35680:case 36300:case 36308:case 36293:return Z3;case 36289:case 36303:case 36311:case 36292:return K3}}class J3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=N3(i.type)}}class $3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=Q3(i.type)}}class eE{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function bg(o,t){o.seq.push(t),o.map[t.id]=t}function tE(o,t,i){const s=o.name,l=s.length;for(Od.lastIndex=0;;){const c=Od.exec(s),d=Od.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){bg(i,p===void 0?new J3(h,o,t):new $3(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new eE(h),bg(i,g)),i=g}}}class Nc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);tE(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function Sg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const nE=37297;let iE=0;function aE(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const Mg=new pt;function sE(o){Lt._getMatrix(Mg,Lt.workingColorSpace,o);const t=`mat3( ${Mg.elements.map(i=>i.toFixed(4))} )`;switch(Lt.getTransfer(o)){case Uc:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Eg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+aE(o.getShaderSource(t),h)}else return c}function rE(o,t){const i=sE(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function oE(o,t){let i;switch(t){case ub:i="Linear";break;case fb:i="Reinhard";break;case db:i="Cineon";break;case hb:i="ACESFilmic";break;case mb:i="AgX";break;case xb:i="Neutral";break;case pb:i="Custom";break;default:ut("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Ac=new de;function lE(){Lt.getLuminanceCoefficients(Ac);const o=Ac.x.toFixed(4),t=Ac.y.toFixed(4),i=Ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function uE(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function fE(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Io(o){return o!==""}function Tg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ag(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const dE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ch(o){return o.replace(dE,pE)}const hE=new Map;function pE(o,t){let i=xt[t];if(i===void 0){const s=hE.get(t);if(s!==void 0)i=xt[s],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Ch(i)}const mE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rg(o){return o.replace(mE,xE)}function xE(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Cg(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function gE(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Bg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ky?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===la&&(t="SHADOWMAP_TYPE_VSM"),t}function _E(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Er:case Tr:t="ENVMAP_TYPE_CUBE";break;case Ic:t="ENVMAP_TYPE_CUBE_UV";break}return t}function vE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Tr:t="ENVMAP_MODE_REFRACTION";break}return t}function yE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Hg:t="ENVMAP_BLENDING_MULTIPLY";break;case lb:t="ENVMAP_BLENDING_MIX";break;case cb:t="ENVMAP_BLENDING_ADD";break}return t}function bE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function SE(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=gE(i),p=_E(i),x=vE(i),g=yE(i),y=bE(i),b=cE(i),M=uE(c),R=l.createProgram();let S,_,z=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Io).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M].filter(Io).join(`
`),_.length>0&&(_+=`
`)):(S=[Cg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),_=[Cg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,M,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Qa?"#define TONE_MAPPING":"",i.toneMapping!==Qa?xt.tonemapping_pars_fragment:"",i.toneMapping!==Qa?oE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,rE("linearToOutputTexel",i.outputColorSpace),lE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Io).join(`
`)),d=Ch(d),d=Tg(d,i),d=Ag(d,i),h=Ch(h),h=Tg(h,i),h=Ag(h,i),d=Rg(d),h=Rg(h),i.isRawShaderMaterial!==!0&&(z=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Fx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Fx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=z+S+d,P=z+_+h,B=Sg(l,l.VERTEX_SHADER,L),O=Sg(l,l.FRAGMENT_SHADER,P);l.attachShader(R,B),l.attachShader(R,O),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function H(j){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(R)||"",Q=l.getShaderInfoLog(B)||"",re=l.getShaderInfoLog(O)||"",ae=Y.trim(),I=Q.trim(),G=re.trim();let U=!0,V=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(U=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,B,O);else{const J=Eg(l,B,"vertex"),N=Eg(l,O,"fragment");rn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+j.name+`
Material Type: `+j.type+`

Program Info Log: `+ae+`
`+J+`
`+N)}else ae!==""?ut("WebGLProgram: Program Info Log:",ae):(I===""||G==="")&&(V=!1);V&&(j.diagnostics={runnable:U,programLog:ae,vertexShader:{log:I,prefix:S},fragmentShader:{log:G,prefix:_}})}l.deleteShader(B),l.deleteShader(O),$=new Nc(l,R),D=fE(l,R)}let $;this.getUniforms=function(){return $===void 0&&H(this),$};let D;this.getAttributes=function(){return D===void 0&&H(this),D};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(R,nE)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=iE++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=B,this.fragmentShader=O,this}let ME=0;class EE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new TE(t),i.set(t,s)),s}}class TE{constructor(t){this.id=ME++,this.code=t,this.usedTimes=0}}function AE(o,t,i,s,l,c,d){const h=new e_,m=new EE,p=new Set,x=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let b=l.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,A,j,Y,Q){const re=Y.fog,ae=Q.geometry,I=D.isMeshStandardMaterial?Y.environment:null,G=(D.isMeshStandardMaterial?i:t).get(D.envMap||I),U=G&&G.mapping===Ic?G.image.height:null,V=M[D.type];D.precision!==null&&(b=l.getMaxPrecision(D.precision),b!==D.precision&&ut("WebGLProgram.getParameters:",D.precision,"not supported, using",b,"instead."));const J=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,N=J!==void 0?J.length:0;let X=0;ae.morphAttributes.position!==void 0&&(X=1),ae.morphAttributes.normal!==void 0&&(X=2),ae.morphAttributes.color!==void 0&&(X=3);let se,pe,Me,K;if(V){const wt=Ni[V];se=wt.vertexShader,pe=wt.fragmentShader}else se=D.vertexShader,pe=D.fragmentShader,m.update(D),Me=m.getVertexShaderID(D),K=m.getFragmentShaderID(D);const ie=o.getRenderTarget(),_e=o.state.buffers.depth.getReversed(),Ee=Q.isInstancedMesh===!0,Ue=Q.isBatchedMesh===!0,$e=!!D.map,yt=!!D.matcap,Ke=!!G,ct=!!D.aoMap,q=!!D.lightMap,mt=!!D.bumpMap,gt=!!D.normalMap,It=!!D.displacementMap,Ve=!!D.emissiveMap,Xt=!!D.metalnessMap,Ze=!!D.roughnessMap,ot=D.anisotropy>0,F=D.clearcoat>0,T=D.dispersion>0,le=D.iridescence>0,ye=D.sheen>0,Te=D.transmission>0,xe=ot&&!!D.anisotropyMap,qe=F&&!!D.clearcoatMap,ze=F&&!!D.clearcoatNormalMap,et=F&&!!D.clearcoatRoughnessMap,Xe=le&&!!D.iridescenceMap,Ae=le&&!!D.iridescenceThicknessMap,Ce=ye&&!!D.sheenColorMap,We=ye&&!!D.sheenRoughnessMap,ke=!!D.specularMap,Ie=!!D.specularColorMap,st=!!D.specularIntensityMap,W=Te&&!!D.transmissionMap,Le=Te&&!!D.thicknessMap,De=!!D.gradientMap,Ne=!!D.alphaMap,Re=D.alphaTest>0,Se=!!D.alphaHash,Be=!!D.extensions;let rt=Qa;D.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(rt=o.toneMapping);const Ht={shaderID:V,shaderType:D.type,shaderName:D.name,vertexShader:se,fragmentShader:pe,defines:D.defines,customVertexShaderID:Me,customFragmentShaderID:K,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:b,batching:Ue,batchingColor:Ue&&Q._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&Q.instanceColor!==null,instancingMorph:Ee&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:ie===null?o.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ar,alphaToCoverage:!!D.alphaToCoverage,map:$e,matcap:yt,envMap:Ke,envMapMode:Ke&&G.mapping,envMapCubeUVHeight:U,aoMap:ct,lightMap:q,bumpMap:mt,normalMap:gt,displacementMap:y&&It,emissiveMap:Ve,normalMapObjectSpace:gt&&D.normalMapType===yb,normalMapTangentSpace:gt&&D.normalMapType===Zg,metalnessMap:Xt,roughnessMap:Ze,anisotropy:ot,anisotropyMap:xe,clearcoat:F,clearcoatMap:qe,clearcoatNormalMap:ze,clearcoatRoughnessMap:et,dispersion:T,iridescence:le,iridescenceMap:Xe,iridescenceThicknessMap:Ae,sheen:ye,sheenColorMap:Ce,sheenRoughnessMap:We,specularMap:ke,specularColorMap:Ie,specularIntensityMap:st,transmission:Te,transmissionMap:W,thicknessMap:Le,gradientMap:De,opaque:D.transparent===!1&&D.blending===br&&D.alphaToCoverage===!1,alphaMap:Ne,alphaTest:Re,alphaHash:Se,combine:D.combine,mapUv:$e&&R(D.map.channel),aoMapUv:ct&&R(D.aoMap.channel),lightMapUv:q&&R(D.lightMap.channel),bumpMapUv:mt&&R(D.bumpMap.channel),normalMapUv:gt&&R(D.normalMap.channel),displacementMapUv:It&&R(D.displacementMap.channel),emissiveMapUv:Ve&&R(D.emissiveMap.channel),metalnessMapUv:Xt&&R(D.metalnessMap.channel),roughnessMapUv:Ze&&R(D.roughnessMap.channel),anisotropyMapUv:xe&&R(D.anisotropyMap.channel),clearcoatMapUv:qe&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:ze&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:et&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&R(D.sheenRoughnessMap.channel),specularMapUv:ke&&R(D.specularMap.channel),specularColorMapUv:Ie&&R(D.specularColorMap.channel),specularIntensityMapUv:st&&R(D.specularIntensityMap.channel),transmissionMapUv:W&&R(D.transmissionMap.channel),thicknessMapUv:Le&&R(D.thicknessMap.channel),alphaMapUv:Ne&&R(D.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(gt||ot),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ae.attributes.uv&&($e||Ne),fog:!!re,useFog:D.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:_e,skinning:Q.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:N,morphTextureStride:X,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&j.length>0,shadowMapType:o.shadowMap.type,toneMapping:rt,decodeVideoTexture:$e&&D.map.isVideoTexture===!0&&Lt.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ca,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Be&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&D.extensions.multiDraw===!0||Ue)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ht.vertexUv1s=p.has(1),Ht.vertexUv2s=p.has(2),Ht.vertexUv3s=p.has(3),p.clear(),Ht}function _(D){const A=[];if(D.shaderID?A.push(D.shaderID):(A.push(D.customVertexShaderID),A.push(D.customFragmentShaderID)),D.defines!==void 0)for(const j in D.defines)A.push(j),A.push(D.defines[j]);return D.isRawShaderMaterial===!1&&(z(A,D),L(A,D),A.push(o.outputColorSpace)),A.push(D.customProgramCacheKey),A.join()}function z(D,A){D.push(A.precision),D.push(A.outputColorSpace),D.push(A.envMapMode),D.push(A.envMapCubeUVHeight),D.push(A.mapUv),D.push(A.alphaMapUv),D.push(A.lightMapUv),D.push(A.aoMapUv),D.push(A.bumpMapUv),D.push(A.normalMapUv),D.push(A.displacementMapUv),D.push(A.emissiveMapUv),D.push(A.metalnessMapUv),D.push(A.roughnessMapUv),D.push(A.anisotropyMapUv),D.push(A.clearcoatMapUv),D.push(A.clearcoatNormalMapUv),D.push(A.clearcoatRoughnessMapUv),D.push(A.iridescenceMapUv),D.push(A.iridescenceThicknessMapUv),D.push(A.sheenColorMapUv),D.push(A.sheenRoughnessMapUv),D.push(A.specularMapUv),D.push(A.specularColorMapUv),D.push(A.specularIntensityMapUv),D.push(A.transmissionMapUv),D.push(A.thicknessMapUv),D.push(A.combine),D.push(A.fogExp2),D.push(A.sizeAttenuation),D.push(A.morphTargetsCount),D.push(A.morphAttributeCount),D.push(A.numDirLights),D.push(A.numPointLights),D.push(A.numSpotLights),D.push(A.numSpotLightMaps),D.push(A.numHemiLights),D.push(A.numRectAreaLights),D.push(A.numDirLightShadows),D.push(A.numPointLightShadows),D.push(A.numSpotLightShadows),D.push(A.numSpotLightShadowsWithMaps),D.push(A.numLightProbes),D.push(A.shadowMapType),D.push(A.toneMapping),D.push(A.numClippingPlanes),D.push(A.numClipIntersection),D.push(A.depthPacking)}function L(D,A){h.disableAll(),A.supportsVertexTextures&&h.enable(0),A.instancing&&h.enable(1),A.instancingColor&&h.enable(2),A.instancingMorph&&h.enable(3),A.matcap&&h.enable(4),A.envMap&&h.enable(5),A.normalMapObjectSpace&&h.enable(6),A.normalMapTangentSpace&&h.enable(7),A.clearcoat&&h.enable(8),A.iridescence&&h.enable(9),A.alphaTest&&h.enable(10),A.vertexColors&&h.enable(11),A.vertexAlphas&&h.enable(12),A.vertexUv1s&&h.enable(13),A.vertexUv2s&&h.enable(14),A.vertexUv3s&&h.enable(15),A.vertexTangents&&h.enable(16),A.anisotropy&&h.enable(17),A.alphaHash&&h.enable(18),A.batching&&h.enable(19),A.dispersion&&h.enable(20),A.batchingColor&&h.enable(21),A.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),A.fog&&h.enable(0),A.useFog&&h.enable(1),A.flatShading&&h.enable(2),A.logarithmicDepthBuffer&&h.enable(3),A.reversedDepthBuffer&&h.enable(4),A.skinning&&h.enable(5),A.morphTargets&&h.enable(6),A.morphNormals&&h.enable(7),A.morphColors&&h.enable(8),A.premultipliedAlpha&&h.enable(9),A.shadowMapEnabled&&h.enable(10),A.doubleSided&&h.enable(11),A.flipSided&&h.enable(12),A.useDepthPacking&&h.enable(13),A.dithering&&h.enable(14),A.transmission&&h.enable(15),A.sheen&&h.enable(16),A.opaque&&h.enable(17),A.pointsUvs&&h.enable(18),A.decodeVideoTexture&&h.enable(19),A.decodeVideoTextureEmissive&&h.enable(20),A.alphaToCoverage&&h.enable(21),D.push(h.mask)}function P(D){const A=M[D.type];let j;if(A){const Y=Ni[A];j=Zb.clone(Y.uniforms)}else j=D.uniforms;return j}function B(D,A){let j;for(let Y=0,Q=x.length;Y<Q;Y++){const re=x[Y];if(re.cacheKey===A){j=re,++j.usedTimes;break}}return j===void 0&&(j=new SE(o,A,D,c),x.push(j)),j}function O(D){if(--D.usedTimes===0){const A=x.indexOf(D);x[A]=x[x.length-1],x.pop(),D.destroy()}}function H(D){m.remove(D)}function $(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:P,acquireProgram:B,releaseProgram:O,releaseShaderCache:H,programs:x,dispose:$}}function RE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function CE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function wg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Dg(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(g,y,b,M,R,S){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:b,groupOrder:M,renderOrder:g.renderOrder,z:R,group:S},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=b,_.groupOrder=M,_.renderOrder=g.renderOrder,_.z=R,_.group=S),t++,_}function h(g,y,b,M,R,S){const _=d(g,y,b,M,R,S);b.transmission>0?s.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(g,y,b,M,R,S){const _=d(g,y,b,M,R,S);b.transmission>0?s.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,y){i.length>1&&i.sort(g||CE),s.length>1&&s.sort(y||wg),l.length>1&&l.sort(y||wg)}function x(){for(let g=t,y=o.length;g<y;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:x,sort:p}}function wE(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Dg,o.set(s,[d])):l>=c.length?(d=new Dg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function DE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new de,color:new Rt};break;case"SpotLight":i={position:new de,direction:new de,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new de,halfWidth:new de,halfHeight:new de};break}return o[t.id]=i,i}}}function NE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let UE=0;function LE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function OE(o){const t=new DE,i=NE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new de);const l=new de,c=new nn,d=new nn;function h(p){let x=0,g=0,y=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let b=0,M=0,R=0,S=0,_=0,z=0,L=0,P=0,B=0,O=0,H=0;p.sort(LE);for(let D=0,A=p.length;D<A;D++){const j=p[D],Y=j.color,Q=j.intensity,re=j.distance,ae=j.shadow&&j.shadow.map?j.shadow.map.texture:null;if(j.isAmbientLight)x+=Y.r*Q,g+=Y.g*Q,y+=Y.b*Q;else if(j.isLightProbe){for(let I=0;I<9;I++)s.probe[I].addScaledVector(j.sh.coefficients[I],Q);H++}else if(j.isDirectionalLight){const I=t.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const G=j.shadow,U=i.get(j);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,s.directionalShadow[b]=U,s.directionalShadowMap[b]=ae,s.directionalShadowMatrix[b]=j.shadow.matrix,z++}s.directional[b]=I,b++}else if(j.isSpotLight){const I=t.get(j);I.position.setFromMatrixPosition(j.matrixWorld),I.color.copy(Y).multiplyScalar(Q),I.distance=re,I.coneCos=Math.cos(j.angle),I.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),I.decay=j.decay,s.spot[R]=I;const G=j.shadow;if(j.map&&(s.spotLightMap[B]=j.map,B++,G.updateMatrices(j),j.castShadow&&O++),s.spotLightMatrix[R]=G.matrix,j.castShadow){const U=i.get(j);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,s.spotShadow[R]=U,s.spotShadowMap[R]=ae,P++}R++}else if(j.isRectAreaLight){const I=t.get(j);I.color.copy(Y).multiplyScalar(Q),I.halfWidth.set(j.width*.5,0,0),I.halfHeight.set(0,j.height*.5,0),s.rectArea[S]=I,S++}else if(j.isPointLight){const I=t.get(j);if(I.color.copy(j.color).multiplyScalar(j.intensity),I.distance=j.distance,I.decay=j.decay,j.castShadow){const G=j.shadow,U=i.get(j);U.shadowIntensity=G.intensity,U.shadowBias=G.bias,U.shadowNormalBias=G.normalBias,U.shadowRadius=G.radius,U.shadowMapSize=G.mapSize,U.shadowCameraNear=G.camera.near,U.shadowCameraFar=G.camera.far,s.pointShadow[M]=U,s.pointShadowMap[M]=ae,s.pointShadowMatrix[M]=j.shadow.matrix,L++}s.point[M]=I,M++}else if(j.isHemisphereLight){const I=t.get(j);I.skyColor.copy(j.color).multiplyScalar(Q),I.groundColor.copy(j.groundColor).multiplyScalar(Q),s.hemi[_]=I,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=g,s.ambient[2]=y;const $=s.hash;($.directionalLength!==b||$.pointLength!==M||$.spotLength!==R||$.rectAreaLength!==S||$.hemiLength!==_||$.numDirectionalShadows!==z||$.numPointShadows!==L||$.numSpotShadows!==P||$.numSpotMaps!==B||$.numLightProbes!==H)&&(s.directional.length=b,s.spot.length=R,s.rectArea.length=S,s.point.length=M,s.hemi.length=_,s.directionalShadow.length=z,s.directionalShadowMap.length=z,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=P,s.spotShadowMap.length=P,s.directionalShadowMatrix.length=z,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=P+B-O,s.spotLightMap.length=B,s.numSpotLightShadowsWithMaps=O,s.numLightProbes=H,$.directionalLength=b,$.pointLength=M,$.spotLength=R,$.rectAreaLength=S,$.hemiLength=_,$.numDirectionalShadows=z,$.numPointShadows=L,$.numSpotShadows=P,$.numSpotMaps=B,$.numLightProbes=H,s.version=UE++)}function m(p,x){let g=0,y=0,b=0,M=0,R=0;const S=x.matrixWorldInverse;for(let _=0,z=p.length;_<z;_++){const L=p[_];if(L.isDirectionalLight){const P=s.directional[g];P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),g++}else if(L.isSpotLight){const P=s.spot[b];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(L.matrixWorld),l.setFromMatrixPosition(L.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(S),b++}else if(L.isRectAreaLight){const P=s.rectArea[M];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),d.identity(),c.copy(L.matrixWorld),c.premultiply(S),d.extractRotation(c),P.halfWidth.set(L.width*.5,0,0),P.halfHeight.set(0,L.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),M++}else if(L.isPointLight){const P=s.point[y];P.position.setFromMatrixPosition(L.matrixWorld),P.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const P=s.hemi[R];P.direction.setFromMatrixPosition(L.matrixWorld),P.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:s}}function Ng(o){const t=new OE(o),i=[],s=[];function l(x){p.camera=x,i.length=0,s.length=0}function c(x){i.push(x)}function d(x){s.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function zE(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Ng(o),t.set(l,[h])):c>=d.length?(h=new Ng(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const PE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IE=`uniform sampler2D shadow_pass;
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
}`;function FE(o,t,i){let s=new Hh;const l=new Ot,c=new Ot,d=new tn,h=new rS({depthPacking:vb}),m=new oS,p={},x=i.maxTextureSize,g={[Ja]:Xn,[Xn]:Ja,[ca]:ca},y=new pa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ot},radius:{value:4}},vertexShader:PE,fragmentShader:IE}),b=y.clone();b.defines.HORIZONTAL_PASS=1;const M=new xi;M.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ln(M,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let _=this.type;this.render=function(O,H,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||O.length===0)return;const D=o.getRenderTarget(),A=o.getActiveCubeFace(),j=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(da),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=_!==la&&this.type===la,re=_===la&&this.type!==la;for(let ae=0,I=O.length;ae<I;ae++){const G=O[ae],U=G.shadow;if(U===void 0){ut("WebGLShadowMap:",G,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;l.copy(U.mapSize);const V=U.getFrameExtents();if(l.multiply(V),c.copy(U.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(c.x=Math.floor(x/V.x),l.x=c.x*V.x,U.mapSize.x=c.x),l.y>x&&(c.y=Math.floor(x/V.y),l.y=c.y*V.y,U.mapSize.y=c.y)),U.map===null||Q===!0||re===!0){const N=this.type!==la?{minFilter:ai,magFilter:ai}:{};U.map!==null&&U.map.dispose(),U.map=new Cs(l.x,l.y,N),U.map.texture.name=G.name+".shadowMap",U.camera.updateProjectionMatrix()}o.setRenderTarget(U.map),o.clear();const J=U.getViewportCount();for(let N=0;N<J;N++){const X=U.getViewport(N);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),Y.viewport(d),U.updateMatrices(G,N),s=U.getFrustum(),P(H,$,U.camera,G,this.type)}U.isPointLightShadow!==!0&&this.type===la&&z(U,$),U.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(D,A,j)};function z(O,H){const $=t.update(R);y.defines.VSM_SAMPLES!==O.blurSamples&&(y.defines.VSM_SAMPLES=O.blurSamples,b.defines.VSM_SAMPLES=O.blurSamples,y.needsUpdate=!0,b.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new Cs(l.x,l.y)),y.uniforms.shadow_pass.value=O.map.texture,y.uniforms.resolution.value=O.mapSize,y.uniforms.radius.value=O.radius,o.setRenderTarget(O.mapPass),o.clear(),o.renderBufferDirect(H,null,$,y,R,null),b.uniforms.shadow_pass.value=O.mapPass.texture,b.uniforms.resolution.value=O.mapSize,b.uniforms.radius.value=O.radius,o.setRenderTarget(O.map),o.clear(),o.renderBufferDirect(H,null,$,b,R,null)}function L(O,H,$,D){let A=null;const j=$.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(j!==void 0)A=j;else if(A=$.isPointLight===!0?m:h,o.localClippingEnabled&&H.clipShadows===!0&&Array.isArray(H.clippingPlanes)&&H.clippingPlanes.length!==0||H.displacementMap&&H.displacementScale!==0||H.alphaMap&&H.alphaTest>0||H.map&&H.alphaTest>0||H.alphaToCoverage===!0){const Y=A.uuid,Q=H.uuid;let re=p[Y];re===void 0&&(re={},p[Y]=re);let ae=re[Q];ae===void 0&&(ae=A.clone(),re[Q]=ae,H.addEventListener("dispose",B)),A=ae}if(A.visible=H.visible,A.wireframe=H.wireframe,D===la?A.side=H.shadowSide!==null?H.shadowSide:H.side:A.side=H.shadowSide!==null?H.shadowSide:g[H.side],A.alphaMap=H.alphaMap,A.alphaTest=H.alphaToCoverage===!0?.5:H.alphaTest,A.map=H.map,A.clipShadows=H.clipShadows,A.clippingPlanes=H.clippingPlanes,A.clipIntersection=H.clipIntersection,A.displacementMap=H.displacementMap,A.displacementScale=H.displacementScale,A.displacementBias=H.displacementBias,A.wireframeLinewidth=H.wireframeLinewidth,A.linewidth=H.linewidth,$.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=o.properties.get(A);Y.light=$}return A}function P(O,H,$,D,A){if(O.visible===!1)return;if(O.layers.test(H.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&A===la)&&(!O.frustumCulled||s.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,O.matrixWorld);const Q=t.update(O),re=O.material;if(Array.isArray(re)){const ae=Q.groups;for(let I=0,G=ae.length;I<G;I++){const U=ae[I],V=re[U.materialIndex];if(V&&V.visible){const J=L(O,V,D,A);O.onBeforeShadow(o,O,H,$,Q,J,U),o.renderBufferDirect($,null,Q,J,O,U),O.onAfterShadow(o,O,H,$,Q,J,U)}}}else if(re.visible){const ae=L(O,re,D,A);O.onBeforeShadow(o,O,H,$,Q,ae,null),o.renderBufferDirect($,null,Q,ae,O,null),O.onAfterShadow(o,O,H,$,Q,ae,null)}}const Y=O.children;for(let Q=0,re=Y.length;Q<re;Q++)P(Y[Q],H,$,D,A)}function B(O){O.target.removeEventListener("dispose",B);for(const $ in p){const D=p[$],A=O.target.uuid;A in D&&(D[A].dispose(),delete D[A])}}}const BE={[Gd]:Vd,[kd]:qd,[jd]:Wd,[Mr]:Xd,[Vd]:Gd,[qd]:kd,[Wd]:jd,[Xd]:Mr};function HE(o,t){function i(){let W=!1;const Le=new tn;let De=null;const Ne=new tn(0,0,0,0);return{setMask:function(Re){De!==Re&&!W&&(o.colorMask(Re,Re,Re,Re),De=Re)},setLocked:function(Re){W=Re},setClear:function(Re,Se,Be,rt,Ht){Ht===!0&&(Re*=rt,Se*=rt,Be*=rt),Le.set(Re,Se,Be,rt),Ne.equals(Le)===!1&&(o.clearColor(Re,Se,Be,rt),Ne.copy(Le))},reset:function(){W=!1,De=null,Ne.set(-1,0,0,0)}}}function s(){let W=!1,Le=!1,De=null,Ne=null,Re=null;return{setReversed:function(Se){if(Le!==Se){const Be=t.get("EXT_clip_control");Se?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),Le=Se;const rt=Re;Re=null,this.setClear(rt)}},getReversed:function(){return Le},setTest:function(Se){Se?ie(o.DEPTH_TEST):_e(o.DEPTH_TEST)},setMask:function(Se){De!==Se&&!W&&(o.depthMask(Se),De=Se)},setFunc:function(Se){if(Le&&(Se=BE[Se]),Ne!==Se){switch(Se){case Gd:o.depthFunc(o.NEVER);break;case Vd:o.depthFunc(o.ALWAYS);break;case kd:o.depthFunc(o.LESS);break;case Mr:o.depthFunc(o.LEQUAL);break;case jd:o.depthFunc(o.EQUAL);break;case Xd:o.depthFunc(o.GEQUAL);break;case qd:o.depthFunc(o.GREATER);break;case Wd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ne=Se}},setLocked:function(Se){W=Se},setClear:function(Se){Re!==Se&&(Le&&(Se=1-Se),o.clearDepth(Se),Re=Se)},reset:function(){W=!1,De=null,Ne=null,Re=null,Le=!1}}}function l(){let W=!1,Le=null,De=null,Ne=null,Re=null,Se=null,Be=null,rt=null,Ht=null;return{setTest:function(wt){W||(wt?ie(o.STENCIL_TEST):_e(o.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!W&&(o.stencilMask(wt),Le=wt)},setFunc:function(wt,wn,qn){(De!==wt||Ne!==wn||Re!==qn)&&(o.stencilFunc(wt,wn,qn),De=wt,Ne=wn,Re=qn)},setOp:function(wt,wn,qn){(Se!==wt||Be!==wn||rt!==qn)&&(o.stencilOp(wt,wn,qn),Se=wt,Be=wn,rt=qn)},setLocked:function(wt){W=wt},setClear:function(wt){Ht!==wt&&(o.clearStencil(wt),Ht=wt)},reset:function(){W=!1,Le=null,De=null,Ne=null,Re=null,Se=null,Be=null,rt=null,Ht=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let x={},g={},y=new WeakMap,b=[],M=null,R=!1,S=null,_=null,z=null,L=null,P=null,B=null,O=null,H=new Rt(0,0,0),$=0,D=!1,A=null,j=null,Y=null,Q=null,re=null;const ae=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,G=0;const U=o.getParameter(o.VERSION);U.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(U)[1]),I=G>=1):U.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),I=G>=2);let V=null,J={};const N=o.getParameter(o.SCISSOR_BOX),X=o.getParameter(o.VIEWPORT),se=new tn().fromArray(N),pe=new tn().fromArray(X);function Me(W,Le,De,Ne){const Re=new Uint8Array(4),Se=o.createTexture();o.bindTexture(W,Se),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<De;Be++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Le,0,o.RGBA,1,1,Ne,0,o.RGBA,o.UNSIGNED_BYTE,Re):o.texImage2D(Le+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Re);return Se}const K={};K[o.TEXTURE_2D]=Me(o.TEXTURE_2D,o.TEXTURE_2D,1),K[o.TEXTURE_CUBE_MAP]=Me(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[o.TEXTURE_2D_ARRAY]=Me(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),K[o.TEXTURE_3D]=Me(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),ie(o.DEPTH_TEST),d.setFunc(Mr),mt(!1),gt(Ux),ie(o.CULL_FACE),ct(da);function ie(W){x[W]!==!0&&(o.enable(W),x[W]=!0)}function _e(W){x[W]!==!1&&(o.disable(W),x[W]=!1)}function Ee(W,Le){return g[W]!==Le?(o.bindFramebuffer(W,Le),g[W]=Le,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Le),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ue(W,Le){let De=b,Ne=!1;if(W){De=y.get(Le),De===void 0&&(De=[],y.set(Le,De));const Re=W.textures;if(De.length!==Re.length||De[0]!==o.COLOR_ATTACHMENT0){for(let Se=0,Be=Re.length;Se<Be;Se++)De[Se]=o.COLOR_ATTACHMENT0+Se;De.length=Re.length,Ne=!0}}else De[0]!==o.BACK&&(De[0]=o.BACK,Ne=!0);Ne&&o.drawBuffers(De)}function $e(W){return M!==W?(o.useProgram(W),M=W,!0):!1}const yt={[Es]:o.FUNC_ADD,[Xy]:o.FUNC_SUBTRACT,[qy]:o.FUNC_REVERSE_SUBTRACT};yt[Wy]=o.MIN,yt[Yy]=o.MAX;const Ke={[Zy]:o.ZERO,[Ky]:o.ONE,[Qy]:o.SRC_COLOR,[Bd]:o.SRC_ALPHA,[ib]:o.SRC_ALPHA_SATURATE,[tb]:o.DST_COLOR,[$y]:o.DST_ALPHA,[Jy]:o.ONE_MINUS_SRC_COLOR,[Hd]:o.ONE_MINUS_SRC_ALPHA,[nb]:o.ONE_MINUS_DST_COLOR,[eb]:o.ONE_MINUS_DST_ALPHA,[ab]:o.CONSTANT_COLOR,[sb]:o.ONE_MINUS_CONSTANT_COLOR,[rb]:o.CONSTANT_ALPHA,[ob]:o.ONE_MINUS_CONSTANT_ALPHA};function ct(W,Le,De,Ne,Re,Se,Be,rt,Ht,wt){if(W===da){R===!0&&(_e(o.BLEND),R=!1);return}if(R===!1&&(ie(o.BLEND),R=!0),W!==jy){if(W!==S||wt!==D){if((_!==Es||P!==Es)&&(o.blendEquation(o.FUNC_ADD),_=Es,P=Es),wt)switch(W){case br:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lx:o.blendFunc(o.ONE,o.ONE);break;case Ox:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:rn("WebGLState: Invalid blending: ",W);break}else switch(W){case br:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Lx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Ox:rn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zx:rn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:rn("WebGLState: Invalid blending: ",W);break}z=null,L=null,B=null,O=null,H.set(0,0,0),$=0,S=W,D=wt}return}Re=Re||Le,Se=Se||De,Be=Be||Ne,(Le!==_||Re!==P)&&(o.blendEquationSeparate(yt[Le],yt[Re]),_=Le,P=Re),(De!==z||Ne!==L||Se!==B||Be!==O)&&(o.blendFuncSeparate(Ke[De],Ke[Ne],Ke[Se],Ke[Be]),z=De,L=Ne,B=Se,O=Be),(rt.equals(H)===!1||Ht!==$)&&(o.blendColor(rt.r,rt.g,rt.b,Ht),H.copy(rt),$=Ht),S=W,D=!1}function q(W,Le){W.side===ca?_e(o.CULL_FACE):ie(o.CULL_FACE);let De=W.side===Xn;Le&&(De=!De),mt(De),W.blending===br&&W.transparent===!1?ct(da):ct(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const Ne=W.stencilWrite;h.setTest(Ne),Ne&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ve(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ie(o.SAMPLE_ALPHA_TO_COVERAGE):_e(o.SAMPLE_ALPHA_TO_COVERAGE)}function mt(W){A!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),A=W)}function gt(W){W!==Gy?(ie(o.CULL_FACE),W!==j&&(W===Ux?o.cullFace(o.BACK):W===Vy?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):_e(o.CULL_FACE),j=W}function It(W){W!==Y&&(I&&o.lineWidth(W),Y=W)}function Ve(W,Le,De){W?(ie(o.POLYGON_OFFSET_FILL),(Q!==Le||re!==De)&&(o.polygonOffset(Le,De),Q=Le,re=De)):_e(o.POLYGON_OFFSET_FILL)}function Xt(W){W?ie(o.SCISSOR_TEST):_e(o.SCISSOR_TEST)}function Ze(W){W===void 0&&(W=o.TEXTURE0+ae-1),V!==W&&(o.activeTexture(W),V=W)}function ot(W,Le,De){De===void 0&&(V===null?De=o.TEXTURE0+ae-1:De=V);let Ne=J[De];Ne===void 0&&(Ne={type:void 0,texture:void 0},J[De]=Ne),(Ne.type!==W||Ne.texture!==Le)&&(V!==De&&(o.activeTexture(De),V=De),o.bindTexture(W,Le||K[W]),Ne.type=W,Ne.texture=Le)}function F(){const W=J[V];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function le(){try{o.compressedTexImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function ye(){try{o.texSubImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function Te(){try{o.texSubImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function xe(){try{o.compressedTexSubImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function ze(){try{o.texStorage2D(...arguments)}catch(W){W("WebGLState:",W)}}function et(){try{o.texStorage3D(...arguments)}catch(W){W("WebGLState:",W)}}function Xe(){try{o.texImage2D(...arguments)}catch(W){W("WebGLState:",W)}}function Ae(){try{o.texImage3D(...arguments)}catch(W){W("WebGLState:",W)}}function Ce(W){se.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),se.copy(W))}function We(W){pe.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),pe.copy(W))}function ke(W,Le){let De=p.get(Le);De===void 0&&(De=new WeakMap,p.set(Le,De));let Ne=De.get(W);Ne===void 0&&(Ne=o.getUniformBlockIndex(Le,W.name),De.set(W,Ne))}function Ie(W,Le){const Ne=p.get(Le).get(W);m.get(Le)!==Ne&&(o.uniformBlockBinding(Le,Ne,W.__bindingPointIndex),m.set(Le,Ne))}function st(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},V=null,J={},g={},y=new WeakMap,b=[],M=null,R=!1,S=null,_=null,z=null,L=null,P=null,B=null,O=null,H=new Rt(0,0,0),$=0,D=!1,A=null,j=null,Y=null,Q=null,re=null,se.set(0,0,o.canvas.width,o.canvas.height),pe.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:ie,disable:_e,bindFramebuffer:Ee,drawBuffers:Ue,useProgram:$e,setBlending:ct,setMaterial:q,setFlipSided:mt,setCullFace:gt,setLineWidth:It,setPolygonOffset:Ve,setScissorTest:Xt,activeTexture:Ze,bindTexture:ot,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:le,texImage2D:Xe,texImage3D:Ae,updateUBOMapping:ke,uniformBlockBinding:Ie,texStorage2D:ze,texStorage3D:et,texSubImage2D:ye,texSubImage3D:Te,compressedTexSubImage2D:xe,compressedTexSubImage3D:qe,scissor:Ce,viewport:We,reset:st}}function GE(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ot,x=new WeakMap;let g;const y=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(F,T){return b?new OffscreenCanvas(F,T):Oc("canvas")}function R(F,T,le){let ye=1;const Te=ot(F);if((Te.width>le||Te.height>le)&&(ye=le/Math.max(Te.width,Te.height)),ye<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const xe=Math.floor(ye*Te.width),qe=Math.floor(ye*Te.height);g===void 0&&(g=M(xe,qe));const ze=T?M(xe,qe):g;return ze.width=xe,ze.height=qe,ze.getContext("2d").drawImage(F,0,0,xe,qe),ut("WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+xe+"x"+qe+")."),ze}else return"data"in F&&ut("WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),F;return F}function S(F){return F.generateMipmaps}function _(F){o.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?o.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function L(F,T,le,ye,Te=!1){if(F!==null){if(o[F]!==void 0)return o[F];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let xe=T;if(T===o.RED&&(le===o.FLOAT&&(xe=o.R32F),le===o.HALF_FLOAT&&(xe=o.R16F),le===o.UNSIGNED_BYTE&&(xe=o.R8)),T===o.RED_INTEGER&&(le===o.UNSIGNED_BYTE&&(xe=o.R8UI),le===o.UNSIGNED_SHORT&&(xe=o.R16UI),le===o.UNSIGNED_INT&&(xe=o.R32UI),le===o.BYTE&&(xe=o.R8I),le===o.SHORT&&(xe=o.R16I),le===o.INT&&(xe=o.R32I)),T===o.RG&&(le===o.FLOAT&&(xe=o.RG32F),le===o.HALF_FLOAT&&(xe=o.RG16F),le===o.UNSIGNED_BYTE&&(xe=o.RG8)),T===o.RG_INTEGER&&(le===o.UNSIGNED_BYTE&&(xe=o.RG8UI),le===o.UNSIGNED_SHORT&&(xe=o.RG16UI),le===o.UNSIGNED_INT&&(xe=o.RG32UI),le===o.BYTE&&(xe=o.RG8I),le===o.SHORT&&(xe=o.RG16I),le===o.INT&&(xe=o.RG32I)),T===o.RGB_INTEGER&&(le===o.UNSIGNED_BYTE&&(xe=o.RGB8UI),le===o.UNSIGNED_SHORT&&(xe=o.RGB16UI),le===o.UNSIGNED_INT&&(xe=o.RGB32UI),le===o.BYTE&&(xe=o.RGB8I),le===o.SHORT&&(xe=o.RGB16I),le===o.INT&&(xe=o.RGB32I)),T===o.RGBA_INTEGER&&(le===o.UNSIGNED_BYTE&&(xe=o.RGBA8UI),le===o.UNSIGNED_SHORT&&(xe=o.RGBA16UI),le===o.UNSIGNED_INT&&(xe=o.RGBA32UI),le===o.BYTE&&(xe=o.RGBA8I),le===o.SHORT&&(xe=o.RGBA16I),le===o.INT&&(xe=o.RGBA32I)),T===o.RGB&&(le===o.UNSIGNED_INT_5_9_9_9_REV&&(xe=o.RGB9_E5),le===o.UNSIGNED_INT_10F_11F_11F_REV&&(xe=o.R11F_G11F_B10F)),T===o.RGBA){const qe=Te?Uc:Lt.getTransfer(ye);le===o.FLOAT&&(xe=o.RGBA32F),le===o.HALF_FLOAT&&(xe=o.RGBA16F),le===o.UNSIGNED_BYTE&&(xe=qe===jt?o.SRGB8_ALPHA8:o.RGBA8),le===o.UNSIGNED_SHORT_4_4_4_4&&(xe=o.RGBA4),le===o.UNSIGNED_SHORT_5_5_5_1&&(xe=o.RGB5_A1)}return(xe===o.R16F||xe===o.R32F||xe===o.RG16F||xe===o.RG32F||xe===o.RGBA16F||xe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),xe}function P(F,T){let le;return F?T===null||T===Rs||T===Bo?le=o.DEPTH24_STENCIL8:T===fa?le=o.DEPTH32F_STENCIL8:T===Fo&&(le=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rs||T===Bo?le=o.DEPTH_COMPONENT24:T===fa?le=o.DEPTH_COMPONENT32F:T===Fo&&(le=o.DEPTH_COMPONENT16),le}function B(F,T){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==ai&&F.minFilter!==mi?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function O(F){const T=F.target;T.removeEventListener("dispose",O),$(T),T.isVideoTexture&&x.delete(T)}function H(F){const T=F.target;T.removeEventListener("dispose",H),A(T)}function $(F){const T=s.get(F);if(T.__webglInit===void 0)return;const le=F.source,ye=y.get(le);if(ye){const Te=ye[T.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&D(F),Object.keys(ye).length===0&&y.delete(le)}s.remove(F)}function D(F){const T=s.get(F);o.deleteTexture(T.__webglTexture);const le=F.source,ye=y.get(le);delete ye[T.__cacheKey],d.memory.textures--}function A(F){const T=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ye=0;ye<6;ye++){if(Array.isArray(T.__webglFramebuffer[ye]))for(let Te=0;Te<T.__webglFramebuffer[ye].length;Te++)o.deleteFramebuffer(T.__webglFramebuffer[ye][Te]);else o.deleteFramebuffer(T.__webglFramebuffer[ye]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ye])}else{if(Array.isArray(T.__webglFramebuffer))for(let ye=0;ye<T.__webglFramebuffer.length;ye++)o.deleteFramebuffer(T.__webglFramebuffer[ye]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ye=0;ye<T.__webglColorRenderbuffer.length;ye++)T.__webglColorRenderbuffer[ye]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ye]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const le=F.textures;for(let ye=0,Te=le.length;ye<Te;ye++){const xe=s.get(le[ye]);xe.__webglTexture&&(o.deleteTexture(xe.__webglTexture),d.memory.textures--),s.remove(le[ye])}s.remove(F)}let j=0;function Y(){j=0}function Q(){const F=j;return F>=l.maxTextures&&ut("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),j+=1,F}function re(F){const T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function ae(F,T){const le=s.get(F);if(F.isVideoTexture&&Xt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&le.__version!==F.version){const ye=F.image;if(ye===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ye.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{K(le,F,T);return}}else F.isExternalTexture&&(le.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,le.__webglTexture,o.TEXTURE0+T)}function I(F,T){const le=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&le.__version!==F.version){K(le,F,T);return}else F.isExternalTexture&&(le.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,le.__webglTexture,o.TEXTURE0+T)}function G(F,T){const le=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&le.__version!==F.version){K(le,F,T);return}i.bindTexture(o.TEXTURE_3D,le.__webglTexture,o.TEXTURE0+T)}function U(F,T){const le=s.get(F);if(F.version>0&&le.__version!==F.version){ie(le,F,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,le.__webglTexture,o.TEXTURE0+T)}const V={[Kd]:o.REPEAT,[ua]:o.CLAMP_TO_EDGE,[Qd]:o.MIRRORED_REPEAT},J={[ai]:o.NEAREST,[gb]:o.NEAREST_MIPMAP_NEAREST,[ac]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[nd]:o.LINEAR_MIPMAP_NEAREST,[As]:o.LINEAR_MIPMAP_LINEAR},N={[bb]:o.NEVER,[Rb]:o.ALWAYS,[Sb]:o.LESS,[Kg]:o.LEQUAL,[Mb]:o.EQUAL,[Ab]:o.GEQUAL,[Eb]:o.GREATER,[Tb]:o.NOTEQUAL};function X(F,T){if(T.type===fa&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mi||T.magFilter===nd||T.magFilter===ac||T.magFilter===As||T.minFilter===mi||T.minFilter===nd||T.minFilter===ac||T.minFilter===As)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(F,o.TEXTURE_WRAP_S,V[T.wrapS]),o.texParameteri(F,o.TEXTURE_WRAP_T,V[T.wrapT]),(F===o.TEXTURE_3D||F===o.TEXTURE_2D_ARRAY)&&o.texParameteri(F,o.TEXTURE_WRAP_R,V[T.wrapR]),o.texParameteri(F,o.TEXTURE_MAG_FILTER,J[T.magFilter]),o.texParameteri(F,o.TEXTURE_MIN_FILTER,J[T.minFilter]),T.compareFunction&&(o.texParameteri(F,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(F,o.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ai||T.minFilter!==ac&&T.minFilter!==As||T.type===fa&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const le=t.get("EXT_texture_filter_anisotropic");o.texParameterf(F,le.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function se(F,T){let le=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",O));const ye=T.source;let Te=y.get(ye);Te===void 0&&(Te={},y.set(ye,Te));const xe=re(T);if(xe!==F.__cacheKey){Te[xe]===void 0&&(Te[xe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,le=!0),Te[xe].usedTimes++;const qe=Te[F.__cacheKey];qe!==void 0&&(Te[F.__cacheKey].usedTimes--,qe.usedTimes===0&&D(T)),F.__cacheKey=xe,F.__webglTexture=Te[xe].texture}return le}function pe(F,T,le){return Math.floor(Math.floor(F/le)/T)}function Me(F,T,le,ye){const xe=F.updateRanges;if(xe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,le,ye,T.data);else{xe.sort((Ae,Ce)=>Ae.start-Ce.start);let qe=0;for(let Ae=1;Ae<xe.length;Ae++){const Ce=xe[qe],We=xe[Ae],ke=Ce.start+Ce.count,Ie=pe(We.start,T.width,4),st=pe(Ce.start,T.width,4);We.start<=ke+1&&Ie===st&&pe(We.start+We.count-1,T.width,4)===Ie?Ce.count=Math.max(Ce.count,We.start+We.count-Ce.start):(++qe,xe[qe]=We)}xe.length=qe+1;const ze=o.getParameter(o.UNPACK_ROW_LENGTH),et=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Ae=0,Ce=xe.length;Ae<Ce;Ae++){const We=xe[Ae],ke=Math.floor(We.start/4),Ie=Math.ceil(We.count/4),st=ke%T.width,W=Math.floor(ke/T.width),Le=Ie,De=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,st),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,st,W,Le,De,le,ye,T.data)}F.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,ze),o.pixelStorei(o.UNPACK_SKIP_PIXELS,et),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function K(F,T,le){let ye=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ye=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ye=o.TEXTURE_3D);const Te=se(F,T),xe=T.source;i.bindTexture(ye,F.__webglTexture,o.TEXTURE0+le);const qe=s.get(xe);if(xe.version!==qe.__version||Te===!0){i.activeTexture(o.TEXTURE0+le);const ze=Lt.getPrimaries(Lt.workingColorSpace),et=T.colorSpace===Wa?null:Lt.getPrimaries(T.colorSpace),Xe=T.colorSpace===Wa||ze===et?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Ae=R(T.image,!1,l.maxTextureSize);Ae=Ze(T,Ae);const Ce=c.convert(T.format,T.colorSpace),We=c.convert(T.type);let ke=L(T.internalFormat,Ce,We,T.colorSpace,T.isVideoTexture);X(ye,T);let Ie;const st=T.mipmaps,W=T.isVideoTexture!==!0,Le=qe.__version===void 0||Te===!0,De=xe.dataReady,Ne=B(T,Ae);if(T.isDepthTexture)ke=P(T.format===Go,T.type),Le&&(W?i.texStorage2D(o.TEXTURE_2D,1,ke,Ae.width,Ae.height):i.texImage2D(o.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Ce,We,null));else if(T.isDataTexture)if(st.length>0){W&&Le&&i.texStorage2D(o.TEXTURE_2D,Ne,ke,st[0].width,st[0].height);for(let Re=0,Se=st.length;Re<Se;Re++)Ie=st[Re],W?De&&i.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ce,We,Ie.data):i.texImage2D(o.TEXTURE_2D,Re,ke,Ie.width,Ie.height,0,Ce,We,Ie.data);T.generateMipmaps=!1}else W?(Le&&i.texStorage2D(o.TEXTURE_2D,Ne,ke,Ae.width,Ae.height),De&&Me(T,Ae,Ce,We)):i.texImage2D(o.TEXTURE_2D,0,ke,Ae.width,Ae.height,0,Ce,We,Ae.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ke,st[0].width,st[0].height,Ae.depth);for(let Re=0,Se=st.length;Re<Se;Re++)if(Ie=st[Re],T.format!==Ti)if(Ce!==null)if(W){if(De)if(T.layerUpdates.size>0){const Be=lg(Ie.width,Ie.height,T.format,T.type);for(const rt of T.layerUpdates){const Ht=Ie.data.subarray(rt*Be/Ie.data.BYTES_PER_ELEMENT,(rt+1)*Be/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,rt,Ie.width,Ie.height,1,Ce,Ht)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ae.depth,Ce,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Re,ke,Ie.width,Ie.height,Ae.depth,0,Ie.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?De&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Re,0,0,0,Ie.width,Ie.height,Ae.depth,Ce,We,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Re,ke,Ie.width,Ie.height,Ae.depth,0,Ce,We,Ie.data)}else{W&&Le&&i.texStorage2D(o.TEXTURE_2D,Ne,ke,st[0].width,st[0].height);for(let Re=0,Se=st.length;Re<Se;Re++)Ie=st[Re],T.format!==Ti?Ce!==null?W?De&&i.compressedTexSubImage2D(o.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ce,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,Re,ke,Ie.width,Ie.height,0,Ie.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?De&&i.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ie.width,Ie.height,Ce,We,Ie.data):i.texImage2D(o.TEXTURE_2D,Re,ke,Ie.width,Ie.height,0,Ce,We,Ie.data)}else if(T.isDataArrayTexture)if(W){if(Le&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ne,ke,Ae.width,Ae.height,Ae.depth),De)if(T.layerUpdates.size>0){const Re=lg(Ae.width,Ae.height,T.format,T.type);for(const Se of T.layerUpdates){const Be=Ae.data.subarray(Se*Re/Ae.data.BYTES_PER_ELEMENT,(Se+1)*Re/Ae.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Se,Ae.width,Ae.height,1,Ce,We,Be)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,We,Ae.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ke,Ae.width,Ae.height,Ae.depth,0,Ce,We,Ae.data);else if(T.isData3DTexture)W?(Le&&i.texStorage3D(o.TEXTURE_3D,Ne,ke,Ae.width,Ae.height,Ae.depth),De&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ae.width,Ae.height,Ae.depth,Ce,We,Ae.data)):i.texImage3D(o.TEXTURE_3D,0,ke,Ae.width,Ae.height,Ae.depth,0,Ce,We,Ae.data);else if(T.isFramebufferTexture){if(Le)if(W)i.texStorage2D(o.TEXTURE_2D,Ne,ke,Ae.width,Ae.height);else{let Re=Ae.width,Se=Ae.height;for(let Be=0;Be<Ne;Be++)i.texImage2D(o.TEXTURE_2D,Be,ke,Re,Se,0,Ce,We,null),Re>>=1,Se>>=1}}else if(st.length>0){if(W&&Le){const Re=ot(st[0]);i.texStorage2D(o.TEXTURE_2D,Ne,ke,Re.width,Re.height)}for(let Re=0,Se=st.length;Re<Se;Re++)Ie=st[Re],W?De&&i.texSubImage2D(o.TEXTURE_2D,Re,0,0,Ce,We,Ie):i.texImage2D(o.TEXTURE_2D,Re,ke,Ce,We,Ie);T.generateMipmaps=!1}else if(W){if(Le){const Re=ot(Ae);i.texStorage2D(o.TEXTURE_2D,Ne,ke,Re.width,Re.height)}De&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ce,We,Ae)}else i.texImage2D(o.TEXTURE_2D,0,ke,Ce,We,Ae);S(T)&&_(ye),qe.__version=xe.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ie(F,T,le){if(T.image.length!==6)return;const ye=se(F,T),Te=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,F.__webglTexture,o.TEXTURE0+le);const xe=s.get(Te);if(Te.version!==xe.__version||ye===!0){i.activeTexture(o.TEXTURE0+le);const qe=Lt.getPrimaries(Lt.workingColorSpace),ze=T.colorSpace===Wa?null:Lt.getPrimaries(T.colorSpace),et=T.colorSpace===Wa||qe===ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,Ae=T.image[0]&&T.image[0].isDataTexture,Ce=[];for(let Se=0;Se<6;Se++)!Xe&&!Ae?Ce[Se]=R(T.image[Se],!0,l.maxCubemapSize):Ce[Se]=Ae?T.image[Se].image:T.image[Se],Ce[Se]=Ze(T,Ce[Se]);const We=Ce[0],ke=c.convert(T.format,T.colorSpace),Ie=c.convert(T.type),st=L(T.internalFormat,ke,Ie,T.colorSpace),W=T.isVideoTexture!==!0,Le=xe.__version===void 0||ye===!0,De=Te.dataReady;let Ne=B(T,We);X(o.TEXTURE_CUBE_MAP,T);let Re;if(Xe){W&&Le&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,st,We.width,We.height);for(let Se=0;Se<6;Se++){Re=Ce[Se].mipmaps;for(let Be=0;Be<Re.length;Be++){const rt=Re[Be];T.format!==Ti?ke!==null?W?De&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,rt.width,rt.height,ke,rt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,st,rt.width,rt.height,0,rt.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,0,0,rt.width,rt.height,ke,Ie,rt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be,st,rt.width,rt.height,0,ke,Ie,rt.data)}}}else{if(Re=T.mipmaps,W&&Le){Re.length>0&&Ne++;const Se=ot(Ce[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ne,st,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Ae){W?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ce[Se].width,Ce[Se].height,ke,Ie,Ce[Se].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,Ce[Se].width,Ce[Se].height,0,ke,Ie,Ce[Se].data);for(let Be=0;Be<Re.length;Be++){const Ht=Re[Be].image[Se].image;W?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,Ht.width,Ht.height,ke,Ie,Ht.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,st,Ht.width,Ht.height,0,ke,Ie,Ht.data)}}else{W?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ke,Ie,Ce[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,st,ke,Ie,Ce[Se]);for(let Be=0;Be<Re.length;Be++){const rt=Re[Be];W?De&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,0,0,ke,Ie,rt.image[Se]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Be+1,st,ke,Ie,rt.image[Se])}}}S(T)&&_(o.TEXTURE_CUBE_MAP),xe.__version=Te.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function _e(F,T,le,ye,Te,xe){const qe=c.convert(le.format,le.colorSpace),ze=c.convert(le.type),et=L(le.internalFormat,qe,ze,le.colorSpace),Xe=s.get(T),Ae=s.get(le);if(Ae.__renderTarget=T,!Xe.__hasExternalTextures){const Ce=Math.max(1,T.width>>xe),We=Math.max(1,T.height>>xe);Te===o.TEXTURE_3D||Te===o.TEXTURE_2D_ARRAY?i.texImage3D(Te,xe,et,Ce,We,T.depth,0,qe,ze,null):i.texImage2D(Te,xe,et,Ce,We,0,qe,ze,null)}i.bindFramebuffer(o.FRAMEBUFFER,F),Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ye,Te,Ae.__webglTexture,0,It(T)):(Te===o.TEXTURE_2D||Te>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ye,Te,Ae.__webglTexture,xe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ee(F,T,le){if(o.bindRenderbuffer(o.RENDERBUFFER,F),T.depthBuffer){const ye=T.depthTexture,Te=ye&&ye.isDepthTexture?ye.type:null,xe=P(T.stencilBuffer,Te),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ze=It(T);Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,ze,xe,T.width,T.height):le?o.renderbufferStorageMultisample(o.RENDERBUFFER,ze,xe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,xe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,F)}else{const ye=T.textures;for(let Te=0;Te<ye.length;Te++){const xe=ye[Te],qe=c.convert(xe.format,xe.colorSpace),ze=c.convert(xe.type),et=L(xe.internalFormat,qe,ze,xe.colorSpace),Xe=It(T);le&&Ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,et,T.width,T.height):Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,et,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,et,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Ue(F,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ye=s.get(T.depthTexture);ye.__renderTarget=T,(!ye.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ae(T.depthTexture,0);const Te=ye.__webglTexture,xe=It(T);if(T.depthTexture.format===Ho)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Te,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Te,0);else if(T.depthTexture.format===Go)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Te,0,xe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Te,0);else throw new Error("Unknown depthTexture format")}function $e(F){const T=s.get(F),le=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){const ye=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ye){const Te=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ye.removeEventListener("dispose",Te)};ye.addEventListener("dispose",Te),T.__depthDisposeCallback=Te}T.__boundDepthTexture=ye}if(F.depthTexture&&!T.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");const ye=F.texture.mipmaps;ye&&ye.length>0?Ue(T.__webglFramebuffer[0],F):Ue(T.__webglFramebuffer,F)}else if(le){T.__webglDepthbuffer=[];for(let ye=0;ye<6;ye++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ye]),T.__webglDepthbuffer[ye]===void 0)T.__webglDepthbuffer[ye]=o.createRenderbuffer(),Ee(T.__webglDepthbuffer[ye],F,!1);else{const Te=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer[ye];o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,xe)}}else{const ye=F.texture.mipmaps;if(ye&&ye.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Ee(T.__webglDepthbuffer,F,!1);else{const Te=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,xe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,xe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Te,o.RENDERBUFFER,xe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function yt(F,T,le){const ye=s.get(F);T!==void 0&&_e(ye.__webglFramebuffer,F,F.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),le!==void 0&&$e(F)}function Ke(F){const T=F.texture,le=s.get(F),ye=s.get(T);F.addEventListener("dispose",H);const Te=F.textures,xe=F.isWebGLCubeRenderTarget===!0,qe=Te.length>1;if(qe||(ye.__webglTexture===void 0&&(ye.__webglTexture=o.createTexture()),ye.__version=T.version,d.memory.textures++),xe){le.__webglFramebuffer=[];for(let ze=0;ze<6;ze++)if(T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer[ze]=[];for(let et=0;et<T.mipmaps.length;et++)le.__webglFramebuffer[ze][et]=o.createFramebuffer()}else le.__webglFramebuffer[ze]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){le.__webglFramebuffer=[];for(let ze=0;ze<T.mipmaps.length;ze++)le.__webglFramebuffer[ze]=o.createFramebuffer()}else le.__webglFramebuffer=o.createFramebuffer();if(qe)for(let ze=0,et=Te.length;ze<et;ze++){const Xe=s.get(Te[ze]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),d.memory.textures++)}if(F.samples>0&&Ve(F)===!1){le.__webglMultisampledFramebuffer=o.createFramebuffer(),le.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,le.__webglMultisampledFramebuffer);for(let ze=0;ze<Te.length;ze++){const et=Te[ze];le.__webglColorRenderbuffer[ze]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,le.__webglColorRenderbuffer[ze]);const Xe=c.convert(et.format,et.colorSpace),Ae=c.convert(et.type),Ce=L(et.internalFormat,Xe,Ae,et.colorSpace,F.isXRRenderTarget===!0),We=It(F);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Ce,F.width,F.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+ze,o.RENDERBUFFER,le.__webglColorRenderbuffer[ze])}o.bindRenderbuffer(o.RENDERBUFFER,null),F.depthBuffer&&(le.__webglDepthRenderbuffer=o.createRenderbuffer(),Ee(le.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(xe){i.bindTexture(o.TEXTURE_CUBE_MAP,ye.__webglTexture),X(o.TEXTURE_CUBE_MAP,T);for(let ze=0;ze<6;ze++)if(T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)_e(le.__webglFramebuffer[ze][et],F,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,et);else _e(le.__webglFramebuffer[ze],F,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0);S(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let ze=0,et=Te.length;ze<et;ze++){const Xe=Te[ze],Ae=s.get(Xe);let Ce=o.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ce,Ae.__webglTexture),X(Ce,Xe),_e(le.__webglFramebuffer,F,Xe,o.COLOR_ATTACHMENT0+ze,Ce,0),S(Xe)&&_(Ce)}i.unbindTexture()}else{let ze=o.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ze=F.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ze,ye.__webglTexture),X(ze,T),T.mipmaps&&T.mipmaps.length>0)for(let et=0;et<T.mipmaps.length;et++)_e(le.__webglFramebuffer[et],F,T,o.COLOR_ATTACHMENT0,ze,et);else _e(le.__webglFramebuffer,F,T,o.COLOR_ATTACHMENT0,ze,0);S(T)&&_(ze),i.unbindTexture()}F.depthBuffer&&$e(F)}function ct(F){const T=F.textures;for(let le=0,ye=T.length;le<ye;le++){const Te=T[le];if(S(Te)){const xe=z(F),qe=s.get(Te).__webglTexture;i.bindTexture(xe,qe),_(xe),i.unbindTexture()}}}const q=[],mt=[];function gt(F){if(F.samples>0){if(Ve(F)===!1){const T=F.textures,le=F.width,ye=F.height;let Te=o.COLOR_BUFFER_BIT;const xe=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=s.get(F),ze=T.length>1;if(ze)for(let Xe=0;Xe<T.length;Xe++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const et=F.texture.mipmaps;et&&et.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Te|=o.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Te|=o.STENCIL_BUFFER_BIT)),ze){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Ae=s.get(T[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ae,0)}o.blitFramebuffer(0,0,le,ye,0,0,le,ye,Te,o.NEAREST),m===!0&&(q.length=0,mt.length=0,q.push(o.COLOR_ATTACHMENT0+Xe),F.depthBuffer&&F.resolveDepthBuffer===!1&&(q.push(xe),mt.push(xe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,mt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,q))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),ze)for(let Xe=0;Xe<T.length;Xe++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Ae=s.get(T[Xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,Ae,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&m){const T=F.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function It(F){return Math.min(l.maxSamples,F.samples)}function Ve(F){const T=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Xt(F){const T=d.render.frame;x.get(F)!==T&&(x.set(F,T),F.update())}function Ze(F,T){const le=F.colorSpace,ye=F.format,Te=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||le!==Ar&&le!==Wa&&(Lt.getTransfer(le)===jt?(ye!==Ti||Te!==Oi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):rn("WebGLTextures: Unsupported texture color space:",le)),T}function ot(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=ae,this.setTexture2DArray=I,this.setTexture3D=G,this.setTextureCube=U,this.rebindTextures=yt,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=ct,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Ve}function VE(o,t){function i(s,l=Wa){let c;const d=Lt.getTransfer(l);if(s===Oi)return o.UNSIGNED_BYTE;if(s===Lh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Oh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===jg)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Xg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Vg)return o.BYTE;if(s===kg)return o.SHORT;if(s===Fo)return o.UNSIGNED_SHORT;if(s===Uh)return o.INT;if(s===Rs)return o.UNSIGNED_INT;if(s===fa)return o.FLOAT;if(s===Dr)return o.HALF_FLOAT;if(s===qg)return o.ALPHA;if(s===Wg)return o.RGB;if(s===Ti)return o.RGBA;if(s===Ho)return o.DEPTH_COMPONENT;if(s===Go)return o.DEPTH_STENCIL;if(s===Yg)return o.RED;if(s===zh)return o.RED_INTEGER;if(s===Ph)return o.RG;if(s===Ih)return o.RG_INTEGER;if(s===Fh)return o.RGBA_INTEGER;if(s===Rc||s===Cc||s===wc||s===Dc)if(d===jt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Rc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Rc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Dc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Jd||s===$d||s===eh||s===th)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Jd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$d)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===eh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===th)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nh||s===ih||s===ah)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===nh||s===ih)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===sh||s===rh||s===oh||s===lh||s===ch||s===uh||s===fh||s===dh||s===hh||s===ph||s===mh||s===xh||s===gh||s===_h)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===rh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===oh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ch)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===uh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===fh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===dh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===hh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ph)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===mh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===xh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===gh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===_h)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vh||s===yh||s===bh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===vh)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===yh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===bh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sh||s===Mh||s===Eh||s===Th)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===Sh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Mh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Eh)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Th)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const kE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new u_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new pa({vertexShader:kE,fragmentShader:jE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ln(new Hc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends Nr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,x=null,g=null,y=null,b=null,M=null;const R=typeof XRWebGLBinding<"u",S=new XE,_={},z=i.getContextAttributes();let L=null,P=null;const B=[],O=[],H=new Ot;let $=null;const D=new ii;D.viewport=new tn;const A=new ii;A.viewport=new tn;const j=[D,A],Y=new uS;let Q=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ie=B[K];return ie===void 0&&(ie=new Td,B[K]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(K){let ie=B[K];return ie===void 0&&(ie=new Td,B[K]=ie),ie.getGripSpace()},this.getHand=function(K){let ie=B[K];return ie===void 0&&(ie=new Td,B[K]=ie),ie.getHandSpace()};function ae(K){const ie=O.indexOf(K.inputSource);if(ie===-1)return;const _e=B[ie];_e!==void 0&&(_e.update(K.inputSource,K.frame,p||d),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function I(){l.removeEventListener("select",ae),l.removeEventListener("selectstart",ae),l.removeEventListener("selectend",ae),l.removeEventListener("squeeze",ae),l.removeEventListener("squeezestart",ae),l.removeEventListener("squeezeend",ae),l.removeEventListener("end",I),l.removeEventListener("inputsourceschange",G);for(let K=0;K<B.length;K++){const ie=O[K];ie!==null&&(O[K]=null,B[K].disconnect(ie))}Q=null,re=null,S.reset();for(const K in _)delete _[K];t.setRenderTarget(L),b=null,y=null,g=null,l=null,P=null,Me.stop(),s.isPresenting=!1,t.setPixelRatio($),t.setSize(H.width,H.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){h=K,s.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(K){p=K},this.getBaseLayer=function(){return y!==null?y:b},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return M},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(L=t.getRenderTarget(),l.addEventListener("select",ae),l.addEventListener("selectstart",ae),l.addEventListener("selectend",ae),l.addEventListener("squeeze",ae),l.addEventListener("squeezestart",ae),l.addEventListener("squeezeend",ae),l.addEventListener("end",I),l.addEventListener("inputsourceschange",G),z.xrCompatible!==!0&&await i.makeXRCompatible(),$=t.getPixelRatio(),t.getSize(H),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ee=null,Ue=null;z.depth&&(Ue=z.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,_e=z.stencil?Go:Ho,Ee=z.stencil?Bo:Rs);const $e={colorFormat:i.RGBA8,depthFormat:Ue,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer($e),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),P=new Cs(y.textureWidth,y.textureHeight,{format:Ti,type:Oi,depthTexture:new c_(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:z.stencil,colorSpace:t.outputColorSpace,samples:z.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const _e={antialias:z.antialias,alpha:!0,depth:z.depth,stencil:z.stencil,framebufferScaleFactor:c};b=new XRWebGLLayer(l,i,_e),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new Cs(b.framebufferWidth,b.framebufferHeight,{format:Ti,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:z.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Me.setContext(l),Me.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function G(K){for(let ie=0;ie<K.removed.length;ie++){const _e=K.removed[ie],Ee=O.indexOf(_e);Ee>=0&&(O[Ee]=null,B[Ee].disconnect(_e))}for(let ie=0;ie<K.added.length;ie++){const _e=K.added[ie];let Ee=O.indexOf(_e);if(Ee===-1){for(let $e=0;$e<B.length;$e++)if($e>=O.length){O.push(_e),Ee=$e;break}else if(O[$e]===null){O[$e]=_e,Ee=$e;break}if(Ee===-1)break}const Ue=B[Ee];Ue&&Ue.connect(_e)}}const U=new de,V=new de;function J(K,ie,_e){U.setFromMatrixPosition(ie.matrixWorld),V.setFromMatrixPosition(_e.matrixWorld);const Ee=U.distanceTo(V),Ue=ie.projectionMatrix.elements,$e=_e.projectionMatrix.elements,yt=Ue[14]/(Ue[10]-1),Ke=Ue[14]/(Ue[10]+1),ct=(Ue[9]+1)/Ue[5],q=(Ue[9]-1)/Ue[5],mt=(Ue[8]-1)/Ue[0],gt=($e[8]+1)/$e[0],It=yt*mt,Ve=yt*gt,Xt=Ee/(-mt+gt),Ze=Xt*-mt;if(ie.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ze),K.translateZ(Xt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ue[10]===-1)K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const ot=yt+Xt,F=Ke+Xt,T=It-Ze,le=Ve+(Ee-Ze),ye=ct*Ke/F*ot,Te=q*Ke/F*ot;K.projectionMatrix.makePerspective(T,le,ye,Te,ot,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function N(K,ie){ie===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ie.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let ie=K.near,_e=K.far;S.texture!==null&&(S.depthNear>0&&(ie=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),Y.near=A.near=D.near=ie,Y.far=A.far=D.far=_e,(Q!==Y.near||re!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,re=Y.far),Y.layers.mask=K.layers.mask|6,D.layers.mask=Y.layers.mask&3,A.layers.mask=Y.layers.mask&5;const Ee=K.parent,Ue=Y.cameras;N(Y,Ee);for(let $e=0;$e<Ue.length;$e++)N(Ue[$e],Ee);Ue.length===2?J(Y,D,A):Y.projectionMatrix.copy(D.projectionMatrix),X(K,Y,Ee)};function X(K,ie,_e){_e===null?K.matrix.copy(ie.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(ie.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ie.projectionMatrix),K.projectionMatrixInverse.copy(ie.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Ah*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&b===null))return m},this.setFoveation=function(K){m=K,y!==null&&(y.fixedFoveation=K),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(K){return _[K]};let se=null;function pe(K,ie){if(x=ie.getViewerPose(p||d),M=ie,x!==null){const _e=x.views;b!==null&&(t.setRenderTargetFramebuffer(P,b.framebuffer),t.setRenderTarget(P));let Ee=!1;_e.length!==Y.cameras.length&&(Y.cameras.length=0,Ee=!0);for(let Ke=0;Ke<_e.length;Ke++){const ct=_e[Ke];let q=null;if(b!==null)q=b.getViewport(ct);else{const gt=g.getViewSubImage(y,ct);q=gt.viewport,Ke===0&&(t.setRenderTargetTextures(P,gt.colorTexture,gt.depthStencilTexture),t.setRenderTarget(P))}let mt=j[Ke];mt===void 0&&(mt=new ii,mt.layers.enable(Ke),mt.viewport=new tn,j[Ke]=mt),mt.matrix.fromArray(ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(q.x,q.y,q.width,q.height),Ke===0&&(Y.matrix.copy(mt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ee===!0&&Y.cameras.push(mt)}const Ue=l.enabledFeatures;if(Ue&&Ue.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=s.getBinding();const Ke=g.getDepthInformation(_e[0]);Ke&&Ke.isValid&&Ke.texture&&S.init(Ke,l.renderState)}if(Ue&&Ue.includes("camera-access")&&R){t.state.unbindTexture(),g=s.getBinding();for(let Ke=0;Ke<_e.length;Ke++){const ct=_e[Ke].camera;if(ct){let q=_[ct];q||(q=new u_,_[ct]=q);const mt=g.getCameraImage(ct);q.sourceTexture=mt}}}}for(let _e=0;_e<B.length;_e++){const Ee=O[_e],Ue=B[_e];Ee!==null&&Ue!==void 0&&Ue.update(Ee,ie,p||d)}se&&se(K,ie),ie.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ie}),M=null}const Me=new x_;Me.setAnimationLoop(pe),this.setAnimationLoop=function(K){se=K},this.dispose=function(){}}}const Ss=new zi,WE=new nn;function YE(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,a_(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,z,L,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),x(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&b(S,_,P)):_.isMeshMatcapMaterial?(c(S,_),M(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),R(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,z,L):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const z=t.get(_),L=z.envMap,P=z.envMapRotation;L&&(S.envMap.value=L,Ss.copy(P),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),S.envMapRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ss)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,z,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*z,S.scale.value=L*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function x(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function b(S,_,z){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=z.texture,S.transmissionSamplerSize.value.set(z.width,z.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const z=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(z.matrixWorld),S.nearDistance.value=z.shadow.camera.near,S.farDistance.value=z.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function ZE(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(z,L){const P=L.program;s.uniformBlockBinding(z,P)}function p(z,L){let P=l[z.id];P===void 0&&(M(z),P=x(z),l[z.id]=P,z.addEventListener("dispose",S));const B=L.program;s.updateUBOMapping(z,B);const O=t.render.frame;c[z.id]!==O&&(y(z),c[z.id]=O)}function x(z){const L=g();z.__bindingPointIndex=L;const P=o.createBuffer(),B=z.__size,O=z.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,B,O),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,L,P),P}function g(){for(let z=0;z<h;z++)if(d.indexOf(z)===-1)return d.push(z),z;return rn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(z){const L=l[z.id],P=z.uniforms,B=z.__cache;o.bindBuffer(o.UNIFORM_BUFFER,L);for(let O=0,H=P.length;O<H;O++){const $=Array.isArray(P[O])?P[O]:[P[O]];for(let D=0,A=$.length;D<A;D++){const j=$[D];if(b(j,O,D,B)===!0){const Y=j.__offset,Q=Array.isArray(j.value)?j.value:[j.value];let re=0;for(let ae=0;ae<Q.length;ae++){const I=Q[ae],G=R(I);typeof I=="number"||typeof I=="boolean"?(j.__data[0]=I,o.bufferSubData(o.UNIFORM_BUFFER,Y+re,j.__data)):I.isMatrix3?(j.__data[0]=I.elements[0],j.__data[1]=I.elements[1],j.__data[2]=I.elements[2],j.__data[3]=0,j.__data[4]=I.elements[3],j.__data[5]=I.elements[4],j.__data[6]=I.elements[5],j.__data[7]=0,j.__data[8]=I.elements[6],j.__data[9]=I.elements[7],j.__data[10]=I.elements[8],j.__data[11]=0):(I.toArray(j.__data,re),re+=G.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,j.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(z,L,P,B){const O=z.value,H=L+"_"+P;if(B[H]===void 0)return typeof O=="number"||typeof O=="boolean"?B[H]=O:B[H]=O.clone(),!0;{const $=B[H];if(typeof O=="number"||typeof O=="boolean"){if($!==O)return B[H]=O,!0}else if($.equals(O)===!1)return $.copy(O),!0}return!1}function M(z){const L=z.uniforms;let P=0;const B=16;for(let H=0,$=L.length;H<$;H++){const D=Array.isArray(L[H])?L[H]:[L[H]];for(let A=0,j=D.length;A<j;A++){const Y=D[A],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let re=0,ae=Q.length;re<ae;re++){const I=Q[re],G=R(I),U=P%B,V=U%G.boundary,J=U+V;P+=V,J!==0&&B-J<G.storage&&(P+=B-J),Y.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=P,P+=G.storage}}}const O=P%B;return O>0&&(P+=B-O),z.__size=P,z.__cache={},this}function R(z){const L={boundary:0,storage:0};return typeof z=="number"||typeof z=="boolean"?(L.boundary=4,L.storage=4):z.isVector2?(L.boundary=8,L.storage=8):z.isVector3||z.isColor?(L.boundary=16,L.storage=12):z.isVector4?(L.boundary=16,L.storage=16):z.isMatrix3?(L.boundary=48,L.storage=48):z.isMatrix4?(L.boundary=64,L.storage=64):z.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",z),L}function S(z){const L=z.target;L.removeEventListener("dispose",S);const P=d.indexOf(L.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[L.id]),delete l[L.id],delete c[L.id]}function _(){for(const z in l)o.deleteBuffer(l[z]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const KE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let oa=null;function QE(){return oa===null&&(oa=new tS(KE,32,32,Ph,Dr),oa.minFilter=mi,oa.magFilter=mi,oa.wrapS=ua,oa.wrapT=ua,oa.generateMipmaps=!1,oa.needsUpdate=!0),oa}class b_{constructor(t={}){const{canvas:i=Cb(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=d;const M=new Set([Fh,Ih,zh]),R=new Set([Oi,Rs,Fo,Bo,Lh,Oh]),S=new Uint32Array(4),_=new Int32Array(4);let z=null,L=null;const P=[],B=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let H=!1;this._outputColorSpace=pi;let $=0,D=0,A=null,j=-1,Y=null;const Q=new tn,re=new tn;let ae=null;const I=new Rt(0);let G=0,U=i.width,V=i.height,J=1,N=null,X=null;const se=new tn(0,0,U,V),pe=new tn(0,0,U,V);let Me=!1;const K=new Hh;let ie=!1,_e=!1;const Ee=new nn,Ue=new de,$e=new tn,yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ke=!1;function ct(){return A===null?J:1}let q=s;function mt(w,ee){return i.getContext(w,ee)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Nh}`),i.addEventListener("webglcontextlost",Re,!1),i.addEventListener("webglcontextrestored",Se,!1),i.addEventListener("webglcontextcreationerror",Be,!1),q===null){const ee="webgl2";if(q=mt(ee,w),q===null)throw mt(ee)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let gt,It,Ve,Xt,Ze,ot,F,T,le,ye,Te,xe,qe,ze,et,Xe,Ae,Ce,We,ke,Ie,st,W,Le;function De(){gt=new r3(q),gt.init(),st=new VE(q,gt),It=new QM(q,gt,t,st),Ve=new HE(q,gt),It.reversedDepthBuffer&&y&&Ve.buffers.depth.setReversed(!0),Xt=new c3(q),Ze=new RE,ot=new GE(q,gt,Ve,Ze,It,st,Xt),F=new $M(O),T=new s3(O),le=new hS(q),W=new ZM(q,le),ye=new o3(q,le,Xt,W),Te=new f3(q,ye,le,Xt),We=new u3(q,It,ot),Xe=new JM(Ze),xe=new AE(O,F,T,gt,It,W,Xe),qe=new YE(O,Ze),ze=new wE,et=new zE(gt),Ce=new YM(O,F,T,Ve,Te,b,m),Ae=new FE(O,Te,It),Le=new ZE(q,Xt,It,Ve),ke=new KM(q,gt,Xt),Ie=new l3(q,gt,Xt),Xt.programs=xe.programs,O.capabilities=It,O.extensions=gt,O.properties=Ze,O.renderLists=ze,O.shadowMap=Ae,O.state=Ve,O.info=Xt}De();const Ne=new qE(O,q);this.xr=Ne,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const w=gt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=gt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(w){w!==void 0&&(J=w,this.setSize(U,V,!1))},this.getSize=function(w){return w.set(U,V)},this.setSize=function(w,ee,he=!0){if(Ne.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}U=w,V=ee,i.width=Math.floor(w*J),i.height=Math.floor(ee*J),he===!0&&(i.style.width=w+"px",i.style.height=ee+"px"),this.setViewport(0,0,w,ee)},this.getDrawingBufferSize=function(w){return w.set(U*J,V*J).floor()},this.setDrawingBufferSize=function(w,ee,he){U=w,V=ee,J=he,i.width=Math.floor(w*he),i.height=Math.floor(ee*he),this.setViewport(0,0,w,ee)},this.getCurrentViewport=function(w){return w.copy(Q)},this.getViewport=function(w){return w.copy(se)},this.setViewport=function(w,ee,he,ue){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,ee,he,ue),Ve.viewport(Q.copy(se).multiplyScalar(J).round())},this.getScissor=function(w){return w.copy(pe)},this.setScissor=function(w,ee,he,ue){w.isVector4?pe.set(w.x,w.y,w.z,w.w):pe.set(w,ee,he,ue),Ve.scissor(re.copy(pe).multiplyScalar(J).round())},this.getScissorTest=function(){return Me},this.setScissorTest=function(w){Ve.setScissorTest(Me=w)},this.setOpaqueSort=function(w){N=w},this.setTransparentSort=function(w){X=w},this.getClearColor=function(w){return w.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(w=!0,ee=!0,he=!0){let ue=0;if(w){let ne=!1;if(A!==null){const we=A.texture.format;ne=M.has(we)}if(ne){const we=A.texture.type,Oe=R.has(we),Fe=Ce.getClearColor(),He=Ce.getClearAlpha(),nt=Fe.r,at=Fe.g,Qe=Fe.b;Oe?(S[0]=nt,S[1]=at,S[2]=Qe,S[3]=He,q.clearBufferuiv(q.COLOR,0,S)):(_[0]=nt,_[1]=at,_[2]=Qe,_[3]=He,q.clearBufferiv(q.COLOR,0,_))}else ue|=q.COLOR_BUFFER_BIT}ee&&(ue|=q.DEPTH_BUFFER_BIT),he&&(ue|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Re,!1),i.removeEventListener("webglcontextrestored",Se,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Ce.dispose(),ze.dispose(),et.dispose(),Ze.dispose(),F.dispose(),T.dispose(),Te.dispose(),W.dispose(),Le.dispose(),xe.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",Or),Ne.removeEventListener("sessionend",zr),gi.stop()};function Re(w){w.preventDefault(),Hx("WebGLRenderer: Context Lost."),H=!0}function Se(){Hx("WebGLRenderer: Context Restored."),H=!1;const w=Xt.autoReset,ee=Ae.enabled,he=Ae.autoUpdate,ue=Ae.needsUpdate,ne=Ae.type;De(),Xt.autoReset=w,Ae.enabled=ee,Ae.autoUpdate=he,Ae.needsUpdate=ue,Ae.type=ne}function Be(w){rn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function rt(w){const ee=w.target;ee.removeEventListener("dispose",rt),Ht(ee)}function Ht(w){wt(w),Ze.remove(w)}function wt(w){const ee=Ze.get(w).programs;ee!==void 0&&(ee.forEach(function(he){xe.releaseProgram(he)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,ee,he,ue,ne,we){ee===null&&(ee=yt);const Oe=ne.isMesh&&ne.matrixWorld.determinant()<0,Fe=kc(w,ee,he,ue,ne);Ve.setMaterial(ue,Oe);let He=he.index,nt=1;if(ue.wireframe===!0){if(He=ye.getWireframeAttribute(he),He===void 0)return;nt=2}const at=he.drawRange,Qe=he.attributes.position;let dt=at.start*nt,Ct=(at.start+at.count)*nt;we!==null&&(dt=Math.max(dt,we.start*nt),Ct=Math.min(Ct,(we.start+we.count)*nt)),He!==null?(dt=Math.max(dt,0),Ct=Math.min(Ct,He.count)):Qe!=null&&(dt=Math.max(dt,0),Ct=Math.min(Ct,Qe.count));const Dt=Ct-dt;if(Dt<0||Dt===1/0)return;W.setup(ne,ue,Fe,he,He);let Mt,Pt=ke;if(He!==null&&(Mt=le.get(He),Pt=Ie,Pt.setIndex(Mt)),ne.isMesh)ue.wireframe===!0?(Ve.setLineWidth(ue.wireframeLinewidth*ct()),Pt.setMode(q.LINES)):Pt.setMode(q.TRIANGLES);else if(ne.isLine){let tt=ue.linewidth;tt===void 0&&(tt=1),Ve.setLineWidth(tt*ct()),ne.isLineSegments?Pt.setMode(q.LINES):ne.isLineLoop?Pt.setMode(q.LINE_LOOP):Pt.setMode(q.LINE_STRIP)}else ne.isPoints?Pt.setMode(q.POINTS):ne.isSprite&&Pt.setMode(q.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Pt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const tt=ne._multiDrawStarts,qt=ne._multiDrawCounts,Et=ne._multiDrawCount,_n=He?le.get(He).bytesPerElement:1,xa=Ze.get(ue).currentProgram.getUniforms();for(let Yt=0;Yt<Et;Yt++)xa.setValue(q,"_gl_DrawID",Yt),Pt.render(tt[Yt]/_n,qt[Yt])}else if(ne.isInstancedMesh)Pt.renderInstances(dt,Dt,ne.count);else if(he.isInstancedBufferGeometry){const tt=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,qt=Math.min(he.instanceCount,tt);Pt.renderInstances(dt,Dt,qt)}else Pt.render(dt,Dt)};function wn(w,ee,he){w.transparent===!0&&w.side===ca&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,hn(w,ee,he),w.side=Ja,w.needsUpdate=!0,hn(w,ee,he),w.side=ca):hn(w,ee,he)}this.compile=function(w,ee,he=null){he===null&&(he=w),L=et.get(he),L.init(ee),B.push(L),he.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),w!==he&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(ee.layers)&&(L.pushLight(ne),ne.castShadow&&L.pushShadow(ne))}),L.setupLights();const ue=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const we=ne.material;if(we)if(Array.isArray(we))for(let Oe=0;Oe<we.length;Oe++){const Fe=we[Oe];wn(Fe,he,ne),ue.add(Fe)}else wn(we,he,ne),ue.add(we)}),L=B.pop(),ue},this.compileAsync=function(w,ee,he=null){const ue=this.compile(w,ee,he);return new Promise(ne=>{function we(){if(ue.forEach(function(Oe){Ze.get(Oe).currentProgram.isReady()&&ue.delete(Oe)}),ue.size===0){ne(w);return}setTimeout(we,10)}gt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let qn=null;function Wo(w){qn&&qn(w)}function Or(){gi.stop()}function zr(){gi.start()}const gi=new x_;gi.setAnimationLoop(Wo),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(w){qn=w,Ne.setAnimationLoop(w),w===null?gi.stop():gi.start()},Ne.addEventListener("sessionstart",Or),Ne.addEventListener("sessionend",zr),this.render=function(w,ee){if(ee!==void 0&&ee.isCamera!==!0){rn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ee.parent===null&&ee.matrixWorldAutoUpdate===!0&&ee.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(ee),ee=Ne.getCamera()),w.isScene===!0&&w.onBeforeRender(O,w,ee,A),L=et.get(w,B.length),L.init(ee),B.push(L),Ee.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),K.setFromProjectionMatrix(Ee,Ui,ee.reversedDepth),_e=this.localClippingEnabled,ie=Xe.init(this.clippingPlanes,_e),z=ze.get(w,P.length),z.init(),P.push(z),Ne.enabled===!0&&Ne.isPresenting===!0){const we=O.xr.getDepthSensingMesh();we!==null&&$a(we,ee,-1/0,O.sortObjects)}$a(w,ee,0,O.sortObjects),z.finish(),O.sortObjects===!0&&z.sort(N,X),Ke=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Ke&&Ce.addToRenderList(z,w),this.info.render.frame++,ie===!0&&Xe.beginShadows();const he=L.state.shadowsArray;Ae.render(he,w,ee),ie===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ue=z.opaque,ne=z.transmissive;if(L.setupLights(),ee.isArrayCamera){const we=ee.cameras;if(ne.length>0)for(let Oe=0,Fe=we.length;Oe<Fe;Oe++){const He=we[Oe];Ir(ue,ne,w,He)}Ke&&Ce.render(w);for(let Oe=0,Fe=we.length;Oe<Fe;Oe++){const He=we[Oe];Pr(z,w,He,He.viewport)}}else ne.length>0&&Ir(ue,ne,w,ee),Ke&&Ce.render(w),Pr(z,w,ee);A!==null&&D===0&&(ot.updateMultisampleRenderTarget(A),ot.updateRenderTargetMipmap(A)),w.isScene===!0&&w.onAfterRender(O,w,ee),W.resetDefaultState(),j=-1,Y=null,B.pop(),B.length>0?(L=B[B.length-1],ie===!0&&Xe.setGlobalState(O.clippingPlanes,L.state.camera)):L=null,P.pop(),P.length>0?z=P[P.length-1]:z=null};function $a(w,ee,he,ue){if(w.visible===!1)return;if(w.layers.test(ee.layers)){if(w.isGroup)he=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(ee);else if(w.isLight)L.pushLight(w),w.castShadow&&L.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||K.intersectsSprite(w)){ue&&$e.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const Oe=Te.update(w),Fe=w.material;Fe.visible&&z.push(w,Oe,Fe,he,$e.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||K.intersectsObject(w))){const Oe=Te.update(w),Fe=w.material;if(ue&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),$e.copy(w.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),$e.copy(Oe.boundingSphere.center)),$e.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(Fe)){const He=Oe.groups;for(let nt=0,at=He.length;nt<at;nt++){const Qe=He[nt],dt=Fe[Qe.materialIndex];dt&&dt.visible&&z.push(w,Oe,dt,he,$e.z,Qe)}}else Fe.visible&&z.push(w,Oe,Fe,he,$e.z,null)}}const we=w.children;for(let Oe=0,Fe=we.length;Oe<Fe;Oe++)$a(we[Oe],ee,he,ue)}function Pr(w,ee,he,ue){const{opaque:ne,transmissive:we,transparent:Oe}=w;L.setupLightsView(he),ie===!0&&Xe.setGlobalState(O.clippingPlanes,he),ue&&Ve.viewport(Q.copy(ue)),ne.length>0&&Wn(ne,ee,he),we.length>0&&Wn(we,ee,he),Oe.length>0&&Wn(Oe,ee,he),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function Ir(w,ee,he,ue){if((he.isScene===!0?he.overrideMaterial:null)!==null)return;L.state.transmissionRenderTarget[ue.id]===void 0&&(L.state.transmissionRenderTarget[ue.id]=new Cs(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?Dr:Oi,minFilter:As,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const we=L.state.transmissionRenderTarget[ue.id],Oe=ue.viewport||Q;we.setSize(Oe.z*O.transmissionResolutionScale,Oe.w*O.transmissionResolutionScale);const Fe=O.getRenderTarget(),He=O.getActiveCubeFace(),nt=O.getActiveMipmapLevel();O.setRenderTarget(we),O.getClearColor(I),G=O.getClearAlpha(),G<1&&O.setClearColor(16777215,.5),O.clear(),Ke&&Ce.render(he);const at=O.toneMapping;O.toneMapping=Qa;const Qe=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),L.setupLightsView(ue),ie===!0&&Xe.setGlobalState(O.clippingPlanes,ue),Wn(w,he,ue),ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we),gt.has("WEBGL_multisampled_render_to_texture")===!1){let dt=!1;for(let Ct=0,Dt=ee.length;Ct<Dt;Ct++){const Mt=ee[Ct],{object:Pt,geometry:tt,material:qt,group:Et}=Mt;if(qt.side===ca&&Pt.layers.test(ue.layers)){const _n=qt.side;qt.side=Xn,qt.needsUpdate=!0,on(Pt,he,ue,tt,qt,Et),qt.side=_n,qt.needsUpdate=!0,dt=!0}}dt===!0&&(ot.updateMultisampleRenderTarget(we),ot.updateRenderTargetMipmap(we))}O.setRenderTarget(Fe,He,nt),O.setClearColor(I,G),Qe!==void 0&&(ue.viewport=Qe),O.toneMapping=at}function Wn(w,ee,he){const ue=ee.isScene===!0?ee.overrideMaterial:null;for(let ne=0,we=w.length;ne<we;ne++){const Oe=w[ne],{object:Fe,geometry:He,group:nt}=Oe;let at=Oe.material;at.allowOverride===!0&&ue!==null&&(at=ue),Fe.layers.test(he.layers)&&on(Fe,ee,he,He,at,nt)}}function on(w,ee,he,ue,ne,we){w.onBeforeRender(O,ee,he,ue,ne,we),w.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(O,ee,he,ue,w,we),ne.transparent===!0&&ne.side===ca&&ne.forceSinglePass===!1?(ne.side=Xn,ne.needsUpdate=!0,O.renderBufferDirect(he,ee,ue,ne,w,we),ne.side=Ja,ne.needsUpdate=!0,O.renderBufferDirect(he,ee,ue,ne,w,we),ne.side=ca):O.renderBufferDirect(he,ee,ue,ne,w,we),w.onAfterRender(O,ee,he,ue,ne,we)}function hn(w,ee,he){ee.isScene!==!0&&(ee=yt);const ue=Ze.get(w),ne=L.state.lights,we=L.state.shadowsArray,Oe=ne.state.version,Fe=xe.getParameters(w,ne.state,we,ee,he),He=xe.getProgramCacheKey(Fe);let nt=ue.programs;ue.environment=w.isMeshStandardMaterial?ee.environment:null,ue.fog=ee.fog,ue.envMap=(w.isMeshStandardMaterial?T:F).get(w.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&w.envMap===null?ee.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",rt),nt=new Map,ue.programs=nt);let at=nt.get(He);if(at!==void 0){if(ue.currentProgram===at&&ue.lightsStateVersion===Oe)return ws(w,Fe),at}else Fe.uniforms=xe.getUniforms(w),w.onBeforeCompile(Fe,O),at=xe.acquireProgram(Fe,He),nt.set(He,at),ue.uniforms=Fe.uniforms;const Qe=ue.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Qe.clippingPlanes=Xe.uniform),ws(w,Fe),ue.needsLights=Yo(w),ue.lightsStateVersion=Oe,ue.needsLights&&(Qe.ambientLightColor.value=ne.state.ambient,Qe.lightProbe.value=ne.state.probe,Qe.directionalLights.value=ne.state.directional,Qe.directionalLightShadows.value=ne.state.directionalShadow,Qe.spotLights.value=ne.state.spot,Qe.spotLightShadows.value=ne.state.spotShadow,Qe.rectAreaLights.value=ne.state.rectArea,Qe.ltc_1.value=ne.state.rectAreaLTC1,Qe.ltc_2.value=ne.state.rectAreaLTC2,Qe.pointLights.value=ne.state.point,Qe.pointLightShadows.value=ne.state.pointShadow,Qe.hemisphereLights.value=ne.state.hemi,Qe.directionalShadowMap.value=ne.state.directionalShadowMap,Qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Qe.spotShadowMap.value=ne.state.spotShadowMap,Qe.spotLightMatrix.value=ne.state.spotLightMatrix,Qe.spotLightMap.value=ne.state.spotLightMap,Qe.pointShadowMap.value=ne.state.pointShadowMap,Qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ue.currentProgram=at,ue.uniformsList=null,at}function Pi(w){if(w.uniformsList===null){const ee=w.currentProgram.getUniforms();w.uniformsList=Nc.seqWithValue(ee.seq,w.uniforms)}return w.uniformsList}function ws(w,ee){const he=Ze.get(w);he.outputColorSpace=ee.outputColorSpace,he.batching=ee.batching,he.batchingColor=ee.batchingColor,he.instancing=ee.instancing,he.instancingColor=ee.instancingColor,he.instancingMorph=ee.instancingMorph,he.skinning=ee.skinning,he.morphTargets=ee.morphTargets,he.morphNormals=ee.morphNormals,he.morphColors=ee.morphColors,he.morphTargetsCount=ee.morphTargetsCount,he.numClippingPlanes=ee.numClippingPlanes,he.numIntersection=ee.numClipIntersection,he.vertexAlphas=ee.vertexAlphas,he.vertexTangents=ee.vertexTangents,he.toneMapping=ee.toneMapping}function kc(w,ee,he,ue,ne){ee.isScene!==!0&&(ee=yt),ot.resetTextureUnits();const we=ee.fog,Oe=ue.isMeshStandardMaterial?ee.environment:null,Fe=A===null?O.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ar,He=(ue.isMeshStandardMaterial?T:F).get(ue.envMap||Oe),nt=ue.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,at=!!he.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Qe=!!he.morphAttributes.position,dt=!!he.morphAttributes.normal,Ct=!!he.morphAttributes.color;let Dt=Qa;ue.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Dt=O.toneMapping);const Mt=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Pt=Mt!==void 0?Mt.length:0,tt=Ze.get(ue),qt=L.state.lights;if(ie===!0&&(_e===!0||w!==Y)){const yn=w===Y&&ue.id===j;Xe.setState(ue,w,yn)}let Et=!1;ue.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==qt.state.version||tt.outputColorSpace!==Fe||ne.isBatchedMesh&&tt.batching===!1||!ne.isBatchedMesh&&tt.batching===!0||ne.isBatchedMesh&&tt.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&tt.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&tt.instancing===!1||!ne.isInstancedMesh&&tt.instancing===!0||ne.isSkinnedMesh&&tt.skinning===!1||!ne.isSkinnedMesh&&tt.skinning===!0||ne.isInstancedMesh&&tt.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&tt.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&tt.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&tt.instancingMorph===!1&&ne.morphTexture!==null||tt.envMap!==He||ue.fog===!0&&tt.fog!==we||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==Xe.numPlanes||tt.numIntersection!==Xe.numIntersection)||tt.vertexAlphas!==nt||tt.vertexTangents!==at||tt.morphTargets!==Qe||tt.morphNormals!==dt||tt.morphColors!==Ct||tt.toneMapping!==Dt||tt.morphTargetsCount!==Pt)&&(Et=!0):(Et=!0,tt.__version=ue.version);let _n=tt.currentProgram;Et===!0&&(_n=hn(ue,ee,ne));let xa=!1,Yt=!1,Ii=!1;const Zt=_n.getUniforms(),vn=tt.uniforms;if(Ve.useProgram(_n.program)&&(xa=!0,Yt=!0,Ii=!0),ue.id!==j&&(j=ue.id,Yt=!0),xa||Y!==w){Ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Zt.setValue(q,"projectionMatrix",w.projectionMatrix),Zt.setValue(q,"viewMatrix",w.matrixWorldInverse);const En=Zt.map.cameraPosition;En!==void 0&&En.setValue(q,Ue.setFromMatrixPosition(w.matrixWorld)),It.logarithmicDepthBuffer&&Zt.setValue(q,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&Zt.setValue(q,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Yt=!0,Ii=!0)}if(ne.isSkinnedMesh){Zt.setOptional(q,ne,"bindMatrix"),Zt.setOptional(q,ne,"bindMatrixInverse");const yn=ne.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Zt.setValue(q,"boneTexture",yn.boneTexture,ot))}ne.isBatchedMesh&&(Zt.setOptional(q,ne,"batchingTexture"),Zt.setValue(q,"batchingTexture",ne._matricesTexture,ot),Zt.setOptional(q,ne,"batchingIdTexture"),Zt.setValue(q,"batchingIdTexture",ne._indirectTexture,ot),Zt.setOptional(q,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Zt.setValue(q,"batchingColorTexture",ne._colorsTexture,ot));const pn=he.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&We.update(ne,he,_n),(Yt||tt.receiveShadow!==ne.receiveShadow)&&(tt.receiveShadow=ne.receiveShadow,Zt.setValue(q,"receiveShadow",ne.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(vn.envMap.value=He,vn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&ee.environment!==null&&(vn.envMapIntensity.value=ee.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=QE()),Yt&&(Zt.setValue(q,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&jc(vn,Ii),we&&ue.fog===!0&&qe.refreshFogUniforms(vn,we),qe.refreshMaterialUniforms(vn,ue,J,V,L.state.transmissionRenderTarget[w.id]),Nc.upload(q,Pi(tt),vn,ot)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(Nc.upload(q,Pi(tt),vn,ot),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&Zt.setValue(q,"center",ne.center),Zt.setValue(q,"modelViewMatrix",ne.modelViewMatrix),Zt.setValue(q,"normalMatrix",ne.normalMatrix),Zt.setValue(q,"modelMatrix",ne.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){const yn=ue.uniformsGroups;for(let En=0,Ai=yn.length;En<Ai;En++){const Fi=yn[En];Le.update(Fi,_n),Le.bind(Fi,_n)}}return _n}function jc(w,ee){w.ambientLightColor.needsUpdate=ee,w.lightProbe.needsUpdate=ee,w.directionalLights.needsUpdate=ee,w.directionalLightShadows.needsUpdate=ee,w.pointLights.needsUpdate=ee,w.pointLightShadows.needsUpdate=ee,w.spotLights.needsUpdate=ee,w.spotLightShadows.needsUpdate=ee,w.rectAreaLights.needsUpdate=ee,w.hemisphereLights.needsUpdate=ee}function Yo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return $},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(w,ee,he){const ue=Ze.get(w);ue.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,ue.__autoAllocateDepthBuffer===!1&&(ue.__useRenderToTexture=!1),Ze.get(w.texture).__webglTexture=ee,Ze.get(w.depthTexture).__webglTexture=ue.__autoAllocateDepthBuffer?void 0:he,ue.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,ee){const he=Ze.get(w);he.__webglFramebuffer=ee,he.__useDefaultFramebuffer=ee===void 0};const es=q.createFramebuffer();this.setRenderTarget=function(w,ee=0,he=0){A=w,$=ee,D=he;let ue=!0,ne=null,we=!1,Oe=!1;if(w){const He=Ze.get(w);if(He.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(q.FRAMEBUFFER,null),ue=!1;else if(He.__webglFramebuffer===void 0)ot.setupRenderTarget(w);else if(He.__hasExternalTextures)ot.rebindTextures(w,Ze.get(w.texture).__webglTexture,Ze.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Qe=w.depthTexture;if(He.__boundDepthTexture!==Qe){if(Qe!==null&&Ze.has(Qe)&&(w.width!==Qe.image.width||w.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(w)}}const nt=w.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Oe=!0);const at=Ze.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(at[ee])?ne=at[ee][he]:ne=at[ee],we=!0):w.samples>0&&ot.useMultisampledRTT(w)===!1?ne=Ze.get(w).__webglMultisampledFramebuffer:Array.isArray(at)?ne=at[he]:ne=at,Q.copy(w.viewport),re.copy(w.scissor),ae=w.scissorTest}else Q.copy(se).multiplyScalar(J).floor(),re.copy(pe).multiplyScalar(J).floor(),ae=Me;if(he!==0&&(ne=es),Ve.bindFramebuffer(q.FRAMEBUFFER,ne)&&ue&&Ve.drawBuffers(w,ne),Ve.viewport(Q),Ve.scissor(re),Ve.setScissorTest(ae),we){const He=Ze.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+ee,He.__webglTexture,he)}else if(Oe){const He=ee;for(let nt=0;nt<w.textures.length;nt++){const at=Ze.get(w.textures[nt]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+nt,at.__webglTexture,he,He)}}else if(w!==null&&he!==0){const He=Ze.get(w.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,He.__webglTexture,he)}j=-1},this.readRenderTargetPixels=function(w,ee,he,ue,ne,we,Oe,Fe=0){if(!(w&&w.isWebGLRenderTarget)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He){Ve.bindFramebuffer(q.FRAMEBUFFER,He);try{const nt=w.textures[Fe],at=nt.format,Qe=nt.type;if(!It.textureFormatReadable(at)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Qe)){rn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}ee>=0&&ee<=w.width-ue&&he>=0&&he<=w.height-ne&&(w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),q.readPixels(ee,he,ue,ne,st.convert(at),st.convert(Qe),we))}finally{const nt=A!==null?Ze.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(q.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,ee,he,ue,ne,we,Oe,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let He=Ze.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Oe!==void 0&&(He=He[Oe]),He)if(ee>=0&&ee<=w.width-ue&&he>=0&&he<=w.height-ne){Ve.bindFramebuffer(q.FRAMEBUFFER,He);const nt=w.textures[Fe],at=nt.format,Qe=nt.type;if(!It.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,dt),q.bufferData(q.PIXEL_PACK_BUFFER,we.byteLength,q.STREAM_READ),w.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Fe),q.readPixels(ee,he,ue,ne,st.convert(at),st.convert(Qe),0);const Ct=A!==null?Ze.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(q.FRAMEBUFFER,Ct);const Dt=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await wb(q,Dt,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,dt),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,we),q.deleteBuffer(dt),q.deleteSync(Dt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,ee=null,he=0){const ue=Math.pow(2,-he),ne=Math.floor(w.image.width*ue),we=Math.floor(w.image.height*ue),Oe=ee!==null?ee.x:0,Fe=ee!==null?ee.y:0;ot.setTexture2D(w,0),q.copyTexSubImage2D(q.TEXTURE_2D,he,0,0,Oe,Fe,ne,we),Ve.unbindTexture()};const Fr=q.createFramebuffer(),ma=q.createFramebuffer();this.copyTextureToTexture=function(w,ee,he=null,ue=null,ne=0,we=null){we===null&&(ne!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=ne,ne=0):we=0);let Oe,Fe,He,nt,at,Qe,dt,Ct,Dt;const Mt=w.isCompressedTexture?w.mipmaps[we]:w.image;if(he!==null)Oe=he.max.x-he.min.x,Fe=he.max.y-he.min.y,He=he.isBox3?he.max.z-he.min.z:1,nt=he.min.x,at=he.min.y,Qe=he.isBox3?he.min.z:0;else{const pn=Math.pow(2,-ne);Oe=Math.floor(Mt.width*pn),Fe=Math.floor(Mt.height*pn),w.isDataArrayTexture?He=Mt.depth:w.isData3DTexture?He=Math.floor(Mt.depth*pn):He=1,nt=0,at=0,Qe=0}ue!==null?(dt=ue.x,Ct=ue.y,Dt=ue.z):(dt=0,Ct=0,Dt=0);const Pt=st.convert(ee.format),tt=st.convert(ee.type);let qt;ee.isData3DTexture?(ot.setTexture3D(ee,0),qt=q.TEXTURE_3D):ee.isDataArrayTexture||ee.isCompressedArrayTexture?(ot.setTexture2DArray(ee,0),qt=q.TEXTURE_2D_ARRAY):(ot.setTexture2D(ee,0),qt=q.TEXTURE_2D),q.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,ee.flipY),q.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ee.premultiplyAlpha),q.pixelStorei(q.UNPACK_ALIGNMENT,ee.unpackAlignment);const Et=q.getParameter(q.UNPACK_ROW_LENGTH),_n=q.getParameter(q.UNPACK_IMAGE_HEIGHT),xa=q.getParameter(q.UNPACK_SKIP_PIXELS),Yt=q.getParameter(q.UNPACK_SKIP_ROWS),Ii=q.getParameter(q.UNPACK_SKIP_IMAGES);q.pixelStorei(q.UNPACK_ROW_LENGTH,Mt.width),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Mt.height),q.pixelStorei(q.UNPACK_SKIP_PIXELS,nt),q.pixelStorei(q.UNPACK_SKIP_ROWS,at),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Qe);const Zt=w.isDataArrayTexture||w.isData3DTexture,vn=ee.isDataArrayTexture||ee.isData3DTexture;if(w.isDepthTexture){const pn=Ze.get(w),yn=Ze.get(ee),En=Ze.get(pn.__renderTarget),Ai=Ze.get(yn.__renderTarget);Ve.bindFramebuffer(q.READ_FRAMEBUFFER,En.__webglFramebuffer),Ve.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Fi=0;Fi<He;Fi++)Zt&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.get(w).__webglTexture,ne,Qe+Fi),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ze.get(ee).__webglTexture,we,Dt+Fi)),q.blitFramebuffer(nt,at,Oe,Fe,dt,Ct,Oe,Fe,q.DEPTH_BUFFER_BIT,q.NEAREST);Ve.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||Ze.has(w)){const pn=Ze.get(w),yn=Ze.get(ee);Ve.bindFramebuffer(q.READ_FRAMEBUFFER,Fr),Ve.bindFramebuffer(q.DRAW_FRAMEBUFFER,ma);for(let En=0;En<He;En++)Zt?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,pn.__webglTexture,ne,Qe+En):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,pn.__webglTexture,ne),vn?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,yn.__webglTexture,we,Dt+En):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,yn.__webglTexture,we),ne!==0?q.blitFramebuffer(nt,at,Oe,Fe,dt,Ct,Oe,Fe,q.COLOR_BUFFER_BIT,q.NEAREST):vn?q.copyTexSubImage3D(qt,we,dt,Ct,Dt+En,nt,at,Oe,Fe):q.copyTexSubImage2D(qt,we,dt,Ct,nt,at,Oe,Fe);Ve.bindFramebuffer(q.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else vn?w.isDataTexture||w.isData3DTexture?q.texSubImage3D(qt,we,dt,Ct,Dt,Oe,Fe,He,Pt,tt,Mt.data):ee.isCompressedArrayTexture?q.compressedTexSubImage3D(qt,we,dt,Ct,Dt,Oe,Fe,He,Pt,Mt.data):q.texSubImage3D(qt,we,dt,Ct,Dt,Oe,Fe,He,Pt,tt,Mt):w.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,we,dt,Ct,Oe,Fe,Pt,tt,Mt.data):w.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,we,dt,Ct,Mt.width,Mt.height,Pt,Mt.data):q.texSubImage2D(q.TEXTURE_2D,we,dt,Ct,Oe,Fe,Pt,tt,Mt);q.pixelStorei(q.UNPACK_ROW_LENGTH,Et),q.pixelStorei(q.UNPACK_IMAGE_HEIGHT,_n),q.pixelStorei(q.UNPACK_SKIP_PIXELS,xa),q.pixelStorei(q.UNPACK_SKIP_ROWS,Yt),q.pixelStorei(q.UNPACK_SKIP_IMAGES,Ii),we===0&&ee.generateMipmaps&&q.generateMipmap(qt),Ve.unbindTexture()},this.initRenderTarget=function(w){Ze.get(w).__webglFramebuffer===void 0&&ot.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ot.setTextureCube(w,0):w.isData3DTexture?ot.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ot.setTexture2DArray(w,0):ot.setTexture2D(w,0),Ve.unbindTexture()},this.resetState=function(){$=0,D=0,A=null,Ve.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Lt._getUnpackColorSpace()}}function JE({minHeight:o=260,intensity:t=.4,mode:i="repel",q1Sign:s=1,q2Sign:l=-1}){const c=Ye.useRef(null);return Ye.useEffect(()=>{const d=c.current;if(!d)return;const h=d.clientWidth,m=d.clientHeight||o,p=new o_;p.background=new Rt(132631);const x=new ii(45,h/m,.1,1e3);x.position.set(0,.9,5),x.lookAt(0,0,0);const g=new b_({antialias:!0});g.setSize(h,m),g.setPixelRatio(window.devicePixelRatio),d.appendChild(g.domElement),p.add(new p_(16777215,.9));const y=new h_(16777215,1.2);y.position.set(3,5,2),p.add(y);const b=new wr(.4,32,32),M=new Rh({color:s>=0?16733525:5609983}),R=new Rh({color:l>=0?16733525:5609983}),S=new Ln(b,M),_=new Ln(b,R);S.position.set(-1.2,0,0),_.position.set(1.2,0,0),p.add(S,_);const z=new Ya,L=new Bc(.06,.35,16),P=new Rr({color:16768341}),B=Math.min(1,Math.max(0,t)),O=7+Math.round(B*8),H=i==="none"?4:O;for(let se=0;se<H;se++){const Me=(se/(H-1)-.5)*2*.8,K=(Math.random()-.5)*.1,ie=new Ln(L,P);ie.position.set(Me-.25,K,0);const _e=new Ln(L,P);_e.position.set(-Me+.25,K,0),i==="attract"?(ie.lookAt(0,K,0),_e.lookAt(0,K,0)):(ie.lookAt(1,K,0),_e.lookAt(-1,K,0));const Ee=1+B*1.5*(i==="none"?.4:1);ie.scale.set(1,Ee,1),_e.scale.set(1,Ee,1),z.add(ie),z.add(_e)}p.add(z);const $=new wr(.03,8,8),D=new Rr({color:16755251}),A=new Ya;p.add(A);const j=120,Y=[],Q=()=>-.9+Math.random()*1.8,re=()=>new de(Q(),(Math.random()-.5)*.6,(Math.random()-.5)*.6);for(let se=0;se<j;se++){const pe=new Ln($,D);pe.position.copy(re()),A.add(pe),Y.push({m:pe,life:Math.random()*1.5})}const ae=new de(-1.2,0,0),I=new de(1.2,0,0),G=i==="attract"?-1:i==="repel"?1:.2;function U(se){const pe=new de,Me=new de().subVectors(se,ae),K=new de().subVectors(se,I),ie=Math.max(.12,Me.length()),_e=Math.max(.12,K.length());return pe.add(Me.multiplyScalar(s/(ie*ie*ie))),pe.add(K.multiplyScalar(l/(_e*_e*_e))),pe.multiplyScalar(G),pe}const V=new m_;let J;const N=()=>{J=requestAnimationFrame(N);const se=V.getElapsedTime(),pe=.3+B*1.5;z.rotation.z=.05*Math.sin(se*pe),S.position.y=.05*Math.sin(se*1.3),_.position.y=.05*Math.cos(se*1.1);const Me=.016,K=.8+B*2;for(let ie=0;ie<Y.length;ie++){const _e=Y[ie],Ee=U(_e.m.position);_e.m.position.addScaledVector(Ee,Me*K),_e.life+=Me,(_e.m.position.x<-2||_e.m.position.x>2||Math.abs(_e.m.position.y)>1.2||Math.abs(_e.m.position.z)>1.2||_e.life>3)&&(_e.m.position.copy(re()),_e.life=0)}g.render(p,x)};N();const X=()=>{const se=d.clientWidth,pe=d.clientHeight||o;x.aspect=se/pe,x.updateProjectionMatrix(),g.setSize(se,pe)};return window.addEventListener("resize",X),()=>{window.removeEventListener("resize",X),cancelAnimationFrame(J),g.dispose(),d.removeChild(g.domElement)}},[o,t,i,s,l]),E.jsx("div",{ref:c,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}function $E({minHeight:o=260,intensity:t=.4,isNegative:i=!1}){const s=Ye.useRef(null);return Ye.useEffect(()=>{const l=s.current;if(!l)return;const c=l.clientWidth,d=l.clientHeight||o,h=new o_;h.background=new Rt(132631);const m=new ii(45,c/d,.1,1e3);m.position.set(0,.9,4.2),m.lookAt(0,0,0);const p=new b_({antialias:!0});p.setSize(c,d),p.setPixelRatio(window.devicePixelRatio),l.appendChild(p.domElement),h.add(new p_(16777215,.9));const x=new h_(16777215,1.2);x.position.set(3,5,2),h.add(x);const g=new wr(.45,32,32),y=new Rh({color:i?5609983:16733525}),b=new Ln(g,y);b.position.set(0,0,0),h.add(b);const M=new Ya,R=Math.min(1,Math.max(0,t)),S=28,_=1.2,z=.55+R*.4,L=.18+R*.12,P=.08+R*.05,B=i?6333946:16498468;for(let I=0;I<S;I++){const G=I/S*Math.PI*2,U=new de(Math.cos(G),0,Math.sin(G)),V=U.clone().multiplyScalar(_),J=i?U.clone().multiplyScalar(-1):U.clone(),N=new fS(J.normalize(),V,z,B,L,P);M.add(N)}h.add(M);const O=new wr(.025,8,8),H=new Rr({color:i?6333946:16498468}),$=new Ya;h.add($);const D=[],A=110;function j(){const I=i?1.6+Math.random()*.6:.35+Math.random()*.2,G=Math.random()*Math.PI*2,U=new de(Math.cos(G)*I,(Math.random()-.5)*.15,Math.sin(G)*I),V=new Ln(O,H);V.position.copy(U),$.add(V);const J=3+Math.random()*2;return{m:V,life:0,lifeMax:J}}for(let I=0;I<A;I++)D.push(j());const Y=new m_;let Q;const re=()=>{Q=requestAnimationFrame(re);const I=Y.getElapsedTime(),G=.35+R*1.4;M.rotation.y+=.0015*G,b.position.y=.05*Math.sin(I*2);const U=.016,V=.6+R*1.6;for(let J=0;J<D.length;J++){const N=D[J],X=new de().subVectors(N.m.position,b.position),se=Math.max(.2,X.length());X.normalize(),i&&X.multiplyScalar(-1);const pe=1.2/(se*se);N.m.position.addScaledVector(X,U*V*pe),N.life+=U,(N.life>N.lifeMax||N.m.position.length()>3.2||N.m.position.length()<.25)&&($.remove(N.m),D[J]=j())}p.render(h,m)};re();const ae=()=>{const I=l.clientWidth,G=l.clientHeight||o;m.aspect=I/G,m.updateProjectionMatrix(),p.setSize(I,G)};return window.addEventListener("resize",ae),()=>{window.removeEventListener("resize",ae),cancelAnimationFrame(Q),p.dispose(),l.removeChild(p.domElement)}},[o,t,i]),E.jsx("div",{ref:s,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}const Ka=24,Ug=4,Lg=900,Og=420;let zd=1;function e2(o,t){const i=o.x-t.x,s=o.y-t.y;return Math.sqrt(i*i+s*s)}function Po(o,t){return{x:Math.round(o/Ka)*Ka,y:Math.round(t/Ka)*Ka}}function Pd(o,t,i,s=10){const l={x:t,y:i};for(const c of o)if(e2(c,l)<=s)return c;return null}function Id(o,t){const i=o.createSVGPoint();i.x=t.clientX,i.y=t.clientY;const s=o.getScreenCTM();if(!s)return{x:0,y:0};const l=s.inverse(),c=i.matrixTransform(l);return{x:c.x,y:c.y}}function zg(o,t,i){const s=i.x-t.x,l=i.y-t.y,c=o.x-t.x,d=o.y-t.y,h=s*c+l*d;if(h<=0)return Math.hypot(o.x-t.x,o.y-t.y);const m=s*s+l*l;if(m<=h)return Math.hypot(o.x-i.x,o.y-i.y);const p=h/m,x={x:t.x+p*s,y:t.y+p*l};return Math.hypot(o.x-x.x,o.y-x.y)}function t2(o,t,i){if(!o.length||!t.length)return{ok:!1,message:"Dibuja al menos una resistencia."};const s=t.filter(U=>U.type==="resistor");if(!s.length)return{ok:!1,message:"No hay resistencias en el circuito."};const l=t.filter(U=>U.type==="wire"),c=t.filter(U=>U.type==="source"),d=new Map;o.forEach((U,V)=>d.set(U.id,V));const h=o.map((U,V)=>V),m=U=>h[U]===U?U:h[U]=m(h[U]),p=(U,V)=>{U=m(U),V=m(V),U!==V&&(h[V]=U)};for(const U of l){const V=d.get(U.n1),J=d.get(U.n2);V!=null&&J!=null&&p(V,J)}const x=new Map;let g=0;const y=new Map;if(o.forEach(U=>{const V=d.get(U.id),J=m(V);x.has(J)||x.set(J,g++),y.set(U.id,x.get(J))}),g<2)return{ok:!1,message:"El circuito no tiene al menos dos nodos distintos después de unir los cables."};const b=[];for(const U of s){const V=y.get(U.n1),J=y.get(U.n2);if(V==null||J==null||V===J)continue;const N=Number(U.value)||0;N<=0||b.push({a:V,b:J,R:N,id:U.id})}if(!b.length)return{ok:!1,message:"Las resistencias tienen valor 0 o no conectan nodos distintos."};let M=0,R=1;if(c.length){const U=c[0],V=y.get(U.n1),J=y.get(U.n2);V!=null&&J!=null&&V!==J&&(M=V,R=J)}else{let U=o[0],V=o[0];for(const J of o)J.x<U.x&&(U=J),J.x>V.x&&(V=J);M=y.get(U.id),R=y.get(V.id)}const S=Number(i)||0;if(S<=0)return{ok:!1,message:"Ingresa un voltaje positivo para calcular la corriente."};const _=Array.from(new Set(y.values())),z=_.filter(U=>U!==M&&U!==R),L=new Map;z.forEach((U,V)=>L.set(U,V));const P=z.length,B=Array.from({length:P},()=>Array(P).fill(0)),O=Array(P).fill(0),H=U=>U===M?S:U===R?0:null;for(const U of b){const V=1/U.R,[J,N]=[U.a,U.b],X=L.get(J),se=L.get(N),pe=H(J),Me=H(N);X!=null&&se!=null?(B[X][X]+=V,B[se][se]+=V,B[X][se]-=V,B[se][X]-=V):X!=null&&Me!=null?(B[X][X]+=V,O[X]+=V*Me):se!=null&&pe!=null?(B[se][se]+=V,O[se]+=V*pe):X!=null&&se==null&&Me==null?B[X][X]+=V:se!=null&&X==null&&pe==null&&(B[se][se]+=V)}const $=Array(P).fill(0);if(P>0){for(let V=0;V<P;V++){let J=V;for(let X=V+1;X<P;X++)Math.abs(B[X][V])>Math.abs(B[J][V])&&(J=X);if(Math.abs(B[J][V])<1e-9)continue;[B[V],B[J]]=[B[J],B[V]],[O[V],O[J]]=[O[J],O[V]];const N=B[V][V];for(let X=V;X<P;X++)B[V][X]/=N;O[V]/=N;for(let X=0;X<P;X++){if(X===V)continue;const se=B[X][V];for(let pe=V;pe<P;pe++)B[X][pe]-=se*B[V][pe];O[X]-=se*O[V]}}for(let V=0;V<P;V++)$[V]=O[V]}const D=new Map;_.forEach(U=>{const V=L.get(U);V!=null?D.set(U,$[V]):D.set(U,H(U)??0)});let A=0;for(const U of b)if(U.a===M||U.b===M){const V=U.a===M?U.b:U.a,J=D.get(M),N=D.get(V);A+=(J-N)/U.R}const j=S/A;let Y="Mixto";const Q=new Set;b.forEach(U=>{Q.add(U.a),Q.add(U.b)});const re={};Q.forEach(U=>re[U]=0),b.forEach(U=>{re[U.a]++,re[U.b]++});const ae=b.length,I=Q.size;return b.every(U=>U.a===M&&U.b===R||U.a===R&&U.b===M)&&ae>1?Y="Paralelo simple":ae===I-1&&re[M]===1&&re[R]===1&&(Y="Serie (camino único)"),{ok:!0,message:"",Req:j,Itotal:A,Vsrc:S,tipo:Y,branchCurrents:b.map(U=>{const V=D.get(U.a),J=D.get(U.b);return{id:U.id,I:(V-J)/U.R,Va:V,Vb:J,R:U.R}})}}function n2({onBack:o}){const[t,i]=Ye.useState("wire"),[s,l]=Ye.useState([]),[c,d]=Ye.useState([]),[h,m]=Ye.useState(null),[p,x]=Ye.useState(null),[g,y]=Ye.useState(null),[b,M]=Ye.useState("10"),[R,S]=Ye.useState(null),[_,z]=Ye.useState("Selecciona una herramienta, haz clic y arrastra tipo Paint."),[L,P]=Ye.useState(!1),[B,O]=Ye.useState(null),[H,$]=Ye.useState(null),D=Ye.useRef(null),A=Ye.useRef(null),j=G=>{if(!D.current)return;const{x:U,y:V}=Id(D.current,G),{x:J,y:N}=Po(U,V);if(t==="select"){const se={x:J,y:N},pe=8;let Me={id:null,dist:1/0};for(const K of c){const ie=s.find(Ue=>Ue.id===K.n1),_e=s.find(Ue=>Ue.id===K.n2);if(!ie||!_e)continue;const Ee=zg(se,ie,_e);Ee<Me.dist&&(Me={id:K.id,dist:Ee})}if(Me.id&&Me.dist<=pe){y(Me.id),z(`Seleccionado: ${Me.id}`);const K=c.find(ie=>ie.id===Me.id);if(K){const ie=s.find(Ee=>Ee.id===K.n1),_e=s.find(Ee=>Ee.id===K.n2);ie&&_e&&(A.current={mode:"move",elId:K.id,n1:K.n1,n2:K.n2,start:{x:J,y:N},startPos:{[K.n1]:{x:ie.x,y:ie.y},[K.n2]:{x:_e.x,y:_e.y}}})}}else y(null),z("Nada seleccionado");return}if(t==="erase"){const se={x:J,y:N},pe=8,Me=8;let K={id:null,dist:1/0};for(const Ee of c){const Ue=s.find(Ke=>Ke.id===Ee.n1),$e=s.find(Ke=>Ke.id===Ee.n2);if(!Ue||!$e)continue;const yt=zg(se,Ue,$e);yt<K.dist&&(K={id:Ee.id,dist:yt})}if(K.id&&K.dist<=pe){d(Ee=>{const Ue=Ee.filter($e=>$e.id!==K.id);return l($e=>{const yt=new Set;return Ue.forEach(Ke=>{yt.add(Ke.n1),yt.add(Ke.n2)}),$e.filter(Ke=>yt.has(Ke.id))}),Ue}),z("Elemento borrado.");return}let ie=null,_e=1/0;for(const Ee of s){const Ue=Math.hypot(se.x-Ee.x,se.y-Ee.y);Ue<_e&&(_e=Ue,ie=Ee)}if(ie&&_e<=Me){const Ee=ie.id;d(Ue=>{const $e=Ue.filter(yt=>yt.n1!==Ee&&yt.n2!==Ee);return l(yt=>{const Ke=new Set;return $e.forEach(ct=>{Ke.add(ct.n1),Ke.add(ct.n2)}),yt.filter(ct=>Ke.has(ct.id))}),$e}),z("Nodo y conexiones borrados.");return}z("No se encontró nada para borrar en esa posición.");return}let X=Pd(s,J,N,8);X||(X={id:`n${zd++}`,x:J,y:N},l(se=>[...se,X])),m(X.id),P(!0),O({x:X.x,y:X.y,nodeId:X.id}),$({x:X.x,y:X.y}),z("Arrastra para definir el tramo y suelta para fijarlo.")},Y=G=>{if(!D.current)return;const{x:U,y:V}=Id(D.current,G),{x:J,y:N}=Po(U,V),X=Pd(s,J,N,8);if(x(X?X.id:null),L)$({x:J,y:N});else if(A.current&&A.current.mode==="move"){const{start:se,startPos:pe,n1:Me,n2:K}=A.current,ie=J-se.x,_e=N-se.y,Ee={x:pe[Me].x+ie,y:pe[Me].y+_e},Ue={x:pe[K].x+ie,y:pe[K].y+_e},$e=Po(Ee.x,Ee.y),yt=Po(Ue.x,Ue.y);l(Ke=>Ke.map(ct=>ct.id===Me?{...ct,x:$e.x,y:$e.y}:ct.id===K?{...ct,x:yt.x,y:yt.y}:ct))}},Q=G=>{if(A.current&&A.current.mode==="move"){A.current=null;return}if(!L||!D.current||!B)return;const{x:U,y:V}=Id(D.current,G),{x:J,y:N}=Po(U,V);let X=Pd(s,J,N,8);if(X||(X={id:`n${zd++}`,x:J,y:N},l(se=>[...se,X])),X.id!==B.nodeId){const se=B.nodeId,pe=X.id;if(t==="wire"||t==="resistor"||t==="source"){const Me={id:`e${zd++}`,type:t,n1:se,n2:pe,value:t==="resistor"?10:t==="source"?Number(b)||10:0};d(K=>[...K,Me])}z("Tramo añadido. Puedes seguir desde el último nodo.")}else z("Tramo cancelado.");m(X.id),P(!1),O(null),$(null)},re=()=>{const G=t2(s,c,Number(b)||0);S(G),G.ok?z(`R_eq = ${G.Req.toFixed(2)} Ω · I_total = ${G.Itotal.toFixed(3)} A (${G.tipo})`):z(G.message)},ae=(G,U)=>{d(V=>V.map(J=>J.id===G?{...J,value:U}:J))},I=()=>{l([]),d([]),m(null),x(null),S(null),P(!1),O(null),$(null),z("Canvas limpio. Comienza un nuevo circuito.")};return E.jsxs("div",{className:"rounded-2xl border border-emerald-600/60 bg-slate-950/95 p-4 space-y-4",children:[E.jsxs("div",{className:"flex items-center justify-between gap-2",children:[E.jsxs("div",{children:[E.jsx("h3",{className:"text-base md:text-lg font-semibold text-emerald-300",children:"Editor de circuitos de corriente continua"}),E.jsx("p",{className:"text-[11px] md:text-xs text-gray-300 max-w-3xl",children:"Selecciona una herramienta, haz clic y arrastra para dibujar tramos rectos. Los puntos amarillos son nodos de unión."})]}),o&&E.jsx("button",{onClick:o,className:"text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"← Volver"})]}),E.jsxs("div",{className:"flex flex-wrap items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] md:text-xs",children:[E.jsx("span",{className:"text-gray-300 mr-1",children:"Herramientas:"}),[{id:"select",label:"Seleccionar"},{id:"wire",label:"Cable"},{id:"resistor",label:"Resistencia"},{id:"source",label:"Fuente DC"},{id:"erase",label:"Borrar"}].map(G=>E.jsx("button",{onClick:()=>{i(G.id),P(!1),O(null),$(null),m(null)},className:`px-3 py-1 rounded-full border text-xs font-medium ${t===G.id?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-800/80 text-slate-200 border-slate-600 hover:bg-slate-700"}`,children:G.label},G.id)),E.jsxs("div",{className:"ml-3 flex items-center gap-1",children:[E.jsx("span",{className:"text-gray-300",children:"Voltaje fuente (V):"}),E.jsx("input",{type:"number",value:b,onChange:G=>M(G.target.value),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"})]}),E.jsx("button",{onClick:I,className:"ml-auto px-3 py-1 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"Limpiar"})]}),E.jsxs("div",{className:"grid md:grid-cols-[2fr,1fr] gap-4 items-start",children:[E.jsx("div",{className:"rounded-xl border border-slate-700 bg-black/95 overflow-hidden",children:E.jsxs("svg",{ref:D,viewBox:`0 0 ${Lg} ${Og}`,className:"w-full h-[420px] cursor-crosshair",onMouseDown:j,onMouseMove:Y,onMouseUp:Q,children:[E.jsx("defs",{children:E.jsx("pattern",{id:"smallGrid",width:Ka,height:Ka,patternUnits:"userSpaceOnUse",children:E.jsx("path",{d:`M ${Ka} 0 L 0 0 0 ${Ka}`,fill:"none",stroke:"#1f2933",strokeWidth:"0.5"})})}),E.jsx("rect",{x:"0",y:"0",width:Lg,height:Og,fill:"url(#smallGrid)"}),c.map(G=>{const U=s.find(X=>X.id===G.n1),V=s.find(X=>X.id===G.n2);if(!U||!V)return null;const J=(U.x+V.x)/2,N=(U.y+V.y)/2;if(G.type==="wire"){const X=g===G.id;return E.jsx("line",{x1:U.x,y1:U.y,x2:V.x,y2:V.y,stroke:X?"#a5b4fc":"#22c1dc",strokeWidth:X?4:3,strokeLinecap:"round"},G.id)}if(G.type==="resistor"){const X=g===G.id,se=Math.abs(U.y-V.y)<Math.abs(U.x-V.x),pe=[],Me=6;for(let K=0;K<=Me;K++){const ie=K/Me,_e=U.x+(V.x-U.x)*ie,Ee=U.y+(V.y-U.y)*ie,Ue=(K%2===0?-1:1)*6;K!==0&&K!==Me?pe.push(se?`${_e},${Ee+Ue}`:`${_e+Ue},${Ee}`):pe.push(`${_e},${Ee}`)}return E.jsxs("g",{children:[E.jsx("polyline",{points:pe.join(" "),fill:"none",stroke:X?"#fbbf24":"#f97316",strokeWidth:X?4:3,strokeLinecap:"round"}),E.jsxs("text",{x:J,y:N-10,fontSize:"11",fill:"#facc15",textAnchor:"middle",pointerEvents:"none",style:{userSelect:"none"},children:[G.value," Ω"]})]},G.id)}if(G.type==="source"){const X=g===G.id,se=Math.abs(U.y-V.y)<Math.abs(U.x-V.x),pe=14,Me=26,K=14,ie=Number(b)||G.value||0,_e=X?"#a5b4fc":"#22c1dc",Ee=X?4:3;return se?E.jsxs("g",{children:[E.jsx("line",{x1:U.x,y1:U.y,x2:J-pe,y2:N,stroke:_e,strokeWidth:Ee,strokeLinecap:"round"}),E.jsx("line",{x1:J+pe,y1:N,x2:V.x,y2:V.y,stroke:_e,strokeWidth:Ee,strokeLinecap:"round"}),E.jsx("line",{x1:J-pe/2,y1:N-Me/2,x2:J-pe/2,y2:N+Me/2,stroke:"#e5e7eb",strokeWidth:Ee}),E.jsx("line",{x1:J+pe/2,y1:N-K/2,x2:J+pe/2,y2:N+K/2,stroke:"#9ca3af",strokeWidth:Ee-.5}),E.jsxs("text",{x:J,y:N-Me/2-8,fontSize:"11",fill:"#4ade80",textAnchor:"middle",pointerEvents:"none",style:{userSelect:"none"},children:[ie," V"]})]},G.id):E.jsxs("g",{children:[E.jsx("line",{x1:U.x,y1:U.y,x2:U.x,y2:N-pe,stroke:_e,strokeWidth:Ee,strokeLinecap:"round"}),E.jsx("line",{x1:V.x,y1:N+pe,x2:V.x,y2:V.y,stroke:_e,strokeWidth:Ee,strokeLinecap:"round"}),E.jsx("line",{x1:J-Me/2,y1:N-pe/2,x2:J+Me/2,y2:N-pe/2,stroke:"#e5e7eb",strokeWidth:Ee}),E.jsx("line",{x1:J-K/2,y1:N+pe/2,x2:J+K/2,y2:N+pe/2,stroke:"#9ca3af",strokeWidth:Ee-.5}),E.jsxs("text",{x:J+Me/2+6,y:N+4,fontSize:"11",fill:"#4ade80",pointerEvents:"none",style:{userSelect:"none"},children:[ie," V"]})]},G.id)}return null}),L&&B&&H&&t!=="erase"&&E.jsx("line",{x1:B.x,y1:B.y,x2:H.x,y2:H.y,stroke:"#4ade80",strokeWidth:"3",strokeDasharray:"6 4",strokeLinecap:"round",opacity:"0.8"}),s.map(G=>E.jsx("circle",{cx:G.x,cy:G.y,r:G.id===p||G.id===h?Ug+1:Ug,fill:G.id===h?"#f97316":"#facc15",stroke:"#111827",strokeWidth:"1",opacity:G.id===p||G.id===h?1:.7},G.id))]})}),E.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/90 p-3 space-y-3 text-[11px] md:text-xs text-gray-200",children:[E.jsx("h4",{className:"font-semibold text-gray-100",children:"Parámetros y resultados"}),E.jsxs("div",{className:"space-y-1",children:[E.jsx("p",{className:"text-gray-300",children:"1. Dibuja el circuito como en Paint: clic y arrastra."}),E.jsx("p",{className:"text-gray-300",children:"2. Ajusta los valores de las resistencias."}),E.jsxs("p",{className:"text-gray-300",children:["3. Haz clic en"," ",E.jsx("span",{className:"font-semibold",children:"“Calcular R_eq e intensidades”"}),"."]})]}),E.jsxs("div",{className:"space-y-2",children:[E.jsx("h5",{className:"font-semibold text-gray-100",children:"Resistencias del circuito"}),c.filter(G=>G.type==="resistor").length===0&&E.jsx("p",{className:"text-gray-400",children:"No hay resistencias aún. Selecciona “Resistencia” y dibuja entre dos puntos."}),E.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto pr-1",children:c.filter(G=>G.type==="resistor").map((G,U)=>E.jsxs("div",{className:"flex items-center gap-2 border border-slate-700 rounded-lg px-2 py-1",children:[E.jsxs("span",{className:"text-gray-300",children:["R",U+1,":"]}),E.jsx("input",{type:"number",value:G.value,onChange:V=>ae(G.id,Number(V.target.value)||0),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"}),E.jsx("span",{className:"text-gray-400",children:"Ω"}),E.jsx("button",{onClick:()=>d(V=>V.filter(J=>J.id!==G.id)),className:"ml-auto px-2 py-0.5 rounded-full border border-red-500/60 text-red-300 hover:bg-red-500/10 text-[10px]",children:"✕"})]},G.id))})]}),E.jsx("button",{onClick:re,className:"w-full mt-1 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs",children:"Calcular R_eq e intensidades"}),E.jsxs("div",{className:"mt-2 space-y-1",children:[E.jsx("h5",{className:"font-semibold text-gray-100",children:"Resultados"}),R?R.ok?E.jsxs(E.Fragment,{children:[E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"R_eq:"})," ",R.Req.toFixed(2)," Ω"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"I_total:"})," ",R.Itotal.toFixed(3)," A"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Tipo de conexión (aprox.):"})," ",R.tipo]}),R.branchCurrents.length>1&&E.jsxs("div",{className:"mt-1",children:[E.jsx("p",{className:"font-semibold text-gray-100",children:"Corrientes por resistencia"}),E.jsx("ul",{className:"list-disc list-inside space-y-0.5",children:R.branchCurrents.map((G,U)=>E.jsxs("li",{children:["R",U+1,": ",G.I.toFixed(3)," A"]},G.id))})]})]}):E.jsx("p",{className:"text-red-400",children:R.message}):E.jsx("p",{className:"text-gray-400",children:"Aún no se ha realizado el cálculo."})]}),E.jsxs("div",{className:"mt-2 text-[11px] text-gray-400 border-t border-slate-700 pt-2",children:[E.jsx("span",{className:"font-semibold text-sky-300",children:"Estado:"})," ",_]})]})]})]})}const wh=899e7;function qa(o){if(!o)return NaN;let t=o.trim().toLowerCase();t=t.replace(",","."),t=t.replace(/×/g,"x");const i=t.match(/^([+-]?\d+(\.\d+)?)(\s*[x*]\s*10\s*\^?\s*([+-]?\d+))$/);if(i){const l=parseFloat(i[1]),c=parseInt(i[4],10);return isNaN(l)||isNaN(c)?NaN:l*Math.pow(10,c)}const s=Number(t);return isNaN(s)?NaN:s}function S_(o){if(!isFinite(o)||o===0)return"0";if(Math.abs(o)>=1)return o.toLocaleString("en-US",{maximumFractionDigits:6});const i=o.toExponential(12),[s,l]=i.split("e"),c=parseInt(l,10),d=o<0?"-":"",h=s.replace(".","").replace(/^-/,"");let x=1+c;if(x<=0){const b="0".repeat(-x);return`${d}0.${b}${h}`.replace(/\.?0+$/,M=>M)}if(x>=h.length){const b="0".repeat(x-h.length);return d+h+b}const g=h.slice(0,x),y=h.slice(x);return`${d}${g}.${y}`}function i2(){const[o,t]=Ye.useState(""),[i,s]=Ye.useState(""),[l,c]=Ye.useState(""),[d,h]=Ye.useState(null),[m,p]=Ye.useState(""),[x,g]=Ye.useState(!1),y=qa(o),b=qa(i),M=qa(l),R=![y,b,M].some(Q=>isNaN(Q))&&M>0,S=R?Math.sign(y*b):0,_=R?wh*Math.abs(y*b)/(M*M):0,z=R&&_>0?Math.min(1,Math.log10(1+_)/6):.3,L=Ye.useRef(null),P=Ye.useRef(null),B=Ye.useRef(null),O=(Q,re,ae)=>{const I=/10\s*\^/i.test(Q||""),G=Q||"",U=I?G:G.trim()?G+" × 10^":"1 × 10^";re(U),requestAnimationFrame(()=>{if(ae&&ae.current)try{const V=U.length;ae.current.focus(),ae.current.setSelectionRange(V,V)}catch{ae.current.focus()}})},H=()=>{p("");const Q=qa(o),re=qa(i),ae=qa(l);if([Q,re,ae].some(J=>isNaN(J))){p("Ingresa valores válidos. Ejemplos: 4e-6, 4 x 10^-6, 0.000004"),h(null);return}if(ae<=0){p("La distancia r debe ser mayor que 0."),h(null);return}const I=Q,G=re,U=wh*Math.abs(I*G)/(ae*ae),V=I*G>0?"Repulsión (cargas del mismo signo)":"Atracción (cargas de signo opuesto)";h({F:U,tipo:V,q1C:I,q2C:G,r:ae})},$=d&&d.F>0?Math.min(1,Math.log10(1+d.F)/6):.3,D=d?d.F.toExponential(3).split("e"):null,A=D?D[0]:"",j=D?parseInt(D[1],10):0,Y=d?S_(d.F):"";return E.jsxs("div",{className:"rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75",children:[E.jsx("h3",{className:"text-base md:text-lg font-semibold text-slate-900 dark:text-white",children:"2.1 Ley de Coulomb – Fuerza eléctrica"}),E.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-200 leading-relaxed",children:["Calcula la fuerza eléctrica entre dos cargas puntuales:",E.jsx("span",{className:"block mt-1 italic",children:"F = k · |q₁ q₂| / r²"})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-start",children:[E.jsxs("div",{className:"space-y-3 text-sm",children:[E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsxs("label",{className:"flex flex-col",children:[E.jsx("span",{children:"q₁ (C)"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("input",{ref:L,type:"text",value:o,onChange:Q=>t(Q.target.value),placeholder:"Ej: 4e-6",className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"}),E.jsx("button",{type:"button",onClick:()=>O(o,t,L),className:"px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-600 bg-white/90 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-gray-200 whitespace-nowrap",title:"Insertar ×10^",children:"×10^"})]})]}),E.jsxs("label",{className:"flex flex-col",children:[E.jsx("span",{children:"q₂ (C)"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("input",{ref:P,type:"text",value:i,onChange:Q=>s(Q.target.value),placeholder:"Ej: -8e-6",className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"}),E.jsx("button",{type:"button",onClick:()=>O(i,s,P),className:"px-3 py-1.5 rounded-md border border-slate-200 dark:border-slate-600 bg-white/90 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs text-slate-800 dark:text-gray-200 whitespace-nowrap",title:"Insertar ×10^",children:"×10^"})]})]}),E.jsxs("label",{className:"flex flex-col col-span-2",children:[E.jsx("span",{children:"r (m)"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("input",{ref:B,type:"text",value:l,onChange:Q=>c(Q.target.value),placeholder:"Ej: 4e-3",className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"}),E.jsx("button",{type:"button",onClick:()=>O(l,c,B),className:"px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap",title:"Insertar ×10^",children:"×10^"})]})]})]}),E.jsx("button",{onClick:H,className:"mt-3 w-full md:w-auto px-5 py-2 rounded-lg bg-primary hover:bg-primary-dark text-sm font-semibold shadow-sm",children:"Calcular F"}),m&&E.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&E.jsxs("div",{className:"mt-4 text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 shadow-inner space-y-3",children:[E.jsxs("p",{className:"flex items-center gap-1",children:[E.jsx("span",{className:"font-semibold",children:"F ≈"}),x?E.jsxs(E.Fragment,{children:[Y," N"]}):E.jsxs(E.Fragment,{children:[A," × 10",E.jsx("sup",{children:j})," N"]})]}),E.jsxs("button",{onClick:()=>g(!x),className:"px-3 py-1 rounded-md bg-sky-600 hover:bg-sky-500 text-white text-sm",children:["Cambiar a ",x?"notación científica":"entero"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Tipo:"})," ",d.tipo]}),E.jsxs("p",{className:"text-[11px] text-gray-400",children:["q₁ = ",d.q1C.toExponential(3)," C · q₂ ="," ",d.q2C.toExponential(3)," C · r = ",d.r," m"]})]})]}),E.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[E.jsxs("p",{children:["• Si q₁ y q₂ tienen el mismo signo ⇒ la fuerza es de"," ",E.jsx("span",{className:"text-amber-300 font-semibold",children:"repulsión"}),"."]}),E.jsxs("p",{children:["• Si tienen signos opuestos ⇒ la fuerza es de"," ",E.jsx("span",{className:"text-sky-300 font-semibold",children:"atracción"}),"."]}),E.jsx("p",{children:"• Al duplicar la distancia r, la fuerza se reduce a la cuarta parte (depende de 1 / r²)."})]})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-6 items-stretch",children:[E.jsxs("div",{className:"rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner",children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&E.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.q1C*d.q2C>0?"Repulsión":"Atracción"})]}),E.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[E.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:(()=>{const Q=.4+(z||0)*.6,re=80+(z||0)*60,ae=S<0?"#4ade80":"#fbbf24",I={height:2,opacity:Q,background:`linear-gradient(90deg, ${ae}, ${ae})`};return S===0?null:E.jsxs(E.Fragment,{children:[E.jsx("div",{style:{position:"absolute",width:re,left:`calc(50% - ${re/2+8}px)`,top:"50%",transform:"translateY(-50%)",...I}}),E.jsx("div",{style:{position:"absolute",left:`calc(50% - ${re/2+12}px)`,top:"50%",transform:S>0?"translateY(-50%) rotate(180deg)":"translateY(-50%)",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:`10px solid ${ae}`,opacity:Q}}),E.jsx("div",{style:{position:"absolute",width:re,right:`calc(50% - ${re/2+8}px)`,top:"50%",transform:"translateY(-50%)",...I}}),E.jsx("div",{style:{position:"absolute",right:`calc(50% - ${re/2+12}px)`,top:"50%",transform:S>0?"translateY(-50%)":"translateY(-50%) rotate(180deg)",borderTop:"6px solid transparent",borderBottom:"6px solid transparent",borderLeft:`10px solid ${ae}`,opacity:Q}})]})})()}),E.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[E.jsx("div",{className:`h-10 w-10 rounded-full ${y<0?"bg-blue-500":"bg-red-500"} flex items-center justify-center text-xs font-bold`,children:isNaN(y)?"?":y<0?"−":"+"}),E.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₁ = ",o||"—"," C"]})]}),E.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[E.jsx("div",{className:`h-10 w-10 rounded-full ${b<0?"bg-blue-500":"bg-red-500"} flex items-center justify-center text-xs font-bold`,children:isNaN(b)?"?":b<0?"−":"+"}),E.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₂ = ",i||"—"," C"]})]}),E.jsx("div",{className:"h-0.5 w-32 bg-gradient-to-r from-red-400 via-amber-300 to-blue-400"}),E.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Representación 2D del vector de fuerza."})]})]}),E.jsxs("div",{className:"rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner",children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),d&&E.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",$.toFixed(2)]})]}),E.jsx("div",{className:"flex-1",children:E.jsx(JE,{minHeight:260,intensity:z,mode:S<0?"attract":S>0?"repel":"none",q1Sign:isNaN(y)||y>=0?1:-1,q2Sign:isNaN(b)||b>=0?1:-1})})]})]})]})}function a2(){const[o,t]=Ye.useState(""),[i,s]=Ye.useState(""),[l,c]=Ye.useState(null),[d,h]=Ye.useState(""),[m,p]=Ye.useState(!1),x=Fd.useRef(null),g=Fd.useRef(null),y=(L,P,B)=>{const O=/10\s*\^/i.test(L||""),H=L||"",$=O?H:H.trim()?H+" × 10^":"1 × 10^";P($),requestAnimationFrame(()=>{if(B&&B.current)try{const D=$.length;B.current.focus(),B.current.setSelectionRange(D,D)}catch{B.current.focus()}})},b=()=>{h("");const L=qa(o),P=qa(i);if([L,P].some($=>isNaN($))){h("Ingresa valores válidos. Ejemplos: 5e-9, 0.000000005, 5 x 10^-9"),c(null);return}if(P<=0){h("La distancia r debe ser mayor que 0."),c(null);return}const B=L,O=wh*Math.abs(B)/(P*P),H=B>0?"Sale radialmente hacia afuera (carga positiva)":B<0?"Entra radialmente hacia la carga (carga negativa)":"No hay campo eléctrico (q = 0)";c({E:O,qC:B,r:P,direccion:H})},M=l&&l.E>0?Math.min(1,Math.log10(1+l.E)/10):.3,R=l?l.E.toExponential(3).split("e"):null,S=R?R[0]:"",_=R?parseInt(R[1],10):0,z=l?Math.abs(l.E)<1?S_(l.E):l.E.toLocaleString("en-US",{maximumFractionDigits:6}):"";return E.jsxs("div",{className:"rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75",children:[E.jsx("h3",{className:"text-base md:text-lg font-semibold text-slate-900 dark:text-white",children:"2.2 Campo eléctrico de una carga puntual"}),E.jsxs("p",{className:"text-xs md:text-sm text-slate-700 dark:text-slate-200",children:["El campo eléctrico generado por una carga puntual se define como:",E.jsx("span",{className:"block mt-1 italic",children:"E = k · |q| / r²"}),"donde ",E.jsx("span",{className:"font-semibold",children:"E"})," se mide en N/C,",E.jsx("span",{className:"font-semibold",children:" q"})," es la carga (en C) y",E.jsx("span",{className:"font-semibold",children:" r"})," la distancia al punto de estudio."]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[E.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsxs("label",{className:"flex flex-col col-span-2",children:[E.jsx("span",{children:"q (C)"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("input",{ref:x,type:"text",value:o,onChange:L=>t(L.target.value),placeholder:"Ej: 5e-9 o 5 x 10^-9",className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"}),E.jsx("button",{type:"button",onClick:()=>y(o,t,x),className:"px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap",children:"×10^"})]})]}),E.jsxs("label",{className:"flex flex-col col-span-2",children:[E.jsx("span",{children:"r (m)"}),E.jsxs("div",{className:"flex items-center gap-1",children:[E.jsx("input",{ref:g,type:"text",value:i,onChange:L=>s(L.target.value),placeholder:"Ej: 0.3 o 30e-2",className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"}),E.jsx("button",{type:"button",onClick:()=>y(i,s,g),className:"px-2 py-1 rounded-md border border-slate-600 bg-slate-800 hover:bg-slate-700 text-[10px] text-gray-200 whitespace-nowrap",children:"×10^"})]})]})]}),E.jsx("button",{onClick:b,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular E"}),d&&E.jsx("p",{className:"text-xs text-red-400 mt-1",children:d}),l&&E.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 space-y-2",children:[E.jsxs("p",{className:"flex items-center gap-1",children:[E.jsx("span",{className:"font-semibold",children:"Campo eléctrico:"}),m?E.jsxs(E.Fragment,{children:[z," N/C"]}):E.jsxs(E.Fragment,{children:[S," × 10",E.jsx("sup",{children:_})," N/C"]})]}),E.jsxs("button",{onClick:()=>p(!m),className:"px-3 py-1 rounded-full bg-sky-600 hover:bg-sky-500 text-white text-[10px]",children:["Cambiar a ",m?"notación científica":"entero"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Dirección:"})," ",l.direccion]}),E.jsxs("p",{className:"text-[11px] text-gray-400",children:["q = ",l.qC.toExponential(3)," C · r = ",l.r," m"]})]})]}),E.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[E.jsx("p",{children:"• El campo eléctrico es una magnitud vectorial: tiene módulo, dirección y sentido."}),E.jsx("p",{children:"• Cerca de la carga, el campo es más intenso; al aumentar la distancia r, el valor de E disminuye con 1 / r²."}),E.jsx("p",{children:"• Convencionalmente se define respecto a una carga de prueba positiva."})]})]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-stretch",children:[E.jsxs("div",{className:"rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner",children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),l&&E.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:l.qC>=0?"Carga positiva":"Carga negativa"})]}),E.jsxs("div",{className:"flex-1 relative flex items-center justify-center min-h-[12rem]",children:[E.jsxs("div",{className:"flex flex-col items-center gap-1",children:[E.jsx("div",{className:`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${l&&l.qC<0?"bg-blue-500":"bg-red-500"}`,children:l&&l.qC<0?"−":"+"}),E.jsxs("div",{className:"text-[10px] text-gray-300",children:["q = ",o||"—"," C"]})]}),E.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:E.jsx("div",{className:"relative h-24 w-24",children:[...Array(8)].map((L,P)=>{const B=P/8*Math.PI*2,O=l&&l.qC<0?-1:1;return E.jsx("div",{className:"absolute h-[2px] w-8 bg-gradient-to-r from-amber-300 to-amber-500 origin-left",style:{left:"36px",top:"36px",transform:`rotate(${B*180/Math.PI+(O>0?0:180)}deg)`,opacity:.8}},P)})})}),E.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Líneas de campo eléctrico de una carga puntual."})]})]}),E.jsxs("div",{className:"rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col shadow-inner",children:[E.jsxs("div",{className:"flex items-center justify-between mb-2",children:[E.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),l&&E.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",M.toFixed(2)]})]}),E.jsx("div",{className:"flex-1",children:E.jsx($E,{minHeight:260,intensity:M,isNegative:l&&l.qC<0})})]})]})]})}function s2(){const[o,t]=Ye.useState(!1),[i,s]=Ye.useState("5"),[l,c]=Ye.useState("10"),[d,h]=Ye.useState(null),[m,p]=Ye.useState(""),x=()=>{p("");const M=parseFloat(i),R=parseFloat(l);if([M,R].some(L=>isNaN(L))){p("Ingresa valores numéricos válidos."),h(null);return}if(R<=0){p("La resistencia R debe ser mayor que 0."),h(null);return}const S=M/R,_=M*S;let z;S<.2?z="Corriente baja":S<1?z="Corriente moderada":z="Corriente alta",h({V:M,R,I:S,P:_,nivel:z})};if(o)return E.jsx(n2,{onBack:()=>t(!1)});const y=25+(d&&d.I>=0?Math.min(1,Math.log10(1+Math.abs(d.I))/2):.2)*65,b=d&&d.I>=1?"bg-red-500":d&&d.I>=.2?"bg-amber-400":"bg-sky-400";return E.jsxs("div",{className:"rounded-3xl p-6 space-y-5 shadow-lg border border-slate-200 dark:border-slate-600 bg-slate-50/75 dark:bg-slate-800/75",children:[E.jsx("h3",{className:"text-base md:text-lg font-semibold text-slate-900 dark:text-white",children:"2.3 Corriente y Ley de Ohm"}),E.jsxs("p",{className:"text-xs md:text-sm text-slate-700 dark:text-slate-200",children:["La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:",E.jsx("span",{className:"block mt-1 italic",children:"V = I · R   ⇔   I = V / R"}),"donde ",E.jsx("span",{className:"font-semibold",children:"V"})," está en voltios (V),",E.jsx("span",{className:"font-semibold",children:" I"})," en amperios (A) y",E.jsx("span",{className:"font-semibold",children:" R"})," en ohmios (Ω)."]}),E.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[E.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[E.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[E.jsxs("label",{className:"flex flex-col col-span-2",children:[E.jsx("span",{children:"Voltaje V (voltios)"}),E.jsx("input",{type:"number",value:i,onChange:M=>s(M.target.value),className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"})]}),E.jsxs("label",{className:"flex flex-col col-span-2",children:[E.jsx("span",{children:"Resistencia R (Ω)"}),E.jsx("input",{type:"number",value:l,onChange:M=>c(M.target.value),className:"px-3 py-2 rounded-lg bg-slate-50/70 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-sm w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"})]})]}),E.jsx("button",{onClick:x,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular"}),m&&E.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&E.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-50/75 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 rounded-2xl p-4 space-y-2",children:[E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Corriente I:"})," ",d.I.toFixed(3)," A"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Potencia P:"})," ",d.P.toFixed(2)," W"]}),E.jsxs("p",{children:[E.jsx("span",{className:"font-semibold",children:"Nivel:"})," ",d.nivel]}),E.jsxs("p",{className:"text-[11px] text-gray-400",children:["V = ",d.V," V · R = ",d.R," Ω"]})]})]}),E.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[E.jsx("p",{children:"• Si aumentas el voltaje V manteniendo R constante, la corriente I aumenta proporcionalmente."}),E.jsx("p",{children:"• Si aumentas la resistencia R manteniendo V constante, la corriente disminuye."}),E.jsx("p",{children:"• La potencia disipada en la resistencia es P = V · I = I² · R."})]})]}),E.jsxs("div",{className:"rounded-2xl bg-slate-50/70 dark:bg-slate-800/60 border border-slate-600 dark:border-slate-600 p-4 flex flex-col gap-3 shadow-inner",children:[E.jsxs("div",{className:"flex items-center justify-between",children:[E.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&E.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.nivel})]}),E.jsxs("div",{className:"flex flex-col gap-3 text-[11px] md:text-xs",children:[E.jsxs("div",{className:"relative w-full h-24 flex items-center justify-center",children:[E.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[E.jsxs("div",{className:"h-10 w-6 rounded-md bg-slate-800 border border-slate-500 flex flex-col justify-center",children:[E.jsx("div",{className:"h-1.5 w-4 bg-slate-200 mx-auto mb-1"}),E.jsx("div",{className:"h-0.5 w-3 bg-slate-500 mx-auto"})]}),E.jsxs("span",{className:"text-[10px] text-gray-300",children:["Fuente (",i," V)"]})]}),E.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[E.jsx("div",{className:"h-4 w-10 bg-slate-300 rounded-sm"}),E.jsxs("span",{className:"text-[10px] text-gray-300",children:["R = ",l," Ω"]})]}),E.jsx("div",{className:"absolute top-6 left-10 right-10 h-0.5 bg-slate-600"}),E.jsx("div",{className:"absolute bottom-6 left-10 right-10 h-0.5 bg-slate-600"}),E.jsx("div",{className:"absolute inset-x-16 top-[22px] h-2 rounded-full bg-slate-800 overflow-hidden",children:E.jsx("div",{className:`h-full ${b} transition-all duration-500`,style:{width:`${y}%`}})}),E.jsx("div",{className:"absolute top-[19px] right-[52px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-100"})]}),E.jsx("p",{className:"text-gray-300",children:"La anchura y el color de la barra representan la intensidad de la corriente: valores pequeños en azul, moderados en amarillo y altos en rojo."})]})]}),E.jsxs("div",{className:"pt-4 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4",children:[E.jsx("p",{className:"text-sm md:text-sm text-gray-400 max-w-lg leading-relaxed",children:"¿Quieres diseñar tu propio circuito con cables, resistencias y una fuente y que el sistema detecte si es serie o paralelo?"}),E.jsx("button",{onClick:()=>t(!0),className:"text-sm px-4 py-2 rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm",children:"Abrir editor de circuitos de corriente continua"})]})]})}function r2({is3D:o}){const[t,i]=Ye.useState(()=>{try{return localStorage.getItem("electricidad:tab")||"coulomb"}catch{return"coulomb"}});Ye.useEffect(()=>{try{localStorage.setItem("electricidad:tab",t)}catch{}},[t]);const s=[{id:"coulomb",label:"2.1 Ley de Coulomb"},{id:"campo",label:"2.2 Campo eléctrico"},{id:"ohm",label:"2.3 Corriente y Ley de Ohm"}],l=s.find(c=>c.id===t)?.label??"Subtema";return E.jsxs("section",{id:"electricidad",className:"max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5",children:[E.jsxs("header",{className:"space-y-2",children:[E.jsx("h2",{className:"text-2xl md:text-3xl font-extrabold text-yellow-400",children:"⚡ Electricidad"}),E.jsx("p",{className:"text-sm text-gray-300 leading-relaxed",children:"En este apartado el estudiante resuelve problemas identificando tipos de carga eléctrica, aplicando la Ley de Ohm y resolviendo circuitos de corriente continua."}),E.jsxs("p",{className:"text-sm text-gray-400",children:["Subtema actual: ",E.jsx("span",{className:"font-semibold text-sky-400",children:l})]})]}),E.jsx("div",{className:"rounded-3xl bg-slate-900/60 border border-slate-700 p-4 md:p-5",children:E.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:s.map(c=>E.jsx("button",{onClick:()=>i(c.id),className:`text-sm px-4 py-2 rounded-lg font-semibold transition-colors duration-150
                ${t===c.id?"bg-primary text-white shadow-md":"bg-slate-800/70 text-slate-200 hover:bg-slate-700"}`,children:c.label},c.id))})}),t==="coulomb"&&E.jsx(i2,{is3D:o}),t==="campo"&&E.jsx(a2,{is3D:o}),t==="ohm"&&E.jsx(s2,{})]})}const Pg=["models/text-bison-001","models/chat-bison-001","models/gemini-1.5-flash","models/gemini-1.5-pro","models/gemini-pro"];function o2(o){return o.map(t=>({role:t.role==="user"?"user":"assistant",parts:[{text:t.text}]}))}const l2=async o=>{try{const t=await o.json();return t?.error?.message||JSON.stringify(t)}catch{try{return await o.text()}catch{return""}}};function Ig(o,t={},i=2e4){const s=new AbortController,l=setTimeout(()=>s.abort(),i);return fetch(o,{...t,signal:s.signal}).finally(()=>clearTimeout(l))}async function c2(o){if(!o||o.length===0)return[];const t=new FormData;o.forEach(i=>t.append("files",i));try{const i=await fetch("/api/upload",{method:"POST",body:t});if(!i.ok)throw new Error("Upload failed");const s=await i.json();return Array.isArray(s.files)?s.files:[]}catch(i){return console.error("uploadFilesToServer:",i),[]}}function u2({title:o="Asistente IA",systemPrompt:t="Eres un asistente experto en física interactiva. Responde de forma clara, concisa y útil, con pasos cuando sea necesario."}){const[i,s]=Ye.useState(!1),[l,c]=Ye.useState(""),[d,h]=Ye.useState(!1),[m,p]=Ye.useState(""),[x,g]=Ye.useState(""),[y,b]=Ye.useState([{role:"model",text:"Hola, soy Gemini. ¿En qué puedo ayudarte?"}]),M="AIzaSyC1tMy5rYB3xnG3cKBiskX0Hf6m6-N52jQ",R=Ye.useRef(null),[S,_]=Ye.useState(Pg),[z,L]=Ye.useState([]),P=Ye.useMemo(()=>(!!l.trim()||z.length>0)&&!d&&!0,[l,d,M,z]);Ye.useEffect(()=>{async function A(){try{const j=`https://generativelanguage.googleapis.com/v1/models?key=${M}`,Y=await Ig(j,{method:"GET"},1e4);if(!Y.ok)return;const Q=await Y.json();if(Array.isArray(Q?.models)&&Q.models.length>0){const re=Q.models.map(I=>I?.name?I.name.replace(/^\/?models\//,"models/"):null).filter(Boolean),ae=[...new Set([...re.filter(I=>/gemini|bison/i.test(I)),...Pg])];_(ae)}}catch{}}A()},[M]);async function B(A,j){const Y=A.startsWith("models/")?A:`models/${A}`,Q=["generateContent","generateText","generateMessage"];let re=null;for(const ae of Q){const I=`https://generativelanguage.googleapis.com/v1/${Y}:${ae}?key=${M}`,G=JSON.stringify({contents:j,generationConfig:{temperature:.6,topP:.95,topK:40,maxOutputTokens:1024}});try{const U=await Ig(I,{method:"POST",headers:{"Content-Type":"application/json"},body:G});if(!U.ok){const N=await l2(U),X=new Error(`HTTP ${U.status}: ${N}`);throw X.status=U.status,X}const V=await U.json();return V?.candidates?.[0]?.content?.parts?.map(N=>N.text).join("")||V?.outputs?.map(N=>N.text).join("")||V?.content?.text||V?.response?.text||"(Sin respuesta del modelo)"}catch(U){re=U;continue}}throw re||new Error("No se pudo contactar al servicio de Gemini/LLM.")}const O=async A=>{const j=Array.from(A).slice(0,5),Y=await Promise.all(j.map(async(Q,re)=>{const ae=URL.createObjectURL(Q);return{id:`${Date.now()}-${re}`,file:Q,url:ae,name:Q.name,type:Q.type,size:Q.size}}));L(Q=>[...Q,...Y])},H=A=>{L(j=>{const Y=j.find(Q=>Q.id===A);return Y?.url&&URL.revokeObjectURL(Y.url),j.filter(Q=>Q.id!==A)})};async function $(A){if(A?.preventDefault?.(),!P)return;const j=l.trim();c(""),p(""),h(!0);try{const Y=z.map(N=>N.file),Q=await c2(Y),re=Q.length>0?Q.map(N=>`${N.name} (${Math.round(N.size/1024)} KB) -> ${N.url}`).join("; "):z.map(N=>`${N.name} (${Math.round(N.size/1024)} KB)`).join("; "),ae=re?`Adjuntos: ${re}. Si hay URLs, puedes descargarlos para analizar.`:"",I=[...y,{role:"user",text:j||"(Adjunto(s))",attachments:z}];b(I);const G=I.slice(-8),U=o2(G.map(N=>({role:N.role,text:typeof N.text=="string"?N.text:N.text||""}))),V=[{role:"user",parts:[{text:t}]},...ae?[{role:"user",parts:[{text:ae}]}]:[],...U];let J=null;for(const N of S)try{const X=await B(N,V);g(N),b(se=>[...se,{role:"model",text:X}]),z.forEach(se=>se.url&&URL.revokeObjectURL(se.url)),L([]),J=null;break}catch(X){J=X;continue}if(J)throw J}catch(Y){console.error(Y),p(`No fue posible obtener respuesta de Gemini. ${Y?.message?`Detalle: ${Y.message}`:""}`),b(Q=>[...Q,{role:"model",text:"Ocurrió un problema consultando a Gemini."}])}finally{h(!1),requestAnimationFrame(()=>{try{R.current?.scrollTo({top:R.current.scrollHeight,behavior:"smooth"})}catch{}})}}const D=()=>{b([{role:"model",text:"Hola, soy Gemini. ¿En qué puedo ayudarte?"}]),c(""),p(""),z.forEach(A=>A.url&&URL.revokeObjectURL(A.url)),L([])};return E.jsx(E.Fragment,{children:i&&M&&E.jsxs("div",{className:"fixed bottom-20 right-4 z-50 w-96 max-h-[80vh] rounded-xl border border-slate-200 dark:border-slate-600 bg-slate-50/80 dark:bg-slate-800/95 text-slate-900 dark:text-slate-100 shadow-2xl flex flex-col",children:[E.jsxs("div",{className:"px-3 py-2 border-b border-slate-200 dark:border-slate-600 flex items-center justify-between bg-slate-100/80 dark:bg-slate-900/80",children:[E.jsx("div",{className:"text-sm font-semibold",children:o}),E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx("div",{className:"text-[10px] text-slate-600 dark:text-slate-400",children:x?`${x}`:"Gemini"}),E.jsx("button",{onClick:D,className:"text-[11px] text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200 px-2 py-1 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition",title:"Borrar chat y empezar uno nuevo",children:"🗑️ Limpiar"})]})]}),!M,E.jsxs("div",{className:"p-2 text-[11px] text-slate-600 dark:text-slate-400 border-b border-slate-200 dark:border-slate-600",children:["Modelos usados: ",S.slice(0,3).join(", ")]}),E.jsxs("div",{ref:R,className:"flex-1 overflow-auto p-3 space-y-3 text-[13px]",children:[y.map((A,j)=>E.jsx("div",{className:`flex ${A.role==="user"?"justify-end":"justify-start"}`,children:E.jsxs("div",{className:`max-w-[85%] rounded-lg px-3 py-2 whitespace-pre-wrap leading-relaxed shadow ${A.role==="user"?"bg-emerald-500/90 text-slate-900 dark:text-white":"bg-slate-100/90 dark:bg-slate-800/90 text-slate-900 dark:text-slate-100 border border-slate-200 dark:border-slate-700"}`,children:[A.text,A.attachments&&A.attachments.length>0&&E.jsx("div",{className:"mt-2 flex flex-wrap gap-2",children:A.attachments.map(Y=>E.jsxs("div",{className:"bg-slate-800/70 border border-slate-700 rounded-md p-1 text-xs flex items-center gap-2",children:[Y.type?.startsWith("image/")?E.jsx("img",{src:Y.url,alt:Y.name,className:"w-12 h-8 object-cover rounded-sm"}):E.jsx("div",{className:"w-12 h-8 flex items-center justify-center bg-slate-700 rounded-sm text-[10px] px-1",children:Y.name.split(".").pop()||"file"}),E.jsxs("div",{className:"flex flex-col",children:[E.jsx("span",{className:"text-[10px] text-slate-300",children:Y.name}),E.jsxs("span",{className:"text-[10px] text-slate-500",children:[Math.round(Y.size/1024)," KB"]})]})]},Y.id))})]})},j)),d&&E.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Gemini está escribiendo..."}),m&&E.jsx("div",{className:"text-[11px] text-red-600 dark:text-red-400 bg-red-50/50 dark:bg-red-900/20 p-2 rounded-md border border-red-200 dark:border-red-800",children:m})]}),z.length>0&&E.jsxs("div",{className:"p-2 border-t border-slate-200 dark:border-slate-700 bg-slate-100/60 dark:bg-slate-900/80",children:[E.jsxs("div",{className:"flex items-center justify-between text-[12px] text-slate-700 dark:text-slate-300 mb-1",children:[E.jsxs("span",{children:["Adjuntos (",z.length,")"]}),E.jsx("button",{onClick:()=>{z.forEach(A=>A.url&&URL.revokeObjectURL(A.url)),L([])},className:"text-[11px] text-amber-600 dark:text-amber-300 hover:text-amber-700 dark:hover:text-amber-200",children:"Eliminar todos"})]}),E.jsx("div",{className:"flex gap-2 overflow-x-auto",children:z.map(A=>E.jsxs("div",{className:"flex-shrink-0 bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700 rounded-md p-1 w-28",children:[E.jsx("div",{className:"flex items-center justify-center h-16",children:A.type?.startsWith("image/")?E.jsx("img",{src:A.url,alt:A.name,className:"h-16 object-contain"}):E.jsx("div",{className:"h-12 w-full flex items-center justify-center text-[12px] text-slate-700 dark:text-slate-300 bg-slate-300 dark:bg-slate-700 rounded",children:A.name.split(".").pop()})}),E.jsx("div",{className:"mt-1 text-[11px] text-slate-700 dark:text-slate-300 truncate",children:A.name}),E.jsxs("div",{className:"flex items-center justify-between mt-1",children:[E.jsxs("div",{className:"text-[10px] text-slate-600 dark:text-slate-500",children:[Math.round(A.size/1024)," KB"]}),E.jsx("button",{onClick:()=>H(A.id),className:"text-[12px] text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 px-1",children:"×"})]})]},A.id))})]}),E.jsxs("form",{onSubmit:$,className:"p-3 border-t border-slate-200 dark:border-slate-700 flex items-end gap-2 bg-slate-100/50 dark:bg-slate-900/50",children:[E.jsxs("label",{className:"flex items-center gap-2 text-[12px] px-2 py-1 rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-700 transition",children:[E.jsx("input",{type:"file",accept:"image/*,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document",multiple:!0,onChange:A=>O(A.target.files),className:"hidden"}),E.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-slate-700 dark:text-slate-300",viewBox:"0 0 20 20",fill:"currentColor",children:E.jsx("path",{d:"M4 3a2 2 0 00-2 2v10a3 3 0 003 3h8a3 3 0 003-3V7a2 2 0 00-2-2H9.5a1 1 0 010-2H15a4 4 0 014 4v8a5 5 0 01-5 5H5a5 5 0 01-5-5V5a4 4 0 014-4h11.5a1 1 0 010 2H4z"})}),E.jsx("span",{className:"text-[12px] text-slate-700 dark:text-slate-300",children:"Adjuntar"})]}),E.jsx("input",{type:"text",value:l,onChange:A=>c(A.target.value),placeholder:"Escribe tu pregunta...",className:"flex-1 text-[13px] px-3 py-2 rounded-md bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-900 dark:text-slate-100 placeholder-slate-600 dark:placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-emerald-400"}),E.jsx("button",{type:"submit",disabled:!P,className:`text-[13px] px-4 py-2 rounded-md font-semibold transition ${P?"bg-emerald-500 text-slate-900 hover:bg-emerald-400":"bg-slate-700 text-slate-400 cursor-not-allowed"}`,children:"Enviar"})]})]})})}function f2(){const[o,t]=Ye.useState("inicio"),[i,s]=Ye.useState(!0);Ye.useEffect(()=>{const c=localStorage.getItem("f2_darkMode");c!==null&&s(c==="true")},[]),Ye.useEffect(()=>{const c=document.documentElement;i?c.classList.add("dark"):c.classList.remove("dark"),localStorage.setItem("f2_darkMode",i?"true":"false")},[i]);const l=()=>{switch(o){case"electricidad":return E.jsx(r2,{});default:return E.jsx(Hy,{onChangeSection:t})}};return E.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300",children:[E.jsx(By,{currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:()=>s(c=>!c)}),E.jsx("main",{className:"pb-10",children:l()}),E.jsxs("footer",{className:"border-t border-slate-200 dark:border-slate-800 py-4 text-center text-[11px] text-gray-500 dark:text-gray-400",children:["Electricidad · ",new Date().getFullYear()]}),E.jsx(u2,{})]})}Iy.createRoot(document.getElementById("root")).render(E.jsx(Fd.StrictMode,{children:E.jsx(f2,{})}));
