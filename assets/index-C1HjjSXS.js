const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GitIntroSlide-mmq0Lj8L.js","assets/GitIntroSlide-Cu22x2VZ.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Pc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pt={},Ur=[],Hn=()=>{},bd=()=>!1,la=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ic=t=>t.startsWith("onUpdate:"),Nt=Object.assign,Dc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},jp=Object.prototype.hasOwnProperty,lt=(t,e)=>jp.call(t,e),ze=Array.isArray,Nr=t=>ks(t)==="[object Map]",Md=t=>ks(t)==="[object Set]",gu=t=>ks(t)==="[object Date]",qe=t=>typeof t=="function",St=t=>typeof t=="string",Gn=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Ed=t=>(dt(t)||qe(t))&&qe(t.then)&&qe(t.catch),Td=Object.prototype.toString,ks=t=>Td.call(t),Kp=t=>ks(t).slice(8,-1),Ad=t=>ks(t)==="[object Object]",ca=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_s=Pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Zp=/-\w/g,vn=ua(t=>t.replace(Zp,e=>e.slice(1).toUpperCase())),Jp=/\B([A-Z])/g,Fi=ua(t=>t.replace(Jp,"-$1").toLowerCase()),fa=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=ua(t=>t?`on${fa(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Do=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},wd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Lc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Qp=t=>{const e=St(t)?Number(t):NaN;return isNaN(e)?t:e};let _u;const da=()=>_u||(_u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jr(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=St(i)?im(i):Jr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(t)||dt(t))return t}const em=/;(?![^(]*\))/g,tm=/:([^]+)/,nm=/\/\*[^]*?\*\//g;function im(t){const e={};return t.replace(nm,"").split(em).forEach(n=>{if(n){const i=n.split(tm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function An(t){let e="";if(St(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=An(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const rm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",sm=Pc(rm);function Rd(t){return!!t||t===""}function om(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Wo(t[i],e[i]);return n}function Wo(t,e){if(t===e)return!0;let n=gu(t),i=gu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Gn(t),i=Gn(e),n||i)return t===e;if(n=ze(t),i=ze(e),n||i)return n&&i?om(t,e):!1;if(n=dt(t),i=dt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Wo(t[o],e[o]))return!1}}return String(t)===String(e)}const Cd=t=>!!(t&&t.__v_isRef===!0),Qe=t=>St(t)?t:t==null?"":ze(t)||dt(t)&&(t.toString===Td||!qe(t.toString))?Cd(t)?Qe(t.value):JSON.stringify(t,Pd,2):String(t),Pd=(t,e)=>Cd(e)?Pd(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ra(i,s)+" =>"]=r,n),{})}:Md(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ra(n))}:Gn(e)?Ra(e):dt(e)&&!ze(e)&&!Ad(e)?String(e):e,Ra=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let zt;class Id{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=zt,!e&&zt&&(this.index=(zt.scopes||(zt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=zt;try{return zt=this,e()}finally{zt=n}}}on(){++this._on===1&&(this.prevScope=zt,zt=this)}off(){this._on>0&&--this._on===0&&(zt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Dd(t){return new Id(t)}function Ld(){return zt}function am(t,e=!1){zt&&zt.cleanups.push(t)}let gt;const Ca=new WeakSet;class Ud{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,zt&&zt.active&&zt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Fd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vu(this),Od(this);const e=gt,n=En;gt=this,En=!0;try{return this.fn()}finally{Bd(this),gt=e,En=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Fc(e);this.deps=this.depsTail=void 0,vu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){bl(this)&&this.run()}get dirty(){return bl(this)}}let Nd=0,vs,xs;function Fd(t,e=!1){if(t.flags|=8,e){t.next=xs,xs=t;return}t.next=vs,vs=t}function Uc(){Nd++}function Nc(){if(--Nd>0)return;if(xs){let e=xs;for(xs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;vs;){let e=vs;for(vs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Od(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Fc(i),lm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function bl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(zd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function zd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===ws)||(t.globalVersion=ws,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!bl(t))))return;t.flags|=2;const e=t.dep,n=gt,i=En;gt=t,En=!0;try{Od(t);const r=t.fn(t._value);(e.version===0||Ri(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=n,En=i,Bd(t),t.flags&=-3}}function Fc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Fc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function lm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let En=!0;const kd=[];function li(){kd.push(En),En=!1}function ci(){const t=kd.pop();En=t===void 0?!0:t}function vu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=gt;gt=void 0;try{e()}finally{gt=n}}}let ws=0;class cm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!En||gt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==gt)n=this.activeLink=new cm(gt,this),gt.deps?(n.prevDep=gt.depsTail,gt.depsTail.nextDep=n,gt.depsTail=n):gt.deps=gt.depsTail=n,Hd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=gt.depsTail,n.nextDep=void 0,gt.depsTail.nextDep=n,gt.depsTail=n,gt.deps===n&&(gt.deps=i)}return n}trigger(e){this.version++,ws++,this.notify(e)}notify(e){Uc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Nc()}}}function Hd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Hd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Xo=new WeakMap,sr=Symbol(""),Ml=Symbol(""),Rs=Symbol("");function Ht(t,e,n){if(En&&gt){let i=Xo.get(t);i||Xo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Oc),r.map=i,r.key=n),r.track()}}function ni(t,e,n,i,r,s){const o=Xo.get(t);if(!o){ws++;return}const a=l=>{l&&l.trigger()};if(Uc(),e==="clear")o.forEach(a);else{const l=ze(t),c=l&&ca(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Rs||!Gn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Rs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(sr)),Nr(t)&&a(o.get(Ml)));break;case"delete":l||(a(o.get(sr)),Nr(t)&&a(o.get(Ml)));break;case"set":Nr(t)&&a(o.get(sr));break}}Nc()}function um(t,e){const n=Xo.get(t);return n&&n.get(e)}function fr(t){const e=it(t);return e===t?e:(Ht(e,"iterate",Rs),cn(t)?e:e.map(wn))}function ha(t){return Ht(t=it(t),"iterate",Rs),t}function Mi(t,e){return ui(t)?si(t)?Gr(wn(e)):Gr(e):wn(e)}const fm={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,t=>Mi(this,t))},concat(...t){return fr(this).concat(...t.map(e=>ze(e)?fr(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=Mi(this,t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(i=>Mi(this,i)),arguments)},find(t,e){return Xn(this,"find",t,e,n=>Mi(this,n),arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,n=>Mi(this,n),arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ia(this,"includes",t)},indexOf(...t){return Ia(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Ia(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return is(this,"pop")},push(...t){return is(this,"push",t)},reduce(t,...e){return xu(this,"reduce",t,e)},reduceRight(t,...e){return xu(this,"reduceRight",t,e)},shift(){return is(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return is(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return is(this,"unshift",t)},values(){return Pa(this,"values",t=>Mi(this,t))}};function Pa(t,e,n){const i=ha(t),r=i[e]();return i!==t&&!cn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const dm=Array.prototype;function Xn(t,e,n,i,r,s){const o=ha(t),a=o!==t&&!cn(t),l=o[e];if(l!==dm[e]){const f=l.apply(t,s);return a?wn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Mi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function xu(t,e,n,i){const r=ha(t);let s=n;return r!==t&&(cn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Mi(t,a),l,t)}),r[e](s,...i)}function Ia(t,e,n){const i=it(t);Ht(i,"iterate",Rs);const r=i[e](...n);return(r===-1||r===!1)&&pa(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function is(t,e,n=[]){li(),Uc();const i=it(t)[e].apply(t,n);return Nc(),ci(),i}const hm=Pc("__proto__,__v_isRef,__isVue"),Vd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn));function pm(t){Gn(t)||(t=String(t));const e=it(this);return Ht(e,"has",t),e.hasOwnProperty(t)}class Gd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?Em:$d:s?qd:Xd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=fm[n]))return l;if(n==="hasOwnProperty")return pm}const a=Reflect.get(e,n,Et(e)?e:i);if((Gn(n)?Vd.has(n):hm(n))||(r||Ht(e,"get",n),s))return a;if(Et(a)){const l=o&&ca(n)?a:a.value;return r&&dt(l)?Tl(l):l}return dt(a)?r?Tl(a):Hs(a):a}}class Wd extends Gd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=ze(e)&&ca(n);if(!this._isShallow){const c=ui(s);if(!cn(i)&&!ui(i)&&(s=it(s),i=it(i)),!o&&Et(s)&&!Et(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:lt(e,n),l=Reflect.set(e,n,i,Et(e)?e:r);return e===it(r)&&(a?Ri(i,s)&&ni(e,"set",n,i):ni(e,"add",n,i)),l}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ni(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Gn(n)||!Vd.has(n))&&Ht(e,"has",n),i}ownKeys(e){return Ht(e,"iterate",ze(e)?"length":sr),Reflect.ownKeys(e)}}class mm extends Gd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const gm=new Wd,_m=new mm,vm=new Wd(!0);const El=t=>t,Qs=t=>Reflect.getPrototypeOf(t);function xm(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?El:e?Gr:wn;return!e&&Ht(s,"iterate",l?Ml:sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function eo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function ym(t,e){const n={get(r){const s=this.__v_raw,o=it(s),a=it(r);t||(Ri(r,a)&&Ht(o,"get",r),Ht(o,"get",a));const{has:l}=Qs(o),c=e?El:t?Gr:wn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Ht(it(r),"iterate",sr),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return t||(Ri(r,a)&&Ht(o,"has",r),Ht(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?El:t?Gr:wn;return!t&&Ht(l,"iterate",sr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Nt(n,t?{add:eo("add"),set:eo("set"),delete:eo("delete"),clear:eo("clear")}:{add(r){!e&&!cn(r)&&!ui(r)&&(r=it(r));const s=it(this);return Qs(s).has.call(s,r)||(s.add(r),ni(s,"add",r,r)),this},set(r,s){!e&&!cn(s)&&!ui(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Qs(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ri(s,u)&&ni(o,"set",r,s):ni(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Qs(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ni(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&ni(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=xm(r,t,e)}),n}function Bc(t,e){const n=ym(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const Sm={get:Bc(!1,!1)},bm={get:Bc(!1,!0)},Mm={get:Bc(!0,!1)};const Xd=new WeakMap,qd=new WeakMap,$d=new WeakMap,Em=new WeakMap;function Tm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Am(t){return t.__v_skip||!Object.isExtensible(t)?0:Tm(Kp(t))}function Hs(t){return ui(t)?t:zc(t,!1,gm,Sm,Xd)}function Yd(t){return zc(t,!1,vm,bm,qd)}function Tl(t){return zc(t,!0,_m,Mm,$d)}function zc(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Am(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function si(t){return ui(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function cn(t){return!!(t&&t.__v_isShallow)}function pa(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function kc(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&wd(t,"__v_skip",!0),t}const wn=t=>dt(t)?Hs(t):t,Gr=t=>dt(t)?Tl(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function yt(t){return jd(t,!1)}function wm(t){return jd(t,!0)}function jd(t,e){return Et(t)?t:new Rm(t,e)}class Rm{constructor(e,n){this.dep=new Oc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:wn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||cn(e)||ui(e);e=i?e:it(e),Ri(e,n)&&(this._rawValue=e,this._value=i?e:wn(e),this.dep.trigger())}}function on(t){return Et(t)?t.value:t}const Cm={get:(t,e,n)=>e==="__v_raw"?t:on(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Et(r)&&!Et(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Kd(t){return si(t)?t:new Proxy(t,Cm)}function Pm(t){const e=ze(t)?new Array(t.length):{};for(const n in t)e[n]=Dm(t,n);return e}class Im{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!ze(e)||!ca(String(n)))do r=!pa(s)||cn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=on(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Et(this._raw[this._key])){const n=this._object[this._key];if(Et(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return um(this._raw,this._key)}}function Dm(t,e,n){return new Im(t,e,n)}class Lm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Oc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ws-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Fd(this,!0),!0}get value(){const e=this.dep.track();return zd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Um(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new Lm(i,r,n)}const to={},qo=new WeakMap;let ji;function Nm(t,e=!1,n=ji){if(n){let i=qo.get(n);i||qo.set(n,i=[]),i.push(t)}}function Fm(t,e,n=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=S=>r?S:cn(S)||r===!1||r===0?ii(S,1):ii(S);let u,f,d,h,g=!1,v=!1;if(Et(t)?(f=()=>t.value,g=cn(t)):si(t)?(f=()=>c(t),g=!0):ze(t)?(v=!0,g=t.some(S=>si(S)||cn(S)),f=()=>t.map(S=>{if(Et(S))return S.value;if(si(S))return c(S);if(qe(S))return l?l(S,2):S()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){li();try{d()}finally{ci()}}const S=ji;ji=u;try{return l?l(t,3,[h]):t(h)}finally{ji=S}}:f=Hn,e&&r){const S=f,C=r===!0?1/0:r;f=()=>ii(S(),C)}const m=Ld(),p=()=>{u.stop(),m&&m.active&&Dc(m.effects,u)};if(s&&e){const S=e;e=(...C)=>{S(...C),p()}}let w=v?new Array(t.length).fill(to):to;const b=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(e){const C=u.run();if(r||g||(v?C.some((P,I)=>Ri(P,w[I])):Ri(C,w))){d&&d();const P=ji;ji=u;try{const I=[C,w===to?void 0:v&&w[0]===to?[]:w,h];w=C,l?l(e,3,I):e(...I)}finally{ji=P}}}else u.run()};return a&&a(b),u=new Ud(f),u.scheduler=o?()=>o(b,!1):b,h=S=>Nm(S,!1,u),d=u.onStop=()=>{const S=qo.get(u);if(S){if(l)l(S,4);else for(const C of S)C();qo.delete(u)}},e?i?b(!0):w=u.run():o?o(b.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ii(t,e=1/0,n){if(e<=0||!dt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Et(t))ii(t.value,e,n);else if(ze(t))for(let i=0;i<t.length;i++)ii(t[i],e,n);else if(Md(t)||Nr(t))t.forEach(i=>{ii(i,e,n)});else if(Ad(t)){for(const i in t)ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ii(t[i],e,n)}return t}function Vs(t,e,n,i){try{return i?t(...i):t()}catch(r){Gs(r,e,n)}}function Rn(t,e,n,i){if(qe(t)){const r=Vs(t,e,n,i);return r&&Ed(r)&&r.catch(s=>{Gs(s,e,n)}),r}if(ze(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Rn(t[s],e,n,i));return r}}function Gs(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){li(),Vs(s,null,10,[t,l,c]),ci();return}}Om(t,n,r,i,o)}function Om(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const jt=[];let Ln=-1;const Fr=[];let Ei=null,Ir=0;const Zd=Promise.resolve();let $o=null;function Hc(t){const e=$o||Zd;return t?e.then(this?t.bind(this):t):e}function Bm(t){let e=Ln+1,n=jt.length;for(;e<n;){const i=e+n>>>1,r=jt[i],s=Cs(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Vc(t){if(!(t.flags&1)){const e=Cs(t),n=jt[jt.length-1];!n||!(t.flags&2)&&e>=Cs(n)?jt.push(t):jt.splice(Bm(e),0,t),t.flags|=1,Jd()}}function Jd(){$o||($o=Zd.then(eh))}function zm(t){ze(t)?Fr.push(...t):Ei&&t.id===-1?Ei.splice(Ir+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),Jd()}function yu(t,e,n=Ln+1){for(;n<jt.length;n++){const i=jt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;jt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Qd(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>Cs(n)-Cs(i));if(Fr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ir=0;Ir<Ei.length;Ir++){const n=Ei[Ir];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ei=null,Ir=0}}const Cs=t=>t.id==null?t.flags&2?-1:1/0:t.id;function eh(t){try{for(Ln=0;Ln<jt.length;Ln++){const e=jt[Ln];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Vs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ln<jt.length;Ln++){const e=jt[Ln];e&&(e.flags&=-2)}Ln=-1,jt.length=0,Qd(),$o=null,(jt.length||Fr.length)&&eh()}}let an=null,th=null;function Yo(t){const e=an;return an=t,th=t&&t.type.__scopeId||null,e}function nh(t,e=an,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Zo(-1);const s=Yo(e);let o;try{o=t(...r)}finally{Yo(s),i._d&&Zo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function ih(t,e){if(an===null)return t;const n=va(an),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=pt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ii(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function zi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(li(),Rn(l,n,8,[t.el,a,t,e]),ci())}}function Lo(t,e){if(Ft){let n=Ft.provides;const i=Ft.parent&&Ft.parent.provides;i===n&&(n=Ft.provides=Object.create(i)),n[t]=e}}function _n(t,e,n=!1){const i=jc();if(i||or){let r=or?or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function km(){return!!(jc()||or)}const Hm=Symbol.for("v-scx"),Vm=()=>_n(Hm);function Gm(t,e){return Gc(t,null,e)}function Or(t,e,n){return Gc(t,e,n)}function Gc(t,e,n=pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Nt({},n),l=e&&i||!e&&s!=="post";let c;if(Wr){if(s==="sync"){const h=Vm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Hn,h.resume=Hn,h.pause=Hn,h}}const u=Ft;a.call=(h,g,v)=>Rn(h,u,g,v);let f=!1;s==="post"?a.scheduler=h=>{$t(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Vc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=Fm(t,e,a);return Wr&&(c?c.push(d):l&&d()),d}function Wm(t,e,n){const i=this.proxy,r=St(t)?t.includes(".")?rh(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Xs(this),a=Gc(r,s.bind(i),n);return o(),a}function rh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const sh=Symbol("_vte"),oh=t=>t.__isTeleport,ys=t=>t&&(t.disabled||t.disabled===""),Su=t=>t&&(t.defer||t.defer===""),bu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Mu=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Al=(t,e)=>{const n=t&&t.to;return St(n)?e?e(n):null:n},ah={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:v,createComment:m}}=c,p=ys(e.props);let{shapeFlag:w,children:b,dynamicChildren:S}=e;if(t==null){const C=e.el=v(""),P=e.anchor=v("");h(C,n,i),h(P,n,i);const I=(y,M)=>{w&16&&u(b,y,M,r,s,o,a,l)},D=()=>{const y=e.target=Al(e.props,g),M=lh(y,e,v,h);y&&(o!=="svg"&&bu(y)?o="svg":o!=="mathml"&&Mu(y)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(y),p||(I(y,M),Uo(e,!1)))};p&&(I(n,P),Uo(e,!0)),Su(e.props)?(e.el.__isMounted=!1,$t(()=>{D(),delete e.el.__isMounted},s)):D()}else{if(Su(e.props)&&t.el.__isMounted===!1){$t(()=>{ah.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const C=e.anchor=t.anchor,P=e.target=t.target,I=e.targetAnchor=t.targetAnchor,D=ys(t.props),y=D?n:P,M=D?C:I;if(o==="svg"||bu(P)?o="svg":(o==="mathml"||Mu(P))&&(o="mathml"),S?(d(t.dynamicChildren,S,y,r,s,o,a),$c(t,e,!0)):l||f(t,e,y,M,r,s,o,a,!1),p)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):no(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Al(e.props,g);R&&no(e,R,null,c,0)}else D&&no(e,P,I,c,1);Uo(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!ys(d);for(let g=0;g<a.length;g++){const v=a[g];i(v,e,n,h,!!v.dynamicChildren)}}},move:no,hydrate:Xm};function no(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||ys(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function Xm(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(v,m,p,w){m.anchor=f(o(v),m,a(v),n,i,r,s),m.targetStart=p,m.targetAnchor=w}const h=e.target=Al(e.props,l),g=ys(e.props);if(h){const v=h._lpa||h.firstChild;if(e.shapeFlag&16)if(g)d(t,e,v,v&&o(v));else{e.anchor=o(t);let m=v;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||lh(h,e,u,c),f(v&&o(v),e,h,n,i,r,s)}Uo(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const qm=ah;function Uo(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function lh(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[sh]=s,t&&(i(r,t),i(s,t)),s}const ti=Symbol("_leaveCb"),io=Symbol("_enterCb");function $m(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vn(()=>{t.isMounted=!0}),mh(()=>{t.isUnmounting=!0}),t}const dn=[Function,Array],ch={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dn,onEnter:dn,onAfterEnter:dn,onEnterCancelled:dn,onBeforeLeave:dn,onLeave:dn,onAfterLeave:dn,onLeaveCancelled:dn,onBeforeAppear:dn,onAppear:dn,onAfterAppear:dn,onAppearCancelled:dn},uh=t=>{const e=t.subTree;return e.component?uh(e.component):e},Ym={name:"BaseTransition",props:ch,setup(t,{slots:e}){const n=jc(),i=$m();return()=>{const r=e.default&&hh(e.default(),!0);if(!r||!r.length)return;const s=fh(r),o=it(t),{mode:a}=o;if(i.isLeaving)return Da(s);const l=Eu(s);if(!l)return Da(s);let c=wl(l,o,i,n,f=>c=f);l.type!==Kt&&Ps(l,c);let u=n.subTree&&Eu(n.subTree);if(u&&u.type!==Kt&&!Ji(u,l)&&uh(n).type!==Kt){let f=wl(u,o,i,n);if(Ps(u,f),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Da(s);a==="in-out"&&l.type!==Kt?f.delayLeave=(d,h,g)=>{const v=dh(i,u);v[String(u.key)]=u,d[ti]=()=>{h(),d[ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function fh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Kt){e=n;break}}return e}const jm=Ym;function dh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function wl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:v,onBeforeAppear:m,onAppear:p,onAfterAppear:w,onAppearCancelled:b}=e,S=String(t.key),C=dh(n,t),P=(y,M)=>{y&&Rn(y,i,9,M)},I=(y,M)=>{const R=M[1];P(y,M),ze(y)?y.every(B=>B.length<=1)&&R():y.length<=1&&R()},D={mode:o,persisted:a,beforeEnter(y){let M=l;if(!n.isMounted)if(s)M=m||l;else return;y[ti]&&y[ti](!0);const R=C[S];R&&Ji(t,R)&&R.el[ti]&&R.el[ti](),P(M,[y])},enter(y){let M=c,R=u,B=f;if(!n.isMounted)if(s)M=p||c,R=w||u,B=b||f;else return;let V=!1;const H=y[io]=j=>{V||(V=!0,j?P(B,[y]):P(R,[y]),D.delayedLeave&&D.delayedLeave(),y[io]=void 0)};M?I(M,[y,H]):H()},leave(y,M){const R=String(t.key);if(y[io]&&y[io](!0),n.isUnmounting)return M();P(d,[y]);let B=!1;const V=y[ti]=H=>{B||(B=!0,M(),H?P(v,[y]):P(g,[y]),y[ti]=void 0,C[R]===t&&delete C[R])};C[R]=t,h?I(h,[y,V]):V()},clone(y){const M=wl(y,e,n,i,r);return r&&r(M),M}};return D}function Da(t){if(Ws(t))return t=Li(t),t.children=null,t}function Eu(t){if(!Ws(t))return oh(t.type)&&t.children?fh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function Ps(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ps(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function hh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Tt?(o.patchFlag&128&&r++,i=i.concat(hh(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Li(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function xn(t,e){return qe(t)?Nt({name:t.name},e,{setup:t}):t}function Wc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const jo=new WeakMap;function Ss(t,e,n,i,r=!1){if(ze(t)){t.forEach((g,v)=>Ss(g,e&&(ze(e)?e[v]:e),n,i,r));return}if(bs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ss(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?va(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState,d=it(f),h=f===pt?bd:g=>lt(d,g);if(c!=null&&c!==l){if(Tu(e),St(c))u[c]=null,h(c)&&(f[c]=null);else if(Et(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(qe(l))Vs(l,a,12,[o,u]);else{const g=St(l),v=Et(l);if(g||v){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)ze(p)&&Dc(p,s);else if(ze(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const w=[s];l.value=w,t.k&&(u[t.k]=w)}}else g?(u[l]=o,h(l)&&(f[l]=o)):v&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),jo.delete(t)};p.id=-1,jo.set(t,p),$t(p,n)}else Tu(t),m()}}}function Tu(t){const e=jo.get(t);e&&(e.flags|=8,jo.delete(t))}const Au=t=>t.nodeType===8;da().requestIdleCallback;da().cancelIdleCallback;function Km(t,e){if(Au(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Au(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const bs=t=>!!t.type.__asyncLoader;function Zm(t){qe(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,h()),h=()=>{let g;return c||(g=c=e().catch(v=>{if(v=v instanceof Error?v:new Error(String(v)),l)return new Promise((m,p)=>{l(v,()=>m(d()),()=>p(v),f+1)});throw v}).then(v=>g!==c&&c?c:(v&&(v.__esModule||v[Symbol.toStringTag]==="Module")&&(v=v.default),u=v,v)))};return xn({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(g,v,m){let p=!1;(v.bu||(v.bu=[])).push(()=>p=!0);const w=()=>{p||m()},b=s?()=>{const S=s(w,C=>Km(g,C));S&&(v.bum||(v.bum=[])).push(S)}:w;u?b():h().then(()=>!v.isUnmounted&&b())},get __asyncResolved(){return u},setup(){const g=Ft;if(Wc(g),u)return()=>ro(u,g);const v=b=>{c=null,Gs(b,g,13,!i)};if(a&&g.suspense||Wr)return h().then(b=>()=>ro(b,g)).catch(b=>(v(b),()=>i?Pt(i,{error:b}):null));const m=yt(!1),p=yt(),w=yt(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const b=new Error(`Async component timed out after ${o}ms.`);v(b),p.value=b}},o),h().then(()=>{m.value=!0,g.parent&&Ws(g.parent.vnode)&&g.parent.update()}).catch(b=>{v(b),p.value=b}),()=>{if(m.value&&u)return ro(u,g);if(p.value&&i)return Pt(i,{error:p.value});if(n&&!w.value)return ro(n,g)}}})}function ro(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Pt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ws=t=>t.type.__isKeepAlive;function Jm(t,e){ph(t,"a",e)}function Qm(t,e){ph(t,"da",e)}function ph(t,e,n=Ft){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ws(r.parent.vnode)&&eg(i,e,n,r),r=r.parent}}function eg(t,e,n,i){const r=ma(e,t,i,!0);Di(()=>{Dc(i[e],r)},n)}function ma(t,e,n=Ft,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{li();const a=Xs(n),l=Rn(e,n,t,o);return a(),ci(),l});return i?r.unshift(s):r.push(s),s}}const hi=t=>(e,n=Ft)=>{(!Wr||t==="sp")&&ma(t,(...i)=>e(...i),n)},tg=hi("bm"),Vn=hi("m"),ng=hi("bu"),ig=hi("u"),mh=hi("bum"),Di=hi("um"),rg=hi("sp"),sg=hi("rtg"),og=hi("rtc");function ag(t,e=Ft){ma("ec",t,e)}const gh="components";function lg(t,e){return vh(gh,t,!0,e)||t}const _h=Symbol.for("v-ndc");function cg(t){return St(t)?vh(gh,t,!1)||t:t||_h}function vh(t,e,n=!0,i=!1){const r=an||Ft;if(r){const s=r.type;{const a=$g(s,!1);if(a&&(a===e||a===vn(e)||a===fa(vn(e))))return s}const o=wu(r[t]||s[t],e)||wu(r.appContext[t],e);return!o&&i?s:o}}function wu(t,e){return t&&(t[e]||t[vn(e)]||t[fa(vn(e))])}function Is(t,e,n,i){let r;const s=n,o=ze(t);if(o||St(t)){const a=o&&si(t);let l=!1,c=!1;a&&(l=!cn(t),c=ui(t),t=ha(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Gr(wn(t[u])):wn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const Rl=t=>t?Fh(t)?va(t):Rl(t.parent):null,Ms=Nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Rl(t.parent),$root:t=>Rl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>yh(t),$forceUpdate:t=>t.f||(t.f=()=>{Vc(t.update)}),$nextTick:t=>t.n||(t.n=Hc.bind(t.proxy)),$watch:t=>Wm.bind(t)}),La=(t,e)=>t!==pt&&!t.__isScriptSetup&&lt(t,e),ug={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(La(i,e))return o[e]=1,i[e];if(r!==pt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(n!==pt&&lt(n,e))return o[e]=4,n[e];Cl&&(o[e]=0)}}const c=Ms[e];let u,f;if(c)return e==="$attrs"&&Ht(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==pt&&lt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return La(r,e)?(r[e]=n,!0):i!==pt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==pt&&a[0]!=="$"&&lt(t,a)||La(e,a)||lt(s,a)||lt(i,a)||lt(Ms,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ru(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Cl=!0;function fg(t){const e=yh(t),n=t.proxy,i=t.ctx;Cl=!1,e.beforeCreate&&Cu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:w,destroyed:b,unmounted:S,render:C,renderTracked:P,renderTriggered:I,errorCaptured:D,serverPrefetch:y,expose:M,inheritAttrs:R,components:B,directives:V,filters:H}=e;if(c&&dg(c,i,null),o)for(const z in o){const L=o[z];qe(L)&&(i[z]=L.bind(n))}if(r){const z=r.call(n,n);dt(z)&&(t.data=Hs(z))}if(Cl=!0,s)for(const z in s){const L=s[z],ie=qe(L)?L.bind(n,n):qe(L.get)?L.get.bind(n,n):Hn,ue=!qe(L)&&qe(L.set)?L.set.bind(n):Hn,ve=We({get:ie,set:ue});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>ve.value,set:be=>ve.value=be})}if(a)for(const z in a)xh(a[z],i,n,z);if(l){const z=qe(l)?l.call(n):l;Reflect.ownKeys(z).forEach(L=>{Lo(L,z[L])})}u&&Cu(u,t,"c");function q(z,L){ze(L)?L.forEach(ie=>z(ie.bind(n))):L&&z(L.bind(n))}if(q(tg,f),q(Vn,d),q(ng,h),q(ig,g),q(Jm,v),q(Qm,m),q(ag,D),q(og,P),q(sg,I),q(mh,w),q(Di,S),q(rg,y),ze(M))if(M.length){const z=t.exposed||(t.exposed={});M.forEach(L=>{Object.defineProperty(z,L,{get:()=>n[L],set:ie=>n[L]=ie,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Hn&&(t.render=C),R!=null&&(t.inheritAttrs=R),B&&(t.components=B),V&&(t.directives=V),y&&Wc(t)}function dg(t,e,n=Hn){ze(t)&&(t=Pl(t));for(const i in t){const r=t[i];let s;dt(r)?"default"in r?s=_n(r.from||i,r.default,!0):s=_n(r.from||i):s=_n(r),Et(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Cu(t,e,n){Rn(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function xh(t,e,n,i){let r=i.includes(".")?rh(n,i):()=>n[i];if(St(t)){const s=e[t];qe(s)&&Or(r,s)}else if(qe(t))Or(r,t.bind(n));else if(dt(t))if(ze(t))t.forEach(s=>xh(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Or(r,s,t)}}function yh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Ko(l,c,o,!0)),Ko(l,e,o)),dt(e)&&s.set(e,l),l}function Ko(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Ko(t,s,n,!0),r&&r.forEach(o=>Ko(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=hg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const hg={data:Pu,props:Iu,emits:Iu,methods:ps,computed:ps,beforeCreate:Xt,created:Xt,beforeMount:Xt,mounted:Xt,beforeUpdate:Xt,updated:Xt,beforeDestroy:Xt,beforeUnmount:Xt,destroyed:Xt,unmounted:Xt,activated:Xt,deactivated:Xt,errorCaptured:Xt,serverPrefetch:Xt,components:ps,directives:ps,watch:mg,provide:Pu,inject:pg};function Pu(t,e){return e?t?function(){return Nt(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function pg(t,e){return ps(Pl(t),Pl(e))}function Pl(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Xt(t,e){return t?[...new Set([].concat(t,e))]:e}function ps(t,e){return t?Nt(Object.create(null),t,e):e}function Iu(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Nt(Object.create(null),Ru(t),Ru(e??{})):e}function mg(t,e){if(!t)return e;if(!e)return t;const n=Nt(Object.create(null),t);for(const i in e)n[i]=Xt(t[i],e[i]);return n}function Sh(){return{app:null,config:{isNativeTag:bd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let gg=0;function _g(t,e){return function(i,r=null){qe(i)||(i=Nt({},i)),r!=null&&!dt(r)&&(r=null);const s=Sh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:gg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:jg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Pt(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,va(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Rn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;const vg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${vn(e)}Modifiers`]||t[`${Fi(e)}Modifiers`];function xg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pt;let r=n;const s=e.startsWith("update:"),o=s&&vg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>St(u)?u.trim():u)),o.number&&(r=n.map(Lc)));let a,l=i[a=wa(e)]||i[a=wa(vn(e))];!l&&s&&(l=i[a=wa(Fi(e))]),l&&Rn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Rn(c,t,6,r)}}const yg=new WeakMap;function bh(t,e,n=!1){const i=n?yg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=bh(c,e,!0);u&&(a=!0,Nt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(dt(t)&&i.set(t,null),null):(ze(s)?s.forEach(l=>o[l]=null):Nt(o,s),dt(t)&&i.set(t,o),o)}function ga(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Fi(e))||lt(t,e))}function Du(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t,m=Yo(t);let p,w;try{if(n.shapeFlag&4){const S=r||i,C=S;p=Un(c.call(C,S,u,f,h,d,g)),w=a}else{const S=e;p=Un(S.length>1?S(f,{attrs:a,slots:o,emit:l}):S(f,null)),w=e.props?a:Sg(a)}}catch(S){Es.length=0,Gs(S,t,1),p=Pt(Kt)}let b=p;if(w&&v!==!1){const S=Object.keys(w),{shapeFlag:C}=b;S.length&&C&7&&(s&&S.some(Ic)&&(w=bg(w,s)),b=Li(b,w,!1,!0))}return n.dirs&&(b=Li(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(n.dirs):n.dirs),n.transition&&Ps(b,n.transition),p=b,Yo(m),p}const Sg=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},bg=(t,e)=>{const n={};for(const i in t)(!Ic(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Mg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Lu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ga(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Lu(i,o,c):!0:!!o;return!1}function Lu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ga(n,s))return!0}return!1}function Eg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Mh={},Eh=()=>Object.create(Mh),Th=t=>Object.getPrototypeOf(t)===Mh;function Tg(t,e,n,i=!1){const r={},s=Eh();t.propsDefaults=Object.create(null),Ah(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Yd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Ag(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=it(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ga(t.emitsOptions,d))continue;const h=e[d];if(l)if(lt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=vn(d);r[g]=Il(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Ah(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=Fi(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Il(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&ni(t.attrs,"set","")}function Ah(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(_s(l))continue;const c=e[l];let u;r&&lt(r,u=vn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ga(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(n),c=a||pt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Il(r,l,f,c[f],t,!lt(c,f))}}return o}function Il(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Xs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fi(n))&&(i=!0))}return i}const wg=new WeakMap;function wh(t,e,n=!1){const i=n?wg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,h]=wh(f,e,!0);Nt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return dt(t)&&i.set(t,Ur),Ur;if(ze(s))for(let u=0;u<s.length;u++){const f=vn(s[u]);Uu(f)&&(o[f]=pt)}else if(s)for(const u in s){const f=vn(u);if(Uu(f)){const d=s[u],h=o[f]=ze(d)||qe(d)?{type:d}:Nt({},d),g=h.type;let v=!1,m=!0;if(ze(g))for(let p=0;p<g.length;++p){const w=g[p],b=qe(w)&&w.name;if(b==="Boolean"){v=!0;break}else b==="String"&&(m=!1)}else v=qe(g)&&g.name==="Boolean";h[0]=v,h[1]=m,(v||lt(h,"default"))&&a.push(f)}}const c=[o,a];return dt(t)&&i.set(t,c),c}function Uu(t){return t[0]!=="$"&&!_s(t)}const Xc=t=>t==="_"||t==="_ctx"||t==="$stable",qc=t=>ze(t)?t.map(Un):[Un(t)],Rg=(t,e,n)=>{if(e._n)return e;const i=nh((...r)=>qc(e(...r)),n);return i._c=!1,i},Rh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Xc(r))continue;const s=t[r];if(qe(s))e[r]=Rg(r,s,i);else if(s!=null){const o=qc(s);e[r]=()=>o}}},Ch=(t,e)=>{const n=qc(e);t.slots.default=()=>n},Ph=(t,e,n)=>{for(const i in e)(n||!Xc(i))&&(t[i]=e[i])},Cg=(t,e,n)=>{const i=t.slots=Eh();if(t.vnode.shapeFlag&32){const r=e._;r?(Ph(i,e,n),n&&wd(i,"_",r,!0)):Rh(e,i)}else e&&Ch(t,e)},Pg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Ph(r,e,n):(s=!e.$stable,Rh(e,r)),o=e}else e&&(Ch(t,e),o={default:1});if(s)for(const a in r)!Xc(a)&&o[a]==null&&delete r[a]},$t=Ng;function Ig(t){return Dg(t)}function Dg(t,e){const n=da();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Hn,insertStaticContent:g}=t,v=(E,_,F,X=null,te=null,W=null,de=void 0,Q=null,ae=!!_.dynamicChildren)=>{if(E===_)return;E&&!Ji(E,_)&&(X=N(E),be(E,te,W,!0),E=null),_.patchFlag===-2&&(ae=!1,_.dynamicChildren=null);const{type:le,ref:Te,shapeFlag:T}=_;switch(le){case _a:m(E,_,F,X);break;case Kt:p(E,_,F,X);break;case No:E==null&&w(_,F,X,de);break;case Tt:B(E,_,F,X,te,W,de,Q,ae);break;default:T&1?C(E,_,F,X,te,W,de,Q,ae):T&6?V(E,_,F,X,te,W,de,Q,ae):(T&64||T&128)&&le.process(E,_,F,X,te,W,de,Q,ae,fe)}Te!=null&&te?Ss(Te,E&&E.ref,W,_||E,!_):Te==null&&E&&E.ref!=null&&Ss(E.ref,null,W,E,!0)},m=(E,_,F,X)=>{if(E==null)i(_.el=a(_.children),F,X);else{const te=_.el=E.el;_.children!==E.children&&c(te,_.children)}},p=(E,_,F,X)=>{E==null?i(_.el=l(_.children||""),F,X):_.el=E.el},w=(E,_,F,X)=>{[E.el,E.anchor]=g(E.children,_,F,X,E.el,E.anchor)},b=({el:E,anchor:_},F,X)=>{let te;for(;E&&E!==_;)te=d(E),i(E,F,X),E=te;i(_,F,X)},S=({el:E,anchor:_})=>{let F;for(;E&&E!==_;)F=d(E),r(E),E=F;r(_)},C=(E,_,F,X,te,W,de,Q,ae)=>{if(_.type==="svg"?de="svg":_.type==="math"&&(de="mathml"),E==null)P(_,F,X,te,W,de,Q,ae);else{const le=E.el&&E.el._isVueCE?E.el:null;try{le&&le._beginPatch(),y(E,_,te,W,de,Q,ae)}finally{le&&le._endPatch()}}},P=(E,_,F,X,te,W,de,Q)=>{let ae,le;const{props:Te,shapeFlag:T,transition:x,dirs:U}=E;if(ae=E.el=o(E.type,W,Te&&Te.is,Te),T&8?u(ae,E.children):T&16&&D(E.children,ae,null,X,te,Ua(E,W),de,Q),U&&zi(E,null,X,"created"),I(ae,E,E.scopeId,de,X),Te){for(const oe in Te)oe!=="value"&&!_s(oe)&&s(ae,oe,null,Te[oe],W,X);"value"in Te&&s(ae,"value",null,Te.value,W),(le=Te.onVnodeBeforeMount)&&Dn(le,X,E)}U&&zi(E,null,X,"beforeMount");const Y=Lg(te,x);Y&&x.beforeEnter(ae),i(ae,_,F),((le=Te&&Te.onVnodeMounted)||Y||U)&&$t(()=>{le&&Dn(le,X,E),Y&&x.enter(ae),U&&zi(E,null,X,"mounted")},te)},I=(E,_,F,X,te)=>{if(F&&h(E,F),X)for(let W=0;W<X.length;W++)h(E,X[W]);if(te){let W=te.subTree;if(_===W||Lh(W.type)&&(W.ssContent===_||W.ssFallback===_)){const de=te.vnode;I(E,de,de.scopeId,de.slotScopeIds,te.parent)}}},D=(E,_,F,X,te,W,de,Q,ae=0)=>{for(let le=ae;le<E.length;le++){const Te=E[le]=Q?Ti(E[le]):Un(E[le]);v(null,Te,_,F,X,te,W,de,Q)}},y=(E,_,F,X,te,W,de)=>{const Q=_.el=E.el;let{patchFlag:ae,dynamicChildren:le,dirs:Te}=_;ae|=E.patchFlag&16;const T=E.props||pt,x=_.props||pt;let U;if(F&&ki(F,!1),(U=x.onVnodeBeforeUpdate)&&Dn(U,F,_,E),Te&&zi(_,E,F,"beforeUpdate"),F&&ki(F,!0),(T.innerHTML&&x.innerHTML==null||T.textContent&&x.textContent==null)&&u(Q,""),le?M(E.dynamicChildren,le,Q,F,X,Ua(_,te),W):de||L(E,_,Q,null,F,X,Ua(_,te),W,!1),ae>0){if(ae&16)R(Q,T,x,F,te);else if(ae&2&&T.class!==x.class&&s(Q,"class",null,x.class,te),ae&4&&s(Q,"style",T.style,x.style,te),ae&8){const Y=_.dynamicProps;for(let oe=0;oe<Y.length;oe++){const K=Y[oe],we=T[K],he=x[K];(he!==we||K==="value")&&s(Q,K,we,he,te,F)}}ae&1&&E.children!==_.children&&u(Q,_.children)}else!de&&le==null&&R(Q,T,x,F,te);((U=x.onVnodeUpdated)||Te)&&$t(()=>{U&&Dn(U,F,_,E),Te&&zi(_,E,F,"updated")},X)},M=(E,_,F,X,te,W,de)=>{for(let Q=0;Q<_.length;Q++){const ae=E[Q],le=_[Q],Te=ae.el&&(ae.type===Tt||!Ji(ae,le)||ae.shapeFlag&198)?f(ae.el):F;v(ae,le,Te,null,X,te,W,de,!0)}},R=(E,_,F,X,te)=>{if(_!==F){if(_!==pt)for(const W in _)!_s(W)&&!(W in F)&&s(E,W,_[W],null,te,X);for(const W in F){if(_s(W))continue;const de=F[W],Q=_[W];de!==Q&&W!=="value"&&s(E,W,Q,de,te,X)}"value"in F&&s(E,"value",_.value,F.value,te)}},B=(E,_,F,X,te,W,de,Q,ae)=>{const le=_.el=E?E.el:a(""),Te=_.anchor=E?E.anchor:a("");let{patchFlag:T,dynamicChildren:x,slotScopeIds:U}=_;U&&(Q=Q?Q.concat(U):U),E==null?(i(le,F,X),i(Te,F,X),D(_.children||[],F,Te,te,W,de,Q,ae)):T>0&&T&64&&x&&E.dynamicChildren&&E.dynamicChildren.length===x.length?(M(E.dynamicChildren,x,F,te,W,de,Q),(_.key!=null||te&&_===te.subTree)&&$c(E,_,!0)):L(E,_,F,Te,te,W,de,Q,ae)},V=(E,_,F,X,te,W,de,Q,ae)=>{_.slotScopeIds=Q,E==null?_.shapeFlag&512?te.ctx.activate(_,F,X,de,ae):H(_,F,X,te,W,de,ae):j(E,_,ae)},H=(E,_,F,X,te,W,de)=>{const Q=E.component=Vg(E,X,te);if(Ws(E)&&(Q.ctx.renderer=fe),Gg(Q,!1,de),Q.asyncDep){if(te&&te.registerDep(Q,q,de),!E.el){const ae=Q.subTree=Pt(Kt);p(null,ae,_,F),E.placeholder=ae.el}}else q(Q,E,_,F,te,W,de)},j=(E,_,F)=>{const X=_.component=E.component;if(Mg(E,_,F))if(X.asyncDep&&!X.asyncResolved){z(X,_,F);return}else X.next=_,X.update();else _.el=E.el,X.vnode=_},q=(E,_,F,X,te,W,de)=>{const Q=()=>{if(E.isMounted){let{next:T,bu:x,u:U,parent:Y,vnode:oe}=E;{const Ce=Ih(E);if(Ce){T&&(T.el=oe.el,z(E,T,de)),Ce.asyncDep.then(()=>{E.isUnmounted||Q()});return}}let K=T,we;ki(E,!1),T?(T.el=oe.el,z(E,T,de)):T=oe,x&&Do(x),(we=T.props&&T.props.onVnodeBeforeUpdate)&&Dn(we,Y,T,oe),ki(E,!0);const he=Du(E),Re=E.subTree;E.subTree=he,v(Re,he,f(Re.el),N(Re),E,te,W),T.el=he.el,K===null&&Eg(E,he.el),U&&$t(U,te),(we=T.props&&T.props.onVnodeUpdated)&&$t(()=>Dn(we,Y,T,oe),te)}else{let T;const{el:x,props:U}=_,{bm:Y,m:oe,parent:K,root:we,type:he}=E,Re=bs(_);ki(E,!1),Y&&Do(Y),!Re&&(T=U&&U.onVnodeBeforeMount)&&Dn(T,K,_),ki(E,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(he);const Ce=E.subTree=Du(E);v(null,Ce,F,X,E,te,W),_.el=Ce.el}if(oe&&$t(oe,te),!Re&&(T=U&&U.onVnodeMounted)){const Ce=_;$t(()=>Dn(T,K,Ce),te)}(_.shapeFlag&256||K&&bs(K.vnode)&&K.vnode.shapeFlag&256)&&E.a&&$t(E.a,te),E.isMounted=!0,_=F=X=null}};E.scope.on();const ae=E.effect=new Ud(Q);E.scope.off();const le=E.update=ae.run.bind(ae),Te=E.job=ae.runIfDirty.bind(ae);Te.i=E,Te.id=E.uid,ae.scheduler=()=>Vc(Te),ki(E,!0),le()},z=(E,_,F)=>{_.component=E;const X=E.vnode.props;E.vnode=_,E.next=null,Ag(E,_.props,X,F),Pg(E,_.children,F),li(),yu(E),ci()},L=(E,_,F,X,te,W,de,Q,ae=!1)=>{const le=E&&E.children,Te=E?E.shapeFlag:0,T=_.children,{patchFlag:x,shapeFlag:U}=_;if(x>0){if(x&128){ue(le,T,F,X,te,W,de,Q,ae);return}else if(x&256){ie(le,T,F,X,te,W,de,Q,ae);return}}U&8?(Te&16&&me(le,te,W),T!==le&&u(F,T)):Te&16?U&16?ue(le,T,F,X,te,W,de,Q,ae):me(le,te,W,!0):(Te&8&&u(F,""),U&16&&D(T,F,X,te,W,de,Q,ae))},ie=(E,_,F,X,te,W,de,Q,ae)=>{E=E||Ur,_=_||Ur;const le=E.length,Te=_.length,T=Math.min(le,Te);let x;for(x=0;x<T;x++){const U=_[x]=ae?Ti(_[x]):Un(_[x]);v(E[x],U,F,null,te,W,de,Q,ae)}le>Te?me(E,te,W,!0,!1,T):D(_,F,X,te,W,de,Q,ae,T)},ue=(E,_,F,X,te,W,de,Q,ae)=>{let le=0;const Te=_.length;let T=E.length-1,x=Te-1;for(;le<=T&&le<=x;){const U=E[le],Y=_[le]=ae?Ti(_[le]):Un(_[le]);if(Ji(U,Y))v(U,Y,F,null,te,W,de,Q,ae);else break;le++}for(;le<=T&&le<=x;){const U=E[T],Y=_[x]=ae?Ti(_[x]):Un(_[x]);if(Ji(U,Y))v(U,Y,F,null,te,W,de,Q,ae);else break;T--,x--}if(le>T){if(le<=x){const U=x+1,Y=U<Te?_[U].el:X;for(;le<=x;)v(null,_[le]=ae?Ti(_[le]):Un(_[le]),F,Y,te,W,de,Q,ae),le++}}else if(le>x)for(;le<=T;)be(E[le],te,W,!0),le++;else{const U=le,Y=le,oe=new Map;for(le=Y;le<=x;le++){const Ue=_[le]=ae?Ti(_[le]):Un(_[le]);Ue.key!=null&&oe.set(Ue.key,le)}let K,we=0;const he=x-Y+1;let Re=!1,Ce=0;const pe=new Array(he);for(le=0;le<he;le++)pe[le]=0;for(le=U;le<=T;le++){const Ue=E[le];if(we>=he){be(Ue,te,W,!0);continue}let Pe;if(Ue.key!=null)Pe=oe.get(Ue.key);else for(K=Y;K<=x;K++)if(pe[K-Y]===0&&Ji(Ue,_[K])){Pe=K;break}Pe===void 0?be(Ue,te,W,!0):(pe[Pe-Y]=le+1,Pe>=Ce?Ce=Pe:Re=!0,v(Ue,_[Pe],F,null,te,W,de,Q,ae),we++)}const Ee=Re?Ug(pe):Ur;for(K=Ee.length-1,le=he-1;le>=0;le--){const Ue=Y+le,Pe=_[Ue],Se=_[Ue+1],$e=Ue+1<Te?Se.el||Dh(Se):X;pe[le]===0?v(null,Pe,F,$e,te,W,de,Q,ae):Re&&(K<0||le!==Ee[K]?ve(Pe,F,$e,2):K--)}}},ve=(E,_,F,X,te=null)=>{const{el:W,type:de,transition:Q,children:ae,shapeFlag:le}=E;if(le&6){ve(E.component.subTree,_,F,X);return}if(le&128){E.suspense.move(_,F,X);return}if(le&64){de.move(E,_,F,fe);return}if(de===Tt){i(W,_,F);for(let T=0;T<ae.length;T++)ve(ae[T],_,F,X);i(E.anchor,_,F);return}if(de===No){b(E,_,F);return}if(X!==2&&le&1&&Q)if(X===0)Q.beforeEnter(W),i(W,_,F),$t(()=>Q.enter(W),te);else{const{leave:T,delayLeave:x,afterLeave:U}=Q,Y=()=>{E.ctx.isUnmounted?r(W):i(W,_,F)},oe=()=>{W._isLeaving&&W[ti](!0),T(W,()=>{Y(),U&&U()})};x?x(W,Y,oe):oe()}else i(W,_,F)},be=(E,_,F,X=!1,te=!1)=>{const{type:W,props:de,ref:Q,children:ae,dynamicChildren:le,shapeFlag:Te,patchFlag:T,dirs:x,cacheIndex:U}=E;if(T===-2&&(te=!1),Q!=null&&(li(),Ss(Q,null,F,E,!0),ci()),U!=null&&(_.renderCache[U]=void 0),Te&256){_.ctx.deactivate(E);return}const Y=Te&1&&x,oe=!bs(E);let K;if(oe&&(K=de&&de.onVnodeBeforeUnmount)&&Dn(K,_,E),Te&6)ne(E.component,F,X);else{if(Te&128){E.suspense.unmount(F,X);return}Y&&zi(E,null,_,"beforeUnmount"),Te&64?E.type.remove(E,_,F,fe,X):le&&!le.hasOnce&&(W!==Tt||T>0&&T&64)?me(le,_,F,!1,!0):(W===Tt&&T&384||!te&&Te&16)&&me(ae,_,F),X&&je(E)}(oe&&(K=de&&de.onVnodeUnmounted)||Y)&&$t(()=>{K&&Dn(K,_,E),Y&&zi(E,null,_,"unmounted")},F)},je=E=>{const{type:_,el:F,anchor:X,transition:te}=E;if(_===Tt){ke(F,X);return}if(_===No){S(E);return}const W=()=>{r(F),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(E.shapeFlag&1&&te&&!te.persisted){const{leave:de,delayLeave:Q}=te,ae=()=>de(F,W);Q?Q(E.el,W,ae):ae()}else W()},ke=(E,_)=>{let F;for(;E!==_;)F=d(E),r(E),E=F;r(_)},ne=(E,_,F)=>{const{bum:X,scope:te,job:W,subTree:de,um:Q,m:ae,a:le}=E;Nu(ae),Nu(le),X&&Do(X),te.stop(),W&&(W.flags|=8,be(de,E,_,F)),Q&&$t(Q,_),$t(()=>{E.isUnmounted=!0},_)},me=(E,_,F,X=!1,te=!1,W=0)=>{for(let de=W;de<E.length;de++)be(E[de],_,F,X,te)},N=E=>{if(E.shapeFlag&6)return N(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const _=d(E.anchor||E.el),F=_&&_[sh];return F?d(F):_};let se=!1;const re=(E,_,F)=>{let X;E==null?_._vnode&&(be(_._vnode,null,null,!0),X=_._vnode.component):v(_._vnode||null,E,_,null,null,null,F),_._vnode=E,se||(se=!0,yu(X),Qd(),se=!1)},fe={p:v,um:be,m:ve,r:je,mt:H,mc:D,pc:L,pbc:M,n:N,o:t};return{render:re,hydrate:void 0,createApp:_g(re)}}function Ua({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ki({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Lg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function $c(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&$c(o,a)),a.type===_a&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(t.type===Tt?1:0)),a.type===Kt&&!a.el&&(a.el=o.el)}}function Ug(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Ih(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ih(e)}function Nu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Dh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Dh(e.subTree):null}const Lh=t=>t.__isSuspense;function Ng(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):zm(t)}const Tt=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),No=Symbol.for("v-stc"),Es=[];let ln=null;function Ve(t=!1){Es.push(ln=t?null:[])}function Fg(){Es.pop(),ln=Es[Es.length-1]||null}let Ds=1;function Zo(t,e=!1){Ds+=t,t<0&&ln&&e&&(ln.hasOnce=!0)}function Uh(t){return t.dynamicChildren=Ds>0?ln||Ur:null,Fg(),Ds>0&&ln&&ln.push(t),t}function Je(t,e,n,i,r,s){return Uh($(t,e,n,i,r,s,!0))}function Fn(t,e,n,i,r){return Uh(Pt(t,e,n,i,r,!0))}function Jo(t){return t?t.__v_isVNode===!0:!1}function Ji(t,e){return t.type===e.type&&t.key===e.key}const Nh=({key:t})=>t??null,Fo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||Et(t)||qe(t)?{i:an,r:t,k:e,f:!!n}:t:null);function $(t,e=null,n=null,i=0,r=null,s=t===Tt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Nh(e),ref:e&&Fo(e),scopeId:th,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:an};return a?(Yc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=St(n)?8:16),Ds>0&&!o&&ln&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&ln.push(l),l}const Pt=Og;function Og(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===_h)&&(t=Kt),Jo(t)){const a=Li(t,e,!0);return n&&Yc(a,n),Ds>0&&!s&&ln&&(a.shapeFlag&6?ln[ln.indexOf(t)]=a:ln.push(a)),a.patchFlag=-2,a}if(Yg(t)&&(t=t.__vccOpts),e){e=Bg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=An(a)),dt(l)&&(pa(l)&&!ze(l)&&(l=Nt({},l)),e.style=Jr(l))}const o=St(t)?1:Lh(t)?128:oh(t)?64:dt(t)?4:qe(t)?2:0;return $(t,e,n,i,r,o,s,!0)}function Bg(t){return t?pa(t)||Th(t)?Nt({},t):t:null}function Li(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?zg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Nh(c),ref:e&&e.ref?n&&s?ze(s)?s.concat(Fo(e)):[s,Fo(e)]:Fo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Tt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Li(t.ssContent),ssFallback:t.ssFallback&&Li(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Ps(u,l.clone(u)),u}function oi(t=" ",e=0){return Pt(_a,null,t,e)}function Qo(t,e){const n=Pt(No,null,t);return n.staticCount=e,n}function kt(t="",e=!1){return e?(Ve(),Fn(Kt,null,t)):Pt(Kt,null,t)}function Un(t){return t==null||typeof t=="boolean"?Pt(Kt):ze(t)?Pt(Tt,null,t.slice()):Jo(t)?Ti(t):Pt(_a,null,String(t))}function Ti(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Li(t)}function Yc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Yc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Th(e)?e._ctx=an:r===3&&an&&(an.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:an},n=32):(e=String(e),i&64?(n=16,e=[oi(e)]):n=8);t.children=e,t.shapeFlag|=n}function zg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=An([e.class,i.class]));else if(r==="style")e.style=Jr([e.style,i.style]);else if(la(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Dn(t,e,n,i=null){Rn(t,e,7,[n,i])}const kg=Sh();let Hg=0;function Vg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||kg,s={uid:Hg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Id(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:wh(i,r),emitsOptions:bh(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=xg.bind(null,s),t.ce&&t.ce(s),s}let Ft=null;const jc=()=>Ft||an;let ea,Dl;{const t=da(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>Ft=n),Dl=e("__VUE_SSR_SETTERS__",n=>Wr=n)}const Xs=t=>{const e=Ft;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},Fu=()=>{Ft&&Ft.scope.off(),ea(null)};function Fh(t){return t.vnode.shapeFlag&4}let Wr=!1;function Gg(t,e=!1,n=!1){e&&Dl(e);const{props:i,children:r}=t.vnode,s=Fh(t);Tg(t,i,s,e),Cg(t,r,n||e);const o=s?Wg(t,e):void 0;return e&&Dl(!1),o}function Wg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ug);const{setup:i}=n;if(i){li();const r=t.setupContext=i.length>1?qg(t):null,s=Xs(t),o=Vs(i,t,0,[t.props,r]),a=Ed(o);if(ci(),s(),(a||t.sp)&&!bs(t)&&Wc(t),a){if(o.then(Fu,Fu),e)return o.then(l=>{Ou(t,l)}).catch(l=>{Gs(l,t,0)});t.asyncDep=o}else Ou(t,o)}else Oh(t)}function Ou(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=Kd(e)),Oh(t)}function Oh(t,e,n){const i=t.type;t.render||(t.render=i.render||Hn);{const r=Xs(t);li();try{fg(t)}finally{ci(),r()}}}const Xg={get(t,e){return Ht(t,"get",""),t[e]}};function qg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Xg),slots:t.slots,emit:t.emit,expose:e}}function va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Kd(kc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ms)return Ms[n](t)},has(e,n){return n in e||n in Ms}})):t.proxy}function $g(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function Yg(t){return qe(t)&&"__vccOpts"in t}const We=(t,e)=>Um(t,e,Wr);function Kc(t,e,n){try{Zo(-1);const i=arguments.length;return i===2?dt(e)&&!ze(e)?Jo(e)?Pt(t,null,[e]):Pt(t,e):Pt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Jo(n)&&(n=[n]),Pt(t,e,n))}finally{Zo(1)}}const jg="3.5.26";let Ll;const Bu=typeof window<"u"&&window.trustedTypes;if(Bu)try{Ll=Bu.createPolicy("vue",{createHTML:t=>t})}catch{}const Bh=Ll?t=>Ll.createHTML(t):t=>t,Kg="http://www.w3.org/2000/svg",Zg="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,zu=ei&&ei.createElement("template"),Jg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ei.createElementNS(Kg,t):e==="mathml"?ei.createElementNS(Zg,t):n?ei.createElement(t,{is:n}):ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ei.createTextNode(t),createComment:t=>ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{zu.innerHTML=Bh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=zu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pi="transition",rs="animation",Ls=Symbol("_vtc"),zh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qg=Nt({},ch,zh),e_=t=>(t.displayName="Transition",t.props=Qg,t),t_=e_((t,{slots:e})=>Kc(jm,n_(t),e)),Hi=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},ku=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function n_(t){const e={};for(const B in t)B in zh||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=i_(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:w,onEnterCancelled:b,onLeave:S,onLeaveCancelled:C,onBeforeAppear:P=p,onAppear:I=w,onAppearCancelled:D=b}=e,y=(B,V,H,j)=>{B._enterCancelled=j,Vi(B,V?u:a),Vi(B,V?c:o),H&&H()},M=(B,V)=>{B._isLeaving=!1,Vi(B,f),Vi(B,h),Vi(B,d),V&&V()},R=B=>(V,H)=>{const j=B?I:w,q=()=>y(V,B,H);Hi(j,[V,q]),Hu(()=>{Vi(V,B?l:s),qn(V,B?u:a),ku(j)||Vu(V,i,v,q)})};return Nt(e,{onBeforeEnter(B){Hi(p,[B]),qn(B,s),qn(B,o)},onBeforeAppear(B){Hi(P,[B]),qn(B,l),qn(B,c)},onEnter:R(!1),onAppear:R(!0),onLeave(B,V){B._isLeaving=!0;const H=()=>M(B,V);qn(B,f),B._enterCancelled?(qn(B,d),Xu(B)):(Xu(B),qn(B,d)),Hu(()=>{B._isLeaving&&(Vi(B,f),qn(B,h),ku(S)||Vu(B,i,m,H))}),Hi(S,[B,H])},onEnterCancelled(B){y(B,!1,void 0,!0),Hi(b,[B])},onAppearCancelled(B){y(B,!0,void 0,!0),Hi(D,[B])},onLeaveCancelled(B){M(B),Hi(C,[B])}})}function i_(t){if(t==null)return null;if(dt(t))return[Na(t.enter),Na(t.leave)];{const e=Na(t);return[e,e]}}function Na(t){return Qp(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ls]||(t[Ls]=new Set)).add(e)}function Vi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ls];n&&(n.delete(e),n.size||(t[Ls]=void 0))}function Hu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let r_=0;function Vu(t,e,n,i){const r=t._endId=++r_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=s_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function s_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${pi}Delay`),s=i(`${pi}Duration`),o=Gu(r,s),a=i(`${rs}Delay`),l=i(`${rs}Duration`),c=Gu(a,l);let u=null,f=0,d=0;e===pi?o>0&&(u=pi,f=o,d=s.length):e===rs?c>0&&(u=rs,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?pi:rs:null,d=u?u===pi?s.length:l.length:0);const h=u===pi&&/\b(?:transform|all)(?:,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Gu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Wu(n)+Wu(t[i])))}function Wu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Xu(t){return(t?t.ownerDocument:document).body.offsetHeight}function o_(t,e,n){const i=t[Ls];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ta=Symbol("_vod"),kh=Symbol("_vsh"),MA={name:"show",beforeMount(t,{value:e},{transition:n}){t[ta]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):ss(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),ss(t,!0),i.enter(t)):i.leave(t,()=>{ss(t,!1)}):ss(t,e))},beforeUnmount(t,{value:e}){ss(t,e)}};function ss(t,e){t.style.display=e?t[ta]:"none",t[kh]=!e}const a_=Symbol(""),l_=/(?:^|;)\s*display\s*:/;function c_(t,e,n){const i=t.style,r=St(n);let s=!1;if(n&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Oo(i,a,"")}else for(const o in e)n[o]==null&&Oo(i,o,"");for(const o in n)o==="display"&&(s=!0),Oo(i,o,n[o])}else if(r){if(e!==n){const o=i[a_];o&&(n+=";"+o),i.cssText=n,s=l_.test(n)}}else e&&t.removeAttribute("style");ta in t&&(t[ta]=s?i.display:"",t[kh]&&(i.display="none"))}const qu=/\s*!important$/;function Oo(t,e,n){if(ze(n))n.forEach(i=>Oo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=u_(t,e);qu.test(n)?t.setProperty(Fi(i),n.replace(qu,""),"important"):t[i]=n}}const $u=["Webkit","Moz","ms"],Fa={};function u_(t,e){const n=Fa[e];if(n)return n;let i=vn(e);if(i!=="filter"&&i in t)return Fa[e]=i;i=fa(i);for(let r=0;r<$u.length;r++){const s=$u[r]+i;if(s in t)return Fa[e]=s}return e}const Yu="http://www.w3.org/1999/xlink";function ju(t,e,n,i,r,s=sm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Yu,e.slice(6,e.length)):t.setAttributeNS(Yu,e,n):n==null||s&&!Rd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Gn(n)?String(n):n)}function Ku(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Bh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Rd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Qi(t,e,n,i){t.addEventListener(e,n,i)}function f_(t,e,n,i){t.removeEventListener(e,n,i)}const Zu=Symbol("_vei");function d_(t,e,n,i,r=null){const s=t[Zu]||(t[Zu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=h_(e);if(i){const c=s[e]=g_(i,r);Qi(t,a,c,l)}else o&&(f_(t,a,o,l),s[e]=void 0)}}const Ju=/(?:Once|Passive|Capture)$/;function h_(t){let e;if(Ju.test(t)){e={};let i;for(;i=t.match(Ju);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fi(t.slice(2)),e]}let Oa=0;const p_=Promise.resolve(),m_=()=>Oa||(p_.then(()=>Oa=0),Oa=Date.now());function g_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Rn(__(i,n.value),e,5,[i])};return n.value=t,n.attached=m_(),n}function __(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Qu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,v_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?o_(t,i,o):e==="style"?c_(t,n,i):la(e)?Ic(e)||d_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):x_(t,e,i,o))?(Ku(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ju(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(i))?Ku(t,vn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ju(t,e,i,o))};function x_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&Qu(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Qu(e)&&St(n)?!1:e in t}const na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ze(e)?n=>Do(e,n):e};function y_(t){t.target.composing=!0}function ef(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Br=Symbol("_assign");function tf(t,e,n){return e&&(t=t.trim()),n&&(t=Lc(t)),t}const S_={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Br]=na(r);const s=i||r.props&&r.props.type==="number";Qi(t,e?"change":"input",o=>{o.target.composing||t[Br](tf(t.value,n,s))}),(n||s)&&Qi(t,"change",()=>{t.value=tf(t.value,n,s)}),e||(Qi(t,"compositionstart",y_),Qi(t,"compositionend",ef),Qi(t,"change",ef))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Br]=na(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Lc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},b_={created(t,{value:e},n){t.checked=Wo(e,n.props.value),t[Br]=na(n),Qi(t,"change",()=>{t[Br](M_(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Br]=na(i),e!==n&&(t.checked=Wo(e,i.props.value))}};function M_(t){return"_value"in t?t._value:t.value}const E_=["ctrl","shift","alt","meta"],T_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>E_.some(n=>t[`${n}Key`]&&!e.includes(n))},A_=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=T_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},w_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=Fi(r.key);if(e.some(o=>o===s||w_[o]===s))return t(r)}))},C_=Nt({patchProp:v_},Jg);let nf;function P_(){return nf||(nf=Ig(C_))}const I_=((...t)=>{const e=P_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=L_(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,D_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function D_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function L_(t){return St(t)?document.querySelector(t):t}let Hh;const xa=t=>Hh=t,Vh=Symbol();function Ul(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ts;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ts||(Ts={}));function U_(){const t=Dd(!0),e=t.run(()=>yt({}));let n=[],i=[];const r=kc({install(s){xa(r),r._a=s,s.provide(Vh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Gh=()=>{};function rf(t,e,n,i=Gh){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Ld()&&am(r),r}function dr(t,...e){t.slice().forEach(n=>{n(...e)})}const N_=t=>t(),sf=Symbol(),Ba=Symbol();function Nl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Ul(r)&&Ul(i)&&t.hasOwnProperty(n)&&!Et(i)&&!si(i)?t[n]=Nl(r,i):t[n]=i}return t}const F_=Symbol();function O_(t){return!Ul(t)||!t.hasOwnProperty(F_)}const{assign:bi}=Object;function B_(t){return!!(Et(t)&&t.effect)}function z_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Pm(n.state.value[t]);return bi(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=kc(We(()=>{xa(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=Wh(t,c,e,n,i,!0),l}function Wh(t,e,n={},i,r,s){let o;const a=bi({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),yt({});let v;function m(D){let y;c=u=!1,typeof D=="function"?(D(i.state.value[t]),y={type:Ts.patchFunction,storeId:t,events:h}):(Nl(i.state.value[t],D),y={type:Ts.patchObject,payload:D,storeId:t,events:h});const M=v=Symbol();Hc().then(()=>{v===M&&(c=!0)}),u=!0,dr(f,y,i.state.value[t])}const p=s?function(){const{state:y}=n,M=y?y():{};this.$patch(R=>{bi(R,M)})}:Gh;function w(){o.stop(),f=[],d=[],i._s.delete(t)}const b=(D,y="")=>{if(sf in D)return D[Ba]=y,D;const M=function(){xa(i);const R=Array.from(arguments),B=[],V=[];function H(z){B.push(z)}function j(z){V.push(z)}dr(d,{args:R,name:M[Ba],store:C,after:H,onError:j});let q;try{q=D.apply(this&&this.$id===t?this:C,R)}catch(z){throw dr(V,z),z}return q instanceof Promise?q.then(z=>(dr(B,z),z)).catch(z=>(dr(V,z),Promise.reject(z))):(dr(B,q),q)};return M[sf]=!0,M[Ba]=y,M},S={_p:i,$id:t,$onAction:rf.bind(null,d),$patch:m,$reset:p,$subscribe(D,y={}){const M=rf(f,D,y.detached,()=>R()),R=o.run(()=>Or(()=>i.state.value[t],B=>{(y.flush==="sync"?u:c)&&D({storeId:t,type:Ts.direct,events:h},B)},bi({},l,y)));return M},$dispose:w},C=Hs(S);i._s.set(t,C);const I=(i._a&&i._a.runWithContext||N_)(()=>i._e.run(()=>(o=Dd()).run(()=>e({action:b}))));for(const D in I){const y=I[D];if(Et(y)&&!B_(y)||si(y))s||(g&&O_(y)&&(Et(y)?y.value=g[D]:Nl(y,g[D])),i.state.value[t][D]=y);else if(typeof y=="function"){const M=b(y,D);I[D]=M,a.actions[D]=y}}return bi(C,I),bi(it(C),I),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:D=>{m(y=>{bi(y,D)})}}),i._p.forEach(D=>{bi(C,o.run(()=>D({store:C,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(C.$state,g),c=!0,u=!0,C}function Xh(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=km();return a=a||(c?_n(Vh,null):null),a&&xa(a),a=Hh,a._s.has(i)||(s?Wh(i,e,r,a):z_(i,r,a)),a._s.get(i)}return o.$id=i,o}const qh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},k_={};function H_(t,e){const n=lg("RouterView");return Ve(),Fn(n)}const V_=qh(k_,[["render",H_]]);const Dr=typeof document<"u";function $h(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function G_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&$h(t.default)}const at=Object.assign;function za(t,e){const n={};for(const i in e){const r=e[i];n[i]=Cn(r)?r.map(t):t(r)}return n}const As=()=>{},Cn=Array.isArray;function of(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Yh=/#/g,W_=/&/g,X_=/\//g,q_=/=/g,$_=/\?/g,jh=/\+/g,Y_=/%5B/g,j_=/%5D/g,Kh=/%5E/g,K_=/%60/g,Zh=/%7B/g,Z_=/%7C/g,Jh=/%7D/g,J_=/%20/g;function Zc(t){return t==null?"":encodeURI(""+t).replace(Z_,"|").replace(Y_,"[").replace(j_,"]")}function Q_(t){return Zc(t).replace(Zh,"{").replace(Jh,"}").replace(Kh,"^")}function Fl(t){return Zc(t).replace(jh,"%2B").replace(J_,"+").replace(Yh,"%23").replace(W_,"%26").replace(K_,"`").replace(Zh,"{").replace(Jh,"}").replace(Kh,"^")}function e0(t){return Fl(t).replace(q_,"%3D")}function t0(t){return Zc(t).replace(Yh,"%23").replace($_,"%3F")}function n0(t){return t0(t).replace(X_,"%2F")}function Us(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const i0=/\/$/,r0=t=>t.replace(i0,"");function ka(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=l0(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Us(o)}}function s0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function af(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function o0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Xr(e.matched[i],n.matched[r])&&Qh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Qh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!a0(t[n],e[n]))return!1;return!0}function a0(t,e){return Cn(t)?lf(t,e):Cn(e)?lf(e,t):t?.valueOf()===e?.valueOf()}function lf(t,e){return Cn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function l0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ol=(function(t){return t.pop="pop",t.push="push",t})({}),Ha=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function c0(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),r0(t)}const u0=/^[^#]+#/;function f0(t,e){return t.replace(u0,"#")+e}function d0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ya=()=>({left:window.scrollX,top:window.scrollY});function h0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=d0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cf(t,e){return(history.state?history.state.position-e:-1)+t}const Bl=new Map;function p0(t,e){Bl.set(t,e)}function m0(t){const e=Bl.get(t);return Bl.delete(t),e}function g0(t){return typeof t=="string"||t&&typeof t=="object"}function ep(t){return typeof t=="string"||typeof t=="symbol"}let Mt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const tp=Symbol("");Mt.MATCHER_NOT_FOUND+"",Mt.NAVIGATION_GUARD_REDIRECT+"",Mt.NAVIGATION_ABORTED+"",Mt.NAVIGATION_CANCELLED+"",Mt.NAVIGATION_DUPLICATED+"";function qr(t,e){return at(new Error,{type:t,[tp]:!0},e)}function $n(t,e){return t instanceof Error&&tp in t&&(e==null||!!(t.type&e))}const _0=["params","query","hash"];function v0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of _0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function x0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(jh," "),s=r.indexOf("="),o=Us(s<0?r:r.slice(0,s)),a=s<0?null:Us(r.slice(s+1));if(o in e){let l=e[o];Cn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function uf(t){let e="";for(let n in t){const i=t[n];if(n=e0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Cn(i)?i.map(r=>r&&Fl(r)):[i&&Fl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function y0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Cn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const S0=Symbol(""),ff=Symbol(""),Sa=Symbol(""),Jc=Symbol(""),zl=Symbol("");function os(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ai(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(qr(Mt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):g0(d)?l(qr(Mt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Va(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if($h(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ai(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=G_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ai(d,n,i,o,a,r)()}))}}return s}function b0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xr(c,l))||r.push(l))}return[n,i,r]}let M0=()=>location.protocol+"//"+location.host;function np(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),af(a,"")}return af(n,t)+i+r}function E0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=np(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ol.pop,direction:m?m>0?Ha.forward:Ha.back:Ha.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(at({},d.state,{scroll:ya()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function df(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ya():null}}function T0(t){const{history:e,location:n}=window,i={value:np(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:M0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){s(l,at({},e.state,df(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=at({},r.value,e.state,{forward:l,scroll:ya()});s(u.current,u,!0),s(l,at({},df(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function A0(t){t=c0(t);const e=T0(t),n=E0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=at({location:"",base:t,go:i,createHref:f0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let nr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ct=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ct||{});const w0={type:nr.Static,value:""},R0=/[a-zA-Z0-9_]/;function C0(t){if(!t)return[[]];if(t==="/")return[[w0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Ct.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===Ct.Static?s.push({type:nr.Static,value:c}):n===Ct.Param||n===Ct.ParamRegExp||n===Ct.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:nr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Ct.ParamRegExp){i=n,n=Ct.EscapeNext;continue}switch(n){case Ct.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Ct.Param):d();break;case Ct.EscapeNext:d(),n=i;break;case Ct.Param:l==="("?n=Ct.ParamRegExp:R0.test(l)?d():(f(),n=Ct.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ct.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ct.ParamRegExpEnd:u+=l;break;case Ct.ParamRegExpEnd:f(),n=Ct.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Ct.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const hf="[^/]+?",P0={sensitive:!1,strict:!1,start:!0,end:!0};var Yt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Yt||{});const I0=/[.+*?^${}()[\]/\\]/g;function D0(t,e){const n=at({},P0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Yt.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Yt.Segment+(n.sensitive?Yt.BonusCaseSensitive:0);if(d.type===nr.Static)f||(r+="/"),r+=d.value.replace(I0,"\\$&"),h+=Yt.Static;else if(d.type===nr.Param){const{value:g,repeatable:v,optional:m,regexp:p}=d;s.push({name:g,repeatable:v,optional:m});const w=p||hf;if(w!==hf){h+=Yt.BonusCustomRegExp;try{`${w}`}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+S.message)}}let b=v?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;f||(b=m&&c.length<2?`(?:/${b})`:"/"+b),m&&(b+="?"),r+=b,h+=Yt.Dynamic,m&&(h+=Yt.BonusOptional),v&&(h+=Yt.BonusRepeatable),w===".*"&&(h+=Yt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Yt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===nr.Static)u+=h.value;else if(h.type===nr.Param){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Cn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Cn(p)?p.join("/"):p;if(!w)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function L0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Yt.Static+Yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Yt.Static+Yt.Segment?1:-1:0}function ip(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=L0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(pf(i))return 1;if(pf(r))return-1}return r.length-i.length}function pf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const U0={strict:!1,end:!0,sensitive:!1};function N0(t,e,n){const i=D0(C0(t.path),n),r=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function F0(t,e){const n=[],i=new Map;e=of(U0,e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,v=gf(f);v.aliasOf=h&&h.record;const m=of(e,f),p=[v];if("alias"in f){const S=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of S)p.push(gf(at({},v,{components:h?h.record.components:v.components,path:C,aliasOf:h?h.record:v})))}let w,b;for(const S of p){const{path:C}=S;if(d&&C[0]!=="/"){const P=d.record.path,I=P[P.length-1]==="/"?"":"/";S.path=d.record.path+(C&&I+C)}if(w=N0(S,d,m),h?h.alias.push(w):(b=b||w,b!==w&&b.alias.push(w),g&&f.name&&!_f(w)&&o(f.name)),rp(w)&&l(w),v.children){const P=v.children;for(let I=0;I<P.length;I++)s(P[I],w,h&&h.children[I])}h=h||w}return b?()=>{o(b)}:As}function o(f){if(ep(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=z0(f,n);n.splice(d,0,f),f.record.name&&!_f(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},v,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw qr(Mt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=at(mf(d.params,h.keys.filter(b=>!b.optional).concat(h.parent?h.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),f.params&&mf(f.params,h.keys.map(b=>b.name))),v=h.stringify(g)}else if(f.path!=null)v=f.path,h=n.find(b=>b.re.test(v)),h&&(g=h.parse(v),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(b=>b.re.test(d.path)),!h)throw qr(Mt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=at({},d.params,f.params),v=h.stringify(g)}const p=[];let w=h;for(;w;)p.unshift(w.record),w=w.parent;return{name:m,path:v,params:g,matched:p,meta:B0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function mf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function gf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:O0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function O0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function _f(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function B0(t){return t.reduce((e,n)=>at(e,n.meta),{})}function z0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;ip(t,e[s])<0?i=s:n=s+1}const r=k0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function k0(t){let e=t;for(;e=e.parent;)if(rp(e)&&ip(t,e)===0)return e}function rp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function vf(t){const e=_n(Sa),n=_n(Jc),i=We(()=>{const l=on(t.to);return e.resolve(l)}),r=We(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Xr.bind(null,u));if(d>-1)return d;const h=xf(l[c-2]);return c>1&&xf(u)===h&&f[f.length-1].path!==h?f.findIndex(Xr.bind(null,l[c-2])):d}),s=We(()=>r.value>-1&&X0(n.params,i.value.params)),o=We(()=>r.value>-1&&r.value===n.matched.length-1&&Qh(n.params,i.value.params));function a(l={}){if(W0(l)){const c=e[on(t.replace)?"replace":"push"](on(t.to)).catch(As);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:We(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function H0(t){return t.length===1?t[0]:t}const V0=xn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:vf,setup(t,{slots:e}){const n=Hs(vf(t)),{options:i}=_n(Sa),r=We(()=>({[yf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[yf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&H0(e.default(n));return t.custom?s:Kc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),G0=V0;function W0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function X0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Cn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function xf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const yf=(t,e,n)=>t??e??n,q0=xn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=_n(zl),r=We(()=>t.route||i.value),s=_n(ff,0),o=We(()=>{let c=on(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=We(()=>r.value.matched[o.value]);Lo(ff,We(()=>o.value+1)),Lo(S0,a),Lo(zl,r);const l=yt();return Or(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Xr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Sf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Kc(d,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Sf(n.default,{Component:m,route:c})||m}}});function Sf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const $0=q0;function Y0(t){const e=F0(t.routes,t),n=t.parseQuery||x0,i=t.stringifyQuery||uf,r=t.history,s=os(),o=os(),a=os(),l=wm(mi);let c=mi;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=za.bind(null,N=>""+N),f=za.bind(null,n0),d=za.bind(null,Us);function h(N,se){let re,fe;return ep(N)?(re=e.getRecordMatcher(N),fe=se):fe=N,e.addRoute(fe,re)}function g(N){const se=e.getRecordMatcher(N);se&&e.removeRoute(se)}function v(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,se){if(se=at({},se||l.value),typeof N=="string"){const F=ka(n,N,se.path),X=e.resolve({path:F.path},se),te=r.createHref(F.fullPath);return at(F,X,{params:d(X.params),hash:Us(F.hash),redirectedFrom:void 0,href:te})}let re;if(N.path!=null)re=at({},N,{path:ka(n,N.path,se.path).path});else{const F=at({},N.params);for(const X in F)F[X]==null&&delete F[X];re=at({},N,{params:f(F)}),se.params=f(se.params)}const fe=e.resolve(re,se),De=N.hash||"";fe.params=u(d(fe.params));const E=s0(i,at({},N,{hash:Q_(De),path:fe.path})),_=r.createHref(E);return at({fullPath:E,hash:De,query:i===uf?y0(N.query):N.query||{}},fe,{redirectedFrom:void 0,href:_})}function w(N){return typeof N=="string"?ka(n,N,l.value.path):at({},N)}function b(N,se){if(c!==N)return qr(Mt.NAVIGATION_CANCELLED,{from:se,to:N})}function S(N){return I(N)}function C(N){return S(at(w(N),{replace:!0}))}function P(N,se){const re=N.matched[N.matched.length-1];if(re&&re.redirect){const{redirect:fe}=re;let De=typeof fe=="function"?fe(N,se):fe;return typeof De=="string"&&(De=De.includes("?")||De.includes("#")?De=w(De):{path:De},De.params={}),at({query:N.query,hash:N.hash,params:De.path!=null?{}:N.params},De)}}function I(N,se){const re=c=p(N),fe=l.value,De=N.state,E=N.force,_=N.replace===!0,F=P(re,fe);if(F)return I(at(w(F),{state:typeof F=="object"?at({},De,F.state):De,force:E,replace:_}),se||re);const X=re;X.redirectedFrom=se;let te;return!E&&o0(i,fe,re)&&(te=qr(Mt.NAVIGATION_DUPLICATED,{to:X,from:fe}),ve(fe,fe,!0,!1)),(te?Promise.resolve(te):M(X,fe)).catch(W=>$n(W)?$n(W,Mt.NAVIGATION_GUARD_REDIRECT)?W:ue(W):L(W,X,fe)).then(W=>{if(W){if($n(W,Mt.NAVIGATION_GUARD_REDIRECT))return I(at({replace:_},w(W.to),{state:typeof W.to=="object"?at({},De,W.to.state):De,force:E}),se||X)}else W=B(X,fe,!0,_,De);return R(X,fe,W),W})}function D(N,se){const re=b(N,se);return re?Promise.reject(re):Promise.resolve()}function y(N){const se=ke.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(N):N()}function M(N,se){let re;const[fe,De,E]=b0(N,se);re=Va(fe.reverse(),"beforeRouteLeave",N,se);for(const F of fe)F.leaveGuards.forEach(X=>{re.push(Ai(X,N,se))});const _=D.bind(null,N,se);return re.push(_),me(re).then(()=>{re=[];for(const F of s.list())re.push(Ai(F,N,se));return re.push(_),me(re)}).then(()=>{re=Va(De,"beforeRouteUpdate",N,se);for(const F of De)F.updateGuards.forEach(X=>{re.push(Ai(X,N,se))});return re.push(_),me(re)}).then(()=>{re=[];for(const F of E)if(F.beforeEnter)if(Cn(F.beforeEnter))for(const X of F.beforeEnter)re.push(Ai(X,N,se));else re.push(Ai(F.beforeEnter,N,se));return re.push(_),me(re)}).then(()=>(N.matched.forEach(F=>F.enterCallbacks={}),re=Va(E,"beforeRouteEnter",N,se,y),re.push(_),me(re))).then(()=>{re=[];for(const F of o.list())re.push(Ai(F,N,se));return re.push(_),me(re)}).catch(F=>$n(F,Mt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function R(N,se,re){a.list().forEach(fe=>y(()=>fe(N,se,re)))}function B(N,se,re,fe,De){const E=b(N,se);if(E)return E;const _=se===mi,F=Dr?history.state:{};re&&(fe||_?r.replace(N.fullPath,at({scroll:_&&F&&F.scroll},De)):r.push(N.fullPath,De)),l.value=N,ve(N,se,re,_),ue()}let V;function H(){V||(V=r.listen((N,se,re)=>{if(!ne.listening)return;const fe=p(N),De=P(fe,ne.currentRoute.value);if(De){I(at(De,{replace:!0,force:!0}),fe).catch(As);return}c=fe;const E=l.value;Dr&&p0(cf(E.fullPath,re.delta),ya()),M(fe,E).catch(_=>$n(_,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_CANCELLED)?_:$n(_,Mt.NAVIGATION_GUARD_REDIRECT)?(I(at(w(_.to),{force:!0}),fe).then(F=>{$n(F,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===Ol.pop&&r.go(-1,!1)}).catch(As),Promise.reject()):(re.delta&&r.go(-re.delta,!1),L(_,fe,E))).then(_=>{_=_||B(fe,E,!1),_&&(re.delta&&!$n(_,Mt.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===Ol.pop&&$n(_,Mt.NAVIGATION_ABORTED|Mt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),R(fe,E,_)}).catch(As)}))}let j=os(),q=os(),z;function L(N,se,re){ue(N);const fe=q.list();return fe.length?fe.forEach(De=>De(N,se,re)):console.error(N),Promise.reject(N)}function ie(){return z&&l.value!==mi?Promise.resolve():new Promise((N,se)=>{j.add([N,se])})}function ue(N){return z||(z=!N,H(),j.list().forEach(([se,re])=>N?re(N):se()),j.reset()),N}function ve(N,se,re,fe){const{scrollBehavior:De}=t;if(!Dr||!De)return Promise.resolve();const E=!re&&m0(cf(N.fullPath,0))||(fe||!re)&&history.state&&history.state.scroll||null;return Hc().then(()=>De(N,se,E)).then(_=>_&&h0(_)).catch(_=>L(_,N,se))}const be=N=>r.go(N);let je;const ke=new Set,ne={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:v,resolve:p,options:t,push:S,replace:C,go:be,back:()=>be(-1),forward:()=>be(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:ie,install(N){N.component("RouterLink",G0),N.component("RouterView",$0),N.config.globalProperties.$router=ne,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>on(l)}),Dr&&!je&&l.value===mi&&(je=!0,S(r.location).catch(fe=>{}));const se={};for(const fe in mi)Object.defineProperty(se,fe,{get:()=>l.value[fe],enumerable:!0});N.provide(Sa,ne),N.provide(Jc,Yd(se)),N.provide(zl,l);const re=N.unmount;ke.add(N),N.unmount=function(){ke.delete(N),ke.size<1&&(c=mi,V&&V(),V=null,l.value=mi,je=!1,z=!1),re()}}};function me(N){return N.reduce((se,re)=>se.then(()=>y(re)),Promise.resolve())}return ne}function Qc(){return _n(Sa)}function j0(t){return _n(Jc)}const Ga="livefit.player";function K0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const sp=Xh("player",{state:()=>({name:""}),actions:{loadFromStorage(){const t=K0(localStorage.getItem(Ga));t?.name&&(this.name=t.name)},setName(t){this.name=t.trim(),localStorage.setItem(Ga,JSON.stringify({name:this.name}))},clear(){this.name="",localStorage.removeItem(Ga)}}}),bf="livefit.progress";function Z0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const op=Xh("progress",{state:()=>({currentChapter:1,chapterNodeIndices:{1:0}}),getters:{getNodeIndex:t=>e=>t.chapterNodeIndices[e]??0,chapter1NodeIndex:t=>t.chapterNodeIndices[1]??0},actions:{loadFromStorage(){const t=Z0(localStorage.getItem(bf));t&&(typeof t.currentChapter=="number"&&(this.currentChapter=t.currentChapter),t.chapterNodeIndices&&(this.chapterNodeIndices=t.chapterNodeIndices),"chapter1NodeIndex"in t&&typeof t.chapter1NodeIndex=="number"&&(this.chapterNodeIndices[1]=t.chapter1NodeIndex))},setNodeIndex(t,e){this.chapterNodeIndices[t]=e,this._save()},setChapter1NodeIndex(t){this.setNodeIndex(1,t)},setCurrentChapter(t){this.currentChapter=t,t in this.chapterNodeIndices||(this.chapterNodeIndices[t]=0),this._save()},completeChapter(t){const e=t+1;this.currentChapter=e,e in this.chapterNodeIndices||(this.chapterNodeIndices[e]=0),this._save()},reset(){this.currentChapter=1,this.chapterNodeIndices={1:0},this._save()},_save(){localStorage.setItem(bf,JSON.stringify({currentChapter:this.currentChapter,chapterNodeIndices:this.chapterNodeIndices}))}}}),J0=[{type:"dialogue",speaker:"海克絲",text:"早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我、我已經準備好要寫 Code 了！請問我現在該做什麼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"對了，我該怎麼稱呼你呢？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」
會員：「我想購買堂數方案，以便於取得點數來報名喜歡的課程。」
教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」
管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。",scene:"normal",coachExpression:"normal",image:"/images/content/swimlane.png"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"(眼神變得銳利) 看完之後，就來接受我的考試吧。",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的入職測驗",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"q2",prompt:"海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？",options:[{id:"a",label:"它是用來檢查程式碼錯誤的除錯工具"},{id:"b",label:"它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪"},{id:"c",label:"它是最後的裝潢，決定系統好不好看"}],correctOptionId:"b",explanation:"海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。"},{id:"q3",prompt:"為什麼海克絲建議在寫程式之前要先畫「線稿圖」？",options:[{id:"a",label:"為了讓介面看起來很漂亮，吸引投資人"},{id:"b",label:"為了測試程式碼的效能是否足夠"},{id:"c",label:"為了在開發前與團隊有共識，確保大家想的畫面是一樣的"}],correctOptionId:"c",explanation:"線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。"},{id:"q4",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"},{id:"q5",prompt:"海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？",options:[{id:"a",label:"會提早完成工作，可以準時下班"},{id:"b",label:"會寫出很多 Bug，甚至做白工"},{id:"c",label:"電腦會因為運算過度而過熱"}],correctOptionId:"b",explanation:"海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。"},{id:"q6",prompt:"線稿圖通常不包含下列哪項元素？",options:[{id:"a",label:"頁面佈局與按鈕位置"},{id:"b",label:"完整的視覺設計與高解析度圖片"},{id:"c",label:"基本的操作流程與連結"}],correctOptionId:"b",explanation:"線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。"},{id:"q7",prompt:"在閱讀泳道圖時，每一條「跑道」通常代表什麼？",options:[{id:"a",label:"不同的時間點"},{id:"b",label:"不同的參與角色或系統"},{id:"c",label:"不同的資料庫欄位"}],correctOptionId:"b",explanation:"泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。"},{id:"q8",prompt:"根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？",options:[{id:"a",label:"在註冊頁面直接勾選「我是教練」即可"},{id:"b",label:"必須付費購買「教練資格方案」"},{id:"c",label:"需要由「管理員 (Admin)」在後台將其升級為教練"}],correctOptionId:"c",explanation:"根據使用者故事，管理員負責「把一般使用者升級為教練」。"},{id:"q9",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"q10",prompt:"關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？",options:[{id:"a",label:"教練可以隨意刪除學員的帳號"},{id:"b",label:"教練可以查看月營收統計，了解指定月份的營收與學員參與概況"},{id:"c",label:"教練不能修改自己開設課程的時間或人數上限"}],correctOptionId:"b",explanation:"根據教練的使用者故事，教練可以查看月營收統計。"},{id:"q11",prompt:"根據使用者故事，未登入的「訪客」無法執行下列哪項動作？",options:[{id:"a",label:"瀏覽目前可參加的課程"},{id:"b",label:"查看教練的詳細介紹與專長"},{id:"c",label:"報名課程"}],correctOptionId:"c",explanation:"訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。"},{id:"q12",prompt:"「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？",options:[{id:"a",label:"幫會員修改密碼與個人頭像"},{id:"b",label:"管理技能清單與堂數方案的設定"},{id:"c",label:"代替教練進行直播授課"}],correctOptionId:"b",explanation:"管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。"},{id:"q13",prompt:"會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？",options:[{id:"a",label:"只能修改姓名"},{id:"b",label:"可以修改姓名與 Email"},{id:"c",label:"可以修改姓名、Email 與已購買的堂數"}],correctOptionId:"a",explanation:"根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。"},{id:"q14",prompt:"如果教練想要讓學員更容易找到自己，他可以使用什麼功能？",options:[{id:"a",label:"購買首頁廣告"},{id:"b",label:"設定自己的專長技能"},{id:"c",label:"寄送垃圾郵件給所有會員"}],correctOptionId:"b",explanation:"教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。"},{id:"q15",prompt:"當會員想要調整行程時，關於「取消課程」的敘述何者正確？",options:[{id:"a",label:"只要取消就能退回現金"},{id:"b",label:"取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）"},{id:"c",label:"報名後絕對無法取消"}],correctOptionId:"b",explanation:"取消課程後會釋出名額，堂數會依照規則退還或調整。"},{id:"q16",prompt:"教練在「編輯課程」時，可以調整哪些資訊？",options:[{id:"a",label:"只能調整課程名稱"},{id:"b",label:"課程內容、時間、人數上限、會議連結"},{id:"c",label:"學員的個人資料"}],correctOptionId:"b",explanation:"教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。"},{id:"q17",prompt:"LiveFit 平台的核心營運模式是什麼？",options:[{id:"a",label:"線下健身房的門禁管理系統"},{id:"b",label:"線上直播小班制健身平台"},{id:"c",label:"預錄影片的隨選視訊服務"}],correctOptionId:"b",explanation:"LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。"},{id:"q18",prompt:"根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？",options:[{id:"a",label:"查看教練詳情"},{id:"b",label:"查看我的堂數購買紀錄"},{id:"c",label:"修改個人資料"}],correctOptionId:"b",explanation:"會員可以透過「查看我的堂數購買紀錄」來了解過去的購買資訊。"},{id:"q19",prompt:"當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？",options:[{id:"a",label:"我的課程列表"},{id:"b",label:"月營收統計"},{id:"c",label:"技能清單"}],correctOptionId:"a",explanation:"教練透過「我的課程列表」可以查看課程狀態與報名人數。"},{id:"q20",prompt:"若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？",options:[{id:"a",label:"資深教練"},{id:"b",label:"系統管理員 (Admin)"},{id:"c",label:"任何註冊會員"}],correctOptionId:"b",explanation:"管理員負責管理堂數方案，包括新增、修改方案設定。"}]},{type:"dialogue",speaker:"海克絲",text:"很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天就先到這裡吧。回家好好休息，別熬夜。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第一天：報到日",scene:"normal",coachExpression:"normal"}],Q0={id:1,title:"第一天：報到日",nodes:J0},ev=[{type:"dialogue",speaker:"海克絲",text:"早安！看起來精神不錯嘛，昨天有好好休息吧？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"很好，有這個態度我就放心了。今天我們要正式進入開發環境了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"太好了！我已經準備好要寫程式了！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 別急，在你動手寫任何一行程式之前，你得先學會一件事——如何把程式碼「拿到手」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"拿到手？不就是下載嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發的世界裡，我們用的是 Git 和 GitHub。這是每個工程師的必備技能。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"先來認識 Git 吧。Git 是一個「版本控制系統」，就像是程式碼的時光機。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"版本控制？像是報告_v1、報告_v2、報告_最終版那樣嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！Git 就是幫你自動管理這些版本，而且更聰明、更有條理。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 可以記錄每一次的修改歷史、讓你隨時回到過去的版本、也能讓多人同時協作開發。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"光說不練假把式！來，海姐帶你進互動實驗室，親手體驗一下 Git 的魔力。",scene:"normal",coachExpression:"praise"},{type:"interactiveSlide",slideId:"git-intro",title:"Git 互動實驗室",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 Git 是這樣運作的，我懂了！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 不錯嘛，有了這個基礎，接下來的概念對你來說就是小菜一碟了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那 GitHub 呢？它是一個「程式碼託管平台」，你可以把它想成程式碼的雲端硬碟。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以 Git 是工具，GitHub 是平台？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Git 裝在你的電腦上負責版本控制，GitHub 在網路上負責儲存和分享程式碼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"接下來要介紹一個重要的操作：Clone。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Clone（克隆）就是把 GitHub 上的專案「下載到你的電腦」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"就像把雲端上的檔案抓到本地嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Clone 之後，你的電腦裡就會有一份完整的專案程式碼，可以開始修改和開發。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，現在讓我把 LiveFit 的專案連結給你⋯⋯",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等等，這⋯⋯什麼？！",scene:"normal",coachExpression:"shocked"},{type:"dialogue",speaker:"海克絲",text:"這個專案竟然是 Public 的？！",scene:"normal",coachExpression:"shocked",image:"/images/content/private-git.png"},{type:"dialogue",speaker:"你",text:"Public？那是什麼意思？",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"Public 就是「公開」的意思。全世界任何人都可以看到這個專案的程式碼！",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"後端專案通常會設成 Private（私人），因為裡面可能有資料庫連線、API 金鑰等敏感資訊⋯⋯",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"前任後端⋯⋯竟然把專案完全公開在網路上⋯⋯",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"這樣很危險嗎？",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"非常危險！如果程式碼有漏洞，駭客就能直接研究怎麼攻擊我們的系統。",scene:"normal",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 算了，這就是我們接手的現況。之後記得幫我把敏感資訊處理好。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"現在先專心把專案抓下來吧，其他的之後再處理。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"好，理論講完了。來接受我的小考吧！",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Git 與 GitHub 小考",scene:"normal",coachExpression:"praise",questions:[{id:"g1",prompt:"Git 是什麼類型的工具？",options:[{id:"a",label:"版本控制系統"},{id:"b",label:"程式編輯器"},{id:"c",label:"雲端儲存平台"}],correctOptionId:"a",explanation:"Git 是一個版本控制系統，用來追蹤程式碼的修改歷史。"},{id:"g2",prompt:"GitHub 與 Git 的關係是什麼？",options:[{id:"a",label:"GitHub 是 Git 的付費版本"},{id:"b",label:"Git 是版本控制工具，GitHub 是託管平台"},{id:"c",label:"Git 和 GitHub 是同一個東西的不同名稱"}],correctOptionId:"b",explanation:"Git 是安裝在電腦上的版本控制工具，GitHub 是在網路上的程式碼託管平台。"},{id:"g3",prompt:"Clone 的作用是什麼？",options:[{id:"a",label:"把 GitHub 上的專案下載到本地電腦"},{id:"b",label:"把專案上傳到 GitHub"},{id:"c",label:"建立新的分支"}],correctOptionId:"a",explanation:"Clone 是把 GitHub 上的專案下載到你的本地電腦。"},{id:"g4",prompt:"Git 可以做到以下哪件事？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"記錄每一次的修改歷史，讓你可以回到過去的版本"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Git 可以記錄每一次的修改歷史，讓你隨時回到過去的版本。"},{id:"g5",prompt:"GitHub 上的 Public 專案代表什麼？",options:[{id:"a",label:"只有團隊成員可以看到"},{id:"b",label:"任何人都可以看到這個專案的程式碼"},{id:"c",label:"專案已經被刪除"}],correctOptionId:"b",explanation:"Public（公開）代表任何人都可以在網路上看到這個專案的程式碼。"},{id:"g6",prompt:"為什麼後端專案通常會設成 Private？",options:[{id:"a",label:"因為程式碼很醜不想被看到"},{id:"b",label:"避免程式碼漏洞被駭客研究、找到攻擊方式"},{id:"c",label:"因為 GitHub 強制要求"}],correctOptionId:"b",explanation:"後端專案設成 Private 可以避免程式碼被公開，減少駭客研究漏洞、找到攻擊方式的風險。"},{id:"g7",prompt:"Clone 完成後，專案會出現在哪裡？",options:[{id:"a",label:"你的 GitHub 帳號上"},{id:"b",label:"你的本機電腦上"},{id:"c",label:"雲端伺服器上"}],correctOptionId:"b",explanation:"Clone 會把專案下載到你的本機電腦上，讓你可以開始開發。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！看來你已經掌握 Git 和 GitHub 的基本概念了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 和 GitHub 是工程師的基本功，就像廚師要會用刀一樣。用久了就會變成直覺。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我會好好練習的！那接下來呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天先把專案拿到手，明天我們再來把它跑起來！記得好好休息。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第二天：把程式碼拿到手",scene:"normal",coachExpression:"normal"}],tv={id:2,title:"第二天：把程式碼拿到手",nodes:ev},ia={1:Q0,2:tv};function nv(t){return ia[t]}const eu="179",iv=0,Mf=1,rv=2,ap=1,sv=2,Qn=3,Ui=0,en=1,On=2,Ci=0,zr=1,Ns=2,Ef=3,Tf=4,ov=5,er=100,av=101,lv=102,cv=103,uv=104,fv=200,dv=201,hv=202,pv=203,kl=204,Hl=205,mv=206,gv=207,_v=208,vv=209,xv=210,yv=211,Sv=212,bv=213,Mv=214,Vl=0,Gl=1,Wl=2,$r=3,Xl=4,ql=5,$l=6,Yl=7,lp=0,Ev=1,Tv=2,Pi=0,Av=1,wv=2,Rv=3,Cv=4,Pv=5,Iv=6,Dv=7,cp=300,Yr=301,jr=302,jl=303,Kl=304,ba=306,Zl=1e3,ir=1001,Jl=1002,Tn=1003,Lv=1004,so=1005,Vt=1006,Wa=1007,rr=1008,fi=1009,up=1010,fp=1011,Fs=1012,tu=1013,lr=1014,ri=1015,qs=1016,nu=1017,iu=1018,Os=1020,dp=35902,hp=1021,pp=1022,Mn=1023,Bs=1026,zs=1027,mp=1028,ru=1029,gp=1030,su=1031,ou=1033,Bo=33776,zo=33777,ko=33778,Ho=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,rc=37492,sc=37496,oc=37808,ac=37809,lc=37810,cc=37811,uc=37812,fc=37813,dc=37814,hc=37815,pc=37816,mc=37817,gc=37818,_c=37819,vc=37820,xc=37821,Vo=36492,yc=36494,Sc=36495,_p=36283,bc=36284,Mc=36285,Ec=36286,Uv=3200,Nv=3201,Fv=0,Ov=1,wi="",pn="srgb",Kr="srgb-linear",ra="linear",ut="srgb",hr=7680,Af=519,Bv=512,zv=513,kv=514,vp=515,Hv=516,Vv=517,Gv=518,Wv=519,Tc=35044,wf="300 es",zn=2e3,sa=2001;class Qr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xa=Math.PI/180,Ac=180/Math.PI;function Ii(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function Xv(t,e){return(t%e+e)%e}function qa(t,e,n){return(1-n)*t+n*e}function Bn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $s{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,w=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const C=Math.sqrt(b),P=Math.atan2(C,p*w);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const S=a*w;if(l=l*m+d*S,c=c*m+h*S,u=u*m+g*S,f=f*m+v*S,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new Z,Rf=new $s;class Ke{constructor(e,n,i,r,s,o,a,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],w=r[1],b=r[4],S=r[7],C=r[2],P=r[5],I=r[8];return s[0]=o*v+a*w+l*C,s[3]=o*m+a*b+l*P,s[6]=o*p+a*S+l*I,s[1]=c*v+u*w+f*C,s[4]=c*m+u*b+f*P,s[7]=c*p+u*S+f*I,s[2]=d*v+h*w+g*C,s[5]=d*m+h*b+g*P,s[8]=d*p+h*S+g*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Ya.makeScale(e,n)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ya.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new Ke;function xp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function qv(){const t=oa("canvas");return t.style.display="block",t}const Cf={};function kr(t){t in Cf||(Cf[t]=!0,console.warn(t))}function $v(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Pf=new Ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),If=new Ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yv(){const t={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Kr]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Pf,fromXYZ:If,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:pn},outputColorSpaceConfig:{drawingBufferColorSpace:pn}},[pn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Pf,fromXYZ:If,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:pn}}}),t}const st=Yv();function ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class jv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=oa("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ai(n[i]/255)*255):n[i]=ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kv=0;class au{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ja(r[o].image)):s.push(ja(r[o]))}else s=ja(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ja(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?jv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zv=0;const Ka=new Z;class Ut extends Qr{constructor(e=Ut.DEFAULT_IMAGE,n=Ut.DEFAULT_MAPPING,i=ir,r=ir,s=Vt,o=rr,a=Mn,l=fi,c=Ut.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ii(),this.name="",this.source=new au(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ka).x}get height(){return this.source.getSize(Ka).y}get depth(){return this.source.getSize(Ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zl:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zl:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=cp;Ut.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(c+1)/2,S=(h+1)/2,C=(p+1)/2,P=(u+d)/4,I=(f+v)/4,D=(g+m)/4;return b>S&&b>C?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=P/i,s=I/i):S>C?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=P/r,s=D/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=I/s,r=D/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(d-u)/w,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jv extends Qr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Ut(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new au(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends Jv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class yp extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qv extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ys{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(e.matrixWorld),this.expandByPoint(yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,yn),yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(as),ao.subVectors(this.max,as),mr.subVectors(e.a,as),gr.subVectors(e.b,as),_r.subVectors(e.c,as),gi.subVectors(gr,mr),_i.subVectors(_r,gr),Gi.subVectors(mr,_r);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Gi.z,Gi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Gi.z,0,-Gi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Gi.y,Gi.x,0];return!Za(n,mr,gr,_r,ao)||(n=[1,0,0,0,1,0,0,0,1],!Za(n,mr,gr,_r,ao))?!1:(lo.crossVectors(gi,_i),n=[lo.x,lo.y,lo.z],Za(n,mr,gr,_r,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],yn=new Z,oo=new Ys,mr=new Z,gr=new Z,_r=new Z,gi=new Z,_i=new Z,Gi=new Z,as=new Z,ao=new Z,lo=new Z,Wi=new Z;function Za(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wi.fromArray(t,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=n.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const ex=new Ys,ls=new Z,Ja=new Z;class Ma{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ex.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ls.subVectors(e,this.center);const n=ls.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ls,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ls.copy(e.center).add(Ja)),this.expandByPoint(ls.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new Z,Qa=new Z,co=new Z,vi=new Z,el=new Z,uo=new Z,tl=new Z;class Sp{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Qa.copy(e).add(n).multiplyScalar(.5),co.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(Qa);const s=e.distanceTo(n)*.5,o=-this.direction.dot(co),a=vi.dot(this.direction),l=-vi.dot(co),c=vi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Qa).addScaledVector(co,d),h}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,s){el.subVectors(n,e),uo.subVectors(i,e),tl.crossVectors(el,uo);let o=this.direction.dot(tl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(uo.crossVectors(vi,uo));if(l<0)return null;const c=a*this.direction.dot(el.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(tl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),xi.crossVectors(i,rn),xi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),xi.crossVectors(i,rn)),xi.normalize(),fo.crossVectors(rn,xi),r[0]=xi.x,r[4]=fo.x,r[8]=rn.x,r[1]=xi.y,r[5]=fo.y,r[9]=rn.y,r[2]=xi.z,r[6]=fo.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],b=i[7],S=i[11],C=i[15],P=r[0],I=r[4],D=r[8],y=r[12],M=r[1],R=r[5],B=r[9],V=r[13],H=r[2],j=r[6],q=r[10],z=r[14],L=r[3],ie=r[7],ue=r[11],ve=r[15];return s[0]=o*P+a*M+l*H+c*L,s[4]=o*I+a*R+l*j+c*ie,s[8]=o*D+a*B+l*q+c*ue,s[12]=o*y+a*V+l*z+c*ve,s[1]=u*P+f*M+d*H+h*L,s[5]=u*I+f*R+d*j+h*ie,s[9]=u*D+f*B+d*q+h*ue,s[13]=u*y+f*V+d*z+h*ve,s[2]=g*P+v*M+m*H+p*L,s[6]=g*I+v*R+m*j+p*ie,s[10]=g*D+v*B+m*q+p*ue,s[14]=g*y+v*V+m*z+p*ve,s[3]=w*P+b*M+S*H+C*L,s[7]=w*I+b*R+S*j+C*ie,s[11]=w*D+b*B+S*q+C*ue,s[15]=w*y+b*V+S*z+C*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,b=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,C=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,P=n*w+i*b+r*S+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=w*I,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*I,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*I,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*I,e[4]=b*I,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*I,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*I,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*I,e[8]=S*I,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*I,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*I,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*I,e[12]=C*I,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*I,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*I,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,w=l*c,b=l*u,S=l*f,C=i.x,P=i.y,I=i.z;return r[0]=(1-(v+p))*C,r[1]=(h+S)*C,r[2]=(g-b)*C,r[3]=0,r[4]=(h-S)*P,r[5]=(1-(d+p))*P,r[6]=(m+w)*P,r[7]=0,r[8]=(g+b)*I,r[9]=(m-w)*I,r[10]=(1-(d+v))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Sn.copy(this);const c=1/s,u=1/o,f=1/a;return Sn.elements[0]*=c,Sn.elements[1]*=c,Sn.elements[2]*=c,Sn.elements[4]*=u,Sn.elements[5]*=u,Sn.elements[6]*=u,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,n.setFromRotationMatrix(Sn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===zn)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===sa)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===zn)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===sa)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new Z,Sn=new wt,tx=new Z(0,0,0),nx=new Z(1,1,1),xi=new Z,fo=new Z,rn=new Z,Df=new wt,Lf=new $s;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Df.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Df,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Lf.setFromEuler(this),this.setFromQuaternion(Lf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class bp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ix=0;const Uf=new Z,xr=new $s,Kn=new wt,ho=new Z,cs=new Z,rx=new Z,sx=new $s,Nf=new Z(1,0,0),Ff=new Z(0,1,0),Of=new Z(0,0,1),Bf={type:"added"},ox={type:"removed"},yr={type:"childadded",child:null},nl={type:"childremoved",child:null};class Jt extends Qr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jt.DEFAULT_UP.clone();const e=new Z,n=new di,i=new $s,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Ke}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Nf,e)}rotateY(e){return this.rotateOnAxis(Ff,e)}rotateZ(e){return this.rotateOnAxis(Of,e)}translateOnAxis(e,n){return Uf.copy(e).applyQuaternion(this.quaternion),this.position.add(Uf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Nf,e)}translateY(e){return this.translateOnAxis(Ff,e)}translateZ(e){return this.translateOnAxis(Of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ho.copy(e):ho.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(cs,ho,this.up):Kn.lookAt(ho,cs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Kn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bf),yr.child=e,this.dispatchEvent(yr),yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ox),nl.child=e,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bf),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,e,rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(cs,sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Jt.DEFAULT_UP=new Z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const bn=new Z,Zn=new Z,il=new Z,Jn=new Z,Sr=new Z,br=new Z,zf=new Z,rl=new Z,sl=new Z,ol=new Z,al=new At,ll=new At,cl=new At;class gn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),bn.subVectors(e,n),r.cross(bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){bn.subVectors(r,n),Zn.subVectors(i,n),il.subVectors(e,n);const o=bn.dot(bn),a=bn.dot(Zn),l=bn.dot(il),c=Zn.dot(Zn),u=Zn.dot(il),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(e,n),ll.fromBufferAttribute(e,i),cl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(al,s.x),o.addScaledVector(ll,s.y),o.addScaledVector(cl,s.z),o}static isFrontFacing(e,n,i,r){return bn.subVectors(i,n),Zn.subVectors(e,n),bn.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),bn.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Sr.subVectors(r,i),br.subVectors(s,i),rl.subVectors(e,i);const l=Sr.dot(rl),c=br.dot(rl);if(l<=0&&c<=0)return n.copy(i);sl.subVectors(e,r);const u=Sr.dot(sl),f=br.dot(sl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);ol.subVectors(e,s);const h=Sr.dot(ol),g=br.dot(ol);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(br,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return zf.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(zf,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(br,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},po={h:0,s:0,l:0};function ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Xe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Xv(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ul(o,s,e+1/3),this.g=ul(o,s,e),this.b=ul(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=pn){const i=Mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return st.workingToColorSpace(Bt.copy(this),e),Math.round(tt(Bt.r*255,0,255))*65536+Math.round(tt(Bt.g*255,0,255))*256+Math.round(tt(Bt.b*255,0,255))}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=pn){st.workingToColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==pn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(po);const i=qa(yi.h,po.h,n),r=qa(yi.s,po.s,n),s=qa(yi.l,po.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Xe;Xe.NAMES=Mp;let ax=0;class es extends Qr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=zr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kl,this.blendDst=Hl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=$r,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==kl&&(i.blendSrc=this.blendSrc),this.blendDst!==Hl&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$r&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class lu extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=lp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new Z,mo=new nt;let lx=0;class Zt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:lx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Tc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)mo.fromBufferAttribute(this,n),mo.applyMatrix3(e),this.setXY(n,mo.x,mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Bn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Bn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Bn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Bn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tc&&(e.usage=this.usage),e}}class Ep extends Zt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Tp extends Zt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ar extends Zt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cx=0;const hn=new wt,fl=new Jt,Mr=new Z,sn=new Ys,us=new Ys,Lt=new Z;class Pn extends Qr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(xp(e)?Tp:Ep)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return hn.makeRotationFromQuaternion(e),this.applyMatrix4(hn),this}rotateX(e){return hn.makeRotationX(e),this.applyMatrix4(hn),this}rotateY(e){return hn.makeRotationY(e),this.applyMatrix4(hn),this}rotateZ(e){return hn.makeRotationZ(e),this.applyMatrix4(hn),this}translate(e,n,i){return hn.makeTranslation(e,n,i),this.applyMatrix4(hn),this}scale(e,n,i){return hn.makeScale(e,n,i),this.applyMatrix4(hn),this}lookAt(e){return fl.lookAt(e),fl.updateMatrix(),this.applyMatrix4(fl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ar(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ys);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(sn.min,us.min),sn.expandByPoint(Lt),Lt.addVectors(sn.max,us.max),sn.expandByPoint(Lt)):(sn.expandByPoint(us.min),sn.expandByPoint(us.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),Lt.add(Mr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Z,l[D]=new Z;const c=new Z,u=new Z,f=new Z,d=new nt,h=new nt,g=new nt,v=new Z,m=new Z;function p(D,y,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[D].add(v),a[y].add(v),a[M].add(v),l[D].add(m),l[y].add(m),l[M].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let D=0,y=w.length;D<y;++D){const M=w[D],R=M.start,B=M.count;for(let V=R,H=R+B;V<H;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new Z,S=new Z,C=new Z,P=new Z;function I(D){C.fromBufferAttribute(r,D),P.copy(C);const y=a[D];b.copy(y),b.sub(C.multiplyScalar(C.dot(y))).normalize(),S.crossVectors(P,y);const R=S.dot(l[D])<0?-1:1;o.setXYZW(D,b.x,b.y,b.z,R)}for(let D=0,y=w.length;D<y;++D){const M=w[D],R=M.start,B=M.count;for(let V=R,H=R+B;V<H;V+=3)I(e.getX(V+0)),I(e.getX(V+1)),I(e.getX(V+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Zt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Pn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const kf=new wt,Xi=new Sp,go=new Ma,Hf=new Z,_o=new Z,vo=new Z,xo=new Z,dl=new Z,yo=new Z,Vf=new Z,So=new Z;class kn extends Jt{constructor(e=new Pn,n=new lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(dl.fromBufferAttribute(f,e),o?yo.addScaledVector(dl,u):yo.addScaledVector(dl.sub(n),u))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(go.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(go,Hf)===null||Xi.origin.distanceToSquared(Hf)>(e.far-e.near)**2))&&(kf.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(kf),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),b=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=w,C=b;S<C;S+=3){const P=a.getX(S),I=a.getX(S+1),D=a.getX(S+2);r=bo(this,p,e,i,c,u,f,P,I,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=a.getX(m),b=a.getX(m+1),S=a.getX(m+2);r=bo(this,o,e,i,c,u,f,w,b,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,h.start),b=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=w,C=b;S<C;S+=3){const P=S,I=S+1,D=S+2;r=bo(this,p,e,i,c,u,f,P,I,D),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const w=m,b=m+1,S=m+2;r=bo(this,o,e,i,c,u,f,w,b,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ux(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;So.copy(a),So.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(So);return c<n.near||c>n.far?null:{distance:c,point:So.clone(),object:t}}function bo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,_o),t.getVertexPosition(l,vo),t.getVertexPosition(c,xo);const u=ux(t,e,n,i,_o,vo,xo,Vf);if(u){const f=new Z;gn.getBarycoord(Vf,_o,vo,xo,f),r&&(u.uv=gn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=gn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=gn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Z,materialIndex:0};gn.getNormal(_o,vo,xo,d.normal),u.face=d,u.barycoord=f}return u}class js extends Pn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(f,2));function g(v,m,p,w,b,S,C,P,I,D,y){const M=S/I,R=C/D,B=S/2,V=C/2,H=P/2,j=I+1,q=D+1;let z=0,L=0;const ie=new Z;for(let ue=0;ue<q;ue++){const ve=ue*R-V;for(let be=0;be<j;be++){const je=be*M-B;ie[v]=je*w,ie[m]=ve*b,ie[p]=H,c.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[p]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(be/I),f.push(1-ue/D),z+=1}}for(let ue=0;ue<D;ue++)for(let ve=0;ve<I;ve++){const be=d+ve+j*ue,je=d+ve+j*(ue+1),ke=d+(ve+1)+j*(ue+1),ne=d+(ve+1)+j*ue;l.push(be,je,ne),l.push(je,ke,ne),L+=6}a.addGroup(h,L,y),h+=L,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new js(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=Zr(t[n]);for(const r in i)e[r]=i[r]}return e}function fx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Ap(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const dx={clone:Zr,merge:qt};var hx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,px=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hx,this.fragmentShader=px,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class wp extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new Z,Gf=new nt,Wf=new nt;class mn extends wp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ac*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ac*2*Math.atan(Math.tan(Xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,Gf,Wf),n.subVectors(Wf,Gf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Xa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class mx extends Jt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new mn(Er,Tr,e,n);r.layers=this.layers,this.add(r);const s=new mn(Er,Tr,e,n);s.layers=this.layers,this.add(s);const o=new mn(Er,Tr,e,n);o.layers=this.layers,this.add(o);const a=new mn(Er,Tr,e,n);a.layers=this.layers,this.add(a);const l=new mn(Er,Tr,e,n);l.layers=this.layers,this.add(l);const c=new mn(Er,Tr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Rp extends Ut{constructor(e=[],n=Yr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gx extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Rp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new js(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Ci});s.uniforms.tEquirect.value=n;const o=new kn(r,s),a=n.minFilter;return n.minFilter===rr&&(n.minFilter=Vt),new mx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ms extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _x={type:"move"};class hl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ms,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ms,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ms,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_x)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ms;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Cp extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vx{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Wt=new Z;class aa{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Bn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Bn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Bn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Bn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Bn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Zt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pp extends es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ar;const fs=new Z,wr=new Z,Rr=new Z,Cr=new nt,ds=new nt,Ip=new wt,Mo=new Z,hs=new Z,Eo=new Z,Xf=new nt,pl=new nt,qf=new nt;class xx extends Jt{constructor(e=new Pp){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Pn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new vx(n,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new aa(i,3,0,!1)),Ar.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Ip.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Rr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;To(Mo.set(-.5,-.5,0),Rr,o,wr,r,s),To(hs.set(.5,-.5,0),Rr,o,wr,r,s),To(Eo.set(.5,.5,0),Rr,o,wr,r,s),Xf.set(0,0),pl.set(1,0),qf.set(1,1);let a=e.ray.intersectTriangle(Mo,hs,Eo,!1,fs);if(a===null&&(To(hs.set(-.5,.5,0),Rr,o,wr,r,s),pl.set(0,1),a=e.ray.intersectTriangle(Mo,Eo,hs,!1,fs),a===null))return;const l=e.ray.origin.distanceTo(fs);l<e.near||l>e.far||n.push({distance:l,point:fs.clone(),uv:gn.getInterpolation(fs,Mo,hs,Eo,Xf,pl,qf,new nt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function To(t,e,n,i,r,s){Cr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ds.x=s*Cr.x-r*Cr.y,ds.y=r*Cr.x+s*Cr.y):ds.copy(Cr),t.copy(e),t.x+=ds.x,t.y+=ds.y,t.applyMatrix4(Ip)}const ml=new Z,yx=new Z,Sx=new Ke;class Ki{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=ml.subVectors(i,n).cross(yx.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(ml),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Sx.getNormalMatrix(e),r=this.coplanarPoint(ml).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Ma,bx=new nt(.5,.5),Ao=new Z;class Dp{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],v=s[9],m=s[10],p=s[11],w=s[12],b=s[13],S=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,p-g,C-w).normalize(),r[1].setComponents(c+o,h+u,p+g,C+w).normalize(),r[2].setComponents(c+a,h+f,p+v,C+b).normalize(),r[3].setComponents(c-a,h-f,p-v,C-b).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,h-d,p-m,C-S).normalize();else if(r[4].setComponents(c-l,h-d,p-m,C-S).normalize(),n===zn)r[5].setComponents(c+l,h+d,p+m,C+S).normalize();else if(n===sa)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const n=bx.distanceTo(e.center);return qi.radius=.7071067811865476+n,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ao.x=r.normal.x>0?e.max.x:e.min.x,Ao.y=r.normal.y>0?e.max.y:e.min.y,Ao.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ao)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wc extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $f=new wt,Rc=new Sp,wo=new Ma,Ro=new Z;class Yf extends Jt{constructor(e=new Pn,n=new wc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),wo.radius+=s,e.ray.intersectsSphere(wo)===!1)return;$f.copy(r).invert(),Rc.copy(e.ray).applyMatrix4($f);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,v=h;g<v;g++){const m=c.getX(g);Ro.fromBufferAttribute(f,m),jf(Ro,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,v=h;g<v;g++)Ro.fromBufferAttribute(f,g),jf(Ro,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function jf(t,e,n,i,r,s,o){const a=Rc.distanceSqToPoint(t);if(a<n){const l=new Z;Rc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vr extends Ut{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Lp extends Ut{constructor(e,n,i=lr,r,s,o,a=Tn,l=Tn,c,u=Bs,f=1){if(u!==Bs&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new au(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Ks extends Pn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const w=p*d-o;for(let b=0;b<c;b++){const S=b*f-s;g.push(S,-w,0),v.push(0,0,1),m.push(b/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<a;w++){const b=w+c*p,S=w+c*(p+1),C=w+1+c*(p+1),P=w+1+c*p;h.push(b,S,P),h.push(S,C,P)}this.setIndex(h),this.setAttribute("position",new ar(g,3)),this.setAttribute("normal",new ar(v,3)),this.setAttribute("uv",new ar(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.widthSegments,e.heightSegments)}}class Mx extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ex extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Up extends wp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Tx extends mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ax{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Kf(t,e,n,i){const r=wx(i);switch(n){case hp:return t*e;case mp:return t*e/r.components*r.byteLength;case ru:return t*e/r.components*r.byteLength;case gp:return t*e*2/r.components*r.byteLength;case su:return t*e*2/r.components*r.byteLength;case pp:return t*e*3/r.components*r.byteLength;case Mn:return t*e*4/r.components*r.byteLength;case ou:return t*e*4/r.components*r.byteLength;case Bo:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ko:case Ho:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(t,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(t,8)*Math.max(e,8)/2;case ic:case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case fc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case pc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case vc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case xc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Vo:case yc:case Sc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case _p:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Mc:case Ec:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function wx(t){switch(t){case fi:case up:return{byteLength:1,components:1};case Fs:case fp:case qs:return{byteLength:2,components:1};case nu:case iu:return{byteLength:2,components:4};case lr:case tu:case ri:return{byteLength:4,components:1};case dp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eu);function Np(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Rx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],v=f[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const v=f[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Cx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Px=`#ifdef USE_ALPHAHASH
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
#endif`,Ix=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ux=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nx=`#ifdef USE_AOMAP
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
#endif`,Fx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ox=`#ifdef USE_BATCHING
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
#endif`,Bx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vx=`#ifdef USE_IRIDESCENCE
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
#endif`,Gx=`#ifdef USE_BUMPMAP
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
#endif`,Wx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$x=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Yx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jx=`#define PI 3.141592653589793
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
} // validated`,Qx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ry=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sy="gl_FragColor = linearToOutputTexel( gl_FragColor );",oy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ay=`#ifdef USE_ENVMAP
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
#endif`,ly=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cy=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gy=`#ifdef USE_GRADIENTMAP
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
}`,_y=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
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
#endif`,Sy=`#ifdef USE_ENVMAP
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,My=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ey=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
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
#endif`,wy=`struct PhysicalMaterial {
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
}`,Ry=`
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
#endif`,Cy=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ly=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Uy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ny=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,By=`#if defined( USE_POINTS_UV )
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
#endif`,zy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ky=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zy=`#ifdef USE_NORMALMAP
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
#endif`,Jy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hS=`float getShadowMask() {
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
}`,pS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mS=`#ifdef USE_SKINNING
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
#endif`,gS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_S=`#ifdef USE_SKINNING
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
#endif`,vS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bS=`#ifdef USE_TRANSMISSION
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
#endif`,MS=`#ifdef USE_TRANSMISSION
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
#endif`,ES=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CS=`uniform sampler2D t2D;
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
}`,PS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
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
}`,NS=`#if DEPTH_PACKING == 3200
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
}`,FS=`#define DISTANCE
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
}`,OS=`#define DISTANCE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kS=`uniform float scale;
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
}`,HS=`uniform vec3 diffuse;
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
}`,VS=`#include <common>
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
}`,GS=`uniform vec3 diffuse;
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
}`,WS=`#define LAMBERT
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
}`,XS=`#define LAMBERT
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
}`,qS=`#define MATCAP
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
}`,$S=`#define MATCAP
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
}`,YS=`#define NORMAL
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
}`,jS=`#define NORMAL
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
}`,KS=`#define PHONG
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
}`,ZS=`#define PHONG
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
}`,JS=`#define STANDARD
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
}`,QS=`#define STANDARD
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
}`,eb=`#define TOON
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
}`,tb=`#define TOON
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
}`,nb=`uniform float size;
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
}`,ib=`uniform vec3 diffuse;
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
}`,rb=`#include <common>
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
}`,sb=`uniform vec3 color;
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
}`,ob=`uniform float rotation;
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
}`,ab=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:Cx,alphahash_pars_fragment:Px,alphamap_fragment:Ix,alphamap_pars_fragment:Dx,alphatest_fragment:Lx,alphatest_pars_fragment:Ux,aomap_fragment:Nx,aomap_pars_fragment:Fx,batching_pars_vertex:Ox,batching_vertex:Bx,begin_vertex:zx,beginnormal_vertex:kx,bsdfs:Hx,iridescence_fragment:Vx,bumpmap_pars_fragment:Gx,clipping_planes_fragment:Wx,clipping_planes_pars_fragment:Xx,clipping_planes_pars_vertex:qx,clipping_planes_vertex:$x,color_fragment:Yx,color_pars_fragment:jx,color_pars_vertex:Kx,color_vertex:Zx,common:Jx,cube_uv_reflection_fragment:Qx,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:ry,colorspace_fragment:sy,colorspace_pars_fragment:oy,envmap_fragment:ay,envmap_common_pars_fragment:ly,envmap_pars_fragment:cy,envmap_pars_vertex:uy,envmap_physical_pars_fragment:Sy,envmap_vertex:fy,fog_vertex:dy,fog_pars_vertex:hy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:gy,lightmap_pars_fragment:_y,lights_lambert_fragment:vy,lights_lambert_pars_fragment:xy,lights_pars_begin:yy,lights_toon_fragment:by,lights_toon_pars_fragment:My,lights_phong_fragment:Ey,lights_phong_pars_fragment:Ty,lights_physical_fragment:Ay,lights_physical_pars_fragment:wy,lights_fragment_begin:Ry,lights_fragment_maps:Cy,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Dy,logdepthbuf_pars_vertex:Ly,logdepthbuf_vertex:Uy,map_fragment:Ny,map_pars_fragment:Fy,map_particle_fragment:Oy,map_particle_pars_fragment:By,metalnessmap_fragment:zy,metalnessmap_pars_fragment:ky,morphinstance_vertex:Hy,morphcolor_vertex:Vy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Xy,normal_fragment_begin:qy,normal_fragment_maps:$y,normal_pars_fragment:Yy,normal_pars_vertex:jy,normal_vertex:Ky,normalmap_pars_fragment:Zy,clearcoat_normal_fragment_begin:Jy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:eS,iridescence_pars_fragment:tS,opaque_fragment:nS,packing:iS,premultiplied_alpha_fragment:rS,project_vertex:sS,dithering_fragment:oS,dithering_pars_fragment:aS,roughnessmap_fragment:lS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:uS,shadowmap_pars_vertex:fS,shadowmap_vertex:dS,shadowmask_pars_fragment:hS,skinbase_vertex:pS,skinning_pars_vertex:mS,skinning_vertex:gS,skinnormal_vertex:_S,specularmap_fragment:vS,specularmap_pars_fragment:xS,tonemapping_fragment:yS,tonemapping_pars_fragment:SS,transmission_fragment:bS,transmission_pars_fragment:MS,uv_pars_fragment:ES,uv_pars_vertex:TS,uv_vertex:AS,worldpos_vertex:wS,background_vert:RS,background_frag:CS,backgroundCube_vert:PS,backgroundCube_frag:IS,cube_vert:DS,cube_frag:LS,depth_vert:US,depth_frag:NS,distanceRGBA_vert:FS,distanceRGBA_frag:OS,equirect_vert:BS,equirect_frag:zS,linedashed_vert:kS,linedashed_frag:HS,meshbasic_vert:VS,meshbasic_frag:GS,meshlambert_vert:WS,meshlambert_frag:XS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:YS,meshnormal_frag:jS,meshphong_vert:KS,meshphong_frag:ZS,meshphysical_vert:JS,meshphysical_frag:QS,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:rb,shadow_frag:sb,sprite_vert:ob,sprite_frag:ab},Me={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},Nn={basic:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:qt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:qt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:qt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:qt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:qt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:qt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:qt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:qt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:qt([Me.common,Me.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:qt([Me.lights,Me.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Nn.physical={uniforms:qt([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Co={r:0,b:0,g:0},$i=new di,lb=new wt;function cb(t,e,n,i,r,s,o){const a=new Xe(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?n:e).get(S)),S}function v(b){let S=!1;const C=g(b);C===null?p(a,l):C&&C.isColor&&(p(C,1),S=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(b,S){const C=g(S);C&&(C.isCubeTexture||C.mapping===ba)?(u===void 0&&(u=new kn(new js(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Zr(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(S.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(lb.makeRotationFromEuler($i)),u.material.toneMapped=st.getTransfer(C.colorSpace)!==ut,(f!==C||d!==C.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,h=t.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new kn(new Ks(2,2),new Ni({name:"BackgroundMaterial",uniforms:Zr(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=st.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,h=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(Co,Ap(t)),i.buffers.color.setClear(Co.r,Co.g,Co.b,S,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,S=1){a.set(b),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(a,l)},render:v,addToRenderList:m,dispose:w}}function ub(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,R,B,V,H){let j=!1;const q=f(V,B,R);s!==q&&(s=q,c(s.object)),j=h(M,V,B,H),j&&g(M,V,B,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,S(M,R,B,V),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,R,B){const V=B.wireframe===!0;let H=i[M.id];H===void 0&&(H={},i[M.id]=H);let j=H[R.id];j===void 0&&(j={},H[R.id]=j);let q=j[V];return q===void 0&&(q=d(l()),j[V]=q),q}function d(M){const R=[],B=[],V=[];for(let H=0;H<n;H++)R[H]=0,B[H]=0,V[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function h(M,R,B,V){const H=s.attributes,j=R.attributes;let q=0;const z=B.getAttributes();for(const L in z)if(z[L].location>=0){const ue=H[L];let ve=j[L];if(ve===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;q++}return s.attributesNum!==q||s.index!==V}function g(M,R,B,V){const H={},j=R.attributes;let q=0;const z=B.getAttributes();for(const L in z)if(z[L].location>=0){let ue=j[L];ue===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),H[L]=ve,q++}s.attributes=H,s.attributesNum=q,s.index=V}function v(){const M=s.newAttributes;for(let R=0,B=M.length;R<B;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const B=s.newAttributes,V=s.enabledAttributes,H=s.attributeDivisors;B[M]=1,V[M]===0&&(t.enableVertexAttribArray(M),V[M]=1),H[M]!==R&&(t.vertexAttribDivisor(M,R),H[M]=R)}function w(){const M=s.newAttributes,R=s.enabledAttributes;for(let B=0,V=R.length;B<V;B++)R[B]!==M[B]&&(t.disableVertexAttribArray(B),R[B]=0)}function b(M,R,B,V,H,j,q){q===!0?t.vertexAttribIPointer(M,R,B,H,j):t.vertexAttribPointer(M,R,B,V,H,j)}function S(M,R,B,V){v();const H=V.attributes,j=B.getAttributes(),q=R.defaultAttributeValues;for(const z in j){const L=j[z];if(L.location>=0){let ie=H[z];if(ie===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const ue=ie.normalized,ve=ie.itemSize,be=e.get(ie);if(be===void 0)continue;const je=be.buffer,ke=be.type,ne=be.bytesPerElement,me=ke===t.INT||ke===t.UNSIGNED_INT||ie.gpuType===tu;if(ie.isInterleavedBufferAttribute){const N=ie.data,se=N.stride,re=ie.offset;if(N.isInstancedInterleavedBuffer){for(let fe=0;fe<L.locationSize;fe++)p(L.location+fe,N.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let fe=0;fe<L.locationSize;fe++)m(L.location+fe);t.bindBuffer(t.ARRAY_BUFFER,je);for(let fe=0;fe<L.locationSize;fe++)b(L.location+fe,ve/L.locationSize,ke,ue,se*ne,(re+ve/L.locationSize*fe)*ne,me)}else{if(ie.isInstancedBufferAttribute){for(let N=0;N<L.locationSize;N++)p(L.location+N,ie.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let N=0;N<L.locationSize;N++)m(L.location+N);t.bindBuffer(t.ARRAY_BUFFER,je);for(let N=0;N<L.locationSize;N++)b(L.location+N,ve/L.locationSize,ke,ue,ve*ne,ve/L.locationSize*N*ne,me)}}else if(q!==void 0){const ue=q[z];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(L.location,ue);break;case 3:t.vertexAttrib3fv(L.location,ue);break;case 4:t.vertexAttrib4fv(L.location,ue);break;default:t.vertexAttrib1fv(L.location,ue)}}}}w()}function C(){D();for(const M in i){const R=i[M];for(const B in R){const V=R[B];for(const H in V)u(V[H].object),delete V[H];delete R[B]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const B in R){const V=R[B];for(const H in V)u(V[H].object),delete V[H];delete R[B]}delete i[M.id]}function I(M){for(const R in i){const B=i[R];if(B[M.id]===void 0)continue;const V=B[M.id];for(const H in V)u(V[H].object),delete V[H];delete B[M.id]}}function D(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function fb(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=u[v]*d[v];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function db(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Mn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const D=I===qs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==fi&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ri&&!D)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:S,vertexTextures:C,maxSamples:P}}function hb(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,b=w*4;let S=p.clippingState||null;l.value=S,S=u(g,d,b,h);for(let C=0;C!==b;++C)S[C]=n[C];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,S=h;b!==v;++b,S+=4)o.copy(f[b]).applyMatrix4(w,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function pb(t){let e=new WeakMap;function n(o,a){return a===jl?o.mapping=Yr:a===Kl&&(o.mapping=jr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===jl||a===Kl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new gx(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,Zf=[.125,.215,.35,.446,.526,.582],tr=20,gl=new Up,Jf=new Xe;let _l=null,vl=0,xl=0,yl=!1;const Zi=(1+Math.sqrt(5))/2,Pr=1/Zi,Qf=[new Z(-Zi,Pr,0),new Z(Zi,Pr,0),new Z(-Pr,0,Zi),new Z(Pr,0,Zi),new Z(0,Zi,-Pr),new Z(0,Zi,Pr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],mb=new Z;class ed{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=mb}=s;_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_l,vl,xl),this._renderer.xr.enabled=yl,e.scissorTest=!1,Po(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Yr||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_l=this._renderer.getRenderTarget(),vl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:qs,format:Mn,colorSpace:Kr,depthBuffer:!1},r=td(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=td(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gb(s)),this._blurMaterial=_b(s,e,n)}return r}_compileMaterial(e){const n=new kn(this._lodPlanes[0],e);this._renderer.compile(n,gl)}_sceneToCubeUV(e,n,i,r,s){const l=new mn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Jf),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const v=new lu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new kn(new js,v);let p=!1;const w=e.background;w?w.isColor&&(v.color.copy(w),e.background=null,p=!0):(v.color.copy(Jf),p=!0);for(let b=0;b<6;b++){const S=b%3;S===0?(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[b],s.y,s.z)):S===1?(l.up.set(0,0,c[b]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[b],s.z)):(l.up.set(0,c[b],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[b]));const C=this._cubeSize;Po(r,S*C,b>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=w}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Yr||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=id()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Po(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,gl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Qf[(r-s-1)%Qf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new kn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*tr-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const p=[];let w=0;for(let I=0;I<tr;++I){const D=I/v,y=Math.exp(-D*D/2);p.push(y),I===0?w+=y:I<m&&(w+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/w;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const S=this._sizeLods[r],C=3*S*(r>b-Lr?r-b+Lr:0),P=4*(this._cubeSize-S);Po(n,C,P,3*S,2*S),l.setRenderTarget(n),l.render(f,gl)}}function gb(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+Zf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lr?l=Zf[o-t+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,w=new Float32Array(v*g*h),b=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let P=0;P<h;P++){const I=P%3*2/3-1,D=P>2?0:-1,y=[I,D,0,I+2/3,D,0,I+2/3,D+1,0,I,D,0,I+2/3,D+1,0,I,D+1,0];w.set(y,v*g*P),b.set(d,m*g*P);const M=[P,P,P,P,P,P];S.set(M,p*g*P)}const C=new Pn;C.setAttribute("position",new Zt(w,v)),C.setAttribute("uv",new Zt(b,m)),C.setAttribute("faceIndex",new Zt(S,p)),e.push(C),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function td(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Po(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function _b(t,e,n){const i=new Float32Array(tr),r=new Z(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function nd(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function id(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function cu(){return`

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
	`}function vb(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===jl||l===Kl,u=l===Yr||l===jr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new ed(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new ed(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function xb(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function yb(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const w=h.array;v=h.version;for(let b=0,S=w.length;b<S;b+=3){const C=w[b+0],P=w[b+1],I=w[b+2];d.push(C,P,P,I,I,C)}}else if(g!==void 0){const w=g.array;v=g.version;for(let b=0,S=w.length/3-1;b<S;b+=3){const C=b+0,P=b+1,I=b+2;d.push(C,P,P,I,I,C)}}else return;const m=new(xp(d)?Tp:Ep)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function Sb(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,v,0,g);let p=0;for(let w=0;w<g;w++)p+=h[w]*v[w];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function bb(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Mb(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let b=0;h===!0&&(b=1),g===!0&&(b=2),v===!0&&(b=3);let S=a.attributes.position.count*b,C=1;S>e.maxTextureSize&&(C=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const P=new Float32Array(S*C*4*f),I=new yp(P,S,C,f);I.type=ri,I.needsUpdate=!0;const D=b*4;for(let M=0;M<f;M++){const R=m[M],B=p[M],V=w[M],H=S*C*4*M;for(let j=0;j<R.count;j++){const q=j*D;h===!0&&(r.fromBufferAttribute(R,j),P[H+q+0]=r.x,P[H+q+1]=r.y,P[H+q+2]=r.z,P[H+q+3]=0),g===!0&&(r.fromBufferAttribute(B,j),P[H+q+4]=r.x,P[H+q+5]=r.y,P[H+q+6]=r.z,P[H+q+7]=0),v===!0&&(r.fromBufferAttribute(V,j),P[H+q+8]=r.x,P[H+q+9]=r.y,P[H+q+10]=r.z,P[H+q+11]=V.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new nt(S,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Eb(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Fp=new Ut,rd=new Lp(1,1),Op=new yp,Bp=new Qv,zp=new Rp,sd=[],od=[],ad=new Float32Array(16),ld=new Float32Array(9),cd=new Float32Array(4);function ts(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sd[r];if(s===void 0&&(s=new Float32Array(r),sd[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ea(t,e){let n=od[e];n===void 0&&(n=new Int32Array(e),od[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Tb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function wb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function Rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function Cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;cd.set(i),t.uniformMatrix2fv(this.addr,!1,cd),Dt(n,i)}}function Pb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;ld.set(i),t.uniformMatrix3fv(this.addr,!1,ld),Dt(n,i)}}function Ib(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;ad.set(i),t.uniformMatrix4fv(this.addr,!1,ad),Dt(n,i)}}function Db(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Lb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function Ub(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function Nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function Fb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function Bb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function zb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function kb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(rd.compareFunction=vp,s=rd):s=Fp,n.setTexture2D(e||s,r)}function Hb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Bp,r)}function Vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zp,r)}function Gb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Op,r)}function Wb(t){switch(t){case 5126:return Tb;case 35664:return Ab;case 35665:return wb;case 35666:return Rb;case 35674:return Cb;case 35675:return Pb;case 35676:return Ib;case 5124:case 35670:return Db;case 35667:case 35671:return Lb;case 35668:case 35672:return Ub;case 35669:case 35673:return Nb;case 5125:return Fb;case 36294:return Ob;case 36295:return Bb;case 36296:return zb;case 35678:case 36198:case 36298:case 36306:case 35682:return kb;case 35679:case 36299:case 36307:return Hb;case 35680:case 36300:case 36308:case 36293:return Vb;case 36289:case 36303:case 36311:case 36292:return Gb}}function Xb(t,e){t.uniform1fv(this.addr,e)}function qb(t,e){const n=ts(e,this.size,2);t.uniform2fv(this.addr,n)}function $b(t,e){const n=ts(e,this.size,3);t.uniform3fv(this.addr,n)}function Yb(t,e){const n=ts(e,this.size,4);t.uniform4fv(this.addr,n)}function jb(t,e){const n=ts(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Kb(t,e){const n=ts(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Zb(t,e){const n=ts(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Jb(t,e){t.uniform1iv(this.addr,e)}function Qb(t,e){t.uniform2iv(this.addr,e)}function eM(t,e){t.uniform3iv(this.addr,e)}function tM(t,e){t.uniform4iv(this.addr,e)}function nM(t,e){t.uniform1uiv(this.addr,e)}function iM(t,e){t.uniform2uiv(this.addr,e)}function rM(t,e){t.uniform3uiv(this.addr,e)}function sM(t,e){t.uniform4uiv(this.addr,e)}function oM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Fp,s[o])}function aM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Bp,s[o])}function lM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||zp,s[o])}function cM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Op,s[o])}function uM(t){switch(t){case 5126:return Xb;case 35664:return qb;case 35665:return $b;case 35666:return Yb;case 35674:return jb;case 35675:return Kb;case 35676:return Zb;case 5124:case 35670:return Jb;case 35667:case 35671:return Qb;case 35668:case 35672:return eM;case 35669:case 35673:return tM;case 5125:return nM;case 36294:return iM;case 36295:return rM;case 36296:return sM;case 35678:case 36198:case 36298:case 36306:case 35682:return oM;case 35679:case 36299:case 36307:return aM;case 35680:case 36300:case 36308:case 36293:return lM;case 36289:case 36303:case 36311:case 36292:return cM}}class fM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Wb(n.type)}}class dM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=uM(n.type)}}class hM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function ud(t,e){t.seq.push(e),t.map[e.id]=e}function pM(t,e,n){const i=t.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),o=Sl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){ud(n,c===void 0?new fM(a,t,e):new dM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new hM(a),ud(n,f)),n=f}}}class Go{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);pM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function fd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mM=37297;let gM=0;function _M(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const dd=new Ke;function vM(t){st._getMatrix(dd,st.workingColorSpace,t);const e=`mat3( ${dd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case ra:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+_M(t.getShaderSource(e),a)}else return s}function xM(t,e){const n=vM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function yM(t,e){let n;switch(e){case Av:n="Linear";break;case wv:n="Reinhard";break;case Rv:n="Cineon";break;case Cv:n="ACESFilmic";break;case Iv:n="AgX";break;case Dv:n="Neutral";break;case Pv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Io=new Z;function SM(){st.getLuminanceCoefficients(Io);const t=Io.x.toFixed(4),e=Io.y.toFixed(4),n=Io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(gs).join(`
`)}function MM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function EM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function gs(t){return t!==""}function pd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function md(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const TM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cc(t){return t.replace(TM,wM)}const AM=new Map;function wM(t,e){let n=Ze[e];if(n===void 0){const i=AM.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cc(n)}const RM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gd(t){return t.replace(RM,CM)}function CM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _d(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function PM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ap?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function IM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Yr:case jr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DM(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===jr&&(e="ENVMAP_MODE_REFRACTION"),e}function LM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case lp:e="ENVMAP_BLENDING_MULTIPLY";break;case Ev:e="ENVMAP_BLENDING_MIX";break;case Tv:e="ENVMAP_BLENDING_ADD";break}return e}function UM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function NM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=PM(n),c=IM(n),u=DM(n),f=LM(n),d=UM(n),h=bM(n),g=MM(s),v=r.createProgram();let m,p,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(gs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(gs).join(`
`),p.length>0&&(p+=`
`)):(m=[_d(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(gs).join(`
`),p=[_d(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Pi?yM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xM("linearToOutputTexel",n.outputColorSpace),SM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(gs).join(`
`)),o=Cc(o),o=pd(o,n),o=md(o,n),a=Cc(a),a=pd(a,n),a=md(a,n),o=gd(o),a=gd(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===wf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=w+m+o,S=w+p+a,C=fd(r,r.VERTEX_SHADER,b),P=fd(r,r.FRAGMENT_SHADER,S);r.attachShader(v,C),r.attachShader(v,P),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function I(R){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(v)||"",V=r.getShaderInfoLog(C)||"",H=r.getShaderInfoLog(P)||"",j=B.trim(),q=V.trim(),z=H.trim();let L=!0,ie=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,C,P);else{const ue=hd(r,C,"vertex"),ve=hd(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+ue+`
`+ve)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(q===""||z==="")&&(ie=!1);ie&&(R.diagnostics={runnable:L,programLog:j,vertexShader:{log:q,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(C),r.deleteShader(P),D=new Go(r,v),y=EM(r,v)}let D;this.getUniforms=function(){return D===void 0&&I(this),D};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,mM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gM++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=P,this}let FM=0;class OM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new BM(e),n.set(e,i)),i}}class BM{constructor(e){this.id=FM++,this.code=e,this.usedTimes=0}}function zM(t,e,n,i,r,s,o){const a=new bp,l=new OM,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,B,V){const H=B.fog,j=V.geometry,q=y.isMeshStandardMaterial?B.environment:null,z=(y.isMeshStandardMaterial?n:e).get(y.envMap||q),L=z&&z.mapping===ba?z.image.height:null,ie=g[y.type];y.precision!==null&&(h=r.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=ue!==void 0?ue.length:0;let be=0;j.morphAttributes.position!==void 0&&(be=1),j.morphAttributes.normal!==void 0&&(be=2),j.morphAttributes.color!==void 0&&(be=3);let je,ke,ne,me;if(ie){const ot=Nn[ie];je=ot.vertexShader,ke=ot.fragmentShader}else je=y.vertexShader,ke=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const N=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),re=V.isInstancedMesh===!0,fe=V.isBatchedMesh===!0,De=!!y.map,E=!!y.matcap,_=!!z,F=!!y.aoMap,X=!!y.lightMap,te=!!y.bumpMap,W=!!y.normalMap,de=!!y.displacementMap,Q=!!y.emissiveMap,ae=!!y.metalnessMap,le=!!y.roughnessMap,Te=y.anisotropy>0,T=y.clearcoat>0,x=y.dispersion>0,U=y.iridescence>0,Y=y.sheen>0,oe=y.transmission>0,K=Te&&!!y.anisotropyMap,we=T&&!!y.clearcoatMap,he=T&&!!y.clearcoatNormalMap,Re=T&&!!y.clearcoatRoughnessMap,Ce=U&&!!y.iridescenceMap,pe=U&&!!y.iridescenceThicknessMap,Ee=Y&&!!y.sheenColorMap,Ue=Y&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Se=!!y.specularColorMap,$e=!!y.specularIntensityMap,O=oe&&!!y.transmissionMap,xe=oe&&!!y.thicknessMap,ye=!!y.gradientMap,Le=!!y.alphaMap,ge=y.alphaTest>0,ce=!!y.alphaHash,Fe=!!y.extensions;let Ye=Pi;y.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const mt={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:je,fragmentShader:ke,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:fe,batchingColor:fe&&V._colorsTexture!==null,instancing:re,instancingColor:re&&V.instanceColor!==null,instancingMorph:re&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Kr,alphaToCoverage:!!y.alphaToCoverage,map:De,matcap:E,envMap:_,envMapMode:_&&z.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:X,bumpMap:te,normalMap:W,displacementMap:d&&de,emissiveMap:Q,normalMapObjectSpace:W&&y.normalMapType===Ov,normalMapTangentSpace:W&&y.normalMapType===Fv,metalnessMap:ae,roughnessMap:le,anisotropy:Te,anisotropyMap:K,clearcoat:T,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:x,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:pe,sheen:Y,sheenColorMap:Ee,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:Se,specularIntensityMap:$e,transmission:oe,transmissionMap:O,thicknessMap:xe,gradientMap:ye,opaque:y.transparent===!1&&y.blending===zr&&y.alphaToCoverage===!1,alphaMap:Le,alphaTest:ge,alphaHash:ce,combine:y.combine,mapUv:De&&v(y.map.channel),aoMapUv:F&&v(y.aoMap.channel),lightMapUv:X&&v(y.lightMap.channel),bumpMapUv:te&&v(y.bumpMap.channel),normalMapUv:W&&v(y.normalMap.channel),displacementMapUv:de&&v(y.displacementMap.channel),emissiveMapUv:Q&&v(y.emissiveMap.channel),metalnessMapUv:ae&&v(y.metalnessMap.channel),roughnessMapUv:le&&v(y.roughnessMap.channel),anisotropyMapUv:K&&v(y.anisotropyMap.channel),clearcoatMapUv:we&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&v(y.sheenRoughnessMap.channel),specularMapUv:Pe&&v(y.specularMap.channel),specularColorMapUv:Se&&v(y.specularColorMap.channel),specularIntensityMapUv:$e&&v(y.specularIntensityMap.channel),transmissionMapUv:O&&v(y.transmissionMap.channel),thicknessMapUv:xe&&v(y.thicknessMap.channel),alphaMapUv:Le&&v(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(W||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(De||Le),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:De&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:Q&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===On,flipSided:y.side===en,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Fe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&y.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(w(M,y),b(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function b(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function S(y){const M=g[y.type];let R;if(M){const B=Nn[M];R=dx.clone(B.uniforms)}else R=y.uniforms;return R}function C(y,M){let R;for(let B=0,V=u.length;B<V;B++){const H=u[B];if(H.cacheKey===M){R=H,++R.usedTimes;break}}return R===void 0&&(R=new NM(t,M,y,s),u.push(R)),R}function P(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:C,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:D}}function kM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function HM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function vd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||HM),i.length>1&&i.sort(d||vd),r.length>1&&r.sort(d||vd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function VM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new xd,t.set(i,[o])):r>=s.length?(o=new xd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function GM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Xe};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":n={color:new Xe,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function WM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let XM=0;function qM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $M(t){const e=new GM,n=WM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new wt,o=new wt;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,g=0,v=0,m=0,p=0,w=0,b=0,S=0,C=0,P=0,I=0;c.sort(qM);for(let y=0,M=c.length;y<M;y++){const R=c[y],B=R.color,V=R.intensity,H=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*V,f+=B.g*V,d+=B.b*V;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],V);I++}else if(R.isDirectionalLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,i.directionalShadow[h]=L,i.directionalShadowMap[h]=j,i.directionalShadowMatrix[h]=R.shadow.matrix,w++}i.directional[h]=q,h++}else if(R.isSpotLight){const q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(B).multiplyScalar(V),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[v]=q;const z=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,z.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[v]=z.matrix,R.castShadow){const L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=j,S++}v++}else if(R.isRectAreaLight){const q=e.get(R);q.color.copy(B).multiplyScalar(V),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=q,m++}else if(R.isPointLight){const q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const z=R.shadow,L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=R.shadow.matrix,b++}i.point[g]=q,g++}else if(R.isHemisphereLight){const q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(V),q.groundColor.copy(R.groundColor).multiplyScalar(V),i.hemi[p]=q,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==v||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==w||D.numPointShadows!==b||D.numSpotShadows!==S||D.numSpotMaps!==C||D.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=S+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,D.directionalLength=h,D.pointLength=g,D.spotLength=v,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=w,D.numPointShadows=b,D.numSpotShadows=S,D.numSpotMaps=C,D.numLightProbes=I,i.version=XM++)}function l(c,u){let f=0,d=0,h=0,g=0,v=0;const m=u.matrixWorldInverse;for(let p=0,w=c.length;p<w;p++){const b=c[p];if(b.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),f++}else if(b.isSpotLight){const S=i.spot[h];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(b.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(b.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(b.width*.5,0,0),S.halfHeight.set(0,b.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(b.matrixWorld),S.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(b.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function yd(t){const e=new $M(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function YM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new yd(t),e.set(r,[a])):s>=o.length?(a=new yd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const jM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,KM=`uniform sampler2D shadow_pass;
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
}`;function ZM(t,e,n){let i=new Dp;const r=new nt,s=new nt,o=new At,a=new Mx({depthPacking:Nv}),l=new Ex,c={},u=n.maxTextureSize,f={[Ui]:en,[en]:Ui,[On]:On},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:jM,fragmentShader:KM}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Pn;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new kn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ap;let p=this.type;this.render=function(P,I,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ci),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=p!==Qn&&this.type===Qn,H=p===Qn&&this.type!==Qn;for(let j=0,q=P.length;j<q;j++){const z=P[j],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const ie=L.getFrameExtents();if(r.multiply(ie),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,L.mapSize.y=s.y)),L.map===null||V===!0||H===!0){const ve=this.type!==Qn?{minFilter:Tn,magFilter:Tn}:{};L.map!==null&&L.map.dispose(),L.map=new cr(r.x,r.y,ve),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const ue=L.getViewportCount();for(let ve=0;ve<ue;ve++){const be=L.getViewport(ve);o.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),B.viewport(o),L.updateMatrices(z,ve),i=L.getFrustum(),S(I,D,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===Qn&&w(L,D),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,M,R)};function w(P,I){const D=e.update(v);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,D,d,v,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,D,h,v,null)}function b(P,I,D,y){let M=null;const R=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const B=M.uuid,V=I.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let j=H[V];j===void 0&&(j=M.clone(),H[V]=j,I.addEventListener("dispose",C)),M=j}if(M.visible=I.visible,M.wireframe=I.wireframe,y===Qn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=D}return M}function S(P,I,D,y,M){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Qn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const V=e.update(P),H=P.material;if(Array.isArray(H)){const j=V.groups;for(let q=0,z=j.length;q<z;q++){const L=j[q],ie=H[L.materialIndex];if(ie&&ie.visible){const ue=b(P,ie,y,M);P.onBeforeShadow(t,P,I,D,V,ue,L),t.renderBufferDirect(D,null,V,ue,P,L),P.onAfterShadow(t,P,I,D,V,ue,L)}}}else if(H.visible){const j=b(P,H,y,M);P.onBeforeShadow(t,P,I,D,V,j,null),t.renderBufferDirect(D,null,V,j,P,null),P.onAfterShadow(t,P,I,D,V,j,null)}}const B=P.children;for(let V=0,H=B.length;V<H;V++)S(B[V],I,D,y,M)}function C(P){P.target.removeEventListener("dispose",C);for(const D in c){const y=c[D],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const JM={[Vl]:Gl,[Wl]:$l,[Xl]:Yl,[$r]:ql,[Gl]:Vl,[$l]:Wl,[Yl]:Xl,[ql]:$r};function QM(t,e){function n(){let O=!1;const xe=new At;let ye=null;const Le=new At(0,0,0,0);return{setMask:function(ge){ye!==ge&&!O&&(t.colorMask(ge,ge,ge,ge),ye=ge)},setLocked:function(ge){O=ge},setClear:function(ge,ce,Fe,Ye,mt){mt===!0&&(ge*=Ye,ce*=Ye,Fe*=Ye),xe.set(ge,ce,Fe,Ye),Le.equals(xe)===!1&&(t.clearColor(ge,ce,Fe,Ye),Le.copy(xe))},reset:function(){O=!1,ye=null,Le.set(-1,0,0,0)}}}function i(){let O=!1,xe=!1,ye=null,Le=null,ge=null;return{setReversed:function(ce){if(xe!==ce){const Fe=e.get("EXT_clip_control");ce?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ce;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return xe},setTest:function(ce){ce?N(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ce){ye!==ce&&!O&&(t.depthMask(ce),ye=ce)},setFunc:function(ce){if(xe&&(ce=JM[ce]),Le!==ce){switch(ce){case Vl:t.depthFunc(t.NEVER);break;case Gl:t.depthFunc(t.ALWAYS);break;case Wl:t.depthFunc(t.LESS);break;case $r:t.depthFunc(t.LEQUAL);break;case Xl:t.depthFunc(t.EQUAL);break;case ql:t.depthFunc(t.GEQUAL);break;case $l:t.depthFunc(t.GREATER);break;case Yl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Le=ce}},setLocked:function(ce){O=ce},setClear:function(ce){ge!==ce&&(xe&&(ce=1-ce),t.clearDepth(ce),ge=ce)},reset:function(){O=!1,ye=null,Le=null,ge=null,xe=!1}}}function r(){let O=!1,xe=null,ye=null,Le=null,ge=null,ce=null,Fe=null,Ye=null,mt=null;return{setTest:function(ot){O||(ot?N(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!O&&(t.stencilMask(ot),xe=ot)},setFunc:function(ot,Wn,In){(ye!==ot||Le!==Wn||ge!==In)&&(t.stencilFunc(ot,Wn,In),ye=ot,Le=Wn,ge=In)},setOp:function(ot,Wn,In){(ce!==ot||Fe!==Wn||Ye!==In)&&(t.stencilOp(ot,Wn,In),ce=ot,Fe=Wn,Ye=In)},setLocked:function(ot){O=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){O=!1,xe=null,ye=null,Le=null,ge=null,ce=null,Fe=null,Ye=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,b=null,S=null,C=null,P=null,I=new Xe(0,0,0),D=0,y=!1,M=null,R=null,B=null,V=null,H=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,z=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(L)[1]),q=z>=1):L.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),q=z>=2);let ie=null,ue={};const ve=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),je=new At().fromArray(ve),ke=new At().fromArray(be);function ne(O,xe,ye,Le){const ge=new Uint8Array(4),ce=t.createTexture();t.bindTexture(O,ce),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<ye;Fe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,Le,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(xe+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ce}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(t.DEPTH_TEST),o.setFunc($r),te(!1),W(Mf),N(t.CULL_FACE),F(Ci);function N(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function se(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function re(O,xe){return f[O]!==xe?(t.bindFramebuffer(O,xe),f[O]=xe,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function fe(O,xe){let ye=h,Le=!1;if(O){ye=d.get(xe),ye===void 0&&(ye=[],d.set(xe,ye));const ge=O.textures;if(ye.length!==ge.length||ye[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Fe=ge.length;ce<Fe;ce++)ye[ce]=t.COLOR_ATTACHMENT0+ce;ye.length=ge.length,Le=!0}}else ye[0]!==t.BACK&&(ye[0]=t.BACK,Le=!0);Le&&t.drawBuffers(ye)}function De(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const E={[er]:t.FUNC_ADD,[av]:t.FUNC_SUBTRACT,[lv]:t.FUNC_REVERSE_SUBTRACT};E[cv]=t.MIN,E[uv]=t.MAX;const _={[fv]:t.ZERO,[dv]:t.ONE,[hv]:t.SRC_COLOR,[kl]:t.SRC_ALPHA,[xv]:t.SRC_ALPHA_SATURATE,[_v]:t.DST_COLOR,[mv]:t.DST_ALPHA,[pv]:t.ONE_MINUS_SRC_COLOR,[Hl]:t.ONE_MINUS_SRC_ALPHA,[vv]:t.ONE_MINUS_DST_COLOR,[gv]:t.ONE_MINUS_DST_ALPHA,[yv]:t.CONSTANT_COLOR,[Sv]:t.ONE_MINUS_CONSTANT_COLOR,[bv]:t.CONSTANT_ALPHA,[Mv]:t.ONE_MINUS_CONSTANT_ALPHA};function F(O,xe,ye,Le,ge,ce,Fe,Ye,mt,ot){if(O===Ci){v===!0&&(se(t.BLEND),v=!1);return}if(v===!1&&(N(t.BLEND),v=!0),O!==ov){if(O!==m||ot!==y){if((p!==er||S!==er)&&(t.blendEquation(t.FUNC_ADD),p=er,S=er),ot)switch(O){case zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ns:t.blendFunc(t.ONE,t.ONE);break;case Ef:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Tf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ef:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Tf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}w=null,b=null,C=null,P=null,I.set(0,0,0),D=0,m=O,y=ot}return}ge=ge||xe,ce=ce||ye,Fe=Fe||Le,(xe!==p||ge!==S)&&(t.blendEquationSeparate(E[xe],E[ge]),p=xe,S=ge),(ye!==w||Le!==b||ce!==C||Fe!==P)&&(t.blendFuncSeparate(_[ye],_[Le],_[ce],_[Fe]),w=ye,b=Le,C=ce,P=Fe),(Ye.equals(I)===!1||mt!==D)&&(t.blendColor(Ye.r,Ye.g,Ye.b,mt),I.copy(Ye),D=mt),m=O,y=!1}function X(O,xe){O.side===On?se(t.CULL_FACE):N(t.CULL_FACE);let ye=O.side===en;xe&&(ye=!ye),te(ye),O.blending===zr&&O.transparent===!1?F(Ci):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const Le=O.stencilWrite;a.setTest(Le),Le&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function W(O){O!==iv?(N(t.CULL_FACE),O!==R&&(O===Mf?t.cullFace(t.BACK):O===rv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),R=O}function de(O){O!==B&&(q&&t.lineWidth(O),B=O)}function Q(O,xe,ye){O?(N(t.POLYGON_OFFSET_FILL),(V!==xe||H!==ye)&&(t.polygonOffset(xe,ye),V=xe,H=ye)):se(t.POLYGON_OFFSET_FILL)}function ae(O){O?N(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function le(O){O===void 0&&(O=t.TEXTURE0+j-1),ie!==O&&(t.activeTexture(O),ie=O)}function Te(O,xe,ye){ye===void 0&&(ie===null?ye=t.TEXTURE0+j-1:ye=ie);let Le=ue[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ue[ye]=Le),(Le.type!==O||Le.texture!==xe)&&(ie!==ye&&(t.activeTexture(ye),ie=ye),t.bindTexture(O,xe||me[O]),Le.type=O,Le.texture=xe)}function T(){const O=ue[ie];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{t.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{t.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){je.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),je.copy(O))}function Ue(O){ke.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ke.copy(O))}function Pe(O,xe){let ye=c.get(xe);ye===void 0&&(ye=new WeakMap,c.set(xe,ye));let Le=ye.get(O);Le===void 0&&(Le=t.getUniformBlockIndex(xe,O.name),ye.set(O,Le))}function Se(O,xe){const Le=c.get(xe).get(O);l.get(xe)!==Le&&(t.uniformBlockBinding(xe,Le,O.__bindingPointIndex),l.set(xe,Le))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ie=null,ue={},f={},d=new WeakMap,h=[],g=null,v=!1,m=null,p=null,w=null,b=null,S=null,C=null,P=null,I=new Xe(0,0,0),D=0,y=!1,M=null,R=null,B=null,V=null,H=null,je.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:se,bindFramebuffer:re,drawBuffers:fe,useProgram:De,setBlending:F,setMaterial:X,setFlipSided:te,setCullFace:W,setLineWidth:de,setPolygonOffset:Q,setScissorTest:ae,activeTexture:le,bindTexture:Te,unbindTexture:T,compressedTexImage2D:x,compressedTexImage3D:U,texImage2D:Ce,texImage3D:pe,updateUBOMapping:Pe,uniformBlockBinding:Se,texStorage2D:he,texStorage3D:Re,texSubImage2D:Y,texSubImage3D:oe,compressedTexSubImage2D:K,compressedTexSubImage3D:we,scissor:Ee,viewport:Ue,reset:$e}}function eE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return h?new OffscreenCanvas(T,x):oa("canvas")}function v(T,x,U){let Y=1;const oe=Te(T);if((oe.width>U||oe.height>U)&&(Y=U/Math.max(oe.width,oe.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*oe.width),we=Math.floor(Y*oe.height);f===void 0&&(f=g(K,we));const he=x?g(K,we):f;return he.width=K,he.height=we,he.getContext("2d").drawImage(T,0,0,K,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+K+"x"+we+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),T;return T}function m(T){return T.generateMipmaps}function p(T){t.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function b(T,x,U,Y,oe=!1){if(T!==null){if(t[T]!==void 0)return t[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=x;if(x===t.RED&&(U===t.FLOAT&&(K=t.R32F),U===t.HALF_FLOAT&&(K=t.R16F),U===t.UNSIGNED_BYTE&&(K=t.R8)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.R8UI),U===t.UNSIGNED_SHORT&&(K=t.R16UI),U===t.UNSIGNED_INT&&(K=t.R32UI),U===t.BYTE&&(K=t.R8I),U===t.SHORT&&(K=t.R16I),U===t.INT&&(K=t.R32I)),x===t.RG&&(U===t.FLOAT&&(K=t.RG32F),U===t.HALF_FLOAT&&(K=t.RG16F),U===t.UNSIGNED_BYTE&&(K=t.RG8)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RG8UI),U===t.UNSIGNED_SHORT&&(K=t.RG16UI),U===t.UNSIGNED_INT&&(K=t.RG32UI),U===t.BYTE&&(K=t.RG8I),U===t.SHORT&&(K=t.RG16I),U===t.INT&&(K=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGB8UI),U===t.UNSIGNED_SHORT&&(K=t.RGB16UI),U===t.UNSIGNED_INT&&(K=t.RGB32UI),U===t.BYTE&&(K=t.RGB8I),U===t.SHORT&&(K=t.RGB16I),U===t.INT&&(K=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),U===t.UNSIGNED_INT&&(K=t.RGBA32UI),U===t.BYTE&&(K=t.RGBA8I),U===t.SHORT&&(K=t.RGBA16I),U===t.INT&&(K=t.RGBA32I)),x===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),x===t.RGBA){const we=oe?ra:st.getTransfer(Y);U===t.FLOAT&&(K=t.RGBA32F),U===t.HALF_FLOAT&&(K=t.RGBA16F),U===t.UNSIGNED_BYTE&&(K=we===ut?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function S(T,x){let U;return T?x===null||x===lr||x===Os?U=t.DEPTH24_STENCIL8:x===ri?U=t.DEPTH32F_STENCIL8:x===Fs&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===lr||x===Os?U=t.DEPTH_COMPONENT24:x===ri?U=t.DEPTH_COMPONENT32F:x===Fs&&(U=t.DEPTH_COMPONENT16),U}function C(T,x){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Tn&&T.minFilter!==Vt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function P(T){const x=T.target;x.removeEventListener("dispose",P),D(x),x.isVideoTexture&&u.delete(x)}function I(T){const x=T.target;x.removeEventListener("dispose",I),M(x)}function D(T){const x=i.get(T);if(x.__webglInit===void 0)return;const U=T.source,Y=d.get(U);if(Y){const oe=Y[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(T),Object.keys(Y).length===0&&d.delete(U)}i.remove(T)}function y(T){const x=i.get(T);t.deleteTexture(x.__webglTexture);const U=T.source,Y=d.get(U);delete Y[x.__cacheKey],o.memory.textures--}function M(T){const x=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(x.__webglFramebuffer[Y]))for(let oe=0;oe<x.__webglFramebuffer[Y].length;oe++)t.deleteFramebuffer(x.__webglFramebuffer[Y][oe]);else t.deleteFramebuffer(x.__webglFramebuffer[Y]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Y])}else{if(Array.isArray(x.__webglFramebuffer))for(let Y=0;Y<x.__webglFramebuffer.length;Y++)t.deleteFramebuffer(x.__webglFramebuffer[Y]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Y=0;Y<x.__webglColorRenderbuffer.length;Y++)x.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Y]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const U=T.textures;for(let Y=0,oe=U.length;Y<oe;Y++){const K=i.get(U[Y]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(U[Y])}i.remove(T)}let R=0;function B(){R=0}function V(){const T=R;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),R+=1,T}function H(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function j(T,x){const U=i.get(T);if(T.isVideoTexture&&ae(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&U.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,T,x);return}}else T.isExternalTexture&&(U.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function q(T,x){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){me(U,T,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function z(T,x){const U=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){me(U,T,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function L(T,x){const U=i.get(T);if(T.version>0&&U.__version!==T.version){N(U,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const ie={[Zl]:t.REPEAT,[ir]:t.CLAMP_TO_EDGE,[Jl]:t.MIRRORED_REPEAT},ue={[Tn]:t.NEAREST,[Lv]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[Vt]:t.LINEAR,[Wa]:t.LINEAR_MIPMAP_NEAREST,[rr]:t.LINEAR_MIPMAP_LINEAR},ve={[Bv]:t.NEVER,[Wv]:t.ALWAYS,[zv]:t.LESS,[vp]:t.LEQUAL,[kv]:t.EQUAL,[Gv]:t.GEQUAL,[Hv]:t.GREATER,[Vv]:t.NOTEQUAL};function be(T,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Vt||x.magFilter===Wa||x.magFilter===so||x.magFilter===rr||x.minFilter===Vt||x.minFilter===Wa||x.minFilter===so||x.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,ie[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,ie[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,ie[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,ue[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Tn||x.minFilter!==so&&x.minFilter!==rr||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function je(T,x){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",P));const Y=x.source;let oe=d.get(Y);oe===void 0&&(oe={},d.set(Y,oe));const K=H(x);if(K!==T.__cacheKey){oe[K]===void 0&&(oe[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),oe[K].usedTimes++;const we=oe[T.__cacheKey];we!==void 0&&(oe[T.__cacheKey].usedTimes--,we.usedTimes===0&&y(x)),T.__cacheKey=K,T.__webglTexture=oe[K].texture}return U}function ke(T,x,U){return Math.floor(Math.floor(T/U)/x)}function ne(T,x,U,Y){const K=T.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,Y,x.data);else{K.sort((pe,Ee)=>pe.start-Ee.start);let we=0;for(let pe=1;pe<K.length;pe++){const Ee=K[we],Ue=K[pe],Pe=Ee.start+Ee.count,Se=ke(Ue.start,x.width,4),$e=ke(Ee.start,x.width,4);Ue.start<=Pe+1&&Se===$e&&ke(Ue.start+Ue.count-1,x.width,4)===Se?Ee.count=Math.max(Ee.count,Ue.start+Ue.count-Ee.start):(++we,K[we]=Ue)}K.length=we+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let pe=0,Ee=K.length;pe<Ee;pe++){const Ue=K[pe],Pe=Math.floor(Ue.start/4),Se=Math.ceil(Ue.count/4),$e=Pe%x.width,O=Math.floor(Pe/x.width),xe=Se,ye=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,$e,O,xe,ye,U,Y,x.data)}T.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function me(T,x,U){let Y=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Y=t.TEXTURE_3D);const oe=je(T,x),K=x.source;n.bindTexture(Y,T.__webglTexture,t.TEXTURE0+U);const we=i.get(K);if(K.version!==we.__version||oe===!0){n.activeTexture(t.TEXTURE0+U);const he=st.getPrimaries(st.workingColorSpace),Re=x.colorSpace===wi?null:st.getPrimaries(x.colorSpace),Ce=x.colorSpace===wi||he===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let pe=v(x.image,!1,r.maxTextureSize);pe=le(x,pe);const Ee=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type);let Pe=b(x.internalFormat,Ee,Ue,x.colorSpace,x.isVideoTexture);be(Y,x);let Se;const $e=x.mipmaps,O=x.isVideoTexture!==!0,xe=we.__version===void 0||oe===!0,ye=K.dataReady,Le=C(x,pe);if(x.isDepthTexture)Pe=S(x.format===zs,x.type),xe&&(O?n.texStorage2D(t.TEXTURE_2D,1,Pe,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Ue,null));else if(x.isDataTexture)if($e.length>0){O&&xe&&n.texStorage2D(t.TEXTURE_2D,Le,Pe,$e[0].width,$e[0].height);for(let ge=0,ce=$e.length;ge<ce;ge++)Se=$e[ge],O?ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Se.width,Se.height,0,Ee,Ue,Se.data);x.generateMipmaps=!1}else O?(xe&&n.texStorage2D(t.TEXTURE_2D,Le,Pe,pe.width,pe.height),ye&&ne(x,pe,Ee,Ue)):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Ue,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){O&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Pe,$e[0].width,$e[0].height,pe.depth);for(let ge=0,ce=$e.length;ge<ce;ge++)if(Se=$e[ge],x.format!==Mn)if(Ee!==null)if(O){if(ye)if(x.layerUpdates.size>0){const Fe=Kf(Se.width,Se.height,x.format,x.type);for(const Ye of x.layerUpdates){const mt=Se.data.subarray(Ye*Fe/Se.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/Se.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ye,Se.width,Se.height,1,Ee,mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Ee,Se.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Se.width,Se.height,pe.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,Se.width,Se.height,pe.depth,Ee,Ue,Se.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,Se.width,Se.height,pe.depth,0,Ee,Ue,Se.data)}else{O&&xe&&n.texStorage2D(t.TEXTURE_2D,Le,Pe,$e[0].width,$e[0].height);for(let ge=0,ce=$e.length;ge<ce;ge++)Se=$e[ge],x.format!==Mn?Ee!==null?O?ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Se.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Se.width,Se.height,Ee,Ue,Se.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,Se.width,Se.height,0,Ee,Ue,Se.data)}else if(x.isDataArrayTexture)if(O){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Le,Pe,pe.width,pe.height,pe.depth),ye)if(x.layerUpdates.size>0){const ge=Kf(pe.width,pe.height,x.format,x.type);for(const ce of x.layerUpdates){const Fe=pe.data.subarray(ce*ge/pe.data.BYTES_PER_ELEMENT,(ce+1)*ge/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,Ee,Ue,Fe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ue,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Ue,pe.data);else if(x.isData3DTexture)O?(xe&&n.texStorage3D(t.TEXTURE_3D,Le,Pe,pe.width,pe.height,pe.depth),ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ue,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Ue,pe.data);else if(x.isFramebufferTexture){if(xe)if(O)n.texStorage2D(t.TEXTURE_2D,Le,Pe,pe.width,pe.height);else{let ge=pe.width,ce=pe.height;for(let Fe=0;Fe<Le;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Pe,ge,ce,0,Ee,Ue,null),ge>>=1,ce>>=1}}else if($e.length>0){if(O&&xe){const ge=Te($e[0]);n.texStorage2D(t.TEXTURE_2D,Le,Pe,ge.width,ge.height)}for(let ge=0,ce=$e.length;ge<ce;ge++)Se=$e[ge],O?ye&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ee,Ue,Se):n.texImage2D(t.TEXTURE_2D,ge,Pe,Ee,Ue,Se);x.generateMipmaps=!1}else if(O){if(xe){const ge=Te(pe);n.texStorage2D(t.TEXTURE_2D,Le,Pe,ge.width,ge.height)}ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ue,pe)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ee,Ue,pe);m(x)&&p(Y),we.__version=K.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function N(T,x,U){if(x.image.length!==6)return;const Y=je(T,x),oe=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+U);const K=i.get(oe);if(oe.version!==K.__version||Y===!0){n.activeTexture(t.TEXTURE0+U);const we=st.getPrimaries(st.workingColorSpace),he=x.colorSpace===wi?null:st.getPrimaries(x.colorSpace),Re=x.colorSpace===wi||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!Ce&&!pe?Ee[ce]=v(x.image[ce],!0,r.maxCubemapSize):Ee[ce]=pe?x.image[ce].image:x.image[ce],Ee[ce]=le(x,Ee[ce]);const Ue=Ee[0],Pe=s.convert(x.format,x.colorSpace),Se=s.convert(x.type),$e=b(x.internalFormat,Pe,Se,x.colorSpace),O=x.isVideoTexture!==!0,xe=K.__version===void 0||Y===!0,ye=oe.dataReady;let Le=C(x,Ue);be(t.TEXTURE_CUBE_MAP,x);let ge;if(Ce){O&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,$e,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){ge=Ee[ce].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];x.format!==Mn?Pe!==null?O?ye&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ye.width,Ye.height,Pe,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,$e,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,0,0,Ye.width,Ye.height,Pe,Se,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe,$e,Ye.width,Ye.height,0,Pe,Se,Ye.data)}}}else{if(ge=x.mipmaps,O&&xe){ge.length>0&&Le++;const ce=Te(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,$e,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(pe){O?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Pe,Se,Ee[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,Ee[ce].width,Ee[ce].height,0,Pe,Se,Ee[ce].data);for(let Fe=0;Fe<ge.length;Fe++){const mt=ge[Fe].image[ce].image;O?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,mt.width,mt.height,Pe,Se,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,$e,mt.width,mt.height,0,Pe,Se,mt.data)}}else{O?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,Se,Ee[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,$e,Pe,Se,Ee[ce]);for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];O?ye&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,0,0,Pe,Se,Ye.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Fe+1,$e,Pe,Se,Ye.image[ce])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),K.__version=oe.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function se(T,x,U,Y,oe,K){const we=s.convert(U.format,U.colorSpace),he=s.convert(U.type),Re=b(U.internalFormat,we,he,U.colorSpace),Ce=i.get(x),pe=i.get(U);if(pe.__renderTarget=x,!Ce.__hasExternalTextures){const Ee=Math.max(1,x.width>>K),Ue=Math.max(1,x.height>>K);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,K,Re,Ee,Ue,x.depth,0,we,he,null):n.texImage2D(oe,K,Re,Ee,Ue,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,oe,pe.__webglTexture,0,de(x)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,oe,pe.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(T,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){const Y=x.depthTexture,oe=Y&&Y.isDepthTexture?Y.type:null,K=S(x.stencilBuffer,oe),we=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=de(x);Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,K,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,T)}else{const Y=x.textures;for(let oe=0;oe<Y.length;oe++){const K=Y[oe],we=s.convert(K.format,K.colorSpace),he=s.convert(K.type),Re=b(K.internalFormat,we,he,K.colorSpace),Ce=de(x);U&&Q(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Re,x.width,x.height):Q(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Re,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Re,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(x.depthTexture);Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const oe=Y.__webglTexture,K=de(x);if(x.depthTexture.format===Bs)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(x.depthTexture.format===zs)Q(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function De(T){const x=i.get(T),U=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Y){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Y.removeEventListener("dispose",oe)};Y.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=Y}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const Y=T.texture.mipmaps;Y&&Y.length>0?fe(x.__webglFramebuffer[0],T):fe(x.__webglFramebuffer,T)}else if(U){x.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[Y]),x.__webglDepthbuffer[Y]===void 0)x.__webglDepthbuffer[Y]=t.createRenderbuffer(),re(x.__webglDepthbuffer[Y],T,!1);else{const oe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,K)}}else{const Y=T.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),re(x.__webglDepthbuffer,T,!1);else{const oe=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function E(T,x,U){const Y=i.get(T);x!==void 0&&se(Y.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&De(T)}function _(T){const x=T.texture,U=i.get(T),Y=i.get(x);T.addEventListener("dispose",I);const oe=T.textures,K=T.isWebGLCubeRenderTarget===!0,we=oe.length>1;if(we||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=x.version,o.memory.textures++),K){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Re=0;Re<x.mipmaps.length;Re++)U.__webglFramebuffer[he][Re]=t.createFramebuffer()}else U.__webglFramebuffer[he]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)U.__webglFramebuffer[he]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,Re=oe.length;he<Re;he++){const Ce=i.get(oe[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(T.samples>0&&Q(T)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const Re=oe[he];U.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const Ce=s.convert(Re.format,Re.colorSpace),pe=s.convert(Re.type),Ee=b(Re.internalFormat,Ce,pe,Re.colorSpace,T.isXRRenderTarget===!0),Ue=de(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ee,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,U.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),re(U.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),be(t.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)se(U.__webglFramebuffer[he][Re],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else se(U.__webglFramebuffer[he],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,Re=oe.length;he<Re;he++){const Ce=oe[he],pe=i.get(Ce);let Ee=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Ee=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,pe.__webglTexture),be(Ee,Ce),se(U.__webglFramebuffer,T,Ce,t.COLOR_ATTACHMENT0+he,Ee,0),m(Ce)&&p(Ee)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,Y.__webglTexture),be(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)se(U.__webglFramebuffer[Re],T,x,t.COLOR_ATTACHMENT0,he,Re);else se(U.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,he,0);m(x)&&p(he),n.unbindTexture()}T.depthBuffer&&De(T)}function F(T){const x=T.textures;for(let U=0,Y=x.length;U<Y;U++){const oe=x[U];if(m(oe)){const K=w(T),we=i.get(oe).__webglTexture;n.bindTexture(K,we),p(K),n.unbindTexture()}}}const X=[],te=[];function W(T){if(T.samples>0){if(Q(T)===!1){const x=T.textures,U=T.width,Y=T.height;let oe=t.COLOR_BUFFER_BIT;const K=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(T),he=x.length>1;if(he)for(let Ce=0;Ce<x.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Re=T.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(x[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,U,Y,0,0,U,Y,oe,t.NEAREST),l===!0&&(X.length=0,te.length=0,X.push(t.COLOR_ATTACHMENT0+Ce),T.depthBuffer&&T.resolveDepthBuffer===!1&&(X.push(K),te.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,X))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<x.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(x[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function de(T){return Math.min(r.maxSamples,T.samples)}function Q(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(T){const x=o.render.frame;u.get(T)!==x&&(u.set(T,x),T.update())}function le(T,x){const U=T.colorSpace,Y=T.format,oe=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==Kr&&U!==wi&&(st.getTransfer(U)===ut?(Y!==Mn||oe!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),x}function Te(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=q,this.setTexture3D=z,this.setTextureCube=L,this.rebindTextures=E,this.setupRenderTarget=_,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Q}function tE(t,e){function n(i,r=wi){let s;const o=st.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===nu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===iu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===dp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===up)return t.BYTE;if(i===fp)return t.SHORT;if(i===Fs)return t.UNSIGNED_SHORT;if(i===tu)return t.INT;if(i===lr)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===qs)return t.HALF_FLOAT;if(i===hp)return t.ALPHA;if(i===pp)return t.RGB;if(i===Mn)return t.RGBA;if(i===Bs)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===mp)return t.RED;if(i===ru)return t.RED_INTEGER;if(i===gp)return t.RG;if(i===su)return t.RG_INTEGER;if(i===ou)return t.RGBA_INTEGER;if(i===Bo||i===zo||i===ko||i===Ho)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===rc||i===sc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ic||i===rc)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===dc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===hc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===pc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===mc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===gc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===_c)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===vc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===xc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Vo||i===yc||i===Sc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Vo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_p||i===bc||i===Mc||i===Ec)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Vo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Os?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class kp extends Ut{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const nE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iE=`
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

}`;class rE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new kp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:nE,fragmentShader:iE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new kn(new Ks(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sE extends Qr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=new rE,m={},p=n.getContextAttributes();let w=null,b=null;const S=[],C=[],P=new nt;let I=null;const D=new mn;D.viewport=new At;const y=new mn;y.viewport=new At;const M=[D,y],R=new Tx;let B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=S[ne];return me===void 0&&(me=new hl,S[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=S[ne];return me===void 0&&(me=new hl,S[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=S[ne];return me===void 0&&(me=new hl,S[ne]=me),me.getHandSpace()};function H(ne){const me=C.indexOf(ne.inputSource);if(me===-1)return;const N=S[me];N!==void 0&&(N.update(ne.inputSource,ne.frame,c||o),N.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",q);for(let ne=0;ne<S.length;ne++){const me=C[ne];me!==null&&(C[ne]=null,S[ne].disconnect(me))}B=null,V=null,v.reset();for(const ne in m)delete m[ne];e.setRenderTarget(w),h=null,d=null,f=null,r=null,b=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,se=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,N=p.stencil?zs:Bs,se=p.stencil?Os:lr);const fe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new cr(d.textureWidth,d.textureHeight,{format:Mn,type:fi,depthTexture:new Lp(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const N={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,N),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new cr(h.framebufferWidth,h.framebufferHeight,{format:Mn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function q(ne){for(let me=0;me<ne.removed.length;me++){const N=ne.removed[me],se=C.indexOf(N);se>=0&&(C[se]=null,S[se].disconnect(N))}for(let me=0;me<ne.added.length;me++){const N=ne.added[me];let se=C.indexOf(N);if(se===-1){for(let fe=0;fe<S.length;fe++)if(fe>=C.length){C.push(N),se=fe;break}else if(C[fe]===null){C[fe]=N,se=fe;break}if(se===-1)break}const re=S[se];re&&re.connect(N)}}const z=new Z,L=new Z;function ie(ne,me,N){z.setFromMatrixPosition(me.matrixWorld),L.setFromMatrixPosition(N.matrixWorld);const se=z.distanceTo(L),re=me.projectionMatrix.elements,fe=N.projectionMatrix.elements,De=re[14]/(re[10]-1),E=re[14]/(re[10]+1),_=(re[9]+1)/re[5],F=(re[9]-1)/re[5],X=(re[8]-1)/re[0],te=(fe[8]+1)/fe[0],W=De*X,de=De*te,Q=se/(-X+te),ae=Q*-X;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ae),ne.translateZ(Q),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const le=De+Q,Te=E+Q,T=W-ae,x=de+(se-ae),U=_*E/Te*le,Y=F*E/Te*le;ne.projectionMatrix.makePerspective(T,x,U,Y,le,Te),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,N=ne.far;v.texture!==null&&(v.depthNear>0&&(me=v.depthNear),v.depthFar>0&&(N=v.depthFar)),R.near=y.near=D.near=me,R.far=y.far=D.far=N,(B!==R.near||V!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,V=R.far),R.layers.mask=ne.layers.mask|6,D.layers.mask=R.layers.mask&3,y.layers.mask=R.layers.mask&5;const se=ne.parent,re=R.cameras;ue(R,se);for(let fe=0;fe<re.length;fe++)ue(re[fe],se);re.length===2?ie(R,D,y):R.projectionMatrix.copy(D.projectionMatrix),ve(ne,R,se)};function ve(ne,me,N){N===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(N.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ac*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(R)},this.getCameraTexture=function(ne){return m[ne]};let be=null;function je(ne,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const N=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let se=!1;N.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let E=0;E<N.length;E++){const _=N[E];let F=null;if(h!==null)F=h.getViewport(_);else{const te=f.getViewSubImage(d,_);F=te.viewport,E===0&&(e.setRenderTargetTextures(b,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(b))}let X=M[E];X===void 0&&(X=new mn,X.layers.enable(E),X.viewport=new At,M[E]=X),X.matrix.fromArray(_.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(_.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(F.x,F.y,F.width,F.height),E===0&&(R.matrix.copy(X.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(X)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const E=f.getDepthInformation(N[0]);E&&E.isValid&&E.texture&&v.init(E,r.renderState)}if(re&&re.includes("camera-access")&&(e.state.unbindTexture(),f))for(let E=0;E<N.length;E++){const _=N[E].camera;if(_){let F=m[_];F||(F=new kp,m[_]=F);const X=f.getCameraImage(_);F.sourceTexture=X}}}for(let N=0;N<S.length;N++){const se=C[N],re=S[N];se!==null&&re!==void 0&&re.update(se,me,c||o)}be&&be(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const ke=new Np;ke.setAnimationLoop(je),this.setAnimationLoop=function(ne){be=ne},this.dispose=function(){}}}const Yi=new di,oE=new wt;function aE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ap(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,w,b,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,w,b):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=e.get(p),b=w.envMap,S=w.envMapRotation;b&&(m.envMap.value=b,Yi.copy(S),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(oE.makeRotationFromEuler(Yi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=b*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function lE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,b){const S=b.program;i.uniformBlockBinding(w,S)}function c(w,b){let S=r[w.id];S===void 0&&(g(w),S=u(w),r[w.id]=S,w.addEventListener("dispose",m));const C=b.program;i.updateUBOMapping(w,C);const P=e.render.frame;s[w.id]!==P&&(d(w),s[w.id]=P)}function u(w){const b=f();w.__bindingPointIndex=b;const S=t.createBuffer(),C=w.__size,P=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,C,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,b,S),S}function f(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const b=r[w.id],S=w.uniforms,C=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,b);for(let P=0,I=S.length;P<I;P++){const D=Array.isArray(S[P])?S[P]:[S[P]];for(let y=0,M=D.length;y<M;y++){const R=D[y];if(h(R,P,y,C)===!0){const B=R.__offset,V=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let j=0;j<V.length;j++){const q=V[j],z=v(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,t.bufferSubData(t.UNIFORM_BUFFER,B+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(w,b,S,C){const P=w.value,I=b+"_"+S;if(C[I]===void 0)return typeof P=="number"||typeof P=="boolean"?C[I]=P:C[I]=P.clone(),!0;{const D=C[I];if(typeof P=="number"||typeof P=="boolean"){if(D!==P)return C[I]=P,!0}else if(D.equals(P)===!1)return D.copy(P),!0}return!1}function g(w){const b=w.uniforms;let S=0;const C=16;for(let I=0,D=b.length;I<D;I++){const y=Array.isArray(b[I])?b[I]:[b[I]];for(let M=0,R=y.length;M<R;M++){const B=y[M],V=Array.isArray(B.value)?B.value:[B.value];for(let H=0,j=V.length;H<j;H++){const q=V[H],z=v(q),L=S%C,ie=L%z.boundary,ue=L+ie;S+=ie,ue!==0&&C-ue<z.storage&&(S+=C-ue),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=S,S+=z.storage}}}const P=S%C;return P>0&&(S+=C-P),w.__size=S,w.__cache={},this}function v(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),b}function m(w){const b=w.target;b.removeEventListener("dispose",m);const S=o.indexOf(b.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Hp{constructor(e={}){const{canvas:n=qv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const w=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let C=!1;this._outputColorSpace=pn;let P=0,I=0,D=null,y=-1,M=null;const R=new At,B=new At;let V=null;const H=new Xe(0);let j=0,q=n.width,z=n.height,L=1,ie=null,ue=null;const ve=new At(0,0,q,z),be=new At(0,0,q,z);let je=!1;const ke=new Dp;let ne=!1,me=!1;const N=new wt,se=new Z,re=new At,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function E(){return D===null?L:1}let _=i;function F(A,k){return n.getContext(A,k)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${eu}`),n.addEventListener("webglcontextlost",ye,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",ge,!1),_===null){const k="webgl2";if(_=F(k,A),_===null)throw F(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let X,te,W,de,Q,ae,le,Te,T,x,U,Y,oe,K,we,he,Re,Ce,pe,Ee,Ue,Pe,Se,$e;function O(){X=new xb(_),X.init(),Pe=new tE(_,X),te=new db(_,X,e,Pe),W=new QM(_,X),te.reversedDepthBuffer&&d&&W.buffers.depth.setReversed(!0),de=new bb(_),Q=new kM,ae=new eE(_,X,W,Q,te,Pe,de),le=new pb(S),Te=new vb(S),T=new Rx(_),Se=new ub(_,T),x=new yb(_,T,de,Se),U=new Eb(_,x,T,de),pe=new Mb(_,te,ae),he=new hb(Q),Y=new zM(S,le,Te,X,te,Se,he),oe=new aE(S,Q),K=new VM,we=new YM(X),Ce=new cb(S,le,Te,W,U,h,l),Re=new ZM(S,U,te),$e=new lE(_,de,te,W),Ee=new fb(_,X,de),Ue=new Sb(_,X,de),de.programs=Y.programs,S.capabilities=te,S.extensions=X,S.properties=Q,S.renderLists=K,S.shadowMap=Re,S.state=W,S.info=de}O();const xe=new sE(S,_);this.xr=xe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const A=X.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=X.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(A){A!==void 0&&(L=A,this.setSize(q,z,!1))},this.getSize=function(A){return A.set(q,z)},this.setSize=function(A,k,J=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,z=k,n.width=Math.floor(A*L),n.height=Math.floor(k*L),J===!0&&(n.style.width=A+"px",n.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(q*L,z*L).floor()},this.setDrawingBufferSize=function(A,k,J){q=A,z=k,L=J,n.width=Math.floor(A*J),n.height=Math.floor(k*J),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(ve)},this.setViewport=function(A,k,J,ee){A.isVector4?ve.set(A.x,A.y,A.z,A.w):ve.set(A,k,J,ee),W.viewport(R.copy(ve).multiplyScalar(L).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,k,J,ee){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,k,J,ee),W.scissor(B.copy(be).multiplyScalar(L).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){W.setScissorTest(je=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){ue=A},this.getClearColor=function(A){return A.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(A=!0,k=!0,J=!0){let ee=0;if(A){let G=!1;if(D!==null){const _e=D.texture.format;G=_e===ou||_e===su||_e===ru}if(G){const _e=D.texture.type,Ae=_e===fi||_e===lr||_e===Fs||_e===Os||_e===nu||_e===iu,Ne=Ce.getClearColor(),Ie=Ce.getClearAlpha(),He=Ne.r,Ge=Ne.g,Oe=Ne.b;Ae?(g[0]=He,g[1]=Ge,g[2]=Oe,g[3]=Ie,_.clearBufferuiv(_.COLOR,0,g)):(v[0]=He,v[1]=Ge,v[2]=Oe,v[3]=Ie,_.clearBufferiv(_.COLOR,0,v))}else ee|=_.COLOR_BUFFER_BIT}k&&(ee|=_.DEPTH_BUFFER_BIT),J&&(ee|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ye,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Ce.dispose(),K.dispose(),we.dispose(),Q.dispose(),le.dispose(),Te.dispose(),U.dispose(),Se.dispose(),$e.dispose(),Y.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",In),xe.removeEventListener("sessionend",uu),Oi.stop()};function ye(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const A=de.autoReset,k=Re.enabled,J=Re.autoUpdate,ee=Re.needsUpdate,G=Re.type;O(),de.autoReset=A,Re.enabled=k,Re.autoUpdate=J,Re.needsUpdate=ee,Re.type=G}function ge(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ce(A){const k=A.target;k.removeEventListener("dispose",ce),Fe(k)}function Fe(A){Ye(A),Q.remove(A)}function Ye(A){const k=Q.get(A).programs;k!==void 0&&(k.forEach(function(J){Y.releaseProgram(J)}),A.isShaderMaterial&&Y.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,J,ee,G,_e){k===null&&(k=fe);const Ae=G.isMesh&&G.matrixWorld.determinant()<0,Ne=Gp(A,k,J,ee,G);W.setMaterial(ee,Ae);let Ie=J.index,He=1;if(ee.wireframe===!0){if(Ie=x.getWireframeAttribute(J),Ie===void 0)return;He=2}const Ge=J.drawRange,Oe=J.attributes.position;let et=Ge.start*He,ct=(Ge.start+Ge.count)*He;_e!==null&&(et=Math.max(et,_e.start*He),ct=Math.min(ct,(_e.start+_e.count)*He)),Ie!==null?(et=Math.max(et,0),ct=Math.min(ct,Ie.count)):Oe!=null&&(et=Math.max(et,0),ct=Math.min(ct,Oe.count));const bt=ct-et;if(bt<0||bt===1/0)return;Se.setup(G,ee,Ne,J,Ie);let _t,ht=Ee;if(Ie!==null&&(_t=T.get(Ie),ht=Ue,ht.setIndex(_t)),G.isMesh)ee.wireframe===!0?(W.setLineWidth(ee.wireframeLinewidth*E()),ht.setMode(_.LINES)):ht.setMode(_.TRIANGLES);else if(G.isLine){let Be=ee.linewidth;Be===void 0&&(Be=1),W.setLineWidth(Be*E()),G.isLineSegments?ht.setMode(_.LINES):G.isLineLoop?ht.setMode(_.LINE_LOOP):ht.setMode(_.LINE_STRIP)}else G.isPoints?ht.setMode(_.POINTS):G.isSprite&&ht.setMode(_.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Be=G._multiDrawStarts,vt=G._multiDrawCounts,rt=G._multiDrawCount,tn=Ie?T.get(Ie).bytesPerElement:1,ur=Q.get(ee).currentProgram.getUniforms();for(let nn=0;nn<rt;nn++)ur.setValue(_,"_gl_DrawID",nn),ht.render(Be[nn]/tn,vt[nn])}else if(G.isInstancedMesh)ht.renderInstances(et,bt,G.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Be);ht.renderInstances(et,bt,vt)}else ht.render(et,bt)};function mt(A,k,J){A.transparent===!0&&A.side===On&&A.forceSinglePass===!1?(A.side=en,A.needsUpdate=!0,Js(A,k,J),A.side=Ui,A.needsUpdate=!0,Js(A,k,J),A.side=On):Js(A,k,J)}this.compile=function(A,k,J=null){J===null&&(J=A),p=we.get(J),p.init(k),b.push(p),J.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),A!==J&&A.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights();const ee=new Set;return A.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const _e=G.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Ne=_e[Ae];mt(Ne,J,G),ee.add(Ne)}else mt(_e,J,G),ee.add(_e)}),p=b.pop(),ee},this.compileAsync=function(A,k,J=null){const ee=this.compile(A,k,J);return new Promise(G=>{function _e(){if(ee.forEach(function(Ae){Q.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){G(A);return}setTimeout(_e,10)}X.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function Wn(A){ot&&ot(A)}function In(){Oi.stop()}function uu(){Oi.start()}const Oi=new Np;Oi.setAnimationLoop(Wn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(A){ot=A,xe.setAnimationLoop(A),A===null?Oi.stop():Oi.start()},xe.addEventListener("sessionstart",In),xe.addEventListener("sessionend",uu),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(S,A,k,D),p=we.get(A,b.length),p.init(k),b.push(p),N.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(N,zn,k.reversedDepth),me=this.localClippingEnabled,ne=he.init(this.clippingPlanes,me),m=K.get(A,w.length),m.init(),w.push(m),xe.enabled===!0&&xe.isPresenting===!0){const _e=S.xr.getDepthSensingMesh();_e!==null&&Ta(_e,k,-1/0,S.sortObjects)}Ta(A,k,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ie,ue),De=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,De&&Ce.addToRenderList(m,A),this.info.render.frame++,ne===!0&&he.beginShadows();const J=p.state.shadowsArray;Re.render(J,A,k),ne===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,G=m.transmissive;if(p.setupLights(),k.isArrayCamera){const _e=k.cameras;if(G.length>0)for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const Ie=_e[Ae];du(ee,G,A,Ie)}De&&Ce.render(A);for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++){const Ie=_e[Ae];fu(m,A,Ie,Ie.viewport)}}else G.length>0&&du(ee,G,A,k),De&&Ce.render(A),fu(m,A,k);D!==null&&I===0&&(ae.updateMultisampleRenderTarget(D),ae.updateRenderTargetMipmap(D)),A.isScene===!0&&A.onAfterRender(S,A,k),Se.resetDefaultState(),y=-1,M=null,b.pop(),b.length>0?(p=b[b.length-1],ne===!0&&he.setGlobalState(S.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ta(A,k,J,ee){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)p.pushLight(A),A.castShadow&&p.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Ae=U.update(A),Ne=A.material;Ne.visible&&m.push(A,Ae,Ne,J,re.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const Ae=U.update(A),Ne=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),re.copy(A.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),re.copy(Ae.boundingSphere.center)),re.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Ne)){const Ie=Ae.groups;for(let He=0,Ge=Ie.length;He<Ge;He++){const Oe=Ie[He],et=Ne[Oe.materialIndex];et&&et.visible&&m.push(A,Ae,et,J,re.z,Oe)}}else Ne.visible&&m.push(A,Ae,Ne,J,re.z,null)}}const _e=A.children;for(let Ae=0,Ne=_e.length;Ae<Ne;Ae++)Ta(_e[Ae],k,J,ee)}function fu(A,k,J,ee){const G=A.opaque,_e=A.transmissive,Ae=A.transparent;p.setupLightsView(J),ne===!0&&he.setGlobalState(S.clippingPlanes,J),ee&&W.viewport(R.copy(ee)),G.length>0&&Zs(G,k,J),_e.length>0&&Zs(_e,k,J),Ae.length>0&&Zs(Ae,k,J),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function du(A,k,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new cr(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?qs:fi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=p.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||R;_e.setSize(Ae.z*S.transmissionResolutionScale,Ae.w*S.transmissionResolutionScale);const Ne=S.getRenderTarget(),Ie=S.getActiveCubeFace(),He=S.getActiveMipmapLevel();S.setRenderTarget(_e),S.getClearColor(H),j=S.getClearAlpha(),j<1&&S.setClearColor(16777215,.5),S.clear(),De&&Ce.render(J);const Ge=S.toneMapping;S.toneMapping=Pi;const Oe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),ne===!0&&he.setGlobalState(S.clippingPlanes,ee),Zs(A,J,ee),ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e),X.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,bt=k.length;ct<bt;ct++){const _t=k[ct],ht=_t.object,Be=_t.geometry,vt=_t.material,rt=_t.group;if(vt.side===On&&ht.layers.test(ee.layers)){const tn=vt.side;vt.side=en,vt.needsUpdate=!0,hu(ht,J,ee,Be,vt,rt),vt.side=tn,vt.needsUpdate=!0,et=!0}}et===!0&&(ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e))}S.setRenderTarget(Ne,Ie,He),S.setClearColor(H,j),Oe!==void 0&&(ee.viewport=Oe),S.toneMapping=Ge}function Zs(A,k,J){const ee=k.isScene===!0?k.overrideMaterial:null;for(let G=0,_e=A.length;G<_e;G++){const Ae=A[G],Ne=Ae.object,Ie=Ae.geometry,He=Ae.group;let Ge=Ae.material;Ge.allowOverride===!0&&ee!==null&&(Ge=ee),Ne.layers.test(J.layers)&&hu(Ne,k,J,Ie,Ge,He)}}function hu(A,k,J,ee,G,_e){A.onBeforeRender(S,k,J,ee,G,_e),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),G.onBeforeRender(S,k,J,ee,A,_e),G.transparent===!0&&G.side===On&&G.forceSinglePass===!1?(G.side=en,G.needsUpdate=!0,S.renderBufferDirect(J,k,ee,G,A,_e),G.side=Ui,G.needsUpdate=!0,S.renderBufferDirect(J,k,ee,G,A,_e),G.side=On):S.renderBufferDirect(J,k,ee,G,A,_e),A.onAfterRender(S,k,J,ee,G,_e)}function Js(A,k,J){k.isScene!==!0&&(k=fe);const ee=Q.get(A),G=p.state.lights,_e=p.state.shadowsArray,Ae=G.state.version,Ne=Y.getParameters(A,G.state,_e,k,J),Ie=Y.getProgramCacheKey(Ne);let He=ee.programs;ee.environment=A.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(A.isMeshStandardMaterial?Te:le).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",ce),He=new Map,ee.programs=He);let Ge=He.get(Ie);if(Ge!==void 0){if(ee.currentProgram===Ge&&ee.lightsStateVersion===Ae)return mu(A,Ne),Ge}else Ne.uniforms=Y.getUniforms(A),A.onBeforeCompile(Ne,S),Ge=Y.acquireProgram(Ne,Ie),He.set(Ie,Ge),ee.uniforms=Ne.uniforms;const Oe=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Oe.clippingPlanes=he.uniform),mu(A,Ne),ee.needsLights=Xp(A),ee.lightsStateVersion=Ae,ee.needsLights&&(Oe.ambientLightColor.value=G.state.ambient,Oe.lightProbe.value=G.state.probe,Oe.directionalLights.value=G.state.directional,Oe.directionalLightShadows.value=G.state.directionalShadow,Oe.spotLights.value=G.state.spot,Oe.spotLightShadows.value=G.state.spotShadow,Oe.rectAreaLights.value=G.state.rectArea,Oe.ltc_1.value=G.state.rectAreaLTC1,Oe.ltc_2.value=G.state.rectAreaLTC2,Oe.pointLights.value=G.state.point,Oe.pointLightShadows.value=G.state.pointShadow,Oe.hemisphereLights.value=G.state.hemi,Oe.directionalShadowMap.value=G.state.directionalShadowMap,Oe.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Oe.spotShadowMap.value=G.state.spotShadowMap,Oe.spotLightMatrix.value=G.state.spotLightMatrix,Oe.spotLightMap.value=G.state.spotLightMap,Oe.pointShadowMap.value=G.state.pointShadowMap,Oe.pointShadowMatrix.value=G.state.pointShadowMatrix),ee.currentProgram=Ge,ee.uniformsList=null,Ge}function pu(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=Go.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function mu(A,k){const J=Q.get(A);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Gp(A,k,J,ee,G){k.isScene!==!0&&(k=fe),ae.resetTextureUnits();const _e=k.fog,Ae=ee.isMeshStandardMaterial?k.environment:null,Ne=D===null?S.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Kr,Ie=(ee.isMeshStandardMaterial?Te:le).get(ee.envMap||Ae),He=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ge=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!J.morphAttributes.position,et=!!J.morphAttributes.normal,ct=!!J.morphAttributes.color;let bt=Pi;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(bt=S.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=_t!==void 0?_t.length:0,Be=Q.get(ee),vt=p.state.lights;if(ne===!0&&(me===!0||A!==M)){const Gt=A===M&&ee.id===y;he.setState(ee,A,Gt)}let rt=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vt.state.version||Be.outputColorSpace!==Ne||G.isBatchedMesh&&Be.batching===!1||!G.isBatchedMesh&&Be.batching===!0||G.isBatchedMesh&&Be.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Be.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Be.instancing===!1||!G.isInstancedMesh&&Be.instancing===!0||G.isSkinnedMesh&&Be.skinning===!1||!G.isSkinnedMesh&&Be.skinning===!0||G.isInstancedMesh&&Be.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Be.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Be.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Be.instancingMorph===!1&&G.morphTexture!==null||Be.envMap!==Ie||ee.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==et||Be.morphColors!==ct||Be.toneMapping!==bt||Be.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,Be.__version=ee.version);let tn=Be.currentProgram;rt===!0&&(tn=Js(ee,k,G));let ur=!1,nn=!1,ns=!1;const xt=tn.getUniforms(),un=Be.uniforms;if(W.useProgram(tn.program)&&(ur=!0,nn=!0,ns=!0),ee.id!==y&&(y=ee.id,nn=!0),ur||M!==A){W.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),xt.setValue(_,"projectionMatrix",A.projectionMatrix),xt.setValue(_,"viewMatrix",A.matrixWorldInverse);const Qt=xt.map.cameraPosition;Qt!==void 0&&Qt.setValue(_,se.setFromMatrixPosition(A.matrixWorld)),te.logarithmicDepthBuffer&&xt.setValue(_,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&xt.setValue(_,"isOrthographic",A.isOrthographicCamera===!0),M!==A&&(M=A,nn=!0,ns=!0)}if(G.isSkinnedMesh){xt.setOptional(_,G,"bindMatrix"),xt.setOptional(_,G,"bindMatrixInverse");const Gt=G.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),xt.setValue(_,"boneTexture",Gt.boneTexture,ae))}G.isBatchedMesh&&(xt.setOptional(_,G,"batchingTexture"),xt.setValue(_,"batchingTexture",G._matricesTexture,ae),xt.setOptional(_,G,"batchingIdTexture"),xt.setValue(_,"batchingIdTexture",G._indirectTexture,ae),xt.setOptional(_,G,"batchingColorTexture"),G._colorsTexture!==null&&xt.setValue(_,"batchingColorTexture",G._colorsTexture,ae));const fn=J.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&pe.update(G,J,tn),(nn||Be.receiveShadow!==G.receiveShadow)&&(Be.receiveShadow=G.receiveShadow,xt.setValue(_,"receiveShadow",G.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(un.envMap.value=Ie,un.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&k.environment!==null&&(un.envMapIntensity.value=k.environmentIntensity),nn&&(xt.setValue(_,"toneMappingExposure",S.toneMappingExposure),Be.needsLights&&Wp(un,ns),_e&&ee.fog===!0&&oe.refreshFogUniforms(un,_e),oe.refreshMaterialUniforms(un,ee,L,z,p.state.transmissionRenderTarget[A.id]),Go.upload(_,pu(Be),un,ae)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Go.upload(_,pu(Be),un,ae),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&xt.setValue(_,"center",G.center),xt.setValue(_,"modelViewMatrix",G.modelViewMatrix),xt.setValue(_,"normalMatrix",G.normalMatrix),xt.setValue(_,"modelMatrix",G.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Gt=ee.uniformsGroups;for(let Qt=0,Aa=Gt.length;Qt<Aa;Qt++){const Bi=Gt[Qt];$e.update(Bi,tn),$e.bind(Bi,tn)}}return tn}function Wp(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function Xp(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(A,k,J){const ee=Q.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Q.get(A.texture).__webglTexture=k,Q.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,k){const J=Q.get(A);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const qp=_.createFramebuffer();this.setRenderTarget=function(A,k=0,J=0){D=A,P=k,I=J;let ee=!0,G=null,_e=!1,Ae=!1;if(A){const Ie=Q.get(A);if(Ie.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(_.FRAMEBUFFER,null),ee=!1;else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(A);else if(Ie.__hasExternalTextures)ae.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Oe=A.depthTexture;if(Ie.__boundDepthTexture!==Oe){if(Oe!==null&&Q.has(Oe)&&(A.width!==Oe.image.width||A.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(A)}}const He=A.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ge=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[k])?G=Ge[k][J]:G=Ge[k],_e=!0):A.samples>0&&ae.useMultisampledRTT(A)===!1?G=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?G=Ge[J]:G=Ge,R.copy(A.viewport),B.copy(A.scissor),V=A.scissorTest}else R.copy(ve).multiplyScalar(L).floor(),B.copy(be).multiplyScalar(L).floor(),V=je;if(J!==0&&(G=qp),W.bindFramebuffer(_.FRAMEBUFFER,G)&&ee&&W.drawBuffers(A,G),W.viewport(R),W.scissor(B),W.setScissorTest(V),_e){const Ie=Q.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,J)}else if(Ae){const Ie=k;for(let He=0;He<A.textures.length;He++){const Ge=Q.get(A.textures[He]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+He,Ge.__webglTexture,J,Ie)}}else if(A!==null&&J!==0){const Ie=Q.get(A.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ie.__webglTexture,J)}y=-1},this.readRenderTargetPixels=function(A,k,J,ee,G,_e,Ae,Ne=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){W.bindFramebuffer(_.FRAMEBUFFER,Ie);try{const He=A.textures[Ne],Ge=He.format,Oe=He.type;if(!te.textureFormatReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-ee&&J>=0&&J<=A.height-G&&(A.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne),_.readPixels(k,J,ee,G,Pe.convert(Ge),Pe.convert(Oe),_e))}finally{const He=D!==null?Q.get(D).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,k,J,ee,G,_e,Ae,Ne=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(k>=0&&k<=A.width-ee&&J>=0&&J<=A.height-G){W.bindFramebuffer(_.FRAMEBUFFER,Ie);const He=A.textures[Ne],Ge=He.format,Oe=He.type;if(!te.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,et),_.bufferData(_.PIXEL_PACK_BUFFER,_e.byteLength,_.STREAM_READ),A.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ne),_.readPixels(k,J,ee,G,Pe.convert(Ge),Pe.convert(Oe),0);const ct=D!==null?Q.get(D).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,ct);const bt=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await $v(_,bt,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,et),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,_e),_.deleteBuffer(et),_.deleteSync(bt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,k=null,J=0){const ee=Math.pow(2,-J),G=Math.floor(A.image.width*ee),_e=Math.floor(A.image.height*ee),Ae=k!==null?k.x:0,Ne=k!==null?k.y:0;ae.setTexture2D(A,0),_.copyTexSubImage2D(_.TEXTURE_2D,J,0,0,Ae,Ne,G,_e),W.unbindTexture()};const $p=_.createFramebuffer(),Yp=_.createFramebuffer();this.copyTextureToTexture=function(A,k,J=null,ee=null,G=0,_e=null){_e===null&&(G!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=G,G=0):_e=0);let Ae,Ne,Ie,He,Ge,Oe,et,ct,bt;const _t=A.isCompressedTexture?A.mipmaps[_e]:A.image;if(J!==null)Ae=J.max.x-J.min.x,Ne=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,Ge=J.min.y,Oe=J.isBox3?J.min.z:0;else{const fn=Math.pow(2,-G);Ae=Math.floor(_t.width*fn),Ne=Math.floor(_t.height*fn),A.isDataArrayTexture?Ie=_t.depth:A.isData3DTexture?Ie=Math.floor(_t.depth*fn):Ie=1,He=0,Ge=0,Oe=0}ee!==null?(et=ee.x,ct=ee.y,bt=ee.z):(et=0,ct=0,bt=0);const ht=Pe.convert(k.format),Be=Pe.convert(k.type);let vt;k.isData3DTexture?(ae.setTexture3D(k,0),vt=_.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(ae.setTexture2DArray(k,0),vt=_.TEXTURE_2D_ARRAY):(ae.setTexture2D(k,0),vt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=_.getParameter(_.UNPACK_ROW_LENGTH),tn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),ur=_.getParameter(_.UNPACK_SKIP_PIXELS),nn=_.getParameter(_.UNPACK_SKIP_ROWS),ns=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,He),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ge),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Oe);const xt=A.isDataArrayTexture||A.isData3DTexture,un=k.isDataArrayTexture||k.isData3DTexture;if(A.isDepthTexture){const fn=Q.get(A),Gt=Q.get(k),Qt=Q.get(fn.__renderTarget),Aa=Q.get(Gt.__renderTarget);W.bindFramebuffer(_.READ_FRAMEBUFFER,Qt.__webglFramebuffer),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Bi=0;Bi<Ie;Bi++)xt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,G,Oe+Bi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(k).__webglTexture,_e,bt+Bi)),_.blitFramebuffer(He,Ge,Ae,Ne,et,ct,Ae,Ne,_.DEPTH_BUFFER_BIT,_.NEAREST);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(G!==0||A.isRenderTargetTexture||Q.has(A)){const fn=Q.get(A),Gt=Q.get(k);W.bindFramebuffer(_.READ_FRAMEBUFFER,$p),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,Yp);for(let Qt=0;Qt<Ie;Qt++)xt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,fn.__webglTexture,G,Oe+Qt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,fn.__webglTexture,G),un?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Gt.__webglTexture,_e,bt+Qt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Gt.__webglTexture,_e),G!==0?_.blitFramebuffer(He,Ge,Ae,Ne,et,ct,Ae,Ne,_.COLOR_BUFFER_BIT,_.NEAREST):un?_.copyTexSubImage3D(vt,_e,et,ct,bt+Qt,He,Ge,Ae,Ne):_.copyTexSubImage2D(vt,_e,et,ct,He,Ge,Ae,Ne);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else un?A.isDataTexture||A.isData3DTexture?_.texSubImage3D(vt,_e,et,ct,bt,Ae,Ne,Ie,ht,Be,_t.data):k.isCompressedArrayTexture?_.compressedTexSubImage3D(vt,_e,et,ct,bt,Ae,Ne,Ie,ht,_t.data):_.texSubImage3D(vt,_e,et,ct,bt,Ae,Ne,Ie,ht,Be,_t):A.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,_e,et,ct,Ae,Ne,ht,Be,_t.data):A.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,_e,et,ct,_t.width,_t.height,ht,_t.data):_.texSubImage2D(_.TEXTURE_2D,_e,et,ct,Ae,Ne,ht,Be,_t);_.pixelStorei(_.UNPACK_ROW_LENGTH,rt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,tn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,ur),_.pixelStorei(_.UNPACK_SKIP_ROWS,nn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,ns),_e===0&&k.generateMipmaps&&_.generateMipmap(vt),W.unbindTexture()},this.copyTextureToTexture3D=function(A,k,J=null,ee=null,G=0){return kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,J,ee,G)},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&ae.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ae.setTextureCube(A,0):A.isData3DTexture?ae.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ae.setTexture2DArray(A,0):ae.setTexture2D(A,0),W.unbindTexture()},this.resetState=function(){P=0,I=0,D=null,W.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const cE=xn({__name:"LogoThreeFx",props:{sparkleCount:{},padding:{}},setup(t){const e=t,n=yt(null),i=yt(null);let r=null;function s(){const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(!u)return new Ut;const f=u.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.15,"rgba(255,255,255,0.8)"),f.addColorStop(.4,"rgba(255,255,255,0.3)"),f.addColorStop(.7,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,128,128);const d=new Vr(c);return d.minFilter=Vt,d.magFilter=Vt,d}function o(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Ut;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.12);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.5,"rgba(255,255,255,0.7)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.12,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";const g=(m,p,w)=>{const b=u.createLinearGradient(-m,0,m,0);b.addColorStop(0,"rgba(255,255,255,0)"),b.addColorStop(.35,`rgba(255,255,255,${w*.4})`),b.addColorStop(.5,`rgba(255,255,255,${w})`),b.addColorStop(.65,`rgba(255,255,255,${w*.4})`),b.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=b,u.beginPath(),u.moveTo(-m,0),u.lineTo(0,-p),u.lineTo(m,0),u.lineTo(0,p),u.closePath(),u.fill()};g(256*.48,256*.025,.95),u.rotate(Math.PI/2),g(256*.48,256*.025,.95),u.rotate(Math.PI/4),g(256*.32,256*.015,.6),u.rotate(Math.PI/2),g(256*.32,256*.015,.6),u.restore();const v=new Vr(c);return v.minFilter=Vt,v.magFilter=Vt,v}function a(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Ut;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.1);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.6,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.1,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";for(let v=0;v<6;v++){const m=v*Math.PI/3;u.save(),u.rotate(m);const p=u.createLinearGradient(0,0,256*.42,0);p.addColorStop(0,"rgba(255,255,255,0.9)"),p.addColorStop(.25,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.moveTo(0,-256*.018),u.lineTo(256*.42,0),u.lineTo(0,256*.018),u.closePath(),u.fill(),u.restore()}u.restore();const g=new Vr(c);return g.minFilter=Vt,g.magFilter=Vt,g}return Vn(async()=>{if(!n.value||!i.value)return;const l=i.value,c=new Hp({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0});c.setClearColor(0,0),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const u=new Cp,f=new Up(-1,1,1,-1,.1,10);f.position.z=2;const d=()=>{const H=e.padding??0,j=n.value?.clientWidth??1,q=n.value?.clientHeight??1,z=j+H*2,L=q+H*2;c.setSize(z,L,!1),f.left=-z/2,f.right=z/2,f.top=L/2,f.bottom=-L/2,f.updateProjectionMatrix()},h=new ResizeObserver(()=>d());h.observe(n.value),d();const g=s(),v=o(),m=a(),p=new ms;u.add(p);const w=e.sparkleCount??60,b=[],S=(H,j)=>H+Math.random()*(j-H),C=H=>{let j,q,z;const L=Math.random();let ie;switch(L<.45?ie=new Xe().setHSL(.11+Math.random()*.04,.85,.85):L<.85?ie=new Xe().setHSL(.14,.2,.98):ie=new Xe().setHSL(.58,.5,.92),H){case"fourStar":j=v,q=S(35,70),z=S(.5,1);break;case"sixStar":j=m,q=S(28,50),z=S(.6,1.1);break;default:j=g,q=S(10,28),z=S(1,2.2)}const ue=new Pp({map:j,transparent:!0,depthWrite:!1,blending:Ns,color:ie,opacity:0,rotation:S(0,Math.PI*2)}),ve=new xx(ue);return ve.scale.set(q,q,1),p.add(ve),{sprite:ve,type:H,speed:z,phase:S(0,Math.PI*2),baseScale:q,rotationSpeed:H==="soft"?0:S(-.2,.2),baseX:0,baseY:0,floatRadius:S(1,5),floatSpeed:S(.4,1.2)}},P=()=>{const H=e.padding??0,j=(n.value?.clientWidth??1)+H*2,q=(n.value?.clientHeight??1)+H*2;for(const z of b){if(z.type==="fourStar"||z.type==="sixStar"){const ie=S(0,Math.PI*2),ue=j*S(.3,.48),ve=q*S(.25,.45),be=Math.cos(ie)*ue,je=Math.sin(ie)*ve;z.baseX=be,z.baseY=je}else{const ie=S(-j*.42,j*.42),ue=S(-q*.38,q*.38);z.baseX=ie,z.baseY=ue}z.sprite.position.set(z.baseX,z.baseY,0)}},I=Math.floor(w*.15),D=Math.floor(w*.1),y=w-I-D;for(let H=0;H<I;H++)b.push(C("fourStar"));for(let H=0;H<D;H++)b.push(C("sixStar"));for(let H=0;H<y;H++)b.push(C("soft"));P();const M=new ResizeObserver(()=>{d(),P()});M.observe(n.value);let R=0;const B=new Ax,V=()=>{const H=B.getElapsedTime();for(const j of b){const q=Math.sin(H*j.speed+j.phase),z=Math.sin(H*j.speed*1.7+j.phase*.5),L=.5+.35*q+.15*z,ie=Math.pow(Math.max(0,L),2.2),ue=j.type==="soft"?.15:.08,ve=j.type==="soft"?.75:.92,be=j.sprite.material;be.opacity=ue+(ve-ue)*ie;const je=j.type==="soft"?.75+.4*ie:.65+.5*ie,ke=j.baseScale*je;j.sprite.scale.set(ke,ke,1),j.rotationSpeed!==0&&(be.rotation+=j.rotationSpeed*.016);const ne=Math.sin(H*j.floatSpeed+j.phase)*j.floatRadius,me=Math.cos(H*j.floatSpeed*.8+j.phase*1.3)*j.floatRadius;j.sprite.position.set(j.baseX+ne,j.baseY+me,0)}c.render(u,f),R=window.requestAnimationFrame(V)};R=window.requestAnimationFrame(V),r=()=>{window.cancelAnimationFrame(R),h.disconnect(),M.disconnect(),c.dispose(),g.dispose(),v.dispose(),m.dispose(),p.clear()}}),Di(()=>{r?.(),r=null}),(l,c)=>(Ve(),Je("div",{ref_key:"containerEl",ref:n,class:"absolute inset-0 overflow-visible"},[$("canvas",{ref_key:"canvasEl",ref:i,class:"pointer-events-none absolute",style:Jr({left:`-${e.padding??0}px`,top:`-${e.padding??0}px`,width:`calc(100% + ${(e.padding??0)*2}px)`,height:`calc(100% + ${(e.padding??0)*2}px)`})},null,4)],512))}}),uE={class:"relative min-h-screen overflow-hidden bg-slate-950"},fE={class:"absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block","aria-hidden":"true"},dE=["src"],hE={class:"relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24",style:{"padding-bottom":"calc(2rem + env(safe-area-inset-bottom, 0px))"}},pE={class:"w-full max-w-md md:max-w-md"},mE={class:"relative mb-6 inline-block md:mb-10"},gE=["src"],_E={class:"space-y-2.5 md:space-y-3"},vE=["disabled"],xE={class:"relative flex items-center justify-between"},yE={class:"text-base md:text-lg"},SE={key:0,class:"ml-2 text-sm font-normal text-white/50"},bE={key:0,class:"text-xs text-white/40"},ME={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},EE={class:"space-y-2"},TE=["onClick"],AE={class:"flex items-center justify-between"},wE={class:"flex items-center gap-2"},RE={key:0,class:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"},CE={class:"font-semibold text-white"},PE=xn({__name:"StartView",setup(t){const e=Qc(),n=sp(),i=op(),r="/backend-camp-game/";Vn(()=>{n.loadFromStorage(),i.loadFromStorage()});const s=We(()=>!!n.name),o=We(()=>Math.max(...Object.keys(ia).map(Number))),a=We(()=>Math.min(i.currentChapter,o.value)),l=We(()=>i.currentChapter>o.value);function c(){i.reset(),e.push({name:"chapter",params:{id:"1"}})}function u(){const w=l.value?o.value:i.currentChapter;e.push({name:"chapter",params:{id:String(w)}})}function f(){n.clear(),i.reset()}const d=yt(!1),h=We(()=>Object.values(ia).map(w=>({id:w.id,title:w.title,completed:i.currentChapter>w.id})));function g(){d.value=!0}function v(){d.value=!1}function m(w){i.setCurrentChapter(w),i.setNodeIndex(w,0),d.value=!1,e.push({name:"chapter",params:{id:String(w)}})}function p(w){if(d.value&&w.key==="Escape"){v();return}w.key==="Enter"&&c()}return Vn(()=>window.addEventListener("keydown",p)),Di(()=>window.removeEventListener("keydown",p)),(w,b)=>(Ve(),Je("div",uE,[$("div",{class:"absolute inset-0 animate-bgSlowZoom bg-cover bg-center saturate-95",style:Jr({backgroundImage:`url(${on(r)}images/scene/normal.png)`})},null,4),b[12]||(b[12]=$("div",{class:"absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]"},null,-1)),b[13]||(b[13]=$("div",{class:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40"},null,-1)),$("div",fE,[$("img",{class:"pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100",src:`${on(r)}images/coach/normal.png`,alt:"教練"},null,8,dE)]),$("main",hE,[$("div",pE,[$("div",mE,[$("img",{src:`${on(r)}images/logo.png`,alt:"新人後端生存指南",class:"block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]",draggable:"false"},null,8,gE),Pt(cE,{class:"pointer-events-none absolute inset-0 z-10",sparkleCount:50,padding:40}),b[0]||(b[0]=$("div",{class:"pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"},null,-1))]),$("nav",_E,[$("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 md:px-5 md:py-4",type:"button",onClick:c},[...b[1]||(b[1]=[Qo('<span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600" data-v-128a9681></span><span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" data-v-128a9681></span><span class="relative flex items-center justify-between" data-v-128a9681><span class="text-base md:text-lg" data-v-128a9681>開始遊戲</span><span class="hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block" data-v-128a9681>Enter</span></span>',3)])]),$("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4",type:"button",disabled:!s.value,onClick:u},[b[3]||(b[3]=$("span",{class:"absolute left-0 top-0 h-full w-1 bg-white/30"},null,-1)),$("span",xE,[$("span",yE,[b[2]||(b[2]=oi(" 繼續遊戲 ",-1)),s.value?(Ve(),Je("span",SE,Qe(on(n).name),1)):kt("",!0)]),s.value?(Ve(),Je("span",bE,Qe(l.value?"已通關":`Day ${a.value}`),1)):kt("",!0)])],8,vE),$("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5",type:"button",onClick:g},[...b[4]||(b[4]=[$("span",{class:"absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),$("span",{class:"relative flex items-center justify-between"},[$("span",{class:"text-sm md:text-base"},"章節選擇"),$("span",{class:"text-xs text-white/30"},"跳關")],-1)])]),$("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5",type:"button",onClick:f},[...b[5]||(b[5]=[$("span",{class:"absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),$("span",{class:"relative flex items-center justify-between"},[$("span",{class:"text-sm md:text-base"},"刪除存檔"),$("span",{class:"hidden text-xs text-white/30 sm:inline-block"},"⌫")],-1)])])]),b[6]||(b[6]=$("p",{class:"mt-6 text-center text-xs text-white/30 md:mt-8 md:text-left"}," v1.0 · 2025 後端新手生存指南 ",-1))])]),(Ve(),Fn(qm,{to:"body"},[Pt(t_,{name:"fade"},{default:nh(()=>[d.value?(Ve(),Je("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:A_(v,["self"])},[$("div",ME,[$("div",{class:"mb-4 flex items-center justify-between"},[b[8]||(b[8]=$("h2",{class:"text-lg font-bold text-white"},"章節選擇",-1)),$("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:v},[...b[7]||(b[7]=[$("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[$("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),$("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),b[10]||(b[10]=$("p",{class:"mb-4 text-sm text-white/50"},"選擇要跳轉的章節，進度將從該章節開始重新計算。",-1)),$("div",EE,[(Ve(!0),Je(Tt,null,Is(h.value,S=>(Ve(),Je("button",{key:S.id,class:An(["group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800",S.completed?"border-emerald-500/30 bg-emerald-900/20":"border-white/10 bg-slate-800/50"]),onClick:C=>m(S.id)},[$("div",AE,[$("span",wE,[S.completed?(Ve(),Je("span",RE,[...b[9]||(b[9]=[$("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[$("polyline",{points:"20 6 9 17 4 12"})],-1)])])):kt("",!0),$("span",CE,Qe(S.title),1)]),$("span",{class:An(["text-xs",S.completed?"text-emerald-400":"text-white/40"])},Qe(S.completed?"已通關":`Day ${S.id}`),3)])],10,TE))),128))]),b[11]||(b[11]=$("p",{class:"mt-4 text-center text-xs text-white/30"},"按 ESC 關閉",-1))])])):kt("",!0)]),_:1})]))]))}}),IE=qh(PE,[["__scopeId","data-v-128a9681"]]),DE={class:"absolute inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},LE={class:"w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"},UE={class:"font-extrabold text-slate-900"},NE=["placeholder"],FE={class:"mt-3 flex justify-end gap-2.5"},OE=["disabled"],BE=xn({__name:"NameInputModal",props:{title:{},placeholder:{},initialValue:{}},emits:["submit","cancel"],setup(t,{emit:e}){const n=t,i=e,r=yt(n.initialValue??"");Gm(()=>{n.initialValue!=null&&!r.value&&(r.value=n.initialValue)});const s=We(()=>r.value.trim().length>0);function o(){s.value&&i("submit",r.value.trim())}return(a,l)=>(Ve(),Je("div",DE,[$("div",LE,[$("div",UE,Qe(t.title),1),ih($("input",{class:"mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20",type:"text",placeholder:t.placeholder??"輸入名字...","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),onKeydown:R_(o,["enter"])},null,40,NE),[[S_,r.value]]),$("div",FE,[$("button",{class:"rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]",type:"button",onClick:l[1]||(l[1]=c=>a.$emit("cancel"))}," 取消 "),$("button",{class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",type:"button",disabled:!s.value,onClick:o}," 確定 ",8,OE)])])]))}}),zE={class:"absolute inset-0 z-60 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},kE={class:"grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"},HE={class:"flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5"},VE={class:"font-black text-slate-900"},GE={class:"mt-0.5 font-extrabold text-slate-700"},WE={key:0,class:"mt-1 text-xs font-semibold text-slate-600"},XE={class:"flex items-center gap-2.5"},qE={class:"font-extrabold text-slate-700"},$E=["disabled"],YE={class:"grid grid-cols-1 gap-3.5 p-3.5 md:grid-cols-[1.1fr_1fr]"},jE={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},KE={class:"mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3"},ZE={class:"flex justify-between gap-2.5"},JE={class:"font-mono text-sm font-black text-slate-900"},QE={class:"text-sm font-extrabold text-slate-500"},eT={class:"mt-1.5 font-black text-slate-700"},tT={class:"mt-3"},nT={class:"grid gap-2"},iT={class:"font-mono text-xs font-extrabold text-slate-700"},rT={class:"mt-2.5 text-xl font-black text-slate-900"},sT={class:"mt-2.5 font-semibold leading-7 text-slate-700"},oT={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},aT={class:"font-mono text-sm font-black text-slate-900/75"},lT={class:"mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"},cT={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3"},uT=["disabled"],fT={class:"flex justify-center gap-2"},dT=["disabled"],hT=xn({__name:"SlidesModal",props:{title:{},slides:{},mustFinish:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=yt(0),s=We(()=>n.slides[r.value]),o=We(()=>r.value>=n.slides.length-1);function a(){r.value=Math.max(0,r.value-1)}function l(){r.value=Math.min(n.slides.length-1,r.value+1)}function c(){n.mustFinish&&!o.value||i("close")}return(u,f)=>(Ve(),Je("div",zE,[$("div",kE,[$("header",HE,[$("div",null,[$("div",VE,Qe(t.title),1),$("div",GE,Qe(s.value.title),1),s.value.subtitle?(Ve(),Je("div",WE,Qe(s.value.subtitle),1)):kt("",!0)]),$("div",XE,[$("div",qE,"步驟 "+Qe(r.value+1)+"/"+Qe(t.slides.length),1),$("button",{class:"rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:t.mustFinish&&!o.value,onClick:c}," 關閉 ",8,$E)])]),$("div",YE,[$("section",null,[$("div",jE,[f[2]||(f[2]=$("div",{class:"inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900"}," 互動式簡報 ",-1)),s.value.commit?(Ve(),Je(Tt,{key:0},[$("div",KE,[$("div",ZE,[$("div",JE,Qe(s.value.commit.sha),1),$("div",QE,Qe(s.value.commit.when),1)]),$("div",eT,Qe(s.value.commit.message),1)]),$("div",tT,[f[0]||(f[0]=$("div",{class:"mb-2 font-black text-slate-900"},"本次變更檔案",-1)),$("div",nT,[(Ve(!0),Je(Tt,null,Is(s.value.commit.files,d=>(Ve(),Je("div",{key:d.path,class:"flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"},[$("span",{class:An(["grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black",d.change==="A"?"bg-emerald-500/15 text-emerald-800":d.change==="M"?"bg-blue-500/15 text-blue-700":"bg-rose-500/15 text-rose-800"])},Qe(d.change),3),$("span",iT,Qe(d.path),1)]))),128))])])],64)):(Ve(),Je(Tt,{key:1},[$("div",rT,Qe(s.value.title),1),$("div",sT,Qe(s.value.body),1),f[1]||(f[1]=Qo('<div class="mt-3 flex flex-wrap gap-2"><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">版本控制</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">Commit 更新點</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">看懂改動</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">回到安全點</span></div>',1))],64))])]),$("section",null,[$("div",oT,[$("div",aT,Qe(s.value.commit?"changes.diff":"notes.txt"),1),$("pre",lT,[$("code",null,Qe(s.value.commit?s.value.commit.diffPreview:s.value.body??""),1)])])])]),$("footer",cT,[$("button",{class:"justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:r.value===0,onClick:a}," 上一部 ",8,uT),$("div",fT,[(Ve(!0),Je(Tt,null,Is(t.slides.length,d=>(Ve(),Je("span",{key:d,class:An(["h-2 w-2 rounded-full bg-slate-900/20",d-1===r.value?"bg-amber-500":""])},null,2))),128))]),$("button",{class:"justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:o.value,onClick:l}," 下一部 ",8,dT)])])]))}}),pT={class:"fixed inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},mT={class:"flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95"},gT={class:"flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5"},_T={class:"font-black text-slate-900"},vT={class:"text-sm font-extrabold text-slate-500"},xT={class:"flex-1 overflow-y-auto px-4 py-4"},yT={class:"text-lg font-black text-slate-900"},ST={class:"mt-3 grid gap-2.5"},bT=["value","disabled"],MT={class:"font-extrabold text-slate-700"},ET={class:"font-black text-slate-900"},TT={class:"mt-1.5 font-bold leading-7 text-slate-700"},AT={class:"flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3"},wT={class:"flex gap-2.5"},RT=["disabled"],CT=xn({__name:"QuizModal",props:{title:{},questions:{}},emits:["done","cancel"],setup(t,{emit:e}){const n=t,i=e,r=yt(0),s=yt(null),o=yt(!1),a=yt(0),l=We(()=>n.questions[r.value]),c=We(()=>n.questions.length),u=We(()=>r.value>=n.questions.length-1),f=We(()=>o.value&&s.value===l.value.correctOptionId);function d(){s.value&&(o.value||(o.value=!0,s.value===l.value.correctOptionId&&(a.value+=1)))}function h(){s.value=null,o.value=!1}function g(){if(o.value){if(u.value){i("done",{correctCount:a.value,total:c.value});return}r.value+=1,s.value=null,o.value=!1}}return(v,m)=>(Ve(),Je("div",pT,[$("div",mT,[$("header",gT,[$("div",_T,Qe(t.title),1),$("div",vT,"第 "+Qe(r.value+1)+"/"+Qe(c.value)+" 題",1)]),$("div",xT,[$("div",yT,Qe(l.value.prompt),1),$("div",ST,[(Ve(!0),Je(Tt,null,Is(l.value.options,p=>(Ve(),Je("label",{key:p.id,class:An(["flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3",o.value?"cursor-default opacity-90":"hover:bg-white"])},[ih($("input",{type:"radio",name:"quiz",value:p.id,"onUpdate:modelValue":m[0]||(m[0]=w=>s.value=w),disabled:o.value},null,8,bT),[[b_,s.value]]),$("span",MT,Qe(p.label),1)],2))),128))]),o.value?(Ve(),Je("div",{key:0,class:An(["mt-3 rounded-2xl border px-3 py-3",f.value?"border-emerald-500/25 bg-emerald-500/10":"border-amber-500/25 bg-amber-500/10"])},[$("div",ET,Qe(f.value?"答對了":"差一點"),1),$("div",TT,Qe(l.value.explanation),1)],2)):kt("",!0)]),$("footer",AT,[$("button",{class:"rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]",type:"button",onClick:m[1]||(m[1]=p=>i("cancel"))}," 取消測驗 "),$("div",wT,[o.value?f.value?(Ve(),Je("button",{key:1,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:g},Qe(u.value?"完成":"下一題"),1)):(Ve(),Je("button",{key:2,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:h}," 重新作答 ")):(Ve(),Je("button",{key:0,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55",type:"button",disabled:!s.value,onClick:d}," 提交 ",8,RT))])])])]))}}),PT={class:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90",role:"dialog","aria-modal":"true"},IT={class:"mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300"},DT={class:"mb-8 text-xl font-bold text-white/90"},LT={class:"text-amber-400"},UT=xn({__name:"CelebrationModal",props:{playerName:{},chapterTitle:{}},emits:["close"],setup(t,{emit:e}){const n=e,i=yt(null),r=yt(null),s=yt(!1);let o=null;function a(f){const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d"),v=g.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return v.addColorStop(0,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 1)`),v.addColorStop(.3,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.8)`),v.addColorStop(.6,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.3)`),v.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=v,g.fillRect(0,0,64,64),new Vr(h)}function l(){const d=document.createElement("canvas");d.width=64,d.height=64;const h=d.getContext("2d");h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,64,64),h.fillStyle="#FFD700",h.beginPath();const g=64/2,v=64/2,m=4,p=64/2-2,w=64/6;for(let b=0;b<m*2;b++){const S=b%2===0?p:w,C=b*Math.PI/m-Math.PI/2,P=g+Math.cos(C)*S,I=v+Math.sin(C)*S;b===0?h.moveTo(P,I):h.lineTo(P,I)}return h.closePath(),h.fill(),h.shadowColor="#FFD700",h.shadowBlur=10,h.fill(),new Vr(d)}function c(f){const d=document.createElement("canvas");d.width=16,d.height=32;const h=d.getContext("2d");return h.fillStyle=`rgb(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)})`,h.fillRect(0,0,16,32),new Vr(d)}function u(){if(!r.value||!i.value)return;const f=new Hp({canvas:r.value,alpha:!0,antialias:!0});f.setClearColor(0,0),f.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const d=i.value.clientWidth,h=i.value.clientHeight;f.setSize(d,h,!1);const g=new Cp,v=new mn(60,d/h,.1,1e3);v.position.z=500;const m=[new Xe(16739179),new Xe(16767293),new Xe(7064439),new Xe(5084927),new Xe(13218303),new Xe(16752453),new Xe(16196997)],p=[];function w(z,L){const ie=m[Math.floor(Math.random()*m.length)],ue=80+Math.floor(Math.random()*60),ve=new Pn,be=new Float32Array(ue*3),je=new Float32Array(ue),ke=[];for(let se=0;se<ue;se++){be[se*3]=z,be[se*3+1]=L,be[se*3+2]=0,je[se]=8+Math.random()*12;const re=Math.random()*Math.PI*2,fe=Math.acos(2*Math.random()-1),De=3+Math.random()*5;ke.push(new Z(Math.sin(fe)*Math.cos(re)*De,Math.sin(fe)*Math.sin(re)*De,Math.cos(fe)*De*.3))}ve.setAttribute("position",new Zt(be,3)),ve.setAttribute("size",new Zt(je,1));const ne=new wc({map:a(ie),size:20,transparent:!0,blending:Ns,depthWrite:!1,vertexColors:!1}),me=new Yf(ve,ne);g.add(me);const N=50+Math.random()*150;p.push({particles:me,velocities:ke,life:0,maxLife:120+Math.random()*60,phase:"rising",riseVelocity:new Z(0,8+Math.random()*4,0),targetY:N})}const b=30,S=new Pn,C=new Float32Array(b*3),P=new Float32Array(b),I=[];for(let z=0;z<b;z++){const L=(Math.random()-.5)*d*.9,ie=(Math.random()-.5)*h*.7;C[z*3]=L,C[z*3+1]=ie,C[z*3+2]=-50,P[z]=15+Math.random()*25,I.push({baseX:L,baseY:ie,floatSpeed:.5+Math.random()*1,floatRadius:5+Math.random()*15,rotateSpeed:.02+Math.random()*.03,twinkleSpeed:2+Math.random()*3,twinklePhase:Math.random()*Math.PI*2})}S.setAttribute("position",new Zt(C,3)),S.setAttribute("size",new Zt(P,1));const D=new wc({map:l(),size:30,transparent:!0,blending:Ns,depthWrite:!1}),y=new Yf(S,D);g.add(y);const M=60,R=[],B=[new Xe(16739179),new Xe(16767293),new Xe(7064439),new Xe(5084927),new Xe(16196997),new Xe(16752453)];for(let z=0;z<M;z++){const L=B[Math.floor(Math.random()*B.length)],ie=new Ks(8+Math.random()*8,16+Math.random()*16),ue=new lu({map:c(L),side:On,transparent:!0,opacity:.9}),ve=new kn(ie,ue);ve.position.set((Math.random()-.5)*d,h/2+Math.random()*200,(Math.random()-.5)*100),ve.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(ve),R.push({mesh:ve,velocity:new Z((Math.random()-.5)*2,-2-Math.random()*3,(Math.random()-.5)*1),rotationSpeed:new Z((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1),swayPhase:Math.random()*Math.PI*2,swaySpeed:2+Math.random()*2})}let V=0,H;setTimeout(()=>w(-100,-h/2-50),100),setTimeout(()=>w(100,-h/2-50),400),setTimeout(()=>w(0,-h/2-50),700),setTimeout(()=>{s.value=!0},800);function j(){H=requestAnimationFrame(j),V++;for(let L=p.length-1;L>=0;L--){const ie=p[L],ue=ie.particles.geometry.attributes.position.array,ve=ue.length/3;if(ie.phase==="rising"){for(let be=0;be<ve;be++)ue[be*3+1]+=ie.riseVelocity.y;ue[1]>=ie.targetY&&(ie.phase="exploding")}else{ie.life++;const be=ie.life/ie.maxLife;for(let ke=0;ke<ve;ke++){const ne=ie.velocities[ke];ue[ke*3]+=ne.x*(1-be*.5),ue[ke*3+1]+=ne.y*(1-be*.5)-.15,ue[ke*3+2]+=ne.z*(1-be*.5)}const je=ie.particles.material;je.opacity=1-be,ie.life>=ie.maxLife&&(g.remove(ie.particles),ie.particles.geometry.dispose(),ie.particles.material.dispose(),p.splice(L,1))}ie.particles.geometry.attributes.position.needsUpdate=!0}if(V%90===0&&p.length<5){const L=(Math.random()-.5)*d*.6;w(L,-h/2-50)}const z=y.geometry.attributes.position.array;for(let L=0;L<b;L++){const ie=I[L],ue=V*.02;z[L*3]=ie.baseX+Math.sin(ue*ie.floatSpeed)*ie.floatRadius,z[L*3+1]=ie.baseY+Math.cos(ue*ie.floatSpeed*.7)*ie.floatRadius*.5;const ve=Math.sin(ue*ie.twinkleSpeed+ie.twinklePhase)*.5+.5;y.geometry.attributes.size.array[L]=15+ve*25}y.geometry.attributes.position.needsUpdate=!0,y.geometry.attributes.size.needsUpdate=!0,y.rotation.z+=5e-4;for(const L of R)L.mesh.position.add(L.velocity),L.mesh.rotation.x+=L.rotationSpeed.x,L.mesh.rotation.y+=L.rotationSpeed.y,L.mesh.rotation.z+=L.rotationSpeed.z,L.swayPhase+=.05,L.mesh.position.x+=Math.sin(L.swayPhase*L.swaySpeed)*.5,L.mesh.position.y<-h/2-50&&(L.mesh.position.y=h/2+50,L.mesh.position.x=(Math.random()-.5)*d);f.render(g,v)}j();const q=()=>{if(!i.value)return;const z=i.value.clientWidth,L=i.value.clientHeight;f.setSize(z,L,!1),v.aspect=z/L,v.updateProjectionMatrix()};window.addEventListener("resize",q),o=()=>{cancelAnimationFrame(H),window.removeEventListener("resize",q);for(const z of p)g.remove(z.particles),z.particles.geometry.dispose(),z.particles.material.dispose();g.remove(y),S.dispose(),D.dispose();for(const z of R)g.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.dispose();f.dispose()}}return Vn(()=>{u()}),Di(()=>{o?.(),o=null}),(f,d)=>(Ve(),Je("div",PT,[$("div",{ref_key:"containerEl",ref:i,class:"absolute inset-0"},[$("canvas",{ref_key:"canvasEl",ref:r,class:"h-full w-full"},null,512)],512),$("div",{class:An(["relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700",s.value?"translate-y-0 opacity-100":"translate-y-8 opacity-0"])},[d[2]||(d[2]=$("div",{class:"mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]"},[$("svg",{class:"h-14 w-14 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[$("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),d[3]||(d[3]=$("h2",{class:"mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl"}," 恭喜完成！ ",-1)),$("div",IT,Qe(t.chapterTitle),1),$("p",DT,[$("span",LT,Qe(t.playerName),1),d[1]||(d[1]=oi("，你做到了！ ",-1))]),$("button",{class:"rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]",type:"button",onClick:d[0]||(d[0]=h=>n("close"))}," 繼續前進 ")],2)]))}}),NT="modulepreload",FT=function(t){return"/backend-camp-game/"+t},Sd={},OT=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=FT(c),c in Sd)return;Sd[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":NT,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},BT={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},zT={class:"relative flex h-[95vh] w-[95vw] max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl"},kT={class:"flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"},HT={class:"text-lg font-bold text-slate-800"},VT={class:"flex-1 overflow-hidden"},GT={key:1,class:"flex h-full items-center justify-center text-slate-500"},WT=768,Vp=xn({__name:"InteractiveSlideModal",props:{slideId:{},title:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=yt(!1);function s(){r.value=window.innerWidth<WT}Vn(()=>{s(),window.addEventListener("resize",s)}),Di(()=>{window.removeEventListener("resize",s)});const o={"git-intro":Zm(()=>OT(()=>import("./GitIntroSlide-mmq0Lj8L.js"),__vite__mapDeps([0,1])))},a=We(()=>o[n.slideId]||null);function l(){i("close")}return(c,u)=>(Ve(),Je("div",BT,[$("div",zT,[$("header",kT,[$("h2",HT,Qe(t.title),1),$("button",{type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600",onClick:u[0]||(u[0]=f=>i("close"))},[...u[1]||(u[1]=[$("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[$("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),$("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),$("main",VT,[a.value?(Ve(),Fn(cg(a.value),{key:0,isMobile:r.value,onComplete:l},null,40,["isMobile"])):(Ve(),Je("div",GT," 找不到簡報元件："+Qe(t.slideId),1))])])]))}}),XT={key:0,class:"flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14"},qT={class:"pointer-events-none fixed inset-0 z-0"},$T={class:"fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3"},YT={class:"text-center text-sm font-black text-white/90"},jT=["title"],KT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ZT={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},JT={class:"relative z-10 flex flex-1 flex-col justify-end"},QT={key:0,class:"pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center",style:{top:"56px",bottom:"160px"}},eA=["src"],tA={key:1,class:"relative z-10 mb-4 flex-1 overflow-y-auto px-4"},nA={class:"flex min-h-full items-center justify-center py-4"},iA=["src"],rA={key:2,class:"relative z-20 px-3 pb-6"},sA={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},oA={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},aA=["innerHTML"],lA={class:"mt-3 flex justify-end gap-2.5"},cA=["disabled"],uA=["disabled"],fA=xn({__name:"ChapterView",setup(t){const e=j0(),n=Qc(),i=sp(),r=op(),s=We(()=>Number(e.params.id)||1),o=We(()=>nv(s.value));Or(o,E=>{E||n.push({name:"start"})},{immediate:!0}),Vn(()=>{i.loadFromStorage(),r.loadFromStorage()});const a=new Audio("/backend-camp-game/audio/background.mp3");a.loop=!0,a.volume=.1;const l=yt(!1);function c(){l.value?a.pause():a.play().catch(()=>{}),l.value=!l.value}Di(()=>{a.pause(),a.currentTime=0});const u=We(()=>o.value?.nodes??[]),f=We(()=>{const E=r.getNodeIndex(s.value);return Math.min(E,u.value.length-1)}),d=We(()=>u.value[f.value]),h=We(()=>d.value?.type==="inputName"),g=We(()=>d.value?.type==="slides"),v=We(()=>d.value?.type==="quiz"),m=We(()=>d.value?.type==="celebration"),p=We(()=>d.value?.type==="interactiveSlide"),w=We(()=>d.value?.type==="inputName"?d.value:null),b=We(()=>d.value?.type==="slides"?d.value:null),S=We(()=>d.value?.type==="quiz"?d.value:null),C=We(()=>d.value?.type==="celebration"?d.value:null),P=We(()=>d.value?.type==="interactiveSlide"?d.value:null),I=We(()=>{if(d.value?.type==="dialogue"&&d.value.image){const E=d.value.image;return E.startsWith("/")?`/backend-camp-game/${E.slice(1)}`:E}return null}),D=yt(""),y=yt(null);function M(E){const _=i.name||"你";return E.split("{name}").join(_)}function R(E){const _=/(https?:\/\/[^\s]+)/g;return E.replace(_,'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')}function B(E){y.value&&window.clearInterval(y.value),D.value="";let _=0;y.value=window.setInterval(()=>{_+=1,D.value=E.slice(0,_),_>=E.length&&(y.value&&window.clearInterval(y.value),y.value=null)},16)}function V(E){E?.type==="dialogue"?B(M(E.text)):(y.value&&window.clearInterval(y.value),y.value=null,D.value="")}Vn(()=>{d.value&&V(d.value)});function H(){if(d.value?.type!=="dialogue")return;const E=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,E),V(u.value[E])}function j(E){for(let _=E-1;_>=0;_--)if(u.value[_]?.type==="dialogue")return _;return-1}const q=We(()=>d.value?.type!=="dialogue"?!1:j(f.value)>=0);function z(){if(d.value?.type!=="dialogue")return;const E=j(f.value);E>=0&&(r.setNodeIndex(s.value,E),V(u.value[E]))}function L(){n.push({name:"start"})}function ie(E){i.setName(E);const _=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,_),V(u.value[_])}function ue(){const E=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,E),V(u.value[E])}function ve(){const E=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,E),V(u.value[E])}function be(){const E=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,E),V(u.value[E])}function je(){const E=Math.max(f.value-1,0);r.setNodeIndex(s.value,E),V(u.value[E])}function ke(){r.completeChapter(s.value);const E=s.value+1;ia[E]?n.push({name:"chapter",params:{id:String(E)}}):n.push({name:"start"})}const ne=We(()=>`/backend-camp-game/images/scene/${d.value?.scene??"normal"}.png`),me=We(()=>`/backend-camp-game/images/coach/${d.value?.coachExpression??"normal"}.png`),N=We(()=>d.value?.type!=="dialogue"?"海克絲":d.value.speaker==="你"?i.name||"你":d.value.speaker),se=We(()=>d.value?.type!=="dialogue"||d.value.speaker==="海克絲"?"border-amber-300/35 bg-amber-300/20 text-amber-100":d.value.speaker==="你"?"border-sky-400/35 bg-sky-400/20 text-sky-100":"border-slate-400/35 bg-slate-400/20 text-slate-200"),re=We(()=>d.value?.type==="dialogue"&&y.value!=null);function fe(){d.value?.type==="dialogue"&&(y.value&&window.clearInterval(y.value),y.value=null,D.value=M(d.value.text))}function De(E){h.value||g.value||v.value||m.value||p.value||(E.key==="Enter"||E.key===" "||E.key==="ArrowRight"?(E.preventDefault(),re.value?fe():d.value?.type==="dialogue"&&H()):E.key==="ArrowLeft"&&(E.preventDefault(),q.value&&z()))}return Vn(()=>window.addEventListener("keydown",De)),Di(()=>window.removeEventListener("keydown",De)),(E,_)=>o.value?(Ve(),Je("div",XT,[$("div",qT,[$("div",{class:"absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95",style:Jr({backgroundImage:`url(${ne.value})`})},null,4),_[0]||(_[0]=$("div",{class:"absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]"},null,-1))]),$("header",$T,[$("button",{class:"rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]",type:"button",onClick:L}," 返回開始 "),$("div",YT,Qe(o.value.title),1),$("button",{class:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",type:"button",title:l.value?"關閉音樂":"開啟音樂",onClick:c},[l.value?(Ve(),Je("svg",KT,[..._[1]||(_[1]=[$("path",{d:"M9 18V5l12-2v13"},null,-1),$("circle",{cx:"6",cy:"18",r:"3"},null,-1),$("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):(Ve(),Je("svg",ZT,[..._[2]||(_[2]=[$("path",{d:"M9 18V5l12-2v13"},null,-1),$("circle",{cx:"6",cy:"18",r:"3"},null,-1),$("circle",{cx:"18",cy:"16",r:"3"},null,-1),$("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2"},null,-1)])]))],8,jT)]),$("main",JT,[!I.value&&!v.value&&!g.value&&!m.value&&!p.value?(Ve(),Je("div",QT,[$("img",{class:"h-full w-auto max-w-[85vw] object-contain object-bottom",src:me.value,alt:"教練"},null,8,eA)])):kt("",!0),I.value?(Ve(),Je("div",tA,[$("div",nA,[$("img",{src:I.value,alt:"展示圖片",class:"max-w-full rounded-lg border border-white/20 object-contain shadow-2xl"},null,8,iA)])])):kt("",!0),!v.value&&!g.value&&!m.value&&!p.value?(Ve(),Je("div",rA,[$("div",sA,[$("div",{class:An(["mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black",se.value])},Qe(N.value),3),$("div",oA,[d.value?.type==="dialogue"?(Ve(),Je("span",{key:0,innerHTML:R(D.value)},null,8,aA)):d.value?.type==="inputName"?(Ve(),Je(Tt,{key:1},[oi(Qe(w.value?.prompt),1)],64)):d.value?.type==="slides"?(Ve(),Je(Tt,{key:2},[oi("我們先看一段簡報，把 Git 的重點抓起來。")],64)):(Ve(),Je(Tt,{key:3},[oi("來，快速確認一下你抓到重點了沒有。")],64))]),$("div",lA,[$("button",{class:"rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30",type:"button",disabled:!q.value,onClick:z}," 上一句 ",8,cA),$("button",{class:"rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:d.value?.type!=="dialogue",onClick:H}," 下一句 ",8,uA)])])])):kt("",!0)]),h.value&&w.value?(Ve(),Fn(BE,{key:0,title:w.value.prompt,placeholder:"例如：小明",initialValue:on(i).name,onSubmit:ie,onCancel:L},null,8,["title","initialValue"])):kt("",!0),g.value&&b.value?(Ve(),Fn(hT,{key:1,title:b.value.title,slides:b.value.slides,mustFinish:b.value.mustFinish,onClose:ue},null,8,["title","slides","mustFinish"])):kt("",!0),v.value&&S.value?(Ve(),Fn(CT,{key:2,title:S.value.title,questions:S.value.questions,onDone:be,onCancel:je},null,8,["title","questions"])):kt("",!0),m.value&&C.value?(Ve(),Fn(UT,{key:3,playerName:on(i).name||"你",chapterTitle:C.value.chapterTitle,onClose:ke},null,8,["playerName","chapterTitle"])):kt("",!0),p.value&&P.value?(Ve(),Fn(Vp,{key:4,slideId:P.value.slideId,title:P.value.title,onClose:ve},null,8,["slideId","title"])):kt("",!0)])):kt("",!0)}}),dA={class:"min-h-screen bg-slate-900 p-8"},hA={class:"mx-auto max-w-4xl"},pA={class:"mb-8"},mA={class:"grid gap-4 md:grid-cols-2"},gA=["onClick"],_A={class:"mb-2 flex items-start justify-between"},vA={class:"font-bold text-white group-hover:text-blue-400"},xA={class:"rounded bg-slate-700 px-2 py-0.5 font-mono text-xs text-slate-400"},yA={class:"text-sm text-slate-400"},SA=xn({__name:"DevView",setup(t){const e=Qc(),n=[{id:"git-intro",title:"Git 互動實驗室：Repository 概念",description:"教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾"}],i=yt(null);function r(a){i.value=a}function s(){i.value=null}function o(){e.push({name:"start"})}return(a,l)=>(Ve(),Je("div",dA,[$("div",hA,[$("div",{class:"mb-8 flex items-center justify-between"},[l[0]||(l[0]=$("div",null,[$("h1",{class:"flex items-center gap-3 text-2xl font-bold text-white"},[$("span",{class:"rounded bg-amber-500 px-2 py-1 text-sm"},"DEV"),oi(" 開發者金手指 ")]),$("p",{class:"mt-2 text-slate-400"},"直接預覽互動式簡報，不用跑完整遊戲流程")],-1)),$("button",{class:"rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700",onClick:o}," 返回遊戲 ")]),$("section",pA,[l[3]||(l[3]=$("h2",{class:"mb-4 flex items-center gap-2 text-lg font-bold text-white"},[$("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-blue-400",viewBox:"0 0 256 256",fill:"currentColor"},[$("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"})]),oi(" 互動式簡報 ")],-1)),$("div",mA,[(Ve(),Je(Tt,null,Is(n,c=>$("div",{key:c.id,class:"group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750",onClick:u=>r(c)},[$("div",_A,[$("h3",vA,Qe(c.title),1),$("span",xA,Qe(c.id),1)]),$("p",yA,Qe(c.description),1),l[1]||(l[1]=$("div",{class:"mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"},[$("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 256 256",fill:"currentColor"},[$("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"})]),oi(" 點擊預覽 ")],-1))],8,gA)),64)),l[2]||(l[2]=Qo('<div class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 p-5 text-center"><svg xmlns="http://www.w3.org/2000/svg" class="mb-2 h-8 w-8 text-slate-600" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg><p class="text-sm text-slate-500">新增更多簡報</p><p class="mt-1 text-xs text-slate-600">在 interactive-slides/ 資料夾</p></div>',1))])]),l[4]||(l[4]=Qo('<section class="rounded-xl border border-slate-700 bg-slate-800/50 p-5"><h2 class="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg> 如何新增互動簡報 </h2><ol class="space-y-2 text-sm text-slate-300"><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">1</span><span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">src/components/interactive-slides/</code> 建立新的 Vue 元件</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">2</span><span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">InteractiveSlideModal.vue</code> 的 slideComponents 註冊</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">3</span><span>在本頁的 slides 陣列加入簡報資訊，即可在這裡預覽</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">4</span><span>在章節的 nodes 裡加入 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">type: &#39;interactiveSlide&#39;</code> 節點</span></li></ol></section><div class="mt-6 flex flex-wrap gap-3 text-sm"><a href="https://github.com/hexschool/backend-camp-game" target="_blank" class="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.55a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg> GitHub Repo </a><span class="flex items-center gap-1.5 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h56A8,8,0,0,1,192,128Z"></path></svg> 此頁面僅在開發環境顯示 </span></div>',2))]),i.value?(Ve(),Fn(Vp,{key:0,slideId:i.value.id,title:i.value.title,onClose:s},null,8,["slideId","title"])):kt("",!0)]))}}),bA=Y0({history:A0("/backend-camp-game/"),routes:[{path:"/",name:"start",component:IE},{path:"/chapter/:id",name:"chapter",component:fA},{path:"/dev",name:"dev",component:SA}]});I_(V_).use(U_()).use(bA).mount("#app");export{Tt as F,qm as T,qh as _,Je as a,$ as b,We as c,xn as d,Fn as e,oi as f,kt as g,Qo as h,ih as i,Is as j,A_ as k,An as n,Ve as o,yt as r,Qe as t,on as u,MA as v,Or as w};
