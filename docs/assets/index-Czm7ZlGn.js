(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function Ag(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Gf={exports:{}},To={};var _x;function cb(){if(_x)return To;_x=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:d,ref:l!==void 0?l:null,props:c}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var vx;function ub(){return vx||(vx=1,Gf.exports=cb()),Gf.exports}var M=ub(),jf={exports:{}},rt={};var bx;function fb(){if(bx)return rt;bx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),b=Symbol.iterator;function y(O){return O===null||typeof O!="object"?null:(O=b&&O[b]||O["@@iterator"],typeof O=="function"?O:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,S={};function _(O,K,me){this.props=O,this.context=K,this.refs=S,this.updater=me||E}_.prototype.isReactComponent={},_.prototype.setState=function(O,K){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,K,"setState")},_.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function P(){}P.prototype=_.prototype;function N(O,K,me){this.props=O,this.context=K,this.refs=S,this.updater=me||E}var F=N.prototype=new P;F.constructor=N,R(F,_.prototype),F.isPureReactComponent=!0;var H=Array.isArray;function U(){}var B={H:null,A:null,T:null,S:null},ee=Object.prototype.hasOwnProperty;function D(O,K,me){var ye=me.ref;return{$$typeof:o,type:O,key:K,ref:ye!==void 0?ye:null,props:me}}function C(O,K){return D(O.type,K,O.props)}function V(O){return typeof O=="object"&&O!==null&&O.$$typeof===o}function Y(O){var K={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(me){return K[me]})}var ie=/\/+/g;function Z(O,K){return typeof O=="object"&&O!==null&&O.key!=null?Y(""+O.key):K.toString(36)}function $(O){switch(O.status){case"fulfilled":return O.value;case"rejected":throw O.reason;default:switch(typeof O.status=="string"?O.then(U,U):(O.status="pending",O.then(function(K){O.status==="pending"&&(O.status="fulfilled",O.value=K)},function(K){O.status==="pending"&&(O.status="rejected",O.reason=K)})),O.status){case"fulfilled":return O.value;case"rejected":throw O.reason}}throw O}function z(O,K,me,ye,Ae){var ae=typeof O;(ae==="undefined"||ae==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(ae){case"bigint":case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case o:case t:he=!0;break;case g:return he=O._init,z(he(O._payload),K,me,ye,Ae)}}if(he)return Ae=Ae(O),he=ye===""?"."+Z(O,0):ye,H(Ae)?(me="",he!=null&&(me=he.replace(ie,"$&/")+"/"),z(Ae,K,me,"",function(je){return je})):Ae!=null&&(V(Ae)&&(Ae=C(Ae,me+(Ae.key==null||O&&O.key===Ae.key?"":(""+Ae.key).replace(ie,"$&/")+"/")+he)),K.push(Ae)),1;he=0;var De=ye===""?".":ye+":";if(H(O))for(var Be=0;Be<O.length;Be++)ye=O[Be],ae=De+Z(ye,Be),he+=z(ye,K,me,ae,Ae);else if(Be=y(O),typeof Be=="function")for(O=Be.call(O),Be=0;!(ye=O.next()).done;)ye=ye.value,ae=De+Z(ye,Be++),he+=z(ye,K,me,ae,Ae);else if(ae==="object"){if(typeof O.then=="function")return z($(O),K,me,ye,Ae);throw K=String(O),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return he}function q(O,K,me){if(O==null)return O;var ye=[],Ae=0;return z(O,ye,"","",function(ae){return K.call(me,ae,Ae++)}),ye}function L(O){if(O._status===-1){var K=O._result;K=K(),K.then(function(me){(O._status===0||O._status===-1)&&(O._status=1,O._result=me)},function(me){(O._status===0||O._status===-1)&&(O._status=2,O._result=me)}),O._status===-1&&(O._status=0,O._result=K)}if(O._status===1)return O._result.default;throw O._result}var k=typeof reportError=="function"?reportError:function(O){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof O=="object"&&O!==null&&typeof O.message=="string"?String(O.message):String(O),error:O});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",O);return}console.error(O)},ne={map:q,forEach:function(O,K,me){q(O,function(){K.apply(this,arguments)},me)},count:function(O){var K=0;return q(O,function(){K++}),K},toArray:function(O){return q(O,function(K){return K})||[]},only:function(O){if(!V(O))throw Error("React.Children.only expected to receive a single React element child.");return O}};return rt.Activity=x,rt.Children=ne,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=N,rt.StrictMode=s,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(O){return B.H.useMemoCache(O)}},rt.cache=function(O){return function(){return O.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(O,K,me){if(O==null)throw Error("The argument must be a React element, but you passed "+O+".");var ye=R({},O.props),Ae=O.key;if(K!=null)for(ae in K.key!==void 0&&(Ae=""+K.key),K)!ee.call(K,ae)||ae==="key"||ae==="__self"||ae==="__source"||ae==="ref"&&K.ref===void 0||(ye[ae]=K[ae]);var ae=arguments.length-2;if(ae===1)ye.children=me;else if(1<ae){for(var he=Array(ae),De=0;De<ae;De++)he[De]=arguments[De+2];ye.children=he}return D(O.type,Ae,ye)},rt.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null},O.Provider=O,O.Consumer={$$typeof:c,_context:O},O},rt.createElement=function(O,K,me){var ye,Ae={},ae=null;if(K!=null)for(ye in K.key!==void 0&&(ae=""+K.key),K)ee.call(K,ye)&&ye!=="key"&&ye!=="__self"&&ye!=="__source"&&(Ae[ye]=K[ye]);var he=arguments.length-2;if(he===1)Ae.children=me;else if(1<he){for(var De=Array(he),Be=0;Be<he;Be++)De[Be]=arguments[Be+2];Ae.children=De}if(O&&O.defaultProps)for(ye in he=O.defaultProps,he)Ae[ye]===void 0&&(Ae[ye]=he[ye]);return D(O,ae,Ae)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(O){return{$$typeof:h,render:O}},rt.isValidElement=V,rt.lazy=function(O){return{$$typeof:g,_payload:{_status:-1,_result:O},_init:L}},rt.memo=function(O,K){return{$$typeof:p,type:O,compare:K===void 0?null:K}},rt.startTransition=function(O){var K=B.T,me={};B.T=me;try{var ye=O(),Ae=B.S;Ae!==null&&Ae(me,ye),typeof ye=="object"&&ye!==null&&typeof ye.then=="function"&&ye.then(U,k)}catch(ae){k(ae)}finally{K!==null&&me.types!==null&&(K.types=me.types),B.T=K}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(O){return B.H.use(O)},rt.useActionState=function(O,K,me){return B.H.useActionState(O,K,me)},rt.useCallback=function(O,K){return B.H.useCallback(O,K)},rt.useContext=function(O){return B.H.useContext(O)},rt.useDebugValue=function(){},rt.useDeferredValue=function(O,K){return B.H.useDeferredValue(O,K)},rt.useEffect=function(O,K){return B.H.useEffect(O,K)},rt.useEffectEvent=function(O){return B.H.useEffectEvent(O)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(O,K,me){return B.H.useImperativeHandle(O,K,me)},rt.useInsertionEffect=function(O,K){return B.H.useInsertionEffect(O,K)},rt.useLayoutEffect=function(O,K){return B.H.useLayoutEffect(O,K)},rt.useMemo=function(O,K){return B.H.useMemo(O,K)},rt.useOptimistic=function(O,K){return B.H.useOptimistic(O,K)},rt.useReducer=function(O,K,me){return B.H.useReducer(O,K,me)},rt.useRef=function(O){return B.H.useRef(O)},rt.useState=function(O){return B.H.useState(O)},rt.useSyncExternalStore=function(O,K,me){return B.H.useSyncExternalStore(O,K,me)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.0",rt}var yx;function bh(){return yx||(yx=1,jf.exports=fb()),jf.exports}var nt=bh();const db=Ag(nt);var kf={exports:{}},Ao={},Xf={exports:{}},qf={};var Sx;function hb(){return Sx||(Sx=1,(function(o){function t(z,q){var L=z.length;z.push(q);e:for(;0<L;){var k=L-1>>>1,ne=z[k];if(0<l(ne,q))z[k]=q,z[L]=ne,L=k;else break e}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var q=z[0],L=z.pop();if(L!==q){z[0]=L;e:for(var k=0,ne=z.length,O=ne>>>1;k<O;){var K=2*(k+1)-1,me=z[K],ye=K+1,Ae=z[ye];if(0>l(me,L))ye<ne&&0>l(Ae,me)?(z[k]=Ae,z[ye]=L,k=ye):(z[k]=me,z[K]=L,k=K);else if(ye<ne&&0>l(Ae,L))z[k]=Ae,z[ye]=L,k=ye;else break e}}return q}function l(z,q){var L=z.sortIndex-q.sortIndex;return L!==0?L:z.id-q.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,x=null,b=3,y=!1,E=!1,R=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function F(z){for(var q=i(p);q!==null;){if(q.callback===null)s(p);else if(q.startTime<=z)s(p),q.sortIndex=q.expirationTime,t(m,q);else break;q=i(p)}}function H(z){if(R=!1,F(z),!E)if(i(m)!==null)E=!0,U||(U=!0,Y());else{var q=i(p);q!==null&&$(H,q.startTime-z)}}var U=!1,B=-1,ee=5,D=-1;function C(){return S?!0:!(o.unstable_now()-D<ee)}function V(){if(S=!1,U){var z=o.unstable_now();D=z;var q=!0;try{e:{E=!1,R&&(R=!1,P(B),B=-1),y=!0;var L=b;try{t:{for(F(z),x=i(m);x!==null&&!(x.expirationTime>z&&C());){var k=x.callback;if(typeof k=="function"){x.callback=null,b=x.priorityLevel;var ne=k(x.expirationTime<=z);if(z=o.unstable_now(),typeof ne=="function"){x.callback=ne,F(z),q=!0;break t}x===i(m)&&s(m),F(z)}else s(m);x=i(m)}if(x!==null)q=!0;else{var O=i(p);O!==null&&$(H,O.startTime-z),q=!1}}break e}finally{x=null,b=L,y=!1}q=void 0}}finally{q?Y():U=!1}}}var Y;if(typeof N=="function")Y=function(){N(V)};else if(typeof MessageChannel<"u"){var ie=new MessageChannel,Z=ie.port2;ie.port1.onmessage=V,Y=function(){Z.postMessage(null)}}else Y=function(){_(V,0)};function $(z,q){B=_(function(){z(o.unstable_now())},q)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ee=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return b},o.unstable_next=function(z){switch(b){case 1:case 2:case 3:var q=3;break;default:q=b}var L=b;b=q;try{return z()}finally{b=L}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(z,q){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var L=b;b=z;try{return q()}finally{b=L}},o.unstable_scheduleCallback=function(z,q,L){var k=o.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?k+L:k):L=k,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=L+ne,z={id:g++,callback:q,priorityLevel:z,startTime:L,expirationTime:ne,sortIndex:-1},L>k?(z.sortIndex=L,t(p,z),i(m)===null&&z===i(p)&&(R?(P(B),B=-1):R=!0,$(H,L-k))):(z.sortIndex=ne,t(m,z),E||y||(E=!0,U||(U=!0,Y()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var q=b;return function(){var L=b;b=q;try{return z.apply(this,arguments)}finally{b=L}}}})(qf)),qf}var Mx;function pb(){return Mx||(Mx=1,Xf.exports=hb()),Xf.exports}var Wf={exports:{}},Dn={};var Ex;function mb(){if(Ex)return Dn;Ex=1;var o=bh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return c(m,p,null,g)},Dn.flushSync=function(m){var p=d.T,g=s.p;try{if(d.T=null,s.p=2,m)return m()}finally{d.T=p,s.p=g,s.d.f()}},Dn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Dn.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Dn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:b,fetchPriority:y}):g==="script"&&s.d.X(m,{crossOrigin:x,integrity:b,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Dn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,x=h(g,p.crossOrigin);s.d.L(m,g,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Dn.requestFormReset=function(m){s.d.r(m)},Dn.unstable_batchedUpdates=function(m,p){return m(p)},Dn.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},Dn.useFormStatus=function(){return d.H.useHostTransitionStatus()},Dn.version="19.2.0",Dn}var Tx;function xb(){if(Tx)return Wf.exports;Tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Wf.exports=mb(),Wf.exports}var Ax;function gb(){if(Ax)return Ao;Ax=1;var o=pb(),t=bh(),i=xb();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(c(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),e;if(f===r)return m(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var v=!1,A=u.child;A;){if(A===a){v=!0,a=u,r=f;break}if(A===r){v=!0,r=u,a=f;break}A=A.sibling}if(!v){for(A=f.child;A;){if(A===a){v=!0,a=f,r=u;break}if(A===r){v=!0,r=f,a=u;break}A=A.sibling}if(!v)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function g(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=g(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,b=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),D=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var ie=Symbol.for("react.client.reference");function Z(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ie?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case _:return"Profiler";case S:return"StrictMode";case H:return"Suspense";case U:return"SuspenseList";case D:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:Z(e.type)||"Memo";case ee:n=e._payload,e=e._init;try{return Z(e(n))}catch{}}return null}var $=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},k=[],ne=-1;function O(e){return{current:e}}function K(e){0>ne||(e.current=k[ne],k[ne]=null,ne--)}function me(e,n){ne++,k[ne]=e.current,e.current=n}var ye=O(null),Ae=O(null),ae=O(null),he=O(null);function De(e,n){switch(me(ae,n),me(Ae,e),me(ye,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Vm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Vm(n),e=Gm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}K(ye),me(ye,e)}function Be(){K(ye),K(Ae),K(ae)}function je(e){e.memoizedState!==null&&me(he,e);var n=ye.current,a=Gm(n,e.type);n!==a&&(me(Ae,e),me(ye,a))}function ot(e){Ae.current===e&&(K(ye),K(Ae)),he.current===e&&(K(he),yo._currentValue=L)}var Zt,ht;function Rt(e){if(Zt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Zt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Zt+e+ht}var j=!1;function pt(e,n){if(!e||j)return"";j=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ve=function(){throw Error()};if(Object.defineProperty(ve.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ve,[])}catch(fe){var ce=fe}Reflect.construct(e,[],ve)}else{try{ve.call()}catch(fe){ce=fe}e.call(ve.prototype)}}else{try{throw Error()}catch(fe){ce=fe}(ve=e())&&typeof ve.catch=="function"&&ve.catch(function(){})}}catch(fe){if(fe&&ce&&typeof fe.stack=="string")return[fe.stack,ce.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),v=f[0],A=f[1];if(v&&A){var G=v.split(`
`),oe=A.split(`
`);for(u=r=0;r<G.length&&!G[r].includes("DetermineComponentFrameRoot");)r++;for(;u<oe.length&&!oe[u].includes("DetermineComponentFrameRoot");)u++;if(r===G.length||u===oe.length)for(r=G.length-1,u=oe.length-1;1<=r&&0<=u&&G[r]!==oe[u];)u--;for(;1<=r&&0<=u;r--,u--)if(G[r]!==oe[u]){if(r!==1||u!==1)do if(r--,u--,0>u||G[r]!==oe[u]){var xe=`
`+G[r].replace(" at new "," at ");return e.displayName&&xe.includes("<anonymous>")&&(xe=xe.replace("<anonymous>",e.displayName)),xe}while(1<=r&&0<=u);break}}}finally{j=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Rt(a):""}function xt(e,n){switch(e.tag){case 26:case 27:case 5:return Rt(e.type);case 16:return Rt("Lazy");case 13:return e.child!==n&&n!==null?Rt("Suspense Fallback"):Rt("Suspense");case 19:return Rt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return Rt("Activity");default:return""}}function Pt(e){try{var n="",a=null;do n+=xt(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ve=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,Ye=o.unstable_cancelCallback,st=o.unstable_shouldYield,I=o.unstable_requestPaint,T=o.unstable_now,re=o.unstable_getCurrentPriorityLevel,_e=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,pe=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Qe=o.log,Xe=o.unstable_setDisableYieldValue,Me=null,Te=null;function We(e){if(typeof Qe=="function"&&Xe(e),Te&&typeof Te.setStrictMode=="function")try{Te.setStrictMode(Me,e)}catch{}}var Ge=Math.clz32?Math.clz32:X,ze=Math.log,it=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(ze(e)/it|0)|0}var Ne=256,Ce=262144,we=4194304;function Ee(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var u=0,f=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var A=r&134217727;return A!==0?(r=A&~f,r!==0?u=Ee(r):(v&=A,v!==0?u=Ee(v):a||(a=A&~e,a!==0&&(u=Ee(a))))):(A=r&~f,A!==0?u=Ee(A):v!==0?u=Ee(v):a||(a=r&~e,a!==0&&(u=Ee(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ie(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function at(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=we;return we<<=1,(we&62914560)===0&&(we=4194304),e}function Ct(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function wn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function qn(e,n,a,r,u,f){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var A=e.entanglements,G=e.expirationTimes,oe=e.hiddenUpdates;for(a=v&~a;0<a;){var xe=31-Ge(a),ve=1<<xe;A[xe]=0,G[xe]=-1;var ce=oe[xe];if(ce!==null)for(oe[xe]=null,xe=0;xe<ce.length;xe++){var fe=ce[xe];fe!==null&&(fe.lane&=-536870913)}a&=~ve}r!==0&&qo(e,r,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(v&~n))}function qo(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Ge(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function Ur(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Ge(a),u=1<<r;u&n|e[r]&n&&(e[r]|=n),a&=~u}}function Lr(e,n){var a=n&-n;return a=(a&42)!==0?1:xi(a),(a&(e.suspendedLanes|n))!==0?0:a}function xi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function es(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Or(){var e=q.p;return e!==0?e:(e=window.event,e===void 0?32:fx(e.type))}function zr(e,n){var a=q.p;try{return q.p=e,n()}finally{q.p=a}}var Wn=Math.random().toString(36).slice(2),on="__reactFiber$"+Wn,pn="__reactProps$"+Wn,Ii="__reactContainer$"+Wn,Ds="__reactEvents$"+Wn,zc="__reactListeners$"+Wn,Pc="__reactHandles$"+Wn,Wo="__reactResources$"+Wn,ts="__reactMarker$"+Wn;function Pr(e){delete e[on],delete e[pn],delete e[Ds],delete e[zc],delete e[Pc]}function xa(e){var n=e[on];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[on]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Zm(e);e!==null;){if(a=e[on])return a;e=Zm(e)}return n}e=a,a=e.parentNode}return null}function w(e){if(e=e[on]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ue(e){var n=e[Wo];return n||(n=e[Wo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function le(e){e[ts]=!0}var te=new Set,Re={};function Ue(e,n){Pe(e,n),Pe(e+"Capture",n)}function Pe(e,n){for(Re[e]=n,e=0;e<n.length;e++)te.add(n[e])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ve.call(tt,e)?!0:Ve.call($e,e)?!1:Fe.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ut(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function At(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function wt(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+r)}}function yt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(v){a=""+v,f.call(this,v)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=zt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function St(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=zt(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}function vn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ga=/[\n"\\]/g;function Wt(e){return e.replace(ga,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fi(e,n,a,r,u,f,v,A){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+yt(n)):e.value!==""+yt(n)&&(e.value=""+yt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?bn(e,v,yt(n)):a!=null?bn(e,v,yt(a)):r!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+yt(A):e.removeAttribute("name")}function Yt(e,n,a,r,u,f,v,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+yt(a):"",n=n!=null?""+yt(n):a,A||n===e.value||(e.value=n),e.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=A?e.checked:!!r,e.defaultChecked=!!r,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),Xt(e)}function bn(e,n,a){n==="number"&&vn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function mn(e,n,a,r){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&r&&(e[a].defaultSelected=!0)}else{for(a=""+yt(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,r&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function yn(e,n,a){if(n!=null&&(n=""+yt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+yt(a):""}function En(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if($(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=yt(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),Xt(e)}function Ti(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Fh(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Bh(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="");for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&Fh(e,u,r)}else for(var f in n)n.hasOwnProperty(f)&&Fh(e,f,n[f])}function Ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var s_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),r_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return r_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Hi(){}var Fc=null;function Bc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ns=null,Us=null;function Hh(e){var n=w(e);if(n&&(e=n.stateNode)){var a=e[pn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var u=r[pn]||null;if(!u)throw Error(s(90));Fi(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&St(r)}break e;case"textarea":yn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&mn(e,!!a.multiple,n,!1)}}}var Hc=!1;function Vh(e,n,a){if(Hc)return e(n,a);Hc=!0;try{var r=e(n);return r}finally{if(Hc=!1,(Ns!==null||Us!==null)&&(zl(),Ns&&(n=Ns,e=Us,Us=Ns=null,Hh(n),e)))for(n=0;n<e.length;n++)Hh(e[n])}}function Ir(e,n){var a=e.stateNode;if(a===null)return null;var r=a[pn]||null;if(r===null)return null;a=r[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var Vi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Vc=!1;if(Vi)try{var Fr={};Object.defineProperty(Fr,"passive",{get:function(){Vc=!0}}),window.addEventListener("test",Fr,Fr),window.removeEventListener("test",Fr,Fr)}catch{Vc=!1}var _a=null,Gc=null,Zo=null;function Gh(){if(Zo)return Zo;var e,n=Gc,a=n.length,r,u="value"in _a?_a.value:_a.textContent,f=u.length;for(e=0;e<a&&n[e]===u[e];e++);var v=a-e;for(r=1;r<=v&&n[a-r]===u[f-r];r++);return Zo=u.slice(e,1<r?1-r:void 0)}function Ko(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Qo(){return!0}function jh(){return!1}function In(e){function n(a,r,u,f,v){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=v,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(a=e[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Qo:jh,this.isPropagationStopped=jh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Qo)},persist:function(){},isPersistent:Qo}),n}var ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jo=In(ns),Br=x({},ns,{view:0,detail:0}),o_=In(Br),jc,kc,Hr,$o=x({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hr&&(Hr&&e.type==="mousemove"?(jc=e.screenX-Hr.screenX,kc=e.screenY-Hr.screenY):kc=jc=0,Hr=e),jc)},movementY:function(e){return"movementY"in e?e.movementY:kc}}),kh=In($o),l_=x({},$o,{dataTransfer:0}),c_=In(l_),u_=x({},Br,{relatedTarget:0}),Xc=In(u_),f_=x({},ns,{animationName:0,elapsedTime:0,pseudoElement:0}),d_=In(f_),h_=x({},ns,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),p_=In(h_),m_=x({},ns,{data:0}),Xh=In(m_),x_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},g_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=__[e])?!!n[e]:!1}function qc(){return v_}var b_=x({},Br,{key:function(e){if(e.key){var n=x_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ko(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?g_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?Ko(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ko(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y_=In(b_),S_=x({},$o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qh=In(S_),M_=x({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),E_=In(M_),T_=x({},ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=In(T_),R_=x({},$o,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C_=In(R_),w_=x({},ns,{newState:0,oldState:0}),D_=In(w_),N_=[9,13,27,32],Wc=Vi&&"CompositionEvent"in window,Vr=null;Vi&&"documentMode"in document&&(Vr=document.documentMode);var U_=Vi&&"TextEvent"in window&&!Vr,Wh=Vi&&(!Wc||Vr&&8<Vr&&11>=Vr),Yh=" ",Zh=!1;function Kh(e,n){switch(e){case"keyup":return N_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ls=!1;function L_(e,n){switch(e){case"compositionend":return Qh(n);case"keypress":return n.which!==32?null:(Zh=!0,Yh);case"textInput":return e=n.data,e===Yh&&Zh?null:e;default:return null}}function O_(e,n){if(Ls)return e==="compositionend"||!Wc&&Kh(e,n)?(e=Gh(),Zo=Gc=_a=null,Ls=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Wh&&n.locale!=="ko"?null:n.data;default:return null}}var z_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!z_[e.type]:n==="textarea"}function $h(e,n,a,r){Ns?Us?Us.push(r):Us=[r]:Ns=r,n=Gl(n,"onChange"),0<n.length&&(a=new Jo("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Gr=null,jr=null;function P_(e){zm(e,0)}function el(e){var n=Q(e);if(St(n))return e}function ep(e,n){if(e==="change")return n}var tp=!1;if(Vi){var Yc;if(Vi){var Zc="oninput"in document;if(!Zc){var np=document.createElement("div");np.setAttribute("oninput","return;"),Zc=typeof np.oninput=="function"}Yc=Zc}else Yc=!1;tp=Yc&&(!document.documentMode||9<document.documentMode)}function ip(){Gr&&(Gr.detachEvent("onpropertychange",ap),jr=Gr=null)}function ap(e){if(e.propertyName==="value"&&el(jr)){var n=[];$h(n,jr,e,Bc(e)),Vh(P_,n)}}function I_(e,n,a){e==="focusin"?(ip(),Gr=n,jr=a,Gr.attachEvent("onpropertychange",ap)):e==="focusout"&&ip()}function F_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return el(jr)}function B_(e,n){if(e==="click")return el(n)}function H_(e,n){if(e==="input"||e==="change")return el(n)}function V_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:V_;function kr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!Ve.call(n,u)||!Yn(e[u],n[u]))return!1}return!0}function sp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function rp(e,n){var a=sp(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=sp(a)}}function op(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?op(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vn(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vn(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var G_=Vi&&"documentMode"in document&&11>=document.documentMode,Os=null,Qc=null,Xr=null,Jc=!1;function cp(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Os==null||Os!==vn(r)||(r=Os,"selectionStart"in r&&Kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Xr&&kr(Xr,r)||(Xr=r,r=Gl(Qc,"onSelect"),0<r.length&&(n=new Jo("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=Os)))}function is(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var zs={animationend:is("Animation","AnimationEnd"),animationiteration:is("Animation","AnimationIteration"),animationstart:is("Animation","AnimationStart"),transitionrun:is("Transition","TransitionRun"),transitionstart:is("Transition","TransitionStart"),transitioncancel:is("Transition","TransitionCancel"),transitionend:is("Transition","TransitionEnd")},$c={},up={};Vi&&(up=document.createElement("div").style,"AnimationEvent"in window||(delete zs.animationend.animation,delete zs.animationiteration.animation,delete zs.animationstart.animation),"TransitionEvent"in window||delete zs.transitionend.transition);function as(e){if($c[e])return $c[e];if(!zs[e])return e;var n=zs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in up)return $c[e]=n[a];return e}var fp=as("animationend"),dp=as("animationiteration"),hp=as("animationstart"),j_=as("transitionrun"),k_=as("transitionstart"),X_=as("transitioncancel"),pp=as("transitionend"),mp=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function gi(e,n){mp.set(e,n),Ue(n,[e])}var tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},si=[],Ps=0,tu=0;function nl(){for(var e=Ps,n=tu=Ps=0;n<e;){var a=si[n];si[n++]=null;var r=si[n];si[n++]=null;var u=si[n];si[n++]=null;var f=si[n];if(si[n++]=null,r!==null&&u!==null){var v=r.pending;v===null?u.next=u:(u.next=v.next,v.next=u),r.pending=u}f!==0&&xp(a,u,f)}}function il(e,n,a,r){si[Ps++]=e,si[Ps++]=n,si[Ps++]=a,si[Ps++]=r,tu|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function nu(e,n,a,r){return il(e,n,a,r),al(e)}function ss(e,n){return il(e,null,null,n),al(e)}function xp(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&n!==null&&(u=31-Ge(a),e=f.hiddenUpdates,r=e[u],r===null?e[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function al(e){if(50<po)throw po=0,df=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Is={};function q_(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(e,n,a,r){return new q_(e,n,a,r)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Gi(e,n){var a=e.alternate;return a===null?(a=Zn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function gp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function sl(e,n,a,r,u,f){var v=0;if(r=e,typeof e=="function")iu(e)&&(v=1);else if(typeof e=="string")v=Qv(e,a,ye.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case D:return e=Zn(31,a,n,u),e.elementType=D,e.lanes=f,e;case R:return rs(a.children,u,f,n);case S:v=8,u|=24;break;case _:return e=Zn(12,a,n,u|2),e.elementType=_,e.lanes=f,e;case H:return e=Zn(13,a,n,u),e.elementType=H,e.lanes=f,e;case U:return e=Zn(19,a,n,u),e.elementType=U,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:v=10;break e;case P:v=9;break e;case F:v=11;break e;case B:v=14;break e;case ee:v=16,r=null;break e}v=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=Zn(v,a,n,u),n.elementType=e,n.type=r,n.lanes=f,n}function rs(e,n,a,r){return e=Zn(7,e,r,n),e.lanes=a,e}function au(e,n,a){return e=Zn(6,e,null,n),e.lanes=a,e}function _p(e){var n=Zn(18,null,null,0);return n.stateNode=e,n}function su(e,n,a){return n=Zn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var vp=new WeakMap;function ri(e,n){if(typeof e=="object"&&e!==null){var a=vp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},vp.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Fs=[],Bs=0,rl=null,qr=0,oi=[],li=0,va=null,Ai=1,Ri="";function ji(e,n){Fs[Bs++]=qr,Fs[Bs++]=rl,rl=e,qr=n}function bp(e,n,a){oi[li++]=Ai,oi[li++]=Ri,oi[li++]=va,va=e;var r=Ai;e=Ri;var u=32-Ge(r)-1;r&=~(1<<u),a+=1;var f=32-Ge(n)+u;if(30<f){var v=u-u%5;f=(r&(1<<v)-1).toString(32),r>>=v,u-=v,Ai=1<<32-Ge(n)+u|a<<u|r,Ri=f+e}else Ai=1<<f|a<<u|r,Ri=e}function ru(e){e.return!==null&&(ji(e,1),bp(e,1,0))}function ou(e){for(;e===rl;)rl=Fs[--Bs],Fs[Bs]=null,qr=Fs[--Bs],Fs[Bs]=null;for(;e===va;)va=oi[--li],oi[li]=null,Ri=oi[--li],oi[li]=null,Ai=oi[--li],oi[li]=null}function yp(e,n){oi[li++]=Ai,oi[li++]=Ri,oi[li++]=va,Ai=n.id,Ri=n.overflow,va=e}var Tn=null,Kt=null,Mt=!1,ba=null,ci=!1,lu=Error(s(519));function ya(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Wr(ri(n,e)),lu}function Sp(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[on]=e,n[pn]=r,a){case"dialog":_t("cancel",n),_t("close",n);break;case"iframe":case"object":case"embed":_t("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)_t(xo[a],n);break;case"source":_t("error",n);break;case"img":case"image":case"link":_t("error",n),_t("load",n);break;case"details":_t("toggle",n);break;case"input":_t("invalid",n),Yt(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":_t("invalid",n);break;case"textarea":_t("invalid",n),En(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Bm(n.textContent,a)?(r.popover!=null&&(_t("beforetoggle",n),_t("toggle",n)),r.onScroll!=null&&_t("scroll",n),r.onScrollEnd!=null&&_t("scrollend",n),r.onClick!=null&&(n.onclick=Hi),n=!0):n=!1,n||ya(e,!0)}function Mp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Hs(e){if(e!==Tn)return!1;if(!Mt)return Mp(e),Mt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&Kt&&ya(e),Mp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Ym(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Kt=Ym(e)}else n===27?(n=Kt,za(e.type)?(e=Uf,Uf=null,Kt=e):Kt=n):Kt=Tn?fi(e.stateNode.nextSibling):null;return!0}function os(){Kt=Tn=null,Mt=!1}function cu(){var e=ba;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),ba=null),e}function Wr(e){ba===null?ba=[e]:ba.push(e)}var uu=O(null),ls=null,ki=null;function Sa(e,n,a){me(uu,n._currentValue),n._currentValue=a}function Xi(e){e._currentValue=uu.current,K(uu)}function fu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,r){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var v=u.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=u;for(var G=0;G<n.length;G++)if(A.context===n[G]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),fu(f.return,a,e),r||(v=null);break e}f=A.next}}else if(u.tag===18){if(v=u.return,v===null)throw Error(s(341));v.lanes|=a,f=v.alternate,f!==null&&(f.lanes|=a),fu(v,a,e),v=null}else v=u.child;if(v!==null)v.return=u;else for(v=u;v!==null;){if(v===e){v=null;break}if(u=v.sibling,u!==null){u.return=v.return,v=u;break}v=v.return}u=v}}function Vs(e,n,a,r){e=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var v=u.alternate;if(v===null)throw Error(s(387));if(v=v.memoizedProps,v!==null){var A=u.type;Yn(u.pendingProps.value,v.value)||(e!==null?e.push(A):e=[A])}}else if(u===he.current){if(v=u.alternate,v===null)throw Error(s(387));v.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(yo):e=[yo])}u=u.return}e!==null&&du(n,e,a,r),n.flags|=262144}function ol(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function cs(e){ls=e,ki=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Ep(ls,e)}function ll(e,n){return ls===null&&cs(e),Ep(e,n)}function Ep(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ki===null){if(e===null)throw Error(s(308));ki=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ki=ki.next=n;return a}var W_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Y_=o.unstable_scheduleCallback,Z_=o.unstable_NormalPriority,ln={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new W_,data:new Map,refCount:0}}function Yr(e){e.refCount--,e.refCount===0&&Y_(Z_,function(){e.controller.abort()})}var Zr=null,pu=0,Gs=0,js=null;function K_(e,n){if(Zr===null){var a=Zr=[];pu=0,Gs=_f(),js={status:"pending",value:void 0,then:function(r){a.push(r)}}}return pu++,n.then(Tp,Tp),n}function Tp(){if(--pu===0&&Zr!==null){js!==null&&(js.status="fulfilled");var e=Zr;Zr=null,Gs=0,js=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Q_(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Ap=z.S;z.S=function(e,n){cm=T(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&K_(e,n),Ap!==null&&Ap(e,n)};var us=O(null);function mu(){var e=us.current;return e!==null?e:qt.pooledCache}function cl(e,n){n===null?me(us,us.current):me(us,n.pool)}function Rp(){var e=mu();return e===null?null:{parent:ln._currentValue,pool:e}}var ks=Error(s(460)),xu=Error(s(474)),ul=Error(s(542)),fl={then:function(){}};function Cp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Hi,Hi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e;default:if(typeof n.status=="string")n.then(Hi,Hi);else{if(e=qt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Np(e),e}throw ds=n,ks}}function fs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ds=a,ks):a}}var ds=null;function Dp(){if(ds===null)throw Error(s(459));var e=ds;return ds=null,e}function Np(e){if(e===ks||e===ul)throw Error(s(483))}var Xs=null,Kr=0;function dl(e){var n=Kr;return Kr+=1,Xs===null&&(Xs=[]),wp(Xs,e,n)}function Qr(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function hl(e,n){throw n.$$typeof===b?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Up(e){function n(J,W){if(e){var se=J.deletions;se===null?(J.deletions=[W],J.flags|=16):se.push(W)}}function a(J,W){if(!e)return null;for(;W!==null;)n(J,W),W=W.sibling;return null}function r(J){for(var W=new Map;J!==null;)J.key!==null?W.set(J.key,J):W.set(J.index,J),J=J.sibling;return W}function u(J,W){return J=Gi(J,W),J.index=0,J.sibling=null,J}function f(J,W,se){return J.index=se,e?(se=J.alternate,se!==null?(se=se.index,se<W?(J.flags|=67108866,W):se):(J.flags|=67108866,W)):(J.flags|=1048576,W)}function v(J){return e&&J.alternate===null&&(J.flags|=67108866),J}function A(J,W,se,ge){return W===null||W.tag!==6?(W=au(se,J.mode,ge),W.return=J,W):(W=u(W,se),W.return=J,W)}function G(J,W,se,ge){var Ke=se.type;return Ke===R?xe(J,W,se.props.children,ge,se.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ee&&fs(Ke)===W.type)?(W=u(W,se.props),Qr(W,se),W.return=J,W):(W=sl(se.type,se.key,se.props,null,J.mode,ge),Qr(W,se),W.return=J,W)}function oe(J,W,se,ge){return W===null||W.tag!==4||W.stateNode.containerInfo!==se.containerInfo||W.stateNode.implementation!==se.implementation?(W=su(se,J.mode,ge),W.return=J,W):(W=u(W,se.children||[]),W.return=J,W)}function xe(J,W,se,ge,Ke){return W===null||W.tag!==7?(W=rs(se,J.mode,ge,Ke),W.return=J,W):(W=u(W,se),W.return=J,W)}function ve(J,W,se){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=au(""+W,J.mode,se),W.return=J,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case y:return se=sl(W.type,W.key,W.props,null,J.mode,se),Qr(se,W),se.return=J,se;case E:return W=su(W,J.mode,se),W.return=J,W;case ee:return W=fs(W),ve(J,W,se)}if($(W)||Y(W))return W=rs(W,J.mode,se,null),W.return=J,W;if(typeof W.then=="function")return ve(J,dl(W),se);if(W.$$typeof===N)return ve(J,ll(J,W),se);hl(J,W)}return null}function ce(J,W,se,ge){var Ke=W!==null?W.key:null;if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return Ke!==null?null:A(J,W,""+se,ge);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case y:return se.key===Ke?G(J,W,se,ge):null;case E:return se.key===Ke?oe(J,W,se,ge):null;case ee:return se=fs(se),ce(J,W,se,ge)}if($(se)||Y(se))return Ke!==null?null:xe(J,W,se,ge,null);if(typeof se.then=="function")return ce(J,W,dl(se),ge);if(se.$$typeof===N)return ce(J,W,ll(J,se),ge);hl(J,se)}return null}function fe(J,W,se,ge,Ke){if(typeof ge=="string"&&ge!==""||typeof ge=="number"||typeof ge=="bigint")return J=J.get(se)||null,A(W,J,""+ge,Ke);if(typeof ge=="object"&&ge!==null){switch(ge.$$typeof){case y:return J=J.get(ge.key===null?se:ge.key)||null,G(W,J,ge,Ke);case E:return J=J.get(ge.key===null?se:ge.key)||null,oe(W,J,ge,Ke);case ee:return ge=fs(ge),fe(J,W,se,ge,Ke)}if($(ge)||Y(ge))return J=J.get(se)||null,xe(W,J,ge,Ke,null);if(typeof ge.then=="function")return fe(J,W,se,dl(ge),Ke);if(ge.$$typeof===N)return fe(J,W,se,ll(W,ge),Ke);hl(W,ge)}return null}function He(J,W,se,ge){for(var Ke=null,Dt=null,ke=W,ft=W=0,bt=null;ke!==null&&ft<se.length;ft++){ke.index>ft?(bt=ke,ke=null):bt=ke.sibling;var Nt=ce(J,ke,se[ft],ge);if(Nt===null){ke===null&&(ke=bt);break}e&&ke&&Nt.alternate===null&&n(J,ke),W=f(Nt,W,ft),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt,ke=bt}if(ft===se.length)return a(J,ke),Mt&&ji(J,ft),Ke;if(ke===null){for(;ft<se.length;ft++)ke=ve(J,se[ft],ge),ke!==null&&(W=f(ke,W,ft),Dt===null?Ke=ke:Dt.sibling=ke,Dt=ke);return Mt&&ji(J,ft),Ke}for(ke=r(ke);ft<se.length;ft++)bt=fe(ke,J,ft,se[ft],ge),bt!==null&&(e&&bt.alternate!==null&&ke.delete(bt.key===null?ft:bt.key),W=f(bt,W,ft),Dt===null?Ke=bt:Dt.sibling=bt,Dt=bt);return e&&ke.forEach(function(Ha){return n(J,Ha)}),Mt&&ji(J,ft),Ke}function et(J,W,se,ge){if(se==null)throw Error(s(151));for(var Ke=null,Dt=null,ke=W,ft=W=0,bt=null,Nt=se.next();ke!==null&&!Nt.done;ft++,Nt=se.next()){ke.index>ft?(bt=ke,ke=null):bt=ke.sibling;var Ha=ce(J,ke,Nt.value,ge);if(Ha===null){ke===null&&(ke=bt);break}e&&ke&&Ha.alternate===null&&n(J,ke),W=f(Ha,W,ft),Dt===null?Ke=Ha:Dt.sibling=Ha,Dt=Ha,ke=bt}if(Nt.done)return a(J,ke),Mt&&ji(J,ft),Ke;if(ke===null){for(;!Nt.done;ft++,Nt=se.next())Nt=ve(J,Nt.value,ge),Nt!==null&&(W=f(Nt,W,ft),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return Mt&&ji(J,ft),Ke}for(ke=r(ke);!Nt.done;ft++,Nt=se.next())Nt=fe(ke,J,ft,Nt.value,ge),Nt!==null&&(e&&Nt.alternate!==null&&ke.delete(Nt.key===null?ft:Nt.key),W=f(Nt,W,ft),Dt===null?Ke=Nt:Dt.sibling=Nt,Dt=Nt);return e&&ke.forEach(function(lb){return n(J,lb)}),Mt&&ji(J,ft),Ke}function Gt(J,W,se,ge){if(typeof se=="object"&&se!==null&&se.type===R&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case y:e:{for(var Ke=se.key;W!==null;){if(W.key===Ke){if(Ke=se.type,Ke===R){if(W.tag===7){a(J,W.sibling),ge=u(W,se.props.children),ge.return=J,J=ge;break e}}else if(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ee&&fs(Ke)===W.type){a(J,W.sibling),ge=u(W,se.props),Qr(ge,se),ge.return=J,J=ge;break e}a(J,W);break}else n(J,W);W=W.sibling}se.type===R?(ge=rs(se.props.children,J.mode,ge,se.key),ge.return=J,J=ge):(ge=sl(se.type,se.key,se.props,null,J.mode,ge),Qr(ge,se),ge.return=J,J=ge)}return v(J);case E:e:{for(Ke=se.key;W!==null;){if(W.key===Ke)if(W.tag===4&&W.stateNode.containerInfo===se.containerInfo&&W.stateNode.implementation===se.implementation){a(J,W.sibling),ge=u(W,se.children||[]),ge.return=J,J=ge;break e}else{a(J,W);break}else n(J,W);W=W.sibling}ge=su(se,J.mode,ge),ge.return=J,J=ge}return v(J);case ee:return se=fs(se),Gt(J,W,se,ge)}if($(se))return He(J,W,se,ge);if(Y(se)){if(Ke=Y(se),typeof Ke!="function")throw Error(s(150));return se=Ke.call(se),et(J,W,se,ge)}if(typeof se.then=="function")return Gt(J,W,dl(se),ge);if(se.$$typeof===N)return Gt(J,W,ll(J,se),ge);hl(J,se)}return typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint"?(se=""+se,W!==null&&W.tag===6?(a(J,W.sibling),ge=u(W,se),ge.return=J,J=ge):(a(J,W),ge=au(se,J.mode,ge),ge.return=J,J=ge),v(J)):a(J,W)}return function(J,W,se,ge){try{Kr=0;var Ke=Gt(J,W,se,ge);return Xs=null,Ke}catch(ke){if(ke===ks||ke===ul)throw ke;var Dt=Zn(29,ke,null,J.mode);return Dt.lanes=ge,Dt.return=J,Dt}finally{}}}var hs=Up(!0),Lp=Up(!1),Ma=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ea(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ta(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Ot&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=al(e),xp(e,null,a),n}return il(e,r,n,a),al(e)}function Jr(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ur(e,a)}}function vu(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=v:f=f.next=v,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var bu=!1;function $r(){if(bu){var e=js;if(e!==null)throw e}}function eo(e,n,a,r){bu=!1;var u=e.updateQueue;Ma=!1;var f=u.firstBaseUpdate,v=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var G=A,oe=G.next;G.next=null,v===null?f=oe:v.next=oe,v=G;var xe=e.alternate;xe!==null&&(xe=xe.updateQueue,A=xe.lastBaseUpdate,A!==v&&(A===null?xe.firstBaseUpdate=oe:A.next=oe,xe.lastBaseUpdate=G))}if(f!==null){var ve=u.baseState;v=0,xe=oe=G=null,A=f;do{var ce=A.lane&-536870913,fe=ce!==A.lane;if(fe?(vt&ce)===ce:(r&ce)===ce){ce!==0&&ce===Gs&&(bu=!0),xe!==null&&(xe=xe.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var He=e,et=A;ce=n;var Gt=a;switch(et.tag){case 1:if(He=et.payload,typeof He=="function"){ve=He.call(Gt,ve,ce);break e}ve=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=et.payload,ce=typeof He=="function"?He.call(Gt,ve,ce):He,ce==null)break e;ve=x({},ve,ce);break e;case 2:Ma=!0}}ce=A.callback,ce!==null&&(e.flags|=64,fe&&(e.flags|=8192),fe=u.callbacks,fe===null?u.callbacks=[ce]:fe.push(ce))}else fe={lane:ce,tag:A.tag,payload:A.payload,callback:A.callback,next:null},xe===null?(oe=xe=fe,G=ve):xe=xe.next=fe,v|=ce;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;fe=A,A=fe.next,fe.next=null,u.lastBaseUpdate=fe,u.shared.pending=null}}while(!0);xe===null&&(G=ve),u.baseState=G,u.firstBaseUpdate=oe,u.lastBaseUpdate=xe,f===null&&(u.shared.lanes=0),Da|=v,e.lanes=v,e.memoizedState=ve}}function Op(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function zp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Op(a[e],n)}var qs=O(null),pl=O(0);function Pp(e,n){e=ea,me(pl,e),me(qs,n),ea=e|n.baseLanes}function yu(){me(pl,ea),me(qs,qs.current)}function Su(){ea=pl.current,K(qs),K(pl)}var Kn=O(null),ui=null;function Aa(e){var n=e.alternate;me(nn,nn.current&1),me(Kn,e),ui===null&&(n===null||qs.current!==null||n.memoizedState!==null)&&(ui=e)}function Mu(e){me(nn,nn.current),me(Kn,e),ui===null&&(ui=e)}function Ip(e){e.tag===22?(me(nn,nn.current),me(Kn,e),ui===null&&(ui=e)):Ra()}function Ra(){me(nn,nn.current),me(Kn,Kn.current)}function Qn(e){K(Kn),ui===e&&(ui=null),K(nn)}var nn=O(0);function ml(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Nf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var qi=0,lt=null,Ht=null,cn=null,xl=!1,Ws=!1,ps=!1,gl=0,to=0,Ys=null,J_=0;function $t(){throw Error(s(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,r,u,f){return qi=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?b0:Hu,ps=!1,f=a(r,u),ps=!1,Ws&&(f=Bp(n,a,r,u)),Fp(e),f}function Fp(e){z.H=ao;var n=Ht!==null&&Ht.next!==null;if(qi=0,cn=Ht=lt=null,xl=!1,to=0,Ys=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&ol(e)&&(un=!0))}function Bp(e,n,a,r){lt=e;var u=0;do{if(Ws&&(Ys=null),to=0,Ws=!1,25<=u)throw Error(s(301));if(u+=1,cn=Ht=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=y0,f=n(a,r)}while(Ws);return f}function $_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Ht!==null?Ht.memoizedState:null)!==e&&(lt.flags|=1024),n}function Au(){var e=gl!==0;return gl=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cu(e){if(xl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}xl=!1}qi=0,cn=Ht=lt=null,Ws=!1,to=gl=0,Ys=null}function On(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?lt.memoizedState=cn=e:cn=cn.next=e,cn}function an(){if(Ht===null){var e=lt.alternate;e=e!==null?e.memoizedState:null}else e=Ht.next;var n=cn===null?lt.memoizedState:cn.next;if(n!==null)cn=n,Ht=e;else{if(e===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Ht=e,e={memoizedState:Ht.memoizedState,baseState:Ht.baseState,baseQueue:Ht.baseQueue,queue:Ht.queue,next:null},cn===null?lt.memoizedState=cn=e:cn=cn.next=e}return cn}function _l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,Ys===null&&(Ys=[]),e=wp(Ys,e,n),n=lt,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?b0:Hu),e}function vl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===N)return An(e)}throw Error(s(438,String(e)))}function wu(e){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=lt.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=_l(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=C;return n.index++,a}function Wi(e,n){return typeof n=="function"?n(e):n}function bl(e){var n=an();return Du(n,Ht,e)}function Du(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=e.baseQueue,f=r.pending;if(f!==null){if(u!==null){var v=u.next;u.next=f.next,f.next=v}n.baseQueue=u=f,r.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{n=u.next;var A=v=null,G=null,oe=n,xe=!1;do{var ve=oe.lane&-536870913;if(ve!==oe.lane?(vt&ve)===ve:(qi&ve)===ve){var ce=oe.revertLane;if(ce===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null}),ve===Gs&&(xe=!0);else if((qi&ce)===ce){oe=oe.next,ce===Gs&&(xe=!0);continue}else ve={lane:0,revertLane:oe.revertLane,gesture:null,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(A=G=ve,v=f):G=G.next=ve,lt.lanes|=ce,Da|=ce;ve=oe.action,ps&&a(f,ve),f=oe.hasEagerState?oe.eagerState:a(f,ve)}else ce={lane:ve,revertLane:oe.revertLane,gesture:oe.gesture,action:oe.action,hasEagerState:oe.hasEagerState,eagerState:oe.eagerState,next:null},G===null?(A=G=ce,v=f):G=G.next=ce,lt.lanes|=ve,Da|=ve;oe=oe.next}while(oe!==null&&oe!==n);if(G===null?v=f:G.next=A,!Yn(f,e.memoizedState)&&(un=!0,xe&&(a=js,a!==null)))throw a;e.memoizedState=f,e.baseState=v,e.baseQueue=G,r.lastRenderedState=f}return u===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Nu(e){var n=an(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var v=u=u.next;do f=e(f,v.action),v=v.next;while(v!==u);Yn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function Hp(e,n,a){var r=lt,u=an(),f=Mt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var v=!Yn((Ht||u).memoizedState,a);if(v&&(u.memoizedState=a,un=!0),u=u.queue,Ou(jp.bind(null,r,u,e),[e]),u.getSnapshot!==n||v||cn!==null&&cn.memoizedState.tag&1){if(r.flags|=2048,Zs(9,{destroy:void 0},Gp.bind(null,r,u,a,n),null),qt===null)throw Error(s(349));f||(qi&127)!==0||Vp(r,n,a)}return a}function Vp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=_l(),lt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Gp(e,n,a,r){n.value=a,n.getSnapshot=r,kp(n)&&Xp(e)}function jp(e,n,a){return a(function(){kp(n)&&Xp(e)})}function kp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Xp(e){var n=ss(e,2);n!==null&&Gn(n,e,2)}function Uu(e){var n=On();if(typeof e=="function"){var a=e;if(e=a(),ps){We(!0);try{a()}finally{We(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:e},n}function qp(e,n,a,r){return e.baseState=a,Du(e,Ht,typeof r=="function"?r:Wi)}function ev(e,n,a,r,u){if(Ml(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){f.listeners.push(v)}};z.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Wp(e,n){var a=n.action,r=n.payload,u=e.state;if(n.isTransition){var f=z.T,v={};z.T=v;try{var A=a(u,r),G=z.S;G!==null&&G(v,A),Yp(e,n,A)}catch(oe){Lu(e,n,oe)}finally{f!==null&&v.types!==null&&(f.types=v.types),z.T=f}}else try{f=a(u,r),Yp(e,n,f)}catch(oe){Lu(e,n,oe)}}function Yp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Zp(e,n,r)},function(r){return Lu(e,n,r)}):Zp(e,n,a)}function Zp(e,n,a){n.status="fulfilled",n.value=a,Kp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Wp(e,a)))}function Lu(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Kp(n),n=n.next;while(n!==r)}e.action=null}function Kp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qp(e,n){return n}function Jp(e,n){if(Mt){var a=qt.formState;if(a!==null){e:{var r=lt;if(Mt){if(Kt){t:{for(var u=Kt,f=ci;u.nodeType!==8;){if(!f){u=null;break t}if(u=fi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Kt=fi(u.nextSibling),r=u.data==="F!";break e}}ya(r)}r=!1}r&&(n=a[0])}}return a=On(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qp,lastRenderedState:n},a.queue=r,a=g0.bind(null,lt,r),r.dispatch=a,r=Uu(!1),f=Bu.bind(null,lt,!1,r.queue),r=On(),u={state:n,dispatch:null,action:e,pending:null},r.queue=u,a=ev.bind(null,lt,u,f,a),u.dispatch=a,r.memoizedState=e,[n,a,!1]}function $p(e){var n=an();return e0(n,Ht,e)}function e0(e,n,a){if(n=Du(e,n,Qp)[0],e=bl(Wi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=no(n)}catch(v){throw v===ks?ul:v}else r=n;n=an();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,Zs(9,{destroy:void 0},tv.bind(null,u,a),null)),[r,f,e]}function tv(e,n){e.action=n}function t0(e){var n=an(),a=Ht;if(a!==null)return e0(n,a,e);an(),n=n.memoizedState,a=an();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Zs(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=lt.updateQueue,n===null&&(n=_l(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function n0(){return an().memoizedState}function yl(e,n,a,r){var u=On();lt.flags|=e,u.memoizedState=Zs(1|n,{destroy:void 0},a,r===void 0?null:r)}function Sl(e,n,a,r){var u=an();r=r===void 0?null:r;var f=u.memoizedState.inst;Ht!==null&&r!==null&&Eu(r,Ht.memoizedState.deps)?u.memoizedState=Zs(n,f,a,r):(lt.flags|=e,u.memoizedState=Zs(1|n,f,a,r))}function i0(e,n){yl(8390656,8,e,n)}function Ou(e,n){Sl(2048,8,e,n)}function nv(e){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=_l(),lt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function a0(e){var n=an().memoizedState;return nv({ref:n,nextImpl:e}),function(){if((Ot&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function s0(e,n){return Sl(4,2,e,n)}function r0(e,n){return Sl(4,4,e,n)}function o0(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function l0(e,n,a){a=a!=null?a.concat([e]):null,Sl(4,4,o0.bind(null,n,e),a)}function zu(){}function c0(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Eu(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function u0(e,n){var a=an();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Eu(n,r[1]))return r[0];if(r=e(),ps){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r}function Pu(e,n,a){return a===void 0||(qi&1073741824)!==0&&(vt&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=fm(),lt.lanes|=e,Da|=e,a)}function f0(e,n,a,r){return Yn(a,n)?a:qs.current!==null?(e=Pu(e,a,r),Yn(e,n)||(un=!0),e):(qi&42)===0||(qi&1073741824)!==0&&(vt&261930)===0?(un=!0,e.memoizedState=a):(e=fm(),lt.lanes|=e,Da|=e,n)}function d0(e,n,a,r,u){var f=q.p;q.p=f!==0&&8>f?f:8;var v=z.T,A={};z.T=A,Bu(e,!1,n,a);try{var G=u(),oe=z.S;if(oe!==null&&oe(A,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var xe=Q_(G,r);io(e,n,xe,ei(e))}else io(e,n,r,ei(e))}catch(ve){io(e,n,{then:function(){},status:"rejected",reason:ve},ei())}finally{q.p=f,v!==null&&A.types!==null&&(v.types=A.types),z.T=v}}function iv(){}function Iu(e,n,a,r){if(e.tag!==5)throw Error(s(476));var u=h0(e).queue;d0(e,u,n,L,a===null?iv:function(){return p0(e),a(r)})}function h0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:L},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function p0(e){var n=h0(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},ei())}function Fu(){return An(yo)}function m0(){return an().memoizedState}function x0(){return an().memoizedState}function av(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=ei();e=Ea(a);var r=Ta(n,e,a);r!==null&&(Gn(r,n,a),Jr(r,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function sv(e,n,a){var r=ei();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ml(e)?_0(n,a):(a=nu(e,n,a,r),a!==null&&(Gn(a,e,r),v0(a,n,r)))}function g0(e,n,a){var r=ei();io(e,n,a,r)}function io(e,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ml(e))_0(n,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var v=n.lastRenderedState,A=f(v,a);if(u.hasEagerState=!0,u.eagerState=A,Yn(A,v))return il(e,n,u,0),qt===null&&nl(),!1}catch{}finally{}if(a=nu(e,n,u,r),a!==null)return Gn(a,e,r),v0(a,n,r),!0}return!1}function Bu(e,n,a,r){if(r={lane:2,revertLane:_f(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ml(e)){if(n)throw Error(s(479))}else n=nu(e,a,r,2),n!==null&&Gn(n,e,2)}function Ml(e){var n=e.alternate;return e===lt||n!==null&&n===lt}function _0(e,n){Ws=xl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function v0(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,Ur(e,a)}}var ao={readContext:An,use:vl,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useLayoutEffect:$t,useInsertionEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useSyncExternalStore:$t,useId:$t,useHostTransitionStatus:$t,useFormState:$t,useActionState:$t,useOptimistic:$t,useMemoCache:$t,useCacheRefresh:$t};ao.useEffectEvent=$t;var b0={readContext:An,use:vl,useCallback:function(e,n){return On().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:i0,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yl(4194308,4,o0.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yl(4194308,4,e,n)},useInsertionEffect:function(e,n){yl(4,2,e,n)},useMemo:function(e,n){var a=On();n=n===void 0?null:n;var r=e();if(ps){We(!0);try{e()}finally{We(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=On();if(a!==void 0){var u=a(n);if(ps){We(!0);try{a(n)}finally{We(!1)}}}else u=n;return r.memoizedState=r.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},r.queue=e,e=e.dispatch=sv.bind(null,lt,e),[r.memoizedState,e]},useRef:function(e){var n=On();return e={current:e},n.memoizedState=e},useState:function(e){e=Uu(e);var n=e.queue,a=g0.bind(null,lt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=On();return Pu(a,e,n)},useTransition:function(){var e=Uu(!1);return e=d0.bind(null,lt,e.queue,!0,!1),On().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=lt,u=On();if(Mt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qt===null)throw Error(s(349));(vt&127)!==0||Vp(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,i0(jp.bind(null,r,f,e),[e]),r.flags|=2048,Zs(9,{destroy:void 0},Gp.bind(null,r,f,a,n),null),a},useId:function(){var e=On(),n=qt.identifierPrefix;if(Mt){var a=Ri,r=Ai;a=(r&~(1<<32-Ge(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=J_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Jp,useActionState:Jp,useOptimistic:function(e){var n=On();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Bu.bind(null,lt,!0,a),a.dispatch=n,[e,n]},useMemoCache:wu,useCacheRefresh:function(){return On().memoizedState=av.bind(null,lt)},useEffectEvent:function(e){var n=On(),a={impl:e};return n.memoizedState=a,function(){if((Ot&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Hu={readContext:An,use:vl,useCallback:c0,useContext:An,useEffect:Ou,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:r0,useMemo:u0,useReducer:bl,useRef:n0,useState:function(){return bl(Wi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=an();return f0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=bl(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Hp,useId:m0,useHostTransitionStatus:Fu,useFormState:$p,useActionState:$p,useOptimistic:function(e,n){var a=an();return qp(a,Ht,e,n)},useMemoCache:wu,useCacheRefresh:x0};Hu.useEffectEvent=a0;var y0={readContext:An,use:vl,useCallback:c0,useContext:An,useEffect:Ou,useImperativeHandle:l0,useInsertionEffect:s0,useLayoutEffect:r0,useMemo:u0,useReducer:Nu,useRef:n0,useState:function(){return Nu(Wi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=an();return Ht===null?Pu(a,e,n):f0(a,Ht.memoizedState,e,n)},useTransition:function(){var e=Nu(Wi)[0],n=an().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Hp,useId:m0,useHostTransitionStatus:Fu,useFormState:t0,useActionState:t0,useOptimistic:function(e,n){var a=an();return Ht!==null?qp(a,Ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:x0};y0.useEffectEvent=a0;function Vu(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Gu={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ea(r);u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,r),n!==null&&(Gn(n,e,r),Jr(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=ei(),u=Ea(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ta(e,u,r),n!==null&&(Gn(n,e,r),Jr(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=ei(),r=Ea(a);r.tag=2,n!=null&&(r.callback=n),n=Ta(e,r,a),n!==null&&(Gn(n,e,a),Jr(n,e,a))}};function S0(e,n,a,r,u,f,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,v):n.prototype&&n.prototype.isPureReactComponent?!kr(a,r)||!kr(u,f):!0}function M0(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Gu.enqueueReplaceState(n,n.state,null)}function ms(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function E0(e){tl(e)}function T0(e){console.error(e)}function A0(e){tl(e)}function El(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function R0(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ju(e,n,a){return a=Ea(a),a.tag=3,a.payload={element:null},a.callback=function(){El(e,n)},a}function C0(e){return e=Ea(e),e.tag=3,e}function w0(e,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;e.payload=function(){return u(f)},e.callback=function(){R0(n,a,r)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){R0(n,a,r),typeof u!="function"&&(Na===null?Na=new Set([this]):Na.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})})}function rv(e,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Vs(n,a,u,!0),a=Kn.current,a!==null){switch(a.tag){case 31:case 13:return ui===null?Pl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===fl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),mf(e,r,u)),!1;case 22:return a.flags|=65536,r===fl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),mf(e,r,u)),!1}throw Error(s(435,a.tag))}return mf(e,r,u),Pl(),!1}if(Mt)return n=Kn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==lu&&(e=Error(s(422),{cause:r}),Wr(ri(e,a)))):(r!==lu&&(n=Error(s(423),{cause:r}),Wr(ri(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,r=ri(r,a),u=ju(e.stateNode,r,u),vu(e,u),en!==4&&(en=2)),!1;var f=Error(s(520),{cause:r});if(f=ri(f,a),ho===null?ho=[f]:ho.push(f),en!==4&&(en=2),n===null)return!0;r=ri(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ju(a.stateNode,r,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Na===null||!Na.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=C0(u),w0(u,e,a,r),vu(a,u),!1}a=a.return}while(a!==null);return!1}var ku=Error(s(461)),un=!1;function Rn(e,n,a,r){n.child=e===null?Lp(n,null,a,r):hs(n,e.child,a,r)}function D0(e,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var v={};for(var A in r)A!=="ref"&&(v[A]=r[A])}else v=r;return cs(n),r=Tu(e,n,a,v,f,u),A=Au(),e!==null&&!un?(Ru(e,n,u),Yi(e,n,u)):(Mt&&A&&ru(n),n.flags|=1,Rn(e,n,r,u),n.child)}function N0(e,n,a,r,u){if(e===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,U0(e,n,f,r,u)):(e=sl(a.type,null,r,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ju(e,u)){var v=f.memoizedProps;if(a=a.compare,a=a!==null?a:kr,a(v,r)&&e.ref===n.ref)return Yi(e,n,u)}return n.flags|=1,e=Gi(f,r),e.ref=n.ref,e.return=n,n.child=e}function U0(e,n,a,r,u){if(e!==null){var f=e.memoizedProps;if(kr(f,r)&&e.ref===n.ref)if(un=!1,n.pendingProps=r=f,Ju(e,u))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,Yi(e,n,u)}return Xu(e,n,a,r,u)}function L0(e,n,a,r){var u=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return O0(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&cl(n,f!==null?f.cachePool:null),f!==null?Pp(n,f):yu(),Ip(n);else return r=n.lanes=536870912,O0(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(cl(n,f.cachePool),Pp(n,f),Ra(),n.memoizedState=null):(e!==null&&cl(n,null),yu(),Ra());return Rn(e,n,u,a),n.child}function so(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function O0(e,n,a,r,u){var f=mu();return f=f===null?null:{parent:ln._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&cl(n,null),yu(),Ip(n),e!==null&&Vs(e,n,r,!0),n.childLanes=u,null}function Tl(e,n){return n=Rl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function z0(e,n,a){return hs(n,e.child,null,a),e=Tl(n,n.pendingProps),e.flags|=2,Qn(n),n.memoizedState=null,e}function ov(e,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Mt){if(r.mode==="hidden")return e=Tl(n,r),n.lanes=536870912,so(null,e);if(Mu(n),(e=Kt)?(e=Wm(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=_p(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw ya(n);return n.lanes=536870912,null}return Tl(n,r)}var f=e.memoizedState;if(f!==null){var v=f.dehydrated;if(Mu(n),u)if(n.flags&256)n.flags&=-257,n=z0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||Vs(e,n,a,!1),u=(a&e.childLanes)!==0,un||u){if(r=qt,r!==null&&(v=Lr(r,a),v!==0&&v!==f.retryLane))throw f.retryLane=v,ss(e,v),Gn(r,e,v),ku;Pl(),n=z0(e,n,a)}else e=f.treeContext,Kt=fi(v.nextSibling),Tn=n,Mt=!0,ba=null,ci=!1,e!==null&&yp(n,e),n=Tl(n,r),n.flags|=4096;return n}return e=Gi(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Al(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Xu(e,n,a,r,u){return cs(n),a=Tu(e,n,a,r,void 0,u),r=Au(),e!==null&&!un?(Ru(e,n,u),Yi(e,n,u)):(Mt&&r&&ru(n),n.flags|=1,Rn(e,n,a,u),n.child)}function P0(e,n,a,r,u,f){return cs(n),n.updateQueue=null,a=Bp(n,r,a,u),Fp(e),r=Au(),e!==null&&!un?(Ru(e,n,f),Yi(e,n,f)):(Mt&&r&&ru(n),n.flags|=1,Rn(e,n,a,f),n.child)}function I0(e,n,a,r,u){if(cs(n),n.stateNode===null){var f=Is,v=a.contextType;typeof v=="object"&&v!==null&&(f=An(v)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Gu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},gu(n),v=a.contextType,f.context=typeof v=="object"&&v!==null?An(v):Is,f.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(Vu(n,a,v,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(v=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),v!==f.state&&Gu.enqueueReplaceState(f,f.state,null),eo(n,r,f,u),$r(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,G=ms(a,A);f.props=G;var oe=f.context,xe=a.contextType;v=Is,typeof xe=="object"&&xe!==null&&(v=An(xe));var ve=a.getDerivedStateFromProps;xe=typeof ve=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,xe||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||oe!==v)&&M0(n,f,r,v),Ma=!1;var ce=n.memoizedState;f.state=ce,eo(n,r,f,u),$r(),oe=n.memoizedState,A||ce!==oe||Ma?(typeof ve=="function"&&(Vu(n,a,ve,r),oe=n.memoizedState),(G=Ma||S0(n,a,G,r,ce,oe,v))?(xe||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=oe),f.props=r,f.state=oe,f.context=v,r=G):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,_u(e,n),v=n.memoizedProps,xe=ms(a,v),f.props=xe,ve=n.pendingProps,ce=f.context,oe=a.contextType,G=Is,typeof oe=="object"&&oe!==null&&(G=An(oe)),A=a.getDerivedStateFromProps,(oe=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v!==ve||ce!==G)&&M0(n,f,r,G),Ma=!1,ce=n.memoizedState,f.state=ce,eo(n,r,f,u),$r();var fe=n.memoizedState;v!==ve||ce!==fe||Ma||e!==null&&e.dependencies!==null&&ol(e.dependencies)?(typeof A=="function"&&(Vu(n,a,A,r),fe=n.memoizedState),(xe=Ma||S0(n,a,xe,r,ce,fe,G)||e!==null&&e.dependencies!==null&&ol(e.dependencies))?(oe||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,fe,G),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,fe,G)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=fe),f.props=r,f.state=fe,f.context=G,r=xe):(typeof f.componentDidUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&ce===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,Al(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=hs(n,e.child,null,u),n.child=hs(n,null,a,u)):Rn(e,n,a,u),n.memoizedState=f.state,e=n.child):e=Yi(e,n,u),e}function F0(e,n,a,r){return os(),n.flags|=256,Rn(e,n,a,r),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(e){return{baseLanes:e,cachePool:Rp()}}function Yu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=$n),e}function B0(e,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,v;if((v=f)||(v=e!==null&&e.memoizedState===null?!1:(nn.current&2)!==0),v&&(u=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(Mt){if(u?Aa(n):Ra(),(e=Kt)?(e=Wm(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Ai,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=_p(e),a.return=n,n.child=a,Tn=n,Kt=null)):e=null,e===null)throw ya(n);return Nf(e)?n.lanes=32:n.lanes=536870912,null}var A=r.children;return r=r.fallback,u?(Ra(),u=n.mode,A=Rl({mode:"hidden",children:A},u),r=rs(r,u,a,null),A.return=n,r.return=n,A.sibling=r,n.child=A,r=n.child,r.memoizedState=Wu(a),r.childLanes=Yu(e,v,a),n.memoizedState=qu,so(null,r)):(Aa(n),Zu(n,A))}var G=e.memoizedState;if(G!==null&&(A=G.dehydrated,A!==null)){if(f)n.flags&256?(Aa(n),n.flags&=-257,n=Ku(e,n,a)):n.memoizedState!==null?(Ra(),n.child=e.child,n.flags|=128,n=null):(Ra(),A=r.fallback,u=n.mode,r=Rl({mode:"visible",children:r.children},u),A=rs(A,u,a,null),A.flags|=2,r.return=n,A.return=n,r.sibling=A,n.child=r,hs(n,e.child,null,a),r=n.child,r.memoizedState=Wu(a),r.childLanes=Yu(e,v,a),n.memoizedState=qu,n=so(null,r));else if(Aa(n),Nf(A)){if(v=A.nextSibling&&A.nextSibling.dataset,v)var oe=v.dgst;v=oe,r=Error(s(419)),r.stack="",r.digest=v,Wr({value:r,source:null,stack:null}),n=Ku(e,n,a)}else if(un||Vs(e,n,a,!1),v=(a&e.childLanes)!==0,un||v){if(v=qt,v!==null&&(r=Lr(v,a),r!==0&&r!==G.retryLane))throw G.retryLane=r,ss(e,r),Gn(v,e,r),ku;Df(A)||Pl(),n=Ku(e,n,a)}else Df(A)?(n.flags|=192,n.child=e.child,n=null):(e=G.treeContext,Kt=fi(A.nextSibling),Tn=n,Mt=!0,ba=null,ci=!1,e!==null&&yp(n,e),n=Zu(n,r.children),n.flags|=4096);return n}return u?(Ra(),A=r.fallback,u=n.mode,G=e.child,oe=G.sibling,r=Gi(G,{mode:"hidden",children:r.children}),r.subtreeFlags=G.subtreeFlags&65011712,oe!==null?A=Gi(oe,A):(A=rs(A,u,a,null),A.flags|=2),A.return=n,r.return=n,r.sibling=A,n.child=r,so(null,r),r=n.child,A=e.child.memoizedState,A===null?A=Wu(a):(u=A.cachePool,u!==null?(G=ln._currentValue,u=u.parent!==G?{parent:G,pool:G}:u):u=Rp(),A={baseLanes:A.baseLanes|a,cachePool:u}),r.memoizedState=A,r.childLanes=Yu(e,v,a),n.memoizedState=qu,so(e.child,r)):(Aa(n),a=e.child,e=a.sibling,a=Gi(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=Rl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Rl(e,n){return e=Zn(22,e,null,n),e.lanes=0,e}function Ku(e,n,a){return hs(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function H0(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),fu(e.return,n,a)}function Qu(e,n,a,r,u,f){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=r,v.tail=a,v.tailMode=u,v.treeForkCount=f)}function V0(e,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var v=nn.current,A=(v&2)!==0;if(A?(v=v&1|2,n.flags|=128):v&=1,me(nn,v),Rn(e,n,r,a),r=Mt?qr:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&H0(e,a,n);else if(e.tag===19)H0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)e=a.alternate,e!==null&&ml(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Qu(n,!1,u,a,f,r);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&ml(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Qu(n,!0,a,null,f,r);break;case"together":Qu(n,!1,null,null,void 0,r);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Da|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Vs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Gi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Gi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ol(e)))}function lv(e,n,a){switch(n.tag){case 3:De(n,n.stateNode.containerInfo),Sa(n,ln,e.memoizedState.cache),os();break;case 27:case 5:je(n);break;case 4:De(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var r=n.memoizedState;if(r!==null)return r.dehydrated!==null?(Aa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?B0(e,n,a):(Aa(n),e=Yi(e,n,a),e!==null?e.sibling:null);Aa(n);break;case 19:var u=(e.flags&128)!==0;if(r=(a&n.childLanes)!==0,r||(Vs(e,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return V0(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),me(nn,nn.current),r)break;return null;case 22:return n.lanes=0,L0(e,n,a,n.pendingProps);case 24:Sa(n,ln,e.memoizedState.cache)}return Yi(e,n,a)}function G0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Ju(e,a)&&(n.flags&128)===0)return un=!1,lv(e,n,a);un=(e.flags&131072)!==0}else un=!1,Mt&&(n.flags&1048576)!==0&&bp(n,qr,n.index);switch(n.lanes=0,n.tag){case 16:e:{var r=n.pendingProps;if(e=fs(n.elementType),n.type=e,typeof e=="function")iu(e)?(r=ms(e,r),n.tag=1,n=I0(null,n,e,r,a)):(n.tag=0,n=Xu(null,n,e,r,a));else{if(e!=null){var u=e.$$typeof;if(u===F){n.tag=11,n=D0(null,n,e,r,a);break e}else if(u===B){n.tag=14,n=N0(null,n,e,r,a);break e}}throw n=Z(e)||e,Error(s(306,n,""))}}return n;case 0:return Xu(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=ms(r,n.pendingProps),I0(e,n,r,u,a);case 3:e:{if(De(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,_u(e,n),eo(n,r,null,a);var v=n.memoizedState;if(r=v.cache,Sa(n,ln,r),r!==f.cache&&du(n,[ln],a,!0),$r(),r=v.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=F0(e,n,r,a);break e}else if(r!==u){u=ri(Error(s(424)),n),Wr(u),n=F0(e,n,r,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=fi(e.firstChild),Tn=n,Mt=!0,ba=null,ci=!0,a=Lp(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(os(),r===u){n=Yi(e,n,a);break e}Rn(e,n,r,a)}n=n.child}return n;case 26:return Al(e,n),e===null?(a=$m(n.type,null,n.pendingProps,null))?n.memoizedState=a:Mt||(a=n.type,e=n.pendingProps,r=jl(ae.current).createElement(a),r[on]=n,r[pn]=e,Cn(r,a,e),le(r),n.stateNode=r):n.memoizedState=$m(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return je(n),e===null&&Mt&&(r=n.stateNode=Km(n.type,n.pendingProps,ae.current),Tn=n,ci=!0,u=Kt,za(n.type)?(Uf=u,Kt=fi(r.firstChild)):Kt=u),Rn(e,n,n.pendingProps.children,a),Al(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Mt&&((u=r=Kt)&&(r=Fv(r,n.type,n.pendingProps,ci),r!==null?(n.stateNode=r,Tn=n,Kt=fi(r.firstChild),ci=!1,u=!0):u=!1),u||ya(n)),je(n),u=n.type,f=n.pendingProps,v=e!==null?e.memoizedProps:null,r=f.children,Rf(u,f)?r=null:v!==null&&Rf(u,v)&&(n.flags|=32),n.memoizedState!==null&&(u=Tu(e,n,$_,null,null,a),yo._currentValue=u),Al(e,n),Rn(e,n,r,a),n.child;case 6:return e===null&&Mt&&((e=a=Kt)&&(a=Bv(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,Kt=null,e=!0):e=!1),e||ya(n)),null;case 13:return B0(e,n,a);case 4:return De(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=hs(n,null,r,a):Rn(e,n,r,a),n.child;case 11:return D0(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return r=n.pendingProps,Sa(n,n.type,r.value),Rn(e,n,r.children,a),n.child;case 9:return u=n.type._context,r=n.pendingProps.children,cs(n),u=An(u),r=r(u),n.flags|=1,Rn(e,n,r,a),n.child;case 14:return N0(e,n,n.type,n.pendingProps,a);case 15:return U0(e,n,n.type,n.pendingProps,a);case 19:return V0(e,n,a);case 31:return ov(e,n,a);case 22:return L0(e,n,a,n.pendingProps);case 24:return cs(n),r=An(ln),e===null?(u=mu(),u===null&&(u=qt,f=hu(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},gu(n),Sa(n,ln,u)):((e.lanes&a)!==0&&(_u(e,n),eo(n,null,null,a),$r()),u=e.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Sa(n,ln,r)):(r=f.cache,Sa(n,ln,r),r!==u.cache&&du(n,[ln],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Zi(e){e.flags|=4}function $u(e,n,a,r,u){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(mm())e.flags|=8192;else throw ds=fl,xu}else e.flags&=-16777217}function j0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ax(n))if(mm())e.flags|=8192;else throw ds=fl,xu}function Cl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,$s|=n)}function ro(e,n){if(!Mt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&65011712,r|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function cv(e,n,a){var r=n.pendingProps;switch(ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),Xi(ln),Be(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Hs(n)?Zi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cu())),Qt(n),null;case 26:var u=n.type,f=n.memoizedState;return e===null?(Zi(n),f!==null?(Qt(n),j0(n,f)):(Qt(n),$u(n,u,null,r,a))):f?f!==e.memoizedState?(Zi(n),Qt(n),j0(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Zi(n),Qt(n),$u(n,u,e,r,a)),null;case 27:if(ot(n),a=ae.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}e=ye.current,Hs(n)?Sp(n):(e=Km(u,r,a),n.stateNode=e,Zi(n))}return Qt(n),null;case 5:if(ot(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Qt(n),null}if(f=ye.current,Hs(n))Sp(n);else{var v=jl(ae.current);switch(f){case 1:f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=v.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=v.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=v.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?v.createElement("select",{is:r.is}):v.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?v.createElement(u,{is:r.is}):v.createElement(u)}}f[on]=n,f[pn]=r;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)f.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=f;e:switch(Cn(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&Zi(n)}}return Qt(n),$u(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Zi(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=ae.current,Hs(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,u=Tn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}e[on]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Bm(e.nodeValue,a)),e||ya(n,!0)}else e=jl(e).createTextNode(r),e[on]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Hs(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[on]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Qn(n),n):(Qn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Qt(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Hs(n),r!==null&&r.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[on]=n}else os(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),u=!1}else u=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Qn(n),n):(Qn(n),null)}return Qn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Cl(n,n.updateQueue),Qt(n),null);case 4:return Be(),e===null&&Sf(n.stateNode.containerInfo),Qt(n),null;case 10:return Xi(n.type),Qt(n),null;case 19:if(K(nn),r=n.memoizedState,r===null)return Qt(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)ro(r,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ml(e),f!==null){for(n.flags|=128,ro(r,!1),e=f.updateQueue,n.updateQueue=e,Cl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)gp(a,e),a=a.sibling;return me(nn,nn.current&1|2),Mt&&ji(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&T()>Ll&&(n.flags|=128,u=!0,ro(r,!1),n.lanes=4194304)}else{if(!u)if(e=ml(f),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Cl(n,e),ro(r,!0),r.tail===null&&r.tailMode==="hidden"&&!f.alternate&&!Mt)return Qt(n),null}else 2*T()-r.renderingStartTime>Ll&&a!==536870912&&(n.flags|=128,u=!0,ro(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}return r.tail!==null?(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=T(),e.sibling=null,a=nn.current,me(nn,u?a&1|2:a&1),Mt&&ji(n,r.treeForkCount),e):(Qt(n),null);case 22:case 23:return Qn(n),Su(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&Cl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&K(us),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Xi(ln),Qt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function uv(e,n){switch(ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Xi(ln),Be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ot(n),null;case 31:if(n.memoizedState!==null){if(Qn(n),n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Qn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));os()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return K(nn),null;case 4:return Be(),null;case 10:return Xi(n.type),null;case 22:case 23:return Qn(n),Su(),e!==null&&K(us),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Xi(ln),null;case 25:return null;default:return null}}function k0(e,n){switch(ou(n),n.tag){case 3:Xi(ln),Be();break;case 26:case 27:case 5:ot(n);break;case 4:Be();break;case 31:n.memoizedState!==null&&Qn(n);break;case 13:Qn(n);break;case 19:K(nn);break;case 10:Xi(n.type);break;case 22:case 23:Qn(n),Su(),e!==null&&K(us);break;case 24:Xi(ln)}}function oo(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&e)===e){r=void 0;var f=a.create,v=a.inst;r=f(),v.destroy=r}a=a.next}while(a!==u)}}catch(A){Ft(n,n.return,A)}}function Ca(e,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&e)===e){var v=r.inst,A=v.destroy;if(A!==void 0){v.destroy=void 0,u=n;var G=a,oe=A;try{oe()}catch(xe){Ft(u,G,xe)}}}r=r.next}while(r!==f)}}catch(xe){Ft(n,n.return,xe)}}function X0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{zp(n,a)}catch(r){Ft(e,e.return,r)}}}function q0(e,n,a){a.props=ms(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Ft(e,n,r)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(u){Ft(e,n,u)}}function Ci(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ft(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ft(e,n,u)}else a.current=null}function W0(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break e;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ft(e,e.return,u)}}function ef(e,n,a){try{var r=e.stateNode;Uv(r,e.type,a,n),r[pn]=n}catch(u){Ft(e,e.return,u)}}function Y0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&za(e.type)||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Y0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Hi));else if(r!==4&&(r===27&&za(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nf(e,n,a),e=e.sibling;e!==null;)nf(e,n,a),e=e.sibling}function wl(e,n,a){var r=e.tag;if(r===5||r===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(r!==4&&(r===27&&za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(wl(e,n,a),e=e.sibling;e!==null;)wl(e,n,a),e=e.sibling}function Z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Cn(n,r,a),n[on]=e,n[pn]=a}catch(f){Ft(e,e.return,f)}}var Ki=!1,fn=!1,af=!1,K0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function fv(e,n){if(e=e.containerInfo,Tf=Kl,e=lp(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var r=a.getSelection&&a.getSelection();if(r&&r.rangeCount!==0){a=r.anchorNode;var u=r.anchorOffset,f=r.focusNode;r=r.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var v=0,A=-1,G=-1,oe=0,xe=0,ve=e,ce=null;t:for(;;){for(var fe;ve!==a||u!==0&&ve.nodeType!==3||(A=v+u),ve!==f||r!==0&&ve.nodeType!==3||(G=v+r),ve.nodeType===3&&(v+=ve.nodeValue.length),(fe=ve.firstChild)!==null;)ce=ve,ve=fe;for(;;){if(ve===e)break t;if(ce===a&&++oe===u&&(A=v),ce===f&&++xe===r&&(G=v),(fe=ve.nextSibling)!==null)break;ve=ce,ce=ve.parentNode}ve=fe}a=A===-1||G===-1?null:{start:A,end:G}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},Kl=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,r=a.stateNode;try{var He=ms(a.type,u);e=r.getSnapshotBeforeUpdate(He,f),r.__reactInternalSnapshotBeforeUpdate=e}catch(et){Ft(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function Q0(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ji(e,a),r&4&&oo(5,a);break;case 1:if(Ji(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Ft(a,a.return,v)}else{var u=ms(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Ft(a,a.return,v)}}r&64&&X0(a),r&512&&lo(a,a.return);break;case 3:if(Ji(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{zp(e,n)}catch(v){Ft(a,a.return,v)}}break;case 27:n===null&&r&4&&Z0(a);case 26:case 5:Ji(e,a),n===null&&r&4&&W0(a),r&512&&lo(a,a.return);break;case 12:Ji(e,a);break;case 31:Ji(e,a),r&4&&em(e,a);break;case 13:Ji(e,a),r&4&&tm(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=bv.bind(null,a),Hv(e,a))));break;case 22:if(r=a.memoizedState!==null||Ki,!r){n=n!==null&&n.memoizedState!==null||fn,u=Ki;var f=fn;Ki=r,(fn=n)&&!f?$i(e,a,(a.subtreeFlags&8772)!==0):Ji(e,a),Ki=u,fn=f}break;case 30:break;default:Ji(e,a)}}function J0(e){var n=e.alternate;n!==null&&(e.alternate=null,J0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Pr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Fn=!1;function Qi(e,n,a){for(a=a.child;a!==null;)$0(e,n,a),a=a.sibling}function $0(e,n,a){if(Te&&typeof Te.onCommitFiberUnmount=="function")try{Te.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:fn||Ci(a,n),Qi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:fn||Ci(a,n);var r=Jt,u=Fn;za(a.type)&&(Jt=a.stateNode,Fn=!1),Qi(e,n,a),_o(a.stateNode),Jt=r,Fn=u;break;case 5:fn||Ci(a,n);case 6:if(r=Jt,u=Fn,Jt=null,Qi(e,n,a),Jt=r,Fn=u,Jt!==null)if(Fn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Ft(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Ft(a,n,f)}break;case 18:Jt!==null&&(Fn?(e=Jt,Xm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),or(e)):Xm(Jt,a.stateNode));break;case 4:r=Jt,u=Fn,Jt=a.stateNode.containerInfo,Fn=!0,Qi(e,n,a),Jt=r,Fn=u;break;case 0:case 11:case 14:case 15:Ca(2,a,n),fn||Ca(4,a,n),Qi(e,n,a);break;case 1:fn||(Ci(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&q0(a,n,r)),Qi(e,n,a);break;case 21:Qi(e,n,a);break;case 22:fn=(r=fn)||a.memoizedState!==null,Qi(e,n,a),fn=r;break;default:Qi(e,n,a)}}function em(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{or(e)}catch(a){Ft(n,n.return,a)}}}function tm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{or(e)}catch(a){Ft(n,n.return,a)}}function dv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new K0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new K0),n;default:throw Error(s(435,e.tag))}}function Dl(e,n){var a=dv(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=yv.bind(null,e,r);r.then(u,u)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r],f=e,v=n,A=v;e:for(;A!==null;){switch(A.tag){case 27:if(za(A.type)){Jt=A.stateNode,Fn=!1;break e}break;case 5:Jt=A.stateNode,Fn=!1;break e;case 3:case 4:Jt=A.stateNode.containerInfo,Fn=!0;break e}A=A.return}if(Jt===null)throw Error(s(160));$0(f,v,u),Jt=null,Fn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)nm(n,e),n=n.sibling}var _i=null;function nm(e,n){var a=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Hn(e),r&4&&(Ca(3,e,e.return),oo(3,e),Ca(5,e,e.return));break;case 1:Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),r&64&&Ki&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?r:a.concat(r))));break;case 26:var u=_i;if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),r&4){var f=a!==null?a.memoizedState:null;if(r=e.memoizedState,a===null)if(r===null)if(e.stateNode===null){e:{r=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(r){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ts]||f[on]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(r),u.head.insertBefore(f,u.querySelector("head > title"))),Cn(f,r,a),f[on]=e,le(f),r=f;break e;case"link":var v=nx("link","href",u).get(r+(a.href||""));if(v){for(var A=0;A<v.length;A++)if(f=v[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){v.splice(A,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;case"meta":if(v=nx("meta","content",u).get(r+(a.content||""))){for(A=0;A<v.length;A++)if(f=v[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){v.splice(A,1);break t}}f=u.createElement(r),Cn(f,r,a),u.head.appendChild(f);break;default:throw Error(s(468,r))}f[on]=e,le(f),r=f}e.stateNode=r}else ix(u,e.type,e.stateNode);else e.stateNode=tx(u,r,e.memoizedProps);else f!==r?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,r===null?ix(u,e.type,e.stateNode):tx(u,r,e.memoizedProps)):r===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),a!==null&&r&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Hn(e),r&512&&(fn||a===null||Ci(a,a.return)),e.flags&32){u=e.stateNode;try{Ti(u,"")}catch(He){Ft(e,e.return,He)}}r&4&&e.stateNode!=null&&(u=e.memoizedProps,ef(e,u,a!==null?a.memoizedProps:u)),r&1024&&(af=!0);break;case 6:if(Bn(n,e),Hn(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,a=e.stateNode;try{a.nodeValue=r}catch(He){Ft(e,e.return,He)}}break;case 3:if(ql=null,u=_i,_i=kl(n.containerInfo),Bn(n,e),_i=u,Hn(e),r&4&&a!==null&&a.memoizedState.isDehydrated)try{or(n.containerInfo)}catch(He){Ft(e,e.return,He)}af&&(af=!1,im(e));break;case 4:r=_i,_i=kl(e.stateNode.containerInfo),Bn(n,e),Hn(e),_i=r;break;case 12:Bn(n,e),Hn(e);break;case 31:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 13:Bn(n,e),Hn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Ul=T()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 22:u=e.memoizedState!==null;var G=a!==null&&a.memoizedState!==null,oe=Ki,xe=fn;if(Ki=oe||u,fn=xe||G,Bn(n,e),fn=xe,Ki=oe,Hn(e),r&8192)e:for(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||G||Ki||fn||xs(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){G=a=n;try{if(f=G.stateNode,u)v=f.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{A=G.stateNode;var ve=G.memoizedProps.style,ce=ve!=null&&ve.hasOwnProperty("display")?ve.display:null;A.style.display=ce==null||typeof ce=="boolean"?"":(""+ce).trim()}}catch(He){Ft(G,G.return,He)}}}else if(n.tag===6){if(a===null){G=n;try{G.stateNode.nodeValue=u?"":G.memoizedProps}catch(He){Ft(G,G.return,He)}}}else if(n.tag===18){if(a===null){G=n;try{var fe=G.stateNode;u?qm(fe,!0):qm(G.stateNode,!1)}catch(He){Ft(G,G.return,He)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}r&4&&(r=e.updateQueue,r!==null&&(a=r.retryQueue,a!==null&&(r.retryQueue=null,Dl(e,a))));break;case 19:Bn(n,e),Hn(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,Dl(e,r)));break;case 30:break;case 21:break;default:Bn(n,e),Hn(e)}}function Hn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(Y0(r)){a=r;break}r=r.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=tf(e);wl(e,f,u);break;case 5:var v=a.stateNode;a.flags&32&&(Ti(v,""),a.flags&=-33);var A=tf(e);wl(e,A,v);break;case 3:case 4:var G=a.stateNode.containerInfo,oe=tf(e);nf(e,oe,G);break;default:throw Error(s(161))}}catch(xe){Ft(e,e.return,xe)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function im(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;im(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Q0(e,n.alternate,n),n=n.sibling}function xs(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ca(4,n,n.return),xs(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&q0(n,n.return,a),xs(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),xs(n);break;case 22:n.memoizedState===null&&xs(n);break;case 30:xs(n);break;default:xs(n)}e=e.sibling}}function $i(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var r=n.alternate,u=e,f=n,v=f.flags;switch(f.tag){case 0:case 11:case 15:$i(u,f,a),oo(4,f);break;case 1:if($i(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(oe){Ft(r,r.return,oe)}if(r=f,u=r.updateQueue,u!==null){var A=r.stateNode;try{var G=u.shared.hiddenCallbacks;if(G!==null)for(u.shared.hiddenCallbacks=null,u=0;u<G.length;u++)Op(G[u],A)}catch(oe){Ft(r,r.return,oe)}}a&&v&64&&X0(f),lo(f,f.return);break;case 27:Z0(f);case 26:case 5:$i(u,f,a),a&&r===null&&v&4&&W0(f),lo(f,f.return);break;case 12:$i(u,f,a);break;case 31:$i(u,f,a),a&&v&4&&em(u,f);break;case 13:$i(u,f,a),a&&v&4&&tm(u,f);break;case 22:f.memoizedState===null&&$i(u,f,a),lo(f,f.return);break;case 30:break;default:$i(u,f,a)}n=n.sibling}}function sf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yr(a))}function rf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e))}function vi(e,n,a,r){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)am(e,n,a,r),n=n.sibling}function am(e,n,a,r){var u=n.flags;switch(n.tag){case 0:case 11:case 15:vi(e,n,a,r),u&2048&&oo(9,n);break;case 1:vi(e,n,a,r);break;case 3:vi(e,n,a,r),u&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Yr(e)));break;case 12:if(u&2048){vi(e,n,a,r),e=n.stateNode;try{var f=n.memoizedProps,v=f.id,A=f.onPostCommit;typeof A=="function"&&A(v,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Ft(n,n.return,G)}}else vi(e,n,a,r);break;case 31:vi(e,n,a,r);break;case 13:vi(e,n,a,r);break;case 23:break;case 22:f=n.stateNode,v=n.alternate,n.memoizedState!==null?f._visibility&2?vi(e,n,a,r):co(e,n):f._visibility&2?vi(e,n,a,r):(f._visibility|=2,Ks(e,n,a,r,(n.subtreeFlags&10256)!==0||!1)),u&2048&&sf(v,n);break;case 24:vi(e,n,a,r),u&2048&&rf(n.alternate,n);break;default:vi(e,n,a,r)}}function Ks(e,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,v=n,A=a,G=r,oe=v.flags;switch(v.tag){case 0:case 11:case 15:Ks(f,v,A,G,u),oo(8,v);break;case 23:break;case 22:var xe=v.stateNode;v.memoizedState!==null?xe._visibility&2?Ks(f,v,A,G,u):co(f,v):(xe._visibility|=2,Ks(f,v,A,G,u)),u&&oe&2048&&sf(v.alternate,v);break;case 24:Ks(f,v,A,G,u),u&&oe&2048&&rf(v.alternate,v);break;default:Ks(f,v,A,G,u)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,u=r.flags;switch(r.tag){case 22:co(a,r),u&2048&&sf(r.alternate,r);break;case 24:co(a,r),u&2048&&rf(r.alternate,r);break;default:co(a,r)}n=n.sibling}}var uo=8192;function Qs(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)sm(e,n,a),e=e.sibling}function sm(e,n,a){switch(e.tag){case 26:Qs(e,n,a),e.flags&uo&&e.memoizedState!==null&&Jv(a,_i,e.memoizedState,e.memoizedProps);break;case 5:Qs(e,n,a);break;case 3:case 4:var r=_i;_i=kl(e.stateNode.containerInfo),Qs(e,n,a),_i=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=uo,uo=16777216,Qs(e,n,a),uo=r):Qs(e,n,a));break;default:Qs(e,n,a)}}function rm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,lm(r,e)}rm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)om(e),e=e.sibling}function om(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Ca(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Nl(e)):fo(e);break;default:fo(e)}}function Nl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Sn=r,lm(r,e)}rm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ca(8,n,n.return),Nl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Nl(n));break;default:Nl(n)}e=e.sibling}}function lm(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ca(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Yr(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Sn=r;else e:for(a=e;Sn!==null;){r=Sn;var u=r.sibling,f=r.return;if(J0(r),r===a){Sn=null;break e}if(u!==null){u.return=f,Sn=u;break e}Sn=f}}}var hv={getCacheForType:function(e){var n=An(ln),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(ln).controller.signal}},pv=typeof WeakMap=="function"?WeakMap:Map,Ot=0,qt=null,gt=null,vt=0,It=0,Jn=null,wa=!1,Js=!1,of=!1,ea=0,en=0,Da=0,gs=0,lf=0,$n=0,$s=0,ho=null,Vn=null,cf=!1,Ul=0,cm=0,Ll=1/0,Ol=null,Na=null,xn=0,Ua=null,er=null,ta=0,uf=0,ff=null,um=null,po=0,df=null;function ei(){return(Ot&2)!==0&&vt!==0?vt&-vt:z.T!==null?_f():Or()}function fm(){if($n===0)if((vt&536870912)===0||Mt){var e=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),$n=e}else $n=536870912;return e=Kn.current,e!==null&&(e.flags|=32),$n}function Gn(e,n,a){(e===qt&&(It===2||It===9)||e.cancelPendingCommit!==null)&&(tr(e,0),La(e,vt,$n,!1)),wn(e,a),((Ot&2)===0||e!==qt)&&(e===qt&&((Ot&2)===0&&(gs|=a),en===4&&La(e,vt,$n,!1)),wi(e))}function dm(e,n,a){if((Ot&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ie(e,n),u=r?gv(e,n):pf(e,n,!0),f=r;do{if(u===0){Js&&!r&&La(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!mv(a)){u=pf(e,n,!1),f=!1;continue}if(u===2){if(f=n,e.errorRecoveryDisabledLanes&f)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var A=e;u=ho;var G=A.current.memoizedState.isDehydrated;if(G&&(tr(A,v).flags|=256),v=pf(A,v,!1),v!==2){if(of&&!G){A.errorRecoveryDisabledLanes|=f,gs|=f,u=4;break e}f=Vn,Vn=u,f!==null&&(Vn===null?Vn=f:Vn.push.apply(Vn,f))}u=v}if(f=!1,u!==2)continue}}if(u===1){tr(e,0),La(e,n,0,!0);break}e:{switch(r=e,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:La(r,n,$n,!wa);break e;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Ul+300-T(),10<u)){if(La(r,n,$n,!wa),be(r,0,!0)!==0)break e;ta=n,r.timeoutHandle=jm(hm.bind(null,r,a,Vn,Ol,cf,n,$n,gs,$s,wa,f,"Throttled",-0,0),u);break e}hm(r,a,Vn,Ol,cf,n,$n,gs,$s,wa,f,null,-0,0)}}break}while(!0);wi(e)}function hm(e,n,a,r,u,f,v,A,G,oe,xe,ve,ce,fe){if(e.timeoutHandle=-1,ve=n.subtreeFlags,ve&8192||(ve&16785408)===16785408){ve={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Hi},sm(n,f,ve);var He=(f&62914560)===f?Ul-T():(f&4194048)===f?cm-T():0;if(He=$v(ve,He),He!==null){ta=f,e.cancelPendingCommit=He(ym.bind(null,e,n,f,a,r,u,v,A,G,xe,ve,null,ce,fe)),La(e,f,v,!oe);return}}ym(e,n,f,a,r,u,v,A,G)}function mv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!Yn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function La(e,n,a,r){n&=~lf,n&=~gs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var u=n;0<u;){var f=31-Ge(u),v=1<<f;r[f]=-1,u&=~v}a!==0&&qo(e,a,n)}function zl(){return(Ot&6)===0?(mo(0),!1):!0}function hf(){if(gt!==null){if(It===0)var e=gt.return;else e=gt,ki=ls=null,Cu(e),Xs=null,Kr=0,e=gt;for(;e!==null;)k0(e.alternate,e),e=e.return;gt=null}}function tr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ta=0,hf(),qt=e,gt=a=Gi(e.current,null),vt=n,It=0,Jn=null,wa=!1,Js=Ie(e,n),of=!1,$s=$n=lf=gs=Da=en=0,Vn=ho=null,cf=!1,(n&8)!==0&&(n|=n&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=n;0<r;){var u=31-Ge(r),f=1<<u;n|=e[u],r&=~f}return ea=n,nl(),a}function pm(e,n){lt=null,z.H=ao,n===ks||n===ul?(n=Dp(),It=3):n===xu?(n=Dp(),It=4):It=n===ku?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,gt===null&&(en=1,El(e,ri(n,e.current)))}function mm(){var e=Kn.current;return e===null?!0:(vt&4194048)===vt?ui===null:(vt&62914560)===vt||(vt&536870912)!==0?e===ui:!1}function xm(){var e=z.H;return z.H=ao,e===null?ao:e}function gm(){var e=z.A;return z.A=hv,e}function Pl(){en=4,wa||(vt&4194048)!==vt&&Kn.current!==null||(Js=!0),(Da&134217727)===0&&(gs&134217727)===0||qt===null||La(qt,vt,$n,!1)}function pf(e,n,a){var r=Ot;Ot|=2;var u=xm(),f=gm();(qt!==e||vt!==n)&&(Ol=null,tr(e,n)),n=!1;var v=en;e:do try{if(It!==0&&gt!==null){var A=gt,G=Jn;switch(It){case 8:hf(),v=6;break e;case 3:case 2:case 9:case 6:Kn.current===null&&(n=!0);var oe=It;if(It=0,Jn=null,nr(e,A,G,oe),a&&Js){v=0;break e}break;default:oe=It,It=0,Jn=null,nr(e,A,G,oe)}}xv(),v=en;break}catch(xe){pm(e,xe)}while(!0);return n&&e.shellSuspendCounter++,ki=ls=null,Ot=r,z.H=u,z.A=f,gt===null&&(qt=null,vt=0,nl()),v}function xv(){for(;gt!==null;)_m(gt)}function gv(e,n){var a=Ot;Ot|=2;var r=xm(),u=gm();qt!==e||vt!==n?(Ol=null,Ll=T()+500,tr(e,n)):Js=Ie(e,n);e:do try{if(It!==0&&gt!==null){n=gt;var f=Jn;t:switch(It){case 1:It=0,Jn=null,nr(e,n,f,1);break;case 2:case 9:if(Cp(f)){It=0,Jn=null,vm(n);break}n=function(){It!==2&&It!==9||qt!==e||(It=7),wi(e)},f.then(n,n);break e;case 3:It=7;break e;case 4:It=5;break e;case 7:Cp(f)?(It=0,Jn=null,vm(n)):(It=0,Jn=null,nr(e,n,f,7));break;case 5:var v=null;switch(gt.tag){case 26:v=gt.memoizedState;case 5:case 27:var A=gt;if(v?ax(v):A.stateNode.complete){It=0,Jn=null;var G=A.sibling;if(G!==null)gt=G;else{var oe=A.return;oe!==null?(gt=oe,Il(oe)):gt=null}break t}}It=0,Jn=null,nr(e,n,f,5);break;case 6:It=0,Jn=null,nr(e,n,f,6);break;case 8:hf(),en=6;break e;default:throw Error(s(462))}}_v();break}catch(xe){pm(e,xe)}while(!0);return ki=ls=null,z.H=r,z.A=u,Ot=a,gt!==null?0:(qt=null,vt=0,nl(),en)}function _v(){for(;gt!==null&&!st();)_m(gt)}function _m(e){var n=G0(e.alternate,e,ea);e.memoizedProps=e.pendingProps,n===null?Il(e):gt=n}function vm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=P0(a,n,n.pendingProps,n.type,void 0,vt);break;case 11:n=P0(a,n,n.pendingProps,n.type.render,n.ref,vt);break;case 5:Cu(n);default:k0(a,n),n=gt=gp(n,ea),n=G0(a,n,ea)}e.memoizedProps=e.pendingProps,n===null?Il(e):gt=n}function nr(e,n,a,r){ki=ls=null,Cu(n),Xs=null,Kr=0;var u=n.return;try{if(rv(e,u,n,a,vt)){en=1,El(e,ri(a,e.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;en=1,El(e,ri(a,e.current)),gt=null;return}n.flags&32768?(Mt||r===1?e=!0:Js||(vt&536870912)!==0?e=!1:(wa=e=!0,(r===2||r===9||r===3||r===6)&&(r=Kn.current,r!==null&&r.tag===13&&(r.flags|=16384))),bm(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){bm(n,wa);return}e=n.return;var a=cv(n.alternate,n,ea);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);en===0&&(en=5)}function bm(e,n){do{var a=uv(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);en=6,gt=null}function ym(e,n,a,r,u,f,v,A,G){e.cancelPendingCommit=null;do Fl();while(xn!==0);if((Ot&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=tu,qn(e,a,f,v,A,G),e===qt&&(gt=qt=null,vt=0),er=n,Ua=e,ta=a,uf=f,ff=u,um=r,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sv(pe,function(){return Am(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=z.T,z.T=null,u=q.p,q.p=2,v=Ot,Ot|=4;try{fv(e,n,a)}finally{Ot=v,q.p=u,z.T=r}}xn=1,Sm(),Mm(),Em()}}function Sm(){if(xn===1){xn=0;var e=Ua,n=er,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var r=q.p;q.p=2;var u=Ot;Ot|=4;try{nm(n,e);var f=Af,v=lp(e.containerInfo),A=f.focusedElem,G=f.selectionRange;if(v!==A&&A&&A.ownerDocument&&op(A.ownerDocument.documentElement,A)){if(G!==null&&Kc(A)){var oe=G.start,xe=G.end;if(xe===void 0&&(xe=oe),"selectionStart"in A)A.selectionStart=oe,A.selectionEnd=Math.min(xe,A.value.length);else{var ve=A.ownerDocument||document,ce=ve&&ve.defaultView||window;if(ce.getSelection){var fe=ce.getSelection(),He=A.textContent.length,et=Math.min(G.start,He),Gt=G.end===void 0?et:Math.min(G.end,He);!fe.extend&&et>Gt&&(v=Gt,Gt=et,et=v);var J=rp(A,et),W=rp(A,Gt);if(J&&W&&(fe.rangeCount!==1||fe.anchorNode!==J.node||fe.anchorOffset!==J.offset||fe.focusNode!==W.node||fe.focusOffset!==W.offset)){var se=ve.createRange();se.setStart(J.node,J.offset),fe.removeAllRanges(),et>Gt?(fe.addRange(se),fe.extend(W.node,W.offset)):(se.setEnd(W.node,W.offset),fe.addRange(se))}}}}for(ve=[],fe=A;fe=fe.parentNode;)fe.nodeType===1&&ve.push({element:fe,left:fe.scrollLeft,top:fe.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<ve.length;A++){var ge=ve[A];ge.element.scrollLeft=ge.left,ge.element.scrollTop=ge.top}}Kl=!!Tf,Af=Tf=null}finally{Ot=u,q.p=r,z.T=a}}e.current=n,xn=2}}function Mm(){if(xn===2){xn=0;var e=Ua,n=er,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var r=q.p;q.p=2;var u=Ot;Ot|=4;try{Q0(e,n.alternate,n)}finally{Ot=u,q.p=r,z.T=a}}xn=3}}function Em(){if(xn===4||xn===3){xn=0,I();var e=Ua,n=er,a=ta,r=um;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?xn=5:(xn=0,er=Ua=null,Tm(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Na=null),es(a),n=n.stateNode,Te&&typeof Te.onCommitFiberRoot=="function")try{Te.onCommitFiberRoot(Me,n,void 0,(n.current.flags&128)===128)}catch{}if(r!==null){n=z.T,u=q.p,q.p=2,z.T=null;try{for(var f=e.onRecoverableError,v=0;v<r.length;v++){var A=r[v];f(A.value,{componentStack:A.stack})}}finally{z.T=n,q.p=u}}(ta&3)!==0&&Fl(),wi(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===df?po++:(po=0,df=e):po=0,mo(0)}}function Tm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Yr(n)))}function Fl(){return Sm(),Mm(),Em(),Am()}function Am(){if(xn!==5)return!1;var e=Ua,n=uf;uf=0;var a=es(ta),r=z.T,u=q.p;try{q.p=32>a?32:a,z.T=null,a=ff,ff=null;var f=Ua,v=ta;if(xn=0,er=Ua=null,ta=0,(Ot&6)!==0)throw Error(s(331));var A=Ot;if(Ot|=4,om(f.current),am(f,f.current,v,a),Ot=A,mo(0,!1),Te&&typeof Te.onPostCommitFiberRoot=="function")try{Te.onPostCommitFiberRoot(Me,f)}catch{}return!0}finally{q.p=u,z.T=r,Tm(e,n)}}function Rm(e,n,a){n=ri(a,n),n=ju(e.stateNode,n,2),e=Ta(e,n,2),e!==null&&(wn(e,2),wi(e))}function Ft(e,n,a){if(e.tag===3)Rm(e,e,a);else for(;n!==null;){if(n.tag===3){Rm(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Na===null||!Na.has(r))){e=ri(a,e),a=C0(2),r=Ta(n,a,2),r!==null&&(w0(a,r,n,e),wn(r,2),wi(r));break}}n=n.return}}function mf(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new pv;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(of=!0,u.add(a),e=vv.bind(null,e,n,a),n.then(e,e))}function vv(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,qt===e&&(vt&a)===a&&(en===4||en===3&&(vt&62914560)===vt&&300>T()-Ul?(Ot&2)===0&&tr(e,0):lf|=a,$s===vt&&($s=0)),wi(e)}function Cm(e,n){n===0&&(n=Bt()),e=ss(e,n),e!==null&&(wn(e,n),wi(e))}function bv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Cm(e,a)}function yv(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Cm(e,a)}function Sv(e,n){return kt(e,n)}var Bl=null,ir=null,xf=!1,Hl=!1,gf=!1,Oa=0;function wi(e){e!==ir&&e.next===null&&(ir===null?Bl=ir=e:ir=ir.next=e),Hl=!0,xf||(xf=!0,Ev())}function mo(e,n){if(!gf&&Hl){gf=!0;do for(var a=!1,r=Bl;r!==null;){if(e!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var v=r.suspendedLanes,A=r.pingedLanes;f=(1<<31-Ge(42|e)+1)-1,f&=u&~(v&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Um(r,f))}else f=vt,f=be(r,r===qt?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Ie(r,f)||(a=!0,Um(r,f));r=r.next}while(a);gf=!1}}function Mv(){wm()}function wm(){Hl=xf=!1;var e=0;Oa!==0&&Ov()&&(e=Oa);for(var n=T(),a=null,r=Bl;r!==null;){var u=r.next,f=Dm(r,n);f===0?(r.next=null,a===null?Bl=u:a.next=u,u===null&&(ir=a)):(a=r,(e!==0||(f&3)!==0)&&(Hl=!0)),r=u}xn!==0&&xn!==5||mo(e),Oa!==0&&(Oa=0)}function Dm(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var v=31-Ge(f),A=1<<v,G=u[v];G===-1?((A&a)===0||(A&r)!==0)&&(u[v]=at(A,n)):G<=n&&(e.expiredLanes|=A),f&=~A}if(n=qt,a=vt,a=be(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(It===2||It===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Ye(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ie(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Ye(r),es(a)){case 2:case 8:a=Se;break;case 32:a=pe;break;case 268435456:a=Le;break;default:a=pe}return r=Nm.bind(null,e),a=kt(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Ye(r),e.callbackPriority=2,e.callbackNode=null,2}function Nm(e,n){if(xn!==0&&xn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Fl()&&e.callbackNode!==a)return null;var r=vt;return r=be(e,e===qt?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(dm(e,r,n),Dm(e,T()),e.callbackNode!=null&&e.callbackNode===a?Nm.bind(null,e):null)}function Um(e,n){if(Fl())return null;dm(e,n,!0)}function Ev(){Pv(function(){(Ot&6)!==0?kt(_e,Mv):wm()})}function _f(){if(Oa===0){var e=Gs;e===0&&(e=Ne,Ne<<=1,(Ne&261888)===0&&(Ne=256)),Oa=e}return Oa}function Lm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function Om(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function Tv(e,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Lm((u[pn]||null).action),v=r.submitter;v&&(n=(n=v[pn]||null)?Lm(n.formAction):v.getAttribute("formAction"),n!==null&&(f=n,v=null));var A=new Jo("action","action",null,r,u);e.push({event:A,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Oa!==0){var G=v?Om(u,v):new FormData(u);Iu(a,{pending:!0,data:G,method:u.method,action:f},null,G)}}else typeof f=="function"&&(A.preventDefault(),G=v?Om(u,v):new FormData(u),Iu(a,{pending:!0,data:G,method:u.method,action:f},f,G))},currentTarget:u}]})}}for(var vf=0;vf<eu.length;vf++){var bf=eu[vf],Av=bf.toLowerCase(),Rv=bf[0].toUpperCase()+bf.slice(1);gi(Av,"on"+Rv)}gi(fp,"onAnimationEnd"),gi(dp,"onAnimationIteration"),gi(hp,"onAnimationStart"),gi("dblclick","onDoubleClick"),gi("focusin","onFocus"),gi("focusout","onBlur"),gi(j_,"onTransitionRun"),gi(k_,"onTransitionStart"),gi(X_,"onTransitionCancel"),gi(pp,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function zm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],u=r.event;r=r.listeners;e:{var f=void 0;if(n)for(var v=r.length-1;0<=v;v--){var A=r[v],G=A.instance,oe=A.currentTarget;if(A=A.listener,G!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=oe;try{f(u)}catch(xe){tl(xe)}u.currentTarget=null,f=G}else for(v=0;v<r.length;v++){if(A=r[v],G=A.instance,oe=A.currentTarget,A=A.listener,G!==f&&u.isPropagationStopped())break e;f=A,u.currentTarget=oe;try{f(u)}catch(xe){tl(xe)}u.currentTarget=null,f=G}}}}function _t(e,n){var a=n[Ds];a===void 0&&(a=n[Ds]=new Set);var r=e+"__bubble";a.has(r)||(Pm(n,e,2,!1),a.add(r))}function yf(e,n,a){var r=0;n&&(r|=4),Pm(a,e,r,n)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Sf(e){if(!e[Vl]){e[Vl]=!0,te.forEach(function(a){a!=="selectionchange"&&(Cv.has(a)||yf(a,!1,e),yf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Vl]||(n[Vl]=!0,yf("selectionchange",!1,n))}}function Pm(e,n,a,r){switch(fx(n)){case 2:var u=nb;break;case 8:u=ib;break;default:u=If}a=u.bind(null,n,a,e),u=void 0,!Vc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Mf(e,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)e:for(;;){if(r===null)return;var v=r.tag;if(v===3||v===4){var A=r.stateNode.containerInfo;if(A===u)break;if(v===4)for(v=r.return;v!==null;){var G=v.tag;if((G===3||G===4)&&v.stateNode.containerInfo===u)return;v=v.return}for(;A!==null;){if(v=xa(A),v===null)return;if(G=v.tag,G===5||G===6||G===26||G===27){r=f=v;continue e}A=A.parentNode}}r=r.return}Vh(function(){var oe=f,xe=Bc(a),ve=[];e:{var ce=mp.get(e);if(ce!==void 0){var fe=Jo,He=e;switch(e){case"keypress":if(Ko(a)===0)break e;case"keydown":case"keyup":fe=y_;break;case"focusin":He="focus",fe=Xc;break;case"focusout":He="blur",fe=Xc;break;case"beforeblur":case"afterblur":fe=Xc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":fe=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":fe=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":fe=E_;break;case fp:case dp:case hp:fe=d_;break;case pp:fe=A_;break;case"scroll":case"scrollend":fe=o_;break;case"wheel":fe=C_;break;case"copy":case"cut":case"paste":fe=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":fe=qh;break;case"toggle":case"beforetoggle":fe=D_}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),J=et?ce!==null?ce+"Capture":null:ce;et=[];for(var W=oe,se;W!==null;){var ge=W;if(se=ge.stateNode,ge=ge.tag,ge!==5&&ge!==26&&ge!==27||se===null||J===null||(ge=Ir(W,J),ge!=null&&et.push(go(W,ge,se))),Gt)break;W=W.return}0<et.length&&(ce=new fe(ce,He,null,a,xe),ve.push({event:ce,listeners:et}))}}if((n&7)===0){e:{if(ce=e==="mouseover"||e==="pointerover",fe=e==="mouseout"||e==="pointerout",ce&&a!==Fc&&(He=a.relatedTarget||a.fromElement)&&(xa(He)||He[Ii]))break e;if((fe||ce)&&(ce=xe.window===xe?xe:(ce=xe.ownerDocument)?ce.defaultView||ce.parentWindow:window,fe?(He=a.relatedTarget||a.toElement,fe=oe,He=He?xa(He):null,He!==null&&(Gt=c(He),et=He.tag,He!==Gt||et!==5&&et!==27&&et!==6)&&(He=null)):(fe=null,He=oe),fe!==He)){if(et=kh,ge="onMouseLeave",J="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(et=qh,ge="onPointerLeave",J="onPointerEnter",W="pointer"),Gt=fe==null?ce:Q(fe),se=He==null?ce:Q(He),ce=new et(ge,W+"leave",fe,a,xe),ce.target=Gt,ce.relatedTarget=se,ge=null,xa(xe)===oe&&(et=new et(J,W+"enter",He,a,xe),et.target=se,et.relatedTarget=Gt,ge=et),Gt=ge,fe&&He)t:{for(et=wv,J=fe,W=He,se=0,ge=J;ge;ge=et(ge))se++;ge=0;for(var Ke=W;Ke;Ke=et(Ke))ge++;for(;0<se-ge;)J=et(J),se--;for(;0<ge-se;)W=et(W),ge--;for(;se--;){if(J===W||W!==null&&J===W.alternate){et=J;break t}J=et(J),W=et(W)}et=null}else et=null;fe!==null&&Im(ve,ce,fe,et,!1),He!==null&&Gt!==null&&Im(ve,Gt,He,et,!0)}}e:{if(ce=oe?Q(oe):window,fe=ce.nodeName&&ce.nodeName.toLowerCase(),fe==="select"||fe==="input"&&ce.type==="file")var Dt=ep;else if(Jh(ce))if(tp)Dt=H_;else{Dt=F_;var ke=I_}else fe=ce.nodeName,!fe||fe.toLowerCase()!=="input"||ce.type!=="checkbox"&&ce.type!=="radio"?oe&&Ic(oe.elementType)&&(Dt=ep):Dt=B_;if(Dt&&(Dt=Dt(e,oe))){$h(ve,Dt,a,xe);break e}ke&&ke(e,ce,oe),e==="focusout"&&oe&&ce.type==="number"&&oe.memoizedProps.value!=null&&bn(ce,"number",ce.value)}switch(ke=oe?Q(oe):window,e){case"focusin":(Jh(ke)||ke.contentEditable==="true")&&(Os=ke,Qc=oe,Xr=null);break;case"focusout":Xr=Qc=Os=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,cp(ve,a,xe);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":cp(ve,a,xe)}var ft;if(Wc)e:{switch(e){case"compositionstart":var bt="onCompositionStart";break e;case"compositionend":bt="onCompositionEnd";break e;case"compositionupdate":bt="onCompositionUpdate";break e}bt=void 0}else Ls?Kh(e,a)&&(bt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(bt="onCompositionStart");bt&&(Wh&&a.locale!=="ko"&&(Ls||bt!=="onCompositionStart"?bt==="onCompositionEnd"&&Ls&&(ft=Gh()):(_a=xe,Gc="value"in _a?_a.value:_a.textContent,Ls=!0)),ke=Gl(oe,bt),0<ke.length&&(bt=new Xh(bt,e,null,a,xe),ve.push({event:bt,listeners:ke}),ft?bt.data=ft:(ft=Qh(a),ft!==null&&(bt.data=ft)))),(ft=U_?L_(e,a):O_(e,a))&&(bt=Gl(oe,"onBeforeInput"),0<bt.length&&(ke=new Xh("onBeforeInput","beforeinput",null,a,xe),ve.push({event:ke,listeners:bt}),ke.data=ft)),Tv(ve,e,oe,a,xe)}zm(ve,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Gl(e,n){for(var a=n+"Capture",r=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ir(e,a),u!=null&&r.unshift(go(e,u,f)),u=Ir(e,n),u!=null&&r.push(go(e,u,f))),e.tag===3)return r;e=e.return}return[]}function wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Im(e,n,a,r,u){for(var f=n._reactName,v=[];a!==null&&a!==r;){var A=a,G=A.alternate,oe=A.stateNode;if(A=A.tag,G!==null&&G===r)break;A!==5&&A!==26&&A!==27||oe===null||(G=oe,u?(oe=Ir(a,f),oe!=null&&v.unshift(go(a,oe,G))):u||(oe=Ir(a,f),oe!=null&&v.push(go(a,oe,G)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var Dv=/\r\n?/g,Nv=/\u0000|\uFFFD/g;function Fm(e){return(typeof e=="string"?e:""+e).replace(Dv,`
`).replace(Nv,"")}function Bm(e,n){return n=Fm(n),Fm(e)===n}function Vt(e,n,a,r,u,f){switch(a){case"children":typeof r=="string"?n==="body"||n==="textarea"&&r===""||Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&n!=="body"&&Ti(e,""+r);break;case"className":At(e,"class",r);break;case"tabIndex":At(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":At(e,a,r);break;case"style":Bh(e,r,f);break;case"data":if(n!=="object"){At(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Yo(""+r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(e,n,"name",u.name,u,null),Vt(e,n,"formEncType",u.formEncType,u,null),Vt(e,n,"formMethod",u.formMethod,u,null),Vt(e,n,"formTarget",u.formTarget,u,null)):(Vt(e,n,"encType",u.encType,u,null),Vt(e,n,"method",u.method,u,null),Vt(e,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Yo(""+r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Hi);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""+r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":_t("beforetoggle",e),_t("toggle",e),ut(e,"popover",r);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":ut(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=s_.get(a)||a,ut(e,a,r))}}function Ef(e,n,a,r,u,f){switch(a){case"style":Bh(e,r,f);break;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof r=="string"?Ti(e,r):(typeof r=="number"||typeof r=="bigint")&&Ti(e,""+r);break;case"onScroll":r!=null&&_t("scroll",e);break;case"onScrollEnd":r!=null&&_t("scrollend",e);break;case"onClick":r!=null&&(e.onclick=Hi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Re.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=e[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,u),typeof r=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,r,u);break e}a in e?e[a]=r:r===!0?e.setAttribute(a,""):ut(e,a,r)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":_t("error",e),_t("load",e);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var v=a[f];if(v!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,f,v,a,null)}}u&&Vt(e,n,"srcSet",a.srcSet,a,null),r&&Vt(e,n,"src",a.src,a,null);return;case"input":_t("invalid",e);var A=f=v=u=null,G=null,oe=null;for(r in a)if(a.hasOwnProperty(r)){var xe=a[r];if(xe!=null)switch(r){case"name":u=xe;break;case"type":v=xe;break;case"checked":G=xe;break;case"defaultChecked":oe=xe;break;case"value":f=xe;break;case"defaultValue":A=xe;break;case"children":case"dangerouslySetInnerHTML":if(xe!=null)throw Error(s(137,n));break;default:Vt(e,n,r,xe,a,null)}}Yt(e,f,A,G,oe,v,u,!1);return;case"select":_t("invalid",e),r=v=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":v=A;break;case"multiple":r=A;default:Vt(e,n,u,A,a,null)}n=f,a=v,e.multiple=!!r,n!=null?mn(e,!!r,n,!1):a!=null&&mn(e,!!r,a,!0);return;case"textarea":_t("invalid",e),f=u=r=null;for(v in a)if(a.hasOwnProperty(v)&&(A=a[v],A!=null))switch(v){case"value":r=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(s(91));break;default:Vt(e,n,v,A,a,null)}En(e,r,u,f);return;case"option":for(G in a)if(a.hasOwnProperty(G)&&(r=a[G],r!=null))switch(G){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Vt(e,n,G,r,a,null)}return;case"dialog":_t("beforetoggle",e),_t("toggle",e),_t("cancel",e),_t("close",e);break;case"iframe":case"object":_t("load",e);break;case"video":case"audio":for(r=0;r<xo.length;r++)_t(xo[r],e);break;case"image":_t("error",e),_t("load",e);break;case"details":_t("toggle",e);break;case"embed":case"source":case"link":_t("error",e),_t("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(oe in a)if(a.hasOwnProperty(oe)&&(r=a[oe],r!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(e,n,oe,r,a,null)}return;default:if(Ic(n)){for(xe in a)a.hasOwnProperty(xe)&&(r=a[xe],r!==void 0&&Ef(e,n,xe,r,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(r=a[A],r!=null&&Vt(e,n,A,r,a,null))}function Uv(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,v=null,A=null,G=null,oe=null,xe=null;for(fe in a){var ve=a[fe];if(a.hasOwnProperty(fe)&&ve!=null)switch(fe){case"checked":break;case"value":break;case"defaultValue":G=ve;default:r.hasOwnProperty(fe)||Vt(e,n,fe,null,r,ve)}}for(var ce in r){var fe=r[ce];if(ve=a[ce],r.hasOwnProperty(ce)&&(fe!=null||ve!=null))switch(ce){case"type":f=fe;break;case"name":u=fe;break;case"checked":oe=fe;break;case"defaultChecked":xe=fe;break;case"value":v=fe;break;case"defaultValue":A=fe;break;case"children":case"dangerouslySetInnerHTML":if(fe!=null)throw Error(s(137,n));break;default:fe!==ve&&Vt(e,n,ce,fe,r,ve)}}Fi(e,v,A,G,oe,xe,f,u);return;case"select":fe=v=A=ce=null;for(f in a)if(G=a[f],a.hasOwnProperty(f)&&G!=null)switch(f){case"value":break;case"multiple":fe=G;default:r.hasOwnProperty(f)||Vt(e,n,f,null,r,G)}for(u in r)if(f=r[u],G=a[u],r.hasOwnProperty(u)&&(f!=null||G!=null))switch(u){case"value":ce=f;break;case"defaultValue":A=f;break;case"multiple":v=f;default:f!==G&&Vt(e,n,u,f,r,G)}n=A,a=v,r=fe,ce!=null?mn(e,!!a,ce,!1):!!r!=!!a&&(n!=null?mn(e,!!a,n,!0):mn(e,!!a,a?[]:"",!1));return;case"textarea":fe=ce=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!r.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Vt(e,n,A,null,r,u)}for(v in r)if(u=r[v],f=a[v],r.hasOwnProperty(v)&&(u!=null||f!=null))switch(v){case"value":ce=u;break;case"defaultValue":fe=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(e,n,v,u,r,f)}yn(e,ce,fe);return;case"option":for(var He in a)if(ce=a[He],a.hasOwnProperty(He)&&ce!=null&&!r.hasOwnProperty(He))switch(He){case"selected":e.selected=!1;break;default:Vt(e,n,He,null,r,ce)}for(G in r)if(ce=r[G],fe=a[G],r.hasOwnProperty(G)&&ce!==fe&&(ce!=null||fe!=null))switch(G){case"selected":e.selected=ce&&typeof ce!="function"&&typeof ce!="symbol";break;default:Vt(e,n,G,ce,r,fe)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)ce=a[et],a.hasOwnProperty(et)&&ce!=null&&!r.hasOwnProperty(et)&&Vt(e,n,et,null,r,ce);for(oe in r)if(ce=r[oe],fe=a[oe],r.hasOwnProperty(oe)&&ce!==fe&&(ce!=null||fe!=null))switch(oe){case"children":case"dangerouslySetInnerHTML":if(ce!=null)throw Error(s(137,n));break;default:Vt(e,n,oe,ce,r,fe)}return;default:if(Ic(n)){for(var Gt in a)ce=a[Gt],a.hasOwnProperty(Gt)&&ce!==void 0&&!r.hasOwnProperty(Gt)&&Ef(e,n,Gt,void 0,r,ce);for(xe in r)ce=r[xe],fe=a[xe],!r.hasOwnProperty(xe)||ce===fe||ce===void 0&&fe===void 0||Ef(e,n,xe,ce,r,fe);return}}for(var J in a)ce=a[J],a.hasOwnProperty(J)&&ce!=null&&!r.hasOwnProperty(J)&&Vt(e,n,J,null,r,ce);for(ve in r)ce=r[ve],fe=a[ve],!r.hasOwnProperty(ve)||ce===fe||ce==null&&fe==null||Vt(e,n,ve,ce,r,fe)}function Hm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Lv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,v=u.initiatorType,A=u.duration;if(f&&A&&Hm(v)){for(v=0,A=u.responseEnd,r+=1;r<a.length;r++){var G=a[r],oe=G.startTime;if(oe>A)break;var xe=G.transferSize,ve=G.initiatorType;xe&&Hm(ve)&&(G=G.responseEnd,v+=xe*(G<A?1:(A-oe)/(G-oe)))}if(--r,n+=8*(f+v)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tf=null,Af=null;function jl(e){return e.nodeType===9?e:e.ownerDocument}function Vm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Gm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function Ov(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,zv=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,Pv=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(Iv)}:jm;function Iv(e){setTimeout(function(){throw e})}function za(e){return e==="head"}function Xm(e,n){var a=n,r=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(u),or(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var v=f.nextSibling,A=f.nodeName;f[ts]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=v}}else a==="body"&&_o(e.ownerDocument.body);a=u}while(a);or(n)}function qm(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Pr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Fv(e,n,a,r){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[ts])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=fi(e.nextSibling),e===null)break}return null}function Bv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=fi(e.nextSibling),e===null))return null;return e}function Wm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=fi(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$?"||e.data==="$~"}function Nf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Hv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function fi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Uf=null;function Ym(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return fi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Zm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Km(e,n,a){switch(n=jl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Pr(e)}var di=new Map,Qm=new Set;function kl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var na=q.d;q.d={f:Vv,r:Gv,D:jv,C:kv,L:Xv,m:qv,X:Yv,S:Wv,M:Zv};function Vv(){var e=na.f(),n=zl();return e||n}function Gv(e){var n=w(e);n!==null&&n.tag===5&&n.type==="form"?p0(n):na.r(e)}var ar=typeof document>"u"?null:document;function Jm(e,n,a){var r=ar;if(r&&typeof n=="string"&&n){var u=Wt(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Qm.has(u)||(Qm.add(u),e={rel:e,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Cn(n,"link",e),le(n),r.head.appendChild(n)))}}function jv(e){na.D(e),Jm("dns-prefetch",e,null)}function kv(e,n){na.C(e,n),Jm("preconnect",e,n)}function Xv(e,n,a){na.L(e,n,a);var r=ar;if(r&&e&&n){var u='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Wt(a.imageSizes)+'"]')):u+='[href="'+Wt(e)+'"]';var f=u;switch(n){case"style":f=sr(e);break;case"script":f=rr(e)}di.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(f,e),r.querySelector(u)!==null||n==="style"&&r.querySelector(vo(f))||n==="script"&&r.querySelector(bo(f))||(n=r.createElement("link"),Cn(n,"link",e),le(n),r.head.appendChild(n)))}}function qv(e,n){na.m(e,n);var a=ar;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Wt(r)+'"][href="'+Wt(e)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=rr(e)}if(!di.has(f)&&(e=x({rel:"modulepreload",href:e},n),di.set(f,e),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(bo(f)))return}r=a.createElement("link"),Cn(r,"link",e),le(r),a.head.appendChild(r)}}}function Wv(e,n,a){na.S(e,n,a);var r=ar;if(r&&e){var u=ue(r).hoistableStyles,f=sr(e);n=n||"default";var v=u.get(f);if(!v){var A={loading:0,preload:null};if(v=r.querySelector(vo(f)))A.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(f))&&Lf(e,a);var G=v=r.createElement("link");le(G),Cn(G,"link",e),G._p=new Promise(function(oe,xe){G.onload=oe,G.onerror=xe}),G.addEventListener("load",function(){A.loading|=1}),G.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Xl(v,n,r)}v={type:"stylesheet",instance:v,count:1,state:A},u.set(f,v)}}}function Yv(e,n){na.X(e,n);var a=ar;if(a&&e){var r=ue(a).hoistableScripts,u=rr(e),f=r.get(u);f||(f=a.querySelector(bo(u)),f||(e=x({src:e,async:!0},n),(n=di.get(u))&&Of(e,n),f=a.createElement("script"),le(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function Zv(e,n){na.M(e,n);var a=ar;if(a&&e){var r=ue(a).hoistableScripts,u=rr(e),f=r.get(u);f||(f=a.querySelector(bo(u)),f||(e=x({src:e,async:!0,type:"module"},n),(n=di.get(u))&&Of(e,n),f=a.createElement("script"),le(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function $m(e,n,a,r){var u=(u=ae.current)?kl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=sr(a.href),a=ue(u).hoistableStyles,r=a.get(n),r||(r={type:"style",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=sr(a.href);var f=ue(u).hoistableStyles,v=f.get(e);if(v||(u=u.ownerDocument||u,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,v),(f=u.querySelector(vo(e)))&&!f._p&&(v.instance=f,v.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),f||Kv(u,e,a,v.state))),n&&r===null)throw Error(s(528,""));return v}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=rr(a),a=ue(u).hoistableScripts,r=a.get(n),r||(r={type:"script",instance:null,count:0,state:null},a.set(n,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function sr(e){return'href="'+Wt(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function ex(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function Kv(e,n,a,r){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?r.loading=1:(n=e.createElement("link"),r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2}),Cn(n,"link",a),le(n),e.head.appendChild(n))}function rr(e){return'[src="'+Wt(e)+'"]'}function bo(e){return"script[async]"+e}function tx(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(r)return n.instance=r,le(r),r;var u=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),le(r),Cn(r,"style",u),Xl(r,a.precedence,e),n.instance=r;case"stylesheet":u=sr(a.href);var f=e.querySelector(vo(u));if(f)return n.state.loading|=4,n.instance=f,le(f),f;r=ex(a),(u=di.get(u))&&Lf(r,u),f=(e.ownerDocument||e).createElement("link"),le(f);var v=f;return v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),Cn(f,"link",r),n.state.loading|=4,Xl(f,a.precedence,e),n.instance=f;case"script":return f=rr(a.src),(u=e.querySelector(bo(f)))?(n.instance=u,le(u),u):(r=a,(u=di.get(f))&&(r=x({},a),Of(r,u)),e=e.ownerDocument||e,u=e.createElement("script"),le(u),Cn(u,"link",r),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Xl(r,a.precedence,e));return n.instance}function Xl(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,v=0;v<r.length;v++){var A=r[v];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Lf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ql=null;function nx(e,n,a){if(ql===null){var r=new Map,u=ql=new Map;u.set(a,r)}else u=ql,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[ts]||f[on]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var v=f.getAttribute(n)||"";v=e+v;var A=r.get(v);A?A.push(f):r.set(v,[f])}}return r}function ix(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ax(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Jv(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=sr(r.href),f=n.querySelector(vo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Wl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,le(f);return}f=n.ownerDocument||n,r=ex(r),(u=di.get(u))&&Lf(r,u),f=f.createElement("link"),le(f);var v=f;v._p=new Promise(function(A,G){v.onload=A,v.onerror=G}),Cn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Wl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function $v(e,n){return e.stylesheets&&e.count===0&&Zl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&Zl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&zf===0&&(zf=62500*Lv());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Zl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function Wl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Zl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function Zl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,n.forEach(eb,e),Yl=null,Wl.call(e))}function eb(e,n){if(!(n.state.loading&4)){var a=Yl.get(e);if(a)var r=a.get(null);else{a=new Map,Yl.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var v=u[f];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),r=v)}r&&a.set(null,r)}u=n.instance,v=u.getAttribute("data-precedence"),f=a.get(v)||r,f===r&&a.set(null,u),a.set(v,u),this.count++,r=Wl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var yo={$$typeof:N,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function tb(e,n,a,r,u,f,v,A,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ct(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ct(0),this.hiddenUpdates=Ct(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function sx(e,n,a,r,u,f,v,A,G,oe,xe,ve){return e=new tb(e,n,a,v,G,oe,xe,ve,A),n=1,f===!0&&(n|=24),f=Zn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},gu(f),e}function rx(e){return e?(e=Is,e):Is}function ox(e,n,a,r,u,f){u=rx(u),r.context===null?r.context=u:r.pendingContext=u,r=Ea(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ta(e,r,n),a!==null&&(Gn(a,e,n),Jr(a,e,n))}function lx(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){lx(e,n),(e=e.alternate)&&lx(e,n)}function cx(e){if(e.tag===13||e.tag===31){var n=ss(e,67108864);n!==null&&Gn(n,e,67108864),Pf(e,67108864)}}function ux(e){if(e.tag===13||e.tag===31){var n=ei();n=xi(n);var a=ss(e,n);a!==null&&Gn(a,e,n),Pf(e,n)}}var Kl=!0;function nb(e,n,a,r){var u=z.T;z.T=null;var f=q.p;try{q.p=2,If(e,n,a,r)}finally{q.p=f,z.T=u}}function ib(e,n,a,r){var u=z.T;z.T=null;var f=q.p;try{q.p=8,If(e,n,a,r)}finally{q.p=f,z.T=u}}function If(e,n,a,r){if(Kl){var u=Ff(r);if(u===null)Mf(e,n,r,Ql,a),dx(e,r);else if(sb(u,e,n,a,r))r.stopPropagation();else if(dx(e,r),n&4&&-1<ab.indexOf(e)){for(;u!==null;){var f=w(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var v=Ee(f.pendingLanes);if(v!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;v;){var G=1<<31-Ge(v);A.entanglements[1]|=G,v&=~G}wi(f),(Ot&6)===0&&(Ll=T()+500,mo(0))}}break;case 31:case 13:A=ss(f,2),A!==null&&Gn(A,f,2),zl(),Pf(f,2)}if(f=Ff(r),f===null&&Mf(e,n,r,Ql,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Mf(e,n,r,null,a)}}function Ff(e){return e=Bc(e),Bf(e)}var Ql=null;function Bf(e){if(Ql=null,e=xa(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Ql=e,null}function fx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(re()){case _e:return 2;case Se:return 8;case pe:case qe:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Hf=!1,Pa=null,Ia=null,Fa=null,So=new Map,Mo=new Map,Ba=[],ab="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dx(e,n){switch(e){case"focusin":case"focusout":Pa=null;break;case"dragenter":case"dragleave":Ia=null;break;case"mouseover":case"mouseout":Fa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,r,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=w(n),n!==null&&cx(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function sb(e,n,a,r,u){switch(n){case"focusin":return Pa=Eo(Pa,e,n,a,r,u),!0;case"dragenter":return Ia=Eo(Ia,e,n,a,r,u),!0;case"mouseover":return Fa=Eo(Fa,e,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return So.set(f,Eo(So.get(f)||null,e,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,r,u)),!0}return!1}function hx(e){var n=xa(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zr(e.priority,function(){ux(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zr(e.priority,function(){ux(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Jl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ff(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);Fc=r,a.target.dispatchEvent(r),Fc=null}else return n=w(a),n!==null&&cx(n),e.blockedOn=a,!1;n.shift()}return!0}function px(e,n,a){Jl(e)&&a.delete(n)}function rb(){Hf=!1,Pa!==null&&Jl(Pa)&&(Pa=null),Ia!==null&&Jl(Ia)&&(Ia=null),Fa!==null&&Jl(Fa)&&(Fa=null),So.forEach(px),Mo.forEach(px)}function $l(e,n){e.blockedOn===n&&(e.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,rb)))}var ec=null;function mx(e){ec!==e&&(ec=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ec===e&&(ec=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],u=e[n+2];if(typeof r!="function"){if(Bf(r||a)===null)continue;break}var f=w(a);f!==null&&(e.splice(n,3),n-=3,Iu(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function or(e){function n(G){return $l(G,e)}Pa!==null&&$l(Pa,e),Ia!==null&&$l(Ia,e),Fa!==null&&$l(Fa,e),So.forEach(n),Mo.forEach(n);for(var a=0;a<Ba.length;a++){var r=Ba[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)hx(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],v=u[pn]||null;if(typeof f=="function")v||mx(a);else if(v){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,v=f[pn]||null)A=v.formAction;else if(Bf(u)!==null)continue}else A=v.action;typeof A=="function"?a[r+1]=A:(a.splice(r,3),r-=3),mx(a)}}}function xx(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(v){return u=v})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Vf(e){this._internalRoot=e}tc.prototype.render=Vf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ei();ox(a,r,e,n,null,null)},tc.prototype.unmount=Vf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ox(e.current,2,null,e,null,null),zl(),n[Ii]=null}};function tc(e){this._internalRoot=e}tc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Or();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&hx(e)}};var gx=t.version;if(gx!=="19.2.0")throw Error(s(527,gx,"19.2.0"));q.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var ob={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nc.isDisabled&&nc.supportsFiber)try{Me=nc.inject(ob),Te=nc}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",u=E0,f=T0,v=A0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=sx(e,1,!1,null,null,a,r,null,u,f,v,xx),e[Ii]=n.current,Sf(e),new Vf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,u="",f=E0,v=T0,A=A0,G=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(G=a.formState)),n=sx(e,1,!0,n,a??null,r,u,G,f,v,A,xx),n.context=rx(null),a=n.current,r=ei(),r=xi(r),u=Ea(r),u.callback=null,Ta(a,u,r),a=r,n.current.lanes=a,wn(n,a),wi(n),e[Ii]=n.current,Sf(e),new tc(n)},Ao.version="19.2.0",Ao}var Rx;function _b(){if(Rx)return kf.exports;Rx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=gb(),kf.exports}var vb=_b();const bb=Ag(vb),yb=[{id:"inicio",label:"Inicio"},{id:"electricidad",label:"Electricidad"},{id:"optica",label:"Luz y Óptica"}];function Sb({currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:s}){return M.jsx("header",{className:"sticky top-0 z-30 backdrop-blur bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700",children:M.jsxs("nav",{className:"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4",children:[M.jsxs("div",{className:"flex items-center gap-2 cursor-pointer",onClick:()=>t("inicio"),children:[M.jsx("div",{className:"h-9 w-9 rounded-xl bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white font-bold text-lg",children:"F2"}),M.jsxs("div",{className:"leading-tight",children:[M.jsx("p",{className:"font-semibold text-sm md:text-base",children:"Laboratorio Virtual"}),M.jsx("p",{className:"text-[11px] md:text-xs text-gray-400",children:"Electricidad · Óptica"})]})]}),M.jsxs("div",{className:"flex items-center gap-4",children:[M.jsx("ul",{className:"hidden md:flex items-center gap-3 text-sm",children:yb.map(l=>M.jsx("li",{children:M.jsx("button",{onClick:()=>t(l.id),className:`px-3 py-1.5 rounded-full transition text-xs font-medium ${o===l.id?"bg-primary text-white shadow-sm":"text-gray-300 hover:bg-slate-800"}`,children:l.label})},l.id))}),M.jsx("button",{onClick:s,"aria-label":"Cambiar modo claro/oscuro",className:"h-9 w-9 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-yellow-300 text-lg transition",children:i?"🌙":"☀️"})]})]})})}function Mb({onChangeSection:o}){return M.jsxs("section",{id:"inicio",className:"max-w-6xl mx-auto px-4 py-10 md:py-12",children:[M.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center mb-10",children:[M.jsxs("div",{children:[M.jsxs("h1",{className:"text-3xl md:text-4xl font-bold tracking-tight mb-3",children:[M.jsx("span",{className:"text-yellow-300",children:"Electricidad &"})," ",M.jsx("span",{className:"text-primary-light",children:"Luz y óptica"})]}),M.jsxs("p",{className:"text-sm md:text-base text-gray-300 mb-4",children:["Explora, aprende y experimenta los conceptos clave de"," ",M.jsx("span",{className:"font-semibold text-yellow-500",children:"Electricidad"})," ","y"," ",M.jsx("span",{className:"font-semibold text-primary-light",children:"Óptica"})," ","usando simuladores 2D/3D, calculadoras y fórmulas renderizadas."]}),M.jsx("p",{className:"text-xs md:text-sm text-gray-400 mb-4",children:"Diseñado para estudiantes de Ingeniería."}),M.jsx("div",{className:"flex flex-wrap gap-2 mb-3",children:[{label:"Ley de Coulomb",section:"electricidad"},{label:"Campo Eléctrico",section:"electricidad"},{label:"Ley de Ohm",section:"electricidad"},{label:"Snell (Refracción)",section:"optica"},{label:"Lente delgada",section:"optica"}].map(t=>M.jsx("button",{onClick:()=>o(t.section),className:"text-xs md:text-sm px-3 py-1.5 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-slate-600 text-gray-100",children:t.label},t.label))}),M.jsxs("div",{className:"text-xs md:text-sm text-gray-400",children:[M.jsx("p",{className:"font-semibold mb-1",children:"Unidades SI:"}),M.jsx("p",{children:"Carga (C), Distancia (m), Fuerza (N), Voltaje (V), Corriente (A), Resistencia (Ω)."})]})]}),M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5 shadow-xl",children:[M.jsx("p",{className:"text-xs uppercase text-primary-light mb-2 font-semibold",children:"Módulos principales"}),M.jsxs("ul",{className:"space-y-2 text-sm",children:[M.jsxs("li",{className:"flex gap-2",children:[M.jsx("span",{children:"⚡"}),M.jsxs("span",{children:[M.jsx("span",{className:"font-semibold",children:"Electricidad:"})," Coulomb, Campo, Potencial, Ley de Ohm y Circuitos."]})]}),M.jsxs("li",{className:"flex gap-2",children:[M.jsx("span",{children:"💡"}),M.jsxs("span",{children:[M.jsx("span",{className:"font-semibold",children:"Óptica:"})," Luz, espectro, intensidad, reflexión y refracción (Snell), interferencia y lentes delgadas."]})]})]}),M.jsx("p",{className:"mt-3 text-xs text-gray-400",children:"Modo claro/oscuro, accesibilidad, y simuladores 2D/3D en la parte superior."})]})]}),M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 md:p-5",children:[M.jsx("h2",{className:"text-lg md:text-xl font-semibold mb-3",children:"Constantes físicas clave"}),M.jsx("div",{className:"overflow-x-auto text-xs md:text-sm",children:M.jsxs("table",{className:"min-w-full border-collapse",children:[M.jsx("thead",{children:M.jsxs("tr",{className:"bg-slate-800/80",children:[M.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Nombre"}),M.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Símbolo"}),M.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Valor"}),M.jsx("th",{className:"border border-slate-700 px-2 py-1 text-left",children:"Unidades"})]})}),M.jsxs("tbody",{children:[M.jsxs("tr",{children:[M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Constante de Coulomb"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"k"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"8.99×10⁹"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"N·m²/C²"})]}),M.jsxs("tr",{children:[M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Permitividad del vacío"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"ε₀"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"8.85×10⁻¹²"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"F/m"})]}),M.jsxs("tr",{children:[M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Velocidad de la luz"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"c"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"2.9979×10⁸"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"m/s"})]}),M.jsxs("tr",{children:[M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"Índice del aire"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"n"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"1.0003"}),M.jsx("td",{className:"border border-slate-700 px-2 py-1",children:"—"})]})]})]})}),M.jsx("p",{className:"mt-3 text-xs text-gray-400",children:"Las fórmulas del sitio se encuentran renderizadas."})]})]})}const yh="181",Eb=0,Cx=1,Tb=2,Rg=1,Ab=2,ca=3,Qa=0,Xn=1,ua=2,ha=0,Sr=1,wx=2,Dx=3,Nx=4,Rb=5,Ts=100,Cb=101,wb=102,Db=103,Nb=104,Ub=200,Lb=201,Ob=202,zb=203,wd=204,Dd=205,Pb=206,Ib=207,Fb=208,Bb=209,Hb=210,Vb=211,Gb=212,jb=213,kb=214,Nd=0,Ud=1,Ld=2,Er=3,Od=4,zd=5,Pd=6,Id=7,Cg=0,Xb=1,qb=2,Ka=0,Wb=1,Yb=2,Zb=3,Kb=4,Qb=5,Jb=6,$b=7,wg=300,Tr=301,Ar=302,Fd=303,Bd=304,Nc=306,Hd=1e3,fa=1001,Vd=1002,ii=1003,ey=1004,ic=1005,mi=1006,Yf=1007,Rs=1008,Oi=1009,Dg=1010,Ng=1011,Oo=1012,Sh=1013,Cs=1014,da=1015,wr=1016,Mh=1017,Eh=1018,zo=1020,Ug=35902,Lg=35899,Og=1021,zg=1022,Ei=1023,Po=1026,Io=1027,Pg=1028,Th=1029,Ah=1030,Rh=1031,Ch=1033,Mc=33776,Ec=33777,Tc=33778,Ac=33779,Gd=35840,jd=35841,kd=35842,Xd=35843,qd=36196,Wd=37492,Yd=37496,Zd=37808,Kd=37809,Qd=37810,Jd=37811,$d=37812,eh=37813,th=37814,nh=37815,ih=37816,ah=37817,sh=37818,rh=37819,oh=37820,lh=37821,ch=36492,uh=36494,fh=36495,dh=36283,hh=36284,ph=36285,mh=36286,ty=3200,ny=3201,Ig=0,iy=1,Wa="",pi="srgb",Rr="srgb-linear",Cc="linear",jt="srgb",lr=7680,Ux=519,ay=512,sy=513,ry=514,Fg=515,oy=516,ly=517,cy=518,uy=519,Lx=35044,Ox="300 es",Ni=2e3,wc=2001;function Bg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function fy(){const o=Dc("canvas");return o.style.display="block",o}const zx={};function Px(...o){const t="THREE."+o.shift();console.log(t,...o)}function ct(...o){const t="THREE."+o.shift();console.warn(t,...o)}function sn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Fo(...o){const t=o.join(" ");t in zx||(zx[t]=!0,ct(...o))}function dy(o,t,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class Dr{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,xh=180/Math.PI;function Ho(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[o&255]+Nn[o>>8&255]+Nn[o>>16&255]+Nn[o>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function Et(o,t,i){return Math.max(t,Math.min(i,o))}function hy(o,t){return(o%t+t)%t}function Kf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function jn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Lt{constructor(t=0,i=0){Lt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,d=this.y-t.y;return this.x=c*s-d*l+t.x,this.y=c*l+d*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Vo{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,d,h){let m=s[l+0],p=s[l+1],g=s[l+2],x=s[l+3],b=c[d+0],y=c[d+1],E=c[d+2],R=c[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x;return}if(h>=1){t[i+0]=b,t[i+1]=y,t[i+2]=E,t[i+3]=R;return}if(x!==R||m!==b||p!==y||g!==E){let S=m*b+p*y+g*E+x*R;S<0&&(b=-b,y=-y,E=-E,R=-R,S=-S);let _=1-h;if(S<.9995){const P=Math.acos(S),N=Math.sin(P);_=Math.sin(_*P)/N,h=Math.sin(h*P)/N,m=m*_+b*h,p=p*_+y*h,g=g*_+E*h,x=x*_+R*h}else{m=m*_+b*h,p=p*_+y*h,g=g*_+E*h,x=x*_+R*h;const P=1/Math.sqrt(m*m+p*p+g*g+x*x);m*=P,p*=P,g*=P,x*=P}}t[i]=m,t[i+1]=p,t[i+2]=g,t[i+3]=x}static multiplyQuaternionsFlat(t,i,s,l,c,d){const h=s[l],m=s[l+1],p=s[l+2],g=s[l+3],x=c[d],b=c[d+1],y=c[d+2],E=c[d+3];return t[i]=h*E+g*x+m*y-p*b,t[i+1]=m*E+g*b+p*x-h*y,t[i+2]=p*E+g*y+h*b-m*x,t[i+3]=g*E-h*x-m*b-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(s/2),g=h(l/2),x=h(c/2),b=m(s/2),y=m(l/2),E=m(c/2);switch(d){case"XYZ":this._x=b*g*x+p*y*E,this._y=p*y*x-b*g*E,this._z=p*g*E+b*y*x,this._w=p*g*x-b*y*E;break;case"YXZ":this._x=b*g*x+p*y*E,this._y=p*y*x-b*g*E,this._z=p*g*E-b*y*x,this._w=p*g*x+b*y*E;break;case"ZXY":this._x=b*g*x-p*y*E,this._y=p*y*x+b*g*E,this._z=p*g*E+b*y*x,this._w=p*g*x-b*y*E;break;case"ZYX":this._x=b*g*x-p*y*E,this._y=p*y*x+b*g*E,this._z=p*g*E-b*y*x,this._w=p*g*x+b*y*E;break;case"YZX":this._x=b*g*x+p*y*E,this._y=p*y*x+b*g*E,this._z=p*g*E-b*y*x,this._w=p*g*x-b*y*E;break;case"XZY":this._x=b*g*x-p*y*E,this._y=p*y*x-b*g*E,this._z=p*g*E+b*y*x,this._w=p*g*x+b*y*E;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],x=i[10],b=s+h+x;if(b>0){const y=.5/Math.sqrt(b+1);this._w=.25/y,this._x=(g-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(s>h&&s>x){const y=2*Math.sqrt(1+s-h-x);this._w=(g-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(h>x){const y=2*Math.sqrt(1+h-s-x);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+g)/y}else{const y=2*Math.sqrt(1+x-s-h);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Et(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,d=t._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=s*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-s*p,this._z=c*g+d*p+s*m-l*h,this._w=d*g-s*h-l*m-c*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,c=t._z,d=t._w,h=this.dot(t);h<0&&(s=-s,l=-l,c=-c,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),g=Math.sin(p);m=Math.sin(m*p)/g,i=Math.sin(i*p)/g,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+c*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class de{constructor(t=0,i=0,s=0){de.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ix.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ix.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,d=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*d,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*s),g=2*(h*i-c*l),x=2*(c*s-d*i);return this.x=i+m*p+d*x-h*g,this.y=s+m*g+h*p-c*x,this.z=l+m*x+c*g-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-s*m,this.z=s*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Et(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new de,Ix=new Vo;class dt{constructor(t,i,s,l,c,d,h,m,p){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p)}set(t,i,s,l,c,d,h,m,p){const g=this.elements;return g[0]=t,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=s,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[3],m=s[6],p=s[1],g=s[4],x=s[7],b=s[2],y=s[5],E=s[8],R=l[0],S=l[3],_=l[6],P=l[1],N=l[4],F=l[7],H=l[2],U=l[5],B=l[8];return c[0]=d*R+h*P+m*H,c[3]=d*S+h*N+m*U,c[6]=d*_+h*F+m*B,c[1]=p*R+g*P+x*H,c[4]=p*S+g*N+x*U,c[7]=p*_+g*F+x*B,c[2]=b*R+y*P+E*H,c[5]=b*S+y*N+E*U,c[8]=b*_+y*F+E*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8];return i*d*g-i*h*p-s*c*g+s*h*m+l*c*p-l*d*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=g*d-h*p,b=h*m-g*c,y=p*c-d*m,E=i*x+s*b+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=x*R,t[1]=(l*p-g*s)*R,t[2]=(h*s-l*d)*R,t[3]=b*R,t[4]=(g*i-l*m)*R,t[5]=(l*c-h*i)*R,t[6]=y*R,t[7]=(s*m-p*i)*R,t[8]=(d*i-s*c)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(s*m,s*p,-s*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new dt,Fx=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bx=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function py(){const o={enabled:!0,workingColorSpace:Rr,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===jt&&(l.r=pa(l.r),l.g=pa(l.g),l.b=pa(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===jt&&(l.r=Mr(l.r),l.g=Mr(l.g),l.b=Mr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[Rr]:{primaries:t,whitePoint:s,transfer:Cc,toXYZ:Fx,fromXYZ:Bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:t,whitePoint:s,transfer:jt,toXYZ:Fx,fromXYZ:Bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),o}const Ut=py();function pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Mr(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let cr;class my{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{cr===void 0&&(cr=Dc("canvas")),cr.width=t.width,cr.height=t.height;const l=cr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=cr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=pa(c[d]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(pa(i[s]/255)*255):i[s]=pa(i[s]);return{data:i,width:t.width,height:t.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xy=0;class wh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Ho(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push($f(l[d].image)):c.push($f(l[d]))}else c=$f(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?my.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let gy=0;const ed=new de;class Pn extends Dr{constructor(t=Pn.DEFAULT_IMAGE,i=Pn.DEFAULT_MAPPING,s=fa,l=fa,c=mi,d=Rs,h=Ei,m=Oi,p=Pn.DEFAULT_ANISOTROPY,g=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Ho(),this.name="",this.source=new wh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){ct(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hd:t.x=t.x-Math.floor(t.x);break;case fa:t.x=t.x<0?0:1;break;case Vd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hd:t.y=t.y-Math.floor(t.y);break;case fa:t.y=t.y<0?0:1;break;case Vd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=wg;Pn.DEFAULT_ANISOTROPY=1;class tn{constructor(t=0,i=0,s=0,l=1){tn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,d=t.elements;return this.x=d[0]*i+d[4]*s+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*s+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*s+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*s+d[11]*l+d[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const m=t.elements,p=m[0],g=m[4],x=m[8],b=m[1],y=m[5],E=m[9],R=m[2],S=m[6],_=m[10];if(Math.abs(g-b)<.01&&Math.abs(x-R)<.01&&Math.abs(E-S)<.01){if(Math.abs(g+b)<.1&&Math.abs(x+R)<.1&&Math.abs(E+S)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,F=(y+1)/2,H=(_+1)/2,U=(g+b)/4,B=(x+R)/4,ee=(E+S)/4;return N>F&&N>H?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=U/s,c=B/s):F>H?F<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(F),s=U/l,c=ee/l):H<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(H),s=B/c,l=ee/c),this.set(s,l,c,i),this}let P=Math.sqrt((S-E)*(S-E)+(x-R)*(x-R)+(b-g)*(b-g));return Math.abs(P)<.001&&(P=1),this.x=(S-E)/P,this.y=(x-R)/P,this.z=(b-g)/P,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Et(this.x,t.x,i.x),this.y=Et(this.y,t.y,i.y),this.z=Et(this.z,t.z,i.z),this.w=Et(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Et(this.x,t,i),this.y=Et(this.y,t,i),this.z=Et(this.z,t,i),this.w=Et(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Et(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class _y extends Dr{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new tn(0,0,t,i),this.scissorTest=!1,this.viewport=new tn(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Pn(l);this.textures=[];const d=s.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:mi,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new wh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ws extends _y{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Hg extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class vy extends Pn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=ii,this.minFilter=ii,this.wrapR=fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=new de(1/0,1/0,1/0),i=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,bi):bi.fromBufferAttribute(c,d),bi.applyMatrix4(t.matrixWorld),this.expandByPoint(bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ac.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ac.copy(s.boundingBox)),ac.applyMatrix4(t.matrixWorld),this.union(ac)}const l=t.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,bi),bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),sc.subVectors(this.max,Co),ur.subVectors(t.a,Co),fr.subVectors(t.b,Co),dr.subVectors(t.c,Co),Va.subVectors(fr,ur),Ga.subVectors(dr,fr),_s.subVectors(ur,dr);let i=[0,-Va.z,Va.y,0,-Ga.z,Ga.y,0,-_s.z,_s.y,Va.z,0,-Va.x,Ga.z,0,-Ga.x,_s.z,0,-_s.x,-Va.y,Va.x,0,-Ga.y,Ga.x,0,-_s.y,_s.x,0];return!td(i,ur,fr,dr,sc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,ur,fr,dr,sc))?!1:(rc.crossVectors(Va,Ga),i=[rc.x,rc.y,rc.z],td(i,ur,fr,dr,sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ia[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ia[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ia[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ia[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ia[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ia[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ia[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ia[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ia),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ia=[new de,new de,new de,new de,new de,new de,new de,new de],bi=new de,ac=new Go,ur=new de,fr=new de,dr=new de,Va=new de,Ga=new de,_s=new de,Co=new de,sc=new de,rc=new de,vs=new de;function td(o,t,i,s,l){for(let c=0,d=o.length-3;c<=d;c+=3){vs.fromArray(o,c);const h=l.x*Math.abs(vs.x)+l.y*Math.abs(vs.y)+l.z*Math.abs(vs.z),m=t.dot(vs),p=i.dot(vs),g=s.dot(vs);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const by=new Go,wo=new de,nd=new de;class Dh{constructor(t=new de,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):by.setFromPoints(t).getCenter(s);let l=0;for(let c=0,d=t.length;c<d;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(wo,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(nd)),this.expandByPoint(wo.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const aa=new de,id=new de,oc=new de,ja=new de,ad=new de,lc=new de,sd=new de;class yy{constructor(t=new de,i=new de(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(aa.copy(this.origin).addScaledVector(this.direction,i),aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){id.copy(t).add(i).multiplyScalar(.5),oc.copy(i).sub(t).normalize(),ja.copy(this.origin).sub(id);const c=t.distanceTo(i)*.5,d=-this.direction.dot(oc),h=ja.dot(this.direction),m=-ja.dot(oc),p=ja.lengthSq(),g=Math.abs(1-d*d);let x,b,y,E;if(g>0)if(x=d*m-h,b=d*h-m,E=c*g,x>=0)if(b>=-E)if(b<=E){const R=1/g;x*=R,b*=R,y=x*(x+d*b+2*h)+b*(d*x+b+2*m)+p}else b=c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;else b=-c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;else b<=-E?(x=Math.max(0,-(-d*c+h)),b=x>0?-c:Math.min(Math.max(-c,-m),c),y=-x*x+b*(b+2*m)+p):b<=E?(x=0,b=Math.min(Math.max(-c,-m),c),y=b*(b+2*m)+p):(x=Math.max(0,-(d*c+h)),b=x>0?c:Math.min(Math.max(-c,-m),c),y=-x*x+b*(b+2*m)+p);else b=d>0?-c:c,x=Math.max(0,-(d*b+h)),y=-x*x+b*(b+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(id).addScaledVector(oc,b),y}intersectSphere(t,i){aa.subVectors(t.center,this.origin);const s=aa.dot(this.direction),l=aa.dot(aa)-s*s,c=t.radius*t.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=s-d,m=s+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,x=1/this.direction.z,b=this.origin;return p>=0?(s=(t.min.x-b.x)*p,l=(t.max.x-b.x)*p):(s=(t.max.x-b.x)*p,l=(t.min.x-b.x)*p),g>=0?(c=(t.min.y-b.y)*g,d=(t.max.y-b.y)*g):(c=(t.max.y-b.y)*g,d=(t.min.y-b.y)*g),s>d||c>l||((c>s||isNaN(s))&&(s=c),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-b.z)*x,m=(t.max.z-b.z)*x):(h=(t.max.z-b.z)*x,m=(t.min.z-b.z)*x),s>m||h>l)||((h>s||s!==s)&&(s=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,aa)!==null}intersectTriangle(t,i,s,l,c){ad.subVectors(i,t),lc.subVectors(s,t),sd.crossVectors(ad,lc);let d=this.direction.dot(sd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;ja.subVectors(this.origin,t);const m=h*this.direction.dot(lc.crossVectors(ja,lc));if(m<0)return null;const p=h*this.direction.dot(ad.cross(ja));if(p<0||m+p>d)return null;const g=-h*ja.dot(sd);return g<0?null:this.at(g/d,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rn{constructor(t,i,s,l,c,d,h,m,p,g,x,b,y,E,R,S){rn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,d,h,m,p,g,x,b,y,E,R,S)}set(t,i,s,l,c,d,h,m,p,g,x,b,y,E,R,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=g,_[10]=x,_[14]=b,_[3]=y,_[7]=E,_[11]=R,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rn().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/hr.setFromMatrixColumn(t,0).length(),c=1/hr.setFromMatrixColumn(t,1).length(),d=1/hr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*d,i[9]=s[9]*d,i[10]=s[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,d=Math.cos(s),h=Math.sin(s),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),x=Math.sin(c);if(t.order==="XYZ"){const b=d*g,y=d*x,E=h*g,R=h*x;i[0]=m*g,i[4]=-m*x,i[8]=p,i[1]=y+E*p,i[5]=b-R*p,i[9]=-h*m,i[2]=R-b*p,i[6]=E+y*p,i[10]=d*m}else if(t.order==="YXZ"){const b=m*g,y=m*x,E=p*g,R=p*x;i[0]=b+R*h,i[4]=E*h-y,i[8]=d*p,i[1]=d*x,i[5]=d*g,i[9]=-h,i[2]=y*h-E,i[6]=R+b*h,i[10]=d*m}else if(t.order==="ZXY"){const b=m*g,y=m*x,E=p*g,R=p*x;i[0]=b-R*h,i[4]=-d*x,i[8]=E+y*h,i[1]=y+E*h,i[5]=d*g,i[9]=R-b*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const b=d*g,y=d*x,E=h*g,R=h*x;i[0]=m*g,i[4]=E*p-y,i[8]=b*p+R,i[1]=m*x,i[5]=R*p+b,i[9]=y*p-E,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const b=d*m,y=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=R-b*x,i[8]=E*x+y,i[1]=x,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=y*x+E,i[10]=b-R*x}else if(t.order==="XZY"){const b=d*m,y=d*p,E=h*m,R=h*p;i[0]=m*g,i[4]=-x,i[8]=p*g,i[1]=b*x+R,i[5]=d*g,i[9]=y*x-E,i[2]=E*x-y,i[6]=h*g,i[10]=R*x+b}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Sy,t,My)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),ka.crossVectors(s,ti),ka.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),ka.crossVectors(s,ti)),ka.normalize(),cc.crossVectors(ti,ka),l[0]=ka.x,l[4]=cc.x,l[8]=ti.x,l[1]=ka.y,l[5]=cc.y,l[9]=ti.y,l[2]=ka.z,l[6]=cc.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,d=s[0],h=s[4],m=s[8],p=s[12],g=s[1],x=s[5],b=s[9],y=s[13],E=s[2],R=s[6],S=s[10],_=s[14],P=s[3],N=s[7],F=s[11],H=s[15],U=l[0],B=l[4],ee=l[8],D=l[12],C=l[1],V=l[5],Y=l[9],ie=l[13],Z=l[2],$=l[6],z=l[10],q=l[14],L=l[3],k=l[7],ne=l[11],O=l[15];return c[0]=d*U+h*C+m*Z+p*L,c[4]=d*B+h*V+m*$+p*k,c[8]=d*ee+h*Y+m*z+p*ne,c[12]=d*D+h*ie+m*q+p*O,c[1]=g*U+x*C+b*Z+y*L,c[5]=g*B+x*V+b*$+y*k,c[9]=g*ee+x*Y+b*z+y*ne,c[13]=g*D+x*ie+b*q+y*O,c[2]=E*U+R*C+S*Z+_*L,c[6]=E*B+R*V+S*$+_*k,c[10]=E*ee+R*Y+S*z+_*ne,c[14]=E*D+R*ie+S*q+_*O,c[3]=P*U+N*C+F*Z+H*L,c[7]=P*B+N*V+F*$+H*k,c[11]=P*ee+N*Y+F*z+H*ne,c[15]=P*D+N*ie+F*q+H*O,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],d=t[1],h=t[5],m=t[9],p=t[13],g=t[2],x=t[6],b=t[10],y=t[14],E=t[3],R=t[7],S=t[11],_=t[15];return E*(+c*m*x-l*p*x-c*h*b+s*p*b+l*h*y-s*m*y)+R*(+i*m*y-i*p*b+c*d*b-l*d*y+l*p*g-c*m*g)+S*(+i*p*x-i*h*y-c*d*x+s*d*y+c*h*g-s*p*g)+_*(-l*h*g-i*m*x+i*h*b+l*d*x-s*d*b+s*m*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],d=t[4],h=t[5],m=t[6],p=t[7],g=t[8],x=t[9],b=t[10],y=t[11],E=t[12],R=t[13],S=t[14],_=t[15],P=x*S*p-R*b*p+R*m*y-h*S*y-x*m*_+h*b*_,N=E*b*p-g*S*p-E*m*y+d*S*y+g*m*_-d*b*_,F=g*R*p-E*x*p+E*h*y-d*R*y-g*h*_+d*x*_,H=E*x*m-g*R*m-E*h*b+d*R*b+g*h*S-d*x*S,U=i*P+s*N+l*F+c*H;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/U;return t[0]=P*B,t[1]=(R*b*c-x*S*c-R*l*y+s*S*y+x*l*_-s*b*_)*B,t[2]=(h*S*c-R*m*c+R*l*p-s*S*p-h*l*_+s*m*_)*B,t[3]=(x*m*c-h*b*c-x*l*p+s*b*p+h*l*y-s*m*y)*B,t[4]=N*B,t[5]=(g*S*c-E*b*c+E*l*y-i*S*y-g*l*_+i*b*_)*B,t[6]=(E*m*c-d*S*c-E*l*p+i*S*p+d*l*_-i*m*_)*B,t[7]=(d*b*c-g*m*c+g*l*p-i*b*p-d*l*y+i*m*y)*B,t[8]=F*B,t[9]=(E*x*c-g*R*c-E*s*y+i*R*y+g*s*_-i*x*_)*B,t[10]=(d*R*c-E*h*c+E*s*p-i*R*p-d*s*_+i*h*_)*B,t[11]=(g*h*c-d*x*c-g*s*p+i*x*p+d*s*y-i*h*y)*B,t[12]=H*B,t[13]=(g*R*l-E*x*l+E*s*b-i*R*b-g*s*S+i*x*S)*B,t[14]=(E*h*l-d*R*l-E*s*m+i*R*m+d*s*S-i*h*S)*B,t[15]=(d*x*l-g*h*l+g*s*m-i*x*m-d*s*b+i*h*b)*B,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,d=t.x,h=t.y,m=t.z,p=c*d,g=c*h;return this.set(p*d+s,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+s,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,d){return this.set(1,s,c,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,x=h+h,b=c*p,y=c*g,E=c*x,R=d*g,S=d*x,_=h*x,P=m*p,N=m*g,F=m*x,H=s.x,U=s.y,B=s.z;return l[0]=(1-(R+_))*H,l[1]=(y+F)*H,l[2]=(E-N)*H,l[3]=0,l[4]=(y-F)*U,l[5]=(1-(b+_))*U,l[6]=(S+P)*U,l[7]=0,l[8]=(E+N)*B,l[9]=(S-P)*B,l[10]=(1-(b+R))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=hr.set(l[0],l[1],l[2]).length();const d=hr.set(l[4],l[5],l[6]).length(),h=hr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],yi.copy(this);const p=1/c,g=1/d,x=1/h;return yi.elements[0]*=p,yi.elements[1]*=p,yi.elements[2]*=p,yi.elements[4]*=g,yi.elements[5]*=g,yi.elements[6]*=g,yi.elements[8]*=x,yi.elements[9]*=x,yi.elements[10]*=x,i.setFromRotationMatrix(yi),s.x=c,s.y=d,s.z=h,this}makePerspective(t,i,s,l,c,d,h=Ni,m=!1){const p=this.elements,g=2*c/(i-t),x=2*c/(s-l),b=(i+t)/(i-t),y=(s+l)/(s-l);let E,R;if(m)E=c/(d-c),R=d*c/(d-c);else if(h===Ni)E=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(h===wc)E=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=b,p[12]=0,p[1]=0,p[5]=x,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,c,d,h=Ni,m=!1){const p=this.elements,g=2/(i-t),x=2/(s-l),b=-(i+t)/(i-t),y=-(s+l)/(s-l);let E,R;if(m)E=1/(d-c),R=d/(d-c);else if(h===Ni)E=-2/(d-c),R=-(d+c)/(d-c);else if(h===wc)E=-1/(d-c),R=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=g,p[4]=0,p[8]=0,p[12]=b,p[1]=0,p[5]=x,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=E,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const hr=new de,yi=new rn,Sy=new de(0,0,0),My=new de(1,1,1),ka=new de,cc=new de,ti=new de,Hx=new rn,Vx=new Vo;class zi{constructor(t=0,i=0,s=0,l=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],x=l[2],b=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(b,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(b,-1,1)),Math.abs(b)<.9999999?(this._y=Math.atan2(-x,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(b,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-x,c)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(b,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Hx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hx,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Vx.setFromEuler(this),this.setFromQuaternion(Vx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class Vg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ey=0;const Gx=new de,pr=new Vo,sa=new rn,uc=new de,Do=new de,Ty=new de,Ay=new Vo,jx=new de(1,0,0),kx=new de(0,1,0),Xx=new de(0,0,1),qx={type:"added"},Ry={type:"removed"},mr={type:"childadded",child:null},rd={type:"childremoved",child:null};class Ln extends Dr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ho(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ln.DEFAULT_UP.clone();const t=new de,i=new zi,s=new Vo,l=new de(1,1,1);function c(){s.setFromEuler(i,!1)}function d(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new rn},normalMatrix:{value:new dt}}),this.matrix=new rn,this.matrixWorld=new rn,this.matrixAutoUpdate=Ln.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.multiply(pr),this}rotateOnWorldAxis(t,i){return pr.setFromAxisAngle(t,i),this.quaternion.premultiply(pr),this}rotateX(t){return this.rotateOnAxis(jx,t)}rotateY(t){return this.rotateOnAxis(kx,t)}rotateZ(t){return this.rotateOnAxis(Xx,t)}translateOnAxis(t,i){return Gx.copy(t).applyQuaternion(this.quaternion),this.position.add(Gx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(jx,t)}translateY(t){return this.translateOnAxis(kx,t)}translateZ(t){return this.translateOnAxis(Xx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(sa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?uc.copy(t):uc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sa.lookAt(Do,uc,this.up):sa.lookAt(uc,Do,this.up),this.quaternion.setFromRotationMatrix(sa),l&&(sa.extractRotation(l.matrixWorld),pr.setFromRotationMatrix(sa),this.quaternion.premultiply(pr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(sn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(qx),mr.child=t,this.dispatchEvent(mr),mr.child=null):sn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ry),rd.child=t,this.dispatchEvent(rd),rd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),sa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),sa.multiply(t.parent.matrixWorld)),t.applyMatrix4(sa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(qx),mr.child=t,this.dispatchEvent(mr),mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const d=this.children[s].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,Ty),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Ay,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const x=m[p];c(t.shapes,x)}else c(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(t.materials,this.material[m]));l.material=h}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),g=d(t.images),x=d(t.shapes),b=d(t.skeletons),y=d(t.animations),E=d(t.nodes);h.length>0&&(s.geometries=h),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),x.length>0&&(s.shapes=x),b.length>0&&(s.skeletons=b),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Ln.DEFAULT_UP=new de(0,1,0);Ln.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Si=new de,ra=new de,od=new de,oa=new de,xr=new de,gr=new de,Wx=new de,ld=new de,cd=new de,ud=new de,fd=new tn,dd=new tn,hd=new tn;class Mi{constructor(t=new de,i=new de,s=new de){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Si.subVectors(t,i),l.cross(Si);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Si.subVectors(l,i),ra.subVectors(s,i),od.subVectors(t,i);const d=Si.dot(Si),h=Si.dot(ra),m=Si.dot(od),p=ra.dot(ra),g=ra.dot(od),x=d*p-h*h;if(x===0)return c.set(0,0,0),null;const b=1/x,y=(p*m-h*g)*b,E=(d*g-h*m)*b;return c.set(1-y-E,E,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,oa)===null?!1:oa.x>=0&&oa.y>=0&&oa.x+oa.y<=1}static getInterpolation(t,i,s,l,c,d,h,m){return this.getBarycoord(t,i,s,l,oa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,oa.x),m.addScaledVector(d,oa.y),m.addScaledVector(h,oa.z),m)}static getInterpolatedAttribute(t,i,s,l,c,d){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,s),hd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(fd,c.x),d.addScaledVector(dd,c.y),d.addScaledVector(hd,c.z),d}static isFrontFacing(t,i,s,l){return Si.subVectors(s,i),ra.subVectors(t,i),Si.cross(ra).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Si.subVectors(this.c,this.b),ra.subVectors(this.a,this.b),Si.cross(ra).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Mi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Mi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return Mi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return Mi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Mi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let d,h;xr.subVectors(l,s),gr.subVectors(c,s),ld.subVectors(t,s);const m=xr.dot(ld),p=gr.dot(ld);if(m<=0&&p<=0)return i.copy(s);cd.subVectors(t,l);const g=xr.dot(cd),x=gr.dot(cd);if(g>=0&&x<=g)return i.copy(l);const b=m*x-g*p;if(b<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(s).addScaledVector(xr,d);ud.subVectors(t,c);const y=xr.dot(ud),E=gr.dot(ud);if(E>=0&&y<=E)return i.copy(c);const R=y*p-m*E;if(R<=0&&p>=0&&E<=0)return h=p/(p-E),i.copy(s).addScaledVector(gr,h);const S=g*E-y*x;if(S<=0&&x-g>=0&&y-E>=0)return Wx.subVectors(c,l),h=(x-g)/(x-g+(y-E)),i.copy(l).addScaledVector(Wx,h);const _=1/(S+R+b);return d=R*_,h=b*_,i.copy(s).addScaledVector(xr,d).addScaledVector(gr,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xa={h:0,s:0,l:0},fc={h:0,s:0,l:0};function pd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Tt{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=pi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Ut.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Ut.workingColorSpace){return this.r=t,this.g=i,this.b=s,Ut.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Ut.workingColorSpace){if(t=hy(t,1),i=Et(i,0,1),s=Et(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,d=2*s-c;this.r=pd(d,c,t+1/3),this.g=pd(d,c,t),this.b=pd(d,c,t-1/3)}return Ut.colorSpaceToWorking(this,l),this}setStyle(t,i=pi){function s(c){c!==void 0&&parseFloat(c)<1&&ct("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:ct("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);ct("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=pi){const s=Gg[t.toLowerCase()];return s!==void 0?this.setHex(s,i):ct("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pa(t.r),this.g=pa(t.g),this.b=pa(t.b),this}copyLinearToSRGB(t){return this.r=Mr(t.r),this.g=Mr(t.g),this.b=Mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pi){return Ut.workingToColorSpace(Un.copy(this),t),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(t=pi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Ut.workingColorSpace){Ut.workingToColorSpace(Un.copy(this),i);const s=Un.r,l=Un.g,c=Un.b,d=Math.max(s,l,c),h=Math.min(s,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=g<=.5?x/(d+h):x/(2-d-h),d){case s:m=(l-c)/x+(l<c?6:0);break;case l:m=(c-s)/x+2;break;case c:m=(s-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=g,t}getRGB(t,i=Ut.workingColorSpace){return Ut.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=pi){Ut.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,l=Un.b;return t!==pi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Xa),this.setHSL(Xa.h+t,Xa.s+i,Xa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Xa),t.getHSL(fc);const s=Kf(Xa.h,fc.h,i),l=Kf(Xa.s,fc.s,i),c=Kf(Xa.l,fc.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Tt;Tt.NAMES=Gg;let Cy=0;class jo extends Dr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Ho(),this.name="",this.type="Material",this.blending=Sr,this.side=Qa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wd,this.blendDst=Dd,this.blendEquation=Ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=Er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ux,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=lr,this.stencilZFail=lr,this.stencilZPass=lr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){ct(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ct(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Sr&&(s.blending=this.blending),this.side!==Qa&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wd&&(s.blendSrc=this.blendSrc),this.blendDst!==Dd&&(s.blendDst=this.blendDst),this.blendEquation!==Ts&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Er&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ux&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==lr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==lr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==lr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(t.textures),d=l(t.images);c.length>0&&(s.textures=c),d.length>0&&(s.images=d)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ja extends jo{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=Cg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const dn=new de,dc=new Lt;let wy=0;class Li{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Lx,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)dc.fromBufferAttribute(this,i),dc.applyMatrix3(t),this.setXY(i,dc.x,dc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(t),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Ro(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=jn(i,this.array),s=jn(s,this.array),l=jn(l,this.array),c=jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lx&&(t.usage=this.usage),t}}class jg extends Li{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class kg extends Li{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class ai extends Li{constructor(t,i,s){super(new Float32Array(t),i,s)}}let Dy=0;const hi=new rn,md=new Ln,_r=new de,ni=new Go,No=new Go,Mn=new de;class Pi extends Dr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dy++}),this.uuid=Ho(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bg(t)?kg:jg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return hi.makeRotationFromQuaternion(t),this.applyMatrix4(hi),this}rotateX(t){return hi.makeRotationX(t),this.applyMatrix4(hi),this}rotateY(t){return hi.makeRotationY(t),this.applyMatrix4(hi),this}rotateZ(t){return hi.makeRotationZ(t),this.applyMatrix4(hi),this}translate(t,i,s){return hi.makeTranslation(t,i,s),this.applyMatrix4(hi),this}scale(t,i,s){return hi.makeScale(t,i,s),this.applyMatrix4(hi),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_r).negate(),this.translate(_r.x,_r.y,_r.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const d=t[l];s.push(d.x,d.y,d.z||0)}this.setAttribute("position",new ai(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ni.setFromBufferAttribute(c),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&sn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){sn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(t){const s=this.boundingSphere.center;if(ni.setFromBufferAttribute(t),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];No.setFromBufferAttribute(h),this.morphTargetsRelative?(Mn.addVectors(ni.min,No.min),ni.expandByPoint(Mn),Mn.addVectors(ni.max,No.max),ni.expandByPoint(Mn)):(ni.expandByPoint(No.min),ni.expandByPoint(No.max))}ni.getCenter(s);let l=0;for(let c=0,d=t.count;c<d;c++)Mn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Mn));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)Mn.fromBufferAttribute(h,p),m&&(_r.fromBufferAttribute(t,p),Mn.add(_r)),l=Math.max(l,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&sn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){sn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ee=0;ee<s.count;ee++)h[ee]=new de,m[ee]=new de;const p=new de,g=new de,x=new de,b=new Lt,y=new Lt,E=new Lt,R=new de,S=new de;function _(ee,D,C){p.fromBufferAttribute(s,ee),g.fromBufferAttribute(s,D),x.fromBufferAttribute(s,C),b.fromBufferAttribute(c,ee),y.fromBufferAttribute(c,D),E.fromBufferAttribute(c,C),g.sub(p),x.sub(p),y.sub(b),E.sub(b);const V=1/(y.x*E.y-E.x*y.y);isFinite(V)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(x,-y.y).multiplyScalar(V),S.copy(x).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(V),h[ee].add(R),h[D].add(R),h[C].add(R),m[ee].add(S),m[D].add(S),m[C].add(S))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let ee=0,D=P.length;ee<D;++ee){const C=P[ee],V=C.start,Y=C.count;for(let ie=V,Z=V+Y;ie<Z;ie+=3)_(t.getX(ie+0),t.getX(ie+1),t.getX(ie+2))}const N=new de,F=new de,H=new de,U=new de;function B(ee){H.fromBufferAttribute(l,ee),U.copy(H);const D=h[ee];N.copy(D),N.sub(H.multiplyScalar(H.dot(D))).normalize(),F.crossVectors(U,D);const V=F.dot(m[ee])<0?-1:1;d.setXYZW(ee,N.x,N.y,N.z,V)}for(let ee=0,D=P.length;ee<D;++ee){const C=P[ee],V=C.start,Y=C.count;for(let ie=V,Z=V+Y;ie<Z;ie+=3)B(t.getX(ie+0)),B(t.getX(ie+1)),B(t.getX(ie+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let b=0,y=s.count;b<y;b++)s.setXYZ(b,0,0,0);const l=new de,c=new de,d=new de,h=new de,m=new de,p=new de,g=new de,x=new de;if(t)for(let b=0,y=t.count;b<y;b+=3){const E=t.getX(b+0),R=t.getX(b+1),S=t.getX(b+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,S),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),h.fromBufferAttribute(s,E),m.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),h.add(g),m.add(g),p.add(g),s.setXYZ(E,h.x,h.y,h.z),s.setXYZ(R,m.x,m.y,m.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let b=0,y=i.count;b<y;b+=3)l.fromBufferAttribute(i,b+0),c.fromBufferAttribute(i,b+1),d.fromBufferAttribute(i,b+2),g.subVectors(d,c),x.subVectors(l,c),g.cross(x),s.setXYZ(b+0,g.x,g.y,g.z),s.setXYZ(b+1,g.x,g.y,g.z),s.setXYZ(b+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Mn.fromBufferAttribute(t,i),Mn.normalize(),t.setXYZ(i,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function t(h,m){const p=h.array,g=h.itemSize,x=h.normalized,b=new p.constructor(m.length*g);let y=0,E=0;for(let R=0,S=m.length;R<S;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*g;for(let _=0;_<g;_++)b[E++]=p[y++]}return new Li(b,g,x)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Pi,s=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,s);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,x=p.length;g<x;g++){const b=p[g],y=t(b,s);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let x=0,b=p.length;x<b;x++){const y=p[x];g.push(y.toJSON(t.data))}g.length>0&&(l[m]=g,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=t.morphAttributes;for(const p in c){const g=[],x=c[p];for(let b=0,y=x.length;b<y;b++)g.push(x[b].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,g=d.length;p<g;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yx=new rn,bs=new yy,hc=new Dh,Zx=new de,pc=new de,mc=new de,xc=new de,xd=new de,gc=new de,Kx=new de,_c=new de;class hn extends Ln{constructor(t=new Pi,i=new Ja){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,d=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(c&&h){gc.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],x=c[m];g!==0&&(xd.fromBufferAttribute(x,t),d?gc.addScaledVector(xd,g):gc.addScaledVector(xd.sub(i),g))}i.add(gc)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),hc.copy(s.boundingSphere),hc.applyMatrix4(c),bs.copy(t.ray).recast(t.near),!(hc.containsPoint(bs.origin)===!1&&(bs.intersectSphere(hc,Zx)===null||bs.origin.distanceToSquared(Zx)>(t.far-t.near)**2))&&(Yx.copy(c).invert(),bs.copy(t.ray).applyMatrix4(Yx),!(s.boundingBox!==null&&bs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,bs)))}_computeIntersections(t,i,s){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,x=c.attributes.normal,b=c.groups,y=c.drawRange;if(h!==null)if(Array.isArray(d))for(let E=0,R=b.length;E<R;E++){const S=b[E],_=d[S.materialIndex],P=Math.max(S.start,y.start),N=Math.min(h.count,Math.min(S.start+S.count,y.start+y.count));for(let F=P,H=N;F<H;F+=3){const U=h.getX(F),B=h.getX(F+1),ee=h.getX(F+2);l=vc(this,_,t,s,p,g,x,U,B,ee),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let S=E,_=R;S<_;S+=3){const P=h.getX(S),N=h.getX(S+1),F=h.getX(S+2);l=vc(this,d,t,s,p,g,x,P,N,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let E=0,R=b.length;E<R;E++){const S=b[E],_=d[S.materialIndex],P=Math.max(S.start,y.start),N=Math.min(m.count,Math.min(S.start+S.count,y.start+y.count));for(let F=P,H=N;F<H;F+=3){const U=F,B=F+1,ee=F+2;l=vc(this,_,t,s,p,g,x,U,B,ee),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let S=E,_=R;S<_;S+=3){const P=S,N=S+1,F=S+2;l=vc(this,d,t,s,p,g,x,P,N,F),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function Ny(o,t,i,s,l,c,d,h){let m;if(t.side===Xn?m=s.intersectTriangle(d,c,l,!0,h):m=s.intersectTriangle(l,c,d,t.side===Qa,h),m===null)return null;_c.copy(h),_c.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(_c);return p<i.near||p>i.far?null:{distance:p,point:_c.clone(),object:o}}function vc(o,t,i,s,l,c,d,h,m,p){o.getVertexPosition(h,pc),o.getVertexPosition(m,mc),o.getVertexPosition(p,xc);const g=Ny(o,t,i,s,pc,mc,xc,Kx);if(g){const x=new de;Mi.getBarycoord(Kx,pc,mc,xc,x),l&&(g.uv=Mi.getInterpolatedAttribute(l,h,m,p,x,new Lt)),c&&(g.uv1=Mi.getInterpolatedAttribute(c,h,m,p,x,new Lt)),d&&(g.normal=Mi.getInterpolatedAttribute(d,h,m,p,x,new de),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const b={a:h,b:m,c:p,normal:new de,materialIndex:0};Mi.getNormal(pc,mc,xc,b.normal),g.face=b,g.barycoord=x}return g}class ko extends Pi{constructor(t=1,i=1,s=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],x=[];let b=0,y=0;E("z","y","x",-1,-1,s,i,t,d,c,0),E("z","y","x",1,-1,s,i,-t,d,c,1),E("x","z","y",1,1,t,s,i,l,d,2),E("x","z","y",1,-1,t,s,-i,l,d,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(m),this.setAttribute("position",new ai(p,3)),this.setAttribute("normal",new ai(g,3)),this.setAttribute("uv",new ai(x,2));function E(R,S,_,P,N,F,H,U,B,ee,D){const C=F/B,V=H/ee,Y=F/2,ie=H/2,Z=U/2,$=B+1,z=ee+1;let q=0,L=0;const k=new de;for(let ne=0;ne<z;ne++){const O=ne*V-ie;for(let K=0;K<$;K++){const me=K*C-Y;k[R]=me*P,k[S]=O*N,k[_]=Z,p.push(k.x,k.y,k.z),k[R]=0,k[S]=0,k[_]=U>0?1:-1,g.push(k.x,k.y,k.z),x.push(K/B),x.push(1-ne/ee),q+=1}}for(let ne=0;ne<ee;ne++)for(let O=0;O<B;O++){const K=b+O+$*ne,me=b+O+$*(ne+1),ye=b+(O+1)+$*(ne+1),Ae=b+(O+1)+$*ne;m.push(K,me,Ae),m.push(me,ye,Ae),L+=6}h.addGroup(y,L,D),y+=L,b+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cr(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(o){const t={};for(let i=0;i<o.length;i++){const s=Cr(o[i]);for(const l in s)t[l]=s[l]}return t}function Uy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Xg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Ut.workingColorSpace}const Ly={clone:Cr,merge:zn};var Oy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ma extends jo{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Oy,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cr(t.uniforms),this.uniformsGroups=Uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class qg extends Ln{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rn,this.projectionMatrix=new rn,this.projectionMatrixInverse=new rn,this.coordinateSystem=Ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qa=new de,Qx=new Lt,Jx=new Lt;class kn extends qg{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=xh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xh*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){qa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(qa.x,qa.y).multiplyScalar(-t/qa.z),qa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(qa.x,qa.y).multiplyScalar(-t/qa.z)}getViewSize(t,i){return this.getViewBounds(t,Qx,Jx),i.subVectors(Jx,Qx)}setViewOffset(t,i,s,l,c,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zf*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*s/p,l*=d.width/m,s*=d.height/p}const h=this.filmOffset;h!==0&&(c+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const vr=-90,br=1;class Py extends Ln{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new kn(vr,br,t,i);l.layers=this.layers,this.add(l);const c=new kn(vr,br,t,i);c.layers=this.layers,this.add(c);const d=new kn(vr,br,t,i);d.layers=this.layers,this.add(d);const h=new kn(vr,br,t,i);h.layers=this.layers,this.add(h);const m=new kn(vr,br,t,i);m.layers=this.layers,this.add(m);const p=new kn(vr,br,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ni)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,x=t.getRenderTarget(),b=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,d),t.setRenderTarget(s,2,l),t.render(i,h),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=R,t.setRenderTarget(s,5,l),t.render(i,g),t.setRenderTarget(x,b,y),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Wg extends Pn{constructor(t=[],i=Tr,s,l,c,d,h,m,p,g){super(t,i,s,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Iy extends ws{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new Wg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new ko(5,5,5),c=new ma({name:"CubemapFromEquirect",uniforms:Cr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:ha});c.uniforms.tEquirect.value=i;const d=new hn(l,c),h=i.minFilter;return i.minFilter===Rs&&(i.minFilter=mi),new Py(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,s,l);t.setRenderTarget(c)}}class Ui extends Ln{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fy={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ui,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ui,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ui,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const S=i.getJointPose(R,s),_=this._getHandJoint(p,R);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const g=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],b=g.position.distanceTo(x.position),y=.02,E=.005;p.inputState.pinching&&b>y+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&b<=y-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Fy)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ui;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Nh extends Ln{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class By extends Pn{constructor(t=null,i=1,s=1,l,c,d,h,m,p=ii,g=ii,x,b){super(null,d,h,m,p,g,l,c,x,b),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new de,Hy=new de,Vy=new dt;class Es{constructor(t=new de(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=_d.subVectors(s,i).cross(Hy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(_d),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||Vy.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ys=new Dh,Gy=new Lt(.5,.5),bc=new de;class Uh{constructor(t=new Es,i=new Es,s=new Es,l=new Es,c=new Es,d=new Es){this.planes=[t,i,s,l,c,d]}set(t,i,s,l,c,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(s),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ni,s=!1){const l=this.planes,c=t.elements,d=c[0],h=c[1],m=c[2],p=c[3],g=c[4],x=c[5],b=c[6],y=c[7],E=c[8],R=c[9],S=c[10],_=c[11],P=c[12],N=c[13],F=c[14],H=c[15];if(l[0].setComponents(p-d,y-g,_-E,H-P).normalize(),l[1].setComponents(p+d,y+g,_+E,H+P).normalize(),l[2].setComponents(p+h,y+x,_+R,H+N).normalize(),l[3].setComponents(p-h,y-x,_-R,H-N).normalize(),s)l[4].setComponents(m,b,S,F).normalize(),l[5].setComponents(p-m,y-b,_-S,H-F).normalize();else if(l[4].setComponents(p-m,y-b,_-S,H-F).normalize(),i===Ni)l[5].setComponents(p+m,y+b,_+S,H+F).normalize();else if(i===wc)l[5].setComponents(m,b,S,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ys.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ys)}intersectsSprite(t){ys.center.set(0,0,0);const i=Gy.distanceTo(t.center);return ys.radius=.7071067811865476+i,ys.applyMatrix4(t.matrixWorld),this.intersectsSphere(ys)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(bc.x=l.normal.x>0?t.max.x:t.min.x,bc.y=l.normal.y>0?t.max.y:t.min.y,bc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(bc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Yg extends Pn{constructor(t,i,s=Cs,l,c,d,h=ii,m=ii,p,g=Po,x=1){if(g!==Po&&g!==Io)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const b={width:t,height:i,depth:x};super(b,l,c,d,h,m,g,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Zg extends Pn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Lh extends Pi{constructor(t=1,i=1,s=1,l=32,c=1,d=!1,h=0,m=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:d,thetaStart:h,thetaLength:m};const p=this;l=Math.floor(l),c=Math.floor(c);const g=[],x=[],b=[],y=[];let E=0;const R=[],S=s/2;let _=0;P(),d===!1&&(t>0&&N(!0),i>0&&N(!1)),this.setIndex(g),this.setAttribute("position",new ai(x,3)),this.setAttribute("normal",new ai(b,3)),this.setAttribute("uv",new ai(y,2));function P(){const F=new de,H=new de;let U=0;const B=(i-t)/s;for(let ee=0;ee<=c;ee++){const D=[],C=ee/c,V=C*(i-t)+t;for(let Y=0;Y<=l;Y++){const ie=Y/l,Z=ie*m+h,$=Math.sin(Z),z=Math.cos(Z);H.x=V*$,H.y=-C*s+S,H.z=V*z,x.push(H.x,H.y,H.z),F.set($,B,z).normalize(),b.push(F.x,F.y,F.z),y.push(ie,1-C),D.push(E++)}R.push(D)}for(let ee=0;ee<l;ee++)for(let D=0;D<c;D++){const C=R[D][ee],V=R[D+1][ee],Y=R[D+1][ee+1],ie=R[D][ee+1];(t>0||D!==0)&&(g.push(C,V,ie),U+=3),(i>0||D!==c-1)&&(g.push(V,Y,ie),U+=3)}p.addGroup(_,U,0),_+=U}function N(F){const H=E,U=new Lt,B=new de;let ee=0;const D=F===!0?t:i,C=F===!0?1:-1;for(let Y=1;Y<=l;Y++)x.push(0,S*C,0),b.push(0,C,0),y.push(.5,.5),E++;const V=E;for(let Y=0;Y<=l;Y++){const Z=Y/l*m+h,$=Math.cos(Z),z=Math.sin(Z);B.x=D*z,B.y=S*C,B.z=D*$,x.push(B.x,B.y,B.z),b.push(0,C,0),U.x=$*.5+.5,U.y=z*.5*C+.5,y.push(U.x,U.y),E++}for(let Y=0;Y<l;Y++){const ie=H+Y,Z=V+Y;F===!0?g.push(Z,Z+1,ie):g.push(Z+1,Z,ie),ee+=3}p.addGroup(_,ee,F===!0?1:2),_+=ee}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lh(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xo extends Lh{constructor(t=1,i=1,s=32,l=1,c=!1,d=0,h=Math.PI*2){super(0,t,i,s,l,c,d,h),this.type="ConeGeometry",this.parameters={radius:t,height:i,radialSegments:s,heightSegments:l,openEnded:c,thetaStart:d,thetaLength:h}}static fromJSON(t){return new Xo(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Uc extends Pi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,d=i/2,h=Math.floor(s),m=Math.floor(l),p=h+1,g=m+1,x=t/h,b=i/m,y=[],E=[],R=[],S=[];for(let _=0;_<g;_++){const P=_*b-d;for(let N=0;N<p;N++){const F=N*x-c;E.push(F,-P,0),R.push(0,0,1),S.push(N/h),S.push(1-_/m)}}for(let _=0;_<m;_++)for(let P=0;P<h;P++){const N=P+p*_,F=P+p*(_+1),H=P+1+p*(_+1),U=P+1+p*_;y.push(N,F,U),y.push(F,H,U)}this.setIndex(y),this.setAttribute("position",new ai(E,3)),this.setAttribute("normal",new ai(R,3)),this.setAttribute("uv",new ai(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uc(t.width,t.height,t.widthSegments,t.heightSegments)}}class $a extends Pi{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,d=0,h=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:d,thetaLength:h},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const m=Math.min(d+h,Math.PI);let p=0;const g=[],x=new de,b=new de,y=[],E=[],R=[],S=[];for(let _=0;_<=s;_++){const P=[],N=_/s;let F=0;_===0&&d===0?F=.5/i:_===s&&m===Math.PI&&(F=-.5/i);for(let H=0;H<=i;H++){const U=H/i;x.x=-t*Math.cos(l+U*c)*Math.sin(d+N*h),x.y=t*Math.cos(d+N*h),x.z=t*Math.sin(l+U*c)*Math.sin(d+N*h),E.push(x.x,x.y,x.z),b.copy(x).normalize(),R.push(b.x,b.y,b.z),S.push(U+F,1-N),P.push(p++)}g.push(P)}for(let _=0;_<s;_++)for(let P=0;P<i;P++){const N=g[_][P+1],F=g[_][P],H=g[_+1][P],U=g[_+1][P+1];(_!==0||d>0)&&y.push(N,F,U),(_!==s-1||m<Math.PI)&&y.push(F,H,U)}this.setIndex(y),this.setAttribute("position",new ai(E,3)),this.setAttribute("normal",new ai(R,3)),this.setAttribute("uv",new ai(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $a(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Bo extends jo{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ig,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jy extends jo{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ty,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ky extends jo{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Kg extends Ln{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}const vd=new rn,$x=new de,eg=new de;class Xy{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.mapType=Oi,this.map=null,this.mapPass=null,this.matrix=new rn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;$x.setFromMatrixPosition(t.matrixWorld),i.position.copy($x),eg.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(eg),i.updateMatrixWorld(),vd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(vd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Qg extends qg{constructor(t=-1,i=1,s=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,d=s+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class qy extends Xy{constructor(){super(new Qg(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oh extends Kg{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ln.DEFAULT_UP),this.updateMatrix(),this.target=new Ln,this.shadow=new qy}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class zh extends Kg{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wy extends kn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Ph{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function tg(o,t,i,s){const l=Yy(s);switch(i){case Og:return o*t;case Pg:return o*t/l.components*l.byteLength;case Th:return o*t/l.components*l.byteLength;case Ah:return o*t*2/l.components*l.byteLength;case Rh:return o*t*2/l.components*l.byteLength;case zg:return o*t*3/l.components*l.byteLength;case Ei:return o*t*4/l.components*l.byteLength;case Ch:return o*t*4/l.components*l.byteLength;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Tc:case Ac:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case jd:case Xd:return Math.max(o,16)*Math.max(t,8)/4;case Gd:case kd:return Math.max(o,8)*Math.max(t,8)/2;case qd:case Wd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Yd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Kd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Qd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Jd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $d:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case eh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case th:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case nh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case ih:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case ah:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case sh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case rh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case oh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case lh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case ch:case uh:case fh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case dh:case hh:return Math.ceil(o/4)*Math.ceil(t/4)*8;case ph:case mh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yy(o){switch(o){case Oi:case Dg:return{byteLength:1,components:1};case Oo:case Ng:case wr:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case Cs:case Sh:case da:return{byteLength:4,components:1};case Ug:case Lg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:yh}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=yh);function Jg(){let o=null,t=!1,i=null,s=null;function l(c,d){i(c,d),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Zy(o){const t=new WeakMap;function i(h,m){const p=h.array,g=h.usage,x=p.byteLength,b=o.createBuffer();o.bindBuffer(m,b),o.bufferData(m,p,g),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:b,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function s(h,m,p){const g=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,g);else{x.sort((y,E)=>y.start-E.start);let b=0;for(let y=1;y<x.length;y++){const E=x[b],R=x[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++b,x[b]=R)}x.length=b+1;for(let y=0,E=x.length;y<E;y++){const R=x[y];o.bufferSubData(p,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=t.get(h);(!g||g.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}var Ky=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nS=`#ifdef USE_AOMAP
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
#endif`,iS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,aS=`#ifdef USE_BATCHING
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
#endif`,sS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,oS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cS=`#ifdef USE_IRIDESCENCE
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
#endif`,uS=`#ifdef USE_BUMPMAP
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
#endif`,fS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_S=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vS=`#define PI 3.141592653589793
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
} // validated`,bS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yS=`vec3 transformedNormal = objectNormal;
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
#endif`,SS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,MS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ES=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AS="gl_FragColor = linearToOutputTexel( gl_FragColor );",RS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,CS=`#ifdef USE_ENVMAP
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
#endif`,wS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DS=`#ifdef USE_ENVMAP
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
#endif`,NS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,US=`#ifdef USE_ENVMAP
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
#endif`,LS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,PS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,IS=`#ifdef USE_GRADIENTMAP
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
}`,FS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,BS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,HS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VS=`uniform bool receiveShadow;
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
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,jS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,XS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,WS=`PhysicalMaterial material;
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
#endif`,YS=`uniform sampler2D dfgLUT;
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
}`,ZS=`
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
#endif`,KS=`#if defined( RE_IndirectDiffuse )
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
#endif`,QS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,JS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$S=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,aM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sM=`#if defined( USE_POINTS_UV )
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
#endif`,rM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`#ifdef USE_MORPHTARGETS
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
#endif`,dM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_M=`#ifdef USE_NORMALMAP
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
#endif`,vM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,bM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,MM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,RM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,CM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,DM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,NM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,LM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,OM=`float getShadowMask() {
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
}`,zM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,IM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,HM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,VM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,GM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
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
#endif`,qM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,KM=`uniform sampler2D t2D;
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t1=`#include <common>
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
}`,n1=`#if DEPTH_PACKING == 3200
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
}`,i1=`#define DISTANCE
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
}`,a1=`#define DISTANCE
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
}`,s1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o1=`uniform float scale;
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
}`,l1=`uniform vec3 diffuse;
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
}`,c1=`#include <common>
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
}`,u1=`uniform vec3 diffuse;
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
}`,f1=`#define LAMBERT
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
}`,d1=`#define LAMBERT
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
}`,h1=`#define MATCAP
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
}`,p1=`#define MATCAP
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
}`,m1=`#define NORMAL
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
}`,x1=`#define NORMAL
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
}`,g1=`#define PHONG
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
}`,_1=`#define PHONG
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
}`,v1=`#define STANDARD
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
}`,b1=`#define STANDARD
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
}`,y1=`#define TOON
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
}`,S1=`#define TOON
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
}`,M1=`uniform float size;
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
}`,E1=`uniform vec3 diffuse;
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
}`,T1=`#include <common>
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
}`,A1=`uniform vec3 color;
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
}`,R1=`uniform float rotation;
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
}`,C1=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ky,alphahash_pars_fragment:Qy,alphamap_fragment:Jy,alphamap_pars_fragment:$y,alphatest_fragment:eS,alphatest_pars_fragment:tS,aomap_fragment:nS,aomap_pars_fragment:iS,batching_pars_vertex:aS,batching_vertex:sS,begin_vertex:rS,beginnormal_vertex:oS,bsdfs:lS,iridescence_fragment:cS,bumpmap_pars_fragment:uS,clipping_planes_fragment:fS,clipping_planes_pars_fragment:dS,clipping_planes_pars_vertex:hS,clipping_planes_vertex:pS,color_fragment:mS,color_pars_fragment:xS,color_pars_vertex:gS,color_vertex:_S,common:vS,cube_uv_reflection_fragment:bS,defaultnormal_vertex:yS,displacementmap_pars_vertex:SS,displacementmap_vertex:MS,emissivemap_fragment:ES,emissivemap_pars_fragment:TS,colorspace_fragment:AS,colorspace_pars_fragment:RS,envmap_fragment:CS,envmap_common_pars_fragment:wS,envmap_pars_fragment:DS,envmap_pars_vertex:NS,envmap_physical_pars_fragment:GS,envmap_vertex:US,fog_vertex:LS,fog_pars_vertex:OS,fog_fragment:zS,fog_pars_fragment:PS,gradientmap_pars_fragment:IS,lightmap_pars_fragment:FS,lights_lambert_fragment:BS,lights_lambert_pars_fragment:HS,lights_pars_begin:VS,lights_toon_fragment:jS,lights_toon_pars_fragment:kS,lights_phong_fragment:XS,lights_phong_pars_fragment:qS,lights_physical_fragment:WS,lights_physical_pars_fragment:YS,lights_fragment_begin:ZS,lights_fragment_maps:KS,lights_fragment_end:QS,logdepthbuf_fragment:JS,logdepthbuf_pars_fragment:$S,logdepthbuf_pars_vertex:eM,logdepthbuf_vertex:tM,map_fragment:nM,map_pars_fragment:iM,map_particle_fragment:aM,map_particle_pars_fragment:sM,metalnessmap_fragment:rM,metalnessmap_pars_fragment:oM,morphinstance_vertex:lM,morphcolor_vertex:cM,morphnormal_vertex:uM,morphtarget_pars_vertex:fM,morphtarget_vertex:dM,normal_fragment_begin:hM,normal_fragment_maps:pM,normal_pars_fragment:mM,normal_pars_vertex:xM,normal_vertex:gM,normalmap_pars_fragment:_M,clearcoat_normal_fragment_begin:vM,clearcoat_normal_fragment_maps:bM,clearcoat_pars_fragment:yM,iridescence_pars_fragment:SM,opaque_fragment:MM,packing:EM,premultiplied_alpha_fragment:TM,project_vertex:AM,dithering_fragment:RM,dithering_pars_fragment:CM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:DM,shadowmap_pars_fragment:NM,shadowmap_pars_vertex:UM,shadowmap_vertex:LM,shadowmask_pars_fragment:OM,skinbase_vertex:zM,skinning_pars_vertex:PM,skinning_vertex:IM,skinnormal_vertex:FM,specularmap_fragment:BM,specularmap_pars_fragment:HM,tonemapping_fragment:VM,tonemapping_pars_fragment:GM,transmission_fragment:jM,transmission_pars_fragment:kM,uv_pars_fragment:XM,uv_pars_vertex:qM,uv_vertex:WM,worldpos_vertex:YM,background_vert:ZM,background_frag:KM,backgroundCube_vert:QM,backgroundCube_frag:JM,cube_vert:$M,cube_frag:e1,depth_vert:t1,depth_frag:n1,distanceRGBA_vert:i1,distanceRGBA_frag:a1,equirect_vert:s1,equirect_frag:r1,linedashed_vert:o1,linedashed_frag:l1,meshbasic_vert:c1,meshbasic_frag:u1,meshlambert_vert:f1,meshlambert_frag:d1,meshmatcap_vert:h1,meshmatcap_frag:p1,meshnormal_vert:m1,meshnormal_frag:x1,meshphong_vert:g1,meshphong_frag:_1,meshphysical_vert:v1,meshphysical_frag:b1,meshtoon_vert:y1,meshtoon_frag:S1,points_vert:M1,points_frag:E1,shadow_vert:T1,shadow_frag:A1,sprite_vert:R1,sprite_frag:C1},Oe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Di={basic:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:zn([Oe.common,Oe.specularmap,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:zn([Oe.common,Oe.envmap,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.roughnessmap,Oe.metalnessmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:zn([Oe.common,Oe.aomap,Oe.lightmap,Oe.emissivemap,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.gradientmap,Oe.fog,Oe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,Oe.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:zn([Oe.points,Oe.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:zn([Oe.common,Oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:zn([Oe.common,Oe.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:zn([Oe.common,Oe.bumpmap,Oe.normalmap,Oe.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:zn([Oe.sprite,Oe.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:zn([Oe.common,Oe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:zn([Oe.lights,Oe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};Di.physical={uniforms:zn([Di.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const yc={r:0,b:0,g:0},Ss=new zi,w1=new rn;function D1(o,t,i,s,l,c,d){const h=new Tt(0);let m=c===!0?0:1,p,g,x=null,b=0,y=null;function E(N){let F=N.isScene===!0?N.background:null;return F&&F.isTexture&&(F=(N.backgroundBlurriness>0?i:t).get(F)),F}function R(N){let F=!1;const H=E(N);H===null?_(h,m):H&&H.isColor&&(_(H,1),F=!0);const U=o.xr.getEnvironmentBlendMode();U==="additive"?s.buffers.color.setClear(0,0,0,1,d):U==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(N,F){const H=E(F);H&&(H.isCubeTexture||H.mapping===Nc)?(g===void 0&&(g=new hn(new ko(1,1,1),new ma({name:"BackgroundCubeMaterial",uniforms:Cr(Di.backgroundCube.uniforms),vertexShader:Di.backgroundCube.vertexShader,fragmentShader:Di.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(U,B,ee){this.matrixWorld.copyPosition(ee.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Ss.copy(F.backgroundRotation),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),g.material.uniforms.envMap.value=H,g.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(w1.makeRotationFromEuler(Ss)),g.material.toneMapped=Ut.getTransfer(H.colorSpace)!==jt,(x!==H||b!==H.version||y!==o.toneMapping)&&(g.material.needsUpdate=!0,x=H,b=H.version,y=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new hn(new Uc(2,2),new ma({name:"BackgroundMaterial",uniforms:Cr(Di.background.uniforms),vertexShader:Di.background.vertexShader,fragmentShader:Di.background.fragmentShader,side:Qa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Ut.getTransfer(H.colorSpace)!==jt,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(x!==H||b!==H.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,x=H,b=H.version,y=o.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function _(N,F){N.getRGB(yc,Xg(o)),s.buffers.color.setClear(yc.r,yc.g,yc.b,F,d)}function P(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(N,F=1){h.set(N),m=F,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,_(h,m)},render:R,addToRenderList:S,dispose:P}}function N1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=b(null);let c=l,d=!1;function h(C,V,Y,ie,Z){let $=!1;const z=x(ie,Y,V);c!==z&&(c=z,p(c.object)),$=y(C,ie,Y,Z),$&&E(C,ie,Y,Z),Z!==null&&t.update(Z,o.ELEMENT_ARRAY_BUFFER),($||d)&&(d=!1,F(C,V,Y,ie),Z!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Z).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function g(C){return o.deleteVertexArray(C)}function x(C,V,Y){const ie=Y.wireframe===!0;let Z=s[C.id];Z===void 0&&(Z={},s[C.id]=Z);let $=Z[V.id];$===void 0&&($={},Z[V.id]=$);let z=$[ie];return z===void 0&&(z=b(m()),$[ie]=z),z}function b(C){const V=[],Y=[],ie=[];for(let Z=0;Z<i;Z++)V[Z]=0,Y[Z]=0,ie[Z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:ie,object:C,attributes:{},index:null}}function y(C,V,Y,ie){const Z=c.attributes,$=V.attributes;let z=0;const q=Y.getAttributes();for(const L in q)if(q[L].location>=0){const ne=Z[L];let O=$[L];if(O===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(O=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(O=C.instanceColor)),ne===void 0||ne.attribute!==O||O&&ne.data!==O.data)return!0;z++}return c.attributesNum!==z||c.index!==ie}function E(C,V,Y,ie){const Z={},$=V.attributes;let z=0;const q=Y.getAttributes();for(const L in q)if(q[L].location>=0){let ne=$[L];ne===void 0&&(L==="instanceMatrix"&&C.instanceMatrix&&(ne=C.instanceMatrix),L==="instanceColor"&&C.instanceColor&&(ne=C.instanceColor));const O={};O.attribute=ne,ne&&ne.data&&(O.data=ne.data),Z[L]=O,z++}c.attributes=Z,c.attributesNum=z,c.index=ie}function R(){const C=c.newAttributes;for(let V=0,Y=C.length;V<Y;V++)C[V]=0}function S(C){_(C,0)}function _(C,V){const Y=c.newAttributes,ie=c.enabledAttributes,Z=c.attributeDivisors;Y[C]=1,ie[C]===0&&(o.enableVertexAttribArray(C),ie[C]=1),Z[C]!==V&&(o.vertexAttribDivisor(C,V),Z[C]=V)}function P(){const C=c.newAttributes,V=c.enabledAttributes;for(let Y=0,ie=V.length;Y<ie;Y++)V[Y]!==C[Y]&&(o.disableVertexAttribArray(Y),V[Y]=0)}function N(C,V,Y,ie,Z,$,z){z===!0?o.vertexAttribIPointer(C,V,Y,Z,$):o.vertexAttribPointer(C,V,Y,ie,Z,$)}function F(C,V,Y,ie){R();const Z=ie.attributes,$=Y.getAttributes(),z=V.defaultAttributeValues;for(const q in $){const L=$[q];if(L.location>=0){let k=Z[q];if(k===void 0&&(q==="instanceMatrix"&&C.instanceMatrix&&(k=C.instanceMatrix),q==="instanceColor"&&C.instanceColor&&(k=C.instanceColor)),k!==void 0){const ne=k.normalized,O=k.itemSize,K=t.get(k);if(K===void 0)continue;const me=K.buffer,ye=K.type,Ae=K.bytesPerElement,ae=ye===o.INT||ye===o.UNSIGNED_INT||k.gpuType===Sh;if(k.isInterleavedBufferAttribute){const he=k.data,De=he.stride,Be=k.offset;if(he.isInstancedInterleavedBuffer){for(let je=0;je<L.locationSize;je++)_(L.location+je,he.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let je=0;je<L.locationSize;je++)S(L.location+je);o.bindBuffer(o.ARRAY_BUFFER,me);for(let je=0;je<L.locationSize;je++)N(L.location+je,O/L.locationSize,ye,ne,De*Ae,(Be+O/L.locationSize*je)*Ae,ae)}else{if(k.isInstancedBufferAttribute){for(let he=0;he<L.locationSize;he++)_(L.location+he,k.meshPerAttribute);C.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let he=0;he<L.locationSize;he++)S(L.location+he);o.bindBuffer(o.ARRAY_BUFFER,me);for(let he=0;he<L.locationSize;he++)N(L.location+he,O/L.locationSize,ye,ne,O*Ae,O/L.locationSize*he*Ae,ae)}}else if(z!==void 0){const ne=z[q];if(ne!==void 0)switch(ne.length){case 2:o.vertexAttrib2fv(L.location,ne);break;case 3:o.vertexAttrib3fv(L.location,ne);break;case 4:o.vertexAttrib4fv(L.location,ne);break;default:o.vertexAttrib1fv(L.location,ne)}}}}P()}function H(){ee();for(const C in s){const V=s[C];for(const Y in V){const ie=V[Y];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete V[Y]}delete s[C]}}function U(C){if(s[C.id]===void 0)return;const V=s[C.id];for(const Y in V){const ie=V[Y];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete V[Y]}delete s[C.id]}function B(C){for(const V in s){const Y=s[V];if(Y[C.id]===void 0)continue;const ie=Y[C.id];for(const Z in ie)g(ie[Z].object),delete ie[Z];delete Y[C.id]}}function ee(){D(),d=!0,c!==l&&(c=l,p(c.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ee,resetDefaultState:D,dispose:H,releaseStatesOfGeometry:U,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:S,disableUnusedAttributes:P}}function U1(o,t,i){let s;function l(p){s=p}function c(p,g){o.drawArrays(s,p,g),i.update(g,s,1)}function d(p,g,x){x!==0&&(o.drawArraysInstanced(s,p,g,x),i.update(g,s,x))}function h(p,g,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,x);let y=0;for(let E=0;E<x;E++)y+=g[E];i.update(y,s,1)}function m(p,g,x,b){if(x===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<p.length;E++)d(p[E],g[E],b[E]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,g,0,b,0,x);let E=0;for(let R=0;R<x;R++)E+=g[R]*b[R];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function L1(o,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==Ei&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const ee=B===wr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==Oi&&s.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==da&&!ee)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(ct("WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const x=i.logarithmicDepthBuffer===!0,b=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,U=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:b,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:F,vertexTextures:H,maxSamples:U}}function O1(o){const t=this;let i=null,s=0,l=!1,c=!1;const d=new Es,h=new dt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,b){const y=x.length!==0||b||s!==0||l;return l=b,s=x.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(x,b){i=g(x,b,0)},this.setState=function(x,b,y){const E=x.clippingPlanes,R=x.clipIntersection,S=x.clipShadows,_=o.get(x);if(!l||E===null||E.length===0||c&&!S)c?g(null):p();else{const P=c?0:s,N=P*4;let F=_.clippingState||null;m.value=F,F=g(E,b,N,y);for(let H=0;H!==N;++H)F[H]=i[H];_.clippingState=F,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function g(x,b,y,E){const R=x!==null?x.length:0;let S=null;if(R!==0){if(S=m.value,E!==!0||S===null){const _=y+R*4,P=b.matrixWorldInverse;h.getNormalMatrix(P),(S===null||S.length<_)&&(S=new Float32Array(_));for(let N=0,F=y;N!==R;++N,F+=4)d.copy(x[N]).applyMatrix4(P,h),d.normal.toArray(S,F),S[F+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,S}}function z1(o){let t=new WeakMap;function i(d,h){return h===Fd?d.mapping=Tr:h===Bd&&(d.mapping=Ar),d}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Fd||h===Bd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Iy(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const Ya=4,ng=[.125,.215,.35,.446,.526,.582],As=20,P1=256,Uo=new Qg,ig=new Tt;let bd=null,yd=0,Sd=0,Md=!1;const I1=new de;class ag{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,c={}){const{size:d=256,position:h=I1}=c;bd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=og(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bd,yd,Sd),this._renderer.xr.enabled=Md,t.scissorTest=!1,yr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Tr||t.mapping===Ar?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bd=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:mi,minFilter:mi,generateMipmaps:!1,type:wr,format:Ei,colorSpace:Rr,depthBuffer:!1},l=sg(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sg(t,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=F1(c)),this._blurMaterial=H1(c,t,i)}return l}_compileMaterial(t){const i=new hn(new Pi,t);this._renderer.compile(i,Uo)}_sceneToCubeUV(t,i,s,l,c){const m=new kn(90,1,i,s),p=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],x=this._renderer,b=x.autoClear,y=x.toneMapping;x.getClearColor(ig),x.toneMapping=Ka,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new hn(new ko,new Ja({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,S=R.material;let _=!1;const P=t.background;P?P.isColor&&(S.color.copy(P),t.background=null,_=!0):(S.color.copy(ig),_=!0);for(let N=0;N<6;N++){const F=N%3;F===0?(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x+g[N],c.y,c.z)):F===1?(m.up.set(0,0,p[N]),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y+g[N],c.z)):(m.up.set(0,p[N],0),m.position.set(c.x,c.y,c.z),m.lookAt(c.x,c.y,c.z+g[N]));const H=this._cubeSize;yr(l,F*H,N>2?H:0,H,H),x.setRenderTarget(l),_&&x.render(R,m),x.render(t,m)}x.toneMapping=y,x.autoClear=b,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Tr||t.mapping===Ar;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=og()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const c=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const h=c.uniforms;h.envMap.value=t;const m=this._cubeSize;yr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(d,Uo)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(t,c-1,c);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,c=this._pingPongRenderTarget;if(this._ggxMaterial===null){const P=3*Math.max(this._cubeSize,16),N=4*this._cubeSize;this._ggxMaterial=B1(this._lodMax,P,N)}const d=this._ggxMaterial,h=this._lodMeshes[s];h.material=d;const m=d.uniforms,p=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-g*g),b=.05+p*.95,y=x*b,{_lodMax:E}=this,R=this._sizeLods[s],S=3*R*(s>E-Ya?s-E+Ya:0),_=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=E-i,yr(c,S,_,3*R,2*R),l.setRenderTarget(c),l.render(h,Uo),m.envMap.value=c.texture,m.roughness.value=0,m.mipInt.value=E-s,yr(t,S,_,3*R,2*R),l.setRenderTarget(t),l.render(h,Uo)}_blur(t,i,s,l,c){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,s,l,"latitudinal",c),this._halfBlur(d,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&sn("blur direction must be either latitudinal or longitudinal!");const g=3,x=this._lodMeshes[l];x.material=p;const b=p.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*As-1),R=c/E,S=isFinite(c)?1+Math.floor(g*R):As;S>As&&ct(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${As}`);const _=[];let P=0;for(let B=0;B<As;++B){const ee=B/R,D=Math.exp(-ee*ee/2);_.push(D),B===0?P+=D:B<S&&(P+=2*D)}for(let B=0;B<_.length;B++)_[B]=_[B]/P;b.envMap.value=t.texture,b.samples.value=S,b.weights.value=_,b.latitudinal.value=d==="latitudinal",h&&(b.poleAxis.value=h);const{_lodMax:N}=this;b.dTheta.value=E,b.mipInt.value=N-s;const F=this._sizeLods[l],H=3*F*(l>N-Ya?l-N+Ya:0),U=4*(this._cubeSize-F);yr(i,H,U,3*F,2*F),m.setRenderTarget(i),m.render(x,Uo)}}function F1(o){const t=[],i=[],s=[];let l=o;const c=o-Ya+1+ng.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Ya?m=ng[d-o+Ya-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),g=-p,x=1+p,b=[g,g,x,g,x,x,g,g,x,x,g,x],y=6,E=6,R=3,S=2,_=1,P=new Float32Array(R*E*y),N=new Float32Array(S*E*y),F=new Float32Array(_*E*y);for(let U=0;U<y;U++){const B=U%3*2/3-1,ee=U>2?0:-1,D=[B,ee,0,B+2/3,ee,0,B+2/3,ee+1,0,B,ee,0,B+2/3,ee+1,0,B,ee+1,0];P.set(D,R*E*U),N.set(b,S*E*U);const C=[U,U,U,U,U,U];F.set(C,_*E*U)}const H=new Pi;H.setAttribute("position",new Li(P,R)),H.setAttribute("uv",new Li(N,S)),H.setAttribute("faceIndex",new Li(F,_)),s.push(new hn(H,null)),l>Ya&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function sg(o,t,i){const s=new ws(o,t,i);return s.texture.mapping=Nc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function yr(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function B1(o,t,i){return new ma({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:P1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function H1(o,t,i){const s=new Float32Array(As),l=new de(0,1,0);return new ma({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function rg(){return new ma({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lc(),fragmentShader:`

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
		`,blending:ha,depthTest:!1,depthWrite:!1})}function og(){return new ma({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ha,depthTest:!1,depthWrite:!1})}function Lc(){return`

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
	`}function V1(o){let t=new WeakMap,i=null;function s(h){if(h&&h.isTexture){const m=h.mapping,p=m===Fd||m===Bd,g=m===Tr||m===Ar;if(p||g){let x=t.get(h);const b=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==b)return i===null&&(i=new ag(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const y=h.image;return p&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new ag(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",c),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function G1(o){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=o.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fo("WebGLRenderer: "+s+" extension not supported."),l}}}function j1(o,t,i,s){const l={},c=new WeakMap;function d(x){const b=x.target;b.index!==null&&t.remove(b.index);for(const E in b.attributes)t.remove(b.attributes[E]);b.removeEventListener("dispose",d),delete l[b.id];const y=c.get(b);y&&(t.remove(y),c.delete(b)),s.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,i.memory.geometries--}function h(x,b){return l[b.id]===!0||(b.addEventListener("dispose",d),l[b.id]=!0,i.memory.geometries++),b}function m(x){const b=x.attributes;for(const y in b)t.update(b[y],o.ARRAY_BUFFER)}function p(x){const b=[],y=x.index,E=x.attributes.position;let R=0;if(y!==null){const P=y.array;R=y.version;for(let N=0,F=P.length;N<F;N+=3){const H=P[N+0],U=P[N+1],B=P[N+2];b.push(H,U,U,B,B,H)}}else if(E!==void 0){const P=E.array;R=E.version;for(let N=0,F=P.length/3-1;N<F;N+=3){const H=N+0,U=N+1,B=N+2;b.push(H,U,U,B,B,H)}}else return;const S=new(Bg(b)?kg:jg)(b,1);S.version=R;const _=c.get(x);_&&t.remove(_),c.set(x,S)}function g(x){const b=c.get(x);if(b){const y=x.index;y!==null&&b.version<y.version&&p(x)}else p(x);return c.get(x)}return{get:h,update:m,getWireframeAttribute:g}}function k1(o,t,i){let s;function l(b){s=b}let c,d;function h(b){c=b.type,d=b.bytesPerElement}function m(b,y){o.drawElements(s,y,c,b*d),i.update(y,s,1)}function p(b,y,E){E!==0&&(o.drawElementsInstanced(s,y,c,b*d,E),i.update(y,s,E))}function g(b,y,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,b,0,E);let S=0;for(let _=0;_<E;_++)S+=y[_];i.update(S,s,1)}function x(b,y,E,R){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<b.length;_++)p(b[_]/d,y[_],R[_]);else{S.multiDrawElementsInstancedWEBGL(s,y,0,c,b,0,R,0,E);let _=0;for(let P=0;P<E;P++)_+=y[P]*R[P];i.update(_,s,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=x}function X1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:sn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function q1(o,t,i){const s=new WeakMap,l=new tn;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=g!==void 0?g.length:0;let b=s.get(h);if(b===void 0||b.count!==x){let C=function(){ee.dispose(),s.delete(h),h.removeEventListener("dispose",C)};var y=C;b!==void 0&&b.texture.dispose();const E=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],N=h.morphAttributes.color||[];let F=0;E===!0&&(F=1),R===!0&&(F=2),S===!0&&(F=3);let H=h.attributes.position.count*F,U=1;H>t.maxTextureSize&&(U=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const B=new Float32Array(H*U*4*x),ee=new Hg(B,H,U,x);ee.type=da,ee.needsUpdate=!0;const D=F*4;for(let V=0;V<x;V++){const Y=_[V],ie=P[V],Z=N[V],$=H*U*4*V;for(let z=0;z<Y.count;z++){const q=z*D;E===!0&&(l.fromBufferAttribute(Y,z),B[$+q+0]=l.x,B[$+q+1]=l.y,B[$+q+2]=l.z,B[$+q+3]=0),R===!0&&(l.fromBufferAttribute(ie,z),B[$+q+4]=l.x,B[$+q+5]=l.y,B[$+q+6]=l.z,B[$+q+7]=0),S===!0&&(l.fromBufferAttribute(Z,z),B[$+q+8]=l.x,B[$+q+9]=l.y,B[$+q+10]=l.z,B[$+q+11]=Z.itemSize===4?l.w:1)}}b={count:x,texture:ee,size:new Lt(H,U)},s.set(h,b),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let E=0;for(let S=0;S<p.length;S++)E+=p[S];const R=h.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",b.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",b.size)}return{update:c}}function W1(o,t,i,s){let l=new WeakMap;function c(m){const p=s.render.frame,g=m.geometry,x=t.get(m,g);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const b=m.skeleton;l.get(b)!==p&&(b.update(),l.set(b,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}const $g=new Pn,lg=new Yg(1,1),e_=new Hg,t_=new vy,n_=new Wg,cg=[],ug=[],fg=new Float32Array(16),dg=new Float32Array(9),hg=new Float32Array(4);function Nr(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let c=cg[l];if(c===void 0&&(c=new Float32Array(l),cg[l]=c),t!==0){s.toArray(c,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(c,h)}return c}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function _n(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function Oc(o,t){let i=ug[t];i===void 0&&(i=new Int32Array(t),ug[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Y1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),_n(i,t)}}function K1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),_n(i,t)}}function Q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),_n(i,t)}}function J1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;hg.set(s),o.uniformMatrix2fv(this.addr,!1,hg),_n(i,s)}}function $1(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;dg.set(s),o.uniformMatrix3fv(this.addr,!1,dg),_n(i,s)}}function e3(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),_n(i,t)}else{if(gn(i,s))return;fg.set(s),o.uniformMatrix4fv(this.addr,!1,fg),_n(i,s)}}function t3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function n3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),_n(i,t)}}function i3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),_n(i,t)}}function a3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),_n(i,t)}}function s3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function r3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),_n(i,t)}}function o3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),_n(i,t)}}function l3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),_n(i,t)}}function c3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(lg.compareFunction=Fg,c=lg):c=$g,i.setTexture2D(t||c,l)}function u3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||t_,l)}function f3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||n_,l)}function d3(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||e_,l)}function h3(o){switch(o){case 5126:return Y1;case 35664:return Z1;case 35665:return K1;case 35666:return Q1;case 35674:return J1;case 35675:return $1;case 35676:return e3;case 5124:case 35670:return t3;case 35667:case 35671:return n3;case 35668:case 35672:return i3;case 35669:case 35673:return a3;case 5125:return s3;case 36294:return r3;case 36295:return o3;case 36296:return l3;case 35678:case 36198:case 36298:case 36306:case 35682:return c3;case 35679:case 36299:case 36307:return u3;case 35680:case 36300:case 36308:case 36293:return f3;case 36289:case 36303:case 36311:case 36292:return d3}}function p3(o,t){o.uniform1fv(this.addr,t)}function m3(o,t){const i=Nr(t,this.size,2);o.uniform2fv(this.addr,i)}function x3(o,t){const i=Nr(t,this.size,3);o.uniform3fv(this.addr,i)}function g3(o,t){const i=Nr(t,this.size,4);o.uniform4fv(this.addr,i)}function _3(o,t){const i=Nr(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function v3(o,t){const i=Nr(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function b3(o,t){const i=Nr(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function y3(o,t){o.uniform1iv(this.addr,t)}function S3(o,t){o.uniform2iv(this.addr,t)}function M3(o,t){o.uniform3iv(this.addr,t)}function E3(o,t){o.uniform4iv(this.addr,t)}function T3(o,t){o.uniform1uiv(this.addr,t)}function A3(o,t){o.uniform2uiv(this.addr,t)}function R3(o,t){o.uniform3uiv(this.addr,t)}function C3(o,t){o.uniform4uiv(this.addr,t)}function w3(o,t,i){const s=this.cache,l=t.length,c=Oc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||$g,c[d])}function D3(o,t,i){const s=this.cache,l=t.length,c=Oc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||t_,c[d])}function N3(o,t,i){const s=this.cache,l=t.length,c=Oc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||n_,c[d])}function U3(o,t,i){const s=this.cache,l=t.length,c=Oc(i,l);gn(s,c)||(o.uniform1iv(this.addr,c),_n(s,c));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||e_,c[d])}function L3(o){switch(o){case 5126:return p3;case 35664:return m3;case 35665:return x3;case 35666:return g3;case 35674:return _3;case 35675:return v3;case 35676:return b3;case 5124:case 35670:return y3;case 35667:case 35671:return S3;case 35668:case 35672:return M3;case 35669:case 35673:return E3;case 5125:return T3;case 36294:return A3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return w3;case 35679:case 36299:case 36307:return D3;case 35680:case 36300:case 36308:case 36293:return N3;case 36289:case 36303:case 36311:case 36292:return U3}}class O3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=h3(i.type)}}class z3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=L3(i.type)}}class P3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(t,i[h.id],s)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function pg(o,t){o.seq.push(t),o.map[t.id]=t}function I3(o,t,i){const s=o.name,l=s.length;for(Ed.lastIndex=0;;){const c=Ed.exec(s),d=Ed.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){pg(i,p===void 0?new O3(h,o,t):new z3(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new P3(h),pg(i,x)),i=x}}}class Rc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),d=t.getUniformLocation(i,c.name);I3(c,d,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=s[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const d=t[l];d.id in i&&s.push(d)}return s}}function mg(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const F3=37297;let B3=0;function H3(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let d=l;d<c;d++){const h=d+1;s.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return s.join(`
`)}const xg=new dt;function V3(o){Ut._getMatrix(xg,Ut.workingColorSpace,o);const t=`mat3( ${xg.elements.map(i=>i.toFixed(4))} )`;switch(Ut.getTransfer(o)){case Cc:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function gg(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),c=(o.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+c+`

`+H3(o.getShaderSource(t),h)}else return c}function G3(o,t){const i=V3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function j3(o,t){let i;switch(t){case Wb:i="Linear";break;case Yb:i="Reinhard";break;case Zb:i="Cineon";break;case Kb:i="ACESFilmic";break;case Jb:i="AgX";break;case $b:i="Neutral";break;case Qb:i="Custom";break;default:ct("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new de;function k3(){Ut.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function q3(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function W3(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(t,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Lo(o){return o!==""}function _g(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Y3=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(o){return o.replace(Y3,K3)}const Z3=new Map;function K3(o,t){let i=mt[t];if(i===void 0){const s=Z3.get(t);if(s!==void 0)i=mt[s],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return gh(i)}const Q3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bg(o){return o.replace(Q3,J3)}function J3(o,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function yg(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function $3(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Rg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===Ab?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ca&&(t="SHADOWMAP_TYPE_VSM"),t}function eE(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Tr:case Ar:t="ENVMAP_TYPE_CUBE";break;case Nc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function tE(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ar:t="ENVMAP_MODE_REFRACTION";break}return t}function nE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Cg:t="ENVMAP_BLENDING_MULTIPLY";break;case Xb:t="ENVMAP_BLENDING_MIX";break;case qb:t="ENVMAP_BLENDING_ADD";break}return t}function iE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function aE(o,t,i,s){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=$3(i),p=eE(i),g=tE(i),x=nE(i),b=iE(i),y=X3(i),E=q3(c),R=l.createProgram();let S,_,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(S=[yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+x:"",b?"#define CUBEUV_TEXEL_WIDTH "+b.texelWidth:"",b?"#define CUBEUV_TEXEL_HEIGHT "+b.texelHeight:"",b?"#define CUBEUV_MAX_MIP "+b.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ka?"#define TONE_MAPPING":"",i.toneMapping!==Ka?mt.tonemapping_pars_fragment:"",i.toneMapping!==Ka?j3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,G3("linearToOutputTexel",i.outputColorSpace),k3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=gh(d),d=_g(d,i),d=vg(d,i),h=gh(h),h=_g(h,i),h=vg(h,i),d=bg(d),h=bg(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Ox?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ox?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const N=P+S+d,F=P+_+h,H=mg(l,l.VERTEX_SHADER,N),U=mg(l,l.FRAGMENT_SHADER,F);l.attachShader(R,H),l.attachShader(R,U),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function B(V){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(R)||"",ie=l.getShaderInfoLog(H)||"",Z=l.getShaderInfoLog(U)||"",$=Y.trim(),z=ie.trim(),q=Z.trim();let L=!0,k=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(L=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,H,U);else{const ne=gg(l,H,"vertex"),O=gg(l,U,"fragment");sn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+ne+`
`+O)}else $!==""?ct("WebGLProgram: Program Info Log:",$):(z===""||q==="")&&(k=!1);k&&(V.diagnostics={runnable:L,programLog:$,vertexShader:{log:z,prefix:S},fragmentShader:{log:q,prefix:_}})}l.deleteShader(H),l.deleteShader(U),ee=new Rc(l,R),D=W3(l,R)}let ee;this.getUniforms=function(){return ee===void 0&&B(this),ee};let D;this.getAttributes=function(){return D===void 0&&B(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,F3)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=B3++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=H,this.fragmentShader=U,this}let sE=0;class rE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new oE(t),i.set(t,s)),s}}class oE{constructor(t){this.id=sE++,this.code=t,this.usedTimes=0}}function lE(o,t,i,s,l,c,d){const h=new Vg,m=new rE,p=new Set,g=[],x=l.logarithmicDepthBuffer,b=l.vertexTextures;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return p.add(D),D===0?"uv":`uv${D}`}function S(D,C,V,Y,ie){const Z=Y.fog,$=ie.geometry,z=D.isMeshStandardMaterial?Y.environment:null,q=(D.isMeshStandardMaterial?i:t).get(D.envMap||z),L=q&&q.mapping===Nc?q.image.height:null,k=E[D.type];D.precision!==null&&(y=l.getMaxPrecision(D.precision),y!==D.precision&&ct("WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const ne=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,O=ne!==void 0?ne.length:0;let K=0;$.morphAttributes.position!==void 0&&(K=1),$.morphAttributes.normal!==void 0&&(K=2),$.morphAttributes.color!==void 0&&(K=3);let me,ye,Ae,ae;if(k){const Ct=Di[k];me=Ct.vertexShader,ye=Ct.fragmentShader}else me=D.vertexShader,ye=D.fragmentShader,m.update(D),Ae=m.getVertexShaderID(D),ae=m.getFragmentShaderID(D);const he=o.getRenderTarget(),De=o.state.buffers.depth.getReversed(),Be=ie.isInstancedMesh===!0,je=ie.isBatchedMesh===!0,ot=!!D.map,Zt=!!D.matcap,ht=!!q,Rt=!!D.aoMap,j=!!D.lightMap,pt=!!D.bumpMap,xt=!!D.normalMap,Pt=!!D.displacementMap,Ve=!!D.emissiveMap,kt=!!D.metalnessMap,Ye=!!D.roughnessMap,st=D.anisotropy>0,I=D.clearcoat>0,T=D.dispersion>0,re=D.iridescence>0,_e=D.sheen>0,Se=D.transmission>0,pe=st&&!!D.anisotropyMap,qe=I&&!!D.clearcoatMap,Le=I&&!!D.clearcoatNormalMap,Qe=I&&!!D.clearcoatRoughnessMap,Xe=re&&!!D.iridescenceMap,Me=re&&!!D.iridescenceThicknessMap,Te=_e&&!!D.sheenColorMap,We=_e&&!!D.sheenRoughnessMap,Ge=!!D.specularMap,ze=!!D.specularColorMap,it=!!D.specularIntensityMap,X=Se&&!!D.transmissionMap,Ne=Se&&!!D.thicknessMap,Ce=!!D.gradientMap,we=!!D.alphaMap,Ee=D.alphaTest>0,be=!!D.alphaHash,Ie=!!D.extensions;let at=Ka;D.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(at=o.toneMapping);const Bt={shaderID:k,shaderType:D.type,shaderName:D.name,vertexShader:me,fragmentShader:ye,defines:D.defines,customVertexShaderID:Ae,customFragmentShaderID:ae,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:je,batchingColor:je&&ie._colorsTexture!==null,instancing:Be,instancingColor:Be&&ie.instanceColor!==null,instancingMorph:Be&&ie.morphTexture!==null,supportsVertexTextures:b,outputColorSpace:he===null?o.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Rr,alphaToCoverage:!!D.alphaToCoverage,map:ot,matcap:Zt,envMap:ht,envMapMode:ht&&q.mapping,envMapCubeUVHeight:L,aoMap:Rt,lightMap:j,bumpMap:pt,normalMap:xt,displacementMap:b&&Pt,emissiveMap:Ve,normalMapObjectSpace:xt&&D.normalMapType===iy,normalMapTangentSpace:xt&&D.normalMapType===Ig,metalnessMap:kt,roughnessMap:Ye,anisotropy:st,anisotropyMap:pe,clearcoat:I,clearcoatMap:qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,dispersion:T,iridescence:re,iridescenceMap:Xe,iridescenceThicknessMap:Me,sheen:_e,sheenColorMap:Te,sheenRoughnessMap:We,specularMap:Ge,specularColorMap:ze,specularIntensityMap:it,transmission:Se,transmissionMap:X,thicknessMap:Ne,gradientMap:Ce,opaque:D.transparent===!1&&D.blending===Sr&&D.alphaToCoverage===!1,alphaMap:we,alphaTest:Ee,alphaHash:be,combine:D.combine,mapUv:ot&&R(D.map.channel),aoMapUv:Rt&&R(D.aoMap.channel),lightMapUv:j&&R(D.lightMap.channel),bumpMapUv:pt&&R(D.bumpMap.channel),normalMapUv:xt&&R(D.normalMap.channel),displacementMapUv:Pt&&R(D.displacementMap.channel),emissiveMapUv:Ve&&R(D.emissiveMap.channel),metalnessMapUv:kt&&R(D.metalnessMap.channel),roughnessMapUv:Ye&&R(D.roughnessMap.channel),anisotropyMapUv:pe&&R(D.anisotropyMap.channel),clearcoatMapUv:qe&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Le&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:We&&R(D.sheenRoughnessMap.channel),specularMapUv:Ge&&R(D.specularMap.channel),specularColorMapUv:ze&&R(D.specularColorMap.channel),specularIntensityMapUv:it&&R(D.specularIntensityMap.channel),transmissionMapUv:X&&R(D.transmissionMap.channel),thicknessMapUv:Ne&&R(D.thicknessMap.channel),alphaMapUv:we&&R(D.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(xt||st),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:ie.isPoints===!0&&!!$.attributes.uv&&(ot||we),fog:!!Z,useFog:D.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:De,skinning:ie.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:K,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:at,decodeVideoTexture:ot&&D.map.isVideoTexture===!0&&Ut.getTransfer(D.map.colorSpace)===jt,decodeVideoTextureEmissive:Ve&&D.emissiveMap.isVideoTexture===!0&&Ut.getTransfer(D.emissiveMap.colorSpace)===jt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===ua,flipSided:D.side===Xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Ie&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&D.extensions.multiDraw===!0||je)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function _(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const V in D.defines)C.push(V),C.push(D.defines[V]);return D.isRawShaderMaterial===!1&&(P(C,D),N(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function P(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function N(D,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),D.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),D.push(h.mask)}function F(D){const C=E[D.type];let V;if(C){const Y=Di[C];V=Ly.clone(Y.uniforms)}else V=D.uniforms;return V}function H(D,C){let V;for(let Y=0,ie=g.length;Y<ie;Y++){const Z=g[Y];if(Z.cacheKey===C){V=Z,++V.usedTimes;break}}return V===void 0&&(V=new aE(o,C,D,c),g.push(V)),V}function U(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function B(D){m.remove(D)}function ee(){m.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:F,acquireProgram:H,releaseProgram:U,releaseShaderCache:B,programs:g,dispose:ee}}function cE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function s(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function c(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function uE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function Sg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Mg(){const o=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function d(x,b,y,E,R,S){let _=o[t];return _===void 0?(_={id:x.id,object:x,geometry:b,material:y,groupOrder:E,renderOrder:x.renderOrder,z:R,group:S},o[t]=_):(_.id=x.id,_.object=x,_.geometry=b,_.material=y,_.groupOrder=E,_.renderOrder=x.renderOrder,_.z=R,_.group=S),t++,_}function h(x,b,y,E,R,S){const _=d(x,b,y,E,R,S);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function m(x,b,y,E,R,S){const _=d(x,b,y,E,R,S);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function p(x,b){i.length>1&&i.sort(x||uE),s.length>1&&s.sort(b||Sg),l.length>1&&l.sort(b||Sg)}function g(){for(let x=t,b=o.length;x<b;x++){const y=o[x];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function fE(){let o=new WeakMap;function t(s,l){const c=o.get(s);let d;return c===void 0?(d=new Mg,o.set(s,[d])):l>=c.length?(d=new Mg,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function dE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new de,color:new Tt};break;case"SpotLight":i={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":i={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return o[t.id]=i,i}}}function hE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let pE=0;function mE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function xE(o){const t=new dE,i=hE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new de);const l=new de,c=new rn,d=new rn;function h(p){let g=0,x=0,b=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let y=0,E=0,R=0,S=0,_=0,P=0,N=0,F=0,H=0,U=0,B=0;p.sort(mE);for(let D=0,C=p.length;D<C;D++){const V=p[D],Y=V.color,ie=V.intensity,Z=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)g+=Y.r*ie,x+=Y.g*ie,b+=Y.b*ie;else if(V.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(V.sh.coefficients[z],ie);B++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const q=V.shadow,L=i.get(V);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,s.directionalShadow[y]=L,s.directionalShadowMap[y]=$,s.directionalShadowMatrix[y]=V.shadow.matrix,P++}s.directional[y]=z,y++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(Y).multiplyScalar(ie),z.distance=Z,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,s.spot[R]=z;const q=V.shadow;if(V.map&&(s.spotLightMap[H]=V.map,H++,q.updateMatrices(V),V.castShadow&&U++),s.spotLightMatrix[R]=q.matrix,V.castShadow){const L=i.get(V);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,s.spotShadow[R]=L,s.spotShadowMap[R]=$,F++}R++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(Y).multiplyScalar(ie),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),s.rectArea[S]=z,S++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const q=V.shadow,L=i.get(V);L.shadowIntensity=q.intensity,L.shadowBias=q.bias,L.shadowNormalBias=q.normalBias,L.shadowRadius=q.radius,L.shadowMapSize=q.mapSize,L.shadowCameraNear=q.camera.near,L.shadowCameraFar=q.camera.far,s.pointShadow[E]=L,s.pointShadowMap[E]=$,s.pointShadowMatrix[E]=V.shadow.matrix,N++}s.point[E]=z,E++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(ie),z.groundColor.copy(V.groundColor).multiplyScalar(ie),s.hemi[_]=z,_++}}S>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Oe.LTC_FLOAT_1,s.rectAreaLTC2=Oe.LTC_FLOAT_2):(s.rectAreaLTC1=Oe.LTC_HALF_1,s.rectAreaLTC2=Oe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=x,s.ambient[2]=b;const ee=s.hash;(ee.directionalLength!==y||ee.pointLength!==E||ee.spotLength!==R||ee.rectAreaLength!==S||ee.hemiLength!==_||ee.numDirectionalShadows!==P||ee.numPointShadows!==N||ee.numSpotShadows!==F||ee.numSpotMaps!==H||ee.numLightProbes!==B)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=F,s.spotShadowMap.length=F,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=F+H-U,s.spotLightMap.length=H,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=B,ee.directionalLength=y,ee.pointLength=E,ee.spotLength=R,ee.rectAreaLength=S,ee.hemiLength=_,ee.numDirectionalShadows=P,ee.numPointShadows=N,ee.numSpotShadows=F,ee.numSpotMaps=H,ee.numLightProbes=B,s.version=pE++)}function m(p,g){let x=0,b=0,y=0,E=0,R=0;const S=g.matrixWorldInverse;for(let _=0,P=p.length;_<P;_++){const N=p[_];if(N.isDirectionalLight){const F=s.directional[x];F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),x++}else if(N.isSpotLight){const F=s.spot[y];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),F.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(S),y++}else if(N.isRectAreaLight){const F=s.rectArea[E];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),d.identity(),c.copy(N.matrixWorld),c.premultiply(S),d.extractRotation(c),F.halfWidth.set(N.width*.5,0,0),F.halfHeight.set(0,N.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),E++}else if(N.isPointLight){const F=s.point[b];F.position.setFromMatrixPosition(N.matrixWorld),F.position.applyMatrix4(S),b++}else if(N.isHemisphereLight){const F=s.hemi[R];F.direction.setFromMatrixPosition(N.matrixWorld),F.direction.transformDirection(S),R++}}}return{setup:h,setupView:m,state:s}}function Eg(o){const t=new xE(o),i=[],s=[];function l(g){p.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function d(g){s.push(g)}function h(){t.setup(i)}function m(g){t.setupView(i,g)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function gE(o){let t=new WeakMap;function i(l,c=0){const d=t.get(l);let h;return d===void 0?(h=new Eg(o),t.set(l,[h])):c>=d.length?(h=new Eg(o),d.push(h)):h=d[c],h}function s(){t=new WeakMap}return{get:i,dispose:s}}const _E=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vE=`uniform sampler2D shadow_pass;
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
}`;function bE(o,t,i){let s=new Uh;const l=new Lt,c=new Lt,d=new tn,h=new jy({depthPacking:ny}),m=new ky,p={},g=i.maxTextureSize,x={[Qa]:Xn,[Xn]:Qa,[ua]:ua},b=new ma({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:_E,fragmentShader:vE}),y=b.clone();y.defines.HORIZONTAL_PASS=1;const E=new Pi;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new hn(E,b),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Rg;let _=this.type;this.render=function(U,B,ee){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(ha),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const ie=_!==ca&&this.type===ca,Z=_===ca&&this.type!==ca;for(let $=0,z=U.length;$<z;$++){const q=U[$],L=q.shadow;if(L===void 0){ct("WebGLShadowMap:",q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;l.copy(L.mapSize);const k=L.getFrameExtents();if(l.multiply(k),c.copy(L.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/k.x),l.x=c.x*k.x,L.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/k.y),l.y=c.y*k.y,L.mapSize.y=c.y)),L.map===null||ie===!0||Z===!0){const O=this.type!==ca?{minFilter:ii,magFilter:ii}:{};L.map!==null&&L.map.dispose(),L.map=new ws(l.x,l.y,O),L.map.texture.name=q.name+".shadowMap",L.camera.updateProjectionMatrix()}o.setRenderTarget(L.map),o.clear();const ne=L.getViewportCount();for(let O=0;O<ne;O++){const K=L.getViewport(O);d.set(c.x*K.x,c.y*K.y,c.x*K.z,c.y*K.w),Y.viewport(d),L.updateMatrices(q,O),s=L.getFrustum(),F(B,ee,L.camera,q,this.type)}L.isPointLightShadow!==!0&&this.type===ca&&P(L,ee),L.needsUpdate=!1}_=this.type,S.needsUpdate=!1,o.setRenderTarget(D,C,V)};function P(U,B){const ee=t.update(R);b.defines.VSM_SAMPLES!==U.blurSamples&&(b.defines.VSM_SAMPLES=U.blurSamples,y.defines.VSM_SAMPLES=U.blurSamples,b.needsUpdate=!0,y.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new ws(l.x,l.y)),b.uniforms.shadow_pass.value=U.map.texture,b.uniforms.resolution.value=U.mapSize,b.uniforms.radius.value=U.radius,o.setRenderTarget(U.mapPass),o.clear(),o.renderBufferDirect(B,null,ee,b,R,null),y.uniforms.shadow_pass.value=U.mapPass.texture,y.uniforms.resolution.value=U.mapSize,y.uniforms.radius.value=U.radius,o.setRenderTarget(U.map),o.clear(),o.renderBufferDirect(B,null,ee,y,R,null)}function N(U,B,ee,D){let C=null;const V=ee.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(V!==void 0)C=V;else if(C=ee.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const Y=C.uuid,ie=B.uuid;let Z=p[Y];Z===void 0&&(Z={},p[Y]=Z);let $=Z[ie];$===void 0&&($=C.clone(),Z[ie]=$,B.addEventListener("dispose",H)),C=$}if(C.visible=B.visible,C.wireframe=B.wireframe,D===ca?C.side=B.shadowSide!==null?B.shadowSide:B.side:C.side=B.shadowSide!==null?B.shadowSide:x[B.side],C.alphaMap=B.alphaMap,C.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,C.map=B.map,C.clipShadows=B.clipShadows,C.clippingPlanes=B.clippingPlanes,C.clipIntersection=B.clipIntersection,C.displacementMap=B.displacementMap,C.displacementScale=B.displacementScale,C.displacementBias=B.displacementBias,C.wireframeLinewidth=B.wireframeLinewidth,C.linewidth=B.linewidth,ee.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=o.properties.get(C);Y.light=ee}return C}function F(U,B,ee,D,C){if(U.visible===!1)return;if(U.layers.test(B.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&C===ca)&&(!U.frustumCulled||s.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,U.matrixWorld);const ie=t.update(U),Z=U.material;if(Array.isArray(Z)){const $=ie.groups;for(let z=0,q=$.length;z<q;z++){const L=$[z],k=Z[L.materialIndex];if(k&&k.visible){const ne=N(U,k,D,C);U.onBeforeShadow(o,U,B,ee,ie,ne,L),o.renderBufferDirect(ee,null,ie,ne,U,L),U.onAfterShadow(o,U,B,ee,ie,ne,L)}}}else if(Z.visible){const $=N(U,Z,D,C);U.onBeforeShadow(o,U,B,ee,ie,$,null),o.renderBufferDirect(ee,null,ie,$,U,null),U.onAfterShadow(o,U,B,ee,ie,$,null)}}const Y=U.children;for(let ie=0,Z=Y.length;ie<Z;ie++)F(Y[ie],B,ee,D,C)}function H(U){U.target.removeEventListener("dispose",H);for(const ee in p){const D=p[ee],C=U.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const yE={[Nd]:Ud,[Ld]:Pd,[Od]:Id,[Er]:zd,[Ud]:Nd,[Pd]:Ld,[Id]:Od,[zd]:Er};function SE(o,t){function i(){let X=!1;const Ne=new tn;let Ce=null;const we=new tn(0,0,0,0);return{setMask:function(Ee){Ce!==Ee&&!X&&(o.colorMask(Ee,Ee,Ee,Ee),Ce=Ee)},setLocked:function(Ee){X=Ee},setClear:function(Ee,be,Ie,at,Bt){Bt===!0&&(Ee*=at,be*=at,Ie*=at),Ne.set(Ee,be,Ie,at),we.equals(Ne)===!1&&(o.clearColor(Ee,be,Ie,at),we.copy(Ne))},reset:function(){X=!1,Ce=null,we.set(-1,0,0,0)}}}function s(){let X=!1,Ne=!1,Ce=null,we=null,Ee=null;return{setReversed:function(be){if(Ne!==be){const Ie=t.get("EXT_clip_control");be?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),Ne=be;const at=Ee;Ee=null,this.setClear(at)}},getReversed:function(){return Ne},setTest:function(be){be?he(o.DEPTH_TEST):De(o.DEPTH_TEST)},setMask:function(be){Ce!==be&&!X&&(o.depthMask(be),Ce=be)},setFunc:function(be){if(Ne&&(be=yE[be]),we!==be){switch(be){case Nd:o.depthFunc(o.NEVER);break;case Ud:o.depthFunc(o.ALWAYS);break;case Ld:o.depthFunc(o.LESS);break;case Er:o.depthFunc(o.LEQUAL);break;case Od:o.depthFunc(o.EQUAL);break;case zd:o.depthFunc(o.GEQUAL);break;case Pd:o.depthFunc(o.GREATER);break;case Id:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}we=be}},setLocked:function(be){X=be},setClear:function(be){Ee!==be&&(Ne&&(be=1-be),o.clearDepth(be),Ee=be)},reset:function(){X=!1,Ce=null,we=null,Ee=null,Ne=!1}}}function l(){let X=!1,Ne=null,Ce=null,we=null,Ee=null,be=null,Ie=null,at=null,Bt=null;return{setTest:function(Ct){X||(Ct?he(o.STENCIL_TEST):De(o.STENCIL_TEST))},setMask:function(Ct){Ne!==Ct&&!X&&(o.stencilMask(Ct),Ne=Ct)},setFunc:function(Ct,wn,qn){(Ce!==Ct||we!==wn||Ee!==qn)&&(o.stencilFunc(Ct,wn,qn),Ce=Ct,we=wn,Ee=qn)},setOp:function(Ct,wn,qn){(be!==Ct||Ie!==wn||at!==qn)&&(o.stencilOp(Ct,wn,qn),be=Ct,Ie=wn,at=qn)},setLocked:function(Ct){X=Ct},setClear:function(Ct){Bt!==Ct&&(o.clearStencil(Ct),Bt=Ct)},reset:function(){X=!1,Ne=null,Ce=null,we=null,Ee=null,be=null,Ie=null,at=null,Bt=null}}}const c=new i,d=new s,h=new l,m=new WeakMap,p=new WeakMap;let g={},x={},b=new WeakMap,y=[],E=null,R=!1,S=null,_=null,P=null,N=null,F=null,H=null,U=null,B=new Tt(0,0,0),ee=0,D=!1,C=null,V=null,Y=null,ie=null,Z=null;const $=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,q=0;const L=o.getParameter(o.VERSION);L.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(L)[1]),z=q>=1):L.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),z=q>=2);let k=null,ne={};const O=o.getParameter(o.SCISSOR_BOX),K=o.getParameter(o.VIEWPORT),me=new tn().fromArray(O),ye=new tn().fromArray(K);function Ae(X,Ne,Ce,we){const Ee=new Uint8Array(4),be=o.createTexture();o.bindTexture(X,be),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ie=0;Ie<Ce;Ie++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Ne,0,o.RGBA,1,1,we,0,o.RGBA,o.UNSIGNED_BYTE,Ee):o.texImage2D(Ne+Ie,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ee);return be}const ae={};ae[o.TEXTURE_2D]=Ae(o.TEXTURE_2D,o.TEXTURE_2D,1),ae[o.TEXTURE_CUBE_MAP]=Ae(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[o.TEXTURE_2D_ARRAY]=Ae(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ae[o.TEXTURE_3D]=Ae(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),he(o.DEPTH_TEST),d.setFunc(Er),pt(!1),xt(Cx),he(o.CULL_FACE),Rt(ha);function he(X){g[X]!==!0&&(o.enable(X),g[X]=!0)}function De(X){g[X]!==!1&&(o.disable(X),g[X]=!1)}function Be(X,Ne){return x[X]!==Ne?(o.bindFramebuffer(X,Ne),x[X]=Ne,X===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=Ne),X===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=Ne),!0):!1}function je(X,Ne){let Ce=y,we=!1;if(X){Ce=b.get(Ne),Ce===void 0&&(Ce=[],b.set(Ne,Ce));const Ee=X.textures;if(Ce.length!==Ee.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let be=0,Ie=Ee.length;be<Ie;be++)Ce[be]=o.COLOR_ATTACHMENT0+be;Ce.length=Ee.length,we=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,we=!0);we&&o.drawBuffers(Ce)}function ot(X){return E!==X?(o.useProgram(X),E=X,!0):!1}const Zt={[Ts]:o.FUNC_ADD,[Cb]:o.FUNC_SUBTRACT,[wb]:o.FUNC_REVERSE_SUBTRACT};Zt[Db]=o.MIN,Zt[Nb]=o.MAX;const ht={[Ub]:o.ZERO,[Lb]:o.ONE,[Ob]:o.SRC_COLOR,[wd]:o.SRC_ALPHA,[Hb]:o.SRC_ALPHA_SATURATE,[Fb]:o.DST_COLOR,[Pb]:o.DST_ALPHA,[zb]:o.ONE_MINUS_SRC_COLOR,[Dd]:o.ONE_MINUS_SRC_ALPHA,[Bb]:o.ONE_MINUS_DST_COLOR,[Ib]:o.ONE_MINUS_DST_ALPHA,[Vb]:o.CONSTANT_COLOR,[Gb]:o.ONE_MINUS_CONSTANT_COLOR,[jb]:o.CONSTANT_ALPHA,[kb]:o.ONE_MINUS_CONSTANT_ALPHA};function Rt(X,Ne,Ce,we,Ee,be,Ie,at,Bt,Ct){if(X===ha){R===!0&&(De(o.BLEND),R=!1);return}if(R===!1&&(he(o.BLEND),R=!0),X!==Rb){if(X!==S||Ct!==D){if((_!==Ts||F!==Ts)&&(o.blendEquation(o.FUNC_ADD),_=Ts,F=Ts),Ct)switch(X){case Sr:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFunc(o.ONE,o.ONE);break;case Dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Nx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:sn("WebGLState: Invalid blending: ",X);break}else switch(X){case Sr:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case wx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case Dx:sn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nx:sn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:sn("WebGLState: Invalid blending: ",X);break}P=null,N=null,H=null,U=null,B.set(0,0,0),ee=0,S=X,D=Ct}return}Ee=Ee||Ne,be=be||Ce,Ie=Ie||we,(Ne!==_||Ee!==F)&&(o.blendEquationSeparate(Zt[Ne],Zt[Ee]),_=Ne,F=Ee),(Ce!==P||we!==N||be!==H||Ie!==U)&&(o.blendFuncSeparate(ht[Ce],ht[we],ht[be],ht[Ie]),P=Ce,N=we,H=be,U=Ie),(at.equals(B)===!1||Bt!==ee)&&(o.blendColor(at.r,at.g,at.b,Bt),B.copy(at),ee=Bt),S=X,D=!1}function j(X,Ne){X.side===ua?De(o.CULL_FACE):he(o.CULL_FACE);let Ce=X.side===Xn;Ne&&(Ce=!Ce),pt(Ce),X.blending===Sr&&X.transparent===!1?Rt(ha):Rt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),d.setFunc(X.depthFunc),d.setTest(X.depthTest),d.setMask(X.depthWrite),c.setMask(X.colorWrite);const we=X.stencilWrite;h.setTest(we),we&&(h.setMask(X.stencilWriteMask),h.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),h.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ve(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?he(o.SAMPLE_ALPHA_TO_COVERAGE):De(o.SAMPLE_ALPHA_TO_COVERAGE)}function pt(X){C!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),C=X)}function xt(X){X!==Eb?(he(o.CULL_FACE),X!==V&&(X===Cx?o.cullFace(o.BACK):X===Tb?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):De(o.CULL_FACE),V=X}function Pt(X){X!==Y&&(z&&o.lineWidth(X),Y=X)}function Ve(X,Ne,Ce){X?(he(o.POLYGON_OFFSET_FILL),(ie!==Ne||Z!==Ce)&&(o.polygonOffset(Ne,Ce),ie=Ne,Z=Ce)):De(o.POLYGON_OFFSET_FILL)}function kt(X){X?he(o.SCISSOR_TEST):De(o.SCISSOR_TEST)}function Ye(X){X===void 0&&(X=o.TEXTURE0+$-1),k!==X&&(o.activeTexture(X),k=X)}function st(X,Ne,Ce){Ce===void 0&&(k===null?Ce=o.TEXTURE0+$-1:Ce=k);let we=ne[Ce];we===void 0&&(we={type:void 0,texture:void 0},ne[Ce]=we),(we.type!==X||we.texture!==Ne)&&(k!==Ce&&(o.activeTexture(Ce),k=Ce),o.bindTexture(X,Ne||ae[X]),we.type=X,we.texture=Ne)}function I(){const X=ne[k];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function re(){try{o.compressedTexImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function _e(){try{o.texSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Se(){try{o.texSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function pe(){try{o.compressedTexSubImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Le(){try{o.texStorage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Qe(){try{o.texStorage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Xe(){try{o.texImage2D(...arguments)}catch(X){X("WebGLState:",X)}}function Me(){try{o.texImage3D(...arguments)}catch(X){X("WebGLState:",X)}}function Te(X){me.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),me.copy(X))}function We(X){ye.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),ye.copy(X))}function Ge(X,Ne){let Ce=p.get(Ne);Ce===void 0&&(Ce=new WeakMap,p.set(Ne,Ce));let we=Ce.get(X);we===void 0&&(we=o.getUniformBlockIndex(Ne,X.name),Ce.set(X,we))}function ze(X,Ne){const we=p.get(Ne).get(X);m.get(Ne)!==we&&(o.uniformBlockBinding(Ne,we,X.__bindingPointIndex),m.set(Ne,we))}function it(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),g={},k=null,ne={},x={},b=new WeakMap,y=[],E=null,R=!1,S=null,_=null,P=null,N=null,F=null,H=null,U=null,B=new Tt(0,0,0),ee=0,D=!1,C=null,V=null,Y=null,ie=null,Z=null,me.set(0,0,o.canvas.width,o.canvas.height),ye.set(0,0,o.canvas.width,o.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:he,disable:De,bindFramebuffer:Be,drawBuffers:je,useProgram:ot,setBlending:Rt,setMaterial:j,setFlipSided:pt,setCullFace:xt,setLineWidth:Pt,setPolygonOffset:Ve,setScissorTest:kt,activeTexture:Ye,bindTexture:st,unbindTexture:I,compressedTexImage2D:T,compressedTexImage3D:re,texImage2D:Xe,texImage3D:Me,updateUBOMapping:Ge,uniformBlockBinding:ze,texStorage2D:Le,texStorage3D:Qe,texSubImage2D:_e,texSubImage3D:Se,compressedTexSubImage2D:pe,compressedTexSubImage3D:qe,scissor:Te,viewport:We,reset:it}}function ME(o,t,i,s,l,c,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Lt,g=new WeakMap;let x;const b=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(I,T){return y?new OffscreenCanvas(I,T):Dc("canvas")}function R(I,T,re){let _e=1;const Se=st(I);if((Se.width>re||Se.height>re)&&(_e=re/Math.max(Se.width,Se.height)),_e<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const pe=Math.floor(_e*Se.width),qe=Math.floor(_e*Se.height);x===void 0&&(x=E(pe,qe));const Le=T?E(pe,qe):x;return Le.width=pe,Le.height=qe,Le.getContext("2d").drawImage(I,0,0,pe,qe),ct("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+pe+"x"+qe+")."),Le}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),I;return I}function S(I){return I.generateMipmaps}function _(I){o.generateMipmap(I)}function P(I){return I.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?o.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(I,T,re,_e,Se=!1){if(I!==null){if(o[I]!==void 0)return o[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let pe=T;if(T===o.RED&&(re===o.FLOAT&&(pe=o.R32F),re===o.HALF_FLOAT&&(pe=o.R16F),re===o.UNSIGNED_BYTE&&(pe=o.R8)),T===o.RED_INTEGER&&(re===o.UNSIGNED_BYTE&&(pe=o.R8UI),re===o.UNSIGNED_SHORT&&(pe=o.R16UI),re===o.UNSIGNED_INT&&(pe=o.R32UI),re===o.BYTE&&(pe=o.R8I),re===o.SHORT&&(pe=o.R16I),re===o.INT&&(pe=o.R32I)),T===o.RG&&(re===o.FLOAT&&(pe=o.RG32F),re===o.HALF_FLOAT&&(pe=o.RG16F),re===o.UNSIGNED_BYTE&&(pe=o.RG8)),T===o.RG_INTEGER&&(re===o.UNSIGNED_BYTE&&(pe=o.RG8UI),re===o.UNSIGNED_SHORT&&(pe=o.RG16UI),re===o.UNSIGNED_INT&&(pe=o.RG32UI),re===o.BYTE&&(pe=o.RG8I),re===o.SHORT&&(pe=o.RG16I),re===o.INT&&(pe=o.RG32I)),T===o.RGB_INTEGER&&(re===o.UNSIGNED_BYTE&&(pe=o.RGB8UI),re===o.UNSIGNED_SHORT&&(pe=o.RGB16UI),re===o.UNSIGNED_INT&&(pe=o.RGB32UI),re===o.BYTE&&(pe=o.RGB8I),re===o.SHORT&&(pe=o.RGB16I),re===o.INT&&(pe=o.RGB32I)),T===o.RGBA_INTEGER&&(re===o.UNSIGNED_BYTE&&(pe=o.RGBA8UI),re===o.UNSIGNED_SHORT&&(pe=o.RGBA16UI),re===o.UNSIGNED_INT&&(pe=o.RGBA32UI),re===o.BYTE&&(pe=o.RGBA8I),re===o.SHORT&&(pe=o.RGBA16I),re===o.INT&&(pe=o.RGBA32I)),T===o.RGB&&(re===o.UNSIGNED_INT_5_9_9_9_REV&&(pe=o.RGB9_E5),re===o.UNSIGNED_INT_10F_11F_11F_REV&&(pe=o.R11F_G11F_B10F)),T===o.RGBA){const qe=Se?Cc:Ut.getTransfer(_e);re===o.FLOAT&&(pe=o.RGBA32F),re===o.HALF_FLOAT&&(pe=o.RGBA16F),re===o.UNSIGNED_BYTE&&(pe=qe===jt?o.SRGB8_ALPHA8:o.RGBA8),re===o.UNSIGNED_SHORT_4_4_4_4&&(pe=o.RGBA4),re===o.UNSIGNED_SHORT_5_5_5_1&&(pe=o.RGB5_A1)}return(pe===o.R16F||pe===o.R32F||pe===o.RG16F||pe===o.RG32F||pe===o.RGBA16F||pe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pe}function F(I,T){let re;return I?T===null||T===Cs||T===zo?re=o.DEPTH24_STENCIL8:T===da?re=o.DEPTH32F_STENCIL8:T===Oo&&(re=o.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Cs||T===zo?re=o.DEPTH_COMPONENT24:T===da?re=o.DEPTH_COMPONENT32F:T===Oo&&(re=o.DEPTH_COMPONENT16),re}function H(I,T){return S(I)===!0||I.isFramebufferTexture&&I.minFilter!==ii&&I.minFilter!==mi?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function U(I){const T=I.target;T.removeEventListener("dispose",U),ee(T),T.isVideoTexture&&g.delete(T)}function B(I){const T=I.target;T.removeEventListener("dispose",B),C(T)}function ee(I){const T=s.get(I);if(T.__webglInit===void 0)return;const re=I.source,_e=b.get(re);if(_e){const Se=_e[T.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&D(I),Object.keys(_e).length===0&&b.delete(re)}s.remove(I)}function D(I){const T=s.get(I);o.deleteTexture(T.__webglTexture);const re=I.source,_e=b.get(re);delete _e[T.__cacheKey],d.memory.textures--}function C(I){const T=s.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),s.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++){if(Array.isArray(T.__webglFramebuffer[_e]))for(let Se=0;Se<T.__webglFramebuffer[_e].length;Se++)o.deleteFramebuffer(T.__webglFramebuffer[_e][Se]);else o.deleteFramebuffer(T.__webglFramebuffer[_e]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[_e])}else{if(Array.isArray(T.__webglFramebuffer))for(let _e=0;_e<T.__webglFramebuffer.length;_e++)o.deleteFramebuffer(T.__webglFramebuffer[_e]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let _e=0;_e<T.__webglColorRenderbuffer.length;_e++)T.__webglColorRenderbuffer[_e]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[_e]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const re=I.textures;for(let _e=0,Se=re.length;_e<Se;_e++){const pe=s.get(re[_e]);pe.__webglTexture&&(o.deleteTexture(pe.__webglTexture),d.memory.textures--),s.remove(re[_e])}s.remove(I)}let V=0;function Y(){V=0}function ie(){const I=V;return I>=l.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+l.maxTextures),V+=1,I}function Z(I){const T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function $(I,T){const re=s.get(I);if(I.isVideoTexture&&kt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&re.__version!==I.version){const _e=I.image;if(_e===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{ae(re,I,T);return}}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,re.__webglTexture,o.TEXTURE0+T)}function z(I,T){const re=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){ae(re,I,T);return}else I.isExternalTexture&&(re.__webglTexture=I.sourceTexture?I.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,re.__webglTexture,o.TEXTURE0+T)}function q(I,T){const re=s.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&re.__version!==I.version){ae(re,I,T);return}i.bindTexture(o.TEXTURE_3D,re.__webglTexture,o.TEXTURE0+T)}function L(I,T){const re=s.get(I);if(I.version>0&&re.__version!==I.version){he(re,I,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,re.__webglTexture,o.TEXTURE0+T)}const k={[Hd]:o.REPEAT,[fa]:o.CLAMP_TO_EDGE,[Vd]:o.MIRRORED_REPEAT},ne={[ii]:o.NEAREST,[ey]:o.NEAREST_MIPMAP_NEAREST,[ic]:o.NEAREST_MIPMAP_LINEAR,[mi]:o.LINEAR,[Yf]:o.LINEAR_MIPMAP_NEAREST,[Rs]:o.LINEAR_MIPMAP_LINEAR},O={[ay]:o.NEVER,[uy]:o.ALWAYS,[sy]:o.LESS,[Fg]:o.LEQUAL,[ry]:o.EQUAL,[cy]:o.GEQUAL,[oy]:o.GREATER,[ly]:o.NOTEQUAL};function K(I,T){if(T.type===da&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===mi||T.magFilter===Yf||T.magFilter===ic||T.magFilter===Rs||T.minFilter===mi||T.minFilter===Yf||T.minFilter===ic||T.minFilter===Rs)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(I,o.TEXTURE_WRAP_S,k[T.wrapS]),o.texParameteri(I,o.TEXTURE_WRAP_T,k[T.wrapT]),(I===o.TEXTURE_3D||I===o.TEXTURE_2D_ARRAY)&&o.texParameteri(I,o.TEXTURE_WRAP_R,k[T.wrapR]),o.texParameteri(I,o.TEXTURE_MAG_FILTER,ne[T.magFilter]),o.texParameteri(I,o.TEXTURE_MIN_FILTER,ne[T.minFilter]),T.compareFunction&&(o.texParameteri(I,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(I,o.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ii||T.minFilter!==ic&&T.minFilter!==Rs||T.type===da&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const re=t.get("EXT_texture_filter_anisotropic");o.texParameterf(I,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function me(I,T){let re=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",U));const _e=T.source;let Se=b.get(_e);Se===void 0&&(Se={},b.set(_e,Se));const pe=Z(T);if(pe!==I.__cacheKey){Se[pe]===void 0&&(Se[pe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,re=!0),Se[pe].usedTimes++;const qe=Se[I.__cacheKey];qe!==void 0&&(Se[I.__cacheKey].usedTimes--,qe.usedTimes===0&&D(T)),I.__cacheKey=pe,I.__webglTexture=Se[pe].texture}return re}function ye(I,T,re){return Math.floor(Math.floor(I/re)/T)}function Ae(I,T,re,_e){const pe=I.updateRanges;if(pe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,re,_e,T.data);else{pe.sort((Me,Te)=>Me.start-Te.start);let qe=0;for(let Me=1;Me<pe.length;Me++){const Te=pe[qe],We=pe[Me],Ge=Te.start+Te.count,ze=ye(We.start,T.width,4),it=ye(Te.start,T.width,4);We.start<=Ge+1&&ze===it&&ye(We.start+We.count-1,T.width,4)===ze?Te.count=Math.max(Te.count,We.start+We.count-Te.start):(++qe,pe[qe]=We)}pe.length=qe+1;const Le=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),Xe=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let Me=0,Te=pe.length;Me<Te;Me++){const We=pe[Me],Ge=Math.floor(We.start/4),ze=Math.ceil(We.count/4),it=Ge%T.width,X=Math.floor(Ge/T.width),Ne=ze,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,it),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),i.texSubImage2D(o.TEXTURE_2D,0,it,X,Ne,Ce,re,_e,T.data)}I.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Le),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,Xe)}}function ae(I,T,re){let _e=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(_e=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(_e=o.TEXTURE_3D);const Se=me(I,T),pe=T.source;i.bindTexture(_e,I.__webglTexture,o.TEXTURE0+re);const qe=s.get(pe);if(pe.version!==qe.__version||Se===!0){i.activeTexture(o.TEXTURE0+re);const Le=Ut.getPrimaries(Ut.workingColorSpace),Qe=T.colorSpace===Wa?null:Ut.getPrimaries(T.colorSpace),Xe=T.colorSpace===Wa||Le===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let Me=R(T.image,!1,l.maxTextureSize);Me=Ye(T,Me);const Te=c.convert(T.format,T.colorSpace),We=c.convert(T.type);let Ge=N(T.internalFormat,Te,We,T.colorSpace,T.isVideoTexture);K(_e,T);let ze;const it=T.mipmaps,X=T.isVideoTexture!==!0,Ne=qe.__version===void 0||Se===!0,Ce=pe.dataReady,we=H(T,Me);if(T.isDepthTexture)Ge=F(T.format===Io,T.type),Ne&&(X?i.texStorage2D(o.TEXTURE_2D,1,Ge,Me.width,Me.height):i.texImage2D(o.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Te,We,null));else if(T.isDataTexture)if(it.length>0){X&&Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,it[0].width,it[0].height);for(let Ee=0,be=it.length;Ee<be;Ee++)ze=it[Ee],X?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,We,ze.data):i.texImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,Te,We,ze.data);T.generateMipmaps=!1}else X?(Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,Me.width,Me.height),Ce&&Ae(T,Me,Te,We)):i.texImage2D(o.TEXTURE_2D,0,Ge,Me.width,Me.height,0,Te,We,Me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ge,it[0].width,it[0].height,Me.depth);for(let Ee=0,be=it.length;Ee<be;Ee++)if(ze=it[Ee],T.format!==Ei)if(Te!==null)if(X){if(Ce)if(T.layerUpdates.size>0){const Ie=tg(ze.width,ze.height,T.format,T.type);for(const at of T.layerUpdates){const Bt=ze.data.subarray(at*Ie/ze.data.BYTES_PER_ELEMENT,(at+1)*Ie/ze.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,at,ze.width,ze.height,1,Te,Bt)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Te,ze.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ee,Ge,ze.width,ze.height,Me.depth,0,ze.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ee,0,0,0,ze.width,ze.height,Me.depth,Te,We,ze.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ee,Ge,ze.width,ze.height,Me.depth,0,Te,We,ze.data)}else{X&&Ne&&i.texStorage2D(o.TEXTURE_2D,we,Ge,it[0].width,it[0].height);for(let Ee=0,be=it.length;Ee<be;Ee++)ze=it[Ee],T.format!==Ei?Te!==null?X?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,ze.data):i.compressedTexImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,ze.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,ze.width,ze.height,Te,We,ze.data):i.texImage2D(o.TEXTURE_2D,Ee,Ge,ze.width,ze.height,0,Te,We,ze.data)}else if(T.isDataArrayTexture)if(X){if(Ne&&i.texStorage3D(o.TEXTURE_2D_ARRAY,we,Ge,Me.width,Me.height,Me.depth),Ce)if(T.layerUpdates.size>0){const Ee=tg(Me.width,Me.height,T.format,T.type);for(const be of T.layerUpdates){const Ie=Me.data.subarray(be*Ee/Me.data.BYTES_PER_ELEMENT,(be+1)*Ee/Me.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,be,Me.width,Me.height,1,Te,We,Ie)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,Te,We,Me.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ge,Me.width,Me.height,Me.depth,0,Te,We,Me.data);else if(T.isData3DTexture)X?(Ne&&i.texStorage3D(o.TEXTURE_3D,we,Ge,Me.width,Me.height,Me.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,Te,We,Me.data)):i.texImage3D(o.TEXTURE_3D,0,Ge,Me.width,Me.height,Me.depth,0,Te,We,Me.data);else if(T.isFramebufferTexture){if(Ne)if(X)i.texStorage2D(o.TEXTURE_2D,we,Ge,Me.width,Me.height);else{let Ee=Me.width,be=Me.height;for(let Ie=0;Ie<we;Ie++)i.texImage2D(o.TEXTURE_2D,Ie,Ge,Ee,be,0,Te,We,null),Ee>>=1,be>>=1}}else if(it.length>0){if(X&&Ne){const Ee=st(it[0]);i.texStorage2D(o.TEXTURE_2D,we,Ge,Ee.width,Ee.height)}for(let Ee=0,be=it.length;Ee<be;Ee++)ze=it[Ee],X?Ce&&i.texSubImage2D(o.TEXTURE_2D,Ee,0,0,Te,We,ze):i.texImage2D(o.TEXTURE_2D,Ee,Ge,Te,We,ze);T.generateMipmaps=!1}else if(X){if(Ne){const Ee=st(Me);i.texStorage2D(o.TEXTURE_2D,we,Ge,Ee.width,Ee.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Te,We,Me)}else i.texImage2D(o.TEXTURE_2D,0,Ge,Te,We,Me);S(T)&&_(_e),qe.__version=pe.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function he(I,T,re){if(T.image.length!==6)return;const _e=me(I,T),Se=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,I.__webglTexture,o.TEXTURE0+re);const pe=s.get(Se);if(Se.version!==pe.__version||_e===!0){i.activeTexture(o.TEXTURE0+re);const qe=Ut.getPrimaries(Ut.workingColorSpace),Le=T.colorSpace===Wa?null:Ut.getPrimaries(T.colorSpace),Qe=T.colorSpace===Wa||qe===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const Xe=T.isCompressedTexture||T.image[0].isCompressedTexture,Me=T.image[0]&&T.image[0].isDataTexture,Te=[];for(let be=0;be<6;be++)!Xe&&!Me?Te[be]=R(T.image[be],!0,l.maxCubemapSize):Te[be]=Me?T.image[be].image:T.image[be],Te[be]=Ye(T,Te[be]);const We=Te[0],Ge=c.convert(T.format,T.colorSpace),ze=c.convert(T.type),it=N(T.internalFormat,Ge,ze,T.colorSpace),X=T.isVideoTexture!==!0,Ne=pe.__version===void 0||_e===!0,Ce=Se.dataReady;let we=H(T,We);K(o.TEXTURE_CUBE_MAP,T);let Ee;if(Xe){X&&Ne&&i.texStorage2D(o.TEXTURE_CUBE_MAP,we,it,We.width,We.height);for(let be=0;be<6;be++){Ee=Te[be].mipmaps;for(let Ie=0;Ie<Ee.length;Ie++){const at=Ee[Ie];T.format!==Ei?Ge!==null?X?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie,0,0,at.width,at.height,Ge,at.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie,it,at.width,at.height,0,at.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie,0,0,at.width,at.height,Ge,ze,at.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie,it,at.width,at.height,0,Ge,ze,at.data)}}}else{if(Ee=T.mipmaps,X&&Ne){Ee.length>0&&we++;const be=st(Te[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,we,it,be.width,be.height)}for(let be=0;be<6;be++)if(Me){X?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Te[be].width,Te[be].height,Ge,ze,Te[be].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Te[be].width,Te[be].height,0,Ge,ze,Te[be].data);for(let Ie=0;Ie<Ee.length;Ie++){const Bt=Ee[Ie].image[be].image;X?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie+1,0,0,Bt.width,Bt.height,Ge,ze,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie+1,it,Bt.width,Bt.height,0,Ge,ze,Bt.data)}}else{X?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Ge,ze,Te[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,it,Ge,ze,Te[be]);for(let Ie=0;Ie<Ee.length;Ie++){const at=Ee[Ie];X?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie+1,0,0,Ge,ze,at.image[be]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+be,Ie+1,it,Ge,ze,at.image[be])}}}S(T)&&_(o.TEXTURE_CUBE_MAP),pe.__version=Se.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function De(I,T,re,_e,Se,pe){const qe=c.convert(re.format,re.colorSpace),Le=c.convert(re.type),Qe=N(re.internalFormat,qe,Le,re.colorSpace),Xe=s.get(T),Me=s.get(re);if(Me.__renderTarget=T,!Xe.__hasExternalTextures){const Te=Math.max(1,T.width>>pe),We=Math.max(1,T.height>>pe);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,pe,Qe,Te,We,T.depth,0,qe,Le,null):i.texImage2D(Se,pe,Qe,Te,We,0,qe,Le,null)}i.bindFramebuffer(o.FRAMEBUFFER,I),Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,_e,Se,Me.__webglTexture,0,Pt(T)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,_e,Se,Me.__webglTexture,pe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Be(I,T,re){if(o.bindRenderbuffer(o.RENDERBUFFER,I),T.depthBuffer){const _e=T.depthTexture,Se=_e&&_e.isDepthTexture?_e.type:null,pe=F(T.stencilBuffer,Se),qe=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=Pt(T);Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,pe,T.width,T.height):re?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,pe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pe,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,I)}else{const _e=T.textures;for(let Se=0;Se<_e.length;Se++){const pe=_e[Se],qe=c.convert(pe.format,pe.colorSpace),Le=c.convert(pe.type),Qe=N(pe.internalFormat,qe,Le,pe.colorSpace),Xe=Pt(T);re&&Ve(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xe,Qe,T.width,T.height):Ve(T)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xe,Qe,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function je(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _e=s.get(T.depthTexture);_e.__renderTarget=T,(!_e.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),$(T.depthTexture,0);const Se=_e.__webglTexture,pe=Pt(T);if(T.depthTexture.format===Po)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(T.depthTexture.format===Io)Ve(T)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,pe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function ot(I){const T=s.get(I),re=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){const _e=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),_e){const Se=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,_e.removeEventListener("dispose",Se)};_e.addEventListener("dispose",Se),T.__depthDisposeCallback=Se}T.__boundDepthTexture=_e}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");const _e=I.texture.mipmaps;_e&&_e.length>0?je(T.__webglFramebuffer[0],I):je(T.__webglFramebuffer,I)}else if(re){T.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[_e]),T.__webglDepthbuffer[_e]===void 0)T.__webglDepthbuffer[_e]=o.createRenderbuffer(),Be(T.__webglDepthbuffer[_e],I,!1);else{const Se=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer[_e];o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,pe)}}else{const _e=I.texture.mipmaps;if(_e&&_e.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Be(T.__webglDepthbuffer,I,!1);else{const Se=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pe=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,pe),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,pe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Zt(I,T,re){const _e=s.get(I);T!==void 0&&De(_e.__webglFramebuffer,I,I.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),re!==void 0&&ot(I)}function ht(I){const T=I.texture,re=s.get(I),_e=s.get(T);I.addEventListener("dispose",B);const Se=I.textures,pe=I.isWebGLCubeRenderTarget===!0,qe=Se.length>1;if(qe||(_e.__webglTexture===void 0&&(_e.__webglTexture=o.createTexture()),_e.__version=T.version,d.memory.textures++),pe){re.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer[Le]=[];for(let Qe=0;Qe<T.mipmaps.length;Qe++)re.__webglFramebuffer[Le][Qe]=o.createFramebuffer()}else re.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){re.__webglFramebuffer=[];for(let Le=0;Le<T.mipmaps.length;Le++)re.__webglFramebuffer[Le]=o.createFramebuffer()}else re.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Le=0,Qe=Se.length;Le<Qe;Le++){const Xe=s.get(Se[Le]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=o.createTexture(),d.memory.textures++)}if(I.samples>0&&Ve(I)===!1){re.__webglMultisampledFramebuffer=o.createFramebuffer(),re.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const Qe=Se[Le];re.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,re.__webglColorRenderbuffer[Le]);const Xe=c.convert(Qe.format,Qe.colorSpace),Me=c.convert(Qe.type),Te=N(Qe.internalFormat,Xe,Me,Qe.colorSpace,I.isXRRenderTarget===!0),We=Pt(I);o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Te,I.width,I.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,re.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),I.depthBuffer&&(re.__webglDepthRenderbuffer=o.createRenderbuffer(),Be(re.__webglDepthRenderbuffer,I,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pe){i.bindTexture(o.TEXTURE_CUBE_MAP,_e.__webglTexture),K(o.TEXTURE_CUBE_MAP,T);for(let Le=0;Le<6;Le++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)De(re.__webglFramebuffer[Le][Qe],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Qe);else De(re.__webglFramebuffer[Le],I,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(T)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Le=0,Qe=Se.length;Le<Qe;Le++){const Xe=Se[Le],Me=s.get(Xe);let Te=o.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Te=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Te,Me.__webglTexture),K(Te,Xe),De(re.__webglFramebuffer,I,Xe,o.COLOR_ATTACHMENT0+Le,Te,0),S(Xe)&&_(Te)}i.unbindTexture()}else{let Le=o.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Le=I.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,_e.__webglTexture),K(Le,T),T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)De(re.__webglFramebuffer[Qe],I,T,o.COLOR_ATTACHMENT0,Le,Qe);else De(re.__webglFramebuffer,I,T,o.COLOR_ATTACHMENT0,Le,0);S(T)&&_(Le),i.unbindTexture()}I.depthBuffer&&ot(I)}function Rt(I){const T=I.textures;for(let re=0,_e=T.length;re<_e;re++){const Se=T[re];if(S(Se)){const pe=P(I),qe=s.get(Se).__webglTexture;i.bindTexture(pe,qe),_(pe),i.unbindTexture()}}}const j=[],pt=[];function xt(I){if(I.samples>0){if(Ve(I)===!1){const T=I.textures,re=I.width,_e=I.height;let Se=o.COLOR_BUFFER_BIT;const pe=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=s.get(I),Le=T.length>1;if(Le)for(let Xe=0;Xe<T.length;Xe++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=I.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let Xe=0;Xe<T.length;Xe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Me=s.get(T[Xe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Me,0)}o.blitFramebuffer(0,0,re,_e,0,0,re,_e,Se,o.NEAREST),m===!0&&(j.length=0,pt.length=0,j.push(o.COLOR_ATTACHMENT0+Xe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(j.push(pe),pt.push(pe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,pt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,j))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let Xe=0;Xe<T.length;Xe++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.RENDERBUFFER,qe.__webglColorRenderbuffer[Xe]);const Me=s.get(T[Xe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Xe,o.TEXTURE_2D,Me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&m){const T=I.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function Pt(I){return Math.min(l.maxSamples,I.samples)}function Ve(I){const T=s.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(I){const T=d.render.frame;g.get(I)!==T&&(g.set(I,T),I.update())}function Ye(I,T){const re=I.colorSpace,_e=I.format,Se=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||re!==Rr&&re!==Wa&&(Ut.getTransfer(re)===jt?(_e!==Ei||Se!==Oi)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):sn("WebGLTextures: Unsupported texture color space:",re)),T}function st(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=ie,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=L,this.rebindTextures=Zt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Rt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=ot,this.setupFrameBufferTexture=De,this.useMultisampledRTT=Ve}function EE(o,t){function i(s,l=Wa){let c;const d=Ut.getTransfer(l);if(s===Oi)return o.UNSIGNED_BYTE;if(s===Mh)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Eh)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ug)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Lg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Dg)return o.BYTE;if(s===Ng)return o.SHORT;if(s===Oo)return o.UNSIGNED_SHORT;if(s===Sh)return o.INT;if(s===Cs)return o.UNSIGNED_INT;if(s===da)return o.FLOAT;if(s===wr)return o.HALF_FLOAT;if(s===Og)return o.ALPHA;if(s===zg)return o.RGB;if(s===Ei)return o.RGBA;if(s===Po)return o.DEPTH_COMPONENT;if(s===Io)return o.DEPTH_STENCIL;if(s===Pg)return o.RED;if(s===Th)return o.RED_INTEGER;if(s===Ah)return o.RG;if(s===Rh)return o.RG_INTEGER;if(s===Ch)return o.RGBA_INTEGER;if(s===Mc||s===Ec||s===Tc||s===Ac)if(d===jt)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Mc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ac)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Mc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Ec)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Tc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ac)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Gd||s===jd||s===kd||s===Xd)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Gd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===jd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===kd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Xd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qd||s===Wd||s===Yd)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qd||s===Wd)return d===jt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd||s===$d||s===eh||s===th||s===nh||s===ih||s===ah||s===sh||s===rh||s===oh||s===lh)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Zd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Kd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Qd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jd)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$d)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===eh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===th)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ih)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===ah)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===oh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lh)return d===jt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ch||s===uh||s===fh)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===ch)return d===jt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===uh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===dh||s===hh||s===ph||s===mh)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===dh)return c.COMPRESSED_RED_RGTC1_EXT;if(s===hh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===ph)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===zo?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const TE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AE=`
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

}`;class RE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new Zg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ma({vertexShader:TE,fragmentShader:AE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new hn(new Uc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CE extends Dr{constructor(t,i){super();const s=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,x=null,b=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",S=new RE,_={},P=i.getContextAttributes();let N=null,F=null;const H=[],U=[],B=new Lt;let ee=null;const D=new kn;D.viewport=new tn;const C=new kn;C.viewport=new tn;const V=[D,C],Y=new Wy;let ie=null,Z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let he=H[ae];return he===void 0&&(he=new gd,H[ae]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ae){let he=H[ae];return he===void 0&&(he=new gd,H[ae]=he),he.getGripSpace()},this.getHand=function(ae){let he=H[ae];return he===void 0&&(he=new gd,H[ae]=he),he.getHandSpace()};function $(ae){const he=U.indexOf(ae.inputSource);if(he===-1)return;const De=H[he];De!==void 0&&(De.update(ae.inputSource,ae.frame,p||d),De.dispatchEvent({type:ae.type,data:ae.inputSource}))}function z(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",q);for(let ae=0;ae<H.length;ae++){const he=U[ae];he!==null&&(U[ae]=null,H[ae].disconnect(he))}ie=null,Z=null,S.reset();for(const ae in _)delete _[ae];t.setRenderTarget(N),y=null,b=null,x=null,l=null,F=null,Ae.stop(),s.isPresenting=!1,t.setPixelRatio(ee),t.setSize(B.width,B.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){c=ae,s.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){h=ae,s.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return b!==null?b:y},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ae){if(l=ae,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",z),l.addEventListener("inputsourceschange",q),P.xrCompatible!==!0&&await i.makeXRCompatible(),ee=t.getPixelRatio(),t.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let De=null,Be=null,je=null;P.depth&&(je=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,De=P.stencil?Io:Po,Be=P.stencil?zo:Cs);const ot={colorFormat:i.RGBA8,depthFormat:je,scaleFactor:c};x=this.getBinding(),b=x.createProjectionLayer(ot),l.updateRenderState({layers:[b]}),t.setPixelRatio(1),t.setSize(b.textureWidth,b.textureHeight,!1),F=new ws(b.textureWidth,b.textureHeight,{format:Ei,type:Oi,depthTexture:new Yg(b.textureWidth,b.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,De),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}else{const De={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,De),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new ws(y.framebufferWidth,y.framebufferHeight,{format:Ei,type:Oi,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ae.setContext(l),Ae.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(ae){for(let he=0;he<ae.removed.length;he++){const De=ae.removed[he],Be=U.indexOf(De);Be>=0&&(U[Be]=null,H[Be].disconnect(De))}for(let he=0;he<ae.added.length;he++){const De=ae.added[he];let Be=U.indexOf(De);if(Be===-1){for(let ot=0;ot<H.length;ot++)if(ot>=U.length){U.push(De),Be=ot;break}else if(U[ot]===null){U[ot]=De,Be=ot;break}if(Be===-1)break}const je=H[Be];je&&je.connect(De)}}const L=new de,k=new de;function ne(ae,he,De){L.setFromMatrixPosition(he.matrixWorld),k.setFromMatrixPosition(De.matrixWorld);const Be=L.distanceTo(k),je=he.projectionMatrix.elements,ot=De.projectionMatrix.elements,Zt=je[14]/(je[10]-1),ht=je[14]/(je[10]+1),Rt=(je[9]+1)/je[5],j=(je[9]-1)/je[5],pt=(je[8]-1)/je[0],xt=(ot[8]+1)/ot[0],Pt=Zt*pt,Ve=Zt*xt,kt=Be/(-pt+xt),Ye=kt*-pt;if(he.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Ye),ae.translateZ(kt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),je[10]===-1)ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const st=Zt+kt,I=ht+kt,T=Pt-Ye,re=Ve+(Be-Ye),_e=Rt*ht/I*st,Se=j*ht/I*st;ae.projectionMatrix.makePerspective(T,re,_e,Se,st,I),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function O(ae,he){he===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(he.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(l===null)return;let he=ae.near,De=ae.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(De=S.depthFar)),Y.near=C.near=D.near=he,Y.far=C.far=D.far=De,(ie!==Y.near||Z!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),ie=Y.near,Z=Y.far),Y.layers.mask=ae.layers.mask|6,D.layers.mask=Y.layers.mask&3,C.layers.mask=Y.layers.mask&5;const Be=ae.parent,je=Y.cameras;O(Y,Be);for(let ot=0;ot<je.length;ot++)O(je[ot],Be);je.length===2?ne(Y,D,C):Y.projectionMatrix.copy(D.projectionMatrix),K(ae,Y,Be)};function K(ae,he,De){De===null?ae.matrix.copy(he.matrixWorld):(ae.matrix.copy(De.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(he.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(he.projectionMatrix),ae.projectionMatrixInverse.copy(he.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=xh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(b===null&&y===null))return m},this.setFoveation=function(ae){m=ae,b!==null&&(b.fixedFoveation=ae),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ae)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(ae){return _[ae]};let me=null;function ye(ae,he){if(g=he.getViewerPose(p||d),E=he,g!==null){const De=g.views;y!==null&&(t.setRenderTargetFramebuffer(F,y.framebuffer),t.setRenderTarget(F));let Be=!1;De.length!==Y.cameras.length&&(Y.cameras.length=0,Be=!0);for(let ht=0;ht<De.length;ht++){const Rt=De[ht];let j=null;if(y!==null)j=y.getViewport(Rt);else{const xt=x.getViewSubImage(b,Rt);j=xt.viewport,ht===0&&(t.setRenderTargetTextures(F,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(F))}let pt=V[ht];pt===void 0&&(pt=new kn,pt.layers.enable(ht),pt.viewport=new tn,V[ht]=pt),pt.matrix.fromArray(Rt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Rt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(j.x,j.y,j.width,j.height),ht===0&&(Y.matrix.copy(pt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Be===!0&&Y.cameras.push(pt)}const je=l.enabledFeatures;if(je&&je.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){x=s.getBinding();const ht=x.getDepthInformation(De[0]);ht&&ht.isValid&&ht.texture&&S.init(ht,l.renderState)}if(je&&je.includes("camera-access")&&R){t.state.unbindTexture(),x=s.getBinding();for(let ht=0;ht<De.length;ht++){const Rt=De[ht].camera;if(Rt){let j=_[Rt];j||(j=new Zg,_[Rt]=j);const pt=x.getCameraImage(Rt);j.sourceTexture=pt}}}}for(let De=0;De<H.length;De++){const Be=U[De],je=H[De];Be!==null&&je!==void 0&&je.update(Be,he,p||d)}me&&me(ae,he),he.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:he}),E=null}const Ae=new Jg;Ae.setAnimationLoop(ye),this.setAnimationLoop=function(ae){me=ae},this.dispose=function(){}}}const Ms=new zi,wE=new rn;function DE(o,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,Xg(o)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,P,N,F){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),x(S,_)):_.isMeshPhongMaterial?(c(S,_),g(S,_)):_.isMeshStandardMaterial?(c(S,_),b(S,_),_.isMeshPhysicalMaterial&&y(S,_,F)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),R(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(d(S,_),_.isLineDashedMaterial&&h(S,_)):_.isPointsMaterial?m(S,_,P,N):_.isSpriteMaterial?p(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Xn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Xn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const P=t.get(_),N=P.envMap,F=P.envMapRotation;N&&(S.envMap.value=N,Ms.copy(F),Ms.x*=-1,Ms.y*=-1,Ms.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ms.y*=-1,Ms.z*=-1),S.envMapRotation.value.setFromMatrix4(wE.makeRotationFromEuler(Ms)),S.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function d(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function h(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function m(S,_,P,N){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*P,S.scale.value=N*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function p(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function g(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function x(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function b(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,P){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=P.texture,S.transmissionSamplerSize.value.set(P.width,P.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function R(S,_){const P=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(P.matrixWorld),S.nearDistance.value=P.shadow.camera.near,S.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function NE(o,t,i,s){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const F=N.program;s.uniformBlockBinding(P,F)}function p(P,N){let F=l[P.id];F===void 0&&(E(P),F=g(P),l[P.id]=F,P.addEventListener("dispose",S));const H=N.program;s.updateUBOMapping(P,H);const U=t.render.frame;c[P.id]!==U&&(b(P),c[P.id]=U)}function g(P){const N=x();P.__bindingPointIndex=N;const F=o.createBuffer(),H=P.__size,U=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,H,U),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,F),F}function x(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return sn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function b(P){const N=l[P.id],F=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let U=0,B=F.length;U<B;U++){const ee=Array.isArray(F[U])?F[U]:[F[U]];for(let D=0,C=ee.length;D<C;D++){const V=ee[D];if(y(V,U,D,H)===!0){const Y=V.__offset,ie=Array.isArray(V.value)?V.value:[V.value];let Z=0;for(let $=0;$<ie.length;$++){const z=ie[$],q=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,Y+Z,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,Z),Z+=q.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,N,F,H){const U=P.value,B=N+"_"+F;if(H[B]===void 0)return typeof U=="number"||typeof U=="boolean"?H[B]=U:H[B]=U.clone(),!0;{const ee=H[B];if(typeof U=="number"||typeof U=="boolean"){if(ee!==U)return H[B]=U,!0}else if(ee.equals(U)===!1)return ee.copy(U),!0}return!1}function E(P){const N=P.uniforms;let F=0;const H=16;for(let B=0,ee=N.length;B<ee;B++){const D=Array.isArray(N[B])?N[B]:[N[B]];for(let C=0,V=D.length;C<V;C++){const Y=D[C],ie=Array.isArray(Y.value)?Y.value:[Y.value];for(let Z=0,$=ie.length;Z<$;Z++){const z=ie[Z],q=R(z),L=F%H,k=L%q.boundary,ne=L+k;F+=k,ne!==0&&H-ne<q.storage&&(F+=H-ne),Y.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=F,F+=q.storage}}}const U=F%H;return U>0&&(F+=H-U),P.__size=F,P.__cache={},this}function R(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ct("WebGLRenderer: Unsupported uniform value type.",P),N}function S(P){const N=P.target;N.removeEventListener("dispose",S);const F=d.indexOf(N.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function _(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},c={}}return{bind:m,update:p,dispose:_}}const UE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let la=null;function LE(){return la===null&&(la=new By(UE,32,32,Ah,wr),la.minFilter=mi,la.magFilter=mi,la.wrapS=fa,la.wrapT=fa,la.generateMipmaps=!1,la.needsUpdate=!0),la}class Ih{constructor(t={}){const{canvas:i=fy(),context:s=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:b=!1}=t;this.isWebGLRenderer=!0;let y;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=s.getContextAttributes().alpha}else y=d;const E=new Set([Ch,Rh,Th]),R=new Set([Oi,Cs,Oo,zo,Mh,Eh]),S=new Uint32Array(4),_=new Int32Array(4);let P=null,N=null;const F=[],H=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ka,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let B=!1;this._outputColorSpace=pi;let ee=0,D=0,C=null,V=-1,Y=null;const ie=new tn,Z=new tn;let $=null;const z=new Tt(0);let q=0,L=i.width,k=i.height,ne=1,O=null,K=null;const me=new tn(0,0,L,k),ye=new tn(0,0,L,k);let Ae=!1;const ae=new Uh;let he=!1,De=!1;const Be=new rn,je=new de,ot=new tn,Zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ht=!1;function Rt(){return C===null?ne:1}let j=s;function pt(w,Q){return i.getContext(w,Q)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${yh}`),i.addEventListener("webglcontextlost",Ee,!1),i.addEventListener("webglcontextrestored",be,!1),i.addEventListener("webglcontextcreationerror",Ie,!1),j===null){const Q="webgl2";if(j=pt(Q,w),j===null)throw pt(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw w("WebGLRenderer: "+w.message),w}let xt,Pt,Ve,kt,Ye,st,I,T,re,_e,Se,pe,qe,Le,Qe,Xe,Me,Te,We,Ge,ze,it,X,Ne;function Ce(){xt=new G1(j),xt.init(),it=new EE(j,xt),Pt=new L1(j,xt,t,it),Ve=new SE(j,xt),Pt.reversedDepthBuffer&&b&&Ve.buffers.depth.setReversed(!0),kt=new X1(j),Ye=new cE,st=new ME(j,xt,Ve,Ye,Pt,it,kt),I=new z1(U),T=new V1(U),re=new Zy(j),X=new N1(j,re),_e=new j1(j,re,kt,X),Se=new W1(j,_e,re,kt),We=new q1(j,Pt,st),Xe=new O1(Ye),pe=new lE(U,I,T,xt,Pt,X,Xe),qe=new DE(U,Ye),Le=new fE,Qe=new gE(xt),Te=new D1(U,I,T,Ve,Se,y,m),Me=new bE(U,Se,Pt),Ne=new NE(j,kt,Pt,Ve),Ge=new U1(j,xt,kt),ze=new k1(j,xt,kt),kt.programs=pe.programs,U.capabilities=Pt,U.extensions=xt,U.properties=Ye,U.renderLists=Le,U.shadowMap=Me,U.state=Ve,U.info=kt}Ce();const we=new CE(U,j);this.xr=we,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=xt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=xt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(L,k,!1))},this.getSize=function(w){return w.set(L,k)},this.setSize=function(w,Q,ue=!0){if(we.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}L=w,k=Q,i.width=Math.floor(w*ne),i.height=Math.floor(Q*ne),ue===!0&&(i.style.width=w+"px",i.style.height=Q+"px"),this.setViewport(0,0,w,Q)},this.getDrawingBufferSize=function(w){return w.set(L*ne,k*ne).floor()},this.setDrawingBufferSize=function(w,Q,ue){L=w,k=Q,ne=ue,i.width=Math.floor(w*ue),i.height=Math.floor(Q*ue),this.setViewport(0,0,w,Q)},this.getCurrentViewport=function(w){return w.copy(ie)},this.getViewport=function(w){return w.copy(me)},this.setViewport=function(w,Q,ue,le){w.isVector4?me.set(w.x,w.y,w.z,w.w):me.set(w,Q,ue,le),Ve.viewport(ie.copy(me).multiplyScalar(ne).round())},this.getScissor=function(w){return w.copy(ye)},this.setScissor=function(w,Q,ue,le){w.isVector4?ye.set(w.x,w.y,w.z,w.w):ye.set(w,Q,ue,le),Ve.scissor(Z.copy(ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Ae},this.setScissorTest=function(w){Ve.setScissorTest(Ae=w)},this.setOpaqueSort=function(w){O=w},this.setTransparentSort=function(w){K=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(w=!0,Q=!0,ue=!0){let le=0;if(w){let te=!1;if(C!==null){const Re=C.texture.format;te=E.has(Re)}if(te){const Re=C.texture.type,Ue=R.has(Re),Pe=Te.getClearColor(),Fe=Te.getClearAlpha(),$e=Pe.r,tt=Pe.g,Ze=Pe.b;Ue?(S[0]=$e,S[1]=tt,S[2]=Ze,S[3]=Fe,j.clearBufferuiv(j.COLOR,0,S)):(_[0]=$e,_[1]=tt,_[2]=Ze,_[3]=Fe,j.clearBufferiv(j.COLOR,0,_))}else le|=j.COLOR_BUFFER_BIT}Q&&(le|=j.DEPTH_BUFFER_BIT),ue&&(le|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(le)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Ee,!1),i.removeEventListener("webglcontextrestored",be,!1),i.removeEventListener("webglcontextcreationerror",Ie,!1),Te.dispose(),Le.dispose(),Qe.dispose(),Ye.dispose(),I.dispose(),T.dispose(),Se.dispose(),X.dispose(),Ne.dispose(),pe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Ur),we.removeEventListener("sessionend",Lr),xi.stop()};function Ee(w){w.preventDefault(),Px("WebGLRenderer: Context Lost."),B=!0}function be(){Px("WebGLRenderer: Context Restored."),B=!1;const w=kt.autoReset,Q=Me.enabled,ue=Me.autoUpdate,le=Me.needsUpdate,te=Me.type;Ce(),kt.autoReset=w,Me.enabled=Q,Me.autoUpdate=ue,Me.needsUpdate=le,Me.type=te}function Ie(w){sn("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function at(w){const Q=w.target;Q.removeEventListener("dispose",at),Bt(Q)}function Bt(w){Ct(w),Ye.remove(w)}function Ct(w){const Q=Ye.get(w).programs;Q!==void 0&&(Q.forEach(function(ue){pe.releaseProgram(ue)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,Q,ue,le,te,Re){Q===null&&(Q=Zt);const Ue=te.isMesh&&te.matrixWorld.determinant()<0,Pe=zc(w,Q,ue,le,te);Ve.setMaterial(le,Ue);let Fe=ue.index,$e=1;if(le.wireframe===!0){if(Fe=_e.getWireframeAttribute(ue),Fe===void 0)return;$e=2}const tt=ue.drawRange,Ze=ue.attributes.position;let ut=tt.start*$e,At=(tt.start+tt.count)*$e;Re!==null&&(ut=Math.max(ut,Re.start*$e),At=Math.min(At,(Re.start+Re.count)*$e)),Fe!==null?(ut=Math.max(ut,0),At=Math.min(At,Fe.count)):Ze!=null&&(ut=Math.max(ut,0),At=Math.min(At,Ze.count));const wt=At-ut;if(wt<0||wt===1/0)return;X.setup(te,le,Pe,ue,Fe);let yt,zt=Ge;if(Fe!==null&&(yt=re.get(Fe),zt=ze,zt.setIndex(yt)),te.isMesh)le.wireframe===!0?(Ve.setLineWidth(le.wireframeLinewidth*Rt()),zt.setMode(j.LINES)):zt.setMode(j.TRIANGLES);else if(te.isLine){let Je=le.linewidth;Je===void 0&&(Je=1),Ve.setLineWidth(Je*Rt()),te.isLineSegments?zt.setMode(j.LINES):te.isLineLoop?zt.setMode(j.LINE_LOOP):zt.setMode(j.LINE_STRIP)}else te.isPoints?zt.setMode(j.POINTS):te.isSprite&&zt.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),zt.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))zt.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const Je=te._multiDrawStarts,Xt=te._multiDrawCounts,St=te._multiDrawCount,vn=Fe?re.get(Fe).bytesPerElement:1,ga=Ye.get(le).currentProgram.getUniforms();for(let Wt=0;Wt<St;Wt++)ga.setValue(j,"_gl_DrawID",Wt),zt.render(Je[Wt]/vn,Xt[Wt])}else if(te.isInstancedMesh)zt.renderInstances(ut,wt,te.count);else if(ue.isInstancedBufferGeometry){const Je=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Xt=Math.min(ue.instanceCount,Je);zt.renderInstances(ut,wt,Xt)}else zt.render(ut,wt)};function wn(w,Q,ue){w.transparent===!0&&w.side===ua&&w.forceSinglePass===!1?(w.side=Xn,w.needsUpdate=!0,pn(w,Q,ue),w.side=Qa,w.needsUpdate=!0,pn(w,Q,ue),w.side=ua):pn(w,Q,ue)}this.compile=function(w,Q,ue=null){ue===null&&(ue=w),N=Qe.get(ue),N.init(Q),H.push(N),ue.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),w!==ue&&w.traverseVisible(function(te){te.isLight&&te.layers.test(Q.layers)&&(N.pushLight(te),te.castShadow&&N.pushShadow(te))}),N.setupLights();const le=new Set;return w.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Re=te.material;if(Re)if(Array.isArray(Re))for(let Ue=0;Ue<Re.length;Ue++){const Pe=Re[Ue];wn(Pe,ue,te),le.add(Pe)}else wn(Re,ue,te),le.add(Re)}),N=H.pop(),le},this.compileAsync=function(w,Q,ue=null){const le=this.compile(w,Q,ue);return new Promise(te=>{function Re(){if(le.forEach(function(Ue){Ye.get(Ue).currentProgram.isReady()&&le.delete(Ue)}),le.size===0){te(w);return}setTimeout(Re,10)}xt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let qn=null;function qo(w){qn&&qn(w)}function Ur(){xi.stop()}function Lr(){xi.start()}const xi=new Jg;xi.setAnimationLoop(qo),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(w){qn=w,we.setAnimationLoop(w),w===null?xi.stop():xi.start()},we.addEventListener("sessionstart",Ur),we.addEventListener("sessionend",Lr),this.render=function(w,Q){if(Q!==void 0&&Q.isCamera!==!0){sn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(we.cameraAutoUpdate===!0&&we.updateCamera(Q),Q=we.getCamera()),w.isScene===!0&&w.onBeforeRender(U,w,Q,C),N=Qe.get(w,H.length),N.init(Q),H.push(N),Be.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ae.setFromProjectionMatrix(Be,Ni,Q.reversedDepth),De=this.localClippingEnabled,he=Xe.init(this.clippingPlanes,De),P=Le.get(w,F.length),P.init(),F.push(P),we.enabled===!0&&we.isPresenting===!0){const Re=U.xr.getDepthSensingMesh();Re!==null&&es(Re,Q,-1/0,U.sortObjects)}es(w,Q,0,U.sortObjects),P.finish(),U.sortObjects===!0&&P.sort(O,K),ht=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,ht&&Te.addToRenderList(P,w),this.info.render.frame++,he===!0&&Xe.beginShadows();const ue=N.state.shadowsArray;Me.render(ue,w,Q),he===!0&&Xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const le=P.opaque,te=P.transmissive;if(N.setupLights(),Q.isArrayCamera){const Re=Q.cameras;if(te.length>0)for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];zr(le,te,w,Fe)}ht&&Te.render(w);for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++){const Fe=Re[Ue];Or(P,w,Fe,Fe.viewport)}}else te.length>0&&zr(le,te,w,Q),ht&&Te.render(w),Or(P,w,Q);C!==null&&D===0&&(st.updateMultisampleRenderTarget(C),st.updateRenderTargetMipmap(C)),w.isScene===!0&&w.onAfterRender(U,w,Q),X.resetDefaultState(),V=-1,Y=null,H.pop(),H.length>0?(N=H[H.length-1],he===!0&&Xe.setGlobalState(U.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function es(w,Q,ue,le){if(w.visible===!1)return;if(w.layers.test(Q.layers)){if(w.isGroup)ue=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Q);else if(w.isLight)N.pushLight(w),w.castShadow&&N.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ae.intersectsSprite(w)){le&&ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Be);const Ue=Se.update(w),Pe=w.material;Pe.visible&&P.push(w,Ue,Pe,ue,ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ae.intersectsObject(w))){const Ue=Se.update(w),Pe=w.material;if(le&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ot.copy(w.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),ot.copy(Ue.boundingSphere.center)),ot.applyMatrix4(w.matrixWorld).applyMatrix4(Be)),Array.isArray(Pe)){const Fe=Ue.groups;for(let $e=0,tt=Fe.length;$e<tt;$e++){const Ze=Fe[$e],ut=Pe[Ze.materialIndex];ut&&ut.visible&&P.push(w,Ue,ut,ue,ot.z,Ze)}}else Pe.visible&&P.push(w,Ue,Pe,ue,ot.z,null)}}const Re=w.children;for(let Ue=0,Pe=Re.length;Ue<Pe;Ue++)es(Re[Ue],Q,ue,le)}function Or(w,Q,ue,le){const{opaque:te,transmissive:Re,transparent:Ue}=w;N.setupLightsView(ue),he===!0&&Xe.setGlobalState(U.clippingPlanes,ue),le&&Ve.viewport(ie.copy(le)),te.length>0&&Wn(te,Q,ue),Re.length>0&&Wn(Re,Q,ue),Ue.length>0&&Wn(Ue,Q,ue),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function zr(w,Q,ue,le){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;N.state.transmissionRenderTarget[le.id]===void 0&&(N.state.transmissionRenderTarget[le.id]=new ws(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?wr:Oi,minFilter:Rs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ut.workingColorSpace}));const Re=N.state.transmissionRenderTarget[le.id],Ue=le.viewport||ie;Re.setSize(Ue.z*U.transmissionResolutionScale,Ue.w*U.transmissionResolutionScale);const Pe=U.getRenderTarget(),Fe=U.getActiveCubeFace(),$e=U.getActiveMipmapLevel();U.setRenderTarget(Re),U.getClearColor(z),q=U.getClearAlpha(),q<1&&U.setClearColor(16777215,.5),U.clear(),ht&&Te.render(ue);const tt=U.toneMapping;U.toneMapping=Ka;const Ze=le.viewport;if(le.viewport!==void 0&&(le.viewport=void 0),N.setupLightsView(le),he===!0&&Xe.setGlobalState(U.clippingPlanes,le),Wn(w,ue,le),st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ut=!1;for(let At=0,wt=Q.length;At<wt;At++){const yt=Q[At],{object:zt,geometry:Je,material:Xt,group:St}=yt;if(Xt.side===ua&&zt.layers.test(le.layers)){const vn=Xt.side;Xt.side=Xn,Xt.needsUpdate=!0,on(zt,ue,le,Je,Xt,St),Xt.side=vn,Xt.needsUpdate=!0,ut=!0}}ut===!0&&(st.updateMultisampleRenderTarget(Re),st.updateRenderTargetMipmap(Re))}U.setRenderTarget(Pe,Fe,$e),U.setClearColor(z,q),Ze!==void 0&&(le.viewport=Ze),U.toneMapping=tt}function Wn(w,Q,ue){const le=Q.isScene===!0?Q.overrideMaterial:null;for(let te=0,Re=w.length;te<Re;te++){const Ue=w[te],{object:Pe,geometry:Fe,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&le!==null&&(tt=le),Pe.layers.test(ue.layers)&&on(Pe,Q,ue,Fe,tt,$e)}}function on(w,Q,ue,le,te,Re){w.onBeforeRender(U,Q,ue,le,te,Re),w.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),te.onBeforeRender(U,Q,ue,le,w,Re),te.transparent===!0&&te.side===ua&&te.forceSinglePass===!1?(te.side=Xn,te.needsUpdate=!0,U.renderBufferDirect(ue,Q,le,te,w,Re),te.side=Qa,te.needsUpdate=!0,U.renderBufferDirect(ue,Q,le,te,w,Re),te.side=ua):U.renderBufferDirect(ue,Q,le,te,w,Re),w.onAfterRender(U,Q,ue,le,te,Re)}function pn(w,Q,ue){Q.isScene!==!0&&(Q=Zt);const le=Ye.get(w),te=N.state.lights,Re=N.state.shadowsArray,Ue=te.state.version,Pe=pe.getParameters(w,te.state,Re,Q,ue),Fe=pe.getProgramCacheKey(Pe);let $e=le.programs;le.environment=w.isMeshStandardMaterial?Q.environment:null,le.fog=Q.fog,le.envMap=(w.isMeshStandardMaterial?T:I).get(w.envMap||le.environment),le.envMapRotation=le.environment!==null&&w.envMap===null?Q.environmentRotation:w.envMapRotation,$e===void 0&&(w.addEventListener("dispose",at),$e=new Map,le.programs=$e);let tt=$e.get(Fe);if(tt!==void 0){if(le.currentProgram===tt&&le.lightsStateVersion===Ue)return Ds(w,Pe),tt}else Pe.uniforms=pe.getUniforms(w),w.onBeforeCompile(Pe,U),tt=pe.acquireProgram(Pe,Fe),$e.set(Fe,tt),le.uniforms=Pe.uniforms;const Ze=le.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ze.clippingPlanes=Xe.uniform),Ds(w,Pe),le.needsLights=Wo(w),le.lightsStateVersion=Ue,le.needsLights&&(Ze.ambientLightColor.value=te.state.ambient,Ze.lightProbe.value=te.state.probe,Ze.directionalLights.value=te.state.directional,Ze.directionalLightShadows.value=te.state.directionalShadow,Ze.spotLights.value=te.state.spot,Ze.spotLightShadows.value=te.state.spotShadow,Ze.rectAreaLights.value=te.state.rectArea,Ze.ltc_1.value=te.state.rectAreaLTC1,Ze.ltc_2.value=te.state.rectAreaLTC2,Ze.pointLights.value=te.state.point,Ze.pointLightShadows.value=te.state.pointShadow,Ze.hemisphereLights.value=te.state.hemi,Ze.directionalShadowMap.value=te.state.directionalShadowMap,Ze.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ze.spotShadowMap.value=te.state.spotShadowMap,Ze.spotLightMatrix.value=te.state.spotLightMatrix,Ze.spotLightMap.value=te.state.spotLightMap,Ze.pointShadowMap.value=te.state.pointShadowMap,Ze.pointShadowMatrix.value=te.state.pointShadowMatrix),le.currentProgram=tt,le.uniformsList=null,tt}function Ii(w){if(w.uniformsList===null){const Q=w.currentProgram.getUniforms();w.uniformsList=Rc.seqWithValue(Q.seq,w.uniforms)}return w.uniformsList}function Ds(w,Q){const ue=Ye.get(w);ue.outputColorSpace=Q.outputColorSpace,ue.batching=Q.batching,ue.batchingColor=Q.batchingColor,ue.instancing=Q.instancing,ue.instancingColor=Q.instancingColor,ue.instancingMorph=Q.instancingMorph,ue.skinning=Q.skinning,ue.morphTargets=Q.morphTargets,ue.morphNormals=Q.morphNormals,ue.morphColors=Q.morphColors,ue.morphTargetsCount=Q.morphTargetsCount,ue.numClippingPlanes=Q.numClippingPlanes,ue.numIntersection=Q.numClipIntersection,ue.vertexAlphas=Q.vertexAlphas,ue.vertexTangents=Q.vertexTangents,ue.toneMapping=Q.toneMapping}function zc(w,Q,ue,le,te){Q.isScene!==!0&&(Q=Zt),st.resetTextureUnits();const Re=Q.fog,Ue=le.isMeshStandardMaterial?Q.environment:null,Pe=C===null?U.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Rr,Fe=(le.isMeshStandardMaterial?T:I).get(le.envMap||Ue),$e=le.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,tt=!!ue.attributes.tangent&&(!!le.normalMap||le.anisotropy>0),Ze=!!ue.morphAttributes.position,ut=!!ue.morphAttributes.normal,At=!!ue.morphAttributes.color;let wt=Ka;le.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(wt=U.toneMapping);const yt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,zt=yt!==void 0?yt.length:0,Je=Ye.get(le),Xt=N.state.lights;if(he===!0&&(De===!0||w!==Y)){const yn=w===Y&&le.id===V;Xe.setState(le,w,yn)}let St=!1;le.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==Pe||te.isBatchedMesh&&Je.batching===!1||!te.isBatchedMesh&&Je.batching===!0||te.isBatchedMesh&&Je.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Je.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Je.instancing===!1||!te.isInstancedMesh&&Je.instancing===!0||te.isSkinnedMesh&&Je.skinning===!1||!te.isSkinnedMesh&&Je.skinning===!0||te.isInstancedMesh&&Je.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Je.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Je.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Je.instancingMorph===!1&&te.morphTexture!==null||Je.envMap!==Fe||le.fog===!0&&Je.fog!==Re||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==Xe.numPlanes||Je.numIntersection!==Xe.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ut||Je.morphColors!==At||Je.toneMapping!==wt||Je.morphTargetsCount!==zt)&&(St=!0):(St=!0,Je.__version=le.version);let vn=Je.currentProgram;St===!0&&(vn=pn(le,Q,te));let ga=!1,Wt=!1,Fi=!1;const Yt=vn.getUniforms(),bn=Je.uniforms;if(Ve.useProgram(vn.program)&&(ga=!0,Wt=!0,Fi=!0),le.id!==V&&(V=le.id,Wt=!0),ga||Y!==w){Ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Yt.setValue(j,"projectionMatrix",w.projectionMatrix),Yt.setValue(j,"viewMatrix",w.matrixWorldInverse);const En=Yt.map.cameraPosition;En!==void 0&&En.setValue(j,je.setFromMatrixPosition(w.matrixWorld)),Pt.logarithmicDepthBuffer&&Yt.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(le.isMeshPhongMaterial||le.isMeshToonMaterial||le.isMeshLambertMaterial||le.isMeshBasicMaterial||le.isMeshStandardMaterial||le.isShaderMaterial)&&Yt.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),Y!==w&&(Y=w,Wt=!0,Fi=!0)}if(te.isSkinnedMesh){Yt.setOptional(j,te,"bindMatrix"),Yt.setOptional(j,te,"bindMatrixInverse");const yn=te.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),Yt.setValue(j,"boneTexture",yn.boneTexture,st))}te.isBatchedMesh&&(Yt.setOptional(j,te,"batchingTexture"),Yt.setValue(j,"batchingTexture",te._matricesTexture,st),Yt.setOptional(j,te,"batchingIdTexture"),Yt.setValue(j,"batchingIdTexture",te._indirectTexture,st),Yt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&Yt.setValue(j,"batchingColorTexture",te._colorsTexture,st));const mn=ue.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&We.update(te,ue,vn),(Wt||Je.receiveShadow!==te.receiveShadow)&&(Je.receiveShadow=te.receiveShadow,Yt.setValue(j,"receiveShadow",te.receiveShadow)),le.isMeshGouraudMaterial&&le.envMap!==null&&(bn.envMap.value=Fe,bn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),le.isMeshStandardMaterial&&le.envMap===null&&Q.environment!==null&&(bn.envMapIntensity.value=Q.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=LE()),Wt&&(Yt.setValue(j,"toneMappingExposure",U.toneMappingExposure),Je.needsLights&&Pc(bn,Fi),Re&&le.fog===!0&&qe.refreshFogUniforms(bn,Re),qe.refreshMaterialUniforms(bn,le,ne,k,N.state.transmissionRenderTarget[w.id]),Rc.upload(j,Ii(Je),bn,st)),le.isShaderMaterial&&le.uniformsNeedUpdate===!0&&(Rc.upload(j,Ii(Je),bn,st),le.uniformsNeedUpdate=!1),le.isSpriteMaterial&&Yt.setValue(j,"center",te.center),Yt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Yt.setValue(j,"normalMatrix",te.normalMatrix),Yt.setValue(j,"modelMatrix",te.matrixWorld),le.isShaderMaterial||le.isRawShaderMaterial){const yn=le.uniformsGroups;for(let En=0,Ti=yn.length;En<Ti;En++){const Bi=yn[En];Ne.update(Bi,vn),Ne.bind(Bi,vn)}}return vn}function Pc(w,Q){w.ambientLightColor.needsUpdate=Q,w.lightProbe.needsUpdate=Q,w.directionalLights.needsUpdate=Q,w.directionalLightShadows.needsUpdate=Q,w.pointLights.needsUpdate=Q,w.pointLightShadows.needsUpdate=Q,w.spotLights.needsUpdate=Q,w.spotLightShadows.needsUpdate=Q,w.rectAreaLights.needsUpdate=Q,w.hemisphereLights.needsUpdate=Q}function Wo(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(w,Q,ue){const le=Ye.get(w);le.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,le.__autoAllocateDepthBuffer===!1&&(le.__useRenderToTexture=!1),Ye.get(w.texture).__webglTexture=Q,Ye.get(w.depthTexture).__webglTexture=le.__autoAllocateDepthBuffer?void 0:ue,le.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Q){const ue=Ye.get(w);ue.__webglFramebuffer=Q,ue.__useDefaultFramebuffer=Q===void 0};const ts=j.createFramebuffer();this.setRenderTarget=function(w,Q=0,ue=0){C=w,ee=Q,D=ue;let le=!0,te=null,Re=!1,Ue=!1;if(w){const Fe=Ye.get(w);if(Fe.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(j.FRAMEBUFFER,null),le=!1;else if(Fe.__webglFramebuffer===void 0)st.setupRenderTarget(w);else if(Fe.__hasExternalTextures)st.rebindTextures(w,Ye.get(w.texture).__webglTexture,Ye.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Ze=w.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&Ye.has(Ze)&&(w.width!==Ze.image.width||w.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(w)}}const $e=w.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=Ye.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[Q])?te=tt[Q][ue]:te=tt[Q],Re=!0):w.samples>0&&st.useMultisampledRTT(w)===!1?te=Ye.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?te=tt[ue]:te=tt,ie.copy(w.viewport),Z.copy(w.scissor),$=w.scissorTest}else ie.copy(me).multiplyScalar(ne).floor(),Z.copy(ye).multiplyScalar(ne).floor(),$=Ae;if(ue!==0&&(te=ts),Ve.bindFramebuffer(j.FRAMEBUFFER,te)&&le&&Ve.drawBuffers(w,te),Ve.viewport(ie),Ve.scissor(Z),Ve.setScissorTest($),Re){const Fe=Ye.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Fe.__webglTexture,ue)}else if(Ue){const Fe=Q;for(let $e=0;$e<w.textures.length;$e++){const tt=Ye.get(w.textures[$e]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ue,Fe)}}else if(w!==null&&ue!==0){const Fe=Ye.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Fe.__webglTexture,ue)}V=-1},this.readRenderTargetPixels=function(w,Q,ue,le,te,Re,Ue,Pe=0){if(!(w&&w.isWebGLRenderTarget)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Ve.bindFramebuffer(j.FRAMEBUFFER,Fe);try{const $e=w.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Pt.textureTypeReadable(Ze)){sn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=w.width-le&&ue>=0&&ue<=w.height-te&&(w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),j.readPixels(Q,ue,le,te,it.convert(tt),it.convert(Ze),Re))}finally{const $e=C!==null?Ye.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(j.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(w,Q,ue,le,te,Re,Ue,Pe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ye.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(Q>=0&&Q<=w.width-le&&ue>=0&&ue<=w.height-te){Ve.bindFramebuffer(j.FRAMEBUFFER,Fe);const $e=w.textures[Pe],tt=$e.format,Ze=$e.type;if(!Pt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Pt.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ut=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,ut),j.bufferData(j.PIXEL_PACK_BUFFER,Re.byteLength,j.STREAM_READ),w.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+Pe),j.readPixels(Q,ue,le,te,it.convert(tt),it.convert(Ze),0);const At=C!==null?Ye.get(C).__webglFramebuffer:null;Ve.bindFramebuffer(j.FRAMEBUFFER,At);const wt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await dy(j,wt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,ut),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,Re),j.deleteBuffer(ut),j.deleteSync(wt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Q=null,ue=0){const le=Math.pow(2,-ue),te=Math.floor(w.image.width*le),Re=Math.floor(w.image.height*le),Ue=Q!==null?Q.x:0,Pe=Q!==null?Q.y:0;st.setTexture2D(w,0),j.copyTexSubImage2D(j.TEXTURE_2D,ue,0,0,Ue,Pe,te,Re),Ve.unbindTexture()};const Pr=j.createFramebuffer(),xa=j.createFramebuffer();this.copyTextureToTexture=function(w,Q,ue=null,le=null,te=0,Re=null){Re===null&&(te!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=te,te=0):Re=0);let Ue,Pe,Fe,$e,tt,Ze,ut,At,wt;const yt=w.isCompressedTexture?w.mipmaps[Re]:w.image;if(ue!==null)Ue=ue.max.x-ue.min.x,Pe=ue.max.y-ue.min.y,Fe=ue.isBox3?ue.max.z-ue.min.z:1,$e=ue.min.x,tt=ue.min.y,Ze=ue.isBox3?ue.min.z:0;else{const mn=Math.pow(2,-te);Ue=Math.floor(yt.width*mn),Pe=Math.floor(yt.height*mn),w.isDataArrayTexture?Fe=yt.depth:w.isData3DTexture?Fe=Math.floor(yt.depth*mn):Fe=1,$e=0,tt=0,Ze=0}le!==null?(ut=le.x,At=le.y,wt=le.z):(ut=0,At=0,wt=0);const zt=it.convert(Q.format),Je=it.convert(Q.type);let Xt;Q.isData3DTexture?(st.setTexture3D(Q,0),Xt=j.TEXTURE_3D):Q.isDataArrayTexture||Q.isCompressedArrayTexture?(st.setTexture2DArray(Q,0),Xt=j.TEXTURE_2D_ARRAY):(st.setTexture2D(Q,0),Xt=j.TEXTURE_2D),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,Q.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,Q.unpackAlignment);const St=j.getParameter(j.UNPACK_ROW_LENGTH),vn=j.getParameter(j.UNPACK_IMAGE_HEIGHT),ga=j.getParameter(j.UNPACK_SKIP_PIXELS),Wt=j.getParameter(j.UNPACK_SKIP_ROWS),Fi=j.getParameter(j.UNPACK_SKIP_IMAGES);j.pixelStorei(j.UNPACK_ROW_LENGTH,yt.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,yt.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,$e),j.pixelStorei(j.UNPACK_SKIP_ROWS,tt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Ze);const Yt=w.isDataArrayTexture||w.isData3DTexture,bn=Q.isDataArrayTexture||Q.isData3DTexture;if(w.isDepthTexture){const mn=Ye.get(w),yn=Ye.get(Q),En=Ye.get(mn.__renderTarget),Ti=Ye.get(yn.__renderTarget);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,En.__webglFramebuffer),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let Bi=0;Bi<Fe;Bi++)Yt&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(w).__webglTexture,te,Ze+Bi),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Ye.get(Q).__webglTexture,Re,wt+Bi)),j.blitFramebuffer($e,tt,Ue,Pe,ut,At,Ue,Pe,j.DEPTH_BUFFER_BIT,j.NEAREST);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||w.isRenderTargetTexture||Ye.has(w)){const mn=Ye.get(w),yn=Ye.get(Q);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,Pr),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,xa);for(let En=0;En<Fe;En++)Yt?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,mn.__webglTexture,te,Ze+En):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,mn.__webglTexture,te),bn?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,yn.__webglTexture,Re,wt+En):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,yn.__webglTexture,Re),te!==0?j.blitFramebuffer($e,tt,Ue,Pe,ut,At,Ue,Pe,j.COLOR_BUFFER_BIT,j.NEAREST):bn?j.copyTexSubImage3D(Xt,Re,ut,At,wt+En,$e,tt,Ue,Pe):j.copyTexSubImage2D(Xt,Re,ut,At,$e,tt,Ue,Pe);Ve.bindFramebuffer(j.READ_FRAMEBUFFER,null),Ve.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else bn?w.isDataTexture||w.isData3DTexture?j.texSubImage3D(Xt,Re,ut,At,wt,Ue,Pe,Fe,zt,Je,yt.data):Q.isCompressedArrayTexture?j.compressedTexSubImage3D(Xt,Re,ut,At,wt,Ue,Pe,Fe,zt,yt.data):j.texSubImage3D(Xt,Re,ut,At,wt,Ue,Pe,Fe,zt,Je,yt):w.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,Re,ut,At,Ue,Pe,zt,Je,yt.data):w.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,Re,ut,At,yt.width,yt.height,zt,yt.data):j.texSubImage2D(j.TEXTURE_2D,Re,ut,At,Ue,Pe,zt,Je,yt);j.pixelStorei(j.UNPACK_ROW_LENGTH,St),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,vn),j.pixelStorei(j.UNPACK_SKIP_PIXELS,ga),j.pixelStorei(j.UNPACK_SKIP_ROWS,Wt),j.pixelStorei(j.UNPACK_SKIP_IMAGES,Fi),Re===0&&Q.generateMipmaps&&j.generateMipmap(Xt),Ve.unbindTexture()},this.initRenderTarget=function(w){Ye.get(w).__webglFramebuffer===void 0&&st.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?st.setTextureCube(w,0):w.isData3DTexture?st.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?st.setTexture2DArray(w,0):st.setTexture2D(w,0),Ve.unbindTexture()},this.resetState=function(){ee=0,D=0,C=null,Ve.reset(),X.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Ut._getDrawingBufferColorSpace(t),i.unpackColorSpace=Ut._getUnpackColorSpace()}}function OE({minHeight:o=260,intensity:t=.4}){const i=nt.useRef(null);return nt.useEffect(()=>{const s=i.current;if(!s)return;const l=s.clientWidth,c=s.clientHeight||o,d=new Nh;d.background=new Tt(132631);const h=new kn(45,l/c,.1,1e3);h.position.set(0,.9,5),h.lookAt(0,0,0);const m=new Ih({antialias:!0});m.setSize(l,c),m.setPixelRatio(window.devicePixelRatio),s.appendChild(m.domElement),d.add(new zh(16777215,.9));const p=new Oh(16777215,1.2);p.position.set(3,5,2),d.add(p);const g=new $a(.4,32,32),x=new Bo({color:16733525}),b=new Bo({color:5609983}),y=new hn(g,x),E=new hn(g,b);y.position.set(-1.2,0,0),E.position.set(1.2,0,0),d.add(y,E);const R=new Ui,S=new Xo(.06,.35,16),_=new Ja({color:16768341}),P=Math.min(1,Math.max(0,t)),N=7+Math.round(P*8);for(let V=0;V<N;V++){const ie=(V/(N-1)-.5)*2*.8,Z=(Math.random()-.5)*.1,$=new hn(S,_);$.position.set(ie-.25,Z,0),$.rotation.z=0,$.lookAt(1,Z,0),$.scale.set(1,1+P*1.5,1),R.add($);const z=new hn(S,_);z.position.set(-ie+.25,Z,0),z.lookAt(-1,Z,0),z.scale.set(1,1+P*1.5,1),R.add(z)}d.add(R);const F=new $a(.03,8,8),H=new Ja({color:16755251}),U=new Ui;for(let V=0;V<70;V++){const Y=new hn(F,H);Y.position.set((Math.random()-.5)*3,(Math.random()-.5)*1.5,(Math.random()-.5)*1.5),U.add(Y)}d.add(U);const B=new Ph;let ee;const D=()=>{ee=requestAnimationFrame(D);const V=B.getElapsedTime(),Y=.3+P*1.5;R.rotation.z=.05*Math.sin(V*Y),U.rotation.y+=.003*Y,y.position.y=.05*Math.sin(V*1.3),E.position.y=.05*Math.cos(V*1.1),m.render(d,h)};D();const C=()=>{const V=s.clientWidth,Y=s.clientHeight||o;h.aspect=V/Y,h.updateProjectionMatrix(),m.setSize(V,Y)};return window.addEventListener("resize",C),()=>{window.removeEventListener("resize",C),cancelAnimationFrame(ee),m.dispose(),s.removeChild(m.domElement)}},[o,t]),M.jsx("div",{ref:i,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}function zE({minHeight:o=260,intensity:t=.4,isNegative:i=!1}){const s=nt.useRef(null);return nt.useEffect(()=>{const l=s.current;if(!l)return;const c=l.clientWidth,d=l.clientHeight||o,h=new Nh;h.background=new Tt(132631);const m=new kn(45,c/d,.1,1e3);m.position.set(0,.9,4.2),m.lookAt(0,0,0);const p=new Ih({antialias:!0});p.setSize(c,d),p.setPixelRatio(window.devicePixelRatio),l.appendChild(p.domElement),h.add(new zh(16777215,.9));const g=new Oh(16777215,1.2);g.position.set(3,5,2),h.add(g);const x=new $a(.45,32,32),b=new Bo({color:i?5609983:16733525}),y=new hn(x,b);y.position.set(0,0,0),h.add(y);const E=new Ui,R=new Xo(.05,.25,12),S=new Ja({color:16768341}),_=Math.min(1,Math.max(0,t)),P=24;for(let C=0;C<P;C++){const V=C/P*Math.PI*2,Y=1.4,ie=Math.cos(V)*Y,Z=Math.sin(V)*Y,$=new hn(R,S);if($.position.set(ie,0,Z),i)$.lookAt(y.position);else{const z=new de(ie*2,0,Z*2);$.lookAt(z)}$.scale.set(1,1+_*2,1),E.add($)}h.add(E);const N=new $a(.03,8,8),F=new Ja({color:16755251}),H=new Ui;for(let C=0;C<80;C++){const V=new hn(N,F);V.position.set((Math.random()-.5)*5,(Math.random()-.3)*2,(Math.random()-.5)*5),H.add(V)}h.add(H);const U=new Ph;let B;const ee=()=>{B=requestAnimationFrame(ee);const C=U.getElapsedTime(),V=.25+_*1.2;E.rotation.y+=.002*V,H.rotation.y+=.0015*V,y.position.y=.05*Math.sin(C*2),p.render(h,m)};ee();const D=()=>{const C=l.clientWidth,V=l.clientHeight||o;m.aspect=C/V,m.updateProjectionMatrix(),p.setSize(C,V)};return window.addEventListener("resize",D),()=>{window.removeEventListener("resize",D),cancelAnimationFrame(B),p.dispose(),l.removeChild(p.domElement)}},[o,t,i]),M.jsx("div",{ref:s,className:"w-full h-full bg-slate-900 rounded-xl overflow-hidden",style:{minHeight:o}})}const Za=24,Tg=4,_h=900,vh=420;let Td=1;function PE(o,t){const i=o.x-t.x,s=o.y-t.y;return Math.sqrt(i*i+s*s)}function Ad(o,t){return{x:Math.round(o/Za)*Za,y:Math.round(t/Za)*Za}}function Rd(o,t,i,s=10){const l={x:t,y:i};for(const c of o)if(PE(c,l)<=s)return c;return null}function Cd(o,t){const i=o.getBoundingClientRect(),s=t.clientX-i.left,l=t.clientY-i.top,c=_h/i.width,d=vh/i.height;return{x:s*c,y:l*d}}function IE(o,t,i){if(!o.length||!t.length)return{ok:!1,message:"Dibuja al menos una resistencia."};const s=t.filter(L=>L.type==="resistor");if(!s.length)return{ok:!1,message:"No hay resistencias en el circuito."};const l=t.filter(L=>L.type==="wire"),c=t.filter(L=>L.type==="source"),d=new Map;o.forEach((L,k)=>d.set(L.id,k));const h=o.map((L,k)=>k),m=L=>h[L]===L?L:h[L]=m(h[L]),p=(L,k)=>{L=m(L),k=m(k),L!==k&&(h[k]=L)};for(const L of l){const k=d.get(L.n1),ne=d.get(L.n2);k!=null&&ne!=null&&p(k,ne)}const g=new Map;let x=0;const b=new Map;if(o.forEach(L=>{const k=d.get(L.id),ne=m(k);g.has(ne)||g.set(ne,x++),b.set(L.id,g.get(ne))}),x<2)return{ok:!1,message:"El circuito no tiene al menos dos nodos distintos después de unir los cables."};const y=[];for(const L of s){const k=b.get(L.n1),ne=b.get(L.n2);if(k==null||ne==null||k===ne)continue;const O=Number(L.value)||0;O<=0||y.push({a:k,b:ne,R:O,id:L.id})}if(!y.length)return{ok:!1,message:"Las resistencias tienen valor 0 o no conectan nodos distintos."};let E=0,R=1;if(c.length){const L=c[0],k=b.get(L.n1),ne=b.get(L.n2);k!=null&&ne!=null&&k!==ne&&(E=k,R=ne)}else{let L=o[0],k=o[0];for(const ne of o)ne.x<L.x&&(L=ne),ne.x>k.x&&(k=ne);E=b.get(L.id),R=b.get(k.id)}const S=Number(i)||0;if(S<=0)return{ok:!1,message:"Ingresa un voltaje positivo para calcular la corriente."};const _=Array.from(new Set(b.values())),P=_.filter(L=>L!==E&&L!==R),N=new Map;P.forEach((L,k)=>N.set(L,k));const F=P.length,H=Array.from({length:F},()=>Array(F).fill(0)),U=Array(F).fill(0),B=L=>L===E?S:L===R?0:null;for(const L of y){const k=1/L.R,[ne,O]=[L.a,L.b],K=N.get(ne),me=N.get(O),ye=B(ne),Ae=B(O);K!=null&&me!=null?(H[K][K]+=k,H[me][me]+=k,H[K][me]-=k,H[me][K]-=k):K!=null&&Ae!=null?(H[K][K]+=k,U[K]+=k*Ae):me!=null&&ye!=null?(H[me][me]+=k,U[me]+=k*ye):K!=null&&me==null&&Ae==null?H[K][K]+=k:me!=null&&K==null&&ye==null&&(H[me][me]+=k)}const ee=Array(F).fill(0);if(F>0){for(let k=0;k<F;k++){let ne=k;for(let K=k+1;K<F;K++)Math.abs(H[K][k])>Math.abs(H[ne][k])&&(ne=K);if(Math.abs(H[ne][k])<1e-9)continue;[H[k],H[ne]]=[H[ne],H[k]],[U[k],U[ne]]=[U[ne],U[k]];const O=H[k][k];for(let K=k;K<F;K++)H[k][K]/=O;U[k]/=O;for(let K=0;K<F;K++){if(K===k)continue;const me=H[K][k];for(let ye=k;ye<F;ye++)H[K][ye]-=me*H[k][ye];U[K]-=me*U[k]}}for(let k=0;k<F;k++)ee[k]=U[k]}const D=new Map;_.forEach(L=>{const k=N.get(L);k!=null?D.set(L,ee[k]):D.set(L,B(L)??0)});let C=0;for(const L of y)if(L.a===E||L.b===E){const k=L.a===E?L.b:L.a,ne=D.get(E),O=D.get(k);C+=(ne-O)/L.R}const V=S/C;let Y="Mixto";const ie=new Set;y.forEach(L=>{ie.add(L.a),ie.add(L.b)});const Z={};ie.forEach(L=>Z[L]=0),y.forEach(L=>{Z[L.a]++,Z[L.b]++});const $=y.length,z=ie.size;return y.every(L=>L.a===E&&L.b===R||L.a===R&&L.b===E)&&$>1?Y="Paralelo simple":$===z-1&&Z[E]===1&&Z[R]===1&&(Y="Serie (camino único)"),{ok:!0,message:"",Req:V,Itotal:C,Vsrc:S,tipo:Y,branchCurrents:y.map(L=>{const k=D.get(L.a),ne=D.get(L.b);return{id:L.id,I:(k-ne)/L.R,Va:k,Vb:ne,R:L.R}})}}function FE({onBack:o}){const[t,i]=nt.useState("wire"),[s,l]=nt.useState([]),[c,d]=nt.useState([]),[h,m]=nt.useState(null),[p,g]=nt.useState(null),[x,b]=nt.useState("10"),[y,E]=nt.useState(null),[R,S]=nt.useState("Selecciona una herramienta, haz clic y arrastra tipo Paint."),[_,P]=nt.useState(!1),[N,F]=nt.useState(null),[H,U]=nt.useState(null),B=nt.useRef(null),ee=Z=>{if(!B.current)return;const{x:$,y:z}=Cd(B.current,Z),{x:q,y:L}=Ad($,z);if(t==="erase"){const ne={x:q,y:L},O=10;d(K=>{const me=K.filter(ye=>{const Ae=s.find(Zt=>Zt.id===ye.n1),ae=s.find(Zt=>Zt.id===ye.n2);if(!Ae||!ae)return!1;const he=Math.min(Ae.x,ae.x)-O,De=Math.max(Ae.x,ae.x)+O,Be=Math.min(Ae.y,ae.y)-O,je=Math.max(Ae.y,ae.y)+O;return!(ne.x>=he&&ne.x<=De&&ne.y>=Be&&ne.y<=je)});return l(ye=>{const Ae=new Set;return me.forEach(ae=>{Ae.add(ae.n1),Ae.add(ae.n2)}),ye.filter(ae=>Ae.has(ae.id))}),me}),S("Elemento borrado (si había alguno cercano).");return}let k=Rd(s,q,L,8);k||(k={id:`n${Td++}`,x:q,y:L},l(ne=>[...ne,k])),m(k.id),P(!0),F({x:k.x,y:k.y,nodeId:k.id}),U({x:k.x,y:k.y}),S("Arrastra para definir el tramo y suelta para fijarlo.")},D=Z=>{if(!B.current)return;const{x:$,y:z}=Cd(B.current,Z),{x:q,y:L}=Ad($,z),k=Rd(s,q,L,8);g(k?k.id:null),_&&U({x:q,y:L})},C=Z=>{if(!_||!B.current||!N)return;const{x:$,y:z}=Cd(B.current,Z),{x:q,y:L}=Ad($,z);let k=Rd(s,q,L,8);if(k||(k={id:`n${Td++}`,x:q,y:L},l(ne=>[...ne,k])),k.id!==N.nodeId){const ne=N.nodeId,O=k.id;if(t==="wire"||t==="resistor"||t==="source"){const K={id:`e${Td++}`,type:t,n1:ne,n2:O,value:t==="resistor"?10:t==="source"?Number(x)||10:0};d(me=>[...me,K])}S("Tramo añadido. Puedes seguir desde el último nodo.")}else S("Tramo cancelado.");m(k.id),P(!1),F(null),U(null)},V=()=>{const Z=IE(s,c,Number(x)||0);E(Z),Z.ok?S(`R_eq = ${Z.Req.toFixed(2)} Ω · I_total = ${Z.Itotal.toFixed(3)} A (${Z.tipo})`):S(Z.message)},Y=(Z,$)=>{d(z=>z.map(q=>q.id===Z?{...q,value:$}:q))},ie=()=>{l([]),d([]),m(null),g(null),E(null),P(!1),F(null),U(null),S("Canvas limpio. Comienza un nuevo circuito.")};return M.jsxs("div",{className:"rounded-2xl border border-emerald-600/60 bg-slate-950/95 p-4 space-y-4",children:[M.jsxs("div",{className:"flex items-center justify-between gap-2",children:[M.jsxs("div",{children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold text-emerald-300",children:"Editor de circuitos de corriente continua"}),M.jsx("p",{className:"text-[11px] md:text-xs text-gray-300 max-w-3xl",children:"Selecciona una herramienta, haz clic y arrastra para dibujar tramos rectos. Los puntos amarillos son nodos de unión."})]}),o&&M.jsx("button",{onClick:o,className:"text-[11px] md:text-xs px-3 py-1.5 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"← Volver"})]}),M.jsxs("div",{className:"flex flex-wrap items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-2 text-[11px] md:text-xs",children:[M.jsx("span",{className:"text-gray-300 mr-1",children:"Herramientas:"}),[{id:"wire",label:"Cable"},{id:"resistor",label:"Resistencia"},{id:"source",label:"Fuente DC"},{id:"erase",label:"Borrar"}].map(Z=>M.jsx("button",{onClick:()=>{i(Z.id),P(!1),F(null),U(null),m(null)},className:`px-3 py-1 rounded-full border text-xs font-medium ${t===Z.id?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-800/80 text-slate-200 border-slate-600 hover:bg-slate-700"}`,children:Z.label},Z.id)),M.jsxs("div",{className:"ml-3 flex items-center gap-1",children:[M.jsx("span",{className:"text-gray-300",children:"Voltaje fuente (V):"}),M.jsx("input",{type:"number",value:x,onChange:Z=>b(Z.target.value),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"})]}),M.jsx("button",{onClick:ie,className:"ml-auto px-3 py-1 rounded-full border border-slate-600 bg-slate-800 hover:bg-slate-700 text-gray-100",children:"Limpiar"})]}),M.jsxs("div",{className:"grid md:grid-cols-[2fr,1fr] gap-4 items-start",children:[M.jsx("div",{className:"rounded-xl border border-slate-700 bg-black/95 overflow-hidden",children:M.jsxs("svg",{ref:B,viewBox:`0 0 ${_h} ${vh}`,className:"w-full h-[420px] cursor-crosshair",onMouseDown:ee,onMouseMove:D,onMouseUp:C,children:[M.jsx("defs",{children:M.jsx("pattern",{id:"smallGrid",width:Za,height:Za,patternUnits:"userSpaceOnUse",children:M.jsx("path",{d:`M ${Za} 0 L 0 0 0 ${Za}`,fill:"none",stroke:"#1f2933",strokeWidth:"0.5"})})}),M.jsx("rect",{x:"0",y:"0",width:_h,height:vh,fill:"url(#smallGrid)"}),c.map(Z=>{const $=s.find(k=>k.id===Z.n1),z=s.find(k=>k.id===Z.n2);if(!$||!z)return null;const q=($.x+z.x)/2,L=($.y+z.y)/2;if(Z.type==="wire")return M.jsx("line",{x1:$.x,y1:$.y,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"},Z.id);if(Z.type==="resistor"){const k=Math.abs($.y-z.y)<Math.abs($.x-z.x),ne=[],O=6;for(let K=0;K<=O;K++){const me=K/O,ye=$.x+(z.x-$.x)*me,Ae=$.y+(z.y-$.y)*me,ae=(K%2===0?-1:1)*6;K!==0&&K!==O?ne.push(k?`${ye},${Ae+ae}`:`${ye+ae},${Ae}`):ne.push(`${ye},${Ae}`)}return M.jsxs("g",{children:[M.jsx("polyline",{points:ne.join(" "),fill:"none",stroke:"#f97316",strokeWidth:"3",strokeLinecap:"round"}),M.jsxs("text",{x:q,y:L-10,fontSize:"11",fill:"#facc15",textAnchor:"middle",children:[Z.value," Ω"]})]},Z.id)}if(Z.type==="source"){const k=Math.abs($.y-z.y)<Math.abs($.x-z.x),ne=14,O=26,K=14;return k?M.jsxs("g",{children:[M.jsx("line",{x1:$.x,y1:$.y,x2:q-ne,y2:L,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),M.jsx("line",{x1:q+ne,y1:L,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),M.jsx("line",{x1:q-ne/2,y1:L-O/2,x2:q-ne/2,y2:L+O/2,stroke:"#e5e7eb",strokeWidth:"3"}),M.jsx("line",{x1:q+ne/2,y1:L-K/2,x2:q+ne/2,y2:L+K/2,stroke:"#9ca3af",strokeWidth:"2.5"}),M.jsxs("text",{x:q,y:L-O/2-8,fontSize:"11",fill:"#4ade80",textAnchor:"middle",children:[Z.value," V"]})]},Z.id):M.jsxs("g",{children:[M.jsx("line",{x1:$.x,y1:$.y,x2:$.x,y2:L-ne,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),M.jsx("line",{x1:z.x,y1:L+ne,x2:z.x,y2:z.y,stroke:"#22c1dc",strokeWidth:"3",strokeLinecap:"round"}),M.jsx("line",{x1:q-O/2,y1:L-ne/2,x2:q+O/2,y2:L-ne/2,stroke:"#e5e7eb",strokeWidth:"3"}),M.jsx("line",{x1:q-K/2,y1:L+ne/2,x2:q+K/2,y2:L+ne/2,stroke:"#9ca3af",strokeWidth:"2.5"}),M.jsxs("text",{x:q+O/2+6,y:L+4,fontSize:"11",fill:"#4ade80",children:[Z.value," V"]})]},Z.id)}return null}),_&&N&&H&&t!=="erase"&&M.jsx("line",{x1:N.x,y1:N.y,x2:H.x,y2:H.y,stroke:"#4ade80",strokeWidth:"3",strokeDasharray:"6 4",strokeLinecap:"round",opacity:"0.8"}),s.map(Z=>M.jsx("circle",{cx:Z.x,cy:Z.y,r:Z.id===p||Z.id===h?Tg+1:Tg,fill:Z.id===h?"#f97316":"#facc15",stroke:"#111827",strokeWidth:"1",opacity:Z.id===p||Z.id===h?1:.7},Z.id))]})}),M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/90 p-3 space-y-3 text-[11px] md:text-xs text-gray-200",children:[M.jsx("h4",{className:"font-semibold text-gray-100",children:"Parámetros y resultados"}),M.jsxs("div",{className:"space-y-1",children:[M.jsx("p",{className:"text-gray-300",children:"1. Dibuja el circuito como en Paint: clic y arrastra."}),M.jsx("p",{className:"text-gray-300",children:"2. Ajusta los valores de las resistencias."}),M.jsxs("p",{className:"text-gray-300",children:["3. Haz clic en"," ",M.jsx("span",{className:"font-semibold",children:"“Calcular R_eq e intensidades”"}),"."]})]}),M.jsxs("div",{className:"space-y-2",children:[M.jsx("h5",{className:"font-semibold text-gray-100",children:"Resistencias del circuito"}),c.filter(Z=>Z.type==="resistor").length===0&&M.jsx("p",{className:"text-gray-400",children:"No hay resistencias aún. Selecciona “Resistencia” y dibuja entre dos puntos."}),M.jsx("div",{className:"space-y-1 max-h-40 overflow-y-auto pr-1",children:c.filter(Z=>Z.type==="resistor").map((Z,$)=>M.jsxs("div",{className:"flex items-center gap-2 border border-slate-700 rounded-lg px-2 py-1",children:[M.jsxs("span",{className:"text-gray-300",children:["R",$+1,":"]}),M.jsx("input",{type:"number",value:Z.value,onChange:z=>Y(Z.id,Number(z.target.value)||0),className:"w-16 px-1 py-0.5 rounded-md bg-slate-800 border border-slate-600 text-[11px]"}),M.jsx("span",{className:"text-gray-400",children:"Ω"}),M.jsx("button",{onClick:()=>d(z=>z.filter(q=>q.id!==Z.id)),className:"ml-auto px-2 py-0.5 rounded-full border border-red-500/60 text-red-300 hover:bg-red-500/10 text-[10px]",children:"✕"})]},Z.id))})]}),M.jsx("button",{onClick:V,className:"w-full mt-1 px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-xs",children:"Calcular R_eq e intensidades"}),M.jsxs("div",{className:"mt-2 space-y-1",children:[M.jsx("h5",{className:"font-semibold text-gray-100",children:"Resultados"}),y?y.ok?M.jsxs(M.Fragment,{children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"R_eq:"})," ",y.Req.toFixed(2)," Ω"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"I_total:"})," ",y.Itotal.toFixed(3)," A"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Tipo de conexión (aprox.):"})," ",y.tipo]}),y.branchCurrents.length>1&&M.jsxs("div",{className:"mt-1",children:[M.jsx("p",{className:"font-semibold text-gray-100",children:"Corrientes por resistencia"}),M.jsx("ul",{className:"list-disc list-inside space-y-0.5",children:y.branchCurrents.map((Z,$)=>M.jsxs("li",{children:["R",$+1,": ",Z.I.toFixed(3)," A"]},Z.id))})]})]}):M.jsx("p",{className:"text-red-400",children:y.message}):M.jsx("p",{className:"text-gray-400",children:"Aún no se ha realizado el cálculo."})]}),M.jsxs("div",{className:"mt-2 text-[11px] text-gray-400 border-t border-slate-700 pt-2",children:[M.jsx("span",{className:"font-semibold text-sky-300",children:"Estado:"})," ",R]})]})]})]})}const i_=899e7;function BE(){const[o,t]=nt.useState("0.000001"),[i,s]=nt.useState("0.000001"),[l,c]=nt.useState("0.1"),[d,h]=nt.useState(null),[m,p]=nt.useState(""),g=()=>{p("");const b=parseFloat(o),y=parseFloat(i),E=parseFloat(l);if([b,y,E].some(N=>isNaN(N))){p("Ingresa valores numéricos válidos."),h(null);return}if(E<=0){p("La distancia r debe ser mayor que 0."),h(null);return}const R=b*1e-6,S=y*1e-6,_=i_*Math.abs(R*S)/(E*E),P=b*y>0?"Repulsión (cargas del mismo signo)":"Atracción (cargas de signo opuesto)";h({F:_,tipo:P,q1Input:b,q2Input:y,r:E,q1C:R,q2C:S})},x=d&&d.F>0?Math.min(1,Math.log10(1+d.F)/6):.3;return M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.1 Ley de Coulomb – Fuerza eléctrica"}),M.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["Calcula la fuerza eléctrica entre dos cargas puntuales:",M.jsx("span",{className:"block mt-1 italic",children:"F = k · |q₁ q₂| / r²"})]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[M.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"q₁ (μC)"}),M.jsx("input",{type:"number",value:o,onChange:b=>t(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"q₂ (μC)"}),M.jsx("input",{type:"number",value:i,onChange:b=>s(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col col-span-2",children:[M.jsx("span",{children:"r (m)"}),M.jsx("input",{type:"number",value:l,onChange:b=>c(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),M.jsx("button",{onClick:g,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular F"}),m&&M.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&M.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Fuerza:"})," ",d.F.toExponential(3)," N"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Tipo:"})," ",d.tipo]}),M.jsxs("p",{className:"text-[11px] text-gray-400",children:["q₁ = ",d.q1Input," μC · q₂ = ",d.q2Input," μC · r ="," ",d.r," m"]})]})]}),M.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[M.jsxs("p",{children:["• Si q₁ y q₂ tienen el mismo signo ⇒ la fuerza es de"," ",M.jsx("span",{className:"text-amber-300 font-semibold",children:"repulsión"}),"."]}),M.jsxs("p",{children:["• Si tienen signos opuestos ⇒ la fuerza es de"," ",M.jsx("span",{className:"text-sky-300 font-semibold",children:"atracción"}),"."]}),M.jsx("p",{children:"• Al duplicar la distancia r, la fuerza se reduce a la cuarta parte (depende de 1 / r²)."})]})]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-stretch",children:[M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&M.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.tipo.startsWith("Repulsión")?"Repulsión":"Atracción"})]}),M.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[M.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[M.jsx("div",{className:"h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-xs font-bold",children:d&&d.q1Input>=0?"+":"−"}),M.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₁ = ",o," μC"]})]}),M.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[M.jsx("div",{className:"h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-xs font-bold",children:d&&d.q2Input>=0?"+":"−"}),M.jsxs("div",{className:"text-[10px] text-gray-300",children:["q₂ = ",i," μC"]})]}),M.jsx("div",{className:"h-0.5 w-32 bg-gradient-to-r from-red-400 via-amber-300 to-blue-400"}),M.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Representación 2D del vector de fuerza."})]})]}),M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),d&&M.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",x.toFixed(2)]})]}),M.jsx("div",{className:"flex-1",children:M.jsx(OE,{minHeight:260,intensity:x})})]})]})]})}function HE(){const[o,t]=nt.useState("0.000001"),[i,s]=nt.useState("0.1"),[l,c]=nt.useState(null),[d,h]=nt.useState(""),m=()=>{h("");const g=parseFloat(o),x=parseFloat(i);if([g,x].some(R=>isNaN(R))){h("Ingresa valores numéricos válidos."),c(null);return}if(x<=0){h("La distancia r debe ser mayor que 0."),c(null);return}const b=g*1e-6,y=i_*Math.abs(b)/(x*x),E=g>0?"Sale radialmente hacia afuera (carga positiva)":"Entra radialmente hacia la carga (carga negativa)";c({E:y,qInput:g,qC:b,r:x,direccion:E})},p=l&&l.E>0?Math.min(1,Math.log10(1+l.E)/10):.3;return M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.2 Campo eléctrico de una carga puntual"}),M.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["El campo eléctrico generado por una carga puntual se define como:",M.jsx("span",{className:"block mt-1 italic",children:"E = k · |q| / r²"}),"donde ",M.jsx("span",{className:"font-semibold",children:"E"})," se mide en N/C,",M.jsx("span",{className:"font-semibold",children:" q"})," es la carga y",M.jsx("span",{className:"font-semibold",children:" r"})," la distancia al punto de estudio."]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[M.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[M.jsxs("label",{className:"flex flex-col col-span-2",children:[M.jsx("span",{children:"q (μC)"}),M.jsx("input",{type:"number",value:o,onChange:g=>t(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col col-span-2",children:[M.jsx("span",{children:"r (m)"}),M.jsx("input",{type:"number",value:i,onChange:g=>s(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),M.jsx("button",{onClick:m,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular E"}),d&&M.jsx("p",{className:"text-xs text-red-400 mt-1",children:d}),l&&M.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Campo eléctrico:"})," ",l.E.toExponential(3)," N/C"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Dirección:"})," ",l.direccion]}),M.jsxs("p",{className:"text-[11px] text-gray-400",children:["q = ",l.qInput," μC · r = ",l.r," m"]})]})]}),M.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[M.jsx("p",{children:"• El campo eléctrico es una magnitud vectorial: tiene módulo, dirección y sentido."}),M.jsx("p",{children:"• Cerca de la carga, el campo es más intenso; al aumentar la distancia r, el valor de E disminuye con 1 / r²."}),M.jsx("p",{children:"• Convencionalmente se define respecto a una carga de prueba positiva."})]})]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-stretch",children:[M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),l&&M.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:l.qInput>=0?"Carga positiva":"Carga negativa"})]}),M.jsxs("div",{className:"flex-1 relative flex items-center justify-center",children:[M.jsxs("div",{className:"flex flex-col items-center gap-1",children:[M.jsx("div",{className:`h-12 w-12 rounded-full flex items-center justify-center text-sm font-bold ${l&&l.qInput<0?"bg-blue-500":"bg-red-500"}`,children:l&&l.qInput<0?"−":"+"}),M.jsxs("div",{className:"text-[10px] text-gray-300",children:["q = ",o," μC"]})]}),M.jsx("div",{className:"absolute inset-0 flex items-center justify-center pointer-events-none",children:M.jsx("div",{className:"relative h-24 w-24",children:[...Array(8)].map((g,x)=>{const b=x/8*Math.PI*2,y=l&&l.qInput<0?-1:1;return M.jsx("div",{className:"absolute h-[2px] w-8 bg-gradient-to-r from-amber-300 to-amber-500 origin-left",style:{left:"36px",top:"36px",transform:`rotate(${b*180/Math.PI+(y>0?0:180)}deg)`,opacity:.8}},x)})})}),M.jsx("div",{className:"absolute bottom-3 text-[11px] text-gray-300",children:"Líneas de campo eléctrico de una carga puntual."})]})]}),M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col",children:[M.jsxs("div",{className:"flex items-center justify-between mb-2",children:[M.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Simulación 3D"}),l&&M.jsxs("span",{className:"text-[10px] text-gray-400",children:["Intensidad ~ ",p.toFixed(2)]})]}),M.jsx("div",{className:"flex-1",children:M.jsx(zE,{minHeight:260,intensity:p,isNegative:l&&l.qInput<0})})]})]})]})}function VE(){const[o,t]=nt.useState(!1),[i,s]=nt.useState("5"),[l,c]=nt.useState("10"),[d,h]=nt.useState(null),[m,p]=nt.useState(""),g=()=>{p("");const E=parseFloat(i),R=parseFloat(l);if([E,R].some(N=>isNaN(N))){p("Ingresa valores numéricos válidos."),h(null);return}if(R<=0){p("La resistencia R debe ser mayor que 0."),h(null);return}const S=E/R,_=E*S;let P;S<.2?P="Corriente baja":S<1?P="Corriente moderada":P="Corriente alta",h({V:E,R,I:S,P:_,nivel:P})};if(o)return M.jsx(FE,{onBack:()=>t(!1)});const b=25+(d&&d.I>=0?Math.min(1,Math.log10(1+Math.abs(d.I))/2):.2)*65,y=d&&d.I>=1?"bg-red-500":d&&d.I>=.2?"bg-amber-400":"bg-sky-400";return M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-4",children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"2.3 Corriente y Ley de Ohm"}),M.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["La Ley de Ohm relaciona el voltaje, la corriente y la resistencia:",M.jsx("span",{className:"block mt-1 italic",children:"V = I · R   ⇔   I = V / R"}),"donde ",M.jsx("span",{className:"font-semibold",children:"V"})," está en voltios (V),",M.jsx("span",{className:"font-semibold",children:" I"})," en amperios (A) y",M.jsx("span",{className:"font-semibold",children:" R"})," en ohmios (Ω)."]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start",children:[M.jsxs("div",{className:"space-y-2 text-xs md:text-sm",children:[M.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[M.jsxs("label",{className:"flex flex-col col-span-2",children:[M.jsx("span",{children:"Voltaje V (voltios)"}),M.jsx("input",{type:"number",value:i,onChange:E=>s(E.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col col-span-2",children:[M.jsx("span",{children:"Resistencia R (Ω)"}),M.jsx("input",{type:"number",value:l,onChange:E=>c(E.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),M.jsx("button",{onClick:g,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular"}),m&&M.jsx("p",{className:"text-xs text-red-400 mt-1",children:m}),d&&M.jsxs("div",{className:"mt-2 text-xs md:text-sm bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Corriente I:"})," ",d.I.toFixed(3)," A"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Potencia P:"})," ",d.P.toFixed(2)," W"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"Nivel:"})," ",d.nivel]}),M.jsxs("p",{className:"text-[11px] text-gray-400",children:["V = ",d.V," V · R = ",d.R," Ω"]})]})]}),M.jsxs("div",{className:"text-[11px] md:text-xs text-gray-400 space-y-1",children:[M.jsx("p",{children:"• Si aumentas el voltaje V manteniendo R constante, la corriente I aumenta proporcionalmente."}),M.jsx("p",{children:"• Si aumentas la resistencia R manteniendo V constante, la corriente disminuye."}),M.jsx("p",{children:"• La potencia disipada en la resistencia es P = V · I = I² · R."})]})]}),M.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-900/80 p-3 flex flex-col gap-3",children:[M.jsxs("div",{className:"flex items-center justify-between",children:[M.jsx("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:"Visualización 2D"}),d&&M.jsx("span",{className:"text-[11px] text-amber-300 font-semibold",children:d.nivel})]}),M.jsxs("div",{className:"flex flex-col gap-3 text-[11px] md:text-xs",children:[M.jsxs("div",{className:"relative w-full h-24 flex items-center justify-center",children:[M.jsxs("div",{className:"absolute left-6 flex flex-col items-center gap-1",children:[M.jsxs("div",{className:"h-10 w-6 rounded-md bg-slate-800 border border-slate-500 flex flex-col justify-center",children:[M.jsx("div",{className:"h-1.5 w-4 bg-slate-200 mx-auto mb-1"}),M.jsx("div",{className:"h-0.5 w-3 bg-slate-500 mx-auto"})]}),M.jsxs("span",{className:"text-[10px] text-gray-300",children:["Fuente (",i," V)"]})]}),M.jsxs("div",{className:"absolute right-6 flex flex-col items-center gap-1",children:[M.jsx("div",{className:"h-4 w-10 bg-slate-300 rounded-sm"}),M.jsxs("span",{className:"text-[10px] text-gray-300",children:["R = ",l," Ω"]})]}),M.jsx("div",{className:"absolute top-6 left-10 right-10 h-0.5 bg-slate-600"}),M.jsx("div",{className:"absolute bottom-6 left-10 right-10 h-0.5 bg-slate-600"}),M.jsx("div",{className:"absolute inset-x-16 top-[22px] h-2 rounded-full bg-slate-800 overflow-hidden",children:M.jsx("div",{className:`h-full ${y} transition-all duration-500`,style:{width:`${b}%`}})}),M.jsx("div",{className:"absolute top-[19px] right-[52px] w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-slate-100"})]}),M.jsx("p",{className:"text-gray-300",children:"La anchura y el color de la barra representan la intensidad de la corriente: valores pequeños en azul, moderados en amarillo y altos en rojo."})]})]}),M.jsxs("div",{className:"pt-2 border-t border-slate-700 flex flex-col md:flex-row md:items-center md:justify-between gap-2",children:[M.jsx("p",{className:"text-[11px] md:text-xs text-gray-400 max-w-md",children:"¿Quieres diseñar tu propio circuito con cables, resistencias y una fuente y que el sistema detecte si es serie o paralelo?"}),M.jsx("button",{onClick:()=>t(!0),className:"text-xs px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold shadow-sm",children:"Abrir editor de circuitos de corriente continua"})]})]})}function GE({is3D:o}){const[t,i]=nt.useState("coulomb"),s=[{id:"coulomb",label:"2.1 Ley de Coulomb"},{id:"campo",label:"2.2 Campo eléctrico"},{id:"ohm",label:"2.3 Corriente y Ley de Ohm"}],l=s.find(c=>c.id===t)?.label??"Subtema";return M.jsxs("section",{id:"electricidad",className:"max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5",children:[M.jsxs("header",{className:"space-y-1",children:[M.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:"⚡ Electricidad"}),M.jsx("p",{className:"text-xs md:text-sm text-gray-300",children:"Competencia: el estudiante resuelve problemas identificando tipos de carga eléctrica, aplicando la Ley de Ohm, resolviendo circuitos de corriente continua y prediciendo el comportamiento de cargas en campos eléctricos."}),M.jsxs("p",{className:"text-[11px] text-gray-400",children:["Subtema actual: ",M.jsx("span",{className:"font-semibold text-sky-400",children:l})]})]}),M.jsx("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-3",children:M.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-2",children:s.map(c=>M.jsx("button",{onClick:()=>i(c.id),className:`text-[11px] md:text-xs px-3 py-2 rounded-full font-medium transition
                ${t===c.id?"bg-primary text-white shadow-sm":"bg-slate-800/80 text-slate-200 hover:bg-slate-700"}`,children:c.label},c.id))})}),t==="coulomb"&&M.jsx(BE,{is3D:o}),t==="campo"&&M.jsx(HE,{is3D:o}),t==="ohm"&&M.jsx(VE,{})]})}function a_({minHeight:o=260,intensity:t=.4}){const i=nt.useRef(null);return nt.useEffect(()=>{const s=i.current;if(!s)return;const l=s.clientWidth,c=s.clientHeight||o,d=new Nh;d.background=new Tt(132631);const h=new kn(45,l/c,.1,1e3);h.position.set(0,1,5),h.lookAt(0,0,0);const m=new Ih({antialias:!0});m.setSize(l,c),m.setPixelRatio(window.devicePixelRatio),s.appendChild(m.domElement);const p=new zh(16777215,.9);d.add(p);const g=new Oh(16777215,1.2);g.position.set(3,5,2),d.add(g);const x=new $a(.35,32,32),b=new Bo({color:16733525}),y=new Bo({color:5609983}),E=new hn(x,b),R=new hn(x,y);E.position.set(-1,0,0),R.position.set(1,0,0),d.add(E,R);const S=Math.min(1,Math.max(0,t)),_=.3+S*1.7,P=new Ui,N=new Ja({color:16768341}),F=new Xo(.05,.2,12);for(let Y=0;Y<40;Y++){const ie=Y/40*Math.PI*2,Z=.9+Y%3*.25,$=Math.cos(ie)*Z,z=Math.sin(ie)*Z,q=new hn(F,N);q.position.set($,0,z),q.lookAt(E.position),q.scale.set(1,1+S*2,1),P.add(q)}d.add(P);const H=new $a(.03,8,8),U=new Ja({color:16755251}),B=new Ui;for(let Y=0;Y<60;Y++){const ie=new hn(H,U);ie.position.set((Math.random()-.5)*4,(Math.random()-.3)*2,(Math.random()-.5)*4),B.add(ie)}d.add(B);const ee=new Ph;let D;const C=()=>{const Y=ee.getElapsedTime()*_;D=requestAnimationFrame(C),B.rotation.y+=.003*_,P.rotation.y+=.0015*_,E.position.y=Math.sin(Y)*.05,R.position.y=Math.cos(Y)*.05,m.render(d,h)};C();const V=()=>{if(!s)return;const Y=s.clientWidth,ie=s.clientHeight||o;h.aspect=Y/ie,h.updateProjectionMatrix(),m.setSize(Y,ie)};return window.addEventListener("resize",V),()=>{window.removeEventListener("resize",V),cancelAnimationFrame(D),m.dispose(),s.removeChild(m.domElement)}},[o,t]),M.jsx("div",{ref:i,className:"w-full h-full bg-slate-900",style:{minHeight:o}})}function jE({is3D:o}){const[t,i]=nt.useState(1),[s,l]=nt.useState(1.5),[c,d]=nt.useState(30),[h,m]=nt.useState(null),[p,g]=nt.useState(""),x=()=>{g("");try{const b=parseFloat(t),y=parseFloat(s),E=parseFloat(c)*Math.PI/180;if([b,y,E].some(N=>isNaN(N))){g("Ingresa valores válidos para n₁, n₂ y θ₁."),m(null);return}const R=b*Math.sin(E)/y;if(Math.abs(R)>1){const N=Math.asin(y/b)*(180/Math.PI);m({tipo:"TIR",mensaje:"Ocurre Reflexión Interna Total.",theta2:null,thetaCritico:N});return}const _=Math.asin(R)*180/Math.PI;let P=null;b>y&&(P=Math.asin(y/b)*(180/Math.PI)),m({tipo:"normal",theta2:_,thetaCritico:P})}catch{g("Error al calcular la refracción."),m(null)}};return nt.useEffect(()=>{x()},[]),M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between gap-2",children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"3.4 Ley de Snell – Reflexión y refracción"}),M.jsxs("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:["Vista ",o?"3D":"2D"]})]}),M.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["Ley de Snell:",M.jsx("span",{className:"block italic mt-1",children:"n₁ · sen(θ₁) = n₂ · sen(θ₂)"})]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start text-xs md:text-sm",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"n₁"}),M.jsx("input",{type:"number",value:t,onChange:b=>i(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"n₂"}),M.jsx("input",{type:"number",value:s,onChange:b=>l(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"θ₁ (°)"}),M.jsx("input",{type:"number",value:c,onChange:b=>d(b.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]})]}),M.jsx("button",{onClick:x,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular θ₂"}),p&&M.jsx("p",{className:"text-xs text-red-400 mt-1",children:p}),h&&h.tipo==="normal"&&M.jsxs("div",{className:"mt-2 bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"θ₂:"})," ",h.theta2.toFixed(2),"°"]}),h.thetaCritico&&M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"θc:"})," ",h.thetaCritico.toFixed(2),"° (ángulo crítico)"]})]}),h&&h.tipo==="TIR"&&M.jsxs("div",{className:"mt-2 bg-red-900/50 border border-red-500 rounded-xl p-2 space-y-1",children:[M.jsx("p",{className:"font-semibold text-red-200",children:"Reflexión Interna Total (TIR)"}),M.jsx("p",{className:"text-gray-100 text-[11px]",children:"El rayo no se refracta, solo se refleja dentro del medio."}),h.thetaCritico&&M.jsxs("p",{className:"text-[11px] text-gray-200",children:["θc ≈ ",h.thetaCritico.toFixed(2),"°"]})]})]}),o?M.jsx(a_,{}):M.jsxs("div",{className:"relative h-44 rounded-xl border border-slate-700 bg-slate-900/80 overflow-hidden",children:[M.jsx("div",{className:"absolute inset-x-0 top-1/2 h-px bg-sky-500/60"}),M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsx("div",{className:"h-full w-px bg-slate-600/80"})}),M.jsxs("div",{className:"absolute inset-0 flex items-center justify-center",children:[M.jsx("div",{className:"w-32 h-32 border-l-2 border-amber-300 transform origin-bottom rotate-[-40deg]"}),M.jsx("div",{className:"w-32 h-32 border-l-2 border-emerald-300 transform origin-bottom rotate-[25deg]"})]}),M.jsx("div",{className:"absolute bottom-3 inset-x-0 text-center text-[11px] text-gray-300 px-2",children:"Rayo incidente, normal y rayo refractado en 2D."})]})]})]})}function kE({is3D:o}){const[t,i]=nt.useState(20),[s,l]=nt.useState(10),[c,d]=nt.useState(null),[h,m]=nt.useState(""),p=()=>{m("");try{const g=parseFloat(t),x=parseFloat(s);if(isNaN(g)||isNaN(x)||g===0||x===0){m("Ingresa valores válidos para s y f (≠ 0)."),d(null);return}const b=1/x-1/g;if(b===0){m("No se puede calcular s' con esos valores."),d(null);return}const y=1/b,E=-y/g;d({sPrime:y,m:E})}catch{m("Error al calcular la imagen."),d(null)}};return nt.useEffect(()=>{p()},[]),M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between gap-2",children:[M.jsx("h3",{className:"text-base md:text-lg font-semibold",children:"3.6 Lentes delgadas"}),M.jsxs("span",{className:"text-[11px] px-2 py-1 rounded-full bg-slate-800 text-gray-300",children:["Vista ",o?"3D":"2D"]})]}),M.jsxs("p",{className:"text-xs md:text-sm text-gray-300",children:["Ecuación de lentes delgadas:",M.jsx("span",{className:"block italic mt-1",children:"1/f = 1/s + 1/s′ ,   m = −s′/s"})]}),M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 items-start text-xs md:text-sm",children:[M.jsxs("div",{className:"space-y-2",children:[M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"Distancia objeto s (cm)"}),M.jsx("input",{type:"number",value:t,onChange:g=>i(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsxs("label",{className:"flex flex-col",children:[M.jsx("span",{children:"Distancia focal f (cm)"}),M.jsx("input",{type:"number",value:s,onChange:g=>l(g.target.value),className:"px-2 py-1 rounded-md bg-slate-800 border border-slate-600 text-xs"})]}),M.jsx("button",{onClick:p,className:"mt-2 w-full md:w-auto px-4 py-1.5 rounded-full bg-primary hover:bg-primary-dark text-xs font-semibold",children:"Calcular s′ y m"}),h&&M.jsx("p",{className:"text-xs text-red-400 mt-1",children:h}),c&&M.jsxs("div",{className:"mt-2 bg-slate-800/70 border border-slate-600 rounded-xl p-2 space-y-1",children:[M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"s′:"})," ",c.sPrime.toFixed(2)," cm"]}),M.jsxs("p",{children:[M.jsx("span",{className:"font-semibold",children:"m:"})," ",c.m.toFixed(2)," (aumento)"]}),M.jsx("p",{className:"text-[11px] text-gray-400",children:"m < 0 → imagen invertida. |m| > 1 → imagen más grande."})]})]}),o?M.jsx(a_,{}):M.jsxs("div",{className:"relative h-44 rounded-xl border border-slate-700 bg-slate-900/80 overflow-hidden",children:[M.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:M.jsx("div",{className:"h-32 w-1 bg-sky-400 rounded-full"})}),M.jsxs("div",{className:"absolute left-6 bottom-6 flex flex-col items-center",children:[M.jsx("div",{className:"h-14 w-1 bg-emerald-400"}),M.jsx("span",{className:"text-[10px] mt-1",children:"Objeto"})]}),M.jsxs("div",{className:"absolute right-6 bottom-6 flex flex-col items-center",children:[M.jsx("div",{className:"h-10 w-1 bg-amber-300"}),M.jsx("span",{className:"text-[10px] mt-1",children:"Imagen"})]}),M.jsx("div",{className:"absolute bottom-2 inset-x-0 text-center text-[11px] text-gray-300 px-2",children:"Representación esquemática de rayos principales de una lente convergente."})]})]})]})}function XE({is3D:o}){const[t,i]=nt.useState("luz"),s=[{id:"luz",label:"3.1 Luz y propagación"},{id:"espectro",label:"3.2 Espectro e intensidad"},{id:"snell",label:"3.3 Ley de Snell"},{id:"lentes",label:"3.4 Lentes delgadas"}],l=s.find(c=>c.id===t)?.label??"Subtema";return M.jsxs("section",{id:"optica",className:"max-w-6xl mx-auto px-4 py-10 md:py-12 space-y-5",children:[M.jsxs("header",{className:"space-y-1",children:[M.jsx("h2",{className:"text-2xl md:text-3xl font-bold",children:"💡 Luz y Óptica"}),M.jsx("p",{className:"text-xs md:text-sm text-gray-300",children:"Aquí podrás resolver ejercicios de óptica, explicados e intercativos."}),M.jsxs("p",{className:"text-[11px] text-gray-400",children:["Subtema actual: ",M.jsx("span",{className:"font-semibold text-sky-400",children:l})]})]}),M.jsx("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-3",children:M.jsx("div",{className:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2",children:s.map(c=>M.jsx("button",{onClick:()=>i(c.id),className:`text-[11px] md:text-xs px-3 py-2 rounded-full font-medium transition
                ${t===c.id?"bg-primary text-white shadow-sm":"bg-slate-800/80 text-slate-200 hover:bg-slate-700"}`,children:c.label},c.id))})}),t==="luz"&&M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4 text-xs md:text-sm",children:[M.jsx("h3",{className:"font-semibold mb-1",children:"3.1 Luz y su propagación"}),M.jsxs("p",{className:"text-gray-300",children:["La luz es una onda electromagnética que se propaga en el vacío con velocidad c ≈ 3×10⁸ m/s. En un medio con índice de refracción n, la velocidad disminuye:",M.jsx("span",{className:"block italic mt-1",children:"v = c / n"})]})]}),t==="espectro"&&M.jsxs("div",{className:"grid md:grid-cols-2 gap-4 text-xs md:text-sm",children:[M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4",children:[M.jsx("h3",{className:"font-semibold mb-1",children:"3.2 Espectro electromagnético"}),M.jsx("p",{className:"text-gray-300 mb-2",children:"El espectro va desde ondas de radio (baja frecuencia, gran longitud de onda) hasta rayos gamma (alta frecuencia, longitud de onda muy pequeña). El espectro visible se encuentra aproximadamente entre 400 nm y 700 nm."}),M.jsx("img",{src:"/img/espectro.png",alt:"Espectro electromagnético",className:"mt-2 w-full rounded-lg border border-slate-700"}),M.jsx("p",{className:"text-[11px] text-gray-400",children:"En tu proyecto puedes usar esta imagen como apoyo visual para explicar dónde se ubica la luz visible."})]}),M.jsxs("div",{className:"rounded-2xl border border-slate-700 bg-slate-900/80 p-4",children:[M.jsx("h3",{className:"font-semibold mb-1",children:"Intensidad luminosa"}),M.jsxs("p",{className:"text-gray-300 mb-1",children:["La intensidad de una fuente puntual disminuye con el cuadrado de la distancia:",M.jsx("span",{className:"block italic mt-1",children:"I ∝ 1 / r²"})]}),M.jsx("p",{className:"text-gray-300 text-[11px]",children:"Si consideramos una esfera de radio r, el área es A = 4πr², por lo que la energía se reparte en una superficie cada vez mayor."})]})]}),t==="snell"&&M.jsx(jE,{is3D:o}),t==="lentes"&&M.jsx(kE,{is3D:o})]})}function qE(){const[o,t]=nt.useState("inicio"),[i,s]=nt.useState(!0);nt.useEffect(()=>{const c=localStorage.getItem("f2_darkMode");c!==null&&s(c==="true")},[]),nt.useEffect(()=>{const c=document.documentElement;i?c.classList.add("dark"):c.classList.remove("dark"),localStorage.setItem("f2_darkMode",i?"true":"false")},[i]);const l=()=>{switch(o){case"electricidad":return M.jsx(GE,{});case"optica":return M.jsx(XE,{});default:return M.jsx(Mb,{onChangeSection:t})}};return M.jsxs("div",{className:"min-h-screen bg-gray-50 text-gray-900 dark:bg-slate-950 dark:text-gray-100 transition-colors duration-300",children:[M.jsx(Sb,{currentSection:o,onChangeSection:t,darkMode:i,toggleDarkMode:()=>s(c=>!c)}),M.jsx("main",{className:"pb-10",children:l()}),M.jsxs("footer",{className:"border-t border-slate-200 dark:border-slate-800 py-4 text-center text-[11px] text-gray-500 dark:text-gray-400",children:["Electricidad & Luz y óptica · ",new Date().getFullYear()]})]})}bb.createRoot(document.getElementById("root")).render(M.jsx(db.StrictMode,{children:M.jsx(qE,{})}));
