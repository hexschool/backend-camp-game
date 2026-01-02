(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function wc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pt={},Lr=[],Bn=()=>{},gd=()=>!1,na=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Rc=t=>t.startsWith("onUpdate:"),Ut=Object.assign,Cc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kp=Object.prototype.hasOwnProperty,lt=(t,e)=>kp.call(t,e),ze=Array.isArray,Ur=t=>Os(t)==="[object Map]",_d=t=>Os(t)==="[object Set]",fu=t=>Os(t)==="[object Date]",qe=t=>typeof t=="function",bt=t=>typeof t=="string",kn=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",vd=t=>(dt(t)||qe(t))&&qe(t.then)&&qe(t.catch),xd=Object.prototype.toString,Os=t=>xd.call(t),Hp=t=>Os(t).slice(8,-1),Sd=t=>Os(t)==="[object Object]",ia=t=>bt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ps=wc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Vp=/-\w/g,_n=ra(t=>t.replace(Vp,e=>e.slice(1).toUpperCase())),Gp=/\B([A-Z])/g,Li=ra(t=>t.replace(Gp,"-$1").toLowerCase()),sa=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),ba=ra(t=>t?`on${sa(t)}`:""),Ai=(t,e)=>!Object.is(t,e),wo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},yd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Pc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Wp=t=>{const e=bt(t)?Number(t):NaN;return isNaN(e)?t:e};let du;const oa=()=>du||(du=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Bs(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=bt(i)?$p(i):Bs(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(bt(t)||dt(t))return t}const Xp=/;(?![^(]*\))/g,qp=/:([^]+)/,Yp=/\/\*[^]*?\*\//g;function $p(t){const e={};return t.replace(Yp,"").split(Xp).forEach(n=>{if(n){const i=n.split(qp);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function En(t){let e="";if(bt(t))e=t;else if(ze(t))for(let n=0;n<t.length;n++){const i=En(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Kp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",jp=wc(Kp);function Md(t){return!!t||t===""}function Zp(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=zo(t[i],e[i]);return n}function zo(t,e){if(t===e)return!0;let n=fu(t),i=fu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=kn(t),i=kn(e),n||i)return t===e;if(n=ze(t),i=ze(e),n||i)return n&&i?Zp(t,e):!1;if(n=dt(t),i=dt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!zo(t[o],e[o]))return!1}}return String(t)===String(e)}const bd=t=>!!(t&&t.__v_isRef===!0),nt=t=>bt(t)?t:t==null?"":ze(t)||dt(t)&&(t.toString===xd||!qe(t.toString))?bd(t)?nt(t.value):JSON.stringify(t,Ed,2):String(t),Ed=(t,e)=>bd(e)?Ed(t,e.value):Ur(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ea(i,s)+" =>"]=r,n),{})}:_d(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ea(n))}:kn(e)?Ea(e):dt(e)&&!ze(e)&&!Sd(e)?String(e):e,Ea=(t,e="")=>{var n;return kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ot;class Td{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ot,!e&&Ot&&(this.index=(Ot.scopes||(Ot.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ot;try{return Ot=this,e()}finally{Ot=n}}}on(){++this._on===1&&(this.prevScope=Ot,Ot=this)}off(){this._on>0&&--this._on===0&&(Ot=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ad(t){return new Td(t)}function wd(){return Ot}function Jp(t,e=!1){Ot&&Ot.cleanups.push(t)}let gt;const Ta=new WeakSet;class Rd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ot&&Ot.active&&Ot.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Pd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hu(this),Id(this);const e=gt,n=Mn;gt=this,Mn=!0;try{return this.fn()}finally{Dd(this),gt=e,Mn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lc(e);this.deps=this.depsTail=void 0,hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vl(this)&&this.run()}get dirty(){return vl(this)}}let Cd=0,ms,gs;function Pd(t,e=!1){if(t.flags|=8,e){t.next=gs,gs=t;return}t.next=ms,ms=t}function Ic(){Cd++}function Dc(){if(--Cd>0)return;if(gs){let e=gs;for(gs=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;ms;){let e=ms;for(ms=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function Id(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Dd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Lc(i),Qp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function vl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ld(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Ld(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Es)||(t.globalVersion=Es,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!vl(t))))return;t.flags|=2;const e=t.dep,n=gt,i=Mn;gt=t,Mn=!0;try{Id(t);const r=t.fn(t._value);(e.version===0||Ai(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=n,Mn=i,Dd(t),t.flags&=-3}}function Lc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Lc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Qp(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Mn=!0;const Ud=[];function si(){Ud.push(Mn),Mn=!1}function oi(){const t=Ud.pop();Mn=t===void 0?!0:t}function hu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=gt;gt=void 0;try{e()}finally{gt=n}}}let Es=0;class em{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Uc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!Mn||gt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==gt)n=this.activeLink=new em(gt,this),gt.deps?(n.prevDep=gt.depsTail,gt.depsTail.nextDep=n,gt.depsTail=n):gt.deps=gt.depsTail=n,Nd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=gt.depsTail,n.nextDep=void 0,gt.depsTail.nextDep=n,gt.depsTail=n,gt.deps===n&&(gt.deps=i)}return n}trigger(e){this.version++,Es++,this.notify(e)}notify(e){Ic();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Dc()}}}function Nd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Nd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ko=new WeakMap,ir=Symbol(""),xl=Symbol(""),Ts=Symbol("");function Bt(t,e,n){if(Mn&&gt){let i=ko.get(t);i||ko.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new Uc),r.map=i,r.key=n),r.track()}}function Qn(t,e,n,i,r,s){const o=ko.get(t);if(!o){Es++;return}const a=l=>{l&&l.trigger()};if(Ic(),e==="clear")o.forEach(a);else{const l=ze(t),c=l&&ia(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Ts||!kn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ts)),e){case"add":l?c&&a(o.get("length")):(a(o.get(ir)),Ur(t)&&a(o.get(xl)));break;case"delete":l||(a(o.get(ir)),Ur(t)&&a(o.get(xl)));break;case"set":Ur(t)&&a(o.get(ir));break}}Dc()}function tm(t,e){const n=ko.get(t);return n&&n.get(e)}function ur(t){const e=it(t);return e===t?e:(Bt(e,"iterate",Ts),ln(t)?e:e.map(Tn))}function aa(t){return Bt(t=it(t),"iterate",Ts),t}function yi(t,e){return ai(t)?ni(t)?Gr(Tn(e)):Gr(e):Tn(e)}const nm={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,t=>yi(this,t))},concat(...t){return ur(this).concat(...t.map(e=>ze(e)?ur(e):e))},entries(){return Aa(this,"entries",t=>(t[1]=yi(this,t[1]),t))},every(t,e){return Vn(this,"every",t,e,void 0,arguments)},filter(t,e){return Vn(this,"filter",t,e,n=>n.map(i=>yi(this,i)),arguments)},find(t,e){return Vn(this,"find",t,e,n=>yi(this,n),arguments)},findIndex(t,e){return Vn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Vn(this,"findLast",t,e,n=>yi(this,n),arguments)},findLastIndex(t,e){return Vn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Vn(this,"forEach",t,e,void 0,arguments)},includes(...t){return wa(this,"includes",t)},indexOf(...t){return wa(this,"indexOf",t)},join(t){return ur(this).join(t)},lastIndexOf(...t){return wa(this,"lastIndexOf",t)},map(t,e){return Vn(this,"map",t,e,void 0,arguments)},pop(){return ts(this,"pop")},push(...t){return ts(this,"push",t)},reduce(t,...e){return pu(this,"reduce",t,e)},reduceRight(t,...e){return pu(this,"reduceRight",t,e)},shift(){return ts(this,"shift")},some(t,e){return Vn(this,"some",t,e,void 0,arguments)},splice(...t){return ts(this,"splice",t)},toReversed(){return ur(this).toReversed()},toSorted(t){return ur(this).toSorted(t)},toSpliced(...t){return ur(this).toSpliced(...t)},unshift(...t){return ts(this,"unshift",t)},values(){return Aa(this,"values",t=>yi(this,t))}};function Aa(t,e,n){const i=aa(t),r=i[e]();return i!==t&&!ln(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const im=Array.prototype;function Vn(t,e,n,i,r,s){const o=aa(t),a=o!==t&&!ln(t),l=o[e];if(l!==im[e]){const f=l.apply(t,s);return a?Tn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,yi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function pu(t,e,n,i){const r=aa(t);let s=n;return r!==t&&(ln(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,yi(t,a),l,t)}),r[e](s,...i)}function wa(t,e,n){const i=it(t);Bt(i,"iterate",Ts);const r=i[e](...n);return(r===-1||r===!1)&&la(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function ts(t,e,n=[]){si(),Ic();const i=it(t)[e].apply(t,n);return Dc(),oi(),i}const rm=wc("__proto__,__v_isRef,__isVue"),Fd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(kn));function sm(t){kn(t)||(t=String(t));const e=it(this);return Bt(e,"has",t),e.hasOwnProperty(t)}class Od{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?mm:Hd:s?kd:zd).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=ze(e);if(!r){let l;if(o&&(l=nm[n]))return l;if(n==="hasOwnProperty")return sm}const a=Reflect.get(e,n,Mt(e)?e:i);if((kn(n)?Fd.has(n):rm(n))||(r||Bt(e,"get",n),s))return a;if(Mt(a)){const l=o&&ia(n)?a:a.value;return r&&dt(l)?yl(l):l}return dt(a)?r?yl(a):zs(a):a}}class Bd extends Od{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=ze(e)&&ia(n);if(!this._isShallow){const c=ai(s);if(!ln(i)&&!ai(i)&&(s=it(s),i=it(i)),!o&&Mt(s)&&!Mt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:lt(e,n),l=Reflect.set(e,n,i,Mt(e)?e:r);return e===it(r)&&(a?Ai(i,s)&&Qn(e,"set",n,i):Qn(e,"add",n,i)),l}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Qn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!kn(n)||!Fd.has(n))&&Bt(e,"has",n),i}ownKeys(e){return Bt(e,"iterate",ze(e)?"length":ir),Reflect.ownKeys(e)}}class om extends Od{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const am=new Bd,lm=new om,cm=new Bd(!0);const Sl=t=>t,Ks=t=>Reflect.getPrototypeOf(t);function um(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),o=Ur(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Sl:e?Gr:Tn;return!e&&Bt(s,"iterate",l?xl:ir),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function js(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function fm(t,e){const n={get(r){const s=this.__v_raw,o=it(s),a=it(r);t||(Ai(r,a)&&Bt(o,"get",r),Bt(o,"get",a));const{has:l}=Ks(o),c=e?Sl:t?Gr:Tn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Bt(it(r),"iterate",ir),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return t||(Ai(r,a)&&Bt(o,"has",r),Bt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Sl:t?Gr:Tn;return!t&&Bt(l,"iterate",ir),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ut(n,t?{add:js("add"),set:js("set"),delete:js("delete"),clear:js("clear")}:{add(r){!e&&!ln(r)&&!ai(r)&&(r=it(r));const s=it(this);return Ks(s).has.call(s,r)||(s.add(r),Qn(s,"add",r,r)),this},set(r,s){!e&&!ln(s)&&!ai(s)&&(s=it(s));const o=it(this),{has:a,get:l}=Ks(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ai(s,u)&&Qn(o,"set",r,s):Qn(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=Ks(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&Qn(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&Qn(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=um(r,t,e)}),n}function Nc(t,e){const n=fm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const dm={get:Nc(!1,!1)},hm={get:Nc(!1,!0)},pm={get:Nc(!0,!1)};const zd=new WeakMap,kd=new WeakMap,Hd=new WeakMap,mm=new WeakMap;function gm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _m(t){return t.__v_skip||!Object.isExtensible(t)?0:gm(Hp(t))}function zs(t){return ai(t)?t:Fc(t,!1,am,dm,zd)}function Vd(t){return Fc(t,!1,cm,hm,kd)}function yl(t){return Fc(t,!0,lm,pm,Hd)}function Fc(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=_m(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function ni(t){return ai(t)?ni(t.__v_raw):!!(t&&t.__v_isReactive)}function ai(t){return!!(t&&t.__v_isReadonly)}function ln(t){return!!(t&&t.__v_isShallow)}function la(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function Oc(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&yd(t,"__v_skip",!0),t}const Tn=t=>dt(t)?zs(t):t,Gr=t=>dt(t)?yl(t):t;function Mt(t){return t?t.__v_isRef===!0:!1}function Dt(t){return Gd(t,!1)}function vm(t){return Gd(t,!0)}function Gd(t,e){return Mt(t)?t:new xm(t,e)}class xm{constructor(e,n){this.dep=new Uc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:Tn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||ln(e)||ai(e);e=i?e:it(e),Ai(e,n)&&(this._rawValue=e,this._value=i?e:Tn(e),this.dep.trigger())}}function zn(t){return Mt(t)?t.value:t}const Sm={get:(t,e,n)=>e==="__v_raw"?t:zn(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Mt(r)&&!Mt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Wd(t){return ni(t)?t:new Proxy(t,Sm)}function ym(t){const e=ze(t)?new Array(t.length):{};for(const n in t)e[n]=bm(t,n);return e}class Mm{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!ze(e)||!ia(String(n)))do r=!la(s)||ln(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=zn(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Mt(this._raw[this._key])){const n=this._object[this._key];if(Mt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return tm(this._raw,this._key)}}function bm(t,e,n){return new Mm(t,e,n)}class Em{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Uc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Es-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Pd(this,!0),!0}get value(){const e=this.dep.track();return Ld(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Tm(t,e,n=!1){let i,r;return qe(t)?i=t:(i=t.get,r=t.set),new Em(i,r,n)}const Zs={},Ho=new WeakMap;let qi;function Am(t,e=!1,n=qi){if(n){let i=Ho.get(n);i||Ho.set(n,i=[]),i.push(t)}}function wm(t,e,n=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:ln(y)||r===!1||r===0?ei(y,1):ei(y);let u,f,d,h,g=!1,x=!1;if(Mt(t)?(f=()=>t.value,g=ln(t)):ni(t)?(f=()=>c(t),g=!0):ze(t)?(x=!0,g=t.some(y=>ni(y)||ln(y)),f=()=>t.map(y=>{if(Mt(y))return y.value;if(ni(y))return c(y);if(qe(y))return l?l(y,2):y()})):qe(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){si();try{d()}finally{oi()}}const y=qi;qi=u;try{return l?l(t,3,[h]):t(h)}finally{qi=y}}:f=Bn,e&&r){const y=f,P=r===!0?1/0:r;f=()=>ei(y(),P)}const m=wd(),p=()=>{u.stop(),m&&m.active&&Cc(m.effects,u)};if(s&&e){const y=e;e=(...P)=>{y(...P),p()}}let A=x?new Array(t.length).fill(Zs):Zs;const T=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const P=u.run();if(r||g||(x?P.some((I,C)=>Ai(I,A[C])):Ai(P,A))){d&&d();const I=qi;qi=u;try{const C=[P,A===Zs?void 0:x&&A[0]===Zs?[]:A,h];A=P,l?l(e,3,C):e(...C)}finally{qi=I}}}else u.run()};return a&&a(T),u=new Rd(f),u.scheduler=o?()=>o(T,!1):T,h=y=>Am(y,!1,u),d=u.onStop=()=>{const y=Ho.get(u);if(y){if(l)l(y,4);else for(const P of y)P();Ho.delete(u)}},e?i?T(!0):A=u.run():o?o(T.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ei(t,e=1/0,n){if(e<=0||!dt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Mt(t))ei(t.value,e,n);else if(ze(t))for(let i=0;i<t.length;i++)ei(t[i],e,n);else if(_d(t)||Ur(t))t.forEach(i=>{ei(i,e,n)});else if(Sd(t)){for(const i in t)ei(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ei(t[i],e,n)}return t}function ks(t,e,n,i){try{return i?t(...i):t()}catch(r){ca(r,e,n)}}function An(t,e,n,i){if(qe(t)){const r=ks(t,e,n,i);return r&&vd(r)&&r.catch(s=>{ca(s,e,n)}),r}if(ze(t)){const r=[];for(let s=0;s<t.length;s++)r.push(An(t[s],e,n,i));return r}}function ca(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){si(),ks(s,null,10,[t,l,c]),oi();return}}Rm(t,n,r,i,o)}function Rm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const $t=[];let In=-1;const Nr=[];let Mi=null,Pr=0;const Xd=Promise.resolve();let Vo=null;function Bc(t){const e=Vo||Xd;return t?e.then(this?t.bind(this):t):e}function Cm(t){let e=In+1,n=$t.length;for(;e<n;){const i=e+n>>>1,r=$t[i],s=As(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function zc(t){if(!(t.flags&1)){const e=As(t),n=$t[$t.length-1];!n||!(t.flags&2)&&e>=As(n)?$t.push(t):$t.splice(Cm(e),0,t),t.flags|=1,qd()}}function qd(){Vo||(Vo=Xd.then($d))}function Pm(t){ze(t)?Nr.push(...t):Mi&&t.id===-1?Mi.splice(Pr+1,0,t):t.flags&1||(Nr.push(t),t.flags|=1),qd()}function mu(t,e,n=In+1){for(;n<$t.length;n++){const i=$t[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;$t.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Yd(t){if(Nr.length){const e=[...new Set(Nr)].sort((n,i)=>As(n)-As(i));if(Nr.length=0,Mi){Mi.push(...e);return}for(Mi=e,Pr=0;Pr<Mi.length;Pr++){const n=Mi[Pr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Mi=null,Pr=0}}const As=t=>t.id==null?t.flags&2?-1:1/0:t.id;function $d(t){try{for(In=0;In<$t.length;In++){const e=$t[In];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;In<$t.length;In++){const e=$t[In];e&&(e.flags&=-2)}In=-1,$t.length=0,Yd(),Vo=null,($t.length||Nr.length)&&$d()}}let on=null,Kd=null;function Go(t){const e=on;return on=t,Kd=t&&t.type.__scopeId||null,e}function jd(t,e=on,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Yo(-1);const s=Go(e);let o;try{o=t(...r)}finally{Go(s),i._d&&Yo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Zd(t,e){if(on===null)return t;const n=pa(on),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=pt]=e[r];s&&(qe(s)&&(s={mounted:s,updated:s}),s.deep&&ei(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Fi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(si(),An(l,n,8,[t.el,a,t,e]),oi())}}function Ro(t,e){if(kt){let n=kt.provides;const i=kt.parent&&kt.parent.provides;i===n&&(n=kt.provides=Object.create(i)),n[t]=e}}function gn(t,e,n=!1){const i=Xc();if(i||rr){let r=rr?rr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&qe(e)?e.call(i&&i.proxy):e}}function Im(){return!!(Xc()||rr)}const Dm=Symbol.for("v-scx"),Lm=()=>gn(Dm);function Um(t,e){return kc(t,null,e)}function Fr(t,e,n){return kc(t,e,n)}function kc(t,e,n=pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ut({},n),l=e&&i||!e&&s!=="post";let c;if(Cs){if(s==="sync"){const h=Lm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Bn,h.resume=Bn,h.pause=Bn,h}}const u=kt;a.call=(h,g,x)=>An(h,u,g,x);let f=!1;s==="post"?a.scheduler=h=>{qt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():zc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=wm(t,e,a);return Cs&&(c?c.push(d):l&&d()),d}function Nm(t,e,n){const i=this.proxy,r=bt(t)?t.includes(".")?Jd(i,t):()=>i[t]:t.bind(i,i);let s;qe(e)?s=e:(s=e.handler,n=e);const o=Hs(this),a=kc(r,s.bind(i),n);return o(),a}function Jd(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Qd=Symbol("_vte"),eh=t=>t.__isTeleport,_s=t=>t&&(t.disabled||t.disabled===""),gu=t=>t&&(t.defer||t.defer===""),_u=t=>typeof SVGElement<"u"&&t instanceof SVGElement,vu=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Ml=(t,e)=>{const n=t&&t.to;return bt(n)?e?e(n):null:n},th={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:x,createComment:m}}=c,p=_s(e.props);let{shapeFlag:A,children:T,dynamicChildren:y}=e;if(t==null){const P=e.el=x(""),I=e.anchor=x("");h(P,n,i),h(I,n,i);const C=(S,M)=>{A&16&&u(T,S,M,r,s,o,a,l)},D=()=>{const S=e.target=Ml(e.props,g),M=nh(S,e,x,h);S&&(o!=="svg"&&_u(S)?o="svg":o!=="mathml"&&vu(S)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(S),p||(C(S,M),Co(e,!1)))};p&&(C(n,I),Co(e,!0)),gu(e.props)?(e.el.__isMounted=!1,qt(()=>{D(),delete e.el.__isMounted},s)):D()}else{if(gu(e.props)&&t.el.__isMounted===!1){qt(()=>{th.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const P=e.anchor=t.anchor,I=e.target=t.target,C=e.targetAnchor=t.targetAnchor,D=_s(t.props),S=D?n:I,M=D?P:C;if(o==="svg"||_u(I)?o="svg":(o==="mathml"||vu(I))&&(o="mathml"),y?(d(t.dynamicChildren,y,S,r,s,o,a),Gc(t,e,!0)):l||f(t,e,S,M,r,s,o,a,!1),p)D?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):Js(e,n,P,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Ml(e.props,g);R&&Js(e,R,null,c,0)}else D&&Js(e,I,C,c,1);Co(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!_s(d);for(let g=0;g<a.length;g++){const x=a[g];i(x,e,n,h,!!x.dynamicChildren)}}},move:Js,hydrate:Fm};function Js(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||_s(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function Fm(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(x,m,p,A){m.anchor=f(o(x),m,a(x),n,i,r,s),m.targetStart=p,m.targetAnchor=A}const h=e.target=Ml(e.props,l),g=_s(e.props);if(h){const x=h._lpa||h.firstChild;if(e.shapeFlag&16)if(g)d(t,e,x,x&&o(x));else{e.anchor=o(t);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||nh(h,e,u,c),f(x&&o(x),e,h,n,i,r,s)}Co(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Om=th;function Co(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function nh(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[Qd]=s,t&&(i(r,t),i(s,t)),s}const Jn=Symbol("_leaveCb"),Qs=Symbol("_enterCb");function Bm(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return ii(()=>{t.isMounted=!0}),uh(()=>{t.isUnmounting=!0}),t}const fn=[Function,Array],ih={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:fn,onEnter:fn,onAfterEnter:fn,onEnterCancelled:fn,onBeforeLeave:fn,onLeave:fn,onAfterLeave:fn,onLeaveCancelled:fn,onBeforeAppear:fn,onAppear:fn,onAfterAppear:fn,onAppearCancelled:fn},rh=t=>{const e=t.subTree;return e.component?rh(e.component):e},zm={name:"BaseTransition",props:ih,setup(t,{slots:e}){const n=Xc(),i=Bm();return()=>{const r=e.default&&ah(e.default(),!0);if(!r||!r.length)return;const s=sh(r),o=it(t),{mode:a}=o;if(i.isLeaving)return Ra(s);const l=xu(s);if(!l)return Ra(s);let c=bl(l,o,i,n,f=>c=f);l.type!==Kt&&ws(l,c);let u=n.subTree&&xu(n.subTree);if(u&&u.type!==Kt&&!Ki(u,l)&&rh(n).type!==Kt){let f=bl(u,o,i,n);if(ws(u,f),a==="out-in"&&l.type!==Kt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Ra(s);a==="in-out"&&l.type!==Kt?f.delayLeave=(d,h,g)=>{const x=oh(i,u);x[String(u.key)]=u,d[Jn]=()=>{h(),d[Jn]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function sh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Kt){e=n;break}}return e}const km=zm;function oh(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function bl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:T}=e,y=String(t.key),P=oh(n,t),I=(S,M)=>{S&&An(S,i,9,M)},C=(S,M)=>{const R=M[1];I(S,M),ze(S)?S.every(B=>B.length<=1)&&R():S.length<=1&&R()},D={mode:o,persisted:a,beforeEnter(S){let M=l;if(!n.isMounted)if(s)M=m||l;else return;S[Jn]&&S[Jn](!0);const R=P[y];R&&Ki(t,R)&&R.el[Jn]&&R.el[Jn](),I(M,[S])},enter(S){let M=c,R=u,B=f;if(!n.isMounted)if(s)M=p||c,R=A||u,B=T||f;else return;let X=!1;const q=S[Qs]=Y=>{X||(X=!0,Y?I(B,[S]):I(R,[S]),D.delayedLeave&&D.delayedLeave(),S[Qs]=void 0)};M?C(M,[S,q]):q()},leave(S,M){const R=String(t.key);if(S[Qs]&&S[Qs](!0),n.isUnmounting)return M();I(d,[S]);let B=!1;const X=S[Jn]=q=>{B||(B=!0,M(),q?I(x,[S]):I(g,[S]),S[Jn]=void 0,P[R]===t&&delete P[R])};P[R]=t,h?C(h,[S,X]):X()},clone(S){const M=bl(S,e,n,i,r);return r&&r(M),M}};return D}function Ra(t){if(ua(t))return t=Pi(t),t.children=null,t}function xu(t){if(!ua(t))return eh(t.type)&&t.children?sh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&qe(n.default))return n.default()}}function ws(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ws(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ah(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===wt?(o.patchFlag&128&&r++,i=i.concat(ah(o.children,e,a))):(e||o.type!==Kt)&&i.push(a!=null?Pi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function ui(t,e){return qe(t)?Ut({name:t.name},e,{setup:t}):t}function lh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Wo=new WeakMap;function vs(t,e,n,i,r=!1){if(ze(t)){t.forEach((g,x)=>vs(g,e&&(ze(e)?e[x]:e),n,i,r));return}if(xs(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&vs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?pa(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState,d=it(f),h=f===pt?gd:g=>lt(d,g);if(c!=null&&c!==l){if(Su(e),bt(c))u[c]=null,h(c)&&(f[c]=null);else if(Mt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(qe(l))ks(l,a,12,[o,u]);else{const g=bt(l),x=Mt(l);if(g||x){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)ze(p)&&Cc(p,s);else if(ze(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,t.k&&(u[t.k]=A)}}else g?(u[l]=o,h(l)&&(f[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),Wo.delete(t)};p.id=-1,Wo.set(t,p),qt(p,n)}else Su(t),m()}}}function Su(t){const e=Wo.get(t);e&&(e.flags|=8,Wo.delete(t))}oa().requestIdleCallback;oa().cancelIdleCallback;const xs=t=>!!t.type.__asyncLoader,ua=t=>t.type.__isKeepAlive;function Hm(t,e){ch(t,"a",e)}function Vm(t,e){ch(t,"da",e)}function ch(t,e,n=kt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(fa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)ua(r.parent.vnode)&&Gm(i,e,n,r),r=r.parent}}function Gm(t,e,n,i){const r=fa(e,t,i,!0);or(()=>{Cc(i[e],r)},n)}function fa(t,e,n=kt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{si();const a=Hs(n),l=An(e,n,t,o);return a(),oi(),l});return i?r.unshift(s):r.push(s),s}}const fi=t=>(e,n=kt)=>{(!Cs||t==="sp")&&fa(t,(...i)=>e(...i),n)},Wm=fi("bm"),ii=fi("m"),Xm=fi("bu"),qm=fi("u"),uh=fi("bum"),or=fi("um"),Ym=fi("sp"),$m=fi("rtg"),Km=fi("rtc");function jm(t,e=kt){fa("ec",t,e)}const Zm="components";function Jm(t,e){return eg(Zm,t,!0,e)||t}const Qm=Symbol.for("v-ndc");function eg(t,e,n=!0,i=!1){const r=on||kt;if(r){const s=r.type;{const a=Bg(s,!1);if(a&&(a===e||a===_n(e)||a===sa(_n(e))))return s}const o=yu(r[t]||s[t],e)||yu(r.appContext[t],e);return!o&&i?s:o}}function yu(t,e){return t&&(t[e]||t[_n(e)]||t[sa(_n(e))])}function Xo(t,e,n,i){let r;const s=n,o=ze(t);if(o||bt(t)){const a=o&&ni(t);let l=!1,c=!1;a&&(l=!ln(t),c=ai(t),t=aa(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Gr(Tn(t[u])):Tn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}const El=t=>t?Rh(t)?pa(t):El(t.parent):null,Ss=Ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>dh(t),$forceUpdate:t=>t.f||(t.f=()=>{zc(t.update)}),$nextTick:t=>t.n||(t.n=Bc.bind(t.proxy)),$watch:t=>Nm.bind(t)}),Ca=(t,e)=>t!==pt&&!t.__isScriptSetup&&lt(t,e),tg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(r!==pt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(n!==pt&&lt(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const c=Ss[e];let u,f;if(c)return e==="$attrs"&&Bt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==pt&&lt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ca(r,e)?(r[e]=n,!0):i!==pt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==pt&&a[0]!=="$"&&lt(t,a)||Ca(e,a)||lt(s,a)||lt(i,a)||lt(Ss,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Mu(t){return ze(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function ng(t){const e=dh(t),n=t.proxy,i=t.ctx;Tl=!1,e.beforeCreate&&bu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:x,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:T,unmounted:y,render:P,renderTracked:I,renderTriggered:C,errorCaptured:D,serverPrefetch:S,expose:M,inheritAttrs:R,components:B,directives:X,filters:q}=e;if(c&&ig(c,i,null),o)for(const z in o){const L=o[z];qe(L)&&(i[z]=L.bind(n))}if(r){const z=r.call(n,n);dt(z)&&(t.data=zs(z))}if(Tl=!0,s)for(const z in s){const L=s[z],ie=qe(L)?L.bind(n,n):qe(L.get)?L.get.bind(n,n):Bn,fe=!qe(L)&&qe(L.set)?L.set.bind(n):Bn,ve=Xe({get:ie,set:fe});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Me=>ve.value=Me})}if(a)for(const z in a)fh(a[z],i,n,z);if(l){const z=qe(l)?l.call(n):l;Reflect.ownKeys(z).forEach(L=>{Ro(L,z[L])})}u&&bu(u,t,"c");function $(z,L){ze(L)?L.forEach(ie=>z(ie.bind(n))):L&&z(L.bind(n))}if($(Wm,f),$(ii,d),$(Xm,h),$(qm,g),$(Hm,x),$(Vm,m),$(jm,D),$(Km,I),$($m,C),$(uh,A),$(or,y),$(Ym,S),ze(M))if(M.length){const z=t.exposed||(t.exposed={});M.forEach(L=>{Object.defineProperty(z,L,{get:()=>n[L],set:ie=>n[L]=ie,enumerable:!0})})}else t.exposed||(t.exposed={});P&&t.render===Bn&&(t.render=P),R!=null&&(t.inheritAttrs=R),B&&(t.components=B),X&&(t.directives=X),S&&lh(t)}function ig(t,e,n=Bn){ze(t)&&(t=Al(t));for(const i in t){const r=t[i];let s;dt(r)?"default"in r?s=gn(r.from||i,r.default,!0):s=gn(r.from||i):s=gn(r),Mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function bu(t,e,n){An(ze(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function fh(t,e,n,i){let r=i.includes(".")?Jd(n,i):()=>n[i];if(bt(t)){const s=e[t];qe(s)&&Fr(r,s)}else if(qe(t))Fr(r,t.bind(n));else if(dt(t))if(ze(t))t.forEach(s=>fh(s,e,n,i));else{const s=qe(t.handler)?t.handler.bind(n):e[t.handler];qe(s)&&Fr(r,s,t)}}function dh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>qo(l,c,o,!0)),qo(l,e,o)),dt(e)&&s.set(e,l),l}function qo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&qo(t,s,n,!0),r&&r.forEach(o=>qo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=rg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rg={data:Eu,props:Tu,emits:Tu,methods:fs,computed:fs,beforeCreate:Wt,created:Wt,beforeMount:Wt,mounted:Wt,beforeUpdate:Wt,updated:Wt,beforeDestroy:Wt,beforeUnmount:Wt,destroyed:Wt,unmounted:Wt,activated:Wt,deactivated:Wt,errorCaptured:Wt,serverPrefetch:Wt,components:fs,directives:fs,watch:og,provide:Eu,inject:sg};function Eu(t,e){return e?t?function(){return Ut(qe(t)?t.call(this,this):t,qe(e)?e.call(this,this):e)}:e:t}function sg(t,e){return fs(Al(t),Al(e))}function Al(t){if(ze(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Wt(t,e){return t?[...new Set([].concat(t,e))]:e}function fs(t,e){return t?Ut(Object.create(null),t,e):e}function Tu(t,e){return t?ze(t)&&ze(e)?[...new Set([...t,...e])]:Ut(Object.create(null),Mu(t),Mu(e??{})):e}function og(t,e){if(!t)return e;if(!e)return t;const n=Ut(Object.create(null),t);for(const i in e)n[i]=Wt(t[i],e[i]);return n}function hh(){return{app:null,config:{isNativeTag:gd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ag=0;function lg(t,e){return function(i,r=null){qe(i)||(i=Ut({},i)),r!=null&&!dt(r)&&(r=null);const s=hh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:ag++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:kg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&qe(u.install)?(o.add(u),u.install(c,...f)):qe(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Ht(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,pa(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(An(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=rr;rr=c;try{return u()}finally{rr=f}}};return c}}let rr=null;const cg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${_n(e)}Modifiers`]||t[`${Li(e)}Modifiers`];function ug(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pt;let r=n;const s=e.startsWith("update:"),o=s&&cg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>bt(u)?u.trim():u)),o.number&&(r=n.map(Pc)));let a,l=i[a=ba(e)]||i[a=ba(_n(e))];!l&&s&&(l=i[a=ba(Li(e))]),l&&An(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,An(c,t,6,r)}}const fg=new WeakMap;function ph(t,e,n=!1){const i=n?fg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!qe(t)){const l=c=>{const u=ph(c,e,!0);u&&(a=!0,Ut(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(dt(t)&&i.set(t,null),null):(ze(s)?s.forEach(l=>o[l]=null):Ut(o,s),dt(t)&&i.set(t,o),o)}function da(t,e){return!t||!na(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Li(e))||lt(t,e))}function Au(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:x}=t,m=Go(t);let p,A;try{if(n.shapeFlag&4){const y=r||i,P=y;p=Dn(c.call(P,y,u,f,h,d,g)),A=a}else{const y=e;p=Dn(y.length>1?y(f,{attrs:a,slots:o,emit:l}):y(f,null)),A=e.props?a:dg(a)}}catch(y){ys.length=0,ca(y,t,1),p=Ht(Kt)}let T=p;if(A&&x!==!1){const y=Object.keys(A),{shapeFlag:P}=T;y.length&&P&7&&(s&&y.some(Rc)&&(A=hg(A,s)),T=Pi(T,A,!1,!0))}return n.dirs&&(T=Pi(T,null,!1,!0),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&ws(T,n.transition),p=T,Go(m),p}const dg=t=>{let e;for(const n in t)(n==="class"||n==="style"||na(n))&&((e||(e={}))[n]=t[n]);return e},hg=(t,e)=>{const n={};for(const i in t)(!Rc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function pg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?wu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!da(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?wu(i,o,c):!0:!!o;return!1}function wu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!da(n,s))return!0}return!1}function mg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const mh={},gh=()=>Object.create(mh),_h=t=>Object.getPrototypeOf(t)===mh;function gg(t,e,n,i=!1){const r={},s=gh();t.propsDefaults=Object.create(null),vh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Vd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function _g(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=it(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(da(t.emitsOptions,d))continue;const h=e[d];if(l)if(lt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=_n(d);r[g]=wl(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{vh(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=Li(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=wl(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&Qn(t.attrs,"set","")}function vh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(ps(l))continue;const c=e[l];let u;r&&lt(r,u=_n(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:da(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(n),c=a||pt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=wl(r,l,f,c[f],t,!lt(c,f))}}return o}function wl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&qe(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Hs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Li(n))&&(i=!0))}return i}const vg=new WeakMap;function xh(t,e,n=!1){const i=n?vg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!qe(t)){const u=f=>{l=!0;const[d,h]=xh(f,e,!0);Ut(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return dt(t)&&i.set(t,Lr),Lr;if(ze(s))for(let u=0;u<s.length;u++){const f=_n(s[u]);Ru(f)&&(o[f]=pt)}else if(s)for(const u in s){const f=_n(u);if(Ru(f)){const d=s[u],h=o[f]=ze(d)||qe(d)?{type:d}:Ut({},d),g=h.type;let x=!1,m=!0;if(ze(g))for(let p=0;p<g.length;++p){const A=g[p],T=qe(A)&&A.name;if(T==="Boolean"){x=!0;break}else T==="String"&&(m=!1)}else x=qe(g)&&g.name==="Boolean";h[0]=x,h[1]=m,(x||lt(h,"default"))&&a.push(f)}}const c=[o,a];return dt(t)&&i.set(t,c),c}function Ru(t){return t[0]!=="$"&&!ps(t)}const Hc=t=>t==="_"||t==="_ctx"||t==="$stable",Vc=t=>ze(t)?t.map(Dn):[Dn(t)],xg=(t,e,n)=>{if(e._n)return e;const i=jd((...r)=>Vc(e(...r)),n);return i._c=!1,i},Sh=(t,e,n)=>{const i=t._ctx;for(const r in t){if(Hc(r))continue;const s=t[r];if(qe(s))e[r]=xg(r,s,i);else if(s!=null){const o=Vc(s);e[r]=()=>o}}},yh=(t,e)=>{const n=Vc(e);t.slots.default=()=>n},Mh=(t,e,n)=>{for(const i in e)(n||!Hc(i))&&(t[i]=e[i])},Sg=(t,e,n)=>{const i=t.slots=gh();if(t.vnode.shapeFlag&32){const r=e._;r?(Mh(i,e,n),n&&yd(i,"_",r,!0)):Sh(e,i)}else e&&yh(t,e)},yg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Mh(r,e,n):(s=!e.$stable,Sh(e,r)),o=e}else e&&(yh(t,e),o={default:1});if(s)for(const a in r)!Hc(a)&&o[a]==null&&delete r[a]},qt=Ag;function Mg(t){return bg(t)}function bg(t,e){const n=oa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Bn,insertStaticContent:g}=t,x=(w,_,F,W=null,te=null,G=null,de=void 0,Q=null,le=!!_.dynamicChildren)=>{if(w===_)return;w&&!Ki(w,_)&&(W=N(w),Me(w,te,G,!0),w=null),_.patchFlag===-2&&(le=!1,_.dynamicChildren=null);const{type:ce,ref:Te,shapeFlag:b}=_;switch(ce){case ha:m(w,_,F,W);break;case Kt:p(w,_,F,W);break;case Po:w==null&&A(_,F,W,de);break;case wt:B(w,_,F,W,te,G,de,Q,le);break;default:b&1?P(w,_,F,W,te,G,de,Q,le):b&6?X(w,_,F,W,te,G,de,Q,le):(b&64||b&128)&&ce.process(w,_,F,W,te,G,de,Q,le,oe)}Te!=null&&te?vs(Te,w&&w.ref,G,_||w,!_):Te==null&&w&&w.ref!=null&&vs(w.ref,null,G,w,!0)},m=(w,_,F,W)=>{if(w==null)i(_.el=a(_.children),F,W);else{const te=_.el=w.el;_.children!==w.children&&c(te,_.children)}},p=(w,_,F,W)=>{w==null?i(_.el=l(_.children||""),F,W):_.el=w.el},A=(w,_,F,W)=>{[w.el,w.anchor]=g(w.children,_,F,W,w.el,w.anchor)},T=({el:w,anchor:_},F,W)=>{let te;for(;w&&w!==_;)te=d(w),i(w,F,W),w=te;i(_,F,W)},y=({el:w,anchor:_})=>{let F;for(;w&&w!==_;)F=d(w),r(w),w=F;r(_)},P=(w,_,F,W,te,G,de,Q,le)=>{if(_.type==="svg"?de="svg":_.type==="math"&&(de="mathml"),w==null)I(_,F,W,te,G,de,Q,le);else{const ce=w.el&&w.el._isVueCE?w.el:null;try{ce&&ce._beginPatch(),S(w,_,te,G,de,Q,le)}finally{ce&&ce._endPatch()}}},I=(w,_,F,W,te,G,de,Q)=>{let le,ce;const{props:Te,shapeFlag:b,transition:v,dirs:U}=w;if(le=w.el=o(w.type,G,Te&&Te.is,Te),b&8?u(le,w.children):b&16&&D(w.children,le,null,W,te,Pa(w,G),de,Q),U&&Fi(w,null,W,"created"),C(le,w,w.scopeId,de,W),Te){for(const ae in Te)ae!=="value"&&!ps(ae)&&s(le,ae,null,Te[ae],G,W);"value"in Te&&s(le,"value",null,Te.value,G),(ce=Te.onVnodeBeforeMount)&&Pn(ce,W,w)}U&&Fi(w,null,W,"beforeMount");const K=Eg(te,v);K&&v.beforeEnter(le),i(le,_,F),((ce=Te&&Te.onVnodeMounted)||K||U)&&qt(()=>{ce&&Pn(ce,W,w),K&&v.enter(le),U&&Fi(w,null,W,"mounted")},te)},C=(w,_,F,W,te)=>{if(F&&h(w,F),W)for(let G=0;G<W.length;G++)h(w,W[G]);if(te){let G=te.subTree;if(_===G||Th(G.type)&&(G.ssContent===_||G.ssFallback===_)){const de=te.vnode;C(w,de,de.scopeId,de.slotScopeIds,te.parent)}}},D=(w,_,F,W,te,G,de,Q,le=0)=>{for(let ce=le;ce<w.length;ce++){const Te=w[ce]=Q?bi(w[ce]):Dn(w[ce]);x(null,Te,_,F,W,te,G,de,Q)}},S=(w,_,F,W,te,G,de)=>{const Q=_.el=w.el;let{patchFlag:le,dynamicChildren:ce,dirs:Te}=_;le|=w.patchFlag&16;const b=w.props||pt,v=_.props||pt;let U;if(F&&Oi(F,!1),(U=v.onVnodeBeforeUpdate)&&Pn(U,F,_,w),Te&&Fi(_,w,F,"beforeUpdate"),F&&Oi(F,!0),(b.innerHTML&&v.innerHTML==null||b.textContent&&v.textContent==null)&&u(Q,""),ce?M(w.dynamicChildren,ce,Q,F,W,Pa(_,te),G):de||L(w,_,Q,null,F,W,Pa(_,te),G,!1),le>0){if(le&16)R(Q,b,v,F,te);else if(le&2&&b.class!==v.class&&s(Q,"class",null,v.class,te),le&4&&s(Q,"style",b.style,v.style,te),le&8){const K=_.dynamicProps;for(let ae=0;ae<K.length;ae++){const j=K[ae],we=b[j],he=v[j];(he!==we||j==="value")&&s(Q,j,we,he,te,F)}}le&1&&w.children!==_.children&&u(Q,_.children)}else!de&&ce==null&&R(Q,b,v,F,te);((U=v.onVnodeUpdated)||Te)&&qt(()=>{U&&Pn(U,F,_,w),Te&&Fi(_,w,F,"updated")},W)},M=(w,_,F,W,te,G,de)=>{for(let Q=0;Q<_.length;Q++){const le=w[Q],ce=_[Q],Te=le.el&&(le.type===wt||!Ki(le,ce)||le.shapeFlag&198)?f(le.el):F;x(le,ce,Te,null,W,te,G,de,!0)}},R=(w,_,F,W,te)=>{if(_!==F){if(_!==pt)for(const G in _)!ps(G)&&!(G in F)&&s(w,G,_[G],null,te,W);for(const G in F){if(ps(G))continue;const de=F[G],Q=_[G];de!==Q&&G!=="value"&&s(w,G,Q,de,te,W)}"value"in F&&s(w,"value",_.value,F.value,te)}},B=(w,_,F,W,te,G,de,Q,le)=>{const ce=_.el=w?w.el:a(""),Te=_.anchor=w?w.anchor:a("");let{patchFlag:b,dynamicChildren:v,slotScopeIds:U}=_;U&&(Q=Q?Q.concat(U):U),w==null?(i(ce,F,W),i(Te,F,W),D(_.children||[],F,Te,te,G,de,Q,le)):b>0&&b&64&&v&&w.dynamicChildren&&w.dynamicChildren.length===v.length?(M(w.dynamicChildren,v,F,te,G,de,Q),(_.key!=null||te&&_===te.subTree)&&Gc(w,_,!0)):L(w,_,F,Te,te,G,de,Q,le)},X=(w,_,F,W,te,G,de,Q,le)=>{_.slotScopeIds=Q,w==null?_.shapeFlag&512?te.ctx.activate(_,F,W,de,le):q(_,F,W,te,G,de,le):Y(w,_,le)},q=(w,_,F,W,te,G,de)=>{const Q=w.component=Lg(w,W,te);if(ua(w)&&(Q.ctx.renderer=oe),Ug(Q,!1,de),Q.asyncDep){if(te&&te.registerDep(Q,$,de),!w.el){const le=Q.subTree=Ht(Kt);p(null,le,_,F),w.placeholder=le.el}}else $(Q,w,_,F,te,G,de)},Y=(w,_,F)=>{const W=_.component=w.component;if(pg(w,_,F))if(W.asyncDep&&!W.asyncResolved){z(W,_,F);return}else W.next=_,W.update();else _.el=w.el,W.vnode=_},$=(w,_,F,W,te,G,de)=>{const Q=()=>{if(w.isMounted){let{next:b,bu:v,u:U,parent:K,vnode:ae}=w;{const Ce=bh(w);if(Ce){b&&(b.el=ae.el,z(w,b,de)),Ce.asyncDep.then(()=>{w.isUnmounted||Q()});return}}let j=b,we;Oi(w,!1),b?(b.el=ae.el,z(w,b,de)):b=ae,v&&wo(v),(we=b.props&&b.props.onVnodeBeforeUpdate)&&Pn(we,K,b,ae),Oi(w,!0);const he=Au(w),Re=w.subTree;w.subTree=he,x(Re,he,f(Re.el),N(Re),w,te,G),b.el=he.el,j===null&&mg(w,he.el),U&&qt(U,te),(we=b.props&&b.props.onVnodeUpdated)&&qt(()=>Pn(we,K,b,ae),te)}else{let b;const{el:v,props:U}=_,{bm:K,m:ae,parent:j,root:we,type:he}=w,Re=xs(_);Oi(w,!1),K&&wo(K),!Re&&(b=U&&U.onVnodeBeforeMount)&&Pn(b,j,_),Oi(w,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(he);const Ce=w.subTree=Au(w);x(null,Ce,F,W,w,te,G),_.el=Ce.el}if(ae&&qt(ae,te),!Re&&(b=U&&U.onVnodeMounted)){const Ce=_;qt(()=>Pn(b,j,Ce),te)}(_.shapeFlag&256||j&&xs(j.vnode)&&j.vnode.shapeFlag&256)&&w.a&&qt(w.a,te),w.isMounted=!0,_=F=W=null}};w.scope.on();const le=w.effect=new Rd(Q);w.scope.off();const ce=w.update=le.run.bind(le),Te=w.job=le.runIfDirty.bind(le);Te.i=w,Te.id=w.uid,le.scheduler=()=>zc(Te),Oi(w,!0),ce()},z=(w,_,F)=>{_.component=w;const W=w.vnode.props;w.vnode=_,w.next=null,_g(w,_.props,W,F),yg(w,_.children,F),si(),mu(w),oi()},L=(w,_,F,W,te,G,de,Q,le=!1)=>{const ce=w&&w.children,Te=w?w.shapeFlag:0,b=_.children,{patchFlag:v,shapeFlag:U}=_;if(v>0){if(v&128){fe(ce,b,F,W,te,G,de,Q,le);return}else if(v&256){ie(ce,b,F,W,te,G,de,Q,le);return}}U&8?(Te&16&&me(ce,te,G),b!==ce&&u(F,b)):Te&16?U&16?fe(ce,b,F,W,te,G,de,Q,le):me(ce,te,G,!0):(Te&8&&u(F,""),U&16&&D(b,F,W,te,G,de,Q,le))},ie=(w,_,F,W,te,G,de,Q,le)=>{w=w||Lr,_=_||Lr;const ce=w.length,Te=_.length,b=Math.min(ce,Te);let v;for(v=0;v<b;v++){const U=_[v]=le?bi(_[v]):Dn(_[v]);x(w[v],U,F,null,te,G,de,Q,le)}ce>Te?me(w,te,G,!0,!1,b):D(_,F,W,te,G,de,Q,le,b)},fe=(w,_,F,W,te,G,de,Q,le)=>{let ce=0;const Te=_.length;let b=w.length-1,v=Te-1;for(;ce<=b&&ce<=v;){const U=w[ce],K=_[ce]=le?bi(_[ce]):Dn(_[ce]);if(Ki(U,K))x(U,K,F,null,te,G,de,Q,le);else break;ce++}for(;ce<=b&&ce<=v;){const U=w[b],K=_[v]=le?bi(_[v]):Dn(_[v]);if(Ki(U,K))x(U,K,F,null,te,G,de,Q,le);else break;b--,v--}if(ce>b){if(ce<=v){const U=v+1,K=U<Te?_[U].el:W;for(;ce<=v;)x(null,_[ce]=le?bi(_[ce]):Dn(_[ce]),F,K,te,G,de,Q,le),ce++}}else if(ce>v)for(;ce<=b;)Me(w[ce],te,G,!0),ce++;else{const U=ce,K=ce,ae=new Map;for(ce=K;ce<=v;ce++){const Le=_[ce]=le?bi(_[ce]):Dn(_[ce]);Le.key!=null&&ae.set(Le.key,ce)}let j,we=0;const he=v-K+1;let Re=!1,Ce=0;const pe=new Array(he);for(ce=0;ce<he;ce++)pe[ce]=0;for(ce=U;ce<=b;ce++){const Le=w[ce];if(we>=he){Me(Le,te,G,!0);continue}let Pe;if(Le.key!=null)Pe=ae.get(Le.key);else for(j=K;j<=v;j++)if(pe[j-K]===0&&Ki(Le,_[j])){Pe=j;break}Pe===void 0?Me(Le,te,G,!0):(pe[Pe-K]=ce+1,Pe>=Ce?Ce=Pe:Re=!0,x(Le,_[Pe],F,null,te,G,de,Q,le),we++)}const Ee=Re?Tg(pe):Lr;for(j=Ee.length-1,ce=he-1;ce>=0;ce--){const Le=K+ce,Pe=_[Le],ye=_[Le+1],We=Le+1<Te?ye.el||Eh(ye):W;pe[ce]===0?x(null,Pe,F,We,te,G,de,Q,le):Re&&(j<0||ce!==Ee[j]?ve(Pe,F,We,2):j--)}}},ve=(w,_,F,W,te=null)=>{const{el:G,type:de,transition:Q,children:le,shapeFlag:ce}=w;if(ce&6){ve(w.component.subTree,_,F,W);return}if(ce&128){w.suspense.move(_,F,W);return}if(ce&64){de.move(w,_,F,oe);return}if(de===wt){i(G,_,F);for(let b=0;b<le.length;b++)ve(le[b],_,F,W);i(w.anchor,_,F);return}if(de===Po){T(w,_,F);return}if(W!==2&&ce&1&&Q)if(W===0)Q.beforeEnter(G),i(G,_,F),qt(()=>Q.enter(G),te);else{const{leave:b,delayLeave:v,afterLeave:U}=Q,K=()=>{w.ctx.isUnmounted?r(G):i(G,_,F)},ae=()=>{G._isLeaving&&G[Jn](!0),b(G,()=>{K(),U&&U()})};v?v(G,K,ae):ae()}else i(G,_,F)},Me=(w,_,F,W=!1,te=!1)=>{const{type:G,props:de,ref:Q,children:le,dynamicChildren:ce,shapeFlag:Te,patchFlag:b,dirs:v,cacheIndex:U}=w;if(b===-2&&(te=!1),Q!=null&&(si(),vs(Q,null,F,w,!0),oi()),U!=null&&(_.renderCache[U]=void 0),Te&256){_.ctx.deactivate(w);return}const K=Te&1&&v,ae=!xs(w);let j;if(ae&&(j=de&&de.onVnodeBeforeUnmount)&&Pn(j,_,w),Te&6)ne(w.component,F,W);else{if(Te&128){w.suspense.unmount(F,W);return}K&&Fi(w,null,_,"beforeUnmount"),Te&64?w.type.remove(w,_,F,oe,W):ce&&!ce.hasOnce&&(G!==wt||b>0&&b&64)?me(ce,_,F,!1,!0):(G===wt&&b&384||!te&&Te&16)&&me(le,_,F),W&&$e(w)}(ae&&(j=de&&de.onVnodeUnmounted)||K)&&qt(()=>{j&&Pn(j,_,w),K&&Fi(w,null,_,"unmounted")},F)},$e=w=>{const{type:_,el:F,anchor:W,transition:te}=w;if(_===wt){ke(F,W);return}if(_===Po){y(w);return}const G=()=>{r(F),te&&!te.persisted&&te.afterLeave&&te.afterLeave()};if(w.shapeFlag&1&&te&&!te.persisted){const{leave:de,delayLeave:Q}=te,le=()=>de(F,G);Q?Q(w.el,G,le):le()}else G()},ke=(w,_)=>{let F;for(;w!==_;)F=d(w),r(w),w=F;r(_)},ne=(w,_,F)=>{const{bum:W,scope:te,job:G,subTree:de,um:Q,m:le,a:ce}=w;Cu(le),Cu(ce),W&&wo(W),te.stop(),G&&(G.flags|=8,Me(de,w,_,F)),Q&&qt(Q,_),qt(()=>{w.isUnmounted=!0},_)},me=(w,_,F,W=!1,te=!1,G=0)=>{for(let de=G;de<w.length;de++)Me(w[de],_,F,W,te)},N=w=>{if(w.shapeFlag&6)return N(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const _=d(w.anchor||w.el),F=_&&_[Qd];return F?d(F):_};let se=!1;const V=(w,_,F)=>{let W;w==null?_._vnode&&(Me(_._vnode,null,null,!0),W=_._vnode.component):x(_._vnode||null,w,_,null,null,null,F),_._vnode=w,se||(se=!0,mu(W),Yd(),se=!1)},oe={p:x,um:Me,m:ve,r:$e,mt:q,mc:D,pc:L,pbc:M,n:N,o:t};return{render:V,hydrate:void 0,createApp:lg(V)}}function Pa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Oi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Eg(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gc(t,e,n=!1){const i=t.children,r=e.children;if(ze(i)&&ze(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=bi(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&Gc(o,a)),a.type===ha&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(t.type===wt?1:0)),a.type===Kt&&!a.el&&(a.el=o.el)}}function Tg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function bh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:bh(e)}function Cu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Eh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Eh(e.subTree):null}const Th=t=>t.__isSuspense;function Ag(t,e){e&&e.pendingBranch?ze(t)?e.effects.push(...t):e.effects.push(t):Pm(t)}const wt=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),ys=[];let an=null;function Ke(t=!1){ys.push(an=t?null:[])}function wg(){ys.pop(),an=ys[ys.length-1]||null}let Rs=1;function Yo(t,e=!1){Rs+=t,t<0&&an&&e&&(an.hasOnce=!0)}function Ah(t){return t.dynamicChildren=Rs>0?an||Lr:null,wg(),Rs>0&&an&&an.push(t),t}function Qe(t,e,n,i,r,s){return Ah(re(t,e,n,i,r,s,!0))}function Qi(t,e,n,i,r){return Ah(Ht(t,e,n,i,r,!0))}function $o(t){return t?t.__v_isVNode===!0:!1}function Ki(t,e){return t.type===e.type&&t.key===e.key}const wh=({key:t})=>t??null,Io=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?bt(t)||Mt(t)||qe(t)?{i:on,r:t,k:e,f:!!n}:t:null);function re(t,e=null,n=null,i=0,r=null,s=t===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&wh(e),ref:e&&Io(e),scopeId:Kd,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:on};return a?(Wc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=bt(n)?8:16),Rs>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const Ht=Rg;function Rg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Qm)&&(t=Kt),$o(t)){const a=Pi(t,e,!0);return n&&Wc(a,n),Rs>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag=-2,a}if(zg(t)&&(t=t.__vccOpts),e){e=Cg(e);let{class:a,style:l}=e;a&&!bt(a)&&(e.class=En(a)),dt(l)&&(la(l)&&!ze(l)&&(l=Ut({},l)),e.style=Bs(l))}const o=bt(t)?1:Th(t)?128:eh(t)?64:dt(t)?4:qe(t)?2:0;return re(t,e,n,i,r,o,s,!0)}function Cg(t){return t?la(t)||_h(t)?Ut({},t):t:null}function Pi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Pg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&wh(c),ref:e&&e.ref?n&&s?ze(s)?s.concat(Io(e)):[s,Io(e)]:Io(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Pi(t.ssContent),ssFallback:t.ssFallback&&Pi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&ws(u,l.clone(u)),u}function Or(t=" ",e=0){return Ht(ha,null,t,e)}function Rl(t,e){const n=Ht(Po,null,t);return n.staticCount=e,n}function Qt(t="",e=!1){return e?(Ke(),Qi(Kt,null,t)):Ht(Kt,null,t)}function Dn(t){return t==null||typeof t=="boolean"?Ht(Kt):ze(t)?Ht(wt,null,t.slice()):$o(t)?bi(t):Ht(ha,null,String(t))}function bi(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Pi(t)}function Wc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(ze(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Wc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!_h(e)?e._ctx=on:r===3&&on&&(on.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else qe(e)?(e={default:e,_ctx:on},n=32):(e=String(e),i&64?(n=16,e=[Or(e)]):n=8);t.children=e,t.shapeFlag|=n}function Pg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=En([e.class,i.class]));else if(r==="style")e.style=Bs([e.style,i.style]);else if(na(r)){const s=e[r],o=i[r];o&&s!==o&&!(ze(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Pn(t,e,n,i=null){An(t,e,7,[n,i])}const Ig=hh();let Dg=0;function Lg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Ig,s={uid:Dg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Td(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xh(i,r),emitsOptions:ph(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=ug.bind(null,s),t.ce&&t.ce(s),s}let kt=null;const Xc=()=>kt||on;let Ko,Cl;{const t=oa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Ko=e("__VUE_INSTANCE_SETTERS__",n=>kt=n),Cl=e("__VUE_SSR_SETTERS__",n=>Cs=n)}const Hs=t=>{const e=kt;return Ko(t),t.scope.on(),()=>{t.scope.off(),Ko(e)}},Pu=()=>{kt&&kt.scope.off(),Ko(null)};function Rh(t){return t.vnode.shapeFlag&4}let Cs=!1;function Ug(t,e=!1,n=!1){e&&Cl(e);const{props:i,children:r}=t.vnode,s=Rh(t);gg(t,i,s,e),Sg(t,r,n||e);const o=s?Ng(t,e):void 0;return e&&Cl(!1),o}function Ng(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,tg);const{setup:i}=n;if(i){si();const r=t.setupContext=i.length>1?Og(t):null,s=Hs(t),o=ks(i,t,0,[t.props,r]),a=vd(o);if(oi(),s(),(a||t.sp)&&!xs(t)&&lh(t),a){if(o.then(Pu,Pu),e)return o.then(l=>{Iu(t,l)}).catch(l=>{ca(l,t,0)});t.asyncDep=o}else Iu(t,o)}else Ch(t)}function Iu(t,e,n){qe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=Wd(e)),Ch(t)}function Ch(t,e,n){const i=t.type;t.render||(t.render=i.render||Bn);{const r=Hs(t);si();try{ng(t)}finally{oi(),r()}}}const Fg={get(t,e){return Bt(t,"get",""),t[e]}};function Og(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Fg),slots:t.slots,emit:t.emit,expose:e}}function pa(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Wd(Oc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ss)return Ss[n](t)},has(e,n){return n in e||n in Ss}})):t.proxy}function Bg(t,e=!0){return qe(t)?t.displayName||t.name:t.name||e&&t.__name}function zg(t){return qe(t)&&"__vccOpts"in t}const Xe=(t,e)=>Tm(t,e,Cs);function qc(t,e,n){try{Yo(-1);const i=arguments.length;return i===2?dt(e)&&!ze(e)?$o(e)?Ht(t,null,[e]):Ht(t,e):Ht(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&$o(n)&&(n=[n]),Ht(t,e,n))}finally{Yo(1)}}const kg="3.5.26";let Pl;const Du=typeof window<"u"&&window.trustedTypes;if(Du)try{Pl=Du.createPolicy("vue",{createHTML:t=>t})}catch{}const Ph=Pl?t=>Pl.createHTML(t):t=>t,Hg="http://www.w3.org/2000/svg",Vg="http://www.w3.org/1998/Math/MathML",Zn=typeof document<"u"?document:null,Lu=Zn&&Zn.createElement("template"),Gg={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?Zn.createElementNS(Hg,t):e==="mathml"?Zn.createElementNS(Vg,t):n?Zn.createElement(t,{is:n}):Zn.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>Zn.createTextNode(t),createComment:t=>Zn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Lu.innerHTML=Ph(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Lu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},di="transition",ns="animation",Ps=Symbol("_vtc"),Ih={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Wg=Ut({},ih,Ih),Xg=t=>(t.displayName="Transition",t.props=Wg,t),qg=Xg((t,{slots:e})=>qc(km,Yg(t),e)),Bi=(t,e=[])=>{ze(t)?t.forEach(n=>n(...e)):t&&t(...e)},Uu=t=>t?ze(t)?t.some(e=>e.length>1):t.length>1:!1;function Yg(t){const e={};for(const B in t)B in Ih||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=$g(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:T,onLeave:y,onLeaveCancelled:P,onBeforeAppear:I=p,onAppear:C=A,onAppearCancelled:D=T}=e,S=(B,X,q,Y)=>{B._enterCancelled=Y,zi(B,X?u:a),zi(B,X?c:o),q&&q()},M=(B,X)=>{B._isLeaving=!1,zi(B,f),zi(B,h),zi(B,d),X&&X()},R=B=>(X,q)=>{const Y=B?C:A,$=()=>S(X,B,q);Bi(Y,[X,$]),Nu(()=>{zi(X,B?l:s),Gn(X,B?u:a),Uu(Y)||Fu(X,i,x,$)})};return Ut(e,{onBeforeEnter(B){Bi(p,[B]),Gn(B,s),Gn(B,o)},onBeforeAppear(B){Bi(I,[B]),Gn(B,l),Gn(B,c)},onEnter:R(!1),onAppear:R(!0),onLeave(B,X){B._isLeaving=!0;const q=()=>M(B,X);Gn(B,f),B._enterCancelled?(Gn(B,d),zu(B)):(zu(B),Gn(B,d)),Nu(()=>{B._isLeaving&&(zi(B,f),Gn(B,h),Uu(y)||Fu(B,i,m,q))}),Bi(y,[B,q])},onEnterCancelled(B){S(B,!1,void 0,!0),Bi(T,[B])},onAppearCancelled(B){S(B,!0,void 0,!0),Bi(D,[B])},onLeaveCancelled(B){M(B),Bi(P,[B])}})}function $g(t){if(t==null)return null;if(dt(t))return[Ia(t.enter),Ia(t.leave)];{const e=Ia(t);return[e,e]}}function Ia(t){return Wp(t)}function Gn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Ps]||(t[Ps]=new Set)).add(e)}function zi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Ps];n&&(n.delete(e),n.size||(t[Ps]=void 0))}function Nu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Kg=0;function Fu(t,e,n,i){const r=t._endId=++Kg,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=jg(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function jg(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${di}Delay`),s=i(`${di}Duration`),o=Ou(r,s),a=i(`${ns}Delay`),l=i(`${ns}Duration`),c=Ou(a,l);let u=null,f=0,d=0;e===di?o>0&&(u=di,f=o,d=s.length):e===ns?c>0&&(u=ns,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?di:ns:null,d=u?u===di?s.length:l.length:0);const h=u===di&&/\b(?:transform|all)(?:,|$)/.test(i(`${di}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Ou(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>Bu(n)+Bu(t[i])))}function Bu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zu(t){return(t?t.ownerDocument:document).body.offsetHeight}function Zg(t,e,n){const i=t[Ps];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ku=Symbol("_vod"),Jg=Symbol("_vsh"),Qg=Symbol(""),e_=/(?:^|;)\s*display\s*:/;function t_(t,e,n){const i=t.style,r=bt(n);let s=!1;if(n&&!r){if(e)if(bt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Do(i,a,"")}else for(const o in e)n[o]==null&&Do(i,o,"");for(const o in n)o==="display"&&(s=!0),Do(i,o,n[o])}else if(r){if(e!==n){const o=i[Qg];o&&(n+=";"+o),i.cssText=n,s=e_.test(n)}}else e&&t.removeAttribute("style");ku in t&&(t[ku]=s?i.display:"",t[Jg]&&(i.display="none"))}const Hu=/\s*!important$/;function Do(t,e,n){if(ze(n))n.forEach(i=>Do(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=n_(t,e);Hu.test(n)?t.setProperty(Li(i),n.replace(Hu,""),"important"):t[i]=n}}const Vu=["Webkit","Moz","ms"],Da={};function n_(t,e){const n=Da[e];if(n)return n;let i=_n(e);if(i!=="filter"&&i in t)return Da[e]=i;i=sa(i);for(let r=0;r<Vu.length;r++){const s=Vu[r]+i;if(s in t)return Da[e]=s}return e}const Gu="http://www.w3.org/1999/xlink";function Wu(t,e,n,i,r,s=jp(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Gu,e.slice(6,e.length)):t.setAttributeNS(Gu,e,n):n==null||s&&!Md(n)?t.removeAttribute(e):t.setAttribute(e,s?"":kn(n)?String(n):n)}function Xu(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ph(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Md(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function ji(t,e,n,i){t.addEventListener(e,n,i)}function i_(t,e,n,i){t.removeEventListener(e,n,i)}const qu=Symbol("_vei");function r_(t,e,n,i,r=null){const s=t[qu]||(t[qu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=s_(e);if(i){const c=s[e]=l_(i,r);ji(t,a,c,l)}else o&&(i_(t,a,o,l),s[e]=void 0)}}const Yu=/(?:Once|Passive|Capture)$/;function s_(t){let e;if(Yu.test(t)){e={};let i;for(;i=t.match(Yu);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Li(t.slice(2)),e]}let La=0;const o_=Promise.resolve(),a_=()=>La||(o_.then(()=>La=0),La=Date.now());function l_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;An(c_(i,n.value),e,5,[i])};return n.value=t,n.attached=a_(),n}function c_(t,e){if(ze(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const $u=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,u_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Zg(t,i,o):e==="style"?t_(t,n,i):na(e)?Rc(e)||r_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):f_(t,e,i,o))?(Xu(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Wu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!bt(i))?Xu(t,_n(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Wu(t,e,i,o))};function f_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&$u(e)&&qe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return $u(e)&&bt(n)?!1:e in t}const jo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ze(e)?n=>wo(e,n):e};function d_(t){t.target.composing=!0}function Ku(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Br=Symbol("_assign");function ju(t,e,n){return e&&(t=t.trim()),n&&(t=Pc(t)),t}const h_={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Br]=jo(r);const s=i||r.props&&r.props.type==="number";ji(t,e?"change":"input",o=>{o.target.composing||t[Br](ju(t.value,n,s))}),(n||s)&&ji(t,"change",()=>{t.value=ju(t.value,n,s)}),e||(ji(t,"compositionstart",d_),ji(t,"compositionend",Ku),ji(t,"change",Ku))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Br]=jo(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Pc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},p_={created(t,{value:e},n){t.checked=zo(e,n.props.value),t[Br]=jo(n),ji(t,"change",()=>{t[Br](m_(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Br]=jo(i),e!==n&&(t.checked=zo(e,i.props.value))}};function m_(t){return"_value"in t?t._value:t.value}const g_=["ctrl","shift","alt","meta"],__={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>g_.some(n=>t[`${n}Key`]&&!e.includes(n))},v_=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=__[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},x_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},S_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=Li(r.key);if(e.some(o=>o===s||x_[o]===s))return t(r)}))},y_=Ut({patchProp:u_},Gg);let Zu;function M_(){return Zu||(Zu=Mg(y_))}const b_=((...t)=>{const e=M_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=T_(i);if(!r)return;const s=e._component;!qe(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,E_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function E_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function T_(t){return bt(t)?document.querySelector(t):t}let Dh;const ma=t=>Dh=t,Lh=Symbol();function Il(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ms;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ms||(Ms={}));function A_(){const t=Ad(!0),e=t.run(()=>Dt({}));let n=[],i=[];const r=Oc({install(s){ma(r),r._a=s,s.provide(Lh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const Uh=()=>{};function Ju(t,e,n,i=Uh){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&wd()&&Jp(r),r}function fr(t,...e){t.slice().forEach(n=>{n(...e)})}const w_=t=>t(),Qu=Symbol(),Ua=Symbol();function Dl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Il(r)&&Il(i)&&t.hasOwnProperty(n)&&!Mt(i)&&!ni(i)?t[n]=Dl(r,i):t[n]=i}return t}const R_=Symbol();function C_(t){return!Il(t)||!t.hasOwnProperty(R_)}const{assign:Si}=Object;function P_(t){return!!(Mt(t)&&t.effect)}function I_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=ym(n.state.value[t]);return Si(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=Oc(Xe(()=>{ma(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=Nh(t,c,e,n,i,!0),l}function Nh(t,e,n={},i,r,s){let o;const a=Si({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),Dt({});let x;function m(D){let S;c=u=!1,typeof D=="function"?(D(i.state.value[t]),S={type:Ms.patchFunction,storeId:t,events:h}):(Dl(i.state.value[t],D),S={type:Ms.patchObject,payload:D,storeId:t,events:h});const M=x=Symbol();Bc().then(()=>{x===M&&(c=!0)}),u=!0,fr(f,S,i.state.value[t])}const p=s?function(){const{state:S}=n,M=S?S():{};this.$patch(R=>{Si(R,M)})}:Uh;function A(){o.stop(),f=[],d=[],i._s.delete(t)}const T=(D,S="")=>{if(Qu in D)return D[Ua]=S,D;const M=function(){ma(i);const R=Array.from(arguments),B=[],X=[];function q(z){B.push(z)}function Y(z){X.push(z)}fr(d,{args:R,name:M[Ua],store:P,after:q,onError:Y});let $;try{$=D.apply(this&&this.$id===t?this:P,R)}catch(z){throw fr(X,z),z}return $ instanceof Promise?$.then(z=>(fr(B,z),z)).catch(z=>(fr(X,z),Promise.reject(z))):(fr(B,$),$)};return M[Qu]=!0,M[Ua]=S,M},y={_p:i,$id:t,$onAction:Ju.bind(null,d),$patch:m,$reset:p,$subscribe(D,S={}){const M=Ju(f,D,S.detached,()=>R()),R=o.run(()=>Fr(()=>i.state.value[t],B=>{(S.flush==="sync"?u:c)&&D({storeId:t,type:Ms.direct,events:h},B)},Si({},l,S)));return M},$dispose:A},P=zs(y);i._s.set(t,P);const C=(i._a&&i._a.runWithContext||w_)(()=>i._e.run(()=>(o=Ad()).run(()=>e({action:T}))));for(const D in C){const S=C[D];if(Mt(S)&&!P_(S)||ni(S))s||(g&&C_(S)&&(Mt(S)?S.value=g[D]:Dl(S,g[D])),i.state.value[t][D]=S);else if(typeof S=="function"){const M=T(S,D);C[D]=M,a.actions[D]=S}}return Si(P,C),Si(it(P),C),Object.defineProperty(P,"$state",{get:()=>i.state.value[t],set:D=>{m(S=>{Si(S,D)})}}),i._p.forEach(D=>{Si(P,o.run(()=>D({store:P,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(P.$state,g),c=!0,u=!0,P}function Fh(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=Im();return a=a||(c?gn(Lh,null):null),a&&ma(a),a=Dh,a._s.has(i)||(s?Nh(i,e,r,a):I_(i,r,a)),a._s.get(i)}return o.$id=i,o}const Oh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},D_={};function L_(t,e){const n=Jm("RouterView");return Ke(),Qi(n)}const U_=Oh(D_,[["render",L_]]);const Ir=typeof document<"u";function Bh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function N_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Bh(t.default)}const at=Object.assign;function Na(t,e){const n={};for(const i in e){const r=e[i];n[i]=wn(r)?r.map(t):t(r)}return n}const bs=()=>{},wn=Array.isArray;function ef(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const zh=/#/g,F_=/&/g,O_=/\//g,B_=/=/g,z_=/\?/g,kh=/\+/g,k_=/%5B/g,H_=/%5D/g,Hh=/%5E/g,V_=/%60/g,Vh=/%7B/g,G_=/%7C/g,Gh=/%7D/g,W_=/%20/g;function Yc(t){return t==null?"":encodeURI(""+t).replace(G_,"|").replace(k_,"[").replace(H_,"]")}function X_(t){return Yc(t).replace(Vh,"{").replace(Gh,"}").replace(Hh,"^")}function Ll(t){return Yc(t).replace(kh,"%2B").replace(W_,"+").replace(zh,"%23").replace(F_,"%26").replace(V_,"`").replace(Vh,"{").replace(Gh,"}").replace(Hh,"^")}function q_(t){return Ll(t).replace(B_,"%3D")}function Y_(t){return Yc(t).replace(zh,"%23").replace(z_,"%3F")}function $_(t){return Y_(t).replace(O_,"%2F")}function Is(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const K_=/\/$/,j_=t=>t.replace(K_,"");function Fa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=e0(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Is(o)}}function Z_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function J_(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Wr(e.matched[i],n.matched[r])&&Wh(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Wr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wh(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Q_(t[n],e[n]))return!1;return!0}function Q_(t,e){return wn(t)?nf(t,e):wn(e)?nf(e,t):t?.valueOf()===e?.valueOf()}function nf(t,e){return wn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function e0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const hi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ul=(function(t){return t.pop="pop",t.push="push",t})({}),Oa=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function t0(t){if(!t)if(Ir){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),j_(t)}const n0=/^[^#]+#/;function i0(t,e){return t.replace(n0,"#")+e}function r0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ga=()=>({left:window.scrollX,top:window.scrollY});function s0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=r0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function rf(t,e){return(history.state?history.state.position-e:-1)+t}const Nl=new Map;function o0(t,e){Nl.set(t,e)}function a0(t){const e=Nl.get(t);return Nl.delete(t),e}function l0(t){return typeof t=="string"||t&&typeof t=="object"}function Xh(t){return typeof t=="string"||typeof t=="symbol"}let yt=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const qh=Symbol("");yt.MATCHER_NOT_FOUND+"",yt.NAVIGATION_GUARD_REDIRECT+"",yt.NAVIGATION_ABORTED+"",yt.NAVIGATION_CANCELLED+"",yt.NAVIGATION_DUPLICATED+"";function Xr(t,e){return at(new Error,{type:t,[qh]:!0},e)}function Wn(t,e){return t instanceof Error&&qh in t&&(e==null||!!(t.type&e))}const c0=["params","query","hash"];function u0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of c0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function f0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(kh," "),s=r.indexOf("="),o=Is(s<0?r:r.slice(0,s)),a=s<0?null:Is(r.slice(s+1));if(o in e){let l=e[o];wn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function sf(t){let e="";for(let n in t){const i=t[n];if(n=q_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(wn(i)?i.map(r=>r&&Ll(r)):[i&&Ll(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function d0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=wn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const h0=Symbol(""),of=Symbol(""),_a=Symbol(""),$c=Symbol(""),Fl=Symbol("");function is(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ei(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Xr(yt.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):l0(d)?l(Xr(yt.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ba(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Bh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ei(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=N_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ei(d,n,i,o,a,r)()}))}}return s}function p0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Wr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Wr(c,l))||r.push(l))}return[n,i,r]}let m0=()=>location.protocol+"//"+location.host;function Yh(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),tf(a,"")}return tf(n,t)+i+r}function g0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=Yh(t,location),g=n.value,x=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=x?d.position-x.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ul.pop,direction:m?m>0?Oa.forward:Oa.back:Oa.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(at({},d.state,{scroll:ga()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function af(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ga():null}}function _0(t){const{history:e,location:n}=window,i={value:Yh(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:m0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){s(l,at({},e.state,af(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=at({},r.value,e.state,{forward:l,scroll:ga()});s(u.current,u,!0),s(l,at({},af(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function v0(t){t=t0(t);const e=_0(t),n=g0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=at({location:"",base:t,go:i,createHref:i0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let er=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Rt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Rt||{});const x0={type:er.Static,value:""},S0=/[a-zA-Z0-9_]/;function y0(t){if(!t)return[[]];if(t==="/")return[[x0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Rt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===Rt.Static?s.push({type:er.Static,value:c}):n===Rt.Param||n===Rt.ParamRegExp||n===Rt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:er.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Rt.ParamRegExp){i=n,n=Rt.EscapeNext;continue}switch(n){case Rt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Rt.Param):d();break;case Rt.EscapeNext:d(),n=i;break;case Rt.Param:l==="("?n=Rt.ParamRegExp:S0.test(l)?d():(f(),n=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Rt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Rt.ParamRegExpEnd:u+=l;break;case Rt.ParamRegExpEnd:f(),n=Rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const lf="[^/]+?",M0={sensitive:!1,strict:!1,start:!0,end:!0};var Yt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Yt||{});const b0=/[.+*?^${}()[\]/\\]/g;function E0(t,e){const n=at({},M0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Yt.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Yt.Segment+(n.sensitive?Yt.BonusCaseSensitive:0);if(d.type===er.Static)f||(r+="/"),r+=d.value.replace(b0,"\\$&"),h+=Yt.Static;else if(d.type===er.Param){const{value:g,repeatable:x,optional:m,regexp:p}=d;s.push({name:g,repeatable:x,optional:m});const A=p||lf;if(A!==lf){h+=Yt.BonusCustomRegExp;try{`${A}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+y.message)}}let T=x?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(T=m&&c.length<2?`(?:/${T})`:"/"+T),m&&(T+="?"),r+=T,h+=Yt.Dynamic,m&&(h+=Yt.BonusOptional),x&&(h+=Yt.BonusRepeatable),A===".*"&&(h+=Yt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Yt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===er.Static)u+=h.value;else if(h.type===er.Param){const{value:g,repeatable:x,optional:m}=h,p=g in c?c[g]:"";if(wn(p)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=wn(p)?p.join("/"):p;if(!A)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function T0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Yt.Static+Yt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Yt.Static+Yt.Segment?1:-1:0}function $h(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=T0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(cf(i))return 1;if(cf(r))return-1}return r.length-i.length}function cf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const A0={strict:!1,end:!0,sensitive:!1};function w0(t,e,n){const i=E0(y0(t.path),n),r=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function R0(t,e){const n=[],i=new Map;e=ef(A0,e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,x=ff(f);x.aliasOf=h&&h.record;const m=ef(e,f),p=[x];if("alias"in f){const y=typeof f.alias=="string"?[f.alias]:f.alias;for(const P of y)p.push(ff(at({},x,{components:h?h.record.components:x.components,path:P,aliasOf:h?h.record:x})))}let A,T;for(const y of p){const{path:P}=y;if(d&&P[0]!=="/"){const I=d.record.path,C=I[I.length-1]==="/"?"":"/";y.path=d.record.path+(P&&C+P)}if(A=w0(y,d,m),h?h.alias.push(A):(T=T||A,T!==A&&T.alias.push(A),g&&f.name&&!df(A)&&o(f.name)),Kh(A)&&l(A),x.children){const I=x.children;for(let C=0;C<I.length;C++)s(I[C],A,h&&h.children[C])}h=h||A}return T?()=>{o(T)}:bs}function o(f){if(Xh(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=I0(f,n);n.splice(d,0,f),f.record.name&&!df(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},x,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Xr(yt.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=at(uf(d.params,h.keys.filter(T=>!T.optional).concat(h.parent?h.parent.keys.filter(T=>T.optional):[]).map(T=>T.name)),f.params&&uf(f.params,h.keys.map(T=>T.name))),x=h.stringify(g)}else if(f.path!=null)x=f.path,h=n.find(T=>T.re.test(x)),h&&(g=h.parse(x),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(T=>T.re.test(d.path)),!h)throw Xr(yt.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=at({},d.params,f.params),x=h.stringify(g)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:x,params:g,matched:p,meta:P0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function uf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function ff(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:C0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function C0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function df(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function P0(t){return t.reduce((e,n)=>at(e,n.meta),{})}function I0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;$h(t,e[s])<0?i=s:n=s+1}const r=D0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function D0(t){let e=t;for(;e=e.parent;)if(Kh(e)&&$h(t,e)===0)return e}function Kh({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function hf(t){const e=gn(_a),n=gn($c),i=Xe(()=>{const l=zn(t.to);return e.resolve(l)}),r=Xe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Wr.bind(null,u));if(d>-1)return d;const h=pf(l[c-2]);return c>1&&pf(u)===h&&f[f.length-1].path!==h?f.findIndex(Wr.bind(null,l[c-2])):d}),s=Xe(()=>r.value>-1&&O0(n.params,i.value.params)),o=Xe(()=>r.value>-1&&r.value===n.matched.length-1&&Wh(n.params,i.value.params));function a(l={}){if(F0(l)){const c=e[zn(t.replace)?"replace":"push"](zn(t.to)).catch(bs);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:Xe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function L0(t){return t.length===1?t[0]:t}const U0=ui({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:hf,setup(t,{slots:e}){const n=zs(hf(t)),{options:i}=gn(_a),r=Xe(()=>({[mf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[mf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&L0(e.default(n));return t.custom?s:qc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),N0=U0;function F0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function O0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!wn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function pf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const mf=(t,e,n)=>t??e??n,B0=ui({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=gn(Fl),r=Xe(()=>t.route||i.value),s=gn(of,0),o=Xe(()=>{let c=zn(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Xe(()=>r.value.matched[o.value]);Ro(of,Xe(()=>o.value+1)),Ro(h0,a),Ro(Fl,r);const l=Dt();return Fr(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Wr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return gf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=qc(d,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return gf(n.default,{Component:m,route:c})||m}}});function gf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const z0=B0;function k0(t){const e=R0(t.routes,t),n=t.parseQuery||f0,i=t.stringifyQuery||sf,r=t.history,s=is(),o=is(),a=is(),l=vm(hi);let c=hi;Ir&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Na.bind(null,N=>""+N),f=Na.bind(null,$_),d=Na.bind(null,Is);function h(N,se){let V,oe;return Xh(N)?(V=e.getRecordMatcher(N),oe=se):oe=N,e.addRoute(oe,V)}function g(N){const se=e.getRecordMatcher(N);se&&e.removeRoute(se)}function x(){return e.getRoutes().map(N=>N.record)}function m(N){return!!e.getRecordMatcher(N)}function p(N,se){if(se=at({},se||l.value),typeof N=="string"){const F=Fa(n,N,se.path),W=e.resolve({path:F.path},se),te=r.createHref(F.fullPath);return at(F,W,{params:d(W.params),hash:Is(F.hash),redirectedFrom:void 0,href:te})}let V;if(N.path!=null)V=at({},N,{path:Fa(n,N.path,se.path).path});else{const F=at({},N.params);for(const W in F)F[W]==null&&delete F[W];V=at({},N,{params:f(F)}),se.params=f(se.params)}const oe=e.resolve(V,se),Ne=N.hash||"";oe.params=u(d(oe.params));const w=Z_(i,at({},N,{hash:X_(Ne),path:oe.path})),_=r.createHref(w);return at({fullPath:w,hash:Ne,query:i===sf?d0(N.query):N.query||{}},oe,{redirectedFrom:void 0,href:_})}function A(N){return typeof N=="string"?Fa(n,N,l.value.path):at({},N)}function T(N,se){if(c!==N)return Xr(yt.NAVIGATION_CANCELLED,{from:se,to:N})}function y(N){return C(N)}function P(N){return y(at(A(N),{replace:!0}))}function I(N,se){const V=N.matched[N.matched.length-1];if(V&&V.redirect){const{redirect:oe}=V;let Ne=typeof oe=="function"?oe(N,se):oe;return typeof Ne=="string"&&(Ne=Ne.includes("?")||Ne.includes("#")?Ne=A(Ne):{path:Ne},Ne.params={}),at({query:N.query,hash:N.hash,params:Ne.path!=null?{}:N.params},Ne)}}function C(N,se){const V=c=p(N),oe=l.value,Ne=N.state,w=N.force,_=N.replace===!0,F=I(V,oe);if(F)return C(at(A(F),{state:typeof F=="object"?at({},Ne,F.state):Ne,force:w,replace:_}),se||V);const W=V;W.redirectedFrom=se;let te;return!w&&J_(i,oe,V)&&(te=Xr(yt.NAVIGATION_DUPLICATED,{to:W,from:oe}),ve(oe,oe,!0,!1)),(te?Promise.resolve(te):M(W,oe)).catch(G=>Wn(G)?Wn(G,yt.NAVIGATION_GUARD_REDIRECT)?G:fe(G):L(G,W,oe)).then(G=>{if(G){if(Wn(G,yt.NAVIGATION_GUARD_REDIRECT))return C(at({replace:_},A(G.to),{state:typeof G.to=="object"?at({},Ne,G.to.state):Ne,force:w}),se||W)}else G=B(W,oe,!0,_,Ne);return R(W,oe,G),G})}function D(N,se){const V=T(N,se);return V?Promise.reject(V):Promise.resolve()}function S(N){const se=ke.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(N):N()}function M(N,se){let V;const[oe,Ne,w]=p0(N,se);V=Ba(oe.reverse(),"beforeRouteLeave",N,se);for(const F of oe)F.leaveGuards.forEach(W=>{V.push(Ei(W,N,se))});const _=D.bind(null,N,se);return V.push(_),me(V).then(()=>{V=[];for(const F of s.list())V.push(Ei(F,N,se));return V.push(_),me(V)}).then(()=>{V=Ba(Ne,"beforeRouteUpdate",N,se);for(const F of Ne)F.updateGuards.forEach(W=>{V.push(Ei(W,N,se))});return V.push(_),me(V)}).then(()=>{V=[];for(const F of w)if(F.beforeEnter)if(wn(F.beforeEnter))for(const W of F.beforeEnter)V.push(Ei(W,N,se));else V.push(Ei(F.beforeEnter,N,se));return V.push(_),me(V)}).then(()=>(N.matched.forEach(F=>F.enterCallbacks={}),V=Ba(w,"beforeRouteEnter",N,se,S),V.push(_),me(V))).then(()=>{V=[];for(const F of o.list())V.push(Ei(F,N,se));return V.push(_),me(V)}).catch(F=>Wn(F,yt.NAVIGATION_CANCELLED)?F:Promise.reject(F))}function R(N,se,V){a.list().forEach(oe=>S(()=>oe(N,se,V)))}function B(N,se,V,oe,Ne){const w=T(N,se);if(w)return w;const _=se===hi,F=Ir?history.state:{};V&&(oe||_?r.replace(N.fullPath,at({scroll:_&&F&&F.scroll},Ne)):r.push(N.fullPath,Ne)),l.value=N,ve(N,se,V,_),fe()}let X;function q(){X||(X=r.listen((N,se,V)=>{if(!ne.listening)return;const oe=p(N),Ne=I(oe,ne.currentRoute.value);if(Ne){C(at(Ne,{replace:!0,force:!0}),oe).catch(bs);return}c=oe;const w=l.value;Ir&&o0(rf(w.fullPath,V.delta),ga()),M(oe,w).catch(_=>Wn(_,yt.NAVIGATION_ABORTED|yt.NAVIGATION_CANCELLED)?_:Wn(_,yt.NAVIGATION_GUARD_REDIRECT)?(C(at(A(_.to),{force:!0}),oe).then(F=>{Wn(F,yt.NAVIGATION_ABORTED|yt.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===Ul.pop&&r.go(-1,!1)}).catch(bs),Promise.reject()):(V.delta&&r.go(-V.delta,!1),L(_,oe,w))).then(_=>{_=_||B(oe,w,!1),_&&(V.delta&&!Wn(_,yt.NAVIGATION_CANCELLED)?r.go(-V.delta,!1):V.type===Ul.pop&&Wn(_,yt.NAVIGATION_ABORTED|yt.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),R(oe,w,_)}).catch(bs)}))}let Y=is(),$=is(),z;function L(N,se,V){fe(N);const oe=$.list();return oe.length?oe.forEach(Ne=>Ne(N,se,V)):console.error(N),Promise.reject(N)}function ie(){return z&&l.value!==hi?Promise.resolve():new Promise((N,se)=>{Y.add([N,se])})}function fe(N){return z||(z=!N,q(),Y.list().forEach(([se,V])=>N?V(N):se()),Y.reset()),N}function ve(N,se,V,oe){const{scrollBehavior:Ne}=t;if(!Ir||!Ne)return Promise.resolve();const w=!V&&a0(rf(N.fullPath,0))||(oe||!V)&&history.state&&history.state.scroll||null;return Bc().then(()=>Ne(N,se,w)).then(_=>_&&s0(_)).catch(_=>L(_,N,se))}const Me=N=>r.go(N);let $e;const ke=new Set,ne={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:p,options:t,push:y,replace:P,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ie,install(N){N.component("RouterLink",N0),N.component("RouterView",z0),N.config.globalProperties.$router=ne,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>zn(l)}),Ir&&!$e&&l.value===hi&&($e=!0,y(r.location).catch(oe=>{}));const se={};for(const oe in hi)Object.defineProperty(se,oe,{get:()=>l.value[oe],enumerable:!0});N.provide(_a,ne),N.provide($c,Vd(se)),N.provide(Fl,l);const V=N.unmount;ke.add(N),N.unmount=function(){ke.delete(N),ke.size<1&&(c=hi,X&&X(),X=null,l.value=hi,$e=!1,z=!1),V()}}};function me(N){return N.reduce((se,V)=>se.then(()=>S(V)),Promise.resolve())}return ne}function jh(){return gn(_a)}function H0(t){return gn($c)}const V0="/backend-camp-game/images/coach/normal.png",G0="/backend-camp-game/images/logo.png",za="livefit.player";function W0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const Zh=Fh("player",{state:()=>({name:""}),actions:{loadFromStorage(){const t=W0(localStorage.getItem(za));t?.name&&(this.name=t.name)},setName(t){this.name=t.trim(),localStorage.setItem(za,JSON.stringify({name:this.name}))},clear(){this.name="",localStorage.removeItem(za)}}}),_f="livefit.progress";function X0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const Jh=Fh("progress",{state:()=>({currentChapter:1,chapterNodeIndices:{1:0}}),getters:{getNodeIndex:t=>e=>t.chapterNodeIndices[e]??0,chapter1NodeIndex:t=>t.chapterNodeIndices[1]??0},actions:{loadFromStorage(){const t=X0(localStorage.getItem(_f));t&&(typeof t.currentChapter=="number"&&(this.currentChapter=t.currentChapter),t.chapterNodeIndices&&(this.chapterNodeIndices=t.chapterNodeIndices),"chapter1NodeIndex"in t&&typeof t.chapter1NodeIndex=="number"&&(this.chapterNodeIndices[1]=t.chapter1NodeIndex))},setNodeIndex(t,e){this.chapterNodeIndices[t]=e,this._save()},setChapter1NodeIndex(t){this.setNodeIndex(1,t)},setCurrentChapter(t){this.currentChapter=t,t in this.chapterNodeIndices||(this.chapterNodeIndices[t]=0),this._save()},completeChapter(t){const e=t+1;this.currentChapter=e,e in this.chapterNodeIndices||(this.chapterNodeIndices[e]=0),this._save()},reset(){this.currentChapter=1,this.chapterNodeIndices={1:0},this._save()},_save(){localStorage.setItem(_f,JSON.stringify({currentChapter:this.currentChapter,chapterNodeIndices:this.chapterNodeIndices}))}}}),q0=[{type:"dialogue",speaker:"海克絲",text:"早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我、我已經準備好要寫 Code 了！請問我現在該做什麼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"對了，我該怎麼稱呼你呢？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」
會員：「我想購買堂數方案，以便於取得點數來報名喜歡的課程。」
教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」
管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。",scene:"normal",coachExpression:"normal",image:"/images/content/swimlane.png"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"(眼神變得銳利) 看完之後，就來接受我的考試吧。",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的入職測驗",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"q2",prompt:"海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？",options:[{id:"a",label:"它是用來檢查程式碼錯誤的除錯工具"},{id:"b",label:"它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪"},{id:"c",label:"它是最後的裝潢，決定系統好不好看"}],correctOptionId:"b",explanation:"海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。"},{id:"q3",prompt:"為什麼海克絲建議在寫程式之前要先畫「線稿圖」？",options:[{id:"a",label:"為了讓介面看起來很漂亮，吸引投資人"},{id:"b",label:"為了測試程式碼的效能是否足夠"},{id:"c",label:"為了在開發前與團隊有共識，確保大家想的畫面是一樣的"}],correctOptionId:"c",explanation:"線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。"},{id:"q4",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"},{id:"q5",prompt:"海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？",options:[{id:"a",label:"會提早完成工作，可以準時下班"},{id:"b",label:"會寫出很多 Bug，甚至做白工"},{id:"c",label:"電腦會因為運算過度而過熱"}],correctOptionId:"b",explanation:"海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。"},{id:"q6",prompt:"線稿圖通常不包含下列哪項元素？",options:[{id:"a",label:"頁面佈局與按鈕位置"},{id:"b",label:"完整的視覺設計與高解析度圖片"},{id:"c",label:"基本的操作流程與連結"}],correctOptionId:"b",explanation:"線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。"},{id:"q7",prompt:"在閱讀泳道圖時，每一條「跑道」通常代表什麼？",options:[{id:"a",label:"不同的時間點"},{id:"b",label:"不同的參與角色或系統"},{id:"c",label:"不同的資料庫欄位"}],correctOptionId:"b",explanation:"泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。"},{id:"q8",prompt:"根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？",options:[{id:"a",label:"在註冊頁面直接勾選「我是教練」即可"},{id:"b",label:"必須付費購買「教練資格方案」"},{id:"c",label:"需要由「管理員 (Admin)」在後台將其升級為教練"}],correctOptionId:"c",explanation:"根據使用者故事，管理員負責「把一般使用者升級為教練」。"},{id:"q9",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"q10",prompt:"關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？",options:[{id:"a",label:"教練可以隨意刪除學員的帳號"},{id:"b",label:"教練可以查看月營收統計，了解指定月份的營收與學員參與概況"},{id:"c",label:"教練不能修改自己開設課程的時間或人數上限"}],correctOptionId:"b",explanation:"根據教練的使用者故事，教練可以查看月營收統計。"},{id:"q11",prompt:"根據使用者故事，未登入的「訪客」無法執行下列哪項動作？",options:[{id:"a",label:"瀏覽目前可參加的課程"},{id:"b",label:"查看教練的詳細介紹與專長"},{id:"c",label:"報名課程"}],correctOptionId:"c",explanation:"訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。"},{id:"q12",prompt:"「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？",options:[{id:"a",label:"幫會員修改密碼與個人頭像"},{id:"b",label:"管理技能清單與堂數方案的設定"},{id:"c",label:"代替教練進行直播授課"}],correctOptionId:"b",explanation:"管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。"},{id:"q13",prompt:"會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？",options:[{id:"a",label:"只能修改姓名"},{id:"b",label:"可以修改姓名與 Email"},{id:"c",label:"可以修改姓名、Email 與已購買的堂數"}],correctOptionId:"a",explanation:"根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。"},{id:"q14",prompt:"如果教練想要讓學員更容易找到自己，他可以使用什麼功能？",options:[{id:"a",label:"購買首頁廣告"},{id:"b",label:"設定自己的專長技能"},{id:"c",label:"寄送垃圾郵件給所有會員"}],correctOptionId:"b",explanation:"教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。"},{id:"q15",prompt:"當會員想要調整行程時，關於「取消課程」的敘述何者正確？",options:[{id:"a",label:"只要取消就能退回現金"},{id:"b",label:"取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）"},{id:"c",label:"報名後絕對無法取消"}],correctOptionId:"b",explanation:"取消課程後會釋出名額，堂數會依照規則退還或調整。"},{id:"q16",prompt:"教練在「編輯課程」時，可以調整哪些資訊？",options:[{id:"a",label:"只能調整課程名稱"},{id:"b",label:"課程內容、時間、人數上限、會議連結"},{id:"c",label:"學員的個人資料"}],correctOptionId:"b",explanation:"教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。"},{id:"q17",prompt:"LiveFit 平台的核心營運模式是什麼？",options:[{id:"a",label:"線下健身房的門禁管理系統"},{id:"b",label:"線上直播小班制健身平台"},{id:"c",label:"預錄影片的隨選視訊服務"}],correctOptionId:"b",explanation:"LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。"},{id:"q18",prompt:"根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？",options:[{id:"a",label:"查看教練詳情"},{id:"b",label:"查看我的堂數購買紀錄"},{id:"c",label:"修改個人資料"}],correctOptionId:"b",explanation:"會員可以透過「查看我的堂數購買紀錄」來了解過去的購買資訊。"},{id:"q19",prompt:"當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？",options:[{id:"a",label:"我的課程列表"},{id:"b",label:"月營收統計"},{id:"c",label:"技能清單"}],correctOptionId:"a",explanation:"教練透過「我的課程列表」可以查看課程狀態與報名人數。"},{id:"q20",prompt:"若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？",options:[{id:"a",label:"資深教練"},{id:"b",label:"系統管理員 (Admin)"},{id:"c",label:"任何註冊會員"}],correctOptionId:"b",explanation:"管理員負責管理堂數方案，包括新增、修改方案設定。"}]},{type:"dialogue",speaker:"海克絲",text:"很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天就先到這裡吧。回家好好休息，別熬夜。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第一天：報到日",scene:"normal",coachExpression:"normal"}],Y0={id:1,title:"第一天：報到日",nodes:q0},$0=[{type:"dialogue",speaker:"海克絲",text:"早安！看起來精神不錯嘛，昨天有好好休息吧？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"很好，有這個態度我就放心了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"不過在正式開始今天的工作之前，我想先幫你做個小複習。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"複習？是... 又要考試嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 別緊張，只是隨機抽三題，確認你昨天學的東西還記得。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"準備好了嗎？那我們開始吧！",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的複習小考",scene:"normal",coachExpression:"praise",questions:[{id:"r1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"r2",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"r3",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好很好，看來昨天的內容你都有記住！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"恭喜你通過第二關的考驗！",scene:"normal",coachExpression:"biglaugh"},{type:"dialogue",speaker:"你",text:"太好了！那接下來我們要做什麼呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(看了看手錶) 其實今天是上半天班啦。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你可以回家休息囉！好好養精蓄銳，明天才有力氣面對真正的挑戰。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"真的嗎？那我就不客氣了！謝謝海姐！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"去吧去吧，記得好好休息，別熬夜打電動喔！",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第二天：複習小考",scene:"normal",coachExpression:"normal"}],K0={id:2,title:"第二天：複習小考",nodes:$0},Zo={1:Y0,2:K0};function j0(t){return Zo[t]}const Kc="179",Z0=0,vf=1,J0=2,Qh=1,Q0=2,jn=3,Ii=0,en=1,Un=2,wi=0,zr=1,Ds=2,xf=3,Sf=4,ev=5,Zi=100,tv=101,nv=102,iv=103,rv=104,sv=200,ov=201,av=202,lv=203,Ol=204,Bl=205,cv=206,uv=207,fv=208,dv=209,hv=210,pv=211,mv=212,gv=213,_v=214,zl=0,kl=1,Hl=2,qr=3,Vl=4,Gl=5,Wl=6,Xl=7,ep=0,vv=1,xv=2,Ri=0,Sv=1,yv=2,Mv=3,bv=4,Ev=5,Tv=6,Av=7,tp=300,Yr=301,$r=302,ql=303,Yl=304,va=306,$l=1e3,tr=1001,Kl=1002,bn=1003,wv=1004,eo=1005,zt=1006,ka=1007,nr=1008,li=1009,np=1010,ip=1011,Ls=1012,jc=1013,ar=1014,ti=1015,Vs=1016,Zc=1017,Jc=1018,Us=1020,rp=35902,sp=1021,op=1022,yn=1023,Ns=1026,Fs=1027,ap=1028,Qc=1029,lp=1030,eu=1031,tu=1033,Lo=33776,Uo=33777,No=33778,Fo=33779,jl=35840,Zl=35841,Jl=35842,Ql=35843,ec=36196,tc=37492,nc=37496,ic=37808,rc=37809,sc=37810,oc=37811,ac=37812,lc=37813,cc=37814,uc=37815,fc=37816,dc=37817,hc=37818,pc=37819,mc=37820,gc=37821,Oo=36492,_c=36494,vc=36495,cp=36283,xc=36284,Sc=36285,yc=36286,Rv=3200,Cv=3201,Pv=0,Iv=1,Ti="",hn="srgb",Kr="srgb-linear",Jo="linear",ut="srgb",dr=7680,yf=519,Dv=512,Lv=513,Uv=514,up=515,Nv=516,Fv=517,Ov=518,Bv=519,Mc=35044,Mf="300 es",Fn=2e3,Qo=2001;class Zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Nt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ha=Math.PI/180,bc=180/Math.PI;function Ci(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Nt[t&255]+Nt[t>>8&255]+Nt[t>>16&255]+Nt[t>>24&255]+"-"+Nt[e&255]+Nt[e>>8&255]+"-"+Nt[e>>16&15|64]+Nt[e>>24&255]+"-"+Nt[n&63|128]+Nt[n>>8&255]+"-"+Nt[n>>16&255]+Nt[n>>24&255]+Nt[i&255]+Nt[i>>8&255]+Nt[i>>16&255]+Nt[i>>24&255]).toLowerCase()}function et(t,e,n){return Math.max(e,Math.min(n,t))}function zv(t,e){return(t%e+e)%e}function Va(t,e,n){return(1-n)*t+n*e}function Nn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class tt{constructor(e=0,n=0){tt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Gs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=x;return}if(f!==x||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*x,A=p>=0?1:-1,T=1-p*p;if(T>Number.EPSILON){const P=Math.sqrt(T),I=Math.atan2(P,p*A);m=Math.sin(m*I)/P,a=Math.sin(a*I)/P}const y=a*A;if(l=l*m+d*y,c=c*m+h*y,u=u*m+g*y,f=f*m+x*y,m===1-a){const P=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=P,c*=P,u*=P,f*=P}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,n=0,i=0){Z.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(bf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(bf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ga.copy(this).projectOnVector(e),this.sub(Ga)}reflect(e){return this.sub(Ga.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new Z,bf=new Gs;class je{constructor(e,n,i,r,s,o,a,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],A=r[1],T=r[4],y=r[7],P=r[2],I=r[5],C=r[8];return s[0]=o*x+a*A+l*P,s[3]=o*m+a*T+l*I,s[6]=o*p+a*y+l*C,s[1]=c*x+u*A+f*P,s[4]=c*m+u*T+f*I,s[7]=c*p+u*y+f*C,s[2]=d*x+h*A+g*P,s[5]=d*m+h*T+g*I,s[8]=d*p+h*y+g*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Wa.makeScale(e,n)),this}rotate(e){return this.premultiply(Wa.makeRotation(-e)),this}translate(e,n){return this.premultiply(Wa.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wa=new je;function fp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ea(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kv(){const t=ea("canvas");return t.style.display="block",t}const Ef={};function kr(t){t in Ef||(Ef[t]=!0,console.warn(t))}function Hv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Tf=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Af=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const t={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ri(r.r),r.g=ri(r.g),r.b=ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Hr(r.r),r.g=Hr(r.g),r.b=Hr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?Jo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return kr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Kr]:{primaries:e,whitePoint:i,transfer:Jo,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Tf,fromXYZ:Af,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),t}const st=Vv();function ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Hr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let hr;class Gv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{hr===void 0&&(hr=ea("canvas")),hr.width=e.width,hr.height=e.height;const r=hr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=hr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ea("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ri(n[i]/255)*255):n[i]=ri(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wv=0;class nu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xa(r[o].image)):s.push(Xa(r[o]))}else s=Xa(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Xa(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;const qa=new Z;class Lt extends Zr{constructor(e=Lt.DEFAULT_IMAGE,n=Lt.DEFAULT_MAPPING,i=tr,r=tr,s=zt,o=nr,a=yn,l=li,c=Lt.DEFAULT_ANISOTROPY,u=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ci(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qa).x}get height(){return this.source.getSize(qa).y}get depth(){return this.source.getSize(qa).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $l:e.x=e.x-Math.floor(e.x);break;case tr:e.x=e.x<0?0:1;break;case Kl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $l:e.y=e.y-Math.floor(e.y);break;case tr:e.y=e.y<0?0:1;break;case Kl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=tp;Lt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,n=0,i=0,r=1){Et.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(c+1)/2,y=(h+1)/2,P=(p+1)/2,I=(u+d)/4,C=(f+x)/4,D=(g+m)/4;return T>y&&T>P?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=I/i,s=C/i):y>P?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=I/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=C/s,r=D/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-x)/A,this.z=(d-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=et(this.x,e.x,n.x),this.y=et(this.y,e.y,n.y),this.z=et(this.z,e.z,n.z),this.w=et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=et(this.x,e,n),this.y=et(this.y,e,n),this.z=et(this.z,e,n),this.w=et(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends Zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:zt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Lt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends qv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class dp extends Lt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yv extends Lt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=bn,this.minFilter=bn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),to.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),to.copy(i.boundingBox)),to.applyMatrix4(e.matrixWorld),this.union(to)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rs),no.subVectors(this.max,rs),pr.subVectors(e.a,rs),mr.subVectors(e.b,rs),gr.subVectors(e.c,rs),pi.subVectors(mr,pr),mi.subVectors(gr,mr),ki.subVectors(pr,gr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-ki.z,ki.y,pi.z,0,-pi.x,mi.z,0,-mi.x,ki.z,0,-ki.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-ki.y,ki.x,0];return!Ya(n,pr,mr,gr,no)||(n=[1,0,0,0,1,0,0,0,1],!Ya(n,pr,mr,gr,no))?!1:(io.crossVectors(pi,mi),n=[io.x,io.y,io.z],Ya(n,pr,mr,gr,no))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],vn=new Z,to=new Ws,pr=new Z,mr=new Z,gr=new Z,pi=new Z,mi=new Z,ki=new Z,rs=new Z,no=new Z,io=new Z,Hi=new Z;function Ya(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Hi.fromArray(t,s);const a=r.x*Math.abs(Hi.x)+r.y*Math.abs(Hi.y)+r.z*Math.abs(Hi.z),l=e.dot(Hi),c=n.dot(Hi),u=i.dot(Hi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const $v=new Ws,ss=new Z,$a=new Z;class xa{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):$v.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ss.subVectors(e,this.center);const n=ss.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ss,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($a.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ss.copy(e.center).add($a)),this.expandByPoint(ss.copy(e.center).sub($a))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const qn=new Z,Ka=new Z,ro=new Z,gi=new Z,ja=new Z,so=new Z,Za=new Z;class hp{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=qn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,n),qn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ka.copy(e).add(n).multiplyScalar(.5),ro.copy(n).sub(e).normalize(),gi.copy(this.origin).sub(Ka);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ro),a=gi.dot(this.direction),l=-gi.dot(ro),c=gi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Ka).addScaledVector(ro,d),h}intersectSphere(e,n){qn.subVectors(e.center,this.origin);const i=qn.dot(this.direction),r=qn.dot(qn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,n,i,r,s){ja.subVectors(n,e),so.subVectors(i,e),Za.crossVectors(ja,so);let o=this.direction.dot(Za),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;gi.subVectors(this.origin,e);const l=a*this.direction.dot(so.crossVectors(gi,so));if(l<0)return null;const c=a*this.direction.dot(ja.cross(gi));if(c<0||l+c>o)return null;const u=-a*gi.dot(Za);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Tt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,x,m){Tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/_r.setFromMatrixColumn(e,0).length(),s=1/_r.setFromMatrixColumn(e,1).length(),o=1/_r.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-x*c,n[9]=-a*l,n[2]=x-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d+x*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=x+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d-x*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=x-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,x=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Kv,e,jv)}lookAt(e,n,i){const r=this.elements;return rn.subVectors(e,n),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),_i.crossVectors(i,rn),_i.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),_i.crossVectors(i,rn)),_i.normalize(),oo.crossVectors(rn,_i),r[0]=_i.x,r[4]=oo.x,r[8]=rn.x,r[1]=_i.y,r[5]=oo.y,r[9]=rn.y,r[2]=_i.z,r[6]=oo.z,r[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],A=i[3],T=i[7],y=i[11],P=i[15],I=r[0],C=r[4],D=r[8],S=r[12],M=r[1],R=r[5],B=r[9],X=r[13],q=r[2],Y=r[6],$=r[10],z=r[14],L=r[3],ie=r[7],fe=r[11],ve=r[15];return s[0]=o*I+a*M+l*q+c*L,s[4]=o*C+a*R+l*Y+c*ie,s[8]=o*D+a*B+l*$+c*fe,s[12]=o*S+a*X+l*z+c*ve,s[1]=u*I+f*M+d*q+h*L,s[5]=u*C+f*R+d*Y+h*ie,s[9]=u*D+f*B+d*$+h*fe,s[13]=u*S+f*X+d*z+h*ve,s[2]=g*I+x*M+m*q+p*L,s[6]=g*C+x*R+m*Y+p*ie,s[10]=g*D+x*B+m*$+p*fe,s[14]=g*S+x*X+m*z+p*ve,s[3]=A*I+T*M+y*q+P*L,s[7]=A*C+T*R+y*Y+P*ie,s[11]=A*D+T*B+y*$+P*fe,s[15]=A*S+T*X+y*z+P*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+x*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=f*m*c-x*d*c+x*l*h-a*m*h-f*l*p+a*d*p,T=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,y=u*x*c-g*f*c+g*a*h-o*x*h-u*a*p+o*f*p,P=g*f*l-u*x*l-g*a*d+o*x*d+u*a*m-o*f*m,I=n*A+i*T+r*y+s*P;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/I;return e[0]=A*C,e[1]=(x*d*s-f*m*s-x*r*h+i*m*h+f*r*p-i*d*p)*C,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*p+i*l*p)*C,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*C,e[4]=T*C,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*C,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*C,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*C,e[8]=y*C,e[9]=(g*f*s-u*x*s-g*i*h+n*x*h+u*i*p-n*f*p)*C,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*p+n*a*p)*C,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*C,e[12]=P*C,e[13]=(u*x*r-g*f*r+g*i*d-n*x*d-u*i*m+n*f*m)*C,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*C,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*C,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,x=o*u,m=o*f,p=a*f,A=l*c,T=l*u,y=l*f,P=i.x,I=i.y,C=i.z;return r[0]=(1-(x+p))*P,r[1]=(h+y)*P,r[2]=(g-T)*P,r[3]=0,r[4]=(h-y)*I,r[5]=(1-(d+p))*I,r[6]=(m+A)*I,r[7]=0,r[8]=(g+T)*C,r[9]=(m-A)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=_r.set(r[0],r[1],r[2]).length();const o=_r.set(r[4],r[5],r[6]).length(),a=_r.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],xn.copy(this);const c=1/s,u=1/o,f=1/a;return xn.elements[0]*=c,xn.elements[1]*=c,xn.elements[2]*=c,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,n.setFromRotationMatrix(xn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Fn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Fn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Qo)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Fn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Fn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Qo)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const _r=new Z,xn=new Tt,Kv=new Z(0,0,0),jv=new Z(1,1,1),_i=new Z,oo=new Z,rn=new Z,wf=new Tt,Rf=new Gs;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rf.setFromEuler(this),this.setFromQuaternion(Rf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class pp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const Cf=new Z,vr=new Gs,Yn=new Tt,ao=new Z,os=new Z,Jv=new Z,Qv=new Gs,Pf=new Z(1,0,0),If=new Z(0,1,0),Df=new Z(0,0,1),Lf={type:"added"},ex={type:"removed"},xr={type:"childadded",child:null},Ja={type:"childremoved",child:null};class Zt extends Zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new Z,n=new ci,i=new Gs,r=new Z(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Tt},normalMatrix:{value:new je}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.multiply(vr),this}rotateOnWorldAxis(e,n){return vr.setFromAxisAngle(e,n),this.quaternion.premultiply(vr),this}rotateX(e){return this.rotateOnAxis(Pf,e)}rotateY(e){return this.rotateOnAxis(If,e)}rotateZ(e){return this.rotateOnAxis(Df,e)}translateOnAxis(e,n){return Cf.copy(e).applyQuaternion(this.quaternion),this.position.add(Cf.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pf,e)}translateY(e){return this.translateOnAxis(If,e)}translateZ(e){return this.translateOnAxis(Df,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ao.copy(e):ao.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),os.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(os,ao,this.up):Yn.lookAt(ao,os,this.up),this.quaternion.setFromRotationMatrix(Yn),r&&(Yn.extractRotation(r.matrixWorld),vr.setFromRotationMatrix(Yn),this.quaternion.premultiply(vr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lf),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ex),Ja.child=e,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lf),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(os,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Zt.DEFAULT_UP=new Z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new Z,$n=new Z,Qa=new Z,Kn=new Z,Sr=new Z,yr=new Z,Uf=new Z,el=new Z,tl=new Z,nl=new Z,il=new Et,rl=new Et,sl=new Et;class mn{constructor(e=new Z,n=new Z,i=new Z){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Sn.subVectors(e,n),r.cross(Sn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Sn.subVectors(r,n),$n.subVectors(i,n),Qa.subVectors(e,n);const o=Sn.dot(Sn),a=Sn.dot($n),l=Sn.dot(Qa),c=$n.dot($n),u=$n.dot(Qa),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Kn.x),l.addScaledVector(o,Kn.y),l.addScaledVector(a,Kn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return il.setScalar(0),rl.setScalar(0),sl.setScalar(0),il.fromBufferAttribute(e,n),rl.fromBufferAttribute(e,i),sl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(il,s.x),o.addScaledVector(rl,s.y),o.addScaledVector(sl,s.z),o}static isFrontFacing(e,n,i,r){return Sn.subVectors(i,n),$n.subVectors(e,n),Sn.cross($n).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),Sn.cross($n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return mn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Sr.subVectors(r,i),yr.subVectors(s,i),el.subVectors(e,i);const l=Sr.dot(el),c=yr.dot(el);if(l<=0&&c<=0)return n.copy(i);tl.subVectors(e,r);const u=Sr.dot(tl),f=yr.dot(tl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Sr,o);nl.subVectors(e,s);const h=Sr.dot(nl),g=yr.dot(nl);if(g>=0&&h<=g)return n.copy(s);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(yr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Uf.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Uf,a);const p=1/(m+x+d);return o=x*p,a=d*p,n.copy(i).addScaledVector(Sr,o).addScaledVector(yr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},lo={h:0,s:0,l:0};function ol(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ge{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=zv(e,1),n=et(n,0,1),i=et(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ol(o,s,e+1/3),this.g=ol(o,s,e),this.b=ol(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=hn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=hn){const i=mp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ri(e.r),this.g=ri(e.g),this.b=ri(e.b),this}copyLinearToSRGB(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return st.workingToColorSpace(Ft.copy(this),e),Math.round(et(Ft.r*255,0,255))*65536+Math.round(et(Ft.g*255,0,255))*256+Math.round(et(Ft.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(Ft.copy(this),n);const i=Ft.r,r=Ft.g,s=Ft.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(Ft.copy(this),n),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=hn){st.workingToColorSpace(Ft.copy(this),e);const n=Ft.r,i=Ft.g,r=Ft.b;return e!==hn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+n,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(vi),e.getHSL(lo);const i=Va(vi.h,lo.h,n),r=Va(vi.s,lo.s,n),s=Va(vi.l,lo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ft=new Ge;Ge.NAMES=mp;let tx=0;class Jr extends Zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=zr,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Bl,this.blendEquation=Zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=dr,this.stencilZFail=dr,this.stencilZPass=dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Ii&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ol&&(i.blendSrc=this.blendSrc),this.blendDst!==Bl&&(i.blendDst=this.blendDst),this.blendEquation!==Zi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class iu extends Jr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=ep,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new Z,co=new tt;let nx=0;class jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mc,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)co.fromBufferAttribute(this,n),co.applyMatrix3(e),this.setXY(n,co.x,co.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Nn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Nn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Nn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Nn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mc&&(e.usage=this.usage),e}}class gp extends jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _p extends jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class sr extends jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ix=0;const dn=new Tt,al=new Zt,Mr=new Z,sn=new Ws,as=new Ws,It=new Z;class Rn extends Zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fp(e)?_p:gp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,n,i){return dn.makeTranslation(e,n,i),this.applyMatrix4(dn),this}scale(e,n,i){return dn.makeScale(e,n,i),this.applyMatrix4(dn),this}lookAt(e){return al.lookAt(e),al.updateMatrix(),this.applyMatrix4(al.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new sr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ws);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];as.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(sn.min,as.min),sn.expandByPoint(It),It.addVectors(sn.max,as.max),sn.expandByPoint(It)):(sn.expandByPoint(as.min),sn.expandByPoint(as.max))}sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)It.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),It.add(Mr)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let D=0;D<i.count;D++)a[D]=new Z,l[D]=new Z;const c=new Z,u=new Z,f=new Z,d=new tt,h=new tt,g=new tt,x=new Z,m=new Z;function p(D,S,M){c.fromBufferAttribute(i,D),u.fromBufferAttribute(i,S),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,D),h.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[D].add(x),a[S].add(x),a[M].add(x),l[D].add(m),l[S].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,S=A.length;D<S;++D){const M=A[D],R=M.start,B=M.count;for(let X=R,q=R+B;X<q;X+=3)p(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const T=new Z,y=new Z,P=new Z,I=new Z;function C(D){P.fromBufferAttribute(r,D),I.copy(P);const S=a[D];T.copy(S),T.sub(P.multiplyScalar(P.dot(S))).normalize(),y.crossVectors(I,S);const R=y.dot(l[D])<0?-1:1;o.setXYZW(D,T.x,T.y,T.z,R)}for(let D=0,S=A.length;D<S;++D){const M=A[D],R=M.start,B=M.count;for(let X=R,q=R+B;X<q;X+=3)C(e.getX(X+0)),C(e.getX(X+1)),C(e.getX(X+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new Z,s=new Z,o=new Z,a=new Z,l=new Z,c=new Z,u=new Z,f=new Z;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)It.fromBufferAttribute(e,n),It.normalize(),e.setXYZ(n,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?h=l[x]*a.data.stride+a.offset:h=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nf=new Tt,Vi=new hp,uo=new xa,Ff=new Z,fo=new Z,ho=new Z,po=new Z,ll=new Z,mo=new Z,Of=new Z,go=new Z;class On extends Zt{constructor(e=new Rn,n=new iu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){mo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(ll.fromBufferAttribute(f,e),o?mo.addScaledVector(ll,u):mo.addScaledVector(ll.sub(n),u))}n.add(mo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),uo.copy(i.boundingSphere),uo.applyMatrix4(s),Vi.copy(e.ray).recast(e.near),!(uo.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(uo,Ff)===null||Vi.origin.distanceToSquared(Ff)>(e.far-e.near)**2))&&(Nf.copy(s).invert(),Vi.copy(e.ray).applyMatrix4(Nf),!(i.boundingBox!==null&&Vi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Vi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),T=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let y=A,P=T;y<P;y+=3){const I=a.getX(y),C=a.getX(y+1),D=a.getX(y+2);r=_o(this,p,e,i,c,u,f,I,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(a.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const A=a.getX(m),T=a.getX(m+1),y=a.getX(m+2);r=_o(this,o,e,i,c,u,f,A,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let y=A,P=T;y<P;y+=3){const I=y,C=y+1,D=y+2;r=_o(this,p,e,i,c,u,f,I,C,D),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const A=m,T=m+1,y=m+2;r=_o(this,o,e,i,c,u,f,A,T,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function rx(t,e,n,i,r,s,o,a){let l;if(e.side===en?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ii,a),l===null)return null;go.copy(a),go.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(go);return c<n.near||c>n.far?null:{distance:c,point:go.clone(),object:t}}function _o(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,fo),t.getVertexPosition(l,ho),t.getVertexPosition(c,po);const u=rx(t,e,n,i,fo,ho,po,Of);if(u){const f=new Z;mn.getBarycoord(Of,fo,ho,po,f),r&&(u.uv=mn.getInterpolatedAttribute(r,a,l,c,f,new tt)),s&&(u.uv1=mn.getInterpolatedAttribute(s,a,l,c,f,new tt)),o&&(u.normal=mn.getInterpolatedAttribute(o,a,l,c,f,new Z),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new Z,materialIndex:0};mn.getNormal(fo,ho,po,d.normal),u.face=d,u.barycoord=f}return u}class Xs extends Rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new sr(c,3)),this.setAttribute("normal",new sr(u,3)),this.setAttribute("uv",new sr(f,2));function g(x,m,p,A,T,y,P,I,C,D,S){const M=y/C,R=P/D,B=y/2,X=P/2,q=I/2,Y=C+1,$=D+1;let z=0,L=0;const ie=new Z;for(let fe=0;fe<$;fe++){const ve=fe*R-X;for(let Me=0;Me<Y;Me++){const $e=Me*M-B;ie[x]=$e*A,ie[m]=ve*T,ie[p]=q,c.push(ie.x,ie.y,ie.z),ie[x]=0,ie[m]=0,ie[p]=I>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(Me/C),f.push(1-fe/D),z+=1}}for(let fe=0;fe<D;fe++)for(let ve=0;ve<C;ve++){const Me=d+ve+Y*fe,$e=d+ve+Y*(fe+1),ke=d+(ve+1)+Y*(fe+1),ne=d+(ve+1)+Y*fe;l.push(Me,$e,ne),l.push($e,ke,ne),L+=6}a.addGroup(h,L,S),h+=L,d+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function jr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Xt(t){const e={};for(let n=0;n<t.length;n++){const i=jr(t[n]);for(const r in i)e[r]=i[r]}return e}function sx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const ox={clone:jr,merge:Xt};var ax=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Di extends Jr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ax,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=sx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class xp extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=Fn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const xi=new Z,Bf=new tt,zf=new tt;class pn extends xp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=bc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return bc*2*Math.atan(Math.tan(Ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(xi.x,xi.y).multiplyScalar(-e/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-e/xi.z)}getViewSize(e,n){return this.getViewBounds(e,Bf,zf),n.subVectors(zf,Bf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ha*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const br=-90,Er=1;class cx extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(br,Er,e,n);r.layers=this.layers,this.add(r);const s=new pn(br,Er,e,n);s.layers=this.layers,this.add(s);const o=new pn(br,Er,e,n);o.layers=this.layers,this.add(o);const a=new pn(br,Er,e,n);a.layers=this.layers,this.add(a);const l=new pn(br,Er,e,n);l.layers=this.layers,this.add(l);const c=new pn(br,Er,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Fn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Sp extends Lt{constructor(e=[],n=Yr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ux extends lr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Xs(5,5,5),s=new Di({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:wi});s.uniforms.tEquirect.value=n;const o=new On(r,s),a=n.minFilter;return n.minFilter===nr&&(n.minFilter=zt),new cx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class ds extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fx={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ds,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ds,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ds,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ds;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class yp extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class dx{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Gt=new Z;class ta{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Nn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Nn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Nn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Nn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Nn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new jt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ta(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mp extends Jr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Tr;const ls=new Z,Ar=new Z,wr=new Z,Rr=new tt,cs=new tt,bp=new Tt,vo=new Z,us=new Z,xo=new Z,kf=new tt,ul=new tt,Hf=new tt;class hx extends Zt{constructor(e=new Mp){if(super(),this.isSprite=!0,this.type="Sprite",Tr===void 0){Tr=new Rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new dx(n,5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute("position",new ta(i,3,0,!1)),Tr.setAttribute("uv",new ta(i,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new tt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ar.setFromMatrixScale(this.matrixWorld),bp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ar.multiplyScalar(-wr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;So(vo.set(-.5,-.5,0),wr,o,Ar,r,s),So(us.set(.5,-.5,0),wr,o,Ar,r,s),So(xo.set(.5,.5,0),wr,o,Ar,r,s),kf.set(0,0),ul.set(1,0),Hf.set(1,1);let a=e.ray.intersectTriangle(vo,us,xo,!1,ls);if(a===null&&(So(us.set(-.5,.5,0),wr,o,Ar,r,s),ul.set(0,1),a=e.ray.intersectTriangle(vo,xo,us,!1,ls),a===null))return;const l=e.ray.origin.distanceTo(ls);l<e.near||l>e.far||n.push({distance:l,point:ls.clone(),uv:mn.getInterpolation(ls,vo,us,xo,kf,ul,Hf,new tt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function So(t,e,n,i,r,s){Rr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(cs.x=s*Rr.x-r*Rr.y,cs.y=r*Rr.x+s*Rr.y):cs.copy(Rr),t.copy(e),t.x+=cs.x,t.y+=cs.y,t.applyMatrix4(bp)}const fl=new Z,px=new Z,mx=new je;class Yi{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fl.subVectors(i,n).cross(px.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mx.getNormalMatrix(e),r=this.coplanarPoint(fl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gi=new xa,gx=new tt(.5,.5),yo=new Z;class Ep{constructor(e=new Yi,n=new Yi,i=new Yi,r=new Yi,s=new Yi,o=new Yi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Fn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],A=s[12],T=s[13],y=s[14],P=s[15];if(r[0].setComponents(c-o,h-u,p-g,P-A).normalize(),r[1].setComponents(c+o,h+u,p+g,P+A).normalize(),r[2].setComponents(c+a,h+f,p+x,P+T).normalize(),r[3].setComponents(c-a,h-f,p-x,P-T).normalize(),i)r[4].setComponents(l,d,m,y).normalize(),r[5].setComponents(c-l,h-d,p-m,P-y).normalize();else if(r[4].setComponents(c-l,h-d,p-m,P-y).normalize(),n===Fn)r[5].setComponents(c+l,h+d,p+m,P+y).normalize();else if(n===Qo)r[5].setComponents(l,d,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Gi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gi)}intersectsSprite(e){Gi.center.set(0,0,0);const n=gx.distanceTo(e.center);return Gi.radius=.7071067811865476+n,Gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yo.x=r.normal.x>0?e.max.x:e.min.x,yo.y=r.normal.y>0?e.max.y:e.min.y,yo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ec extends Jr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Vf=new Tt,Tc=new hp,Mo=new xa,bo=new Z;class Gf extends Zt{constructor(e=new Rn,n=new Ec){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Mo.copy(i.boundingSphere),Mo.applyMatrix4(r),Mo.radius+=s,e.ray.intersectsSphere(Mo)===!1)return;Vf.copy(r).invert(),Tc.copy(e.ray).applyMatrix4(Vf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,x=h;g<x;g++){const m=c.getX(g);bo.fromBufferAttribute(f,m),Wf(bo,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,x=h;g<x;g++)bo.fromBufferAttribute(f,g),Wf(bo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Wf(t,e,n,i,r,s,o){const a=Tc.distanceSqToPoint(t);if(a<n){const l=new Z;Tc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Vr extends Lt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Tp extends Lt{constructor(e,n,i=ar,r,s,o,a=bn,l=bn,c,u=Ns,f=1){if(u!==Ns&&u!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class qs extends Rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const A=p*d-o;for(let T=0;T<c;T++){const y=T*f-s;g.push(y,-A,0),x.push(0,0,1),m.push(T/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const T=A+c*p,y=A+c*(p+1),P=A+1+c*(p+1),I=A+1+c*p;h.push(T,y,I),h.push(y,P,I)}this.setIndex(h),this.setAttribute("position",new sr(g,3)),this.setAttribute("normal",new sr(x,3)),this.setAttribute("uv",new sr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qs(e.width,e.height,e.widthSegments,e.heightSegments)}}class _x extends Jr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class vx extends Jr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ap extends xp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class xx extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Sx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Xf(t,e,n,i){const r=yx(i);switch(n){case sp:return t*e;case ap:return t*e/r.components*r.byteLength;case Qc:return t*e/r.components*r.byteLength;case lp:return t*e*2/r.components*r.byteLength;case eu:return t*e*2/r.components*r.byteLength;case op:return t*e*3/r.components*r.byteLength;case yn:return t*e*4/r.components*r.byteLength;case tu:return t*e*4/r.components*r.byteLength;case Lo:case Uo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case No:case Fo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zl:case Ql:return Math.max(t,16)*Math.max(e,8)/4;case jl:case Jl:return Math.max(t,8)*Math.max(e,8)/2;case ec:case tc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case sc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case ac:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case lc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case cc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case uc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case dc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case hc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case pc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case mc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case gc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oo:case _c:case vc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case cp:case xc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Sc:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yx(t){switch(t){case li:case np:return{byteLength:1,components:1};case Ls:case ip:case Vs:return{byteLength:2,components:1};case Zc:case Jc:return{byteLength:2,components:4};case ar:case jc:case ti:return{byteLength:4,components:1};case rp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);function wp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Mx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var bx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ex=`#ifdef USE_ALPHAHASH
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
#endif`,Tx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Rx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cx=`#ifdef USE_AOMAP
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
#endif`,Px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ix=`#ifdef USE_BATCHING
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
#endif`,Dx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ux=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ox=`#ifdef USE_BUMPMAP
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
#endif`,Bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qx=`#define PI 3.141592653589793
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
} // validated`,Yx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$x=`vec3 transformedNormal = objectNormal;
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
#endif`,Kx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qx="gl_FragColor = linearToOutputTexel( gl_FragColor );",eS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tS=`#ifdef USE_ENVMAP
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
#endif`,nS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iS=`#ifdef USE_ENVMAP
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
#endif`,rS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,oS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,aS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uS=`#ifdef USE_GRADIENTMAP
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
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pS=`uniform bool receiveShadow;
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
#endif`,mS=`#ifdef USE_ENVMAP
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
#endif`,gS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_S=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SS=`PhysicalMaterial material;
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
#endif`,yS=`struct PhysicalMaterial {
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
}`,MS=`
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
#endif`,bS=`#if defined( RE_IndirectDiffuse )
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
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,TS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,CS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,IS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,DS=`#if defined( USE_POINTS_UV )
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
#endif`,LS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,US=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
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
#endif`,zS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,VS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,XS=`#ifdef USE_NORMALMAP
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
#endif`,qS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$S=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,KS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,JS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,QS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ey=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ty=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ny=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ry=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ay=`float getShadowMask() {
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
}`,ly=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cy=`#ifdef USE_SKINNING
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
#endif`,uy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fy=`#ifdef USE_SKINNING
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
#endif`,dy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,py=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,my=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gy=`#ifdef USE_TRANSMISSION
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
#endif`,_y=`#ifdef USE_TRANSMISSION
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
#endif`,vy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const My=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,by=`uniform sampler2D t2D;
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
}`,Ey=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ty=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ay=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`#include <common>
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
}`,Cy=`#if DEPTH_PACKING == 3200
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
}`,Py=`#define DISTANCE
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
}`,Iy=`#define DISTANCE
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
}`,Dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ly=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Uy=`uniform float scale;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,Fy=`#include <common>
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
}`,Oy=`uniform vec3 diffuse;
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
}`,By=`#define LAMBERT
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
}`,zy=`#define LAMBERT
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
}`,ky=`#define MATCAP
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
}`,Hy=`#define MATCAP
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
}`,Vy=`#define NORMAL
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
}`,Gy=`#define NORMAL
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
}`,Wy=`#define PHONG
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
}`,Xy=`#define PHONG
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
}`,qy=`#define STANDARD
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
}`,Yy=`#define STANDARD
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
}`,$y=`#define TOON
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
}`,Ky=`#define TOON
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
}`,jy=`uniform float size;
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
}`,Zy=`uniform vec3 diffuse;
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
}`,Jy=`#include <common>
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
}`,Qy=`uniform vec3 color;
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
}`,eM=`uniform float rotation;
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
}`,tM=`uniform vec3 diffuse;
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
}`,Ze={alphahash_fragment:bx,alphahash_pars_fragment:Ex,alphamap_fragment:Tx,alphamap_pars_fragment:Ax,alphatest_fragment:wx,alphatest_pars_fragment:Rx,aomap_fragment:Cx,aomap_pars_fragment:Px,batching_pars_vertex:Ix,batching_vertex:Dx,begin_vertex:Lx,beginnormal_vertex:Ux,bsdfs:Nx,iridescence_fragment:Fx,bumpmap_pars_fragment:Ox,clipping_planes_fragment:Bx,clipping_planes_pars_fragment:zx,clipping_planes_pars_vertex:kx,clipping_planes_vertex:Hx,color_fragment:Vx,color_pars_fragment:Gx,color_pars_vertex:Wx,color_vertex:Xx,common:qx,cube_uv_reflection_fragment:Yx,defaultnormal_vertex:$x,displacementmap_pars_vertex:Kx,displacementmap_vertex:jx,emissivemap_fragment:Zx,emissivemap_pars_fragment:Jx,colorspace_fragment:Qx,colorspace_pars_fragment:eS,envmap_fragment:tS,envmap_common_pars_fragment:nS,envmap_pars_fragment:iS,envmap_pars_vertex:rS,envmap_physical_pars_fragment:mS,envmap_vertex:sS,fog_vertex:oS,fog_pars_vertex:aS,fog_fragment:lS,fog_pars_fragment:cS,gradientmap_pars_fragment:uS,lightmap_pars_fragment:fS,lights_lambert_fragment:dS,lights_lambert_pars_fragment:hS,lights_pars_begin:pS,lights_toon_fragment:gS,lights_toon_pars_fragment:_S,lights_phong_fragment:vS,lights_phong_pars_fragment:xS,lights_physical_fragment:SS,lights_physical_pars_fragment:yS,lights_fragment_begin:MS,lights_fragment_maps:bS,lights_fragment_end:ES,logdepthbuf_fragment:TS,logdepthbuf_pars_fragment:AS,logdepthbuf_pars_vertex:wS,logdepthbuf_vertex:RS,map_fragment:CS,map_pars_fragment:PS,map_particle_fragment:IS,map_particle_pars_fragment:DS,metalnessmap_fragment:LS,metalnessmap_pars_fragment:US,morphinstance_vertex:NS,morphcolor_vertex:FS,morphnormal_vertex:OS,morphtarget_pars_vertex:BS,morphtarget_vertex:zS,normal_fragment_begin:kS,normal_fragment_maps:HS,normal_pars_fragment:VS,normal_pars_vertex:GS,normal_vertex:WS,normalmap_pars_fragment:XS,clearcoat_normal_fragment_begin:qS,clearcoat_normal_fragment_maps:YS,clearcoat_pars_fragment:$S,iridescence_pars_fragment:KS,opaque_fragment:jS,packing:ZS,premultiplied_alpha_fragment:JS,project_vertex:QS,dithering_fragment:ey,dithering_pars_fragment:ty,roughnessmap_fragment:ny,roughnessmap_pars_fragment:iy,shadowmap_pars_fragment:ry,shadowmap_pars_vertex:sy,shadowmap_vertex:oy,shadowmask_pars_fragment:ay,skinbase_vertex:ly,skinning_pars_vertex:cy,skinning_vertex:uy,skinnormal_vertex:fy,specularmap_fragment:dy,specularmap_pars_fragment:hy,tonemapping_fragment:py,tonemapping_pars_fragment:my,transmission_fragment:gy,transmission_pars_fragment:_y,uv_pars_fragment:vy,uv_pars_vertex:xy,uv_vertex:Sy,worldpos_vertex:yy,background_vert:My,background_frag:by,backgroundCube_vert:Ey,backgroundCube_frag:Ty,cube_vert:Ay,cube_frag:wy,depth_vert:Ry,depth_frag:Cy,distanceRGBA_vert:Py,distanceRGBA_frag:Iy,equirect_vert:Dy,equirect_frag:Ly,linedashed_vert:Uy,linedashed_frag:Ny,meshbasic_vert:Fy,meshbasic_frag:Oy,meshlambert_vert:By,meshlambert_frag:zy,meshmatcap_vert:ky,meshmatcap_frag:Hy,meshnormal_vert:Vy,meshnormal_frag:Gy,meshphong_vert:Wy,meshphong_frag:Xy,meshphysical_vert:qy,meshphysical_frag:Yy,meshtoon_vert:$y,meshtoon_frag:Ky,points_vert:jy,points_frag:Zy,shadow_vert:Jy,shadow_frag:Qy,sprite_vert:eM,sprite_frag:tM},be={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},Ln={basic:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Xt([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Xt([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Xt([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ge(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Xt([be.points,be.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Xt([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Xt([be.common,be.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Xt([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Xt([be.sprite,be.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:Xt([be.common,be.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:Xt([be.lights,be.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Ln.physical={uniforms:Xt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const Eo={r:0,b:0,g:0},Wi=new ci,nM=new Tt;function iM(t,e,n,i,r,s,o){const a=new Ge(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(T){let y=T.isScene===!0?T.background:null;return y&&y.isTexture&&(y=(T.backgroundBlurriness>0?n:e).get(y)),y}function x(T){let y=!1;const P=g(T);P===null?p(a,l):P&&P.isColor&&(p(P,1),y=!0);const I=t.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(T,y){const P=g(y);P&&(P.isCubeTexture||P.mapping===va)?(u===void 0&&(u=new On(new Xs(1,1,1),new Di({name:"BackgroundCubeMaterial",uniforms:jr(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,C,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Wi.copy(y.backgroundRotation),Wi.x*=-1,Wi.y*=-1,Wi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Wi.y*=-1,Wi.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nM.makeRotationFromEuler(Wi)),u.material.toneMapped=st.getTransfer(P.colorSpace)!==ut,(f!==P||d!==P.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=P,d=P.version,h=t.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new On(new qs(2,2),new Di({name:"BackgroundMaterial",uniforms:jr(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=st.getTransfer(P.colorSpace)!==ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||d!==P.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=P,d=P.version,h=t.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,y){T.getRGB(Eo,vp(t)),i.buffers.color.setClear(Eo.r,Eo.g,Eo.b,y,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,y=1){a.set(T),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(a,l)},render:x,addToRenderList:m,dispose:A}}function rM(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,R,B,X,q){let Y=!1;const $=f(X,B,R);s!==$&&(s=$,c(s.object)),Y=h(M,X,B,q),Y&&g(M,X,B,q),q!==null&&e.update(q,t.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,y(M,R,B,X),q!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,R,B){const X=B.wireframe===!0;let q=i[M.id];q===void 0&&(q={},i[M.id]=q);let Y=q[R.id];Y===void 0&&(Y={},q[R.id]=Y);let $=Y[X];return $===void 0&&($=d(l()),Y[X]=$),$}function d(M){const R=[],B=[],X=[];for(let q=0;q<n;q++)R[q]=0,B[q]=0,X[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:B,attributeDivisors:X,object:M,attributes:{},index:null}}function h(M,R,B,X){const q=s.attributes,Y=R.attributes;let $=0;const z=B.getAttributes();for(const L in z)if(z[L].location>=0){const fe=q[L];let ve=Y[L];if(ve===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),fe===void 0||fe.attribute!==ve||ve&&fe.data!==ve.data)return!0;$++}return s.attributesNum!==$||s.index!==X}function g(M,R,B,X){const q={},Y=R.attributes;let $=0;const z=B.getAttributes();for(const L in z)if(z[L].location>=0){let fe=Y[L];fe===void 0&&(L==="instanceMatrix"&&M.instanceMatrix&&(fe=M.instanceMatrix),L==="instanceColor"&&M.instanceColor&&(fe=M.instanceColor));const ve={};ve.attribute=fe,fe&&fe.data&&(ve.data=fe.data),q[L]=ve,$++}s.attributes=q,s.attributesNum=$,s.index=X}function x(){const M=s.newAttributes;for(let R=0,B=M.length;R<B;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const B=s.newAttributes,X=s.enabledAttributes,q=s.attributeDivisors;B[M]=1,X[M]===0&&(t.enableVertexAttribArray(M),X[M]=1),q[M]!==R&&(t.vertexAttribDivisor(M,R),q[M]=R)}function A(){const M=s.newAttributes,R=s.enabledAttributes;for(let B=0,X=R.length;B<X;B++)R[B]!==M[B]&&(t.disableVertexAttribArray(B),R[B]=0)}function T(M,R,B,X,q,Y,$){$===!0?t.vertexAttribIPointer(M,R,B,q,Y):t.vertexAttribPointer(M,R,B,X,q,Y)}function y(M,R,B,X){x();const q=X.attributes,Y=B.getAttributes(),$=R.defaultAttributeValues;for(const z in Y){const L=Y[z];if(L.location>=0){let ie=q[z];if(ie===void 0&&(z==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),z==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const fe=ie.normalized,ve=ie.itemSize,Me=e.get(ie);if(Me===void 0)continue;const $e=Me.buffer,ke=Me.type,ne=Me.bytesPerElement,me=ke===t.INT||ke===t.UNSIGNED_INT||ie.gpuType===jc;if(ie.isInterleavedBufferAttribute){const N=ie.data,se=N.stride,V=ie.offset;if(N.isInstancedInterleavedBuffer){for(let oe=0;oe<L.locationSize;oe++)p(L.location+oe,N.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=N.meshPerAttribute*N.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let oe=0;oe<L.locationSize;oe++)T(L.location+oe,ve/L.locationSize,ke,fe,se*ne,(V+ve/L.locationSize*oe)*ne,me)}else{if(ie.isInstancedBufferAttribute){for(let N=0;N<L.locationSize;N++)p(L.location+N,ie.meshPerAttribute);M.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let N=0;N<L.locationSize;N++)m(L.location+N);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let N=0;N<L.locationSize;N++)T(L.location+N,ve/L.locationSize,ke,fe,ve*ne,ve/L.locationSize*N*ne,me)}}else if($!==void 0){const fe=$[z];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(L.location,fe);break;case 3:t.vertexAttrib3fv(L.location,fe);break;case 4:t.vertexAttrib4fv(L.location,fe);break;default:t.vertexAttrib1fv(L.location,fe)}}}}A()}function P(){D();for(const M in i){const R=i[M];for(const B in R){const X=R[B];for(const q in X)u(X[q].object),delete X[q];delete R[B]}delete i[M]}}function I(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const B in R){const X=R[B];for(const q in X)u(X[q].object),delete X[q];delete R[B]}delete i[M.id]}function C(M){for(const R in i){const B=i[R];if(B[M.id]===void 0)continue;const X=B[M.id];for(const q in X)u(X[q].object),delete X[q];delete B[M.id]}}function D(){S(),o=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:D,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:I,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function sM(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x]*d[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oM(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(C){return!(C!==yn&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const D=C===Vs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==li&&i.convert(C)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==ti&&!D)}function l(C){if(C==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,I=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:T,maxFragmentUniforms:y,vertexTextures:P,maxSamples:I}}function aM(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Yi,a=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,T=A*4;let y=p.clippingState||null;l.value=y,y=u(g,d,T,h);for(let P=0;P!==T;++P)y[P]=n[P];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=h+x*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,y=h;T!==x;++T,y+=4)o.copy(f[T]).applyMatrix4(A,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function lM(t){let e=new WeakMap;function n(o,a){return a===ql?o.mapping=Yr:a===Yl&&(o.mapping=$r),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ql||a===Yl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ux(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Dr=4,qf=[.125,.215,.35,.446,.526,.582],Ji=20,dl=new Ap,Yf=new Ge;let hl=null,pl=0,ml=0,gl=!1;const $i=(1+Math.sqrt(5))/2,Cr=1/$i,$f=[new Z(-$i,Cr,0),new Z($i,Cr,0),new Z(-Cr,0,$i),new Z(Cr,0,$i),new Z(0,$i,-Cr),new Z(0,$i,Cr),new Z(-1,1,-1),new Z(1,1,-1),new Z(-1,1,1),new Z(1,1,1)],cM=new Z;class Kf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=cM}=s;hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,pl,ml),this._renderer.xr.enabled=gl,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Yr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),pl=this._renderer.getActiveCubeFace(),ml=this._renderer.getActiveMipmapLevel(),gl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:zt,minFilter:zt,generateMipmaps:!1,type:Vs,format:yn,colorSpace:Kr,depthBuffer:!1},r=jf(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jf(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uM(s)),this._blurMaterial=fM(s,e,n)}return r}_compileMaterial(e){const n=new On(this._lodPlanes[0],e);this._renderer.compile(n,dl)}_sceneToCubeUV(e,n,i,r,s){const l=new pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Yf),f.toneMapping=Ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const x=new iu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new On(new Xs,x);let p=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,p=!0):(x.color.copy(Yf),p=!0);for(let T=0;T<6;T++){const y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const P=this._cubeSize;To(r,y*P,T>2?P:0,P,P),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Yr||e.mapping===$r;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new On(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;To(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$f[(r-s-1)%$f.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new On(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Ji-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):Ji;m>Ji&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ji}`);const p=[];let A=0;for(let C=0;C<Ji;++C){const D=C/x,S=Math.exp(-D*D/2);p.push(S),C===0?A+=S:C<m&&(A+=2*S)}for(let C=0;C<p.length;C++)p[C]=p[C]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-i;const y=this._sizeLods[r],P=3*y*(r>T-Dr?r-T+Dr:0),I=4*(this._cubeSize-y);To(n,P,I,3*y,2*y),l.setRenderTarget(n),l.render(f,dl)}}function uM(t){const e=[],n=[],i=[];let r=t;const s=t-Dr+1+qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Dr?l=qf[o-t+Dr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,x=3,m=2,p=1,A=new Float32Array(x*g*h),T=new Float32Array(m*g*h),y=new Float32Array(p*g*h);for(let I=0;I<h;I++){const C=I%3*2/3-1,D=I>2?0:-1,S=[C,D,0,C+2/3,D,0,C+2/3,D+1,0,C,D,0,C+2/3,D+1,0,C,D+1,0];A.set(S,x*g*I),T.set(d,m*g*I);const M=[I,I,I,I,I,I];y.set(M,p*g*I)}const P=new Rn;P.setAttribute("position",new jt(A,x)),P.setAttribute("uv",new jt(T,m)),P.setAttribute("faceIndex",new jt(y,p)),e.push(P),r>Dr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jf(t,e,n){const i=new lr(t,e,n);return i.texture.mapping=va,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function fM(t,e,n){const i=new Float32Array(Ji),r=new Z(0,1,0);return new Di({name:"SphericalGaussianBlur",defines:{n:Ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ru(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Zf(){return new Di({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Jf(){return new Di({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}function dM(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ql||l===Yl,u=l===Yr||l===$r;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Kf(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new Kf(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hM(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&kr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pM(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let x=0;if(h!==null){const A=h.array;x=h.version;for(let T=0,y=A.length;T<y;T+=3){const P=A[T+0],I=A[T+1],C=A[T+2];d.push(P,I,I,C,C,P)}}else if(g!==void 0){const A=g.array;x=g.version;for(let T=0,y=A.length/3-1;T<y;T+=3){const P=T+0,I=T+1,C=T+2;d.push(P,I,I,C,C,P)}}else return;const m=new(fp(d)?_p:gp)(d,1);m.version=x;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function mM(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,x,0,g);let p=0;for(let A=0;A<g;A++)p+=h[A]*x[A];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function gM(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function _M(t,e,n){const i=new WeakMap,r=new Et;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let M=function(){D.dispose(),i.delete(a),a.removeEventListener("dispose",M)};var h=M;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],A=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let P=a.attributes.position.count*y,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*I*4*f),D=new dp(C,P,I,f);D.type=ti,D.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const B=p[R],X=A[R],q=T[R],Y=P*I*4*R;for(let $=0;$<B.count;$++){const z=$*S;g===!0&&(r.fromBufferAttribute(B,$),C[Y+z+0]=r.x,C[Y+z+1]=r.y,C[Y+z+2]=r.z,C[Y+z+3]=0),x===!0&&(r.fromBufferAttribute(X,$),C[Y+z+4]=r.x,C[Y+z+5]=r.y,C[Y+z+6]=r.z,C[Y+z+7]=0),m===!0&&(r.fromBufferAttribute(q,$),C[Y+z+8]=r.x,C[Y+z+9]=r.y,C[Y+z+10]=r.z,C[Y+z+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:D,size:new tt(P,I)},i.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function vM(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const Rp=new Lt,Qf=new Tp(1,1),Cp=new dp,Pp=new Yv,Ip=new Sp,ed=[],td=[],nd=new Float32Array(16),id=new Float32Array(9),rd=new Float32Array(4);function Qr(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ed[r];if(s===void 0&&(s=new Float32Array(r),ed[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ct(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Pt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Sa(t,e){let n=td[e];n===void 0&&(n=new Int32Array(e),td[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function SM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2fv(this.addr,e),Pt(n,e)}}function yM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ct(n,e))return;t.uniform3fv(this.addr,e),Pt(n,e)}}function MM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4fv(this.addr,e),Pt(n,e)}}function bM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;rd.set(i),t.uniformMatrix2fv(this.addr,!1,rd),Pt(n,i)}}function EM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;id.set(i),t.uniformMatrix3fv(this.addr,!1,id),Pt(n,i)}}function TM(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ct(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Pt(n,e)}else{if(Ct(n,i))return;nd.set(i),t.uniformMatrix4fv(this.addr,!1,nd),Pt(n,i)}}function AM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function wM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2iv(this.addr,e),Pt(n,e)}}function RM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3iv(this.addr,e),Pt(n,e)}}function CM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4iv(this.addr,e),Pt(n,e)}}function PM(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ct(n,e))return;t.uniform2uiv(this.addr,e),Pt(n,e)}}function DM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ct(n,e))return;t.uniform3uiv(this.addr,e),Pt(n,e)}}function LM(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ct(n,e))return;t.uniform4uiv(this.addr,e),Pt(n,e)}}function UM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Qf.compareFunction=up,s=Qf):s=Rp,n.setTexture2D(e||s,r)}function NM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Pp,r)}function FM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ip,r)}function OM(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Cp,r)}function BM(t){switch(t){case 5126:return xM;case 35664:return SM;case 35665:return yM;case 35666:return MM;case 35674:return bM;case 35675:return EM;case 35676:return TM;case 5124:case 35670:return AM;case 35667:case 35671:return wM;case 35668:case 35672:return RM;case 35669:case 35673:return CM;case 5125:return PM;case 36294:return IM;case 36295:return DM;case 36296:return LM;case 35678:case 36198:case 36298:case 36306:case 35682:return UM;case 35679:case 36299:case 36307:return NM;case 35680:case 36300:case 36308:case 36293:return FM;case 36289:case 36303:case 36311:case 36292:return OM}}function zM(t,e){t.uniform1fv(this.addr,e)}function kM(t,e){const n=Qr(e,this.size,2);t.uniform2fv(this.addr,n)}function HM(t,e){const n=Qr(e,this.size,3);t.uniform3fv(this.addr,n)}function VM(t,e){const n=Qr(e,this.size,4);t.uniform4fv(this.addr,n)}function GM(t,e){const n=Qr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WM(t,e){const n=Qr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XM(t,e){const n=Qr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qM(t,e){t.uniform1iv(this.addr,e)}function YM(t,e){t.uniform2iv(this.addr,e)}function $M(t,e){t.uniform3iv(this.addr,e)}function KM(t,e){t.uniform4iv(this.addr,e)}function jM(t,e){t.uniform1uiv(this.addr,e)}function ZM(t,e){t.uniform2uiv(this.addr,e)}function JM(t,e){t.uniform3uiv(this.addr,e)}function QM(t,e){t.uniform4uiv(this.addr,e)}function eb(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Rp,s[o])}function tb(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Pp,s[o])}function nb(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Ip,s[o])}function ib(t,e,n){const i=this.cache,r=e.length,s=Sa(n,r);Ct(i,s)||(t.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Cp,s[o])}function rb(t){switch(t){case 5126:return zM;case 35664:return kM;case 35665:return HM;case 35666:return VM;case 35674:return GM;case 35675:return WM;case 35676:return XM;case 5124:case 35670:return qM;case 35667:case 35671:return YM;case 35668:case 35672:return $M;case 35669:case 35673:return KM;case 5125:return jM;case 36294:return ZM;case 36295:return JM;case 36296:return QM;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}class sb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BM(n.type)}}class ob{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rb(n.type)}}class ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _l=/(\w+)(\])?(\[|\.)?/g;function sd(t,e){t.seq.push(e),t.map[e.id]=e}function lb(t,e,n){const i=t.name,r=i.length;for(_l.lastIndex=0;;){const s=_l.exec(i),o=_l.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){sd(n,c===void 0?new sb(a,t,e):new ob(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new ab(a),sd(n,f)),n=f}}}class Bo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lb(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function od(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cb=37297;let ub=0;function fb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const ad=new je;function db(t){st._getMatrix(ad,st.workingColorSpace,t);const e=`mat3( ${ad.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Jo:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ld(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+fb(t.getShaderSource(e),a)}else return s}function hb(t,e){const n=db(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pb(t,e){let n;switch(e){case Sv:n="Linear";break;case yv:n="Reinhard";break;case Mv:n="Cineon";break;case bv:n="ACESFilmic";break;case Tv:n="AgX";break;case Av:n="Neutral";break;case Ev:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ao=new Z;function mb(){st.getLuminanceCoefficients(Ao);const t=Ao.x.toFixed(4),e=Ao.y.toFixed(4),n=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hs).join(`
`)}function _b(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function vb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function hs(t){return t!==""}function cd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ud(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ac(t){return t.replace(xb,yb)}const Sb=new Map;function yb(t,e){let n=Ze[e];if(n===void 0){const i=Sb.get(e);if(i!==void 0)n=Ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ac(n)}const Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fd(t){return t.replace(Mb,bb)}function bb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function Eb(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Qh?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===jn&&(e="SHADOWMAP_TYPE_VSM"),e}function Tb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Yr:case $r:e="ENVMAP_TYPE_CUBE";break;case va:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ab(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===$r&&(e="ENVMAP_MODE_REFRACTION"),e}function wb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case ep:e="ENVMAP_BLENDING_MULTIPLY";break;case vv:e="ENVMAP_BLENDING_MIX";break;case xv:e="ENVMAP_BLENDING_ADD";break}return e}function Rb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Cb(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Eb(n),c=Tb(n),u=Ab(n),f=wb(n),d=Rb(n),h=gb(n),g=_b(s),x=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(hs).join(`
`),p.length>0&&(p+=`
`)):(m=[dd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hs).join(`
`),p=[dd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Ri?pb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,hb("linearToOutputTexel",n.outputColorSpace),mb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(hs).join(`
`)),o=Ac(o),o=cd(o,n),o=ud(o,n),a=Ac(a),a=cd(a,n),a=ud(a,n),o=fd(o),a=fd(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Mf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Mf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=A+m+o,y=A+p+a,P=od(r,r.VERTEX_SHADER,T),I=od(r,r.FRAGMENT_SHADER,y);r.attachShader(x,P),r.attachShader(x,I),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(R){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",X=r.getShaderInfoLog(P)||"",q=r.getShaderInfoLog(I)||"",Y=B.trim(),$=X.trim(),z=q.trim();let L=!0,ie=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,P,I);else{const fe=ld(r,P,"vertex"),ve=ld(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+Y+`
`+fe+`
`+ve)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):($===""||z==="")&&(ie=!1);ie&&(R.diagnostics={runnable:L,programLog:Y,vertexShader:{log:$,prefix:m},fragmentShader:{log:z,prefix:p}})}r.deleteShader(P),r.deleteShader(I),D=new Bo(r,x),S=vb(r,x)}let D;this.getUniforms=function(){return D===void 0&&C(this),D};let S;this.getAttributes=function(){return S===void 0&&C(this),S};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,cb)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ub++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=I,this}let Pb=0;class Ib{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Db(e),n.set(e,i)),i}}class Db{constructor(e){this.id=Pb++,this.code=e,this.usedTimes=0}}function Lb(t,e,n,i,r,s,o){const a=new pp,l=new Ib,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,R,B,X){const q=B.fog,Y=X.geometry,$=S.isMeshStandardMaterial?B.environment:null,z=(S.isMeshStandardMaterial?n:e).get(S.envMap||$),L=z&&z.mapping===va?z.image.height:null,ie=g[S.type];S.precision!==null&&(h=r.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const fe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ve=fe!==void 0?fe.length:0;let Me=0;Y.morphAttributes.position!==void 0&&(Me=1),Y.morphAttributes.normal!==void 0&&(Me=2),Y.morphAttributes.color!==void 0&&(Me=3);let $e,ke,ne,me;if(ie){const ot=Ln[ie];$e=ot.vertexShader,ke=ot.fragmentShader}else $e=S.vertexShader,ke=S.fragmentShader,l.update(S),ne=l.getVertexShaderID(S),me=l.getFragmentShaderID(S);const N=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),V=X.isInstancedMesh===!0,oe=X.isBatchedMesh===!0,Ne=!!S.map,w=!!S.matcap,_=!!z,F=!!S.aoMap,W=!!S.lightMap,te=!!S.bumpMap,G=!!S.normalMap,de=!!S.displacementMap,Q=!!S.emissiveMap,le=!!S.metalnessMap,ce=!!S.roughnessMap,Te=S.anisotropy>0,b=S.clearcoat>0,v=S.dispersion>0,U=S.iridescence>0,K=S.sheen>0,ae=S.transmission>0,j=Te&&!!S.anisotropyMap,we=b&&!!S.clearcoatMap,he=b&&!!S.clearcoatNormalMap,Re=b&&!!S.clearcoatRoughnessMap,Ce=U&&!!S.iridescenceMap,pe=U&&!!S.iridescenceThicknessMap,Ee=K&&!!S.sheenColorMap,Le=K&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,ye=!!S.specularColorMap,We=!!S.specularIntensityMap,O=ae&&!!S.transmissionMap,xe=ae&&!!S.thicknessMap,Se=!!S.gradientMap,De=!!S.alphaMap,ge=S.alphaTest>0,ue=!!S.alphaHash,Fe=!!S.extensions;let Ye=Ri;S.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ye=t.toneMapping);const mt={shaderID:ie,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:ke,defines:S.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:oe,batchingColor:oe&&X._colorsTexture!==null,instancing:V,instancingColor:V&&X.instanceColor!==null,instancingMorph:V&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:N===null?t.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Kr,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:w,envMap:_,envMapMode:_&&z.mapping,envMapCubeUVHeight:L,aoMap:F,lightMap:W,bumpMap:te,normalMap:G,displacementMap:d&&de,emissiveMap:Q,normalMapObjectSpace:G&&S.normalMapType===Iv,normalMapTangentSpace:G&&S.normalMapType===Pv,metalnessMap:le,roughnessMap:ce,anisotropy:Te,anisotropyMap:j,clearcoat:b,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:v,iridescence:U,iridescenceMap:Ce,iridescenceThicknessMap:pe,sheen:K,sheenColorMap:Ee,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:ye,specularIntensityMap:We,transmission:ae,transmissionMap:O,thicknessMap:xe,gradientMap:Se,opaque:S.transparent===!1&&S.blending===zr&&S.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:ue,combine:S.combine,mapUv:Ne&&x(S.map.channel),aoMapUv:F&&x(S.aoMap.channel),lightMapUv:W&&x(S.lightMap.channel),bumpMapUv:te&&x(S.bumpMap.channel),normalMapUv:G&&x(S.normalMap.channel),displacementMapUv:de&&x(S.displacementMap.channel),emissiveMapUv:Q&&x(S.emissiveMap.channel),metalnessMapUv:le&&x(S.metalnessMap.channel),roughnessMapUv:ce&&x(S.roughnessMap.channel),anisotropyMapUv:j&&x(S.anisotropyMap.channel),clearcoatMapUv:we&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:he&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Le&&x(S.sheenRoughnessMap.channel),specularMapUv:Pe&&x(S.specularMap.channel),specularColorMapUv:ye&&x(S.specularColorMap.channel),specularIntensityMapUv:We&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:xe&&x(S.thicknessMap.channel),alphaMapUv:De&&x(S.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(G||Te),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!Y.attributes.uv&&(Ne||De),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:X.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Me,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ye,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:Q&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Un,flipSided:S.side===en,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Fe&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&S.extensions.multiDraw===!0||oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(M,S),T(M,S),M.push(t.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function T(S,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function y(S){const M=g[S.type];let R;if(M){const B=Ln[M];R=ox.clone(B.uniforms)}else R=S.uniforms;return R}function P(S,M){let R;for(let B=0,X=u.length;B<X;B++){const q=u[B];if(q.cacheKey===M){R=q,++R.usedTimes;break}}return R===void 0&&(R=new Cb(t,M,S,s),u.push(R)),R}function I(S){if(--S.usedTimes===0){const M=u.indexOf(S);u[M]=u[u.length-1],u.pop(),S.destroy()}}function C(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:P,releaseProgram:I,releaseShaderCache:C,programs:u,dispose:D}}function Ub(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Nb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function hd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function pd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,x,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=x,p.group=m),e++,p}function a(f,d,h,g,x,m){const p=o(f,d,h,g,x,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,x,m){const p=o(f,d,h,g,x,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||Nb),i.length>1&&i.sort(d||hd),r.length>1&&r.sort(d||hd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function Fb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new pd,t.set(i,[o])):r>=s.length?(o=new pd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Ob(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new Ge};break;case"SpotLight":n={position:new Z,direction:new Z,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":n={color:new Ge,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return t[e.id]=n,n}}}function Bb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let zb=0;function kb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Hb(t){const e=new Ob,n=Bb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new Z);const r=new Z,s=new Tt,o=new Tt;function a(c){let u=0,f=0,d=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,A=0,T=0,y=0,P=0,I=0,C=0;c.sort(kb);for(let S=0,M=c.length;S<M;S++){const R=c[S],B=R.color,X=R.intensity,q=R.distance,Y=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=B.r*X,f+=B.g*X,d+=B.b*X;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],X);C++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const z=R.shadow,L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,i.directionalShadow[h]=L,i.directionalShadowMap[h]=Y,i.directionalShadowMatrix[h]=R.shadow.matrix,A++}i.directional[h]=$,h++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(B).multiplyScalar(X),$.distance=q,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[x]=$;const z=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,z.updateMatrices(R),R.castShadow&&I++),i.spotLightMatrix[x]=z.matrix,R.castShadow){const L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,i.spotShadow[x]=L,i.spotShadowMap[x]=Y,y++}x++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(B).multiplyScalar(X),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const z=R.shadow,L=n.get(R);L.shadowIntensity=z.intensity,L.shadowBias=z.bias,L.shadowNormalBias=z.normalBias,L.shadowRadius=z.radius,L.shadowMapSize=z.mapSize,L.shadowCameraNear=z.camera.near,L.shadowCameraFar=z.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=R.shadow.matrix,T++}i.point[g]=$,g++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(X),$.groundColor.copy(R.groundColor).multiplyScalar(X),i.hemi[p]=$,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const D=i.hash;(D.directionalLength!==h||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==p||D.numDirectionalShadows!==A||D.numPointShadows!==T||D.numSpotShadows!==y||D.numSpotMaps!==P||D.numLightProbes!==C)&&(i.directional.length=h,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=T,i.spotLightMatrix.length=y+P-I,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=I,i.numLightProbes=C,D.directionalLength=h,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=p,D.numDirectionalShadows=A,D.numPointShadows=T,D.numSpotShadows=y,D.numSpotMaps=P,D.numLightProbes=C,i.version=zb++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const T=c[p];if(T.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(T.isSpotLight){const y=i.spot[h];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(T.matrixWorld),r.setFromMatrixPosition(T.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(T.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(T.width*.5,0,0),y.halfHeight.set(0,T.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(T.matrixWorld),y.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(T.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function md(t){const e=new Hb(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Vb(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new md(t),e.set(r,[a])):s>=o.length?(a=new md(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const Gb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
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
}`;function Xb(t,e,n){let i=new Ep;const r=new tt,s=new tt,o=new Et,a=new _x({depthPacking:Cv}),l=new vx,c={},u=n.maxTextureSize,f={[Ii]:en,[en]:Ii,[Un]:Un},d=new Di({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Gb,fragmentShader:Wb}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Rn;g.setAttribute("position",new jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new On(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qh;let p=this.type;this.render=function(I,C,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const S=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),B=t.state;B.setBlending(wi),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const X=p!==jn&&this.type===jn,q=p===jn&&this.type!==jn;for(let Y=0,$=I.length;Y<$;Y++){const z=I[Y],L=z.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const ie=L.getFrameExtents();if(r.multiply(ie),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,L.mapSize.y=s.y)),L.map===null||X===!0||q===!0){const ve=this.type!==jn?{minFilter:bn,magFilter:bn}:{};L.map!==null&&L.map.dispose(),L.map=new lr(r.x,r.y,ve),L.map.texture.name=z.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const fe=L.getViewportCount();for(let ve=0;ve<fe;ve++){const Me=L.getViewport(ve);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),B.viewport(o),L.updateMatrices(z,ve),i=L.getFrustum(),y(C,D,L.camera,z,this.type)}L.isPointLightShadow!==!0&&this.type===jn&&A(L,D),L.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(S,M,R)};function A(I,C){const D=e.update(x);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,h.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new lr(r.x,r.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,t.setRenderTarget(I.mapPass),t.clear(),t.renderBufferDirect(C,null,D,d,x,null),h.uniforms.shadow_pass.value=I.mapPass.texture,h.uniforms.resolution.value=I.mapSize,h.uniforms.radius.value=I.radius,t.setRenderTarget(I.map),t.clear(),t.renderBufferDirect(C,null,D,h,x,null)}function T(I,C,D,S){let M=null;const R=D.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(R!==void 0)M=R;else if(M=D.isPointLight===!0?l:a,t.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const B=M.uuid,X=C.uuid;let q=c[B];q===void 0&&(q={},c[B]=q);let Y=q[X];Y===void 0&&(Y=M.clone(),q[X]=Y,C.addEventListener("dispose",P)),M=Y}if(M.visible=C.visible,M.wireframe=C.wireframe,S===jn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:f[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=t.properties.get(M);B.light=D}return M}function y(I,C,D,S,M){if(I.visible===!1)return;if(I.layers.test(C.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&M===jn)&&(!I.frustumCulled||i.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,I.matrixWorld);const X=e.update(I),q=I.material;if(Array.isArray(q)){const Y=X.groups;for(let $=0,z=Y.length;$<z;$++){const L=Y[$],ie=q[L.materialIndex];if(ie&&ie.visible){const fe=T(I,ie,S,M);I.onBeforeShadow(t,I,C,D,X,fe,L),t.renderBufferDirect(D,null,X,fe,I,L),I.onAfterShadow(t,I,C,D,X,fe,L)}}}else if(q.visible){const Y=T(I,q,S,M);I.onBeforeShadow(t,I,C,D,X,Y,null),t.renderBufferDirect(D,null,X,Y,I,null),I.onAfterShadow(t,I,C,D,X,Y,null)}}const B=I.children;for(let X=0,q=B.length;X<q;X++)y(B[X],C,D,S,M)}function P(I){I.target.removeEventListener("dispose",P);for(const D in c){const S=c[D],M=I.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const qb={[zl]:kl,[Hl]:Wl,[Vl]:Xl,[qr]:Gl,[kl]:zl,[Wl]:Hl,[Xl]:Vl,[Gl]:qr};function Yb(t,e){function n(){let O=!1;const xe=new Et;let Se=null;const De=new Et(0,0,0,0);return{setMask:function(ge){Se!==ge&&!O&&(t.colorMask(ge,ge,ge,ge),Se=ge)},setLocked:function(ge){O=ge},setClear:function(ge,ue,Fe,Ye,mt){mt===!0&&(ge*=Ye,ue*=Ye,Fe*=Ye),xe.set(ge,ue,Fe,Ye),De.equals(xe)===!1&&(t.clearColor(ge,ue,Fe,Ye),De.copy(xe))},reset:function(){O=!1,Se=null,De.set(-1,0,0,0)}}}function i(){let O=!1,xe=!1,Se=null,De=null,ge=null;return{setReversed:function(ue){if(xe!==ue){const Fe=e.get("EXT_clip_control");ue?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=ue;const Ye=ge;ge=null,this.setClear(Ye)}},getReversed:function(){return xe},setTest:function(ue){ue?N(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ue){Se!==ue&&!O&&(t.depthMask(ue),Se=ue)},setFunc:function(ue){if(xe&&(ue=qb[ue]),De!==ue){switch(ue){case zl:t.depthFunc(t.NEVER);break;case kl:t.depthFunc(t.ALWAYS);break;case Hl:t.depthFunc(t.LESS);break;case qr:t.depthFunc(t.LEQUAL);break;case Vl:t.depthFunc(t.EQUAL);break;case Gl:t.depthFunc(t.GEQUAL);break;case Wl:t.depthFunc(t.GREATER);break;case Xl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ue}},setLocked:function(ue){O=ue},setClear:function(ue){ge!==ue&&(xe&&(ue=1-ue),t.clearDepth(ue),ge=ue)},reset:function(){O=!1,Se=null,De=null,ge=null,xe=!1}}}function r(){let O=!1,xe=null,Se=null,De=null,ge=null,ue=null,Fe=null,Ye=null,mt=null;return{setTest:function(ot){O||(ot?N(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!O&&(t.stencilMask(ot),xe=ot)},setFunc:function(ot,Hn,Cn){(Se!==ot||De!==Hn||ge!==Cn)&&(t.stencilFunc(ot,Hn,Cn),Se=ot,De=Hn,ge=Cn)},setOp:function(ot,Hn,Cn){(ue!==ot||Fe!==Hn||Ye!==Cn)&&(t.stencilOp(ot,Hn,Cn),ue=ot,Fe=Hn,Ye=Cn)},setLocked:function(ot){O=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){O=!1,xe=null,Se=null,De=null,ge=null,ue=null,Fe=null,Ye=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,A=null,T=null,y=null,P=null,I=null,C=new Ge(0,0,0),D=0,S=!1,M=null,R=null,B=null,X=null,q=null;const Y=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(L)[1]),$=z>=1):L.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),$=z>=2);let ie=null,fe={};const ve=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),$e=new Et().fromArray(ve),ke=new Et().fromArray(Me);function ne(O,xe,Se,De){const ge=new Uint8Array(4),ue=t.createTexture();t.bindTexture(O,ue),t.texParameteri(O,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(O,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<Se;Fe++)O===t.TEXTURE_3D||O===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(xe+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ue}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),N(t.DEPTH_TEST),o.setFunc(qr),te(!1),G(vf),N(t.CULL_FACE),F(wi);function N(O){u[O]!==!0&&(t.enable(O),u[O]=!0)}function se(O){u[O]!==!1&&(t.disable(O),u[O]=!1)}function V(O,xe){return f[O]!==xe?(t.bindFramebuffer(O,xe),f[O]=xe,O===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),O===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function oe(O,xe){let Se=h,De=!1;if(O){Se=d.get(xe),Se===void 0&&(Se=[],d.set(xe,Se));const ge=O.textures;if(Se.length!==ge.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Fe=ge.length;ue<Fe;ue++)Se[ue]=t.COLOR_ATTACHMENT0+ue;Se.length=ge.length,De=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,De=!0);De&&t.drawBuffers(Se)}function Ne(O){return g!==O?(t.useProgram(O),g=O,!0):!1}const w={[Zi]:t.FUNC_ADD,[tv]:t.FUNC_SUBTRACT,[nv]:t.FUNC_REVERSE_SUBTRACT};w[iv]=t.MIN,w[rv]=t.MAX;const _={[sv]:t.ZERO,[ov]:t.ONE,[av]:t.SRC_COLOR,[Ol]:t.SRC_ALPHA,[hv]:t.SRC_ALPHA_SATURATE,[fv]:t.DST_COLOR,[cv]:t.DST_ALPHA,[lv]:t.ONE_MINUS_SRC_COLOR,[Bl]:t.ONE_MINUS_SRC_ALPHA,[dv]:t.ONE_MINUS_DST_COLOR,[uv]:t.ONE_MINUS_DST_ALPHA,[pv]:t.CONSTANT_COLOR,[mv]:t.ONE_MINUS_CONSTANT_COLOR,[gv]:t.CONSTANT_ALPHA,[_v]:t.ONE_MINUS_CONSTANT_ALPHA};function F(O,xe,Se,De,ge,ue,Fe,Ye,mt,ot){if(O===wi){x===!0&&(se(t.BLEND),x=!1);return}if(x===!1&&(N(t.BLEND),x=!0),O!==ev){if(O!==m||ot!==S){if((p!==Zi||y!==Zi)&&(t.blendEquation(t.FUNC_ADD),p=Zi,y=Zi),ot)switch(O){case zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ds:t.blendFunc(t.ONE,t.ONE);break;case xf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ds:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case xf:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}A=null,T=null,P=null,I=null,C.set(0,0,0),D=0,m=O,S=ot}return}ge=ge||xe,ue=ue||Se,Fe=Fe||De,(xe!==p||ge!==y)&&(t.blendEquationSeparate(w[xe],w[ge]),p=xe,y=ge),(Se!==A||De!==T||ue!==P||Fe!==I)&&(t.blendFuncSeparate(_[Se],_[De],_[ue],_[Fe]),A=Se,T=De,P=ue,I=Fe),(Ye.equals(C)===!1||mt!==D)&&(t.blendColor(Ye.r,Ye.g,Ye.b,mt),C.copy(Ye),D=mt),m=O,S=!1}function W(O,xe){O.side===Un?se(t.CULL_FACE):N(t.CULL_FACE);let Se=O.side===en;xe&&(Se=!Se),te(Se),O.blending===zr&&O.transparent===!1?F(wi):F(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);const De=O.stencilWrite;a.setTest(De),De&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Q(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?N(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function te(O){M!==O&&(O?t.frontFace(t.CW):t.frontFace(t.CCW),M=O)}function G(O){O!==Z0?(N(t.CULL_FACE),O!==R&&(O===vf?t.cullFace(t.BACK):O===J0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),R=O}function de(O){O!==B&&($&&t.lineWidth(O),B=O)}function Q(O,xe,Se){O?(N(t.POLYGON_OFFSET_FILL),(X!==xe||q!==Se)&&(t.polygonOffset(xe,Se),X=xe,q=Se)):se(t.POLYGON_OFFSET_FILL)}function le(O){O?N(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function ce(O){O===void 0&&(O=t.TEXTURE0+Y-1),ie!==O&&(t.activeTexture(O),ie=O)}function Te(O,xe,Se){Se===void 0&&(ie===null?Se=t.TEXTURE0+Y-1:Se=ie);let De=fe[Se];De===void 0&&(De={type:void 0,texture:void 0},fe[Se]=De),(De.type!==O||De.texture!==xe)&&(ie!==Se&&(t.activeTexture(Se),ie=Se),t.bindTexture(O,xe||me[O]),De.type=O,De.texture=xe)}function b(){const O=fe[ie];O!==void 0&&O.type!==void 0&&(t.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function K(){try{t.texSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{t.texSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function j(){try{t.compressedTexSubImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{t.texStorage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Re(){try{t.texStorage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ce(){try{t.texImage2D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pe(){try{t.texImage3D(...arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ee(O){$e.equals(O)===!1&&(t.scissor(O.x,O.y,O.z,O.w),$e.copy(O))}function Le(O){ke.equals(O)===!1&&(t.viewport(O.x,O.y,O.z,O.w),ke.copy(O))}function Pe(O,xe){let Se=c.get(xe);Se===void 0&&(Se=new WeakMap,c.set(xe,Se));let De=Se.get(O);De===void 0&&(De=t.getUniformBlockIndex(xe,O.name),Se.set(O,De))}function ye(O,xe){const De=c.get(xe).get(O);l.get(xe)!==De&&(t.uniformBlockBinding(xe,De,O.__bindingPointIndex),l.set(xe,De))}function We(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ie=null,fe={},f={},d=new WeakMap,h=[],g=null,x=!1,m=null,p=null,A=null,T=null,y=null,P=null,I=null,C=new Ge(0,0,0),D=0,S=!1,M=null,R=null,B=null,X=null,q=null,$e.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:N,disable:se,bindFramebuffer:V,drawBuffers:oe,useProgram:Ne,setBlending:F,setMaterial:W,setFlipSided:te,setCullFace:G,setLineWidth:de,setPolygonOffset:Q,setScissorTest:le,activeTexture:ce,bindTexture:Te,unbindTexture:b,compressedTexImage2D:v,compressedTexImage3D:U,texImage2D:Ce,texImage3D:pe,updateUBOMapping:Pe,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Re,texSubImage2D:K,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:we,scissor:Ee,viewport:Le,reset:We}}function $b(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return h?new OffscreenCanvas(b,v):ea("canvas")}function x(b,v,U){let K=1;const ae=Te(b);if((ae.width>U||ae.height>U)&&(K=U/Math.max(ae.width,ae.height)),K<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const j=Math.floor(K*ae.width),we=Math.floor(K*ae.height);f===void 0&&(f=g(j,we));const he=v?g(j,we):f;return he.width=j,he.height=we,he.getContext("2d").drawImage(b,0,0,j,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+we+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),b;return b}function m(b){return b.generateMipmaps}function p(b){t.generateMipmap(b)}function A(b){return b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?t.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(b,v,U,K,ae=!1){if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let j=v;if(v===t.RED&&(U===t.FLOAT&&(j=t.R32F),U===t.HALF_FLOAT&&(j=t.R16F),U===t.UNSIGNED_BYTE&&(j=t.R8)),v===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(j=t.R8UI),U===t.UNSIGNED_SHORT&&(j=t.R16UI),U===t.UNSIGNED_INT&&(j=t.R32UI),U===t.BYTE&&(j=t.R8I),U===t.SHORT&&(j=t.R16I),U===t.INT&&(j=t.R32I)),v===t.RG&&(U===t.FLOAT&&(j=t.RG32F),U===t.HALF_FLOAT&&(j=t.RG16F),U===t.UNSIGNED_BYTE&&(j=t.RG8)),v===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(j=t.RG8UI),U===t.UNSIGNED_SHORT&&(j=t.RG16UI),U===t.UNSIGNED_INT&&(j=t.RG32UI),U===t.BYTE&&(j=t.RG8I),U===t.SHORT&&(j=t.RG16I),U===t.INT&&(j=t.RG32I)),v===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(j=t.RGB8UI),U===t.UNSIGNED_SHORT&&(j=t.RGB16UI),U===t.UNSIGNED_INT&&(j=t.RGB32UI),U===t.BYTE&&(j=t.RGB8I),U===t.SHORT&&(j=t.RGB16I),U===t.INT&&(j=t.RGB32I)),v===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),U===t.UNSIGNED_INT&&(j=t.RGBA32UI),U===t.BYTE&&(j=t.RGBA8I),U===t.SHORT&&(j=t.RGBA16I),U===t.INT&&(j=t.RGBA32I)),v===t.RGB&&U===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),v===t.RGBA){const we=ae?Jo:st.getTransfer(K);U===t.FLOAT&&(j=t.RGBA32F),U===t.HALF_FLOAT&&(j=t.RGBA16F),U===t.UNSIGNED_BYTE&&(j=we===ut?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function y(b,v){let U;return b?v===null||v===ar||v===Us?U=t.DEPTH24_STENCIL8:v===ti?U=t.DEPTH32F_STENCIL8:v===Ls&&(U=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===ar||v===Us?U=t.DEPTH_COMPONENT24:v===ti?U=t.DEPTH_COMPONENT32F:v===Ls&&(U=t.DEPTH_COMPONENT16),U}function P(b,v){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==bn&&b.minFilter!==zt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function I(b){const v=b.target;v.removeEventListener("dispose",I),D(v),v.isVideoTexture&&u.delete(v)}function C(b){const v=b.target;v.removeEventListener("dispose",C),M(v)}function D(b){const v=i.get(b);if(v.__webglInit===void 0)return;const U=b.source,K=d.get(U);if(K){const ae=K[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&S(b),Object.keys(K).length===0&&d.delete(U)}i.remove(b)}function S(b){const v=i.get(b);t.deleteTexture(v.__webglTexture);const U=b.source,K=d.get(U);delete K[v.__cacheKey],o.memory.textures--}function M(b){const v=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(v.__webglFramebuffer[K]))for(let ae=0;ae<v.__webglFramebuffer[K].length;ae++)t.deleteFramebuffer(v.__webglFramebuffer[K][ae]);else t.deleteFramebuffer(v.__webglFramebuffer[K]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[K])}else{if(Array.isArray(v.__webglFramebuffer))for(let K=0;K<v.__webglFramebuffer.length;K++)t.deleteFramebuffer(v.__webglFramebuffer[K]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let K=0;K<v.__webglColorRenderbuffer.length;K++)v.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[K]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const U=b.textures;for(let K=0,ae=U.length;K<ae;K++){const j=i.get(U[K]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(U[K])}i.remove(b)}let R=0;function B(){R=0}function X(){const b=R;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),R+=1,b}function q(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function Y(b,v){const U=i.get(b);if(b.isVideoTexture&&le(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&U.__version!==b.version){const K=b.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(U,b,v);return}}else b.isExternalTexture&&(U.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+v)}function $(b,v){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){me(U,b,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+v)}function z(b,v){const U=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&U.__version!==b.version){me(U,b,v);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+v)}function L(b,v){const U=i.get(b);if(b.version>0&&U.__version!==b.version){N(U,b,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+v)}const ie={[$l]:t.REPEAT,[tr]:t.CLAMP_TO_EDGE,[Kl]:t.MIRRORED_REPEAT},fe={[bn]:t.NEAREST,[wv]:t.NEAREST_MIPMAP_NEAREST,[eo]:t.NEAREST_MIPMAP_LINEAR,[zt]:t.LINEAR,[ka]:t.LINEAR_MIPMAP_NEAREST,[nr]:t.LINEAR_MIPMAP_LINEAR},ve={[Dv]:t.NEVER,[Bv]:t.ALWAYS,[Lv]:t.LESS,[up]:t.LEQUAL,[Uv]:t.EQUAL,[Ov]:t.GEQUAL,[Nv]:t.GREATER,[Fv]:t.NOTEQUAL};function Me(b,v){if(v.type===ti&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===zt||v.magFilter===ka||v.magFilter===eo||v.magFilter===nr||v.minFilter===zt||v.minFilter===ka||v.minFilter===eo||v.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(b,t.TEXTURE_WRAP_S,ie[v.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,ie[v.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,ie[v.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,fe[v.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,ve[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===bn||v.minFilter!==eo&&v.minFilter!==nr||v.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function $e(b,v){let U=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",I));const K=v.source;let ae=d.get(K);ae===void 0&&(ae={},d.set(K,ae));const j=q(v);if(j!==b.__cacheKey){ae[j]===void 0&&(ae[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ae[j].usedTimes++;const we=ae[b.__cacheKey];we!==void 0&&(ae[b.__cacheKey].usedTimes--,we.usedTimes===0&&S(v)),b.__cacheKey=j,b.__webglTexture=ae[j].texture}return U}function ke(b,v,U){return Math.floor(Math.floor(b/U)/v)}function ne(b,v,U,K){const j=b.updateRanges;if(j.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,U,K,v.data);else{j.sort((pe,Ee)=>pe.start-Ee.start);let we=0;for(let pe=1;pe<j.length;pe++){const Ee=j[we],Le=j[pe],Pe=Ee.start+Ee.count,ye=ke(Le.start,v.width,4),We=ke(Ee.start,v.width,4);Le.start<=Pe+1&&ye===We&&ke(Le.start+Le.count-1,v.width,4)===ye?Ee.count=Math.max(Ee.count,Le.start+Le.count-Ee.start):(++we,j[we]=Le)}j.length=we+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let pe=0,Ee=j.length;pe<Ee;pe++){const Le=j[pe],Pe=Math.floor(Le.start/4),ye=Math.ceil(Le.count/4),We=Pe%v.width,O=Math.floor(Pe/v.width),xe=ye,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,We),t.pixelStorei(t.UNPACK_SKIP_ROWS,O),n.texSubImage2D(t.TEXTURE_2D,0,We,O,xe,Se,U,K,v.data)}b.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function me(b,v,U){let K=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(K=t.TEXTURE_3D);const ae=$e(b,v),j=v.source;n.bindTexture(K,b.__webglTexture,t.TEXTURE0+U);const we=i.get(j);if(j.version!==we.__version||ae===!0){n.activeTexture(t.TEXTURE0+U);const he=st.getPrimaries(st.workingColorSpace),Re=v.colorSpace===Ti?null:st.getPrimaries(v.colorSpace),Ce=v.colorSpace===Ti||he===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let pe=x(v.image,!1,r.maxTextureSize);pe=ce(v,pe);const Ee=s.convert(v.format,v.colorSpace),Le=s.convert(v.type);let Pe=T(v.internalFormat,Ee,Le,v.colorSpace,v.isVideoTexture);Me(K,v);let ye;const We=v.mipmaps,O=v.isVideoTexture!==!0,xe=we.__version===void 0||ae===!0,Se=j.dataReady,De=P(v,pe);if(v.isDepthTexture)Pe=y(v.format===Fs,v.type),xe&&(O?n.texStorage2D(t.TEXTURE_2D,1,Pe,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Le,null));else if(v.isDataTexture)if(We.length>0){O&&xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,We[0].width,We[0].height);for(let ge=0,ue=We.length;ge<ue;ge++)ye=We[ge],O?Se&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,Le,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,Ee,Le,ye.data);v.generateMipmaps=!1}else O?(xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,pe.width,pe.height),Se&&ne(v,pe,Ee,Le)):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Le,pe.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){O&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,We[0].width,We[0].height,pe.depth);for(let ge=0,ue=We.length;ge<ue;ge++)if(ye=We[ge],v.format!==yn)if(Ee!==null)if(O){if(Se)if(v.layerUpdates.size>0){const Fe=Xf(ye.width,ye.height,v.format,v.type);for(const Ye of v.layerUpdates){const mt=ye.data.subarray(Ye*Fe/ye.data.BYTES_PER_ELEMENT,(Ye+1)*Fe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ye,ye.width,ye.height,1,Ee,mt)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,pe.depth,Ee,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,pe.depth,Ee,Le,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,ye.width,ye.height,pe.depth,0,Ee,Le,ye.data)}else{O&&xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,We[0].width,We[0].height);for(let ge=0,ue=We.length;ge<ue;ge++)ye=We[ge],v.format!==yn?Ee!==null?O?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?Se&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,Le,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,Ee,Le,ye.data)}else if(v.isDataArrayTexture)if(O){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,pe.width,pe.height,pe.depth),Se)if(v.layerUpdates.size>0){const ge=Xf(pe.width,pe.height,v.format,v.type);for(const ue of v.layerUpdates){const Fe=pe.data.subarray(ue*ge/pe.data.BYTES_PER_ELEMENT,(ue+1)*ge/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,pe.width,pe.height,1,Ee,Le,Fe)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Le,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Le,pe.data);else if(v.isData3DTexture)O?(xe&&n.texStorage3D(t.TEXTURE_3D,De,Pe,pe.width,pe.height,pe.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Le,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Le,pe.data);else if(v.isFramebufferTexture){if(xe)if(O)n.texStorage2D(t.TEXTURE_2D,De,Pe,pe.width,pe.height);else{let ge=pe.width,ue=pe.height;for(let Fe=0;Fe<De;Fe++)n.texImage2D(t.TEXTURE_2D,Fe,Pe,ge,ue,0,Ee,Le,null),ge>>=1,ue>>=1}}else if(We.length>0){if(O&&xe){const ge=Te(We[0]);n.texStorage2D(t.TEXTURE_2D,De,Pe,ge.width,ge.height)}for(let ge=0,ue=We.length;ge<ue;ge++)ye=We[ge],O?Se&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ee,Le,ye):n.texImage2D(t.TEXTURE_2D,ge,Pe,Ee,Le,ye);v.generateMipmaps=!1}else if(O){if(xe){const ge=Te(pe);n.texStorage2D(t.TEXTURE_2D,De,Pe,ge.width,ge.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Le,pe)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ee,Le,pe);m(v)&&p(K),we.__version=j.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function N(b,v,U){if(v.image.length!==6)return;const K=$e(b,v),ae=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+U);const j=i.get(ae);if(ae.version!==j.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const we=st.getPrimaries(st.workingColorSpace),he=v.colorSpace===Ti?null:st.getPrimaries(v.colorSpace),Re=v.colorSpace===Ti||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=v.isCompressedTexture||v.image[0].isCompressedTexture,pe=v.image[0]&&v.image[0].isDataTexture,Ee=[];for(let ue=0;ue<6;ue++)!Ce&&!pe?Ee[ue]=x(v.image[ue],!0,r.maxCubemapSize):Ee[ue]=pe?v.image[ue].image:v.image[ue],Ee[ue]=ce(v,Ee[ue]);const Le=Ee[0],Pe=s.convert(v.format,v.colorSpace),ye=s.convert(v.type),We=T(v.internalFormat,Pe,ye,v.colorSpace),O=v.isVideoTexture!==!0,xe=j.__version===void 0||K===!0,Se=ae.dataReady;let De=P(v,Le);Me(t.TEXTURE_CUBE_MAP,v);let ge;if(Ce){O&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,We,Le.width,Le.height);for(let ue=0;ue<6;ue++){ge=Ee[ue].mipmaps;for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];v.format!==yn?Pe!==null?O?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,0,0,Ye.width,Ye.height,Pe,Ye.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,We,Ye.width,Ye.height,0,Ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,0,0,Ye.width,Ye.height,Pe,ye,Ye.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe,We,Ye.width,Ye.height,0,Pe,ye,Ye.data)}}}else{if(ge=v.mipmaps,O&&xe){ge.length>0&&De++;const ue=Te(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,We,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(pe){O?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ee[ue].width,Ee[ue].height,Pe,ye,Ee[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,We,Ee[ue].width,Ee[ue].height,0,Pe,ye,Ee[ue].data);for(let Fe=0;Fe<ge.length;Fe++){const mt=ge[Fe].image[ue].image;O?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,0,0,mt.width,mt.height,Pe,ye,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,We,mt.width,mt.height,0,Pe,ye,mt.data)}}else{O?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Pe,ye,Ee[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,We,Pe,ye,Ee[ue]);for(let Fe=0;Fe<ge.length;Fe++){const Ye=ge[Fe];O?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,0,0,Pe,ye,Ye.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Fe+1,We,Pe,ye,Ye.image[ue])}}}m(v)&&p(t.TEXTURE_CUBE_MAP),j.__version=ae.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function se(b,v,U,K,ae,j){const we=s.convert(U.format,U.colorSpace),he=s.convert(U.type),Re=T(U.internalFormat,we,he,U.colorSpace),Ce=i.get(v),pe=i.get(U);if(pe.__renderTarget=v,!Ce.__hasExternalTextures){const Ee=Math.max(1,v.width>>j),Le=Math.max(1,v.height>>j);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,j,Re,Ee,Le,v.depth,0,we,he,null):n.texImage2D(ae,j,Re,Ee,Le,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,ae,pe.__webglTexture,0,de(v)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,ae,pe.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function V(b,v,U){if(t.bindRenderbuffer(t.RENDERBUFFER,b),v.depthBuffer){const K=v.depthTexture,ae=K&&K.isDepthTexture?K.type:null,j=y(v.stencilBuffer,ae),we=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=de(v);Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,j,v.width,v.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,j,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,j,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,b)}else{const K=v.textures;for(let ae=0;ae<K.length;ae++){const j=K[ae],we=s.convert(j.format,j.colorSpace),he=s.convert(j.type),Re=T(j.internalFormat,we,he,j.colorSpace),Ce=de(v);U&&Q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Re,v.width,v.height):Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Re,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Re,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function oe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(v.depthTexture);K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),Y(v.depthTexture,0);const ae=K.__webglTexture,j=de(v);if(v.depthTexture.format===Ns)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Fs)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Ne(b){const v=i.get(b),U=b.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==b.depthTexture){const K=b.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),K){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,K.removeEventListener("dispose",ae)};K.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=K}if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const K=b.texture.mipmaps;K&&K.length>0?oe(v.__webglFramebuffer[0],b):oe(v.__webglFramebuffer,b)}else if(U){v.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[K]),v.__webglDepthbuffer[K]===void 0)v.__webglDepthbuffer[K]=t.createRenderbuffer(),V(v.__webglDepthbuffer[K],b,!1);else{const ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,j)}}else{const K=b.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),V(v.__webglDepthbuffer,b,!1);else{const ae=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,j)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(b,v,U){const K=i.get(b);v!==void 0&&se(K.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Ne(b)}function _(b){const v=b.texture,U=i.get(b),K=i.get(v);b.addEventListener("dispose",C);const ae=b.textures,j=b.isWebGLCubeRenderTarget===!0,we=ae.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=v.version,o.memory.textures++),j){U.__webglFramebuffer=[];for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[he]=[];for(let Re=0;Re<v.mipmaps.length;Re++)U.__webglFramebuffer[he][Re]=t.createFramebuffer()}else U.__webglFramebuffer[he]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let he=0;he<v.mipmaps.length;he++)U.__webglFramebuffer[he]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,Re=ae.length;he<Re;he++){const Ce=i.get(ae[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(b.samples>0&&Q(b)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let he=0;he<ae.length;he++){const Re=ae[he];U.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[he]);const Ce=s.convert(Re.format,Re.colorSpace),pe=s.convert(Re.type),Ee=T(Re.internalFormat,Ce,pe,Re.colorSpace,b.isXRRenderTarget===!0),Le=de(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,Le,Ee,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,U.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),V(U.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Me(t.TEXTURE_CUBE_MAP,v);for(let he=0;he<6;he++)if(v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)se(U.__webglFramebuffer[he][Re],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else se(U.__webglFramebuffer[he],b,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(v)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,Re=ae.length;he<Re;he++){const Ce=ae[he],pe=i.get(Ce);let Ee=t.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ee=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,pe.__webglTexture),Me(Ee,Ce),se(U.__webglFramebuffer,b,Ce,t.COLOR_ATTACHMENT0+he,Ee,0),m(Ce)&&p(Ee)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(he=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,K.__webglTexture),Me(he,v),v.mipmaps&&v.mipmaps.length>0)for(let Re=0;Re<v.mipmaps.length;Re++)se(U.__webglFramebuffer[Re],b,v,t.COLOR_ATTACHMENT0,he,Re);else se(U.__webglFramebuffer,b,v,t.COLOR_ATTACHMENT0,he,0);m(v)&&p(he),n.unbindTexture()}b.depthBuffer&&Ne(b)}function F(b){const v=b.textures;for(let U=0,K=v.length;U<K;U++){const ae=v[U];if(m(ae)){const j=A(b),we=i.get(ae).__webglTexture;n.bindTexture(j,we),p(j),n.unbindTexture()}}}const W=[],te=[];function G(b){if(b.samples>0){if(Q(b)===!1){const v=b.textures,U=b.width,K=b.height;let ae=t.COLOR_BUFFER_BIT;const j=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(b),he=v.length>1;if(he)for(let Ce=0;Ce<v.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Re=b.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<v.length;Ce++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(v[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,U,K,0,0,U,K,ae,t.NEAREST),l===!0&&(W.length=0,te.length=0,W.push(t.COLOR_ATTACHMENT0+Ce),b.depthBuffer&&b.resolveDepthBuffer===!1&&(W.push(j),te.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,te)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,W))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<v.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(v[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const v=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function de(b){return Math.min(r.maxSamples,b.samples)}function Q(b){const v=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(b){const v=o.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function ce(b,v){const U=b.colorSpace,K=b.format,ae=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||U!==Kr&&U!==Ti&&(st.getTransfer(U)===ut?(K!==yn||ae!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}function Te(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=X,this.resetTextureUnits=B,this.setTexture2D=Y,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=L,this.rebindTextures=w,this.setupRenderTarget=_,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=se,this.useMultisampledRTT=Q}function Kb(t,e){function n(i,r=Ti){let s;const o=st.getTransfer(r);if(i===li)return t.UNSIGNED_BYTE;if(i===Zc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===rp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===np)return t.BYTE;if(i===ip)return t.SHORT;if(i===Ls)return t.UNSIGNED_SHORT;if(i===jc)return t.INT;if(i===ar)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Vs)return t.HALF_FLOAT;if(i===sp)return t.ALPHA;if(i===op)return t.RGB;if(i===yn)return t.RGBA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Fs)return t.DEPTH_STENCIL;if(i===ap)return t.RED;if(i===Qc)return t.RED_INTEGER;if(i===lp)return t.RG;if(i===eu)return t.RG_INTEGER;if(i===tu)return t.RGBA_INTEGER;if(i===Lo||i===Uo||i===No||i===Fo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===jl||i===Zl||i===Jl||i===Ql)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===jl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Zl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Jl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ql)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ec||i===tc)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===nc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ic||i===rc||i===sc||i===oc||i===ac||i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ic)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===dc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===pc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===_c||i===vc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Oo)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_c)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cp||i===xc||i===Sc||i===yc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Oo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===xc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===yc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Dp extends Lt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zb=`
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

}`;class Jb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Dp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Di({vertexShader:jb,fragmentShader:Zb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new On(new qs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qb extends Zr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const x=new Jb,m={},p=n.getContextAttributes();let A=null,T=null;const y=[],P=[],I=new tt;let C=null;const D=new pn;D.viewport=new Et;const S=new pn;S.viewport=new Et;const M=[D,S],R=new xx;let B=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=y[ne];return me===void 0&&(me=new cl,y[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=y[ne];return me===void 0&&(me=new cl,y[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=y[ne];return me===void 0&&(me=new cl,y[ne]=me),me.getHandSpace()};function q(ne){const me=P.indexOf(ne.inputSource);if(me===-1)return;const N=y[me];N!==void 0&&(N.update(ne.inputSource,ne.frame,c||o),N.dispatchEvent({type:ne.type,data:ne.inputSource}))}function Y(){r.removeEventListener("select",q),r.removeEventListener("selectstart",q),r.removeEventListener("selectend",q),r.removeEventListener("squeeze",q),r.removeEventListener("squeezestart",q),r.removeEventListener("squeezeend",q),r.removeEventListener("end",Y),r.removeEventListener("inputsourceschange",$);for(let ne=0;ne<y.length;ne++){const me=P[ne];me!==null&&(P[ne]=null,y[ne].disconnect(me))}B=null,X=null,x.reset();for(const ne in m)delete m[ne];e.setRenderTarget(A),h=null,d=null,f=null,r=null,T=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",q),r.addEventListener("selectstart",q),r.addEventListener("selectend",q),r.addEventListener("squeeze",q),r.addEventListener("squeezestart",q),r.addEventListener("squeezeend",q),r.addEventListener("end",Y),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(I),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let N=null,se=null,V=null;p.depth&&(V=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,N=p.stencil?Fs:Ns,se=p.stencil?Us:ar);const oe={colorFormat:n.RGBA8,depthFormat:V,scaleFactor:s};d=f.createProjectionLayer(oe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new lr(d.textureWidth,d.textureHeight,{format:yn,type:li,depthTexture:new Tp(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,N),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const N={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,N),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new lr(h.framebufferWidth,h.framebufferHeight,{format:yn,type:li,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ke.setContext(r),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(ne){for(let me=0;me<ne.removed.length;me++){const N=ne.removed[me],se=P.indexOf(N);se>=0&&(P[se]=null,y[se].disconnect(N))}for(let me=0;me<ne.added.length;me++){const N=ne.added[me];let se=P.indexOf(N);if(se===-1){for(let oe=0;oe<y.length;oe++)if(oe>=P.length){P.push(N),se=oe;break}else if(P[oe]===null){P[oe]=N,se=oe;break}if(se===-1)break}const V=y[se];V&&V.connect(N)}}const z=new Z,L=new Z;function ie(ne,me,N){z.setFromMatrixPosition(me.matrixWorld),L.setFromMatrixPosition(N.matrixWorld);const se=z.distanceTo(L),V=me.projectionMatrix.elements,oe=N.projectionMatrix.elements,Ne=V[14]/(V[10]-1),w=V[14]/(V[10]+1),_=(V[9]+1)/V[5],F=(V[9]-1)/V[5],W=(V[8]-1)/V[0],te=(oe[8]+1)/oe[0],G=Ne*W,de=Ne*te,Q=se/(-W+te),le=Q*-W;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(le),ne.translateZ(Q),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),V[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const ce=Ne+Q,Te=w+Q,b=G-le,v=de+(se-le),U=_*w/Te*ce,K=F*w/Te*ce;ne.projectionMatrix.makePerspective(b,v,U,K,ce,Te),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function fe(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,N=ne.far;x.texture!==null&&(x.depthNear>0&&(me=x.depthNear),x.depthFar>0&&(N=x.depthFar)),R.near=S.near=D.near=me,R.far=S.far=D.far=N,(B!==R.near||X!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),B=R.near,X=R.far),R.layers.mask=ne.layers.mask|6,D.layers.mask=R.layers.mask&3,S.layers.mask=R.layers.mask&5;const se=ne.parent,V=R.cameras;fe(R,se);for(let oe=0;oe<V.length;oe++)fe(V[oe],se);V.length===2?ie(R,D,S):R.projectionMatrix.copy(D.projectionMatrix),ve(ne,R,se)};function ve(ne,me,N){N===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(N.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=bc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(R)},this.getCameraTexture=function(ne){return m[ne]};let Me=null;function $e(ne,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const N=u.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let se=!1;N.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let w=0;w<N.length;w++){const _=N[w];let F=null;if(h!==null)F=h.getViewport(_);else{const te=f.getViewSubImage(d,_);F=te.viewport,w===0&&(e.setRenderTargetTextures(T,te.colorTexture,te.depthStencilTexture),e.setRenderTarget(T))}let W=M[w];W===void 0&&(W=new pn,W.layers.enable(w),W.viewport=new Et,M[w]=W),W.matrix.fromArray(_.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(_.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(F.x,F.y,F.width,F.height),w===0&&(R.matrix.copy(W.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(W)}const V=r.enabledFeatures;if(V&&V.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const w=f.getDepthInformation(N[0]);w&&w.isValid&&w.texture&&x.init(w,r.renderState)}if(V&&V.includes("camera-access")&&(e.state.unbindTexture(),f))for(let w=0;w<N.length;w++){const _=N[w].camera;if(_){let F=m[_];F||(F=new Dp,m[_]=F);const W=f.getCameraImage(_);F.sourceTexture=W}}}for(let N=0;N<y.length;N++){const se=P[N],V=y[N];se!==null&&V!==void 0&&V.update(se,me,c||o)}Me&&Me(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const ke=new wp;ke.setAnimationLoop($e),this.setAnimationLoop=function(ne){Me=ne},this.dispose=function(){}}}const Xi=new ci,eE=new Tt;function tE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,vp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,T,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),T=A.envMap,y=A.envMapRotation;T&&(m.envMap.value=T,Xi.copy(y),Xi.x*=-1,Xi.y*=-1,Xi.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Xi.y*=-1,Xi.z*=-1),m.envMapRotation.value.setFromMatrix4(eE.makeRotationFromEuler(Xi)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=T*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,T){const y=T.program;i.uniformBlockBinding(A,y)}function c(A,T){let y=r[A.id];y===void 0&&(g(A),y=u(A),r[A.id]=y,A.addEventListener("dispose",m));const P=T.program;i.updateUBOMapping(A,P);const I=e.render.frame;s[A.id]!==I&&(d(A),s[A.id]=I)}function u(A){const T=f();A.__bindingPointIndex=T;const y=t.createBuffer(),P=A.__size,I=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,P,I),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,T,y),y}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const T=r[A.id],y=A.uniforms,P=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let I=0,C=y.length;I<C;I++){const D=Array.isArray(y[I])?y[I]:[y[I]];for(let S=0,M=D.length;S<M;S++){const R=D[S];if(h(R,I,S,P)===!0){const B=R.__offset,X=Array.isArray(R.value)?R.value:[R.value];let q=0;for(let Y=0;Y<X.length;Y++){const $=X[Y],z=x($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,B+q,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,q),q+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,T,y,P){const I=A.value,C=T+"_"+y;if(P[C]===void 0)return typeof I=="number"||typeof I=="boolean"?P[C]=I:P[C]=I.clone(),!0;{const D=P[C];if(typeof I=="number"||typeof I=="boolean"){if(D!==I)return P[C]=I,!0}else if(D.equals(I)===!1)return D.copy(I),!0}return!1}function g(A){const T=A.uniforms;let y=0;const P=16;for(let C=0,D=T.length;C<D;C++){const S=Array.isArray(T[C])?T[C]:[T[C]];for(let M=0,R=S.length;M<R;M++){const B=S[M],X=Array.isArray(B.value)?B.value:[B.value];for(let q=0,Y=X.length;q<Y;q++){const $=X[q],z=x($),L=y%P,ie=L%z.boundary,fe=L+ie;y+=ie,fe!==0&&P-fe<z.storage&&(y+=P-fe),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=z.storage}}}const I=y%P;return I>0&&(y+=P-I),A.__size=y,A.__cache={},this}function x(A){const T={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(T.boundary=4,T.storage=4):A.isVector2?(T.boundary=8,T.storage=8):A.isVector3||A.isColor?(T.boundary=16,T.storage=12):A.isVector4?(T.boundary=16,T.storage=16):A.isMatrix3?(T.boundary=48,T.storage=48):A.isMatrix4?(T.boundary=64,T.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),T}function m(A){const T=A.target;T.removeEventListener("dispose",m);const y=o.indexOf(T.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Lp{constructor(e={}){const{canvas:n=kv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],T=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let P=!1;this._outputColorSpace=hn;let I=0,C=0,D=null,S=-1,M=null;const R=new Et,B=new Et;let X=null;const q=new Ge(0);let Y=0,$=n.width,z=n.height,L=1,ie=null,fe=null;const ve=new Et(0,0,$,z),Me=new Et(0,0,$,z);let $e=!1;const ke=new Ep;let ne=!1,me=!1;const N=new Tt,se=new Z,V=new Et,oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function w(){return D===null?L:1}let _=i;function F(E,k){return n.getContext(E,k)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kc}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",ge,!1),_===null){const k="webgl2";if(_=F(k,E),_===null)throw F(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,te,G,de,Q,le,ce,Te,b,v,U,K,ae,j,we,he,Re,Ce,pe,Ee,Le,Pe,ye,We;function O(){W=new hM(_),W.init(),Pe=new Kb(_,W),te=new oM(_,W,e,Pe),G=new Yb(_,W),te.reversedDepthBuffer&&d&&G.buffers.depth.setReversed(!0),de=new gM(_),Q=new Ub,le=new $b(_,W,G,Q,te,Pe,de),ce=new lM(y),Te=new dM(y),b=new Mx(_),ye=new rM(_,b),v=new pM(_,b,de,ye),U=new vM(_,v,b,de),pe=new _M(_,te,le),he=new aM(Q),K=new Lb(y,ce,Te,W,te,ye,he),ae=new tE(y,Q),j=new Fb,we=new Vb(W),Ce=new iM(y,ce,Te,G,U,h,l),Re=new Xb(y,U,te),We=new nE(_,de,te,G),Ee=new sM(_,W,de),Le=new mM(_,W,de),de.programs=K.programs,y.capabilities=te,y.extensions=W,y.properties=Q,y.renderLists=j,y.shadowMap=Re,y.state=G,y.info=de}O();const xe=new Qb(y,_);this.xr=xe,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize($,z,!1))},this.getSize=function(E){return E.set($,z)},this.setSize=function(E,k,J=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=E,z=k,n.width=Math.floor(E*L),n.height=Math.floor(k*L),J===!0&&(n.style.width=E+"px",n.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set($*L,z*L).floor()},this.setDrawingBufferSize=function(E,k,J){$=E,z=k,L=J,n.width=Math.floor(E*J),n.height=Math.floor(k*J),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(ve)},this.setViewport=function(E,k,J,ee){E.isVector4?ve.set(E.x,E.y,E.z,E.w):ve.set(E,k,J,ee),G.viewport(R.copy(ve).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,k,J,ee){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,k,J,ee),G.scissor(B.copy(Me).multiplyScalar(L).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){G.setScissorTest($e=E)},this.setOpaqueSort=function(E){ie=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(E=!0,k=!0,J=!0){let ee=0;if(E){let H=!1;if(D!==null){const _e=D.texture.format;H=_e===tu||_e===eu||_e===Qc}if(H){const _e=D.texture.type,Ae=_e===li||_e===ar||_e===Ls||_e===Us||_e===Zc||_e===Jc,Ue=Ce.getClearColor(),Ie=Ce.getClearAlpha(),He=Ue.r,Ve=Ue.g,Oe=Ue.b;Ae?(g[0]=He,g[1]=Ve,g[2]=Oe,g[3]=Ie,_.clearBufferuiv(_.COLOR,0,g)):(x[0]=He,x[1]=Ve,x[2]=Oe,x[3]=Ie,_.clearBufferiv(_.COLOR,0,x))}else ee|=_.COLOR_BUFFER_BIT}k&&(ee|=_.DEPTH_BUFFER_BIT),J&&(ee|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Ce.dispose(),j.dispose(),we.dispose(),Q.dispose(),ce.dispose(),Te.dispose(),U.dispose(),ye.dispose(),We.dispose(),K.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Cn),xe.removeEventListener("sessionend",su),Ui.stop()};function Se(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=de.autoReset,k=Re.enabled,J=Re.autoUpdate,ee=Re.needsUpdate,H=Re.type;O(),de.autoReset=E,Re.enabled=k,Re.autoUpdate=J,Re.needsUpdate=ee,Re.type=H}function ge(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ue(E){const k=E.target;k.removeEventListener("dispose",ue),Fe(k)}function Fe(E){Ye(E),Q.remove(E)}function Ye(E){const k=Q.get(E).programs;k!==void 0&&(k.forEach(function(J){K.releaseProgram(J)}),E.isShaderMaterial&&K.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,J,ee,H,_e){k===null&&(k=oe);const Ae=H.isMesh&&H.matrixWorld.determinant()<0,Ue=Up(E,k,J,ee,H);G.setMaterial(ee,Ae);let Ie=J.index,He=1;if(ee.wireframe===!0){if(Ie=v.getWireframeAttribute(J),Ie===void 0)return;He=2}const Ve=J.drawRange,Oe=J.attributes.position;let Je=Ve.start*He,ct=(Ve.start+Ve.count)*He;_e!==null&&(Je=Math.max(Je,_e.start*He),ct=Math.min(ct,(_e.start+_e.count)*He)),Ie!==null?(Je=Math.max(Je,0),ct=Math.min(ct,Ie.count)):Oe!=null&&(Je=Math.max(Je,0),ct=Math.min(ct,Oe.count));const St=ct-Je;if(St<0||St===1/0)return;ye.setup(H,ee,Ue,J,Ie);let _t,ht=Ee;if(Ie!==null&&(_t=b.get(Ie),ht=Le,ht.setIndex(_t)),H.isMesh)ee.wireframe===!0?(G.setLineWidth(ee.wireframeLinewidth*w()),ht.setMode(_.LINES)):ht.setMode(_.TRIANGLES);else if(H.isLine){let Be=ee.linewidth;Be===void 0&&(Be=1),G.setLineWidth(Be*w()),H.isLineSegments?ht.setMode(_.LINES):H.isLineLoop?ht.setMode(_.LINE_LOOP):ht.setMode(_.LINE_STRIP)}else H.isPoints?ht.setMode(_.POINTS):H.isSprite&&ht.setMode(_.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)kr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))ht.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Be=H._multiDrawStarts,vt=H._multiDrawCounts,rt=H._multiDrawCount,tn=Ie?b.get(Ie).bytesPerElement:1,cr=Q.get(ee).currentProgram.getUniforms();for(let nn=0;nn<rt;nn++)cr.setValue(_,"_gl_DrawID",nn),ht.render(Be[nn]/tn,vt[nn])}else if(H.isInstancedMesh)ht.renderInstances(Je,St,H.count);else if(J.isInstancedBufferGeometry){const Be=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,vt=Math.min(J.instanceCount,Be);ht.renderInstances(Je,St,vt)}else ht.render(Je,St)};function mt(E,k,J){E.transparent===!0&&E.side===Un&&E.forceSinglePass===!1?(E.side=en,E.needsUpdate=!0,$s(E,k,J),E.side=Ii,E.needsUpdate=!0,$s(E,k,J),E.side=Un):$s(E,k,J)}this.compile=function(E,k,J=null){J===null&&(J=E),p=we.get(J),p.init(k),T.push(p),J.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),E!==J&&E.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const ee=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const _e=H.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Ue=_e[Ae];mt(Ue,J,H),ee.add(Ue)}else mt(_e,J,H),ee.add(_e)}),p=T.pop(),ee},this.compileAsync=function(E,k,J=null){const ee=this.compile(E,k,J);return new Promise(H=>{function _e(){if(ee.forEach(function(Ae){Q.get(Ae).currentProgram.isReady()&&ee.delete(Ae)}),ee.size===0){H(E);return}setTimeout(_e,10)}W.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function Hn(E){ot&&ot(E)}function Cn(){Ui.stop()}function su(){Ui.start()}const Ui=new wp;Ui.setAnimationLoop(Hn),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(E){ot=E,xe.setAnimationLoop(E),E===null?Ui.stop():Ui.start()},xe.addEventListener("sessionstart",Cn),xe.addEventListener("sessionend",su),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(k),k=xe.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,k,D),p=we.get(E,T.length),p.init(k),T.push(p),N.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ke.setFromProjectionMatrix(N,Fn,k.reversedDepth),me=this.localClippingEnabled,ne=he.init(this.clippingPlanes,me),m=j.get(E,A.length),m.init(),A.push(m),xe.enabled===!0&&xe.isPresenting===!0){const _e=y.xr.getDepthSensingMesh();_e!==null&&ya(_e,k,-1/0,y.sortObjects)}ya(E,k,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ie,fe),Ne=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Ne&&Ce.addToRenderList(m,E),this.info.render.frame++,ne===!0&&he.beginShadows();const J=p.state.shadowsArray;Re.render(J,E,k),ne===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=m.opaque,H=m.transmissive;if(p.setupLights(),k.isArrayCamera){const _e=k.cameras;if(H.length>0)for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const Ie=_e[Ae];au(ee,H,E,Ie)}Ne&&Ce.render(E);for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++){const Ie=_e[Ae];ou(m,E,Ie,Ie.viewport)}}else H.length>0&&au(ee,H,E,k),Ne&&Ce.render(E),ou(m,E,k);D!==null&&C===0&&(le.updateMultisampleRenderTarget(D),le.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(y,E,k),ye.resetDefaultState(),S=-1,M=null,T.pop(),T.length>0?(p=T[T.length-1],ne===!0&&he.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function ya(E,k,J,ee){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ke.intersectsSprite(E)){ee&&V.setFromMatrixPosition(E.matrixWorld).applyMatrix4(N);const Ae=U.update(E),Ue=E.material;Ue.visible&&m.push(E,Ae,Ue,J,V.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ke.intersectsObject(E))){const Ae=U.update(E),Ue=E.material;if(ee&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),V.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),V.copy(Ae.boundingSphere.center)),V.applyMatrix4(E.matrixWorld).applyMatrix4(N)),Array.isArray(Ue)){const Ie=Ae.groups;for(let He=0,Ve=Ie.length;He<Ve;He++){const Oe=Ie[He],Je=Ue[Oe.materialIndex];Je&&Je.visible&&m.push(E,Ae,Je,J,V.z,Oe)}}else Ue.visible&&m.push(E,Ae,Ue,J,V.z,null)}}const _e=E.children;for(let Ae=0,Ue=_e.length;Ae<Ue;Ae++)ya(_e[Ae],k,J,ee)}function ou(E,k,J,ee){const H=E.opaque,_e=E.transmissive,Ae=E.transparent;p.setupLightsView(J),ne===!0&&he.setGlobalState(y.clippingPlanes,J),ee&&G.viewport(R.copy(ee)),H.length>0&&Ys(H,k,J),_e.length>0&&Ys(_e,k,J),Ae.length>0&&Ys(Ae,k,J),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function au(E,k,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[ee.id]===void 0&&(p.state.transmissionRenderTarget[ee.id]=new lr(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Vs:li,minFilter:nr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=p.state.transmissionRenderTarget[ee.id],Ae=ee.viewport||R;_e.setSize(Ae.z*y.transmissionResolutionScale,Ae.w*y.transmissionResolutionScale);const Ue=y.getRenderTarget(),Ie=y.getActiveCubeFace(),He=y.getActiveMipmapLevel();y.setRenderTarget(_e),y.getClearColor(q),Y=y.getClearAlpha(),Y<1&&y.setClearColor(16777215,.5),y.clear(),Ne&&Ce.render(J);const Ve=y.toneMapping;y.toneMapping=Ri;const Oe=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),p.setupLightsView(ee),ne===!0&&he.setGlobalState(y.clippingPlanes,ee),Ys(E,J,ee),le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e),W.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let ct=0,St=k.length;ct<St;ct++){const _t=k[ct],ht=_t.object,Be=_t.geometry,vt=_t.material,rt=_t.group;if(vt.side===Un&&ht.layers.test(ee.layers)){const tn=vt.side;vt.side=en,vt.needsUpdate=!0,lu(ht,J,ee,Be,vt,rt),vt.side=tn,vt.needsUpdate=!0,Je=!0}}Je===!0&&(le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e))}y.setRenderTarget(Ue,Ie,He),y.setClearColor(q,Y),Oe!==void 0&&(ee.viewport=Oe),y.toneMapping=Ve}function Ys(E,k,J){const ee=k.isScene===!0?k.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){const Ae=E[H],Ue=Ae.object,Ie=Ae.geometry,He=Ae.group;let Ve=Ae.material;Ve.allowOverride===!0&&ee!==null&&(Ve=ee),Ue.layers.test(J.layers)&&lu(Ue,k,J,Ie,Ve,He)}}function lu(E,k,J,ee,H,_e){E.onBeforeRender(y,k,J,ee,H,_e),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(y,k,J,ee,E,_e),H.transparent===!0&&H.side===Un&&H.forceSinglePass===!1?(H.side=en,H.needsUpdate=!0,y.renderBufferDirect(J,k,ee,H,E,_e),H.side=Ii,H.needsUpdate=!0,y.renderBufferDirect(J,k,ee,H,E,_e),H.side=Un):y.renderBufferDirect(J,k,ee,H,E,_e),E.onAfterRender(y,k,J,ee,H,_e)}function $s(E,k,J){k.isScene!==!0&&(k=oe);const ee=Q.get(E),H=p.state.lights,_e=p.state.shadowsArray,Ae=H.state.version,Ue=K.getParameters(E,H.state,_e,k,J),Ie=K.getProgramCacheKey(Ue);let He=ee.programs;ee.environment=E.isMeshStandardMaterial?k.environment:null,ee.fog=k.fog,ee.envMap=(E.isMeshStandardMaterial?Te:ce).get(E.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,He===void 0&&(E.addEventListener("dispose",ue),He=new Map,ee.programs=He);let Ve=He.get(Ie);if(Ve!==void 0){if(ee.currentProgram===Ve&&ee.lightsStateVersion===Ae)return uu(E,Ue),Ve}else Ue.uniforms=K.getUniforms(E),E.onBeforeCompile(Ue,y),Ve=K.acquireProgram(Ue,Ie),He.set(Ie,Ve),ee.uniforms=Ue.uniforms;const Oe=ee.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Oe.clippingPlanes=he.uniform),uu(E,Ue),ee.needsLights=Fp(E),ee.lightsStateVersion=Ae,ee.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),ee.currentProgram=Ve,ee.uniformsList=null,Ve}function cu(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=Bo.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function uu(E,k){const J=Q.get(E);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function Up(E,k,J,ee,H){k.isScene!==!0&&(k=oe),le.resetTextureUnits();const _e=k.fog,Ae=ee.isMeshStandardMaterial?k.environment:null,Ue=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Kr,Ie=(ee.isMeshStandardMaterial?Te:ce).get(ee.envMap||Ae),He=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Ve=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),Oe=!!J.morphAttributes.position,Je=!!J.morphAttributes.normal,ct=!!J.morphAttributes.color;let St=Ri;ee.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(St=y.toneMapping);const _t=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=_t!==void 0?_t.length:0,Be=Q.get(ee),vt=p.state.lights;if(ne===!0&&(me===!0||E!==M)){const Vt=E===M&&ee.id===S;he.setState(ee,E,Vt)}let rt=!1;ee.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==vt.state.version||Be.outputColorSpace!==Ue||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==Ie||ee.fog===!0&&Be.fog!==_e||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==he.numPlanes||Be.numIntersection!==he.numIntersection)||Be.vertexAlphas!==He||Be.vertexTangents!==Ve||Be.morphTargets!==Oe||Be.morphNormals!==Je||Be.morphColors!==ct||Be.toneMapping!==St||Be.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,Be.__version=ee.version);let tn=Be.currentProgram;rt===!0&&(tn=$s(ee,k,H));let cr=!1,nn=!1,es=!1;const xt=tn.getUniforms(),cn=Be.uniforms;if(G.useProgram(tn.program)&&(cr=!0,nn=!0,es=!0),ee.id!==S&&(S=ee.id,nn=!0),cr||M!==E){G.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),xt.setValue(_,"projectionMatrix",E.projectionMatrix),xt.setValue(_,"viewMatrix",E.matrixWorldInverse);const Jt=xt.map.cameraPosition;Jt!==void 0&&Jt.setValue(_,se.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&xt.setValue(_,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&xt.setValue(_,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,nn=!0,es=!0)}if(H.isSkinnedMesh){xt.setOptional(_,H,"bindMatrix"),xt.setOptional(_,H,"bindMatrixInverse");const Vt=H.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),xt.setValue(_,"boneTexture",Vt.boneTexture,le))}H.isBatchedMesh&&(xt.setOptional(_,H,"batchingTexture"),xt.setValue(_,"batchingTexture",H._matricesTexture,le),xt.setOptional(_,H,"batchingIdTexture"),xt.setValue(_,"batchingIdTexture",H._indirectTexture,le),xt.setOptional(_,H,"batchingColorTexture"),H._colorsTexture!==null&&xt.setValue(_,"batchingColorTexture",H._colorsTexture,le));const un=J.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&pe.update(H,J,tn),(nn||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,xt.setValue(_,"receiveShadow",H.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(cn.envMap.value=Ie,cn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&k.environment!==null&&(cn.envMapIntensity.value=k.environmentIntensity),nn&&(xt.setValue(_,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&Np(cn,es),_e&&ee.fog===!0&&ae.refreshFogUniforms(cn,_e),ae.refreshMaterialUniforms(cn,ee,L,z,p.state.transmissionRenderTarget[E.id]),Bo.upload(_,cu(Be),cn,le)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Bo.upload(_,cu(Be),cn,le),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&xt.setValue(_,"center",H.center),xt.setValue(_,"modelViewMatrix",H.modelViewMatrix),xt.setValue(_,"normalMatrix",H.normalMatrix),xt.setValue(_,"modelMatrix",H.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Vt=ee.uniformsGroups;for(let Jt=0,Ma=Vt.length;Jt<Ma;Jt++){const Ni=Vt[Jt];We.update(Ni,tn),We.bind(Ni,tn)}}return tn}function Np(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function Fp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,k,J){const ee=Q.get(E);ee.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),Q.get(E.texture).__webglTexture=k,Q.get(E.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:J,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,k){const J=Q.get(E);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0};const Op=_.createFramebuffer();this.setRenderTarget=function(E,k=0,J=0){D=E,I=k,C=J;let ee=!0,H=null,_e=!1,Ae=!1;if(E){const Ie=Q.get(E);if(Ie.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(_.FRAMEBUFFER,null),ee=!1;else if(Ie.__webglFramebuffer===void 0)le.setupRenderTarget(E);else if(Ie.__hasExternalTextures)le.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Oe=E.depthTexture;if(Ie.__boundDepthTexture!==Oe){if(Oe!==null&&Q.has(Oe)&&(E.width!==Oe.image.width||E.height!==Oe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(E)}}const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ae=!0);const Ve=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[k])?H=Ve[k][J]:H=Ve[k],_e=!0):E.samples>0&&le.useMultisampledRTT(E)===!1?H=Q.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?H=Ve[J]:H=Ve,R.copy(E.viewport),B.copy(E.scissor),X=E.scissorTest}else R.copy(ve).multiplyScalar(L).floor(),B.copy(Me).multiplyScalar(L).floor(),X=$e;if(J!==0&&(H=Op),G.bindFramebuffer(_.FRAMEBUFFER,H)&&ee&&G.drawBuffers(E,H),G.viewport(R),G.scissor(B),G.setScissorTest(X),_e){const Ie=Q.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ie.__webglTexture,J)}else if(Ae){const Ie=k;for(let He=0;He<E.textures.length;He++){const Ve=Q.get(E.textures[He]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+He,Ve.__webglTexture,J,Ie)}}else if(E!==null&&J!==0){const Ie=Q.get(E.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Ie.__webglTexture,J)}S=-1},this.readRenderTargetPixels=function(E,k,J,ee,H,_e,Ae,Ue=0){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){G.bindFramebuffer(_.FRAMEBUFFER,Ie);try{const He=E.textures[Ue],Ve=He.format,Oe=He.type;if(!te.textureFormatReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-ee&&J>=0&&J<=E.height-H&&(E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ue),_.readPixels(k,J,ee,H,Pe.convert(Ve),Pe.convert(Oe),_e))}finally{const He=D!==null?Q.get(D).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(E,k,J,ee,H,_e,Ae,Ue=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(k>=0&&k<=E.width-ee&&J>=0&&J<=E.height-H){G.bindFramebuffer(_.FRAMEBUFFER,Ie);const He=E.textures[Ue],Ve=He.format,Oe=He.type;if(!te.textureFormatReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.bufferData(_.PIXEL_PACK_BUFFER,_e.byteLength,_.STREAM_READ),E.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ue),_.readPixels(k,J,ee,H,Pe.convert(Ve),Pe.convert(Oe),0);const ct=D!==null?Q.get(D).__webglFramebuffer:null;G.bindFramebuffer(_.FRAMEBUFFER,ct);const St=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Hv(_,St,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,Je),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,_e),_.deleteBuffer(Je),_.deleteSync(St),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,k=null,J=0){const ee=Math.pow(2,-J),H=Math.floor(E.image.width*ee),_e=Math.floor(E.image.height*ee),Ae=k!==null?k.x:0,Ue=k!==null?k.y:0;le.setTexture2D(E,0),_.copyTexSubImage2D(_.TEXTURE_2D,J,0,0,Ae,Ue,H,_e),G.unbindTexture()};const Bp=_.createFramebuffer(),zp=_.createFramebuffer();this.copyTextureToTexture=function(E,k,J=null,ee=null,H=0,_e=null){_e===null&&(H!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=H,H=0):_e=0);let Ae,Ue,Ie,He,Ve,Oe,Je,ct,St;const _t=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(J!==null)Ae=J.max.x-J.min.x,Ue=J.max.y-J.min.y,Ie=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,Ve=J.min.y,Oe=J.isBox3?J.min.z:0;else{const un=Math.pow(2,-H);Ae=Math.floor(_t.width*un),Ue=Math.floor(_t.height*un),E.isDataArrayTexture?Ie=_t.depth:E.isData3DTexture?Ie=Math.floor(_t.depth*un):Ie=1,He=0,Ve=0,Oe=0}ee!==null?(Je=ee.x,ct=ee.y,St=ee.z):(Je=0,ct=0,St=0);const ht=Pe.convert(k.format),Be=Pe.convert(k.type);let vt;k.isData3DTexture?(le.setTexture3D(k,0),vt=_.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(le.setTexture2DArray(k,0),vt=_.TEXTURE_2D_ARRAY):(le.setTexture2D(k,0),vt=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,k.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,k.unpackAlignment);const rt=_.getParameter(_.UNPACK_ROW_LENGTH),tn=_.getParameter(_.UNPACK_IMAGE_HEIGHT),cr=_.getParameter(_.UNPACK_SKIP_PIXELS),nn=_.getParameter(_.UNPACK_SKIP_ROWS),es=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,He),_.pixelStorei(_.UNPACK_SKIP_ROWS,Ve),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Oe);const xt=E.isDataArrayTexture||E.isData3DTexture,cn=k.isDataArrayTexture||k.isData3DTexture;if(E.isDepthTexture){const un=Q.get(E),Vt=Q.get(k),Jt=Q.get(un.__renderTarget),Ma=Q.get(Vt.__renderTarget);G.bindFramebuffer(_.READ_FRAMEBUFFER,Jt.__webglFramebuffer),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,Ma.__webglFramebuffer);for(let Ni=0;Ni<Ie;Ni++)xt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(E).__webglTexture,H,Oe+Ni),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(k).__webglTexture,_e,St+Ni)),_.blitFramebuffer(He,Ve,Ae,Ue,Je,ct,Ae,Ue,_.DEPTH_BUFFER_BIT,_.NEAREST);G.bindFramebuffer(_.READ_FRAMEBUFFER,null),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||Q.has(E)){const un=Q.get(E),Vt=Q.get(k);G.bindFramebuffer(_.READ_FRAMEBUFFER,Bp),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,zp);for(let Jt=0;Jt<Ie;Jt++)xt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,un.__webglTexture,H,Oe+Jt):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,un.__webglTexture,H),cn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Vt.__webglTexture,_e,St+Jt):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Vt.__webglTexture,_e),H!==0?_.blitFramebuffer(He,Ve,Ae,Ue,Je,ct,Ae,Ue,_.COLOR_BUFFER_BIT,_.NEAREST):cn?_.copyTexSubImage3D(vt,_e,Je,ct,St+Jt,He,Ve,Ae,Ue):_.copyTexSubImage2D(vt,_e,Je,ct,He,Ve,Ae,Ue);G.bindFramebuffer(_.READ_FRAMEBUFFER,null),G.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else cn?E.isDataTexture||E.isData3DTexture?_.texSubImage3D(vt,_e,Je,ct,St,Ae,Ue,Ie,ht,Be,_t.data):k.isCompressedArrayTexture?_.compressedTexSubImage3D(vt,_e,Je,ct,St,Ae,Ue,Ie,ht,_t.data):_.texSubImage3D(vt,_e,Je,ct,St,Ae,Ue,Ie,ht,Be,_t):E.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,Ae,Ue,ht,Be,_t.data):E.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,_e,Je,ct,_t.width,_t.height,ht,_t.data):_.texSubImage2D(_.TEXTURE_2D,_e,Je,ct,Ae,Ue,ht,Be,_t);_.pixelStorei(_.UNPACK_ROW_LENGTH,rt),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,tn),_.pixelStorei(_.UNPACK_SKIP_PIXELS,cr),_.pixelStorei(_.UNPACK_SKIP_ROWS,nn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,es),_e===0&&k.generateMipmaps&&_.generateMipmap(vt),G.unbindTexture()},this.copyTextureToTexture3D=function(E,k,J=null,ee=null,H=0){return kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,k,J,ee,H)},this.initRenderTarget=function(E){Q.get(E).__webglFramebuffer===void 0&&le.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?le.setTextureCube(E,0):E.isData3DTexture?le.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?le.setTexture2DArray(E,0):le.setTexture2D(E,0),G.unbindTexture()},this.resetState=function(){I=0,C=0,D=null,G.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const iE=ui({__name:"LogoThreeFx",props:{sparkleCount:{},padding:{}},setup(t){const e=t,n=Dt(null),i=Dt(null);let r=null;function s(){const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(!u)return new Lt;const f=u.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.15,"rgba(255,255,255,0.8)"),f.addColorStop(.4,"rgba(255,255,255,0.3)"),f.addColorStop(.7,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,128,128);const d=new Vr(c);return d.minFilter=zt,d.magFilter=zt,d}function o(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Lt;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.12);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.5,"rgba(255,255,255,0.7)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.12,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";const g=(m,p,A)=>{const T=u.createLinearGradient(-m,0,m,0);T.addColorStop(0,"rgba(255,255,255,0)"),T.addColorStop(.35,`rgba(255,255,255,${A*.4})`),T.addColorStop(.5,`rgba(255,255,255,${A})`),T.addColorStop(.65,`rgba(255,255,255,${A*.4})`),T.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=T,u.beginPath(),u.moveTo(-m,0),u.lineTo(0,-p),u.lineTo(m,0),u.lineTo(0,p),u.closePath(),u.fill()};g(256*.48,256*.025,.95),u.rotate(Math.PI/2),g(256*.48,256*.025,.95),u.rotate(Math.PI/4),g(256*.32,256*.015,.6),u.rotate(Math.PI/2),g(256*.32,256*.015,.6),u.restore();const x=new Vr(c);return x.minFilter=zt,x.magFilter=zt,x}function a(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Lt;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.1);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.6,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.1,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";for(let x=0;x<6;x++){const m=x*Math.PI/3;u.save(),u.rotate(m);const p=u.createLinearGradient(0,0,256*.42,0);p.addColorStop(0,"rgba(255,255,255,0.9)"),p.addColorStop(.25,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.moveTo(0,-256*.018),u.lineTo(256*.42,0),u.lineTo(0,256*.018),u.closePath(),u.fill(),u.restore()}u.restore();const g=new Vr(c);return g.minFilter=zt,g.magFilter=zt,g}return ii(async()=>{if(!n.value||!i.value)return;const l=i.value,c=new Lp({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0});c.setClearColor(0,0),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const u=new yp,f=new Ap(-1,1,1,-1,.1,10);f.position.z=2;const d=()=>{const q=e.padding??0,Y=n.value?.clientWidth??1,$=n.value?.clientHeight??1,z=Y+q*2,L=$+q*2;c.setSize(z,L,!1),f.left=-z/2,f.right=z/2,f.top=L/2,f.bottom=-L/2,f.updateProjectionMatrix()},h=new ResizeObserver(()=>d());h.observe(n.value),d();const g=s(),x=o(),m=a(),p=new ds;u.add(p);const A=e.sparkleCount??60,T=[],y=(q,Y)=>q+Math.random()*(Y-q),P=q=>{let Y,$,z;const L=Math.random();let ie;switch(L<.45?ie=new Ge().setHSL(.11+Math.random()*.04,.85,.85):L<.85?ie=new Ge().setHSL(.14,.2,.98):ie=new Ge().setHSL(.58,.5,.92),q){case"fourStar":Y=x,$=y(35,70),z=y(.5,1);break;case"sixStar":Y=m,$=y(28,50),z=y(.6,1.1);break;default:Y=g,$=y(10,28),z=y(1,2.2)}const fe=new Mp({map:Y,transparent:!0,depthWrite:!1,blending:Ds,color:ie,opacity:0,rotation:y(0,Math.PI*2)}),ve=new hx(fe);return ve.scale.set($,$,1),p.add(ve),{sprite:ve,type:q,speed:z,phase:y(0,Math.PI*2),baseScale:$,rotationSpeed:q==="soft"?0:y(-.2,.2),baseX:0,baseY:0,floatRadius:y(1,5),floatSpeed:y(.4,1.2)}},I=()=>{const q=e.padding??0,Y=(n.value?.clientWidth??1)+q*2,$=(n.value?.clientHeight??1)+q*2;for(const z of T){if(z.type==="fourStar"||z.type==="sixStar"){const ie=y(0,Math.PI*2),fe=Y*y(.3,.48),ve=$*y(.25,.45),Me=Math.cos(ie)*fe,$e=Math.sin(ie)*ve;z.baseX=Me,z.baseY=$e}else{const ie=y(-Y*.42,Y*.42),fe=y(-$*.38,$*.38);z.baseX=ie,z.baseY=fe}z.sprite.position.set(z.baseX,z.baseY,0)}},C=Math.floor(A*.15),D=Math.floor(A*.1),S=A-C-D;for(let q=0;q<C;q++)T.push(P("fourStar"));for(let q=0;q<D;q++)T.push(P("sixStar"));for(let q=0;q<S;q++)T.push(P("soft"));I();const M=new ResizeObserver(()=>{d(),I()});M.observe(n.value);let R=0;const B=new Sx,X=()=>{const q=B.getElapsedTime();for(const Y of T){const $=Math.sin(q*Y.speed+Y.phase),z=Math.sin(q*Y.speed*1.7+Y.phase*.5),L=.5+.35*$+.15*z,ie=Math.pow(Math.max(0,L),2.2),fe=Y.type==="soft"?.15:.08,ve=Y.type==="soft"?.75:.92,Me=Y.sprite.material;Me.opacity=fe+(ve-fe)*ie;const $e=Y.type==="soft"?.75+.4*ie:.65+.5*ie,ke=Y.baseScale*$e;Y.sprite.scale.set(ke,ke,1),Y.rotationSpeed!==0&&(Me.rotation+=Y.rotationSpeed*.016);const ne=Math.sin(q*Y.floatSpeed+Y.phase)*Y.floatRadius,me=Math.cos(q*Y.floatSpeed*.8+Y.phase*1.3)*Y.floatRadius;Y.sprite.position.set(Y.baseX+ne,Y.baseY+me,0)}c.render(u,f),R=window.requestAnimationFrame(X)};R=window.requestAnimationFrame(X),r=()=>{window.cancelAnimationFrame(R),h.disconnect(),M.disconnect(),c.dispose(),g.dispose(),x.dispose(),m.dispose(),p.clear()}}),or(()=>{r?.(),r=null}),(l,c)=>(Ke(),Qe("div",{ref_key:"containerEl",ref:n,class:"absolute inset-0 overflow-visible"},[re("canvas",{ref_key:"canvasEl",ref:i,class:"pointer-events-none absolute",style:Bs({left:`-${e.padding??0}px`,top:`-${e.padding??0}px`,width:`calc(100% + ${(e.padding??0)*2}px)`,height:`calc(100% + ${(e.padding??0)*2}px)`})},null,4)],512))}}),rE={class:"relative min-h-screen overflow-hidden bg-slate-950"},sE={class:"relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24",style:{"padding-bottom":"calc(2rem + env(safe-area-inset-bottom, 0px))"}},oE={class:"w-full max-w-md md:max-w-md"},aE={class:"relative mb-6 inline-block md:mb-10"},lE={class:"space-y-2.5 md:space-y-3"},cE=["disabled"],uE={class:"relative flex items-center justify-between"},fE={class:"text-base md:text-lg"},dE={key:0,class:"ml-2 text-sm font-normal text-white/50"},hE={key:0,class:"text-xs text-white/40"},pE={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},mE={class:"space-y-2"},gE=["onClick"],_E={class:"flex items-center justify-between"},vE={class:"flex items-center gap-2"},xE={key:0,class:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"},SE={class:"font-semibold text-white"},yE=ui({__name:"StartView",setup(t){const e=jh(),n=Zh(),i=Jh();ii(()=>{n.loadFromStorage(),i.loadFromStorage()});const r=Xe(()=>!!n.name),s=Xe(()=>Math.max(...Object.keys(Zo).map(Number))),o=Xe(()=>Math.min(i.currentChapter,s.value)),a=Xe(()=>i.currentChapter>s.value);function l(){i.reset(),e.push({name:"chapter",params:{id:"1"}})}function c(){const p=a.value?s.value:i.currentChapter;e.push({name:"chapter",params:{id:String(p)}})}function u(){n.clear(),i.reset()}const f=Dt(!1),d=Xe(()=>Object.values(Zo).map(p=>({id:p.id,title:p.title,completed:i.currentChapter>p.id})));function h(){f.value=!0}function g(){f.value=!1}function x(p){i.setCurrentChapter(p),i.setNodeIndex(p,0),f.value=!1,e.push({name:"chapter",params:{id:String(p)}})}function m(p){if(f.value&&p.key==="Escape"){g();return}p.key==="Enter"&&l()}return ii(()=>window.addEventListener("keydown",m)),or(()=>window.removeEventListener("keydown",m)),(p,A)=>(Ke(),Qe("div",rE,[A[13]||(A[13]=Rl('<div class="absolute inset-0 animate-bgSlowZoom bg-[url(&#39;/images/scene/normal.png&#39;)] bg-cover bg-center saturate-95" data-v-b9cd6955></div><div class="absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]" data-v-b9cd6955></div><div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40" data-v-b9cd6955></div><div class="absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block" aria-hidden="true" data-v-b9cd6955><img class="pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100" src="'+V0+'" alt="教練" data-v-b9cd6955></div>',4)),re("main",sE,[re("div",oE,[re("div",aE,[A[0]||(A[0]=re("img",{src:G0,alt:"新人後端生存指南",class:"block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]",draggable:"false"},null,-1)),Ht(iE,{class:"pointer-events-none absolute inset-0 z-10",sparkleCount:50,padding:40}),A[1]||(A[1]=re("div",{class:"pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"},null,-1))]),re("nav",lE,[re("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 md:px-5 md:py-4",type:"button",onClick:l},[...A[2]||(A[2]=[Rl('<span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600" data-v-b9cd6955></span><span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" data-v-b9cd6955></span><span class="relative flex items-center justify-between" data-v-b9cd6955><span class="text-base md:text-lg" data-v-b9cd6955>開始遊戲</span><span class="hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block" data-v-b9cd6955>Enter</span></span>',3)])]),re("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4",type:"button",disabled:!r.value,onClick:c},[A[4]||(A[4]=re("span",{class:"absolute left-0 top-0 h-full w-1 bg-white/30"},null,-1)),re("span",uE,[re("span",fE,[A[3]||(A[3]=Or(" 繼續遊戲 ",-1)),r.value?(Ke(),Qe("span",dE,nt(zn(n).name),1)):Qt("",!0)]),r.value?(Ke(),Qe("span",hE,nt(a.value?"已通關":`Day ${o.value}`),1)):Qt("",!0)])],8,cE),re("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5",type:"button",onClick:h},[...A[5]||(A[5]=[re("span",{class:"absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),re("span",{class:"relative flex items-center justify-between"},[re("span",{class:"text-sm md:text-base"},"章節選擇"),re("span",{class:"text-xs text-white/30"},"跳關")],-1)])]),re("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5",type:"button",onClick:u},[...A[6]||(A[6]=[re("span",{class:"absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),re("span",{class:"relative flex items-center justify-between"},[re("span",{class:"text-sm md:text-base"},"刪除存檔"),re("span",{class:"hidden text-xs text-white/30 sm:inline-block"},"⌫")],-1)])])]),A[7]||(A[7]=re("p",{class:"mt-6 text-center text-xs text-white/30 md:mt-8 md:text-left"}," v1.0 · 2025 後端新手生存指南 ",-1))])]),(Ke(),Qi(Om,{to:"body"},[Ht(qg,{name:"fade"},{default:jd(()=>[f.value?(Ke(),Qe("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:v_(g,["self"])},[re("div",pE,[re("div",{class:"mb-4 flex items-center justify-between"},[A[9]||(A[9]=re("h2",{class:"text-lg font-bold text-white"},"章節選擇",-1)),re("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:g},[...A[8]||(A[8]=[re("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[re("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),A[11]||(A[11]=re("p",{class:"mb-4 text-sm text-white/50"},"選擇要跳轉的章節，進度將從該章節開始重新計算。",-1)),re("div",mE,[(Ke(!0),Qe(wt,null,Xo(d.value,T=>(Ke(),Qe("button",{key:T.id,class:En(["group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800",T.completed?"border-emerald-500/30 bg-emerald-900/20":"border-white/10 bg-slate-800/50"]),onClick:y=>x(T.id)},[re("div",_E,[re("span",vE,[T.completed?(Ke(),Qe("span",xE,[...A[10]||(A[10]=[re("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[re("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Qt("",!0),re("span",SE,nt(T.title),1)]),re("span",{class:En(["text-xs",T.completed?"text-emerald-400":"text-white/40"])},nt(T.completed?"已通關":`Day ${T.id}`),3)])],10,gE))),128))]),A[12]||(A[12]=re("p",{class:"mt-4 text-center text-xs text-white/30"},"按 ESC 關閉",-1))])])):Qt("",!0)]),_:1})]))]))}}),ME=Oh(yE,[["__scopeId","data-v-b9cd6955"]]),bE={class:"absolute inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},EE={class:"w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"},TE={class:"font-extrabold text-slate-900"},AE=["placeholder"],wE={class:"mt-3 flex justify-end gap-2.5"},RE=["disabled"],CE=ui({__name:"NameInputModal",props:{title:{},placeholder:{},initialValue:{}},emits:["submit","cancel"],setup(t,{emit:e}){const n=t,i=e,r=Dt(n.initialValue??"");Um(()=>{n.initialValue!=null&&!r.value&&(r.value=n.initialValue)});const s=Xe(()=>r.value.trim().length>0);function o(){s.value&&i("submit",r.value.trim())}return(a,l)=>(Ke(),Qe("div",bE,[re("div",EE,[re("div",TE,nt(t.title),1),Zd(re("input",{class:"mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20",type:"text",placeholder:t.placeholder??"輸入名字...","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),onKeydown:S_(o,["enter"])},null,40,AE),[[h_,r.value]]),re("div",wE,[re("button",{class:"rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]",type:"button",onClick:l[1]||(l[1]=c=>a.$emit("cancel"))}," 取消 "),re("button",{class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",type:"button",disabled:!s.value,onClick:o}," 確定 ",8,RE)])])]))}}),PE={class:"absolute inset-0 z-60 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},IE={class:"grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"},DE={class:"flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5"},LE={class:"font-black text-slate-900"},UE={class:"mt-0.5 font-extrabold text-slate-700"},NE={key:0,class:"mt-1 text-xs font-semibold text-slate-600"},FE={class:"flex items-center gap-2.5"},OE={class:"font-extrabold text-slate-700"},BE=["disabled"],zE={class:"grid grid-cols-1 gap-3.5 p-3.5 md:grid-cols-[1.1fr_1fr]"},kE={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},HE={class:"mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3"},VE={class:"flex justify-between gap-2.5"},GE={class:"font-mono text-sm font-black text-slate-900"},WE={class:"text-sm font-extrabold text-slate-500"},XE={class:"mt-1.5 font-black text-slate-700"},qE={class:"mt-3"},YE={class:"grid gap-2"},$E={class:"font-mono text-xs font-extrabold text-slate-700"},KE={class:"mt-2.5 text-xl font-black text-slate-900"},jE={class:"mt-2.5 font-semibold leading-7 text-slate-700"},ZE={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},JE={class:"font-mono text-sm font-black text-slate-900/75"},QE={class:"mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"},eT={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3"},tT=["disabled"],nT={class:"flex justify-center gap-2"},iT=["disabled"],rT=ui({__name:"SlidesModal",props:{title:{},slides:{},mustFinish:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=Dt(0),s=Xe(()=>n.slides[r.value]),o=Xe(()=>r.value>=n.slides.length-1);function a(){r.value=Math.max(0,r.value-1)}function l(){r.value=Math.min(n.slides.length-1,r.value+1)}function c(){n.mustFinish&&!o.value||i("close")}return(u,f)=>(Ke(),Qe("div",PE,[re("div",IE,[re("header",DE,[re("div",null,[re("div",LE,nt(t.title),1),re("div",UE,nt(s.value.title),1),s.value.subtitle?(Ke(),Qe("div",NE,nt(s.value.subtitle),1)):Qt("",!0)]),re("div",FE,[re("div",OE,"步驟 "+nt(r.value+1)+"/"+nt(t.slides.length),1),re("button",{class:"rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:t.mustFinish&&!o.value,onClick:c}," 關閉 ",8,BE)])]),re("div",zE,[re("section",null,[re("div",kE,[f[2]||(f[2]=re("div",{class:"inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900"}," 互動式簡報 ",-1)),s.value.commit?(Ke(),Qe(wt,{key:0},[re("div",HE,[re("div",VE,[re("div",GE,nt(s.value.commit.sha),1),re("div",WE,nt(s.value.commit.when),1)]),re("div",XE,nt(s.value.commit.message),1)]),re("div",qE,[f[0]||(f[0]=re("div",{class:"mb-2 font-black text-slate-900"},"本次變更檔案",-1)),re("div",YE,[(Ke(!0),Qe(wt,null,Xo(s.value.commit.files,d=>(Ke(),Qe("div",{key:d.path,class:"flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"},[re("span",{class:En(["grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black",d.change==="A"?"bg-emerald-500/15 text-emerald-800":d.change==="M"?"bg-blue-500/15 text-blue-700":"bg-rose-500/15 text-rose-800"])},nt(d.change),3),re("span",$E,nt(d.path),1)]))),128))])])],64)):(Ke(),Qe(wt,{key:1},[re("div",KE,nt(s.value.title),1),re("div",jE,nt(s.value.body),1),f[1]||(f[1]=Rl('<div class="mt-3 flex flex-wrap gap-2"><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">版本控制</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">Commit 更新點</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">看懂改動</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">回到安全點</span></div>',1))],64))])]),re("section",null,[re("div",ZE,[re("div",JE,nt(s.value.commit?"changes.diff":"notes.txt"),1),re("pre",QE,[re("code",null,nt(s.value.commit?s.value.commit.diffPreview:s.value.body??""),1)])])])]),re("footer",eT,[re("button",{class:"justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:r.value===0,onClick:a}," 上一部 ",8,tT),re("div",nT,[(Ke(!0),Qe(wt,null,Xo(t.slides.length,d=>(Ke(),Qe("span",{key:d,class:En(["h-2 w-2 rounded-full bg-slate-900/20",d-1===r.value?"bg-amber-500":""])},null,2))),128))]),re("button",{class:"justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:o.value,onClick:l}," 下一部 ",8,iT)])])]))}}),sT={class:"fixed inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},oT={class:"flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95"},aT={class:"flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5"},lT={class:"font-black text-slate-900"},cT={class:"text-sm font-extrabold text-slate-500"},uT={class:"flex-1 overflow-y-auto px-4 py-4"},fT={class:"text-lg font-black text-slate-900"},dT={class:"mt-3 grid gap-2.5"},hT=["value","disabled"],pT={class:"font-extrabold text-slate-700"},mT={class:"font-black text-slate-900"},gT={class:"mt-1.5 font-bold leading-7 text-slate-700"},_T={class:"flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3"},vT={class:"flex gap-2.5"},xT=["disabled"],ST=ui({__name:"QuizModal",props:{title:{},questions:{}},emits:["done","cancel"],setup(t,{emit:e}){const n=t,i=e,r=Dt(0),s=Dt(null),o=Dt(!1),a=Dt(0),l=Xe(()=>n.questions[r.value]),c=Xe(()=>n.questions.length),u=Xe(()=>r.value>=n.questions.length-1),f=Xe(()=>o.value&&s.value===l.value.correctOptionId);function d(){s.value&&(o.value||(o.value=!0,s.value===l.value.correctOptionId&&(a.value+=1)))}function h(){s.value=null,o.value=!1}function g(){if(o.value){if(u.value){i("done",{correctCount:a.value,total:c.value});return}r.value+=1,s.value=null,o.value=!1}}return(x,m)=>(Ke(),Qe("div",sT,[re("div",oT,[re("header",aT,[re("div",lT,nt(t.title),1),re("div",cT,"第 "+nt(r.value+1)+"/"+nt(c.value)+" 題",1)]),re("div",uT,[re("div",fT,nt(l.value.prompt),1),re("div",dT,[(Ke(!0),Qe(wt,null,Xo(l.value.options,p=>(Ke(),Qe("label",{key:p.id,class:En(["flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3",o.value?"cursor-default opacity-90":"hover:bg-white"])},[Zd(re("input",{type:"radio",name:"quiz",value:p.id,"onUpdate:modelValue":m[0]||(m[0]=A=>s.value=A),disabled:o.value},null,8,hT),[[p_,s.value]]),re("span",pT,nt(p.label),1)],2))),128))]),o.value?(Ke(),Qe("div",{key:0,class:En(["mt-3 rounded-2xl border px-3 py-3",f.value?"border-emerald-500/25 bg-emerald-500/10":"border-amber-500/25 bg-amber-500/10"])},[re("div",mT,nt(f.value?"答對了":"差一點"),1),re("div",gT,nt(l.value.explanation),1)],2)):Qt("",!0)]),re("footer",_T,[re("button",{class:"rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]",type:"button",onClick:m[1]||(m[1]=p=>i("cancel"))}," 取消測驗 "),re("div",vT,[o.value?f.value?(Ke(),Qe("button",{key:1,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:g},nt(u.value?"完成":"下一題"),1)):(Ke(),Qe("button",{key:2,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:h}," 重新作答 ")):(Ke(),Qe("button",{key:0,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55",type:"button",disabled:!s.value,onClick:d}," 提交 ",8,xT))])])])]))}}),yT={class:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90",role:"dialog","aria-modal":"true"},MT={class:"mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300"},bT={class:"mb-8 text-xl font-bold text-white/90"},ET={class:"text-amber-400"},TT=ui({__name:"CelebrationModal",props:{playerName:{},chapterTitle:{}},emits:["close"],setup(t,{emit:e}){const n=e,i=Dt(null),r=Dt(null),s=Dt(!1);let o=null;function a(f){const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d"),x=g.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return x.addColorStop(0,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 1)`),x.addColorStop(.3,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.8)`),x.addColorStop(.6,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.3)`),x.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=x,g.fillRect(0,0,64,64),new Vr(h)}function l(){const d=document.createElement("canvas");d.width=64,d.height=64;const h=d.getContext("2d");h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,64,64),h.fillStyle="#FFD700",h.beginPath();const g=64/2,x=64/2,m=4,p=64/2-2,A=64/6;for(let T=0;T<m*2;T++){const y=T%2===0?p:A,P=T*Math.PI/m-Math.PI/2,I=g+Math.cos(P)*y,C=x+Math.sin(P)*y;T===0?h.moveTo(I,C):h.lineTo(I,C)}return h.closePath(),h.fill(),h.shadowColor="#FFD700",h.shadowBlur=10,h.fill(),new Vr(d)}function c(f){const d=document.createElement("canvas");d.width=16,d.height=32;const h=d.getContext("2d");return h.fillStyle=`rgb(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)})`,h.fillRect(0,0,16,32),new Vr(d)}function u(){if(!r.value||!i.value)return;const f=new Lp({canvas:r.value,alpha:!0,antialias:!0});f.setClearColor(0,0),f.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const d=i.value.clientWidth,h=i.value.clientHeight;f.setSize(d,h,!1);const g=new yp,x=new pn(60,d/h,.1,1e3);x.position.z=500;const m=[new Ge(16739179),new Ge(16767293),new Ge(7064439),new Ge(5084927),new Ge(13218303),new Ge(16752453),new Ge(16196997)],p=[];function A(z,L){const ie=m[Math.floor(Math.random()*m.length)],fe=80+Math.floor(Math.random()*60),ve=new Rn,Me=new Float32Array(fe*3),$e=new Float32Array(fe),ke=[];for(let se=0;se<fe;se++){Me[se*3]=z,Me[se*3+1]=L,Me[se*3+2]=0,$e[se]=8+Math.random()*12;const V=Math.random()*Math.PI*2,oe=Math.acos(2*Math.random()-1),Ne=3+Math.random()*5;ke.push(new Z(Math.sin(oe)*Math.cos(V)*Ne,Math.sin(oe)*Math.sin(V)*Ne,Math.cos(oe)*Ne*.3))}ve.setAttribute("position",new jt(Me,3)),ve.setAttribute("size",new jt($e,1));const ne=new Ec({map:a(ie),size:20,transparent:!0,blending:Ds,depthWrite:!1,vertexColors:!1}),me=new Gf(ve,ne);g.add(me);const N=50+Math.random()*150;p.push({particles:me,velocities:ke,life:0,maxLife:120+Math.random()*60,phase:"rising",riseVelocity:new Z(0,8+Math.random()*4,0),targetY:N})}const T=30,y=new Rn,P=new Float32Array(T*3),I=new Float32Array(T),C=[];for(let z=0;z<T;z++){const L=(Math.random()-.5)*d*.9,ie=(Math.random()-.5)*h*.7;P[z*3]=L,P[z*3+1]=ie,P[z*3+2]=-50,I[z]=15+Math.random()*25,C.push({baseX:L,baseY:ie,floatSpeed:.5+Math.random()*1,floatRadius:5+Math.random()*15,rotateSpeed:.02+Math.random()*.03,twinkleSpeed:2+Math.random()*3,twinklePhase:Math.random()*Math.PI*2})}y.setAttribute("position",new jt(P,3)),y.setAttribute("size",new jt(I,1));const D=new Ec({map:l(),size:30,transparent:!0,blending:Ds,depthWrite:!1}),S=new Gf(y,D);g.add(S);const M=60,R=[],B=[new Ge(16739179),new Ge(16767293),new Ge(7064439),new Ge(5084927),new Ge(16196997),new Ge(16752453)];for(let z=0;z<M;z++){const L=B[Math.floor(Math.random()*B.length)],ie=new qs(8+Math.random()*8,16+Math.random()*16),fe=new iu({map:c(L),side:Un,transparent:!0,opacity:.9}),ve=new On(ie,fe);ve.position.set((Math.random()-.5)*d,h/2+Math.random()*200,(Math.random()-.5)*100),ve.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(ve),R.push({mesh:ve,velocity:new Z((Math.random()-.5)*2,-2-Math.random()*3,(Math.random()-.5)*1),rotationSpeed:new Z((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1),swayPhase:Math.random()*Math.PI*2,swaySpeed:2+Math.random()*2})}let X=0,q;setTimeout(()=>A(-100,-h/2-50),100),setTimeout(()=>A(100,-h/2-50),400),setTimeout(()=>A(0,-h/2-50),700),setTimeout(()=>{s.value=!0},800);function Y(){q=requestAnimationFrame(Y),X++;for(let L=p.length-1;L>=0;L--){const ie=p[L],fe=ie.particles.geometry.attributes.position.array,ve=fe.length/3;if(ie.phase==="rising"){for(let Me=0;Me<ve;Me++)fe[Me*3+1]+=ie.riseVelocity.y;fe[1]>=ie.targetY&&(ie.phase="exploding")}else{ie.life++;const Me=ie.life/ie.maxLife;for(let ke=0;ke<ve;ke++){const ne=ie.velocities[ke];fe[ke*3]+=ne.x*(1-Me*.5),fe[ke*3+1]+=ne.y*(1-Me*.5)-.15,fe[ke*3+2]+=ne.z*(1-Me*.5)}const $e=ie.particles.material;$e.opacity=1-Me,ie.life>=ie.maxLife&&(g.remove(ie.particles),ie.particles.geometry.dispose(),ie.particles.material.dispose(),p.splice(L,1))}ie.particles.geometry.attributes.position.needsUpdate=!0}if(X%90===0&&p.length<5){const L=(Math.random()-.5)*d*.6;A(L,-h/2-50)}const z=S.geometry.attributes.position.array;for(let L=0;L<T;L++){const ie=C[L],fe=X*.02;z[L*3]=ie.baseX+Math.sin(fe*ie.floatSpeed)*ie.floatRadius,z[L*3+1]=ie.baseY+Math.cos(fe*ie.floatSpeed*.7)*ie.floatRadius*.5;const ve=Math.sin(fe*ie.twinkleSpeed+ie.twinklePhase)*.5+.5;S.geometry.attributes.size.array[L]=15+ve*25}S.geometry.attributes.position.needsUpdate=!0,S.geometry.attributes.size.needsUpdate=!0,S.rotation.z+=5e-4;for(const L of R)L.mesh.position.add(L.velocity),L.mesh.rotation.x+=L.rotationSpeed.x,L.mesh.rotation.y+=L.rotationSpeed.y,L.mesh.rotation.z+=L.rotationSpeed.z,L.swayPhase+=.05,L.mesh.position.x+=Math.sin(L.swayPhase*L.swaySpeed)*.5,L.mesh.position.y<-h/2-50&&(L.mesh.position.y=h/2+50,L.mesh.position.x=(Math.random()-.5)*d);f.render(g,x)}Y();const $=()=>{if(!i.value)return;const z=i.value.clientWidth,L=i.value.clientHeight;f.setSize(z,L,!1),x.aspect=z/L,x.updateProjectionMatrix()};window.addEventListener("resize",$),o=()=>{cancelAnimationFrame(q),window.removeEventListener("resize",$);for(const z of p)g.remove(z.particles),z.particles.geometry.dispose(),z.particles.material.dispose();g.remove(S),y.dispose(),D.dispose();for(const z of R)g.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.dispose();f.dispose()}}return ii(()=>{u()}),or(()=>{o?.(),o=null}),(f,d)=>(Ke(),Qe("div",yT,[re("div",{ref_key:"containerEl",ref:i,class:"absolute inset-0"},[re("canvas",{ref_key:"canvasEl",ref:r,class:"h-full w-full"},null,512)],512),re("div",{class:En(["relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700",s.value?"translate-y-0 opacity-100":"translate-y-8 opacity-0"])},[d[2]||(d[2]=re("div",{class:"mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]"},[re("svg",{class:"h-14 w-14 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[re("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),d[3]||(d[3]=re("h2",{class:"mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl"}," 恭喜完成！ ",-1)),re("div",MT,nt(t.chapterTitle),1),re("p",bT,[re("span",ET,nt(t.playerName),1),d[1]||(d[1]=Or("，你做到了！ ",-1))]),re("button",{class:"rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]",type:"button",onClick:d[0]||(d[0]=h=>n("close"))}," 繼續前進 ")],2)]))}}),AT={key:0,class:"flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14"},wT={class:"pointer-events-none fixed inset-0 z-0"},RT={class:"fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3"},CT={class:"text-center text-sm font-black text-white/90"},PT=["title"],IT={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},DT={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},LT={class:"relative z-10 flex flex-1 flex-col justify-end"},UT={key:0,class:"pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center",style:{top:"56px",bottom:"160px"}},NT=["src"],FT={key:1,class:"relative z-10 mb-4 flex-1 overflow-y-auto px-4"},OT={class:"flex min-h-full items-center justify-center py-4"},BT=["src"],zT={key:2,class:"relative z-20 px-3 pb-6"},kT={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},HT={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},VT=["innerHTML"],GT={class:"mt-3 flex justify-end gap-2.5"},WT=["disabled"],XT=["disabled"],qT=ui({__name:"ChapterView",setup(t){const e=H0(),n=jh(),i=Zh(),r=Jh(),s=Xe(()=>Number(e.params.id)||1),o=Xe(()=>j0(s.value));Fr(o,V=>{V||n.push({name:"start"})},{immediate:!0}),ii(()=>{i.loadFromStorage(),r.loadFromStorage()});const a=new Audio("/audio/background.mp3");a.loop=!0,a.volume=.1;const l=Dt(!1);function c(){l.value?a.pause():a.play().catch(()=>{}),l.value=!l.value}or(()=>{a.pause(),a.currentTime=0});const u=Xe(()=>o.value?.nodes??[]),f=Xe(()=>{const V=r.getNodeIndex(s.value);return Math.min(V,u.value.length-1)}),d=Xe(()=>u.value[f.value]),h=Xe(()=>d.value?.type==="inputName"),g=Xe(()=>d.value?.type==="slides"),x=Xe(()=>d.value?.type==="quiz"),m=Xe(()=>d.value?.type==="celebration"),p=Xe(()=>d.value?.type==="inputName"?d.value:null),A=Xe(()=>d.value?.type==="slides"?d.value:null),T=Xe(()=>d.value?.type==="quiz"?d.value:null),y=Xe(()=>d.value?.type==="celebration"?d.value:null),P=Xe(()=>d.value?.type==="dialogue"&&d.value.image?d.value.image:null),I=Dt(""),C=Dt(null);function D(V){const oe=i.name||"你";return V.split("{name}").join(oe)}function S(V){const oe=/(https?:\/\/[^\s]+)/g;return V.replace(oe,'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')}function M(V){C.value&&window.clearInterval(C.value),I.value="";let oe=0;C.value=window.setInterval(()=>{oe+=1,I.value=V.slice(0,oe),oe>=V.length&&(C.value&&window.clearInterval(C.value),C.value=null)},16)}function R(V){V?.type==="dialogue"?M(D(V.text)):(C.value&&window.clearInterval(C.value),C.value=null,I.value="")}ii(()=>{d.value&&R(d.value)});function B(){if(d.value?.type!=="dialogue")return;const V=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,V),R(u.value[V])}function X(V){for(let oe=V-1;oe>=0;oe--)if(u.value[oe]?.type==="dialogue")return oe;return-1}const q=Xe(()=>d.value?.type!=="dialogue"?!1:X(f.value)>=0);function Y(){if(d.value?.type!=="dialogue")return;const V=X(f.value);V>=0&&(r.setNodeIndex(s.value,V),R(u.value[V]))}function $(){n.push({name:"start"})}function z(V){i.setName(V);const oe=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,oe),R(u.value[oe])}function L(){const V=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,V),R(u.value[V])}function ie(){const V=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,V),R(u.value[V])}function fe(){const V=Math.max(f.value-1,0);r.setNodeIndex(s.value,V),R(u.value[V])}function ve(){r.completeChapter(s.value);const V=s.value+1;Zo[V]?n.push({name:"chapter",params:{id:String(V)}}):n.push({name:"start"})}const Me=Xe(()=>`/images/scene/${d.value?.scene??"normal"}.png`),$e=Xe(()=>`/images/coach/${d.value?.coachExpression??"normal"}.png`),ke=Xe(()=>d.value?.type!=="dialogue"?"海克絲":d.value.speaker==="你"?i.name||"你":d.value.speaker),ne=Xe(()=>d.value?.type!=="dialogue"||d.value.speaker==="海克絲"?"border-amber-300/35 bg-amber-300/20 text-amber-100":d.value.speaker==="你"?"border-sky-400/35 bg-sky-400/20 text-sky-100":"border-slate-400/35 bg-slate-400/20 text-slate-200"),me=Xe(()=>d.value?.type==="dialogue"&&C.value!=null);function N(){d.value?.type==="dialogue"&&(C.value&&window.clearInterval(C.value),C.value=null,I.value=D(d.value.text))}function se(V){h.value||g.value||x.value||m.value||(V.key==="Enter"||V.key===" "||V.key==="ArrowRight"?(V.preventDefault(),me.value?N():d.value?.type==="dialogue"&&B()):V.key==="ArrowLeft"&&(V.preventDefault(),q.value&&Y()))}return ii(()=>window.addEventListener("keydown",se)),or(()=>window.removeEventListener("keydown",se)),(V,oe)=>o.value?(Ke(),Qe("div",AT,[re("div",wT,[re("div",{class:"absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95",style:Bs({backgroundImage:`url(${Me.value})`})},null,4),oe[0]||(oe[0]=re("div",{class:"absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]"},null,-1))]),re("header",RT,[re("button",{class:"rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]",type:"button",onClick:$}," 返回開始 "),re("div",CT,nt(o.value.title),1),re("button",{class:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",type:"button",title:l.value?"關閉音樂":"開啟音樂",onClick:c},[l.value?(Ke(),Qe("svg",IT,[...oe[1]||(oe[1]=[re("path",{d:"M9 18V5l12-2v13"},null,-1),re("circle",{cx:"6",cy:"18",r:"3"},null,-1),re("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):(Ke(),Qe("svg",DT,[...oe[2]||(oe[2]=[re("path",{d:"M9 18V5l12-2v13"},null,-1),re("circle",{cx:"6",cy:"18",r:"3"},null,-1),re("circle",{cx:"18",cy:"16",r:"3"},null,-1),re("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2"},null,-1)])]))],8,PT)]),re("main",LT,[!P.value&&!x.value&&!g.value&&!m.value?(Ke(),Qe("div",UT,[re("img",{class:"h-full w-auto max-w-[85vw] object-contain object-bottom",src:$e.value,alt:"教練"},null,8,NT)])):Qt("",!0),P.value?(Ke(),Qe("div",FT,[re("div",OT,[re("img",{src:P.value,alt:"展示圖片",class:"max-w-full rounded-lg border border-white/20 object-contain shadow-2xl"},null,8,BT)])])):Qt("",!0),!x.value&&!g.value&&!m.value?(Ke(),Qe("div",zT,[re("div",kT,[re("div",{class:En(["mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black",ne.value])},nt(ke.value),3),re("div",HT,[d.value?.type==="dialogue"?(Ke(),Qe("span",{key:0,innerHTML:S(I.value)},null,8,VT)):d.value?.type==="inputName"?(Ke(),Qe(wt,{key:1},[Or(nt(p.value?.prompt),1)],64)):d.value?.type==="slides"?(Ke(),Qe(wt,{key:2},[Or("我們先看一段簡報，把 Git 的重點抓起來。")],64)):(Ke(),Qe(wt,{key:3},[Or("來，快速確認一下你抓到重點了沒有。")],64))]),re("div",GT,[re("button",{class:"rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30",type:"button",disabled:!q.value,onClick:Y}," 上一句 ",8,WT),re("button",{class:"rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:d.value?.type!=="dialogue",onClick:B}," 下一句 ",8,XT)])])])):Qt("",!0)]),h.value&&p.value?(Ke(),Qi(CE,{key:0,title:p.value.prompt,placeholder:"例如：小明",initialValue:zn(i).name,onSubmit:z,onCancel:$},null,8,["title","initialValue"])):Qt("",!0),g.value&&A.value?(Ke(),Qi(rT,{key:1,title:A.value.title,slides:A.value.slides,mustFinish:A.value.mustFinish,onClose:L},null,8,["title","slides","mustFinish"])):Qt("",!0),x.value&&T.value?(Ke(),Qi(ST,{key:2,title:T.value.title,questions:T.value.questions,onDone:ie,onCancel:fe},null,8,["title","questions"])):Qt("",!0),m.value&&y.value?(Ke(),Qi(TT,{key:3,playerName:zn(i).name||"你",chapterTitle:y.value.chapterTitle,onClose:ve},null,8,["playerName","chapterTitle"])):Qt("",!0)])):Qt("",!0)}}),YT=k0({history:v0(),routes:[{path:"/",name:"start",component:ME},{path:"/chapter/:id",name:"chapter",component:qT}]});b_(U_).use(A_()).use(YT).mount("#app");
