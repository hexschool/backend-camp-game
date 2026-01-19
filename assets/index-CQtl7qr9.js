const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GitIntroSlide-yzC5ufnX.js","assets/InteractiveSlideTemplate.vue_vue_type_script_setup_true_lang-BUke9TdJ.js","assets/GitIntroSlide-Cj2xeLqW.css","assets/DockerIntroSlide-CYKFyLOj.js","assets/DockerIntroSlide-CYf1W49A.css","assets/ArchitectureIntroSlide-BTUYfziE.js","assets/ArchitectureIntroSlide-BbQQ0RUK.css","assets/StaticDynamicSlide-DBhNIes-.js","assets/StaticDynamicSlide-DFaqwSDC.css","assets/CoachBackendSlide-zTZroHyZ.js","assets/CoachBackendSlide-CaiZ0Sl7.css","assets/UrlRequestSlide-OBgSY5kV.js","assets/UrlRequestSlide-CVB3wnM2.css","assets/NetworkRequestSlide-C4ZLgD8Q.js","assets/NetworkRequestSlide-DkazN4m_.css","assets/ApiIntroSlide-fVFMNZbu.js","assets/ApiIntroSlide-Ca1QHk0Q.css","assets/ApiDemoSlide-CNdQJG9X.js","assets/ApiDemoSlide-D0BgA10u.css","assets/DragQuizSlide-CLp89pG8.js","assets/DragQuizSlide-Dl9PpoJx.css","assets/DragSortSlide-Bn7uqFhU.js","assets/DragSortSlide-Cs29H3fI.css","assets/DataFlowSlide-lYQDlWzy.js","assets/DataFlowSlide-DggPdhZy.css","assets/ThirdPartySlide-DHN1Blhd.js","assets/ThirdPartySlide-CqV20lID.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Oc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const xt={},zr=[],Xn=()=>{},Of=()=>!1,da=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fc=t=>t.startsWith("onUpdate:"),Bt=Object.assign,kc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},hm=Object.prototype.hasOwnProperty,dt=(t,e)=>hm.call(t,e),Ge=Array.isArray,Hr=t=>Ws(t)==="[object Map]",Ff=t=>Ws(t)==="[object Set]",Tu=t=>Ws(t)==="[object Date]",je=t=>typeof t=="function",Mt=t=>typeof t=="string",In=t=>typeof t=="symbol",gt=t=>t!==null&&typeof t=="object",kf=t=>(gt(t)||je(t))&&je(t.then)&&je(t.catch),Bf=Object.prototype.toString,Ws=t=>Bf.call(t),pm=t=>Ws(t).slice(8,-1),zf=t=>Ws(t)==="[object Object]",fa=t=>Mt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Es=Oc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ha=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},mm=/-\w/g,Mn=ha(t=>t.replace(mm,e=>e.slice(1).toUpperCase())),gm=/\B([A-Z])/g,Bi=ha(t=>t.replace(gm,"-$1").toLowerCase()),pa=ha(t=>t.charAt(0).toUpperCase()+t.slice(1)),Pa=ha(t=>t?`on${pa(t)}`:""),Pi=(t,e)=>!Object.is(t,e),Oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Hf=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Bc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},_m=t=>{const e=Mt(t)?Number(t):NaN;return isNaN(e)?t:e};let wu;const ma=()=>wu||(wu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=Mt(i)?ym(i):fr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(Mt(t)||gt(t))return t}const xm=/;(?![^(]*\))/g,vm=/:([^]+)/,bm=/\/\*[^]*?\*\//g;function ym(t){const e={};return t.replace(bm,"").split(xm).forEach(n=>{if(n){const i=n.split(vm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ut(t){let e="";if(Mt(t))e=t;else if(Ge(t))for(let n=0;n<t.length;n++){const i=Ut(t[n]);i&&(e+=i+" ")}else if(gt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Em="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sm=Oc(Em);function Vf(t){return!!t||t===""}function Mm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Yo(t[i],e[i]);return n}function Yo(t,e){if(t===e)return!0;let n=Tu(t),i=Tu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=In(t),i=In(e),n||i)return t===e;if(n=Ge(t),i=Ge(e),n||i)return n&&i?Mm(t,e):!1;if(n=gt(t),i=gt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Yo(t[o],e[o]))return!1}}return String(t)===String(e)}const Gf=t=>!!(t&&t.__v_isRef===!0),Ne=t=>Mt(t)?t:t==null?"":Ge(t)||gt(t)&&(t.toString===Bf||!je(t.toString))?Gf(t)?Ne(t.value):JSON.stringify(t,Wf,2):String(t),Wf=(t,e)=>Gf(e)?Wf(t,e.value):Hr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ia(i,s)+" =>"]=r,n),{})}:Ff(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ia(n))}:In(e)?Ia(e):gt(e)&&!Ge(e)&&!zf(e)?String(e):e,Ia=(t,e="")=>{var n;return In(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Wt;class Xf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Wt,!e&&Wt&&(this.index=(Wt.scopes||(Wt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Wt;try{return Wt=this,e()}finally{Wt=n}}}on(){++this._on===1&&(this.prevScope=Wt,Wt=this)}off(){this._on>0&&--this._on===0&&(Wt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function qf(t){return new Xf(t)}function $f(){return Wt}function Tm(t,e=!1){Wt&&Wt.cleanups.push(t)}let bt;const Da=new WeakSet;class Yf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Wt&&Wt.active&&Wt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Da.has(this)&&(Da.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),Zf(this);const e=bt,n=Rn;bt=this,Rn=!0;try{return this.fn()}finally{Jf(this),bt=e,Rn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Vc(e);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Da.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let jf=0,Ss,Ms;function Kf(t,e=!1){if(t.flags|=8,e){t.next=Ms,Ms=t;return}t.next=Ss,Ss=t}function zc(){jf++}function Hc(){if(--jf>0)return;if(Ms){let e=Ms;for(Ms=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ss;){let e=Ss;for(Ss=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Zf(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Jf(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Vc(i),wm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Qf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Qf(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Is)||(t.globalVersion=Is,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=bt,i=Rn;bt=t,Rn=!0;try{Zf(t);const r=t.fn(t._value);(e.version===0||Pi(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{bt=n,Rn=i,Jf(t),t.flags&=-3}}function Vc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Vc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function wm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rn=!0;const eh=[];function ui(){eh.push(Rn),Rn=!1}function di(){const t=eh.pop();Rn=t===void 0?!0:t}function Au(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=bt;bt=void 0;try{e()}finally{bt=n}}}let Is=0;class Am{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Gc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!bt||!Rn||bt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==bt)n=this.activeLink=new Am(bt,this),bt.deps?(n.prevDep=bt.depsTail,bt.depsTail.nextDep=n,bt.depsTail=n):bt.deps=bt.depsTail=n,th(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=bt.depsTail,n.nextDep=void 0,bt.depsTail.nextDep=n,bt.depsTail=n,bt.deps===n&&(bt.deps=i)}return n}trigger(e){this.version++,Is++,this.notify(e)}notify(e){zc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Hc()}}}function th(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)th(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jo=new WeakMap,lr=Symbol(""),wl=Symbol(""),Ds=Symbol("");function Xt(t,e,n){if(Rn&&bt){let i=jo.get(t);i||jo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Gc),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const o=jo.get(t);if(!o){Is++;return}const a=l=>{l&&l.trigger()};if(zc(),e==="clear")o.forEach(a);else{const l=Ge(t),c=l&&fa(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Ds||!In(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ds)),e){case"add":l?c&&a(o.get("length")):(a(o.get(lr)),Hr(t)&&a(o.get(wl)));break;case"delete":l||(a(o.get(lr)),Hr(t)&&a(o.get(wl)));break;case"set":Hr(t)&&a(o.get(lr));break}}Hc()}function Cm(t,e){const n=jo.get(t);return n&&n.get(e)}function _r(t){const e=ot(t);return e===t?e:(Xt(e,"iterate",Ds),pn(t)?e:e.map(Dn))}function ga(t){return Xt(t=ot(t),"iterate",Ds),t}function Ti(t,e){return fi(t)?li(t)?jr(Dn(e)):jr(e):Dn(e)}const Rm={__proto__:null,[Symbol.iterator](){return La(this,Symbol.iterator,t=>Ti(this,t))},concat(...t){return _r(this).concat(...t.map(e=>Ge(e)?_r(e):e))},entries(){return La(this,"entries",t=>(t[1]=Ti(this,t[1]),t))},every(t,e){return Yn(this,"every",t,e,void 0,arguments)},filter(t,e){return Yn(this,"filter",t,e,n=>n.map(i=>Ti(this,i)),arguments)},find(t,e){return Yn(this,"find",t,e,n=>Ti(this,n),arguments)},findIndex(t,e){return Yn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Yn(this,"findLast",t,e,n=>Ti(this,n),arguments)},findLastIndex(t,e){return Yn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Yn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ua(this,"includes",t)},indexOf(...t){return Ua(this,"indexOf",t)},join(t){return _r(this).join(t)},lastIndexOf(...t){return Ua(this,"lastIndexOf",t)},map(t,e){return Yn(this,"map",t,e,void 0,arguments)},pop(){return ls(this,"pop")},push(...t){return ls(this,"push",t)},reduce(t,...e){return Cu(this,"reduce",t,e)},reduceRight(t,...e){return Cu(this,"reduceRight",t,e)},shift(){return ls(this,"shift")},some(t,e){return Yn(this,"some",t,e,void 0,arguments)},splice(...t){return ls(this,"splice",t)},toReversed(){return _r(this).toReversed()},toSorted(t){return _r(this).toSorted(t)},toSpliced(...t){return _r(this).toSpliced(...t)},unshift(...t){return ls(this,"unshift",t)},values(){return La(this,"values",t=>Ti(this,t))}};function La(t,e,n){const i=ga(t),r=i[e]();return i!==t&&!pn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Pm=Array.prototype;function Yn(t,e,n,i,r,s){const o=ga(t),a=o!==t&&!pn(t),l=o[e];if(l!==Pm[e]){const d=l.apply(t,s);return a?Dn(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,Ti(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Cu(t,e,n,i){const r=ga(t);let s=n;return r!==t&&(pn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Ti(t,a),l,t)}),r[e](s,...i)}function Ua(t,e,n){const i=ot(t);Xt(i,"iterate",Ds);const r=i[e](...n);return(r===-1||r===!1)&&_a(n[0])?(n[0]=ot(n[0]),i[e](...n)):r}function ls(t,e,n=[]){ui(),zc();const i=ot(t)[e].apply(t,n);return Hc(),di(),i}const Im=Oc("__proto__,__v_isRef,__isVue"),nh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(In));function Dm(t){In(t)||(t=String(t));const e=ot(this);return Xt(e,"has",t),e.hasOwnProperty(t)}class ih{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Vm:ah:s?oh:sh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ge(e);if(!r){let l;if(o&&(l=Rm[n]))return l;if(n==="hasOwnProperty")return Dm}const a=Reflect.get(e,n,Ct(e)?e:i);if((In(n)?nh.has(n):Im(n))||(r||Xt(e,"get",n),s))return a;if(Ct(a)){const l=o&&fa(n)?a:a.value;return r&&gt(l)?Cl(l):l}return gt(a)?r?Cl(a):Xs(a):a}}class rh extends ih{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=Ge(e)&&fa(n);if(!this._isShallow){const c=fi(s);if(!pn(i)&&!fi(i)&&(s=ot(s),i=ot(i)),!o&&Ct(s)&&!Ct(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:dt(e,n),l=Reflect.set(e,n,i,Ct(e)?e:r);return e===ot(r)&&(a?Pi(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),l}deleteProperty(e,n){const i=dt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!In(n)||!nh.has(n))&&Xt(e,"has",n),i}ownKeys(e){return Xt(e,"iterate",Ge(e)?"length":lr),Reflect.ownKeys(e)}}class Lm extends ih{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Um=new rh,Nm=new Lm,Om=new rh(!0);const Al=t=>t,io=t=>Reflect.getPrototypeOf(t);function Fm(t,e,n){return function(...i){const r=this.__v_raw,s=ot(r),o=Hr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Al:e?jr:Dn;return!e&&Xt(s,"iterate",l?wl:lr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function ro(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function km(t,e){const n={get(r){const s=this.__v_raw,o=ot(s),a=ot(r);t||(Pi(r,a)&&Xt(o,"get",r),Xt(o,"get",a));const{has:l}=io(o),c=e?Al:t?jr:Dn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Xt(ot(r),"iterate",lr),r.size},has(r){const s=this.__v_raw,o=ot(s),a=ot(r);return t||(Pi(r,a)&&Xt(o,"has",r),Xt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=ot(a),c=e?Al:t?jr:Dn;return!t&&Xt(l,"iterate",lr),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return Bt(n,t?{add:ro("add"),set:ro("set"),delete:ro("delete"),clear:ro("clear")}:{add(r){!e&&!pn(r)&&!fi(r)&&(r=ot(r));const s=ot(this);return io(s).has.call(s,r)||(s.add(r),si(s,"add",r,r)),this},set(r,s){!e&&!pn(s)&&!fi(s)&&(s=ot(s));const o=ot(this),{has:a,get:l}=io(o);let c=a.call(o,r);c||(r=ot(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Pi(s,u)&&si(o,"set",r,s):si(o,"add",r,s),this},delete(r){const s=ot(this),{has:o,get:a}=io(s);let l=o.call(s,r);l||(r=ot(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=ot(this),s=r.size!==0,o=r.clear();return s&&si(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Fm(r,t,e)}),n}function Wc(t,e){const n=km(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(dt(n,r)&&r in i?n:i,r,s)}const Bm={get:Wc(!1,!1)},zm={get:Wc(!1,!0)},Hm={get:Wc(!0,!1)};const sh=new WeakMap,oh=new WeakMap,ah=new WeakMap,Vm=new WeakMap;function Gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Wm(t){return t.__v_skip||!Object.isExtensible(t)?0:Gm(pm(t))}function Xs(t){return fi(t)?t:Xc(t,!1,Um,Bm,sh)}function lh(t){return Xc(t,!1,Om,zm,oh)}function Cl(t){return Xc(t,!0,Nm,Hm,ah)}function Xc(t,e,n,i,r){if(!gt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Wm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function li(t){return fi(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function pn(t){return!!(t&&t.__v_isShallow)}function _a(t){return t?!!t.__v_raw:!1}function ot(t){const e=t&&t.__v_raw;return e?ot(e):t}function qc(t){return!dt(t,"__v_skip")&&Object.isExtensible(t)&&Hf(t,"__v_skip",!0),t}const Dn=t=>gt(t)?Xs(t):t,jr=t=>gt(t)?Cl(t):t;function Ct(t){return t?t.__v_isRef===!0:!1}function nt(t){return ch(t,!1)}function Xm(t){return ch(t,!0)}function ch(t,e){return Ct(t)?t:new qm(t,e)}class qm{constructor(e,n){this.dep=new Gc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ot(e),this._value=n?e:Dn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||pn(e)||fi(e);e=i?e:ot(e),Pi(e,n)&&(this._rawValue=e,this._value=i?e:Dn(e),this.dep.trigger())}}function Dt(t){return Ct(t)?t.value:t}const $m={get:(t,e,n)=>e==="__v_raw"?t:Dt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Ct(r)&&!Ct(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function uh(t){return li(t)?t:new Proxy(t,$m)}function Ym(t){const e=Ge(t)?new Array(t.length):{};for(const n in t)e[n]=Km(t,n);return e}class jm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=ot(e);let r=!0,s=e;if(!Ge(e)||!fa(String(n)))do r=!_a(s)||pn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Dt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Ct(this._raw[this._key])){const n=this._object[this._key];if(Ct(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return Cm(this._raw,this._key)}}function Km(t,e,n){return new jm(t,e,n)}class Zm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Gc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Is-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&bt!==this)return Kf(this,!0),!0}get value(){const e=this.dep.track();return Qf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Jm(t,e,n=!1){let i,r;return je(t)?i=t:(i=t.get,r=t.set),new Zm(i,r,n)}const so={},Ko=new WeakMap;let Ji;function Qm(t,e=!1,n=Ji){if(n){let i=Ko.get(n);i||Ko.set(n,i=[]),i.push(t)}}function eg(t,e,n=xt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:pn(y)||r===!1||r===0?oi(y,1):oi(y);let u,d,f,h,g=!1,_=!1;if(Ct(t)?(d=()=>t.value,g=pn(t)):li(t)?(d=()=>c(t),g=!0):Ge(t)?(_=!0,g=t.some(y=>li(y)||pn(y)),d=()=>t.map(y=>{if(Ct(y))return y.value;if(li(y))return c(y);if(je(y))return l?l(y,2):y()})):je(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ui();try{f()}finally{di()}}const y=Ji;Ji=u;try{return l?l(t,3,[h]):t(h)}finally{Ji=y}}:d=Xn,e&&r){const y=d,L=r===!0?1/0:r;d=()=>oi(y(),L)}const m=$f(),p=()=>{u.stop(),m&&m.active&&kc(m.effects,u)};if(s&&e){const y=e;e=(...L)=>{y(...L),p()}}let w=_?new Array(t.length).fill(so):so;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const L=u.run();if(r||g||(_?L.some((U,I)=>Pi(U,w[I])):Pi(L,w))){f&&f();const U=Ji;Ji=u;try{const I=[L,w===so?void 0:_&&w[0]===so?[]:w,h];w=L,l?l(e,3,I):e(...I)}finally{Ji=U}}}else u.run()};return a&&a(S),u=new Yf(d),u.scheduler=o?()=>o(S,!1):S,h=y=>Qm(y,!1,u),f=u.onStop=()=>{const y=Ko.get(u);if(y){if(l)l(y,4);else for(const L of y)L();Ko.delete(u)}},e?i?S(!0):w=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function oi(t,e=1/0,n){if(e<=0||!gt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Ct(t))oi(t.value,e,n);else if(Ge(t))for(let i=0;i<t.length;i++)oi(t[i],e,n);else if(Ff(t)||Hr(t))t.forEach(i=>{oi(i,e,n)});else if(zf(t)){for(const i in t)oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&oi(t[i],e,n)}return t}function qs(t,e,n,i){try{return i?t(...i):t()}catch(r){$s(r,e,n)}}function Ln(t,e,n,i){if(je(t)){const r=qs(t,e,n,i);return r&&kf(r)&&r.catch(s=>{$s(s,e,n)}),r}if(Ge(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Ln(t[s],e,n,i));return r}}function $s(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||xt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){ui(),qs(s,null,10,[t,l,c]),di();return}}tg(t,n,r,i,o)}function tg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const tn=[];let kn=-1;const Vr=[];let wi=null,Fr=0;const dh=Promise.resolve();let Zo=null;function $c(t){const e=Zo||dh;return t?e.then(this?t.bind(this):t):e}function ng(t){let e=kn+1,n=tn.length;for(;e<n;){const i=e+n>>>1,r=tn[i],s=Ls(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Yc(t){if(!(t.flags&1)){const e=Ls(t),n=tn[tn.length-1];!n||!(t.flags&2)&&e>=Ls(n)?tn.push(t):tn.splice(ng(e),0,t),t.flags|=1,fh()}}function fh(){Zo||(Zo=dh.then(ph))}function ig(t){Ge(t)?Vr.push(...t):wi&&t.id===-1?wi.splice(Fr+1,0,t):t.flags&1||(Vr.push(t),t.flags|=1),fh()}function Ru(t,e,n=kn+1){for(;n<tn.length;n++){const i=tn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;tn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function hh(t){if(Vr.length){const e=[...new Set(Vr)].sort((n,i)=>Ls(n)-Ls(i));if(Vr.length=0,wi){wi.push(...e);return}for(wi=e,Fr=0;Fr<wi.length;Fr++){const n=wi[Fr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}wi=null,Fr=0}}const Ls=t=>t.id==null?t.flags&2?-1:1/0:t.id;function ph(t){try{for(kn=0;kn<tn.length;kn++){const e=tn[kn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),qs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;kn<tn.length;kn++){const e=tn[kn];e&&(e.flags&=-2)}kn=-1,tn.length=0,hh(),Zo=null,(tn.length||Vr.length)&&ph()}}let Ht=null,mh=null;function Jo(t){const e=Ht;return Ht=t,mh=t&&t.type.__scopeId||null,e}function Qo(t,e=Ht,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&na(-1);const s=Jo(e);let o;try{o=t(...r)}finally{Jo(s),i._d&&na(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function jc(t,e){if(Ht===null)return t;const n=ya(Ht),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=xt]=e[r];s&&(je(s)&&(s={mounted:s,updated:s}),s.deep&&oi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Vi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ui(),Ln(l,n,8,[t.el,a,t,e]),di())}}function Fo(t,e){if(zt){let n=zt.provides;const i=zt.parent&&zt.parent.provides;i===n&&(n=zt.provides=Object.create(i)),n[t]=e}}function Sn(t,e,n=!1){const i=nu();if(i||cr){let r=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&je(e)?e.call(i&&i.proxy):e}}function rg(){return!!(nu()||cr)}const sg=Symbol.for("v-scx"),og=()=>Sn(sg);function ag(t,e){return Kc(t,null,e)}function Ii(t,e,n){return Kc(t,e,n)}function Kc(t,e,n=xt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Bt({},n),l=e&&i||!e&&s!=="post";let c;if(Kr){if(s==="sync"){const h=og();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Xn,h.resume=Xn,h.pause=Xn,h}}const u=zt;a.call=(h,g,_)=>Ln(h,u,g,_);let d=!1;s==="post"?a.scheduler=h=>{Jt(h,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(h,g)=>{g?h():Yc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),d&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const f=eg(t,e,a);return Kr&&(c?c.push(f):l&&f()),f}function lg(t,e,n){const i=this.proxy,r=Mt(t)?t.includes(".")?gh(i,t):()=>i[t]:t.bind(i,i);let s;je(e)?s=e:(s=e.handler,n=e);const o=js(this),a=Kc(r,s.bind(i),n);return o(),a}function gh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const _h=Symbol("_vte"),xh=t=>t.__isTeleport,Ts=t=>t&&(t.disabled||t.disabled===""),Pu=t=>t&&(t.defer||t.defer===""),Iu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Du=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Rl=(t,e)=>{const n=t&&t.to;return Mt(n)?e?e(n):null:n},vh={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=Ts(e.props);let{shapeFlag:w,children:S,dynamicChildren:y}=e;if(t==null){const L=e.el=_(""),U=e.anchor=_("");h(L,n,i),h(U,n,i);const I=(b,E)=>{w&16&&u(S,b,E,r,s,o,a,l)},R=()=>{const b=e.target=Rl(e.props,g),E=bh(b,e,_,h);b&&(o!=="svg"&&Iu(b)?o="svg":o!=="mathml"&&Du(b)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(b),p||(I(b,E),ko(e,!1)))};p&&(I(n,U),ko(e,!0)),Pu(e.props)?(e.el.__isMounted=!1,Jt(()=>{R(),delete e.el.__isMounted},s)):R()}else{if(Pu(e.props)&&t.el.__isMounted===!1){Jt(()=>{vh.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const L=e.anchor=t.anchor,U=e.target=t.target,I=e.targetAnchor=t.targetAnchor,R=Ts(t.props),b=R?n:U,E=R?L:I;if(o==="svg"||Iu(U)?o="svg":(o==="mathml"||Du(U))&&(o="mathml"),y?(f(t.dynamicChildren,y,b,r,s,o,a),eu(t,e,!0)):l||d(t,e,b,E,r,s,o,a,!1),p)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):oo(e,n,L,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const D=e.target=Rl(e.props,g);D&&oo(e,D,null,c,0)}else R&&oo(e,U,I,c,1);ko(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(r(c),r(u)),s&&r(l),o&16){const h=s||!Ts(f);for(let g=0;g<a.length;g++){const _=a[g];i(_,e,n,h,!!_.dynamicChildren)}}},move:oo,hydrate:cg};function oo(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=s===2;if(d&&i(o,e,n),(!d||Ts(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);d&&i(a,e,n)}function cg(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function f(_,m,p,w){m.anchor=d(o(_),m,a(_),n,i,r,s),m.targetStart=p,m.targetAnchor=w}const h=e.target=Rl(e.props,l),g=Ts(e.props);if(h){const _=h._lpa||h.firstChild;if(e.shapeFlag&16)if(g)f(t,e,_,_&&o(_));else{e.anchor=o(t);let m=_;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||bh(h,e,u,c),d(_&&o(_),e,h,n,i,r,s)}ko(e,g)}else g&&e.shapeFlag&16&&f(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Lu=vh;function ko(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function bh(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[_h]=s,t&&(i(r,t),i(s,t)),s}const ri=Symbol("_leaveCb"),ao=Symbol("_enterCb");function ug(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return qn(()=>{t.isMounted=!0}),Ah(()=>{t.isUnmounting=!0}),t}const xn=[Function,Array],yh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xn,onEnter:xn,onAfterEnter:xn,onEnterCancelled:xn,onBeforeLeave:xn,onLeave:xn,onAfterLeave:xn,onLeaveCancelled:xn,onBeforeAppear:xn,onAppear:xn,onAfterAppear:xn,onAppearCancelled:xn},Eh=t=>{const e=t.subTree;return e.component?Eh(e.component):e},dg={name:"BaseTransition",props:yh,setup(t,{slots:e}){const n=nu(),i=ug();return()=>{const r=e.default&&Th(e.default(),!0);if(!r||!r.length)return;const s=Sh(r),o=ot(t),{mode:a}=o;if(i.isLeaving)return Na(s);const l=Uu(s);if(!l)return Na(s);let c=Pl(l,o,i,n,d=>c=d);l.type!==$t&&Us(l,c);let u=n.subTree&&Uu(n.subTree);if(u&&u.type!==$t&&!tr(u,l)&&Eh(n).type!==$t){let d=Pl(u,o,i,n);if(Us(u,d),a==="out-in"&&l.type!==$t)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},Na(s);a==="in-out"&&l.type!==$t?d.delayLeave=(f,h,g)=>{const _=Mh(i,u);_[String(u.key)]=u,f[ri]=()=>{h(),f[ri]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Sh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==$t){e=n;break}}return e}const fg=dg;function Mh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Pl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:w,onAppearCancelled:S}=e,y=String(t.key),L=Mh(n,t),U=(b,E)=>{b&&Ln(b,i,9,E)},I=(b,E)=>{const D=E[1];U(b,E),Ge(b)?b.every(B=>B.length<=1)&&D():b.length<=1&&D()},R={mode:o,persisted:a,beforeEnter(b){let E=l;if(!n.isMounted)if(s)E=m||l;else return;b[ri]&&b[ri](!0);const D=L[y];D&&tr(t,D)&&D.el[ri]&&D.el[ri](),U(E,[b])},enter(b){let E=c,D=u,B=d;if(!n.isMounted)if(s)E=p||c,D=w||u,B=S||d;else return;let H=!1;const V=b[ao]=K=>{H||(H=!0,K?U(B,[b]):U(D,[b]),R.delayedLeave&&R.delayedLeave(),b[ao]=void 0)};E?I(E,[b,V]):V()},leave(b,E){const D=String(t.key);if(b[ao]&&b[ao](!0),n.isUnmounting)return E();U(f,[b]);let B=!1;const H=b[ri]=V=>{B||(B=!0,E(),V?U(_,[b]):U(g,[b]),b[ri]=void 0,L[D]===t&&delete L[D])};L[D]=t,h?I(h,[b,H]):H()},clone(b){const E=Pl(b,e,n,i,r);return r&&r(E),E}};return R}function Na(t){if(Ys(t))return t=Oi(t),t.children=null,t}function Uu(t){if(!Ys(t))return xh(t.type)&&t.children?Sh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&je(n.default))return n.default()}}function Us(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Us(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Th(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ft?(o.patchFlag&128&&r++,i=i.concat(Th(o.children,e,a))):(e||o.type!==$t)&&i.push(a!=null?Oi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function mn(t,e){return je(t)?Bt({name:t.name},e,{setup:t}):t}function Zc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ea=new WeakMap;function ws(t,e,n,i,r=!1){if(Ge(t)){t.forEach((g,_)=>ws(g,e&&(Ge(e)?e[_]:e),n,i,r));return}if(Gr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&ws(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?ya(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===xt?a.refs={}:a.refs,d=a.setupState,f=ot(d),h=d===xt?Of:g=>dt(f,g);if(c!=null&&c!==l){if(Nu(e),Mt(c))u[c]=null,h(c)&&(d[c]=null);else if(Ct(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(je(l))qs(l,a,12,[o,u]);else{const g=Mt(l),_=Ct(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?d[l]:u[l]:l.value;if(r)Ge(p)&&kc(p,s);else if(Ge(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(d[l]=u[l]);else{const w=[s];l.value=w,t.k&&(u[t.k]=w)}}else g?(u[l]=o,h(l)&&(d[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),ea.delete(t)};p.id=-1,ea.set(t,p),Jt(p,n)}else Nu(t),m()}}}function Nu(t){const e=ea.get(t);e&&(e.flags|=8,ea.delete(t))}const Ou=t=>t.nodeType===8;ma().requestIdleCallback;ma().cancelIdleCallback;function hg(t,e){if(Ou(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ou(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Gr=t=>!!t.type.__asyncLoader;function cn(t){je(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,d=0;const f=()=>(d++,c=null,h()),h=()=>{let g;return c||(g=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(f()),()=>p(_),d+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return mn({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(g,_,m){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const w=()=>{p||m()},S=s?()=>{const y=s(w,L=>hg(g,L));y&&(_.bum||(_.bum=[])).push(y)}:w;u?S():h().then(()=>!_.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const g=zt;if(Zc(g),u)return()=>lo(u,g);const _=S=>{c=null,$s(S,g,13,!i)};if(a&&g.suspense||Kr)return h().then(S=>()=>lo(S,g)).catch(S=>(_(S),()=>i?At(i,{error:S}):null));const m=nt(!1),p=nt(),w=nt(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const S=new Error(`Async component timed out after ${o}ms.`);_(S),p.value=S}},o),h().then(()=>{m.value=!0,g.parent&&Ys(g.parent.vnode)&&g.parent.update()}).catch(S=>{_(S),p.value=S}),()=>{if(m.value&&u)return lo(u,g);if(p.value&&i)return At(i,{error:p.value});if(n&&!w.value)return lo(n,g)}}})}function lo(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=At(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ys=t=>t.type.__isKeepAlive;function pg(t,e){wh(t,"a",e)}function mg(t,e){wh(t,"da",e)}function wh(t,e,n=zt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(xa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ys(r.parent.vnode)&&gg(i,e,n,r),r=r.parent}}function gg(t,e,n,i){const r=xa(e,t,i,!0);Ni(()=>{kc(i[e],r)},n)}function xa(t,e,n=zt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ui();const a=js(n),l=Ln(e,n,t,o);return a(),di(),l});return i?r.unshift(s):r.push(s),s}}const mi=t=>(e,n=zt)=>{(!Kr||t==="sp")&&xa(t,(...i)=>e(...i),n)},_g=mi("bm"),qn=mi("m"),xg=mi("bu"),vg=mi("u"),Ah=mi("bum"),Ni=mi("um"),bg=mi("sp"),yg=mi("rtg"),Eg=mi("rtc");function Sg(t,e=zt){xa("ec",t,e)}const Ch="components";function Mg(t,e){return Ph(Ch,t,!0,e)||t}const Rh=Symbol.for("v-ndc");function Tg(t){return Mt(t)?Ph(Ch,t,!1)||t:t||Rh}function Ph(t,e,n=!0,i=!1){const r=Ht||zt;if(r){const s=r.type;{const a=u_(s,!1);if(a&&(a===e||a===Mn(e)||a===pa(Mn(e))))return s}const o=Fu(r[t]||s[t],e)||Fu(r.appContext[t],e);return!o&&i?s:o}}function Fu(t,e){return t&&(t[e]||t[Mn(e)]||t[pa(Mn(e))])}function hr(t,e,n,i){let r;const s=n,o=Ge(t);if(o||Mt(t)){const a=o&&li(t);let l=!1,c=!1;a&&(l=!pn(t),c=fi(t),t=ga(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?jr(Dn(t[u])):Dn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(gt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function PA(t,e,n={},i,r){if(Ht.ce||Ht.parent&&Gr(Ht.parent)&&Ht.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),ve(),en(ft,null,[At("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),ve();const o=s&&Ih(s(n)),a=n.key||o&&o.key,l=en(ft,{key:(a&&!In(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Ih(t){return t.some(e=>Os(e)?!(e.type===$t||e.type===ft&&!Ih(e.children)):!0)?t:null}const Il=t=>t?jh(t)?ya(t):Il(t.parent):null,As=Bt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Il(t.parent),$root:t=>Il(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Lh(t),$forceUpdate:t=>t.f||(t.f=()=>{Yc(t.update)}),$nextTick:t=>t.n||(t.n=$c.bind(t.proxy)),$watch:t=>lg.bind(t)}),Oa=(t,e)=>t!==xt&&!t.__isScriptSetup&&dt(t,e),wg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Oa(i,e))return o[e]=1,i[e];if(r!==xt&&dt(r,e))return o[e]=2,r[e];if(dt(s,e))return o[e]=3,s[e];if(n!==xt&&dt(n,e))return o[e]=4,n[e];Dl&&(o[e]=0)}}const c=As[e];let u,d;if(c)return e==="$attrs"&&Xt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==xt&&dt(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,dt(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Oa(r,e)?(r[e]=n,!0):i!==xt&&dt(i,e)?(i[e]=n,!0):dt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==xt&&a[0]!=="$"&&dt(t,a)||Oa(e,a)||dt(s,a)||dt(i,a)||dt(As,a)||dt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:dt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ku(t){return Ge(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Dl=!0;function Ag(t){const e=Lh(t),n=t.proxy,i=t.ctx;Dl=!1,e.beforeCreate&&Bu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:S,unmounted:y,render:L,renderTracked:U,renderTriggered:I,errorCaptured:R,serverPrefetch:b,expose:E,inheritAttrs:D,components:B,directives:H,filters:V}=e;if(c&&Cg(c,i,null),o)for(const z in o){const N=o[z];je(N)&&(i[z]=N.bind(n))}if(r){const z=r.call(n,n);gt(z)&&(t.data=Xs(z))}if(Dl=!0,s)for(const z in s){const N=s[z],re=je(N)?N.bind(n,n):je(N.get)?N.get.bind(n,n):Xn,fe=!je(N)&&je(N.set)?N.set.bind(n):Xn,be=ke({get:re,set:fe});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>be.value,set:Me=>be.value=Me})}if(a)for(const z in a)Dh(a[z],i,n,z);if(l){const z=je(l)?l.call(n):l;Reflect.ownKeys(z).forEach(N=>{Fo(N,z[N])})}u&&Bu(u,t,"c");function $(z,N){Ge(N)?N.forEach(re=>z(re.bind(n))):N&&z(N.bind(n))}if($(_g,d),$(qn,f),$(xg,h),$(vg,g),$(pg,_),$(mg,m),$(Sg,R),$(Eg,U),$(yg,I),$(Ah,w),$(Ni,y),$(bg,b),Ge(E))if(E.length){const z=t.exposed||(t.exposed={});E.forEach(N=>{Object.defineProperty(z,N,{get:()=>n[N],set:re=>n[N]=re,enumerable:!0})})}else t.exposed||(t.exposed={});L&&t.render===Xn&&(t.render=L),D!=null&&(t.inheritAttrs=D),B&&(t.components=B),H&&(t.directives=H),b&&Zc(t)}function Cg(t,e,n=Xn){Ge(t)&&(t=Ll(t));for(const i in t){const r=t[i];let s;gt(r)?"default"in r?s=Sn(r.from||i,r.default,!0):s=Sn(r.from||i):s=Sn(r),Ct(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Bu(t,e,n){Ln(Ge(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Dh(t,e,n,i){let r=i.includes(".")?gh(n,i):()=>n[i];if(Mt(t)){const s=e[t];je(s)&&Ii(r,s)}else if(je(t))Ii(r,t.bind(n));else if(gt(t))if(Ge(t))t.forEach(s=>Dh(s,e,n,i));else{const s=je(t.handler)?t.handler.bind(n):e[t.handler];je(s)&&Ii(r,s,t)}}function Lh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>ta(l,c,o,!0)),ta(l,e,o)),gt(e)&&s.set(e,l),l}function ta(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&ta(t,s,n,!0),r&&r.forEach(o=>ta(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Rg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Rg={data:zu,props:Hu,emits:Hu,methods:vs,computed:vs,beforeCreate:Kt,created:Kt,beforeMount:Kt,mounted:Kt,beforeUpdate:Kt,updated:Kt,beforeDestroy:Kt,beforeUnmount:Kt,destroyed:Kt,unmounted:Kt,activated:Kt,deactivated:Kt,errorCaptured:Kt,serverPrefetch:Kt,components:vs,directives:vs,watch:Ig,provide:zu,inject:Pg};function zu(t,e){return e?t?function(){return Bt(je(t)?t.call(this,this):t,je(e)?e.call(this,this):e)}:e:t}function Pg(t,e){return vs(Ll(t),Ll(e))}function Ll(t){if(Ge(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Kt(t,e){return t?[...new Set([].concat(t,e))]:e}function vs(t,e){return t?Bt(Object.create(null),t,e):e}function Hu(t,e){return t?Ge(t)&&Ge(e)?[...new Set([...t,...e])]:Bt(Object.create(null),ku(t),ku(e??{})):e}function Ig(t,e){if(!t)return e;if(!e)return t;const n=Bt(Object.create(null),t);for(const i in e)n[i]=Kt(t[i],e[i]);return n}function Uh(){return{app:null,config:{isNativeTag:Of,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dg=0;function Lg(t,e){return function(i,r=null){je(i)||(i=Bt({},i)),r!=null&&!gt(r)&&(r=null);const s=Uh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Dg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:f_,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&je(u.install)?(o.add(u),u.install(c,...d)):je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const h=c._ceVNode||At(i,r);return h.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(h,u,f),l=!0,c._container=u,u.__vue_app__=c,ya(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Ln(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=cr;cr=c;try{return u()}finally{cr=d}}};return c}}let cr=null;const Ug=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Mn(e)}Modifiers`]||t[`${Bi(e)}Modifiers`];function Ng(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||xt;let r=n;const s=e.startsWith("update:"),o=s&&Ug(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>Mt(u)?u.trim():u)),o.number&&(r=n.map(Bc)));let a,l=i[a=Pa(e)]||i[a=Pa(Mn(e))];!l&&s&&(l=i[a=Pa(Bi(e))]),l&&Ln(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ln(c,t,6,r)}}const Og=new WeakMap;function Nh(t,e,n=!1){const i=n?Og:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!je(t)){const l=c=>{const u=Nh(c,e,!0);u&&(a=!0,Bt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(gt(t)&&i.set(t,null),null):(Ge(s)?s.forEach(l=>o[l]=null):Bt(o,s),gt(t)&&i.set(t,o),o)}function va(t,e){return!t||!da(e)?!1:(e=e.slice(2).replace(/Once$/,""),dt(t,e[0].toLowerCase()+e.slice(1))||dt(t,Bi(e))||dt(t,e))}function Vu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:h,ctx:g,inheritAttrs:_}=t,m=Jo(t);let p,w;try{if(n.shapeFlag&4){const y=r||i,L=y;p=Bn(c.call(L,y,u,d,h,f,g)),w=a}else{const y=e;p=Bn(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),w=e.props?a:Fg(a)}}catch(y){Cs.length=0,$s(y,t,1),p=At($t)}let S=p;if(w&&_!==!1){const y=Object.keys(w),{shapeFlag:L}=S;y.length&&L&7&&(s&&y.some(Fc)&&(w=kg(w,s)),S=Oi(S,w,!1,!0))}return n.dirs&&(S=Oi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Us(S,n.transition),p=S,Jo(m),p}const Fg=t=>{let e;for(const n in t)(n==="class"||n==="style"||da(n))&&((e||(e={}))[n]=t[n]);return e},kg=(t,e)=>{const n={};for(const i in t)(!Fc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Bg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Gu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!va(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Gu(i,o,c):!0:!!o;return!1}function Gu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!va(n,s))return!0}return!1}function zg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Oh={},Fh=()=>Object.create(Oh),kh=t=>Object.getPrototypeOf(t)===Oh;function Hg(t,e,n,i=!1){const r={},s=Fh();t.propsDefaults=Object.create(null),Bh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:lh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Vg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=ot(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(va(t.emitsOptions,f))continue;const h=e[f];if(l)if(dt(s,f))h!==s[f]&&(s[f]=h,c=!0);else{const g=Mn(f);r[g]=Ul(l,a,g,h,t,!1)}else h!==s[f]&&(s[f]=h,c=!0)}}}else{Bh(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!dt(e,d)&&((u=Bi(d))===d||!dt(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Ul(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!dt(e,d))&&(delete s[d],c=!0)}c&&si(t.attrs,"set","")}function Bh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Es(l))continue;const c=e[l];let u;r&&dt(r,u=Mn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:va(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=ot(n),c=a||xt;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Ul(r,l,d,c[d],t,!dt(c,d))}}return o}function Ul(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=dt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=js(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Bi(n))&&(i=!0))}return i}const Gg=new WeakMap;function zh(t,e,n=!1){const i=n?Gg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!je(t)){const u=d=>{l=!0;const[f,h]=zh(d,e,!0);Bt(o,f),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return gt(t)&&i.set(t,zr),zr;if(Ge(s))for(let u=0;u<s.length;u++){const d=Mn(s[u]);Wu(d)&&(o[d]=xt)}else if(s)for(const u in s){const d=Mn(u);if(Wu(d)){const f=s[u],h=o[d]=Ge(f)||je(f)?{type:f}:Bt({},f),g=h.type;let _=!1,m=!0;if(Ge(g))for(let p=0;p<g.length;++p){const w=g[p],S=je(w)&&w.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=je(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||dt(h,"default"))&&a.push(d)}}const c=[o,a];return gt(t)&&i.set(t,c),c}function Wu(t){return t[0]!=="$"&&!Es(t)}const Jc=t=>t==="_"||t==="_ctx"||t==="$stable",Qc=t=>Ge(t)?t.map(Bn):[Bn(t)],Wg=(t,e,n)=>{if(e._n)return e;const i=Qo((...r)=>Qc(e(...r)),n);return i._c=!1,i},Hh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Jc(r))continue;const s=t[r];if(je(s))e[r]=Wg(r,s,i);else if(s!=null){const o=Qc(s);e[r]=()=>o}}},Vh=(t,e)=>{const n=Qc(e);t.slots.default=()=>n},Gh=(t,e,n)=>{for(const i in e)(n||!Jc(i))&&(t[i]=e[i])},Xg=(t,e,n)=>{const i=t.slots=Fh();if(t.vnode.shapeFlag&32){const r=e._;r?(Gh(i,e,n),n&&Hf(i,"_",r,!0)):Hh(e,i)}else e&&Vh(t,e)},qg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=xt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Gh(r,e,n):(s=!e.$stable,Hh(e,r)),o=e}else e&&(Vh(t,e),o={default:1});if(s)for(const a in r)!Jc(a)&&o[a]==null&&delete r[a]},Jt=Zg;function $g(t){return Yg(t)}function Yg(t,e){const n=ma();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:h=Xn,insertStaticContent:g}=t,_=(A,x,k,q=null,te=null,W=null,me=void 0,Q=null,le=!!x.dynamicChildren)=>{if(A===x)return;A&&!tr(A,x)&&(q=F(A),Me(A,te,W,!0),A=null),x.patchFlag===-2&&(le=!1,x.dynamicChildren=null);const{type:ce,ref:Ae,shapeFlag:M}=x;switch(ce){case ba:m(A,x,k,q);break;case $t:p(A,x,k,q);break;case Bo:A==null&&w(x,k,q,me);break;case ft:B(A,x,k,q,te,W,me,Q,le);break;default:M&1?L(A,x,k,q,te,W,me,Q,le):M&6?H(A,x,k,q,te,W,me,Q,le):(M&64||M&128)&&ce.process(A,x,k,q,te,W,me,Q,le,he)}Ae!=null&&te?ws(Ae,A&&A.ref,W,x||A,!x):Ae==null&&A&&A.ref!=null&&ws(A.ref,null,W,A,!0)},m=(A,x,k,q)=>{if(A==null)i(x.el=a(x.children),k,q);else{const te=x.el=A.el;x.children!==A.children&&c(te,x.children)}},p=(A,x,k,q)=>{A==null?i(x.el=l(x.children||""),k,q):x.el=A.el},w=(A,x,k,q)=>{[A.el,A.anchor]=g(A.children,x,k,q,A.el,A.anchor)},S=({el:A,anchor:x},k,q)=>{let te;for(;A&&A!==x;)te=f(A),i(A,k,q),A=te;i(x,k,q)},y=({el:A,anchor:x})=>{let k;for(;A&&A!==x;)k=f(A),r(A),A=k;r(x)},L=(A,x,k,q,te,W,me,Q,le)=>{if(x.type==="svg"?me="svg":x.type==="math"&&(me="mathml"),A==null)U(x,k,q,te,W,me,Q,le);else{const ce=A.el&&A.el._isVueCE?A.el:null;try{ce&&ce._beginPatch(),b(A,x,te,W,me,Q,le)}finally{ce&&ce._endPatch()}}},U=(A,x,k,q,te,W,me,Q)=>{let le,ce;const{props:Ae,shapeFlag:M,transition:v,dirs:O}=A;if(le=A.el=o(A.type,W,Ae&&Ae.is,Ae),M&8?u(le,A.children):M&16&&R(A.children,le,null,q,te,Fa(A,W),me,Q),O&&Vi(A,null,q,"created"),I(le,A,A.scopeId,me,q),Ae){for(const se in Ae)se!=="value"&&!Es(se)&&s(le,se,null,Ae[se],W,q);"value"in Ae&&s(le,"value",null,Ae.value,W),(ce=Ae.onVnodeBeforeMount)&&Fn(ce,q,A)}O&&Vi(A,null,q,"beforeMount");const j=jg(te,v);j&&v.beforeEnter(le),i(le,x,k),((ce=Ae&&Ae.onVnodeMounted)||j||O)&&Jt(()=>{ce&&Fn(ce,q,A),j&&v.enter(le),O&&Vi(A,null,q,"mounted")},te)},I=(A,x,k,q,te)=>{if(k&&h(A,k),q)for(let W=0;W<q.length;W++)h(A,q[W]);if(te){let W=te.subTree;if(x===W||qh(W.type)&&(W.ssContent===x||W.ssFallback===x)){const me=te.vnode;I(A,me,me.scopeId,me.slotScopeIds,te.parent)}}},R=(A,x,k,q,te,W,me,Q,le=0)=>{for(let ce=le;ce<A.length;ce++){const Ae=A[ce]=Q?Ai(A[ce]):Bn(A[ce]);_(null,Ae,x,k,q,te,W,me,Q)}},b=(A,x,k,q,te,W,me)=>{const Q=x.el=A.el;let{patchFlag:le,dynamicChildren:ce,dirs:Ae}=x;le|=A.patchFlag&16;const M=A.props||xt,v=x.props||xt;let O;if(k&&Gi(k,!1),(O=v.onVnodeBeforeUpdate)&&Fn(O,k,x,A),Ae&&Vi(x,A,k,"beforeUpdate"),k&&Gi(k,!0),(M.innerHTML&&v.innerHTML==null||M.textContent&&v.textContent==null)&&u(Q,""),ce?E(A.dynamicChildren,ce,Q,k,q,Fa(x,te),W):me||N(A,x,Q,null,k,q,Fa(x,te),W,!1),le>0){if(le&16)D(Q,M,v,k,te);else if(le&2&&M.class!==v.class&&s(Q,"class",null,v.class,te),le&4&&s(Q,"style",M.style,v.style,te),le&8){const j=x.dynamicProps;for(let se=0;se<j.length;se++){const Z=j[se],Ce=M[Z],pe=v[Z];(pe!==Ce||Z==="value")&&s(Q,Z,Ce,pe,te,k)}}le&1&&A.children!==x.children&&u(Q,x.children)}else!me&&ce==null&&D(Q,M,v,k,te);((O=v.onVnodeUpdated)||Ae)&&Jt(()=>{O&&Fn(O,k,x,A),Ae&&Vi(x,A,k,"updated")},q)},E=(A,x,k,q,te,W,me)=>{for(let Q=0;Q<x.length;Q++){const le=A[Q],ce=x[Q],Ae=le.el&&(le.type===ft||!tr(le,ce)||le.shapeFlag&198)?d(le.el):k;_(le,ce,Ae,null,q,te,W,me,!0)}},D=(A,x,k,q,te)=>{if(x!==k){if(x!==xt)for(const W in x)!Es(W)&&!(W in k)&&s(A,W,x[W],null,te,q);for(const W in k){if(Es(W))continue;const me=k[W],Q=x[W];me!==Q&&W!=="value"&&s(A,W,Q,me,te,q)}"value"in k&&s(A,"value",x.value,k.value,te)}},B=(A,x,k,q,te,W,me,Q,le)=>{const ce=x.el=A?A.el:a(""),Ae=x.anchor=A?A.anchor:a("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:O}=x;O&&(Q=Q?Q.concat(O):O),A==null?(i(ce,k,q),i(Ae,k,q),R(x.children||[],k,Ae,te,W,me,Q,le)):M>0&&M&64&&v&&A.dynamicChildren&&A.dynamicChildren.length===v.length?(E(A.dynamicChildren,v,k,te,W,me,Q),(x.key!=null||te&&x===te.subTree)&&eu(A,x,!0)):N(A,x,k,Ae,te,W,me,Q,le)},H=(A,x,k,q,te,W,me,Q,le)=>{x.slotScopeIds=Q,A==null?x.shapeFlag&512?te.ctx.activate(x,k,q,me,le):V(x,k,q,te,W,me,le):K(A,x,le)},V=(A,x,k,q,te,W,me)=>{const Q=A.component=s_(A,q,te);if(Ys(A)&&(Q.ctx.renderer=he),o_(Q,!1,me),Q.asyncDep){if(te&&te.registerDep(Q,$,me),!A.el){const le=Q.subTree=At($t);p(null,le,x,k),A.placeholder=le.el}}else $(Q,A,x,k,te,W,me)},K=(A,x,k)=>{const q=x.component=A.component;if(Bg(A,x,k))if(q.asyncDep&&!q.asyncResolved){z(q,x,k);return}else q.next=x,q.update();else x.el=A.el,q.vnode=x},$=(A,x,k,q,te,W,me)=>{const Q=()=>{if(A.isMounted){let{next:M,bu:v,u:O,parent:j,vnode:se}=A;{const De=Wh(A);if(De){M&&(M.el=se.el,z(A,M,me)),De.asyncDep.then(()=>{A.isUnmounted||Q()});return}}let Z=M,Ce;Gi(A,!1),M?(M.el=se.el,z(A,M,me)):M=se,v&&Oo(v),(Ce=M.props&&M.props.onVnodeBeforeUpdate)&&Fn(Ce,j,M,se),Gi(A,!0);const pe=Vu(A),Ie=A.subTree;A.subTree=pe,_(Ie,pe,d(Ie.el),F(Ie),A,te,W),M.el=pe.el,Z===null&&zg(A,pe.el),O&&Jt(O,te),(Ce=M.props&&M.props.onVnodeUpdated)&&Jt(()=>Fn(Ce,j,M,se),te)}else{let M;const{el:v,props:O}=x,{bm:j,m:se,parent:Z,root:Ce,type:pe}=A,Ie=Gr(x);Gi(A,!1),j&&Oo(j),!Ie&&(M=O&&O.onVnodeBeforeMount)&&Fn(M,Z,x),Gi(A,!0);{Ce.ce&&Ce.ce._def.shadowRoot!==!1&&Ce.ce._injectChildStyle(pe);const De=A.subTree=Vu(A);_(null,De,k,q,A,te,W),x.el=De.el}if(se&&Jt(se,te),!Ie&&(M=O&&O.onVnodeMounted)){const De=x;Jt(()=>Fn(M,Z,De),te)}(x.shapeFlag&256||Z&&Gr(Z.vnode)&&Z.vnode.shapeFlag&256)&&A.a&&Jt(A.a,te),A.isMounted=!0,x=k=q=null}};A.scope.on();const le=A.effect=new Yf(Q);A.scope.off();const ce=A.update=le.run.bind(le),Ae=A.job=le.runIfDirty.bind(le);Ae.i=A,Ae.id=A.uid,le.scheduler=()=>Yc(Ae),Gi(A,!0),ce()},z=(A,x,k)=>{x.component=A;const q=A.vnode.props;A.vnode=x,A.next=null,Vg(A,x.props,q,k),qg(A,x.children,k),ui(),Ru(A),di()},N=(A,x,k,q,te,W,me,Q,le=!1)=>{const ce=A&&A.children,Ae=A?A.shapeFlag:0,M=x.children,{patchFlag:v,shapeFlag:O}=x;if(v>0){if(v&128){fe(ce,M,k,q,te,W,me,Q,le);return}else if(v&256){re(ce,M,k,q,te,W,me,Q,le);return}}O&8?(Ae&16&&de(ce,te,W),M!==ce&&u(k,M)):Ae&16?O&16?fe(ce,M,k,q,te,W,me,Q,le):de(ce,te,W,!0):(Ae&8&&u(k,""),O&16&&R(M,k,q,te,W,me,Q,le))},re=(A,x,k,q,te,W,me,Q,le)=>{A=A||zr,x=x||zr;const ce=A.length,Ae=x.length,M=Math.min(ce,Ae);let v;for(v=0;v<M;v++){const O=x[v]=le?Ai(x[v]):Bn(x[v]);_(A[v],O,k,null,te,W,me,Q,le)}ce>Ae?de(A,te,W,!0,!1,M):R(x,k,q,te,W,me,Q,le,M)},fe=(A,x,k,q,te,W,me,Q,le)=>{let ce=0;const Ae=x.length;let M=A.length-1,v=Ae-1;for(;ce<=M&&ce<=v;){const O=A[ce],j=x[ce]=le?Ai(x[ce]):Bn(x[ce]);if(tr(O,j))_(O,j,k,null,te,W,me,Q,le);else break;ce++}for(;ce<=M&&ce<=v;){const O=A[M],j=x[v]=le?Ai(x[v]):Bn(x[v]);if(tr(O,j))_(O,j,k,null,te,W,me,Q,le);else break;M--,v--}if(ce>M){if(ce<=v){const O=v+1,j=O<Ae?x[O].el:q;for(;ce<=v;)_(null,x[ce]=le?Ai(x[ce]):Bn(x[ce]),k,j,te,W,me,Q,le),ce++}}else if(ce>v)for(;ce<=M;)Me(A[ce],te,W,!0),ce++;else{const O=ce,j=ce,se=new Map;for(ce=j;ce<=v;ce++){const Oe=x[ce]=le?Ai(x[ce]):Bn(x[ce]);Oe.key!=null&&se.set(Oe.key,ce)}let Z,Ce=0;const pe=v-j+1;let Ie=!1,De=0;const ge=new Array(pe);for(ce=0;ce<pe;ce++)ge[ce]=0;for(ce=O;ce<=M;ce++){const Oe=A[ce];if(Ce>=pe){Me(Oe,te,W,!0);continue}let Le;if(Oe.key!=null)Le=se.get(Oe.key);else for(Z=j;Z<=v;Z++)if(ge[Z-j]===0&&tr(Oe,x[Z])){Le=Z;break}Le===void 0?Me(Oe,te,W,!0):(ge[Le-j]=ce+1,Le>=De?De=Le:Ie=!0,_(Oe,x[Le],k,null,te,W,me,Q,le),Ce++)}const Se=Ie?Kg(ge):zr;for(Z=Se.length-1,ce=pe-1;ce>=0;ce--){const Oe=j+ce,Le=x[Oe],Ee=x[Oe+1],qe=Oe+1<Ae?Ee.el||Xh(Ee):q;ge[ce]===0?_(null,Le,k,qe,te,W,me,Q,le):Ie&&(Z<0||ce!==Se[Z]?be(Le,k,qe,2):Z--)}}},be=(A,x,k,q,te=null)=>{const{el:W,type:me,transition:Q,children:le,shapeFlag:ce}=A;if(ce&6){be(A.component.subTree,x,k,q);return}if(ce&128){A.suspense.move(x,k,q);return}if(ce&64){me.move(A,x,k,he);return}if(me===ft){i(W,x,k);for(let M=0;M<le.length;M++)be(le[M],x,k,q);i(A.anchor,x,k);return}if(me===Bo){S(A,x,k);return}if(q!==2&&ce&1&&Q)if(q===0)Q.beforeEnter(W),i(W,x,k),Jt(()=>Q.enter(W),te);else{const{leave:M,delayLeave:v,afterLeave:O}=Q,j=()=>{A.ctx.isUnmounted?r(W):i(W,x,k)},se=()=>{W._isLeaving&&W[ri](!0),M(W,()=>{j(),O&&O()})};v?v(W,j,se):se()}else i(W,x,k)},Me=(A,x,k,q=!1,te=!1)=>{const{type:W,props:me,ref:Q,children:le,dynamicChildren:ce,shapeFlag:Ae,patchFlag:M,dirs:v,cacheIndex:O}=A;if(M===-2&&(te=!1),Q!=null&&(ui(),ws(Q,null,k,A,!0),di()),O!=null&&(x.renderCache[O]=void 0),Ae&256){x.ctx.deactivate(A);return}const j=Ae&1&&v,se=!Gr(A);let Z;if(se&&(Z=me&&me.onVnodeBeforeUnmount)&&Fn(Z,x,A),Ae&6)ie(A.component,k,q);else{if(Ae&128){A.suspense.unmount(k,q);return}j&&Vi(A,null,x,"beforeUnmount"),Ae&64?A.type.remove(A,x,k,he,q):ce&&!ce.hasOnce&&(W!==ft||M>0&&M&64)?de(ce,x,k,!1,!0):(W===ft&&M&384||!te&&Ae&16)&&de(le,x,k),q&&Ke(A)}(se&&(Z=me&&me.onVnodeUnmounted)||j)&&Jt(()=>{Z&&Fn(Z,x,A),j&&Vi(A,null,x,"unmounted")},k)},Ke=A=>{const{type:x,el:k,anchor:q,transition:te}=A;if(x===ft){We(k,q);return}if(x===Bo){y(A);return}const W=()=>{r(k),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(A.shapeFlag&1&&te&&!te.persisted){const{leave:me,delayLeave:Q}=te,le=()=>me(k,W);Q?Q(A.el,W,le):le()}else W()},We=(A,x)=>{let k;for(;A!==x;)k=f(A),r(A),A=k;r(x)},ie=(A,x,k)=>{const{bum:q,scope:te,job:W,subTree:me,um:Q,m:le,a:ce}=A;Xu(le),Xu(ce),q&&Oo(q),te.stop(),W&&(W.flags|=8,Me(me,A,x,k)),Q&&Jt(Q,x),Jt(()=>{A.isUnmounted=!0},x)},de=(A,x,k,q=!1,te=!1,W=0)=>{for(let me=W;me<A.length;me++)Me(A[me],x,k,q,te)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const x=f(A.anchor||A.el),k=x&&x[_h];return k?f(k):x};let oe=!1;const ae=(A,x,k)=>{let q;A==null?x._vnode&&(Me(x._vnode,null,null,!0),q=x._vnode.component):_(x._vnode||null,A,x,null,null,null,k),x._vnode=A,oe||(oe=!0,Ru(q),hh(),oe=!1)},he={p:_,um:Me,m:be,r:Ke,mt:V,mc:R,pc:N,pbc:E,n:F,o:t};return{render:ae,hydrate:void 0,createApp:Lg(ae)}}function Fa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Gi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function jg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eu(t,e,n=!1){const i=t.children,r=e.children;if(Ge(i)&&Ge(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ai(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&eu(o,a)),a.type===ba&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(t.type===ft?1:0)),a.type===$t&&!a.el&&(a.el=o.el)}}function Kg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Wh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wh(e)}function Xu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Xh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Xh(e.subTree):null}const qh=t=>t.__isSuspense;function Zg(t,e){e&&e.pendingBranch?Ge(t)?e.effects.push(...t):e.effects.push(t):ig(t)}const ft=Symbol.for("v-fgt"),ba=Symbol.for("v-txt"),$t=Symbol.for("v-cmt"),Bo=Symbol.for("v-stc"),Cs=[];let hn=null;function ve(t=!1){Cs.push(hn=t?null:[])}function Jg(){Cs.pop(),hn=Cs[Cs.length-1]||null}let Ns=1;function na(t,e=!1){Ns+=t,t<0&&hn&&e&&(hn.hasOnce=!0)}function $h(t){return t.dynamicChildren=Ns>0?hn||zr:null,Jg(),Ns>0&&hn&&hn.push(t),t}function Re(t,e,n,i,r,s){return $h(P(t,e,n,i,r,s,!0))}function en(t,e,n,i,r){return $h(At(t,e,n,i,r,!0))}function Os(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const Yh=({key:t})=>t??null,zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Mt(t)||Ct(t)||je(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,i=0,r=null,s=t===ft?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Yh(e),ref:e&&zo(e),scopeId:mh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Ht};return a?(tu(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=Mt(n)?8:16),Ns>0&&!o&&hn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&hn.push(l),l}const At=Qg;function Qg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Rh)&&(t=$t),Os(t)){const a=Oi(t,e,!0);return n&&tu(a,n),Ns>0&&!s&&hn&&(a.shapeFlag&6?hn[hn.indexOf(t)]=a:hn.push(a)),a.patchFlag=-2,a}if(d_(t)&&(t=t.__vccOpts),e){e=e_(e);let{class:a,style:l}=e;a&&!Mt(a)&&(e.class=Ut(a)),gt(l)&&(_a(l)&&!Ge(l)&&(l=Bt({},l)),e.style=fr(l))}const o=Mt(t)?1:qh(t)?128:xh(t)?64:gt(t)?4:je(t)?2:0;return P(t,e,n,i,r,o,s,!0)}function e_(t){return t?_a(t)||kh(t)?Bt({},t):t:null}function Oi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?n_(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Yh(c),ref:e&&e.ref?n&&s?Ge(s)?s.concat(zo(e)):[s,zo(e)]:zo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oi(t.ssContent),ssFallback:t.ssFallback&&Oi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Us(u,l.clone(u)),u}function ur(t=" ",e=0){return At(ba,null,t,e)}function t_(t,e){const n=At(Bo,null,t);return n.staticCount=e,n}function st(t="",e=!1){return e?(ve(),en($t,null,t)):At($t,null,t)}function Bn(t){return t==null||typeof t=="boolean"?At($t):Ge(t)?At(ft,null,t.slice()):Os(t)?Ai(t):At(ba,null,String(t))}function Ai(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oi(t)}function tu(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ge(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),tu(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!kh(e)?e._ctx=Ht:r===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else je(e)?(e={default:e,_ctx:Ht},n=32):(e=String(e),i&64?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function n_(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ut([e.class,i.class]));else if(r==="style")e.style=fr([e.style,i.style]);else if(da(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ge(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Fn(t,e,n,i=null){Ln(t,e,7,[n,i])}const i_=Uh();let r_=0;function s_(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||i_,s={uid:r_++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Xf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zh(i,r),emitsOptions:Nh(i,r),emit:null,emitted:null,propsDefaults:xt,inheritAttrs:i.inheritAttrs,ctx:xt,data:xt,props:xt,attrs:xt,slots:xt,refs:xt,setupState:xt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Ng.bind(null,s),t.ce&&t.ce(s),s}let zt=null;const nu=()=>zt||Ht;let ia,Nl;{const t=ma(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ia=e("__VUE_INSTANCE_SETTERS__",n=>zt=n),Nl=e("__VUE_SSR_SETTERS__",n=>Kr=n)}const js=t=>{const e=zt;return ia(t),t.scope.on(),()=>{t.scope.off(),ia(e)}},qu=()=>{zt&&zt.scope.off(),ia(null)};function jh(t){return t.vnode.shapeFlag&4}let Kr=!1;function o_(t,e=!1,n=!1){e&&Nl(e);const{props:i,children:r}=t.vnode,s=jh(t);Hg(t,i,s,e),Xg(t,r,n||e);const o=s?a_(t,e):void 0;return e&&Nl(!1),o}function a_(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,wg);const{setup:i}=n;if(i){ui();const r=t.setupContext=i.length>1?c_(t):null,s=js(t),o=qs(i,t,0,[t.props,r]),a=kf(o);if(di(),s(),(a||t.sp)&&!Gr(t)&&Zc(t),a){if(o.then(qu,qu),e)return o.then(l=>{$u(t,l)}).catch(l=>{$s(l,t,0)});t.asyncDep=o}else $u(t,o)}else Kh(t)}function $u(t,e,n){je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:gt(e)&&(t.setupState=uh(e)),Kh(t)}function Kh(t,e,n){const i=t.type;t.render||(t.render=i.render||Xn);{const r=js(t);ui();try{Ag(t)}finally{di(),r()}}}const l_={get(t,e){return Xt(t,"get",""),t[e]}};function c_(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,l_),slots:t.slots,emit:t.emit,expose:e}}function ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(uh(qc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in As)return As[n](t)},has(e,n){return n in e||n in As}})):t.proxy}function u_(t,e=!0){return je(t)?t.displayName||t.name:t.name||e&&t.__name}function d_(t){return je(t)&&"__vccOpts"in t}const ke=(t,e)=>Jm(t,e,Kr);function iu(t,e,n){try{na(-1);const i=arguments.length;return i===2?gt(e)&&!Ge(e)?Os(e)?At(t,null,[e]):At(t,e):At(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Os(n)&&(n=[n]),At(t,e,n))}finally{na(1)}}const f_="3.5.26";let Ol;const Yu=typeof window<"u"&&window.trustedTypes;if(Yu)try{Ol=Yu.createPolicy("vue",{createHTML:t=>t})}catch{}const Zh=Ol?t=>Ol.createHTML(t):t=>t,h_="http://www.w3.org/2000/svg",p_="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,ju=ii&&ii.createElement("template"),m_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ii.createElementNS(h_,t):e==="mathml"?ii.createElementNS(p_,t):n?ii.createElement(t,{is:n}):ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ii.createTextNode(t),createComment:t=>ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{ju.innerHTML=Zh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=ju.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gi="transition",cs="animation",Fs=Symbol("_vtc"),Jh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},g_=Bt({},yh,Jh),__=t=>(t.displayName="Transition",t.props=g_,t),Fl=__((t,{slots:e})=>iu(fg,x_(t),e)),Wi=(t,e=[])=>{Ge(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ku=t=>t?Ge(t)?t.some(e=>e.length>1):t.length>1:!1;function x_(t){const e={};for(const B in t)B in Jh||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=v_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:w,onEnterCancelled:S,onLeave:y,onLeaveCancelled:L,onBeforeAppear:U=p,onAppear:I=w,onAppearCancelled:R=S}=e,b=(B,H,V,K)=>{B._enterCancelled=K,Xi(B,H?u:a),Xi(B,H?c:o),V&&V()},E=(B,H)=>{B._isLeaving=!1,Xi(B,d),Xi(B,h),Xi(B,f),H&&H()},D=B=>(H,V)=>{const K=B?I:w,$=()=>b(H,B,V);Wi(K,[H,$]),Zu(()=>{Xi(H,B?l:s),jn(H,B?u:a),Ku(K)||Ju(H,i,_,$)})};return Bt(e,{onBeforeEnter(B){Wi(p,[B]),jn(B,s),jn(B,o)},onBeforeAppear(B){Wi(U,[B]),jn(B,l),jn(B,c)},onEnter:D(!1),onAppear:D(!0),onLeave(B,H){B._isLeaving=!0;const V=()=>E(B,H);jn(B,d),B._enterCancelled?(jn(B,f),td(B)):(td(B),jn(B,f)),Zu(()=>{B._isLeaving&&(Xi(B,d),jn(B,h),Ku(y)||Ju(B,i,m,V))}),Wi(y,[B,V])},onEnterCancelled(B){b(B,!1,void 0,!0),Wi(S,[B])},onAppearCancelled(B){b(B,!0,void 0,!0),Wi(R,[B])},onLeaveCancelled(B){E(B),Wi(L,[B])}})}function v_(t){if(t==null)return null;if(gt(t))return[ka(t.enter),ka(t.leave)];{const e=ka(t);return[e,e]}}function ka(t){return _m(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Fs]||(t[Fs]=new Set)).add(e)}function Xi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Fs];n&&(n.delete(e),n.size||(t[Fs]=void 0))}function Zu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let b_=0;function Ju(t,e,n,i){const r=t._endId=++b_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=y_(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=h=>{h.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function y_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${gi}Delay`),s=i(`${gi}Duration`),o=Qu(r,s),a=i(`${cs}Delay`),l=i(`${cs}Duration`),c=Qu(a,l);let u=null,d=0,f=0;e===gi?o>0&&(u=gi,d=o,f=s.length):e===cs?c>0&&(u=cs,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?gi:cs:null,f=u?u===gi?s.length:l.length:0);const h=u===gi&&/\b(?:transform|all)(?:,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:h}}function Qu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>ed(n)+ed(t[i])))}function ed(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function td(t){return(t?t.ownerDocument:document).body.offsetHeight}function E_(t,e,n){const i=t[Fs];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ra=Symbol("_vod"),Qh=Symbol("_vsh"),IA={name:"show",beforeMount(t,{value:e},{transition:n}){t[ra]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):us(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),us(t,!0),i.enter(t)):i.leave(t,()=>{us(t,!1)}):us(t,e))},beforeUnmount(t,{value:e}){us(t,e)}};function us(t,e){t.style.display=e?t[ra]:"none",t[Qh]=!e}const S_=Symbol(""),M_=/(?:^|;)\s*display\s*:/;function T_(t,e,n){const i=t.style,r=Mt(n);let s=!1;if(n&&!r){if(e)if(Mt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Ho(i,a,"")}else for(const o in e)n[o]==null&&Ho(i,o,"");for(const o in n)o==="display"&&(s=!0),Ho(i,o,n[o])}else if(r){if(e!==n){const o=i[S_];o&&(n+=";"+o),i.cssText=n,s=M_.test(n)}}else e&&t.removeAttribute("style");ra in t&&(t[ra]=s?i.display:"",t[Qh]&&(i.display="none"))}const nd=/\s*!important$/;function Ho(t,e,n){if(Ge(n))n.forEach(i=>Ho(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=w_(t,e);nd.test(n)?t.setProperty(Bi(i),n.replace(nd,""),"important"):t[i]=n}}const id=["Webkit","Moz","ms"],Ba={};function w_(t,e){const n=Ba[e];if(n)return n;let i=Mn(e);if(i!=="filter"&&i in t)return Ba[e]=i;i=pa(i);for(let r=0;r<id.length;r++){const s=id[r]+i;if(s in t)return Ba[e]=s}return e}const rd="http://www.w3.org/1999/xlink";function sd(t,e,n,i,r,s=Sm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(rd,e.slice(6,e.length)):t.setAttributeNS(rd,e,n):n==null||s&&!Vf(n)?t.removeAttribute(e):t.setAttribute(e,s?"":In(n)?String(n):n)}function od(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Zh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Vf(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function nr(t,e,n,i){t.addEventListener(e,n,i)}function A_(t,e,n,i){t.removeEventListener(e,n,i)}const ad=Symbol("_vei");function C_(t,e,n,i,r=null){const s=t[ad]||(t[ad]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=R_(e);if(i){const c=s[e]=D_(i,r);nr(t,a,c,l)}else o&&(A_(t,a,o,l),s[e]=void 0)}}const ld=/(?:Once|Passive|Capture)$/;function R_(t){let e;if(ld.test(t)){e={};let i;for(;i=t.match(ld);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Bi(t.slice(2)),e]}let za=0;const P_=Promise.resolve(),I_=()=>za||(P_.then(()=>za=0),za=Date.now());function D_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Ln(L_(i,n.value),e,5,[i])};return n.value=t,n.attached=I_(),n}function L_(t,e){if(Ge(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const cd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,U_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?E_(t,i,o):e==="style"?T_(t,n,i):da(e)?Fc(e)||C_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):N_(t,e,i,o))?(od(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&sd(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Mt(i))?od(t,Mn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),sd(t,e,i,o))};function N_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&cd(e)&&je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return cd(e)&&Mt(n)?!1:e in t}const sa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Ge(e)?n=>Oo(e,n):e};function O_(t){t.target.composing=!0}function ud(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Wr=Symbol("_assign");function dd(t,e,n){return e&&(t=t.trim()),n&&(t=Bc(t)),t}const ep={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Wr]=sa(r);const s=i||r.props&&r.props.type==="number";nr(t,e?"change":"input",o=>{o.target.composing||t[Wr](dd(t.value,n,s))}),(n||s)&&nr(t,"change",()=>{t.value=dd(t.value,n,s)}),e||(nr(t,"compositionstart",O_),nr(t,"compositionend",ud),nr(t,"change",ud))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Wr]=sa(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Bc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},F_={created(t,{value:e},n){t.checked=Yo(e,n.props.value),t[Wr]=sa(n),nr(t,"change",()=>{t[Wr](k_(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Wr]=sa(i),e!==n&&(t.checked=Yo(e,i.props.value))}};function k_(t){return"_value"in t?t._value:t.value}const B_=["ctrl","shift","alt","meta"],z_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>B_.some(n=>t[`${n}Key`]&&!e.includes(n))},fd=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=z_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},H_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},tp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=Bi(r.key);if(e.some(o=>o===s||H_[o]===s))return t(r)}))},V_=Bt({patchProp:U_},m_);let hd;function G_(){return hd||(hd=$g(V_))}const W_=((...t)=>{const e=G_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=q_(i);if(!r)return;const s=e._component;!je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,X_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function X_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function q_(t){return Mt(t)?document.querySelector(t):t}let np;const Ea=t=>np=t,ip=Symbol();function kl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Rs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Rs||(Rs={}));function $_(){const t=qf(!0),e=t.run(()=>nt({}));let n=[],i=[];const r=qc({install(s){Ea(r),r._a=s,s.provide(ip,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const rp=()=>{};function pd(t,e,n,i=rp){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&$f()&&Tm(r),r}function xr(t,...e){t.slice().forEach(n=>{n(...e)})}const Y_=t=>t(),md=Symbol(),Ha=Symbol();function Bl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];kl(r)&&kl(i)&&t.hasOwnProperty(n)&&!Ct(i)&&!li(i)?t[n]=Bl(r,i):t[n]=i}return t}const j_=Symbol();function K_(t){return!kl(t)||!t.hasOwnProperty(j_)}const{assign:Mi}=Object;function Z_(t){return!!(Ct(t)&&t.effect)}function J_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Ym(n.state.value[t]);return Mi(u,s,Object.keys(o||{}).reduce((d,f)=>(d[f]=qc(ke(()=>{Ea(n);const h=n._s.get(t);return o[f].call(h,h)})),d),{}))}return l=sp(t,c,e,n,i,!0),l}function sp(t,e,n={},i,r,s){let o;const a=Mi({actions:{}},n),l={deep:!0};let c,u,d=[],f=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),nt({});let _;function m(R){let b;c=u=!1,typeof R=="function"?(R(i.state.value[t]),b={type:Rs.patchFunction,storeId:t,events:h}):(Bl(i.state.value[t],R),b={type:Rs.patchObject,payload:R,storeId:t,events:h});const E=_=Symbol();$c().then(()=>{_===E&&(c=!0)}),u=!0,xr(d,b,i.state.value[t])}const p=s?function(){const{state:b}=n,E=b?b():{};this.$patch(D=>{Mi(D,E)})}:rp;function w(){o.stop(),d=[],f=[],i._s.delete(t)}const S=(R,b="")=>{if(md in R)return R[Ha]=b,R;const E=function(){Ea(i);const D=Array.from(arguments),B=[],H=[];function V(z){B.push(z)}function K(z){H.push(z)}xr(f,{args:D,name:E[Ha],store:L,after:V,onError:K});let $;try{$=R.apply(this&&this.$id===t?this:L,D)}catch(z){throw xr(H,z),z}return $ instanceof Promise?$.then(z=>(xr(B,z),z)).catch(z=>(xr(H,z),Promise.reject(z))):(xr(B,$),$)};return E[md]=!0,E[Ha]=b,E},y={_p:i,$id:t,$onAction:pd.bind(null,f),$patch:m,$reset:p,$subscribe(R,b={}){const E=pd(d,R,b.detached,()=>D()),D=o.run(()=>Ii(()=>i.state.value[t],B=>{(b.flush==="sync"?u:c)&&R({storeId:t,type:Rs.direct,events:h},B)},Mi({},l,b)));return E},$dispose:w},L=Xs(y);i._s.set(t,L);const I=(i._a&&i._a.runWithContext||Y_)(()=>i._e.run(()=>(o=qf()).run(()=>e({action:S}))));for(const R in I){const b=I[R];if(Ct(b)&&!Z_(b)||li(b))s||(g&&K_(b)&&(Ct(b)?b.value=g[R]:Bl(b,g[R])),i.state.value[t][R]=b);else if(typeof b=="function"){const E=S(b,R);I[R]=E,a.actions[R]=b}}return Mi(L,I),Mi(ot(L),I),Object.defineProperty(L,"$state",{get:()=>i.state.value[t],set:R=>{m(b=>{Mi(b,R)})}}),i._p.forEach(R=>{Mi(L,o.run(()=>R({store:L,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(L.$state,g),c=!0,u=!0,L}function op(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=rg();return a=a||(c?Sn(ip,null):null),a&&Ea(a),a=np,a._s.has(i)||(s?sp(i,e,r,a):J_(i,r,a)),a._s.get(i)}return o.$id=i,o}const ru=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},Q_={};function ex(t,e){const n=Mg("RouterView");return ve(),en(n)}const tx=ru(Q_,[["render",ex]]);const kr=typeof document<"u";function ap(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function nx(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ap(t.default)}const ut=Object.assign;function Va(t,e){const n={};for(const i in e){const r=e[i];n[i]=Un(r)?r.map(t):t(r)}return n}const Ps=()=>{},Un=Array.isArray;function gd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const lp=/#/g,ix=/&/g,rx=/\//g,sx=/=/g,ox=/\?/g,cp=/\+/g,ax=/%5B/g,lx=/%5D/g,up=/%5E/g,cx=/%60/g,dp=/%7B/g,ux=/%7C/g,fp=/%7D/g,dx=/%20/g;function su(t){return t==null?"":encodeURI(""+t).replace(ux,"|").replace(ax,"[").replace(lx,"]")}function fx(t){return su(t).replace(dp,"{").replace(fp,"}").replace(up,"^")}function zl(t){return su(t).replace(cp,"%2B").replace(dx,"+").replace(lp,"%23").replace(ix,"%26").replace(cx,"`").replace(dp,"{").replace(fp,"}").replace(up,"^")}function hx(t){return zl(t).replace(sx,"%3D")}function px(t){return su(t).replace(lp,"%23").replace(ox,"%3F")}function mx(t){return px(t).replace(rx,"%2F")}function ks(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const gx=/\/$/,_x=t=>t.replace(gx,"");function Ga(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=yx(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:ks(o)}}function xx(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function _d(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vx(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Zr(e.matched[i],n.matched[r])&&hp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Zr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function hp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!bx(t[n],e[n]))return!1;return!0}function bx(t,e){return Un(t)?xd(t,e):Un(e)?xd(e,t):t?.valueOf()===e?.valueOf()}function xd(t,e){return Un(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function yx(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const _i={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Hl=(function(t){return t.pop="pop",t.push="push",t})({}),Wa=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Ex(t){if(!t)if(kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_x(t)}const Sx=/^[^#]+#/;function Mx(t,e){return t.replace(Sx,"#")+e}function Tx(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Sa=()=>({left:window.scrollX,top:window.scrollY});function wx(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=Tx(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function vd(t,e){return(history.state?history.state.position-e:-1)+t}const Vl=new Map;function Ax(t,e){Vl.set(t,e)}function Cx(t){const e=Vl.get(t);return Vl.delete(t),e}function Rx(t){return typeof t=="string"||t&&typeof t=="object"}function pp(t){return typeof t=="string"||typeof t=="symbol"}let wt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const mp=Symbol("");wt.MATCHER_NOT_FOUND+"",wt.NAVIGATION_GUARD_REDIRECT+"",wt.NAVIGATION_ABORTED+"",wt.NAVIGATION_CANCELLED+"",wt.NAVIGATION_DUPLICATED+"";function Jr(t,e){return ut(new Error,{type:t,[mp]:!0},e)}function Kn(t,e){return t instanceof Error&&mp in t&&(e==null||!!(t.type&e))}const Px=["params","query","hash"];function Ix(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of Px)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function Dx(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(cp," "),s=r.indexOf("="),o=ks(s<0?r:r.slice(0,s)),a=s<0?null:ks(r.slice(s+1));if(o in e){let l=e[o];Un(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function bd(t){let e="";for(let n in t){const i=t[n];if(n=hx(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Un(i)?i.map(r=>r&&zl(r)):[i&&zl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function Lx(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Un(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Ux=Symbol(""),yd=Symbol(""),Ma=Symbol(""),ou=Symbol(""),Gl=Symbol("");function ds(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ci(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(Jr(wt.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?l(f):Rx(f)?l(Jr(wt.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Xa(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(ap(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ci(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=nx(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ci(f,n,i,o,a,r)()}))}}return s}function Nx(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Zr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Zr(c,l))||r.push(l))}return[n,i,r]}let Ox=()=>location.protocol+"//"+location.host;function gp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),_d(a,"")}return _d(n,t)+i+r}function Fx(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const h=gp(t,location),g=n.value,_=e.value;let m=0;if(f){if(n.value=h,e.value=f,o&&o===g){o=null;return}m=_?f.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Hl.pop,direction:m?m>0?Wa.forward:Wa.back:Wa.unknown})})};function l(){o=n.value}function c(f){r.push(f);const h=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(ut({},f.state,{scroll:Sa()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Ed(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Sa():null}}function kx(t){const{history:e,location:n}=window,i={value:gp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Ox()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](f)}}function o(l,c){s(l,ut({},e.state,Ed(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=ut({},r.value,e.state,{forward:l,scroll:Sa()});s(u.current,u,!0),s(l,ut({},Ed(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Bx(t){t=Ex(t);const e=kx(t),n=Fx(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=ut({location:"",base:t,go:i,createHref:Mx.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let sr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Lt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Lt||{});const zx={type:sr.Static,value:""},Hx=/[a-zA-Z0-9_]/;function Vx(t){if(!t)return[[]];if(t==="/")return[[zx]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Lt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(n===Lt.Static?s.push({type:sr.Static,value:c}):n===Lt.Param||n===Lt.ParamRegExp||n===Lt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:sr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Lt.ParamRegExp){i=n,n=Lt.EscapeNext;continue}switch(n){case Lt.Static:l==="/"?(c&&d(),o()):l===":"?(d(),n=Lt.Param):f();break;case Lt.EscapeNext:f(),n=i;break;case Lt.Param:l==="("?n=Lt.ParamRegExp:Hx.test(l)?f():(d(),n=Lt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Lt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Lt.ParamRegExpEnd:u+=l;break;case Lt.ParamRegExpEnd:d(),n=Lt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Lt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const Sd="[^/]+?",Gx={sensitive:!1,strict:!1,start:!0,end:!0};var Qt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Qt||{});const Wx=/[.+*?^${}()[\]/\\]/g;function Xx(t,e){const n=ut({},Gx,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Qt.Root];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let h=Qt.Segment+(n.sensitive?Qt.BonusCaseSensitive:0);if(f.type===sr.Static)d||(r+="/"),r+=f.value.replace(Wx,"\\$&"),h+=Qt.Static;else if(f.type===sr.Param){const{value:g,repeatable:_,optional:m,regexp:p}=f;s.push({name:g,repeatable:_,optional:m});const w=p||Sd;if(w!==Sd){h+=Qt.BonusCustomRegExp;try{`${w}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+y.message)}}let S=_?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,h+=Qt.Dynamic,m&&(h+=Qt.BonusOptional),_&&(h+=Qt.BonusRepeatable),w===".*"&&(h+=Qt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Qt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const h=u[f]||"",g=s[f-1];d[g.name]=h&&g.repeatable?h.split("/"):h}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const h of f)if(h.type===sr.Static)u+=h.value;else if(h.type===sr.Param){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(Un(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Un(p)?p.join("/"):p;if(!w)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function qx(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Qt.Static+Qt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Qt.Static+Qt.Segment?1:-1:0}function _p(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=qx(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Md(i))return 1;if(Md(r))return-1}return r.length-i.length}function Md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const $x={strict:!1,end:!0,sensitive:!1};function Yx(t,e,n){const i=Xx(Vx(t.path),n),r=ut(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function jx(t,e){const n=[],i=new Map;e=gd($x,e);function r(d){return i.get(d)}function s(d,f,h){const g=!h,_=wd(d);_.aliasOf=h&&h.record;const m=gd(e,d),p=[_];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const L of y)p.push(wd(ut({},_,{components:h?h.record.components:_.components,path:L,aliasOf:h?h.record:_})))}let w,S;for(const y of p){const{path:L}=y;if(f&&L[0]!=="/"){const U=f.record.path,I=U[U.length-1]==="/"?"":"/";y.path=f.record.path+(L&&I+L)}if(w=Yx(y,f,m),h?h.alias.push(w):(S=S||w,S!==w&&S.alias.push(w),g&&d.name&&!Ad(w)&&o(d.name)),xp(w)&&l(w),_.children){const U=_.children;for(let I=0;I<U.length;I++)s(U[I],w,h&&h.children[I])}h=h||w}return S?()=>{o(S)}:Ps}function o(d){if(pp(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=Jx(d,n);n.splice(f,0,d),d.record.name&&!Ad(d)&&i.set(d.record.name,d)}function c(d,f){let h,g={},_,m;if("name"in d&&d.name){if(h=i.get(d.name),!h)throw Jr(wt.MATCHER_NOT_FOUND,{location:d});m=h.record.name,g=ut(Td(f.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&Td(d.params,h.keys.map(S=>S.name))),_=h.stringify(g)}else if(d.path!=null)_=d.path,h=n.find(S=>S.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!h)throw Jr(wt.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=h.record.name,g=ut({},f.params,d.params),_=h.stringify(g)}const p=[];let w=h;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:_,params:g,matched:p,meta:Zx(p)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Td(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function wd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Kx(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Kx(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Ad(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Zx(t){return t.reduce((e,n)=>ut(e,n.meta),{})}function Jx(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;_p(t,e[s])<0?i=s:n=s+1}const r=Qx(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function Qx(t){let e=t;for(;e=e.parent;)if(xp(e)&&_p(t,e)===0)return e}function xp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Cd(t){const e=Sn(Ma),n=Sn(ou),i=ke(()=>{const l=Dt(t.to);return e.resolve(l)}),r=ke(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Zr.bind(null,u));if(f>-1)return f;const h=Rd(l[c-2]);return c>1&&Rd(u)===h&&d[d.length-1].path!==h?d.findIndex(Zr.bind(null,l[c-2])):f}),s=ke(()=>r.value>-1&&r0(n.params,i.value.params)),o=ke(()=>r.value>-1&&r.value===n.matched.length-1&&hp(n.params,i.value.params));function a(l={}){if(i0(l)){const c=e[Dt(t.replace)?"replace":"push"](Dt(t.to)).catch(Ps);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ke(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function e0(t){return t.length===1?t[0]:t}const t0=mn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Cd,setup(t,{slots:e}){const n=Xs(Cd(t)),{options:i}=Sn(Ma),r=ke(()=>({[Pd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Pd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e0(e.default(n));return t.custom?s:iu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),n0=t0;function i0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function r0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Un(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function Rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Pd=(t,e,n)=>t??e??n,s0=mn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Sn(Gl),r=ke(()=>t.route||i.value),s=Sn(yd,0),o=ke(()=>{let c=Dt(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ke(()=>r.value.matched[o.value]);Fo(yd,ke(()=>o.value+1)),Fo(Ux,a),Fo(Gl,r);const l=nt();return Ii(()=>[l.value,a.value,t.name],([c,u,d],[f,h,g])=>{u&&(u.instances[d]=c,h&&h!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Zr(u,h)||!f)&&(u.enterCallbacks[d]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Id(n.default,{Component:f,route:c});const h=d.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=iu(f,ut({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Id(n.default,{Component:m,route:c})||m}}});function Id(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const o0=s0;function a0(t){const e=jx(t.routes,t),n=t.parseQuery||Dx,i=t.stringifyQuery||bd,r=t.history,s=ds(),o=ds(),a=ds(),l=Xm(_i);let c=_i;kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Va.bind(null,F=>""+F),d=Va.bind(null,mx),f=Va.bind(null,ks);function h(F,oe){let ae,he;return pp(F)?(ae=e.getRecordMatcher(F),he=oe):he=F,e.addRoute(he,ae)}function g(F){const oe=e.getRecordMatcher(F);oe&&e.removeRoute(oe)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,oe){if(oe=ut({},oe||l.value),typeof F=="string"){const k=Ga(n,F,oe.path),q=e.resolve({path:k.path},oe),te=r.createHref(k.fullPath);return ut(k,q,{params:f(q.params),hash:ks(k.hash),redirectedFrom:void 0,href:te})}let ae;if(F.path!=null)ae=ut({},F,{path:Ga(n,F.path,oe.path).path});else{const k=ut({},F.params);for(const q in k)k[q]==null&&delete k[q];ae=ut({},F,{params:d(k)}),oe.params=d(oe.params)}const he=e.resolve(ae,oe),Te=F.hash||"";he.params=u(f(he.params));const A=xx(i,ut({},F,{hash:fx(Te),path:he.path})),x=r.createHref(A);return ut({fullPath:A,hash:Te,query:i===bd?Lx(F.query):F.query||{}},he,{redirectedFrom:void 0,href:x})}function w(F){return typeof F=="string"?Ga(n,F,l.value.path):ut({},F)}function S(F,oe){if(c!==F)return Jr(wt.NAVIGATION_CANCELLED,{from:oe,to:F})}function y(F){return I(F)}function L(F){return y(ut(w(F),{replace:!0}))}function U(F,oe){const ae=F.matched[F.matched.length-1];if(ae&&ae.redirect){const{redirect:he}=ae;let Te=typeof he=="function"?he(F,oe):he;return typeof Te=="string"&&(Te=Te.includes("?")||Te.includes("#")?Te=w(Te):{path:Te},Te.params={}),ut({query:F.query,hash:F.hash,params:Te.path!=null?{}:F.params},Te)}}function I(F,oe){const ae=c=p(F),he=l.value,Te=F.state,A=F.force,x=F.replace===!0,k=U(ae,he);if(k)return I(ut(w(k),{state:typeof k=="object"?ut({},Te,k.state):Te,force:A,replace:x}),oe||ae);const q=ae;q.redirectedFrom=oe;let te;return!A&&vx(i,he,ae)&&(te=Jr(wt.NAVIGATION_DUPLICATED,{to:q,from:he}),be(he,he,!0,!1)),(te?Promise.resolve(te):E(q,he)).catch(W=>Kn(W)?Kn(W,wt.NAVIGATION_GUARD_REDIRECT)?W:fe(W):N(W,q,he)).then(W=>{if(W){if(Kn(W,wt.NAVIGATION_GUARD_REDIRECT))return I(ut({replace:x},w(W.to),{state:typeof W.to=="object"?ut({},Te,W.to.state):Te,force:A}),oe||q)}else W=B(q,he,!0,x,Te);return D(q,he,W),W})}function R(F,oe){const ae=S(F,oe);return ae?Promise.reject(ae):Promise.resolve()}function b(F){const oe=We.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(F):F()}function E(F,oe){let ae;const[he,Te,A]=Nx(F,oe);ae=Xa(he.reverse(),"beforeRouteLeave",F,oe);for(const k of he)k.leaveGuards.forEach(q=>{ae.push(Ci(q,F,oe))});const x=R.bind(null,F,oe);return ae.push(x),de(ae).then(()=>{ae=[];for(const k of s.list())ae.push(Ci(k,F,oe));return ae.push(x),de(ae)}).then(()=>{ae=Xa(Te,"beforeRouteUpdate",F,oe);for(const k of Te)k.updateGuards.forEach(q=>{ae.push(Ci(q,F,oe))});return ae.push(x),de(ae)}).then(()=>{ae=[];for(const k of A)if(k.beforeEnter)if(Un(k.beforeEnter))for(const q of k.beforeEnter)ae.push(Ci(q,F,oe));else ae.push(Ci(k.beforeEnter,F,oe));return ae.push(x),de(ae)}).then(()=>(F.matched.forEach(k=>k.enterCallbacks={}),ae=Xa(A,"beforeRouteEnter",F,oe,b),ae.push(x),de(ae))).then(()=>{ae=[];for(const k of o.list())ae.push(Ci(k,F,oe));return ae.push(x),de(ae)}).catch(k=>Kn(k,wt.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function D(F,oe,ae){a.list().forEach(he=>b(()=>he(F,oe,ae)))}function B(F,oe,ae,he,Te){const A=S(F,oe);if(A)return A;const x=oe===_i,k=kr?history.state:{};ae&&(he||x?r.replace(F.fullPath,ut({scroll:x&&k&&k.scroll},Te)):r.push(F.fullPath,Te)),l.value=F,be(F,oe,ae,x),fe()}let H;function V(){H||(H=r.listen((F,oe,ae)=>{if(!ie.listening)return;const he=p(F),Te=U(he,ie.currentRoute.value);if(Te){I(ut(Te,{replace:!0,force:!0}),he).catch(Ps);return}c=he;const A=l.value;kr&&Ax(vd(A.fullPath,ae.delta),Sa()),E(he,A).catch(x=>Kn(x,wt.NAVIGATION_ABORTED|wt.NAVIGATION_CANCELLED)?x:Kn(x,wt.NAVIGATION_GUARD_REDIRECT)?(I(ut(w(x.to),{force:!0}),he).then(k=>{Kn(k,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&!ae.delta&&ae.type===Hl.pop&&r.go(-1,!1)}).catch(Ps),Promise.reject()):(ae.delta&&r.go(-ae.delta,!1),N(x,he,A))).then(x=>{x=x||B(he,A,!1),x&&(ae.delta&&!Kn(x,wt.NAVIGATION_CANCELLED)?r.go(-ae.delta,!1):ae.type===Hl.pop&&Kn(x,wt.NAVIGATION_ABORTED|wt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),D(he,A,x)}).catch(Ps)}))}let K=ds(),$=ds(),z;function N(F,oe,ae){fe(F);const he=$.list();return he.length?he.forEach(Te=>Te(F,oe,ae)):console.error(F),Promise.reject(F)}function re(){return z&&l.value!==_i?Promise.resolve():new Promise((F,oe)=>{K.add([F,oe])})}function fe(F){return z||(z=!F,V(),K.list().forEach(([oe,ae])=>F?ae(F):oe()),K.reset()),F}function be(F,oe,ae,he){const{scrollBehavior:Te}=t;if(!kr||!Te)return Promise.resolve();const A=!ae&&Cx(vd(F.fullPath,0))||(he||!ae)&&history.state&&history.state.scroll||null;return $c().then(()=>Te(F,oe,A)).then(x=>x&&wx(x)).catch(x=>N(x,F,oe))}const Me=F=>r.go(F);let Ke;const We=new Set,ie={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:y,replace:L,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:re,install(F){F.component("RouterLink",n0),F.component("RouterView",o0),F.config.globalProperties.$router=ie,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Dt(l)}),kr&&!Ke&&l.value===_i&&(Ke=!0,y(r.location).catch(he=>{}));const oe={};for(const he in _i)Object.defineProperty(oe,he,{get:()=>l.value[he],enumerable:!0});F.provide(Ma,ie),F.provide(ou,lh(oe)),F.provide(Gl,l);const ae=F.unmount;We.add(F),F.unmount=function(){We.delete(F),We.size<1&&(c=_i,H&&H(),H=null,l.value=_i,Ke=!1,z=!1),ae()}}};function de(F){return F.reduce((oe,ae)=>oe.then(()=>b(ae)),Promise.resolve())}return ie}function au(){return Sn(Ma)}function l0(t){return Sn(ou)}const qa="livefit.player";function c0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const vp=op("player",{state:()=>({name:""}),actions:{loadFromStorage(){const t=c0(localStorage.getItem(qa));t?.name&&(this.name=t.name)},setName(t){this.name=t.trim(),localStorage.setItem(qa,JSON.stringify({name:this.name}))},clear(){this.name="",localStorage.removeItem(qa)}}}),Je={bad:{type:"bad",chapterId:101,icon:"💀",title:"過勞",description:"壞結局 - 燃燒殆盡",color:"rose"},normal:{type:"normal",chapterId:102,icon:"🌑",title:"封印",description:"普通結局 - 穩健前行",color:"sky"},true:{type:"true",chapterId:103,icon:"🌟",title:"覺醒",description:"完美結局 - 破繭而出",color:"emerald"},hidden:{type:"hidden",chapterId:103,icon:"🔮",title:"傳承",description:"彩蛋結局 - 傳承之路",color:"amber"}};function Dd(t){return Je[t].chapterId}const Ld="livefit.progress",Ud={ending_bad:{icon:Je.bad.icon,title:Je.bad.title,description:Je.bad.description},ending_normal:{icon:Je.normal.icon,title:Je.normal.title,description:Je.normal.description},ending_true:{icon:Je.true.icon,title:Je.true.title,description:Je.true.description},ending_hidden:{icon:Je.hidden.icon,title:Je.hidden.title,description:Je.hidden.description}};function u0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const bp=op("progress",{state:()=>({currentChapter:1,chapterNodeIndices:{1:0},completedChapters:[],quizScores:{},hasDay7Item:!1,achievements:[]}),getters:{getNodeIndex:t=>e=>t.chapterNodeIndices[e]??0,chapter1NodeIndex:t=>t.chapterNodeIndices[1]??0,getQuizScore:t=>e=>t.quizScores[e]??null,endingScore:t=>{const e=[4,5,6,7,8,9,10],n=[];for(const i of e){const r=t.quizScores[i];r&&r.total>0&&n.push(r.correct/r.total*100)}return n.length===0?0:Math.round(n.reduce((i,r)=>i+r,0)/n.length)},hasAchievement:t=>e=>t.achievements.includes(e),allAchievements:t=>["ending_bad","ending_normal","ending_true","ending_hidden"].map(n=>({id:n,...Ud[n],unlocked:t.achievements.includes(n)})),unlockedCount:t=>t.achievements.length,totalAchievements:()=>Object.keys(Ud).length,isChapterCompleted:t=>e=>t.completedChapters.includes(e),endingType:t=>{const e=[4,5,6,7,8,9,10],n=[];for(const s of e){const o=t.quizScores[s];o&&o.total>0&&n.push(o.correct/o.total*100)}if(n.length===0)return"bad";const i=Math.round(n.reduce((s,o)=>s+o,0)/n.length);return n.every(s=>s===100)&&n.length===7&&t.hasDay7Item?"hidden":i===100?"true":i>=85?"normal":"bad"}},actions:{loadFromStorage(){const t=u0(localStorage.getItem(Ld));if(t){if(typeof t.currentChapter=="number"&&(this.currentChapter=t.currentChapter),t.chapterNodeIndices&&(this.chapterNodeIndices=t.chapterNodeIndices),t.quizScores){for(const e in t.quizScores){const n=t.quizScores[e];n&&typeof n.percentage!="number"&&(n.percentage=n.total>0?Math.round(n.correct/n.total*100):0)}this.quizScores=t.quizScores}if(typeof t.hasDay7Item=="boolean"&&(this.hasDay7Item=t.hasDay7Item),Array.isArray(t.achievements)&&(this.achievements=t.achievements),Array.isArray(t.completedChapters))this.completedChapters=t.completedChapters;else{this.completedChapters=[];for(let e=1;e<this.currentChapter&&e<=10;e++)this.completedChapters.push(e)}"chapter1NodeIndex"in t&&typeof t.chapter1NodeIndex=="number"&&(this.chapterNodeIndices[1]=t.chapter1NodeIndex)}},setNodeIndex(t,e){this.chapterNodeIndices[t]=e,this._save()},setChapter1NodeIndex(t){this.setNodeIndex(1,t)},setCurrentChapter(t){this.currentChapter=t,t in this.chapterNodeIndices||(this.chapterNodeIndices[t]=0),this._save()},completeChapter(t){if(this.completedChapters.includes(t)||this.completedChapters.push(t),t===4)for(const n of[1,2,3])this.completedChapters.includes(n)||this.completedChapters.push(n);const e=t+1;this.currentChapter=e,e in this.chapterNodeIndices||(this.chapterNodeIndices[e]=0),this._save()},saveQuizScore(t,e,n){const i=n>0?Math.round(e/n*100):0;this.quizScores[t]={correct:e,total:n,percentage:i},this._save()},setDay7Item(t){this.hasDay7Item=t,this._save()},unlockEndingAchievement(t){const n={bad:"ending_bad",normal:"ending_normal",true:"ending_true",hidden:"ending_hidden"}[t];this.achievements.includes(n)||(this.achievements.push(n),this._save())},reset(){this.currentChapter=1,this.chapterNodeIndices={1:0},this.completedChapters=[],this.quizScores={},this.hasDay7Item=!1,this._save()},resetAll(){this.currentChapter=1,this.chapterNodeIndices={1:0},this.completedChapters=[],this.quizScores={},this.hasDay7Item=!1,this.achievements=[],this._save()},_save(){localStorage.setItem(Ld,JSON.stringify({currentChapter:this.currentChapter,chapterNodeIndices:this.chapterNodeIndices,completedChapters:this.completedChapters,quizScores:this.quizScores,hasDay7Item:this.hasDay7Item,achievements:this.achievements}))}}}),d0=[{type:"dialogue",speaker:"海克絲",text:"早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/Pde0vddrRmCAwuTNgv6Hig?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我、我已經準備好要寫 Code 了！請問我現在該做什麼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"對了，我該怎麼稱呼你呢？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」
會員：「我想購買堂數方案，以便於取得堂數來報名喜歡的課程。」
教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」
管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。",scene:"normal",coachExpression:"normal",image:"/images/content/swimlane.png"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"(眼神變得銳利) 看完之後，就來接受我的考試吧。",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的入職測驗",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"q2",prompt:"海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？",options:[{id:"a",label:"它是用來檢查程式碼錯誤的除錯工具"},{id:"b",label:"它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪"},{id:"c",label:"它是最後的裝潢，決定系統好不好看"}],correctOptionId:"b",explanation:"海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。"},{id:"q3",prompt:"為什麼海克絲建議在寫程式之前要先畫「線稿圖」？",options:[{id:"a",label:"為了讓介面看起來很漂亮，吸引投資人"},{id:"b",label:"為了測試程式碼的效能是否足夠"},{id:"c",label:"為了在開發前與團隊有共識，確保大家想的畫面是一樣的"}],correctOptionId:"c",explanation:"線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。"},{id:"q4",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"},{id:"q5",prompt:"海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？",options:[{id:"a",label:"會提早完成工作，可以準時下班"},{id:"b",label:"會寫出很多 Bug，甚至做白工"},{id:"c",label:"電腦會因為運算過度而過熱"}],correctOptionId:"b",explanation:"海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。"},{id:"q6",prompt:"線稿圖通常不包含下列哪項元素？",options:[{id:"a",label:"頁面佈局與按鈕位置"},{id:"b",label:"完整的視覺設計與高解析度圖片"},{id:"c",label:"基本的操作流程與連結"}],correctOptionId:"b",explanation:"線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。"},{id:"q7",prompt:"在閱讀泳道圖時，每一條「跑道」通常代表什麼？",options:[{id:"a",label:"不同的時間點"},{id:"b",label:"不同的參與角色或系統"},{id:"c",label:"不同的資料庫欄位"}],correctOptionId:"b",explanation:"泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。"},{id:"q8",prompt:"根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？",options:[{id:"a",label:"在註冊頁面直接勾選「我是教練」即可"},{id:"b",label:"必須付費購買「教練資格方案」"},{id:"c",label:"需要由「管理員 (Admin)」在後台將其升級為教練"}],correctOptionId:"c",explanation:"根據使用者故事，管理員負責「把一般使用者升級為教練」。"},{id:"q9",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"q10",prompt:"關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？",options:[{id:"a",label:"教練可以隨意刪除學員的帳號"},{id:"b",label:"教練可以查看月營收統計，了解指定月份的營收與學員參與概況"},{id:"c",label:"教練不能修改自己開設課程的時間或人數上限"}],correctOptionId:"b",explanation:"根據教練的使用者故事，教練可以查看月營收統計。"},{id:"q11",prompt:"根據使用者故事，未登入的「訪客」無法執行下列哪項動作？",options:[{id:"a",label:"瀏覽目前可參加的課程"},{id:"b",label:"查看教練的詳細介紹與專長"},{id:"c",label:"報名課程"}],correctOptionId:"c",explanation:"訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。"},{id:"q12",prompt:"「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？",options:[{id:"a",label:"幫會員修改密碼與個人頭像"},{id:"b",label:"管理技能清單與堂數方案的設定"},{id:"c",label:"代替教練進行直播授課"}],correctOptionId:"b",explanation:"管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。"},{id:"q13",prompt:"會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？",options:[{id:"a",label:"只能修改姓名"},{id:"b",label:"可以修改姓名與 Email"},{id:"c",label:"可以修改姓名、Email 與已購買的堂數"}],correctOptionId:"a",explanation:"根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。"},{id:"q14",prompt:"如果教練想要讓學員更容易找到自己，他可以使用什麼功能？",options:[{id:"a",label:"購買首頁廣告"},{id:"b",label:"設定自己的專長技能"},{id:"c",label:"寄送垃圾郵件給所有會員"}],correctOptionId:"b",explanation:"教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。"},{id:"q15",prompt:"當會員想要調整行程時，關於「取消課程」的敘述何者正確？",options:[{id:"a",label:"只要取消就能退回現金"},{id:"b",label:"取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）"},{id:"c",label:"報名後絕對無法取消"}],correctOptionId:"b",explanation:"取消課程後會釋出名額，堂數會依照規則退還或調整。"},{id:"q16",prompt:"教練在「編輯課程」時，可以調整哪些資訊？",options:[{id:"a",label:"只能調整課程名稱"},{id:"b",label:"課程內容、時間、人數上限、會議連結"},{id:"c",label:"學員的個人資料"}],correctOptionId:"b",explanation:"教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。"},{id:"q17",prompt:"LiveFit 平台的核心營運模式是什麼？",options:[{id:"a",label:"線下健身房的門禁管理系統"},{id:"b",label:"線上直播小班制健身平台"},{id:"c",label:"預錄影片的隨選視訊服務"}],correctOptionId:"b",explanation:"LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。"},{id:"q18",prompt:"根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？",options:[{id:"a",label:"查看教練詳情"},{id:"b",label:"在訂單頁面查看我的堂數購買紀錄"},{id:"c",label:"修改個人資料"}],correctOptionId:"b",explanation:"會員可以透過「訂單頁面」來查看過去的堂數購買紀錄。"},{id:"q19",prompt:"當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？",options:[{id:"a",label:"在課程管理查看"},{id:"b",label:"月營收統計"},{id:"c",label:"技能清單"}],correctOptionId:"a",explanation:"教練透過「課程管理」可以查看課程狀態與報名人數。"},{id:"q20",prompt:"若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？",options:[{id:"a",label:"資深教練"},{id:"b",label:"系統管理員 (Admin)"},{id:"c",label:"任何註冊會員"}],correctOptionId:"b",explanation:"管理員負責管理堂數方案，包括新增、修改方案設定。"}]},{type:"dialogue",speaker:"海克絲",text:"很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天就先到這裡吧。回家好好休息，別熬夜。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第一天：報到日",scene:"normal",coachExpression:"normal"}],f0={id:1,title:"第一天：報到日",nodes:d0},h0=[{type:"dialogue",speaker:"海克絲",text:"早安！看起來精神不錯嘛，昨天有好好休息吧？",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/1H8XMmxXSXOGmvL2L70pwQ?view",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"很好，有這個態度我就放心了。今天我們要正式進入開發環境了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"太好了！我已經準備好要寫程式了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 別急，在你動手寫任何一行程式之前，你得先學會一件事——如何把程式碼「拿到手」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"拿到手？不就是下載嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發的世界裡，我們用的是 Git 和 GitHub。這是每個工程師的必備技能。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"先來認識 Git 吧。Git 是一個「版本控制系統」，就像是程式碼的時光機。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"版本控制？像是報告_v1、報告_v2、報告_最終版那樣嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！Git 就是幫你自動管理這些版本，而且更聰明、更有條理。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 可以記錄每一次的修改歷史、讓你隨時回到過去的版本、也能讓多人同時協作開發。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"說再多不如動手做！來，海姐帶你進互動實驗室，親手體驗一下 Git 的魔力。",scene:"meeting",coachExpression:"praise"},{type:"interactiveSlide",slideId:"git-intro",title:"Git 互動實驗室",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 Git 是這樣運作的，我懂了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 不錯嘛，有了這個基礎，接下來的概念對你來說就是小菜一碟了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那 GitHub 呢？它是一個「程式碼託管平台」，你可以把它想成程式碼的雲端硬碟。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以 Git 是工具，GitHub 是平台？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Git 裝在你的電腦上負責版本控制，GitHub 在網路上負責儲存和分享程式碼。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"接下來要介紹一個重要的操作：Clone。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Clone（克隆）就是把 GitHub 上的專案「下載到你的電腦」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"就像把雲端上的檔案抓到本地嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Clone 之後，你的電腦裡就會有一份完整的專案程式碼，可以開始修改和開發。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，現在讓我把 LiveFit 的專案連結給你⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等等，這⋯⋯什麼？！",scene:"meeting",coachExpression:"shocked"},{type:"dialogue",speaker:"海克絲",text:"這個專案竟然是 Public 的？！",scene:"meeting",coachExpression:"shocked",image:"/images/content/private-git.png"},{type:"dialogue",speaker:"你",text:"Public？那是什麼意思？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"Public 就是「公開」的意思。全世界任何人都可以看到這個專案的程式碼！",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"後端專案通常會設成 Private（私人），因為裡面可能有資料庫連線、API 金鑰等敏感資訊⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"前任後端⋯⋯竟然把專案完全公開在網路上⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"這樣很危險嗎？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"非常危險！如果程式碼有漏洞，駭客就能直接研究怎麼攻擊我們的系統。",scene:"meeting",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 算了，這就是我們接手的現況。之後記得幫我把敏感資訊處理好。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"現在先專心把專案抓下來吧，其他的之後再處理。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"好，理論講完了。來接受我的小考吧！",scene:"meeting",coachExpression:"normal"},{type:"quiz",title:"Git 與 GitHub 小考",scene:"meeting",coachExpression:"praise",questions:[{id:"g1",prompt:"Git 是什麼類型的工具？",options:[{id:"a",label:"版本控制系統"},{id:"b",label:"程式編輯器"},{id:"c",label:"雲端儲存平台"}],correctOptionId:"a",explanation:"Git 是一個版本控制系統，用來追蹤程式碼的修改歷史。"},{id:"g2",prompt:"GitHub 與 Git 的關係是什麼？",options:[{id:"a",label:"GitHub 是 Git 的付費版本"},{id:"b",label:"Git 是版本控制工具，GitHub 是託管平台"},{id:"c",label:"Git 和 GitHub 是同一個東西的不同名稱"}],correctOptionId:"b",explanation:"Git 是安裝在電腦上的版本控制工具，GitHub 是在網路上的程式碼託管平台。"},{id:"g3",prompt:"Clone 的作用是什麼？",options:[{id:"a",label:"把 GitHub 上的專案下載到本地電腦"},{id:"b",label:"把專案上傳到 GitHub"},{id:"c",label:"建立新的分支"}],correctOptionId:"a",explanation:"Clone 是把 GitHub 上的專案下載到你的本地電腦。"},{id:"g4",prompt:"Git 可以做到以下哪件事？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"記錄每一次的修改歷史，讓你可以回到過去的版本"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Git 可以記錄每一次的修改歷史，讓你隨時回到過去的版本。"},{id:"g5",prompt:"GitHub 上的 Public 專案代表什麼？",options:[{id:"a",label:"只有團隊成員可以看到"},{id:"b",label:"任何人都可以看到這個專案的程式碼"},{id:"c",label:"專案已經被刪除"}],correctOptionId:"b",explanation:"Public（公開）代表任何人都可以在網路上看到這個專案的程式碼。"},{id:"g6",prompt:"為什麼後端專案通常會設成 Private？",options:[{id:"a",label:"因為程式碼很醜不想被看到"},{id:"b",label:"避免程式碼漏洞被駭客研究、找到攻擊方式"},{id:"c",label:"因為 GitHub 強制要求"}],correctOptionId:"b",explanation:"後端專案設成 Private 可以避免程式碼被公開，減少駭客研究漏洞、找到攻擊方式的風險。"},{id:"g7",prompt:"Clone 完成後，專案會出現在哪裡？",options:[{id:"a",label:"你的 GitHub 帳號上"},{id:"b",label:"你的本機電腦上"},{id:"c",label:"雲端伺服器上"}],correctOptionId:"b",explanation:"Clone 會把專案下載到你的本機電腦上，讓你可以開始開發。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！看來你已經掌握 Git 和 GitHub 的基本概念了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 和 GitHub 是工程師的基本功，就像廚師要會用刀一樣。用久了就會變成直覺。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我會好好練習的！那接下來呢？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天先把專案拿到手，明天我們再來把它跑起來！記得好好休息。",scene:"meeting",coachExpression:"normal"},{type:"celebration",chapterTitle:"第二天：把程式碼拿到手",scene:"meeting",coachExpression:"normal"}],p0={id:2,title:"第二天：把程式碼拿到手",nodes:h0},m0=[{type:"dialogue",speaker:"海克絲",text:"早安！今天有個緊急狀況要跟你說。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/PvcRJaaVSpqf4nyGfdg9Ag?view",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"怎麼了？發生什麼事？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我的合夥人剛傳訊息來，說她這週想看看專案目前的進度。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"她不是工程師，但很在意產品能不能「跑起來」給她看。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"所以⋯⋯我們要把專案跑起來給她看？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！但在那之前，我想先考考你⋯⋯",scene:"sport",coachExpression:"normal"},{type:"choice",prompt:"你猜猜看，一個後端工程師剛進入新公司，最常見要做的第一件事是什麼？",options:[{id:"a",label:"馬上開始寫新功能",response:"(捧腹大笑) 哈哈哈！太急了！你連專案長什麼樣子都不知道，怎麼寫新功能呢？",responseExpression:"biglaugh",isCorrect:!1},{id:"b",label:"把專案 Clone 下來，跑在自己的電腦上",response:"答對了！這才是正確的第一步。你得先把專案跑起來，才能開始理解它、修改它。",responseExpression:"praise",isCorrect:!0},{id:"c",label:"直接看程式碼找 Bug",response:"(忍不住笑出來) 哈哈，想法不錯，但你連專案都還沒跑起來，怎麼知道哪裡有 Bug？先讓它動起來才是王道。",responseExpression:"biglaugh",isCorrect:!1},{id:"d",label:"先去跟同事聊天認識環境",response:"(噗哧一笑) 社交很重要沒錯！但工程師的第一要務還是要先把開發環境搞定，才能真正開始工作啊。",responseExpression:"biglaugh",isCorrect:!1}],scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，既然要把專案跑起來，你得先搞懂這個專案到底是怎麼組成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"一個完整的系統通常有三大部分：前端、後端、還有資料庫。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"前端？後端？這三個有什麼不同？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用電商網站來比喻。前端就像是網頁商城的頁面，商品展示、購物車、結帳畫面，是使用者看得到的部分。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"後端就像是訂單處理中心，使用者看不到，但所有的訂單處理、庫存檢查、付款驗證都是在這裡完成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"資料庫就像是商品倉庫，存放所有的會員資料、訂單紀錄、商品庫存。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此！所以前端負責畫面，後端負責處理邏輯，資料庫負責存資料？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！你理解得很快嘛。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"來，我用互動的方式讓你更清楚這三層架構是怎麼運作的！",scene:"sport",coachExpression:"normal"},{type:"interactiveSlide",slideId:"architecture-intro",title:"系統架構入門",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在對前端、後端、資料庫的分工應該很清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"我們的 LiveFit 專案呢，前端用 Vue.js 寫的，後端是 Node.js，資料庫用 PostgreSQL。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"這麼多東西，要怎麼在我的電腦上跑起來？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好問題！這就要講到一個神奇的工具——Docker。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發中，最常見的問題就是：「在我的電腦上可以跑啊！為什麼換一台電腦就壞掉了？」",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"聽起來很麻煩⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Docker 就是來解決這個問題的！它可以把整個執行環境打包成一個「容器」。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"想像你要搬家，與其把東西一件一件搬，不如把整個房間打包成一個貨櫃。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"不管搬到哪裡，打開貨櫃就是一模一樣的環境！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"哦！所以 Docker 就像是幫程式打包好的貨櫃？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！而且前任後端雖然把專案搞得一團糟，但至少有一件事做對了⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他用 Docker 把整個環境打包好了。只要你安裝 Docker，一個指令就能把三個服務全部跑起來！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"三個服務？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對，前端、後端、資料庫，各自跑在一個容器裡，但可以互相溝通。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"來，我帶你用互動的方式理解 Docker 的運作原理！",scene:"sport",coachExpression:"praise"},{type:"interactiveSlide",slideId:"docker-intro",title:"Docker 互動實驗室",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在應該對 Docker 和容器的概念更清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我很久以前就想問了⋯⋯海姐，你不是健身房老闆嗎？為什麼感覺懂得比我還多？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 哈，終於問了啊。",scene:"sport",coachExpression:"blush"},{type:"dialogue",speaker:"海克絲",text:"其實我以前是工程師，還當過全端技術主管呢。寫了快十年的 Code。",scene:"sport",coachExpression:"proud"},{type:"dialogue",speaker:"你",text:"什麼！？那為什麼會轉行開健身房？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實我以前重訓也當過瑜伽老師，後來想說來挑戰看看，把兩個專業結合起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"工程師的經驗讓我知道怎麼設計系統，健身教練的經驗讓我知道怎麼照顧人。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"所以就開了這間健身房，想做一個真正能幫助人的運動媒合平台。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來是這樣⋯⋯難怪你講這些技術東西這麼順。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕笑) 所以啊，你要是敢給我爆肝加班，我可是會直接把你從電腦前拖走的喔。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"好、好的！我會注意的⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，基本概念講完了。來驗收一下你學到了多少！",scene:"sport",coachExpression:"normal"},{type:"quiz",title:"前後端與 Docker 小考",scene:"sport",coachExpression:"praise",questions:[{id:"d1",prompt:"前端的主要職責是什麼？",options:[{id:"a",label:"使用者看到的畫面，負責互動與呈現"},{id:"b",label:"處理商業邏輯和資料運算"},{id:"c",label:"儲存所有的資料"}],correctOptionId:"a",explanation:"前端負責使用者看到的畫面，處理互動與呈現。"},{id:"d2",prompt:"後端的主要職責是什麼？",options:[{id:"a",label:"設計漂亮的使用者介面"},{id:"b",label:"處理商業邏輯，決定要做什麼、怎麼做"},{id:"c",label:"備份資料到雲端"}],correctOptionId:"b",explanation:"後端負責處理商業邏輯，是系統的大腦。"},{id:"d3",prompt:"資料庫的主要職責是什麼？",options:[{id:"a",label:"執行程式碼"},{id:"b",label:"顯示網頁"},{id:"c",label:"儲存所有資料（會員、訂單、商品等）"}],correctOptionId:"c",explanation:"資料庫負責儲存所有資料，像是倉庫一樣。"},{id:"d4",prompt:"使用者點擊「購買課程」後，系統的處理順序是什麼？",options:[{id:"a",label:"前端 → 後端 → 資料庫 → 後端 → 前端"},{id:"b",label:"資料庫 → 後端 → 前端"},{id:"c",label:"前端 → 資料庫 → 後端"}],correctOptionId:"a",explanation:"使用者操作前端，前端向後端發請求，後端存取資料庫，再回傳結果給前端顯示。"},{id:"d5",prompt:"Docker 主要解決什麼問題？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"解決「在我的電腦可以跑，換台電腦就壞掉」的環境問題"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Docker 把執行環境打包起來，讓程式在任何電腦上都能用同樣的方式運行。"},{id:"d6",prompt:"Container（容器）是什麼？",options:[{id:"a",label:"一種程式語言"},{id:"b",label:"Docker 打包出來的執行環境，像是一個貨櫃"},{id:"c",label:"用來存放檔案的資料夾"}],correctOptionId:"b",explanation:"Container 就是 Docker 打包出來的「貨櫃」，裡面包含程式碼和執行環境。"},{id:"d7",prompt:"為什麼這個專案要用 Docker？",options:[{id:"a",label:"因為程式碼太大，需要壓縮"},{id:"b",label:"因為要確保每個人的開發環境一致，避免「在我電腦可以跑」的問題"},{id:"c",label:"因為 Docker 是免費的"}],correctOptionId:"b",explanation:"Docker 把執行環境打包成容器，讓專案在任何電腦上都能用同樣的方式運行，同時也方便管理多個服務。"},{id:"d8",prompt:"LiveFit 專案啟動後會有幾個 Container？",options:[{id:"a",label:"1 個"},{id:"b",label:"2 個"},{id:"c",label:"3 個（前端、後端、資料庫）"}],correctOptionId:"c",explanation:"LiveFit 有三個服務：前端、後端、資料庫，各自跑在一個容器裡。"},{id:"d9",prompt:"前端服務跑在哪個 Port？",options:[{id:"a",label:"localhost:3000"},{id:"b",label:"localhost:8080"},{id:"c",label:"localhost:5432"}],correctOptionId:"a",explanation:"前端服務跑在 Port 3000。"},{id:"d10",prompt:"如何確認後端服務是否正常運作？",options:[{id:"a",label:"打開 localhost:3000 看 CSS 樣式是否正確"},{id:"b",label:"打開 localhost:8080/healthcheck 看是否回傳 OK"},{id:"c",label:"重新啟動電腦"}],correctOptionId:"b",explanation:"後端服務跑在 Port 8080，可以用 /healthcheck 端點確認是否正常。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握前後端和 Docker 的基本概念了。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那接下來就交給你嘍！",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"好的！我會照著教學把 Docker 裝好，然後把專案跑起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"記得截圖給我看喔！這樣我才能跟合夥人報告進度。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"加油，今天結束後你就能親眼看到 LiveFit 在你電腦上運作了！",scene:"sport",coachExpression:"praise"},{type:"celebration",chapterTitle:"第三天：把專案跑起來",scene:"sport",coachExpression:"normal"}],g0={id:3,title:"第三天：把專案跑起來",nodes:m0},_0=[{type:"dialogue",speaker:"海克絲",text:"糟糕！我跟合夥人昨天看網站的時候發現，Logo 忘了改掉！",scene:"meeting",coachExpression:"shocked"},{type:"dialogue",speaker:"旁白",text:"今日任務文件：https://hackmd.io/YAjRRYJhSMqm_eRp0gnHJQ?view",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"忘了改？怎麼說？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你看，現在網站上的 Logo 是「LiveFit+」，但我們目前應該要用「LiveFit」才對。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「+」有什麼差別嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個「+」是要留給之後用的。我們才剛起步，現在應該先叫 LiveFit 就好。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等之後平台做起來了、會員變多了、功能更完整了，再升級成 LiveFit+。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個「+」代表的是進化版，就像 iPhone 變成 iPhone Plus 一樣。現在就用掉，以後要升級就沒梗了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！所以要把「+」先拿掉，等 2.0 再加回來？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！設計師已經做好正確的 Logo 了，檔名是 logo-text-v2.png，你幫我換上去。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕上的 Logo) 話說，如果我現在要你改這個 Logo，你知道要去哪裡找檔案嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"呃⋯⋯這個專案資料夾這麼多層，Logo 到底放在哪？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 別急，改東西之前，要先搞懂專案的資料夾結構。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Logo 這種圖片屬於「靜態資源」，不會隨著使用者操作而變動的東西，通常會放在 public/ 資料夾裡。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"等等，什麼是「靜態資源」？那有「動態」的嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的微笑) 問得好！這個觀念很重要，搞懂之後你才知道要去哪裡改東西。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"來，我先說一個災難故事給你聽⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你知道前任後端工程師是怎麼處理教練列表的嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"不知道⋯⋯怎麼做的？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他把所有教練的資料都「寫死」在前端程式碼裡。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"什麼王小明、李小華、50 個教練的名字、照片、專長⋯⋯全部直接寫在 HTML 裡面。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"這樣有什麼問題嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問題可大了！有一天我打電話給他說：「王小明教練離職了，幫我從網站上移除。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他說好，然後打開程式碼，找到那段 HTML，刪掉。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我又說：「對了，李小華要改名叫李大華，順便更新他的照片。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他說好⋯⋯繼續改程式碼。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我又說：「還有，我們新簽了 10 個教練，資料 Email 給你了。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"然後他就崩潰了。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"(冒冷汗) 我好像知道問題在哪了⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！每次教練資料變動，都要改程式碼、重新部署網站。萬一改錯，網站就爆炸了。",scene:"meeting",coachExpression:"normal"},{type:"choice",prompt:"你覺得教練資料應該放在哪裡比較好？",options:[{id:"a",label:"繼續寫死在 HTML 裡",response:"(搖頭) 這樣每次資料變動都要改程式碼，太沒效率了，而且容易出錯。",responseExpression:"sigh",isCorrect:!1},{id:"b",label:"放在資料庫，透過 API 取得",response:"(拍手) 答對了！把資料存在資料庫，需要的時候透過 API 取得，這樣改資料就不用動到程式碼了。",responseExpression:"praise",isCorrect:!0},{id:"c",label:"寫在 CSS 檔案裡",response:"(忍不住笑) CSS 是用來設定樣式的，不是存資料的地方啦！",responseExpression:"biglaugh",isCorrect:!1},{id:"d",label:"放在 public/ 資料夾",response:"public/ 資料夾是放「靜態資源」的，像是圖片、Logo。教練資料會經常變動，不適合放這裡。",responseExpression:"normal",isCorrect:!1}],scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你剛剛提到的「靜態」和「動態」，這是很重要的觀念。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用簡報解釋給你聽。",scene:"meeting",coachExpression:"normal"},{type:"interactiveSlide",slideId:"static-dynamic",title:"靜態 vs 動態 互動實驗室",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在知道靜態和動態的差別了吧！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！Logo 是靜態的，去 public/ 找；教練資料是動態的，要去資料庫改。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 完全正確！你學得很快嘛。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"等等，那像是教練自己要新增課程的話呢？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"教練登入自己帳號，就可以用介面新增課程，不用勞煩工程師改程式碼嘍？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的微笑) 沒錯！這就是動態資料的好處。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"讓我透過示範給你看，教練是怎麼透過網頁新增課程的。",scene:"meeting",coachExpression:"normal"},{type:"interactiveSlide",slideId:"coach-backend",title:"教練後台：新增課程流程",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到了嗎？教練自己操作介面，資料就存進資料庫了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"使用者刷新網頁，就能看到最新的課程列表。完全不需要工程師介入！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！這就是為什麼動態資料要存在資料庫的原因。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那我再考考你幾個問題，確認你真的懂了。",scene:"meeting",coachExpression:"normal"},{type:"quiz",title:"靜態資源 vs 動態資料 小考",scene:"meeting",coachExpression:"praise",questions:[{id:"q1",prompt:"如果把所有教練資料「寫死」在前端程式碼裡，會發生什麼問題？",options:[{id:"a",label:"網站跑得比較快"},{id:"b",label:"每次教練資料變動都要改程式碼並重新部署"},{id:"c",label:"教練可以自己修改資料"}],correctOptionId:"b",explanation:"寫死的資料每次變動都需要改程式碼並重新部署，非常沒效率，而且容易出錯。"},{id:"q2",prompt:"為什麼教練資料不適合當作「靜態資源」？",options:[{id:"a",label:"因為教練資料太大"},{id:"b",label:"因為教練資料會經常變動（新增、修改、刪除）"},{id:"c",label:"因為靜態資源比較貴"}],correctOptionId:"b",explanation:"教練會離職、新進、改名、換照片，資料經常變動，所以應該存在資料庫。"},{id:"q3",prompt:"以下哪個屬於「靜態資源」？",options:[{id:"a",label:"會員的個人資料"},{id:"b",label:"網站的 Logo 圖片"},{id:"c",label:"課程的預約紀錄"}],correctOptionId:"b",explanation:"Logo 幾乎不會變動，屬於靜態資源。會員資料和預約紀錄會經常變動，是動態資料。"},{id:"q4",prompt:"以下哪個屬於「動態資料」？",options:[{id:"a",label:"網站的背景圖片"},{id:"b",label:"網站的 favicon 小圖示"},{id:"c",label:"教練列表"}],correctOptionId:"c",explanation:"教練列表會隨著教練新增或離職而變動，是動態資料，應該存在資料庫。"},{id:"q5",prompt:"靜態資源通常放在專案的哪個資料夾？",options:[{id:"a",label:"src/pages/"},{id:"b",label:"public/ 或 src/assets/"},{id:"c",label:"node_modules/"}],correctOptionId:"b",explanation:"靜態資源通常放在 public/（不會被編譯）或 src/assets/（會被編譯處理）。"},{id:"q6",prompt:"在 LiveFit 專案中，Logo 圖片放在哪裡？",options:[{id:"a",label:"frontend/src/components/"},{id:"b",label:"frontend/public/"},{id:"c",label:"backend/images/"}],correctOptionId:"b",explanation:"Logo 是靜態資源，放在 frontend/public/ 資料夾。"},{id:"q7",prompt:"如果要修改網站使用的 Logo，除了換圖片檔案，還需要改什麼？",options:[{id:"a",label:"只要換圖片就好，不用改其他東西"},{id:"b",label:"找到引用這張圖片的程式碼，改成新的檔名"},{id:"c",label:"重新安裝整個專案"}],correctOptionId:"b",explanation:"換圖片後，要開啟 LayoutHeader.vue 檔案，找到引用圖片的程式碼，把圖片檔名換成新的。"},{id:"q8",prompt:"用 LiveFit 來比喻，「Logo」和「教練列表」分別對應什麼？",options:[{id:"a",label:"Logo = 動態資料，教練列表 = 靜態資源"},{id:"b",label:"Logo = 靜態資源，教練列表 = 動態資料"},{id:"c",label:"兩個都是靜態資源"}],correctOptionId:"b",explanation:"Logo 很少換（靜態資源），教練列表隨時可能變動（動態資料）。"},{id:"q9",prompt:"動態資料的正確處理方式是？",options:[{id:"a",label:"直接寫死在 HTML 裡面"},{id:"b",label:"存在資料庫，前端透過 API 取得"},{id:"c",label:"放在 public/ 資料夾"}],correctOptionId:"b",explanation:"動態資料應該存在資料庫，前端透過 API 請求後端，後端從資料庫取得資料再回傳。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握靜態和動態的觀念了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那現在你應該知道怎麼換 Logo 了吧？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"知道了！去 frontend/public/ 找到圖片，然後去 LayoutHeader.vue 把檔名改成新的。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，設計師做好的新 Logo 在這裡，你先下載下來。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"這是新版 Logo（logo-text-v2.png），請在圖片上按右鍵 → 另存圖片",scene:"meeting",coachExpression:"normal",image:"/images/logo-text-v2.png",showSaveHint:!0},{type:"dialogue",speaker:"海克絲",text:"下載好之後，把這張圖片放到 frontend/public/ 資料夾裡面。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"然後打開 LayoutHeader.vue，把 Logo 的檔名從 logo-text.png 改成 logo-text-v2.png。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"了解！我這就去換 Logo。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"記得換完之後重新整理網頁，確認 Logo 有更新。如果沒變，可能是瀏覽器快取，按 Ctrl+F5 強制重新整理試試（Mac 是按 Cmd+R）。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對了，以後遇到要改東西，先問自己：這個東西會經常變動嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"會經常變動的，去資料庫改；不會變動的，去檔案改。搞清楚這點，找東西就快多了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那接下來就拜託你嘍！加油！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，考你一個業界小知識。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"假設你是新人工程師，到職第一天主管跟你說：「幫我改個 Logo，應該很快吧？」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在大型公司的複雜專案中，你覺得實際上可能要多久？",scene:"meeting",coachExpression:"normal"},{type:"choice",prompt:"改個 Logo 實際上要多久？",scene:"meeting",coachExpression:"normal",options:[{id:"a",label:"5 分鐘，不就換張圖嗎",response:"(搖頭) 那是主管心裡想的時間啦！實際上新人要面對的可多了⋯⋯",responseExpression:"normal",isCorrect:!1},{id:"b",label:"1～2 小時，找一下檔案而已",response:"(搖頭) 太樂觀了！那是在小專案或你已經很熟的情況。大型專案可沒這麼簡單⋯⋯",responseExpression:"normal",isCorrect:!1},{id:"c",label:"3～5 天，甚至更久",response:"(點頭) 沒錯！你很有業界 sense。主管心裡想「不就換張圖？」但新人實際上要面對的可多了⋯⋯",responseExpression:"praise",isCorrect:!0}]},{type:"dialogue",speaker:"海克絲",text:`搞懂專案架構 1～2 小時
等權限開通 1 天
問同事圖片放哪結果他在開會等半天
本地環境跑不起來找 DevOps 等半天
發 PR 等 Code Review 數小時到隔天
CI/CD 跑失敗查原因 1～2 小時
部署測試環境 PM 要驗收等半天
上 Production 發現 CDN 快取是舊的再等 1 小時
⋯⋯加一加，就是 3～5 天了！`,scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"所以先搞懂專案結構真的很重要，懂了之後才能越來越快。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我知道了！那我現在就去把 Logo 換掉。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，交給你嘍！加油！",scene:"meeting",coachExpression:"praise"},{type:"celebration",chapterTitle:"第四天：改一個 Logo 而已",scene:"meeting",coachExpression:"praise"}],x0={id:4,title:"第四天：改一個 Logo 而已",nodes:_0},v0=[{type:"dialogue",speaker:"旁白",text:"今日任務文件：https://hackmd.io/D_v5KoZWR3Kg3Et2MWJHOg?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你盯著 LiveFit 的教練列表頁面，看著一個個教練的照片和資料...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"海克絲，我有個問題。這頁面上的教練資料，是從哪裡來的？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"難道是寫死在網頁裡面嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(搖頭) 當然不是囉！你昨天不是才學過，會經常變動的資料要存在資料庫嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"對對對，我記得！但是...資料庫的資料要怎麼跑到網頁上？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 好問題！這些資料是從網路上「要」來的。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"從網路上要來的？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對！你平常輸入一個網址，知道背後發生什麼事嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"呃...網頁就跑出來了？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 那是你看到的結果。讓我告訴你背後發生了什麼事...",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"drag-sort",title:"資料流填空挑戰",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？原來輸入網址背後有這麼多事情在發生吧！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！所以不是魔法，是有一整套流程在跑。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個名字就叫做「網路請求」，接下來我們來看簡報吧！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"network-request",title:"什麼是網路請求？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"喔～所以這就叫「網路請求」！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來我每天上網都在發網路請求，只是不知道而已。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 沒錯！打開 Google、看 YouTube、滑 IG...通通都是網路請求。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"那這跟 API 有什麼關係？我一直聽到 API 這個詞...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！API 就是一種網路請求，差別只在於「回傳什麼」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用簡報解釋給你看...",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"api-intro",title:"什麼是 API？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來 API 就是這樣！一般網址回傳網頁給人看，API 回傳資料給程式用。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！你抓到重點了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"所以回到你一開始的問題——教練資料從哪來？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我知道了！前端發網路請求到 API，API 回傳教練資料，前端再把資料顯示出來！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) Bingo！接下來讓我們透過互動示範，看看 LiveFit 的 API 實際運作方式吧！",scene:"normal",coachExpression:"praise"},{type:"interactiveSlide",slideId:"api-demo",title:"LiveFit API 互動操作",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來每個功能背後都對應一個 API！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 沒錯！你剛剛親手操作的每一個動作，都是在呼叫不同的 API。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"對了海克絲，LiveFit 總共有幾個 API 啊？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出得意的微笑) LiveFit 目前設計了超過 30 個 API 喔！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"30 個！？這麼多？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對啊！你想想看，光是使用者就有：註冊、登入、登出、取得個人資料、修改個人資料...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"教練有：取得教練列表、取得單一教練、新增課程、修改課程、刪除課程...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"課程有：取得課程列表、預約課程、取消預約、查看預約紀錄...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"每個功能背後都是一個 API。學會 API，你就能自己串接各種服務了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"等等，所以後端工程師的工作就是開發 API 去連接自己的資料庫嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(搖搖頭) 不只喔！這只是其中一部分。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那以後我要去接別人的金流服務、第三方登入，他們是不是也像這樣子的方式來接資料呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(眼睛一亮) 你問到重點了！沒錯，原理完全一樣！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"不管是金流、第三方登入、簡訊通知、雲端儲存...這些服務都有提供 API。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"後端工程師很大一部分的工作，就是整合這些第三方服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以不是單純做自己的服務，更多是要把各種服務「串」起來？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) Exactly！讓我用簡報來解釋這個概念。",scene:"normal",coachExpression:"praise"},{type:"interactiveSlide",slideId:"third-party",title:"整合第三方服務",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來後端工程師像是「中央調度站」，要整合這麼多服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對！所以學會 API 非常重要，因為幾乎所有服務都是透過 API 來串接的。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我懂了！學會 API，就能接金流、接登入、接各種服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(欣慰地笑) 沒錯！這就是後端工程師的核心技能之一。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(壓低聲音) 對了，跟你說個秘密...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"什麼秘密？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實 LiveFit 的金流功能...目前還沒做好。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"蛤？！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 前一任後端工程師離職前沒時間做完，所以金流那塊一直是空的。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"等你把基本功都學會、功能測試都正常之後...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(看著你) 就要請你來開發金流串接囉！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"(緊張) 我...我可以嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍拍你的肩) 放心，到時候你已經準備好了。現在先把基礎打好！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，最後讓我用選擇題考考你！",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"API 與網路請求小考",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"當你在瀏覽器輸入網址按下 Enter，第一步會發生什麼事？",options:[{id:"a",label:"網頁直接出現"},{id:"b",label:"電腦透過網路去找伺服器"},{id:"c",label:"資料庫開始查詢資料"}],correctOptionId:"b",explanation:"輸入網址後，電腦會先透過網路找到伺服器，發送請求，等伺服器回傳內容後，網頁才會顯示。"},{id:"q2",prompt:"「網路請求」指的是什麼？",options:[{id:"a",label:"在網路上搜尋東西"},{id:"b",label:"電腦和伺服器之間「一來一往」的溝通過程"},{id:"c",label:"申請網路服務"}],correctOptionId:"b",explanation:"網路請求是你的電腦發送 Request 給伺服器，伺服器回傳 Response 的過程。"},{id:"q3",prompt:"一般網址和 API 的差別是什麼？",options:[{id:"a",label:"一般網址回傳 HTML 網頁，API 回傳 JSON 資料"},{id:"b",label:"一般網址比較慢，API 比較快"},{id:"c",label:"一般網址免費，API 要付費"}],correctOptionId:"a",explanation:"一般網址回傳 HTML（給人看的網頁），API 回傳 JSON（給程式用的資料）。"},{id:"q4",prompt:"為什麼教練資料要透過 API 取得，而不是寫死在網頁裡？",options:[{id:"a",label:"因為寫死比較慢"},{id:"b",label:"因為教練資料會變動，透過 API 可以取得最新資料"},{id:"c",label:"因為 API 比較便宜"}],correctOptionId:"b",explanation:"教練可能會新增、離職、改資料，透過 API 從資料庫取得，才能確保資料是最新的。"},{id:"q5",prompt:"API 的全名是什麼？",options:[{id:"a",label:"Application Programming Interface（應用程式介面）"},{id:"b",label:"Advanced Program Integration"},{id:"c",label:"Auto Page Import"}],correctOptionId:"a",explanation:"API 是 Application Programming Interface 的縮寫，意思是「應用程式介面」。"},{id:"q6",prompt:"當使用者在網站上購買課程，後端需要做什麼？",options:[{id:"a",label:"直接把錢存到公司帳戶"},{id:"b",label:"呼叫金流 API，讓第三方服務處理付款"},{id:"c",label:"自己寫程式處理信用卡資訊"}],correctOptionId:"b",explanation:"後端工程師透過呼叫金流 API（如綠界、藍新）來處理付款，不需要自己處理敏感的信用卡資訊。"},{id:"q7",prompt:"後端工程師的工作主要是什麼？",options:[{id:"a",label:"只負責連接自己的資料庫"},{id:"b",label:"開發 API 並整合各種第三方服務"},{id:"c",label:"設計網頁的畫面"}],correctOptionId:"b",explanation:"後端工程師除了連接自己的資料庫，更多工作是整合金流、登入、通知等第三方服務的 API。"},{id:"q8",prompt:"以下哪些是常見的第三方服務？",options:[{id:"a",label:"金流、第三方登入、雲端儲存"},{id:"b",label:"HTML、CSS、JavaScript"},{id:"c",label:"滑鼠、鍵盤、螢幕"}],correctOptionId:"a",explanation:"金流（綠界、LINE Pay）、第三方登入（Google、Facebook）、雲端儲存（AWS S3）都是常見的第三方服務。"},{id:"q9",prompt:"在完整的資料流中，順序是什麼？",options:[{id:"a",label:"資料庫 → 前端 → 後端 → 使用者"},{id:"b",label:"前端 → 後端 → 資料庫 → 後端 → 前端"},{id:"c",label:"使用者 → 資料庫 → 前端 → 後端"}],correctOptionId:"b",explanation:"正確順序：前端發請求 → 後端處理 → 資料庫查詢 → 後端回傳 → 前端顯示。"},{id:"q10",prompt:"JSON 資料格式的特色是什麼？",options:[{id:"a",label:"只有人類看得懂"},{id:"b",label:"用大括號 {} 和鍵值對 key: value 組成，程式可以輕鬆讀取"},{id:"c",label:"只能存數字"}],correctOptionId:"b",explanation:"JSON 使用 {} 和 key: value 格式，是程式之間交換資料的標準格式，易於讀取和解析。"},{id:"q11",prompt:"為什麼要使用第三方金流服務，而不是自己處理付款？",options:[{id:"a",label:"因為自己寫比較慢"},{id:"b",label:"因為信用卡資訊很敏感，需要專業的安全認證和法規遵循"},{id:"c",label:"因為第三方服務比較便宜"}],correctOptionId:"b",explanation:"處理信用卡需要 PCI DSS 安全認證，自己做成本高且風險大，交給專業的金流服務更安全可靠。"},{id:"q12",prompt:"LiveFit 有超過 30 個 API，以下哪個不是 API 的常見功能？",options:[{id:"a",label:"使用者註冊、登入、登出"},{id:"b",label:"設計網頁按鈕的顏色"},{id:"c",label:"取得教練列表、預約課程"}],correctOptionId:"b",explanation:"API 處理資料的存取和操作，網頁按鈕顏色是前端 CSS 的工作，不是 API 的功能。"},{id:"q13",prompt:"當前端要顯示教練資料時，正確的做法是？",options:[{id:"a",label:"直接把教練資料寫死在 HTML 裡"},{id:"b",label:"前端直接連資料庫查詢"},{id:"c",label:"前端呼叫後端 API，API 從資料庫取得資料後回傳"}],correctOptionId:"c",explanation:"前端不能直接連資料庫（會暴露帳密），要透過後端 API 取得資料，這樣更安全也更好維護。"},{id:"q14",prompt:"以下哪個是 Google 第三方登入的優點？",options:[{id:"a",label:"使用者不需要記新密碼，可以用 Google 帳號直接登入"},{id:"b",label:"可以看到使用者的 Google 密碼"},{id:"c",label:"登入速度會變慢"}],correctOptionId:"a",explanation:"第三方登入讓使用者用現有帳號登入，不用記新密碼，提升使用體驗。我們只會拿到授權資訊，不會拿到密碼。"},{id:"q15",prompt:"後端工程師被稱為「中央調度站」的原因是？",options:[{id:"a",label:"因為後端工程師薪水最高"},{id:"b",label:"因為後端要整合前端、資料庫、和各種第三方服務"},{id:"c",label:"因為後端工程師負責管理公司"}],correctOptionId:"b",explanation:"後端就像中央調度站，負責接收前端請求、處理商業邏輯、存取資料庫、串接第三方服務，再把結果回傳給前端。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 太棒了！你已經掌握 API 的基本觀念了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，API 就是網路請求，只是回傳 JSON 資料給程式用。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"學會 API 之後，你就能自己串接各種網路服務了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"謝謝海克絲！我現在對 API 有更清楚的認識了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，今天就到這裡，明天我們來學習更多！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第五天：學會 API，各種服務自己接！",scene:"normal",coachExpression:"praise"}],b0={id:5,title:"第五天：學會 API，各種服務自己接！",nodes:v0},y0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 6 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 6 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第六天：測試章節",scene:"normal",coachExpression:"praise"}],E0={id:6,title:"第六天：測試章節",nodes:y0},S0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 7 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) {name}，你做得很棒！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，有個東西要先給你。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"什麼東西？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對了，你還沒告訴我你的名字呢！",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"請告訴海姐你的名字",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好的 {name}，這是之後要用的一組密碼，是打開某個服務用的。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"密碼是：「{password}」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"好的，我記下來了。這是什麼服務的密碼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(撓撓頭) 呃...我忘了是什麼服務了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(眨眨眼) 總之先記下來吧，以後一定會用到的！",scene:"normal",coachExpression:"praise"},{type:"quiz",title:"Day 7 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第七天：測試章節（含隱藏道具）",scene:"normal",coachExpression:"praise"}],M0={id:7,title:"第七天：測試章節（含隱藏道具）",nodes:S0},T0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 8 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 8 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第八天：測試章節",scene:"normal",coachExpression:"praise"}],w0={id:8,title:"第八天：測試章節",nodes:T0},A0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 9 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 9 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第九天：測試章節",scene:"normal",coachExpression:"praise"}],C0={id:9,title:"第九天：測試章節",nodes:A0},R0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 10 - 這是最後一天的測試章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 10 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"dialogue",speaker:"海克絲",text:"感謝你的努力，專案終於上線了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"後面還有很多挑戰，沒關係，我們就一起突破吧！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第十天：專案上線！",scene:"normal",coachExpression:"praise"}],P0={id:10,title:"第十天：專案上線！",nodes:R0},I0=[{type:"dialogue",speaker:"旁白",text:"專案勉強上線了，但到處都是 Bug。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你看著滿屏的錯誤回報，開始瘋狂地修復。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：完蛋了... 海姐一定會發現我根本不適任...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：我不能讓她失望。她錄取我... 搞不好本來就是個錯誤。）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"凌晨一點...兩點...三點...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你灌下今晚第四杯濃縮咖啡。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"再一下... 再修一個就好...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"螢幕上的字開始變得模糊。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：這些 Bug... 海姐之前好像有提過類似的問題...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：早知道她在教的時候，我就認真聽了...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：她說過的那些東西，我當時怎麼都沒放在心上...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你想起今天下午海克絲交代的話。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（回憶）「{name}，上線後不管發生什麼事，今晚十點前一定要離開公司。」",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：這... 這是一種考驗吧？她是在測試我夠不夠拼...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你用力揉了揉眼睛，繼續敲著鍵盤。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"肩膀傳來劇烈的痠痛，但你選擇忽略。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：海姐之前也說過要注意肩膀... 我怎麼什麼都沒聽進去...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"突然，視線開始發黑。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"不、不行... 還有三個 Bug...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機響了。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"來電顯示：海姐",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"喂？{name}？你還在公司嗎？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你想說話，但聲音卡在喉嚨。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"{name}？你還好嗎？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"回答我！{name}！",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機從手中滑落。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你聽見海克絲在電話那頭大喊著什麼。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但那聲音越來越遠...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"像是隔著一層厚厚的水。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"畫面逐漸變黑。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"黑暗中，隱約傳來一個熟悉的聲音。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（遠遠的）{name}... 你聽得到嗎...？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（遠遠的）拜託... 回答我...！",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"那聲音越來越模糊...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（幾乎聽不見）如果... 我能早點發現就好了...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"遠方，隱約傳來救護車的聲音。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"嗚——嗚——",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"海克絲和救護人員的身影，從遠方緩緩走來。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但你已經看不清楚了。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"一切，歸於寂靜。",scene:"dark",coachExpression:"normal"},{type:"endingComplete",endingType:"bad",title:Je.bad.title,icon:Je.bad.icon,color:Je.bad.color,scene:"dark",coachExpression:"normal"}],D0={id:Je.bad.chapterId,title:`結局：${Je.bad.title}`,nodes:I0},L0=[{type:"dialogue",speaker:"旁白",text:"清晨六點，你被手機震動吵醒。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"不是鬧鐘，是系統通知。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📱 系統：「LiveFit 已成功部署上線。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（揉揉眼睛）「上線了...？」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你下意識地打開後台。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"三個 Bug 回報。都是小問題，但確實存在。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（盯著螢幕）「...果然。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：我就知道。還是有漏掉的地方。）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你嘆了口氣，開始逐一檢視錯誤訊息。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機又震動了一下。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你期待看到海克絲的訊息。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但只是系統推播：「您有 3 則未讀通知。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：...她沒傳訊息。）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：是不是因為這幾個 Bug，她很失望？）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你放下手機，盯著天花板。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"專案上線了。這是事實。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但心裡總覺得...好像少了什麼。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"【公司，早上九點】",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你比平常早到公司，海克絲已經在了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"她正看著電腦，手邊放著一杯還在冒煙的咖啡。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（抬頭）「早。坐下吧。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（站得筆直）「海姐，關於那三個 Bug，我已經看過了，我現在馬上——」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（打斷）「{name}。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「坐下。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你乖乖坐下，背挺得像根竹竿。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（轉過螢幕讓你看）「你看這個。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"螢幕上是 LiveFit 的後台數據。",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"海克絲",text:"「上線十二小時，87 個人註冊，0 個系統崩潰。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「你知道這代表什麼嗎？」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"（低頭）「...但是有 3 個 Bug...」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"（嘆氣）「我問你，健身的時候，有人第一天就能硬舉 100 公斤嗎？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"（愣住）「...沒有。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「那有人第一次寫的系統，完全沒有 Bug 嗎？」",scene:"normal",coachExpression:"confused"},{type:"dialogue",speaker:"你",text:"「...」",scene:"normal",coachExpression:"confused"},{type:"dialogue",speaker:"海克絲",text:"（語氣放緩）「{name}，你做到了。專案上線了，系統穩定運作。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「那三個 Bug，我們今天一起修就好。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你聽著她的話，但心裡那個聲音還是很大聲。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：可是...如果我再仔細一點，就不會有這些問題了...）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（看著你的表情，沉默了一下）",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「你是不是覺得，99 分跟 0 分一樣？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"（抬頭）「...蛤？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（站起來，走到窗邊）「我以前也這樣。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「覺得只要不是 100 分，就是失敗。只要有一個漏洞，之前的努力就全部白費。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（轉頭看你）「但這種想法，會把你封印住的。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「封印...？」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「你會困在『不夠好』的牢籠裡，永遠走不出來。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「明明已經做到 99 分了，卻只盯著那 1 分看。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"旁白",text:"你低下頭，不知道該說什麼。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（走回座位，語氣變得溫和）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「{name}，我不是要你放棄追求完美。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「我是希望你在追求的路上，也能看見自己已經走了多遠。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"你抬起頭，看著海克絲。",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"她的表情沒有失望，只有一種...你看不太懂的東西。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「今天的任務：修完那三個 Bug，然後六點準時下班。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「這是老闆的命令。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"你",text:"（點頭）「...好。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"海克絲",text:"（微微一笑）「走吧，先去吃早餐。修 Bug 之前，先把自己餵飽。」",scene:"normal",coachExpression:"biglaugh"},{type:"dialogue",speaker:"旁白",text:"【傍晚，離開公司】",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"六點整，你關上電腦。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"Bug 修完了。系統運作正常。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但心裡那個聲音，還是隱隱作響。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：下次...我要做得更好。）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：不能再讓海姐幫我收尾了。）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你走出公司，天色還亮著。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"這是你入職以來，第一次在天黑之前離開。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"風吹過來，有點涼。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（看著天空）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「...也許，我還需要再努力一點吧。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你背起背包，往車站走去。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"腳步不快，但很穩。",scene:"normal",coachExpression:"normal"},{type:"endingComplete",endingType:"normal",title:Je.normal.title,icon:Je.normal.icon,color:Je.normal.color,scene:"normal",coachExpression:"normal"}],U0={id:Je.normal.chapterId,title:`結局：${Je.normal.title}`,nodes:L0},N0=[{type:"dialogue",speaker:"旁白",text:"陽光照進房間，你被手機訊息吵醒。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"早安，正式的後端工程師。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"LiveFit 第一天就有 500 人註冊，後端穩穩的，沒有任何 Bug。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"你看著訊息，嘴角不自覺地上揚。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"還記得第一天你連環境都架不起來嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"現在的你，已經能獨立扛起整個後端了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這是你應得的。記住這種感覺——穩健帶來的踏實。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"後端的路還很長，但我相信你已經準備好了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"加油，{name}。",scene:"normal",coachExpression:"praise"},{type:"endingComplete",endingType:"true",title:Je.true.title,icon:Je.true.icon,color:Je.true.color,canTriggerHidden:!0,scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"你正準備關掉手機，突然收到一封新信件。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:`寄件者：海克絲
主旨：給你的一封信`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你點開信件。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`{name}，

恭喜你正式成為正職員工！你好棒！

附件裡有一個壓縮檔，是我想送給你的禮物。

密碼的話...你應該知道的 😉

—— 海姐`,scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"你看著附件，想起了第七天在資料庫裡看到的那串亂碼。",scene:"normal",coachExpression:"normal"},{type:"passwordInput",prompt:"請輸入解壓縮密碼...",hint:"提示：還記得第七天拿到的那串亂碼嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"解壓縮成功！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"裡面是一個影片檔：「給未來的你.mp4」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你點開播放。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"海克絲出現在畫面中，背景是健身房的辦公室。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"嗨，{name}。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"如果你看到這個影片，代表你真的做到了。全部的測驗都答對，還找到了那串亂碼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"我想跟你分享一些事情。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"她停頓了一下，眼神變得柔和。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到你，就像是看到以前的我一樣。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"以前的我剛進入接案公司，雖然每天都忙到三更半夜，但至少團隊成員感情都很不錯。再加上後端工程師可以整合很多系統，會感到很有成就感。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"但後來...換了新主管，接了很多不良客戶。加班到凌晨變成家常便飯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"更重要的是，我很內耗。不懂得拒絕，不懂得要好好照顧自己。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"她苦笑了一下。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"甚至還暈倒，搭上救護車呢。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"是後來遇到瑜伽跟健身，才慢慢平緩下來。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"所以我希望你，一定要以自己為優先。好好照顧好自己，才有多餘的能力照顧他人。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"她的表情變得認真。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"再次恭喜你成為正職。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"其實當我第七天看到你認真攻略資料庫的時候，我就認定你一定可以突破這次上線的挑戰。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣的決心和耐力，表示你真的很有潛能成為軟體工程師。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"很多人都會認為工程師需要天賦才可以。但其實以前的我，也是天天被前輩念到長大。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"前輩跟我說過一句話——",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「人的一生就像是馬拉松。我們很常高估自己一年可以做的事，卻低估自己二三十年後的成長。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"慢慢成長，才是比較快的。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"影片畫面開始慢慢變暗。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡，影片也即將到尾聲了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"最後想和你說三件事。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"第一，你真的很棒。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"第二，你不用一開始就很厲害，但要開始才會很厲害。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"第三...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"她露出溫暖的笑容。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"只要你不放棄自己，海姐也不會放棄你。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"加油，{name}。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"影片結束。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你關掉影片，看著窗外的陽光。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"謝謝你，海姐。",scene:"normal",coachExpression:"praise"},{type:"endingComplete",endingType:"hidden",title:Je.hidden.title,icon:Je.hidden.icon,color:Je.hidden.color,scene:"normal",coachExpression:"praise"}],O0={id:Je.true.chapterId,title:`結局：${Je.true.title} / ${Je.hidden.title}`,nodes:N0},lu={1:f0,2:p0,3:g0,4:x0,5:b0,6:E0,7:M0,8:w0,9:C0,10:P0,101:D0,102:U0,103:O0};function F0(t){return lu[t]}const oa=5,k0=10,yp=[4,5,6,7,8,9,10];const cu="179",B0=0,Nd=1,z0=2,Ep=1,H0=2,ni=3,Fi=0,on=1,Hn=2,Di=0,Xr=1,Bs=2,Od=3,Fd=4,V0=5,ir=100,G0=101,W0=102,X0=103,q0=104,$0=200,Y0=201,j0=202,K0=203,Wl=204,Xl=205,Z0=206,J0=207,Q0=208,ev=209,tv=210,nv=211,iv=212,rv=213,sv=214,ql=0,$l=1,Yl=2,Qr=3,jl=4,Kl=5,Zl=6,Jl=7,Sp=0,ov=1,av=2,Li=0,lv=1,cv=2,uv=3,dv=4,fv=5,hv=6,pv=7,Mp=300,es=301,ts=302,Ql=303,ec=304,Ta=306,tc=1e3,or=1001,nc=1002,Pn=1003,mv=1004,co=1005,qt=1006,$a=1007,ar=1008,hi=1009,Tp=1010,wp=1011,zs=1012,uu=1013,pr=1014,ai=1015,Ks=1016,du=1017,fu=1018,Hs=1020,Ap=35902,Cp=1021,Rp=1022,Cn=1023,Vs=1026,Gs=1027,Pp=1028,hu=1029,Ip=1030,pu=1031,mu=1033,Vo=33776,Go=33777,Wo=33778,Xo=33779,ic=35840,rc=35841,sc=35842,oc=35843,ac=36196,lc=37492,cc=37496,uc=37808,dc=37809,fc=37810,hc=37811,pc=37812,mc=37813,gc=37814,_c=37815,xc=37816,vc=37817,bc=37818,yc=37819,Ec=37820,Sc=37821,qo=36492,Mc=36494,Tc=36495,Dp=36283,wc=36284,Ac=36285,Cc=36286,gv=3200,_v=3201,xv=0,vv=1,Ri="",bn="srgb",ns="srgb-linear",aa="linear",pt="srgb",vr=7680,kd=519,bv=512,yv=513,Ev=514,Lp=515,Sv=516,Mv=517,Tv=518,wv=519,Rc=35044,Bd="300 es",Gn=2e3,la=2001;class rs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ya=Math.PI/180,Pc=180/Math.PI;function Ui(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Vt[t&255]+Vt[t>>8&255]+Vt[t>>16&255]+Vt[t>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[n&63|128]+Vt[n>>8&255]+"-"+Vt[n>>16&255]+Vt[n>>24&255]+Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function Av(t,e){return(t%e+e)%e}function ja(t,e,n){return(1-n)*t+n*e}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function mt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class rt{constructor(e=0,n=0){rt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(d!==_||l!==f||c!==h||u!==g){let m=1-a;const p=l*f+c*h+u*g+d*_,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),U=Math.atan2(L,p*w);m=Math.sin(m*U)/L,a=Math.sin(a*U)/L}const y=a*w;if(l=l*m+f*y,c=c*m+h*y,u=u*m+g*y,d=d*m+_*y,m===1-a){const L=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=L,c*=L,u*=L,d*=L}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-a*h,e[n+2]=c*g+u*h+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>d){const h=2*Math.sqrt(1+i-a-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>d){const h=2*Math.sqrt(1+a-i-d);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new J,zd=new Zs;class Qe{constructor(e,n,i,r,s,o,a,l,c){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],w=r[1],S=r[4],y=r[7],L=r[2],U=r[5],I=r[8];return s[0]=o*_+a*w+l*L,s[3]=o*m+a*S+l*U,s[6]=o*p+a*y+l*I,s[1]=c*_+u*w+d*L,s[4]=c*m+u*S+d*U,s[7]=c*p+u*y+d*I,s[2]=f*_+h*w+g*L,s[5]=f*m+h*S+g*U,s[8]=f*p+h*y+g*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,h=c*s-o*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=f*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Za.makeScale(e,n)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,n){return this.premultiply(Za.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Qe;function Up(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ca(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Cv(){const t=ca("canvas");return t.style.display="block",t}const Hd={};function qr(t){t in Hd||(Hd[t]=!0,console.warn(t))}function Rv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Vd=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gd=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Pv(){const t={enabled:!0,workingColorSpace:ns,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===pt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(r.r=$r(r.r),r.g=$r(r.g),r.b=$r(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ri?aa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[ns]:{primaries:e,whitePoint:i,transfer:aa,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Vd,fromXYZ:Gd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const lt=Pv();function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function $r(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let br;class Iv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{br===void 0&&(br=ca("canvas")),br.width=e.width,br.height=e.height;const r=br.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=br}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ca("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ci(n[i]/255)*255):n[i]=ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dv=0;class gu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dv++}),this.uuid=Ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ja(r[o].image)):s.push(Ja(r[o]))}else s=Ja(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ja(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Iv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lv=0;const Qa=new J;class kt extends rs{constructor(e=kt.DEFAULT_IMAGE,n=kt.DEFAULT_MAPPING,i=or,r=or,s=qt,o=ar,a=Cn,l=hi,c=kt.DEFAULT_ANISOTROPY,u=Ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lv++}),this.uuid=Ui(),this.name="",this.source=new gu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qa).x}get height(){return this.source.getSize(Qa).y}get depth(){return this.source.getSize(Qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tc:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case nc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tc:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case nc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Mp;kt.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(h+1)/2,L=(p+1)/2,U=(u+f)/4,I=(d+_)/4,R=(g+m)/4;return S>y&&S>L?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=U/i,s=I/i):y>L?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=U/r,s=R/r):L<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),i=I/s,r=R/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-_)/w,this.z=(f-u)/w,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uv extends rs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new kt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mr extends Uv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Np extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nv extends kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Js{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Tn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Tn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Tn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Tn):Tn.fromBufferAttribute(s,o),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),uo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),uo.copy(i.boundingBox)),uo.applyMatrix4(e.matrixWorld),this.union(uo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),fo.subVectors(this.max,fs),yr.subVectors(e.a,fs),Er.subVectors(e.b,fs),Sr.subVectors(e.c,fs),xi.subVectors(Er,yr),vi.subVectors(Sr,Er),qi.subVectors(yr,Sr);let n=[0,-xi.z,xi.y,0,-vi.z,vi.y,0,-qi.z,qi.y,xi.z,0,-xi.x,vi.z,0,-vi.x,qi.z,0,-qi.x,-xi.y,xi.x,0,-vi.y,vi.x,0,-qi.y,qi.x,0];return!el(n,yr,Er,Sr,fo)||(n=[1,0,0,0,1,0,0,0,1],!el(n,yr,Er,Sr,fo))?!1:(ho.crossVectors(xi,vi),n=[ho.x,ho.y,ho.z],el(n,yr,Er,Sr,fo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new J,new J,new J,new J,new J,new J,new J,new J],Tn=new J,uo=new Js,yr=new J,Er=new J,Sr=new J,xi=new J,vi=new J,qi=new J,fs=new J,fo=new J,ho=new J,$i=new J;function el(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Ov=new Js,hs=new J,tl=new J;class wa{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Ov.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(tl)),this.expandByPoint(hs.copy(e.center).sub(tl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new J,nl=new J,po=new J,bi=new J,il=new J,mo=new J,rl=new J;class Op{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nl.copy(e).add(n).multiplyScalar(.5),po.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(nl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(po),a=bi.dot(this.direction),l=-bi.dot(po),c=bi.lengthSq(),u=Math.abs(1-o*o);let d,f,h,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const _=1/u;d*=_,f*=_,h=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(nl).addScaledVector(po,f),h}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){il.subVectors(n,e),mo.subVectors(i,e),rl.crossVectors(il,mo);let o=this.direction.dot(rl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(mo.crossVectors(bi,mo));if(l<0)return null;const c=a*this.direction.dot(il.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(rl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,h,g,_,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),o=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-_*c,n[9]=-a*l,n[2]=_-f*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,_=c*d;n[0]=f+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,_=c*d;n[0]=f-_*a,n[4]=-o*d,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,h=o*d,g=a*u,_=a*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+_,n[1]=l*d,n[5]=_*c+f,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-f*d,n[8]=g*d+h,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-_*d}else if(e.order==="XZY"){const f=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+_,n[5]=o*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=a*u,n[10]=_*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fv,e,kv)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),yi.crossVectors(i,un),yi.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),yi.crossVectors(i,un)),yi.normalize(),go.crossVectors(un,yi),r[0]=yi.x,r[4]=go.x,r[8]=un.x,r[1]=yi.y,r[5]=go.y,r[9]=un.y,r[2]=yi.z,r[6]=go.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],w=i[3],S=i[7],y=i[11],L=i[15],U=r[0],I=r[4],R=r[8],b=r[12],E=r[1],D=r[5],B=r[9],H=r[13],V=r[2],K=r[6],$=r[10],z=r[14],N=r[3],re=r[7],fe=r[11],be=r[15];return s[0]=o*U+a*E+l*V+c*N,s[4]=o*I+a*D+l*K+c*re,s[8]=o*R+a*B+l*$+c*fe,s[12]=o*b+a*H+l*z+c*be,s[1]=u*U+d*E+f*V+h*N,s[5]=u*I+d*D+f*K+h*re,s[9]=u*R+d*B+f*$+h*fe,s[13]=u*b+d*H+f*z+h*be,s[2]=g*U+_*E+m*V+p*N,s[6]=g*I+_*D+m*K+p*re,s[10]=g*R+_*B+m*$+p*fe,s[14]=g*b+_*H+m*z+p*be,s[3]=w*U+S*E+y*V+L*N,s[7]=w*I+S*D+y*K+L*re,s[11]=w*R+S*B+y*$+L*fe,s[15]=w*b+S*H+y*z+L*be,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*h-i*l*h)+_*(+n*l*h-n*c*f+s*o*f-r*o*h+r*c*u-s*l*u)+m*(+n*c*d-n*a*h-s*o*d+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],w=d*m*c-_*f*c+_*l*h-a*m*h-d*l*p+a*f*p,S=g*f*c-u*m*c-g*l*h+o*m*h+u*l*p-o*f*p,y=u*_*c-g*d*c+g*a*h-o*_*h-u*a*p+o*d*p,L=g*d*l-u*_*l-g*a*f+o*_*f+u*a*m-o*d*m,U=n*w+i*S+r*y+s*L;if(U===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/U;return e[0]=w*I,e[1]=(_*f*s-d*m*s-_*r*h+i*m*h+d*r*p-i*f*p)*I,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*I,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*h-i*l*h)*I,e[4]=S*I,e[5]=(u*m*s-g*f*s+g*r*h-n*m*h-u*r*p+n*f*p)*I,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*I,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*h+n*l*h)*I,e[8]=y*I,e[9]=(g*d*s-u*_*s-g*i*h+n*_*h+u*i*p-n*d*p)*I,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*I,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*h-n*a*h)*I,e[12]=L*I,e[13]=(u*_*r-g*d*r+g*i*f-n*_*f-u*i*m+n*d*m)*I,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*I,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,h=s*u,g=s*d,_=o*u,m=o*d,p=a*d,w=l*c,S=l*u,y=l*d,L=i.x,U=i.y,I=i.z;return r[0]=(1-(_+p))*L,r[1]=(h+y)*L,r[2]=(g-S)*L,r[3]=0,r[4]=(h-y)*U,r[5]=(1-(f+p))*U,r[6]=(m+w)*U,r[7]=0,r[8]=(g+S)*I,r[9]=(m-w)*I,r[10]=(1-(f+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),a=Mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],wn.copy(this);const c=1/s,u=1/o,d=1/a;return wn.elements[0]*=c,wn.elements[1]*=c,wn.elements[2]*=c,wn.elements[4]*=u,wn.elements[5]*=u,wn.elements[6]*=u,wn.elements[8]*=d,wn.elements[9]*=d,wn.elements[10]*=d,n.setFromRotationMatrix(wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Gn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===Gn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===la)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Gn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===Gn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===la)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Mr=new J,wn=new Pt,Fv=new J(0,0,0),kv=new J(1,1,1),yi=new J,go=new J,un=new J,Wd=new Pt,Xd=new Zs;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-it(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Wd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Xd.setFromEuler(this),this.setFromQuaternion(Xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Fp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Bv=0;const qd=new J,Tr=new Zs,Qn=new Pt,_o=new J,ps=new J,zv=new J,Hv=new Zs,$d=new J(1,0,0),Yd=new J(0,1,0),jd=new J(0,0,1),Kd={type:"added"},Vv={type:"removed"},wr={type:"childadded",child:null},sl={type:"childremoved",child:null};class rn extends rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bv++}),this.uuid=Ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rn.DEFAULT_UP.clone();const e=new J,n=new pi,i=new Zs,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new Qe}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.multiply(Tr),this}rotateOnWorldAxis(e,n){return Tr.setFromAxisAngle(e,n),this.quaternion.premultiply(Tr),this}rotateX(e){return this.rotateOnAxis($d,e)}rotateY(e){return this.rotateOnAxis(Yd,e)}rotateZ(e){return this.rotateOnAxis(jd,e)}translateOnAxis(e,n){return qd.copy(e).applyQuaternion(this.quaternion),this.position.add(qd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($d,e)}translateY(e){return this.translateOnAxis(Yd,e)}translateZ(e){return this.translateOnAxis(jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(ps,_o,this.up):Qn.lookAt(_o,ps,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Tr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Tr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kd),wr.child=e,this.dispatchEvent(wr),wr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Vv),sl.child=e,this.dispatchEvent(sl),sl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kd),wr.child=e,this.dispatchEvent(wr),wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,e,zv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ps,Hv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}rn.DEFAULT_UP=new J(0,1,0);rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const An=new J,ei=new J,ol=new J,ti=new J,Ar=new J,Cr=new J,Zd=new J,al=new J,ll=new J,cl=new J,ul=new Rt,dl=new Rt,fl=new Rt;class En{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),An.subVectors(e,n),r.cross(An);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){An.subVectors(r,n),ei.subVectors(i,n),ol.subVectors(e,n);const o=An.dot(An),a=An.dot(ei),l=An.dot(ol),c=ei.dot(ei),u=ei.dot(ol),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ul.setScalar(0),dl.setScalar(0),fl.setScalar(0),ul.fromBufferAttribute(e,n),dl.fromBufferAttribute(e,i),fl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ul,s.x),o.addScaledVector(dl,s.y),o.addScaledVector(fl,s.z),o}static isFrontFacing(e,n,i,r){return An.subVectors(i,n),ei.subVectors(e,n),An.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return An.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),An.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return En.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ar.subVectors(r,i),Cr.subVectors(s,i),al.subVectors(e,i);const l=Ar.dot(al),c=Cr.dot(al);if(l<=0&&c<=0)return n.copy(i);ll.subVectors(e,r);const u=Ar.dot(ll),d=Cr.dot(ll);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Ar,o);cl.subVectors(e,s);const h=Ar.dot(cl),g=Cr.dot(cl);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Cr,a);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return Zd.subVectors(s,r),a=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(Zd,a);const p=1/(m+_+f);return o=_*p,a=f*p,n.copy(i).addScaledVector(Ar,o).addScaledVector(Cr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},xo={h:0,s:0,l:0};function hl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=lt.workingColorSpace){return this.r=e,this.g=n,this.b=i,lt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=lt.workingColorSpace){if(e=Av(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=hl(o,s,e+1/3),this.g=hl(o,s,e),this.b=hl(o,s,e-1/3)}return lt.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=kp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=$r(e.r),this.g=$r(e.g),this.b=$r(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return lt.workingToColorSpace(Gt.copy(this),e),Math.round(it(Gt.r*255,0,255))*65536+Math.round(it(Gt.g*255,0,255))*256+Math.round(it(Gt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=lt.workingColorSpace){lt.workingToColorSpace(Gt.copy(this),n);const i=Gt.r,r=Gt.g,s=Gt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=lt.workingColorSpace){return lt.workingToColorSpace(Gt.copy(this),n),e.r=Gt.r,e.g=Gt.g,e.b=Gt.b,e}getStyle(e=bn){lt.workingToColorSpace(Gt.copy(this),e);const n=Gt.r,i=Gt.g,r=Gt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(xo);const i=ja(Ei.h,xo.h,n),r=ja(Ei.s,xo.s,n),s=ja(Ei.l,xo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Gt=new Ye;Ye.NAMES=kp;let Gv=0;class ss extends rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gv++}),this.uuid=Ui(),this.name="",this.type="Material",this.blending=Xr,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wl,this.blendDst=Xl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Xr&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Wl&&(i.blendSrc=this.blendSrc),this.blendDst!==Xl&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _u extends ss{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Sp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new J,vo=new rt;let Wv=0;class nn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wv++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Rc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)vo.fromBufferAttribute(this,n),vo.applyMatrix3(e),this.setXY(n,vo.x,vo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix3(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyMatrix4(e),this.setXYZ(n,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.applyNormalMatrix(e),this.setXYZ(n,It.x,It.y,It.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)It.fromBufferAttribute(this,n),It.transformDirection(e),this.setXYZ(n,It.x,It.y,It.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vn(n,this.array)),n}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vn(n,this.array)),n}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vn(n,this.array)),n}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Rc&&(e.usage=this.usage),e}}class Bp extends nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class zp extends nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dr extends nn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Xv=0;const vn=new Pt,pl=new rn,Rr=new J,dn=new Js,ms=new Js,Ft=new J;class Nn extends rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Up(e)?zp:Bp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vn.makeRotationFromQuaternion(e),this.applyMatrix4(vn),this}rotateX(e){return vn.makeRotationX(e),this.applyMatrix4(vn),this}rotateY(e){return vn.makeRotationY(e),this.applyMatrix4(vn),this}rotateZ(e){return vn.makeRotationZ(e),this.applyMatrix4(vn),this}translate(e,n,i){return vn.makeTranslation(e,n,i),this.applyMatrix4(vn),this}scale(e,n,i){return vn.makeScale(e,n,i),this.applyMatrix4(vn),this}lookAt(e){return pl.lookAt(e),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rr).negate(),this.translate(Rr.x,Rr.y,Rr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ms.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(dn.min,ms.min),dn.expandByPoint(Ft),Ft.addVectors(dn.max,ms.max),dn.expandByPoint(Ft)):(dn.expandByPoint(ms.min),dn.expandByPoint(ms.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ft.fromBufferAttribute(a,c),l&&(Rr.fromBufferAttribute(e,c),Ft.add(Rr)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new J,l[R]=new J;const c=new J,u=new J,d=new J,f=new rt,h=new rt,g=new rt,_=new J,m=new J;function p(R,b,E){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,R),h.fromBufferAttribute(s,b),g.fromBufferAttribute(s,E),u.sub(c),d.sub(c),h.sub(f),g.sub(f);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-h.y).multiplyScalar(D),m.copy(d).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),a[R].add(_),a[b].add(_),a[E].add(_),l[R].add(m),l[b].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,b=w.length;R<b;++R){const E=w[R],D=E.start,B=E.count;for(let H=D,V=D+B;H<V;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new J,y=new J,L=new J,U=new J;function I(R){L.fromBufferAttribute(r,R),U.copy(L);const b=a[R];S.copy(b),S.sub(L.multiplyScalar(L.dot(b))).normalize(),y.crossVectors(U,b);const D=y.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,D)}for(let R=0,b=w.length;R<b;++R){const E=w[R],D=E.start,B=E.count;for(let H=D,V=D+B;H<V;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)f[g++]=c[h++]}return new nn(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jd=new Pt,Yi=new Op,bo=new wa,Qd=new J,yo=new J,Eo=new J,So=new J,ml=new J,Mo=new J,ef=new J,To=new J;class Wn extends rn{constructor(e=new Nn,n=new _u){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(ml.fromBufferAttribute(d,e),o?Mo.addScaledVector(ml,u):Mo.addScaledVector(ml.sub(n),u))}n.add(Mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(bo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(bo,Qd)===null||Yi.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,L=S;y<L;y+=3){const U=a.getX(y),I=a.getX(y+1),R=a.getX(y+2);r=wo(this,p,e,i,c,u,d,U,I,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=wo(this,o,e,i,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=w,L=S;y<L;y+=3){const U=y,I=y+1,R=y+2;r=wo(this,p,e,i,c,u,d,U,I,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const w=m,S=m+1,y=m+2;r=wo(this,o,e,i,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function qv(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;To.copy(a),To.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(To);return c<n.near||c>n.far?null:{distance:c,point:To.clone(),object:t}}function wo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,yo),t.getVertexPosition(l,Eo),t.getVertexPosition(c,So);const u=qv(t,e,n,i,yo,Eo,So,ef);if(u){const d=new J;En.getBarycoord(ef,yo,Eo,So,d),r&&(u.uv=En.getInterpolatedAttribute(r,a,l,c,d,new rt)),s&&(u.uv1=En.getInterpolatedAttribute(s,a,l,c,d,new rt)),o&&(u.normal=En.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};En.getNormal(yo,Eo,So,f.normal),u.face=f,u.barycoord=d}return u}class Qs extends Nn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(d,2));function g(_,m,p,w,S,y,L,U,I,R,b){const E=y/I,D=L/R,B=y/2,H=L/2,V=U/2,K=I+1,$=R+1;let z=0,N=0;const re=new J;for(let fe=0;fe<$;fe++){const be=fe*D-H;for(let Me=0;Me<K;Me++){const Ke=Me*E-B;re[_]=Ke*w,re[m]=be*S,re[p]=V,c.push(re.x,re.y,re.z),re[_]=0,re[m]=0,re[p]=U>0?1:-1,u.push(re.x,re.y,re.z),d.push(Me/I),d.push(1-fe/R),z+=1}}for(let fe=0;fe<R;fe++)for(let be=0;be<I;be++){const Me=f+be+K*fe,Ke=f+be+K*(fe+1),We=f+(be+1)+K*(fe+1),ie=f+(be+1)+K*fe;l.push(Me,Ke,ie),l.push(Ke,We,ie),N+=6}a.addGroup(h,N,b),h+=N,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function is(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=is(t[n]);for(const r in i)e[r]=i[r]}return e}function $v(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}const Yv={clone:is,merge:Zt};var jv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends ss{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jv,this.fragmentShader=Kv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=$v(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Vp extends rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new J,tf=new rt,nf=new rt;class yn extends Vp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ya*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pc*2*Math.atan(Math.tan(Ya*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,tf,nf),n.subVectors(nf,tf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ya*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Pr=-90,Ir=1;class Zv extends rn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new yn(Pr,Ir,e,n);r.layers=this.layers,this.add(r);const s=new yn(Pr,Ir,e,n);s.layers=this.layers,this.add(s);const o=new yn(Pr,Ir,e,n);o.layers=this.layers,this.add(o);const a=new yn(Pr,Ir,e,n);a.layers=this.layers,this.add(a);const l=new yn(Pr,Ir,e,n);l.layers=this.layers,this.add(l);const c=new yn(Pr,Ir,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Gn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Gp extends kt{constructor(e=[],n=es,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jv extends mr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Gp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Qs(5,5,5),s=new ki({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Di});s.uniforms.tEquirect.value=n;const o=new Wn(r,s),a=n.minFilter;return n.minFilter===ar&&(n.minFilter=qt),new Zv(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class bs extends rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qv={type:"move"};class gl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qv)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new bs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Wp extends rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class eb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Rc,this.updateRanges=[],this.version=0,this.uuid=Ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const jt=new J;class ua{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyMatrix4(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.applyNormalMatrix(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)jt.fromBufferAttribute(this,n),jt.transformDirection(e),this.setXYZ(n,jt.x,jt.y,jt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=mt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=mt(n,this.array),i=mt(i,this.array),r=mt(r,this.array),s=mt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ua(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xp extends ss{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Dr;const gs=new J,Lr=new J,Ur=new J,Nr=new rt,_s=new rt,qp=new Pt,Ao=new J,xs=new J,Co=new J,rf=new rt,_l=new rt,sf=new rt;class tb extends rn{constructor(e=new Xp){if(super(),this.isSprite=!0,this.type="Sprite",Dr===void 0){Dr=new Nn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new eb(n,5);Dr.setIndex([0,1,2,0,2,3]),Dr.setAttribute("position",new ua(i,3,0,!1)),Dr.setAttribute("uv",new ua(i,2,3,!1))}this.geometry=Dr,this.material=e,this.center=new rt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),qp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ur.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Ur.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ro(Ao.set(-.5,-.5,0),Ur,o,Lr,r,s),Ro(xs.set(.5,-.5,0),Ur,o,Lr,r,s),Ro(Co.set(.5,.5,0),Ur,o,Lr,r,s),rf.set(0,0),_l.set(1,0),sf.set(1,1);let a=e.ray.intersectTriangle(Ao,xs,Co,!1,gs);if(a===null&&(Ro(xs.set(-.5,.5,0),Ur,o,Lr,r,s),_l.set(0,1),a=e.ray.intersectTriangle(Ao,Co,xs,!1,gs),a===null))return;const l=e.ray.origin.distanceTo(gs);l<e.near||l>e.far||n.push({distance:l,point:gs.clone(),uv:En.getInterpolation(gs,Ao,xs,Co,rf,_l,sf,new rt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ro(t,e,n,i,r,s){Nr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_s.x=s*Nr.x-r*Nr.y,_s.y=r*Nr.x+s*Nr.y):_s.copy(Nr),t.copy(e),t.x+=_s.x,t.y+=_s.y,t.applyMatrix4(qp)}const xl=new J,nb=new J,ib=new Qe;class Qi{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=xl.subVectors(i,n).cross(nb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(xl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||ib.getNormalMatrix(e),r=this.coplanarPoint(xl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new wa,rb=new rt(.5,.5),Po=new J;class $p{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Gn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],w=s[12],S=s[13],y=s[14],L=s[15];if(r[0].setComponents(c-o,h-u,p-g,L-w).normalize(),r[1].setComponents(c+o,h+u,p+g,L+w).normalize(),r[2].setComponents(c+a,h+d,p+_,L+S).normalize(),r[3].setComponents(c-a,h-d,p-_,L-S).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,h-f,p-m,L-y).normalize();else if(r[4].setComponents(c-l,h-f,p-m,L-y).normalize(),n===Gn)r[5].setComponents(c+l,h+f,p+m,L+y).normalize();else if(n===la)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const n=rb.distanceTo(e.center);return ji.radius=.7071067811865476+n,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ic extends ss{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const of=new Pt,Dc=new Op,Io=new wa,Do=new J;class af extends rn{constructor(e=new Nn,n=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Io.copy(i.boundingSphere),Io.applyMatrix4(r),Io.radius+=s,e.ray.intersectsSphere(Io)===!1)return;of.copy(r).invert(),Dc.copy(e.ray).applyMatrix4(of);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=f,_=h;g<_;g++){const m=c.getX(g);Do.fromBufferAttribute(d,m),lf(Do,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),h=Math.min(d.count,o.start+o.count);for(let g=f,_=h;g<_;g++)Do.fromBufferAttribute(d,g),lf(Do,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function lf(t,e,n,i,r,s,o){const a=Dc.distanceSqToPoint(t);if(a<n){const l=new J;Dc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Yr extends kt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yp extends kt{constructor(e,n,i=pr,r,s,o,a=Pn,l=Pn,c,u=Vs,d=1){if(u!==Vs&&u!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class eo extends Nn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const w=p*f-o;for(let S=0;S<c;S++){const y=S*d-s;g.push(y,-w,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const S=w+c*p,y=w+c*(p+1),L=w+1+c*(p+1),U=w+1+c*p;h.push(S,y,U),h.push(y,L,U)}this.setIndex(h),this.setAttribute("position",new dr(g,3)),this.setAttribute("normal",new dr(_,3)),this.setAttribute("uv",new dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class sb extends ss{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ob extends ss{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class jp extends Vp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class ab extends yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class lb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function cf(t,e,n,i){const r=cb(i);switch(n){case Cp:return t*e;case Pp:return t*e/r.components*r.byteLength;case hu:return t*e/r.components*r.byteLength;case Ip:return t*e*2/r.components*r.byteLength;case pu:return t*e*2/r.components*r.byteLength;case Rp:return t*e*3/r.components*r.byteLength;case Cn:return t*e*4/r.components*r.byteLength;case mu:return t*e*4/r.components*r.byteLength;case Vo:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wo:case Xo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rc:case oc:return Math.max(t,16)*Math.max(e,8)/4;case ic:case sc:return Math.max(t,8)*Math.max(e,8)/2;case ac:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case fc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case pc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case mc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _c:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Ec:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qo:case Mc:case Tc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dp:case wc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ac:case Cc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cb(t){switch(t){case hi:case Tp:return{byteLength:1,components:1};case zs:case wp:case Ks:return{byteLength:2,components:1};case du:case fu:return{byteLength:2,components:4};case pr:case uu:case ai:return{byteLength:4,components:1};case Ap:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cu);function Kp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ub(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],_=d[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,d[f]=_)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const _=d[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var db=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,fb=`#ifdef USE_ALPHAHASH
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
#endif`,hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_b=`#ifdef USE_AOMAP
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
#endif`,xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vb=`#ifdef USE_BATCHING
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
#endif`,bb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Eb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mb=`#ifdef USE_IRIDESCENCE
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
#endif`,Tb=`#ifdef USE_BUMPMAP
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
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ab=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ub=`#define PI 3.141592653589793
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
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,Nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ob=`vec3 transformedNormal = objectNormal;
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
#endif`,Fb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gb=`#ifdef USE_ENVMAP
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
#endif`,Wb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xb=`#ifdef USE_ENVMAP
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
#endif`,qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$b=`#ifdef USE_ENVMAP
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
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Zb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Jb=`#ifdef USE_GRADIENTMAP
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
}`,Qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ny=`uniform bool receiveShadow;
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
#endif`,iy=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
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
#endif`,ry=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,oy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ly=`PhysicalMaterial material;
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
#endif`,cy=`struct PhysicalMaterial {
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,uy=`
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
#endif`,dy=`#if defined( RE_IndirectDiffuse )
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
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,py=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,my=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_y=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,by=`#if defined( USE_POINTS_UV )
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
#endif`,yy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ey=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ty=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ry=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
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
#endif`,Uy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,By=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,zy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,jy=`float getShadowMask() {
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
}`,Ky=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Jy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qy=`#ifdef USE_SKINNING
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
#endif`,eE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,iE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rE=`#ifdef USE_TRANSMISSION
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
#endif`,sE=`#ifdef USE_TRANSMISSION
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
#endif`,oE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dE=`uniform sampler2D t2D;
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
}`,fE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,pE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gE=`#include <common>
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
}`,_E=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
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
}`,xE=`#define DISTANCE
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
}`,vE=`#define DISTANCE
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
}`,bE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`uniform float scale;
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
}`,SE=`uniform vec3 diffuse;
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
}`,ME=`#include <common>
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
}`,TE=`uniform vec3 diffuse;
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
}`,wE=`#define LAMBERT
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
}`,AE=`#define LAMBERT
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
}`,CE=`#define MATCAP
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
}`,RE=`#define MATCAP
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
}`,PE=`#define NORMAL
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
}`,IE=`#define NORMAL
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
}`,DE=`#define PHONG
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
}`,LE=`#define PHONG
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
}`,UE=`#define STANDARD
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
}`,NE=`#define STANDARD
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
}`,OE=`#define TOON
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
}`,FE=`#define TOON
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
}`,kE=`uniform float size;
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
}`,BE=`uniform vec3 diffuse;
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
}`,zE=`#include <common>
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
}`,HE=`uniform vec3 color;
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
}`,VE=`uniform float rotation;
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
}`,GE=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:db,alphahash_pars_fragment:fb,alphamap_fragment:hb,alphamap_pars_fragment:pb,alphatest_fragment:mb,alphatest_pars_fragment:gb,aomap_fragment:_b,aomap_pars_fragment:xb,batching_pars_vertex:vb,batching_vertex:bb,begin_vertex:yb,beginnormal_vertex:Eb,bsdfs:Sb,iridescence_fragment:Mb,bumpmap_pars_fragment:Tb,clipping_planes_fragment:wb,clipping_planes_pars_fragment:Ab,clipping_planes_pars_vertex:Cb,clipping_planes_vertex:Rb,color_fragment:Pb,color_pars_fragment:Ib,color_pars_vertex:Db,color_vertex:Lb,common:Ub,cube_uv_reflection_fragment:Nb,defaultnormal_vertex:Ob,displacementmap_pars_vertex:Fb,displacementmap_vertex:kb,emissivemap_fragment:Bb,emissivemap_pars_fragment:zb,colorspace_fragment:Hb,colorspace_pars_fragment:Vb,envmap_fragment:Gb,envmap_common_pars_fragment:Wb,envmap_pars_fragment:Xb,envmap_pars_vertex:qb,envmap_physical_pars_fragment:iy,envmap_vertex:$b,fog_vertex:Yb,fog_pars_vertex:jb,fog_fragment:Kb,fog_pars_fragment:Zb,gradientmap_pars_fragment:Jb,lightmap_pars_fragment:Qb,lights_lambert_fragment:ey,lights_lambert_pars_fragment:ty,lights_pars_begin:ny,lights_toon_fragment:ry,lights_toon_pars_fragment:sy,lights_phong_fragment:oy,lights_phong_pars_fragment:ay,lights_physical_fragment:ly,lights_physical_pars_fragment:cy,lights_fragment_begin:uy,lights_fragment_maps:dy,lights_fragment_end:fy,logdepthbuf_fragment:hy,logdepthbuf_pars_fragment:py,logdepthbuf_pars_vertex:my,logdepthbuf_vertex:gy,map_fragment:_y,map_pars_fragment:xy,map_particle_fragment:vy,map_particle_pars_fragment:by,metalnessmap_fragment:yy,metalnessmap_pars_fragment:Ey,morphinstance_vertex:Sy,morphcolor_vertex:My,morphnormal_vertex:Ty,morphtarget_pars_vertex:wy,morphtarget_vertex:Ay,normal_fragment_begin:Cy,normal_fragment_maps:Ry,normal_pars_fragment:Py,normal_pars_vertex:Iy,normal_vertex:Dy,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Uy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:Fy,opaque_fragment:ky,packing:By,premultiplied_alpha_fragment:zy,project_vertex:Hy,dithering_fragment:Vy,dithering_pars_fragment:Gy,roughnessmap_fragment:Wy,roughnessmap_pars_fragment:Xy,shadowmap_pars_fragment:qy,shadowmap_pars_vertex:$y,shadowmap_vertex:Yy,shadowmask_pars_fragment:jy,skinbase_vertex:Ky,skinning_pars_vertex:Zy,skinning_vertex:Jy,skinnormal_vertex:Qy,specularmap_fragment:eE,specularmap_pars_fragment:tE,tonemapping_fragment:nE,tonemapping_pars_fragment:iE,transmission_fragment:rE,transmission_pars_fragment:sE,uv_pars_fragment:oE,uv_pars_vertex:aE,uv_vertex:lE,worldpos_vertex:cE,background_vert:uE,background_frag:dE,backgroundCube_vert:fE,backgroundCube_frag:hE,cube_vert:pE,cube_frag:mE,depth_vert:gE,depth_frag:_E,distanceRGBA_vert:xE,distanceRGBA_frag:vE,equirect_vert:bE,equirect_frag:yE,linedashed_vert:EE,linedashed_frag:SE,meshbasic_vert:ME,meshbasic_frag:TE,meshlambert_vert:wE,meshlambert_frag:AE,meshmatcap_vert:CE,meshmatcap_frag:RE,meshnormal_vert:PE,meshnormal_frag:IE,meshphong_vert:DE,meshphong_frag:LE,meshphysical_vert:UE,meshphysical_frag:NE,meshtoon_vert:OE,meshtoon_frag:FE,points_vert:kE,points_frag:BE,shadow_vert:zE,shadow_frag:HE,sprite_vert:VE,sprite_frag:GE},we={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:Zt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:Zt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:Zt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ye(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:Zt([we.points,we.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:Zt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:Zt([we.common,we.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:Zt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:Zt([we.sprite,we.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:Zt([we.common,we.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:Zt([we.lights,we.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Lo={r:0,b:0,g:0},Ki=new pi,WE=new Pt;function XE(t,e,n,i,r,s,o){const a=new Ye(0);let l=s===!0?0:1,c,u,d=null,f=0,h=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?n:e).get(y)),y}function _(S){let y=!1;const L=g(S);L===null?p(a,l):L&&L.isColor&&(p(L,1),y=!0);const U=t.xr.getEnvironmentBlendMode();U==="additive"?i.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,y){const L=g(y);L&&(L.isCubeTexture||L.mapping===Ta)?(u===void 0&&(u=new Wn(new Qs(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:is(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(U,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(y.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=L,u.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(WE.makeRotationFromEuler(Ki)),u.material.toneMapped=lt.getTransfer(L.colorSpace)!==pt,(d!==L||f!==L.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):L&&L.isTexture&&(c===void 0&&(c=new Wn(new eo(2,2),new ki({name:"BackgroundMaterial",uniforms:is(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=L,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=lt.getTransfer(L.colorSpace)!==pt,L.matrixAutoUpdate===!0&&L.updateMatrix(),c.material.uniforms.uvTransform.value.copy(L.matrix),(d!==L||f!==L.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,d=L,f=L.version,h=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,y){S.getRGB(Lo,Hp(t)),i.buffers.color.setClear(Lo.r,Lo.g,Lo.b,y,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:w}}function qE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,D,B,H,V){let K=!1;const $=d(H,B,D);s!==$&&(s=$,c(s.object)),K=h(E,H,B,V),K&&g(E,H,B,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,y(E,D,B,H),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function d(E,D,B){const H=B.wireframe===!0;let V=i[E.id];V===void 0&&(V={},i[E.id]=V);let K=V[D.id];K===void 0&&(K={},V[D.id]=K);let $=K[H];return $===void 0&&($=f(l()),K[H]=$),$}function f(E){const D=[],B=[],H=[];for(let V=0;V<n;V++)D[V]=0,B[V]=0,H[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:B,attributeDivisors:H,object:E,attributes:{},index:null}}function h(E,D,B,H){const V=s.attributes,K=D.attributes;let $=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){const fe=V[N];let be=K[N];if(be===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(be=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(be=E.instanceColor)),fe===void 0||fe.attribute!==be||be&&fe.data!==be.data)return!0;$++}return s.attributesNum!==$||s.index!==H}function g(E,D,B,H){const V={},K=D.attributes;let $=0;const z=B.getAttributes();for(const N in z)if(z[N].location>=0){let fe=K[N];fe===void 0&&(N==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),N==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const be={};be.attribute=fe,fe&&fe.data&&(be.data=fe.data),V[N]=be,$++}s.attributes=V,s.attributesNum=$,s.index=H}function _(){const E=s.newAttributes;for(let D=0,B=E.length;D<B;D++)E[D]=0}function m(E){p(E,0)}function p(E,D){const B=s.newAttributes,H=s.enabledAttributes,V=s.attributeDivisors;B[E]=1,H[E]===0&&(t.enableVertexAttribArray(E),H[E]=1),V[E]!==D&&(t.vertexAttribDivisor(E,D),V[E]=D)}function w(){const E=s.newAttributes,D=s.enabledAttributes;for(let B=0,H=D.length;B<H;B++)D[B]!==E[B]&&(t.disableVertexAttribArray(B),D[B]=0)}function S(E,D,B,H,V,K,$){$===!0?t.vertexAttribIPointer(E,D,B,V,K):t.vertexAttribPointer(E,D,B,H,V,K)}function y(E,D,B,H){_();const V=H.attributes,K=B.getAttributes(),$=D.defaultAttributeValues;for(const z in K){const N=K[z];if(N.location>=0){let re=V[z];if(re===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){const fe=re.normalized,be=re.itemSize,Me=e.get(re);if(Me===void 0)continue;const Ke=Me.buffer,We=Me.type,ie=Me.bytesPerElement,de=We===t.INT||We===t.UNSIGNED_INT||re.gpuType===uu;if(re.isInterleavedBufferAttribute){const F=re.data,oe=F.stride,ae=re.offset;if(F.isInstancedInterleavedBuffer){for(let he=0;he<N.locationSize;he++)p(N.location+he,F.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let he=0;he<N.locationSize;he++)m(N.location+he);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let he=0;he<N.locationSize;he++)S(N.location+he,be/N.locationSize,We,fe,oe*ie,(ae+be/N.locationSize*he)*ie,de)}else{if(re.isInstancedBufferAttribute){for(let F=0;F<N.locationSize;F++)p(N.location+F,re.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let F=0;F<N.locationSize;F++)m(N.location+F);t.bindBuffer(t.ARRAY_BUFFER,Ke);for(let F=0;F<N.locationSize;F++)S(N.location+F,be/N.locationSize,We,fe,be*ie,be/N.locationSize*F*ie,de)}}else if($!==void 0){const fe=$[z];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(N.location,fe);break;case 3:t.vertexAttrib3fv(N.location,fe);break;case 4:t.vertexAttrib4fv(N.location,fe);break;default:t.vertexAttrib1fv(N.location,fe)}}}}w()}function L(){R();for(const E in i){const D=i[E];for(const B in D){const H=D[B];for(const V in H)u(H[V].object),delete H[V];delete D[B]}delete i[E]}}function U(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const B in D){const H=D[B];for(const V in H)u(H[V].object),delete H[V];delete D[B]}delete i[E.id]}function I(E){for(const D in i){const B=i[D];if(B[E.id]===void 0)continue;const H=B[E.id];for(const V in H)u(H[V].object),delete H[V];delete B[E.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:U,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function $E(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let h=0;for(let g=0;g<d;g++)h+=u[g];n.update(h,i,1)}function l(c,u,d,f){if(d===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*f[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function YE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Cn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const R=I===Ks&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==hi&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ai&&!R)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,U=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:L,maxSamples:U}}function jE(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,S=w*4;let y=p.clippingState||null;l.value=y,y=u(g,f,S,h);for(let L=0;L!==S;++L)y[L]=n[L];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,y=h;S!==_;++S,y+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function KE(t){let e=new WeakMap;function n(o,a){return a===Ql?o.mapping=es:a===ec&&(o.mapping=ts),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ql||a===ec)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Jv(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Br=4,uf=[.125,.215,.35,.446,.526,.582],rr=20,vl=new jp,df=new Ye;let bl=null,yl=0,El=0,Sl=!1;const er=(1+Math.sqrt(5))/2,Or=1/er,ff=[new J(-er,Or,0),new J(er,Or,0),new J(-Or,0,er),new J(Or,0,er),new J(0,er,-Or),new J(0,er,Or),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],ZE=new J;class hf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=ZE}=s;bl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,yl,El),this._renderer.xr.enabled=Sl,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===es||e.mapping===ts?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),yl=this._renderer.getActiveCubeFace(),El=this._renderer.getActiveMipmapLevel(),Sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:Ks,format:Cn,colorSpace:ns,depthBuffer:!1},r=pf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=JE(s)),this._blurMaterial=QE(s,e,n)}return r}_compileMaterial(e){const n=new Wn(this._lodPlanes[0],e);this._renderer.compile(n,vl)}_sceneToCubeUV(e,n,i,r,s){const l=new yn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(df),d.toneMapping=Li,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const _=new _u({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),m=new Wn(new Qs,_);let p=!1;const w=e.background;w?w.isColor&&(_.color.copy(w),e.background=null,p=!0):(_.color.copy(df),p=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const L=this._cubeSize;Uo(r,y*L,S>2?L:0,L,L),d.setRenderTarget(r),p&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=w}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===es||e.mapping===ts;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Wn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Uo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,vl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ff[(r-s-1)%ff.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Wn(this._lodPlanes[r],c),f=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*rr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const p=[];let w=0;for(let I=0;I<rr;++I){const R=I/_,b=Math.exp(-R*R/2);p.push(b),I===0?w+=b:I<m&&(w+=2*b)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const y=this._sizeLods[r],L=3*y*(r>S-Br?r-S+Br:0),U=4*(this._cubeSize-y);Uo(n,L,U,3*y,2*y),l.setRenderTarget(n),l.render(d,vl)}}function JE(t){const e=[],n=[],i=[];let r=t;const s=t-Br+1+uf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Br?l=uf[o-t+Br-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],h=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*h),S=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let U=0;U<h;U++){const I=U%3*2/3-1,R=U>2?0:-1,b=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];w.set(b,_*g*U),S.set(f,m*g*U);const E=[U,U,U,U,U,U];y.set(E,p*g*U)}const L=new Nn;L.setAttribute("position",new nn(w,_)),L.setAttribute("uv",new nn(S,m)),L.setAttribute("faceIndex",new nn(y,p)),e.push(L),r>Br&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function pf(t,e,n){const i=new mr(t,e,n);return i.texture.mapping=Ta,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function QE(t,e,n){const i=new Float32Array(rr),r=new J(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function mf(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xu(),fragmentShader:`

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
		`,blending:Di,depthTest:!1,depthWrite:!1})}function gf(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Di,depthTest:!1,depthWrite:!1})}function xu(){return`

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
	`}function eS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ql||l===ec,u=l===es||l===ts;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new hf(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new hf(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function tS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function nS(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const h=s.get(f);h&&(e.remove(h),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const h in f)e.update(f[h],t.ARRAY_BUFFER)}function c(d){const f=[],h=d.index,g=d.attributes.position;let _=0;if(h!==null){const w=h.array;_=h.version;for(let S=0,y=w.length;S<y;S+=3){const L=w[S+0],U=w[S+1],I=w[S+2];f.push(L,U,U,I,I,L)}}else if(g!==void 0){const w=g.array;_=g.version;for(let S=0,y=w.length/3-1;S<y;S+=3){const L=S+0,U=S+1,I=S+2;f.push(L,U,U,I,I,L)}}else return;const m=new(Up(f)?zp:Bp)(f,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function u(d){const f=s.get(d);if(f){const h=d.index;h!==null&&f.version<h.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function iS(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,h){t.drawElements(i,h,s,f*o),n.update(h,i,1)}function c(f,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,f*o,g),n.update(h,i,g))}function u(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function d(f,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,f,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*_[w];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function rS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function sS(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;h===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=a.attributes.position.count*S,L=1;y>e.maxTextureSize&&(L=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const U=new Float32Array(y*L*4*d),I=new Np(U,y,L,d);I.type=ai,I.needsUpdate=!0;const R=S*4;for(let E=0;E<d;E++){const D=m[E],B=p[E],H=w[E],V=y*L*4*E;for(let K=0;K<D.count;K++){const $=K*R;h===!0&&(r.fromBufferAttribute(D,K),U[V+$+0]=r.x,U[V+$+1]=r.y,U[V+$+2]=r.z,U[V+$+3]=0),g===!0&&(r.fromBufferAttribute(B,K),U[V+$+4]=r.x,U[V+$+5]=r.y,U[V+$+6]=r.z,U[V+$+7]=0),_===!0&&(r.fromBufferAttribute(H,K),U[V+$+8]=r.x,U[V+$+9]=r.y,U[V+$+10]=r.z,U[V+$+11]=H.itemSize===4?r.w:1)}}f={count:d,texture:I,size:new rt(y,L)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function oS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Zp=new kt,_f=new Yp(1,1),Jp=new Np,Qp=new Nv,em=new Gp,xf=[],vf=[],bf=new Float32Array(16),yf=new Float32Array(9),Ef=new Float32Array(4);function os(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=xf[r];if(s===void 0&&(s=new Float32Array(r),xf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Aa(t,e){let n=vf[e];n===void 0&&(n=new Int32Array(e),vf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function aS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function lS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function cS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function uS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function dS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;Ef.set(i),t.uniformMatrix2fv(this.addr,!1,Ef),Ot(n,i)}}function fS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;yf.set(i),t.uniformMatrix3fv(this.addr,!1,yf),Ot(n,i)}}function hS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Nt(n,i))return;bf.set(i),t.uniformMatrix4fv(this.addr,!1,bf),Ot(n,i)}}function pS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function gS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function _S(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function xS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function ES(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(_f.compareFunction=Lp,s=_f):s=Zp,n.setTexture2D(e||s,r)}function SS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Qp,r)}function MS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||em,r)}function TS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Jp,r)}function wS(t){switch(t){case 5126:return aS;case 35664:return lS;case 35665:return cS;case 35666:return uS;case 35674:return dS;case 35675:return fS;case 35676:return hS;case 5124:case 35670:return pS;case 35667:case 35671:return mS;case 35668:case 35672:return gS;case 35669:case 35673:return _S;case 5125:return xS;case 36294:return vS;case 36295:return bS;case 36296:return yS;case 35678:case 36198:case 36298:case 36306:case 35682:return ES;case 35679:case 36299:case 36307:return SS;case 35680:case 36300:case 36308:case 36293:return MS;case 36289:case 36303:case 36311:case 36292:return TS}}function AS(t,e){t.uniform1fv(this.addr,e)}function CS(t,e){const n=os(e,this.size,2);t.uniform2fv(this.addr,n)}function RS(t,e){const n=os(e,this.size,3);t.uniform3fv(this.addr,n)}function PS(t,e){const n=os(e,this.size,4);t.uniform4fv(this.addr,n)}function IS(t,e){const n=os(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function DS(t,e){const n=os(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function LS(t,e){const n=os(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function US(t,e){t.uniform1iv(this.addr,e)}function NS(t,e){t.uniform2iv(this.addr,e)}function OS(t,e){t.uniform3iv(this.addr,e)}function FS(t,e){t.uniform4iv(this.addr,e)}function kS(t,e){t.uniform1uiv(this.addr,e)}function BS(t,e){t.uniform2uiv(this.addr,e)}function zS(t,e){t.uniform3uiv(this.addr,e)}function HS(t,e){t.uniform4uiv(this.addr,e)}function VS(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Zp,s[o])}function GS(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Qp,s[o])}function WS(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||em,s[o])}function XS(t,e,n){const i=this.cache,r=e.length,s=Aa(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Jp,s[o])}function qS(t){switch(t){case 5126:return AS;case 35664:return CS;case 35665:return RS;case 35666:return PS;case 35674:return IS;case 35675:return DS;case 35676:return LS;case 5124:case 35670:return US;case 35667:case 35671:return NS;case 35668:case 35672:return OS;case 35669:case 35673:return FS;case 5125:return kS;case 36294:return BS;case 36295:return zS;case 36296:return HS;case 35678:case 36198:case 36298:case 36306:case 35682:return VS;case 35679:case 36299:case 36307:return GS;case 35680:case 36300:case 36308:case 36293:return WS;case 36289:case 36303:case 36311:case 36292:return XS}}class $S{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=wS(n.type)}}class YS{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qS(n.type)}}class jS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ml=/(\w+)(\])?(\[|\.)?/g;function Sf(t,e){t.seq.push(e),t.map[e.id]=e}function KS(t,e,n){const i=t.name,r=i.length;for(Ml.lastIndex=0;;){const s=Ml.exec(i),o=Ml.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sf(n,c===void 0?new $S(a,t,e):new YS(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new jS(a),Sf(n,d)),n=d}}}class $o{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);KS(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const ZS=37297;let JS=0;function QS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Tf=new Qe;function eM(t){lt._getMatrix(Tf,lt.workingColorSpace,t);const e=`mat3( ${Tf.elements.map(n=>n.toFixed(4))} )`;switch(lt.getTransfer(t)){case aa:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+QS(t.getShaderSource(e),a)}else return s}function tM(t,e){const n=eM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function nM(t,e){let n;switch(e){case lv:n="Linear";break;case cv:n="Reinhard";break;case uv:n="Cineon";break;case dv:n="ACESFilmic";break;case hv:n="AgX";break;case pv:n="Neutral";break;case fv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const No=new J;function iM(){lt.getLuminanceCoefficients(No);const t=No.x.toFixed(4),e=No.y.toFixed(4),n=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ys).join(`
`)}function sM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function oM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ys(t){return t!==""}function Af(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Lc(t){return t.replace(aM,cM)}const lM=new Map;function cM(t,e){let n=et[e];if(n===void 0){const i=lM.get(e);if(i!==void 0)n=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Lc(n)}const uM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(t){return t.replace(uM,dM)}function dM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Pf(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function fM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Ep?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===H0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function hM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case es:case ts:e="ENVMAP_TYPE_CUBE";break;case Ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pM(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===ts&&(e="ENVMAP_MODE_REFRACTION"),e}function mM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sp:e="ENVMAP_BLENDING_MULTIPLY";break;case ov:e="ENVMAP_BLENDING_MIX";break;case av:e="ENVMAP_BLENDING_ADD";break}return e}function gM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function _M(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=fM(n),c=hM(n),u=pM(n),d=mM(n),f=gM(n),h=rM(n),g=sM(s),_=r.createProgram();let m,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ys).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ys).join(`
`),p.length>0&&(p+=`
`)):(m=[Pf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ys).join(`
`),p=[Pf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Li?"#define TONE_MAPPING":"",n.toneMapping!==Li?et.tonemapping_pars_fragment:"",n.toneMapping!==Li?nM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,tM("linearToOutputTexel",n.outputColorSpace),iM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ys).join(`
`)),o=Lc(o),o=Af(o,n),o=Cf(o,n),a=Lc(a),a=Af(a,n),a=Cf(a,n),o=Rf(o),a=Rf(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Bd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+m+o,y=w+p+a,L=Mf(r,r.VERTEX_SHADER,S),U=Mf(r,r.FRAGMENT_SHADER,y);r.attachShader(_,L),r.attachShader(_,U),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(D){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(L)||"",V=r.getShaderInfoLog(U)||"",K=B.trim(),$=H.trim(),z=V.trim();let N=!0,re=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(N=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,L,U);else{const fe=wf(r,L,"vertex"),be=wf(r,U,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+K+`
`+fe+`
`+be)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||z==="")&&(re=!1);re&&(D.diagnostics={runnable:N,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(L),r.deleteShader(U),R=new $o(r,_),b=oM(r,_)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let b;this.getAttributes=function(){return b===void 0&&I(this),b};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(_,ZS)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=JS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=U,this}let xM=0;class vM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new bM(e),n.set(e,i)),i}}class bM{constructor(e){this.id=xM++,this.code=e,this.usedTimes=0}}function yM(t,e,n,i,r,s,o){const a=new Fp,l=new vM,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,D,B,H){const V=B.fog,K=H.geometry,$=b.isMeshStandardMaterial?B.environment:null,z=(b.isMeshStandardMaterial?n:e).get(b.envMap||$),N=z&&z.mapping===Ta?z.image.height:null,re=g[b.type];b.precision!==null&&(h=r.getMaxPrecision(b.precision),h!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",h,"instead."));const fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,be=fe!==void 0?fe.length:0;let Me=0;K.morphAttributes.position!==void 0&&(Me=1),K.morphAttributes.normal!==void 0&&(Me=2),K.morphAttributes.color!==void 0&&(Me=3);let Ke,We,ie,de;if(re){const ct=zn[re];Ke=ct.vertexShader,We=ct.fragmentShader}else Ke=b.vertexShader,We=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),de=l.getFragmentShaderID(b);const F=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),ae=H.isInstancedMesh===!0,he=H.isBatchedMesh===!0,Te=!!b.map,A=!!b.matcap,x=!!z,k=!!b.aoMap,q=!!b.lightMap,te=!!b.bumpMap,W=!!b.normalMap,me=!!b.displacementMap,Q=!!b.emissiveMap,le=!!b.metalnessMap,ce=!!b.roughnessMap,Ae=b.anisotropy>0,M=b.clearcoat>0,v=b.dispersion>0,O=b.iridescence>0,j=b.sheen>0,se=b.transmission>0,Z=Ae&&!!b.anisotropyMap,Ce=M&&!!b.clearcoatMap,pe=M&&!!b.clearcoatNormalMap,Ie=M&&!!b.clearcoatRoughnessMap,De=O&&!!b.iridescenceMap,ge=O&&!!b.iridescenceThicknessMap,Se=j&&!!b.sheenColorMap,Oe=j&&!!b.sheenRoughnessMap,Le=!!b.specularMap,Ee=!!b.specularColorMap,qe=!!b.specularIntensityMap,C=se&&!!b.transmissionMap,Y=se&&!!b.thicknessMap,ye=!!b.gradientMap,Fe=!!b.alphaMap,_e=b.alphaTest>0,ue=!!b.alphaHash,ze=!!b.extensions;let Ze=Li;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ze=t.toneMapping);const vt={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:Ke,fragmentShader:We,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:de,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:h,batching:he,batchingColor:he&&H._colorsTexture!==null,instancing:ae,instancingColor:ae&&H.instanceColor!==null,instancingMorph:ae&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ns,alphaToCoverage:!!b.alphaToCoverage,map:Te,matcap:A,envMap:x,envMapMode:x&&z.mapping,envMapCubeUVHeight:N,aoMap:k,lightMap:q,bumpMap:te,normalMap:W,displacementMap:f&&me,emissiveMap:Q,normalMapObjectSpace:W&&b.normalMapType===vv,normalMapTangentSpace:W&&b.normalMapType===xv,metalnessMap:le,roughnessMap:ce,anisotropy:Ae,anisotropyMap:Z,clearcoat:M,clearcoatMap:Ce,clearcoatNormalMap:pe,clearcoatRoughnessMap:Ie,dispersion:v,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:ge,sheen:j,sheenColorMap:Se,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Ee,specularIntensityMap:qe,transmission:se,transmissionMap:C,thicknessMap:Y,gradientMap:ye,opaque:b.transparent===!1&&b.blending===Xr&&b.alphaToCoverage===!1,alphaMap:Fe,alphaTest:_e,alphaHash:ue,combine:b.combine,mapUv:Te&&_(b.map.channel),aoMapUv:k&&_(b.aoMap.channel),lightMapUv:q&&_(b.lightMap.channel),bumpMapUv:te&&_(b.bumpMap.channel),normalMapUv:W&&_(b.normalMap.channel),displacementMapUv:me&&_(b.displacementMap.channel),emissiveMapUv:Q&&_(b.emissiveMap.channel),metalnessMapUv:le&&_(b.metalnessMap.channel),roughnessMapUv:ce&&_(b.roughnessMap.channel),anisotropyMapUv:Z&&_(b.anisotropyMap.channel),clearcoatMapUv:Ce&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:pe&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&_(b.sheenRoughnessMap.channel),specularMapUv:Le&&_(b.specularMap.channel),specularColorMapUv:Ee&&_(b.specularColorMap.channel),specularIntensityMapUv:qe&&_(b.specularIntensityMap.channel),transmissionMapUv:C&&_(b.transmissionMap.channel),thicknessMapUv:Y&&_(b.thicknessMap.channel),alphaMapUv:Fe&&_(b.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(W||Ae),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Te||Fe),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:Me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ze,decodeVideoTexture:Te&&b.map.isVideoTexture===!0&&lt.getTransfer(b.map.colorSpace)===pt,decodeVideoTextureEmissive:Q&&b.emissiveMap.isVideoTexture===!0&&lt.getTransfer(b.emissiveMap.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Hn,flipSided:b.side===on,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ze&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&b.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=c.has(1),vt.vertexUv2s=c.has(2),vt.vertexUv3s=c.has(3),c.clear(),vt}function p(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const D in b.defines)E.push(D),E.push(b.defines[D]);return b.isRawShaderMaterial===!1&&(w(E,b),S(E,b),E.push(t.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function w(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function S(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const E=g[b.type];let D;if(E){const B=zn[E];D=Yv.clone(B.uniforms)}else D=b.uniforms;return D}function L(b,E){let D;for(let B=0,H=u.length;B<H;B++){const V=u[B];if(V.cacheKey===E){D=V,++D.usedTimes;break}}return D===void 0&&(D=new _M(t,E,b,s),u.push(D)),D}function U(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function I(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:L,releaseProgram:U,releaseShaderCache:I,programs:u,dispose:R}}function EM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function SM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function If(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Df(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,h,g,_,m){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:h,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},t[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=_,p.group=m),e++,p}function a(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(d,f,h,g,_,m){const p=o(d,f,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(d,f){n.length>1&&n.sort(d||SM),i.length>1&&i.sort(f||If),r.length>1&&r.sort(f||If)}function u(){for(let d=e,f=t.length;d<f;d++){const h=t[d];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function MM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Df,t.set(i,[o])):r>=s.length?(o=new Df,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function TM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ye};break;case"SpotLight":n={position:new J,direction:new J,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function wM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let AM=0;function CM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RM(t){const e=new TM,n=wM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Pt,o=new Pt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,w=0,S=0,y=0,L=0,U=0,I=0;c.sort(CM);for(let b=0,E=c.length;b<E;b++){const D=c[b],B=D.color,H=D.intensity,V=D.distance,K=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=B.r*H,d+=B.g*H,f+=B.b*H;else if(D.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(D.sh.coefficients[$],H);I++}else if(D.isDirectionalLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const z=D.shadow,N=n.get(D);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.directionalShadow[h]=N,i.directionalShadowMap[h]=K,i.directionalShadowMatrix[h]=D.shadow.matrix,w++}i.directional[h]=$,h++}else if(D.isSpotLight){const $=e.get(D);$.position.setFromMatrixPosition(D.matrixWorld),$.color.copy(B).multiplyScalar(H),$.distance=V,$.coneCos=Math.cos(D.angle),$.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),$.decay=D.decay,i.spot[_]=$;const z=D.shadow;if(D.map&&(i.spotLightMap[L]=D.map,L++,z.updateMatrices(D),D.castShadow&&U++),i.spotLightMatrix[_]=z.matrix,D.castShadow){const N=n.get(D);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,i.spotShadow[_]=N,i.spotShadowMap[_]=K,y++}_++}else if(D.isRectAreaLight){const $=e.get(D);$.color.copy(B).multiplyScalar(H),$.halfWidth.set(D.width*.5,0,0),$.halfHeight.set(0,D.height*.5,0),i.rectArea[m]=$,m++}else if(D.isPointLight){const $=e.get(D);if($.color.copy(D.color).multiplyScalar(D.intensity),$.distance=D.distance,$.decay=D.decay,D.castShadow){const z=D.shadow,N=n.get(D);N.shadowIntensity=z.intensity,N.shadowBias=z.bias,N.shadowNormalBias=z.normalBias,N.shadowRadius=z.radius,N.shadowMapSize=z.mapSize,N.shadowCameraNear=z.camera.near,N.shadowCameraFar=z.camera.far,i.pointShadow[g]=N,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=D.shadow.matrix,S++}i.point[g]=$,g++}else if(D.isHemisphereLight){const $=e.get(D);$.skyColor.copy(D.color).multiplyScalar(H),$.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[p]=$,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==h||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==L||R.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+L-U,i.spotLightMap.length=L,i.numSpotLightShadowsWithMaps=U,i.numLightProbes=I,R.directionalLength=h,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=L,R.numLightProbes=I,i.version=AM++)}function l(c,u){let d=0,f=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const S=c[p];if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(S.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Lf(t){const e=new RM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lf(t),e.set(r,[a])):s>=o.length?(a=new Lf(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`;function LM(t,e,n){let i=new $p;const r=new rt,s=new rt,o=new Rt,a=new sb({depthPacking:_v}),l=new ob,c={},u=n.maxTextureSize,d={[Fi]:on,[on]:Fi,[Hn]:Hn},f=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:IM,fragmentShader:DM}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Nn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Wn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ep;let p=this.type;this.render=function(U,I,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||U.length===0)return;const b=t.getRenderTarget(),E=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Di),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=p!==ni&&this.type===ni,V=p===ni&&this.type!==ni;for(let K=0,$=U.length;K<$;K++){const z=U[K],N=z.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const re=N.getFrameExtents();if(r.multiply(re),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/re.x),r.x=s.x*re.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/re.y),r.y=s.y*re.y,N.mapSize.y=s.y)),N.map===null||H===!0||V===!0){const be=this.type!==ni?{minFilter:Pn,magFilter:Pn}:{};N.map!==null&&N.map.dispose(),N.map=new mr(r.x,r.y,be),N.map.texture.name=z.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const fe=N.getViewportCount();for(let be=0;be<fe;be++){const Me=N.getViewport(be);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),B.viewport(o),N.updateMatrices(z,be),i=N.getFrustum(),y(I,R,N.camera,z,this.type)}N.isPointLightShadow!==!0&&this.type===ni&&w(N,R),N.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(b,E,D)};function w(U,I){const R=e.update(_);f.defines.VSM_SAMPLES!==U.blurSamples&&(f.defines.VSM_SAMPLES=U.blurSamples,h.defines.VSM_SAMPLES=U.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new mr(r.x,r.y)),f.uniforms.shadow_pass.value=U.map.texture,f.uniforms.resolution.value=U.mapSize,f.uniforms.radius.value=U.radius,t.setRenderTarget(U.mapPass),t.clear(),t.renderBufferDirect(I,null,R,f,_,null),h.uniforms.shadow_pass.value=U.mapPass.texture,h.uniforms.resolution.value=U.mapSize,h.uniforms.radius.value=U.radius,t.setRenderTarget(U.map),t.clear(),t.renderBufferDirect(I,null,R,h,_,null)}function S(U,I,R,b){let E=null;const D=R.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(D!==void 0)E=D;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=E.uuid,H=I.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let K=V[H];K===void 0&&(K=E.clone(),V[H]=K,I.addEventListener("dispose",L)),E=K}if(E.visible=I.visible,E.wireframe=I.wireframe,b===ni?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:d[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=t.properties.get(E);B.light=R}return E}function y(U,I,R,b,E){if(U.visible===!1)return;if(U.layers.test(I.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&E===ni)&&(!U.frustumCulled||i.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,U.matrixWorld);const H=e.update(U),V=U.material;if(Array.isArray(V)){const K=H.groups;for(let $=0,z=K.length;$<z;$++){const N=K[$],re=V[N.materialIndex];if(re&&re.visible){const fe=S(U,re,b,E);U.onBeforeShadow(t,U,I,R,H,fe,N),t.renderBufferDirect(R,null,H,fe,U,N),U.onAfterShadow(t,U,I,R,H,fe,N)}}}else if(V.visible){const K=S(U,V,b,E);U.onBeforeShadow(t,U,I,R,H,K,null),t.renderBufferDirect(R,null,H,K,U,null),U.onAfterShadow(t,U,I,R,H,K,null)}}const B=U.children;for(let H=0,V=B.length;H<V;H++)y(B[H],I,R,b,E)}function L(U){U.target.removeEventListener("dispose",L);for(const R in c){const b=c[R],E=U.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const UM={[ql]:$l,[Yl]:Zl,[jl]:Jl,[Qr]:Kl,[$l]:ql,[Zl]:Yl,[Jl]:jl,[Kl]:Qr};function NM(t,e){function n(){let C=!1;const Y=new Rt;let ye=null;const Fe=new Rt(0,0,0,0);return{setMask:function(_e){ye!==_e&&!C&&(t.colorMask(_e,_e,_e,_e),ye=_e)},setLocked:function(_e){C=_e},setClear:function(_e,ue,ze,Ze,vt){vt===!0&&(_e*=Ze,ue*=Ze,ze*=Ze),Y.set(_e,ue,ze,Ze),Fe.equals(Y)===!1&&(t.clearColor(_e,ue,ze,Ze),Fe.copy(Y))},reset:function(){C=!1,ye=null,Fe.set(-1,0,0,0)}}}function i(){let C=!1,Y=!1,ye=null,Fe=null,_e=null;return{setReversed:function(ue){if(Y!==ue){const ze=e.get("EXT_clip_control");ue?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),Y=ue;const Ze=_e;_e=null,this.setClear(Ze)}},getReversed:function(){return Y},setTest:function(ue){ue?F(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ue){ye!==ue&&!C&&(t.depthMask(ue),ye=ue)},setFunc:function(ue){if(Y&&(ue=UM[ue]),Fe!==ue){switch(ue){case ql:t.depthFunc(t.NEVER);break;case $l:t.depthFunc(t.ALWAYS);break;case Yl:t.depthFunc(t.LESS);break;case Qr:t.depthFunc(t.LEQUAL);break;case jl:t.depthFunc(t.EQUAL);break;case Kl:t.depthFunc(t.GEQUAL);break;case Zl:t.depthFunc(t.GREATER);break;case Jl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Fe=ue}},setLocked:function(ue){C=ue},setClear:function(ue){_e!==ue&&(Y&&(ue=1-ue),t.clearDepth(ue),_e=ue)},reset:function(){C=!1,ye=null,Fe=null,_e=null,Y=!1}}}function r(){let C=!1,Y=null,ye=null,Fe=null,_e=null,ue=null,ze=null,Ze=null,vt=null;return{setTest:function(ct){C||(ct?F(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(ct){Y!==ct&&!C&&(t.stencilMask(ct),Y=ct)},setFunc:function(ct,$n,On){(ye!==ct||Fe!==$n||_e!==On)&&(t.stencilFunc(ct,$n,On),ye=ct,Fe=$n,_e=On)},setOp:function(ct,$n,On){(ue!==ct||ze!==$n||Ze!==On)&&(t.stencilOp(ct,$n,On),ue=ct,ze=$n,Ze=On)},setLocked:function(ct){C=ct},setClear:function(ct){vt!==ct&&(t.clearStencil(ct),vt=ct)},reset:function(){C=!1,Y=null,ye=null,Fe=null,_e=null,ue=null,ze=null,Ze=null,vt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,w=null,S=null,y=null,L=null,U=null,I=new Ye(0,0,0),R=0,b=!1,E=null,D=null,B=null,H=null,V=null;const K=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const N=t.getParameter(t.VERSION);N.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(N)[1]),$=z>=1):N.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(N)[1]),$=z>=2);let re=null,fe={};const be=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Ke=new Rt().fromArray(be),We=new Rt().fromArray(Me);function ie(C,Y,ye,Fe){const _e=new Uint8Array(4),ue=t.createTexture();t.bindTexture(C,ue),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<ye;ze++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(Y,0,t.RGBA,1,1,Fe,0,t.RGBA,t.UNSIGNED_BYTE,_e):t.texImage2D(Y+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,_e);return ue}const de={};de[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),de[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),de[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(Qr),te(!1),W(Nd),F(t.CULL_FACE),k(Di);function F(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function oe(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function ae(C,Y){return d[C]!==Y?(t.bindFramebuffer(C,Y),d[C]=Y,C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Y),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Y),!0):!1}function he(C,Y){let ye=h,Fe=!1;if(C){ye=f.get(Y),ye===void 0&&(ye=[],f.set(Y,ye));const _e=C.textures;if(ye.length!==_e.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,ze=_e.length;ue<ze;ue++)ye[ue]=t.COLOR_ATTACHMENT0+ue;ye.length=_e.length,Fe=!0}}else ye[0]!==t.BACK&&(ye[0]=t.BACK,Fe=!0);Fe&&t.drawBuffers(ye)}function Te(C){return g!==C?(t.useProgram(C),g=C,!0):!1}const A={[ir]:t.FUNC_ADD,[G0]:t.FUNC_SUBTRACT,[W0]:t.FUNC_REVERSE_SUBTRACT};A[X0]=t.MIN,A[q0]=t.MAX;const x={[$0]:t.ZERO,[Y0]:t.ONE,[j0]:t.SRC_COLOR,[Wl]:t.SRC_ALPHA,[tv]:t.SRC_ALPHA_SATURATE,[Q0]:t.DST_COLOR,[Z0]:t.DST_ALPHA,[K0]:t.ONE_MINUS_SRC_COLOR,[Xl]:t.ONE_MINUS_SRC_ALPHA,[ev]:t.ONE_MINUS_DST_COLOR,[J0]:t.ONE_MINUS_DST_ALPHA,[nv]:t.CONSTANT_COLOR,[iv]:t.ONE_MINUS_CONSTANT_COLOR,[rv]:t.CONSTANT_ALPHA,[sv]:t.ONE_MINUS_CONSTANT_ALPHA};function k(C,Y,ye,Fe,_e,ue,ze,Ze,vt,ct){if(C===Di){_===!0&&(oe(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),C!==V0){if(C!==m||ct!==b){if((p!==ir||y!==ir)&&(t.blendEquation(t.FUNC_ADD),p=ir,y=ir),ct)switch(C){case Xr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bs:t.blendFunc(t.ONE,t.ONE);break;case Od:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case Xr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Od:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}w=null,S=null,L=null,U=null,I.set(0,0,0),R=0,m=C,b=ct}return}_e=_e||Y,ue=ue||ye,ze=ze||Fe,(Y!==p||_e!==y)&&(t.blendEquationSeparate(A[Y],A[_e]),p=Y,y=_e),(ye!==w||Fe!==S||ue!==L||ze!==U)&&(t.blendFuncSeparate(x[ye],x[Fe],x[ue],x[ze]),w=ye,S=Fe,L=ue,U=ze),(Ze.equals(I)===!1||vt!==R)&&(t.blendColor(Ze.r,Ze.g,Ze.b,vt),I.copy(Ze),R=vt),m=C,b=!1}function q(C,Y){C.side===Hn?oe(t.CULL_FACE):F(t.CULL_FACE);let ye=C.side===on;Y&&(ye=!ye),te(ye),C.blending===Xr&&C.transparent===!1?k(Di):k(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),o.setFunc(C.depthFunc),o.setTest(C.depthTest),o.setMask(C.depthWrite),s.setMask(C.colorWrite);const Fe=C.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Q(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function te(C){E!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),E=C)}function W(C){C!==B0?(F(t.CULL_FACE),C!==D&&(C===Nd?t.cullFace(t.BACK):C===z0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),D=C}function me(C){C!==B&&($&&t.lineWidth(C),B=C)}function Q(C,Y,ye){C?(F(t.POLYGON_OFFSET_FILL),(H!==Y||V!==ye)&&(t.polygonOffset(Y,ye),H=Y,V=ye)):oe(t.POLYGON_OFFSET_FILL)}function le(C){C?F(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function ce(C){C===void 0&&(C=t.TEXTURE0+K-1),re!==C&&(t.activeTexture(C),re=C)}function Ae(C,Y,ye){ye===void 0&&(re===null?ye=t.TEXTURE0+K-1:ye=re);let Fe=fe[ye];Fe===void 0&&(Fe={type:void 0,texture:void 0},fe[ye]=Fe),(Fe.type!==C||Fe.texture!==Y)&&(re!==ye&&(t.activeTexture(ye),re=ye),t.bindTexture(C,Y||de[C]),Fe.type=C,Fe.texture=Y)}function M(){const C=fe[re];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function O(){try{t.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function j(){try{t.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function se(){try{t.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function pe(){try{t.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ie(){try{t.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function De(){try{t.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{t.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(C){Ke.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Ke.copy(C))}function Oe(C){We.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),We.copy(C))}function Le(C,Y){let ye=c.get(Y);ye===void 0&&(ye=new WeakMap,c.set(Y,ye));let Fe=ye.get(C);Fe===void 0&&(Fe=t.getUniformBlockIndex(Y,C.name),ye.set(C,Fe))}function Ee(C,Y){const Fe=c.get(Y).get(C);l.get(Y)!==Fe&&(t.uniformBlockBinding(Y,Fe,C.__bindingPointIndex),l.set(Y,Fe))}function qe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},re=null,fe={},d={},f=new WeakMap,h=[],g=null,_=!1,m=null,p=null,w=null,S=null,y=null,L=null,U=null,I=new Ye(0,0,0),R=0,b=!1,E=null,D=null,B=null,H=null,V=null,Ke.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:oe,bindFramebuffer:ae,drawBuffers:he,useProgram:Te,setBlending:k,setMaterial:q,setFlipSided:te,setCullFace:W,setLineWidth:me,setPolygonOffset:Q,setScissorTest:le,activeTexture:ce,bindTexture:Ae,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:O,texImage2D:De,texImage3D:ge,updateUBOMapping:Le,uniformBlockBinding:Ee,texStorage2D:pe,texStorage3D:Ie,texSubImage2D:j,texSubImage3D:se,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ce,scissor:Se,viewport:Oe,reset:qe}}function OM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new rt,u=new WeakMap;let d;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return h?new OffscreenCanvas(M,v):ca("canvas")}function _(M,v,O){let j=1;const se=Ae(M);if((se.width>O||se.height>O)&&(j=O/Math.max(se.width,se.height)),j<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const Z=Math.floor(j*se.width),Ce=Math.floor(j*se.height);d===void 0&&(d=g(Z,Ce));const pe=v?g(Z,Ce):d;return pe.width=Z,pe.height=Ce,pe.getContext("2d").drawImage(M,0,0,Z,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Z+"x"+Ce+")."),pe}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),M;return M}function m(M){return M.generateMipmaps}function p(M){t.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,v,O,j,se=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let Z=v;if(v===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8)),v===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),v===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8)),v===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),v===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),O===t.UNSIGNED_INT&&(Z=t.RGB32UI),O===t.BYTE&&(Z=t.RGB8I),O===t.SHORT&&(Z=t.RGB16I),O===t.INT&&(Z=t.RGB32I)),v===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),O===t.UNSIGNED_INT&&(Z=t.RGBA32UI),O===t.BYTE&&(Z=t.RGBA8I),O===t.SHORT&&(Z=t.RGBA16I),O===t.INT&&(Z=t.RGBA32I)),v===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),v===t.RGBA){const Ce=se?aa:lt.getTransfer(j);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=Ce===pt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(M,v){let O;return M?v===null||v===pr||v===Hs?O=t.DEPTH24_STENCIL8:v===ai?O=t.DEPTH32F_STENCIL8:v===zs&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===pr||v===Hs?O=t.DEPTH_COMPONENT24:v===ai?O=t.DEPTH_COMPONENT32F:v===zs&&(O=t.DEPTH_COMPONENT16),O}function L(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==Pn&&M.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function U(M){const v=M.target;v.removeEventListener("dispose",U),R(v),v.isVideoTexture&&u.delete(v)}function I(M){const v=M.target;v.removeEventListener("dispose",I),E(v)}function R(M){const v=i.get(M);if(v.__webglInit===void 0)return;const O=M.source,j=f.get(O);if(j){const se=j[v.__cacheKey];se.usedTimes--,se.usedTimes===0&&b(M),Object.keys(j).length===0&&f.delete(O)}i.remove(M)}function b(M){const v=i.get(M);t.deleteTexture(v.__webglTexture);const O=M.source,j=f.get(O);delete j[v.__cacheKey],o.memory.textures--}function E(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let se=0;se<v.__webglFramebuffer[j].length;se++)t.deleteFramebuffer(v.__webglFramebuffer[j][se]);else t.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)t.deleteFramebuffer(v.__webglFramebuffer[j]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const O=M.textures;for(let j=0,se=O.length;j<se;j++){const Z=i.get(O[j]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(M)}let D=0;function B(){D=0}function H(){const M=D;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),D+=1,M}function V(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function K(M,v){const O=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&O.__version!==M.version){const j=M.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(O,M,v);return}}else M.isExternalTexture&&(O.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+v)}function $(M,v){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){de(O,M,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+v)}function z(M,v){const O=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&O.__version!==M.version){de(O,M,v);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+v)}function N(M,v){const O=i.get(M);if(M.version>0&&O.__version!==M.version){F(O,M,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+v)}const re={[tc]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[nc]:t.MIRRORED_REPEAT},fe={[Pn]:t.NEAREST,[mv]:t.NEAREST_MIPMAP_NEAREST,[co]:t.NEAREST_MIPMAP_LINEAR,[qt]:t.LINEAR,[$a]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},be={[bv]:t.NEVER,[wv]:t.ALWAYS,[yv]:t.LESS,[Lp]:t.LEQUAL,[Ev]:t.EQUAL,[Tv]:t.GEQUAL,[Sv]:t.GREATER,[Mv]:t.NOTEQUAL};function Me(M,v){if(v.type===ai&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===$a||v.magFilter===co||v.magFilter===ar||v.minFilter===qt||v.minFilter===$a||v.minFilter===co||v.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,re[v.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,re[v.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,re[v.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,fe[v.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,be[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pn||v.minFilter!==co&&v.minFilter!==ar||v.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(M,v){let O=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",U));const j=v.source;let se=f.get(j);se===void 0&&(se={},f.set(j,se));const Z=V(v);if(Z!==M.__cacheKey){se[Z]===void 0&&(se[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),se[Z].usedTimes++;const Ce=se[M.__cacheKey];Ce!==void 0&&(se[M.__cacheKey].usedTimes--,Ce.usedTimes===0&&b(v)),M.__cacheKey=Z,M.__webglTexture=se[Z].texture}return O}function We(M,v,O){return Math.floor(Math.floor(M/O)/v)}function ie(M,v,O,j){const Z=M.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,O,j,v.data);else{Z.sort((ge,Se)=>ge.start-Se.start);let Ce=0;for(let ge=1;ge<Z.length;ge++){const Se=Z[Ce],Oe=Z[ge],Le=Se.start+Se.count,Ee=We(Oe.start,v.width,4),qe=We(Se.start,v.width,4);Oe.start<=Le+1&&Ee===qe&&We(Oe.start+Oe.count-1,v.width,4)===Ee?Se.count=Math.max(Se.count,Oe.start+Oe.count-Se.start):(++Ce,Z[Ce]=Oe)}Z.length=Ce+1;const pe=t.getParameter(t.UNPACK_ROW_LENGTH),Ie=t.getParameter(t.UNPACK_SKIP_PIXELS),De=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ge=0,Se=Z.length;ge<Se;ge++){const Oe=Z[ge],Le=Math.floor(Oe.start/4),Ee=Math.ceil(Oe.count/4),qe=Le%v.width,C=Math.floor(Le/v.width),Y=Ee,ye=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(t.UNPACK_SKIP_ROWS,C),n.texSubImage2D(t.TEXTURE_2D,0,qe,C,Y,ye,O,j,v.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,pe),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ie),t.pixelStorei(t.UNPACK_SKIP_ROWS,De)}}function de(M,v,O){let j=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(j=t.TEXTURE_3D);const se=Ke(M,v),Z=v.source;n.bindTexture(j,M.__webglTexture,t.TEXTURE0+O);const Ce=i.get(Z);if(Z.version!==Ce.__version||se===!0){n.activeTexture(t.TEXTURE0+O);const pe=lt.getPrimaries(lt.workingColorSpace),Ie=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),De=v.colorSpace===Ri||pe===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ge=_(v.image,!1,r.maxTextureSize);ge=ce(v,ge);const Se=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let Le=S(v.internalFormat,Se,Oe,v.colorSpace,v.isVideoTexture);Me(j,v);let Ee;const qe=v.mipmaps,C=v.isVideoTexture!==!0,Y=Ce.__version===void 0||se===!0,ye=Z.dataReady,Fe=L(v,ge);if(v.isDepthTexture)Le=y(v.format===Gs,v.type),Y&&(C?n.texStorage2D(t.TEXTURE_2D,1,Le,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,Se,Oe,null));else if(v.isDataTexture)if(qe.length>0){C&&Y&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,qe[0].width,qe[0].height);for(let _e=0,ue=qe.length;_e<ue;_e++)Ee=qe[_e],C?ye&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Se,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ee.width,Ee.height,0,Se,Oe,Ee.data);v.generateMipmaps=!1}else C?(Y&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,ge.width,ge.height),ye&&ie(v,ge,Se,Oe)):n.texImage2D(t.TEXTURE_2D,0,Le,ge.width,ge.height,0,Se,Oe,ge.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){C&&Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Le,qe[0].width,qe[0].height,ge.depth);for(let _e=0,ue=qe.length;_e<ue;_e++)if(Ee=qe[_e],v.format!==Cn)if(Se!==null)if(C){if(ye)if(v.layerUpdates.size>0){const ze=cf(Ee.width,Ee.height,v.format,v.type);for(const Ze of v.layerUpdates){const vt=Ee.data.subarray(Ze*ze/Ee.data.BYTES_PER_ELEMENT,(Ze+1)*ze/Ee.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,Ze,Ee.width,Ee.height,1,Se,vt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,ge.depth,Se,Ee.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ee.width,Ee.height,ge.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,_e,0,0,0,Ee.width,Ee.height,ge.depth,Se,Oe,Ee.data):n.texImage3D(t.TEXTURE_2D_ARRAY,_e,Le,Ee.width,Ee.height,ge.depth,0,Se,Oe,Ee.data)}else{C&&Y&&n.texStorage2D(t.TEXTURE_2D,Fe,Le,qe[0].width,qe[0].height);for(let _e=0,ue=qe.length;_e<ue;_e++)Ee=qe[_e],v.format!==Cn?Se!==null?C?ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Se,Ee.data):n.compressedTexImage2D(t.TEXTURE_2D,_e,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?ye&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Ee.width,Ee.height,Se,Oe,Ee.data):n.texImage2D(t.TEXTURE_2D,_e,Le,Ee.width,Ee.height,0,Se,Oe,Ee.data)}else if(v.isDataArrayTexture)if(C){if(Y&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Fe,Le,ge.width,ge.height,ge.depth),ye)if(v.layerUpdates.size>0){const _e=cf(ge.width,ge.height,v.format,v.type);for(const ue of v.layerUpdates){const ze=ge.data.subarray(ue*_e/ge.data.BYTES_PER_ELEMENT,(ue+1)*_e/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,ge.width,ge.height,1,Se,Oe,ze)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Se,Oe,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Se,Oe,ge.data);else if(v.isData3DTexture)C?(Y&&n.texStorage3D(t.TEXTURE_3D,Fe,Le,ge.width,ge.height,ge.depth),ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Se,Oe,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Se,Oe,ge.data);else if(v.isFramebufferTexture){if(Y)if(C)n.texStorage2D(t.TEXTURE_2D,Fe,Le,ge.width,ge.height);else{let _e=ge.width,ue=ge.height;for(let ze=0;ze<Fe;ze++)n.texImage2D(t.TEXTURE_2D,ze,Le,_e,ue,0,Se,Oe,null),_e>>=1,ue>>=1}}else if(qe.length>0){if(C&&Y){const _e=Ae(qe[0]);n.texStorage2D(t.TEXTURE_2D,Fe,Le,_e.width,_e.height)}for(let _e=0,ue=qe.length;_e<ue;_e++)Ee=qe[_e],C?ye&&n.texSubImage2D(t.TEXTURE_2D,_e,0,0,Se,Oe,Ee):n.texImage2D(t.TEXTURE_2D,_e,Le,Se,Oe,Ee);v.generateMipmaps=!1}else if(C){if(Y){const _e=Ae(ge);n.texStorage2D(t.TEXTURE_2D,Fe,Le,_e.width,_e.height)}ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Se,Oe,ge)}else n.texImage2D(t.TEXTURE_2D,0,Le,Se,Oe,ge);m(v)&&p(j),Ce.__version=Z.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function F(M,v,O){if(v.image.length!==6)return;const j=Ke(M,v),se=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+O);const Z=i.get(se);if(se.version!==Z.__version||j===!0){n.activeTexture(t.TEXTURE0+O);const Ce=lt.getPrimaries(lt.workingColorSpace),pe=v.colorSpace===Ri?null:lt.getPrimaries(v.colorSpace),Ie=v.colorSpace===Ri||Ce===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);const De=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,Se=[];for(let ue=0;ue<6;ue++)!De&&!ge?Se[ue]=_(v.image[ue],!0,r.maxCubemapSize):Se[ue]=ge?v.image[ue].image:v.image[ue],Se[ue]=ce(v,Se[ue]);const Oe=Se[0],Le=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type),qe=S(v.internalFormat,Le,Ee,v.colorSpace),C=v.isVideoTexture!==!0,Y=Z.__version===void 0||j===!0,ye=se.dataReady;let Fe=L(v,Oe);Me(t.TEXTURE_CUBE_MAP,v);let _e;if(De){C&&Y&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,qe,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){_e=Se[ue].mipmaps;for(let ze=0;ze<_e.length;ze++){const Ze=_e[ze];v.format!==Cn?Le!==null?C?ye&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Ze.width,Ze.height,Le,Ze.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,qe,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,0,0,Ze.width,Ze.height,Le,Ee,Ze.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze,qe,Ze.width,Ze.height,0,Le,Ee,Ze.data)}}}else{if(_e=v.mipmaps,C&&Y){_e.length>0&&Fe++;const ue=Ae(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Fe,qe,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ge){C?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Se[ue].width,Se[ue].height,Le,Ee,Se[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Se[ue].width,Se[ue].height,0,Le,Ee,Se[ue].data);for(let ze=0;ze<_e.length;ze++){const vt=_e[ze].image[ue].image;C?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,vt.width,vt.height,Le,Ee,vt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,qe,vt.width,vt.height,0,Le,Ee,vt.data)}}else{C?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Le,Ee,Se[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,qe,Le,Ee,Se[ue]);for(let ze=0;ze<_e.length;ze++){const Ze=_e[ze];C?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,0,0,Le,Ee,Ze.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,ze+1,qe,Le,Ee,Ze.image[ue])}}}m(v)&&p(t.TEXTURE_CUBE_MAP),Z.__version=se.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function oe(M,v,O,j,se,Z){const Ce=s.convert(O.format,O.colorSpace),pe=s.convert(O.type),Ie=S(O.internalFormat,Ce,pe,O.colorSpace),De=i.get(v),ge=i.get(O);if(ge.__renderTarget=v,!De.__hasExternalTextures){const Se=Math.max(1,v.width>>Z),Oe=Math.max(1,v.height>>Z);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,Z,Ie,Se,Oe,v.depth,0,Ce,pe,null):n.texImage2D(se,Z,Ie,Se,Oe,0,Ce,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,se,ge.__webglTexture,0,me(v)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,se,ge.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ae(M,v,O){if(t.bindRenderbuffer(t.RENDERBUFFER,M),v.depthBuffer){const j=v.depthTexture,se=j&&j.isDepthTexture?j.type:null,Z=y(v.stencilBuffer,se),Ce=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=me(v);Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,Z,v.width,v.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,Z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Z,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,M)}else{const j=v.textures;for(let se=0;se<j.length;se++){const Z=j[se],Ce=s.convert(Z.format,Z.colorSpace),pe=s.convert(Z.type),Ie=S(Z.internalFormat,Ce,pe,Z.colorSpace),De=me(v);O&&Q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,De,Ie,v.width,v.height):Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,De,Ie,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Ie,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function he(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=i.get(v.depthTexture);j.__renderTarget=v,(!j.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),K(v.depthTexture,0);const se=j.__webglTexture,Z=me(v);if(v.depthTexture.format===Vs)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,se,0);else if(v.depthTexture.format===Gs)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function Te(M){const v=i.get(M),O=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const j=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),j){const se=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,j.removeEventListener("dispose",se)};j.addEventListener("dispose",se),v.__depthDisposeCallback=se}v.__boundDepthTexture=j}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const j=M.texture.mipmaps;j&&j.length>0?he(v.__webglFramebuffer[0],M):he(v.__webglFramebuffer,M)}else if(O){v.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[j]),v.__webglDepthbuffer[j]===void 0)v.__webglDepthbuffer[j]=t.createRenderbuffer(),ae(v.__webglDepthbuffer[j],M,!1);else{const se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Z)}}else{const j=M.texture.mipmaps;if(j&&j.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ae(v.__webglDepthbuffer,M,!1);else{const se=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function A(M,v,O){const j=i.get(M);v!==void 0&&oe(j.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Te(M)}function x(M){const v=M.texture,O=i.get(M),j=i.get(v);M.addEventListener("dispose",I);const se=M.textures,Z=M.isWebGLCubeRenderTarget===!0,Ce=se.length>1;if(Ce||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=v.version,o.memory.textures++),Z){O.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[pe]=[];for(let Ie=0;Ie<v.mipmaps.length;Ie++)O.__webglFramebuffer[pe][Ie]=t.createFramebuffer()}else O.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let pe=0;pe<v.mipmaps.length;pe++)O.__webglFramebuffer[pe]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let pe=0,Ie=se.length;pe<Ie;pe++){const De=i.get(se[pe]);De.__webglTexture===void 0&&(De.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&Q(M)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Ie=se[pe];O.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[pe]);const De=s.convert(Ie.format,Ie.colorSpace),ge=s.convert(Ie.type),Se=S(Ie.internalFormat,De,ge,Ie.colorSpace,M.isXRRenderTarget===!0),Oe=me(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Se,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,O.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),ae(O.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),Me(t.TEXTURE_CUBE_MAP,v);for(let pe=0;pe<6;pe++)if(v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)oe(O.__webglFramebuffer[pe][Ie],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Ie);else oe(O.__webglFramebuffer[pe],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let pe=0,Ie=se.length;pe<Ie;pe++){const De=se[pe],ge=i.get(De);let Se=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Se=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ge.__webglTexture),Me(Se,De),oe(O.__webglFramebuffer,M,De,t.COLOR_ATTACHMENT0+pe,Se,0),m(De)&&p(Se)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(pe=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,j.__webglTexture),Me(pe,v),v.mipmaps&&v.mipmaps.length>0)for(let Ie=0;Ie<v.mipmaps.length;Ie++)oe(O.__webglFramebuffer[Ie],M,v,t.COLOR_ATTACHMENT0,pe,Ie);else oe(O.__webglFramebuffer,M,v,t.COLOR_ATTACHMENT0,pe,0);m(v)&&p(pe),n.unbindTexture()}M.depthBuffer&&Te(M)}function k(M){const v=M.textures;for(let O=0,j=v.length;O<j;O++){const se=v[O];if(m(se)){const Z=w(M),Ce=i.get(se).__webglTexture;n.bindTexture(Z,Ce),p(Z),n.unbindTexture()}}}const q=[],te=[];function W(M){if(M.samples>0){if(Q(M)===!1){const v=M.textures,O=M.width,j=M.height;let se=t.COLOR_BUFFER_BIT;const Z=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(M),pe=v.length>1;if(pe)for(let De=0;De<v.length;De++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const Ie=M.texture.mipmaps;Ie&&Ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let De=0;De<v.length;De++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[De]);const ge=i.get(v[De]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,O,j,0,0,O,j,se,t.NEAREST),l===!0&&(q.length=0,te.length=0,q.push(t.COLOR_ATTACHMENT0+De),M.depthBuffer&&M.resolveDepthBuffer===!1&&(q.push(Z),te.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,q))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<v.length;De++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[De]);const ge=i.get(v[De]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+De,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function me(M){return Math.min(r.maxSamples,M.samples)}function Q(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function ce(M,v){const O=M.colorSpace,j=M.format,se=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||O!==ns&&O!==Ri&&(lt.getTransfer(O)===pt?(j!==Cn||se!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}function Ae(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=N,this.rebindTextures=A,this.setupRenderTarget=x,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Q}function FM(t,e){function n(i,r=Ri){let s;const o=lt.getTransfer(r);if(i===hi)return t.UNSIGNED_BYTE;if(i===du)return t.UNSIGNED_SHORT_4_4_4_4;if(i===fu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Ap)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Tp)return t.BYTE;if(i===wp)return t.SHORT;if(i===zs)return t.UNSIGNED_SHORT;if(i===uu)return t.INT;if(i===pr)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ks)return t.HALF_FLOAT;if(i===Cp)return t.ALPHA;if(i===Rp)return t.RGB;if(i===Cn)return t.RGBA;if(i===Vs)return t.DEPTH_COMPONENT;if(i===Gs)return t.DEPTH_STENCIL;if(i===Pp)return t.RED;if(i===hu)return t.RED_INTEGER;if(i===Ip)return t.RG;if(i===pu)return t.RG_INTEGER;if(i===mu)return t.RGBA_INTEGER;if(i===Vo||i===Go||i===Wo||i===Xo)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Vo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Vo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ic||i===rc||i===sc||i===oc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ac||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ac||i===lc)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===cc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===uc||i===dc||i===fc||i===hc||i===pc||i===mc||i===gc||i===_c||i===xc||i===vc||i===bc||i===yc||i===Ec||i===Sc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===uc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===dc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===fc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===hc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===pc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===mc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===gc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_c)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===bc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ec)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Sc)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qo||i===Mc||i===Tc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qo)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Tc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dp||i===wc||i===Ac||i===Cc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===qo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tm extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const kM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,BM=`
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

}`;class zM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new tm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ki({vertexShader:kM,fragmentShader:BM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Wn(new eo(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class HM extends rs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const _=new zM,m={},p=n.getContextAttributes();let w=null,S=null;const y=[],L=[],U=new rt;let I=null;const R=new yn;R.viewport=new Rt;const b=new yn;b.viewport=new Rt;const E=[R,b],D=new ab;let B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=y[ie];return de===void 0&&(de=new gl,y[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=y[ie];return de===void 0&&(de=new gl,y[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=y[ie];return de===void 0&&(de=new gl,y[ie]=de),de.getHandSpace()};function V(ie){const de=L.indexOf(ie.inputSource);if(de===-1)return;const F=y[de];F!==void 0&&(F.update(ie.inputSource,ie.frame,c||o),F.dispatchEvent({type:ie.type,data:ie.inputSource}))}function K(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",$);for(let ie=0;ie<y.length;ie++){const de=L[ie];de!==null&&(L[ie]=null,y[ie].disconnect(de))}B=null,H=null,_.reset();for(const ie in m)delete m[ie];e.setRenderTarget(w),h=null,f=null,d=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(U.width,U.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",K),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(U),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,oe=null,ae=null;p.depth&&(ae=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=p.stencil?Gs:Vs,oe=p.stencil?Hs:pr);const he={colorFormat:n.RGBA8,depthFormat:ae,scaleFactor:s};f=d.createProjectionLayer(he),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new mr(f.textureWidth,f.textureHeight,{format:Cn,type:hi,depthTexture:new Yp(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new mr(h.framebufferWidth,h.framebufferHeight,{format:Cn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ie){for(let de=0;de<ie.removed.length;de++){const F=ie.removed[de],oe=L.indexOf(F);oe>=0&&(L[oe]=null,y[oe].disconnect(F))}for(let de=0;de<ie.added.length;de++){const F=ie.added[de];let oe=L.indexOf(F);if(oe===-1){for(let he=0;he<y.length;he++)if(he>=L.length){L.push(F),oe=he;break}else if(L[he]===null){L[he]=F,oe=he;break}if(oe===-1)break}const ae=y[oe];ae&&ae.connect(F)}}const z=new J,N=new J;function re(ie,de,F){z.setFromMatrixPosition(de.matrixWorld),N.setFromMatrixPosition(F.matrixWorld);const oe=z.distanceTo(N),ae=de.projectionMatrix.elements,he=F.projectionMatrix.elements,Te=ae[14]/(ae[10]-1),A=ae[14]/(ae[10]+1),x=(ae[9]+1)/ae[5],k=(ae[9]-1)/ae[5],q=(ae[8]-1)/ae[0],te=(he[8]+1)/he[0],W=Te*q,me=Te*te,Q=oe/(-q+te),le=Q*-q;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(Q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),ae[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const ce=Te+Q,Ae=A+Q,M=W-le,v=me+(oe-le),O=x*A/Ae*ce,j=k*A/Ae*ce;ie.projectionMatrix.makePerspective(M,v,O,j,ce,Ae),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function fe(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let de=ie.near,F=ie.far;_.texture!==null&&(_.depthNear>0&&(de=_.depthNear),_.depthFar>0&&(F=_.depthFar)),D.near=b.near=R.near=de,D.far=b.far=R.far=F,(B!==D.near||H!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),B=D.near,H=D.far),D.layers.mask=ie.layers.mask|6,R.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;const oe=ie.parent,ae=D.cameras;fe(D,oe);for(let he=0;he<ae.length;he++)fe(ae[he],oe);ae.length===2?re(D,R,b):D.projectionMatrix.copy(R.projectionMatrix),be(ie,D,oe)};function be(ie,de,F){F===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(F.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Pc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function(ie){return m[ie]};let Me=null;function Ke(ie,de){if(u=de.getViewerPose(c||o),g=de,u!==null){const F=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let oe=!1;F.length!==D.cameras.length&&(D.cameras.length=0,oe=!0);for(let A=0;A<F.length;A++){const x=F[A];let k=null;if(h!==null)k=h.getViewport(x);else{const te=d.getViewSubImage(f,x);k=te.viewport,A===0&&(e.setRenderTargetTextures(S,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(S))}let q=E[A];q===void 0&&(q=new yn,q.layers.enable(A),q.viewport=new Rt,E[A]=q),q.matrix.fromArray(x.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(x.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(k.x,k.y,k.width,k.height),A===0&&(D.matrix.copy(q.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),oe===!0&&D.cameras.push(q)}const ae=r.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const A=d.getDepthInformation(F[0]);A&&A.isValid&&A.texture&&_.init(A,r.renderState)}if(ae&&ae.includes("camera-access")&&(e.state.unbindTexture(),d))for(let A=0;A<F.length;A++){const x=F[A].camera;if(x){let k=m[x];k||(k=new tm,m[x]=k);const q=d.getCameraImage(x);k.sourceTexture=q}}}for(let F=0;F<y.length;F++){const oe=L[F],ae=y[F];oe!==null&&ae!==void 0&&ae.update(oe,de,c||o)}Me&&Me(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}const We=new Kp;We.setAnimationLoop(Ke),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}}const Zi=new pi,VM=new Pt;function GM(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Hp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,S,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),S=w.envMap,y=w.envMapRotation;S&&(m.envMap.value=S,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(VM.makeRotationFromEuler(Zi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WM(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const y=S.program;i.uniformBlockBinding(w,y)}function c(w,S){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const L=S.program;i.updateUBOMapping(w,L);const U=e.render.frame;s[w.id]!==U&&(f(w),s[w.id]=U)}function u(w){const S=d();w.__bindingPointIndex=S;const y=t.createBuffer(),L=w.__size,U=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,L,U),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],y=w.uniforms,L=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let U=0,I=y.length;U<I;U++){const R=Array.isArray(y[U])?y[U]:[y[U]];for(let b=0,E=R.length;b<E;b++){const D=R[b];if(h(D,U,b,L)===!0){const B=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let V=0;for(let K=0;K<H.length;K++){const $=H[K],z=_($);typeof $=="number"||typeof $=="boolean"?(D.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,B+V,D.__data)):$.isMatrix3?(D.__data[0]=$.elements[0],D.__data[1]=$.elements[1],D.__data[2]=$.elements[2],D.__data[3]=0,D.__data[4]=$.elements[3],D.__data[5]=$.elements[4],D.__data[6]=$.elements[5],D.__data[7]=0,D.__data[8]=$.elements[6],D.__data[9]=$.elements[7],D.__data[10]=$.elements[8],D.__data[11]=0):($.toArray(D.__data,V),V+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(w,S,y,L){const U=w.value,I=S+"_"+y;if(L[I]===void 0)return typeof U=="number"||typeof U=="boolean"?L[I]=U:L[I]=U.clone(),!0;{const R=L[I];if(typeof U=="number"||typeof U=="boolean"){if(R!==U)return L[I]=U,!0}else if(R.equals(U)===!1)return R.copy(U),!0}return!1}function g(w){const S=w.uniforms;let y=0;const L=16;for(let I=0,R=S.length;I<R;I++){const b=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,D=b.length;E<D;E++){const B=b[E],H=Array.isArray(B.value)?B.value:[B.value];for(let V=0,K=H.length;V<K;V++){const $=H[V],z=_($),N=y%L,re=N%z.boundary,fe=N+re;y+=re,fe!==0&&L-fe<z.storage&&(y+=L-fe),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=z.storage}}}const U=y%L;return U>0&&(y+=L-U),w.__size=y,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class nm{constructor(e={}){const{canvas:n=Cv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let L=!1;this._outputColorSpace=bn;let U=0,I=0,R=null,b=-1,E=null;const D=new Rt,B=new Rt;let H=null;const V=new Ye(0);let K=0,$=n.width,z=n.height,N=1,re=null,fe=null;const be=new Rt(0,0,$,z),Me=new Rt(0,0,$,z);let Ke=!1;const We=new $p;let ie=!1,de=!1;const F=new Pt,oe=new J,ae=new Rt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Te=!1;function A(){return R===null?N:1}let x=i;function k(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${cu}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",_e,!1),x===null){const G="webgl2";if(x=k(G,T),x===null)throw k(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let q,te,W,me,Q,le,ce,Ae,M,v,O,j,se,Z,Ce,pe,Ie,De,ge,Se,Oe,Le,Ee,qe;function C(){q=new tS(x),q.init(),Le=new FM(x,q),te=new YE(x,q,e,Le),W=new NM(x,q),te.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),me=new rS(x),Q=new EM,le=new OM(x,q,W,Q,te,Le,me),ce=new KE(y),Ae=new eS(y),M=new ub(x),Ee=new qE(x,M),v=new nS(x,M,me,Ee),O=new oS(x,v,M,me),ge=new sS(x,te,le),pe=new jE(Q),j=new yM(y,ce,Ae,q,te,Ee,pe),se=new GM(y,Q),Z=new MM,Ce=new PM(q),De=new XE(y,ce,Ae,W,O,h,l),Ie=new LM(y,O,te),qe=new WM(x,me,te,W),Se=new $E(x,q,me),Oe=new iS(x,q,me),me.programs=j.programs,y.capabilities=te,y.extensions=q,y.properties=Q,y.renderLists=Z,y.shadowMap=Ie,y.state=W,y.info=me}C();const Y=new HM(y,x);this.xr=Y,this.getContext=function(){return x},this.getContextAttributes=function(){return x.getContextAttributes()},this.forceContextLoss=function(){const T=q.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=q.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return N},this.setPixelRatio=function(T){T!==void 0&&(N=T,this.setSize($,z,!1))},this.getSize=function(T){return T.set($,z)},this.setSize=function(T,G,ee=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,z=G,n.width=Math.floor(T*N),n.height=Math.floor(G*N),ee===!0&&(n.style.width=T+"px",n.style.height=G+"px"),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set($*N,z*N).floor()},this.setDrawingBufferSize=function(T,G,ee){$=T,z=G,N=ee,n.width=Math.floor(T*ee),n.height=Math.floor(G*ee),this.setViewport(0,0,T,G)},this.getCurrentViewport=function(T){return T.copy(D)},this.getViewport=function(T){return T.copy(be)},this.setViewport=function(T,G,ee,ne){T.isVector4?be.set(T.x,T.y,T.z,T.w):be.set(T,G,ee,ne),W.viewport(D.copy(be).multiplyScalar(N).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,G,ee,ne){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,G,ee,ne),W.scissor(B.copy(Me).multiplyScalar(N).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(T){W.setScissorTest(Ke=T)},this.setOpaqueSort=function(T){re=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,ee=!0){let ne=0;if(T){let X=!1;if(R!==null){const xe=R.texture.format;X=xe===mu||xe===pu||xe===hu}if(X){const xe=R.texture.type,Pe=xe===hi||xe===pr||xe===zs||xe===Hs||xe===du||xe===fu,Be=De.getClearColor(),Ue=De.getClearAlpha(),Xe=Be.r,$e=Be.g,He=Be.b;Pe?(g[0]=Xe,g[1]=$e,g[2]=He,g[3]=Ue,x.clearBufferuiv(x.COLOR,0,g)):(_[0]=Xe,_[1]=$e,_[2]=He,_[3]=Ue,x.clearBufferiv(x.COLOR,0,_))}else ne|=x.COLOR_BUFFER_BIT}G&&(ne|=x.DEPTH_BUFFER_BIT),ee&&(ne|=x.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),x.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),De.dispose(),Z.dispose(),Ce.dispose(),Q.dispose(),ce.dispose(),Ae.dispose(),O.dispose(),Ee.dispose(),qe.dispose(),j.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",On),Y.removeEventListener("sessionend",vu),zi.stop()};function ye(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function Fe(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const T=me.autoReset,G=Ie.enabled,ee=Ie.autoUpdate,ne=Ie.needsUpdate,X=Ie.type;C(),me.autoReset=T,Ie.enabled=G,Ie.autoUpdate=ee,Ie.needsUpdate=ne,Ie.type=X}function _e(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const G=T.target;G.removeEventListener("dispose",ue),ze(G)}function ze(T){Ze(T),Q.remove(T)}function Ze(T){const G=Q.get(T).programs;G!==void 0&&(G.forEach(function(ee){j.releaseProgram(ee)}),T.isShaderMaterial&&j.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,ee,ne,X,xe){G===null&&(G=he);const Pe=X.isMesh&&X.matrixWorld.determinant()<0,Be=am(T,G,ee,ne,X);W.setMaterial(ne,Pe);let Ue=ee.index,Xe=1;if(ne.wireframe===!0){if(Ue=v.getWireframeAttribute(ee),Ue===void 0)return;Xe=2}const $e=ee.drawRange,He=ee.attributes.position;let tt=$e.start*Xe,ht=($e.start+$e.count)*Xe;xe!==null&&(tt=Math.max(tt,xe.start*Xe),ht=Math.min(ht,(xe.start+xe.count)*Xe)),Ue!==null?(tt=Math.max(tt,0),ht=Math.min(ht,Ue.count)):He!=null&&(tt=Math.max(tt,0),ht=Math.min(ht,He.count));const Tt=ht-tt;if(Tt<0||Tt===1/0)return;Ee.setup(X,ne,Be,ee,Ue);let yt,_t=Se;if(Ue!==null&&(yt=M.get(Ue),_t=Oe,_t.setIndex(yt)),X.isMesh)ne.wireframe===!0?(W.setLineWidth(ne.wireframeLinewidth*A()),_t.setMode(x.LINES)):_t.setMode(x.TRIANGLES);else if(X.isLine){let Ve=ne.linewidth;Ve===void 0&&(Ve=1),W.setLineWidth(Ve*A()),X.isLineSegments?_t.setMode(x.LINES):X.isLineLoop?_t.setMode(x.LINE_LOOP):_t.setMode(x.LINE_STRIP)}else X.isPoints?_t.setMode(x.POINTS):X.isSprite&&_t.setMode(x.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)qr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(q.get("WEBGL_multi_draw"))_t.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ve=X._multiDrawStarts,Et=X._multiDrawCounts,at=X._multiDrawCount,an=Ue?M.get(Ue).bytesPerElement:1,gr=Q.get(ne).currentProgram.getUniforms();for(let ln=0;ln<at;ln++)gr.setValue(x,"_gl_DrawID",ln),_t.render(Ve[ln]/an,Et[ln])}else if(X.isInstancedMesh)_t.renderInstances(tt,Tt,X.count);else if(ee.isInstancedBufferGeometry){const Ve=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Et=Math.min(ee.instanceCount,Ve);_t.renderInstances(tt,Tt,Et)}else _t.render(tt,Tt)};function vt(T,G,ee){T.transparent===!0&&T.side===Hn&&T.forceSinglePass===!1?(T.side=on,T.needsUpdate=!0,no(T,G,ee),T.side=Fi,T.needsUpdate=!0,no(T,G,ee),T.side=Hn):no(T,G,ee)}this.compile=function(T,G,ee=null){ee===null&&(ee=T),p=Ce.get(ee),p.init(G),S.push(p),ee.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),T!==ee&&T.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const ne=new Set;return T.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const xe=X.material;if(xe)if(Array.isArray(xe))for(let Pe=0;Pe<xe.length;Pe++){const Be=xe[Pe];vt(Be,ee,X),ne.add(Be)}else vt(xe,ee,X),ne.add(xe)}),p=S.pop(),ne},this.compileAsync=function(T,G,ee=null){const ne=this.compile(T,G,ee);return new Promise(X=>{function xe(){if(ne.forEach(function(Pe){Q.get(Pe).currentProgram.isReady()&&ne.delete(Pe)}),ne.size===0){X(T);return}setTimeout(xe,10)}q.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let ct=null;function $n(T){ct&&ct(T)}function On(){zi.stop()}function vu(){zi.start()}const zi=new Kp;zi.setAnimationLoop($n),typeof self<"u"&&zi.setContext(self),this.setAnimationLoop=function(T){ct=T,Y.setAnimationLoop(T),T===null?zi.stop():zi.start()},Y.addEventListener("sessionstart",On),Y.addEventListener("sessionend",vu),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(G),G=Y.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,G,R),p=Ce.get(T,S.length),p.init(G),S.push(p),F.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),We.setFromProjectionMatrix(F,Gn,G.reversedDepth),de=this.localClippingEnabled,ie=pe.init(this.clippingPlanes,de),m=Z.get(T,w.length),m.init(),w.push(m),Y.enabled===!0&&Y.isPresenting===!0){const xe=y.xr.getDepthSensingMesh();xe!==null&&Ca(xe,G,-1/0,y.sortObjects)}Ca(T,G,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(re,fe),Te=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Te&&De.addToRenderList(m,T),this.info.render.frame++,ie===!0&&pe.beginShadows();const ee=p.state.shadowsArray;Ie.render(ee,T,G),ie===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const ne=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const xe=G.cameras;if(X.length>0)for(let Pe=0,Be=xe.length;Pe<Be;Pe++){const Ue=xe[Pe];yu(ne,X,T,Ue)}Te&&De.render(T);for(let Pe=0,Be=xe.length;Pe<Be;Pe++){const Ue=xe[Pe];bu(m,T,Ue,Ue.viewport)}}else X.length>0&&yu(ne,X,T,G),Te&&De.render(T),bu(m,T,G);R!==null&&I===0&&(le.updateMultisampleRenderTarget(R),le.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,G),Ee.resetDefaultState(),b=-1,E=null,S.pop(),S.length>0?(p=S[S.length-1],ie===!0&&pe.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ca(T,G,ee,ne){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||We.intersectsSprite(T)){ne&&ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const Pe=O.update(T),Be=T.material;Be.visible&&m.push(T,Pe,Be,ee,ae.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||We.intersectsObject(T))){const Pe=O.update(T),Be=T.material;if(ne&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),ae.copy(T.boundingSphere.center)):(Pe.boundingSphere===null&&Pe.computeBoundingSphere(),ae.copy(Pe.boundingSphere.center)),ae.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Be)){const Ue=Pe.groups;for(let Xe=0,$e=Ue.length;Xe<$e;Xe++){const He=Ue[Xe],tt=Be[He.materialIndex];tt&&tt.visible&&m.push(T,Pe,tt,ee,ae.z,He)}}else Be.visible&&m.push(T,Pe,Be,ee,ae.z,null)}}const xe=T.children;for(let Pe=0,Be=xe.length;Pe<Be;Pe++)Ca(xe[Pe],G,ee,ne)}function bu(T,G,ee,ne){const X=T.opaque,xe=T.transmissive,Pe=T.transparent;p.setupLightsView(ee),ie===!0&&pe.setGlobalState(y.clippingPlanes,ee),ne&&W.viewport(D.copy(ne)),X.length>0&&to(X,G,ee),xe.length>0&&to(xe,G,ee),Pe.length>0&&to(Pe,G,ee),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function yu(T,G,ee,ne){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ne.id]===void 0&&(p.state.transmissionRenderTarget[ne.id]=new mr(1,1,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")||q.has("EXT_color_buffer_float")?Ks:hi,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));const xe=p.state.transmissionRenderTarget[ne.id],Pe=ne.viewport||D;xe.setSize(Pe.z*y.transmissionResolutionScale,Pe.w*y.transmissionResolutionScale);const Be=y.getRenderTarget(),Ue=y.getActiveCubeFace(),Xe=y.getActiveMipmapLevel();y.setRenderTarget(xe),y.getClearColor(V),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Te&&De.render(ee);const $e=y.toneMapping;y.toneMapping=Li;const He=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),p.setupLightsView(ne),ie===!0&&pe.setGlobalState(y.clippingPlanes,ne),to(T,ee,ne),le.updateMultisampleRenderTarget(xe),le.updateRenderTargetMipmap(xe),q.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ht=0,Tt=G.length;ht<Tt;ht++){const yt=G[ht],_t=yt.object,Ve=yt.geometry,Et=yt.material,at=yt.group;if(Et.side===Hn&&_t.layers.test(ne.layers)){const an=Et.side;Et.side=on,Et.needsUpdate=!0,Eu(_t,ee,ne,Ve,Et,at),Et.side=an,Et.needsUpdate=!0,tt=!0}}tt===!0&&(le.updateMultisampleRenderTarget(xe),le.updateRenderTargetMipmap(xe))}y.setRenderTarget(Be,Ue,Xe),y.setClearColor(V,K),He!==void 0&&(ne.viewport=He),y.toneMapping=$e}function to(T,G,ee){const ne=G.isScene===!0?G.overrideMaterial:null;for(let X=0,xe=T.length;X<xe;X++){const Pe=T[X],Be=Pe.object,Ue=Pe.geometry,Xe=Pe.group;let $e=Pe.material;$e.allowOverride===!0&&ne!==null&&($e=ne),Be.layers.test(ee.layers)&&Eu(Be,G,ee,Ue,$e,Xe)}}function Eu(T,G,ee,ne,X,xe){T.onBeforeRender(y,G,ee,ne,X,xe),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),X.onBeforeRender(y,G,ee,ne,T,xe),X.transparent===!0&&X.side===Hn&&X.forceSinglePass===!1?(X.side=on,X.needsUpdate=!0,y.renderBufferDirect(ee,G,ne,X,T,xe),X.side=Fi,X.needsUpdate=!0,y.renderBufferDirect(ee,G,ne,X,T,xe),X.side=Hn):y.renderBufferDirect(ee,G,ne,X,T,xe),T.onAfterRender(y,G,ee,ne,X,xe)}function no(T,G,ee){G.isScene!==!0&&(G=he);const ne=Q.get(T),X=p.state.lights,xe=p.state.shadowsArray,Pe=X.state.version,Be=j.getParameters(T,X.state,xe,G,ee),Ue=j.getProgramCacheKey(Be);let Xe=ne.programs;ne.environment=T.isMeshStandardMaterial?G.environment:null,ne.fog=G.fog,ne.envMap=(T.isMeshStandardMaterial?Ae:ce).get(T.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",ue),Xe=new Map,ne.programs=Xe);let $e=Xe.get(Ue);if($e!==void 0){if(ne.currentProgram===$e&&ne.lightsStateVersion===Pe)return Mu(T,Be),$e}else Be.uniforms=j.getUniforms(T),T.onBeforeCompile(Be,y),$e=j.acquireProgram(Be,Ue),Xe.set(Ue,$e),ne.uniforms=Be.uniforms;const He=ne.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(He.clippingPlanes=pe.uniform),Mu(T,Be),ne.needsLights=cm(T),ne.lightsStateVersion=Pe,ne.needsLights&&(He.ambientLightColor.value=X.state.ambient,He.lightProbe.value=X.state.probe,He.directionalLights.value=X.state.directional,He.directionalLightShadows.value=X.state.directionalShadow,He.spotLights.value=X.state.spot,He.spotLightShadows.value=X.state.spotShadow,He.rectAreaLights.value=X.state.rectArea,He.ltc_1.value=X.state.rectAreaLTC1,He.ltc_2.value=X.state.rectAreaLTC2,He.pointLights.value=X.state.point,He.pointLightShadows.value=X.state.pointShadow,He.hemisphereLights.value=X.state.hemi,He.directionalShadowMap.value=X.state.directionalShadowMap,He.directionalShadowMatrix.value=X.state.directionalShadowMatrix,He.spotShadowMap.value=X.state.spotShadowMap,He.spotLightMatrix.value=X.state.spotLightMatrix,He.spotLightMap.value=X.state.spotLightMap,He.pointShadowMap.value=X.state.pointShadowMap,He.pointShadowMatrix.value=X.state.pointShadowMatrix),ne.currentProgram=$e,ne.uniformsList=null,$e}function Su(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=$o.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function Mu(T,G){const ee=Q.get(T);ee.outputColorSpace=G.outputColorSpace,ee.batching=G.batching,ee.batchingColor=G.batchingColor,ee.instancing=G.instancing,ee.instancingColor=G.instancingColor,ee.instancingMorph=G.instancingMorph,ee.skinning=G.skinning,ee.morphTargets=G.morphTargets,ee.morphNormals=G.morphNormals,ee.morphColors=G.morphColors,ee.morphTargetsCount=G.morphTargetsCount,ee.numClippingPlanes=G.numClippingPlanes,ee.numIntersection=G.numClipIntersection,ee.vertexAlphas=G.vertexAlphas,ee.vertexTangents=G.vertexTangents,ee.toneMapping=G.toneMapping}function am(T,G,ee,ne,X){G.isScene!==!0&&(G=he),le.resetTextureUnits();const xe=G.fog,Pe=ne.isMeshStandardMaterial?G.environment:null,Be=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ns,Ue=(ne.isMeshStandardMaterial?Ae:ce).get(ne.envMap||Pe),Xe=ne.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,$e=!!ee.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),He=!!ee.morphAttributes.position,tt=!!ee.morphAttributes.normal,ht=!!ee.morphAttributes.color;let Tt=Li;ne.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Tt=y.toneMapping);const yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=yt!==void 0?yt.length:0,Ve=Q.get(ne),Et=p.state.lights;if(ie===!0&&(de===!0||T!==E)){const Yt=T===E&&ne.id===b;pe.setState(ne,T,Yt)}let at=!1;ne.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Et.state.version||Ve.outputColorSpace!==Be||X.isBatchedMesh&&Ve.batching===!1||!X.isBatchedMesh&&Ve.batching===!0||X.isBatchedMesh&&Ve.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ve.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ve.instancing===!1||!X.isInstancedMesh&&Ve.instancing===!0||X.isSkinnedMesh&&Ve.skinning===!1||!X.isSkinnedMesh&&Ve.skinning===!0||X.isInstancedMesh&&Ve.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ve.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ve.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ve.instancingMorph===!1&&X.morphTexture!==null||Ve.envMap!==Ue||ne.fog===!0&&Ve.fog!==xe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==pe.numPlanes||Ve.numIntersection!==pe.numIntersection)||Ve.vertexAlphas!==Xe||Ve.vertexTangents!==$e||Ve.morphTargets!==He||Ve.morphNormals!==tt||Ve.morphColors!==ht||Ve.toneMapping!==Tt||Ve.morphTargetsCount!==_t)&&(at=!0):(at=!0,Ve.__version=ne.version);let an=Ve.currentProgram;at===!0&&(an=no(ne,G,X));let gr=!1,ln=!1,as=!1;const St=an.getUniforms(),gn=Ve.uniforms;if(W.useProgram(an.program)&&(gr=!0,ln=!0,as=!0),ne.id!==b&&(b=ne.id,ln=!0),gr||E!==T){W.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),St.setValue(x,"projectionMatrix",T.projectionMatrix),St.setValue(x,"viewMatrix",T.matrixWorldInverse);const sn=St.map.cameraPosition;sn!==void 0&&sn.setValue(x,oe.setFromMatrixPosition(T.matrixWorld)),te.logarithmicDepthBuffer&&St.setValue(x,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&St.setValue(x,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,ln=!0,as=!0)}if(X.isSkinnedMesh){St.setOptional(x,X,"bindMatrix"),St.setOptional(x,X,"bindMatrixInverse");const Yt=X.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),St.setValue(x,"boneTexture",Yt.boneTexture,le))}X.isBatchedMesh&&(St.setOptional(x,X,"batchingTexture"),St.setValue(x,"batchingTexture",X._matricesTexture,le),St.setOptional(x,X,"batchingIdTexture"),St.setValue(x,"batchingIdTexture",X._indirectTexture,le),St.setOptional(x,X,"batchingColorTexture"),X._colorsTexture!==null&&St.setValue(x,"batchingColorTexture",X._colorsTexture,le));const _n=ee.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ge.update(X,ee,an),(ln||Ve.receiveShadow!==X.receiveShadow)&&(Ve.receiveShadow=X.receiveShadow,St.setValue(x,"receiveShadow",X.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(gn.envMap.value=Ue,gn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&G.environment!==null&&(gn.envMapIntensity.value=G.environmentIntensity),ln&&(St.setValue(x,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&lm(gn,as),xe&&ne.fog===!0&&se.refreshFogUniforms(gn,xe),se.refreshMaterialUniforms(gn,ne,N,z,p.state.transmissionRenderTarget[T.id]),$o.upload(x,Su(Ve),gn,le)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($o.upload(x,Su(Ve),gn,le),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&St.setValue(x,"center",X.center),St.setValue(x,"modelViewMatrix",X.modelViewMatrix),St.setValue(x,"normalMatrix",X.normalMatrix),St.setValue(x,"modelMatrix",X.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){const Yt=ne.uniformsGroups;for(let sn=0,Ra=Yt.length;sn<Ra;sn++){const Hi=Yt[sn];qe.update(Hi,an),qe.bind(Hi,an)}}return an}function lm(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function cm(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,G,ee){const ne=Q.get(T);ne.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Q.get(T.texture).__webglTexture=G,Q.get(T.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ee,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const ee=Q.get(T);ee.__webglFramebuffer=G,ee.__useDefaultFramebuffer=G===void 0};const um=x.createFramebuffer();this.setRenderTarget=function(T,G=0,ee=0){R=T,U=G,I=ee;let ne=!0,X=null,xe=!1,Pe=!1;if(T){const Ue=Q.get(T);if(Ue.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(x.FRAMEBUFFER,null),ne=!1;else if(Ue.__webglFramebuffer===void 0)le.setupRenderTarget(T);else if(Ue.__hasExternalTextures)le.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const He=T.depthTexture;if(Ue.__boundDepthTexture!==He){if(He!==null&&Q.has(He)&&(T.width!==He.image.width||T.height!==He.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(T)}}const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Pe=!0);const $e=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray($e[G])?X=$e[G][ee]:X=$e[G],xe=!0):T.samples>0&&le.useMultisampledRTT(T)===!1?X=Q.get(T).__webglMultisampledFramebuffer:Array.isArray($e)?X=$e[ee]:X=$e,D.copy(T.viewport),B.copy(T.scissor),H=T.scissorTest}else D.copy(be).multiplyScalar(N).floor(),B.copy(Me).multiplyScalar(N).floor(),H=Ke;if(ee!==0&&(X=um),W.bindFramebuffer(x.FRAMEBUFFER,X)&&ne&&W.drawBuffers(T,X),W.viewport(D),W.scissor(B),W.setScissorTest(H),xe){const Ue=Q.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,ee)}else if(Pe){const Ue=G;for(let Xe=0;Xe<T.textures.length;Xe++){const $e=Q.get(T.textures[Xe]);x.framebufferTextureLayer(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0+Xe,$e.__webglTexture,ee,Ue)}}else if(T!==null&&ee!==0){const Ue=Q.get(T.texture);x.framebufferTexture2D(x.FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Ue.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(T,G,ee,ne,X,xe,Pe,Be=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue){W.bindFramebuffer(x.FRAMEBUFFER,Ue);try{const Xe=T.textures[Be],$e=Xe.format,He=Xe.type;if(!te.textureFormatReadable($e)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-ne&&ee>=0&&ee<=T.height-X&&(T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Be),x.readPixels(G,ee,ne,X,Le.convert($e),Le.convert(He),xe))}finally{const Xe=R!==null?Q.get(R).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(T,G,ee,ne,X,xe,Pe,Be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ue=Ue[Pe]),Ue)if(G>=0&&G<=T.width-ne&&ee>=0&&ee<=T.height-X){W.bindFramebuffer(x.FRAMEBUFFER,Ue);const Xe=T.textures[Be],$e=Xe.format,He=Xe.type;if(!te.textureFormatReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=x.createBuffer();x.bindBuffer(x.PIXEL_PACK_BUFFER,tt),x.bufferData(x.PIXEL_PACK_BUFFER,xe.byteLength,x.STREAM_READ),T.textures.length>1&&x.readBuffer(x.COLOR_ATTACHMENT0+Be),x.readPixels(G,ee,ne,X,Le.convert($e),Le.convert(He),0);const ht=R!==null?Q.get(R).__webglFramebuffer:null;W.bindFramebuffer(x.FRAMEBUFFER,ht);const Tt=x.fenceSync(x.SYNC_GPU_COMMANDS_COMPLETE,0);return x.flush(),await Rv(x,Tt,4),x.bindBuffer(x.PIXEL_PACK_BUFFER,tt),x.getBufferSubData(x.PIXEL_PACK_BUFFER,0,xe),x.deleteBuffer(tt),x.deleteSync(Tt),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,ee=0){const ne=Math.pow(2,-ee),X=Math.floor(T.image.width*ne),xe=Math.floor(T.image.height*ne),Pe=G!==null?G.x:0,Be=G!==null?G.y:0;le.setTexture2D(T,0),x.copyTexSubImage2D(x.TEXTURE_2D,ee,0,0,Pe,Be,X,xe),W.unbindTexture()};const dm=x.createFramebuffer(),fm=x.createFramebuffer();this.copyTextureToTexture=function(T,G,ee=null,ne=null,X=0,xe=null){xe===null&&(X!==0?(qr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),xe=X,X=0):xe=0);let Pe,Be,Ue,Xe,$e,He,tt,ht,Tt;const yt=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(ee!==null)Pe=ee.max.x-ee.min.x,Be=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,Xe=ee.min.x,$e=ee.min.y,He=ee.isBox3?ee.min.z:0;else{const _n=Math.pow(2,-X);Pe=Math.floor(yt.width*_n),Be=Math.floor(yt.height*_n),T.isDataArrayTexture?Ue=yt.depth:T.isData3DTexture?Ue=Math.floor(yt.depth*_n):Ue=1,Xe=0,$e=0,He=0}ne!==null?(tt=ne.x,ht=ne.y,Tt=ne.z):(tt=0,ht=0,Tt=0);const _t=Le.convert(G.format),Ve=Le.convert(G.type);let Et;G.isData3DTexture?(le.setTexture3D(G,0),Et=x.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(le.setTexture2DArray(G,0),Et=x.TEXTURE_2D_ARRAY):(le.setTexture2D(G,0),Et=x.TEXTURE_2D),x.pixelStorei(x.UNPACK_FLIP_Y_WEBGL,G.flipY),x.pixelStorei(x.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),x.pixelStorei(x.UNPACK_ALIGNMENT,G.unpackAlignment);const at=x.getParameter(x.UNPACK_ROW_LENGTH),an=x.getParameter(x.UNPACK_IMAGE_HEIGHT),gr=x.getParameter(x.UNPACK_SKIP_PIXELS),ln=x.getParameter(x.UNPACK_SKIP_ROWS),as=x.getParameter(x.UNPACK_SKIP_IMAGES);x.pixelStorei(x.UNPACK_ROW_LENGTH,yt.width),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,yt.height),x.pixelStorei(x.UNPACK_SKIP_PIXELS,Xe),x.pixelStorei(x.UNPACK_SKIP_ROWS,$e),x.pixelStorei(x.UNPACK_SKIP_IMAGES,He);const St=T.isDataArrayTexture||T.isData3DTexture,gn=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const _n=Q.get(T),Yt=Q.get(G),sn=Q.get(_n.__renderTarget),Ra=Q.get(Yt.__renderTarget);W.bindFramebuffer(x.READ_FRAMEBUFFER,sn.__webglFramebuffer),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,Ra.__webglFramebuffer);for(let Hi=0;Hi<Ue;Hi++)St&&(x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,X,He+Hi),x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Q.get(G).__webglTexture,xe,Tt+Hi)),x.blitFramebuffer(Xe,$e,Pe,Be,tt,ht,Pe,Be,x.DEPTH_BUFFER_BIT,x.NEAREST);W.bindFramebuffer(x.READ_FRAMEBUFFER,null),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else if(X!==0||T.isRenderTargetTexture||Q.has(T)){const _n=Q.get(T),Yt=Q.get(G);W.bindFramebuffer(x.READ_FRAMEBUFFER,dm),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,fm);for(let sn=0;sn<Ue;sn++)St?x.framebufferTextureLayer(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,_n.__webglTexture,X,He+sn):x.framebufferTexture2D(x.READ_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,_n.__webglTexture,X),gn?x.framebufferTextureLayer(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,Yt.__webglTexture,xe,Tt+sn):x.framebufferTexture2D(x.DRAW_FRAMEBUFFER,x.COLOR_ATTACHMENT0,x.TEXTURE_2D,Yt.__webglTexture,xe),X!==0?x.blitFramebuffer(Xe,$e,Pe,Be,tt,ht,Pe,Be,x.COLOR_BUFFER_BIT,x.NEAREST):gn?x.copyTexSubImage3D(Et,xe,tt,ht,Tt+sn,Xe,$e,Pe,Be):x.copyTexSubImage2D(Et,xe,tt,ht,Xe,$e,Pe,Be);W.bindFramebuffer(x.READ_FRAMEBUFFER,null),W.bindFramebuffer(x.DRAW_FRAMEBUFFER,null)}else gn?T.isDataTexture||T.isData3DTexture?x.texSubImage3D(Et,xe,tt,ht,Tt,Pe,Be,Ue,_t,Ve,yt.data):G.isCompressedArrayTexture?x.compressedTexSubImage3D(Et,xe,tt,ht,Tt,Pe,Be,Ue,_t,yt.data):x.texSubImage3D(Et,xe,tt,ht,Tt,Pe,Be,Ue,_t,Ve,yt):T.isDataTexture?x.texSubImage2D(x.TEXTURE_2D,xe,tt,ht,Pe,Be,_t,Ve,yt.data):T.isCompressedTexture?x.compressedTexSubImage2D(x.TEXTURE_2D,xe,tt,ht,yt.width,yt.height,_t,yt.data):x.texSubImage2D(x.TEXTURE_2D,xe,tt,ht,Pe,Be,_t,Ve,yt);x.pixelStorei(x.UNPACK_ROW_LENGTH,at),x.pixelStorei(x.UNPACK_IMAGE_HEIGHT,an),x.pixelStorei(x.UNPACK_SKIP_PIXELS,gr),x.pixelStorei(x.UNPACK_SKIP_ROWS,ln),x.pixelStorei(x.UNPACK_SKIP_IMAGES,as),xe===0&&G.generateMipmaps&&x.generateMipmap(Et),W.unbindTexture()},this.copyTextureToTexture3D=function(T,G,ee=null,ne=null,X=0){return qr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,G,ee,ne,X)},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?le.setTextureCube(T,0):T.isData3DTexture?le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?le.setTexture2DArray(T,0):le.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){U=0,I=0,R=null,W.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),n.unpackColorSpace=lt._getUnpackColorSpace()}}const XM=mn({__name:"LogoThreeFx",props:{sparkleCount:{},padding:{}},setup(t){const e=t,n=nt(null),i=nt(null);let r=null;function s(){const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(!u)return new kt;const d=u.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.15,"rgba(255,255,255,0.8)"),d.addColorStop(.4,"rgba(255,255,255,0.3)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=d,u.fillRect(0,0,128,128);const f=new Yr(c);return f.minFilter=qt,f.magFilter=qt,f}function o(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new kt;u.clearRect(0,0,256,256);const d=256/2,f=256/2;u.save(),u.translate(d,f);const h=u.createRadialGradient(0,0,0,0,0,256*.12);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.5,"rgba(255,255,255,0.7)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.12,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";const g=(m,p,w)=>{const S=u.createLinearGradient(-m,0,m,0);S.addColorStop(0,"rgba(255,255,255,0)"),S.addColorStop(.35,`rgba(255,255,255,${w*.4})`),S.addColorStop(.5,`rgba(255,255,255,${w})`),S.addColorStop(.65,`rgba(255,255,255,${w*.4})`),S.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=S,u.beginPath(),u.moveTo(-m,0),u.lineTo(0,-p),u.lineTo(m,0),u.lineTo(0,p),u.closePath(),u.fill()};g(256*.48,256*.025,.95),u.rotate(Math.PI/2),g(256*.48,256*.025,.95),u.rotate(Math.PI/4),g(256*.32,256*.015,.6),u.rotate(Math.PI/2),g(256*.32,256*.015,.6),u.restore();const _=new Yr(c);return _.minFilter=qt,_.magFilter=qt,_}function a(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new kt;u.clearRect(0,0,256,256);const d=256/2,f=256/2;u.save(),u.translate(d,f);const h=u.createRadialGradient(0,0,0,0,0,256*.1);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.6,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.1,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";for(let _=0;_<6;_++){const m=_*Math.PI/3;u.save(),u.rotate(m);const p=u.createLinearGradient(0,0,256*.42,0);p.addColorStop(0,"rgba(255,255,255,0.9)"),p.addColorStop(.25,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.moveTo(0,-256*.018),u.lineTo(256*.42,0),u.lineTo(0,256*.018),u.closePath(),u.fill(),u.restore()}u.restore();const g=new Yr(c);return g.minFilter=qt,g.magFilter=qt,g}return qn(async()=>{if(!n.value||!i.value)return;const l=i.value,c=new nm({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0});c.setClearColor(0,0),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const u=new Wp,d=new jp(-1,1,1,-1,.1,10);d.position.z=2;const f=()=>{const V=e.padding??0,K=n.value?.clientWidth??1,$=n.value?.clientHeight??1,z=K+V*2,N=$+V*2;c.setSize(z,N,!1),d.left=-z/2,d.right=z/2,d.top=N/2,d.bottom=-N/2,d.updateProjectionMatrix()},h=new ResizeObserver(()=>f());h.observe(n.value),f();const g=s(),_=o(),m=a(),p=new bs;u.add(p);const w=e.sparkleCount??60,S=[],y=(V,K)=>V+Math.random()*(K-V),L=V=>{let K,$,z;const N=Math.random();let re;switch(N<.45?re=new Ye().setHSL(.11+Math.random()*.04,.85,.85):N<.85?re=new Ye().setHSL(.14,.2,.98):re=new Ye().setHSL(.58,.5,.92),V){case"fourStar":K=_,$=y(35,70),z=y(.5,1);break;case"sixStar":K=m,$=y(28,50),z=y(.6,1.1);break;default:K=g,$=y(10,28),z=y(1,2.2)}const fe=new Xp({map:K,transparent:!0,depthWrite:!1,blending:Bs,color:re,opacity:0,rotation:y(0,Math.PI*2)}),be=new tb(fe);return be.scale.set($,$,1),p.add(be),{sprite:be,type:V,speed:z,phase:y(0,Math.PI*2),baseScale:$,rotationSpeed:V==="soft"?0:y(-.2,.2),baseX:0,baseY:0,floatRadius:y(1,5),floatSpeed:y(.4,1.2)}},U=()=>{const V=e.padding??0,K=(n.value?.clientWidth??1)+V*2,$=(n.value?.clientHeight??1)+V*2;for(const z of S){if(z.type==="fourStar"||z.type==="sixStar"){const re=y(0,Math.PI*2),fe=K*y(.3,.48),be=$*y(.25,.45),Me=Math.cos(re)*fe,Ke=Math.sin(re)*be;z.baseX=Me,z.baseY=Ke}else{const re=y(-K*.42,K*.42),fe=y(-$*.38,$*.38);z.baseX=re,z.baseY=fe}z.sprite.position.set(z.baseX,z.baseY,0)}},I=Math.floor(w*.15),R=Math.floor(w*.1),b=w-I-R;for(let V=0;V<I;V++)S.push(L("fourStar"));for(let V=0;V<R;V++)S.push(L("sixStar"));for(let V=0;V<b;V++)S.push(L("soft"));U();const E=new ResizeObserver(()=>{f(),U()});E.observe(n.value);let D=0;const B=new lb,H=()=>{const V=B.getElapsedTime();for(const K of S){const $=Math.sin(V*K.speed+K.phase),z=Math.sin(V*K.speed*1.7+K.phase*.5),N=.5+.35*$+.15*z,re=Math.pow(Math.max(0,N),2.2),fe=K.type==="soft"?.15:.08,be=K.type==="soft"?.75:.92,Me=K.sprite.material;Me.opacity=fe+(be-fe)*re;const Ke=K.type==="soft"?.75+.4*re:.65+.5*re,We=K.baseScale*Ke;K.sprite.scale.set(We,We,1),K.rotationSpeed!==0&&(Me.rotation+=K.rotationSpeed*.016);const ie=Math.sin(V*K.floatSpeed+K.phase)*K.floatRadius,de=Math.cos(V*K.floatSpeed*.8+K.phase*1.3)*K.floatRadius;K.sprite.position.set(K.baseX+ie,K.baseY+de,0)}c.render(u,d),D=window.requestAnimationFrame(H)};D=window.requestAnimationFrame(H),r=()=>{window.cancelAnimationFrame(D),h.disconnect(),E.disconnect(),c.dispose(),g.dispose(),_.dispose(),m.dispose(),p.clear()}}),Ni(()=>{r?.(),r=null}),(l,c)=>(ve(),Re("div",{ref_key:"containerEl",ref:n,class:"absolute inset-0 overflow-visible"},[P("canvas",{ref_key:"canvasEl",ref:i,class:"pointer-events-none absolute",style:fr({left:`-${e.padding??0}px`,top:`-${e.padding??0}px`,width:`calc(100% + ${(e.padding??0)*2}px)`,height:`calc(100% + ${(e.padding??0)*2}px)`})},null,4)],512))}}),qM={class:"relative min-h-screen overflow-hidden bg-slate-950"},$M={class:"absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block","aria-hidden":"true"},YM=["src"],jM={class:"relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24",style:{"padding-bottom":"calc(2rem + env(safe-area-inset-bottom, 0px))"}},KM={class:"w-full max-w-md md:max-w-md"},ZM={class:"relative mb-6 inline-block md:mb-10"},JM=["src"],QM={class:"space-y-2.5 md:space-y-3"},eT=["disabled"],tT={class:"relative flex items-center justify-between"},nT={key:0,class:"text-xs text-white/40"},iT={key:1,class:"hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block"},rT=["disabled"],sT={class:"relative flex items-center justify-between"},oT={class:"text-base md:text-lg"},aT={key:0,class:"ml-2 text-sm font-normal text-white/50"},lT={key:0,class:"text-xs text-white/40"},cT={class:"relative flex items-center justify-between"},uT={class:"text-xs text-white/30"},dT={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},fT={class:"space-y-2"},hT=["onClick"],pT={class:"flex items-center justify-between"},mT={class:"flex items-center gap-2"},gT={key:0,class:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"},_T={class:"font-semibold text-white"},xT={class:"flex items-center gap-2"},vT=["disabled"],bT={class:"flex items-center justify-between"},yT={class:"flex items-center gap-2"},ET={key:0,class:"text-lg"},ST={key:1,class:"text-lg"},MT={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},TT={class:"mb-4 text-sm text-white/50"},wT={class:"space-y-2"},AT={class:"text-2xl"},CT={class:"flex-1 font-semibold text-white"},RT={class:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50 text-xl blur-[3px]"},PT={class:"flex-1 font-semibold text-slate-400"},IT=mn({__name:"StartView",setup(t){const e=au(),n=vp(),i=bp(),r="/backend-camp-game/";qn(()=>{n.loadFromStorage(),i.loadFromStorage()});const s=ke(()=>!!n.name),o=k0,a=ke(()=>Math.min(i.currentChapter,o)),l=ke(()=>i.currentChapter>o);function c(){i.reset(),e.push({name:"chapter",params:{id:"1"}})}function u(){if(l.value){const I=Dd(i.endingType);e.push({name:"chapter",params:{id:String(I)}})}else e.push({name:"chapter",params:{id:String(i.currentChapter)}})}function d(){n.clear(),i.resetAll()}const f=nt(!1),h=ke(()=>Object.values(lu).filter(I=>I.id<=oa).map(I=>{const R=i.quizScores[I.id],b=i.isChapterCompleted(I.id);return{id:I.id,title:I.title,completed:b,score:I.id<=3?b?100:null:R?R.percentage:null,hasScore:I.id<=3?b:R!=null}}));function g(){f.value=!0}function _(){f.value=!1}function m(I){i.setCurrentChapter(I),i.setNodeIndex(I,0),f.value=!1,e.push({name:"chapter",params:{id:String(I)}})}const p=ke(()=>yp.every(I=>{const R=i.quizScores[I];return R&&R.total>0}));function w(){f.value=!1;const I=Dd(i.endingType);e.push({name:"chapter",params:{id:String(I)}})}function S(I){if(f.value&&I.key==="Escape"){_();return}I.key==="Enter"&&!s.value&&c()}qn(()=>window.addEventListener("keydown",S)),Ni(()=>window.removeEventListener("keydown",S));const y=nt(!1);function L(){y.value=!0}function U(){y.value=!1}return(I,R)=>(ve(),Re("div",qM,[P("div",{class:"absolute inset-0 animate-bgSlowZoom bg-cover bg-center saturate-95",style:fr({backgroundImage:`url(${Dt(r)}images/scene/normal.png)`})},null,4),R[20]||(R[20]=P("div",{class:"absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]"},null,-1)),R[21]||(R[21]=P("div",{class:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40"},null,-1)),P("div",$M,[P("img",{class:"pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100",src:`${Dt(r)}images/coach/normal.png`,alt:"教練"},null,8,YM)]),P("main",jM,[P("div",KM,[P("div",ZM,[P("img",{src:`${Dt(r)}images/logo.png`,alt:"新人後端生存指南",class:"block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]",draggable:"false"},null,8,JM),At(XM,{class:"pointer-events-none absolute inset-0 z-10",sparkleCount:50,padding:40}),R[0]||(R[0]=P("div",{class:"pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"},null,-1))]),P("nav",QM,[P("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/20 disabled:hover:bg-slate-900/80 md:px-5 md:py-4",type:"button",disabled:s.value,onClick:c},[R[2]||(R[2]=P("span",{class:"absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"},null,-1)),R[3]||(R[3]=P("span",{class:"absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-disabled:opacity-0"},null,-1)),P("span",tT,[R[1]||(R[1]=P("span",{class:"text-base md:text-lg"},"開始遊戲",-1)),s.value?(ve(),Re("span",nT,"有進度")):(ve(),Re("span",iT,"Enter"))])],8,eT),P("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4",type:"button",disabled:!s.value,onClick:u},[R[5]||(R[5]=P("span",{class:"absolute left-0 top-0 h-full w-1 bg-white/30"},null,-1)),P("span",sT,[P("span",oT,[R[4]||(R[4]=ur(" 繼續遊戲 ",-1)),s.value?(ve(),Re("span",aT,Ne(Dt(n).name),1)):st("",!0)]),s.value?(ve(),Re("span",lT,Ne(l.value?"進入結局":`Day ${a.value}`),1)):st("",!0)])],8,rT),P("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5",type:"button",onClick:g},[...R[6]||(R[6]=[P("span",{class:"absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),P("span",{class:"relative flex items-center justify-between"},[P("span",{class:"text-sm md:text-base"},"章節選擇"),P("span",{class:"text-xs text-white/30"},"跳關")],-1)])]),P("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-amber-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/40 md:px-5",type:"button",onClick:L},[R[8]||(R[8]=P("span",{class:"absolute left-0 top-0 h-full w-1 bg-amber-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1)),P("span",cT,[R[7]||(R[7]=P("span",{class:"text-sm md:text-base"},"進度成就",-1)),P("span",uT,Ne(Dt(i).unlockedCount)+"/"+Ne(Dt(i).totalAchievements),1)])]),P("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5",type:"button",onClick:d},[...R[9]||(R[9]=[P("span",{class:"absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),P("span",{class:"relative flex items-center justify-between"},[P("span",{class:"text-sm md:text-base"},"刪除存檔"),P("span",{class:"hidden text-xs text-white/30 sm:inline-block"},"⌫")],-1)])])]),R[10]||(R[10]=P("p",{class:"mt-6 cursor-default select-none text-center text-xs text-white/30 md:mt-8 md:text-left"}," v1.0 · 2025 後端新手生存指南 ",-1))])]),(ve(),en(Lu,{to:"body"},[At(Fl,{name:"fade"},{default:Qo(()=>[f.value?(ve(),Re("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:fd(_,["self"])},[P("div",dT,[P("div",{class:"mb-4 flex items-center justify-between"},[R[12]||(R[12]=P("h2",{class:"text-lg font-bold text-white"},"章節選擇",-1)),P("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:_},[...R[11]||(R[11]=[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[P("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),R[14]||(R[14]=P("p",{class:"mb-4 text-sm text-white/50"},"選擇要跳轉的章節，進度將從該章節開始重新計算。",-1)),P("div",fT,[(ve(!0),Re(ft,null,hr(h.value,b=>(ve(),Re("button",{key:b.id,class:Ut(["group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800",b.completed?"border-emerald-500/30 bg-emerald-900/20":"border-white/10 bg-slate-800/50"]),onClick:E=>m(b.id)},[P("div",pT,[P("span",mT,[b.completed?(ve(),Re("span",gT,[...R[13]||(R[13]=[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[P("polyline",{points:"20 6 9 17 4 12"})],-1)])])):st("",!0),P("span",_T,Ne(b.title),1)]),P("span",xT,[b.hasScore?(ve(),Re("span",{key:0,class:Ut(["h-2.5 w-2.5 rounded-full",b.score===100?"bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]":b.score>=85?"bg-emerald-400":"bg-rose-400"])},null,2)):st("",!0),P("span",{class:Ut(["text-xs",b.completed?"text-emerald-400":"text-white/40"])},Ne(b.completed?"已通關":`Day ${b.id}`),3)])])],10,hT))),128)),P("button",{class:Ut(["group w-full rounded-xl border px-4 py-3 text-left transition-all",p.value?"border-amber-500/30 bg-amber-900/20 hover:border-amber-400/50 hover:bg-amber-900/40":"cursor-not-allowed border-white/5 bg-slate-800/30 opacity-50"]),disabled:!p.value,onClick:w},[P("div",bT,[P("span",yT,[p.value?(ve(),Re("span",ET,"🎬")):(ve(),Re("span",ST,"🔒")),P("span",{class:Ut(["font-semibold",p.value?"text-amber-400":"text-white/40"])},"結局",2)]),P("span",{class:Ut(["text-xs",p.value?"text-amber-400":"text-white/30"])},Ne(p.value?"已解鎖":"通關 Day 10 解鎖"),3)])],10,vT)]),R[15]||(R[15]=P("p",{class:"mt-4 text-center text-xs text-white/30"},"按 ESC 關閉",-1))])])):st("",!0)]),_:1})])),(ve(),en(Lu,{to:"body"},[At(Fl,{name:"fade"},{default:Qo(()=>[y.value?(ve(),Re("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:fd(U,["self"])},[P("div",MT,[P("div",{class:"mb-4 flex items-center justify-between"},[R[17]||(R[17]=P("h2",{class:"text-lg font-bold text-white"},"進度成就",-1)),P("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:U},[...R[16]||(R[16]=[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[P("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),P("p",TT," 已解鎖 "+Ne(Dt(i).unlockedCount)+" / "+Ne(Dt(i).totalAchievements)+" 個成就 ",1),P("div",wT,[(ve(!0),Re(ft,null,hr(Dt(i).allAchievements,b=>(ve(),Re("div",{key:b.id,class:Ut(["flex items-center gap-4 rounded-xl border px-4 py-3",b.unlocked?"border-amber-500/30 bg-amber-900/20":"border-white/5 bg-slate-900/50"])},[b.unlocked?(ve(),Re(ft,{key:0},[P("span",AT,Ne(b.icon),1),P("p",CT,Ne(b.description),1),R[18]||(R[18]=P("span",{class:"flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[P("polyline",{points:"20 6 9 17 4 12"})])],-1))],64)):(ve(),Re(ft,{key:1},[P("span",RT,Ne(b.icon),1),P("p",PT,Ne(b.description),1),R[19]||(R[19]=P("span",{class:"flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-600"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[P("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),P("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})])],-1))],64))],2))),128))])])])):st("",!0)]),_:1})]))]))}}),DT=ru(IT,[["__scopeId","data-v-ea26d0a2"]]),Uc="HEX_",Nc="_2025",im="-";function LT(t){return t.match(/.{1,4}/g)?.join(im)||t}function UT(t){return t.split(im).join("")}function rm(t){return t.split("").reverse().join("")}function NT(t){const e=new TextEncoder().encode(t),n=String.fromCharCode(...e);return btoa(n)}function OT(t){try{const e=atob(t),n=Uint8Array.from(e,i=>i.charCodeAt(0));return new TextDecoder().decode(n)}catch{return""}}function FT(t){const e=Uc+t+Nc,n=rm(e),i=NT(n);return LT(i)}function kT(t){try{const e=UT(t),n=OT(e),i=rm(n);return i.startsWith(Uc)&&i.endsWith(Nc)?i.slice(Uc.length,-Nc.length):""}catch{return""}}function BT(t,e){return kT(t)===e}function zT(t){return FT(t)}const HT={class:"absolute inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},VT={class:"w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"},GT={class:"font-extrabold text-slate-900"},WT=["placeholder"],XT={class:"mt-3 flex justify-end gap-2.5"},qT=["disabled"],Uf=mn({__name:"NameInputModal",props:{title:{},placeholder:{},initialValue:{}},emits:["submit","cancel"],setup(t,{emit:e}){const n=t,i=e,r=nt(n.initialValue??"");ag(()=>{n.initialValue!=null&&!r.value&&(r.value=n.initialValue)});const s=ke(()=>r.value.trim().length>0);function o(){s.value&&i("submit",r.value.trim())}return(a,l)=>(ve(),Re("div",HT,[P("div",VT,[P("div",GT,Ne(t.title),1),jc(P("input",{class:"mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20",type:"text",placeholder:t.placeholder??"輸入名字...","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),onKeydown:tp(o,["enter"])},null,40,WT),[[ep,r.value]]),P("div",XT,[P("button",{class:"rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]",type:"button",onClick:l[1]||(l[1]=c=>a.$emit("cancel"))}," 取消 "),P("button",{class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",type:"button",disabled:!s.value,onClick:o}," 確定 ",8,qT)])])]))}}),$T={class:"absolute inset-0 z-60 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},YT={class:"grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"},jT={class:"flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5"},KT={class:"font-black text-slate-900"},ZT={class:"mt-0.5 font-extrabold text-slate-700"},JT={key:0,class:"mt-1 text-xs font-semibold text-slate-600"},QT={class:"flex items-center gap-2.5"},ew={class:"font-extrabold text-slate-700"},tw=["disabled"],nw={class:"grid grid-cols-1 gap-3.5 overflow-y-auto p-3.5 md:grid-cols-[1.1fr_1fr]"},iw={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},rw={class:"mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3"},sw={class:"flex justify-between gap-2.5"},ow={class:"font-mono text-sm font-black text-slate-900"},aw={class:"text-sm font-extrabold text-slate-500"},lw={class:"mt-1.5 font-black text-slate-700"},cw={class:"mt-3"},uw={class:"grid gap-2"},dw={class:"font-mono text-xs font-extrabold text-slate-700"},fw={class:"mt-2.5 text-xl font-black text-slate-900"},hw={class:"mt-2.5 font-semibold leading-7 text-slate-700"},pw={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},mw={class:"font-mono text-sm font-black text-slate-900/75"},gw={class:"mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"},_w={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3"},xw=["disabled"],vw={class:"flex justify-center gap-2"},bw=["disabled"],yw=mn({__name:"SlidesModal",props:{title:{},slides:{},mustFinish:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=nt(0),s=ke(()=>n.slides[r.value]),o=ke(()=>r.value>=n.slides.length-1);function a(){r.value=Math.max(0,r.value-1)}function l(){r.value=Math.min(n.slides.length-1,r.value+1)}function c(){n.mustFinish&&!o.value||i("close")}return(u,d)=>(ve(),Re("div",$T,[P("div",YT,[P("header",jT,[P("div",null,[P("div",KT,Ne(t.title),1),P("div",ZT,Ne(s.value.title),1),s.value.subtitle?(ve(),Re("div",JT,Ne(s.value.subtitle),1)):st("",!0)]),P("div",QT,[P("div",ew,"步驟 "+Ne(r.value+1)+"/"+Ne(t.slides.length),1),P("button",{class:"rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:t.mustFinish&&!o.value,onClick:c}," 關閉 ",8,tw)])]),P("div",nw,[P("section",null,[P("div",iw,[d[2]||(d[2]=P("div",{class:"inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900"}," 互動式簡報 ",-1)),s.value.commit?(ve(),Re(ft,{key:0},[P("div",rw,[P("div",sw,[P("div",ow,Ne(s.value.commit.sha),1),P("div",aw,Ne(s.value.commit.when),1)]),P("div",lw,Ne(s.value.commit.message),1)]),P("div",cw,[d[0]||(d[0]=P("div",{class:"mb-2 font-black text-slate-900"},"本次變更檔案",-1)),P("div",uw,[(ve(!0),Re(ft,null,hr(s.value.commit.files,f=>(ve(),Re("div",{key:f.path,class:"flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"},[P("span",{class:Ut(["grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black",f.change==="A"?"bg-emerald-500/15 text-emerald-800":f.change==="M"?"bg-blue-500/15 text-blue-700":"bg-rose-500/15 text-rose-800"])},Ne(f.change),3),P("span",dw,Ne(f.path),1)]))),128))])])],64)):(ve(),Re(ft,{key:1},[P("div",fw,Ne(s.value.title),1),P("div",hw,Ne(s.value.body),1),d[1]||(d[1]=t_('<div class="mt-3 flex flex-wrap gap-2"><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">版本控制</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">Commit 更新點</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">看懂改動</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">回到安全點</span></div>',1))],64))])]),P("section",null,[P("div",pw,[P("div",mw,Ne(s.value.commit?"changes.diff":"notes.txt"),1),P("pre",gw,[P("code",null,Ne(s.value.commit?s.value.commit.diffPreview:s.value.body??""),1)])])])]),P("footer",_w,[P("button",{class:"justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:r.value===0,onClick:a}," 上一部 ",8,xw),P("div",vw,[(ve(!0),Re(ft,null,hr(t.slides.length,f=>(ve(),Re("span",{key:f,class:Ut(["h-2 w-2 rounded-full bg-slate-900/20",f-1===r.value?"bg-amber-500":""])},null,2))),128))]),P("button",{class:"justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:o.value,onClick:l}," 下一部 ",8,bw)])])]))}}),Ew={class:"fixed inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},Sw={class:"flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95"},Mw={class:"flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5"},Tw={class:"font-black text-slate-900"},ww={class:"text-sm font-extrabold text-slate-500"},Aw={class:"flex-1 overflow-y-auto px-4 py-4"},Cw={class:"text-lg font-black text-slate-900"},Rw={class:"mt-3 grid gap-2.5"},Pw=["value","disabled"],Iw={class:"font-extrabold text-slate-700"},Dw={class:"font-black text-slate-900"},Lw={class:"mt-1.5 font-bold leading-7 text-slate-700"},Uw={class:"flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3"},Nw={class:"flex gap-2.5"},Ow=["disabled"],Fw=mn({__name:"QuizModal",props:{title:{},questions:{},chapterId:{}},emits:["done","cancel"],setup(t,{emit:e}){const n=t,i=e,r=nt(0),s=nt(null),o=nt(!1),a=nt(0),l=nt(0),c=nt(!1),u=ke(()=>n.questions[r.value]),d=ke(()=>n.questions.length),f=ke(()=>r.value>=n.questions.length-1),h=ke(()=>o.value&&s.value===u.value.correctOptionId);function g(){if(!s.value||o.value)return;o.value=!0;const p=s.value===u.value.correctOptionId;!c.value&&p&&(l.value+=1),c.value=!0,p&&(a.value+=1)}function _(){s.value=null,o.value=!1}function m(){if(o.value){if(f.value){i("done",{correctCount:a.value,total:d.value,firstAttemptCorrect:l.value});return}r.value+=1,s.value=null,o.value=!1,c.value=!1}}return(p,w)=>(ve(),Re("div",Ew,[P("div",Sw,[P("header",Mw,[P("div",Tw,Ne(t.title),1),P("div",ww,"第 "+Ne(r.value+1)+"/"+Ne(d.value)+" 題",1)]),P("div",Aw,[P("div",Cw,Ne(u.value.prompt),1),P("div",Rw,[(ve(!0),Re(ft,null,hr(u.value.options,S=>(ve(),Re("label",{key:S.id,class:Ut(["flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3",o.value?"cursor-default opacity-90":"hover:bg-white"])},[jc(P("input",{type:"radio",name:"quiz",value:S.id,"onUpdate:modelValue":w[0]||(w[0]=y=>s.value=y),disabled:o.value},null,8,Pw),[[F_,s.value]]),P("span",Iw,Ne(S.label),1)],2))),128))]),o.value?(ve(),Re("div",{key:0,class:Ut(["mt-3 rounded-2xl border px-3 py-3",h.value?"border-emerald-500/25 bg-emerald-500/10":"border-amber-500/25 bg-amber-500/10"])},[P("div",Dw,Ne(h.value?"答對了":"差一點"),1),P("div",Lw,Ne(u.value.explanation),1)],2)):st("",!0)]),P("footer",Uw,[P("button",{class:"rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]",type:"button",onClick:w[1]||(w[1]=S=>i("cancel"))}," 取消測驗 "),P("div",Nw,[o.value?h.value?(ve(),Re("button",{key:1,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:m},Ne(f.value?"完成":"下一題"),1)):(ve(),Re("button",{key:2,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:_}," 重新作答 ")):(ve(),Re("button",{key:0,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55",type:"button",disabled:!s.value,onClick:g}," 提交 ",8,Ow))])])])]))}}),kw={class:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90",role:"dialog","aria-modal":"true"},Bw={class:"mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300"},zw={class:"mb-8 text-xl font-bold text-white/90"},Hw={class:"text-amber-400"},Vw=mn({__name:"CelebrationModal",props:{playerName:{},chapterTitle:{}},emits:["close"],setup(t,{emit:e}){const n=e,i=nt(null),r=nt(null),s=nt(!1);let o=null;function a(d){const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d"),_=g.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return _.addColorStop(0,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 1)`),_.addColorStop(.3,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 0.8)`),_.addColorStop(.6,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 0.3)`),_.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=_,g.fillRect(0,0,64,64),new Yr(h)}function l(){const f=document.createElement("canvas");f.width=64,f.height=64;const h=f.getContext("2d");h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,64,64),h.fillStyle="#FFD700",h.beginPath();const g=64/2,_=64/2,m=4,p=64/2-2,w=64/6;for(let S=0;S<m*2;S++){const y=S%2===0?p:w,L=S*Math.PI/m-Math.PI/2,U=g+Math.cos(L)*y,I=_+Math.sin(L)*y;S===0?h.moveTo(U,I):h.lineTo(U,I)}return h.closePath(),h.fill(),h.shadowColor="#FFD700",h.shadowBlur=10,h.fill(),new Yr(f)}function c(d){const f=document.createElement("canvas");f.width=16,f.height=32;const h=f.getContext("2d");return h.fillStyle=`rgb(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)})`,h.fillRect(0,0,16,32),new Yr(f)}function u(){if(!r.value||!i.value)return;const d=new nm({canvas:r.value,alpha:!0,antialias:!0});d.setClearColor(0,0),d.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const f=i.value.clientWidth,h=i.value.clientHeight;d.setSize(f,h,!1);const g=new Wp,_=new yn(60,f/h,.1,1e3);_.position.z=500;const m=[new Ye(16739179),new Ye(16767293),new Ye(7064439),new Ye(5084927),new Ye(13218303),new Ye(16752453),new Ye(16196997)],p=[];function w(z,N){const re=m[Math.floor(Math.random()*m.length)],fe=80+Math.floor(Math.random()*60),be=new Nn,Me=new Float32Array(fe*3),Ke=new Float32Array(fe),We=[];for(let oe=0;oe<fe;oe++){Me[oe*3]=z,Me[oe*3+1]=N,Me[oe*3+2]=0,Ke[oe]=8+Math.random()*12;const ae=Math.random()*Math.PI*2,he=Math.acos(2*Math.random()-1),Te=3+Math.random()*5;We.push(new J(Math.sin(he)*Math.cos(ae)*Te,Math.sin(he)*Math.sin(ae)*Te,Math.cos(he)*Te*.3))}be.setAttribute("position",new nn(Me,3)),be.setAttribute("size",new nn(Ke,1));const ie=new Ic({map:a(re),size:20,transparent:!0,blending:Bs,depthWrite:!1,vertexColors:!1}),de=new af(be,ie);g.add(de);const F=50+Math.random()*150;p.push({particles:de,velocities:We,life:0,maxLife:120+Math.random()*60,phase:"rising",riseVelocity:new J(0,8+Math.random()*4,0),targetY:F})}const S=30,y=new Nn,L=new Float32Array(S*3),U=new Float32Array(S),I=[];for(let z=0;z<S;z++){const N=(Math.random()-.5)*f*.9,re=(Math.random()-.5)*h*.7;L[z*3]=N,L[z*3+1]=re,L[z*3+2]=-50,U[z]=15+Math.random()*25,I.push({baseX:N,baseY:re,floatSpeed:.5+Math.random()*1,floatRadius:5+Math.random()*15,rotateSpeed:.02+Math.random()*.03,twinkleSpeed:2+Math.random()*3,twinklePhase:Math.random()*Math.PI*2})}y.setAttribute("position",new nn(L,3)),y.setAttribute("size",new nn(U,1));const R=new Ic({map:l(),size:30,transparent:!0,blending:Bs,depthWrite:!1}),b=new af(y,R);g.add(b);const E=60,D=[],B=[new Ye(16739179),new Ye(16767293),new Ye(7064439),new Ye(5084927),new Ye(16196997),new Ye(16752453)];for(let z=0;z<E;z++){const N=B[Math.floor(Math.random()*B.length)],re=new eo(8+Math.random()*8,16+Math.random()*16),fe=new _u({map:c(N),side:Hn,transparent:!0,opacity:.9}),be=new Wn(re,fe);be.position.set((Math.random()-.5)*f,h/2+Math.random()*200,(Math.random()-.5)*100),be.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(be),D.push({mesh:be,velocity:new J((Math.random()-.5)*2,-2-Math.random()*3,(Math.random()-.5)*1),rotationSpeed:new J((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1),swayPhase:Math.random()*Math.PI*2,swaySpeed:2+Math.random()*2})}let H=0,V;setTimeout(()=>w(-100,-h/2-50),100),setTimeout(()=>w(100,-h/2-50),400),setTimeout(()=>w(0,-h/2-50),700),setTimeout(()=>{s.value=!0},800);function K(){V=requestAnimationFrame(K),H++;for(let N=p.length-1;N>=0;N--){const re=p[N],fe=re.particles.geometry.attributes.position.array,be=fe.length/3;if(re.phase==="rising"){for(let Me=0;Me<be;Me++)fe[Me*3+1]+=re.riseVelocity.y;fe[1]>=re.targetY&&(re.phase="exploding")}else{re.life++;const Me=re.life/re.maxLife;for(let We=0;We<be;We++){const ie=re.velocities[We];fe[We*3]+=ie.x*(1-Me*.5),fe[We*3+1]+=ie.y*(1-Me*.5)-.15,fe[We*3+2]+=ie.z*(1-Me*.5)}const Ke=re.particles.material;Ke.opacity=1-Me,re.life>=re.maxLife&&(g.remove(re.particles),re.particles.geometry.dispose(),re.particles.material.dispose(),p.splice(N,1))}re.particles.geometry.attributes.position.needsUpdate=!0}if(H%90===0&&p.length<5){const N=(Math.random()-.5)*f*.6;w(N,-h/2-50)}const z=b.geometry.attributes.position.array;for(let N=0;N<S;N++){const re=I[N],fe=H*.02;z[N*3]=re.baseX+Math.sin(fe*re.floatSpeed)*re.floatRadius,z[N*3+1]=re.baseY+Math.cos(fe*re.floatSpeed*.7)*re.floatRadius*.5;const be=Math.sin(fe*re.twinkleSpeed+re.twinklePhase)*.5+.5;b.geometry.attributes.size.array[N]=15+be*25}b.geometry.attributes.position.needsUpdate=!0,b.geometry.attributes.size.needsUpdate=!0,b.rotation.z+=5e-4;for(const N of D)N.mesh.position.add(N.velocity),N.mesh.rotation.x+=N.rotationSpeed.x,N.mesh.rotation.y+=N.rotationSpeed.y,N.mesh.rotation.z+=N.rotationSpeed.z,N.swayPhase+=.05,N.mesh.position.x+=Math.sin(N.swayPhase*N.swaySpeed)*.5,N.mesh.position.y<-h/2-50&&(N.mesh.position.y=h/2+50,N.mesh.position.x=(Math.random()-.5)*f);d.render(g,_)}K();const $=()=>{if(!i.value)return;const z=i.value.clientWidth,N=i.value.clientHeight;d.setSize(z,N,!1),_.aspect=z/N,_.updateProjectionMatrix()};window.addEventListener("resize",$),o=()=>{cancelAnimationFrame(V),window.removeEventListener("resize",$);for(const z of p)g.remove(z.particles),z.particles.geometry.dispose(),z.particles.material.dispose();g.remove(b),y.dispose(),R.dispose();for(const z of D)g.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.dispose();d.dispose()}}return qn(()=>{u()}),Ni(()=>{o?.(),o=null}),(d,f)=>(ve(),Re("div",kw,[P("div",{ref_key:"containerEl",ref:i,class:"absolute inset-0"},[P("canvas",{ref_key:"canvasEl",ref:r,class:"h-full w-full"},null,512)],512),P("div",{class:Ut(["relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700",s.value?"translate-y-0 opacity-100":"translate-y-8 opacity-0"])},[f[2]||(f[2]=P("div",{class:"mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]"},[P("svg",{class:"h-14 w-14 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[P("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),f[3]||(f[3]=P("h2",{class:"mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl"}," 恭喜完成！ ",-1)),P("div",Bw,Ne(t.chapterTitle),1),P("p",zw,[P("span",Hw,Ne(t.playerName),1),f[1]||(f[1]=ur("，你做到了！ ",-1))]),P("button",{class:"rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]",type:"button",onClick:f[0]||(f[0]=h=>n("close"))}," 繼續前進 ")],2)]))}}),Gw="modulepreload",Ww=function(t){return"/backend-camp-game/"+t},Nf={},fn=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=Ww(c),c in Nf)return;Nf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Gw,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((h,g)=>{f.addEventListener("load",h),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},Xw={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},qw={class:"relative flex h-[95vh] w-[95vw] max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl"},$w={class:"flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"},Yw={class:"text-lg font-bold text-slate-800"},jw={class:"flex-1 overflow-y-auto"},Kw={key:1,class:"flex h-full items-center justify-center text-slate-500"},Zw=768,sm=mn({__name:"InteractiveSlideModal",props:{slideId:{},title:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=nt(!1);function s(){r.value=window.innerWidth<Zw}qn(()=>{s(),window.addEventListener("resize",s)}),Ni(()=>{window.removeEventListener("resize",s)});const o={"git-intro":cn(()=>fn(()=>import("./GitIntroSlide-yzC5ufnX.js"),__vite__mapDeps([0,1,2]))),"docker-intro":cn(()=>fn(()=>import("./DockerIntroSlide-CYKFyLOj.js"),__vite__mapDeps([3,1,4]))),"architecture-intro":cn(()=>fn(()=>import("./ArchitectureIntroSlide-BTUYfziE.js"),__vite__mapDeps([5,1,6]))),"static-dynamic":cn(()=>fn(()=>import("./StaticDynamicSlide-DBhNIes-.js"),__vite__mapDeps([7,1,8]))),"coach-backend":cn(()=>fn(()=>import("./CoachBackendSlide-zTZroHyZ.js"),__vite__mapDeps([9,1,10]))),"url-request":cn(()=>fn(()=>import("./UrlRequestSlide-OBgSY5kV.js"),__vite__mapDeps([11,1,12]))),"network-request":cn(()=>fn(()=>import("./NetworkRequestSlide-C4ZLgD8Q.js"),__vite__mapDeps([13,1,14]))),"api-intro":cn(()=>fn(()=>import("./ApiIntroSlide-fVFMNZbu.js"),__vite__mapDeps([15,1,16]))),"api-demo":cn(()=>fn(()=>import("./ApiDemoSlide-CNdQJG9X.js"),__vite__mapDeps([17,18]))),"drag-quiz":cn(()=>fn(()=>import("./DragQuizSlide-CLp89pG8.js"),__vite__mapDeps([19,20]))),"drag-sort":cn(()=>fn(()=>import("./DragSortSlide-Bn7uqFhU.js"),__vite__mapDeps([21,22]))),"data-flow":cn(()=>fn(()=>import("./DataFlowSlide-lYQDlWzy.js"),__vite__mapDeps([23,24]))),"third-party":cn(()=>fn(()=>import("./ThirdPartySlide-DHN1Blhd.js"),__vite__mapDeps([25,26])))},a=ke(()=>o[n.slideId]||null);function l(){i("close")}return(c,u)=>(ve(),Re("div",Xw,[P("div",qw,[P("header",$w,[P("h2",Yw,Ne(t.title),1),P("button",{type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600",onClick:u[0]||(u[0]=d=>i("close"))},[...u[1]||(u[1]=[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[P("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),P("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),P("main",jw,[a.value?(ve(),en(Tg(a.value),{key:0,isMobile:r.value,onComplete:l},null,40,["isMobile"])):(ve(),Re("div",Kw," 找不到簡報元件："+Ne(t.slideId),1))])])]))}}),Jw={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},Qw={class:"relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl md:flex-row"},e1={class:"hidden w-64 shrink-0 flex-col items-center justify-center border-r border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-6 md:flex"},t1=["src"],n1={class:"flex flex-1 flex-col"},i1={class:"border-b border-slate-700 bg-slate-800 px-6 py-4"},r1={class:"flex items-center gap-3"},s1=["src"],o1={class:"flex-1 overflow-y-auto p-6"},a1={class:"mb-6 rounded-xl border-2 border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-orange-900/20 p-4"},l1={class:"text-lg font-medium leading-relaxed text-amber-50"},c1={key:0,class:"space-y-3"},u1=["onClick"],d1={class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-500 bg-slate-700 text-sm font-bold text-slate-300"},f1={class:"text-white"},h1={key:1,class:"space-y-4"},p1={class:"mb-2 flex items-center gap-2"},m1={key:0,class:"rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-400"},g1={key:1,class:"rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-400"},_1={class:"flex items-center gap-3"},x1={class:"text-white"},v1={class:"rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4"},b1={class:"leading-relaxed text-white"},y1={key:0,class:"border-t border-slate-700 bg-slate-800 px-6 py-4"},E1=mn({__name:"ChoiceModal",props:{prompt:{},options:{},coachExpression:{}},emits:["select"],setup(t,{emit:e}){const n=t,i=e,r=nt(null),s=nt(null),o=nt(!1),a=ke(()=>o.value&&r.value?r.value.responseExpression||"normal":n.coachExpression||"normal"),l=ke(()=>`/backend-camp-game/images/coach/${a.value}.png`),c=ke(()=>r.value?.isCorrect===!0);function u(h,g){r.value=h,s.value=g,o.value=!0}function d(){r.value=null,s.value=null,o.value=!1}function f(){r.value&&c.value&&i("select",r.value)}return(h,g)=>(ve(),Re("div",Jw,[P("div",Qw,[P("div",e1,[P("img",{src:l.value,alt:"海克絲",class:"h-auto max-h-[300px] w-full object-contain transition-all duration-300"},null,8,t1),g[0]||(g[0]=P("div",{class:"mt-4 text-center"},[P("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-3 py-1 text-sm font-black text-amber-100"}," 海克絲 ")],-1))]),P("div",n1,[P("header",i1,[P("div",r1,[P("img",{src:l.value,alt:"海克絲",class:"h-12 w-12 rounded-full border-2 border-amber-400/50 object-cover md:hidden"},null,8,s1),g[1]||(g[1]=P("div",null,[P("h2",{class:"text-lg font-bold text-white"},"海克絲的提問"),P("p",{class:"text-xs text-slate-400"},"選擇你認為正確的答案")],-1))])]),P("main",o1,[P("div",a1,[P("p",l1,Ne(t.prompt),1)]),o.value?(ve(),Re("div",h1,[P("div",{class:Ut(["rounded-xl border-2 bg-slate-800 p-4",r.value?.isCorrect?"border-green-500":"border-orange-500"])},[P("div",p1,[g[2]||(g[2]=P("span",{class:"text-sm text-slate-400"},"你的回答",-1)),r.value?.isCorrect?(ve(),Re("span",m1,"正確！")):(ve(),Re("span",g1,"不太對喔"))]),P("div",_1,[P("span",{class:Ut(["flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",r.value?.isCorrect?"border-green-500 bg-green-500/20 text-green-400":"border-orange-500 bg-orange-500/20 text-orange-400"])},Ne(s.value!==null?s.value+1:""),3),P("p",x1,Ne(r.value?.label),1)])],2),P("div",v1,[g[3]||(g[3]=P("div",{class:"mb-2 flex items-center gap-2"},[P("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-2 py-0.5 text-xs font-black text-amber-100"},"海克絲")],-1)),P("p",b1,Ne(r.value?.response),1)])])):(ve(),Re("div",c1,[(ve(!0),Re(ft,null,hr(t.options,(_,m)=>(ve(),Re("button",{key:_.id,class:"flex w-full items-center gap-3 rounded-xl border-2 border-slate-600 bg-slate-800 p-4 text-left transition-all hover:border-amber-400 hover:bg-slate-700",onClick:p=>u(_,m)},[P("span",d1,Ne(m+1),1),P("span",f1,Ne(_.label),1)],8,u1))),128))]))]),o.value?(ve(),Re("footer",y1,[c.value?(ve(),Re("button",{key:0,class:"w-full rounded-xl border border-amber-300/35 bg-amber-300/20 py-3 font-bold text-white transition-all hover:bg-amber-300/30 active:scale-[0.99]",onClick:f}," 繼續 ")):(ve(),Re("button",{key:1,class:"w-full rounded-xl border border-orange-400/35 bg-orange-400/20 py-3 font-bold text-white transition-all hover:bg-orange-400/30 active:scale-[0.99]",onClick:d}," 再想想看 "))])):st("",!0)])])]))}}),S1={key:0,class:"flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14"},M1={class:"pointer-events-none fixed inset-0 z-0"},T1={key:1,class:"absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]"},w1={key:3,class:"dark-vignette absolute inset-0"},A1={class:"fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3"},C1={class:"text-center text-sm font-black text-white/90"},R1=["title"],P1={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},I1={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},D1={class:"relative z-10 flex flex-1 flex-col justify-end"},L1={key:0,class:"pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center",style:{top:"56px",bottom:"160px"}},U1=["src"],N1={key:1,class:"relative z-10 mb-4 max-h-[45vh] flex-1 overflow-y-auto px-4 md:max-h-[55vh]"},O1={class:"flex min-h-full items-center justify-center py-4"},F1={class:"relative"},k1=["src"],B1={key:2,class:"flex flex-1 flex-col items-center justify-center px-4"},z1={key:0,class:"ending-bad-fade w-full max-w-md rounded-2xl border border-rose-500/30 bg-black/80 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden"},H1={class:"mb-4 flex flex-col items-center gap-2"},V1={class:"text-4xl"},G1={class:"mb-2 text-4xl font-bold text-rose-400 glitch-text"},W1={key:1,class:"ending-normal-fade w-full max-w-md rounded-2xl border border-sky-500/30 bg-slate-900/90 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden"},X1={class:"mb-4 flex flex-col items-center gap-2"},q1={class:"text-5xl moon-float"},$1={class:"mb-2 text-4xl font-bold text-sky-400"},Y1={key:2,class:"w-full max-w-md rounded-2xl border border-white/20 bg-black/80 px-8 py-10 text-center backdrop-blur-md"},j1={class:"mb-4 text-6xl"},K1={class:"mb-2 text-3xl font-bold text-white"},Z1={class:"mt-2 text-sm text-white/50"},J1={key:0,class:"mt-6 text-center"},Q1={key:3,class:"relative z-20 px-3 pb-safe-bottom md:pb-6"},eA={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},tA={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},nA=["innerHTML"],iA={class:"mt-3 flex justify-end gap-2.5"},rA=["disabled"],sA=["disabled"],oA={key:4,class:"relative z-20 px-3 pb-safe-bottom md:pb-6"},aA={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},lA={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},cA={class:"mb-4"},uA={key:0,class:"mb-3 text-sm text-rose-400"},dA={key:1,class:"mt-3 text-xs text-white/30"},fA={key:0,class:"fixed right-4 top-16 z-30 rounded-xl border border-white/20 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur"},hA={class:"flex items-center gap-3"},pA={class:"text-2xl"},mA={class:"font-bold text-white"},gA=mn({__name:"ChapterView",setup(t){const e=l0(),n=au(),i=vp(),r=bp(),s=ke(()=>Number(e.params.id)||1),o=ke(()=>F0(s.value));Ii(o,C=>{if(!C){n.push({name:"start"});return}s.value<=100&&s.value>oa&&n.push({name:"start"})},{immediate:!0}),Ii(s,()=>{h.value&&Te(h.value)}),qn(()=>{i.loadFromStorage(),r.loadFromStorage(),$.value&&setTimeout(()=>{be()},500)});function a(C){const Y="/backend-camp-game/";return C===101?`${Y}audio/bgm-ending-bad.mp3`:C===102?`${Y}audio/bgm-ending-normal.mp3`:C===103?`${Y}audio/bgm-ending-true.mp3`:`${Y}audio/background.mp3`}const l=nt(new Audio(a(s.value)));l.value.loop=!0,l.value.volume=.1;const c=nt(!1);Ii(s,C=>{const Y=c.value;l.value.pause(),l.value.currentTime=0,l.value=new Audio(a(C)),l.value.loop=!0,l.value.volume=.1,Y&&l.value.play().catch(()=>{})});function u(){c.value?l.value.pause():l.value.play().catch(()=>{}),c.value=!c.value}Ni(()=>{l.value.pause(),l.value.currentTime=0});const d=ke(()=>o.value?.nodes??[]),f=ke(()=>{const C=r.getNodeIndex(s.value);return Math.min(C,d.value.length-1)}),h=ke(()=>d.value[f.value]),g=ke(()=>h.value?.type==="inputName"),_=ke(()=>h.value?.type==="slides"),m=ke(()=>h.value?.type==="quiz"),p=ke(()=>h.value?.type==="celebration"),w=ke(()=>h.value?.type==="interactiveSlide"),S=ke(()=>h.value?.type==="choice"),y=ke(()=>h.value?.type==="passwordInput"),L=ke(()=>h.value?.type==="endingComplete"),U=ke(()=>h.value?.type==="inputName"?h.value:null),I=ke(()=>h.value?.type==="slides"?h.value:null),R=ke(()=>h.value?.type==="quiz"?h.value:null),b=ke(()=>h.value?.type==="celebration"?h.value:null),E=ke(()=>h.value?.type==="interactiveSlide"?h.value:null),D=ke(()=>h.value?.type==="choice"?h.value:null),B=ke(()=>h.value?.type==="passwordInput"?h.value:null),H=ke(()=>h.value?.type==="endingComplete"?h.value:null),V=nt(""),K=nt(""),$=ke(()=>s.value>=100),z=nt(!1),N=nt(""),re=nt(""),fe={[Je.bad.chapterId]:{icon:Je.bad.icon,title:Je.bad.description,type:"bad"},[Je.normal.chapterId]:{icon:Je.normal.icon,title:Je.normal.description,type:"normal"},[Je.true.chapterId]:{icon:Je.true.icon,title:Je.true.description,type:"true"}};function be(){const C=fe[s.value];C&&(N.value=C.icon,re.value=C.title,z.value=!0,r.unlockEndingAchievement(C.type),setTimeout(()=>{z.value=!1},3e3))}function Me(){N.value=Je.hidden.icon,re.value=Je.hidden.description,z.value=!0,r.unlockEndingAchievement("hidden"),setTimeout(()=>{z.value=!1},3e3)}const Ke=ke(()=>{if(h.value?.type==="dialogue"&&h.value.image){const C=h.value.image;return C.startsWith("/")?`/backend-camp-game/${C.slice(1)}`:C}return null}),We=ke(()=>h.value?.type==="dialogue"&&h.value.image?h.value.showSaveHint===!0:!1),ie=nt(""),de=nt(null);function F(C){const Y=i.name||"你";let ye=C.split("{name}").join(Y);return ye.includes("{password}")&&i.name&&(ye=ye.split("{password}").join(zT(i.name))),ye}const oe=nt(!1);ke(()=>s.value!==7||i.name||h.value?.type!=="dialogue"?!1:h.value.text.includes("{password}"));function ae(C){const Y=/(https?:\/\/[^\s]+)/g;return C.replace(Y,'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')}function he(C){de.value&&window.clearInterval(de.value),ie.value="";let Y=0;de.value=window.setInterval(()=>{Y+=1,ie.value=C.slice(0,Y),Y>=C.length&&(de.value&&window.clearInterval(de.value),de.value=null)},16)}function Te(C){if(C?.type==="dialogue"&&C.text.includes("{password}")&&!i.name){oe.value=!0;return}C?.type==="dialogue"?he(F(C.text)):(de.value&&window.clearInterval(de.value),de.value=null,ie.value="")}function A(C){i.setName(C),oe.value=!1,h.value&&Te(h.value)}function x(){oe.value=!1;const C=Math.max(f.value-1,0);r.setNodeIndex(s.value,C),Te(d.value[C])}qn(()=>{h.value&&Te(h.value)});function k(){if(h.value?.type!=="dialogue")return;const C=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,C),Te(d.value[C])}function q(C){for(let Y=C-1;Y>=0;Y--)if(d.value[Y]?.type==="dialogue")return Y;return-1}const te=ke(()=>h.value?.type!=="dialogue"?!1:q(f.value)>=0);function W(){if(h.value?.type!=="dialogue")return;const C=q(f.value);C>=0&&(r.setNodeIndex(s.value,C),Te(d.value[C]))}function me(){n.push({name:"start"})}function Q(C){i.setName(C);const Y=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,Y),Te(d.value[Y])}function le(){const C=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,C),Te(d.value[C])}function ce(){const C=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,C),Te(d.value[C])}function Ae(C){const Y=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,Y),Te(d.value[Y])}function M(C){r.saveQuizScore(s.value,C.firstAttemptCorrect,C.total);const Y=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,Y),Te(d.value[Y])}function v(){const C=Math.max(f.value-1,0);r.setNodeIndex(s.value,C),Te(d.value[C])}function O(){s.value===7&&r.setDay7Item(!0),r.completeChapter(s.value);const C=s.value+1;if(s.value>=oa){n.push({name:"start"});return}if(lu[C])n.push({name:"chapter",params:{id:String(C)}});else{const Y=r.endingType,ye={bad:101,normal:102,true:103,hidden:103}[Y]||101;n.push({name:"chapter",params:{id:String(ye)}})}}function j(){if(!i.name){K.value="找不到玩家名字，請重新開始遊戲";return}if(BT(V.value,i.name)){K.value="",V.value="",Me();const C=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,C),Te(d.value[C])}else K.value="密碼錯誤，請再試一次"}function se(){n.push({name:"start"})}function Z(){const C=Math.min(f.value+1,d.value.length-1);r.setNodeIndex(s.value,C),Te(d.value[C])}const Ce=ke(()=>L.value?H.value?.canTriggerHidden===!0:!1),pe=ke(()=>h.value?.scene==="dark"),Ie=ke(()=>{const C=h.value?.scene??"normal";return C==="dark"||C==="home"}),De=ke(()=>{const C=h.value?.scene??"normal";return`/backend-camp-game/images/scene/${C==="dark"||C==="home"?"normal":C}.png`}),ge=ke(()=>`/backend-camp-game/images/coach/${h.value?.coachExpression??"normal"}.png`),Se=ke(()=>h.value?.type!=="dialogue"?"海克絲":h.value.speaker==="你"?i.name||"你":h.value.speaker),Oe=ke(()=>h.value?.type!=="dialogue"||h.value.speaker==="海克絲"?"border-amber-300/35 bg-amber-300/20 text-amber-100":h.value.speaker==="你"?"border-sky-400/35 bg-sky-400/20 text-sky-100":"border-slate-400/35 bg-slate-400/20 text-slate-200"),Le=ke(()=>h.value?.type==="dialogue"&&de.value!=null);function Ee(){h.value?.type==="dialogue"&&(de.value&&window.clearInterval(de.value),de.value=null,ie.value=F(h.value.text))}function qe(C){g.value||_.value||m.value||p.value||w.value||S.value||(C.key==="Enter"||C.key===" "||C.key==="ArrowRight"?(C.preventDefault(),Le.value?Ee():h.value?.type==="dialogue"&&k()):C.key==="ArrowLeft"&&(C.preventDefault(),te.value&&W()))}return qn(()=>window.addEventListener("keydown",qe)),Ni(()=>window.removeEventListener("keydown",qe)),(C,Y)=>o.value?(ve(),Re("div",S1,[P("div",M1,[pe.value?st("",!0):(ve(),Re("div",{key:0,class:"absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95",style:fr({backgroundImage:`url(${De.value})`})},null,4)),pe.value?st("",!0):(ve(),Re("div",T1)),pe.value?(ve(),Re("div",{key:2,class:"dark-bg-flicker absolute inset-0 bg-cover bg-center scale-[1.02] saturate-50",style:fr({backgroundImage:`url(${De.value})`})},null,4)):st("",!0),pe.value?(ve(),Re("div",w1)):st("",!0)]),P("header",A1,[P("button",{class:"rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]",type:"button",onClick:me}," 返回開始 "),P("div",C1,Ne(o.value.title),1),P("button",{class:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",type:"button",title:c.value?"關閉音樂":"開啟音樂",onClick:u},[c.value?(ve(),Re("svg",P1,[...Y[1]||(Y[1]=[P("path",{d:"M9 18V5l12-2v13"},null,-1),P("circle",{cx:"6",cy:"18",r:"3"},null,-1),P("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):(ve(),Re("svg",I1,[...Y[2]||(Y[2]=[P("path",{d:"M9 18V5l12-2v13"},null,-1),P("circle",{cx:"6",cy:"18",r:"3"},null,-1),P("circle",{cx:"18",cy:"16",r:"3"},null,-1),P("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2"},null,-1)])]))],8,R1)]),P("main",D1,[!Ke.value&&!m.value&&!_.value&&!p.value&&!w.value&&!S.value&&!L.value&&!Ie.value?(ve(),Re("div",L1,[P("img",{class:"h-full w-auto max-w-[85vw] object-contain object-bottom",src:ge.value,alt:"教練"},null,8,U1)])):st("",!0),Ke.value?(ve(),Re("div",N1,[P("div",O1,[P("div",F1,[P("img",{src:Ke.value,alt:"展示圖片",class:"max-h-[40vh] max-w-full rounded-xl border-2 border-white/30 bg-black/50 p-6 object-contain shadow-2xl md:max-h-[50vh]"},null,8,k1),We.value?(ve(),Re(ft,{key:0},[Y[3]||(Y[3]=P("div",{class:"absolute -left-12 top-1/2 -translate-y-1/2 text-3xl md:-left-16 md:text-4xl"}," 👉 ",-1)),Y[4]||(Y[4]=P("div",{class:"absolute -left-12 top-1/2 mt-8 -translate-y-1/2 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg md:-left-16"}," 右鍵另存 ",-1))],64)):st("",!0)])])])):st("",!0),L.value&&H.value?(ve(),Re("div",B1,[H.value.endingType==="bad"?(ve(),Re("div",z1,[Y[6]||(Y[6]=P("div",{class:"glitch-overlay absolute inset-0 pointer-events-none"},null,-1)),P("div",H1,[P("div",V1,Ne(H.value.icon),1),Y[5]||(Y[5]=P("div",{class:"flex justify-center items-center text-rose-500/60"},[P("svg",{class:"w-28 h-6",viewBox:"0 0 120 30",fill:"none",stroke:"currentColor","stroke-width":"2"},[P("path",{d:"M0,15 L30,15 L35,5 L40,25 L45,10 L50,20 L55,15 L120,15",class:"heartbeat-line"})])],-1))]),Y[7]||(Y[7]=P("p",{class:"mb-2 text-lg font-semibold text-white/70"},"壞結局",-1)),P("h1",G1," 「"+Ne(H.value.title)+"」 ",1),Y[8]||(Y[8]=P("p",{class:"mb-6 text-xl font-bold text-rose-300/80 tracking-widest"},"燃 燒 殆 盡",-1)),Y[9]||(Y[9]=P("div",{class:"mx-auto max-w-sm rounded-xl border border-rose-900/50 bg-rose-950/30 px-6 py-4"},[P("p",{class:"text-base text-white/90 leading-relaxed"}," 「你的身體比你誠實。它替你按下了那個你不敢按的暫停鍵。」 ")],-1)),Y[10]||(Y[10]=P("p",{class:"mt-6 text-sm text-white/50 italic"},"進入章節選擇，將每個關卡刷到完美吧！",-1)),P("button",{class:"mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:se}," 再試一次 ")])):H.value.endingType==="normal"?(ve(),Re("div",W1,[Y[11]||(Y[11]=P("div",{class:"moon-glow absolute inset-0 pointer-events-none"},null,-1)),P("div",X1,[P("div",q1,Ne(H.value.icon),1)]),Y[12]||(Y[12]=P("p",{class:"mb-2 text-lg font-semibold text-white/70"},"普通結局",-1)),P("h1",$1," 「"+Ne(H.value.title)+"」 ",1),Y[13]||(Y[13]=P("p",{class:"mb-6 text-xl font-bold text-sky-300/80 tracking-widest"},"穩 健 前 行",-1)),Y[14]||(Y[14]=P("div",{class:"mx-auto max-w-sm rounded-xl border border-sky-900/50 bg-sky-950/30 px-6 py-4"},[P("p",{class:"text-base text-white/90 leading-relaxed"}," 「你已經做得很好了，但你還沒學會這樣告訴自己。」 ")],-1)),Y[15]||(Y[15]=P("p",{class:"mt-6 text-sm text-white/50 italic"},"進入章節選擇，挑戰完美結局吧！",-1)),P("button",{class:"mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:se}," 繼續努力 ")])):(ve(),Re("div",Y1,[P("div",j1,Ne(H.value.icon),1),P("h1",K1,Ne(H.value.endingType==="hidden"?"達成彩蛋結局":"結局"),1),P("p",{class:Ut(["text-2xl font-bold",{"text-rose-400":H.value.color==="rose","text-sky-400":H.value.color==="sky","text-emerald-400":H.value.color==="emerald","text-amber-400":H.value.color==="amber"}])}," 「"+Ne(H.value.title)+"」 ",3),P("p",Z1,"結局分數："+Ne(Dt(r).endingScore)+"%",1),Ce.value?(ve(),Re("div",J1,[Y[16]||(Y[16]=P("p",{class:"mb-4 text-white/60"},"等等...手機又響了？",-1)),P("button",{class:"rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50",onClick:Z}," 查看新訊息 ")])):st("",!0),Ce.value?st("",!0):(ve(),Re("button",{key:1,class:"mt-6 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:se}," 返回首頁 "))]))])):st("",!0),!m.value&&!_.value&&!p.value&&!w.value&&!S.value&&!L.value&&!y.value?(ve(),Re("div",Q1,[P("div",eA,[P("div",{class:Ut(["mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black",Oe.value])},Ne(Se.value),3),P("div",tA,[h.value?.type==="dialogue"?(ve(),Re("span",{key:0,innerHTML:ae(ie.value)},null,8,nA)):h.value?.type==="inputName"?(ve(),Re(ft,{key:1},[ur(Ne(U.value?.prompt),1)],64)):h.value?.type==="slides"?(ve(),Re(ft,{key:2},[ur("我們先看一段簡報，把 Git 的重點抓起來。")],64)):(ve(),Re(ft,{key:3},[ur("來，快速確認一下你抓到重點了沒有。")],64))]),P("div",iA,[P("button",{class:"rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30",type:"button",disabled:!te.value,onClick:W}," 上一句 ",8,rA),P("button",{class:"rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:h.value?.type!=="dialogue",onClick:k}," 下一句 ",8,sA)])])])):st("",!0),y.value&&B.value?(ve(),Re("div",oA,[P("div",aA,[Y[17]||(Y[17]=P("div",{class:"mb-2 inline-flex items-center rounded-full border border-amber-400/35 bg-amber-400/20 px-3 py-1 text-sm font-black text-amber-200"}," 輸入密碼 ",-1)),P("div",lA,[P("p",cA,Ne(B.value.prompt),1),jc(P("input",{"onUpdate:modelValue":Y[0]||(Y[0]=ye=>V.value=ye),type:"text",class:"mb-3 w-full max-w-md rounded-xl border border-white/20 bg-slate-800 px-4 py-3 text-white placeholder-white/40 focus:border-amber-400/50 focus:outline-none",placeholder:"輸入密碼...",onKeyup:tp(j,["enter"])},null,544),[[ep,V.value]]),K.value?(ve(),Re("p",uA,Ne(K.value),1)):st("",!0),P("button",{class:"rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50",onClick:j}," 確認 "),B.value.hint?(ve(),Re("p",dA,Ne(B.value.hint),1)):st("",!0)])])])):st("",!0)]),At(Fl,{name:"achievement"},{default:Qo(()=>[z.value?(ve(),Re("div",fA,[P("div",hA,[P("span",pA,Ne(N.value),1),P("div",null,[Y[18]||(Y[18]=P("p",{class:"text-xs text-white/50"},"恭喜達成成就",-1)),P("p",mA,Ne(re.value),1)])])])):st("",!0)]),_:1}),g.value&&U.value?(ve(),en(Uf,{key:0,title:U.value.prompt,placeholder:"例如：小明",initialValue:Dt(i).name,onSubmit:Q,onCancel:me},null,8,["title","initialValue"])):st("",!0),oe.value?(ve(),en(Uf,{key:1,title:"在解鎖序號前，請先告訴我你的名字",placeholder:"輸入你的名字",initialValue:Dt(i).name,onSubmit:A,onCancel:x},null,8,["initialValue"])):st("",!0),_.value&&I.value?(ve(),en(yw,{key:2,title:I.value.title,slides:I.value.slides,mustFinish:I.value.mustFinish,onClose:le},null,8,["title","slides","mustFinish"])):st("",!0),m.value&&R.value?(ve(),en(Fw,{key:3,title:R.value.title,questions:R.value.questions,chapterId:s.value,onDone:M,onCancel:v},null,8,["title","questions","chapterId"])):st("",!0),p.value&&b.value?(ve(),en(Vw,{key:4,playerName:Dt(i).name||"你",chapterTitle:b.value.chapterTitle,onClose:O},null,8,["playerName","chapterTitle"])):st("",!0),w.value&&E.value?(ve(),en(sm,{key:5,slideId:E.value.slideId,title:E.value.title,onClose:ce},null,8,["slideId","title"])):st("",!0),S.value&&D.value?(ve(),en(E1,{key:6,prompt:D.value.prompt,options:D.value.options,coachExpression:D.value.coachExpression,onSelect:Ae},null,8,["prompt","options","coachExpression"])):st("",!0)])):st("",!0)}}),_A=ru(gA,[["__scopeId","data-v-159cbf99"]]),xA={class:"min-h-screen bg-slate-900 p-8"},vA={class:"mx-auto max-w-4xl"},bA={class:"mb-8"},yA={class:"grid gap-4 md:grid-cols-2"},EA=["onClick"],SA={class:"mb-2"},MA={class:"font-bold text-white group-hover:text-blue-400"},TA={class:"text-sm text-slate-400"},wA=mn({__name:"DevView",setup(t){const e=au(),n=[{id:"git-intro",title:"Day 2｜Git 互動實驗室：Repository 概念",description:"教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾"},{id:"architecture-intro",title:"Day 3｜系統架構入門：前端、後端、資料庫",description:"用電商購物流程說明三層架構，展示前端 → 後端 → 資料庫的資料流向"},{id:"docker-intro",title:"Day 3｜Docker 互動實驗室：容器化概念",description:"解釋 Docker 解決的問題，用貨櫃比喻容器，展示 LiveFit 的 3 個容器服務"}],i=nt(null);function r(a){i.value=a}function s(){i.value=null}function o(){e.push({name:"start"})}return(a,l)=>(ve(),Re("div",xA,[P("div",vA,[P("div",{class:"mb-8 flex items-center justify-between"},[l[0]||(l[0]=P("div",null,[P("h1",{class:"flex items-center gap-3 text-2xl font-bold text-white"}," 互動式簡報列表 "),P("p",{class:"mt-2 text-slate-400"},"點擊卡片預覽簡報內容")],-1)),P("button",{class:"rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700",onClick:o}," 返回遊戲 ")]),P("section",bA,[P("div",yA,[(ve(),Re(ft,null,hr(n,c=>P("div",{key:c.id,class:"group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750",onClick:u=>r(c)},[P("div",SA,[P("h3",MA,Ne(c.title),1)]),P("p",TA,Ne(c.description),1),l[1]||(l[1]=P("div",{class:"mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"},[P("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 256 256",fill:"currentColor"},[P("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"})]),ur(" 點擊預覽 ")],-1))],8,EA)),64))])])]),i.value?(ve(),en(sm,{key:0,slideId:i.value.id,title:i.value.title,onClose:s},null,8,["slideId","title"])):st("",!0)]))}});function AA(){try{const t=localStorage.getItem("livefit.progress");return t?JSON.parse(t):{}}catch{return{}}}function CA(){const e=AA().quizScores||{};return yp.every(n=>{const i=e[n];return i&&i.total>0})}function RA(t){return!(t>oa)}const om=a0({history:Bx("/backend-camp-game/"),routes:[{path:"/",name:"start",component:DT},{path:"/chapter/:id",name:"chapter",component:_A},{path:"/dev",name:"dev",component:wA}]});om.beforeEach((t,e,n)=>{if(t.name==="chapter"){const i=Number(t.params.id);if(i>=100){if(!CA())return n({name:"start"})}else if(!RA(i))return n({name:"start"})}n()});W_(tx).use($_()).use(om).mount("#app");export{ft as F,Lu as T,ru as _,en as a,Qo as b,ke as c,mn as d,P as e,Re as f,ur as g,st as h,jc as i,hr as j,fd as k,qn as l,fr as m,Ut as n,ve as o,PA as p,t_ as q,nt as r,Ne as t,IA as v,Ii as w};
