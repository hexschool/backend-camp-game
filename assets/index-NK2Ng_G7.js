const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GitIntroSlide-CCxHL6QL.js","assets/InteractiveSlideTemplate.vue_vue_type_script_setup_true_lang-HViH-j0x.js","assets/GitIntroSlide-Cj2xeLqW.css","assets/DockerIntroSlide-B7WzZgD9.js","assets/DockerIntroSlide-CYf1W49A.css","assets/ArchitectureIntroSlide-CSXEHa1Q.js","assets/ArchitectureIntroSlide-BbQQ0RUK.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Dc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const pt={},Ur=[],Vn=()=>{},Ed=()=>!1,la=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Lc=t=>t.startsWith("onUpdate:"),Ft=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Jp=Object.prototype.hasOwnProperty,lt=(t,e)=>Jp.call(t,e),He=Array.isArray,Nr=t=>Hs(t)==="[object Map]",Td=t=>Hs(t)==="[object Set]",vu=t=>Hs(t)==="[object Date]",$e=t=>typeof t=="function",St=t=>typeof t=="string",Rn=t=>typeof t=="symbol",dt=t=>t!==null&&typeof t=="object",Ad=t=>(dt(t)||$e(t))&&$e(t.then)&&$e(t.catch),wd=Object.prototype.toString,Hs=t=>wd.call(t),Qp=t=>Hs(t).slice(8,-1),Rd=t=>Hs(t)==="[object Object]",ca=t=>St(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xs=Dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},em=/-\w/g,yn=ua(t=>t.replace(em,e=>e.slice(1).toUpperCase())),tm=/\B([A-Z])/g,Fi=ua(t=>t.replace(tm,"-$1").toLowerCase()),fa=ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),wa=ua(t=>t?`on${fa(t)}`:""),Ri=(t,e)=>!Object.is(t,e),Lo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Cd=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Nc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nm=t=>{const e=St(t)?Number(t):NaN;return isNaN(e)?t:e};let xu;const da=()=>xu||(xu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function es(t){if(He(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=St(i)?om(i):es(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(St(t)||dt(t))return t}const im=/;(?![^(]*\))/g,rm=/:([^]+)/,sm=/\/\*[^]*?\*\//g;function om(t){const e={};return t.replace(sm,"").split(im).forEach(n=>{if(n){const i=n.split(rm);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function fn(t){let e="";if(St(t))e=t;else if(He(t))for(let n=0;n<t.length;n++){const i=fn(t[n]);i&&(e+=i+" ")}else if(dt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const am="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",lm=Dc(am);function Pd(t){return!!t||t===""}function cm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=Xo(t[i],e[i]);return n}function Xo(t,e){if(t===e)return!0;let n=vu(t),i=vu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Rn(t),i=Rn(e),n||i)return t===e;if(n=He(t),i=He(e),n||i)return n&&i?cm(t,e):!1;if(n=dt(t),i=dt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!Xo(t[o],e[o]))return!1}}return String(t)===String(e)}const Id=t=>!!(t&&t.__v_isRef===!0),je=t=>St(t)?t:t==null?"":He(t)||dt(t)&&(t.toString===wd||!$e(t.toString))?Id(t)?je(t.value):JSON.stringify(t,Dd,2):String(t),Dd=(t,e)=>Id(e)?Dd(t,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ra(i,s)+" =>"]=r,n),{})}:Td(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ra(n))}:Rn(e)?Ra(e):dt(e)&&!He(e)&&!Rd(e)?String(e):e,Ra=(t,e="")=>{var n;return Rn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Ht;class Ld{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Ht;try{return Ht=this,e()}finally{Ht=n}}}on(){++this._on===1&&(this.prevScope=Ht,Ht=this)}off(){this._on>0&&--this._on===0&&(Ht=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Ud(t){return new Ld(t)}function Nd(){return Ht}function um(t,e=!1){Ht&&Ht.cleanups.push(t)}let gt;const Ca=new WeakSet;class Fd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Bd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,bu(this),kd(this);const e=gt,n=An;gt=this,An=!0;try{return this.fn()}finally{zd(this),gt=e,An=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Bc(e);this.deps=this.depsTail=void 0,bu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){El(this)&&this.run()}get dirty(){return El(this)}}let Od=0,bs,ys;function Bd(t,e=!1){if(t.flags|=8,e){t.next=ys,ys=t;return}t.next=bs,bs=t}function Fc(){Od++}function Oc(){if(--Od>0)return;if(ys){let e=ys;for(ys=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bs;){let e=bs;for(bs=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function kd(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function zd(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Bc(i),fm(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function El(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Hd(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Hd(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Rs)||(t.globalVersion=Rs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!El(t))))return;t.flags|=2;const e=t.dep,n=gt,i=An;gt=t,An=!0;try{kd(t);const r=t.fn(t._value);(e.version===0||Ri(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{gt=n,An=i,zd(t),t.flags&=-3}}function Bc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Bc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function fm(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let An=!0;const Vd=[];function li(){Vd.push(An),An=!1}function ci(){const t=Vd.pop();An=t===void 0?!0:t}function bu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=gt;gt=void 0;try{e()}finally{gt=n}}}let Rs=0;class dm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class kc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!gt||!An||gt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==gt)n=this.activeLink=new dm(gt,this),gt.deps?(n.prevDep=gt.depsTail,gt.depsTail.nextDep=n,gt.depsTail=n):gt.deps=gt.depsTail=n,Gd(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=gt.depsTail,n.nextDep=void 0,gt.depsTail.nextDep=n,gt.depsTail=n,gt.deps===n&&(gt.deps=i)}return n}trigger(e){this.version++,Rs++,this.notify(e)}notify(e){Fc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Oc()}}}function Gd(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Gd(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const qo=new WeakMap,sr=Symbol(""),Tl=Symbol(""),Cs=Symbol("");function Vt(t,e,n){if(An&&gt){let i=qo.get(t);i||qo.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new kc),r.map=i,r.key=n),r.track()}}function ni(t,e,n,i,r,s){const o=qo.get(t);if(!o){Rs++;return}const a=l=>{l&&l.trigger()};if(Fc(),e==="clear")o.forEach(a);else{const l=He(t),c=l&&ca(n);if(l&&n==="length"){const u=Number(i);o.forEach((f,d)=>{(d==="length"||d===Cs||!Rn(d)&&d>=u)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Cs)),e){case"add":l?c&&a(o.get("length")):(a(o.get(sr)),Nr(t)&&a(o.get(Tl)));break;case"delete":l||(a(o.get(sr)),Nr(t)&&a(o.get(Tl)));break;case"set":Nr(t)&&a(o.get(sr));break}}Oc()}function hm(t,e){const n=qo.get(t);return n&&n.get(e)}function fr(t){const e=it(t);return e===t?e:(Vt(e,"iterate",Cs),un(t)?e:e.map(Cn))}function ha(t){return Vt(t=it(t),"iterate",Cs),t}function Mi(t,e){return ui(t)?si(t)?Wr(Cn(e)):Wr(e):Cn(e)}const pm={__proto__:null,[Symbol.iterator](){return Pa(this,Symbol.iterator,t=>Mi(this,t))},concat(...t){return fr(this).concat(...t.map(e=>He(e)?fr(e):e))},entries(){return Pa(this,"entries",t=>(t[1]=Mi(this,t[1]),t))},every(t,e){return Xn(this,"every",t,e,void 0,arguments)},filter(t,e){return Xn(this,"filter",t,e,n=>n.map(i=>Mi(this,i)),arguments)},find(t,e){return Xn(this,"find",t,e,n=>Mi(this,n),arguments)},findIndex(t,e){return Xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Xn(this,"findLast",t,e,n=>Mi(this,n),arguments)},findLastIndex(t,e){return Xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ia(this,"includes",t)},indexOf(...t){return Ia(this,"indexOf",t)},join(t){return fr(this).join(t)},lastIndexOf(...t){return Ia(this,"lastIndexOf",t)},map(t,e){return Xn(this,"map",t,e,void 0,arguments)},pop(){return ss(this,"pop")},push(...t){return ss(this,"push",t)},reduce(t,...e){return yu(this,"reduce",t,e)},reduceRight(t,...e){return yu(this,"reduceRight",t,e)},shift(){return ss(this,"shift")},some(t,e){return Xn(this,"some",t,e,void 0,arguments)},splice(...t){return ss(this,"splice",t)},toReversed(){return fr(this).toReversed()},toSorted(t){return fr(this).toSorted(t)},toSpliced(...t){return fr(this).toSpliced(...t)},unshift(...t){return ss(this,"unshift",t)},values(){return Pa(this,"values",t=>Mi(this,t))}};function Pa(t,e,n){const i=ha(t),r=i[e]();return i!==t&&!un(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const mm=Array.prototype;function Xn(t,e,n,i,r,s){const o=ha(t),a=o!==t&&!un(t),l=o[e];if(l!==mm[e]){const f=l.apply(t,s);return a?Cn(f):f}let c=n;o!==t&&(a?c=function(f,d){return n.call(this,Mi(t,f),d,t)}:n.length>2&&(c=function(f,d){return n.call(this,f,d,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function yu(t,e,n,i){const r=ha(t);let s=n;return r!==t&&(un(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,Mi(t,a),l,t)}),r[e](s,...i)}function Ia(t,e,n){const i=it(t);Vt(i,"iterate",Cs);const r=i[e](...n);return(r===-1||r===!1)&&pa(n[0])?(n[0]=it(n[0]),i[e](...n)):r}function ss(t,e,n=[]){li(),Fc();const i=it(t)[e].apply(t,n);return Oc(),ci(),i}const gm=Dc("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Rn));function _m(t){Rn(t)||(t=String(t));const e=it(this);return Vt(e,"has",t),e.hasOwnProperty(t)}class Xd{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?wm:jd:s?Yd:$d).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=He(e);if(!r){let l;if(o&&(l=pm[n]))return l;if(n==="hasOwnProperty")return _m}const a=Reflect.get(e,n,Tt(e)?e:i);if((Rn(n)?Wd.has(n):gm(n))||(r||Vt(e,"get",n),s))return a;if(Tt(a)){const l=o&&ca(n)?a:a.value;return r&&dt(l)?wl(l):l}return dt(a)?r?wl(a):Vs(a):a}}class qd extends Xd{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=He(e)&&ca(n);if(!this._isShallow){const c=ui(s);if(!un(i)&&!ui(i)&&(s=it(s),i=it(i)),!o&&Tt(s)&&!Tt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:lt(e,n),l=Reflect.set(e,n,i,Tt(e)?e:r);return e===it(r)&&(a?Ri(i,s)&&ni(e,"set",n,i):ni(e,"add",n,i)),l}deleteProperty(e,n){const i=lt(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&ni(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Rn(n)||!Wd.has(n))&&Vt(e,"has",n),i}ownKeys(e){return Vt(e,"iterate",He(e)?"length":sr),Reflect.ownKeys(e)}}class vm extends Xd{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xm=new qd,bm=new vm,ym=new qd(!0);const Al=t=>t,eo=t=>Reflect.getPrototypeOf(t);function Sm(t,e,n){return function(...i){const r=this.__v_raw,s=it(r),o=Nr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Al:e?Wr:Cn;return!e&&Vt(s,"iterate",l?Tl:sr),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function to(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Mm(t,e){const n={get(r){const s=this.__v_raw,o=it(s),a=it(r);t||(Ri(r,a)&&Vt(o,"get",r),Vt(o,"get",a));const{has:l}=eo(o),c=e?Al:t?Wr:Cn;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&Vt(it(r),"iterate",sr),r.size},has(r){const s=this.__v_raw,o=it(s),a=it(r);return t||(Ri(r,a)&&Vt(o,"has",r),Vt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=it(a),c=e?Al:t?Wr:Cn;return!t&&Vt(l,"iterate",sr),a.forEach((u,f)=>r.call(s,c(u),c(f),o))}};return Ft(n,t?{add:to("add"),set:to("set"),delete:to("delete"),clear:to("clear")}:{add(r){!e&&!un(r)&&!ui(r)&&(r=it(r));const s=it(this);return eo(s).has.call(s,r)||(s.add(r),ni(s,"add",r,r)),this},set(r,s){!e&&!un(s)&&!ui(s)&&(s=it(s));const o=it(this),{has:a,get:l}=eo(o);let c=a.call(o,r);c||(r=it(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ri(s,u)&&ni(o,"set",r,s):ni(o,"add",r,s),this},delete(r){const s=it(this),{has:o,get:a}=eo(s);let l=o.call(s,r);l||(r=it(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&ni(s,"delete",r,void 0),c},clear(){const r=it(this),s=r.size!==0,o=r.clear();return s&&ni(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=Sm(r,t,e)}),n}function zc(t,e){const n=Mm(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(lt(n,r)&&r in i?n:i,r,s)}const Em={get:zc(!1,!1)},Tm={get:zc(!1,!0)},Am={get:zc(!0,!1)};const $d=new WeakMap,Yd=new WeakMap,jd=new WeakMap,wm=new WeakMap;function Rm(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Cm(t){return t.__v_skip||!Object.isExtensible(t)?0:Rm(Qp(t))}function Vs(t){return ui(t)?t:Hc(t,!1,xm,Em,$d)}function Kd(t){return Hc(t,!1,ym,Tm,Yd)}function wl(t){return Hc(t,!0,bm,Am,jd)}function Hc(t,e,n,i,r){if(!dt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=Cm(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function si(t){return ui(t)?si(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function un(t){return!!(t&&t.__v_isShallow)}function pa(t){return t?!!t.__v_raw:!1}function it(t){const e=t&&t.__v_raw;return e?it(e):t}function Vc(t){return!lt(t,"__v_skip")&&Object.isExtensible(t)&&Cd(t,"__v_skip",!0),t}const Cn=t=>dt(t)?Vs(t):t,Wr=t=>dt(t)?wl(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function _t(t){return Zd(t,!1)}function Pm(t){return Zd(t,!0)}function Zd(t,e){return Tt(t)?t:new Im(t,e)}class Im{constructor(e,n){this.dep=new kc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:it(e),this._value=n?e:Cn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||un(e)||ui(e);e=i?e:it(e),Ri(e,n)&&(this._rawValue=e,this._value=i?e:Cn(e),this.dep.trigger())}}function ln(t){return Tt(t)?t.value:t}const Dm={get:(t,e,n)=>e==="__v_raw"?t:ln(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Tt(r)&&!Tt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Jd(t){return si(t)?t:new Proxy(t,Dm)}function Lm(t){const e=He(t)?new Array(t.length):{};for(const n in t)e[n]=Nm(t,n);return e}class Um{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=it(e);let r=!0,s=e;if(!He(e)||!ca(String(n)))do r=!pa(s)||un(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=ln(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Tt(this._raw[this._key])){const n=this._object[this._key];if(Tt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return hm(this._raw,this._key)}}function Nm(t,e,n){return new Um(t,e,n)}class Fm{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new kc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Rs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&gt!==this)return Bd(this,!0),!0}get value(){const e=this.dep.track();return Hd(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Om(t,e,n=!1){let i,r;return $e(t)?i=t:(i=t.get,r=t.set),new Fm(i,r,n)}const no={},$o=new WeakMap;let ji;function Bm(t,e=!1,n=ji){if(n){let i=$o.get(n);i||$o.set(n,i=[]),i.push(t)}}function km(t,e,n=pt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=b=>r?b:un(b)||r===!1||r===0?ii(b,1):ii(b);let u,f,d,h,g=!1,_=!1;if(Tt(t)?(f=()=>t.value,g=un(t)):si(t)?(f=()=>c(t),g=!0):He(t)?(_=!0,g=t.some(b=>si(b)||un(b)),f=()=>t.map(b=>{if(Tt(b))return b.value;if(si(b))return c(b);if($e(b))return l?l(b,2):b()})):$e(t)?e?f=l?()=>l(t,2):t:f=()=>{if(d){li();try{d()}finally{ci()}}const b=ji;ji=u;try{return l?l(t,3,[h]):t(h)}finally{ji=b}}:f=Vn,e&&r){const b=f,C=r===!0?1/0:r;f=()=>ii(b(),C)}const m=Nd(),p=()=>{u.stop(),m&&m.active&&Uc(m.effects,u)};if(s&&e){const b=e;e=(...C)=>{b(...C),p()}}let A=_?new Array(t.length).fill(no):no;const S=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const C=u.run();if(r||g||(_?C.some((P,I)=>Ri(P,A[I])):Ri(C,A))){d&&d();const P=ji;ji=u;try{const I=[C,A===no?void 0:_&&A[0]===no?[]:A,h];A=C,l?l(e,3,I):e(...I)}finally{ji=P}}}else u.run()};return a&&a(S),u=new Fd(f),u.scheduler=o?()=>o(S,!1):S,h=b=>Bm(b,!1,u),d=u.onStop=()=>{const b=$o.get(u);if(b){if(l)l(b,4);else for(const C of b)C();$o.delete(u)}},e?i?S(!0):A=u.run():o?o(S.bind(null,!0),!0):u.run(),p.pause=u.pause.bind(u),p.resume=u.resume.bind(u),p.stop=p,p}function ii(t,e=1/0,n){if(e<=0||!dt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))ii(t.value,e,n);else if(He(t))for(let i=0;i<t.length;i++)ii(t[i],e,n);else if(Td(t)||Nr(t))t.forEach(i=>{ii(i,e,n)});else if(Rd(t)){for(const i in t)ii(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&ii(t[i],e,n)}return t}function Gs(t,e,n,i){try{return i?t(...i):t()}catch(r){Ws(r,e,n)}}function Pn(t,e,n,i){if($e(t)){const r=Gs(t,e,n,i);return r&&Ad(r)&&r.catch(s=>{Ws(s,e,n)}),r}if(He(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Pn(t[s],e,n,i));return r}}function Ws(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||pt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](t,l,c)===!1)return}a=a.parent}if(s){li(),Gs(s,null,10,[t,l,c]),ci();return}}zm(t,n,r,i,o)}function zm(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const Zt=[];let Nn=-1;const Fr=[];let Ei=null,Ir=0;const Qd=Promise.resolve();let Yo=null;function Gc(t){const e=Yo||Qd;return t?e.then(this?t.bind(this):t):e}function Hm(t){let e=Nn+1,n=Zt.length;for(;e<n;){const i=e+n>>>1,r=Zt[i],s=Ps(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Wc(t){if(!(t.flags&1)){const e=Ps(t),n=Zt[Zt.length-1];!n||!(t.flags&2)&&e>=Ps(n)?Zt.push(t):Zt.splice(Hm(e),0,t),t.flags|=1,eh()}}function eh(){Yo||(Yo=Qd.then(nh))}function Vm(t){He(t)?Fr.push(...t):Ei&&t.id===-1?Ei.splice(Ir+1,0,t):t.flags&1||(Fr.push(t),t.flags|=1),eh()}function Su(t,e,n=Nn+1){for(;n<Zt.length;n++){const i=Zt[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;Zt.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function th(t){if(Fr.length){const e=[...new Set(Fr)].sort((n,i)=>Ps(n)-Ps(i));if(Fr.length=0,Ei){Ei.push(...e);return}for(Ei=e,Ir=0;Ir<Ei.length;Ir++){const n=Ei[Ir];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ei=null,Ir=0}}const Ps=t=>t.id==null?t.flags&2?-1:1/0:t.id;function nh(t){try{for(Nn=0;Nn<Zt.length;Nn++){const e=Zt[Nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Gs(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Nn<Zt.length;Nn++){const e=Zt[Nn];e&&(e.flags&=-2)}Nn=-1,Zt.length=0,th(),Yo=null,(Zt.length||Fr.length)&&nh()}}let Bt=null,ih=null;function jo(t){const e=Bt;return Bt=t,ih=t&&t.type.__scopeId||null,e}function rh(t,e=Bt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&Jo(-1);const s=jo(e);let o;try{o=t(...r)}finally{jo(s),i._d&&Jo(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function sh(t,e){if(Bt===null)return t;const n=va(Bt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=pt]=e[r];s&&($e(s)&&(s={mounted:s,updated:s}),s.deep&&ii(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function ki(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(li(),Pn(l,n,8,[t.el,a,t,e]),ci())}}function Uo(t,e){if(Ot){let n=Ot.provides;const i=Ot.parent&&Ot.parent.provides;i===n&&(n=Ot.provides=Object.create(i)),n[t]=e}}function bn(t,e,n=!1){const i=Zc();if(i||or){let r=or?or._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&$e(e)?e.call(i&&i.proxy):e}}function Gm(){return!!(Zc()||or)}const Wm=Symbol.for("v-scx"),Xm=()=>bn(Wm);function qm(t,e){return Xc(t,null,e)}function Or(t,e,n){return Xc(t,e,n)}function Xc(t,e,n=pt){const{immediate:i,deep:r,flush:s,once:o}=n,a=Ft({},n),l=e&&i||!e&&s!=="post";let c;if(qr){if(s==="sync"){const h=Xm();c=h.__watcherHandles||(h.__watcherHandles=[])}else if(!l){const h=()=>{};return h.stop=Vn,h.resume=Vn,h.pause=Vn,h}}const u=Ot;a.call=(h,g,_)=>Pn(h,u,g,_);let f=!1;s==="post"?a.scheduler=h=>{jt(h,u&&u.suspense)}:s!=="sync"&&(f=!0,a.scheduler=(h,g)=>{g?h():Wc(h)}),a.augmentJob=h=>{e&&(h.flags|=4),f&&(h.flags|=2,u&&(h.id=u.uid,h.i=u))};const d=km(t,e,a);return qr&&(c?c.push(d):l&&d()),d}function $m(t,e,n){const i=this.proxy,r=St(t)?t.includes(".")?oh(i,t):()=>i[t]:t.bind(i,i);let s;$e(e)?s=e:(s=e.handler,n=e);const o=qs(this),a=Xc(r,s.bind(i),n);return o(),a}function oh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const ah=Symbol("_vte"),lh=t=>t.__isTeleport,Ss=t=>t&&(t.disabled||t.disabled===""),Mu=t=>t&&(t.defer||t.defer===""),Eu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Tu=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Rl=(t,e)=>{const n=t&&t.to;return St(n)?e?e(n):null:n},ch={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:f,pbc:d,o:{insert:h,querySelector:g,createText:_,createComment:m}}=c,p=Ss(e.props);let{shapeFlag:A,children:S,dynamicChildren:b}=e;if(t==null){const C=e.el=_(""),P=e.anchor=_("");h(C,n,i),h(P,n,i);const I=(y,M)=>{A&16&&u(S,y,M,r,s,o,a,l)},L=()=>{const y=e.target=Rl(e.props,g),M=uh(y,e,_,h);y&&(o!=="svg"&&Eu(y)?o="svg":o!=="mathml"&&Tu(y)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(y),p||(I(y,M),No(e,!1)))};p&&(I(n,P),No(e,!0)),Mu(e.props)?(e.el.__isMounted=!1,jt(()=>{L(),delete e.el.__isMounted},s)):L()}else{if(Mu(e.props)&&t.el.__isMounted===!1){jt(()=>{ch.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const C=e.anchor=t.anchor,P=e.target=t.target,I=e.targetAnchor=t.targetAnchor,L=Ss(t.props),y=L?n:P,M=L?C:I;if(o==="svg"||Eu(P)?o="svg":(o==="mathml"||Tu(P))&&(o="mathml"),b?(d(t.dynamicChildren,b,y,r,s,o,a),jc(t,e,!0)):l||f(t,e,y,M,r,s,o,a,!1),p)L?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):io(e,n,C,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const R=e.target=Rl(e.props,g);R&&io(e,R,null,c,0)}else L&&io(e,P,I,c,1);No(e,p)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:f,props:d}=t;if(f&&(r(c),r(u)),s&&r(l),o&16){const h=s||!Ss(d);for(let g=0;g<a.length;g++){const _=a[g];i(_,e,n,h,!!_.dynamicChildren)}}},move:io,hydrate:Ym};function io(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,f=s===2;if(f&&i(o,e,n),(!f||Ss(u))&&l&16)for(let d=0;d<c.length;d++)r(c[d],e,n,2);f&&i(a,e,n)}function Ym(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},f){function d(_,m,p,A){m.anchor=f(o(_),m,a(_),n,i,r,s),m.targetStart=p,m.targetAnchor=A}const h=e.target=Rl(e.props,l),g=Ss(e.props);if(h){const _=h._lpa||h.firstChild;if(e.shapeFlag&16)if(g)d(t,e,_,_&&o(_));else{e.anchor=o(t);let m=_;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,h._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||uh(h,e,u,c),f(_&&o(_),e,h,n,i,r,s)}No(e,g)}else g&&e.shapeFlag&16&&d(t,e,t,o(t));return e.anchor&&o(e.anchor)}const jm=ch;function No(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function uh(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[ah]=s,t&&(i(r,t),i(s,t)),s}const ti=Symbol("_leaveCb"),ro=Symbol("_enterCb");function Km(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Gn(()=>{t.isMounted=!0}),_h(()=>{t.isUnmounting=!0}),t}const mn=[Function,Array],fh={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mn,onEnter:mn,onAfterEnter:mn,onEnterCancelled:mn,onBeforeLeave:mn,onLeave:mn,onAfterLeave:mn,onLeaveCancelled:mn,onBeforeAppear:mn,onAppear:mn,onAfterAppear:mn,onAppearCancelled:mn},dh=t=>{const e=t.subTree;return e.component?dh(e.component):e},Zm={name:"BaseTransition",props:fh,setup(t,{slots:e}){const n=Zc(),i=Km();return()=>{const r=e.default&&mh(e.default(),!0);if(!r||!r.length)return;const s=hh(r),o=it(t),{mode:a}=o;if(i.isLeaving)return Da(s);const l=Au(s);if(!l)return Da(s);let c=Cl(l,o,i,n,f=>c=f);l.type!==Wt&&Is(l,c);let u=n.subTree&&Au(n.subTree);if(u&&u.type!==Wt&&!Ji(u,l)&&dh(n).type!==Wt){let f=Cl(u,o,i,n);if(Is(u,f),a==="out-in"&&l.type!==Wt)return i.isLeaving=!0,f.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,u=void 0},Da(s);a==="in-out"&&l.type!==Wt?f.delayLeave=(d,h,g)=>{const _=ph(i,u);_[String(u.key)]=u,d[ti]=()=>{h(),d[ti]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function hh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Wt){e=n;break}}return e}const Jm=Zm;function ph(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Cl(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:f,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:m,onAppear:p,onAfterAppear:A,onAppearCancelled:S}=e,b=String(t.key),C=ph(n,t),P=(y,M)=>{y&&Pn(y,i,9,M)},I=(y,M)=>{const R=M[1];P(y,M),He(y)?y.every(z=>z.length<=1)&&R():y.length<=1&&R()},L={mode:o,persisted:a,beforeEnter(y){let M=l;if(!n.isMounted)if(s)M=m||l;else return;y[ti]&&y[ti](!0);const R=C[b];R&&Ji(t,R)&&R.el[ti]&&R.el[ti](),P(M,[y])},enter(y){let M=c,R=u,z=f;if(!n.isMounted)if(s)M=p||c,R=A||u,z=S||f;else return;let q=!1;const G=y[ro]=j=>{q||(q=!0,j?P(z,[y]):P(R,[y]),L.delayedLeave&&L.delayedLeave(),y[ro]=void 0)};M?I(M,[y,G]):G()},leave(y,M){const R=String(t.key);if(y[ro]&&y[ro](!0),n.isUnmounting)return M();P(d,[y]);let z=!1;const q=y[ti]=G=>{z||(z=!0,M(),G?P(_,[y]):P(g,[y]),y[ti]=void 0,C[R]===t&&delete C[R])};C[R]=t,h?I(h,[y,q]):q()},clone(y){const M=Cl(y,e,n,i,r);return r&&r(M),M}};return L}function Da(t){if(Xs(t))return t=Li(t),t.children=null,t}function Au(t){if(!Xs(t))return lh(t.type)&&t.children?hh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&$e(n.default))return n.default()}}function Is(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Is(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mh(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===xt?(o.patchFlag&128&&r++,i=i.concat(mh(o.children,e,a))):(e||o.type!==Wt)&&i.push(a!=null?Li(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function dn(t,e){return $e(t)?Ft({name:t.name},e,{setup:t}):t}function qc(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ko=new WeakMap;function Ms(t,e,n,i,r=!1){if(He(t)){t.forEach((g,_)=>Ms(g,e&&(He(e)?e[_]:e),n,i,r));return}if(Br(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ms(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?va(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===pt?a.refs={}:a.refs,f=a.setupState,d=it(f),h=f===pt?Ed:g=>lt(d,g);if(c!=null&&c!==l){if(wu(e),St(c))u[c]=null,h(c)&&(f[c]=null);else if(Tt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if($e(l))Gs(l,a,12,[o,u]);else{const g=St(l),_=Tt(l);if(g||_){const m=()=>{if(t.f){const p=g?h(l)?f[l]:u[l]:l.value;if(r)He(p)&&Uc(p,s);else if(He(p))p.includes(s)||p.push(s);else if(g)u[l]=[s],h(l)&&(f[l]=u[l]);else{const A=[s];l.value=A,t.k&&(u[t.k]=A)}}else g?(u[l]=o,h(l)&&(f[l]=o)):_&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const p=()=>{m(),Ko.delete(t)};p.id=-1,Ko.set(t,p),jt(p,n)}else wu(t),m()}}}function wu(t){const e=Ko.get(t);e&&(e.flags|=8,Ko.delete(t))}const Ru=t=>t.nodeType===8;da().requestIdleCallback;da().cancelIdleCallback;function Qm(t,e){if(Ru(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Ru(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Br=t=>!!t.type.__asyncLoader;function La(t){$e(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,f=0;const d=()=>(f++,c=null,h()),h=()=>{let g;return c||(g=c=e().catch(_=>{if(_=_ instanceof Error?_:new Error(String(_)),l)return new Promise((m,p)=>{l(_,()=>m(d()),()=>p(_),f+1)});throw _}).then(_=>g!==c&&c?c:(_&&(_.__esModule||_[Symbol.toStringTag]==="Module")&&(_=_.default),u=_,_)))};return dn({name:"AsyncComponentWrapper",__asyncLoader:h,__asyncHydrate(g,_,m){let p=!1;(_.bu||(_.bu=[])).push(()=>p=!0);const A=()=>{p||m()},S=s?()=>{const b=s(A,C=>Qm(g,C));b&&(_.bum||(_.bum=[])).push(b)}:A;u?S():h().then(()=>!_.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const g=Ot;if(qc(g),u)return()=>so(u,g);const _=S=>{c=null,Ws(S,g,13,!i)};if(a&&g.suspense||qr)return h().then(S=>()=>so(S,g)).catch(S=>(_(S),()=>i?Ct(i,{error:S}):null));const m=_t(!1),p=_t(),A=_t(!!r);return r&&setTimeout(()=>{A.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!p.value){const S=new Error(`Async component timed out after ${o}ms.`);_(S),p.value=S}},o),h().then(()=>{m.value=!0,g.parent&&Xs(g.parent.vnode)&&g.parent.update()}).catch(S=>{_(S),p.value=S}),()=>{if(m.value&&u)return so(u,g);if(p.value&&i)return Ct(i,{error:p.value});if(n&&!A.value)return so(n,g)}}})}function so(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Ct(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Xs=t=>t.type.__isKeepAlive;function eg(t,e){gh(t,"a",e)}function tg(t,e){gh(t,"da",e)}function gh(t,e,n=Ot){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ma(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Xs(r.parent.vnode)&&ng(i,e,n,r),r=r.parent}}function ng(t,e,n,i){const r=ma(e,t,i,!0);Di(()=>{Uc(i[e],r)},n)}function ma(t,e,n=Ot,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{li();const a=qs(n),l=Pn(e,n,t,o);return a(),ci(),l});return i?r.unshift(s):r.push(s),s}}const hi=t=>(e,n=Ot)=>{(!qr||t==="sp")&&ma(t,(...i)=>e(...i),n)},ig=hi("bm"),Gn=hi("m"),rg=hi("bu"),sg=hi("u"),_h=hi("bum"),Di=hi("um"),og=hi("sp"),ag=hi("rtg"),lg=hi("rtc");function cg(t,e=Ot){ma("ec",t,e)}const vh="components";function ug(t,e){return bh(vh,t,!0,e)||t}const xh=Symbol.for("v-ndc");function fg(t){return St(t)?bh(vh,t,!1)||t:t||xh}function bh(t,e,n=!0,i=!1){const r=Bt||Ot;if(r){const s=r.type;{const a=jg(s,!1);if(a&&(a===e||a===yn(e)||a===fa(yn(e))))return s}const o=Cu(r[t]||s[t],e)||Cu(r.appContext[t],e);return!o&&i?s:o}}function Cu(t,e){return t&&(t[e]||t[yn(e)]||t[fa(yn(e))])}function Xr(t,e,n,i){let r;const s=n,o=He(t);if(o||St(t)){const a=o&&si(t);let l=!1,c=!1;a&&(l=!un(t),c=ui(t),t=ha(t)),r=new Array(t.length);for(let u=0,f=t.length;u<f;u++)r[u]=e(l?c?Wr(Cn(t[u])):Cn(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(dt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function ZA(t,e,n={},i,r){if(Bt.ce||Bt.parent&&Br(Bt.parent)&&Bt.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),Ne(),an(xt,null,[Ct("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),Ne();const o=s&&yh(s(n)),a=n.key||o&&o.key,l=an(xt,{key:(a&&!Rn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function yh(t){return t.some(e=>Ls(e)?!(e.type===Wt||e.type===xt&&!yh(e.children)):!0)?t:null}const Pl=t=>t?kh(t)?va(t):Pl(t.parent):null,Es=Ft(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pl(t.parent),$root:t=>Pl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Mh(t),$forceUpdate:t=>t.f||(t.f=()=>{Wc(t.update)}),$nextTick:t=>t.n||(t.n=Gc.bind(t.proxy)),$watch:t=>$m.bind(t)}),Ua=(t,e)=>t!==pt&&!t.__isScriptSetup&&lt(t,e),dg={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const d=o[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ua(i,e))return o[e]=1,i[e];if(r!==pt&&lt(r,e))return o[e]=2,r[e];if(lt(s,e))return o[e]=3,s[e];if(n!==pt&&lt(n,e))return o[e]=4,n[e];Il&&(o[e]=0)}}const c=Es[e];let u,f;if(c)return e==="$attrs"&&Vt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==pt&&lt(n,e))return o[e]=4,n[e];if(f=l.config.globalProperties,lt(f,e))return f[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ua(r,e)?(r[e]=n,!0):i!==pt&&lt(i,e)?(i[e]=n,!0):lt(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==pt&&a[0]!=="$"&&lt(t,a)||Ua(e,a)||lt(s,a)||lt(i,a)||lt(Es,a)||lt(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:lt(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Pu(t){return He(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Il=!0;function hg(t){const e=Mh(t),n=t.proxy,i=t.ctx;Il=!1,e.beforeCreate&&Iu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:_,deactivated:m,beforeDestroy:p,beforeUnmount:A,destroyed:S,unmounted:b,render:C,renderTracked:P,renderTriggered:I,errorCaptured:L,serverPrefetch:y,expose:M,inheritAttrs:R,components:z,directives:q,filters:G}=e;if(c&&pg(c,i,null),o)for(const H in o){const U=o[H];$e(U)&&(i[H]=U.bind(n))}if(r){const H=r.call(n,n);dt(H)&&(t.data=Vs(H))}if(Il=!0,s)for(const H in s){const U=s[H],ie=$e(U)?U.bind(n,n):$e(U.get)?U.get.bind(n,n):Vn,ue=!$e(U)&&$e(U.set)?U.set.bind(n):Vn,ve=ke({get:ie,set:ue});Object.defineProperty(i,H,{enumerable:!0,configurable:!0,get:()=>ve.value,set:Se=>ve.value=Se})}if(a)for(const H in a)Sh(a[H],i,n,H);if(l){const H=$e(l)?l.call(n):l;Reflect.ownKeys(H).forEach(U=>{Uo(U,H[U])})}u&&Iu(u,t,"c");function $(H,U){He(U)?U.forEach(ie=>H(ie.bind(n))):U&&H(U.bind(n))}if($(ig,f),$(Gn,d),$(rg,h),$(sg,g),$(eg,_),$(tg,m),$(cg,L),$(lg,P),$(ag,I),$(_h,A),$(Di,b),$(og,y),He(M))if(M.length){const H=t.exposed||(t.exposed={});M.forEach(U=>{Object.defineProperty(H,U,{get:()=>n[U],set:ie=>n[U]=ie,enumerable:!0})})}else t.exposed||(t.exposed={});C&&t.render===Vn&&(t.render=C),R!=null&&(t.inheritAttrs=R),z&&(t.components=z),q&&(t.directives=q),y&&qc(t)}function pg(t,e,n=Vn){He(t)&&(t=Dl(t));for(const i in t){const r=t[i];let s;dt(r)?"default"in r?s=bn(r.from||i,r.default,!0):s=bn(r.from||i):s=bn(r),Tt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Iu(t,e,n){Pn(He(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function Sh(t,e,n,i){let r=i.includes(".")?oh(n,i):()=>n[i];if(St(t)){const s=e[t];$e(s)&&Or(r,s)}else if($e(t))Or(r,t.bind(n));else if(dt(t))if(He(t))t.forEach(s=>Sh(s,e,n,i));else{const s=$e(t.handler)?t.handler.bind(n):e[t.handler];$e(s)&&Or(r,s,t)}}function Mh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>Zo(l,c,o,!0)),Zo(l,e,o)),dt(e)&&s.set(e,l),l}function Zo(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&Zo(t,s,n,!0),r&&r.forEach(o=>Zo(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=mg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const mg={data:Du,props:Lu,emits:Lu,methods:gs,computed:gs,beforeCreate:$t,created:$t,beforeMount:$t,mounted:$t,beforeUpdate:$t,updated:$t,beforeDestroy:$t,beforeUnmount:$t,destroyed:$t,unmounted:$t,activated:$t,deactivated:$t,errorCaptured:$t,serverPrefetch:$t,components:gs,directives:gs,watch:_g,provide:Du,inject:gg};function Du(t,e){return e?t?function(){return Ft($e(t)?t.call(this,this):t,$e(e)?e.call(this,this):e)}:e:t}function gg(t,e){return gs(Dl(t),Dl(e))}function Dl(t){if(He(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function $t(t,e){return t?[...new Set([].concat(t,e))]:e}function gs(t,e){return t?Ft(Object.create(null),t,e):e}function Lu(t,e){return t?He(t)&&He(e)?[...new Set([...t,...e])]:Ft(Object.create(null),Pu(t),Pu(e??{})):e}function _g(t,e){if(!t)return e;if(!e)return t;const n=Ft(Object.create(null),t);for(const i in e)n[i]=$t(t[i],e[i]);return n}function Eh(){return{app:null,config:{isNativeTag:Ed,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let vg=0;function xg(t,e){return function(i,r=null){$e(i)||(i=Ft({},i)),r!=null&&!dt(r)&&(r=null);const s=Eh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:vg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Zg,get config(){return s.config},set config(u){},use(u,...f){return o.has(u)||(u&&$e(u.install)?(o.add(u),u.install(c,...f)):$e(u)&&(o.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,d){if(!l){const h=c._ceVNode||Ct(i,r);return h.appContext=s,d===!0?d="svg":d===!1&&(d=void 0),t(h,u,d),l=!0,c._container=u,u.__vue_app__=c,va(h.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Pn(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=or;or=c;try{return u()}finally{or=f}}};return c}}let or=null;const bg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${yn(e)}Modifiers`]||t[`${Fi(e)}Modifiers`];function yg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||pt;let r=n;const s=e.startsWith("update:"),o=s&&bg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>St(u)?u.trim():u)),o.number&&(r=n.map(Nc)));let a,l=i[a=wa(e)]||i[a=wa(yn(e))];!l&&s&&(l=i[a=wa(Fi(e))]),l&&Pn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Pn(c,t,6,r)}}const Sg=new WeakMap;function Th(t,e,n=!1){const i=n?Sg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!$e(t)){const l=c=>{const u=Th(c,e,!0);u&&(a=!0,Ft(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(dt(t)&&i.set(t,null),null):(He(s)?s.forEach(l=>o[l]=null):Ft(o,s),dt(t)&&i.set(t,o),o)}function ga(t,e){return!t||!la(e)?!1:(e=e.slice(2).replace(/Once$/,""),lt(t,e[0].toLowerCase()+e.slice(1))||lt(t,Fi(e))||lt(t,e))}function Uu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:f,data:d,setupState:h,ctx:g,inheritAttrs:_}=t,m=jo(t);let p,A;try{if(n.shapeFlag&4){const b=r||i,C=b;p=Fn(c.call(C,b,u,f,h,d,g)),A=a}else{const b=e;p=Fn(b.length>1?b(f,{attrs:a,slots:o,emit:l}):b(f,null)),A=e.props?a:Mg(a)}}catch(b){Ts.length=0,Ws(b,t,1),p=Ct(Wt)}let S=p;if(A&&_!==!1){const b=Object.keys(A),{shapeFlag:C}=S;b.length&&C&7&&(s&&b.some(Lc)&&(A=Eg(A,s)),S=Li(S,A,!1,!0))}return n.dirs&&(S=Li(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&Is(S,n.transition),p=S,jo(m),p}const Mg=t=>{let e;for(const n in t)(n==="class"||n==="style"||la(n))&&((e||(e={}))[n]=t[n]);return e},Eg=(t,e)=>{const n={};for(const i in t)(!Lc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Tg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Nu(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!ga(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nu(i,o,c):!0:!!o;return!1}function Nu(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ga(n,s))return!0}return!1}function Ag({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Ah={},wh=()=>Object.create(Ah),Rh=t=>Object.getPrototypeOf(t)===Ah;function wg(t,e,n,i=!1){const r={},s=wh();t.propsDefaults=Object.create(null),Ch(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Kd(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Rg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=it(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(ga(t.emitsOptions,d))continue;const h=e[d];if(l)if(lt(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=yn(d);r[g]=Ll(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{Ch(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!lt(e,f)&&((u=Fi(f))===f||!lt(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=Ll(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!lt(e,f))&&(delete s[f],c=!0)}c&&ni(t.attrs,"set","")}function Ch(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(xs(l))continue;const c=e[l];let u;r&&lt(r,u=yn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ga(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=it(n),c=a||pt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ll(r,l,f,c[f],t,!lt(c,f))}}return o}function Ll(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=lt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=qs(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===Fi(n))&&(i=!0))}return i}const Cg=new WeakMap;function Ph(t,e,n=!1){const i=n?Cg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!$e(t)){const u=f=>{l=!0;const[d,h]=Ph(f,e,!0);Ft(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return dt(t)&&i.set(t,Ur),Ur;if(He(s))for(let u=0;u<s.length;u++){const f=yn(s[u]);Fu(f)&&(o[f]=pt)}else if(s)for(const u in s){const f=yn(u);if(Fu(f)){const d=s[u],h=o[f]=He(d)||$e(d)?{type:d}:Ft({},d),g=h.type;let _=!1,m=!0;if(He(g))for(let p=0;p<g.length;++p){const A=g[p],S=$e(A)&&A.name;if(S==="Boolean"){_=!0;break}else S==="String"&&(m=!1)}else _=$e(g)&&g.name==="Boolean";h[0]=_,h[1]=m,(_||lt(h,"default"))&&a.push(f)}}const c=[o,a];return dt(t)&&i.set(t,c),c}function Fu(t){return t[0]!=="$"&&!xs(t)}const $c=t=>t==="_"||t==="_ctx"||t==="$stable",Yc=t=>He(t)?t.map(Fn):[Fn(t)],Pg=(t,e,n)=>{if(e._n)return e;const i=rh((...r)=>Yc(e(...r)),n);return i._c=!1,i},Ih=(t,e,n)=>{const i=t._ctx;for(const r in t){if($c(r))continue;const s=t[r];if($e(s))e[r]=Pg(r,s,i);else if(s!=null){const o=Yc(s);e[r]=()=>o}}},Dh=(t,e)=>{const n=Yc(e);t.slots.default=()=>n},Lh=(t,e,n)=>{for(const i in e)(n||!$c(i))&&(t[i]=e[i])},Ig=(t,e,n)=>{const i=t.slots=wh();if(t.vnode.shapeFlag&32){const r=e._;r?(Lh(i,e,n),n&&Cd(i,"_",r,!0)):Ih(e,i)}else e&&Dh(t,e)},Dg=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=pt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:Lh(r,e,n):(s=!e.$stable,Ih(e,r)),o=e}else e&&(Dh(t,e),o={default:1});if(s)for(const a in r)!$c(a)&&o[a]==null&&delete r[a]},jt=Og;function Lg(t){return Ug(t)}function Ug(t,e){const n=da();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=Vn,insertStaticContent:g}=t,_=(w,v,O,D=null,Y=null,X=null,de=void 0,ee=null,ae=!!v.dynamicChildren)=>{if(w===v)return;w&&!Ji(w,v)&&(D=F(w),Se(w,Y,X,!0),w=null),v.patchFlag===-2&&(ae=!1,v.dynamicChildren=null);const{type:le,ref:Te,shapeFlag:E}=v;switch(le){case _a:m(w,v,O,D);break;case Wt:p(w,v,O,D);break;case Fo:w==null&&A(v,O,D,de);break;case xt:z(w,v,O,D,Y,X,de,ee,ae);break;default:E&1?C(w,v,O,D,Y,X,de,ee,ae):E&6?q(w,v,O,D,Y,X,de,ee,ae):(E&64||E&128)&&le.process(w,v,O,D,Y,X,de,ee,ae,fe)}Te!=null&&Y?Ms(Te,w&&w.ref,X,v||w,!v):Te==null&&w&&w.ref!=null&&Ms(w.ref,null,X,w,!0)},m=(w,v,O,D)=>{if(w==null)i(v.el=a(v.children),O,D);else{const Y=v.el=w.el;v.children!==w.children&&c(Y,v.children)}},p=(w,v,O,D)=>{w==null?i(v.el=l(v.children||""),O,D):v.el=w.el},A=(w,v,O,D)=>{[w.el,w.anchor]=g(w.children,v,O,D,w.el,w.anchor)},S=({el:w,anchor:v},O,D)=>{let Y;for(;w&&w!==v;)Y=d(w),i(w,O,D),w=Y;i(v,O,D)},b=({el:w,anchor:v})=>{let O;for(;w&&w!==v;)O=d(w),r(w),w=O;r(v)},C=(w,v,O,D,Y,X,de,ee,ae)=>{if(v.type==="svg"?de="svg":v.type==="math"&&(de="mathml"),w==null)P(v,O,D,Y,X,de,ee,ae);else{const le=w.el&&w.el._isVueCE?w.el:null;try{le&&le._beginPatch(),y(w,v,Y,X,de,ee,ae)}finally{le&&le._endPatch()}}},P=(w,v,O,D,Y,X,de,ee)=>{let ae,le;const{props:Te,shapeFlag:E,transition:x,dirs:N}=w;if(ae=w.el=o(w.type,X,Te&&Te.is,Te),E&8?u(ae,w.children):E&16&&L(w.children,ae,null,D,Y,Na(w,X),de,ee),N&&ki(w,null,D,"created"),I(ae,w,w.scopeId,de,D),Te){for(const oe in Te)oe!=="value"&&!xs(oe)&&s(ae,oe,null,Te[oe],X,D);"value"in Te&&s(ae,"value",null,Te.value,X),(le=Te.onVnodeBeforeMount)&&Un(le,D,w)}N&&ki(w,null,D,"beforeMount");const K=Ng(Y,x);K&&x.beforeEnter(ae),i(ae,v,O),((le=Te&&Te.onVnodeMounted)||K||N)&&jt(()=>{le&&Un(le,D,w),K&&x.enter(ae),N&&ki(w,null,D,"mounted")},Y)},I=(w,v,O,D,Y)=>{if(O&&h(w,O),D)for(let X=0;X<D.length;X++)h(w,D[X]);if(Y){let X=Y.subTree;if(v===X||Fh(X.type)&&(X.ssContent===v||X.ssFallback===v)){const de=Y.vnode;I(w,de,de.scopeId,de.slotScopeIds,Y.parent)}}},L=(w,v,O,D,Y,X,de,ee,ae=0)=>{for(let le=ae;le<w.length;le++){const Te=w[le]=ee?Ti(w[le]):Fn(w[le]);_(null,Te,v,O,D,Y,X,de,ee)}},y=(w,v,O,D,Y,X,de)=>{const ee=v.el=w.el;let{patchFlag:ae,dynamicChildren:le,dirs:Te}=v;ae|=w.patchFlag&16;const E=w.props||pt,x=v.props||pt;let N;if(O&&zi(O,!1),(N=x.onVnodeBeforeUpdate)&&Un(N,O,v,w),Te&&ki(v,w,O,"beforeUpdate"),O&&zi(O,!0),(E.innerHTML&&x.innerHTML==null||E.textContent&&x.textContent==null)&&u(ee,""),le?M(w.dynamicChildren,le,ee,O,D,Na(v,Y),X):de||U(w,v,ee,null,O,D,Na(v,Y),X,!1),ae>0){if(ae&16)R(ee,E,x,O,Y);else if(ae&2&&E.class!==x.class&&s(ee,"class",null,x.class,Y),ae&4&&s(ee,"style",E.style,x.style,Y),ae&8){const K=v.dynamicProps;for(let oe=0;oe<K.length;oe++){const Z=K[oe],we=E[Z],he=x[Z];(he!==we||Z==="value")&&s(ee,Z,we,he,Y,O)}}ae&1&&w.children!==v.children&&u(ee,v.children)}else!de&&le==null&&R(ee,E,x,O,Y);((N=x.onVnodeUpdated)||Te)&&jt(()=>{N&&Un(N,O,v,w),Te&&ki(v,w,O,"updated")},D)},M=(w,v,O,D,Y,X,de)=>{for(let ee=0;ee<v.length;ee++){const ae=w[ee],le=v[ee],Te=ae.el&&(ae.type===xt||!Ji(ae,le)||ae.shapeFlag&198)?f(ae.el):O;_(ae,le,Te,null,D,Y,X,de,!0)}},R=(w,v,O,D,Y)=>{if(v!==O){if(v!==pt)for(const X in v)!xs(X)&&!(X in O)&&s(w,X,v[X],null,Y,D);for(const X in O){if(xs(X))continue;const de=O[X],ee=v[X];de!==ee&&X!=="value"&&s(w,X,ee,de,Y,D)}"value"in O&&s(w,"value",v.value,O.value,Y)}},z=(w,v,O,D,Y,X,de,ee,ae)=>{const le=v.el=w?w.el:a(""),Te=v.anchor=w?w.anchor:a("");let{patchFlag:E,dynamicChildren:x,slotScopeIds:N}=v;N&&(ee=ee?ee.concat(N):N),w==null?(i(le,O,D),i(Te,O,D),L(v.children||[],O,Te,Y,X,de,ee,ae)):E>0&&E&64&&x&&w.dynamicChildren&&w.dynamicChildren.length===x.length?(M(w.dynamicChildren,x,O,Y,X,de,ee),(v.key!=null||Y&&v===Y.subTree)&&jc(w,v,!0)):U(w,v,O,Te,Y,X,de,ee,ae)},q=(w,v,O,D,Y,X,de,ee,ae)=>{v.slotScopeIds=ee,w==null?v.shapeFlag&512?Y.ctx.activate(v,O,D,de,ae):G(v,O,D,Y,X,de,ae):j(w,v,ae)},G=(w,v,O,D,Y,X,de)=>{const ee=w.component=Wg(w,D,Y);if(Xs(w)&&(ee.ctx.renderer=fe),Xg(ee,!1,de),ee.asyncDep){if(Y&&Y.registerDep(ee,$,de),!w.el){const ae=ee.subTree=Ct(Wt);p(null,ae,v,O),w.placeholder=ae.el}}else $(ee,w,v,O,Y,X,de)},j=(w,v,O)=>{const D=v.component=w.component;if(Tg(w,v,O))if(D.asyncDep&&!D.asyncResolved){H(D,v,O);return}else D.next=v,D.update();else v.el=w.el,D.vnode=v},$=(w,v,O,D,Y,X,de)=>{const ee=()=>{if(w.isMounted){let{next:E,bu:x,u:N,parent:K,vnode:oe}=w;{const Ce=Uh(w);if(Ce){E&&(E.el=oe.el,H(w,E,de)),Ce.asyncDep.then(()=>{w.isUnmounted||ee()});return}}let Z=E,we;zi(w,!1),E?(E.el=oe.el,H(w,E,de)):E=oe,x&&Lo(x),(we=E.props&&E.props.onVnodeBeforeUpdate)&&Un(we,K,E,oe),zi(w,!0);const he=Uu(w),Re=w.subTree;w.subTree=he,_(Re,he,f(Re.el),F(Re),w,Y,X),E.el=he.el,Z===null&&Ag(w,he.el),N&&jt(N,Y),(we=E.props&&E.props.onVnodeUpdated)&&jt(()=>Un(we,K,E,oe),Y)}else{let E;const{el:x,props:N}=v,{bm:K,m:oe,parent:Z,root:we,type:he}=w,Re=Br(v);zi(w,!1),K&&Lo(K),!Re&&(E=N&&N.onVnodeBeforeMount)&&Un(E,Z,v),zi(w,!0);{we.ce&&we.ce._def.shadowRoot!==!1&&we.ce._injectChildStyle(he);const Ce=w.subTree=Uu(w);_(null,Ce,O,D,w,Y,X),v.el=Ce.el}if(oe&&jt(oe,Y),!Re&&(E=N&&N.onVnodeMounted)){const Ce=v;jt(()=>Un(E,Z,Ce),Y)}(v.shapeFlag&256||Z&&Br(Z.vnode)&&Z.vnode.shapeFlag&256)&&w.a&&jt(w.a,Y),w.isMounted=!0,v=O=D=null}};w.scope.on();const ae=w.effect=new Fd(ee);w.scope.off();const le=w.update=ae.run.bind(ae),Te=w.job=ae.runIfDirty.bind(ae);Te.i=w,Te.id=w.uid,ae.scheduler=()=>Wc(Te),zi(w,!0),le()},H=(w,v,O)=>{v.component=w;const D=w.vnode.props;w.vnode=v,w.next=null,Rg(w,v.props,D,O),Dg(w,v.children,O),li(),Su(w),ci()},U=(w,v,O,D,Y,X,de,ee,ae=!1)=>{const le=w&&w.children,Te=w?w.shapeFlag:0,E=v.children,{patchFlag:x,shapeFlag:N}=v;if(x>0){if(x&128){ue(le,E,O,D,Y,X,de,ee,ae);return}else if(x&256){ie(le,E,O,D,Y,X,de,ee,ae);return}}N&8?(Te&16&&me(le,Y,X),E!==le&&u(O,E)):Te&16?N&16?ue(le,E,O,D,Y,X,de,ee,ae):me(le,Y,X,!0):(Te&8&&u(O,""),N&16&&L(E,O,D,Y,X,de,ee,ae))},ie=(w,v,O,D,Y,X,de,ee,ae)=>{w=w||Ur,v=v||Ur;const le=w.length,Te=v.length,E=Math.min(le,Te);let x;for(x=0;x<E;x++){const N=v[x]=ae?Ti(v[x]):Fn(v[x]);_(w[x],N,O,null,Y,X,de,ee,ae)}le>Te?me(w,Y,X,!0,!1,E):L(v,O,D,Y,X,de,ee,ae,E)},ue=(w,v,O,D,Y,X,de,ee,ae)=>{let le=0;const Te=v.length;let E=w.length-1,x=Te-1;for(;le<=E&&le<=x;){const N=w[le],K=v[le]=ae?Ti(v[le]):Fn(v[le]);if(Ji(N,K))_(N,K,O,null,Y,X,de,ee,ae);else break;le++}for(;le<=E&&le<=x;){const N=w[E],K=v[x]=ae?Ti(v[x]):Fn(v[x]);if(Ji(N,K))_(N,K,O,null,Y,X,de,ee,ae);else break;E--,x--}if(le>E){if(le<=x){const N=x+1,K=N<Te?v[N].el:D;for(;le<=x;)_(null,v[le]=ae?Ti(v[le]):Fn(v[le]),O,K,Y,X,de,ee,ae),le++}}else if(le>x)for(;le<=E;)Se(w[le],Y,X,!0),le++;else{const N=le,K=le,oe=new Map;for(le=K;le<=x;le++){const Ue=v[le]=ae?Ti(v[le]):Fn(v[le]);Ue.key!=null&&oe.set(Ue.key,le)}let Z,we=0;const he=x-K+1;let Re=!1,Ce=0;const pe=new Array(he);for(le=0;le<he;le++)pe[le]=0;for(le=N;le<=E;le++){const Ue=w[le];if(we>=he){Se(Ue,Y,X,!0);continue}let Pe;if(Ue.key!=null)Pe=oe.get(Ue.key);else for(Z=K;Z<=x;Z++)if(pe[Z-K]===0&&Ji(Ue,v[Z])){Pe=Z;break}Pe===void 0?Se(Ue,Y,X,!0):(pe[Pe-K]=le+1,Pe>=Ce?Ce=Pe:Re=!0,_(Ue,v[Pe],O,null,Y,X,de,ee,ae),we++)}const Ee=Re?Fg(pe):Ur;for(Z=Ee.length-1,le=he-1;le>=0;le--){const Ue=K+le,Pe=v[Ue],ye=v[Ue+1],Ye=Ue+1<Te?ye.el||Nh(ye):D;pe[le]===0?_(null,Pe,O,Ye,Y,X,de,ee,ae):Re&&(Z<0||le!==Ee[Z]?ve(Pe,O,Ye,2):Z--)}}},ve=(w,v,O,D,Y=null)=>{const{el:X,type:de,transition:ee,children:ae,shapeFlag:le}=w;if(le&6){ve(w.component.subTree,v,O,D);return}if(le&128){w.suspense.move(v,O,D);return}if(le&64){de.move(w,v,O,fe);return}if(de===xt){i(X,v,O);for(let E=0;E<ae.length;E++)ve(ae[E],v,O,D);i(w.anchor,v,O);return}if(de===Fo){S(w,v,O);return}if(D!==2&&le&1&&ee)if(D===0)ee.beforeEnter(X),i(X,v,O),jt(()=>ee.enter(X),Y);else{const{leave:E,delayLeave:x,afterLeave:N}=ee,K=()=>{w.ctx.isUnmounted?r(X):i(X,v,O)},oe=()=>{X._isLeaving&&X[ti](!0),E(X,()=>{K(),N&&N()})};x?x(X,K,oe):oe()}else i(X,v,O)},Se=(w,v,O,D=!1,Y=!1)=>{const{type:X,props:de,ref:ee,children:ae,dynamicChildren:le,shapeFlag:Te,patchFlag:E,dirs:x,cacheIndex:N}=w;if(E===-2&&(Y=!1),ee!=null&&(li(),Ms(ee,null,O,w,!0),ci()),N!=null&&(v.renderCache[N]=void 0),Te&256){v.ctx.deactivate(w);return}const K=Te&1&&x,oe=!Br(w);let Z;if(oe&&(Z=de&&de.onVnodeBeforeUnmount)&&Un(Z,v,w),Te&6)ne(w.component,O,D);else{if(Te&128){w.suspense.unmount(O,D);return}K&&ki(w,null,v,"beforeUnmount"),Te&64?w.type.remove(w,v,O,fe,D):le&&!le.hasOnce&&(X!==xt||E>0&&E&64)?me(le,v,O,!1,!0):(X===xt&&E&384||!Y&&Te&16)&&me(ae,v,O),D&&Ze(w)}(oe&&(Z=de&&de.onVnodeUnmounted)||K)&&jt(()=>{Z&&Un(Z,v,w),K&&ki(w,null,v,"unmounted")},O)},Ze=w=>{const{type:v,el:O,anchor:D,transition:Y}=w;if(v===xt){Ve(O,D);return}if(v===Fo){b(w);return}const X=()=>{r(O),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:de,delayLeave:ee}=Y,ae=()=>de(O,X);ee?ee(w.el,X,ae):ae()}else X()},Ve=(w,v)=>{let O;for(;w!==v;)O=d(w),r(w),w=O;r(v)},ne=(w,v,O)=>{const{bum:D,scope:Y,job:X,subTree:de,um:ee,m:ae,a:le}=w;Ou(ae),Ou(le),D&&Lo(D),Y.stop(),X&&(X.flags|=8,Se(de,w,v,O)),ee&&jt(ee,v),jt(()=>{w.isUnmounted=!0},v)},me=(w,v,O,D=!1,Y=!1,X=0)=>{for(let de=X;de<w.length;de++)Se(w[de],v,O,D,Y)},F=w=>{if(w.shapeFlag&6)return F(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const v=d(w.anchor||w.el),O=v&&v[ah];return O?d(O):v};let se=!1;const re=(w,v,O)=>{let D;w==null?v._vnode&&(Se(v._vnode,null,null,!0),D=v._vnode.component):_(v._vnode||null,w,v,null,null,null,O),v._vnode=w,se||(se=!0,Su(D),th(),se=!1)},fe={p:_,um:Se,m:ve,r:Ze,mt:G,mc:L,pc:U,pbc:M,n:F,o:t};return{render:re,hydrate:void 0,createApp:xg(re)}}function Na({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function Ng(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function jc(t,e,n=!1){const i=t.children,r=e.children;if(He(i)&&He(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ti(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&jc(o,a)),a.type===_a&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(t.type===xt?1:0)),a.type===Wt&&!a.el&&(a.el=o.el)}}function Fg(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Uh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Uh(e)}function Ou(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Nh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Nh(e.subTree):null}const Fh=t=>t.__isSuspense;function Og(t,e){e&&e.pendingBranch?He(t)?e.effects.push(...t):e.effects.push(t):Vm(t)}const xt=Symbol.for("v-fgt"),_a=Symbol.for("v-txt"),Wt=Symbol.for("v-cmt"),Fo=Symbol.for("v-stc"),Ts=[];let cn=null;function Ne(t=!1){Ts.push(cn=t?null:[])}function Bg(){Ts.pop(),cn=Ts[Ts.length-1]||null}let Ds=1;function Jo(t,e=!1){Ds+=t,t<0&&cn&&e&&(cn.hasOnce=!0)}function Oh(t){return t.dynamicChildren=Ds>0?cn||Ur:null,Bg(),Ds>0&&cn&&cn.push(t),t}function We(t,e,n,i,r,s){return Oh(k(t,e,n,i,r,s,!0))}function an(t,e,n,i,r){return Oh(Ct(t,e,n,i,r,!0))}function Ls(t){return t?t.__v_isVNode===!0:!1}function Ji(t,e){return t.type===e.type&&t.key===e.key}const Bh=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?St(t)||Tt(t)||$e(t)?{i:Bt,r:t,k:e,f:!!n}:t:null);function k(t,e=null,n=null,i=0,r=null,s=t===xt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Bh(e),ref:e&&Oo(e),scopeId:ih,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Bt};return a?(Kc(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=St(n)?8:16),Ds>0&&!o&&cn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&cn.push(l),l}const Ct=kg;function kg(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===xh)&&(t=Wt),Ls(t)){const a=Li(t,e,!0);return n&&Kc(a,n),Ds>0&&!s&&cn&&(a.shapeFlag&6?cn[cn.indexOf(t)]=a:cn.push(a)),a.patchFlag=-2,a}if(Kg(t)&&(t=t.__vccOpts),e){e=zg(e);let{class:a,style:l}=e;a&&!St(a)&&(e.class=fn(a)),dt(l)&&(pa(l)&&!He(l)&&(l=Ft({},l)),e.style=es(l))}const o=St(t)?1:Fh(t)?128:lh(t)?64:dt(t)?4:$e(t)?2:0;return k(t,e,n,i,r,o,s,!0)}function zg(t){return t?pa(t)||Rh(t)?Ft({},t):t:null}function Li(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?Hg(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Bh(c),ref:e&&e.ref?n&&s?He(s)?s.concat(Oo(e)):[s,Oo(e)]:Oo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Li(t.ssContent),ssFallback:t.ssFallback&&Li(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&Is(u,l.clone(u)),u}function oi(t=" ",e=0){return Ct(_a,null,t,e)}function Qo(t,e){const n=Ct(Fo,null,t);return n.staticCount=e,n}function Ut(t="",e=!1){return e?(Ne(),an(Wt,null,t)):Ct(Wt,null,t)}function Fn(t){return t==null||typeof t=="boolean"?Ct(Wt):He(t)?Ct(xt,null,t.slice()):Ls(t)?Ti(t):Ct(_a,null,String(t))}function Ti(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Li(t)}function Kc(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(He(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),Kc(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Rh(e)?e._ctx=Bt:r===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:Bt},n=32):(e=String(e),i&64?(n=16,e=[oi(e)]):n=8);t.children=e,t.shapeFlag|=n}function Hg(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=fn([e.class,i.class]));else if(r==="style")e.style=es([e.style,i.style]);else if(la(r)){const s=e[r],o=i[r];o&&s!==o&&!(He(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Un(t,e,n,i=null){Pn(t,e,7,[n,i])}const Vg=Eh();let Gg=0;function Wg(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||Vg,s={uid:Gg++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ld(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ph(i,r),emitsOptions:Th(i,r),emit:null,emitted:null,propsDefaults:pt,inheritAttrs:i.inheritAttrs,ctx:pt,data:pt,props:pt,attrs:pt,slots:pt,refs:pt,setupState:pt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=yg.bind(null,s),t.ce&&t.ce(s),s}let Ot=null;const Zc=()=>Ot||Bt;let ea,Ul;{const t=da(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ea=e("__VUE_INSTANCE_SETTERS__",n=>Ot=n),Ul=e("__VUE_SSR_SETTERS__",n=>qr=n)}const qs=t=>{const e=Ot;return ea(t),t.scope.on(),()=>{t.scope.off(),ea(e)}},Bu=()=>{Ot&&Ot.scope.off(),ea(null)};function kh(t){return t.vnode.shapeFlag&4}let qr=!1;function Xg(t,e=!1,n=!1){e&&Ul(e);const{props:i,children:r}=t.vnode,s=kh(t);wg(t,i,s,e),Ig(t,r,n||e);const o=s?qg(t,e):void 0;return e&&Ul(!1),o}function qg(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,dg);const{setup:i}=n;if(i){li();const r=t.setupContext=i.length>1?Yg(t):null,s=qs(t),o=Gs(i,t,0,[t.props,r]),a=Ad(o);if(ci(),s(),(a||t.sp)&&!Br(t)&&qc(t),a){if(o.then(Bu,Bu),e)return o.then(l=>{ku(t,l)}).catch(l=>{Ws(l,t,0)});t.asyncDep=o}else ku(t,o)}else zh(t)}function ku(t,e,n){$e(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:dt(e)&&(t.setupState=Jd(e)),zh(t)}function zh(t,e,n){const i=t.type;t.render||(t.render=i.render||Vn);{const r=qs(t);li();try{hg(t)}finally{ci(),r()}}}const $g={get(t,e){return Vt(t,"get",""),t[e]}};function Yg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,$g),slots:t.slots,emit:t.emit,expose:e}}function va(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Jd(Vc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Es)return Es[n](t)},has(e,n){return n in e||n in Es}})):t.proxy}function jg(t,e=!0){return $e(t)?t.displayName||t.name:t.name||e&&t.__name}function Kg(t){return $e(t)&&"__vccOpts"in t}const ke=(t,e)=>Om(t,e,qr);function Jc(t,e,n){try{Jo(-1);const i=arguments.length;return i===2?dt(e)&&!He(e)?Ls(e)?Ct(t,null,[e]):Ct(t,e):Ct(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Ls(n)&&(n=[n]),Ct(t,e,n))}finally{Jo(1)}}const Zg="3.5.26";let Nl;const zu=typeof window<"u"&&window.trustedTypes;if(zu)try{Nl=zu.createPolicy("vue",{createHTML:t=>t})}catch{}const Hh=Nl?t=>Nl.createHTML(t):t=>t,Jg="http://www.w3.org/2000/svg",Qg="http://www.w3.org/1998/Math/MathML",ei=typeof document<"u"?document:null,Hu=ei&&ei.createElement("template"),e_={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ei.createElementNS(Jg,t):e==="mathml"?ei.createElementNS(Qg,t):n?ei.createElement(t,{is:n}):ei.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ei.createTextNode(t),createComment:t=>ei.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ei.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Hu.innerHTML=Hh(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Hu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},pi="transition",os="animation",Us=Symbol("_vtc"),Vh={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},t_=Ft({},fh,Vh),n_=t=>(t.displayName="Transition",t.props=t_,t),i_=n_((t,{slots:e})=>Jc(Jm,r_(t),e)),Hi=(t,e=[])=>{He(t)?t.forEach(n=>n(...e)):t&&t(...e)},Vu=t=>t?He(t)?t.some(e=>e.length>1):t.length>1:!1;function r_(t){const e={};for(const z in t)z in Vh||(e[z]=t[z]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=s_(r),_=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:A,onEnterCancelled:S,onLeave:b,onLeaveCancelled:C,onBeforeAppear:P=p,onAppear:I=A,onAppearCancelled:L=S}=e,y=(z,q,G,j)=>{z._enterCancelled=j,Vi(z,q?u:a),Vi(z,q?c:o),G&&G()},M=(z,q)=>{z._isLeaving=!1,Vi(z,f),Vi(z,h),Vi(z,d),q&&q()},R=z=>(q,G)=>{const j=z?I:A,$=()=>y(q,z,G);Hi(j,[q,$]),Gu(()=>{Vi(q,z?l:s),qn(q,z?u:a),Vu(j)||Wu(q,i,_,$)})};return Ft(e,{onBeforeEnter(z){Hi(p,[z]),qn(z,s),qn(z,o)},onBeforeAppear(z){Hi(P,[z]),qn(z,l),qn(z,c)},onEnter:R(!1),onAppear:R(!0),onLeave(z,q){z._isLeaving=!0;const G=()=>M(z,q);qn(z,f),z._enterCancelled?(qn(z,d),$u(z)):($u(z),qn(z,d)),Gu(()=>{z._isLeaving&&(Vi(z,f),qn(z,h),Vu(b)||Wu(z,i,m,G))}),Hi(b,[z,G])},onEnterCancelled(z){y(z,!1,void 0,!0),Hi(S,[z])},onAppearCancelled(z){y(z,!0,void 0,!0),Hi(L,[z])},onLeaveCancelled(z){M(z),Hi(C,[z])}})}function s_(t){if(t==null)return null;if(dt(t))return[Fa(t.enter),Fa(t.leave)];{const e=Fa(t);return[e,e]}}function Fa(t){return nm(t)}function qn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Us]||(t[Us]=new Set)).add(e)}function Vi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Us];n&&(n.delete(e),n.size||(t[Us]=void 0))}function Gu(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let o_=0;function Wu(t,e,n,i){const r=t._endId=++o_,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=a_(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function a_(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${pi}Delay`),s=i(`${pi}Duration`),o=Xu(r,s),a=i(`${os}Delay`),l=i(`${os}Duration`),c=Xu(a,l);let u=null,f=0,d=0;e===pi?o>0&&(u=pi,f=o,d=s.length):e===os?c>0&&(u=os,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?pi:os:null,d=u?u===pi?s.length:l.length:0);const h=u===pi&&/\b(?:transform|all)(?:,|$)/.test(i(`${pi}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function Xu(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>qu(n)+qu(t[i])))}function qu(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function $u(t){return(t?t.ownerDocument:document).body.offsetHeight}function l_(t,e,n){const i=t[Us];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ta=Symbol("_vod"),Gh=Symbol("_vsh"),JA={name:"show",beforeMount(t,{value:e},{transition:n}){t[ta]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):as(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),as(t,!0),i.enter(t)):i.leave(t,()=>{as(t,!1)}):as(t,e))},beforeUnmount(t,{value:e}){as(t,e)}};function as(t,e){t.style.display=e?t[ta]:"none",t[Gh]=!e}const c_=Symbol(""),u_=/(?:^|;)\s*display\s*:/;function f_(t,e,n){const i=t.style,r=St(n);let s=!1;if(n&&!r){if(e)if(St(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Bo(i,a,"")}else for(const o in e)n[o]==null&&Bo(i,o,"");for(const o in n)o==="display"&&(s=!0),Bo(i,o,n[o])}else if(r){if(e!==n){const o=i[c_];o&&(n+=";"+o),i.cssText=n,s=u_.test(n)}}else e&&t.removeAttribute("style");ta in t&&(t[ta]=s?i.display:"",t[Gh]&&(i.display="none"))}const Yu=/\s*!important$/;function Bo(t,e,n){if(He(n))n.forEach(i=>Bo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=d_(t,e);Yu.test(n)?t.setProperty(Fi(i),n.replace(Yu,""),"important"):t[i]=n}}const ju=["Webkit","Moz","ms"],Oa={};function d_(t,e){const n=Oa[e];if(n)return n;let i=yn(e);if(i!=="filter"&&i in t)return Oa[e]=i;i=fa(i);for(let r=0;r<ju.length;r++){const s=ju[r]+i;if(s in t)return Oa[e]=s}return e}const Ku="http://www.w3.org/1999/xlink";function Zu(t,e,n,i,r,s=lm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Ku,e.slice(6,e.length)):t.setAttributeNS(Ku,e,n):n==null||s&&!Pd(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Rn(n)?String(n):n)}function Ju(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hh(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Pd(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function Qi(t,e,n,i){t.addEventListener(e,n,i)}function h_(t,e,n,i){t.removeEventListener(e,n,i)}const Qu=Symbol("_vei");function p_(t,e,n,i,r=null){const s=t[Qu]||(t[Qu]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=m_(e);if(i){const c=s[e]=v_(i,r);Qi(t,a,c,l)}else o&&(h_(t,a,o,l),s[e]=void 0)}}const ef=/(?:Once|Passive|Capture)$/;function m_(t){let e;if(ef.test(t)){e={};let i;for(;i=t.match(ef);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fi(t.slice(2)),e]}let Ba=0;const g_=Promise.resolve(),__=()=>Ba||(g_.then(()=>Ba=0),Ba=Date.now());function v_(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Pn(x_(i,n.value),e,5,[i])};return n.value=t,n.attached=__(),n}function x_(t,e){if(He(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,b_=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?l_(t,i,o):e==="style"?f_(t,n,i):la(e)?Lc(e)||p_(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):y_(t,e,i,o))?(Ju(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Zu(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!St(i))?Ju(t,yn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),Zu(t,e,i,o))};function y_(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&tf(e)&&$e(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return tf(e)&&St(n)?!1:e in t}const na=t=>{const e=t.props["onUpdate:modelValue"]||!1;return He(e)?n=>Lo(e,n):e};function S_(t){t.target.composing=!0}function nf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const kr=Symbol("_assign");function rf(t,e,n){return e&&(t=t.trim()),n&&(t=Nc(t)),t}const M_={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[kr]=na(r);const s=i||r.props&&r.props.type==="number";Qi(t,e?"change":"input",o=>{o.target.composing||t[kr](rf(t.value,n,s))}),(n||s)&&Qi(t,"change",()=>{t.value=rf(t.value,n,s)}),e||(Qi(t,"compositionstart",S_),Qi(t,"compositionend",nf),Qi(t,"change",nf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[kr]=na(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Nc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},E_={created(t,{value:e},n){t.checked=Xo(e,n.props.value),t[kr]=na(n),Qi(t,"change",()=>{t[kr](T_(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[kr]=na(i),e!==n&&(t.checked=Xo(e,i.props.value))}};function T_(t){return"_value"in t?t._value:t.value}const A_=["ctrl","shift","alt","meta"],w_={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>A_.some(n=>t[`${n}Key`]&&!e.includes(n))},R_=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=w_[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},C_={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},P_=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=Fi(r.key);if(e.some(o=>o===s||C_[o]===s))return t(r)}))},I_=Ft({patchProp:b_},e_);let sf;function D_(){return sf||(sf=Lg(I_))}const L_=((...t)=>{const e=D_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=N_(i);if(!r)return;const s=e._component;!$e(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,U_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function U_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function N_(t){return St(t)?document.querySelector(t):t}let Wh;const xa=t=>Wh=t,Xh=Symbol();function Fl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var As;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(As||(As={}));function F_(){const t=Ud(!0),e=t.run(()=>_t({}));let n=[],i=[];const r=Vc({install(s){xa(r),r._a=s,s.provide(Xh,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const qh=()=>{};function of(t,e,n,i=qh){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Nd()&&um(r),r}function dr(t,...e){t.slice().forEach(n=>{n(...e)})}const O_=t=>t(),af=Symbol(),ka=Symbol();function Ol(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Fl(r)&&Fl(i)&&t.hasOwnProperty(n)&&!Tt(i)&&!si(i)?t[n]=Ol(r,i):t[n]=i}return t}const B_=Symbol();function k_(t){return!Fl(t)||!t.hasOwnProperty(B_)}const{assign:Si}=Object;function z_(t){return!!(Tt(t)&&t.effect)}function H_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Lm(n.state.value[t]);return Si(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=Vc(ke(()=>{xa(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=$h(t,c,e,n,i,!0),l}function $h(t,e,n={},i,r,s){let o;const a=Si({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),_t({});let _;function m(L){let y;c=u=!1,typeof L=="function"?(L(i.state.value[t]),y={type:As.patchFunction,storeId:t,events:h}):(Ol(i.state.value[t],L),y={type:As.patchObject,payload:L,storeId:t,events:h});const M=_=Symbol();Gc().then(()=>{_===M&&(c=!0)}),u=!0,dr(f,y,i.state.value[t])}const p=s?function(){const{state:y}=n,M=y?y():{};this.$patch(R=>{Si(R,M)})}:qh;function A(){o.stop(),f=[],d=[],i._s.delete(t)}const S=(L,y="")=>{if(af in L)return L[ka]=y,L;const M=function(){xa(i);const R=Array.from(arguments),z=[],q=[];function G(H){z.push(H)}function j(H){q.push(H)}dr(d,{args:R,name:M[ka],store:C,after:G,onError:j});let $;try{$=L.apply(this&&this.$id===t?this:C,R)}catch(H){throw dr(q,H),H}return $ instanceof Promise?$.then(H=>(dr(z,H),H)).catch(H=>(dr(q,H),Promise.reject(H))):(dr(z,$),$)};return M[af]=!0,M[ka]=y,M},b={_p:i,$id:t,$onAction:of.bind(null,d),$patch:m,$reset:p,$subscribe(L,y={}){const M=of(f,L,y.detached,()=>R()),R=o.run(()=>Or(()=>i.state.value[t],z=>{(y.flush==="sync"?u:c)&&L({storeId:t,type:As.direct,events:h},z)},Si({},l,y)));return M},$dispose:A},C=Vs(b);i._s.set(t,C);const I=(i._a&&i._a.runWithContext||O_)(()=>i._e.run(()=>(o=Ud()).run(()=>e({action:S}))));for(const L in I){const y=I[L];if(Tt(y)&&!z_(y)||si(y))s||(g&&k_(y)&&(Tt(y)?y.value=g[L]:Ol(y,g[L])),i.state.value[t][L]=y);else if(typeof y=="function"){const M=S(y,L);I[L]=M,a.actions[L]=y}}return Si(C,I),Si(it(C),I),Object.defineProperty(C,"$state",{get:()=>i.state.value[t],set:L=>{m(y=>{Si(y,L)})}}),i._p.forEach(L=>{Si(C,o.run(()=>L({store:C,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(C.$state,g),c=!0,u=!0,C}function Yh(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=Gm();return a=a||(c?bn(Xh,null):null),a&&xa(a),a=Wh,a._s.has(i)||(s?$h(i,e,r,a):H_(i,r,a)),a._s.get(i)}return o.$id=i,o}const jh=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},V_={};function G_(t,e){const n=ug("RouterView");return Ne(),an(n)}const W_=jh(V_,[["render",G_]]);const Dr=typeof document<"u";function Kh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function X_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Kh(t.default)}const at=Object.assign;function za(t,e){const n={};for(const i in e){const r=e[i];n[i]=In(r)?r.map(t):t(r)}return n}const ws=()=>{},In=Array.isArray;function lf(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const Zh=/#/g,q_=/&/g,$_=/\//g,Y_=/=/g,j_=/\?/g,Jh=/\+/g,K_=/%5B/g,Z_=/%5D/g,Qh=/%5E/g,J_=/%60/g,ep=/%7B/g,Q_=/%7C/g,tp=/%7D/g,e0=/%20/g;function Qc(t){return t==null?"":encodeURI(""+t).replace(Q_,"|").replace(K_,"[").replace(Z_,"]")}function t0(t){return Qc(t).replace(ep,"{").replace(tp,"}").replace(Qh,"^")}function Bl(t){return Qc(t).replace(Jh,"%2B").replace(e0,"+").replace(Zh,"%23").replace(q_,"%26").replace(J_,"`").replace(ep,"{").replace(tp,"}").replace(Qh,"^")}function n0(t){return Bl(t).replace(Y_,"%3D")}function i0(t){return Qc(t).replace(Zh,"%23").replace(j_,"%3F")}function r0(t){return i0(t).replace($_,"%2F")}function Ns(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const s0=/\/$/,o0=t=>t.replace(s0,"");function Ha(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=u0(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Ns(o)}}function a0(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function cf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function l0(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&$r(e.matched[i],n.matched[r])&&np(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function $r(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function np(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!c0(t[n],e[n]))return!1;return!0}function c0(t,e){return In(t)?uf(t,e):In(e)?uf(e,t):t?.valueOf()===e?.valueOf()}function uf(t,e){return In(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function u0(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const mi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let kl=(function(t){return t.pop="pop",t.push="push",t})({}),Va=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function f0(t){if(!t)if(Dr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),o0(t)}const d0=/^[^#]+#/;function h0(t,e){return t.replace(d0,"#")+e}function p0(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const ba=()=>({left:window.scrollX,top:window.scrollY});function m0(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=p0(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ff(t,e){return(history.state?history.state.position-e:-1)+t}const zl=new Map;function g0(t,e){zl.set(t,e)}function _0(t){const e=zl.get(t);return zl.delete(t),e}function v0(t){return typeof t=="string"||t&&typeof t=="object"}function ip(t){return typeof t=="string"||typeof t=="symbol"}let Et=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const rp=Symbol("");Et.MATCHER_NOT_FOUND+"",Et.NAVIGATION_GUARD_REDIRECT+"",Et.NAVIGATION_ABORTED+"",Et.NAVIGATION_CANCELLED+"",Et.NAVIGATION_DUPLICATED+"";function Yr(t,e){return at(new Error,{type:t,[rp]:!0},e)}function $n(t,e){return t instanceof Error&&rp in t&&(e==null||!!(t.type&e))}const x0=["params","query","hash"];function b0(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of x0)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function y0(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(Jh," "),s=r.indexOf("="),o=Ns(s<0?r:r.slice(0,s)),a=s<0?null:Ns(r.slice(s+1));if(o in e){let l=e[o];In(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function df(t){let e="";for(let n in t){const i=t[n];if(n=n0(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(In(i)?i.map(r=>r&&Bl(r)):[i&&Bl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function S0(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=In(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const M0=Symbol(""),hf=Symbol(""),ya=Symbol(""),eu=Symbol(""),Hl=Symbol("");function ls(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ai(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(Yr(Et.NAVIGATION_ABORTED,{from:n,to:e})):d instanceof Error?l(d):v0(d)?l(Yr(Et.NAVIGATION_GUARD_REDIRECT,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function Ga(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Kh(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ai(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=X_(u)?u.default:u;o.mods[a]=u,o.components[a]=f;const d=(f.__vccOpts||f)[e];return d&&Ai(d,n,i,o,a,r)()}))}}return s}function E0(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>$r(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>$r(c,l))||r.push(l))}return[n,i,r]}let T0=()=>location.protocol+"//"+location.host;function sp(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),cf(a,"")}return cf(n,t)+i+r}function A0(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=sp(t,location),g=n.value,_=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=_?d.position-_.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:kl.pop,direction:m?m>0?Va.forward:Va.back:Va.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){if(document.visibilityState==="hidden"){const{history:d}=window;if(!d.state)return;d.replaceState(at({},d.state,{scroll:ba()}),"")}}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:f}}function pf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?ba():null}}function w0(t){const{history:e,location:n}=window,i={value:sp(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:T0()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){s(l,at({},e.state,pf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=at({},r.value,e.state,{forward:l,scroll:ba()});s(u.current,u,!0),s(l,at({},pf(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function R0(t){t=f0(t);const e=w0(t),n=A0(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=at({location:"",base:t,go:i,createHref:h0.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let nr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Pt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Pt||{});const C0={type:nr.Static,value:""},P0=/[a-zA-Z0-9_]/;function I0(t){if(!t)return[[]];if(t==="/")return[[C0]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=Pt.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===Pt.Static?s.push({type:nr.Static,value:c}):n===Pt.Param||n===Pt.ParamRegExp||n===Pt.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:nr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Pt.ParamRegExp){i=n,n=Pt.EscapeNext;continue}switch(n){case Pt.Static:l==="/"?(c&&f(),o()):l===":"?(f(),n=Pt.Param):d();break;case Pt.EscapeNext:d(),n=i;break;case Pt.Param:l==="("?n=Pt.ParamRegExp:P0.test(l)?d():(f(),n=Pt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Pt.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Pt.ParamRegExpEnd:u+=l;break;case Pt.ParamRegExpEnd:f(),n=Pt.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Pt.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}const mf="[^/]+?",D0={sensitive:!1,strict:!1,start:!0,end:!0};var Kt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Kt||{});const L0=/[.+*?^${}()[\]/\\]/g;function U0(t,e){const n=at({},D0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[Kt.Root];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=Kt.Segment+(n.sensitive?Kt.BonusCaseSensitive:0);if(d.type===nr.Static)f||(r+="/"),r+=d.value.replace(L0,"\\$&"),h+=Kt.Static;else if(d.type===nr.Param){const{value:g,repeatable:_,optional:m,regexp:p}=d;s.push({name:g,repeatable:_,optional:m});const A=p||mf;if(A!==mf){h+=Kt.BonusCustomRegExp;try{`${A}`}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${A}): `+b.message)}}let S=_?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;f||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,h+=Kt.Dynamic,m&&(h+=Kt.BonusOptional),_&&(h+=Kt.BonusRepeatable),A===".*"&&(h+=Kt.BonusWildcard)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=Kt.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===nr.Static)u+=h.value;else if(h.type===nr.Param){const{value:g,repeatable:_,optional:m}=h,p=g in c?c[g]:"";if(In(p)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const A=In(p)?p.join("/"):p;if(!A)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=A}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function N0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===Kt.Static+Kt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Kt.Static+Kt.Segment?1:-1:0}function op(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=N0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(gf(i))return 1;if(gf(r))return-1}return r.length-i.length}function gf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const F0={strict:!1,end:!0,sensitive:!1};function O0(t,e,n){const i=U0(I0(t.path),n),r=at(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function B0(t,e){const n=[],i=new Map;e=lf(F0,e);function r(f){return i.get(f)}function s(f,d,h){const g=!h,_=vf(f);_.aliasOf=h&&h.record;const m=lf(e,f),p=[_];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const C of b)p.push(vf(at({},_,{components:h?h.record.components:_.components,path:C,aliasOf:h?h.record:_})))}let A,S;for(const b of p){const{path:C}=b;if(d&&C[0]!=="/"){const P=d.record.path,I=P[P.length-1]==="/"?"":"/";b.path=d.record.path+(C&&I+C)}if(A=O0(b,d,m),h?h.alias.push(A):(S=S||A,S!==A&&S.alias.push(A),g&&f.name&&!xf(A)&&o(f.name)),ap(A)&&l(A),_.children){const P=_.children;for(let I=0;I<P.length;I++)s(P[I],A,h&&h.children[I])}h=h||A}return S?()=>{o(S)}:ws}function o(f){if(ip(f)){const d=i.get(f);d&&(i.delete(f),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(f);d>-1&&(n.splice(d,1),f.record.name&&i.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const d=H0(f,n);n.splice(d,0,f),f.record.name&&!xf(f)&&i.set(f.record.name,f)}function c(f,d){let h,g={},_,m;if("name"in f&&f.name){if(h=i.get(f.name),!h)throw Yr(Et.MATCHER_NOT_FOUND,{location:f});m=h.record.name,g=at(_f(d.params,h.keys.filter(S=>!S.optional).concat(h.parent?h.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),f.params&&_f(f.params,h.keys.map(S=>S.name))),_=h.stringify(g)}else if(f.path!=null)_=f.path,h=n.find(S=>S.re.test(_)),h&&(g=h.parse(_),m=h.record.name);else{if(h=d.name?i.get(d.name):n.find(S=>S.re.test(d.path)),!h)throw Yr(Et.MATCHER_NOT_FOUND,{location:f,currentLocation:d});m=h.record.name,g=at({},d.params,f.params),_=h.stringify(g)}const p=[];let A=h;for(;A;)p.unshift(A.record),A=A.parent;return{name:m,path:_,params:g,matched:p,meta:z0(p)}}t.forEach(f=>s(f));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function _f(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function vf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:k0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function k0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function xf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function z0(t){return t.reduce((e,n)=>at(e,n.meta),{})}function H0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;op(t,e[s])<0?i=s:n=s+1}const r=V0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function V0(t){let e=t;for(;e=e.parent;)if(ap(e)&&op(t,e)===0)return e}function ap({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function bf(t){const e=bn(ya),n=bn(eu),i=ke(()=>{const l=ln(t.to);return e.resolve(l)}),r=ke(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex($r.bind(null,u));if(d>-1)return d;const h=yf(l[c-2]);return c>1&&yf(u)===h&&f[f.length-1].path!==h?f.findIndex($r.bind(null,l[c-2])):d}),s=ke(()=>r.value>-1&&$0(n.params,i.value.params)),o=ke(()=>r.value>-1&&r.value===n.matched.length-1&&np(n.params,i.value.params));function a(l={}){if(q0(l)){const c=e[ln(t.replace)?"replace":"push"](ln(t.to)).catch(ws);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ke(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function G0(t){return t.length===1?t[0]:t}const W0=dn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bf,setup(t,{slots:e}){const n=Vs(bf(t)),{options:i}=bn(ya),r=ke(()=>({[Sf(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Sf(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&G0(e.default(n));return t.custom?s:Jc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),X0=W0;function q0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function $0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!In(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Sf=(t,e,n)=>t??e??n,Y0=dn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=bn(Hl),r=ke(()=>t.route||i.value),s=bn(hf,0),o=ke(()=>{let c=ln(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=ke(()=>r.value.matched[o.value]);Uo(hf,ke(()=>o.value+1)),Uo(M0,a),Uo(Hl,r);const l=_t();return Or(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!$r(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return Mf(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Jc(d,at({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return Mf(n.default,{Component:m,route:c})||m}}});function Mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const j0=Y0;function K0(t){const e=B0(t.routes,t),n=t.parseQuery||y0,i=t.stringifyQuery||df,r=t.history,s=ls(),o=ls(),a=ls(),l=Pm(mi);let c=mi;Dr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=za.bind(null,F=>""+F),f=za.bind(null,r0),d=za.bind(null,Ns);function h(F,se){let re,fe;return ip(F)?(re=e.getRecordMatcher(F),fe=se):fe=F,e.addRoute(fe,re)}function g(F){const se=e.getRecordMatcher(F);se&&e.removeRoute(se)}function _(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function p(F,se){if(se=at({},se||l.value),typeof F=="string"){const O=Ha(n,F,se.path),D=e.resolve({path:O.path},se),Y=r.createHref(O.fullPath);return at(O,D,{params:d(D.params),hash:Ns(O.hash),redirectedFrom:void 0,href:Y})}let re;if(F.path!=null)re=at({},F,{path:Ha(n,F.path,se.path).path});else{const O=at({},F.params);for(const D in O)O[D]==null&&delete O[D];re=at({},F,{params:f(O)}),se.params=f(se.params)}const fe=e.resolve(re,se),Le=F.hash||"";fe.params=u(d(fe.params));const w=a0(i,at({},F,{hash:t0(Le),path:fe.path})),v=r.createHref(w);return at({fullPath:w,hash:Le,query:i===df?S0(F.query):F.query||{}},fe,{redirectedFrom:void 0,href:v})}function A(F){return typeof F=="string"?Ha(n,F,l.value.path):at({},F)}function S(F,se){if(c!==F)return Yr(Et.NAVIGATION_CANCELLED,{from:se,to:F})}function b(F){return I(F)}function C(F){return b(at(A(F),{replace:!0}))}function P(F,se){const re=F.matched[F.matched.length-1];if(re&&re.redirect){const{redirect:fe}=re;let Le=typeof fe=="function"?fe(F,se):fe;return typeof Le=="string"&&(Le=Le.includes("?")||Le.includes("#")?Le=A(Le):{path:Le},Le.params={}),at({query:F.query,hash:F.hash,params:Le.path!=null?{}:F.params},Le)}}function I(F,se){const re=c=p(F),fe=l.value,Le=F.state,w=F.force,v=F.replace===!0,O=P(re,fe);if(O)return I(at(A(O),{state:typeof O=="object"?at({},Le,O.state):Le,force:w,replace:v}),se||re);const D=re;D.redirectedFrom=se;let Y;return!w&&l0(i,fe,re)&&(Y=Yr(Et.NAVIGATION_DUPLICATED,{to:D,from:fe}),ve(fe,fe,!0,!1)),(Y?Promise.resolve(Y):M(D,fe)).catch(X=>$n(X)?$n(X,Et.NAVIGATION_GUARD_REDIRECT)?X:ue(X):U(X,D,fe)).then(X=>{if(X){if($n(X,Et.NAVIGATION_GUARD_REDIRECT))return I(at({replace:v},A(X.to),{state:typeof X.to=="object"?at({},Le,X.to.state):Le,force:w}),se||D)}else X=z(D,fe,!0,v,Le);return R(D,fe,X),X})}function L(F,se){const re=S(F,se);return re?Promise.reject(re):Promise.resolve()}function y(F){const se=Ve.values().next().value;return se&&typeof se.runWithContext=="function"?se.runWithContext(F):F()}function M(F,se){let re;const[fe,Le,w]=E0(F,se);re=Ga(fe.reverse(),"beforeRouteLeave",F,se);for(const O of fe)O.leaveGuards.forEach(D=>{re.push(Ai(D,F,se))});const v=L.bind(null,F,se);return re.push(v),me(re).then(()=>{re=[];for(const O of s.list())re.push(Ai(O,F,se));return re.push(v),me(re)}).then(()=>{re=Ga(Le,"beforeRouteUpdate",F,se);for(const O of Le)O.updateGuards.forEach(D=>{re.push(Ai(D,F,se))});return re.push(v),me(re)}).then(()=>{re=[];for(const O of w)if(O.beforeEnter)if(In(O.beforeEnter))for(const D of O.beforeEnter)re.push(Ai(D,F,se));else re.push(Ai(O.beforeEnter,F,se));return re.push(v),me(re)}).then(()=>(F.matched.forEach(O=>O.enterCallbacks={}),re=Ga(w,"beforeRouteEnter",F,se,y),re.push(v),me(re))).then(()=>{re=[];for(const O of o.list())re.push(Ai(O,F,se));return re.push(v),me(re)}).catch(O=>$n(O,Et.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function R(F,se,re){a.list().forEach(fe=>y(()=>fe(F,se,re)))}function z(F,se,re,fe,Le){const w=S(F,se);if(w)return w;const v=se===mi,O=Dr?history.state:{};re&&(fe||v?r.replace(F.fullPath,at({scroll:v&&O&&O.scroll},Le)):r.push(F.fullPath,Le)),l.value=F,ve(F,se,re,v),ue()}let q;function G(){q||(q=r.listen((F,se,re)=>{if(!ne.listening)return;const fe=p(F),Le=P(fe,ne.currentRoute.value);if(Le){I(at(Le,{replace:!0,force:!0}),fe).catch(ws);return}c=fe;const w=l.value;Dr&&g0(ff(w.fullPath,re.delta),ba()),M(fe,w).catch(v=>$n(v,Et.NAVIGATION_ABORTED|Et.NAVIGATION_CANCELLED)?v:$n(v,Et.NAVIGATION_GUARD_REDIRECT)?(I(at(A(v.to),{force:!0}),fe).then(O=>{$n(O,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&!re.delta&&re.type===kl.pop&&r.go(-1,!1)}).catch(ws),Promise.reject()):(re.delta&&r.go(-re.delta,!1),U(v,fe,w))).then(v=>{v=v||z(fe,w,!1),v&&(re.delta&&!$n(v,Et.NAVIGATION_CANCELLED)?r.go(-re.delta,!1):re.type===kl.pop&&$n(v,Et.NAVIGATION_ABORTED|Et.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),R(fe,w,v)}).catch(ws)}))}let j=ls(),$=ls(),H;function U(F,se,re){ue(F);const fe=$.list();return fe.length?fe.forEach(Le=>Le(F,se,re)):console.error(F),Promise.reject(F)}function ie(){return H&&l.value!==mi?Promise.resolve():new Promise((F,se)=>{j.add([F,se])})}function ue(F){return H||(H=!F,G(),j.list().forEach(([se,re])=>F?re(F):se()),j.reset()),F}function ve(F,se,re,fe){const{scrollBehavior:Le}=t;if(!Dr||!Le)return Promise.resolve();const w=!re&&_0(ff(F.fullPath,0))||(fe||!re)&&history.state&&history.state.scroll||null;return Gc().then(()=>Le(F,se,w)).then(v=>v&&m0(v)).catch(v=>U(v,F,se))}const Se=F=>r.go(F);let Ze;const Ve=new Set,ne={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:_,resolve:p,options:t,push:b,replace:C,go:Se,back:()=>Se(-1),forward:()=>Se(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ie,install(F){F.component("RouterLink",X0),F.component("RouterView",j0),F.config.globalProperties.$router=ne,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>ln(l)}),Dr&&!Ze&&l.value===mi&&(Ze=!0,b(r.location).catch(fe=>{}));const se={};for(const fe in mi)Object.defineProperty(se,fe,{get:()=>l.value[fe],enumerable:!0});F.provide(ya,ne),F.provide(eu,Kd(se)),F.provide(Hl,l);const re=F.unmount;Ve.add(F),F.unmount=function(){Ve.delete(F),Ve.size<1&&(c=mi,q&&q(),q=null,l.value=mi,Ze=!1,H=!1),re()}}};function me(F){return F.reduce((se,re)=>se.then(()=>y(re)),Promise.resolve())}return ne}function tu(){return bn(ya)}function Z0(t){return bn(eu)}const Wa="livefit.player";function J0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const lp=Yh("player",{state:()=>({name:""}),actions:{loadFromStorage(){const t=J0(localStorage.getItem(Wa));t?.name&&(this.name=t.name)},setName(t){this.name=t.trim(),localStorage.setItem(Wa,JSON.stringify({name:this.name}))},clear(){this.name="",localStorage.removeItem(Wa)}}}),Ef="livefit.progress";function Q0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const cp=Yh("progress",{state:()=>({currentChapter:1,chapterNodeIndices:{1:0}}),getters:{getNodeIndex:t=>e=>t.chapterNodeIndices[e]??0,chapter1NodeIndex:t=>t.chapterNodeIndices[1]??0},actions:{loadFromStorage(){const t=Q0(localStorage.getItem(Ef));t&&(typeof t.currentChapter=="number"&&(this.currentChapter=t.currentChapter),t.chapterNodeIndices&&(this.chapterNodeIndices=t.chapterNodeIndices),"chapter1NodeIndex"in t&&typeof t.chapter1NodeIndex=="number"&&(this.chapterNodeIndices[1]=t.chapter1NodeIndex))},setNodeIndex(t,e){this.chapterNodeIndices[t]=e,this._save()},setChapter1NodeIndex(t){this.setNodeIndex(1,t)},setCurrentChapter(t){this.currentChapter=t,t in this.chapterNodeIndices||(this.chapterNodeIndices[t]=0),this._save()},completeChapter(t){const e=t+1;this.currentChapter=e,e in this.chapterNodeIndices||(this.chapterNodeIndices[e]=0),this._save()},reset(){this.currentChapter=1,this.chapterNodeIndices={1:0},this._save()},_save(){localStorage.setItem(Ef,JSON.stringify({currentChapter:this.currentChapter,chapterNodeIndices:this.chapterNodeIndices}))}}}),ev=[{type:"dialogue",speaker:"海克絲",text:"早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我、我已經準備好要寫 Code 了！請問我現在該做什麼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"對了，我該怎麼稱呼你呢？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」
會員：「我想購買堂數方案，以便於取得點數來報名喜歡的課程。」
教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」
管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。",scene:"normal",coachExpression:"normal",image:"/images/content/swimlane.png"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"(眼神變得銳利) 看完之後，就來接受我的考試吧。",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的入職測驗",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"q2",prompt:"海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？",options:[{id:"a",label:"它是用來檢查程式碼錯誤的除錯工具"},{id:"b",label:"它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪"},{id:"c",label:"它是最後的裝潢，決定系統好不好看"}],correctOptionId:"b",explanation:"海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。"},{id:"q3",prompt:"為什麼海克絲建議在寫程式之前要先畫「線稿圖」？",options:[{id:"a",label:"為了讓介面看起來很漂亮，吸引投資人"},{id:"b",label:"為了測試程式碼的效能是否足夠"},{id:"c",label:"為了在開發前與團隊有共識，確保大家想的畫面是一樣的"}],correctOptionId:"c",explanation:"線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。"},{id:"q4",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"},{id:"q5",prompt:"海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？",options:[{id:"a",label:"會提早完成工作，可以準時下班"},{id:"b",label:"會寫出很多 Bug，甚至做白工"},{id:"c",label:"電腦會因為運算過度而過熱"}],correctOptionId:"b",explanation:"海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。"},{id:"q6",prompt:"線稿圖通常不包含下列哪項元素？",options:[{id:"a",label:"頁面佈局與按鈕位置"},{id:"b",label:"完整的視覺設計與高解析度圖片"},{id:"c",label:"基本的操作流程與連結"}],correctOptionId:"b",explanation:"線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。"},{id:"q7",prompt:"在閱讀泳道圖時，每一條「跑道」通常代表什麼？",options:[{id:"a",label:"不同的時間點"},{id:"b",label:"不同的參與角色或系統"},{id:"c",label:"不同的資料庫欄位"}],correctOptionId:"b",explanation:"泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。"},{id:"q8",prompt:"根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？",options:[{id:"a",label:"在註冊頁面直接勾選「我是教練」即可"},{id:"b",label:"必須付費購買「教練資格方案」"},{id:"c",label:"需要由「管理員 (Admin)」在後台將其升級為教練"}],correctOptionId:"c",explanation:"根據使用者故事，管理員負責「把一般使用者升級為教練」。"},{id:"q9",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"q10",prompt:"關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？",options:[{id:"a",label:"教練可以隨意刪除學員的帳號"},{id:"b",label:"教練可以查看月營收統計，了解指定月份的營收與學員參與概況"},{id:"c",label:"教練不能修改自己開設課程的時間或人數上限"}],correctOptionId:"b",explanation:"根據教練的使用者故事，教練可以查看月營收統計。"},{id:"q11",prompt:"根據使用者故事，未登入的「訪客」無法執行下列哪項動作？",options:[{id:"a",label:"瀏覽目前可參加的課程"},{id:"b",label:"查看教練的詳細介紹與專長"},{id:"c",label:"報名課程"}],correctOptionId:"c",explanation:"訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。"},{id:"q12",prompt:"「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？",options:[{id:"a",label:"幫會員修改密碼與個人頭像"},{id:"b",label:"管理技能清單與堂數方案的設定"},{id:"c",label:"代替教練進行直播授課"}],correctOptionId:"b",explanation:"管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。"},{id:"q13",prompt:"會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？",options:[{id:"a",label:"只能修改姓名"},{id:"b",label:"可以修改姓名與 Email"},{id:"c",label:"可以修改姓名、Email 與已購買的堂數"}],correctOptionId:"a",explanation:"根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。"},{id:"q14",prompt:"如果教練想要讓學員更容易找到自己，他可以使用什麼功能？",options:[{id:"a",label:"購買首頁廣告"},{id:"b",label:"設定自己的專長技能"},{id:"c",label:"寄送垃圾郵件給所有會員"}],correctOptionId:"b",explanation:"教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。"},{id:"q15",prompt:"當會員想要調整行程時，關於「取消課程」的敘述何者正確？",options:[{id:"a",label:"只要取消就能退回現金"},{id:"b",label:"取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）"},{id:"c",label:"報名後絕對無法取消"}],correctOptionId:"b",explanation:"取消課程後會釋出名額，堂數會依照規則退還或調整。"},{id:"q16",prompt:"教練在「編輯課程」時，可以調整哪些資訊？",options:[{id:"a",label:"只能調整課程名稱"},{id:"b",label:"課程內容、時間、人數上限、會議連結"},{id:"c",label:"學員的個人資料"}],correctOptionId:"b",explanation:"教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。"},{id:"q17",prompt:"LiveFit 平台的核心營運模式是什麼？",options:[{id:"a",label:"線下健身房的門禁管理系統"},{id:"b",label:"線上直播小班制健身平台"},{id:"c",label:"預錄影片的隨選視訊服務"}],correctOptionId:"b",explanation:"LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。"},{id:"q18",prompt:"根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？",options:[{id:"a",label:"查看教練詳情"},{id:"b",label:"查看我的堂數購買紀錄"},{id:"c",label:"修改個人資料"}],correctOptionId:"b",explanation:"會員可以透過「查看我的堂數購買紀錄」來了解過去的購買資訊。"},{id:"q19",prompt:"當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？",options:[{id:"a",label:"我的課程列表"},{id:"b",label:"月營收統計"},{id:"c",label:"技能清單"}],correctOptionId:"a",explanation:"教練透過「我的課程列表」可以查看課程狀態與報名人數。"},{id:"q20",prompt:"若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？",options:[{id:"a",label:"資深教練"},{id:"b",label:"系統管理員 (Admin)"},{id:"c",label:"任何註冊會員"}],correctOptionId:"b",explanation:"管理員負責管理堂數方案，包括新增、修改方案設定。"}]},{type:"dialogue",speaker:"海克絲",text:"很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天就先到這裡吧。回家好好休息，別熬夜。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第一天：報到日",scene:"normal",coachExpression:"normal"}],tv={id:1,title:"第一天：報到日",nodes:ev},nv=[{type:"dialogue",speaker:"海克絲",text:"早安！看起來精神不錯嘛，昨天有好好休息吧？",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"很好，有這個態度我就放心了。今天我們要正式進入開發環境了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"太好了！我已經準備好要寫程式了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 別急，在你動手寫任何一行程式之前，你得先學會一件事——如何把程式碼「拿到手」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"拿到手？不就是下載嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發的世界裡，我們用的是 Git 和 GitHub。這是每個工程師的必備技能。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"先來認識 Git 吧。Git 是一個「版本控制系統」，就像是程式碼的時光機。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"版本控制？像是報告_v1、報告_v2、報告_最終版那樣嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！Git 就是幫你自動管理這些版本，而且更聰明、更有條理。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 可以記錄每一次的修改歷史、讓你隨時回到過去的版本、也能讓多人同時協作開發。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"光說不練假把式！來，海姐帶你進互動實驗室，親手體驗一下 Git 的魔力。",scene:"meeting",coachExpression:"praise"},{type:"interactiveSlide",slideId:"git-intro",title:"Git 互動實驗室",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 Git 是這樣運作的，我懂了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 不錯嘛，有了這個基礎，接下來的概念對你來說就是小菜一碟了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那 GitHub 呢？它是一個「程式碼託管平台」，你可以把它想成程式碼的雲端硬碟。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以 Git 是工具，GitHub 是平台？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Git 裝在你的電腦上負責版本控制，GitHub 在網路上負責儲存和分享程式碼。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"接下來要介紹一個重要的操作：Clone。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Clone（克隆）就是把 GitHub 上的專案「下載到你的電腦」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"就像把雲端上的檔案抓到本地嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Clone 之後，你的電腦裡就會有一份完整的專案程式碼，可以開始修改和開發。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，現在讓我把 LiveFit 的專案連結給你⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等等，這⋯⋯什麼？！",scene:"meeting",coachExpression:"shocked"},{type:"dialogue",speaker:"海克絲",text:"這個專案竟然是 Public 的？！",scene:"meeting",coachExpression:"shocked",image:"/images/content/private-git.png"},{type:"dialogue",speaker:"你",text:"Public？那是什麼意思？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"Public 就是「公開」的意思。全世界任何人都可以看到這個專案的程式碼！",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"後端專案通常會設成 Private（私人），因為裡面可能有資料庫連線、API 金鑰等敏感資訊⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"前任後端⋯⋯竟然把專案完全公開在網路上⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"這樣很危險嗎？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"非常危險！如果程式碼有漏洞，駭客就能直接研究怎麼攻擊我們的系統。",scene:"meeting",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 算了，這就是我們接手的現況。之後記得幫我把敏感資訊處理好。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"現在先專心把專案抓下來吧，其他的之後再處理。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"好，理論講完了。來接受我的小考吧！",scene:"meeting",coachExpression:"normal"},{type:"quiz",title:"Git 與 GitHub 小考",scene:"meeting",coachExpression:"praise",questions:[{id:"g1",prompt:"Git 是什麼類型的工具？",options:[{id:"a",label:"版本控制系統"},{id:"b",label:"程式編輯器"},{id:"c",label:"雲端儲存平台"}],correctOptionId:"a",explanation:"Git 是一個版本控制系統，用來追蹤程式碼的修改歷史。"},{id:"g2",prompt:"GitHub 與 Git 的關係是什麼？",options:[{id:"a",label:"GitHub 是 Git 的付費版本"},{id:"b",label:"Git 是版本控制工具，GitHub 是託管平台"},{id:"c",label:"Git 和 GitHub 是同一個東西的不同名稱"}],correctOptionId:"b",explanation:"Git 是安裝在電腦上的版本控制工具，GitHub 是在網路上的程式碼託管平台。"},{id:"g3",prompt:"Clone 的作用是什麼？",options:[{id:"a",label:"把 GitHub 上的專案下載到本地電腦"},{id:"b",label:"把專案上傳到 GitHub"},{id:"c",label:"建立新的分支"}],correctOptionId:"a",explanation:"Clone 是把 GitHub 上的專案下載到你的本地電腦。"},{id:"g4",prompt:"Git 可以做到以下哪件事？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"記錄每一次的修改歷史，讓你可以回到過去的版本"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Git 可以記錄每一次的修改歷史，讓你隨時回到過去的版本。"},{id:"g5",prompt:"GitHub 上的 Public 專案代表什麼？",options:[{id:"a",label:"只有團隊成員可以看到"},{id:"b",label:"任何人都可以看到這個專案的程式碼"},{id:"c",label:"專案已經被刪除"}],correctOptionId:"b",explanation:"Public（公開）代表任何人都可以在網路上看到這個專案的程式碼。"},{id:"g6",prompt:"為什麼後端專案通常會設成 Private？",options:[{id:"a",label:"因為程式碼很醜不想被看到"},{id:"b",label:"避免程式碼漏洞被駭客研究、找到攻擊方式"},{id:"c",label:"因為 GitHub 強制要求"}],correctOptionId:"b",explanation:"後端專案設成 Private 可以避免程式碼被公開，減少駭客研究漏洞、找到攻擊方式的風險。"},{id:"g7",prompt:"Clone 完成後，專案會出現在哪裡？",options:[{id:"a",label:"你的 GitHub 帳號上"},{id:"b",label:"你的本機電腦上"},{id:"c",label:"雲端伺服器上"}],correctOptionId:"b",explanation:"Clone 會把專案下載到你的本機電腦上，讓你可以開始開發。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！看來你已經掌握 Git 和 GitHub 的基本概念了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 和 GitHub 是工程師的基本功，就像廚師要會用刀一樣。用久了就會變成直覺。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我會好好練習的！那接下來呢？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天先把專案拿到手，明天我們再來把它跑起來！記得好好休息。",scene:"meeting",coachExpression:"normal"},{type:"celebration",chapterTitle:"第二天：把程式碼拿到手",scene:"meeting",coachExpression:"normal"}],iv={id:2,title:"第二天：把程式碼拿到手",nodes:nv},rv=[{type:"dialogue",speaker:"海克絲",text:"早安！今天有個緊急狀況要跟你說。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"怎麼了？發生什麼事？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我的合夥人剛傳訊息來，說她這週想看看專案目前的進度。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"她不是工程師，但很在意產品能不能「跑起來」給她看。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"所以⋯⋯我們要把專案跑起來給她看？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！但在那之前，我想先考考你⋯⋯",scene:"sport",coachExpression:"normal"},{type:"choice",prompt:"你猜猜看，一個後端工程師剛進入新公司，最常見要做的第一件事是什麼？",options:[{id:"a",label:"馬上開始寫新功能",response:"(捧腹大笑) 哈哈哈！太急了！你連專案長什麼樣子都不知道，怎麼寫新功能呢？",responseExpression:"biglaugh",isCorrect:!1},{id:"b",label:"把專案 Clone 下來，跑在自己的電腦上",response:"答對了！這才是正確的第一步。你得先把專案跑起來，才能開始理解它、修改它。",responseExpression:"praise",isCorrect:!0},{id:"c",label:"直接看程式碼找 Bug",response:"(忍不住笑出來) 哈哈，想法不錯，但你連專案都還沒跑起來，怎麼知道哪裡有 Bug？先讓它動起來才是王道。",responseExpression:"biglaugh",isCorrect:!1},{id:"d",label:"先去跟同事聊天認識環境",response:"(噗哧一笑) 社交很重要沒錯！但工程師的第一要務還是要先把開發環境搞定，才能真正開始工作啊。",responseExpression:"biglaugh",isCorrect:!1}],scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，既然要把專案跑起來，你得先搞懂這個專案到底是怎麼組成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"一個完整的系統通常有三大部分：前端、後端、還有資料庫。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"前端？後端？這三個有什麼不同？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用電商網站來比喻。前端就像是網頁商城的頁面，商品展示、購物車、結帳畫面，是使用者看得到的部分。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"後端就像是訂單處理中心，使用者看不到，但所有的訂單處理、庫存檢查、付款驗證都是在這裡完成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"資料庫就像是商品倉庫，存放所有的會員資料、訂單紀錄、商品庫存。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此！所以前端負責畫面，後端負責處理邏輯，資料庫負責存資料？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！你理解得很快嘛。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"來，我用互動的方式讓你更清楚這三層架構是怎麼運作的！",scene:"sport",coachExpression:"normal"},{type:"interactiveSlide",slideId:"architecture-intro",title:"系統架構入門",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在對前端、後端、資料庫的分工應該很清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"我們的 LiveFit 專案呢，前端用 Vue.js 寫的，後端是 Node.js，資料庫用 PostgreSQL。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"這麼多東西，要怎麼在我的電腦上跑起來？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好問題！這就要講到一個神奇的工具——Docker。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發中，最常見的問題就是：「在我的電腦上可以跑啊！為什麼換一台電腦就壞掉了？」",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"聽起來很麻煩⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Docker 就是來解決這個問題的！它可以把整個執行環境打包成一個「容器」。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"想像你要搬家，與其把東西一件一件搬，不如把整個房間打包成一個貨櫃。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"不管搬到哪裡，打開貨櫃就是一模一樣的環境！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"哦！所以 Docker 就像是幫程式打包好的貨櫃？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！而且前任後端雖然把專案搞得一團糟，但至少有一件事做對了⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他用 Docker 把整個環境打包好了。只要你安裝 Docker，一個指令就能把三個服務全部跑起來！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"三個服務？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對，前端、後端、資料庫，各自跑在一個容器裡，但可以互相溝通。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"來，我帶你用互動的方式理解 Docker 的運作原理！",scene:"sport",coachExpression:"praise"},{type:"interactiveSlide",slideId:"docker-intro",title:"Docker 互動實驗室",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在應該對 Docker 和容器的概念更清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我很久以前就想問了⋯⋯海姐，你不是健身房老闆嗎？為什麼感覺懂得比我還多？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 哈，終於問了啊。",scene:"sport",coachExpression:"blush"},{type:"dialogue",speaker:"海克絲",text:"其實我以前是工程師，還當過全端技術主管呢。寫了快十年的 Code。",scene:"sport",coachExpression:"proud"},{type:"dialogue",speaker:"你",text:"什麼！？那為什麼會轉行開健身房？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實我以前重訓也當過瑜伽老師，後來想說來挑戰看看，把兩個專業結合起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"工程師的經驗讓我知道怎麼設計系統，健身教練的經驗讓我知道怎麼照顧人。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"所以就開了這間健身房，想做一個真正能幫助人的運動媒合平台。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來是這樣⋯⋯難怪你講這些技術東西這麼順。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕笑) 所以啊，你要是敢給我爆肝加班，我可是會直接把你從電腦前拖走的喔。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"好、好的！我會注意的⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，基本概念講完了。來驗收一下你學到了多少！",scene:"sport",coachExpression:"normal"},{type:"quiz",title:"前後端與 Docker 小考",scene:"sport",coachExpression:"praise",questions:[{id:"d1",prompt:"前端的主要職責是什麼？",options:[{id:"a",label:"使用者看到的畫面，負責互動與呈現"},{id:"b",label:"處理商業邏輯和資料運算"},{id:"c",label:"儲存所有的資料"}],correctOptionId:"a",explanation:"前端負責使用者看到的畫面，處理互動與呈現。"},{id:"d2",prompt:"後端的主要職責是什麼？",options:[{id:"a",label:"設計漂亮的使用者介面"},{id:"b",label:"處理商業邏輯，決定要做什麼、怎麼做"},{id:"c",label:"備份資料到雲端"}],correctOptionId:"b",explanation:"後端負責處理商業邏輯，是系統的大腦。"},{id:"d3",prompt:"資料庫的主要職責是什麼？",options:[{id:"a",label:"執行程式碼"},{id:"b",label:"顯示網頁"},{id:"c",label:"儲存所有資料（會員、訂單、商品等）"}],correctOptionId:"c",explanation:"資料庫負責儲存所有資料，像是倉庫一樣。"},{id:"d4",prompt:"使用者點擊「購買課程」後，系統的處理順序是什麼？",options:[{id:"a",label:"前端 → 後端 → 資料庫 → 後端 → 前端"},{id:"b",label:"資料庫 → 後端 → 前端"},{id:"c",label:"前端 → 資料庫 → 後端"}],correctOptionId:"a",explanation:"使用者操作前端，前端向後端發請求，後端存取資料庫，再回傳結果給前端顯示。"},{id:"d5",prompt:"Docker 主要解決什麼問題？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"解決「在我的電腦可以跑，換台電腦就壞掉」的環境問題"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Docker 把執行環境打包起來，讓程式在任何電腦上都能用同樣的方式運行。"},{id:"d6",prompt:"Container（容器）是什麼？",options:[{id:"a",label:"一種程式語言"},{id:"b",label:"Docker 打包出來的執行環境，像是一個貨櫃"},{id:"c",label:"用來存放檔案的資料夾"}],correctOptionId:"b",explanation:"Container 就是 Docker 打包出來的「貨櫃」，裡面包含程式碼和執行環境。"},{id:"d7",prompt:"為什麼這個專案要用 Docker？",options:[{id:"a",label:"因為程式碼太大，需要壓縮"},{id:"b",label:"因為要確保每個人的開發環境一致，避免「在我電腦可以跑」的問題"},{id:"c",label:"因為 Docker 是免費的"}],correctOptionId:"b",explanation:"Docker 把執行環境打包成容器，讓專案在任何電腦上都能用同樣的方式運行，同時也方便管理多個服務。"},{id:"d8",prompt:"LiveFit 專案啟動後會有幾個 Container？",options:[{id:"a",label:"1 個"},{id:"b",label:"2 個"},{id:"c",label:"3 個（前端、後端、資料庫）"}],correctOptionId:"c",explanation:"LiveFit 有三個服務：前端、後端、資料庫，各自跑在一個容器裡。"},{id:"d9",prompt:"前端服務跑在哪個 Port？",options:[{id:"a",label:"localhost:3000"},{id:"b",label:"localhost:8080"},{id:"c",label:"localhost:5432"}],correctOptionId:"a",explanation:"前端服務跑在 Port 3000。"},{id:"d10",prompt:"如何確認後端服務是否正常運作？",options:[{id:"a",label:"打開 localhost:3000 看 CSS 樣式是否正確"},{id:"b",label:"打開 localhost:8080/healthcheck 看是否回傳 OK"},{id:"c",label:"重新啟動電腦"}],correctOptionId:"b",explanation:"後端服務跑在 Port 8080，可以用 /healthcheck 端點確認是否正常。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握前後端和 Docker 的基本概念了。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那接下來就交給你嘍！",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"好的！我會照著教學把 Docker 裝好，然後把專案跑起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"記得截圖給我看喔！這樣我才能跟合夥人報告進度。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"加油，今天結束後你就能親眼看到 LiveFit 在你電腦上運作了！",scene:"sport",coachExpression:"praise"},{type:"celebration",chapterTitle:"第三天：把專案跑起來",scene:"sport",coachExpression:"normal"}],sv={id:3,title:"第三天：把專案跑起來",nodes:rv},ia={1:tv,2:iv,3:sv};function ov(t){return ia[t]}const nu="179",av=0,Tf=1,lv=2,up=1,cv=2,Qn=3,Ui=0,tn=1,Bn=2,Ci=0,zr=1,Fs=2,Af=3,wf=4,uv=5,er=100,fv=101,dv=102,hv=103,pv=104,mv=200,gv=201,_v=202,vv=203,Vl=204,Gl=205,xv=206,bv=207,yv=208,Sv=209,Mv=210,Ev=211,Tv=212,Av=213,wv=214,Wl=0,Xl=1,ql=2,jr=3,$l=4,Yl=5,jl=6,Kl=7,fp=0,Rv=1,Cv=2,Pi=0,Pv=1,Iv=2,Dv=3,Lv=4,Uv=5,Nv=6,Fv=7,dp=300,Kr=301,Zr=302,Zl=303,Jl=304,Sa=306,Ql=1e3,ir=1001,ec=1002,wn=1003,Ov=1004,oo=1005,Gt=1006,Xa=1007,rr=1008,fi=1009,hp=1010,pp=1011,Os=1012,iu=1013,lr=1014,ri=1015,$s=1016,ru=1017,su=1018,Bs=1020,mp=35902,gp=1021,_p=1022,Tn=1023,ks=1026,zs=1027,vp=1028,ou=1029,xp=1030,au=1031,lu=1033,ko=33776,zo=33777,Ho=33778,Vo=33779,tc=35840,nc=35841,ic=35842,rc=35843,sc=36196,oc=37492,ac=37496,lc=37808,cc=37809,uc=37810,fc=37811,dc=37812,hc=37813,pc=37814,mc=37815,gc=37816,_c=37817,vc=37818,xc=37819,bc=37820,yc=37821,Go=36492,Sc=36494,Mc=36495,bp=36283,Ec=36284,Tc=36285,Ac=36286,Bv=3200,kv=3201,zv=0,Hv=1,wi="",_n="srgb",Jr="srgb-linear",ra="linear",ut="srgb",hr=7680,Rf=519,Vv=512,Gv=513,Wv=514,yp=515,Xv=516,qv=517,$v=518,Yv=519,wc=35044,Cf="300 es",zn=2e3,sa=2001;class ts{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,Rc=180/Math.PI;function Ii(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(kt[t&255]+kt[t>>8&255]+kt[t>>16&255]+kt[t>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[n&63|128]+kt[n>>8&255]+"-"+kt[n>>16&255]+kt[n>>24&255]+kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]).toLowerCase()}function tt(t,e,n){return Math.max(e,Math.min(n,t))}function jv(t,e){return(t%e+e)%e}function $a(t,e,n){return(1-n)*t+n*e}function kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ys{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*_,A=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const C=Math.sqrt(S),P=Math.atan2(C,p*A);m=Math.sin(m*P)/C,a=Math.sin(a*P)/C}const b=a*A;if(l=l*m+d*b,c=c*m+h*b,u=u*m+g*b,f=f*m+_*b,m===1-a){const C=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=C,c*=C,u*=C,f*=C}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Pf.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Pf.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ya.copy(this).projectOnVector(e),this.sub(Ya)}reflect(e){return this.sub(Ya.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ya=new J,Pf=new Ys;class Je{constructor(e,n,i,r,s,o,a,l,c){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],m=r[3],p=r[6],A=r[1],S=r[4],b=r[7],C=r[2],P=r[5],I=r[8];return s[0]=o*_+a*A+l*C,s[3]=o*m+a*S+l*P,s[6]=o*p+a*b+l*I,s[1]=c*_+u*A+f*C,s[4]=c*m+u*S+f*P,s[7]=c*p+u*b+f*I,s[2]=d*_+h*A+g*C,s[5]=d*m+h*S+g*P,s[8]=d*p+h*b+g*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(a*i-r*o)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-a*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(o*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ja.makeScale(e,n)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,n){return this.premultiply(ja.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ja=new Je;function Sp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oa(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Kv(){const t=oa("canvas");return t.style.display="block",t}const If={};function Hr(t){t in If||(If[t]=!0,console.warn(t))}function Zv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Df=new Je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lf=new Je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jv(){const t={enabled:!0,workingColorSpace:Jr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ut&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ut&&(r.r=Vr(r.r),r.g=Vr(r.g),r.b=Vr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?ra:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jr]:{primaries:e,whitePoint:i,transfer:ra,toXYZ:Df,fromXYZ:Lf,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:Df,fromXYZ:Lf,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),t}const st=Jv();function ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Vr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let pr;class Qv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{pr===void 0&&(pr=oa("canvas")),pr.width=e.width,pr.height=e.height;const r=pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=oa("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ai(n[i]/255)*255):n[i]=ai(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ex=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=Ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ka(r[o].image)):s.push(Ka(r[o]))}else s=Ka(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ka(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Qv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let tx=0;const Za=new J;class Nt extends ts{constructor(e=Nt.DEFAULT_IMAGE,n=Nt.DEFAULT_MAPPING,i=ir,r=ir,s=Gt,o=rr,a=Tn,l=fi,c=Nt.DEFAULT_ANISOTROPY,u=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=Ii(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Za).x}get height(){return this.source.getSize(Za).y}get depth(){return this.source.getSize(Za).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ql:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case ec:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ql:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case ec:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=dp;Nt.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,b=(h+1)/2,C=(p+1)/2,P=(u+d)/4,I=(f+_)/4,L=(g+m)/4;return S>b&&S>C?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=P/i,s=I/i):b>C?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=P/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=I/s,r=L/s),this.set(i,r,s,n),this}let A=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(f-_)/A,this.z=(d-u)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=tt(this.x,e.x,n.x),this.y=tt(this.y,e.y,n.y),this.z=tt(this.z,e.z,n.z),this.w=tt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=tt(this.x,e,n),this.y=tt(this.y,e,n),this.z=tt(this.z,e,n),this.w=tt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class nx extends ts{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Nt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Gt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new cu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends nx{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Mp extends Nt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ix extends Nt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class js{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Sn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Sn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Sn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Sn):Sn.fromBufferAttribute(s,o),Sn.applyMatrix4(e.matrixWorld),this.expandByPoint(Sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Sn),Sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cs),lo.subVectors(this.max,cs),mr.subVectors(e.a,cs),gr.subVectors(e.b,cs),_r.subVectors(e.c,cs),gi.subVectors(gr,mr),_i.subVectors(_r,gr),Gi.subVectors(mr,_r);let n=[0,-gi.z,gi.y,0,-_i.z,_i.y,0,-Gi.z,Gi.y,gi.z,0,-gi.x,_i.z,0,-_i.x,Gi.z,0,-Gi.x,-gi.y,gi.x,0,-_i.y,_i.x,0,-Gi.y,Gi.x,0];return!Ja(n,mr,gr,_r,lo)||(n=[1,0,0,0,1,0,0,0,1],!Ja(n,mr,gr,_r,lo))?!1:(co.crossVectors(gi,_i),n=[co.x,co.y,co.z],Ja(n,mr,gr,_r,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yn=[new J,new J,new J,new J,new J,new J,new J,new J],Sn=new J,ao=new js,mr=new J,gr=new J,_r=new J,gi=new J,_i=new J,Gi=new J,cs=new J,lo=new J,co=new J,Wi=new J;function Ja(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wi.fromArray(t,s);const a=r.x*Math.abs(Wi.x)+r.y*Math.abs(Wi.y)+r.z*Math.abs(Wi.z),l=e.dot(Wi),c=n.dot(Wi),u=i.dot(Wi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const rx=new js,us=new J,Qa=new J;class Ma{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):rx.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;us.subVectors(e,this.center);const n=us.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(us,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(us.copy(e.center).add(Qa)),this.expandByPoint(us.copy(e.center).sub(Qa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const jn=new J,el=new J,uo=new J,vi=new J,tl=new J,fo=new J,nl=new J;class Ep{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,n),jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){el.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),vi.copy(this.origin).sub(el);const s=e.distanceTo(n)*.5,o=-this.direction.dot(uo),a=vi.dot(this.direction),l=-vi.dot(uo),c=vi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(el).addScaledVector(uo,d),h}intersectSphere(e,n){jn.subVectors(e.center,this.origin);const i=jn.dot(this.direction),r=jn.dot(jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,n,i,r,s){tl.subVectors(n,e),fo.subVectors(i,e),nl.crossVectors(tl,fo);let o=this.direction.dot(nl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,e);const l=a*this.direction.dot(fo.crossVectors(vi,fo));if(l<0)return null;const c=a*this.direction.dot(tl.cross(vi));if(c<0||l+c>o)return null;const u=-a*vi.dot(nl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/vr.setFromMatrixColumn(e,0).length(),s=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-a*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=_+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=_-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,_=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,_=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sx,e,ox)}lookAt(e,n,i){const r=this.elements;return sn.subVectors(e,n),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),xi.crossVectors(i,sn),xi.lengthSq()===0&&(Math.abs(i.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),xi.crossVectors(i,sn)),xi.normalize(),ho.crossVectors(sn,xi),r[0]=xi.x,r[4]=ho.x,r[8]=sn.x,r[1]=xi.y,r[5]=ho.y,r[9]=sn.y,r[2]=xi.z,r[6]=ho.z,r[10]=sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],m=i[10],p=i[14],A=i[3],S=i[7],b=i[11],C=i[15],P=r[0],I=r[4],L=r[8],y=r[12],M=r[1],R=r[5],z=r[9],q=r[13],G=r[2],j=r[6],$=r[10],H=r[14],U=r[3],ie=r[7],ue=r[11],ve=r[15];return s[0]=o*P+a*M+l*G+c*U,s[4]=o*I+a*R+l*j+c*ie,s[8]=o*L+a*z+l*$+c*ue,s[12]=o*y+a*q+l*H+c*ve,s[1]=u*P+f*M+d*G+h*U,s[5]=u*I+f*R+d*j+h*ie,s[9]=u*L+f*z+d*$+h*ue,s[13]=u*y+f*q+d*H+h*ve,s[2]=g*P+_*M+m*G+p*U,s[6]=g*I+_*R+m*j+p*ie,s[10]=g*L+_*z+m*$+p*ue,s[14]=g*y+_*q+m*H+p*ve,s[3]=A*P+S*M+b*G+C*U,s[7]=A*I+S*R+b*j+C*ie,s[11]=A*L+S*z+b*$+C*ue,s[15]=A*y+S*q+b*H+C*ve,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+_*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],A=f*m*c-_*d*c+_*l*h-a*m*h-f*l*p+a*d*p,S=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,b=u*_*c-g*f*c+g*a*h-o*_*h-u*a*p+o*f*p,C=g*f*l-u*_*l-g*a*d+o*_*d+u*a*m-o*f*m,P=n*A+i*S+r*b+s*C;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/P;return e[0]=A*I,e[1]=(_*d*s-f*m*s-_*r*h+i*m*h+f*r*p-i*d*p)*I,e[2]=(a*m*s-_*l*s+_*r*c-i*m*c-a*r*p+i*l*p)*I,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*I,e[4]=S*I,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*I,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*I,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*I,e[8]=b*I,e[9]=(g*f*s-u*_*s-g*i*h+n*_*h+u*i*p-n*f*p)*I,e[10]=(o*_*s-g*a*s+g*i*c-n*_*c-o*i*p+n*a*p)*I,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*I,e[12]=C*I,e[13]=(u*_*r-g*f*r+g*i*d-n*_*d-u*i*m+n*f*m)*I,e[14]=(g*a*r-o*_*r-g*i*l+n*_*l+o*i*m-n*a*m)*I,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*I,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,_=o*u,m=o*f,p=a*f,A=l*c,S=l*u,b=l*f,C=i.x,P=i.y,I=i.z;return r[0]=(1-(_+p))*C,r[1]=(h+b)*C,r[2]=(g-S)*C,r[3]=0,r[4]=(h-b)*P,r[5]=(1-(d+p))*P,r[6]=(m+A)*P,r[7]=0,r[8]=(g+S)*I,r[9]=(m-A)*I,r[10]=(1-(d+_))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=vr.set(r[0],r[1],r[2]).length();const o=vr.set(r[4],r[5],r[6]).length(),a=vr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Mn.copy(this);const c=1/s,u=1/o,f=1/a;return Mn.elements[0]*=c,Mn.elements[1]*=c,Mn.elements[2]*=c,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=f,Mn.elements[9]*=f,Mn.elements[10]*=f,n.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=zn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(o-s),_=o*s/(o-s);else if(a===zn)g=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===sa)g=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=zn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(o-s),_=o/(o-s);else if(a===zn)g=-2/(o-s),_=-(o+s)/(o-s);else if(a===sa)g=-1/(o-s),_=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const vr=new J,Mn=new wt,sx=new J(0,0,0),ox=new J(1,1,1),xi=new J,ho=new J,sn=new J,Uf=new wt,Nf=new Ys;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Uf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Uf,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nf.setFromEuler(this),this.setFromQuaternion(Nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Tp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ax=0;const Ff=new J,xr=new Ys,Kn=new wt,po=new J,fs=new J,lx=new J,cx=new Ys,Of=new J(1,0,0),Bf=new J(0,1,0),kf=new J(0,0,1),zf={type:"added"},ux={type:"removed"},br={type:"childadded",child:null},il={type:"childremoved",child:null};class Qt extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ax++}),this.uuid=Ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new J,n=new di,i=new Ys,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Je}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.multiply(xr),this}rotateOnWorldAxis(e,n){return xr.setFromAxisAngle(e,n),this.quaternion.premultiply(xr),this}rotateX(e){return this.rotateOnAxis(Of,e)}rotateY(e){return this.rotateOnAxis(Bf,e)}rotateZ(e){return this.rotateOnAxis(kf,e)}translateOnAxis(e,n){return Ff.copy(e).applyQuaternion(this.quaternion),this.position.add(Ff.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Of,e)}translateY(e){return this.translateOnAxis(Bf,e)}translateZ(e){return this.translateOnAxis(kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(fs,po,this.up):Kn.lookAt(po,fs,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),xr.setFromRotationMatrix(Kn),this.quaternion.premultiply(xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zf),br.child=e,this.dispatchEvent(br),br.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ux),il.child=e,this.dispatchEvent(il),il.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zf),br.child=e,this.dispatchEvent(br),br.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,lx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new J(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const En=new J,Zn=new J,rl=new J,Jn=new J,yr=new J,Sr=new J,Hf=new J,sl=new J,ol=new J,al=new J,ll=new At,cl=new At,ul=new At;class xn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),En.subVectors(e,n),r.cross(En);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){En.subVectors(r,n),Zn.subVectors(i,n),rl.subVectors(e,n);const o=En.dot(En),a=En.dot(Zn),l=En.dot(rl),c=Zn.dot(Zn),u=Zn.dot(rl),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Jn)===null?!1:Jn.x>=0&&Jn.y>=0&&Jn.x+Jn.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Jn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Jn.x),l.addScaledVector(o,Jn.y),l.addScaledVector(a,Jn.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return ll.setScalar(0),cl.setScalar(0),ul.setScalar(0),ll.fromBufferAttribute(e,n),cl.fromBufferAttribute(e,i),ul.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ll,s.x),o.addScaledVector(cl,s.y),o.addScaledVector(ul,s.z),o}static isFrontFacing(e,n,i,r){return En.subVectors(i,n),Zn.subVectors(e,n),En.cross(Zn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return En.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),En.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;yr.subVectors(r,i),Sr.subVectors(s,i),sl.subVectors(e,i);const l=yr.dot(sl),c=Sr.dot(sl);if(l<=0&&c<=0)return n.copy(i);ol.subVectors(e,r);const u=yr.dot(ol),f=Sr.dot(ol);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(yr,o);al.subVectors(e,s);const h=yr.dot(al),g=Sr.dot(al);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Sr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Hf.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(Hf,a);const p=1/(m+_+d);return o=_*p,a=d*p,n.copy(i).addScaledVector(yr,o).addScaledVector(Sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bi={h:0,s:0,l:0},mo={h:0,s:0,l:0};function fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=jv(e,1),n=tt(n,0,1),i=tt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=fl(o,s,e+1/3),this.g=fl(o,s,e),this.b=fl(o,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=_n){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=_n){const i=Ap[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ai(e.r),this.g=ai(e.g),this.b=ai(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return st.workingToColorSpace(zt.copy(this),e),Math.round(tt(zt.r*255,0,255))*65536+Math.round(tt(zt.g*255,0,255))*256+Math.round(tt(zt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=_n){st.workingToColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==_n?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(bi),this.setHSL(bi.h+e,bi.s+n,bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(bi),e.getHSL(mo);const i=$a(bi.h,mo.h,n),r=$a(bi.s,mo.s,n),s=$a(bi.l,mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new qe;qe.NAMES=Ap;let fx=0;class ns extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fx++}),this.uuid=Ii(),this.name="",this.type="Material",this.blending=zr,this.side=Ui,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vl,this.blendDst=Gl,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hr,this.stencilZFail=hr,this.stencilZPass=hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Ui&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Vl&&(i.blendSrc=this.blendSrc),this.blendDst!==Gl&&(i.blendDst=this.blendDst),this.blendEquation!==er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uu extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new J,go=new nt;let dx=0;class Jt{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:dx++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wc,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)go.fromBufferAttribute(this,n),go.applyMatrix3(e),this.setXY(n,go.x,go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix3(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyMatrix4(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.applyNormalMatrix(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Rt.fromBufferAttribute(this,n),Rt.transformDirection(e),this.setXYZ(n,Rt.x,Rt.y,Rt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==wc&&(e.usage=this.usage),e}}class wp extends Jt{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rp extends Jt{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ar extends Jt{constructor(e,n,i){super(new Float32Array(e),n,i)}}let hx=0;const gn=new wt,dl=new Qt,Mr=new J,on=new js,ds=new js,Lt=new J;class Dn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=Ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Sp(e)?Rp:wp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gn.makeRotationFromQuaternion(e),this.applyMatrix4(gn),this}rotateX(e){return gn.makeRotationX(e),this.applyMatrix4(gn),this}rotateY(e){return gn.makeRotationY(e),this.applyMatrix4(gn),this}rotateZ(e){return gn.makeRotationZ(e),this.applyMatrix4(gn),this}translate(e,n,i){return gn.makeTranslation(e,n,i),this.applyMatrix4(gn),this}scale(e,n,i){return gn.makeScale(e,n,i),this.applyMatrix4(gn),this}lookAt(e){return dl.lookAt(e),dl.updateMatrix(),this.applyMatrix4(dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mr).negate(),this.translate(Mr.x,Mr.y,Mr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ar(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new js);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];on.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(on.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];ds.setFromBufferAttribute(a),this.morphTargetsRelative?(Lt.addVectors(on.min,ds.min),on.expandByPoint(Lt),Lt.addVectors(on.max,ds.max),on.expandByPoint(Lt)):(on.expandByPoint(ds.min),on.expandByPoint(ds.max))}on.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Lt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Lt.fromBufferAttribute(a,c),l&&(Mr.fromBufferAttribute(e,c),Lt.add(Mr)),r=Math.max(r,i.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new J,l[L]=new J;const c=new J,u=new J,f=new J,d=new nt,h=new nt,g=new nt,_=new J,m=new J;function p(L,y,M){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,y),f.fromBufferAttribute(i,M),d.fromBufferAttribute(s,L),h.fromBufferAttribute(s,y),g.fromBufferAttribute(s,M),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const R=1/(h.x*g.y-g.x*h.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(R),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(R),a[L].add(_),a[y].add(_),a[M].add(_),l[L].add(m),l[y].add(m),l[M].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let L=0,y=A.length;L<y;++L){const M=A[L],R=M.start,z=M.count;for(let q=R,G=R+z;q<G;q+=3)p(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new J,b=new J,C=new J,P=new J;function I(L){C.fromBufferAttribute(r,L),P.copy(C);const y=a[L];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),b.crossVectors(P,y);const R=b.dot(l[L])<0?-1:1;o.setXYZW(L,S.x,S.y,S.z,R)}for(let L=0,y=A.length;L<y;++L){const M=A[L],R=M.start,z=M.count;for(let q=R,G=R+z;q<G;q+=3)I(e.getX(q+0)),I(e.getX(q+1)),I(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Jt(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,f=new J;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Lt.fromBufferAttribute(e,n),Lt.normalize(),e.setXYZ(n,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?h=l[_]*a.data.stride+a.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Jt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Dn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vf=new wt,Xi=new Ep,_o=new Ma,Gf=new J,vo=new J,xo=new J,bo=new J,hl=new J,yo=new J,Wf=new J,So=new J;class Hn extends Qt{constructor(e=new Dn,n=new uu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){yo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(hl.fromBufferAttribute(f,e),o?yo.addScaledVector(hl,u):yo.addScaledVector(hl.sub(n),u))}n.add(yo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),Xi.copy(e.ray).recast(e.near),!(_o.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(_o,Gf)===null||Xi.origin.distanceToSquared(Gf)>(e.far-e.near)**2))&&(Vf.copy(s).invert(),Xi.copy(e.ray).applyMatrix4(Vf),!(i.boundingBox!==null&&Xi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),S=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let b=A,C=S;b<C;b+=3){const P=a.getX(b),I=a.getX(b+1),L=a.getX(b+2);r=Mo(this,p,e,i,c,u,f,P,I,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(a.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=a.getX(m),S=a.getX(m+1),b=a.getX(m+2);r=Mo(this,o,e,i,c,u,f,A,S,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],A=Math.max(m.start,h.start),S=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let b=A,C=S;b<C;b+=3){const P=b,I=b+1,L=b+2;r=Mo(this,p,e,i,c,u,f,P,I,L),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const A=m,S=m+1,b=m+2;r=Mo(this,o,e,i,c,u,f,A,S,b),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function px(t,e,n,i,r,s,o,a){let l;if(e.side===tn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ui,a),l===null)return null;So.copy(a),So.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(So);return c<n.near||c>n.far?null:{distance:c,point:So.clone(),object:t}}function Mo(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,vo),t.getVertexPosition(l,xo),t.getVertexPosition(c,bo);const u=px(t,e,n,i,vo,xo,bo,Wf);if(u){const f=new J;xn.getBarycoord(Wf,vo,xo,bo,f),r&&(u.uv=xn.getInterpolatedAttribute(r,a,l,c,f,new nt)),s&&(u.uv1=xn.getInterpolatedAttribute(s,a,l,c,f,new nt)),o&&(u.normal=xn.getInterpolatedAttribute(o,a,l,c,f,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new J,materialIndex:0};xn.getNormal(vo,xo,bo,d.normal),u.face=d,u.barycoord=f}return u}class Ks extends Dn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ar(c,3)),this.setAttribute("normal",new ar(u,3)),this.setAttribute("uv",new ar(f,2));function g(_,m,p,A,S,b,C,P,I,L,y){const M=b/I,R=C/L,z=b/2,q=C/2,G=P/2,j=I+1,$=L+1;let H=0,U=0;const ie=new J;for(let ue=0;ue<$;ue++){const ve=ue*R-q;for(let Se=0;Se<j;Se++){const Ze=Se*M-z;ie[_]=Ze*A,ie[m]=ve*S,ie[p]=G,c.push(ie.x,ie.y,ie.z),ie[_]=0,ie[m]=0,ie[p]=P>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(Se/I),f.push(1-ue/L),H+=1}}for(let ue=0;ue<L;ue++)for(let ve=0;ve<I;ve++){const Se=d+ve+j*ue,Ze=d+ve+j*(ue+1),Ve=d+(ve+1)+j*(ue+1),ne=d+(ve+1)+j*ue;l.push(Se,Ze,ne),l.push(Ze,Ve,ne),U+=6}a.addGroup(h,U,y),h+=U,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=Qr(t[n]);for(const r in i)e[r]=i[r]}return e}function mx(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const gx={clone:Qr,merge:Yt};var _x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_x,this.fragmentShader=vx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=mx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Pp extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new J,Xf=new nt,qf=new nt;class vn extends Pp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Rc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rc*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,n){return this.getViewBounds(e,Xf,qf),n.subVectors(qf,Xf)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(qa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Er=-90,Tr=1;class xx extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Er,Tr,e,n);r.layers=this.layers,this.add(r);const s=new vn(Er,Tr,e,n);s.layers=this.layers,this.add(s);const o=new vn(Er,Tr,e,n);o.layers=this.layers,this.add(o);const a=new vn(Er,Tr,e,n);a.layers=this.layers,this.add(a);const l=new vn(Er,Tr,e,n);l.layers=this.layers,this.add(l);const c=new vn(Er,Tr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===sa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Ip extends Nt{constructor(e=[],n=Kr,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bx extends cr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Ip(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ks(5,5,5),s=new Ni({name:"CubemapFromEquirect",uniforms:Qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Ci});s.uniforms.tEquirect.value=n;const o=new Hn(r,s),a=n.minFilter;return n.minFilter===rr&&(n.minFilter=Gt),new xx(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class _s extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const yx={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=n.getJointPose(_,i),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(yx)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new _s;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class Dp extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Sx{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=wc,this.updateRanges=[],this.version=0,this.uuid=Ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const qt=new J;class aa{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyMatrix4(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.applyNormalMatrix(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)qt.fromBufferAttribute(this,n),qt.transformDirection(e),this.setXYZ(n,qt.x,qt.y,qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Jt(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new aa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lp extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ar;const hs=new J,wr=new J,Rr=new J,Cr=new nt,ps=new nt,Up=new wt,Eo=new J,ms=new J,To=new J,$f=new nt,ml=new nt,Yf=new nt;class Mx extends Qt{constructor(e=new Lp){if(super(),this.isSprite=!0,this.type="Sprite",Ar===void 0){Ar=new Dn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Sx(n,5);Ar.setIndex([0,1,2,0,2,3]),Ar.setAttribute("position",new aa(i,3,0,!1)),Ar.setAttribute("uv",new aa(i,2,3,!1))}this.geometry=Ar,this.material=e,this.center=new nt(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),wr.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Rr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&wr.multiplyScalar(-Rr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ao(Eo.set(-.5,-.5,0),Rr,o,wr,r,s),Ao(ms.set(.5,-.5,0),Rr,o,wr,r,s),Ao(To.set(.5,.5,0),Rr,o,wr,r,s),$f.set(0,0),ml.set(1,0),Yf.set(1,1);let a=e.ray.intersectTriangle(Eo,ms,To,!1,hs);if(a===null&&(Ao(ms.set(-.5,.5,0),Rr,o,wr,r,s),ml.set(0,1),a=e.ray.intersectTriangle(Eo,To,ms,!1,hs),a===null))return;const l=e.ray.origin.distanceTo(hs);l<e.near||l>e.far||n.push({distance:l,point:hs.clone(),uv:xn.getInterpolation(hs,Eo,ms,To,$f,ml,Yf,new nt),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ao(t,e,n,i,r,s){Cr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ps.x=s*Cr.x-r*Cr.y,ps.y=r*Cr.x+s*Cr.y):ps.copy(Cr),t.copy(e),t.x+=ps.x,t.y+=ps.y,t.applyMatrix4(Up)}const gl=new J,Ex=new J,Tx=new Je;class Ki{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=gl.subVectors(i,n).cross(Ex.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(gl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Tx.getNormalMatrix(e),r=this.coplanarPoint(gl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qi=new Ma,Ax=new nt(.5,.5),wo=new J;class Np{constructor(e=new Ki,n=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=zn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],A=s[12],S=s[13],b=s[14],C=s[15];if(r[0].setComponents(c-o,h-u,p-g,C-A).normalize(),r[1].setComponents(c+o,h+u,p+g,C+A).normalize(),r[2].setComponents(c+a,h+f,p+_,C+S).normalize(),r[3].setComponents(c-a,h-f,p-_,C-S).normalize(),i)r[4].setComponents(l,d,m,b).normalize(),r[5].setComponents(c-l,h-d,p-m,C-b).normalize();else if(r[4].setComponents(c-l,h-d,p-m,C-b).normalize(),n===zn)r[5].setComponents(c+l,h+d,p+m,C+b).normalize();else if(n===sa)r[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qi)}intersectsSprite(e){qi.center.set(0,0,0);const n=Ax.distanceTo(e.center);return qi.radius=.7071067811865476+n,qi.applyMatrix4(e.matrixWorld),this.intersectsSphere(qi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Cc extends ns{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const jf=new wt,Pc=new Ep,Ro=new Ma,Co=new J;class Kf extends Qt{constructor(e=new Dn,n=new Cc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(r),Ro.radius+=s,e.ray.intersectsSphere(Ro)===!1)return;jf.copy(r).invert(),Pc.copy(e.ray).applyMatrix4(jf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),h=Math.min(c.count,o.start+o.count);for(let g=d,_=h;g<_;g++){const m=c.getX(g);Co.fromBufferAttribute(f,m),Zf(Co,m,l,r,e,n,this)}}else{const d=Math.max(0,o.start),h=Math.min(f.count,o.start+o.count);for(let g=d,_=h;g<_;g++)Co.fromBufferAttribute(f,g),Zf(Co,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Zf(t,e,n,i,r,s,o){const a=Pc.distanceSqToPoint(t);if(a<n){const l=new J;Pc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Gr extends Nt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fp extends Nt{constructor(e,n,i=lr,r,s,o,a=wn,l=wn,c,u=ks,f=1){if(u!==ks&&u!==zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new cu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Zs extends Dn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const A=p*d-o;for(let S=0;S<c;S++){const b=S*f-s;g.push(b,-A,0),_.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<a;A++){const S=A+c*p,b=A+c*(p+1),C=A+1+c*(p+1),P=A+1+c*p;h.push(S,b,P),h.push(b,C,P)}this.setIndex(h),this.setAttribute("position",new ar(g,3)),this.setAttribute("normal",new ar(_,3)),this.setAttribute("uv",new ar(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class wx extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rx extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Op extends Pp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Cx extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Px{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Jf(t,e,n,i){const r=Ix(i);switch(n){case gp:return t*e;case vp:return t*e/r.components*r.byteLength;case ou:return t*e/r.components*r.byteLength;case xp:return t*e*2/r.components*r.byteLength;case au:return t*e*2/r.components*r.byteLength;case _p:return t*e*3/r.components*r.byteLength;case Tn:return t*e*4/r.components*r.byteLength;case lu:return t*e*4/r.components*r.byteLength;case ko:case zo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ho:case Vo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case nc:case rc:return Math.max(t,16)*Math.max(e,8)/4;case tc:case ic:return Math.max(t,8)*Math.max(e,8)/2;case sc:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ac:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case uc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case hc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case mc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case yc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Go:case Sc:case Mc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case bp:case Ec:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Tc:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Ix(t){switch(t){case fi:case hp:return{byteLength:1,components:1};case Os:case pp:case $s:return{byteLength:2,components:1};case ru:case su:return{byteLength:2,components:4};case lr:case iu:case ri:return{byteLength:4,components:1};case mp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nu);function Bp(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Dx(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Lx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ux=`#ifdef USE_ALPHAHASH
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
#endif`,Nx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ox=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kx=`#ifdef USE_AOMAP
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
#endif`,zx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hx=`#ifdef USE_BATCHING
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
#endif`,Vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qx=`#ifdef USE_IRIDESCENCE
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
#endif`,$x=`#ifdef USE_BUMPMAP
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
#endif`,Yx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,nb=`#define PI 3.141592653589793
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
} // validated`,ib=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,rb=`vec3 transformedNormal = objectNormal;
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
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ub=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_b=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
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
#endif`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pb=`PhysicalMaterial material;
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
#endif`,Ib=`struct PhysicalMaterial {
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
}`,Db=`
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ub=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Vb=`#if defined( USE_POINTS_UV )
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
#endif`,Gb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$b=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
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
#endif`,jb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Zb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ey=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ty=`#ifdef USE_NORMALMAP
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
#endif`,ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ry=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,oy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ay=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ly=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,uy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,py=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,my=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_y=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xy=`#ifdef USE_SKINNING
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
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,Sy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,My=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ty=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ay=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Iy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ly=`uniform sampler2D t2D;
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
}`,Uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ny=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Oy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,By=`#include <common>
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
}`,ky=`#if DEPTH_PACKING == 3200
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
}`,zy=`#define DISTANCE
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
}`,Hy=`#define DISTANCE
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
}`,Vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,Xy=`uniform vec3 diffuse;
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
}`,qy=`#include <common>
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
}`,$y=`uniform vec3 diffuse;
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
}`,Yy=`#define LAMBERT
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
}`,jy=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,Zy=`#define MATCAP
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
}`,Jy=`#define NORMAL
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
}`,Qy=`#define NORMAL
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
}`,eS=`#define PHONG
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
}`,tS=`#define PHONG
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
}`,nS=`#define STANDARD
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
}`,iS=`#define STANDARD
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
}`,rS=`#define TOON
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
}`,sS=`#define TOON
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
}`,oS=`uniform float size;
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
}`,aS=`uniform vec3 diffuse;
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
}`,lS=`#include <common>
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
}`,cS=`uniform vec3 color;
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
}`,uS=`uniform float rotation;
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
}`,fS=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:Lx,alphahash_pars_fragment:Ux,alphamap_fragment:Nx,alphamap_pars_fragment:Fx,alphatest_fragment:Ox,alphatest_pars_fragment:Bx,aomap_fragment:kx,aomap_pars_fragment:zx,batching_pars_vertex:Hx,batching_vertex:Vx,begin_vertex:Gx,beginnormal_vertex:Wx,bsdfs:Xx,iridescence_fragment:qx,bumpmap_pars_fragment:$x,clipping_planes_fragment:Yx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Kx,clipping_planes_vertex:Zx,color_fragment:Jx,color_pars_fragment:Qx,color_pars_vertex:eb,color_vertex:tb,common:nb,cube_uv_reflection_fragment:ib,defaultnormal_vertex:rb,displacementmap_pars_vertex:sb,displacementmap_vertex:ob,emissivemap_fragment:ab,emissivemap_pars_fragment:lb,colorspace_fragment:cb,colorspace_pars_fragment:ub,envmap_fragment:fb,envmap_common_pars_fragment:db,envmap_pars_fragment:hb,envmap_pars_vertex:pb,envmap_physical_pars_fragment:Tb,envmap_vertex:mb,fog_vertex:gb,fog_pars_vertex:_b,fog_fragment:vb,fog_pars_fragment:xb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:yb,lights_lambert_fragment:Sb,lights_lambert_pars_fragment:Mb,lights_pars_begin:Eb,lights_toon_fragment:Ab,lights_toon_pars_fragment:wb,lights_phong_fragment:Rb,lights_phong_pars_fragment:Cb,lights_physical_fragment:Pb,lights_physical_pars_fragment:Ib,lights_fragment_begin:Db,lights_fragment_maps:Lb,lights_fragment_end:Ub,logdepthbuf_fragment:Nb,logdepthbuf_pars_fragment:Fb,logdepthbuf_pars_vertex:Ob,logdepthbuf_vertex:Bb,map_fragment:kb,map_pars_fragment:zb,map_particle_fragment:Hb,map_particle_pars_fragment:Vb,metalnessmap_fragment:Gb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:Xb,morphcolor_vertex:qb,morphnormal_vertex:$b,morphtarget_pars_vertex:Yb,morphtarget_vertex:jb,normal_fragment_begin:Kb,normal_fragment_maps:Zb,normal_pars_fragment:Jb,normal_pars_vertex:Qb,normal_vertex:ey,normalmap_pars_fragment:ty,clearcoat_normal_fragment_begin:ny,clearcoat_normal_fragment_maps:iy,clearcoat_pars_fragment:ry,iridescence_pars_fragment:sy,opaque_fragment:oy,packing:ay,premultiplied_alpha_fragment:ly,project_vertex:cy,dithering_fragment:uy,dithering_pars_fragment:fy,roughnessmap_fragment:dy,roughnessmap_pars_fragment:hy,shadowmap_pars_fragment:py,shadowmap_pars_vertex:my,shadowmap_vertex:gy,shadowmask_pars_fragment:_y,skinbase_vertex:vy,skinning_pars_vertex:xy,skinning_vertex:by,skinnormal_vertex:yy,specularmap_fragment:Sy,specularmap_pars_fragment:My,tonemapping_fragment:Ey,tonemapping_pars_fragment:Ty,transmission_fragment:Ay,transmission_pars_fragment:wy,uv_pars_fragment:Ry,uv_pars_vertex:Cy,uv_vertex:Py,worldpos_vertex:Iy,background_vert:Dy,background_frag:Ly,backgroundCube_vert:Uy,backgroundCube_frag:Ny,cube_vert:Fy,cube_frag:Oy,depth_vert:By,depth_frag:ky,distanceRGBA_vert:zy,distanceRGBA_frag:Hy,equirect_vert:Vy,equirect_frag:Gy,linedashed_vert:Wy,linedashed_frag:Xy,meshbasic_vert:qy,meshbasic_frag:$y,meshlambert_vert:Yy,meshlambert_frag:jy,meshmatcap_vert:Ky,meshmatcap_frag:Zy,meshnormal_vert:Jy,meshnormal_frag:Qy,meshphong_vert:eS,meshphong_frag:tS,meshphysical_vert:nS,meshphysical_frag:iS,meshtoon_vert:rS,meshtoon_frag:sS,points_vert:oS,points_frag:aS,shadow_vert:lS,shadow_frag:cS,sprite_vert:uS,sprite_frag:fS},Me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},On={basic:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Yt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Yt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Yt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Yt([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Yt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Yt([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Yt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Yt([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Yt([Me.common,Me.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Yt([Me.lights,Me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};On.physical={uniforms:Yt([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Po={r:0,b:0,g:0},$i=new di,dS=new wt;function hS(t,e,n,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?n:e).get(b)),b}function _(S){let b=!1;const C=g(S);C===null?p(a,l):C&&C.isColor&&(p(C,1),b=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,b){const C=g(b);C&&(C.isCubeTexture||C.mapping===Sa)?(u===void 0&&(u=new Hn(new Ks(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:Qr(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),$i.copy(b.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),u.material.uniforms.envMap.value=C,u.material.uniforms.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(dS.makeRotationFromEuler($i)),u.material.toneMapped=st.getTransfer(C.colorSpace)!==ut,(f!==C||d!==C.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=C,d=C.version,h=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):C&&C.isTexture&&(c===void 0&&(c=new Hn(new Zs(2,2),new Ni({name:"BackgroundMaterial",uniforms:Qr(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:Ui,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=C,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=st.getTransfer(C.colorSpace)!==ut,C.matrixAutoUpdate===!0&&C.updateMatrix(),c.material.uniforms.uvTransform.value.copy(C.matrix),(f!==C||d!==C.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=C,d=C.version,h=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(Po,Cp(t)),i.buffers.color.setClear(Po.r,Po.g,Po.b,b,o)}function A(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:m,dispose:A}}function pS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(M,R,z,q,G){let j=!1;const $=f(q,z,R);s!==$&&(s=$,c(s.object)),j=h(M,q,z,G),j&&g(M,q,z,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,b(M,R,z,q),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(M){return t.bindVertexArray(M)}function u(M){return t.deleteVertexArray(M)}function f(M,R,z){const q=z.wireframe===!0;let G=i[M.id];G===void 0&&(G={},i[M.id]=G);let j=G[R.id];j===void 0&&(j={},G[R.id]=j);let $=j[q];return $===void 0&&($=d(l()),j[q]=$),$}function d(M){const R=[],z=[],q=[];for(let G=0;G<n;G++)R[G]=0,z[G]=0,q[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:z,attributeDivisors:q,object:M,attributes:{},index:null}}function h(M,R,z,q){const G=s.attributes,j=R.attributes;let $=0;const H=z.getAttributes();for(const U in H)if(H[U].location>=0){const ue=G[U];let ve=j[U];if(ve===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),ue===void 0||ue.attribute!==ve||ve&&ue.data!==ve.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function g(M,R,z,q){const G={},j=R.attributes;let $=0;const H=z.getAttributes();for(const U in H)if(H[U].location>=0){let ue=j[U];ue===void 0&&(U==="instanceMatrix"&&M.instanceMatrix&&(ue=M.instanceMatrix),U==="instanceColor"&&M.instanceColor&&(ue=M.instanceColor));const ve={};ve.attribute=ue,ue&&ue.data&&(ve.data=ue.data),G[U]=ve,$++}s.attributes=G,s.attributesNum=$,s.index=q}function _(){const M=s.newAttributes;for(let R=0,z=M.length;R<z;R++)M[R]=0}function m(M){p(M,0)}function p(M,R){const z=s.newAttributes,q=s.enabledAttributes,G=s.attributeDivisors;z[M]=1,q[M]===0&&(t.enableVertexAttribArray(M),q[M]=1),G[M]!==R&&(t.vertexAttribDivisor(M,R),G[M]=R)}function A(){const M=s.newAttributes,R=s.enabledAttributes;for(let z=0,q=R.length;z<q;z++)R[z]!==M[z]&&(t.disableVertexAttribArray(z),R[z]=0)}function S(M,R,z,q,G,j,$){$===!0?t.vertexAttribIPointer(M,R,z,G,j):t.vertexAttribPointer(M,R,z,q,G,j)}function b(M,R,z,q){_();const G=q.attributes,j=z.getAttributes(),$=R.defaultAttributeValues;for(const H in j){const U=j[H];if(U.location>=0){let ie=G[H];if(ie===void 0&&(H==="instanceMatrix"&&M.instanceMatrix&&(ie=M.instanceMatrix),H==="instanceColor"&&M.instanceColor&&(ie=M.instanceColor)),ie!==void 0){const ue=ie.normalized,ve=ie.itemSize,Se=e.get(ie);if(Se===void 0)continue;const Ze=Se.buffer,Ve=Se.type,ne=Se.bytesPerElement,me=Ve===t.INT||Ve===t.UNSIGNED_INT||ie.gpuType===iu;if(ie.isInterleavedBufferAttribute){const F=ie.data,se=F.stride,re=ie.offset;if(F.isInstancedInterleavedBuffer){for(let fe=0;fe<U.locationSize;fe++)p(U.location+fe,F.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let fe=0;fe<U.locationSize;fe++)m(U.location+fe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let fe=0;fe<U.locationSize;fe++)S(U.location+fe,ve/U.locationSize,Ve,ue,se*ne,(re+ve/U.locationSize*fe)*ne,me)}else{if(ie.isInstancedBufferAttribute){for(let F=0;F<U.locationSize;F++)p(U.location+F,ie.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let F=0;F<U.locationSize;F++)m(U.location+F);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let F=0;F<U.locationSize;F++)S(U.location+F,ve/U.locationSize,Ve,ue,ve*ne,ve/U.locationSize*F*ne,me)}}else if($!==void 0){const ue=$[H];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(U.location,ue);break;case 3:t.vertexAttrib3fv(U.location,ue);break;case 4:t.vertexAttrib4fv(U.location,ue);break;default:t.vertexAttrib1fv(U.location,ue)}}}}A()}function C(){L();for(const M in i){const R=i[M];for(const z in R){const q=R[z];for(const G in q)u(q[G].object),delete q[G];delete R[z]}delete i[M]}}function P(M){if(i[M.id]===void 0)return;const R=i[M.id];for(const z in R){const q=R[z];for(const G in q)u(q[G].object),delete q[G];delete R[z]}delete i[M.id]}function I(M){for(const R in i){const z=i[R];if(z[M.id]===void 0)continue;const q=z[M.id];for(const G in q)u(q[G].object),delete q[G];delete z[M.id]}}function L(){y(),o=!0,s!==r&&(s=r,c(s.object))}function y(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfProgram:I,initAttributes:_,enableAttribute:m,disableUnusedAttributes:A}}function mS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function gS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(I){return!(I!==Tn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(I){const L=I===$s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==fi&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==ri&&!L)}function l(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),A=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,P=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:S,maxFragmentUniforms:b,vertexTextures:C,maxSamples:P}}function _S(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ki,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const A=s?0:i,S=A*4;let b=p.clippingState||null;l.value=b,b=u(g,d,S,h);for(let C=0;C!==S;++C)b[C]=n[C];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,A=d.matrixWorldInverse;a.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=h;S!==_;++S,b+=4)o.copy(f[S]).applyMatrix4(A,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function vS(t){let e=new WeakMap;function n(o,a){return a===Zl?o.mapping=Kr:a===Jl&&(o.mapping=Zr),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Zl||a===Jl)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bx(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Lr=4,Qf=[.125,.215,.35,.446,.526,.582],tr=20,_l=new Op,ed=new qe;let vl=null,xl=0,bl=0,yl=!1;const Zi=(1+Math.sqrt(5))/2,Pr=1/Zi,td=[new J(-Zi,Pr,0),new J(Zi,Pr,0),new J(-Pr,0,Zi),new J(Pr,0,Zi),new J(0,Zi,-Pr),new J(0,Zi,Pr),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],xS=new J;class nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=xS}=s;vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vl,xl,bl),this._renderer.xr.enabled=yl,e.scissorTest=!1,Io(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Kr||e.mapping===Zr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vl=this._renderer.getRenderTarget(),xl=this._renderer.getActiveCubeFace(),bl=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:$s,format:Tn,colorSpace:Jr,depthBuffer:!1},r=id(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=id(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bS(s)),this._blurMaterial=yS(s,e,n)}return r}_compileMaterial(e){const n=new Hn(this._lodPlanes[0],e);this._renderer.compile(n,_l)}_sceneToCubeUV(e,n,i,r,s){const l=new vn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(ed),f.toneMapping=Pi,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const _=new uu({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),m=new Hn(new Ks,_);let p=!1;const A=e.background;A?A.isColor&&(_.color.copy(A),e.background=null,p=!0):(_.color.copy(ed),p=!0);for(let S=0;S<6;S++){const b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const C=this._cubeSize;Io(r,b*C,S>2?C:0,C,C),f.setRenderTarget(r),p&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=h,f.autoClear=d,e.background=A}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Kr||e.mapping===Zr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=sd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rd());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Io(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,_l)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=td[(r-s-1)%td.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Hn(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*tr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):tr;m>tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${tr}`);const p=[];let A=0;for(let I=0;I<tr;++I){const L=I/_,y=Math.exp(-L*L/2);p.push(y),I===0?A+=y:I<m&&(A+=2*y)}for(let I=0;I<p.length;I++)p[I]=p[I]/A;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-i;const b=this._sizeLods[r],C=3*b*(r>S-Lr?r-S+Lr:0),P=4*(this._cubeSize-b);Io(n,C,P,3*b,2*b),l.setRenderTarget(n),l.render(f,_l)}}function bS(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+Qf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lr?l=Qf[o-t+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,A=new Float32Array(_*g*h),S=new Float32Array(m*g*h),b=new Float32Array(p*g*h);for(let P=0;P<h;P++){const I=P%3*2/3-1,L=P>2?0:-1,y=[I,L,0,I+2/3,L,0,I+2/3,L+1,0,I,L,0,I+2/3,L+1,0,I,L+1,0];A.set(y,_*g*P),S.set(d,m*g*P);const M=[P,P,P,P,P,P];b.set(M,p*g*P)}const C=new Dn;C.setAttribute("position",new Jt(A,_)),C.setAttribute("uv",new Jt(S,m)),C.setAttribute("faceIndex",new Jt(b,p)),e.push(C),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function id(t,e,n){const i=new cr(t,e,n);return i.texture.mapping=Sa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Io(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function yS(t,e,n){const i=new Float32Array(tr),r=new J(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function rd(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fu(),fragmentShader:`

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
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function sd(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function fu(){return`

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
	`}function SS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Zl||l===Jl,u=l===Kr||l===Zr;if(c||u){let f=e.get(a);const d=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new nd(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const h=a.image;return c&&h&&h.height>0||u&&h&&r(h)?(n===null&&(n=new nd(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function MS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hr("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ES(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],t.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const A=h.array;_=h.version;for(let S=0,b=A.length;S<b;S+=3){const C=A[S+0],P=A[S+1],I=A[S+2];d.push(C,P,P,I,I,C)}}else if(g!==void 0){const A=g.array;_=g.version;for(let S=0,b=A.length/3-1;S<b;S+=3){const C=S+0,P=S+1,I=S+2;d.push(C,P,P,I,I,C)}}else return;const m=new(Sp(d)?Rp:wp)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function TS(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,h){t.drawElements(i,h,s,d*o),n.update(h,i,1)}function c(d,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,d*o,g),n.update(h,i,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];n.update(m,i,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(i,h,0,s,d,0,_,0,g);let p=0;for(let A=0;A<g;A++)p+=h[A]*_[A];n.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function AS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function wS(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==f){let y=function(){I.dispose(),i.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const h=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;h===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*C*4*f),I=new Mp(P,b,C,f);I.type=ri,I.needsUpdate=!0;const L=S*4;for(let M=0;M<f;M++){const R=m[M],z=p[M],q=A[M],G=b*C*4*M;for(let j=0;j<R.count;j++){const $=j*L;h===!0&&(r.fromBufferAttribute(R,j),P[G+$+0]=r.x,P[G+$+1]=r.y,P[G+$+2]=r.z,P[G+$+3]=0),g===!0&&(r.fromBufferAttribute(z,j),P[G+$+4]=r.x,P[G+$+5]=r.y,P[G+$+6]=r.z,P[G+$+7]=0),_===!0&&(r.fromBufferAttribute(q,j),P[G+$+8]=r.x,P[G+$+9]=r.y,P[G+$+10]=r.z,P[G+$+11]=q.itemSize===4?r.w:1)}}d={count:f,texture:I,size:new nt(b,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=a.morphTargetsRelative?1:1-h;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function RS(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const kp=new Nt,od=new Fp(1,1),zp=new Mp,Hp=new ix,Vp=new Ip,ad=[],ld=[],cd=new Float32Array(16),ud=new Float32Array(9),fd=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ad[r];if(s===void 0&&(s=new Float32Array(r),ad[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function It(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ea(t,e){let n=ld[e];n===void 0&&(n=new Int32Array(e),ld[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function CS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function PS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function IS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(It(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function DS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function LS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;fd.set(i),t.uniformMatrix2fv(this.addr,!1,fd),Dt(n,i)}}function US(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;ud.set(i),t.uniformMatrix3fv(this.addr,!1,ud),Dt(n,i)}}function NS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(It(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(It(n,i))return;cd.set(i),t.uniformMatrix4fv(this.addr,!1,cd),Dt(n,i)}}function FS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function OS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function BS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function kS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function zS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(It(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function VS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(It(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function GS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(It(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function WS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(od.compareFunction=yp,s=od):s=kp,n.setTexture2D(e||s,r)}function XS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Hp,r)}function qS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Vp,r)}function $S(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||zp,r)}function YS(t){switch(t){case 5126:return CS;case 35664:return PS;case 35665:return IS;case 35666:return DS;case 35674:return LS;case 35675:return US;case 35676:return NS;case 5124:case 35670:return FS;case 35667:case 35671:return OS;case 35668:case 35672:return BS;case 35669:case 35673:return kS;case 5125:return zS;case 36294:return HS;case 36295:return VS;case 36296:return GS;case 35678:case 36198:case 36298:case 36306:case 35682:return WS;case 35679:case 36299:case 36307:return XS;case 35680:case 36300:case 36308:case 36293:return qS;case 36289:case 36303:case 36311:case 36292:return $S}}function jS(t,e){t.uniform1fv(this.addr,e)}function KS(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function ZS(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function JS(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function QS(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function eM(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tM(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nM(t,e){t.uniform1iv(this.addr,e)}function iM(t,e){t.uniform2iv(this.addr,e)}function rM(t,e){t.uniform3iv(this.addr,e)}function sM(t,e){t.uniform4iv(this.addr,e)}function oM(t,e){t.uniform1uiv(this.addr,e)}function aM(t,e){t.uniform2uiv(this.addr,e)}function lM(t,e){t.uniform3uiv(this.addr,e)}function cM(t,e){t.uniform4uiv(this.addr,e)}function uM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||kp,s[o])}function fM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Hp,s[o])}function dM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Vp,s[o])}function hM(t,e,n){const i=this.cache,r=e.length,s=Ea(n,r);It(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||zp,s[o])}function pM(t){switch(t){case 5126:return jS;case 35664:return KS;case 35665:return ZS;case 35666:return JS;case 35674:return QS;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return oM;case 36294:return aM;case 36295:return lM;case 36296:return cM;case 35678:case 36198:case 36298:case 36306:case 35682:return uM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class mM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=YS(n.type)}}class gM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pM(n.type)}}class _M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Sl=/(\w+)(\])?(\[|\.)?/g;function dd(t,e){t.seq.push(e),t.map[e.id]=e}function vM(t,e,n){const i=t.name,r=i.length;for(Sl.lastIndex=0;;){const s=Sl.exec(i),o=Sl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){dd(n,c===void 0?new mM(a,t,e):new gM(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new _M(a),dd(n,f)),n=f}}}class Wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);vM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function hd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xM=37297;let bM=0;function yM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const pd=new Je;function SM(t){st._getMatrix(pd,st.workingColorSpace,t);const e=`mat3( ${pd.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case ra:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function md(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+yM(t.getShaderSource(e),a)}else return s}function MM(t,e){const n=SM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function EM(t,e){let n;switch(e){case Pv:n="Linear";break;case Iv:n="Reinhard";break;case Dv:n="Cineon";break;case Lv:n="ACESFilmic";break;case Nv:n="AgX";break;case Fv:n="Neutral";break;case Uv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Do=new J;function TM(){st.getLuminanceCoefficients(Do);const t=Do.x.toFixed(4),e=Do.y.toFixed(4),n=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function wM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function RM(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function vs(t){return t!==""}function gd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _d(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(t){return t.replace(CM,IM)}const PM=new Map;function IM(t,e){let n=Qe[e];if(n===void 0){const i=PM.get(e);if(i!==void 0)n=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ic(n)}const DM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(t){return t.replace(DM,LM)}function LM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function xd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function UM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===up?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===cv?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Qn&&(e="SHADOWMAP_TYPE_VSM"),e}function NM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Kr:case Zr:e="ENVMAP_TYPE_CUBE";break;case Sa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FM(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===Zr&&(e="ENVMAP_MODE_REFRACTION"),e}function OM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case fp:e="ENVMAP_BLENDING_MULTIPLY";break;case Rv:e="ENVMAP_BLENDING_MIX";break;case Cv:e="ENVMAP_BLENDING_ADD";break}return e}function BM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function kM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UM(n),c=NM(n),u=FM(n),f=OM(n),d=BM(n),h=AM(n),g=wM(s),_=r.createProgram();let m,p,A=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(vs).join(`
`),p.length>0&&(p+=`
`)):(m=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),p=[xd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Pi?"#define TONE_MAPPING":"",n.toneMapping!==Pi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Pi?EM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,MM("linearToOutputTexel",n.outputColorSpace),TM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(vs).join(`
`)),o=Ic(o),o=gd(o,n),o=_d(o,n),a=Ic(a),a=gd(a,n),a=_d(a,n),o=vd(o),a=vd(a),n.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=A+m+o,b=A+p+a,C=hd(r,r.VERTEX_SHADER,S),P=hd(r,r.FRAGMENT_SHADER,b);r.attachShader(_,C),r.attachShader(_,P),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function I(R){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(_)||"",q=r.getShaderInfoLog(C)||"",G=r.getShaderInfoLog(P)||"",j=z.trim(),$=q.trim(),H=G.trim();let U=!0,ie=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,C,P);else{const ue=md(r,C,"vertex"),ve=md(r,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+j+`
`+ue+`
`+ve)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||H==="")&&(ie=!1);ie&&(R.diagnostics={runnable:U,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:H,prefix:p}})}r.deleteShader(C),r.deleteShader(P),L=new Wo(r,_),y=RM(r,_)}let L;this.getUniforms=function(){return L===void 0&&I(this),L};let y;this.getAttributes=function(){return y===void 0&&I(this),y};let M=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,xM)),M},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=C,this.fragmentShader=P,this}let zM=0;class HM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VM(e),n.set(e,i)),i}}class VM{constructor(e){this.id=zM++,this.code=e,this.usedTimes=0}}function GM(t,e,n,i,r,s,o){const a=new Tp,l=new HM,c=new Set,u=[],f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,M,R,z,q){const G=z.fog,j=q.geometry,$=y.isMeshStandardMaterial?z.environment:null,H=(y.isMeshStandardMaterial?n:e).get(y.envMap||$),U=H&&H.mapping===Sa?H.image.height:null,ie=g[y.type];y.precision!==null&&(h=r.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=ue!==void 0?ue.length:0;let Se=0;j.morphAttributes.position!==void 0&&(Se=1),j.morphAttributes.normal!==void 0&&(Se=2),j.morphAttributes.color!==void 0&&(Se=3);let Ze,Ve,ne,me;if(ie){const ot=On[ie];Ze=ot.vertexShader,Ve=ot.fragmentShader}else Ze=y.vertexShader,Ve=y.fragmentShader,l.update(y),ne=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const F=t.getRenderTarget(),se=t.state.buffers.depth.getReversed(),re=q.isInstancedMesh===!0,fe=q.isBatchedMesh===!0,Le=!!y.map,w=!!y.matcap,v=!!H,O=!!y.aoMap,D=!!y.lightMap,Y=!!y.bumpMap,X=!!y.normalMap,de=!!y.displacementMap,ee=!!y.emissiveMap,ae=!!y.metalnessMap,le=!!y.roughnessMap,Te=y.anisotropy>0,E=y.clearcoat>0,x=y.dispersion>0,N=y.iridescence>0,K=y.sheen>0,oe=y.transmission>0,Z=Te&&!!y.anisotropyMap,we=E&&!!y.clearcoatMap,he=E&&!!y.clearcoatNormalMap,Re=E&&!!y.clearcoatRoughnessMap,Ce=N&&!!y.iridescenceMap,pe=N&&!!y.iridescenceThicknessMap,Ee=K&&!!y.sheenColorMap,Ue=K&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,ye=!!y.specularColorMap,Ye=!!y.specularIntensityMap,B=oe&&!!y.transmissionMap,xe=oe&&!!y.thicknessMap,be=!!y.gradientMap,De=!!y.alphaMap,ge=y.alphaTest>0,ce=!!y.alphaHash,Oe=!!y.extensions;let Ke=Pi;y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const mt={shaderID:ie,shaderType:y.type,shaderName:y.name,vertexShader:Ze,fragmentShader:Ve,defines:y.defines,customVertexShaderID:ne,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,batching:fe,batchingColor:fe&&q._colorsTexture!==null,instancing:re,instancingColor:re&&q.instanceColor!==null,instancingMorph:re&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Jr,alphaToCoverage:!!y.alphaToCoverage,map:Le,matcap:w,envMap:v,envMapMode:v&&H.mapping,envMapCubeUVHeight:U,aoMap:O,lightMap:D,bumpMap:Y,normalMap:X,displacementMap:d&&de,emissiveMap:ee,normalMapObjectSpace:X&&y.normalMapType===Hv,normalMapTangentSpace:X&&y.normalMapType===zv,metalnessMap:ae,roughnessMap:le,anisotropy:Te,anisotropyMap:Z,clearcoat:E,clearcoatMap:we,clearcoatNormalMap:he,clearcoatRoughnessMap:Re,dispersion:x,iridescence:N,iridescenceMap:Ce,iridescenceThicknessMap:pe,sheen:K,sheenColorMap:Ee,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:ye,specularIntensityMap:Ye,transmission:oe,transmissionMap:B,thicknessMap:xe,gradientMap:be,opaque:y.transparent===!1&&y.blending===zr&&y.alphaToCoverage===!1,alphaMap:De,alphaTest:ge,alphaHash:ce,combine:y.combine,mapUv:Le&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:D&&_(y.lightMap.channel),bumpMapUv:Y&&_(y.bumpMap.channel),normalMapUv:X&&_(y.normalMap.channel),displacementMapUv:de&&_(y.displacementMap.channel),emissiveMapUv:ee&&_(y.emissiveMap.channel),metalnessMapUv:ae&&_(y.metalnessMap.channel),roughnessMapUv:le&&_(y.roughnessMap.channel),anisotropyMapUv:Z&&_(y.anisotropyMap.channel),clearcoatMapUv:we&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:he&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&_(y.sheenRoughnessMap.channel),specularMapUv:Pe&&_(y.specularMap.channel),specularColorMapUv:ye&&_(y.specularColorMap.channel),specularIntensityMapUv:Ye&&_(y.specularIntensityMap.channel),transmissionMapUv:B&&_(y.transmissionMap.channel),thicknessMapUv:xe&&_(y.thicknessMap.channel),alphaMapUv:De&&_(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(X||Te),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(Le||De),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:se,skinning:q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Se,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&R.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Le&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===ut,decodeVideoTextureEmissive:ee&&y.emissiveMap.isVideoTexture===!0&&st.getTransfer(y.emissiveMap.colorSpace)===ut,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Bn,flipSided:y.side===tn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Oe&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&y.extensions.multiDraw===!0||fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mt.vertexUv1s=c.has(1),mt.vertexUv2s=c.has(2),mt.vertexUv3s=c.has(3),c.clear(),mt}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const R in y.defines)M.push(R),M.push(y.defines[R]);return y.isRawShaderMaterial===!1&&(A(M,y),S(M,y),M.push(t.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function A(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),M.gradientMap&&a.enable(22),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){const M=g[y.type];let R;if(M){const z=On[M];R=gx.clone(z.uniforms)}else R=y.uniforms;return R}function C(y,M){let R;for(let z=0,q=u.length;z<q;z++){const G=u[z];if(G.cacheKey===M){R=G,++R.usedTimes;break}}return R===void 0&&(R=new kM(t,M,y,s),u.push(R)),R}function P(y){if(--y.usedTimes===0){const M=u.indexOf(y);u[M]=u[u.length-1],u.pop(),y.destroy()}}function I(y){l.remove(y)}function L(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:b,acquireProgram:C,releaseProgram:P,releaseShaderCache:I,programs:u,dispose:L}}function WM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function XM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function yd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,_,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function a(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,_,m){const p=o(f,d,h,g,_,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||XM),i.length>1&&i.sort(d||bd),r.length>1&&r.sort(d||bd)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function qM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new yd,t.set(i,[o])):r>=s.length?(o=new yd,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $M(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new qe};break;case"SpotLight":n={position:new J,direction:new J,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function YM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let jM=0;function KM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZM(t){const e=new $M,n=YM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new wt,o=new wt;function a(c){let u=0,f=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,A=0,S=0,b=0,C=0,P=0,I=0;c.sort(KM);for(let y=0,M=c.length;y<M;y++){const R=c[y],z=R.color,q=R.intensity,G=R.distance,j=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=z.r*q,f+=z.g*q,d+=z.b*q;else if(R.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(R.sh.coefficients[$],q);I++}else if(R.isDirectionalLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const H=R.shadow,U=n.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.directionalShadow[h]=U,i.directionalShadowMap[h]=j,i.directionalShadowMatrix[h]=R.shadow.matrix,A++}i.directional[h]=$,h++}else if(R.isSpotLight){const $=e.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(z).multiplyScalar(q),$.distance=G,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,i.spot[_]=$;const H=R.shadow;if(R.map&&(i.spotLightMap[C]=R.map,C++,H.updateMatrices(R),R.castShadow&&P++),i.spotLightMatrix[_]=H.matrix,R.castShadow){const U=n.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,i.spotShadow[_]=U,i.spotShadowMap[_]=j,b++}_++}else if(R.isRectAreaLight){const $=e.get(R);$.color.copy(z).multiplyScalar(q),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),i.rectArea[m]=$,m++}else if(R.isPointLight){const $=e.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const H=R.shadow,U=n.get(R);U.shadowIntensity=H.intensity,U.shadowBias=H.bias,U.shadowNormalBias=H.normalBias,U.shadowRadius=H.radius,U.shadowMapSize=H.mapSize,U.shadowCameraNear=H.camera.near,U.shadowCameraFar=H.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=R.shadow.matrix,S++}i.point[g]=$,g++}else if(R.isHemisphereLight){const $=e.get(R);$.skyColor.copy(R.color).multiplyScalar(q),$.groundColor.copy(R.groundColor).multiplyScalar(q),i.hemi[p]=$,p++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const L=i.hash;(L.directionalLength!==h||L.pointLength!==g||L.spotLength!==_||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==A||L.numPointShadows!==S||L.numSpotShadows!==b||L.numSpotMaps!==C||L.numLightProbes!==I)&&(i.directional.length=h,i.spot.length=_,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=A,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=b+C-P,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=I,L.directionalLength=h,L.pointLength=g,L.spotLength=_,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=A,L.numPointShadows=S,L.numSpotShadows=b,L.numSpotMaps=C,L.numLightProbes=I,i.version=jM++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const S=c[p];if(S.isDirectionalLight){const b=i.directional[f];b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),f++}else if(S.isSpotLight){const b=i.spot[h];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(r),b.direction.transformDirection(m),h++}else if(S.isRectAreaLight){const b=i.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const b=i.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=i.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function Sd(t){const e=new ZM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function JM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Sd(t),e.set(r,[a])):s>=o.length?(a=new Sd(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const QM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eE=`uniform sampler2D shadow_pass;
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
}`;function tE(t,e,n){let i=new Np;const r=new nt,s=new nt,o=new At,a=new wx({depthPacking:kv}),l=new Rx,c={},u=n.maxTextureSize,f={[Ui]:tn,[tn]:Ui,[Bn]:Bn},d=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:QM,fragmentShader:eE}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Dn;g.setAttribute("position",new Jt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Hn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=up;let p=this.type;this.render=function(P,I,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const y=t.getRenderTarget(),M=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ci),z.buffers.depth.getReversed()?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=p!==Qn&&this.type===Qn,G=p===Qn&&this.type!==Qn;for(let j=0,$=P.length;j<$;j++){const H=P[j],U=H.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ie=U.getFrameExtents();if(r.multiply(ie),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ie.x),r.x=s.x*ie.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ie.y),r.y=s.y*ie.y,U.mapSize.y=s.y)),U.map===null||q===!0||G===!0){const ve=this.type!==Qn?{minFilter:wn,magFilter:wn}:{};U.map!==null&&U.map.dispose(),U.map=new cr(r.x,r.y,ve),U.map.texture.name=H.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const ue=U.getViewportCount();for(let ve=0;ve<ue;ve++){const Se=U.getViewport(ve);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),z.viewport(o),U.updateMatrices(H,ve),i=U.getFrustum(),b(I,L,U.camera,H,this.type)}U.isPointLightShadow!==!0&&this.type===Qn&&A(U,L),U.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(y,M,R)};function A(P,I){const L=e.update(_);d.defines.VSM_SAMPLES!==P.blurSamples&&(d.defines.VSM_SAMPLES=P.blurSamples,h.defines.VSM_SAMPLES=P.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new cr(r.x,r.y)),d.uniforms.shadow_pass.value=P.map.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,t.setRenderTarget(P.mapPass),t.clear(),t.renderBufferDirect(I,null,L,d,_,null),h.uniforms.shadow_pass.value=P.mapPass.texture,h.uniforms.resolution.value=P.mapSize,h.uniforms.radius.value=P.radius,t.setRenderTarget(P.map),t.clear(),t.renderBufferDirect(I,null,L,h,_,null)}function S(P,I,L,y){let M=null;const R=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)M=R;else if(M=L.isPointLight===!0?l:a,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const z=M.uuid,q=I.uuid;let G=c[z];G===void 0&&(G={},c[z]=G);let j=G[q];j===void 0&&(j=M.clone(),G[q]=j,I.addEventListener("dispose",C)),M=j}if(M.visible=I.visible,M.wireframe=I.wireframe,y===Qn?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:f[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,L.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=t.properties.get(M);z.light=L}return M}function b(P,I,L,y,M){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&M===Qn)&&(!P.frustumCulled||i.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const q=e.update(P),G=P.material;if(Array.isArray(G)){const j=q.groups;for(let $=0,H=j.length;$<H;$++){const U=j[$],ie=G[U.materialIndex];if(ie&&ie.visible){const ue=S(P,ie,y,M);P.onBeforeShadow(t,P,I,L,q,ue,U),t.renderBufferDirect(L,null,q,ue,P,U),P.onAfterShadow(t,P,I,L,q,ue,U)}}}else if(G.visible){const j=S(P,G,y,M);P.onBeforeShadow(t,P,I,L,q,j,null),t.renderBufferDirect(L,null,q,j,P,null),P.onAfterShadow(t,P,I,L,q,j,null)}}const z=P.children;for(let q=0,G=z.length;q<G;q++)b(z[q],I,L,y,M)}function C(P){P.target.removeEventListener("dispose",C);for(const L in c){const y=c[L],M=P.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const nE={[Wl]:Xl,[ql]:jl,[$l]:Kl,[jr]:Yl,[Xl]:Wl,[jl]:ql,[Kl]:$l,[Yl]:jr};function iE(t,e){function n(){let B=!1;const xe=new At;let be=null;const De=new At(0,0,0,0);return{setMask:function(ge){be!==ge&&!B&&(t.colorMask(ge,ge,ge,ge),be=ge)},setLocked:function(ge){B=ge},setClear:function(ge,ce,Oe,Ke,mt){mt===!0&&(ge*=Ke,ce*=Ke,Oe*=Ke),xe.set(ge,ce,Oe,Ke),De.equals(xe)===!1&&(t.clearColor(ge,ce,Oe,Ke),De.copy(xe))},reset:function(){B=!1,be=null,De.set(-1,0,0,0)}}}function i(){let B=!1,xe=!1,be=null,De=null,ge=null;return{setReversed:function(ce){if(xe!==ce){const Oe=e.get("EXT_clip_control");ce?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),xe=ce;const Ke=ge;ge=null,this.setClear(Ke)}},getReversed:function(){return xe},setTest:function(ce){ce?F(t.DEPTH_TEST):se(t.DEPTH_TEST)},setMask:function(ce){be!==ce&&!B&&(t.depthMask(ce),be=ce)},setFunc:function(ce){if(xe&&(ce=nE[ce]),De!==ce){switch(ce){case Wl:t.depthFunc(t.NEVER);break;case Xl:t.depthFunc(t.ALWAYS);break;case ql:t.depthFunc(t.LESS);break;case jr:t.depthFunc(t.LEQUAL);break;case $l:t.depthFunc(t.EQUAL);break;case Yl:t.depthFunc(t.GEQUAL);break;case jl:t.depthFunc(t.GREATER);break;case Kl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}De=ce}},setLocked:function(ce){B=ce},setClear:function(ce){ge!==ce&&(xe&&(ce=1-ce),t.clearDepth(ce),ge=ce)},reset:function(){B=!1,be=null,De=null,ge=null,xe=!1}}}function r(){let B=!1,xe=null,be=null,De=null,ge=null,ce=null,Oe=null,Ke=null,mt=null;return{setTest:function(ot){B||(ot?F(t.STENCIL_TEST):se(t.STENCIL_TEST))},setMask:function(ot){xe!==ot&&!B&&(t.stencilMask(ot),xe=ot)},setFunc:function(ot,Wn,Ln){(be!==ot||De!==Wn||ge!==Ln)&&(t.stencilFunc(ot,Wn,Ln),be=ot,De=Wn,ge=Ln)},setOp:function(ot,Wn,Ln){(ce!==ot||Oe!==Wn||Ke!==Ln)&&(t.stencilOp(ot,Wn,Ln),ce=ot,Oe=Wn,Ke=Ln)},setLocked:function(ot){B=ot},setClear:function(ot){mt!==ot&&(t.clearStencil(ot),mt=ot)},reset:function(){B=!1,xe=null,be=null,De=null,ge=null,ce=null,Oe=null,Ke=null,mt=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,S=null,b=null,C=null,P=null,I=new qe(0,0,0),L=0,y=!1,M=null,R=null,z=null,q=null,G=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(U)[1]),$=H>=1):U.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),$=H>=2);let ie=null,ue={};const ve=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),Ze=new At().fromArray(ve),Ve=new At().fromArray(Se);function ne(B,xe,be,De){const ge=new Uint8Array(4),ce=t.createTexture();t.bindTexture(B,ce),t.texParameteri(B,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(B,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<be;Oe++)B===t.TEXTURE_3D||B===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,De,0,t.RGBA,t.UNSIGNED_BYTE,ge):t.texImage2D(xe+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ge);return ce}const me={};me[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),me[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),me[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(jr),Y(!1),X(Tf),F(t.CULL_FACE),O(Ci);function F(B){u[B]!==!0&&(t.enable(B),u[B]=!0)}function se(B){u[B]!==!1&&(t.disable(B),u[B]=!1)}function re(B,xe){return f[B]!==xe?(t.bindFramebuffer(B,xe),f[B]=xe,B===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=xe),B===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function fe(B,xe){let be=h,De=!1;if(B){be=d.get(xe),be===void 0&&(be=[],d.set(xe,be));const ge=B.textures;if(be.length!==ge.length||be[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Oe=ge.length;ce<Oe;ce++)be[ce]=t.COLOR_ATTACHMENT0+ce;be.length=ge.length,De=!0}}else be[0]!==t.BACK&&(be[0]=t.BACK,De=!0);De&&t.drawBuffers(be)}function Le(B){return g!==B?(t.useProgram(B),g=B,!0):!1}const w={[er]:t.FUNC_ADD,[fv]:t.FUNC_SUBTRACT,[dv]:t.FUNC_REVERSE_SUBTRACT};w[hv]=t.MIN,w[pv]=t.MAX;const v={[mv]:t.ZERO,[gv]:t.ONE,[_v]:t.SRC_COLOR,[Vl]:t.SRC_ALPHA,[Mv]:t.SRC_ALPHA_SATURATE,[yv]:t.DST_COLOR,[xv]:t.DST_ALPHA,[vv]:t.ONE_MINUS_SRC_COLOR,[Gl]:t.ONE_MINUS_SRC_ALPHA,[Sv]:t.ONE_MINUS_DST_COLOR,[bv]:t.ONE_MINUS_DST_ALPHA,[Ev]:t.CONSTANT_COLOR,[Tv]:t.ONE_MINUS_CONSTANT_COLOR,[Av]:t.CONSTANT_ALPHA,[wv]:t.ONE_MINUS_CONSTANT_ALPHA};function O(B,xe,be,De,ge,ce,Oe,Ke,mt,ot){if(B===Ci){_===!0&&(se(t.BLEND),_=!1);return}if(_===!1&&(F(t.BLEND),_=!0),B!==uv){if(B!==m||ot!==y){if((p!==er||b!==er)&&(t.blendEquation(t.FUNC_ADD),p=er,b=er),ot)switch(B){case zr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fs:t.blendFunc(t.ONE,t.ONE);break;case Af:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case wf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case zr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Af:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wf:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}A=null,S=null,C=null,P=null,I.set(0,0,0),L=0,m=B,y=ot}return}ge=ge||xe,ce=ce||be,Oe=Oe||De,(xe!==p||ge!==b)&&(t.blendEquationSeparate(w[xe],w[ge]),p=xe,b=ge),(be!==A||De!==S||ce!==C||Oe!==P)&&(t.blendFuncSeparate(v[be],v[De],v[ce],v[Oe]),A=be,S=De,C=ce,P=Oe),(Ke.equals(I)===!1||mt!==L)&&(t.blendColor(Ke.r,Ke.g,Ke.b,mt),I.copy(Ke),L=mt),m=B,y=!1}function D(B,xe){B.side===Bn?se(t.CULL_FACE):F(t.CULL_FACE);let be=B.side===tn;xe&&(be=!be),Y(be),B.blending===zr&&B.transparent===!1?O(Ci):O(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const De=B.stencilWrite;a.setTest(De),De&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),ee(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):se(t.SAMPLE_ALPHA_TO_COVERAGE)}function Y(B){M!==B&&(B?t.frontFace(t.CW):t.frontFace(t.CCW),M=B)}function X(B){B!==av?(F(t.CULL_FACE),B!==R&&(B===Tf?t.cullFace(t.BACK):B===lv?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):se(t.CULL_FACE),R=B}function de(B){B!==z&&($&&t.lineWidth(B),z=B)}function ee(B,xe,be){B?(F(t.POLYGON_OFFSET_FILL),(q!==xe||G!==be)&&(t.polygonOffset(xe,be),q=xe,G=be)):se(t.POLYGON_OFFSET_FILL)}function ae(B){B?F(t.SCISSOR_TEST):se(t.SCISSOR_TEST)}function le(B){B===void 0&&(B=t.TEXTURE0+j-1),ie!==B&&(t.activeTexture(B),ie=B)}function Te(B,xe,be){be===void 0&&(ie===null?be=t.TEXTURE0+j-1:be=ie);let De=ue[be];De===void 0&&(De={type:void 0,texture:void 0},ue[be]=De),(De.type!==B||De.texture!==xe)&&(ie!==be&&(t.activeTexture(be),ie=be),t.bindTexture(B,xe||me[B]),De.type=B,De.texture=xe)}function E(){const B=ue[ie];B!==void 0&&B.type!==void 0&&(t.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function x(){try{t.compressedTexImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function K(){try{t.texSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{t.texSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{t.compressedTexSubImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{t.texStorage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Re(){try{t.texStorage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{t.texImage2D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function pe(){try{t.texImage3D(...arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ee(B){Ze.equals(B)===!1&&(t.scissor(B.x,B.y,B.z,B.w),Ze.copy(B))}function Ue(B){Ve.equals(B)===!1&&(t.viewport(B.x,B.y,B.z,B.w),Ve.copy(B))}function Pe(B,xe){let be=c.get(xe);be===void 0&&(be=new WeakMap,c.set(xe,be));let De=be.get(B);De===void 0&&(De=t.getUniformBlockIndex(xe,B.name),be.set(B,De))}function ye(B,xe){const De=c.get(xe).get(B);l.get(xe)!==De&&(t.uniformBlockBinding(xe,De,B.__bindingPointIndex),l.set(xe,De))}function Ye(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ie=null,ue={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,A=null,S=null,b=null,C=null,P=null,I=new qe(0,0,0),L=0,y=!1,M=null,R=null,z=null,q=null,G=null,Ze.set(0,0,t.canvas.width,t.canvas.height),Ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:se,bindFramebuffer:re,drawBuffers:fe,useProgram:Le,setBlending:O,setMaterial:D,setFlipSided:Y,setCullFace:X,setLineWidth:de,setPolygonOffset:ee,setScissorTest:ae,activeTexture:le,bindTexture:Te,unbindTexture:E,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ce,texImage3D:pe,updateUBOMapping:Pe,uniformBlockBinding:ye,texStorage2D:he,texStorage3D:Re,texSubImage2D:K,texSubImage3D:oe,compressedTexSubImage2D:Z,compressedTexSubImage3D:we,scissor:Ee,viewport:Ue,reset:Ye}}function rE(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,x){return h?new OffscreenCanvas(E,x):oa("canvas")}function _(E,x,N){let K=1;const oe=Te(E);if((oe.width>N||oe.height>N)&&(K=N/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const Z=Math.floor(K*oe.width),we=Math.floor(K*oe.height);f===void 0&&(f=g(Z,we));const he=x?g(Z,we):f;return he.width=Z,he.height=we,he.getContext("2d").drawImage(E,0,0,Z,we),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+Z+"x"+we+")."),he}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),E;return E}function m(E){return E.generateMipmaps}function p(E){t.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(E,x,N,K,oe=!1){if(E!==null){if(t[E]!==void 0)return t[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let Z=x;if(x===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8)),x===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),x===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8)),x===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),x===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),x===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),x===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),x===t.RGBA){const we=oe?ra:st.getTransfer(K);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=we===ut?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function b(E,x){let N;return E?x===null||x===lr||x===Bs?N=t.DEPTH24_STENCIL8:x===ri?N=t.DEPTH32F_STENCIL8:x===Os&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===lr||x===Bs?N=t.DEPTH_COMPONENT24:x===ri?N=t.DEPTH_COMPONENT32F:x===Os&&(N=t.DEPTH_COMPONENT16),N}function C(E,x){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==wn&&E.minFilter!==Gt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function P(E){const x=E.target;x.removeEventListener("dispose",P),L(x),x.isVideoTexture&&u.delete(x)}function I(E){const x=E.target;x.removeEventListener("dispose",I),M(x)}function L(E){const x=i.get(E);if(x.__webglInit===void 0)return;const N=E.source,K=d.get(N);if(K){const oe=K[x.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&y(E),Object.keys(K).length===0&&d.delete(N)}i.remove(E)}function y(E){const x=i.get(E);t.deleteTexture(x.__webglTexture);const N=E.source,K=d.get(N);delete K[x.__cacheKey],o.memory.textures--}function M(E){const x=i.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),i.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let oe=0;oe<x.__webglFramebuffer[K].length;oe++)t.deleteFramebuffer(x.__webglFramebuffer[K][oe]);else t.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)t.deleteFramebuffer(x.__webglFramebuffer[K]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=E.textures;for(let K=0,oe=N.length;K<oe;K++){const Z=i.get(N[K]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(N[K])}i.remove(E)}let R=0;function z(){R=0}function q(){const E=R;return E>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+r.maxTextures),R+=1,E}function G(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function j(E,x){const N=i.get(E);if(E.isVideoTexture&&ae(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&N.__version!==E.version){const K=E.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{me(N,E,x);return}}else E.isExternalTexture&&(N.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+x)}function $(E,x){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){me(N,E,x);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+x)}function H(E,x){const N=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&N.__version!==E.version){me(N,E,x);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+x)}function U(E,x){const N=i.get(E);if(E.version>0&&N.__version!==E.version){F(N,E,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+x)}const ie={[Ql]:t.REPEAT,[ir]:t.CLAMP_TO_EDGE,[ec]:t.MIRRORED_REPEAT},ue={[wn]:t.NEAREST,[Ov]:t.NEAREST_MIPMAP_NEAREST,[oo]:t.NEAREST_MIPMAP_LINEAR,[Gt]:t.LINEAR,[Xa]:t.LINEAR_MIPMAP_NEAREST,[rr]:t.LINEAR_MIPMAP_LINEAR},ve={[Vv]:t.NEVER,[Yv]:t.ALWAYS,[Gv]:t.LESS,[yp]:t.LEQUAL,[Wv]:t.EQUAL,[$v]:t.GEQUAL,[Xv]:t.GREATER,[qv]:t.NOTEQUAL};function Se(E,x){if(x.type===ri&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Gt||x.magFilter===Xa||x.magFilter===oo||x.magFilter===rr||x.minFilter===Gt||x.minFilter===Xa||x.minFilter===oo||x.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,ie[x.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,ie[x.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,ie[x.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,ue[x.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ve[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===wn||x.minFilter!==oo&&x.minFilter!==rr||x.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ze(E,x){let N=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",P));const K=x.source;let oe=d.get(K);oe===void 0&&(oe={},d.set(K,oe));const Z=G(x);if(Z!==E.__cacheKey){oe[Z]===void 0&&(oe[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),oe[Z].usedTimes++;const we=oe[E.__cacheKey];we!==void 0&&(oe[E.__cacheKey].usedTimes--,we.usedTimes===0&&y(x)),E.__cacheKey=Z,E.__webglTexture=oe[Z].texture}return N}function Ve(E,x,N){return Math.floor(Math.floor(E/N)/x)}function ne(E,x,N,K){const Z=E.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,N,K,x.data);else{Z.sort((pe,Ee)=>pe.start-Ee.start);let we=0;for(let pe=1;pe<Z.length;pe++){const Ee=Z[we],Ue=Z[pe],Pe=Ee.start+Ee.count,ye=Ve(Ue.start,x.width,4),Ye=Ve(Ee.start,x.width,4);Ue.start<=Pe+1&&ye===Ye&&Ve(Ue.start+Ue.count-1,x.width,4)===ye?Ee.count=Math.max(Ee.count,Ue.start+Ue.count-Ee.start):(++we,Z[we]=Ue)}Z.length=we+1;const he=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Ce=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let pe=0,Ee=Z.length;pe<Ee;pe++){const Ue=Z[pe],Pe=Math.floor(Ue.start/4),ye=Math.ceil(Ue.count/4),Ye=Pe%x.width,B=Math.floor(Pe/x.width),xe=ye,be=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(t.UNPACK_SKIP_ROWS,B),n.texSubImage2D(t.TEXTURE_2D,0,Ye,B,xe,be,N,K,x.data)}E.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,he),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ce)}}function me(E,x,N){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const oe=Ze(E,x),Z=x.source;n.bindTexture(K,E.__webglTexture,t.TEXTURE0+N);const we=i.get(Z);if(Z.version!==we.__version||oe===!0){n.activeTexture(t.TEXTURE0+N);const he=st.getPrimaries(st.workingColorSpace),Re=x.colorSpace===wi?null:st.getPrimaries(x.colorSpace),Ce=x.colorSpace===wi||he===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let pe=_(x.image,!1,r.maxTextureSize);pe=le(x,pe);const Ee=s.convert(x.format,x.colorSpace),Ue=s.convert(x.type);let Pe=S(x.internalFormat,Ee,Ue,x.colorSpace,x.isVideoTexture);Se(K,x);let ye;const Ye=x.mipmaps,B=x.isVideoTexture!==!0,xe=we.__version===void 0||oe===!0,be=Z.dataReady,De=C(x,pe);if(x.isDepthTexture)Pe=b(x.format===zs,x.type),xe&&(B?n.texStorage2D(t.TEXTURE_2D,1,Pe,pe.width,pe.height):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Ue,null));else if(x.isDataTexture)if(Ye.length>0){B&&xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Ye[0].width,Ye[0].height);for(let ge=0,ce=Ye.length;ge<ce;ge++)ye=Ye[ge],B?be&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,Ee,Ue,ye.data);x.generateMipmaps=!1}else B?(xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,pe.width,pe.height),be&&ne(x,pe,Ee,Ue)):n.texImage2D(t.TEXTURE_2D,0,Pe,pe.width,pe.height,0,Ee,Ue,pe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){B&&xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,Ye[0].width,Ye[0].height,pe.depth);for(let ge=0,ce=Ye.length;ge<ce;ge++)if(ye=Ye[ge],x.format!==Tn)if(Ee!==null)if(B){if(be)if(x.layerUpdates.size>0){const Oe=Jf(ye.width,ye.height,x.format,x.type);for(const Ke of x.layerUpdates){const mt=ye.data.subarray(Ke*Oe/ye.data.BYTES_PER_ELEMENT,(Ke+1)*Oe/ye.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,Ke,ye.width,ye.height,1,Ee,mt)}x.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,pe.depth,Ee,ye.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,ye.width,ye.height,pe.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?be&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ge,0,0,0,ye.width,ye.height,pe.depth,Ee,Ue,ye.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ge,Pe,ye.width,ye.height,pe.depth,0,Ee,Ue,ye.data)}else{B&&xe&&n.texStorage2D(t.TEXTURE_2D,De,Pe,Ye[0].width,Ye[0].height);for(let ge=0,ce=Ye.length;ge<ce;ge++)ye=Ye[ge],x.format!==Tn?Ee!==null?B?be&&n.compressedTexSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,ye.data):n.compressedTexImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?be&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,ye.width,ye.height,Ee,Ue,ye.data):n.texImage2D(t.TEXTURE_2D,ge,Pe,ye.width,ye.height,0,Ee,Ue,ye.data)}else if(x.isDataArrayTexture)if(B){if(xe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,Pe,pe.width,pe.height,pe.depth),be)if(x.layerUpdates.size>0){const ge=Jf(pe.width,pe.height,x.format,x.type);for(const ce of x.layerUpdates){const Oe=pe.data.subarray(ce*ge/pe.data.BYTES_PER_ELEMENT,(ce+1)*ge/pe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ce,pe.width,pe.height,1,Ee,Ue,Oe)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ue,pe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Ue,pe.data);else if(x.isData3DTexture)B?(xe&&n.texStorage3D(t.TEXTURE_3D,De,Pe,pe.width,pe.height,pe.depth),be&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,pe.width,pe.height,pe.depth,Ee,Ue,pe.data)):n.texImage3D(t.TEXTURE_3D,0,Pe,pe.width,pe.height,pe.depth,0,Ee,Ue,pe.data);else if(x.isFramebufferTexture){if(xe)if(B)n.texStorage2D(t.TEXTURE_2D,De,Pe,pe.width,pe.height);else{let ge=pe.width,ce=pe.height;for(let Oe=0;Oe<De;Oe++)n.texImage2D(t.TEXTURE_2D,Oe,Pe,ge,ce,0,Ee,Ue,null),ge>>=1,ce>>=1}}else if(Ye.length>0){if(B&&xe){const ge=Te(Ye[0]);n.texStorage2D(t.TEXTURE_2D,De,Pe,ge.width,ge.height)}for(let ge=0,ce=Ye.length;ge<ce;ge++)ye=Ye[ge],B?be&&n.texSubImage2D(t.TEXTURE_2D,ge,0,0,Ee,Ue,ye):n.texImage2D(t.TEXTURE_2D,ge,Pe,Ee,Ue,ye);x.generateMipmaps=!1}else if(B){if(xe){const ge=Te(pe);n.texStorage2D(t.TEXTURE_2D,De,Pe,ge.width,ge.height)}be&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ue,pe)}else n.texImage2D(t.TEXTURE_2D,0,Pe,Ee,Ue,pe);m(x)&&p(K),we.__version=Z.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function F(E,x,N){if(x.image.length!==6)return;const K=Ze(E,x),oe=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+N);const Z=i.get(oe);if(oe.version!==Z.__version||K===!0){n.activeTexture(t.TEXTURE0+N);const we=st.getPrimaries(st.workingColorSpace),he=x.colorSpace===wi?null:st.getPrimaries(x.colorSpace),Re=x.colorSpace===wi||we===he?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,pe=x.image[0]&&x.image[0].isDataTexture,Ee=[];for(let ce=0;ce<6;ce++)!Ce&&!pe?Ee[ce]=_(x.image[ce],!0,r.maxCubemapSize):Ee[ce]=pe?x.image[ce].image:x.image[ce],Ee[ce]=le(x,Ee[ce]);const Ue=Ee[0],Pe=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),Ye=S(x.internalFormat,Pe,ye,x.colorSpace),B=x.isVideoTexture!==!0,xe=Z.__version===void 0||K===!0,be=oe.dataReady;let De=C(x,Ue);Se(t.TEXTURE_CUBE_MAP,x);let ge;if(Ce){B&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ye,Ue.width,Ue.height);for(let ce=0;ce<6;ce++){ge=Ee[ce].mipmaps;for(let Oe=0;Oe<ge.length;Oe++){const Ke=ge[Oe];x.format!==Tn?Pe!==null?B?be&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ke.width,Ke.height,Pe,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,Ye,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,0,0,Ke.width,Ke.height,Pe,ye,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe,Ye,Ke.width,Ke.height,0,Pe,ye,Ke.data)}}}else{if(ge=x.mipmaps,B&&xe){ge.length>0&&De++;const ce=Te(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,De,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(pe){B?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ee[ce].width,Ee[ce].height,Pe,ye,Ee[ce].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Ee[ce].width,Ee[ce].height,0,Pe,ye,Ee[ce].data);for(let Oe=0;Oe<ge.length;Oe++){const mt=ge[Oe].image[ce].image;B?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,mt.width,mt.height,Pe,ye,mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,Ye,mt.width,mt.height,0,Pe,ye,mt.data)}}else{B?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Pe,ye,Ee[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,Pe,ye,Ee[ce]);for(let Oe=0;Oe<ge.length;Oe++){const Ke=ge[Oe];B?be&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,0,0,Pe,ye,Ke.image[ce]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Oe+1,Ye,Pe,ye,Ke.image[ce])}}}m(x)&&p(t.TEXTURE_CUBE_MAP),Z.__version=oe.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function se(E,x,N,K,oe,Z){const we=s.convert(N.format,N.colorSpace),he=s.convert(N.type),Re=S(N.internalFormat,we,he,N.colorSpace),Ce=i.get(x),pe=i.get(N);if(pe.__renderTarget=x,!Ce.__hasExternalTextures){const Ee=Math.max(1,x.width>>Z),Ue=Math.max(1,x.height>>Z);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,Z,Re,Ee,Ue,x.depth,0,we,he,null):n.texImage2D(oe,Z,Re,Ee,Ue,0,we,he,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,oe,pe.__webglTexture,0,de(x)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,oe,pe.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function re(E,x,N){if(t.bindRenderbuffer(t.RENDERBUFFER,E),x.depthBuffer){const K=x.depthTexture,oe=K&&K.isDepthTexture?K.type:null,Z=b(x.stencilBuffer,oe),we=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=de(x);ee(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,Z,x.width,x.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,Z,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Z,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,we,t.RENDERBUFFER,E)}else{const K=x.textures;for(let oe=0;oe<K.length;oe++){const Z=K[oe],we=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),Re=S(Z.internalFormat,we,he,Z.colorSpace),Ce=de(x);N&&ee(x)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,Re,x.width,x.height):ee(x)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,Re,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Re,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fe(E,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(x.depthTexture);K.__renderTarget=x,(!K.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),j(x.depthTexture,0);const oe=K.__webglTexture,Z=de(x);if(x.depthTexture.format===ks)ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,oe,0);else if(x.depthTexture.format===zs)ee(x)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0,Z):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function Le(E){const x=i.get(E),N=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const K=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const oe=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),x.__depthDisposeCallback=oe}x.__boundDepthTexture=K}if(E.depthTexture&&!x.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const K=E.texture.mipmaps;K&&K.length>0?fe(x.__webglFramebuffer[0],E):fe(x.__webglFramebuffer,E)}else if(N){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),re(x.__webglDepthbuffer[K],E,!1);else{const oe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,Z)}}else{const K=E.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),re(x.__webglDepthbuffer,E,!1);else{const oe=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function w(E,x,N){const K=i.get(E);x!==void 0&&se(K.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Le(E)}function v(E){const x=E.texture,N=i.get(E),K=i.get(x);E.addEventListener("dispose",I);const oe=E.textures,Z=E.isWebGLCubeRenderTarget===!0,we=oe.length>1;if(we||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[he]=[];for(let Re=0;Re<x.mipmaps.length;Re++)N.__webglFramebuffer[he][Re]=t.createFramebuffer()}else N.__webglFramebuffer[he]=t.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)N.__webglFramebuffer[he]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(we)for(let he=0,Re=oe.length;he<Re;he++){const Ce=i.get(oe[he]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=t.createTexture(),o.memory.textures++)}if(E.samples>0&&ee(E)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let he=0;he<oe.length;he++){const Re=oe[he];N.__webglColorRenderbuffer[he]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[he]);const Ce=s.convert(Re.format,Re.colorSpace),pe=s.convert(Re.type),Ee=S(Re.internalFormat,Ce,pe,Re.colorSpace,E.isXRRenderTarget===!0),Ue=de(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,N.__webglColorRenderbuffer[he])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),re(N.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Se(t.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)se(N.__webglFramebuffer[he][Re],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,Re);else se(N.__webglFramebuffer[he],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(we){for(let he=0,Re=oe.length;he<Re;he++){const Ce=oe[he],pe=i.get(Ce);let Ee=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Ee=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ee,pe.__webglTexture),Se(Ee,Ce),se(N.__webglFramebuffer,E,Ce,t.COLOR_ATTACHMENT0+he,Ee,0),m(Ce)&&p(Ee)}n.unbindTexture()}else{let he=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(he=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(he,K.__webglTexture),Se(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Re=0;Re<x.mipmaps.length;Re++)se(N.__webglFramebuffer[Re],E,x,t.COLOR_ATTACHMENT0,he,Re);else se(N.__webglFramebuffer,E,x,t.COLOR_ATTACHMENT0,he,0);m(x)&&p(he),n.unbindTexture()}E.depthBuffer&&Le(E)}function O(E){const x=E.textures;for(let N=0,K=x.length;N<K;N++){const oe=x[N];if(m(oe)){const Z=A(E),we=i.get(oe).__webglTexture;n.bindTexture(Z,we),p(Z),n.unbindTexture()}}}const D=[],Y=[];function X(E){if(E.samples>0){if(ee(E)===!1){const x=E.textures,N=E.width,K=E.height;let oe=t.COLOR_BUFFER_BIT;const Z=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,we=i.get(E),he=x.length>1;if(he)for(let Ce=0;Ce<x.length;Ce++)n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,we.__webglMultisampledFramebuffer);const Re=E.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),he){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(x[Ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,pe,0)}t.blitFramebuffer(0,0,N,K,0,0,N,K,oe,t.NEAREST),l===!0&&(D.length=0,Y.length=0,D.push(t.COLOR_ATTACHMENT0+Ce),E.depthBuffer&&E.resolveDepthBuffer===!1&&(D.push(Z),Y.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Y)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),he)for(let Ce=0;Ce<x.length;Ce++){n.bindFramebuffer(t.FRAMEBUFFER,we.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,we.__webglColorRenderbuffer[Ce]);const pe=i.get(x[Ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,we.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,we.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const x=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function de(E){return Math.min(r.maxSamples,E.samples)}function ee(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function ae(E){const x=o.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function le(E,x){const N=E.colorSpace,K=E.format,oe=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||N!==Jr&&N!==wi&&(st.getTransfer(N)===ut?(K!==Tn||oe!==fi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),x}function Te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=z,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=U,this.rebindTextures=w,this.setupRenderTarget=v,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=X,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=se,this.useMultisampledRTT=ee}function sE(t,e){function n(i,r=wi){let s;const o=st.getTransfer(r);if(i===fi)return t.UNSIGNED_BYTE;if(i===ru)return t.UNSIGNED_SHORT_4_4_4_4;if(i===su)return t.UNSIGNED_SHORT_5_5_5_1;if(i===mp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===hp)return t.BYTE;if(i===pp)return t.SHORT;if(i===Os)return t.UNSIGNED_SHORT;if(i===iu)return t.INT;if(i===lr)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===$s)return t.HALF_FLOAT;if(i===gp)return t.ALPHA;if(i===_p)return t.RGB;if(i===Tn)return t.RGBA;if(i===ks)return t.DEPTH_COMPONENT;if(i===zs)return t.DEPTH_STENCIL;if(i===vp)return t.RED;if(i===ou)return t.RED_INTEGER;if(i===xp)return t.RG;if(i===au)return t.RG_INTEGER;if(i===lu)return t.RGBA_INTEGER;if(i===ko||i===zo||i===Ho||i===Vo)if(o===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ko)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ko)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ho)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===tc||i===nc||i===ic||i===rc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ic)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===rc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===sc||i===oc||i===ac)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===sc||i===oc)return o===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ac)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===lc||i===cc||i===uc||i===fc||i===dc||i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===bc||i===yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===lc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===uc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===hc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===mc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===_c)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===vc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===bc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yc)return o===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Go||i===Sc||i===Mc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Go)return o===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Sc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Mc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===bp||i===Ec||i===Tc||i===Ac)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Go)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ec)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Tc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class Gp extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const oE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aE=`
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

}`;class lE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Gp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ni({vertexShader:oE,fragmentShader:aE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new Zs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cE extends ts{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=new lE,m={},p=n.getContextAttributes();let A=null,S=null;const b=[],C=[],P=new nt;let I=null;const L=new vn;L.viewport=new At;const y=new vn;y.viewport=new At;const M=[L,y],R=new Cx;let z=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let me=b[ne];return me===void 0&&(me=new pl,b[ne]=me),me.getTargetRaySpace()},this.getControllerGrip=function(ne){let me=b[ne];return me===void 0&&(me=new pl,b[ne]=me),me.getGripSpace()},this.getHand=function(ne){let me=b[ne];return me===void 0&&(me=new pl,b[ne]=me),me.getHandSpace()};function G(ne){const me=C.indexOf(ne.inputSource);if(me===-1)return;const F=b[me];F!==void 0&&(F.update(ne.inputSource,ne.frame,c||o),F.dispatchEvent({type:ne.type,data:ne.inputSource}))}function j(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let ne=0;ne<b.length;ne++){const me=C[ne];me!==null&&(C[ne]=null,b[ne].disconnect(me))}z=null,q=null,_.reset();for(const ne in m)delete m[ne];e.setRenderTarget(A),h=null,d=null,f=null,r=null,S=null,Ve.stop(),i.isPresenting=!1,e.setPixelRatio(I),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(A=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await n.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(P),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,n)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,se=null,re=null;p.depth&&(re=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=p.stencil?zs:ks,se=p.stencil?Bs:lr);const fe={colorFormat:n.RGBA8,depthFormat:re,scaleFactor:s};d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new cr(d.textureWidth,d.textureHeight,{format:Tn,type:fi,depthTexture:new Fp(d.textureWidth,d.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const F={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new cr(h.framebufferWidth,h.framebufferHeight,{format:Tn,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ve.setContext(r),Ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(ne){for(let me=0;me<ne.removed.length;me++){const F=ne.removed[me],se=C.indexOf(F);se>=0&&(C[se]=null,b[se].disconnect(F))}for(let me=0;me<ne.added.length;me++){const F=ne.added[me];let se=C.indexOf(F);if(se===-1){for(let fe=0;fe<b.length;fe++)if(fe>=C.length){C.push(F),se=fe;break}else if(C[fe]===null){C[fe]=F,se=fe;break}if(se===-1)break}const re=b[se];re&&re.connect(F)}}const H=new J,U=new J;function ie(ne,me,F){H.setFromMatrixPosition(me.matrixWorld),U.setFromMatrixPosition(F.matrixWorld);const se=H.distanceTo(U),re=me.projectionMatrix.elements,fe=F.projectionMatrix.elements,Le=re[14]/(re[10]-1),w=re[14]/(re[10]+1),v=(re[9]+1)/re[5],O=(re[9]-1)/re[5],D=(re[8]-1)/re[0],Y=(fe[8]+1)/fe[0],X=Le*D,de=Le*Y,ee=se/(-D+Y),ae=ee*-D;if(me.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(ae),ne.translateZ(ee),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),re[10]===-1)ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const le=Le+ee,Te=w+ee,E=X-ae,x=de+(se-ae),N=v*w/Te*le,K=O*w/Te*le;ne.projectionMatrix.makePerspective(E,x,N,K,le,Te),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ue(ne,me){me===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(me.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let me=ne.near,F=ne.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(F=_.depthFar)),R.near=y.near=L.near=me,R.far=y.far=L.far=F,(z!==R.near||q!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,q=R.far),R.layers.mask=ne.layers.mask|6,L.layers.mask=R.layers.mask&3,y.layers.mask=R.layers.mask&5;const se=ne.parent,re=R.cameras;ue(R,se);for(let fe=0;fe<re.length;fe++)ue(re[fe],se);re.length===2?ie(R,L,y):R.projectionMatrix.copy(L.projectionMatrix),ve(ne,R,se)};function ve(ne,me,F){F===null?ne.matrix.copy(me.matrixWorld):(ne.matrix.copy(F.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(me.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(me.projectionMatrix),ne.projectionMatrixInverse.copy(me.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Rc*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ne){l=ne,d!==null&&(d.fixedFoveation=ne),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(ne){return m[ne]};let Se=null;function Ze(ne,me){if(u=me.getViewerPose(c||o),g=me,u!==null){const F=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let se=!1;F.length!==R.cameras.length&&(R.cameras.length=0,se=!0);for(let w=0;w<F.length;w++){const v=F[w];let O=null;if(h!==null)O=h.getViewport(v);else{const Y=f.getViewSubImage(d,v);O=Y.viewport,w===0&&(e.setRenderTargetTextures(S,Y.colorTexture,Y.depthStencilTexture),e.setRenderTarget(S))}let D=M[w];D===void 0&&(D=new vn,D.layers.enable(w),D.viewport=new At,M[w]=D),D.matrix.fromArray(v.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(v.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(O.x,O.y,O.width,O.height),w===0&&(R.matrix.copy(D.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),se===!0&&R.cameras.push(D)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const w=f.getDepthInformation(F[0]);w&&w.isValid&&w.texture&&_.init(w,r.renderState)}if(re&&re.includes("camera-access")&&(e.state.unbindTexture(),f))for(let w=0;w<F.length;w++){const v=F[w].camera;if(v){let O=m[v];O||(O=new Gp,m[v]=O);const D=f.getCameraImage(v);O.sourceTexture=D}}}for(let F=0;F<b.length;F++){const se=C[F],re=b[F];se!==null&&re!==void 0&&re.update(se,me,c||o)}Se&&Se(ne,me),me.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:me}),g=null}const Ve=new Bp;Ve.setAnimationLoop(Ze),this.setAnimationLoop=function(ne){Se=ne},this.dispose=function(){}}}const Yi=new di,uE=new wt;function fE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Cp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,A,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,b)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,A,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),S=A.envMap,b=A.envMapRotation;S&&(m.envMap.value=S,Yi.copy(b),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),m.envMapRotation.value.setFromMatrix4(uE.makeRotationFromEuler(Yi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=S*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dE(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,S){const b=S.program;i.uniformBlockBinding(A,b)}function c(A,S){let b=r[A.id];b===void 0&&(g(A),b=u(A),r[A.id]=b,A.addEventListener("dispose",m));const C=S.program;i.updateUBOMapping(A,C);const P=e.render.frame;s[A.id]!==P&&(d(A),s[A.id]=P)}function u(A){const S=f();A.__bindingPointIndex=S;const b=t.createBuffer(),C=A.__size,P=A.usage;return t.bindBuffer(t.UNIFORM_BUFFER,b),t.bufferData(t.UNIFORM_BUFFER,C,P),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,b),b}function f(){for(let A=0;A<a;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const S=r[A.id],b=A.uniforms,C=A.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let P=0,I=b.length;P<I;P++){const L=Array.isArray(b[P])?b[P]:[b[P]];for(let y=0,M=L.length;y<M;y++){const R=L[y];if(h(R,P,y,C)===!0){const z=R.__offset,q=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let j=0;j<q.length;j++){const $=q[j],H=_($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,z+G,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,G),G+=H.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(A,S,b,C){const P=A.value,I=S+"_"+b;if(C[I]===void 0)return typeof P=="number"||typeof P=="boolean"?C[I]=P:C[I]=P.clone(),!0;{const L=C[I];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return C[I]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function g(A){const S=A.uniforms;let b=0;const C=16;for(let I=0,L=S.length;I<L;I++){const y=Array.isArray(S[I])?S[I]:[S[I]];for(let M=0,R=y.length;M<R;M++){const z=y[M],q=Array.isArray(z.value)?z.value:[z.value];for(let G=0,j=q.length;G<j;G++){const $=q[G],H=_($),U=b%C,ie=U%H.boundary,ue=U+ie;b+=ie,ue!==0&&C-ue<H.storage&&(b+=C-ue),z.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=b,b+=H.storage}}}const P=b%C;return P>0&&(b+=C-P),A.__size=b,A.__cache={},this}function _(A){const S={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(S.boundary=4,S.storage=4):A.isVector2?(S.boundary=8,S.storage=8):A.isVector3||A.isColor?(S.boundary=16,S.storage=12):A.isVector4?(S.boundary=16,S.storage=16):A.isMatrix3?(S.boundary=48,S.storage=48):A.isMatrix4?(S.boundary=64,S.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),S}function m(A){const S=A.target;S.removeEventListener("dispose",m);const b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function p(){for(const A in r)t.deleteBuffer(r[A]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}class Wp{constructor(e={}){const{canvas:n=Kv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const A=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let C=!1;this._outputColorSpace=_n;let P=0,I=0,L=null,y=-1,M=null;const R=new At,z=new At;let q=null;const G=new qe(0);let j=0,$=n.width,H=n.height,U=1,ie=null,ue=null;const ve=new At(0,0,$,H),Se=new At(0,0,$,H);let Ze=!1;const Ve=new Np;let ne=!1,me=!1;const F=new wt,se=new J,re=new At,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Le=!1;function w(){return L===null?U:1}let v=i;function O(T,V){return n.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nu}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",De,!1),n.addEventListener("webglcontextcreationerror",ge,!1),v===null){const V="webgl2";if(v=O(V,T),v===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let D,Y,X,de,ee,ae,le,Te,E,x,N,K,oe,Z,we,he,Re,Ce,pe,Ee,Ue,Pe,ye,Ye;function B(){D=new MS(v),D.init(),Pe=new sE(v,D),Y=new gS(v,D,e,Pe),X=new iE(v,D),Y.reversedDepthBuffer&&d&&X.buffers.depth.setReversed(!0),de=new AS(v),ee=new WM,ae=new rE(v,D,X,ee,Y,Pe,de),le=new vS(b),Te=new SS(b),E=new Dx(v),ye=new pS(v,E),x=new ES(v,E,de,ye),N=new RS(v,x,E,de),pe=new wS(v,Y,ae),he=new _S(ee),K=new GM(b,le,Te,D,Y,ye,he),oe=new fE(b,ee),Z=new qM,we=new JM(D),Ce=new hS(b,le,Te,X,N,h,l),Re=new tE(b,N,Y),Ye=new dE(v,de,Y,X),Ee=new mS(v,D,de),Ue=new TS(v,D,de),de.programs=K.programs,b.capabilities=Y,b.extensions=D,b.properties=ee,b.renderLists=Z,b.shadowMap=Re,b.state=X,b.info=de}B();const xe=new cE(b,v);this.xr=xe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const T=D.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=D.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize($,H,!1))},this.getSize=function(T){return T.set($,H)},this.setSize=function(T,V,Q=!0){if(xe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,H=V,n.width=Math.floor(T*U),n.height=Math.floor(V*U),Q===!0&&(n.style.width=T+"px",n.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set($*U,H*U).floor()},this.setDrawingBufferSize=function(T,V,Q){$=T,H=V,U=Q,n.width=Math.floor(T*Q),n.height=Math.floor(V*Q),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(R)},this.getViewport=function(T){return T.copy(ve)},this.setViewport=function(T,V,Q,te){T.isVector4?ve.set(T.x,T.y,T.z,T.w):ve.set(T,V,Q,te),X.viewport(R.copy(ve).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(Se)},this.setScissor=function(T,V,Q,te){T.isVector4?Se.set(T.x,T.y,T.z,T.w):Se.set(T,V,Q,te),X.scissor(z.copy(Se).multiplyScalar(U).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(T){X.setScissorTest(Ze=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){ue=T},this.getClearColor=function(T){return T.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor(...arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,Q=!0){let te=0;if(T){let W=!1;if(L!==null){const _e=L.texture.format;W=_e===lu||_e===au||_e===ou}if(W){const _e=L.texture.type,Ae=_e===fi||_e===lr||_e===Os||_e===Bs||_e===ru||_e===su,Fe=Ce.getClearColor(),Ie=Ce.getClearAlpha(),Ge=Fe.r,Xe=Fe.g,Be=Fe.b;Ae?(g[0]=Ge,g[1]=Xe,g[2]=Be,g[3]=Ie,v.clearBufferuiv(v.COLOR,0,g)):(_[0]=Ge,_[1]=Xe,_[2]=Be,_[3]=Ie,v.clearBufferiv(v.COLOR,0,_))}else te|=v.COLOR_BUFFER_BIT}V&&(te|=v.DEPTH_BUFFER_BIT),Q&&(te|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",De,!1),n.removeEventListener("webglcontextcreationerror",ge,!1),Ce.dispose(),Z.dispose(),we.dispose(),ee.dispose(),le.dispose(),Te.dispose(),N.dispose(),ye.dispose(),Ye.dispose(),K.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Ln),xe.removeEventListener("sessionend",du),Oi.stop()};function be(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const T=de.autoReset,V=Re.enabled,Q=Re.autoUpdate,te=Re.needsUpdate,W=Re.type;B(),de.autoReset=T,Re.enabled=V,Re.autoUpdate=Q,Re.needsUpdate=te,Re.type=W}function ge(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ce(T){const V=T.target;V.removeEventListener("dispose",ce),Oe(V)}function Oe(T){Ke(T),ee.remove(T)}function Ke(T){const V=ee.get(T).programs;V!==void 0&&(V.forEach(function(Q){K.releaseProgram(Q)}),T.isShaderMaterial&&K.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,Q,te,W,_e){V===null&&(V=fe);const Ae=W.isMesh&&W.matrixWorld.determinant()<0,Fe=qp(T,V,Q,te,W);X.setMaterial(te,Ae);let Ie=Q.index,Ge=1;if(te.wireframe===!0){if(Ie=x.getWireframeAttribute(Q),Ie===void 0)return;Ge=2}const Xe=Q.drawRange,Be=Q.attributes.position;let et=Xe.start*Ge,ct=(Xe.start+Xe.count)*Ge;_e!==null&&(et=Math.max(et,_e.start*Ge),ct=Math.min(ct,(_e.start+_e.count)*Ge)),Ie!==null?(et=Math.max(et,0),ct=Math.min(ct,Ie.count)):Be!=null&&(et=Math.max(et,0),ct=Math.min(ct,Be.count));const Mt=ct-et;if(Mt<0||Mt===1/0)return;ye.setup(W,te,Fe,Q,Ie);let vt,ht=Ee;if(Ie!==null&&(vt=E.get(Ie),ht=Ue,ht.setIndex(vt)),W.isMesh)te.wireframe===!0?(X.setLineWidth(te.wireframeLinewidth*w()),ht.setMode(v.LINES)):ht.setMode(v.TRIANGLES);else if(W.isLine){let ze=te.linewidth;ze===void 0&&(ze=1),X.setLineWidth(ze*w()),W.isLineSegments?ht.setMode(v.LINES):W.isLineLoop?ht.setMode(v.LINE_LOOP):ht.setMode(v.LINE_STRIP)}else W.isPoints?ht.setMode(v.POINTS):W.isSprite&&ht.setMode(v.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Hr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(D.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const ze=W._multiDrawStarts,bt=W._multiDrawCounts,rt=W._multiDrawCount,nn=Ie?E.get(Ie).bytesPerElement:1,ur=ee.get(te).currentProgram.getUniforms();for(let rn=0;rn<rt;rn++)ur.setValue(v,"_gl_DrawID",rn),ht.render(ze[rn]/nn,bt[rn])}else if(W.isInstancedMesh)ht.renderInstances(et,Mt,W.count);else if(Q.isInstancedBufferGeometry){const ze=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,bt=Math.min(Q.instanceCount,ze);ht.renderInstances(et,Mt,bt)}else ht.render(et,Mt)};function mt(T,V,Q){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=tn,T.needsUpdate=!0,Qs(T,V,Q),T.side=Ui,T.needsUpdate=!0,Qs(T,V,Q),T.side=Bn):Qs(T,V,Q)}this.compile=function(T,V,Q=null){Q===null&&(Q=T),p=we.get(Q),p.init(V),S.push(p),Q.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),T!==Q&&T.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights();const te=new Set;return T.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const _e=W.material;if(_e)if(Array.isArray(_e))for(let Ae=0;Ae<_e.length;Ae++){const Fe=_e[Ae];mt(Fe,Q,W),te.add(Fe)}else mt(_e,Q,W),te.add(_e)}),p=S.pop(),te},this.compileAsync=function(T,V,Q=null){const te=this.compile(T,V,Q);return new Promise(W=>{function _e(){if(te.forEach(function(Ae){ee.get(Ae).currentProgram.isReady()&&te.delete(Ae)}),te.size===0){W(T);return}setTimeout(_e,10)}D.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let ot=null;function Wn(T){ot&&ot(T)}function Ln(){Oi.stop()}function du(){Oi.start()}const Oi=new Bp;Oi.setAnimationLoop(Wn),typeof self<"u"&&Oi.setContext(self),this.setAnimationLoop=function(T){ot=T,xe.setAnimationLoop(T),T===null?Oi.stop():Oi.start()},xe.addEventListener("sessionstart",Ln),xe.addEventListener("sessionend",du),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(V),V=xe.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,V,L),p=we.get(T,S.length),p.init(V),S.push(p),F.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ve.setFromProjectionMatrix(F,zn,V.reversedDepth),me=this.localClippingEnabled,ne=he.init(this.clippingPlanes,me),m=Z.get(T,A.length),m.init(),A.push(m),xe.enabled===!0&&xe.isPresenting===!0){const _e=b.xr.getDepthSensingMesh();_e!==null&&Ta(_e,V,-1/0,b.sortObjects)}Ta(T,V,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(ie,ue),Le=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,Le&&Ce.addToRenderList(m,T),this.info.render.frame++,ne===!0&&he.beginShadows();const Q=p.state.shadowsArray;Re.render(Q,T,V),ne===!0&&he.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,W=m.transmissive;if(p.setupLights(),V.isArrayCamera){const _e=V.cameras;if(W.length>0)for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];pu(te,W,T,Ie)}Le&&Ce.render(T);for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++){const Ie=_e[Ae];hu(m,T,Ie,Ie.viewport)}}else W.length>0&&pu(te,W,T,V),Le&&Ce.render(T),hu(m,T,V);L!==null&&I===0&&(ae.updateMultisampleRenderTarget(L),ae.updateRenderTargetMipmap(L)),T.isScene===!0&&T.onAfterRender(b,T,V),ye.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&he.setGlobalState(b.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function Ta(T,V,Q,te){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)Q=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ve.intersectsSprite(T)){te&&re.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const Ae=N.update(T),Fe=T.material;Fe.visible&&m.push(T,Ae,Fe,Q,re.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ve.intersectsObject(T))){const Ae=N.update(T),Fe=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),re.copy(T.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),re.copy(Ae.boundingSphere.center)),re.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Fe)){const Ie=Ae.groups;for(let Ge=0,Xe=Ie.length;Ge<Xe;Ge++){const Be=Ie[Ge],et=Fe[Be.materialIndex];et&&et.visible&&m.push(T,Ae,et,Q,re.z,Be)}}else Fe.visible&&m.push(T,Ae,Fe,Q,re.z,null)}}const _e=T.children;for(let Ae=0,Fe=_e.length;Ae<Fe;Ae++)Ta(_e[Ae],V,Q,te)}function hu(T,V,Q,te){const W=T.opaque,_e=T.transmissive,Ae=T.transparent;p.setupLightsView(Q),ne===!0&&he.setGlobalState(b.clippingPlanes,Q),te&&X.viewport(R.copy(te)),W.length>0&&Js(W,V,Q),_e.length>0&&Js(_e,V,Q),Ae.length>0&&Js(Ae,V,Q),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function pu(T,V,Q,te){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[te.id]===void 0&&(p.state.transmissionRenderTarget[te.id]=new cr(1,1,{generateMipmaps:!0,type:D.has("EXT_color_buffer_half_float")||D.has("EXT_color_buffer_float")?$s:fi,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const _e=p.state.transmissionRenderTarget[te.id],Ae=te.viewport||R;_e.setSize(Ae.z*b.transmissionResolutionScale,Ae.w*b.transmissionResolutionScale);const Fe=b.getRenderTarget(),Ie=b.getActiveCubeFace(),Ge=b.getActiveMipmapLevel();b.setRenderTarget(_e),b.getClearColor(G),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),Le&&Ce.render(Q);const Xe=b.toneMapping;b.toneMapping=Pi;const Be=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),p.setupLightsView(te),ne===!0&&he.setGlobalState(b.clippingPlanes,te),Js(T,Q,te),ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e),D.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let ct=0,Mt=V.length;ct<Mt;ct++){const vt=V[ct],ht=vt.object,ze=vt.geometry,bt=vt.material,rt=vt.group;if(bt.side===Bn&&ht.layers.test(te.layers)){const nn=bt.side;bt.side=tn,bt.needsUpdate=!0,mu(ht,Q,te,ze,bt,rt),bt.side=nn,bt.needsUpdate=!0,et=!0}}et===!0&&(ae.updateMultisampleRenderTarget(_e),ae.updateRenderTargetMipmap(_e))}b.setRenderTarget(Fe,Ie,Ge),b.setClearColor(G,j),Be!==void 0&&(te.viewport=Be),b.toneMapping=Xe}function Js(T,V,Q){const te=V.isScene===!0?V.overrideMaterial:null;for(let W=0,_e=T.length;W<_e;W++){const Ae=T[W],Fe=Ae.object,Ie=Ae.geometry,Ge=Ae.group;let Xe=Ae.material;Xe.allowOverride===!0&&te!==null&&(Xe=te),Fe.layers.test(Q.layers)&&mu(Fe,V,Q,Ie,Xe,Ge)}}function mu(T,V,Q,te,W,_e){T.onBeforeRender(b,V,Q,te,W,_e),T.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),W.onBeforeRender(b,V,Q,te,T,_e),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=tn,W.needsUpdate=!0,b.renderBufferDirect(Q,V,te,W,T,_e),W.side=Ui,W.needsUpdate=!0,b.renderBufferDirect(Q,V,te,W,T,_e),W.side=Bn):b.renderBufferDirect(Q,V,te,W,T,_e),T.onAfterRender(b,V,Q,te,W,_e)}function Qs(T,V,Q){V.isScene!==!0&&(V=fe);const te=ee.get(T),W=p.state.lights,_e=p.state.shadowsArray,Ae=W.state.version,Fe=K.getParameters(T,W.state,_e,V,Q),Ie=K.getProgramCacheKey(Fe);let Ge=te.programs;te.environment=T.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(T.isMeshStandardMaterial?Te:le).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ge===void 0&&(T.addEventListener("dispose",ce),Ge=new Map,te.programs=Ge);let Xe=Ge.get(Ie);if(Xe!==void 0){if(te.currentProgram===Xe&&te.lightsStateVersion===Ae)return _u(T,Fe),Xe}else Fe.uniforms=K.getUniforms(T),T.onBeforeCompile(Fe,b),Xe=K.acquireProgram(Fe,Ie),Ge.set(Ie,Xe),te.uniforms=Fe.uniforms;const Be=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=he.uniform),_u(T,Fe),te.needsLights=Yp(T),te.lightsStateVersion=Ae,te.needsLights&&(Be.ambientLightColor.value=W.state.ambient,Be.lightProbe.value=W.state.probe,Be.directionalLights.value=W.state.directional,Be.directionalLightShadows.value=W.state.directionalShadow,Be.spotLights.value=W.state.spot,Be.spotLightShadows.value=W.state.spotShadow,Be.rectAreaLights.value=W.state.rectArea,Be.ltc_1.value=W.state.rectAreaLTC1,Be.ltc_2.value=W.state.rectAreaLTC2,Be.pointLights.value=W.state.point,Be.pointLightShadows.value=W.state.pointShadow,Be.hemisphereLights.value=W.state.hemi,Be.directionalShadowMap.value=W.state.directionalShadowMap,Be.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Be.spotShadowMap.value=W.state.spotShadowMap,Be.spotLightMatrix.value=W.state.spotLightMatrix,Be.spotLightMap.value=W.state.spotLightMap,Be.pointShadowMap.value=W.state.pointShadowMap,Be.pointShadowMatrix.value=W.state.pointShadowMatrix),te.currentProgram=Xe,te.uniformsList=null,Xe}function gu(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Wo.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function _u(T,V){const Q=ee.get(T);Q.outputColorSpace=V.outputColorSpace,Q.batching=V.batching,Q.batchingColor=V.batchingColor,Q.instancing=V.instancing,Q.instancingColor=V.instancingColor,Q.instancingMorph=V.instancingMorph,Q.skinning=V.skinning,Q.morphTargets=V.morphTargets,Q.morphNormals=V.morphNormals,Q.morphColors=V.morphColors,Q.morphTargetsCount=V.morphTargetsCount,Q.numClippingPlanes=V.numClippingPlanes,Q.numIntersection=V.numClipIntersection,Q.vertexAlphas=V.vertexAlphas,Q.vertexTangents=V.vertexTangents,Q.toneMapping=V.toneMapping}function qp(T,V,Q,te,W){V.isScene!==!0&&(V=fe),ae.resetTextureUnits();const _e=V.fog,Ae=te.isMeshStandardMaterial?V.environment:null,Fe=L===null?b.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Jr,Ie=(te.isMeshStandardMaterial?Te:le).get(te.envMap||Ae),Ge=te.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Xe=!!Q.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Be=!!Q.morphAttributes.position,et=!!Q.morphAttributes.normal,ct=!!Q.morphAttributes.color;let Mt=Pi;te.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(Mt=b.toneMapping);const vt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ht=vt!==void 0?vt.length:0,ze=ee.get(te),bt=p.state.lights;if(ne===!0&&(me===!0||T!==M)){const Xt=T===M&&te.id===y;he.setState(te,T,Xt)}let rt=!1;te.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bt.state.version||ze.outputColorSpace!==Fe||W.isBatchedMesh&&ze.batching===!1||!W.isBatchedMesh&&ze.batching===!0||W.isBatchedMesh&&ze.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&ze.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&ze.instancing===!1||!W.isInstancedMesh&&ze.instancing===!0||W.isSkinnedMesh&&ze.skinning===!1||!W.isSkinnedMesh&&ze.skinning===!0||W.isInstancedMesh&&ze.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&ze.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&ze.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&ze.instancingMorph===!1&&W.morphTexture!==null||ze.envMap!==Ie||te.fog===!0&&ze.fog!==_e||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==he.numPlanes||ze.numIntersection!==he.numIntersection)||ze.vertexAlphas!==Ge||ze.vertexTangents!==Xe||ze.morphTargets!==Be||ze.morphNormals!==et||ze.morphColors!==ct||ze.toneMapping!==Mt||ze.morphTargetsCount!==ht)&&(rt=!0):(rt=!0,ze.__version=te.version);let nn=ze.currentProgram;rt===!0&&(nn=Qs(te,V,W));let ur=!1,rn=!1,rs=!1;const yt=nn.getUniforms(),hn=ze.uniforms;if(X.useProgram(nn.program)&&(ur=!0,rn=!0,rs=!0),te.id!==y&&(y=te.id,rn=!0),ur||M!==T){X.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),yt.setValue(v,"projectionMatrix",T.projectionMatrix),yt.setValue(v,"viewMatrix",T.matrixWorldInverse);const en=yt.map.cameraPosition;en!==void 0&&en.setValue(v,se.setFromMatrixPosition(T.matrixWorld)),Y.logarithmicDepthBuffer&&yt.setValue(v,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&yt.setValue(v,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,rn=!0,rs=!0)}if(W.isSkinnedMesh){yt.setOptional(v,W,"bindMatrix"),yt.setOptional(v,W,"bindMatrixInverse");const Xt=W.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),yt.setValue(v,"boneTexture",Xt.boneTexture,ae))}W.isBatchedMesh&&(yt.setOptional(v,W,"batchingTexture"),yt.setValue(v,"batchingTexture",W._matricesTexture,ae),yt.setOptional(v,W,"batchingIdTexture"),yt.setValue(v,"batchingIdTexture",W._indirectTexture,ae),yt.setOptional(v,W,"batchingColorTexture"),W._colorsTexture!==null&&yt.setValue(v,"batchingColorTexture",W._colorsTexture,ae));const pn=Q.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&pe.update(W,Q,nn),(rn||ze.receiveShadow!==W.receiveShadow)&&(ze.receiveShadow=W.receiveShadow,yt.setValue(v,"receiveShadow",W.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(hn.envMap.value=Ie,hn.flipEnvMap.value=Ie.isCubeTexture&&Ie.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(hn.envMapIntensity.value=V.environmentIntensity),rn&&(yt.setValue(v,"toneMappingExposure",b.toneMappingExposure),ze.needsLights&&$p(hn,rs),_e&&te.fog===!0&&oe.refreshFogUniforms(hn,_e),oe.refreshMaterialUniforms(hn,te,U,H,p.state.transmissionRenderTarget[T.id]),Wo.upload(v,gu(ze),hn,ae)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Wo.upload(v,gu(ze),hn,ae),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&yt.setValue(v,"center",W.center),yt.setValue(v,"modelViewMatrix",W.modelViewMatrix),yt.setValue(v,"normalMatrix",W.normalMatrix),yt.setValue(v,"modelMatrix",W.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Xt=te.uniformsGroups;for(let en=0,Aa=Xt.length;en<Aa;en++){const Bi=Xt[en];Ye.update(Bi,nn),Ye.bind(Bi,nn)}}return nn}function $p(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function Yp(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(T,V,Q){const te=ee.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ee.get(T.texture).__webglTexture=V,ee.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:Q,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const Q=ee.get(T);Q.__webglFramebuffer=V,Q.__useDefaultFramebuffer=V===void 0};const jp=v.createFramebuffer();this.setRenderTarget=function(T,V=0,Q=0){L=T,P=V,I=Q;let te=!0,W=null,_e=!1,Ae=!1;if(T){const Ie=ee.get(T);if(Ie.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(v.FRAMEBUFFER,null),te=!1;else if(Ie.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Ie.__hasExternalTextures)ae.rebindTextures(T,ee.get(T.texture).__webglTexture,ee.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Be=T.depthTexture;if(Ie.__boundDepthTexture!==Be){if(Be!==null&&ee.has(Be)&&(T.width!==Be.image.width||T.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const Ge=T.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Ae=!0);const Xe=ee.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Xe[V])?W=Xe[V][Q]:W=Xe[V],_e=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?W=ee.get(T).__webglMultisampledFramebuffer:Array.isArray(Xe)?W=Xe[Q]:W=Xe,R.copy(T.viewport),z.copy(T.scissor),q=T.scissorTest}else R.copy(ve).multiplyScalar(U).floor(),z.copy(Se).multiplyScalar(U).floor(),q=Ze;if(Q!==0&&(W=jp),X.bindFramebuffer(v.FRAMEBUFFER,W)&&te&&X.drawBuffers(T,W),X.viewport(R),X.scissor(z),X.setScissorTest(q),_e){const Ie=ee.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ie.__webglTexture,Q)}else if(Ae){const Ie=V;for(let Ge=0;Ge<T.textures.length;Ge++){const Xe=ee.get(T.textures[Ge]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Ge,Xe.__webglTexture,Q,Ie)}}else if(T!==null&&Q!==0){const Ie=ee.get(T.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Ie.__webglTexture,Q)}y=-1},this.readRenderTargetPixels=function(T,V,Q,te,W,_e,Ae,Fe=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie){X.bindFramebuffer(v.FRAMEBUFFER,Ie);try{const Ge=T.textures[Fe],Xe=Ge.format,Be=Ge.type;if(!Y.textureFormatReadable(Xe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-te&&Q>=0&&Q<=T.height-W&&(T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Fe),v.readPixels(V,Q,te,W,Pe.convert(Xe),Pe.convert(Be),_e))}finally{const Ge=L!==null?ee.get(L).__webglFramebuffer:null;X.bindFramebuffer(v.FRAMEBUFFER,Ge)}}},this.readRenderTargetPixelsAsync=async function(T,V,Q,te,W,_e,Ae,Fe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=ee.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ae!==void 0&&(Ie=Ie[Ae]),Ie)if(V>=0&&V<=T.width-te&&Q>=0&&Q<=T.height-W){X.bindFramebuffer(v.FRAMEBUFFER,Ie);const Ge=T.textures[Fe],Xe=Ge.format,Be=Ge.type;if(!Y.textureFormatReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,et),v.bufferData(v.PIXEL_PACK_BUFFER,_e.byteLength,v.STREAM_READ),T.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+Fe),v.readPixels(V,Q,te,W,Pe.convert(Xe),Pe.convert(Be),0);const ct=L!==null?ee.get(L).__webglFramebuffer:null;X.bindFramebuffer(v.FRAMEBUFFER,ct);const Mt=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await Zv(v,Mt,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,et),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,_e),v.deleteBuffer(et),v.deleteSync(Mt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,Q=0){const te=Math.pow(2,-Q),W=Math.floor(T.image.width*te),_e=Math.floor(T.image.height*te),Ae=V!==null?V.x:0,Fe=V!==null?V.y:0;ae.setTexture2D(T,0),v.copyTexSubImage2D(v.TEXTURE_2D,Q,0,0,Ae,Fe,W,_e),X.unbindTexture()};const Kp=v.createFramebuffer(),Zp=v.createFramebuffer();this.copyTextureToTexture=function(T,V,Q=null,te=null,W=0,_e=null){_e===null&&(W!==0?(Hr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),_e=W,W=0):_e=0);let Ae,Fe,Ie,Ge,Xe,Be,et,ct,Mt;const vt=T.isCompressedTexture?T.mipmaps[_e]:T.image;if(Q!==null)Ae=Q.max.x-Q.min.x,Fe=Q.max.y-Q.min.y,Ie=Q.isBox3?Q.max.z-Q.min.z:1,Ge=Q.min.x,Xe=Q.min.y,Be=Q.isBox3?Q.min.z:0;else{const pn=Math.pow(2,-W);Ae=Math.floor(vt.width*pn),Fe=Math.floor(vt.height*pn),T.isDataArrayTexture?Ie=vt.depth:T.isData3DTexture?Ie=Math.floor(vt.depth*pn):Ie=1,Ge=0,Xe=0,Be=0}te!==null?(et=te.x,ct=te.y,Mt=te.z):(et=0,ct=0,Mt=0);const ht=Pe.convert(V.format),ze=Pe.convert(V.type);let bt;V.isData3DTexture?(ae.setTexture3D(V,0),bt=v.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(ae.setTexture2DArray(V,0),bt=v.TEXTURE_2D_ARRAY):(ae.setTexture2D(V,0),bt=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,V.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,V.unpackAlignment);const rt=v.getParameter(v.UNPACK_ROW_LENGTH),nn=v.getParameter(v.UNPACK_IMAGE_HEIGHT),ur=v.getParameter(v.UNPACK_SKIP_PIXELS),rn=v.getParameter(v.UNPACK_SKIP_ROWS),rs=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,vt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,vt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Ge),v.pixelStorei(v.UNPACK_SKIP_ROWS,Xe),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Be);const yt=T.isDataArrayTexture||T.isData3DTexture,hn=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const pn=ee.get(T),Xt=ee.get(V),en=ee.get(pn.__renderTarget),Aa=ee.get(Xt.__renderTarget);X.bindFramebuffer(v.READ_FRAMEBUFFER,en.__webglFramebuffer),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,Aa.__webglFramebuffer);for(let Bi=0;Bi<Ie;Bi++)yt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(T).__webglTexture,W,Be+Bi),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,ee.get(V).__webglTexture,_e,Mt+Bi)),v.blitFramebuffer(Ge,Xe,Ae,Fe,et,ct,Ae,Fe,v.DEPTH_BUFFER_BIT,v.NEAREST);X.bindFramebuffer(v.READ_FRAMEBUFFER,null),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(W!==0||T.isRenderTargetTexture||ee.has(T)){const pn=ee.get(T),Xt=ee.get(V);X.bindFramebuffer(v.READ_FRAMEBUFFER,Kp),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,Zp);for(let en=0;en<Ie;en++)yt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,pn.__webglTexture,W,Be+en):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,pn.__webglTexture,W),hn?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Xt.__webglTexture,_e,Mt+en):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Xt.__webglTexture,_e),W!==0?v.blitFramebuffer(Ge,Xe,Ae,Fe,et,ct,Ae,Fe,v.COLOR_BUFFER_BIT,v.NEAREST):hn?v.copyTexSubImage3D(bt,_e,et,ct,Mt+en,Ge,Xe,Ae,Fe):v.copyTexSubImage2D(bt,_e,et,ct,Ge,Xe,Ae,Fe);X.bindFramebuffer(v.READ_FRAMEBUFFER,null),X.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else hn?T.isDataTexture||T.isData3DTexture?v.texSubImage3D(bt,_e,et,ct,Mt,Ae,Fe,Ie,ht,ze,vt.data):V.isCompressedArrayTexture?v.compressedTexSubImage3D(bt,_e,et,ct,Mt,Ae,Fe,Ie,ht,vt.data):v.texSubImage3D(bt,_e,et,ct,Mt,Ae,Fe,Ie,ht,ze,vt):T.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,_e,et,ct,Ae,Fe,ht,ze,vt.data):T.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,_e,et,ct,vt.width,vt.height,ht,vt.data):v.texSubImage2D(v.TEXTURE_2D,_e,et,ct,Ae,Fe,ht,ze,vt);v.pixelStorei(v.UNPACK_ROW_LENGTH,rt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,nn),v.pixelStorei(v.UNPACK_SKIP_PIXELS,ur),v.pixelStorei(v.UNPACK_SKIP_ROWS,rn),v.pixelStorei(v.UNPACK_SKIP_IMAGES,rs),_e===0&&V.generateMipmaps&&v.generateMipmap(bt),X.unbindTexture()},this.copyTextureToTexture3D=function(T,V,Q=null,te=null,W=0){return Hr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,Q,te,W)},this.initRenderTarget=function(T){ee.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),X.unbindTexture()},this.resetState=function(){P=0,I=0,L=null,X.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const hE=dn({__name:"LogoThreeFx",props:{sparkleCount:{},padding:{}},setup(t){const e=t,n=_t(null),i=_t(null);let r=null;function s(){const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(!u)return new Nt;const f=u.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);f.addColorStop(0,"rgba(255,255,255,1)"),f.addColorStop(.15,"rgba(255,255,255,0.8)"),f.addColorStop(.4,"rgba(255,255,255,0.3)"),f.addColorStop(.7,"rgba(255,255,255,0.1)"),f.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=f,u.fillRect(0,0,128,128);const d=new Gr(c);return d.minFilter=Gt,d.magFilter=Gt,d}function o(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Nt;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.12);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.5,"rgba(255,255,255,0.7)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.12,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";const g=(m,p,A)=>{const S=u.createLinearGradient(-m,0,m,0);S.addColorStop(0,"rgba(255,255,255,0)"),S.addColorStop(.35,`rgba(255,255,255,${A*.4})`),S.addColorStop(.5,`rgba(255,255,255,${A})`),S.addColorStop(.65,`rgba(255,255,255,${A*.4})`),S.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=S,u.beginPath(),u.moveTo(-m,0),u.lineTo(0,-p),u.lineTo(m,0),u.lineTo(0,p),u.closePath(),u.fill()};g(256*.48,256*.025,.95),u.rotate(Math.PI/2),g(256*.48,256*.025,.95),u.rotate(Math.PI/4),g(256*.32,256*.015,.6),u.rotate(Math.PI/2),g(256*.32,256*.015,.6),u.restore();const _=new Gr(c);return _.minFilter=Gt,_.magFilter=Gt,_}function a(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Nt;u.clearRect(0,0,256,256);const f=256/2,d=256/2;u.save(),u.translate(f,d);const h=u.createRadialGradient(0,0,0,0,0,256*.1);h.addColorStop(0,"rgba(255,255,255,1)"),h.addColorStop(.6,"rgba(255,255,255,0.6)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.arc(0,0,256*.1,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";for(let _=0;_<6;_++){const m=_*Math.PI/3;u.save(),u.rotate(m);const p=u.createLinearGradient(0,0,256*.42,0);p.addColorStop(0,"rgba(255,255,255,0.9)"),p.addColorStop(.25,"rgba(255,255,255,0.5)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.moveTo(0,-256*.018),u.lineTo(256*.42,0),u.lineTo(0,256*.018),u.closePath(),u.fill(),u.restore()}u.restore();const g=new Gr(c);return g.minFilter=Gt,g.magFilter=Gt,g}return Gn(async()=>{if(!n.value||!i.value)return;const l=i.value,c=new Wp({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0});c.setClearColor(0,0),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const u=new Dp,f=new Op(-1,1,1,-1,.1,10);f.position.z=2;const d=()=>{const G=e.padding??0,j=n.value?.clientWidth??1,$=n.value?.clientHeight??1,H=j+G*2,U=$+G*2;c.setSize(H,U,!1),f.left=-H/2,f.right=H/2,f.top=U/2,f.bottom=-U/2,f.updateProjectionMatrix()},h=new ResizeObserver(()=>d());h.observe(n.value),d();const g=s(),_=o(),m=a(),p=new _s;u.add(p);const A=e.sparkleCount??60,S=[],b=(G,j)=>G+Math.random()*(j-G),C=G=>{let j,$,H;const U=Math.random();let ie;switch(U<.45?ie=new qe().setHSL(.11+Math.random()*.04,.85,.85):U<.85?ie=new qe().setHSL(.14,.2,.98):ie=new qe().setHSL(.58,.5,.92),G){case"fourStar":j=_,$=b(35,70),H=b(.5,1);break;case"sixStar":j=m,$=b(28,50),H=b(.6,1.1);break;default:j=g,$=b(10,28),H=b(1,2.2)}const ue=new Lp({map:j,transparent:!0,depthWrite:!1,blending:Fs,color:ie,opacity:0,rotation:b(0,Math.PI*2)}),ve=new Mx(ue);return ve.scale.set($,$,1),p.add(ve),{sprite:ve,type:G,speed:H,phase:b(0,Math.PI*2),baseScale:$,rotationSpeed:G==="soft"?0:b(-.2,.2),baseX:0,baseY:0,floatRadius:b(1,5),floatSpeed:b(.4,1.2)}},P=()=>{const G=e.padding??0,j=(n.value?.clientWidth??1)+G*2,$=(n.value?.clientHeight??1)+G*2;for(const H of S){if(H.type==="fourStar"||H.type==="sixStar"){const ie=b(0,Math.PI*2),ue=j*b(.3,.48),ve=$*b(.25,.45),Se=Math.cos(ie)*ue,Ze=Math.sin(ie)*ve;H.baseX=Se,H.baseY=Ze}else{const ie=b(-j*.42,j*.42),ue=b(-$*.38,$*.38);H.baseX=ie,H.baseY=ue}H.sprite.position.set(H.baseX,H.baseY,0)}},I=Math.floor(A*.15),L=Math.floor(A*.1),y=A-I-L;for(let G=0;G<I;G++)S.push(C("fourStar"));for(let G=0;G<L;G++)S.push(C("sixStar"));for(let G=0;G<y;G++)S.push(C("soft"));P();const M=new ResizeObserver(()=>{d(),P()});M.observe(n.value);let R=0;const z=new Px,q=()=>{const G=z.getElapsedTime();for(const j of S){const $=Math.sin(G*j.speed+j.phase),H=Math.sin(G*j.speed*1.7+j.phase*.5),U=.5+.35*$+.15*H,ie=Math.pow(Math.max(0,U),2.2),ue=j.type==="soft"?.15:.08,ve=j.type==="soft"?.75:.92,Se=j.sprite.material;Se.opacity=ue+(ve-ue)*ie;const Ze=j.type==="soft"?.75+.4*ie:.65+.5*ie,Ve=j.baseScale*Ze;j.sprite.scale.set(Ve,Ve,1),j.rotationSpeed!==0&&(Se.rotation+=j.rotationSpeed*.016);const ne=Math.sin(G*j.floatSpeed+j.phase)*j.floatRadius,me=Math.cos(G*j.floatSpeed*.8+j.phase*1.3)*j.floatRadius;j.sprite.position.set(j.baseX+ne,j.baseY+me,0)}c.render(u,f),R=window.requestAnimationFrame(q)};R=window.requestAnimationFrame(q),r=()=>{window.cancelAnimationFrame(R),h.disconnect(),M.disconnect(),c.dispose(),g.dispose(),_.dispose(),m.dispose(),p.clear()}}),Di(()=>{r?.(),r=null}),(l,c)=>(Ne(),We("div",{ref_key:"containerEl",ref:n,class:"absolute inset-0 overflow-visible"},[k("canvas",{ref_key:"canvasEl",ref:i,class:"pointer-events-none absolute",style:es({left:`-${e.padding??0}px`,top:`-${e.padding??0}px`,width:`calc(100% + ${(e.padding??0)*2}px)`,height:`calc(100% + ${(e.padding??0)*2}px)`})},null,4)],512))}}),pE={class:"relative min-h-screen overflow-hidden bg-slate-950"},mE={class:"absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block","aria-hidden":"true"},gE=["src"],_E={class:"relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24",style:{"padding-bottom":"calc(2rem + env(safe-area-inset-bottom, 0px))"}},vE={class:"w-full max-w-md md:max-w-md"},xE={class:"relative mb-6 inline-block md:mb-10"},bE=["src"],yE={class:"space-y-2.5 md:space-y-3"},SE=["disabled"],ME={class:"relative flex items-center justify-between"},EE={class:"text-base md:text-lg"},TE={key:0,class:"ml-2 text-sm font-normal text-white/50"},AE={key:0,class:"text-xs text-white/40"},wE={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},RE={class:"space-y-2"},CE=["onClick"],PE={class:"flex items-center justify-between"},IE={class:"flex items-center gap-2"},DE={key:0,class:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"},LE={class:"font-semibold text-white"},UE=dn({__name:"StartView",setup(t){const e=tu(),n=lp(),i=cp(),r="/backend-camp-game/";Gn(()=>{n.loadFromStorage(),i.loadFromStorage()});const s=ke(()=>!!n.name),o=ke(()=>Math.max(...Object.keys(ia).map(Number))),a=ke(()=>Math.min(i.currentChapter,o.value)),l=ke(()=>i.currentChapter>o.value);function c(){i.reset(),e.push({name:"chapter",params:{id:"1"}})}function u(){const A=l.value?o.value:i.currentChapter;e.push({name:"chapter",params:{id:String(A)}})}function f(){n.clear(),i.reset()}const d=_t(!1),h=ke(()=>Object.values(ia).map(A=>({id:A.id,title:A.title,completed:i.currentChapter>A.id})));function g(){d.value=!0}function _(){d.value=!1}function m(A){i.setCurrentChapter(A),i.setNodeIndex(A,0),d.value=!1,e.push({name:"chapter",params:{id:String(A)}})}function p(A){if(d.value&&A.key==="Escape"){_();return}A.key==="Enter"&&c()}return Gn(()=>window.addEventListener("keydown",p)),Di(()=>window.removeEventListener("keydown",p)),(A,S)=>(Ne(),We("div",pE,[k("div",{class:"absolute inset-0 animate-bgSlowZoom bg-cover bg-center saturate-95",style:es({backgroundImage:`url(${ln(r)}images/scene/normal.png)`})},null,4),S[12]||(S[12]=k("div",{class:"absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]"},null,-1)),S[13]||(S[13]=k("div",{class:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40"},null,-1)),k("div",mE,[k("img",{class:"pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100",src:`${ln(r)}images/coach/normal.png`,alt:"教練"},null,8,gE)]),k("main",_E,[k("div",vE,[k("div",xE,[k("img",{src:`${ln(r)}images/logo.png`,alt:"新人後端生存指南",class:"block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]",draggable:"false"},null,8,bE),Ct(hE,{class:"pointer-events-none absolute inset-0 z-10",sparkleCount:50,padding:40}),S[0]||(S[0]=k("div",{class:"pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"},null,-1))]),k("nav",yE,[k("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 md:px-5 md:py-4",type:"button",onClick:c},[...S[1]||(S[1]=[Qo('<span class="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600" data-v-128a9681></span><span class="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" data-v-128a9681></span><span class="relative flex items-center justify-between" data-v-128a9681><span class="text-base md:text-lg" data-v-128a9681>開始遊戲</span><span class="hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block" data-v-128a9681>Enter</span></span>',3)])]),k("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4",type:"button",disabled:!s.value,onClick:u},[S[3]||(S[3]=k("span",{class:"absolute left-0 top-0 h-full w-1 bg-white/30"},null,-1)),k("span",ME,[k("span",EE,[S[2]||(S[2]=oi(" 繼續遊戲 ",-1)),s.value?(Ne(),We("span",TE,je(ln(n).name),1)):Ut("",!0)]),s.value?(Ne(),We("span",AE,je(l.value?"已通關":`Day ${a.value}`),1)):Ut("",!0)])],8,SE),k("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5",type:"button",onClick:g},[...S[4]||(S[4]=[k("span",{class:"absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),k("span",{class:"relative flex items-center justify-between"},[k("span",{class:"text-sm md:text-base"},"章節選擇"),k("span",{class:"text-xs text-white/30"},"跳關")],-1)])]),k("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5",type:"button",onClick:f},[...S[5]||(S[5]=[k("span",{class:"absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),k("span",{class:"relative flex items-center justify-between"},[k("span",{class:"text-sm md:text-base"},"刪除存檔"),k("span",{class:"hidden text-xs text-white/30 sm:inline-block"},"⌫")],-1)])])]),S[6]||(S[6]=k("p",{class:"mt-6 text-center text-xs text-white/30 md:mt-8 md:text-left"}," v1.0 · 2025 後端新手生存指南 ",-1))])]),(Ne(),an(jm,{to:"body"},[Ct(i_,{name:"fade"},{default:rh(()=>[d.value?(Ne(),We("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:R_(_,["self"])},[k("div",wE,[k("div",{class:"mb-4 flex items-center justify-between"},[S[8]||(S[8]=k("h2",{class:"text-lg font-bold text-white"},"章節選擇",-1)),k("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:_},[...S[7]||(S[7]=[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[k("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),k("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),S[10]||(S[10]=k("p",{class:"mb-4 text-sm text-white/50"},"選擇要跳轉的章節，進度將從該章節開始重新計算。",-1)),k("div",RE,[(Ne(!0),We(xt,null,Xr(h.value,b=>(Ne(),We("button",{key:b.id,class:fn(["group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800",b.completed?"border-emerald-500/30 bg-emerald-900/20":"border-white/10 bg-slate-800/50"]),onClick:C=>m(b.id)},[k("div",PE,[k("span",IE,[b.completed?(Ne(),We("span",DE,[...S[9]||(S[9]=[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[k("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Ut("",!0),k("span",LE,je(b.title),1)]),k("span",{class:fn(["text-xs",b.completed?"text-emerald-400":"text-white/40"])},je(b.completed?"已通關":`Day ${b.id}`),3)])],10,CE))),128))]),S[11]||(S[11]=k("p",{class:"mt-4 text-center text-xs text-white/30"},"按 ESC 關閉",-1))])])):Ut("",!0)]),_:1})]))]))}}),NE=jh(UE,[["__scopeId","data-v-128a9681"]]),FE={class:"absolute inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},OE={class:"w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"},BE={class:"font-extrabold text-slate-900"},kE=["placeholder"],zE={class:"mt-3 flex justify-end gap-2.5"},HE=["disabled"],VE=dn({__name:"NameInputModal",props:{title:{},placeholder:{},initialValue:{}},emits:["submit","cancel"],setup(t,{emit:e}){const n=t,i=e,r=_t(n.initialValue??"");qm(()=>{n.initialValue!=null&&!r.value&&(r.value=n.initialValue)});const s=ke(()=>r.value.trim().length>0);function o(){s.value&&i("submit",r.value.trim())}return(a,l)=>(Ne(),We("div",FE,[k("div",OE,[k("div",BE,je(t.title),1),sh(k("input",{class:"mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20",type:"text",placeholder:t.placeholder??"輸入名字...","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),onKeydown:P_(o,["enter"])},null,40,kE),[[M_,r.value]]),k("div",zE,[k("button",{class:"rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]",type:"button",onClick:l[1]||(l[1]=c=>a.$emit("cancel"))}," 取消 "),k("button",{class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",type:"button",disabled:!s.value,onClick:o}," 確定 ",8,HE)])])]))}}),GE={class:"absolute inset-0 z-60 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},WE={class:"grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"},XE={class:"flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5"},qE={class:"font-black text-slate-900"},$E={class:"mt-0.5 font-extrabold text-slate-700"},YE={key:0,class:"mt-1 text-xs font-semibold text-slate-600"},jE={class:"flex items-center gap-2.5"},KE={class:"font-extrabold text-slate-700"},ZE=["disabled"],JE={class:"grid grid-cols-1 gap-3.5 p-3.5 md:grid-cols-[1.1fr_1fr]"},QE={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},eT={class:"mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3"},tT={class:"flex justify-between gap-2.5"},nT={class:"font-mono text-sm font-black text-slate-900"},iT={class:"text-sm font-extrabold text-slate-500"},rT={class:"mt-1.5 font-black text-slate-700"},sT={class:"mt-3"},oT={class:"grid gap-2"},aT={class:"font-mono text-xs font-extrabold text-slate-700"},lT={class:"mt-2.5 text-xl font-black text-slate-900"},cT={class:"mt-2.5 font-semibold leading-7 text-slate-700"},uT={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},fT={class:"font-mono text-sm font-black text-slate-900/75"},dT={class:"mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"},hT={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3"},pT=["disabled"],mT={class:"flex justify-center gap-2"},gT=["disabled"],_T=dn({__name:"SlidesModal",props:{title:{},slides:{},mustFinish:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=_t(0),s=ke(()=>n.slides[r.value]),o=ke(()=>r.value>=n.slides.length-1);function a(){r.value=Math.max(0,r.value-1)}function l(){r.value=Math.min(n.slides.length-1,r.value+1)}function c(){n.mustFinish&&!o.value||i("close")}return(u,f)=>(Ne(),We("div",GE,[k("div",WE,[k("header",XE,[k("div",null,[k("div",qE,je(t.title),1),k("div",$E,je(s.value.title),1),s.value.subtitle?(Ne(),We("div",YE,je(s.value.subtitle),1)):Ut("",!0)]),k("div",jE,[k("div",KE,"步驟 "+je(r.value+1)+"/"+je(t.slides.length),1),k("button",{class:"rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:t.mustFinish&&!o.value,onClick:c}," 關閉 ",8,ZE)])]),k("div",JE,[k("section",null,[k("div",QE,[f[2]||(f[2]=k("div",{class:"inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900"}," 互動式簡報 ",-1)),s.value.commit?(Ne(),We(xt,{key:0},[k("div",eT,[k("div",tT,[k("div",nT,je(s.value.commit.sha),1),k("div",iT,je(s.value.commit.when),1)]),k("div",rT,je(s.value.commit.message),1)]),k("div",sT,[f[0]||(f[0]=k("div",{class:"mb-2 font-black text-slate-900"},"本次變更檔案",-1)),k("div",oT,[(Ne(!0),We(xt,null,Xr(s.value.commit.files,d=>(Ne(),We("div",{key:d.path,class:"flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"},[k("span",{class:fn(["grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black",d.change==="A"?"bg-emerald-500/15 text-emerald-800":d.change==="M"?"bg-blue-500/15 text-blue-700":"bg-rose-500/15 text-rose-800"])},je(d.change),3),k("span",aT,je(d.path),1)]))),128))])])],64)):(Ne(),We(xt,{key:1},[k("div",lT,je(s.value.title),1),k("div",cT,je(s.value.body),1),f[1]||(f[1]=Qo('<div class="mt-3 flex flex-wrap gap-2"><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">版本控制</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">Commit 更新點</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">看懂改動</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">回到安全點</span></div>',1))],64))])]),k("section",null,[k("div",uT,[k("div",fT,je(s.value.commit?"changes.diff":"notes.txt"),1),k("pre",dT,[k("code",null,je(s.value.commit?s.value.commit.diffPreview:s.value.body??""),1)])])])]),k("footer",hT,[k("button",{class:"justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:r.value===0,onClick:a}," 上一部 ",8,pT),k("div",mT,[(Ne(!0),We(xt,null,Xr(t.slides.length,d=>(Ne(),We("span",{key:d,class:fn(["h-2 w-2 rounded-full bg-slate-900/20",d-1===r.value?"bg-amber-500":""])},null,2))),128))]),k("button",{class:"justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:o.value,onClick:l}," 下一部 ",8,gT)])])]))}}),vT={class:"fixed inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},xT={class:"flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95"},bT={class:"flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5"},yT={class:"font-black text-slate-900"},ST={class:"text-sm font-extrabold text-slate-500"},MT={class:"flex-1 overflow-y-auto px-4 py-4"},ET={class:"text-lg font-black text-slate-900"},TT={class:"mt-3 grid gap-2.5"},AT=["value","disabled"],wT={class:"font-extrabold text-slate-700"},RT={class:"font-black text-slate-900"},CT={class:"mt-1.5 font-bold leading-7 text-slate-700"},PT={class:"flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3"},IT={class:"flex gap-2.5"},DT=["disabled"],LT=dn({__name:"QuizModal",props:{title:{},questions:{}},emits:["done","cancel"],setup(t,{emit:e}){const n=t,i=e,r=_t(0),s=_t(null),o=_t(!1),a=_t(0),l=ke(()=>n.questions[r.value]),c=ke(()=>n.questions.length),u=ke(()=>r.value>=n.questions.length-1),f=ke(()=>o.value&&s.value===l.value.correctOptionId);function d(){s.value&&(o.value||(o.value=!0,s.value===l.value.correctOptionId&&(a.value+=1)))}function h(){s.value=null,o.value=!1}function g(){if(o.value){if(u.value){i("done",{correctCount:a.value,total:c.value});return}r.value+=1,s.value=null,o.value=!1}}return(_,m)=>(Ne(),We("div",vT,[k("div",xT,[k("header",bT,[k("div",yT,je(t.title),1),k("div",ST,"第 "+je(r.value+1)+"/"+je(c.value)+" 題",1)]),k("div",MT,[k("div",ET,je(l.value.prompt),1),k("div",TT,[(Ne(!0),We(xt,null,Xr(l.value.options,p=>(Ne(),We("label",{key:p.id,class:fn(["flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3",o.value?"cursor-default opacity-90":"hover:bg-white"])},[sh(k("input",{type:"radio",name:"quiz",value:p.id,"onUpdate:modelValue":m[0]||(m[0]=A=>s.value=A),disabled:o.value},null,8,AT),[[E_,s.value]]),k("span",wT,je(p.label),1)],2))),128))]),o.value?(Ne(),We("div",{key:0,class:fn(["mt-3 rounded-2xl border px-3 py-3",f.value?"border-emerald-500/25 bg-emerald-500/10":"border-amber-500/25 bg-amber-500/10"])},[k("div",RT,je(f.value?"答對了":"差一點"),1),k("div",CT,je(l.value.explanation),1)],2)):Ut("",!0)]),k("footer",PT,[k("button",{class:"rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]",type:"button",onClick:m[1]||(m[1]=p=>i("cancel"))}," 取消測驗 "),k("div",IT,[o.value?f.value?(Ne(),We("button",{key:1,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:g},je(u.value?"完成":"下一題"),1)):(Ne(),We("button",{key:2,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:h}," 重新作答 ")):(Ne(),We("button",{key:0,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55",type:"button",disabled:!s.value,onClick:d}," 提交 ",8,DT))])])])]))}}),UT={class:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90",role:"dialog","aria-modal":"true"},NT={class:"mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300"},FT={class:"mb-8 text-xl font-bold text-white/90"},OT={class:"text-amber-400"},BT=dn({__name:"CelebrationModal",props:{playerName:{},chapterTitle:{}},emits:["close"],setup(t,{emit:e}){const n=e,i=_t(null),r=_t(null),s=_t(!1);let o=null;function a(f){const h=document.createElement("canvas");h.width=64,h.height=64;const g=h.getContext("2d"),_=g.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return _.addColorStop(0,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 1)`),_.addColorStop(.3,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.8)`),_.addColorStop(.6,`rgba(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)}, 0.3)`),_.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=_,g.fillRect(0,0,64,64),new Gr(h)}function l(){const d=document.createElement("canvas");d.width=64,d.height=64;const h=d.getContext("2d");h.fillStyle="rgba(0, 0, 0, 0)",h.fillRect(0,0,64,64),h.fillStyle="#FFD700",h.beginPath();const g=64/2,_=64/2,m=4,p=64/2-2,A=64/6;for(let S=0;S<m*2;S++){const b=S%2===0?p:A,C=S*Math.PI/m-Math.PI/2,P=g+Math.cos(C)*b,I=_+Math.sin(C)*b;S===0?h.moveTo(P,I):h.lineTo(P,I)}return h.closePath(),h.fill(),h.shadowColor="#FFD700",h.shadowBlur=10,h.fill(),new Gr(d)}function c(f){const d=document.createElement("canvas");d.width=16,d.height=32;const h=d.getContext("2d");return h.fillStyle=`rgb(${Math.floor(f.r*255)}, ${Math.floor(f.g*255)}, ${Math.floor(f.b*255)})`,h.fillRect(0,0,16,32),new Gr(d)}function u(){if(!r.value||!i.value)return;const f=new Wp({canvas:r.value,alpha:!0,antialias:!0});f.setClearColor(0,0),f.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const d=i.value.clientWidth,h=i.value.clientHeight;f.setSize(d,h,!1);const g=new Dp,_=new vn(60,d/h,.1,1e3);_.position.z=500;const m=[new qe(16739179),new qe(16767293),new qe(7064439),new qe(5084927),new qe(13218303),new qe(16752453),new qe(16196997)],p=[];function A(H,U){const ie=m[Math.floor(Math.random()*m.length)],ue=80+Math.floor(Math.random()*60),ve=new Dn,Se=new Float32Array(ue*3),Ze=new Float32Array(ue),Ve=[];for(let se=0;se<ue;se++){Se[se*3]=H,Se[se*3+1]=U,Se[se*3+2]=0,Ze[se]=8+Math.random()*12;const re=Math.random()*Math.PI*2,fe=Math.acos(2*Math.random()-1),Le=3+Math.random()*5;Ve.push(new J(Math.sin(fe)*Math.cos(re)*Le,Math.sin(fe)*Math.sin(re)*Le,Math.cos(fe)*Le*.3))}ve.setAttribute("position",new Jt(Se,3)),ve.setAttribute("size",new Jt(Ze,1));const ne=new Cc({map:a(ie),size:20,transparent:!0,blending:Fs,depthWrite:!1,vertexColors:!1}),me=new Kf(ve,ne);g.add(me);const F=50+Math.random()*150;p.push({particles:me,velocities:Ve,life:0,maxLife:120+Math.random()*60,phase:"rising",riseVelocity:new J(0,8+Math.random()*4,0),targetY:F})}const S=30,b=new Dn,C=new Float32Array(S*3),P=new Float32Array(S),I=[];for(let H=0;H<S;H++){const U=(Math.random()-.5)*d*.9,ie=(Math.random()-.5)*h*.7;C[H*3]=U,C[H*3+1]=ie,C[H*3+2]=-50,P[H]=15+Math.random()*25,I.push({baseX:U,baseY:ie,floatSpeed:.5+Math.random()*1,floatRadius:5+Math.random()*15,rotateSpeed:.02+Math.random()*.03,twinkleSpeed:2+Math.random()*3,twinklePhase:Math.random()*Math.PI*2})}b.setAttribute("position",new Jt(C,3)),b.setAttribute("size",new Jt(P,1));const L=new Cc({map:l(),size:30,transparent:!0,blending:Fs,depthWrite:!1}),y=new Kf(b,L);g.add(y);const M=60,R=[],z=[new qe(16739179),new qe(16767293),new qe(7064439),new qe(5084927),new qe(16196997),new qe(16752453)];for(let H=0;H<M;H++){const U=z[Math.floor(Math.random()*z.length)],ie=new Zs(8+Math.random()*8,16+Math.random()*16),ue=new uu({map:c(U),side:Bn,transparent:!0,opacity:.9}),ve=new Hn(ie,ue);ve.position.set((Math.random()-.5)*d,h/2+Math.random()*200,(Math.random()-.5)*100),ve.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(ve),R.push({mesh:ve,velocity:new J((Math.random()-.5)*2,-2-Math.random()*3,(Math.random()-.5)*1),rotationSpeed:new J((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1),swayPhase:Math.random()*Math.PI*2,swaySpeed:2+Math.random()*2})}let q=0,G;setTimeout(()=>A(-100,-h/2-50),100),setTimeout(()=>A(100,-h/2-50),400),setTimeout(()=>A(0,-h/2-50),700),setTimeout(()=>{s.value=!0},800);function j(){G=requestAnimationFrame(j),q++;for(let U=p.length-1;U>=0;U--){const ie=p[U],ue=ie.particles.geometry.attributes.position.array,ve=ue.length/3;if(ie.phase==="rising"){for(let Se=0;Se<ve;Se++)ue[Se*3+1]+=ie.riseVelocity.y;ue[1]>=ie.targetY&&(ie.phase="exploding")}else{ie.life++;const Se=ie.life/ie.maxLife;for(let Ve=0;Ve<ve;Ve++){const ne=ie.velocities[Ve];ue[Ve*3]+=ne.x*(1-Se*.5),ue[Ve*3+1]+=ne.y*(1-Se*.5)-.15,ue[Ve*3+2]+=ne.z*(1-Se*.5)}const Ze=ie.particles.material;Ze.opacity=1-Se,ie.life>=ie.maxLife&&(g.remove(ie.particles),ie.particles.geometry.dispose(),ie.particles.material.dispose(),p.splice(U,1))}ie.particles.geometry.attributes.position.needsUpdate=!0}if(q%90===0&&p.length<5){const U=(Math.random()-.5)*d*.6;A(U,-h/2-50)}const H=y.geometry.attributes.position.array;for(let U=0;U<S;U++){const ie=I[U],ue=q*.02;H[U*3]=ie.baseX+Math.sin(ue*ie.floatSpeed)*ie.floatRadius,H[U*3+1]=ie.baseY+Math.cos(ue*ie.floatSpeed*.7)*ie.floatRadius*.5;const ve=Math.sin(ue*ie.twinkleSpeed+ie.twinklePhase)*.5+.5;y.geometry.attributes.size.array[U]=15+ve*25}y.geometry.attributes.position.needsUpdate=!0,y.geometry.attributes.size.needsUpdate=!0,y.rotation.z+=5e-4;for(const U of R)U.mesh.position.add(U.velocity),U.mesh.rotation.x+=U.rotationSpeed.x,U.mesh.rotation.y+=U.rotationSpeed.y,U.mesh.rotation.z+=U.rotationSpeed.z,U.swayPhase+=.05,U.mesh.position.x+=Math.sin(U.swayPhase*U.swaySpeed)*.5,U.mesh.position.y<-h/2-50&&(U.mesh.position.y=h/2+50,U.mesh.position.x=(Math.random()-.5)*d);f.render(g,_)}j();const $=()=>{if(!i.value)return;const H=i.value.clientWidth,U=i.value.clientHeight;f.setSize(H,U,!1),_.aspect=H/U,_.updateProjectionMatrix()};window.addEventListener("resize",$),o=()=>{cancelAnimationFrame(G),window.removeEventListener("resize",$);for(const H of p)g.remove(H.particles),H.particles.geometry.dispose(),H.particles.material.dispose();g.remove(y),b.dispose(),L.dispose();for(const H of R)g.remove(H.mesh),H.mesh.geometry.dispose(),H.mesh.material.dispose();f.dispose()}}return Gn(()=>{u()}),Di(()=>{o?.(),o=null}),(f,d)=>(Ne(),We("div",UT,[k("div",{ref_key:"containerEl",ref:i,class:"absolute inset-0"},[k("canvas",{ref_key:"canvasEl",ref:r,class:"h-full w-full"},null,512)],512),k("div",{class:fn(["relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700",s.value?"translate-y-0 opacity-100":"translate-y-8 opacity-0"])},[d[2]||(d[2]=k("div",{class:"mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]"},[k("svg",{class:"h-14 w-14 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[k("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),d[3]||(d[3]=k("h2",{class:"mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl"}," 恭喜完成！ ",-1)),k("div",NT,je(t.chapterTitle),1),k("p",FT,[k("span",OT,je(t.playerName),1),d[1]||(d[1]=oi("，你做到了！ ",-1))]),k("button",{class:"rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]",type:"button",onClick:d[0]||(d[0]=h=>n("close"))}," 繼續前進 ")],2)]))}}),kT="modulepreload",zT=function(t){return"/backend-camp-game/"+t},Md={},Ml=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=zT(c),c in Md)return;Md[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":kT,u||(d.as="script"),d.crossOrigin="",d.href=c,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((h,g)=>{d.addEventListener("load",h),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},HT={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},VT={class:"relative flex h-[95vh] w-[95vw] max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl"},GT={class:"flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"},WT={class:"text-lg font-bold text-slate-800"},XT={class:"flex-1 overflow-hidden"},qT={key:1,class:"flex h-full items-center justify-center text-slate-500"},$T=768,Xp=dn({__name:"InteractiveSlideModal",props:{slideId:{},title:{}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=_t(!1);function s(){r.value=window.innerWidth<$T}Gn(()=>{s(),window.addEventListener("resize",s)}),Di(()=>{window.removeEventListener("resize",s)});const o={"git-intro":La(()=>Ml(()=>import("./GitIntroSlide-CCxHL6QL.js"),__vite__mapDeps([0,1,2]))),"docker-intro":La(()=>Ml(()=>import("./DockerIntroSlide-B7WzZgD9.js"),__vite__mapDeps([3,1,4]))),"architecture-intro":La(()=>Ml(()=>import("./ArchitectureIntroSlide-CSXEHa1Q.js"),__vite__mapDeps([5,1,6])))},a=ke(()=>o[n.slideId]||null);function l(){i("close")}return(c,u)=>(Ne(),We("div",HT,[k("div",VT,[k("header",GT,[k("h2",WT,je(t.title),1),k("button",{type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600",onClick:u[0]||(u[0]=f=>i("close"))},[...u[1]||(u[1]=[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[k("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),k("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),k("main",XT,[a.value?(Ne(),an(fg(a.value),{key:0,isMobile:r.value,onComplete:l},null,40,["isMobile"])):(Ne(),We("div",qT," 找不到簡報元件："+je(t.slideId),1))])])]))}}),YT={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},jT={class:"relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl md:flex-row"},KT={class:"hidden w-64 shrink-0 flex-col items-center justify-center border-r border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-6 md:flex"},ZT=["src"],JT={class:"flex flex-1 flex-col"},QT={class:"border-b border-slate-700 bg-slate-800 px-6 py-4"},eA={class:"flex items-center gap-3"},tA=["src"],nA={class:"flex-1 overflow-y-auto p-6"},iA={class:"mb-6 rounded-xl border-2 border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-orange-900/20 p-4"},rA={class:"text-lg font-medium leading-relaxed text-amber-50"},sA={key:0,class:"space-y-3"},oA=["onClick"],aA={class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-500 bg-slate-700 text-sm font-bold text-slate-300"},lA={class:"text-white"},cA={key:1,class:"space-y-4"},uA={class:"mb-2 flex items-center gap-2"},fA={key:0,class:"rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-400"},dA={key:1,class:"rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-400"},hA={class:"flex items-center gap-3"},pA={class:"text-white"},mA={class:"rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4"},gA={class:"leading-relaxed text-white"},_A={key:0,class:"border-t border-slate-700 bg-slate-800 px-6 py-4"},vA=dn({__name:"ChoiceModal",props:{prompt:{},options:{},coachExpression:{}},emits:["select"],setup(t,{emit:e}){const n=t,i=e,r=_t(null),s=_t(null),o=_t(!1),a=ke(()=>o.value&&r.value?r.value.responseExpression||"normal":n.coachExpression||"normal"),l=ke(()=>`/backend-camp-game/images/coach/${a.value}.png`),c=ke(()=>r.value?.isCorrect===!0);function u(h,g){r.value=h,s.value=g,o.value=!0}function f(){r.value=null,s.value=null,o.value=!1}function d(){r.value&&c.value&&i("select",r.value)}return(h,g)=>(Ne(),We("div",YT,[k("div",jT,[k("div",KT,[k("img",{src:l.value,alt:"海克絲",class:"h-auto max-h-[300px] w-full object-contain transition-all duration-300"},null,8,ZT),g[0]||(g[0]=k("div",{class:"mt-4 text-center"},[k("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-3 py-1 text-sm font-black text-amber-100"}," 海克絲 ")],-1))]),k("div",JT,[k("header",QT,[k("div",eA,[k("img",{src:l.value,alt:"海克絲",class:"h-12 w-12 rounded-full border-2 border-amber-400/50 object-cover md:hidden"},null,8,tA),g[1]||(g[1]=k("div",null,[k("h2",{class:"text-lg font-bold text-white"},"海克絲的提問"),k("p",{class:"text-xs text-slate-400"},"選擇你認為正確的答案")],-1))])]),k("main",nA,[k("div",iA,[k("p",rA,je(t.prompt),1)]),o.value?(Ne(),We("div",cA,[k("div",{class:fn(["rounded-xl border-2 bg-slate-800 p-4",r.value?.isCorrect?"border-green-500":"border-orange-500"])},[k("div",uA,[g[2]||(g[2]=k("span",{class:"text-sm text-slate-400"},"你的回答",-1)),r.value?.isCorrect?(Ne(),We("span",fA,"正確！")):(Ne(),We("span",dA,"不太對喔"))]),k("div",hA,[k("span",{class:fn(["flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",r.value?.isCorrect?"border-green-500 bg-green-500/20 text-green-400":"border-orange-500 bg-orange-500/20 text-orange-400"])},je(s.value!==null?s.value+1:""),3),k("p",pA,je(r.value?.label),1)])],2),k("div",mA,[g[3]||(g[3]=k("div",{class:"mb-2 flex items-center gap-2"},[k("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-2 py-0.5 text-xs font-black text-amber-100"},"海克絲")],-1)),k("p",gA,je(r.value?.response),1)])])):(Ne(),We("div",sA,[(Ne(!0),We(xt,null,Xr(t.options,(_,m)=>(Ne(),We("button",{key:_.id,class:"flex w-full items-center gap-3 rounded-xl border-2 border-slate-600 bg-slate-800 p-4 text-left transition-all hover:border-amber-400 hover:bg-slate-700",onClick:p=>u(_,m)},[k("span",aA,je(m+1),1),k("span",lA,je(_.label),1)],8,oA))),128))]))]),o.value?(Ne(),We("footer",_A,[c.value?(Ne(),We("button",{key:0,class:"w-full rounded-xl border border-amber-300/35 bg-amber-300/20 py-3 font-bold text-white transition-all hover:bg-amber-300/30 active:scale-[0.99]",onClick:d}," 繼續 ")):(Ne(),We("button",{key:1,class:"w-full rounded-xl border border-orange-400/35 bg-orange-400/20 py-3 font-bold text-white transition-all hover:bg-orange-400/30 active:scale-[0.99]",onClick:f}," 再想想看 "))])):Ut("",!0)])])]))}}),xA={key:0,class:"flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14"},bA={class:"pointer-events-none fixed inset-0 z-0"},yA={class:"fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3"},SA={class:"text-center text-sm font-black text-white/90"},MA=["title"],EA={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},TA={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},AA={class:"relative z-10 flex flex-1 flex-col justify-end"},wA={key:0,class:"pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center",style:{top:"56px",bottom:"160px"}},RA=["src"],CA={key:1,class:"relative z-10 mb-4 max-h-[45vh] flex-1 overflow-y-auto px-4 md:max-h-[55vh]"},PA={class:"flex min-h-full items-center justify-center py-4"},IA=["src"],DA={key:2,class:"relative z-20 px-3 pb-safe-bottom md:pb-6"},LA={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},UA={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},NA=["innerHTML"],FA={class:"mt-3 flex justify-end gap-2.5"},OA=["disabled"],BA=["disabled"],kA=dn({__name:"ChapterView",setup(t){const e=Z0(),n=tu(),i=lp(),r=cp(),s=ke(()=>Number(e.params.id)||1),o=ke(()=>ov(s.value));Or(o,D=>{D||n.push({name:"start"})},{immediate:!0}),Gn(()=>{i.loadFromStorage(),r.loadFromStorage()});const a=new Audio("/backend-camp-game/audio/background.mp3");a.loop=!0,a.volume=.1;const l=_t(!1);function c(){l.value?a.pause():a.play().catch(()=>{}),l.value=!l.value}Di(()=>{a.pause(),a.currentTime=0});const u=ke(()=>o.value?.nodes??[]),f=ke(()=>{const D=r.getNodeIndex(s.value);return Math.min(D,u.value.length-1)}),d=ke(()=>u.value[f.value]),h=ke(()=>d.value?.type==="inputName"),g=ke(()=>d.value?.type==="slides"),_=ke(()=>d.value?.type==="quiz"),m=ke(()=>d.value?.type==="celebration"),p=ke(()=>d.value?.type==="interactiveSlide"),A=ke(()=>d.value?.type==="choice"),S=ke(()=>d.value?.type==="inputName"?d.value:null),b=ke(()=>d.value?.type==="slides"?d.value:null),C=ke(()=>d.value?.type==="quiz"?d.value:null),P=ke(()=>d.value?.type==="celebration"?d.value:null),I=ke(()=>d.value?.type==="interactiveSlide"?d.value:null),L=ke(()=>d.value?.type==="choice"?d.value:null),y=ke(()=>{if(d.value?.type==="dialogue"&&d.value.image){const D=d.value.image;return D.startsWith("/")?`/backend-camp-game/${D.slice(1)}`:D}return null}),M=_t(""),R=_t(null);function z(D){const Y=i.name||"你";return D.split("{name}").join(Y)}function q(D){const Y=/(https?:\/\/[^\s]+)/g;return D.replace(Y,'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')}function G(D){R.value&&window.clearInterval(R.value),M.value="";let Y=0;R.value=window.setInterval(()=>{Y+=1,M.value=D.slice(0,Y),Y>=D.length&&(R.value&&window.clearInterval(R.value),R.value=null)},16)}function j(D){D?.type==="dialogue"?G(z(D.text)):(R.value&&window.clearInterval(R.value),R.value=null,M.value="")}Gn(()=>{d.value&&j(d.value)});function $(){if(d.value?.type!=="dialogue")return;const D=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,D),j(u.value[D])}function H(D){for(let Y=D-1;Y>=0;Y--)if(u.value[Y]?.type==="dialogue")return Y;return-1}const U=ke(()=>d.value?.type!=="dialogue"?!1:H(f.value)>=0);function ie(){if(d.value?.type!=="dialogue")return;const D=H(f.value);D>=0&&(r.setNodeIndex(s.value,D),j(u.value[D]))}function ue(){n.push({name:"start"})}function ve(D){i.setName(D);const Y=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,Y),j(u.value[Y])}function Se(){const D=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,D),j(u.value[D])}function Ze(){const D=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,D),j(u.value[D])}function Ve(D){const Y=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,Y),j(u.value[Y])}function ne(){const D=Math.min(f.value+1,u.value.length-1);r.setNodeIndex(s.value,D),j(u.value[D])}function me(){const D=Math.max(f.value-1,0);r.setNodeIndex(s.value,D),j(u.value[D])}function F(){r.completeChapter(s.value);const D=s.value+1;ia[D]?n.push({name:"chapter",params:{id:String(D)}}):n.push({name:"start"})}const se=ke(()=>`/backend-camp-game/images/scene/${d.value?.scene??"normal"}.png`),re=ke(()=>`/backend-camp-game/images/coach/${d.value?.coachExpression??"normal"}.png`),fe=ke(()=>d.value?.type!=="dialogue"?"海克絲":d.value.speaker==="你"?i.name||"你":d.value.speaker),Le=ke(()=>d.value?.type!=="dialogue"||d.value.speaker==="海克絲"?"border-amber-300/35 bg-amber-300/20 text-amber-100":d.value.speaker==="你"?"border-sky-400/35 bg-sky-400/20 text-sky-100":"border-slate-400/35 bg-slate-400/20 text-slate-200"),w=ke(()=>d.value?.type==="dialogue"&&R.value!=null);function v(){d.value?.type==="dialogue"&&(R.value&&window.clearInterval(R.value),R.value=null,M.value=z(d.value.text))}function O(D){h.value||g.value||_.value||m.value||p.value||A.value||(D.key==="Enter"||D.key===" "||D.key==="ArrowRight"?(D.preventDefault(),w.value?v():d.value?.type==="dialogue"&&$()):D.key==="ArrowLeft"&&(D.preventDefault(),U.value&&ie()))}return Gn(()=>window.addEventListener("keydown",O)),Di(()=>window.removeEventListener("keydown",O)),(D,Y)=>o.value?(Ne(),We("div",xA,[k("div",bA,[k("div",{class:"absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95",style:es({backgroundImage:`url(${se.value})`})},null,4),Y[0]||(Y[0]=k("div",{class:"absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]"},null,-1))]),k("header",yA,[k("button",{class:"rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]",type:"button",onClick:ue}," 返回開始 "),k("div",SA,je(o.value.title),1),k("button",{class:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",type:"button",title:l.value?"關閉音樂":"開啟音樂",onClick:c},[l.value?(Ne(),We("svg",EA,[...Y[1]||(Y[1]=[k("path",{d:"M9 18V5l12-2v13"},null,-1),k("circle",{cx:"6",cy:"18",r:"3"},null,-1),k("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):(Ne(),We("svg",TA,[...Y[2]||(Y[2]=[k("path",{d:"M9 18V5l12-2v13"},null,-1),k("circle",{cx:"6",cy:"18",r:"3"},null,-1),k("circle",{cx:"18",cy:"16",r:"3"},null,-1),k("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2"},null,-1)])]))],8,MA)]),k("main",AA,[!y.value&&!_.value&&!g.value&&!m.value&&!p.value&&!A.value?(Ne(),We("div",wA,[k("img",{class:"h-full w-auto max-w-[85vw] object-contain object-bottom",src:re.value,alt:"教練"},null,8,RA)])):Ut("",!0),y.value?(Ne(),We("div",CA,[k("div",PA,[k("img",{src:y.value,alt:"展示圖片",class:"max-h-[40vh] max-w-full rounded-lg border border-white/20 object-contain shadow-2xl md:max-h-[50vh]"},null,8,IA)])])):Ut("",!0),!_.value&&!g.value&&!m.value&&!p.value&&!A.value?(Ne(),We("div",DA,[k("div",LA,[k("div",{class:fn(["mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black",Le.value])},je(fe.value),3),k("div",UA,[d.value?.type==="dialogue"?(Ne(),We("span",{key:0,innerHTML:q(M.value)},null,8,NA)):d.value?.type==="inputName"?(Ne(),We(xt,{key:1},[oi(je(S.value?.prompt),1)],64)):d.value?.type==="slides"?(Ne(),We(xt,{key:2},[oi("我們先看一段簡報，把 Git 的重點抓起來。")],64)):(Ne(),We(xt,{key:3},[oi("來，快速確認一下你抓到重點了沒有。")],64))]),k("div",FA,[k("button",{class:"rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30",type:"button",disabled:!U.value,onClick:ie}," 上一句 ",8,OA),k("button",{class:"rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:d.value?.type!=="dialogue",onClick:$}," 下一句 ",8,BA)])])])):Ut("",!0)]),h.value&&S.value?(Ne(),an(VE,{key:0,title:S.value.prompt,placeholder:"例如：小明",initialValue:ln(i).name,onSubmit:ve,onCancel:ue},null,8,["title","initialValue"])):Ut("",!0),g.value&&b.value?(Ne(),an(_T,{key:1,title:b.value.title,slides:b.value.slides,mustFinish:b.value.mustFinish,onClose:Se},null,8,["title","slides","mustFinish"])):Ut("",!0),_.value&&C.value?(Ne(),an(LT,{key:2,title:C.value.title,questions:C.value.questions,onDone:ne,onCancel:me},null,8,["title","questions"])):Ut("",!0),m.value&&P.value?(Ne(),an(BT,{key:3,playerName:ln(i).name||"你",chapterTitle:P.value.chapterTitle,onClose:F},null,8,["playerName","chapterTitle"])):Ut("",!0),p.value&&I.value?(Ne(),an(Xp,{key:4,slideId:I.value.slideId,title:I.value.title,onClose:Ze},null,8,["slideId","title"])):Ut("",!0),A.value&&L.value?(Ne(),an(vA,{key:5,prompt:L.value.prompt,options:L.value.options,coachExpression:L.value.coachExpression,onSelect:Ve},null,8,["prompt","options","coachExpression"])):Ut("",!0)])):Ut("",!0)}}),zA={class:"min-h-screen bg-slate-900 p-8"},HA={class:"mx-auto max-w-4xl"},VA={class:"mb-8"},GA={class:"grid gap-4 md:grid-cols-2"},WA=["onClick"],XA={class:"mb-2 flex items-start justify-between"},qA={class:"font-bold text-white group-hover:text-blue-400"},$A={class:"rounded bg-slate-700 px-2 py-0.5 font-mono text-xs text-slate-400"},YA={class:"text-sm text-slate-400"},jA=dn({__name:"DevView",setup(t){const e=tu(),n=[{id:"git-intro",title:"Git 互動實驗室：Repository 概念",description:"教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾"}],i=_t(null);function r(a){i.value=a}function s(){i.value=null}function o(){e.push({name:"start"})}return(a,l)=>(Ne(),We("div",zA,[k("div",HA,[k("div",{class:"mb-8 flex items-center justify-between"},[l[0]||(l[0]=k("div",null,[k("h1",{class:"flex items-center gap-3 text-2xl font-bold text-white"},[k("span",{class:"rounded bg-amber-500 px-2 py-1 text-sm"},"DEV"),oi(" 開發者金手指 ")]),k("p",{class:"mt-2 text-slate-400"},"直接預覽互動式簡報，不用跑完整遊戲流程")],-1)),k("button",{class:"rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700",onClick:o}," 返回遊戲 ")]),k("section",VA,[l[3]||(l[3]=k("h2",{class:"mb-4 flex items-center gap-2 text-lg font-bold text-white"},[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-blue-400",viewBox:"0 0 256 256",fill:"currentColor"},[k("path",{d:"M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"})]),oi(" 互動式簡報 ")],-1)),k("div",GA,[(Ne(),We(xt,null,Xr(n,c=>k("div",{key:c.id,class:"group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750",onClick:u=>r(c)},[k("div",XA,[k("h3",qA,je(c.title),1),k("span",$A,je(c.id),1)]),k("p",YA,je(c.description),1),l[1]||(l[1]=k("div",{class:"mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"},[k("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 256 256",fill:"currentColor"},[k("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"})]),oi(" 點擊預覽 ")],-1))],8,WA)),64)),l[2]||(l[2]=Qo('<div class="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-700 p-5 text-center"><svg xmlns="http://www.w3.org/2000/svg" class="mb-2 h-8 w-8 text-slate-600" viewBox="0 0 256 256" fill="currentColor"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg><p class="text-sm text-slate-500">新增更多簡報</p><p class="mt-1 text-xs text-slate-600">在 interactive-slides/ 資料夾</p></div>',1))])]),l[4]||(l[4]=Qo('<section class="rounded-xl border border-slate-700 bg-slate-800/50 p-5"><h2 class="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg> 如何新增互動簡報 </h2><ol class="space-y-2 text-sm text-slate-300"><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">1</span><span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">src/components/interactive-slides/</code> 建立新的 Vue 元件</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">2</span><span>在 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">InteractiveSlideModal.vue</code> 的 slideComponents 註冊</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">3</span><span>在本頁的 slides 陣列加入簡報資訊，即可在這裡預覽</span></li><li class="flex gap-2"><span class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-700 text-xs font-bold">4</span><span>在章節的 nodes 裡加入 <code class="rounded bg-slate-700 px-1.5 py-0.5 font-mono text-xs">type: &#39;interactiveSlide&#39;</code> 節點</span></li></ol></section><div class="mt-6 flex flex-wrap gap-3 text-sm"><a href="https://github.com/hexschool/backend-camp-game" target="_blank" class="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800 px-3 py-1.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.55a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.55a8.09,8.09,0,0,0,1,7.65A41.72,41.72,0,0,1,200,104Z"></path></svg> GitHub Repo </a><span class="flex items-center gap-1.5 rounded-lg border border-slate-700/50 bg-slate-800/50 px-3 py-1.5 text-slate-500"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 256 256" fill="currentColor"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h56A8,8,0,0,1,192,128Z"></path></svg> 此頁面僅在開發環境顯示 </span></div>',2))]),i.value?(Ne(),an(Xp,{key:0,slideId:i.value.id,title:i.value.title,onClose:s},null,8,["slideId","title"])):Ut("",!0)]))}}),KA=K0({history:R0("/backend-camp-game/"),routes:[{path:"/",name:"start",component:NE},{path:"/chapter/:id",name:"chapter",component:kA},{path:"/dev",name:"dev",component:jA}]});L_(W_).use(F_()).use(KA).mount("#app");export{xt as F,jm as T,jh as _,an as a,rh as b,ke as c,dn as d,k as e,We as f,oi as g,Ut as h,sh as i,Xr as j,R_ as k,Gn as l,es as m,fn as n,Ne as o,ZA as p,_t as r,je as t,JA as v,Or as w};
