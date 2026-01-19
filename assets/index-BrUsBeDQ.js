const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GitIntroSlide-DrNL9Bg5.js","assets/InteractiveSlideTemplate.vue_vue_type_script_setup_true_lang-DCPryaUW.js","assets/GitIntroSlide-Cj2xeLqW.css","assets/DockerIntroSlide-h-jGbRX2.js","assets/DockerIntroSlide-CYf1W49A.css","assets/ArchitectureIntroSlide-B3HOzpf7.js","assets/ArchitectureIntroSlide-BbQQ0RUK.css","assets/StaticDynamicSlide-C8xyL1_O.js","assets/StaticDynamicSlide-DFaqwSDC.css","assets/CoachBackendSlide-Bkixb7Av.js","assets/CoachBackendSlide-CaiZ0Sl7.css","assets/UrlRequestSlide-TysiDRrM.js","assets/UrlRequestSlide-CVB3wnM2.css","assets/NetworkRequestSlide-DF-aAShl.js","assets/NetworkRequestSlide-DkazN4m_.css","assets/ApiIntroSlide-DIECRfLA.js","assets/ApiIntroSlide-Ca1QHk0Q.css","assets/ApiDemoSlide-C-ksq9KX.js","assets/ApiDemoSlide-D0BgA10u.css","assets/DragQuizSlide-CkOtESvb.js","assets/DragQuizSlide-Dl9PpoJx.css","assets/DragSortSlide-DPfOa03j.js","assets/DragSortSlide-Cs29H3fI.css","assets/DataFlowSlide-BwJt8Pa4.js","assets/DataFlowSlide-DggPdhZy.css","assets/ThirdPartySlide-CP40qKjW.js","assets/ThirdPartySlide-CqV20lID.css","assets/DatabaseIntroSlide-BfCP5rfw.js","assets/DatabaseIntroSlide-CUAE_8cL.css","assets/TableDesignSlide-BlyjpDhV.js","assets/LivefitDatabaseSlide-CklnzPLi.js","assets/DatabaseAccessSlide-Vmlzr4RI.js","assets/DatabaseAccessSlide-CKfbODCe.css","assets/SqlPracticeSlide-DhlZZGp9.js","assets/SqlPracticeSlide-CFcdUJ26.css","assets/SqlBasicsSlide-GJhpASmT.js","assets/SqlBasicsSlide-CDvuDKHy.css","assets/VideoMessageSlide-CHKdTg1R.js","assets/VideoMessageSlide-K0f7yUBD.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Bc(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const vt={},Hr=[],$n=()=>{},Hf=()=>!1,ha=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),kt=Object.assign,Hc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tm=Object.prototype.hasOwnProperty,ft=(t,e)=>Tm.call(t,e),qe=Array.isArray,Vr=t=>Xs(t)==="[object Map]",Vf=t=>Xs(t)==="[object Set]",Cu=t=>Xs(t)==="[object Date]",Je=t=>typeof t=="function",wt=t=>typeof t=="string",Dn=t=>typeof t=="symbol",xt=t=>t!==null&&typeof t=="object",Gf=t=>(xt(t)||Je(t))&&Je(t.then)&&Je(t.catch),Wf=Object.prototype.toString,Xs=t=>Wf.call(t),wm=t=>Xs(t).slice(8,-1),Xf=t=>Xs(t)==="[object Object]",pa=t=>wt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ms=Bc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ma=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},Am=/-\w/g,Tn=ma(t=>t.replace(Am,e=>e.slice(1).toUpperCase())),Cm=/\B([A-Z])/g,zi=ma(t=>t.replace(Cm,"-$1").toLowerCase()),ga=ma(t=>t.charAt(0).toUpperCase()+t.slice(1)),La=ma(t=>t?`on${ga(t)}`:""),Ii=(t,e)=>!Object.is(t,e),Oo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},qf=(t,e,n,i=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:i,value:n})},Vc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Rm=t=>{const e=wt(t)?Number(t):NaN;return isNaN(e)?t:e};let Ru;const xa=()=>Ru||(Ru=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=wt(i)?Lm(i):fr(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(wt(t)||xt(t))return t}const Pm=/;(?![^(]*\))/g,Im=/:([^]+)/,Dm=/\/\*[^]*?\*\//g;function Lm(t){const e={};return t.replace(Dm,"").split(Pm).forEach(n=>{if(n){const i=n.split(Im);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ot(t){let e="";if(wt(t))e=t;else if(qe(t))for(let n=0;n<t.length;n++){const i=Ot(t[n]);i&&(e+=i+" ")}else if(xt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Um="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nm=Bc(Um);function $f(t){return!!t||t===""}function Fm(t,e){if(t.length!==e.length)return!1;let n=!0;for(let i=0;n&&i<t.length;i++)n=jo(t[i],e[i]);return n}function jo(t,e){if(t===e)return!0;let n=Cu(t),i=Cu(e);if(n||i)return n&&i?t.getTime()===e.getTime():!1;if(n=Dn(t),i=Dn(e),n||i)return t===e;if(n=qe(t),i=qe(e),n||i)return n&&i?Fm(t,e):!1;if(n=xt(t),i=xt(e),n||i){if(!n||!i)return!1;const r=Object.keys(t).length,s=Object.keys(e).length;if(r!==s)return!1;for(const o in t){const a=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(a&&!l||!a&&l||!jo(t[o],e[o]))return!1}}return String(t)===String(e)}const Yf=t=>!!(t&&t.__v_isRef===!0),Fe=t=>wt(t)?t:t==null?"":qe(t)||xt(t)&&(t.toString===Wf||!Je(t.toString))?Yf(t)?Fe(t.value):JSON.stringify(t,jf,2):String(t),jf=(t,e)=>Yf(e)?jf(t,e.value):Vr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[Ua(i,s)+" =>"]=r,n),{})}:Vf(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ua(n))}:Dn(e)?Ua(e):xt(e)&&!qe(e)&&!Xf(e)?String(e):e,Ua=(t,e="")=>{var n;return Dn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let $t;class Kf{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=$t,!e&&$t&&(this.index=($t.scopes||($t.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=$t;try{return $t=this,e()}finally{$t=n}}}on(){++this._on===1&&(this.prevScope=$t,$t=this)}off(){this._on>0&&--this._on===0&&($t=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(this.effects.length=0,n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Zf(t){return new Kf(t)}function Jf(){return $t}function Om(t,e=!1){$t&&$t.cleanups.push(t)}let yt;const Na=new WeakSet;class Qf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,$t&&$t.active&&$t.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Na.has(this)&&(Na.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||th(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Pu(this),nh(this);const e=yt,n=Pn;yt=this,Pn=!0;try{return this.fn()}finally{ih(this),yt=e,Pn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Xc(e);this.deps=this.depsTail=void 0,Pu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Na.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Cl(this)&&this.run()}get dirty(){return Cl(this)}}let eh=0,Ts,ws;function th(t,e=!1){if(t.flags|=8,e){t.next=ws,ws=t;return}t.next=Ts,Ts=t}function Gc(){eh++}function Wc(){if(--eh>0)return;if(ws){let e=ws;for(ws=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ts;){let e=Ts;for(Ts=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){t||(t=i)}e=n}}if(t)throw t}function nh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function ih(t){let e,n=t.depsTail,i=n;for(;i;){const r=i.prevDep;i.version===-1?(i===n&&(n=r),Xc(i),km(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}t.deps=e,t.depsTail=n}function Cl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(rh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function rh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ls)||(t.globalVersion=Ls,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Cl(t))))return;t.flags|=2;const e=t.dep,n=yt,i=Pn;yt=t,Pn=!0;try{nh(t);const r=t.fn(t._value);(e.version===0||Ii(r,t._value))&&(t.flags|=128,t._value=r,e.version++)}catch(r){throw e.version++,r}finally{yt=n,Pn=i,ih(t),t.flags&=-3}}function Xc(t,e=!1){const{dep:n,prevSub:i,nextSub:r}=t;if(i&&(i.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=i,t.nextSub=void 0),n.subs===t&&(n.subs=i,!i&&n.computed)){n.computed.flags&=-5;for(let s=n.computed.deps;s;s=s.nextDep)Xc(s,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function km(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Pn=!0;const sh=[];function ui(){sh.push(Pn),Pn=!1}function di(){const t=sh.pop();Pn=t===void 0?!0:t}function Pu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=yt;yt=void 0;try{e()}finally{yt=n}}}let Ls=0;class Bm{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!yt||!Pn||yt===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==yt)n=this.activeLink=new Bm(yt,this),yt.deps?(n.prevDep=yt.depsTail,yt.depsTail.nextDep=n,yt.depsTail=n):yt.deps=yt.depsTail=n,oh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const i=n.nextDep;i.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=i),n.prevDep=yt.depsTail,n.nextDep=void 0,yt.depsTail.nextDep=n,yt.depsTail=n,yt.deps===n&&(yt.deps=i)}return n}trigger(e){this.version++,Ls++,this.notify(e)}notify(e){Gc();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Wc()}}}function oh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)oh(i)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ko=new WeakMap,lr=Symbol(""),Rl=Symbol(""),Us=Symbol("");function jt(t,e,n){if(Pn&&yt){let i=Ko.get(t);i||Ko.set(t,i=new Map);let r=i.get(n);r||(i.set(n,r=new qc),r.map=i,r.key=n),r.track()}}function si(t,e,n,i,r,s){const o=Ko.get(t);if(!o){Ls++;return}const a=l=>{l&&l.trigger()};if(Gc(),e==="clear")o.forEach(a);else{const l=qe(t),c=l&&pa(n);if(l&&n==="length"){const u=Number(i);o.forEach((d,f)=>{(f==="length"||f===Us||!Dn(f)&&f>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Us)),e){case"add":l?c&&a(o.get("length")):(a(o.get(lr)),Vr(t)&&a(o.get(Rl)));break;case"delete":l||(a(o.get(lr)),Vr(t)&&a(o.get(Rl)));break;case"set":Vr(t)&&a(o.get(lr));break}}Wc()}function zm(t,e){const n=Ko.get(t);return n&&n.get(e)}function _r(t){const e=lt(t);return e===t?e:(jt(e,"iterate",Us),mn(t)?e:e.map(Ln))}function _a(t){return jt(t=lt(t),"iterate",Us),t}function wi(t,e){return fi(t)?li(t)?Kr(Ln(e)):Kr(e):Ln(e)}const Hm={__proto__:null,[Symbol.iterator](){return Fa(this,Symbol.iterator,t=>wi(this,t))},concat(...t){return _r(this).concat(...t.map(e=>qe(e)?_r(e):e))},entries(){return Fa(this,"entries",t=>(t[1]=wi(this,t[1]),t))},every(t,e){return jn(this,"every",t,e,void 0,arguments)},filter(t,e){return jn(this,"filter",t,e,n=>n.map(i=>wi(this,i)),arguments)},find(t,e){return jn(this,"find",t,e,n=>wi(this,n),arguments)},findIndex(t,e){return jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return jn(this,"findLast",t,e,n=>wi(this,n),arguments)},findLastIndex(t,e){return jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Oa(this,"includes",t)},indexOf(...t){return Oa(this,"indexOf",t)},join(t){return _r(this).join(t)},lastIndexOf(...t){return Oa(this,"lastIndexOf",t)},map(t,e){return jn(this,"map",t,e,void 0,arguments)},pop(){return us(this,"pop")},push(...t){return us(this,"push",t)},reduce(t,...e){return Iu(this,"reduce",t,e)},reduceRight(t,...e){return Iu(this,"reduceRight",t,e)},shift(){return us(this,"shift")},some(t,e){return jn(this,"some",t,e,void 0,arguments)},splice(...t){return us(this,"splice",t)},toReversed(){return _r(this).toReversed()},toSorted(t){return _r(this).toSorted(t)},toSpliced(...t){return _r(this).toSpliced(...t)},unshift(...t){return us(this,"unshift",t)},values(){return Fa(this,"values",t=>wi(this,t))}};function Fa(t,e,n){const i=_a(t),r=i[e]();return i!==t&&!mn(t)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=n(s.value)),s}),r}const Vm=Array.prototype;function jn(t,e,n,i,r,s){const o=_a(t),a=o!==t&&!mn(t),l=o[e];if(l!==Vm[e]){const d=l.apply(t,s);return a?Ln(d):d}let c=n;o!==t&&(a?c=function(d,f){return n.call(this,wi(t,d),f,t)}:n.length>2&&(c=function(d,f){return n.call(this,d,f,t)}));const u=l.call(o,c,i);return a&&r?r(u):u}function Iu(t,e,n,i){const r=_a(t);let s=n;return r!==t&&(mn(t)?n.length>3&&(s=function(o,a,l){return n.call(this,o,a,l,t)}):s=function(o,a,l){return n.call(this,o,wi(t,a),l,t)}),r[e](s,...i)}function Oa(t,e,n){const i=lt(t);jt(i,"iterate",Us);const r=i[e](...n);return(r===-1||r===!1)&&va(n[0])?(n[0]=lt(n[0]),i[e](...n)):r}function us(t,e,n=[]){ui(),Gc();const i=lt(t)[e].apply(t,n);return Wc(),di(),i}const Gm=Bc("__proto__,__v_isRef,__isVue"),ah=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Dn));function Wm(t){Dn(t)||(t=String(t));const e=lt(this);return jt(e,"has",t),e.hasOwnProperty(t)}class lh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,i){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?eg:fh:s?dh:uh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=qe(e);if(!r){let l;if(o&&(l=Hm[n]))return l;if(n==="hasOwnProperty")return Wm}const a=Reflect.get(e,n,Rt(e)?e:i);if((Dn(n)?ah.has(n):Gm(n))||(r||jt(e,"get",n),s))return a;if(Rt(a)){const l=o&&pa(n)?a:a.value;return r&&xt(l)?Il(l):l}return xt(a)?r?Il(a):qs(a):a}}class ch extends lh{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];const o=qe(e)&&pa(n);if(!this._isShallow){const c=fi(s);if(!mn(i)&&!fi(i)&&(s=lt(s),i=lt(i)),!o&&Rt(s)&&!Rt(i))return c||(s.value=i),!0}const a=o?Number(n)<e.length:ft(e,n),l=Reflect.set(e,n,i,Rt(e)?e:r);return e===lt(r)&&(a?Ii(i,s)&&si(e,"set",n,i):si(e,"add",n,i)),l}deleteProperty(e,n){const i=ft(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&si(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Dn(n)||!ah.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",qe(e)?"length":lr),Reflect.ownKeys(e)}}class Xm extends lh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const qm=new ch,$m=new Xm,Ym=new ch(!0);const Pl=t=>t,ro=t=>Reflect.getPrototypeOf(t);function jm(t,e,n){return function(...i){const r=this.__v_raw,s=lt(r),o=Vr(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?Pl:e?Kr:Ln;return!e&&jt(s,"iterate",l?Rl:lr),{next(){const{value:d,done:f}=c.next();return f?{value:d,done:f}:{value:a?[u(d[0]),u(d[1])]:u(d),done:f}},[Symbol.iterator](){return this}}}}function so(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Km(t,e){const n={get(r){const s=this.__v_raw,o=lt(s),a=lt(r);t||(Ii(r,a)&&jt(o,"get",r),jt(o,"get",a));const{has:l}=ro(o),c=e?Pl:t?Kr:Ln;if(l.call(o,r))return c(s.get(r));if(l.call(o,a))return c(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!t&&jt(lt(r),"iterate",lr),r.size},has(r){const s=this.__v_raw,o=lt(s),a=lt(r);return t||(Ii(r,a)&&jt(o,"has",r),jt(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,l=lt(a),c=e?Pl:t?Kr:Ln;return!t&&jt(l,"iterate",lr),a.forEach((u,d)=>r.call(s,c(u),c(d),o))}};return kt(n,t?{add:so("add"),set:so("set"),delete:so("delete"),clear:so("clear")}:{add(r){!e&&!mn(r)&&!fi(r)&&(r=lt(r));const s=lt(this);return ro(s).has.call(s,r)||(s.add(r),si(s,"add",r,r)),this},set(r,s){!e&&!mn(s)&&!fi(s)&&(s=lt(s));const o=lt(this),{has:a,get:l}=ro(o);let c=a.call(o,r);c||(r=lt(r),c=a.call(o,r));const u=l.call(o,r);return o.set(r,s),c?Ii(s,u)&&si(o,"set",r,s):si(o,"add",r,s),this},delete(r){const s=lt(this),{has:o,get:a}=ro(s);let l=o.call(s,r);l||(r=lt(r),l=o.call(s,r)),a&&a.call(s,r);const c=s.delete(r);return l&&si(s,"delete",r,void 0),c},clear(){const r=lt(this),s=r.size!==0,o=r.clear();return s&&si(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=jm(r,t,e)}),n}function $c(t,e){const n=Km(t,e);return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(ft(n,r)&&r in i?n:i,r,s)}const Zm={get:$c(!1,!1)},Jm={get:$c(!1,!0)},Qm={get:$c(!0,!1)};const uh=new WeakMap,dh=new WeakMap,fh=new WeakMap,eg=new WeakMap;function tg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ng(t){return t.__v_skip||!Object.isExtensible(t)?0:tg(wm(t))}function qs(t){return fi(t)?t:Yc(t,!1,qm,Zm,uh)}function hh(t){return Yc(t,!1,Ym,Jm,dh)}function Il(t){return Yc(t,!0,$m,Qm,fh)}function Yc(t,e,n,i,r){if(!xt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=ng(t);if(s===0)return t;const o=r.get(t);if(o)return o;const a=new Proxy(t,s===2?i:n);return r.set(t,a),a}function li(t){return fi(t)?li(t.__v_raw):!!(t&&t.__v_isReactive)}function fi(t){return!!(t&&t.__v_isReadonly)}function mn(t){return!!(t&&t.__v_isShallow)}function va(t){return t?!!t.__v_raw:!1}function lt(t){const e=t&&t.__v_raw;return e?lt(e):t}function jc(t){return!ft(t,"__v_skip")&&Object.isExtensible(t)&&qf(t,"__v_skip",!0),t}const Ln=t=>xt(t)?qs(t):t,Kr=t=>xt(t)?Il(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function it(t){return ph(t,!1)}function ig(t){return ph(t,!0)}function ph(t,e){return Rt(t)?t:new rg(t,e)}class rg{constructor(e,n){this.dep=new qc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:lt(e),this._value=n?e:Ln(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,i=this.__v_isShallow||mn(e)||fi(e);e=i?e:lt(e),Ii(e,n)&&(this._rawValue=e,this._value=i?e:Ln(e),this.dep.trigger())}}function Pt(t){return Rt(t)?t.value:t}const sg={get:(t,e,n)=>e==="__v_raw"?t:Pt(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return Rt(r)&&!Rt(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function mh(t){return li(t)?t:new Proxy(t,sg)}function og(t){const e=qe(t)?new Array(t.length):{};for(const n in t)e[n]=lg(t,n);return e}class ag{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0,this._value=void 0,this._raw=lt(e);let r=!0,s=e;if(!qe(e)||!pa(String(n)))do r=!va(s)||mn(s);while(r&&(s=s.__v_raw));this._shallow=r}get value(){let e=this._object[this._key];return this._shallow&&(e=Pt(e)),this._value=e===void 0?this._defaultValue:e}set value(e){if(this._shallow&&Rt(this._raw[this._key])){const n=this._object[this._key];if(Rt(n)){n.value=e;return}}this._object[this._key]=e}get dep(){return zm(this._raw,this._key)}}function lg(t,e,n){return new ag(t,e,n)}class cg{constructor(e,n,i){this.fn=e,this.setter=n,this._value=void 0,this.dep=new qc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&yt!==this)return th(this,!0),!0}get value(){const e=this.dep.track();return rh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function ug(t,e,n=!1){let i,r;return Je(t)?i=t:(i=t.get,r=t.set),new cg(i,r,n)}const oo={},Zo=new WeakMap;let Ji;function dg(t,e=!1,n=Ji){if(n){let i=Zo.get(n);i||Zo.set(n,i=[]),i.push(t)}}function fg(t,e,n=vt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:l}=n,c=y=>r?y:mn(y)||r===!1||r===0?oi(y,1):oi(y);let u,d,f,p,g=!1,x=!1;if(Rt(t)?(d=()=>t.value,g=mn(t)):li(t)?(d=()=>c(t),g=!0):qe(t)?(x=!0,g=t.some(y=>li(y)||mn(y)),d=()=>t.map(y=>{if(Rt(y))return y.value;if(li(y))return c(y);if(Je(y))return l?l(y,2):y()})):Je(t)?e?d=l?()=>l(t,2):t:d=()=>{if(f){ui();try{f()}finally{di()}}const y=Ji;Ji=u;try{return l?l(t,3,[p]):t(p)}finally{Ji=y}}:d=$n,e&&r){const y=d,D=r===!0?1/0:r;d=()=>oi(y(),D)}const m=Jf(),h=()=>{u.stop(),m&&m.active&&Hc(m.effects,u)};if(s&&e){const y=e;e=(...D)=>{y(...D),h()}}let w=x?new Array(t.length).fill(oo):oo;const S=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(e){const D=u.run();if(r||g||(x?D.some((L,P)=>Ii(L,w[P])):Ii(D,w))){f&&f();const L=Ji;Ji=u;try{const P=[D,w===oo?void 0:x&&w[0]===oo?[]:w,p];w=D,l?l(e,3,P):e(...P)}finally{Ji=L}}}else u.run()};return a&&a(S),u=new Qf(d),u.scheduler=o?()=>o(S,!1):S,p=y=>dg(y,!1,u),f=u.onStop=()=>{const y=Zo.get(u);if(y){if(l)l(y,4);else for(const D of y)D();Zo.delete(u)}},e?i?S(!0):w=u.run():o?o(S.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function oi(t,e=1/0,n){if(e<=0||!xt(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Rt(t))oi(t.value,e,n);else if(qe(t))for(let i=0;i<t.length;i++)oi(t[i],e,n);else if(Vf(t)||Vr(t))t.forEach(i=>{oi(i,e,n)});else if(Xf(t)){for(const i in t)oi(t[i],e,n);for(const i of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,i)&&oi(t[i],e,n)}return t}function $s(t,e,n,i){try{return i?t(...i):t()}catch(r){Ys(r,e,n)}}function Un(t,e,n,i){if(Je(t)){const r=$s(t,e,n,i);return r&&Gf(r)&&r.catch(s=>{Ys(s,e,n)}),r}if(qe(t)){const r=[];for(let s=0;s<t.length;s++)r.push(Un(t[s],e,n,i));return r}}function Ys(t,e,n,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||vt;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(s){ui(),$s(s,null,10,[t,l,c]),di();return}}hg(t,n,r,i,o)}function hg(t,e,n,i=!0,r=!1){if(r)throw t;console.error(t)}const sn=[];let zn=-1;const Gr=[];let Ai=null,kr=0;const gh=Promise.resolve();let Jo=null;function Kc(t){const e=Jo||gh;return t?e.then(this?t.bind(this):t):e}function pg(t){let e=zn+1,n=sn.length;for(;e<n;){const i=e+n>>>1,r=sn[i],s=Ns(r);s<t||s===t&&r.flags&2?e=i+1:n=i}return e}function Zc(t){if(!(t.flags&1)){const e=Ns(t),n=sn[sn.length-1];!n||!(t.flags&2)&&e>=Ns(n)?sn.push(t):sn.splice(pg(e),0,t),t.flags|=1,xh()}}function xh(){Jo||(Jo=gh.then(vh))}function mg(t){qe(t)?Gr.push(...t):Ai&&t.id===-1?Ai.splice(kr+1,0,t):t.flags&1||(Gr.push(t),t.flags|=1),xh()}function Du(t,e,n=zn+1){for(;n<sn.length;n++){const i=sn[n];if(i&&i.flags&2){if(t&&i.id!==t.uid)continue;sn.splice(n,1),n--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function _h(t){if(Gr.length){const e=[...new Set(Gr)].sort((n,i)=>Ns(n)-Ns(i));if(Gr.length=0,Ai){Ai.push(...e);return}for(Ai=e,kr=0;kr<Ai.length;kr++){const n=Ai[kr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ai=null,kr=0}}const Ns=t=>t.id==null?t.flags&2?-1:1/0:t.id;function vh(t){try{for(zn=0;zn<sn.length;zn++){const e=sn[zn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),$s(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;zn<sn.length;zn++){const e=sn[zn];e&&(e.flags&=-2)}zn=-1,sn.length=0,_h(),Jo=null,(sn.length||Gr.length)&&vh()}}let Wt=null,bh=null;function Qo(t){const e=Wt;return Wt=t,bh=t&&t.type.__scopeId||null,e}function ea(t,e=Wt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&ia(-1);const s=Qo(e);let o;try{o=t(...r)}finally{Qo(s),i._d&&ia(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Jc(t,e){if(Wt===null)return t;const n=Ma(Wt),i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=vt]=e[r];s&&(Je(s)&&(s={mounted:s,updated:s}),s.deep&&oi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function Gi(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(ui(),Un(l,n,8,[t.el,a,t,e]),di())}}function ko(t,e){if(Gt){let n=Gt.provides;const i=Gt.parent&&Gt.parent.provides;i===n&&(n=Gt.provides=Object.create(i)),n[t]=e}}function Mn(t,e,n=!1){const i=Sa();if(i||cr){let r=cr?cr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Je(e)?e.call(i&&i.proxy):e}}function gg(){return!!(Sa()||cr)}const xg=Symbol.for("v-scx"),_g=()=>Mn(xg);function vg(t,e){return Qc(t,null,e)}function Di(t,e,n){return Qc(t,e,n)}function Qc(t,e,n=vt){const{immediate:i,deep:r,flush:s,once:o}=n,a=kt({},n),l=e&&i||!e&&s!=="post";let c;if(Zr){if(s==="sync"){const p=_g();c=p.__watcherHandles||(p.__watcherHandles=[])}else if(!l){const p=()=>{};return p.stop=$n,p.resume=$n,p.pause=$n,p}}const u=Gt;a.call=(p,g,x)=>Un(p,u,g,x);let d=!1;s==="post"?a.scheduler=p=>{nn(p,u&&u.suspense)}:s!=="sync"&&(d=!0,a.scheduler=(p,g)=>{g?p():Zc(p)}),a.augmentJob=p=>{e&&(p.flags|=4),d&&(p.flags|=2,u&&(p.id=u.uid,p.i=u))};const f=fg(t,e,a);return Zr&&(c?c.push(f):l&&f()),f}function bg(t,e,n){const i=this.proxy,r=wt(t)?t.includes(".")?yh(i,t):()=>i[t]:t.bind(i,i);let s;Je(e)?s=e:(s=e.handler,n=e);const o=Ks(this),a=Qc(r,s.bind(i),n);return o(),a}function yh(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}const Eh=Symbol("_vte"),Sh=t=>t.__isTeleport,As=t=>t&&(t.disabled||t.disabled===""),Lu=t=>t&&(t.defer||t.defer===""),Uu=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Nu=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Dl=(t,e)=>{const n=t&&t.to;return wt(n)?e?e(n):null:n},Mh={name:"Teleport",__isTeleport:!0,process(t,e,n,i,r,s,o,a,l,c){const{mc:u,pc:d,pbc:f,o:{insert:p,querySelector:g,createText:x,createComment:m}}=c,h=As(e.props);let{shapeFlag:w,children:S,dynamicChildren:y}=e;if(t==null){const D=e.el=x(""),L=e.anchor=x("");p(D,n,i),p(L,n,i);const P=(b,E)=>{w&16&&u(S,b,E,r,s,o,a,l)},R=()=>{const b=e.target=Dl(e.props,g),E=Th(b,e,x,p);b&&(o!=="svg"&&Uu(b)?o="svg":o!=="mathml"&&Nu(b)&&(o="mathml"),r&&r.isCE&&(r.ce._teleportTargets||(r.ce._teleportTargets=new Set)).add(b),h||(P(b,E),Bo(e,!1)))};h&&(P(n,L),Bo(e,!0)),Lu(e.props)?(e.el.__isMounted=!1,nn(()=>{R(),delete e.el.__isMounted},s)):R()}else{if(Lu(e.props)&&t.el.__isMounted===!1){nn(()=>{Mh.process(t,e,n,i,r,s,o,a,l,c)},s);return}e.el=t.el,e.targetStart=t.targetStart;const D=e.anchor=t.anchor,L=e.target=t.target,P=e.targetAnchor=t.targetAnchor,R=As(t.props),b=R?n:L,E=R?D:P;if(o==="svg"||Uu(L)?o="svg":(o==="mathml"||Nu(L))&&(o="mathml"),y?(f(t.dynamicChildren,y,b,r,s,o,a),ru(t,e,!0)):l||d(t,e,b,E,r,s,o,a,!1),h)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):ao(e,n,D,c,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const I=e.target=Dl(e.props,g);I&&ao(e,I,null,c,0)}else R&&ao(e,L,P,c,1);Bo(e,h)}},remove(t,e,n,{um:i,o:{remove:r}},s){const{shapeFlag:o,children:a,anchor:l,targetStart:c,targetAnchor:u,target:d,props:f}=t;if(d&&(r(c),r(u)),s&&r(l),o&16){const p=s||!As(f);for(let g=0;g<a.length;g++){const x=a[g];i(x,e,n,p,!!x.dynamicChildren)}}},move:ao,hydrate:yg};function ao(t,e,n,{o:{insert:i},m:r},s=2){s===0&&i(t.targetAnchor,e,n);const{el:o,anchor:a,shapeFlag:l,children:c,props:u}=t,d=s===2;if(d&&i(o,e,n),(!d||As(u))&&l&16)for(let f=0;f<c.length;f++)r(c[f],e,n,2);d&&i(a,e,n)}function yg(t,e,n,i,r,s,{o:{nextSibling:o,parentNode:a,querySelector:l,insert:c,createText:u}},d){function f(x,m,h,w){m.anchor=d(o(x),m,a(x),n,i,r,s),m.targetStart=h,m.targetAnchor=w}const p=e.target=Dl(e.props,l),g=As(e.props);if(p){const x=p._lpa||p.firstChild;if(e.shapeFlag&16)if(g)f(t,e,x,x&&o(x));else{e.anchor=o(t);let m=x;for(;m;){if(m&&m.nodeType===8){if(m.data==="teleport start anchor")e.targetStart=m;else if(m.data==="teleport anchor"){e.targetAnchor=m,p._lpa=e.targetAnchor&&o(e.targetAnchor);break}}m=o(m)}e.targetAnchor||Th(p,e,u,c),d(x&&o(x),e,p,n,i,r,s)}Bo(e,g)}else g&&e.shapeFlag&16&&f(t,e,t,o(t));return e.anchor&&o(e.anchor)}const Fu=Mh;function Bo(t,e){const n=t.ctx;if(n&&n.ut){let i,r;for(e?(i=t.el,r=t.anchor):(i=t.targetStart,r=t.targetAnchor);i&&i!==r;)i.nodeType===1&&i.setAttribute("data-v-owner",n.uid),i=i.nextSibling;n.ut()}}function Th(t,e,n,i){const r=e.targetStart=n(""),s=e.targetAnchor=n("");return r[Eh]=s,t&&(i(r,t),i(s,t)),s}const ri=Symbol("_leaveCb"),lo=Symbol("_enterCb");function wh(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Yn(()=>{t.isMounted=!0}),Lh(()=>{t.isUnmounting=!0}),t}const vn=[Function,Array],Ah={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:vn,onEnter:vn,onAfterEnter:vn,onEnterCancelled:vn,onBeforeLeave:vn,onLeave:vn,onAfterLeave:vn,onLeaveCancelled:vn,onBeforeAppear:vn,onAppear:vn,onAfterAppear:vn,onAppearCancelled:vn},Ch=t=>{const e=t.subTree;return e.component?Ch(e.component):e},Eg={name:"BaseTransition",props:Ah,setup(t,{slots:e}){const n=Sa(),i=wh();return()=>{const r=e.default&&eu(e.default(),!0);if(!r||!r.length)return;const s=Rh(r),o=lt(t),{mode:a}=o;if(i.isLeaving)return ka(s);const l=Ou(s);if(!l)return ka(s);let c=Fs(l,o,i,n,d=>c=d);l.type!==Zt&&hr(l,c);let u=n.subTree&&Ou(n.subTree);if(u&&u.type!==Zt&&!tr(u,l)&&Ch(n).type!==Zt){let d=Fs(u,o,i,n);if(hr(u,d),a==="out-in"&&l.type!==Zt)return i.isLeaving=!0,d.afterLeave=()=>{i.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,u=void 0},ka(s);a==="in-out"&&l.type!==Zt?d.delayLeave=(f,p,g)=>{const x=Ph(i,u);x[String(u.key)]=u,f[ri]=()=>{p(),f[ri]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return s}}};function Rh(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Zt){e=n;break}}return e}const Sg=Eg;function Ph(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Fs(t,e,n,i,r){const{appear:s,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:x,onBeforeAppear:m,onAppear:h,onAfterAppear:w,onAppearCancelled:S}=e,y=String(t.key),D=Ph(n,t),L=(b,E)=>{b&&Un(b,i,9,E)},P=(b,E)=>{const I=E[1];L(b,E),qe(b)?b.every(B=>B.length<=1)&&I():b.length<=1&&I()},R={mode:o,persisted:a,beforeEnter(b){let E=l;if(!n.isMounted)if(s)E=m||l;else return;b[ri]&&b[ri](!0);const I=D[y];I&&tr(t,I)&&I.el[ri]&&I.el[ri](),L(E,[b])},enter(b){let E=c,I=u,B=d;if(!n.isMounted)if(s)E=h||c,I=w||u,B=S||d;else return;let q=!1;const H=b[lo]=j=>{q||(q=!0,j?L(B,[b]):L(I,[b]),R.delayedLeave&&R.delayedLeave(),b[lo]=void 0)};E?P(E,[b,H]):H()},leave(b,E){const I=String(t.key);if(b[lo]&&b[lo](!0),n.isUnmounting)return E();L(f,[b]);let B=!1;const q=b[ri]=H=>{B||(B=!0,E(),H?L(x,[b]):L(g,[b]),b[ri]=void 0,D[I]===t&&delete D[I])};D[I]=t,p?P(p,[b,q]):q()},clone(b){const E=Fs(b,e,n,i,r);return r&&r(E),E}};return R}function ka(t){if(js(t))return t=Oi(t),t.children=null,t}function Ou(t){if(!js(t))return Sh(t.type)&&t.children?Rh(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&Je(n.default))return n.default()}}function hr(t,e){t.shapeFlag&6&&t.component?(t.transition=e,hr(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function eu(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===ht?(o.patchFlag&128&&r++,i=i.concat(eu(o.children,e,a))):(e||o.type!==Zt)&&i.push(a!=null?Oi(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}function gn(t,e){return Je(t)?kt({name:t.name},e,{setup:t}):t}function tu(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const ta=new WeakMap;function Cs(t,e,n,i,r=!1){if(qe(t)){t.forEach((g,x)=>Cs(g,e&&(qe(e)?e[x]:e),n,i,r));return}if(Wr(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Cs(t,e,n,i.component.subTree);return}const s=i.shapeFlag&4?Ma(i.component):i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===vt?a.refs={}:a.refs,d=a.setupState,f=lt(d),p=d===vt?Hf:g=>ft(f,g);if(c!=null&&c!==l){if(ku(e),wt(c))u[c]=null,p(c)&&(d[c]=null);else if(Rt(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(Je(l))$s(l,a,12,[o,u]);else{const g=wt(l),x=Rt(l);if(g||x){const m=()=>{if(t.f){const h=g?p(l)?d[l]:u[l]:l.value;if(r)qe(h)&&Hc(h,s);else if(qe(h))h.includes(s)||h.push(s);else if(g)u[l]=[s],p(l)&&(d[l]=u[l]);else{const w=[s];l.value=w,t.k&&(u[t.k]=w)}}else g?(u[l]=o,p(l)&&(d[l]=o)):x&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const h=()=>{m(),ta.delete(t)};h.id=-1,ta.set(t,h),nn(h,n)}else ku(t),m()}}}function ku(t){const e=ta.get(t);e&&(e.flags|=8,ta.delete(t))}const Bu=t=>t.nodeType===8;xa().requestIdleCallback;xa().cancelIdleCallback;function Mg(t,e){if(Bu(t)&&t.data==="["){let n=1,i=t.nextSibling;for(;i;){if(i.nodeType===1){if(e(i)===!1)break}else if(Bu(i))if(i.data==="]"){if(--n===0)break}else i.data==="["&&n++;i=i.nextSibling}}else e(t)}const Wr=t=>!!t.type.__asyncLoader;function Lt(t){Je(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,hydrate:s,timeout:o,suspensible:a=!0,onError:l}=t;let c=null,u,d=0;const f=()=>(d++,c=null,p()),p=()=>{let g;return c||(g=c=e().catch(x=>{if(x=x instanceof Error?x:new Error(String(x)),l)return new Promise((m,h)=>{l(x,()=>m(f()),()=>h(x),d+1)});throw x}).then(x=>g!==c&&c?c:(x&&(x.__esModule||x[Symbol.toStringTag]==="Module")&&(x=x.default),u=x,x)))};return gn({name:"AsyncComponentWrapper",__asyncLoader:p,__asyncHydrate(g,x,m){let h=!1;(x.bu||(x.bu=[])).push(()=>h=!0);const w=()=>{h||m()},S=s?()=>{const y=s(w,D=>Mg(g,D));y&&(x.bum||(x.bum=[])).push(y)}:w;u?S():p().then(()=>!x.isUnmounted&&S())},get __asyncResolved(){return u},setup(){const g=Gt;if(tu(g),u)return()=>co(u,g);const x=S=>{c=null,Ys(S,g,13,!i)};if(a&&g.suspense||Zr)return p().then(S=>()=>co(S,g)).catch(S=>(x(S),()=>i?Tt(i,{error:S}):null));const m=it(!1),h=it(),w=it(!!r);return r&&setTimeout(()=>{w.value=!1},r),o!=null&&setTimeout(()=>{if(!m.value&&!h.value){const S=new Error(`Async component timed out after ${o}ms.`);x(S),h.value=S}},o),p().then(()=>{m.value=!0,g.parent&&js(g.parent.vnode)&&g.parent.update()}).catch(S=>{x(S),h.value=S}),()=>{if(m.value&&u)return co(u,g);if(h.value&&i)return Tt(i,{error:h.value});if(n&&!w.value)return co(n,g)}}})}function co(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=Tt(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const js=t=>t.type.__isKeepAlive;function Tg(t,e){Ih(t,"a",e)}function wg(t,e){Ih(t,"da",e)}function Ih(t,e,n=Gt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(ba(e,i,n),n){let r=n.parent;for(;r&&r.parent;)js(r.parent.vnode)&&Ag(i,e,n,r),r=r.parent}}function Ag(t,e,n,i){const r=ba(e,t,i,!0);Fi(()=>{Hc(i[e],r)},n)}function ba(t,e,n=Gt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{ui();const a=Ks(n),l=Un(e,n,t,o);return a(),di(),l});return i?r.unshift(s):r.push(s),s}}const mi=t=>(e,n=Gt)=>{(!Zr||t==="sp")&&ba(t,(...i)=>e(...i),n)},Cg=mi("bm"),Yn=mi("m"),Rg=mi("bu"),Dh=mi("u"),Lh=mi("bum"),Fi=mi("um"),Pg=mi("sp"),Ig=mi("rtg"),Dg=mi("rtc");function Lg(t,e=Gt){ba("ec",t,e)}const Uh="components";function Ug(t,e){return Fh(Uh,t,!0,e)||t}const Nh=Symbol.for("v-ndc");function zu(t){return wt(t)?Fh(Uh,t,!1)||t:t||Nh}function Fh(t,e,n=!0,i=!1){const r=Wt||Gt;if(r){const s=r.type;{const a=vx(s,!1);if(a&&(a===e||a===Tn(e)||a===ga(Tn(e))))return s}const o=Hu(r[t]||s[t],e)||Hu(r.appContext[t],e);return!o&&i?s:o}}function Hu(t,e){return t&&(t[e]||t[Tn(e)]||t[ga(Tn(e))])}function pr(t,e,n,i){let r;const s=n,o=qe(t);if(o||wt(t)){const a=o&&li(t);let l=!1,c=!1;a&&(l=!mn(t),c=fi(t),t=_a(t)),r=new Array(t.length);for(let u=0,d=t.length;u<d;u++)r[u]=e(l?c?Kr(Ln(t[u])):Ln(t[u]):t[u],u,void 0,s)}else if(typeof t=="number"){r=new Array(t);for(let a=0;a<t;a++)r[a]=e(a+1,a,void 0,s)}else if(xt(t))if(t[Symbol.iterator])r=Array.from(t,(a,l)=>e(a,l,void 0,s));else{const a=Object.keys(t);r=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];r[l]=e(t[u],u,l,s)}}else r=[];return r}function K1(t,e,n={},i,r){if(Wt.ce||Wt.parent&&Wr(Wt.parent)&&Wt.parent.ce){const c=Object.keys(n).length>0;return e!=="default"&&(n.name=e),xe(),Yt(ht,null,[Tt("slot",n,i)],c?-2:64)}let s=t[e];s&&s._c&&(s._d=!1),xe();const o=s&&Oh(s(n)),a=n.key||o&&o.key,l=Yt(ht,{key:(a&&!Dn(a)?a:`_${e}`)+(!o&&i?"_fb":"")},o||[],o&&t._===1?64:-2);return l.scopeId&&(l.slotScopeIds=[l.scopeId+"-s"]),s&&s._c&&(s._d=!0),l}function Oh(t){return t.some(e=>ks(e)?!(e.type===Zt||e.type===ht&&!Oh(e.children)):!0)?t:null}const Ll=t=>t?tp(t)?Ma(t):Ll(t.parent):null,Rs=kt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ll(t.parent),$root:t=>Ll(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bh(t),$forceUpdate:t=>t.f||(t.f=()=>{Zc(t.update)}),$nextTick:t=>t.n||(t.n=Kc.bind(t.proxy)),$watch:t=>bg.bind(t)}),Ba=(t,e)=>t!==vt&&!t.__isScriptSetup&&ft(t,e),Ng={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(Ba(i,e))return o[e]=1,i[e];if(r!==vt&&ft(r,e))return o[e]=2,r[e];if(ft(s,e))return o[e]=3,s[e];if(n!==vt&&ft(n,e))return o[e]=4,n[e];Ul&&(o[e]=0)}}const c=Rs[e];let u,d;if(c)return e==="$attrs"&&jt(t.attrs,"get",""),c(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==vt&&ft(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,ft(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return Ba(r,e)?(r[e]=n,!0):i!==vt&&ft(i,e)?(i[e]=n,!0):ft(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,props:s,type:o}},a){let l;return!!(n[a]||t!==vt&&a[0]!=="$"&&ft(t,a)||Ba(e,a)||ft(s,a)||ft(i,a)||ft(Rs,a)||ft(r.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ft(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Vu(t){return qe(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ul=!0;function Fg(t){const e=Bh(t),n=t.proxy,i=t.ctx;Ul=!1,e.beforeCreate&&Gu(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:f,beforeUpdate:p,updated:g,activated:x,deactivated:m,beforeDestroy:h,beforeUnmount:w,destroyed:S,unmounted:y,render:D,renderTracked:L,renderTriggered:P,errorCaptured:R,serverPrefetch:b,expose:E,inheritAttrs:I,components:B,directives:q,filters:H}=e;if(c&&Og(c,i,null),o)for(const z in o){const U=o[z];Je(U)&&(i[z]=U.bind(n))}if(r){const z=r.call(n,n);xt(z)&&(t.data=qs(z))}if(Ul=!0,s)for(const z in s){const U=s[z],ne=Je(U)?U.bind(n,n):Je(U.get)?U.get.bind(n,n):$n,fe=!Je(U)&&Je(U.set)?U.set.bind(n):$n,Ee=ze({get:ne,set:fe});Object.defineProperty(i,z,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:Me=>Ee.value=Me})}if(a)for(const z in a)kh(a[z],i,n,z);if(l){const z=Je(l)?l.call(n):l;Reflect.ownKeys(z).forEach(U=>{ko(U,z[U])})}u&&Gu(u,t,"c");function $(z,U){qe(U)?U.forEach(ne=>z(ne.bind(n))):U&&z(U.bind(n))}if($(Cg,d),$(Yn,f),$(Rg,p),$(Dh,g),$(Tg,x),$(wg,m),$(Lg,R),$(Dg,L),$(Ig,P),$(Lh,w),$(Fi,y),$(Pg,b),qe(E))if(E.length){const z=t.exposed||(t.exposed={});E.forEach(U=>{Object.defineProperty(z,U,{get:()=>n[U],set:ne=>n[U]=ne,enumerable:!0})})}else t.exposed||(t.exposed={});D&&t.render===$n&&(t.render=D),I!=null&&(t.inheritAttrs=I),B&&(t.components=B),q&&(t.directives=q),b&&tu(t)}function Og(t,e,n=$n){qe(t)&&(t=Nl(t));for(const i in t){const r=t[i];let s;xt(r)?"default"in r?s=Mn(r.from||i,r.default,!0):s=Mn(r.from||i):s=Mn(r),Rt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Gu(t,e,n){Un(qe(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function kh(t,e,n,i){let r=i.includes(".")?yh(n,i):()=>n[i];if(wt(t)){const s=e[t];Je(s)&&Di(r,s)}else if(Je(t))Di(r,t.bind(n));else if(xt(t))if(qe(t))t.forEach(s=>kh(s,e,n,i));else{const s=Je(t.handler)?t.handler.bind(n):e[t.handler];Je(s)&&Di(r,s,t)}}function Bh(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>na(l,c,o,!0)),na(l,e,o)),xt(e)&&s.set(e,l),l}function na(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&na(t,s,n,!0),r&&r.forEach(o=>na(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=kg[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kg={data:Wu,props:Xu,emits:Xu,methods:ys,computed:ys,beforeCreate:en,created:en,beforeMount:en,mounted:en,beforeUpdate:en,updated:en,beforeDestroy:en,beforeUnmount:en,destroyed:en,unmounted:en,activated:en,deactivated:en,errorCaptured:en,serverPrefetch:en,components:ys,directives:ys,watch:zg,provide:Wu,inject:Bg};function Wu(t,e){return e?t?function(){return kt(Je(t)?t.call(this,this):t,Je(e)?e.call(this,this):e)}:e:t}function Bg(t,e){return ys(Nl(t),Nl(e))}function Nl(t){if(qe(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function en(t,e){return t?[...new Set([].concat(t,e))]:e}function ys(t,e){return t?kt(Object.create(null),t,e):e}function Xu(t,e){return t?qe(t)&&qe(e)?[...new Set([...t,...e])]:kt(Object.create(null),Vu(t),Vu(e??{})):e}function zg(t,e){if(!t)return e;if(!e)return t;const n=kt(Object.create(null),t);for(const i in e)n[i]=en(t[i],e[i]);return n}function zh(){return{app:null,config:{isNativeTag:Hf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Hg=0;function Vg(t,e){return function(i,r=null){Je(i)||(i=kt({},i)),r!=null&&!xt(r)&&(r=null);const s=zh(),o=new WeakSet,a=[];let l=!1;const c=s.app={_uid:Hg++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:yx,get config(){return s.config},set config(u){},use(u,...d){return o.has(u)||(u&&Je(u.install)?(o.add(u),u.install(c,...d)):Je(u)&&(o.add(u),u(c,...d))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,d){return d?(s.components[u]=d,c):s.components[u]},directive(u,d){return d?(s.directives[u]=d,c):s.directives[u]},mount(u,d,f){if(!l){const p=c._ceVNode||Tt(i,r);return p.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),t(p,u,f),l=!0,c._container=u,u.__vue_app__=c,Ma(p.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Un(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return s.provides[u]=d,c},runWithContext(u){const d=cr;cr=c;try{return u()}finally{cr=d}}};return c}}let cr=null;const Gg=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tn(e)}Modifiers`]||t[`${zi(e)}Modifiers`];function Wg(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||vt;let r=n;const s=e.startsWith("update:"),o=s&&Gg(i,e.slice(7));o&&(o.trim&&(r=n.map(u=>wt(u)?u.trim():u)),o.number&&(r=n.map(Vc)));let a,l=i[a=La(e)]||i[a=La(Tn(e))];!l&&s&&(l=i[a=La(zi(e))]),l&&Un(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Un(c,t,6,r)}}const Xg=new WeakMap;function Hh(t,e,n=!1){const i=n?Xg:e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Je(t)){const l=c=>{const u=Hh(c,e,!0);u&&(a=!0,kt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(xt(t)&&i.set(t,null),null):(qe(s)?s.forEach(l=>o[l]=null):kt(o,s),xt(t)&&i.set(t,o),o)}function ya(t,e){return!t||!ha(e)?!1:(e=e.slice(2).replace(/Once$/,""),ft(t,e[0].toLowerCase()+e.slice(1))||ft(t,zi(e))||ft(t,e))}function qu(t){const{type:e,vnode:n,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:f,setupState:p,ctx:g,inheritAttrs:x}=t,m=Qo(t);let h,w;try{if(n.shapeFlag&4){const y=r||i,D=y;h=Hn(c.call(D,y,u,d,p,f,g)),w=a}else{const y=e;h=Hn(y.length>1?y(d,{attrs:a,slots:o,emit:l}):y(d,null)),w=e.props?a:qg(a)}}catch(y){Ps.length=0,Ys(y,t,1),h=Tt(Zt)}let S=h;if(w&&x!==!1){const y=Object.keys(w),{shapeFlag:D}=S;y.length&&D&7&&(s&&y.some(zc)&&(w=$g(w,s)),S=Oi(S,w,!1,!0))}return n.dirs&&(S=Oi(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&hr(S,n.transition),h=S,Qo(m),h}const qg=t=>{let e;for(const n in t)(n==="class"||n==="style"||ha(n))&&((e||(e={}))[n]=t[n]);return e},$g=(t,e)=>{const n={};for(const i in t)(!zc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function Yg(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?$u(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const f=u[d];if(o[f]!==i[f]&&!ya(c,f))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?$u(i,o,c):!0:!!o;return!1}function $u(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!ya(n,s))return!0}return!1}function jg({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const Vh={},Gh=()=>Object.create(Vh),Wh=t=>Object.getPrototypeOf(t)===Vh;function Kg(t,e,n,i=!1){const r={},s=Gh();t.propsDefaults=Object.create(null),Xh(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:hh(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Zg(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=lt(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let f=u[d];if(ya(t.emitsOptions,f))continue;const p=e[f];if(l)if(ft(s,f))p!==s[f]&&(s[f]=p,c=!0);else{const g=Tn(f);r[g]=Fl(l,a,g,p,t,!1)}else p!==s[f]&&(s[f]=p,c=!0)}}}else{Xh(t,e,r,s)&&(c=!0);let u;for(const d in a)(!e||!ft(e,d)&&((u=zi(d))===d||!ft(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(r[d]=Fl(l,a,d,void 0,t,!0)):delete r[d]);if(s!==a)for(const d in s)(!e||!ft(e,d))&&(delete s[d],c=!0)}c&&si(t.attrs,"set","")}function Xh(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ms(l))continue;const c=e[l];let u;r&&ft(r,u=Tn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:ya(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=lt(n),c=a||vt;for(let u=0;u<s.length;u++){const d=s[u];n[d]=Fl(r,l,d,c[d],t,!ft(c,d))}}return o}function Fl(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=ft(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Je(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=Ks(r);i=c[n]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(n,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===zi(n))&&(i=!0))}return i}const Jg=new WeakMap;function qh(t,e,n=!1){const i=n?Jg:e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Je(t)){const u=d=>{l=!0;const[f,p]=qh(d,e,!0);kt(o,f),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return xt(t)&&i.set(t,Hr),Hr;if(qe(s))for(let u=0;u<s.length;u++){const d=Tn(s[u]);Yu(d)&&(o[d]=vt)}else if(s)for(const u in s){const d=Tn(u);if(Yu(d)){const f=s[u],p=o[d]=qe(f)||Je(f)?{type:f}:kt({},f),g=p.type;let x=!1,m=!0;if(qe(g))for(let h=0;h<g.length;++h){const w=g[h],S=Je(w)&&w.name;if(S==="Boolean"){x=!0;break}else S==="String"&&(m=!1)}else x=Je(g)&&g.name==="Boolean";p[0]=x,p[1]=m,(x||ft(p,"default"))&&a.push(d)}}const c=[o,a];return xt(t)&&i.set(t,c),c}function Yu(t){return t[0]!=="$"&&!Ms(t)}const nu=t=>t==="_"||t==="_ctx"||t==="$stable",iu=t=>qe(t)?t.map(Hn):[Hn(t)],Qg=(t,e,n)=>{if(e._n)return e;const i=ea((...r)=>iu(e(...r)),n);return i._c=!1,i},$h=(t,e,n)=>{const i=t._ctx;for(const r in t){if(nu(r))continue;const s=t[r];if(Je(s))e[r]=Qg(r,s,i);else if(s!=null){const o=iu(s);e[r]=()=>o}}},Yh=(t,e)=>{const n=iu(e);t.slots.default=()=>n},jh=(t,e,n)=>{for(const i in e)(n||!nu(i))&&(t[i]=e[i])},ex=(t,e,n)=>{const i=t.slots=Gh();if(t.vnode.shapeFlag&32){const r=e._;r?(jh(i,e,n),n&&qf(i,"_",r,!0)):$h(e,i)}else e&&Yh(t,e)},tx=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=vt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:jh(r,e,n):(s=!e.$stable,$h(e,r)),o=e}else e&&(Yh(t,e),o={default:1});if(s)for(const a in r)!nu(a)&&o[a]==null&&delete r[a]},nn=ox;function nx(t){return ix(t)}function ix(t,e){const n=xa();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:f,setScopeId:p=$n,insertStaticContent:g}=t,x=(A,_,O,X=null,Z=null,W=null,pe=void 0,Q=null,le=!!_.dynamicChildren)=>{if(A===_)return;A&&!tr(A,_)&&(X=F(A),Me(A,Z,W,!0),A=null),_.patchFlag===-2&&(le=!1,_.dynamicChildren=null);const{type:ce,ref:Ce,shapeFlag:M}=_;switch(ce){case Ea:m(A,_,O,X);break;case Zt:h(A,_,O,X);break;case zo:A==null&&w(_,O,X,pe);break;case ht:B(A,_,O,X,Z,W,pe,Q,le);break;default:M&1?D(A,_,O,X,Z,W,pe,Q,le):M&6?q(A,_,O,X,Z,W,pe,Q,le):(M&64||M&128)&&ce.process(A,_,O,X,Z,W,pe,Q,le,de)}Ce!=null&&Z?Cs(Ce,A&&A.ref,W,_||A,!_):Ce==null&&A&&A.ref!=null&&Cs(A.ref,null,W,A,!0)},m=(A,_,O,X)=>{if(A==null)i(_.el=a(_.children),O,X);else{const Z=_.el=A.el;_.children!==A.children&&c(Z,_.children)}},h=(A,_,O,X)=>{A==null?i(_.el=l(_.children||""),O,X):_.el=A.el},w=(A,_,O,X)=>{[A.el,A.anchor]=g(A.children,_,O,X,A.el,A.anchor)},S=({el:A,anchor:_},O,X)=>{let Z;for(;A&&A!==_;)Z=f(A),i(A,O,X),A=Z;i(_,O,X)},y=({el:A,anchor:_})=>{let O;for(;A&&A!==_;)O=f(A),r(A),A=O;r(_)},D=(A,_,O,X,Z,W,pe,Q,le)=>{if(_.type==="svg"?pe="svg":_.type==="math"&&(pe="mathml"),A==null)L(_,O,X,Z,W,pe,Q,le);else{const ce=A.el&&A.el._isVueCE?A.el:null;try{ce&&ce._beginPatch(),b(A,_,Z,W,pe,Q,le)}finally{ce&&ce._endPatch()}}},L=(A,_,O,X,Z,W,pe,Q)=>{let le,ce;const{props:Ce,shapeFlag:M,transition:v,dirs:N}=A;if(le=A.el=o(A.type,W,Ce&&Ce.is,Ce),M&8?u(le,A.children):M&16&&R(A.children,le,null,X,Z,za(A,W),pe,Q),N&&Gi(A,null,X,"created"),P(le,A,A.scopeId,pe,X),Ce){for(const ae in Ce)ae!=="value"&&!Ms(ae)&&s(le,ae,null,Ce[ae],W,X);"value"in Ce&&s(le,"value",null,Ce.value,W),(ce=Ce.onVnodeBeforeMount)&&kn(ce,X,A)}N&&Gi(A,null,X,"beforeMount");const Y=rx(Z,v);Y&&v.beforeEnter(le),i(le,_,O),((ce=Ce&&Ce.onVnodeMounted)||Y||N)&&nn(()=>{ce&&kn(ce,X,A),Y&&v.enter(le),N&&Gi(A,null,X,"mounted")},Z)},P=(A,_,O,X,Z)=>{if(O&&p(A,O),X)for(let W=0;W<X.length;W++)p(A,X[W]);if(Z){let W=Z.subTree;if(_===W||Jh(W.type)&&(W.ssContent===_||W.ssFallback===_)){const pe=Z.vnode;P(A,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},R=(A,_,O,X,Z,W,pe,Q,le=0)=>{for(let ce=le;ce<A.length;ce++){const Ce=A[ce]=Q?Ci(A[ce]):Hn(A[ce]);x(null,Ce,_,O,X,Z,W,pe,Q)}},b=(A,_,O,X,Z,W,pe)=>{const Q=_.el=A.el;let{patchFlag:le,dynamicChildren:ce,dirs:Ce}=_;le|=A.patchFlag&16;const M=A.props||vt,v=_.props||vt;let N;if(O&&Wi(O,!1),(N=v.onVnodeBeforeUpdate)&&kn(N,O,_,A),Ce&&Gi(_,A,O,"beforeUpdate"),O&&Wi(O,!0),(M.innerHTML&&v.innerHTML==null||M.textContent&&v.textContent==null)&&u(Q,""),ce?E(A.dynamicChildren,ce,Q,O,X,za(_,Z),W):pe||U(A,_,Q,null,O,X,za(_,Z),W,!1),le>0){if(le&16)I(Q,M,v,O,Z);else if(le&2&&M.class!==v.class&&s(Q,"class",null,v.class,Z),le&4&&s(Q,"style",M.style,v.style,Z),le&8){const Y=_.dynamicProps;for(let ae=0;ae<Y.length;ae++){const K=Y[ae],Ie=M[K],me=v[K];(me!==Ie||K==="value")&&s(Q,K,Ie,me,Z,O)}}le&1&&A.children!==_.children&&u(Q,_.children)}else!pe&&ce==null&&I(Q,M,v,O,Z);((N=v.onVnodeUpdated)||Ce)&&nn(()=>{N&&kn(N,O,_,A),Ce&&Gi(_,A,O,"updated")},X)},E=(A,_,O,X,Z,W,pe)=>{for(let Q=0;Q<_.length;Q++){const le=A[Q],ce=_[Q],Ce=le.el&&(le.type===ht||!tr(le,ce)||le.shapeFlag&198)?d(le.el):O;x(le,ce,Ce,null,X,Z,W,pe,!0)}},I=(A,_,O,X,Z)=>{if(_!==O){if(_!==vt)for(const W in _)!Ms(W)&&!(W in O)&&s(A,W,_[W],null,Z,X);for(const W in O){if(Ms(W))continue;const pe=O[W],Q=_[W];pe!==Q&&W!=="value"&&s(A,W,Q,pe,Z,X)}"value"in O&&s(A,"value",_.value,O.value,Z)}},B=(A,_,O,X,Z,W,pe,Q,le)=>{const ce=_.el=A?A.el:a(""),Ce=_.anchor=A?A.anchor:a("");let{patchFlag:M,dynamicChildren:v,slotScopeIds:N}=_;N&&(Q=Q?Q.concat(N):N),A==null?(i(ce,O,X),i(Ce,O,X),R(_.children||[],O,Ce,Z,W,pe,Q,le)):M>0&&M&64&&v&&A.dynamicChildren&&A.dynamicChildren.length===v.length?(E(A.dynamicChildren,v,O,Z,W,pe,Q),(_.key!=null||Z&&_===Z.subTree)&&ru(A,_,!0)):U(A,_,O,Ce,Z,W,pe,Q,le)},q=(A,_,O,X,Z,W,pe,Q,le)=>{_.slotScopeIds=Q,A==null?_.shapeFlag&512?Z.ctx.activate(_,O,X,pe,le):H(_,O,X,Z,W,pe,le):j(A,_,le)},H=(A,_,O,X,Z,W,pe)=>{const Q=A.component=px(A,X,Z);if(js(A)&&(Q.ctx.renderer=de),mx(Q,!1,pe),Q.asyncDep){if(Z&&Z.registerDep(Q,$,pe),!A.el){const le=Q.subTree=Tt(Zt);h(null,le,_,O),A.placeholder=le.el}}else $(Q,A,_,O,Z,W,pe)},j=(A,_,O)=>{const X=_.component=A.component;if(Yg(A,_,O))if(X.asyncDep&&!X.asyncResolved){z(X,_,O);return}else X.next=_,X.update();else _.el=A.el,X.vnode=_},$=(A,_,O,X,Z,W,pe)=>{const Q=()=>{if(A.isMounted){let{next:M,bu:v,u:N,parent:Y,vnode:ae}=A;{const Ue=Kh(A);if(Ue){M&&(M.el=ae.el,z(A,M,pe)),Ue.asyncDep.then(()=>{A.isUnmounted||Q()});return}}let K=M,Ie;Wi(A,!1),M?(M.el=ae.el,z(A,M,pe)):M=ae,v&&Oo(v),(Ie=M.props&&M.props.onVnodeBeforeUpdate)&&kn(Ie,Y,M,ae),Wi(A,!0);const me=qu(A),Le=A.subTree;A.subTree=me,x(Le,me,d(Le.el),F(Le),A,Z,W),M.el=me.el,K===null&&jg(A,me.el),N&&nn(N,Z),(Ie=M.props&&M.props.onVnodeUpdated)&&nn(()=>kn(Ie,Y,M,ae),Z)}else{let M;const{el:v,props:N}=_,{bm:Y,m:ae,parent:K,root:Ie,type:me}=A,Le=Wr(_);Wi(A,!1),Y&&Oo(Y),!Le&&(M=N&&N.onVnodeBeforeMount)&&kn(M,K,_),Wi(A,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(me);const Ue=A.subTree=qu(A);x(null,Ue,O,X,A,Z,W),_.el=Ue.el}if(ae&&nn(ae,Z),!Le&&(M=N&&N.onVnodeMounted)){const Ue=_;nn(()=>kn(M,K,Ue),Z)}(_.shapeFlag&256||K&&Wr(K.vnode)&&K.vnode.shapeFlag&256)&&A.a&&nn(A.a,Z),A.isMounted=!0,_=O=X=null}};A.scope.on();const le=A.effect=new Qf(Q);A.scope.off();const ce=A.update=le.run.bind(le),Ce=A.job=le.runIfDirty.bind(le);Ce.i=A,Ce.id=A.uid,le.scheduler=()=>Zc(Ce),Wi(A,!0),ce()},z=(A,_,O)=>{_.component=A;const X=A.vnode.props;A.vnode=_,A.next=null,Zg(A,_.props,X,O),tx(A,_.children,O),ui(),Du(A),di()},U=(A,_,O,X,Z,W,pe,Q,le=!1)=>{const ce=A&&A.children,Ce=A?A.shapeFlag:0,M=_.children,{patchFlag:v,shapeFlag:N}=_;if(v>0){if(v&128){fe(ce,M,O,X,Z,W,pe,Q,le);return}else if(v&256){ne(ce,M,O,X,Z,W,pe,Q,le);return}}N&8?(Ce&16&&_e(ce,Z,W),M!==ce&&u(O,M)):Ce&16?N&16?fe(ce,M,O,X,Z,W,pe,Q,le):_e(ce,Z,W,!0):(Ce&8&&u(O,""),N&16&&R(M,O,X,Z,W,pe,Q,le))},ne=(A,_,O,X,Z,W,pe,Q,le)=>{A=A||Hr,_=_||Hr;const ce=A.length,Ce=_.length,M=Math.min(ce,Ce);let v;for(v=0;v<M;v++){const N=_[v]=le?Ci(_[v]):Hn(_[v]);x(A[v],N,O,null,Z,W,pe,Q,le)}ce>Ce?_e(A,Z,W,!0,!1,M):R(_,O,X,Z,W,pe,Q,le,M)},fe=(A,_,O,X,Z,W,pe,Q,le)=>{let ce=0;const Ce=_.length;let M=A.length-1,v=Ce-1;for(;ce<=M&&ce<=v;){const N=A[ce],Y=_[ce]=le?Ci(_[ce]):Hn(_[ce]);if(tr(N,Y))x(N,Y,O,null,Z,W,pe,Q,le);else break;ce++}for(;ce<=M&&ce<=v;){const N=A[M],Y=_[v]=le?Ci(_[v]):Hn(_[v]);if(tr(N,Y))x(N,Y,O,null,Z,W,pe,Q,le);else break;M--,v--}if(ce>M){if(ce<=v){const N=v+1,Y=N<Ce?_[N].el:X;for(;ce<=v;)x(null,_[ce]=le?Ci(_[ce]):Hn(_[ce]),O,Y,Z,W,pe,Q,le),ce++}}else if(ce>v)for(;ce<=M;)Me(A[ce],Z,W,!0),ce++;else{const N=ce,Y=ce,ae=new Map;for(ce=Y;ce<=v;ce++){const Oe=_[ce]=le?Ci(_[ce]):Hn(_[ce]);Oe.key!=null&&ae.set(Oe.key,ce)}let K,Ie=0;const me=v-Y+1;let Le=!1,Ue=0;const ge=new Array(me);for(ce=0;ce<me;ce++)ge[ce]=0;for(ce=N;ce<=M;ce++){const Oe=A[ce];if(Ie>=me){Me(Oe,Z,W,!0);continue}let Ne;if(Oe.key!=null)Ne=ae.get(Oe.key);else for(K=Y;K<=v;K++)if(ge[K-Y]===0&&tr(Oe,_[K])){Ne=K;break}Ne===void 0?Me(Oe,Z,W,!0):(ge[Ne-Y]=ce+1,Ne>=Ue?Ue=Ne:Le=!0,x(Oe,_[Ne],O,null,Z,W,pe,Q,le),Ie++)}const Ae=Le?sx(ge):Hr;for(K=Ae.length-1,ce=me-1;ce>=0;ce--){const Oe=Y+ce,Ne=_[Oe],Te=_[Oe+1],$e=Oe+1<Ce?Te.el||Zh(Te):X;ge[ce]===0?x(null,Ne,O,$e,Z,W,pe,Q,le):Le&&(K<0||ce!==Ae[K]?Ee(Ne,O,$e,2):K--)}}},Ee=(A,_,O,X,Z=null)=>{const{el:W,type:pe,transition:Q,children:le,shapeFlag:ce}=A;if(ce&6){Ee(A.component.subTree,_,O,X);return}if(ce&128){A.suspense.move(_,O,X);return}if(ce&64){pe.move(A,_,O,de);return}if(pe===ht){i(W,_,O);for(let M=0;M<le.length;M++)Ee(le[M],_,O,X);i(A.anchor,_,O);return}if(pe===zo){S(A,_,O);return}if(X!==2&&ce&1&&Q)if(X===0)Q.beforeEnter(W),i(W,_,O),nn(()=>Q.enter(W),Z);else{const{leave:M,delayLeave:v,afterLeave:N}=Q,Y=()=>{A.ctx.isUnmounted?r(W):i(W,_,O)},ae=()=>{W._isLeaving&&W[ri](!0),M(W,()=>{Y(),N&&N()})};v?v(W,Y,ae):ae()}else i(W,_,O)},Me=(A,_,O,X=!1,Z=!1)=>{const{type:W,props:pe,ref:Q,children:le,dynamicChildren:ce,shapeFlag:Ce,patchFlag:M,dirs:v,cacheIndex:N}=A;if(M===-2&&(Z=!1),Q!=null&&(ui(),Cs(Q,null,O,A,!0),di()),N!=null&&(_.renderCache[N]=void 0),Ce&256){_.ctx.deactivate(A);return}const Y=Ce&1&&v,ae=!Wr(A);let K;if(ae&&(K=pe&&pe.onVnodeBeforeUnmount)&&kn(K,_,A),Ce&6)ie(A.component,O,X);else{if(Ce&128){A.suspense.unmount(O,X);return}Y&&Gi(A,null,_,"beforeUnmount"),Ce&64?A.type.remove(A,_,O,de,X):ce&&!ce.hasOnce&&(W!==ht||M>0&&M&64)?_e(ce,_,O,!1,!0):(W===ht&&M&384||!Z&&Ce&16)&&_e(le,_,O),X&&Qe(A)}(ae&&(K=pe&&pe.onVnodeUnmounted)||Y)&&nn(()=>{K&&kn(K,_,A),Y&&Gi(A,null,_,"unmounted")},O)},Qe=A=>{const{type:_,el:O,anchor:X,transition:Z}=A;if(_===ht){We(O,X);return}if(_===zo){y(A);return}const W=()=>{r(O),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(A.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:Q}=Z,le=()=>pe(O,W);Q?Q(A.el,W,le):le()}else W()},We=(A,_)=>{let O;for(;A!==_;)O=f(A),r(A),A=O;r(_)},ie=(A,_,O)=>{const{bum:X,scope:Z,job:W,subTree:pe,um:Q,m:le,a:ce}=A;ju(le),ju(ce),X&&Oo(X),Z.stop(),W&&(W.flags|=8,Me(pe,A,_,O)),Q&&nn(Q,_),nn(()=>{A.isUnmounted=!0},_)},_e=(A,_,O,X=!1,Z=!1,W=0)=>{for(let pe=W;pe<A.length;pe++)Me(A[pe],_,O,X,Z)},F=A=>{if(A.shapeFlag&6)return F(A.component.subTree);if(A.shapeFlag&128)return A.suspense.next();const _=f(A.anchor||A.el),O=_&&_[Eh];return O?f(O):_};let oe=!1;const se=(A,_,O)=>{let X;A==null?_._vnode&&(Me(_._vnode,null,null,!0),X=_._vnode.component):x(_._vnode||null,A,_,null,null,null,O),_._vnode=A,oe||(oe=!0,Du(X),_h(),oe=!1)},de={p:x,um:Me,m:Ee,r:Qe,mt:H,mc:R,pc:U,pbc:E,n:F,o:t};return{render:se,hydrate:void 0,createApp:Vg(se)}}function za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Wi({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function rx(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ru(t,e,n=!1){const i=t.children,r=e.children;if(qe(i)&&qe(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Ci(r[s]),a.el=o.el),!n&&a.patchFlag!==-2&&ru(o,a)),a.type===Ea&&(a.patchFlag!==-1?a.el=o.el:a.__elIndex=s+(t.type===ht?1:0)),a.type===Zt&&!a.el&&(a.el=o.el)}}function sx(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function Kh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Kh(e)}function ju(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Zh(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Zh(e.subTree):null}const Jh=t=>t.__isSuspense;function ox(t,e){e&&e.pendingBranch?qe(t)?e.effects.push(...t):e.effects.push(t):mg(t)}const ht=Symbol.for("v-fgt"),Ea=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),Ps=[];let pn=null;function xe(t=!1){Ps.push(pn=t?null:[])}function ax(){Ps.pop(),pn=Ps[Ps.length-1]||null}let Os=1;function ia(t,e=!1){Os+=t,t<0&&pn&&e&&(pn.hasOnce=!0)}function Qh(t){return t.dynamicChildren=Os>0?pn||Hr:null,ax(),Os>0&&pn&&pn.push(t),t}function we(t,e,n,i,r,s){return Qh(C(t,e,n,i,r,s,!0))}function Yt(t,e,n,i,r){return Qh(Tt(t,e,n,i,r,!0))}function ks(t){return t?t.__v_isVNode===!0:!1}function tr(t,e){return t.type===e.type&&t.key===e.key}const ep=({key:t})=>t??null,Ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?wt(t)||Rt(t)||Je(t)?{i:Wt,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,i=0,r=null,s=t===ht?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ep(e),ref:e&&Ho(e),scopeId:bh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Wt};return a?(su(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=wt(n)?8:16),Os>0&&!o&&pn&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&pn.push(l),l}const Tt=lx;function lx(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Nh)&&(t=Zt),ks(t)){const a=Oi(t,e,!0);return n&&su(a,n),Os>0&&!s&&pn&&(a.shapeFlag&6?pn[pn.indexOf(t)]=a:pn.push(a)),a.patchFlag=-2,a}if(bx(t)&&(t=t.__vccOpts),e){e=cx(e);let{class:a,style:l}=e;a&&!wt(a)&&(e.class=Ot(a)),xt(l)&&(va(l)&&!qe(l)&&(l=kt({},l)),e.style=fr(l))}const o=wt(t)?1:Jh(t)?128:Sh(t)?64:xt(t)?4:Je(t)?2:0;return C(t,e,n,i,r,o,s,!0)}function cx(t){return t?va(t)||Wh(t)?kt({},t):t:null}function Oi(t,e,n=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:l}=t,c=e?dx(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&ep(c),ref:e&&e.ref?n&&s?qe(s)?s.concat(Ho(e)):[s,Ho(e)]:Ho(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==ht?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Oi(t.ssContent),ssFallback:t.ssFallback&&Oi(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&i&&hr(u,l.clone(u)),u}function ur(t=" ",e=0){return Tt(Ea,null,t,e)}function ux(t,e){const n=Tt(zo,null,t);return n.staticCount=e,n}function st(t="",e=!1){return e?(xe(),Yt(Zt,null,t)):Tt(Zt,null,t)}function Hn(t){return t==null||typeof t=="boolean"?Tt(Zt):qe(t)?Tt(ht,null,t.slice()):ks(t)?Ci(t):Tt(Ea,null,String(t))}function Ci(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Oi(t)}function su(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(qe(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),su(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!Wh(e)?e._ctx=Wt:r===3&&Wt&&(Wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Je(e)?(e={default:e,_ctx:Wt},n=32):(e=String(e),i&64?(n=16,e=[ur(e)]):n=8);t.children=e,t.shapeFlag|=n}function dx(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ot([e.class,i.class]));else if(r==="style")e.style=fr([e.style,i.style]);else if(ha(r)){const s=e[r],o=i[r];o&&s!==o&&!(qe(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function kn(t,e,n,i=null){Un(t,e,7,[n,i])}const fx=zh();let hx=0;function px(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||fx,s={uid:hx++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Kf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:qh(i,r),emitsOptions:Hh(i,r),emit:null,emitted:null,propsDefaults:vt,inheritAttrs:i.inheritAttrs,ctx:vt,data:vt,props:vt,attrs:vt,slots:vt,refs:vt,setupState:vt,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Wg.bind(null,s),t.ce&&t.ce(s),s}let Gt=null;const Sa=()=>Gt||Wt;let ra,Ol;{const t=xa(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};ra=e("__VUE_INSTANCE_SETTERS__",n=>Gt=n),Ol=e("__VUE_SSR_SETTERS__",n=>Zr=n)}const Ks=t=>{const e=Gt;return ra(t),t.scope.on(),()=>{t.scope.off(),ra(e)}},Ku=()=>{Gt&&Gt.scope.off(),ra(null)};function tp(t){return t.vnode.shapeFlag&4}let Zr=!1;function mx(t,e=!1,n=!1){e&&Ol(e);const{props:i,children:r}=t.vnode,s=tp(t);Kg(t,i,s,e),ex(t,r,n||e);const o=s?gx(t,e):void 0;return e&&Ol(!1),o}function gx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Ng);const{setup:i}=n;if(i){ui();const r=t.setupContext=i.length>1?_x(t):null,s=Ks(t),o=$s(i,t,0,[t.props,r]),a=Gf(o);if(di(),s(),(a||t.sp)&&!Wr(t)&&tu(t),a){if(o.then(Ku,Ku),e)return o.then(l=>{Zu(t,l)}).catch(l=>{Ys(l,t,0)});t.asyncDep=o}else Zu(t,o)}else np(t)}function Zu(t,e,n){Je(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xt(e)&&(t.setupState=mh(e)),np(t)}function np(t,e,n){const i=t.type;t.render||(t.render=i.render||$n);{const r=Ks(t);ui();try{Fg(t)}finally{di(),r()}}}const xx={get(t,e){return jt(t,"get",""),t[e]}};function _x(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,xx),slots:t.slots,emit:t.emit,expose:e}}function Ma(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(mh(jc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Rs)return Rs[n](t)},has(e,n){return n in e||n in Rs}})):t.proxy}function vx(t,e=!0){return Je(t)?t.displayName||t.name:t.name||e&&t.__name}function bx(t){return Je(t)&&"__vccOpts"in t}const ze=(t,e)=>ug(t,e,Zr);function ou(t,e,n){try{ia(-1);const i=arguments.length;return i===2?xt(e)&&!qe(e)?ks(e)?Tt(t,null,[e]):Tt(t,e):Tt(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&ks(n)&&(n=[n]),Tt(t,e,n))}finally{ia(1)}}const yx="3.5.26";let kl;const Ju=typeof window<"u"&&window.trustedTypes;if(Ju)try{kl=Ju.createPolicy("vue",{createHTML:t=>t})}catch{}const ip=kl?t=>kl.createHTML(t):t=>t,Ex="http://www.w3.org/2000/svg",Sx="http://www.w3.org/1998/Math/MathML",ii=typeof document<"u"?document:null,Qu=ii&&ii.createElement("template"),Mx={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?ii.createElementNS(Ex,t):e==="mathml"?ii.createElementNS(Sx,t):n?ii.createElement(t,{is:n}):ii.createElement(t);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>ii.createTextNode(t),createComment:t=>ii.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ii.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{Qu.innerHTML=ip(i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t);const a=Qu.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},gi="transition",ds="animation",Jr=Symbol("_vtc"),rp={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},sp=kt({},Ah,rp),Tx=t=>(t.displayName="Transition",t.props=sp,t),Bl=Tx((t,{slots:e})=>ou(Sg,op(t),e)),Xi=(t,e=[])=>{qe(t)?t.forEach(n=>n(...e)):t&&t(...e)},ed=t=>t?qe(t)?t.some(e=>e.length>1):t.length>1:!1;function op(t){const e={};for(const B in t)B in rp||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,g=wx(r),x=g&&g[0],m=g&&g[1],{onBeforeEnter:h,onEnter:w,onEnterCancelled:S,onLeave:y,onLeaveCancelled:D,onBeforeAppear:L=h,onAppear:P=w,onAppearCancelled:R=S}=e,b=(B,q,H,j)=>{B._enterCancelled=j,Mi(B,q?u:a),Mi(B,q?c:o),H&&H()},E=(B,q)=>{B._isLeaving=!1,Mi(B,d),Mi(B,p),Mi(B,f),q&&q()},I=B=>(q,H)=>{const j=B?P:w,$=()=>b(q,B,H);Xi(j,[q,$]),td(()=>{Mi(q,B?l:s),Bn(q,B?u:a),ed(j)||nd(q,i,x,$)})};return kt(e,{onBeforeEnter(B){Xi(h,[B]),Bn(B,s),Bn(B,o)},onBeforeAppear(B){Xi(L,[B]),Bn(B,l),Bn(B,c)},onEnter:I(!1),onAppear:I(!0),onLeave(B,q){B._isLeaving=!0;const H=()=>E(B,q);Bn(B,d),B._enterCancelled?(Bn(B,f),zl(B)):(zl(B),Bn(B,f)),td(()=>{B._isLeaving&&(Mi(B,d),Bn(B,p),ed(y)||nd(B,i,m,H))}),Xi(y,[B,H])},onEnterCancelled(B){b(B,!1,void 0,!0),Xi(S,[B])},onAppearCancelled(B){b(B,!0,void 0,!0),Xi(R,[B])},onLeaveCancelled(B){E(B),Xi(D,[B])}})}function wx(t){if(t==null)return null;if(xt(t))return[Ha(t.enter),Ha(t.leave)];{const e=Ha(t);return[e,e]}}function Ha(t){return Rm(t)}function Bn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Jr]||(t[Jr]=new Set)).add(e)}function Mi(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Jr];n&&(n.delete(e),n.size||(t[Jr]=void 0))}function td(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Ax=0;function nd(t,e,n,i){const r=t._endId=++Ax,s=()=>{r===t._endId&&i()};if(n!=null)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=ap(t,e);if(!o)return i();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,f),s()},f=p=>{p.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},a+1),t.addEventListener(c,f)}function ap(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${gi}Delay`),s=i(`${gi}Duration`),o=id(r,s),a=i(`${ds}Delay`),l=i(`${ds}Duration`),c=id(a,l);let u=null,d=0,f=0;e===gi?o>0&&(u=gi,d=o,f=s.length):e===ds?c>0&&(u=ds,d=c,f=l.length):(d=Math.max(o,c),u=d>0?o>c?gi:ds:null,f=u?u===gi?s.length:l.length:0);const p=u===gi&&/\b(?:transform|all)(?:,|$)/.test(i(`${gi}Property`).toString());return{type:u,timeout:d,propCount:f,hasTransform:p}}function id(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>rd(n)+rd(t[i])))}function rd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function zl(t){return(t?t.ownerDocument:document).body.offsetHeight}function Cx(t,e,n){const i=t[Jr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const sa=Symbol("_vod"),lp=Symbol("_vsh"),Z1={name:"show",beforeMount(t,{value:e},{transition:n}){t[sa]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):fs(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e!=!n&&(i?e?(i.beforeEnter(t),fs(t,!0),i.enter(t)):i.leave(t,()=>{fs(t,!1)}):fs(t,e))},beforeUnmount(t,{value:e}){fs(t,e)}};function fs(t,e){t.style.display=e?t[sa]:"none",t[lp]=!e}const Rx=Symbol(""),Px=/(?:^|;)\s*display\s*:/;function Ix(t,e,n){const i=t.style,r=wt(n);let s=!1;if(n&&!r){if(e)if(wt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Vo(i,a,"")}else for(const o in e)n[o]==null&&Vo(i,o,"");for(const o in n)o==="display"&&(s=!0),Vo(i,o,n[o])}else if(r){if(e!==n){const o=i[Rx];o&&(n+=";"+o),i.cssText=n,s=Px.test(n)}}else e&&t.removeAttribute("style");sa in t&&(t[sa]=s?i.display:"",t[lp]&&(i.display="none"))}const sd=/\s*!important$/;function Vo(t,e,n){if(qe(n))n.forEach(i=>Vo(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=Dx(t,e);sd.test(n)?t.setProperty(zi(i),n.replace(sd,""),"important"):t[i]=n}}const od=["Webkit","Moz","ms"],Va={};function Dx(t,e){const n=Va[e];if(n)return n;let i=Tn(e);if(i!=="filter"&&i in t)return Va[e]=i;i=ga(i);for(let r=0;r<od.length;r++){const s=od[r]+i;if(s in t)return Va[e]=s}return e}const ad="http://www.w3.org/1999/xlink";function ld(t,e,n,i,r,s=Nm(e)){i&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(ad,e.slice(6,e.length)):t.setAttributeNS(ad,e,n):n==null||s&&!$f(n)?t.removeAttribute(e):t.setAttribute(e,s?"":Dn(n)?String(n):n)}function cd(t,e,n,i,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ip(n):n);return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=$f(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function nr(t,e,n,i){t.addEventListener(e,n,i)}function Lx(t,e,n,i){t.removeEventListener(e,n,i)}const ud=Symbol("_vei");function Ux(t,e,n,i,r=null){const s=t[ud]||(t[ud]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=Nx(e);if(i){const c=s[e]=kx(i,r);nr(t,a,c,l)}else o&&(Lx(t,a,o,l),s[e]=void 0)}}const dd=/(?:Once|Passive|Capture)$/;function Nx(t){let e;if(dd.test(t)){e={};let i;for(;i=t.match(dd);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):zi(t.slice(2)),e]}let Ga=0;const Fx=Promise.resolve(),Ox=()=>Ga||(Fx.then(()=>Ga=0),Ga=Date.now());function kx(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;Un(Bx(i,n.value),e,5,[i])};return n.value=t,n.attached=Ox(),n}function Bx(t,e){if(qe(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const fd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,zx=(t,e,n,i,r,s)=>{const o=r==="svg";e==="class"?Cx(t,i,o):e==="style"?Ix(t,n,i):ha(e)?zc(e)||Ux(t,e,n,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Hx(t,e,i,o))?(cd(t,e,i),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ld(t,e,i,o,s,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!wt(i))?cd(t,Tn(e),i,s,e):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),ld(t,e,i,o))};function Hx(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&fd(e)&&Je(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return fd(e)&&wt(n)?!1:e in t}const cp=new WeakMap,up=new WeakMap,oa=Symbol("_moveCb"),hd=Symbol("_enterCb"),Vx=t=>(delete t.props.mode,t),Gx=Vx({name:"TransitionGroup",props:kt({},sp,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=Sa(),i=wh();let r,s;return Dh(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!$x(r[0].el,n.vnode.el,o)){r=[];return}r.forEach(Wx),r.forEach(Xx);const a=r.filter(qx);zl(n.vnode.el),a.forEach(l=>{const c=l.el,u=c.style;Bn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[oa]=f=>{f&&f.target!==c||(!f||f.propertyName.endsWith("transform"))&&(c.removeEventListener("transitionend",d),c[oa]=null,Mi(c,o))};c.addEventListener("transitionend",d)}),r=[]}),()=>{const o=lt(t),a=op(o);let l=o.tag||ht;if(r=[],s)for(let c=0;c<s.length;c++){const u=s[c];u.el&&u.el instanceof Element&&(r.push(u),hr(u,Fs(u,a,i,n)),cp.set(u,{left:u.el.offsetLeft,top:u.el.offsetTop}))}s=e.default?eu(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&hr(u,Fs(u,a,i,n))}return Tt(l,null,s)}}}),J1=Gx;function Wx(t){const e=t.el;e[oa]&&e[oa](),e[hd]&&e[hd]()}function Xx(t){up.set(t,{left:t.el.offsetLeft,top:t.el.offsetTop})}function qx(t){const e=cp.get(t),n=up.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function $x(t,e,n){const i=t.cloneNode(),r=t[Jr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=ap(i);return s.removeChild(i),o}const aa=t=>{const e=t.props["onUpdate:modelValue"]||!1;return qe(e)?n=>Oo(e,n):e};function Yx(t){t.target.composing=!0}function pd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Xr=Symbol("_assign");function md(t,e,n){return e&&(t=t.trim()),n&&(t=Vc(t)),t}const dp={created(t,{modifiers:{lazy:e,trim:n,number:i}},r){t[Xr]=aa(r);const s=i||r.props&&r.props.type==="number";nr(t,e?"change":"input",o=>{o.target.composing||t[Xr](md(t.value,n,s))}),(n||s)&&nr(t,"change",()=>{t.value=md(t.value,n,s)}),e||(nr(t,"compositionstart",Yx),nr(t,"compositionend",pd),nr(t,"change",pd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:i,trim:r,number:s}},o){if(t[Xr]=aa(o),t.composing)return;const a=(s||t.type==="number")&&!/^0\d/.test(t.value)?Vc(t.value):t.value,l=e??"";a!==l&&(document.activeElement===t&&t.type!=="range"&&(i&&e===n||r&&t.value.trim()===l)||(t.value=l))}},jx={created(t,{value:e},n){t.checked=jo(e,n.props.value),t[Xr]=aa(n),nr(t,"change",()=>{t[Xr](Kx(t))})},beforeUpdate(t,{value:e,oldValue:n},i){t[Xr]=aa(i),e!==n&&(t.checked=jo(e,i.props.value))}};function Kx(t){return"_value"in t?t._value:t.value}const Zx=["ctrl","shift","alt","meta"],Jx={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Zx.some(n=>t[`${n}Key`]&&!e.includes(n))},gd=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=((r,...s)=>{for(let o=0;o<e.length;o++){const a=Jx[e[o]];if(a&&a(r,e))return}return t(r,...s)}))},Qx={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},fp=(t,e)=>{const n=t._withKeys||(t._withKeys={}),i=e.join(".");return n[i]||(n[i]=(r=>{if(!("key"in r))return;const s=zi(r.key);if(e.some(o=>o===s||Qx[o]===s))return t(r)}))},e_=kt({patchProp:zx},Mx);let xd;function t_(){return xd||(xd=nx(e_))}const n_=((...t)=>{const e=t_().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=r_(i);if(!r)return;const s=e._component;!Je(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,i_(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function i_(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function r_(t){return wt(t)?document.querySelector(t):t}let hp;const Ta=t=>hp=t,pp=Symbol();function Hl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Is;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Is||(Is={}));function s_(){const t=Zf(!0),e=t.run(()=>it({}));let n=[],i=[];const r=jc({install(s){Ta(r),r._a=s,s.provide(pp,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return this._a?n.push(s):i.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const mp=()=>{};function _d(t,e,n,i=mp){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&Jf()&&Om(r),r}function vr(t,...e){t.slice().forEach(n=>{n(...e)})}const o_=t=>t(),vd=Symbol(),Wa=Symbol();function Vl(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,i)=>t.set(i,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];Hl(r)&&Hl(i)&&t.hasOwnProperty(n)&&!Rt(i)&&!li(i)?t[n]=Vl(r,i):t[n]=i}return t}const a_=Symbol();function l_(t){return!Hl(t)||!t.hasOwnProperty(a_)}const{assign:Ti}=Object;function c_(t){return!!(Rt(t)&&t.effect)}function u_(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=og(n.state.value[t]);return Ti(u,s,Object.keys(o||{}).reduce((d,f)=>(d[f]=jc(ze(()=>{Ta(n);const p=n._s.get(t);return o[f].call(p,p)})),d),{}))}return l=gp(t,c,e,n,i,!0),l}function gp(t,e,n={},i,r,s){let o;const a=Ti({actions:{}},n),l={deep:!0};let c,u,d=[],f=[],p;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),it({});let x;function m(R){let b;c=u=!1,typeof R=="function"?(R(i.state.value[t]),b={type:Is.patchFunction,storeId:t,events:p}):(Vl(i.state.value[t],R),b={type:Is.patchObject,payload:R,storeId:t,events:p});const E=x=Symbol();Kc().then(()=>{x===E&&(c=!0)}),u=!0,vr(d,b,i.state.value[t])}const h=s?function(){const{state:b}=n,E=b?b():{};this.$patch(I=>{Ti(I,E)})}:mp;function w(){o.stop(),d=[],f=[],i._s.delete(t)}const S=(R,b="")=>{if(vd in R)return R[Wa]=b,R;const E=function(){Ta(i);const I=Array.from(arguments),B=[],q=[];function H(z){B.push(z)}function j(z){q.push(z)}vr(f,{args:I,name:E[Wa],store:D,after:H,onError:j});let $;try{$=R.apply(this&&this.$id===t?this:D,I)}catch(z){throw vr(q,z),z}return $ instanceof Promise?$.then(z=>(vr(B,z),z)).catch(z=>(vr(q,z),Promise.reject(z))):(vr(B,$),$)};return E[vd]=!0,E[Wa]=b,E},y={_p:i,$id:t,$onAction:_d.bind(null,f),$patch:m,$reset:h,$subscribe(R,b={}){const E=_d(d,R,b.detached,()=>I()),I=o.run(()=>Di(()=>i.state.value[t],B=>{(b.flush==="sync"?u:c)&&R({storeId:t,type:Is.direct,events:p},B)},Ti({},l,b)));return E},$dispose:w},D=qs(y);i._s.set(t,D);const P=(i._a&&i._a.runWithContext||o_)(()=>i._e.run(()=>(o=Zf()).run(()=>e({action:S}))));for(const R in P){const b=P[R];if(Rt(b)&&!c_(b)||li(b))s||(g&&l_(b)&&(Rt(b)?b.value=g[R]:Vl(b,g[R])),i.state.value[t][R]=b);else if(typeof b=="function"){const E=S(b,R);P[R]=E,a.actions[R]=b}}return Ti(D,P),Ti(lt(D),P),Object.defineProperty(D,"$state",{get:()=>i.state.value[t],set:R=>{m(b=>{Ti(b,R)})}}),i._p.forEach(R=>{Ti(D,o.run(()=>R({store:D,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(D.$state,g),c=!0,u=!0,D}function xp(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=gg();return a=a||(c?Mn(pp,null):null),a&&Ta(a),a=hp,a._s.has(i)||(s?gp(i,e,r,a):u_(i,r,a)),a._s.get(i)}return o.$id=i,o}const au=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},d_={};function f_(t,e){const n=Ug("RouterView");return xe(),Yt(n)}const h_=au(d_,[["render",f_]]);const Br=typeof document<"u";function _p(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function p_(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&_p(t.default)}const dt=Object.assign;function Xa(t,e){const n={};for(const i in e){const r=e[i];n[i]=Nn(r)?r.map(t):t(r)}return n}const Ds=()=>{},Nn=Array.isArray;function bd(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}const vp=/#/g,m_=/&/g,g_=/\//g,x_=/=/g,__=/\?/g,bp=/\+/g,v_=/%5B/g,b_=/%5D/g,yp=/%5E/g,y_=/%60/g,Ep=/%7B/g,E_=/%7C/g,Sp=/%7D/g,S_=/%20/g;function lu(t){return t==null?"":encodeURI(""+t).replace(E_,"|").replace(v_,"[").replace(b_,"]")}function M_(t){return lu(t).replace(Ep,"{").replace(Sp,"}").replace(yp,"^")}function Gl(t){return lu(t).replace(bp,"%2B").replace(S_,"+").replace(vp,"%23").replace(m_,"%26").replace(y_,"`").replace(Ep,"{").replace(Sp,"}").replace(yp,"^")}function T_(t){return Gl(t).replace(x_,"%3D")}function w_(t){return lu(t).replace(vp,"%23").replace(__,"%3F")}function A_(t){return w_(t).replace(g_,"%2F")}function Bs(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const C_=/\/$/,R_=t=>t.replace(C_,"");function qa(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return l=a>=0&&l>a?-1:l,l>=0&&(i=e.slice(0,l),s=e.slice(l,a>0?a:e.length),r=t(s.slice(1))),a>=0&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=L_(i??e,n),{fullPath:i+s+o,path:i,query:r,hash:Bs(o)}}function P_(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function yd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function I_(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Qr(e.matched[i],n.matched[r])&&Mp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Qr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!D_(t[n],e[n]))return!1;return!0}function D_(t,e){return Nn(t)?Ed(t,e):Nn(e)?Ed(e,t):t?.valueOf()===e?.valueOf()}function Ed(t,e){return Nn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function L_(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}const xi={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Wl=(function(t){return t.pop="pop",t.push="push",t})({}),$a=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function U_(t){if(!t)if(Br){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),R_(t)}const N_=/^[^#]+#/;function F_(t,e){return t.replace(N_,"#")+e}function O_(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const wa=()=>({left:window.scrollX,top:window.scrollY});function k_(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=O_(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Sd(t,e){return(history.state?history.state.position-e:-1)+t}const Xl=new Map;function B_(t,e){Xl.set(t,e)}function z_(t){const e=Xl.get(t);return Xl.delete(t),e}function H_(t){return typeof t=="string"||t&&typeof t=="object"}function Tp(t){return typeof t=="string"||typeof t=="symbol"}let Ct=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const wp=Symbol("");Ct.MATCHER_NOT_FOUND+"",Ct.NAVIGATION_GUARD_REDIRECT+"",Ct.NAVIGATION_ABORTED+"",Ct.NAVIGATION_CANCELLED+"",Ct.NAVIGATION_DUPLICATED+"";function es(t,e){return dt(new Error,{type:t,[wp]:!0},e)}function Kn(t,e){return t instanceof Error&&wp in t&&(e==null||!!(t.type&e))}const V_=["params","query","hash"];function G_(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of V_)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function W_(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<n.length;++i){const r=n[i].replace(bp," "),s=r.indexOf("="),o=Bs(s<0?r:r.slice(0,s)),a=s<0?null:Bs(r.slice(s+1));if(o in e){let l=e[o];Nn(l)||(l=e[o]=[l]),l.push(a)}else e[o]=a}return e}function Md(t){let e="";for(let n in t){const i=t[n];if(n=T_(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nn(i)?i.map(r=>r&&Gl(r)):[i&&Gl(i)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function X_(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Nn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const q_=Symbol(""),Td=Symbol(""),Aa=Symbol(""),cu=Symbol(""),ql=Symbol("");function hs(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ri(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=f=>{f===!1?l(es(Ct.NAVIGATION_ABORTED,{from:n,to:e})):f instanceof Error?l(f):H_(f)?l(es(Ct.NAVIGATION_GUARD_REDIRECT,{from:e,to:f})):(o&&i.enterCallbacks[r]===o&&typeof f=="function"&&o.push(f),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(f=>l(f))})}function Ya(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(_p(l)){const c=(l.__vccOpts||l)[e];c&&s.push(Ri(c,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=p_(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const f=(d.__vccOpts||d)[e];return f&&Ri(f,n,i,o,a,r)()}))}}return s}function $_(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Qr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Qr(c,l))||r.push(l))}return[n,i,r]}let Y_=()=>location.protocol+"//"+location.host;function Ap(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let o=r.includes(t.slice(s))?t.slice(s).length:1,a=r.slice(o);return a[0]!=="/"&&(a="/"+a),yd(a,"")}return yd(n,t)+i+r}function j_(t,e,n,i){let r=[],s=[],o=null;const a=({state:f})=>{const p=Ap(t,location),g=n.value,x=e.value;let m=0;if(f){if(n.value=p,e.value=f,o&&o===g){o=null;return}m=x?f.position-x.position:0}else i(p);r.forEach(h=>{h(n.value,g,{delta:m,type:Wl.pop,direction:m?m>0?$a.forward:$a.back:$a.unknown})})};function l(){o=n.value}function c(f){r.push(f);const p=()=>{const g=r.indexOf(f);g>-1&&r.splice(g,1)};return s.push(p),p}function u(){if(document.visibilityState==="hidden"){const{history:f}=window;if(!f.state)return;f.replaceState(dt({},f.state,{scroll:wa()}),"")}}function d(){for(const f of s)f();s=[],window.removeEventListener("popstate",a),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",a),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function wd(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?wa():null}}function K_(t){const{history:e,location:n}=window,i={value:Ap(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const d=t.indexOf("#"),f=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:Y_()+t+l;try{e[u?"replaceState":"pushState"](c,"",f),r.value=c}catch(p){console.error(p),n[u?"replace":"assign"](f)}}function o(l,c){s(l,dt({},e.state,wd(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),i.value=l}function a(l,c){const u=dt({},r.value,e.state,{forward:l,scroll:wa()});s(u.current,u,!0),s(l,dt({},wd(i.value,l,null),{position:u.position+1},c),!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function Z_(t){t=U_(t);const e=K_(t),n=j_(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=dt({location:"",base:t,go:i,createHref:F_.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}let sr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ft=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ft||{});const J_={type:sr.Static,value:""},Q_=/[a-zA-Z0-9_]/;function e0(t){if(!t)return[[]];if(t==="/")return[[J_]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${c}": ${p}`)}let n=Ft.Static,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function d(){c&&(n===Ft.Static?s.push({type:sr.Static,value:c}):n===Ft.Param||n===Ft.ParamRegExp||n===Ft.ParamRegExpEnd?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:sr.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function f(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==Ft.ParamRegExp){i=n,n=Ft.EscapeNext;continue}switch(n){case Ft.Static:l==="/"?(c&&d(),o()):l===":"?(d(),n=Ft.Param):f();break;case Ft.EscapeNext:f(),n=i;break;case Ft.Param:l==="("?n=Ft.ParamRegExp:Q_.test(l)?f():(d(),n=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case Ft.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=Ft.ParamRegExpEnd:u+=l;break;case Ft.ParamRegExpEnd:d(),n=Ft.Static,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===Ft.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),r}const Ad="[^/]+?",t0={sensitive:!1,strict:!1,start:!0,end:!0};var rn=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(rn||{});const n0=/[.+*?^${}()[\]/\\]/g;function i0(t,e){const n=dt({},t0,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[rn.Root];n.strict&&!c.length&&(r+="/");for(let d=0;d<c.length;d++){const f=c[d];let p=rn.Segment+(n.sensitive?rn.BonusCaseSensitive:0);if(f.type===sr.Static)d||(r+="/"),r+=f.value.replace(n0,"\\$&"),p+=rn.Static;else if(f.type===sr.Param){const{value:g,repeatable:x,optional:m,regexp:h}=f;s.push({name:g,repeatable:x,optional:m});const w=h||Ad;if(w!==Ad){p+=rn.BonusCustomRegExp;try{`${w}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${w}): `+y.message)}}let S=x?`((?:${w})(?:/(?:${w}))*)`:`(${w})`;d||(S=m&&c.length<2?`(?:/${S})`:"/"+S),m&&(S+="?"),r+=S,p+=rn.Dynamic,m&&(p+=rn.BonusOptional),x&&(p+=rn.BonusRepeatable),w===".*"&&(p+=rn.BonusWildcard)}u.push(p)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=rn.BonusStrict}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let f=1;f<u.length;f++){const p=u[f]||"",g=s[f-1];d[g.name]=p&&g.repeatable?p.split("/"):p}return d}function l(c){let u="",d=!1;for(const f of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const p of f)if(p.type===sr.Static)u+=p.value;else if(p.type===sr.Param){const{value:g,repeatable:x,optional:m}=p,h=g in c?c[g]:"";if(Nn(h)&&!x)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const w=Nn(h)?h.join("/"):h;if(!w)if(m)f.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=w}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function r0(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===rn.Static+rn.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===rn.Static+rn.Segment?1:-1:0}function Cp(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=r0(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Cd(i))return 1;if(Cd(r))return-1}return r.length-i.length}function Cd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const s0={strict:!1,end:!0,sensitive:!1};function o0(t,e,n){const i=i0(e0(t.path),n),r=dt(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function a0(t,e){const n=[],i=new Map;e=bd(s0,e);function r(d){return i.get(d)}function s(d,f,p){const g=!p,x=Pd(d);x.aliasOf=p&&p.record;const m=bd(e,d),h=[x];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const D of y)h.push(Pd(dt({},x,{components:p?p.record.components:x.components,path:D,aliasOf:p?p.record:x})))}let w,S;for(const y of h){const{path:D}=y;if(f&&D[0]!=="/"){const L=f.record.path,P=L[L.length-1]==="/"?"":"/";y.path=f.record.path+(D&&P+D)}if(w=o0(y,f,m),p?p.alias.push(w):(S=S||w,S!==w&&S.alias.push(w),g&&d.name&&!Id(w)&&o(d.name)),Rp(w)&&l(w),x.children){const L=x.children;for(let P=0;P<L.length;P++)s(L[P],w,p&&p.children[P])}p=p||w}return S?()=>{o(S)}:Ds}function o(d){if(Tp(d)){const f=i.get(d);f&&(i.delete(d),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(d);f>-1&&(n.splice(f,1),d.record.name&&i.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const f=u0(d,n);n.splice(f,0,d),d.record.name&&!Id(d)&&i.set(d.record.name,d)}function c(d,f){let p,g={},x,m;if("name"in d&&d.name){if(p=i.get(d.name),!p)throw es(Ct.MATCHER_NOT_FOUND,{location:d});m=p.record.name,g=dt(Rd(f.params,p.keys.filter(S=>!S.optional).concat(p.parent?p.parent.keys.filter(S=>S.optional):[]).map(S=>S.name)),d.params&&Rd(d.params,p.keys.map(S=>S.name))),x=p.stringify(g)}else if(d.path!=null)x=d.path,p=n.find(S=>S.re.test(x)),p&&(g=p.parse(x),m=p.record.name);else{if(p=f.name?i.get(f.name):n.find(S=>S.re.test(f.path)),!p)throw es(Ct.MATCHER_NOT_FOUND,{location:d,currentLocation:f});m=p.record.name,g=dt({},f.params,d.params),x=p.stringify(g)}const h=[];let w=p;for(;w;)h.unshift(w.record),w=w.parent;return{name:m,path:x,params:g,matched:h,meta:c0(h)}}t.forEach(d=>s(d));function u(){n.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:r}}function Rd(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function Pd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:l0(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function l0(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Id(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function c0(t){return t.reduce((e,n)=>dt(e,n.meta),{})}function u0(t,e){let n=0,i=e.length;for(;n!==i;){const s=n+i>>1;Cp(t,e[s])<0?i=s:n=s+1}const r=d0(t);return r&&(i=e.lastIndexOf(r,i-1)),i}function d0(t){let e=t;for(;e=e.parent;)if(Rp(e)&&Cp(t,e)===0)return e}function Rp({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Dd(t){const e=Mn(Aa),n=Mn(cu),i=ze(()=>{const l=Pt(t.to);return e.resolve(l)}),r=ze(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const f=d.findIndex(Qr.bind(null,u));if(f>-1)return f;const p=Ld(l[c-2]);return c>1&&Ld(u)===p&&d[d.length-1].path!==p?d.findIndex(Qr.bind(null,l[c-2])):f}),s=ze(()=>r.value>-1&&g0(n.params,i.value.params)),o=ze(()=>r.value>-1&&r.value===n.matched.length-1&&Mp(n.params,i.value.params));function a(l={}){if(m0(l)){const c=e[Pt(t.replace)?"replace":"push"](Pt(t.to)).catch(Ds);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:i,href:ze(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}function f0(t){return t.length===1?t[0]:t}const h0=gn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Dd,setup(t,{slots:e}){const n=qs(Dd(t)),{options:i}=Mn(Aa),r=ze(()=>({[Ud(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Ud(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&f0(e.default(n));return t.custom?s:ou("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),p0=h0;function m0(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function g0(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Nn(r)||r.length!==i.length||i.some((s,o)=>s.valueOf()!==r[o].valueOf()))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ud=(t,e,n)=>t??e??n,x0=gn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=Mn(ql),r=ze(()=>t.route||i.value),s=Mn(Td,0),o=ze(()=>{let c=Pt(s);const{matched:u}=r.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=ze(()=>r.value.matched[o.value]);ko(Td,ze(()=>o.value+1)),ko(q_,a),ko(ql,r);const l=it();return Di(()=>[l.value,a.value,t.name],([c,u,d],[f,p,g])=>{u&&(u.instances[d]=c,p&&p!==u&&c&&c===f&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),c&&u&&(!p||!Qr(u,p)||!f)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,d=a.value,f=d&&d.components[u];if(!f)return Nd(n.default,{Component:f,route:c});const p=d.props[u],g=p?p===!0?c.params:typeof p=="function"?p(c):p:null,m=ou(f,dt({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Nd(n.default,{Component:m,route:c})||m}}});function Nd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const _0=x0;function v0(t){const e=a0(t.routes,t),n=t.parseQuery||W_,i=t.stringifyQuery||Md,r=t.history,s=hs(),o=hs(),a=hs(),l=ig(xi);let c=xi;Br&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Xa.bind(null,F=>""+F),d=Xa.bind(null,A_),f=Xa.bind(null,Bs);function p(F,oe){let se,de;return Tp(F)?(se=e.getRecordMatcher(F),de=oe):de=F,e.addRoute(de,se)}function g(F){const oe=e.getRecordMatcher(F);oe&&e.removeRoute(oe)}function x(){return e.getRoutes().map(F=>F.record)}function m(F){return!!e.getRecordMatcher(F)}function h(F,oe){if(oe=dt({},oe||l.value),typeof F=="string"){const O=qa(n,F,oe.path),X=e.resolve({path:O.path},oe),Z=r.createHref(O.fullPath);return dt(O,X,{params:f(X.params),hash:Bs(O.hash),redirectedFrom:void 0,href:Z})}let se;if(F.path!=null)se=dt({},F,{path:qa(n,F.path,oe.path).path});else{const O=dt({},F.params);for(const X in O)O[X]==null&&delete O[X];se=dt({},F,{params:d(O)}),oe.params=d(oe.params)}const de=e.resolve(se,oe),Pe=F.hash||"";de.params=u(f(de.params));const A=P_(i,dt({},F,{hash:M_(Pe),path:de.path})),_=r.createHref(A);return dt({fullPath:A,hash:Pe,query:i===Md?X_(F.query):F.query||{}},de,{redirectedFrom:void 0,href:_})}function w(F){return typeof F=="string"?qa(n,F,l.value.path):dt({},F)}function S(F,oe){if(c!==F)return es(Ct.NAVIGATION_CANCELLED,{from:oe,to:F})}function y(F){return P(F)}function D(F){return y(dt(w(F),{replace:!0}))}function L(F,oe){const se=F.matched[F.matched.length-1];if(se&&se.redirect){const{redirect:de}=se;let Pe=typeof de=="function"?de(F,oe):de;return typeof Pe=="string"&&(Pe=Pe.includes("?")||Pe.includes("#")?Pe=w(Pe):{path:Pe},Pe.params={}),dt({query:F.query,hash:F.hash,params:Pe.path!=null?{}:F.params},Pe)}}function P(F,oe){const se=c=h(F),de=l.value,Pe=F.state,A=F.force,_=F.replace===!0,O=L(se,de);if(O)return P(dt(w(O),{state:typeof O=="object"?dt({},Pe,O.state):Pe,force:A,replace:_}),oe||se);const X=se;X.redirectedFrom=oe;let Z;return!A&&I_(i,de,se)&&(Z=es(Ct.NAVIGATION_DUPLICATED,{to:X,from:de}),Ee(de,de,!0,!1)),(Z?Promise.resolve(Z):E(X,de)).catch(W=>Kn(W)?Kn(W,Ct.NAVIGATION_GUARD_REDIRECT)?W:fe(W):U(W,X,de)).then(W=>{if(W){if(Kn(W,Ct.NAVIGATION_GUARD_REDIRECT))return P(dt({replace:_},w(W.to),{state:typeof W.to=="object"?dt({},Pe,W.to.state):Pe,force:A}),oe||X)}else W=B(X,de,!0,_,Pe);return I(X,de,W),W})}function R(F,oe){const se=S(F,oe);return se?Promise.reject(se):Promise.resolve()}function b(F){const oe=We.values().next().value;return oe&&typeof oe.runWithContext=="function"?oe.runWithContext(F):F()}function E(F,oe){let se;const[de,Pe,A]=$_(F,oe);se=Ya(de.reverse(),"beforeRouteLeave",F,oe);for(const O of de)O.leaveGuards.forEach(X=>{se.push(Ri(X,F,oe))});const _=R.bind(null,F,oe);return se.push(_),_e(se).then(()=>{se=[];for(const O of s.list())se.push(Ri(O,F,oe));return se.push(_),_e(se)}).then(()=>{se=Ya(Pe,"beforeRouteUpdate",F,oe);for(const O of Pe)O.updateGuards.forEach(X=>{se.push(Ri(X,F,oe))});return se.push(_),_e(se)}).then(()=>{se=[];for(const O of A)if(O.beforeEnter)if(Nn(O.beforeEnter))for(const X of O.beforeEnter)se.push(Ri(X,F,oe));else se.push(Ri(O.beforeEnter,F,oe));return se.push(_),_e(se)}).then(()=>(F.matched.forEach(O=>O.enterCallbacks={}),se=Ya(A,"beforeRouteEnter",F,oe,b),se.push(_),_e(se))).then(()=>{se=[];for(const O of o.list())se.push(Ri(O,F,oe));return se.push(_),_e(se)}).catch(O=>Kn(O,Ct.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function I(F,oe,se){a.list().forEach(de=>b(()=>de(F,oe,se)))}function B(F,oe,se,de,Pe){const A=S(F,oe);if(A)return A;const _=oe===xi,O=Br?history.state:{};se&&(de||_?r.replace(F.fullPath,dt({scroll:_&&O&&O.scroll},Pe)):r.push(F.fullPath,Pe)),l.value=F,Ee(F,oe,se,_),fe()}let q;function H(){q||(q=r.listen((F,oe,se)=>{if(!ie.listening)return;const de=h(F),Pe=L(de,ie.currentRoute.value);if(Pe){P(dt(Pe,{replace:!0,force:!0}),de).catch(Ds);return}c=de;const A=l.value;Br&&B_(Sd(A.fullPath,se.delta),wa()),E(de,A).catch(_=>Kn(_,Ct.NAVIGATION_ABORTED|Ct.NAVIGATION_CANCELLED)?_:Kn(_,Ct.NAVIGATION_GUARD_REDIRECT)?(P(dt(w(_.to),{force:!0}),de).then(O=>{Kn(O,Ct.NAVIGATION_ABORTED|Ct.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===Wl.pop&&r.go(-1,!1)}).catch(Ds),Promise.reject()):(se.delta&&r.go(-se.delta,!1),U(_,de,A))).then(_=>{_=_||B(de,A,!1),_&&(se.delta&&!Kn(_,Ct.NAVIGATION_CANCELLED)?r.go(-se.delta,!1):se.type===Wl.pop&&Kn(_,Ct.NAVIGATION_ABORTED|Ct.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),I(de,A,_)}).catch(Ds)}))}let j=hs(),$=hs(),z;function U(F,oe,se){fe(F);const de=$.list();return de.length?de.forEach(Pe=>Pe(F,oe,se)):console.error(F),Promise.reject(F)}function ne(){return z&&l.value!==xi?Promise.resolve():new Promise((F,oe)=>{j.add([F,oe])})}function fe(F){return z||(z=!F,H(),j.list().forEach(([oe,se])=>F?se(F):oe()),j.reset()),F}function Ee(F,oe,se,de){const{scrollBehavior:Pe}=t;if(!Br||!Pe)return Promise.resolve();const A=!se&&z_(Sd(F.fullPath,0))||(de||!se)&&history.state&&history.state.scroll||null;return Kc().then(()=>Pe(F,oe,A)).then(_=>_&&k_(_)).catch(_=>U(_,F,oe))}const Me=F=>r.go(F);let Qe;const We=new Set,ie={currentRoute:l,listening:!0,addRoute:p,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:x,resolve:h,options:t,push:y,replace:D,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:$.add,isReady:ne,install(F){F.component("RouterLink",p0),F.component("RouterView",_0),F.config.globalProperties.$router=ie,Object.defineProperty(F.config.globalProperties,"$route",{enumerable:!0,get:()=>Pt(l)}),Br&&!Qe&&l.value===xi&&(Qe=!0,y(r.location).catch(de=>{}));const oe={};for(const de in xi)Object.defineProperty(oe,de,{get:()=>l.value[de],enumerable:!0});F.provide(Aa,ie),F.provide(cu,hh(oe)),F.provide(ql,l);const se=F.unmount;We.add(F),F.unmount=function(){We.delete(F),We.size<1&&(c=xi,q&&q(),q=null,l.value=xi,Qe=!1,z=!1),se()}}};function _e(F){return F.reduce((oe,se)=>oe.then(()=>b(se)),Promise.resolve())}return ie}function uu(){return Mn(Aa)}function b0(t){return Mn(cu)}const ja="livefit.player";function y0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const Pp=xp("player",{state:()=>({name:""}),actions:{loadFromStorage(){const t=y0(localStorage.getItem(ja));t?.name&&(this.name=t.name)},setName(t){this.name=t.trim(),localStorage.setItem(ja,JSON.stringify({name:this.name}))},clear(){this.name="",localStorage.removeItem(ja)}}}),et={bad:{type:"bad",chapterId:101,icon:"💀",title:"過勞",description:"壞結局 - 燃燒殆盡",color:"rose"},normal:{type:"normal",chapterId:102,icon:"🌑",title:"封印",description:"普通結局 - 穩健前行",color:"sky"},true:{type:"true",chapterId:103,icon:"🌟",title:"覺醒",description:"完美結局 - 破繭而出",color:"emerald"},hidden:{type:"hidden",chapterId:103,icon:"🔮",title:"傳承",description:"彩蛋結局 - 傳承之路",color:"amber"}};function Fd(t){return et[t].chapterId}const Od="livefit.progress",kd={ending_bad:{icon:et.bad.icon,title:et.bad.title,description:et.bad.description},ending_normal:{icon:et.normal.icon,title:et.normal.title,description:et.normal.description},ending_true:{icon:et.true.icon,title:et.true.title,description:et.true.description},ending_hidden:{icon:et.hidden.icon,title:et.hidden.title,description:et.hidden.description}};function E0(t){if(!t)return null;try{return JSON.parse(t)}catch{return null}}const Ip=xp("progress",{state:()=>({currentChapter:1,chapterNodeIndices:{1:0},completedChapters:[],quizScores:{},hasDay7Item:!1,achievements:[]}),getters:{getNodeIndex:t=>e=>t.chapterNodeIndices[e]??0,chapter1NodeIndex:t=>t.chapterNodeIndices[1]??0,getQuizScore:t=>e=>t.quizScores[e]??null,endingScore:t=>{const e=[4,5,6,7,8,9,10],n=[];for(const i of e){const r=t.quizScores[i];r&&r.total>0&&n.push(r.correct/r.total*100)}return n.length===0?0:Math.round(n.reduce((i,r)=>i+r,0)/n.length)},hasAchievement:t=>e=>t.achievements.includes(e),allAchievements:t=>["ending_bad","ending_normal","ending_true","ending_hidden"].map(n=>({id:n,...kd[n],unlocked:t.achievements.includes(n)})),unlockedCount:t=>t.achievements.length,totalAchievements:()=>Object.keys(kd).length,isChapterCompleted:t=>e=>t.completedChapters.includes(e),endingType:t=>{const e=[4,5,6,7,8,9,10],n=[];for(const s of e){const o=t.quizScores[s];o&&o.total>0&&n.push(o.correct/o.total*100)}if(n.length===0)return"bad";const i=Math.round(n.reduce((s,o)=>s+o,0)/n.length);return n.every(s=>s===100)&&n.length===7&&t.hasDay7Item?"hidden":i===100?"true":i>=85?"normal":"bad"}},actions:{loadFromStorage(){const t=E0(localStorage.getItem(Od));if(t){if(typeof t.currentChapter=="number"&&(this.currentChapter=t.currentChapter),t.chapterNodeIndices&&(this.chapterNodeIndices=t.chapterNodeIndices),t.quizScores){for(const e in t.quizScores){const n=t.quizScores[e];n&&typeof n.percentage!="number"&&(n.percentage=n.total>0?Math.round(n.correct/n.total*100):0)}this.quizScores=t.quizScores}if(typeof t.hasDay7Item=="boolean"&&(this.hasDay7Item=t.hasDay7Item),Array.isArray(t.achievements)&&(this.achievements=t.achievements),Array.isArray(t.completedChapters))this.completedChapters=t.completedChapters;else{this.completedChapters=[];for(let e=1;e<this.currentChapter&&e<=10;e++)this.completedChapters.push(e)}"chapter1NodeIndex"in t&&typeof t.chapter1NodeIndex=="number"&&(this.chapterNodeIndices[1]=t.chapter1NodeIndex)}},setNodeIndex(t,e){this.chapterNodeIndices[t]=e,this._save()},setChapter1NodeIndex(t){this.setNodeIndex(1,t)},setCurrentChapter(t){this.currentChapter=t,t in this.chapterNodeIndices||(this.chapterNodeIndices[t]=0),this._save()},completeChapter(t){if(this.completedChapters.includes(t)||this.completedChapters.push(t),t===4)for(const n of[1,2,3])this.completedChapters.includes(n)||this.completedChapters.push(n);const e=t+1;this.currentChapter=e,e in this.chapterNodeIndices||(this.chapterNodeIndices[e]=0),this._save()},saveQuizScore(t,e,n){const i=n>0?Math.round(e/n*100):0;this.quizScores[t]={correct:e,total:n,percentage:i},this._save()},setDay7Item(t){this.hasDay7Item=t,this._save()},unlockEndingAchievement(t){const n={bad:"ending_bad",normal:"ending_normal",true:"ending_true",hidden:"ending_hidden"}[t];this.achievements.includes(n)||(this.achievements.push(n),this._save())},reset(){this.currentChapter=1,this.chapterNodeIndices={1:0},this.completedChapters=[],this.quizScores={},this.hasDay7Item=!1,this._save()},resetAll(){this.currentChapter=1,this.chapterNodeIndices={1:0},this.completedChapters=[],this.quizScores={},this.hasDay7Item=!1,this.achievements=[],this._save()},_save(){localStorage.setItem(Od,JSON.stringify({currentChapter:this.currentChapter,chapterNodeIndices:this.chapterNodeIndices,completedChapters:this.completedChapters,quizScores:this.quizScores,hasDay7Item:this.hasDay7Item,achievements:this.achievements}))}}}),S0=[{type:"dialogue",speaker:"海克絲",text:"早安，歡迎加入 LiveFit。我是海克絲，這間健身房的老闆。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/Pde0vddrRmCAwuTNgv6Hig?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別那麼拘謹，先把這部厚重的筆電放下吧。來，肩膀放鬆，我們聊聊天。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我、我已經準備好要寫 Code 了！請問我現在該做什麼？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(遞過一杯溫水) 聽著，你的黑眼圈都快掉到下巴了。我請你來，是為了寫長久能跑的系統，不是要你的肝。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(示意你喝水) 電腦先別開，我們談談這份工作的由來吧。",scene:"normal",coachExpression:"normal"},{type:"inputName",prompt:"對了，我該怎麼稱呼你呢？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"目前五間實體店已經穩定了，但我希望能讓更多人隨時運動，所以要開發「LiveFit」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這是一個線上直播小班制平台。會員買堂數、預約課程，時間到了就進場上課。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"買堂數... 預約... 好的！這聽起來是典型的 CRUD 加上金流控制...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(內心：天啊，萬一我把金流寫錯，老闆會不會叫我捲舖蓋走人？)",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕拍你的肩膀) 別急，前任留下的程式碼有點亂，像是一盤沒收好的槓鈴。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這個月的目標很簡單：在你的電腦裡，把這些商業邏輯理清楚就好。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(從抽屜拿出文件) 這些是當初開發平台前的「使用者故事」跟「線稿圖」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那個... 海姐，不好意思。妳說的「使用者故事」還有「線稿圖」是什麼意思？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張，我解釋給你聽。使用者故事（User Story）其實就是從使用者的角度出發，描述他們「想做什麼」以及「為什麼要做」的清單。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我們通常會用一個簡單的公式來寫：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這樣做是為了讓我們在開發前，先確認這項功能真的對使用者有價值。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(將一份文件推到你面前) 來看這份 LiveFit 的初稿，裡面分成了幾種角色。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:`訪客：「我想瀏覽教練列表，以便於了解有哪些專長的教練適合我。」
會員：「我想購買堂數方案，以便於取得堂數來報名喜歡的課程。」
教練：「我想建立課程，以便於讓學員可以預約我的直播時段。」
管理員：「我想把一般使用者升級為教練，以便於擴張平台的教學師資。」`,scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到這裡面的邏輯了嗎？每個功能背後有一個清楚的目標。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"至於線稿圖（Wireframe），就像設計草圖，告訴我們按鈕放哪、按下去會跳到哪。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕) 把它們當作是健身前的「目標設定」跟「動作圖解」就好，沒那麼複雜。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此... 不過海姐，我感覺這個平台上，教練跟學生的互動好像很頻繁？整體的互動流程輪廓大概長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！你已經開始思考系統的全貌了。剛好我最近畫了一張「履約流程」的泳道圖，這張圖能讓你更清楚看到不同角色在同一個流程裡分別做了什麼。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這就是我們所謂的「泳道圖」。你看，每一條跑道代表一個角色（學生、教練、系統），這樣誰該在什麼時候做什麼事，就一清二楚了。",scene:"normal",coachExpression:"normal",image:"/images/content/swimlane.png"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得嚴肅但專注) 好了，先別急著開電腦。你今天一整天的工作只有一個。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"就是把這份文件徹底讀熟：LiveFit 規格書。請點擊此連結：https://hackmd.io/tGMiTeEJSVamCd46KaMrew?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"針對我們剛剛提到的泳道圖、線稿圖以及使用者故事，去更深入瞭解這個平台的商業邏輯。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你要記住，如果太快開始寫程式，反倒會寫出很多 Bug 的。開發之前，一定要問清楚才能進行開發。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"(眼神變得銳利) 看完之後，就來接受我的考試吧。",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"海克絲的入職測驗",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"海克絲提到「使用者故事 (User Story)」的標準公式是什麼？",options:[{id:"a",label:"身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]"},{id:"b",label:"在 [什麼時間]，系統應該 [執行什麼功能]，並且 [顯示什麼結果]"},{id:"c",label:"如果 [發生錯誤]，系統需要 [跳出警告]，以便於 [通知管理員]"}],correctOptionId:"a",explanation:"使用者故事的標準公式是：「身為 [某種角色]，我想要 [做某件事]，以便於 [得到什麼好處]」，這樣可以清楚描述功能的目標與價值。"},{id:"q2",prompt:"海克絲用什麼比喻來形容「線稿圖 (Wireframe)」？",options:[{id:"a",label:"它是用來檢查程式碼錯誤的除錯工具"},{id:"b",label:"它是健身前的「目標設定」跟「動作圖解」，用來確認按鈕放哪、按下去會跳到哪"},{id:"c",label:"它是最後的裝潢，決定系統好不好看"}],correctOptionId:"b",explanation:"海克絲說線稿圖就像健身前的「目標設定」跟「動作圖解」，讓我們在開發前有個共識。"},{id:"q3",prompt:"為什麼海克絲建議在寫程式之前要先畫「線稿圖」？",options:[{id:"a",label:"為了讓介面看起來很漂亮，吸引投資人"},{id:"b",label:"為了測試程式碼的效能是否足夠"},{id:"c",label:"為了在開發前與團隊有共識，確保大家想的畫面是一樣的"}],correctOptionId:"c",explanation:"線稿圖是為了在開發前與團隊對齊認知，確保大家想的畫面是一樣的，避免做白工。"},{id:"q4",prompt:"「泳道圖 (Swimlane Diagram)」最主要的功能是什麼？",options:[{id:"a",label:"用來計算教練游泳的速度與距離"},{id:"b",label:"展示系統資料庫的關聯架構 (ER Model)"},{id:"c",label:"釐清不同角色（如學生、教練、系統）在同一個流程中分別做了什麼"}],correctOptionId:"c",explanation:"泳道圖的每一條跑道代表一個角色，可以清楚看到誰該在什麼時候做什麼事。"},{id:"q5",prompt:"海克絲認為如果不先釐清商業邏輯就太快開始寫程式，會發生什麼事？",options:[{id:"a",label:"會提早完成工作，可以準時下班"},{id:"b",label:"會寫出很多 Bug，甚至做白工"},{id:"c",label:"電腦會因為運算過度而過熱"}],correctOptionId:"b",explanation:"海克絲警告：如果太快開始寫程式，反倒會寫出很多 Bug。開發之前，一定要問清楚才能進行開發。"},{id:"q6",prompt:"線稿圖通常不包含下列哪項元素？",options:[{id:"a",label:"頁面佈局與按鈕位置"},{id:"b",label:"完整的視覺設計與高解析度圖片"},{id:"c",label:"基本的操作流程與連結"}],correctOptionId:"b",explanation:"線稿圖是用簡單的線條跟框框畫出介面，不包含完整的視覺設計與高解析度圖片。"},{id:"q7",prompt:"在閱讀泳道圖時，每一條「跑道」通常代表什麼？",options:[{id:"a",label:"不同的時間點"},{id:"b",label:"不同的參與角色或系統"},{id:"c",label:"不同的資料庫欄位"}],correctOptionId:"b",explanation:"泳道圖的每一條跑道代表一個參與角色（如學生、教練、系統）。"},{id:"q8",prompt:"根據 LiveFit 的角色權限設計，一位普通的「使用者 (User)」要如何才能變成「教練 (Coach)」並開始開課？",options:[{id:"a",label:"在註冊頁面直接勾選「我是教練」即可"},{id:"b",label:"必須付費購買「教練資格方案」"},{id:"c",label:"需要由「管理員 (Admin)」在後台將其升級為教練"}],correctOptionId:"c",explanation:"根據使用者故事，管理員負責「把一般使用者升級為教練」。"},{id:"q9",prompt:"在 LiveFit 平台中，會員想要「報名課程」，必須透過什麼方式？",options:[{id:"a",label:"直接刷信用卡支付單堂費用"},{id:"b",label:"使用已購買的「堂數」來進行報名"},{id:"c",label:"現場付現金給教練"}],correctOptionId:"b",explanation:"會員需要先購買堂數方案，再使用堂數來報名課程。"},{id:"q10",prompt:"關於「教練 (Coach)」的功能需求，下列哪一項敘述是正確的？",options:[{id:"a",label:"教練可以隨意刪除學員的帳號"},{id:"b",label:"教練可以查看月營收統計，了解指定月份的營收與學員參與概況"},{id:"c",label:"教練不能修改自己開設課程的時間或人數上限"}],correctOptionId:"b",explanation:"根據教練的使用者故事，教練可以查看月營收統計。"},{id:"q11",prompt:"根據使用者故事，未登入的「訪客」無法執行下列哪項動作？",options:[{id:"a",label:"瀏覽目前可參加的課程"},{id:"b",label:"查看教練的詳細介紹與專長"},{id:"c",label:"報名課程"}],correctOptionId:"c",explanation:"訪客可以瀏覽課程和教練資訊，但必須登入成為會員才能報名課程。"},{id:"q12",prompt:"「管理員 (Admin)」在系統中扮演維護營運的角色，下列哪項是他們的主要工作？",options:[{id:"a",label:"幫會員修改密碼與個人頭像"},{id:"b",label:"管理技能清單與堂數方案的設定"},{id:"c",label:"代替教練進行直播授課"}],correctOptionId:"b",explanation:"管理員負責管理技能清單與堂數方案的設定，以及將使用者升級為教練。"},{id:"q13",prompt:"會員在 LiveFit 平台想要「修改個人資料」，目前支援修改哪些欄位？",options:[{id:"a",label:"只能修改姓名"},{id:"b",label:"可以修改姓名與 Email"},{id:"c",label:"可以修改姓名、Email 與已購買的堂數"}],correctOptionId:"a",explanation:"根據使用者故事，會員修改個人資料只有提到「更新自己的姓名」。"},{id:"q14",prompt:"如果教練想要讓學員更容易找到自己，他可以使用什麼功能？",options:[{id:"a",label:"購買首頁廣告"},{id:"b",label:"設定自己的專長技能"},{id:"c",label:"寄送垃圾郵件給所有會員"}],correctOptionId:"b",explanation:"教練可以設定自己的專長技能，讓學員在搜尋時更容易找到。"},{id:"q15",prompt:"當會員想要調整行程時，關於「取消課程」的敘述何者正確？",options:[{id:"a",label:"只要取消就能退回現金"},{id:"b",label:"取消課程後會釋出名額，並應退還/調整堂數（依照詳細規則）"},{id:"c",label:"報名後絕對無法取消"}],correctOptionId:"b",explanation:"取消課程後會釋出名額，堂數會依照規則退還或調整。"},{id:"q16",prompt:"教練在「編輯課程」時，可以調整哪些資訊？",options:[{id:"a",label:"只能調整課程名稱"},{id:"b",label:"課程內容、時間、人數上限、會議連結"},{id:"c",label:"學員的個人資料"}],correctOptionId:"b",explanation:"教練可以編輯課程的內容、時間、人數上限、會議連結等資訊。"},{id:"q17",prompt:"LiveFit 平台的核心營運模式是什麼？",options:[{id:"a",label:"線下健身房的門禁管理系統"},{id:"b",label:"線上直播小班制健身平台"},{id:"c",label:"預錄影片的隨選視訊服務"}],correctOptionId:"b",explanation:"LiveFit 是一個線上直播小班制平台，會員買堂數、預約課程，時間到了就進場上課。"},{id:"q18",prompt:"根據使用者故事，會員如果想了解自己過去買了哪些方案與購買時間，可以使用什麼功能？",options:[{id:"a",label:"查看教練詳情"},{id:"b",label:"在訂單頁面查看我的堂數購買紀錄"},{id:"c",label:"修改個人資料"}],correctOptionId:"b",explanation:"會員可以透過「訂單頁面」來查看過去的堂數購買紀錄。"},{id:"q19",prompt:"當教練想要掌握自己開設的課程目前的狀態（如：是否已滿額、報名人數），他應該查看什麼？",options:[{id:"a",label:"在課程管理查看"},{id:"b",label:"月營收統計"},{id:"c",label:"技能清單"}],correctOptionId:"a",explanation:"教練透過「課程管理」可以查看課程狀態與報名人數。"},{id:"q20",prompt:"若平台決定推出全新的「夏季特惠堂數方案」，在系統中應該由誰來負責新增這個方案？",options:[{id:"a",label:"資深教練"},{id:"b",label:"系統管理員 (Admin)"},{id:"c",label:"任何註冊會員"}],correctOptionId:"b",explanation:"管理員負責管理堂數方案，包括新增、修改方案設定。"}]},{type:"dialogue",speaker:"海克絲",text:"很好，看來你對 LiveFit 的商業邏輯已經有基本的了解了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，寫程式之前先搞懂需求，這是最重要的事。明天我們再繼續。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天就先到這裡吧。回家好好休息，別熬夜。",scene:"normal",coachExpression:"normal"},{type:"celebration",chapterTitle:"第一天：報到日",scene:"normal",coachExpression:"normal"}],M0={id:1,title:"第一天：報到日",nodes:S0},T0=[{type:"dialogue",speaker:"海克絲",text:"早安！看起來精神不錯嘛，昨天有好好休息吧？",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/1H8XMmxXSXOGmvL2L70pwQ?view",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"早安海姐！我昨天回去又把規格書看了一遍，感覺更清楚了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"很好，有這個態度我就放心了。今天我們要正式進入開發環境了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"太好了！我已經準備好要寫程式了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 別急，在你動手寫任何一行程式之前，你得先學會一件事——如何把程式碼「拿到手」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"拿到手？不就是下載嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發的世界裡，我們用的是 Git 和 GitHub。這是每個工程師的必備技能。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"先來認識 Git 吧。Git 是一個「版本控制系統」，就像是程式碼的時光機。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"版本控制？像是報告_v1、報告_v2、報告_最終版那樣嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！Git 就是幫你自動管理這些版本，而且更聰明、更有條理。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 可以記錄每一次的修改歷史、讓你隨時回到過去的版本、也能讓多人同時協作開發。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"說再多不如動手做！來，海姐帶你進互動實驗室，親手體驗一下 Git 的魔力。",scene:"meeting",coachExpression:"praise"},{type:"interactiveSlide",slideId:"git-intro",title:"Git 互動實驗室",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 Git 是這樣運作的，我懂了！",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 不錯嘛，有了這個基礎，接下來的概念對你來說就是小菜一碟了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那 GitHub 呢？它是一個「程式碼託管平台」，你可以把它想成程式碼的雲端硬碟。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以 Git 是工具，GitHub 是平台？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Git 裝在你的電腦上負責版本控制，GitHub 在網路上負責儲存和分享程式碼。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"接下來要介紹一個重要的操作：Clone。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Clone（克隆）就是把 GitHub 上的專案「下載到你的電腦」。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"就像把雲端上的檔案抓到本地嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！Clone 之後，你的電腦裡就會有一份完整的專案程式碼，可以開始修改和開發。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，現在讓我把 LiveFit 的專案連結給你⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等等，這⋯⋯什麼？！",scene:"meeting",coachExpression:"shocked"},{type:"dialogue",speaker:"海克絲",text:"這個專案竟然是 Public 的？！",scene:"meeting",coachExpression:"shocked",image:"/images/content/private-git.png"},{type:"dialogue",speaker:"你",text:"Public？那是什麼意思？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"Public 就是「公開」的意思。全世界任何人都可以看到這個專案的程式碼！",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"後端專案通常會設成 Private（私人），因為裡面可能有資料庫連線、API 金鑰等敏感資訊⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"前任後端⋯⋯竟然把專案完全公開在網路上⋯⋯",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"這樣很危險嗎？",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"非常危險！如果程式碼有漏洞，駭客就能直接研究怎麼攻擊我們的系統。",scene:"meeting",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 算了，這就是我們接手的現況。之後記得幫我把敏感資訊處理好。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"現在先專心把專案抓下來吧，其他的之後再處理。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"好，理論講完了。來接受我的小考吧！",scene:"meeting",coachExpression:"normal"},{type:"quiz",title:"Git 與 GitHub 小考",scene:"meeting",coachExpression:"praise",questions:[{id:"g1",prompt:"Git 是什麼類型的工具？",options:[{id:"a",label:"版本控制系統"},{id:"b",label:"程式編輯器"},{id:"c",label:"雲端儲存平台"}],correctOptionId:"a",explanation:"Git 是一個版本控制系統，用來追蹤程式碼的修改歷史。"},{id:"g2",prompt:"GitHub 與 Git 的關係是什麼？",options:[{id:"a",label:"GitHub 是 Git 的付費版本"},{id:"b",label:"Git 是版本控制工具，GitHub 是託管平台"},{id:"c",label:"Git 和 GitHub 是同一個東西的不同名稱"}],correctOptionId:"b",explanation:"Git 是安裝在電腦上的版本控制工具，GitHub 是在網路上的程式碼託管平台。"},{id:"g3",prompt:"Clone 的作用是什麼？",options:[{id:"a",label:"把 GitHub 上的專案下載到本地電腦"},{id:"b",label:"把專案上傳到 GitHub"},{id:"c",label:"建立新的分支"}],correctOptionId:"a",explanation:"Clone 是把 GitHub 上的專案下載到你的本地電腦。"},{id:"g4",prompt:"Git 可以做到以下哪件事？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"記錄每一次的修改歷史，讓你可以回到過去的版本"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Git 可以記錄每一次的修改歷史，讓你隨時回到過去的版本。"},{id:"g5",prompt:"GitHub 上的 Public 專案代表什麼？",options:[{id:"a",label:"只有團隊成員可以看到"},{id:"b",label:"任何人都可以看到這個專案的程式碼"},{id:"c",label:"專案已經被刪除"}],correctOptionId:"b",explanation:"Public（公開）代表任何人都可以在網路上看到這個專案的程式碼。"},{id:"g6",prompt:"為什麼後端專案通常會設成 Private？",options:[{id:"a",label:"因為程式碼很醜不想被看到"},{id:"b",label:"避免程式碼漏洞被駭客研究、找到攻擊方式"},{id:"c",label:"因為 GitHub 強制要求"}],correctOptionId:"b",explanation:"後端專案設成 Private 可以避免程式碼被公開，減少駭客研究漏洞、找到攻擊方式的風險。"},{id:"g7",prompt:"Clone 完成後，專案會出現在哪裡？",options:[{id:"a",label:"你的 GitHub 帳號上"},{id:"b",label:"你的本機電腦上"},{id:"c",label:"雲端伺服器上"}],correctOptionId:"b",explanation:"Clone 會把專案下載到你的本機電腦上，讓你可以開始開發。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！看來你已經掌握 Git 和 GitHub 的基本概念了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"Git 和 GitHub 是工程師的基本功，就像廚師要會用刀一樣。用久了就會變成直覺。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我會好好練習的！那接下來呢？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"今天先把專案拿到手，明天我們再來把它跑起來！記得好好休息。",scene:"meeting",coachExpression:"normal"},{type:"celebration",chapterTitle:"第二天：把程式碼拿到手",scene:"meeting",coachExpression:"normal"}],w0={id:2,title:"第二天：把程式碼拿到手",nodes:T0},A0=[{type:"dialogue",speaker:"海克絲",text:"早安！今天有個緊急狀況要跟你說。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/PvcRJaaVSpqf4nyGfdg9Ag?view",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"怎麼了？發生什麼事？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我的合夥人剛傳訊息來，說她這週想看看專案目前的進度。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"她不是工程師，但很在意產品能不能「跑起來」給她看。",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"所以⋯⋯我們要把專案跑起來給她看？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！但在那之前，我想先考考你⋯⋯",scene:"sport",coachExpression:"normal"},{type:"choice",prompt:"你猜猜看，一個後端工程師剛進入新公司，最常見要做的第一件事是什麼？",options:[{id:"a",label:"馬上開始寫新功能",response:"(捧腹大笑) 哈哈哈！太急了！你連專案長什麼樣子都不知道，怎麼寫新功能呢？",responseExpression:"biglaugh",isCorrect:!1},{id:"b",label:"把專案 Clone 下來，跑在自己的電腦上",response:"答對了！這才是正確的第一步。你得先把專案跑起來，才能開始理解它、修改它。",responseExpression:"praise",isCorrect:!0},{id:"c",label:"直接看程式碼找 Bug",response:"(忍不住笑出來) 哈哈，想法不錯，但你連專案都還沒跑起來，怎麼知道哪裡有 Bug？先讓它動起來才是王道。",responseExpression:"biglaugh",isCorrect:!1},{id:"d",label:"先去跟同事聊天認識環境",response:"(噗哧一笑) 社交很重要沒錯！但工程師的第一要務還是要先把開發環境搞定，才能真正開始工作啊。",responseExpression:"biglaugh",isCorrect:!1}],scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，既然要把專案跑起來，你得先搞懂這個專案到底是怎麼組成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"一個完整的系統通常有三大部分：前端、後端、還有資料庫。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"前端？後端？這三個有什麼不同？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用電商網站來比喻。前端就像是網頁商城的頁面，商品展示、購物車、結帳畫面，是使用者看得到的部分。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"後端就像是訂單處理中心，使用者看不到，但所有的訂單處理、庫存檢查、付款驗證都是在這裡完成的。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"資料庫就像是商品倉庫，存放所有的會員資料、訂單紀錄、商品庫存。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此！所以前端負責畫面，後端負責處理邏輯，資料庫負責存資料？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！你理解得很快嘛。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"來，我用互動的方式讓你更清楚這三層架構是怎麼運作的！",scene:"sport",coachExpression:"normal"},{type:"interactiveSlide",slideId:"architecture-intro",title:"系統架構入門",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在對前端、後端、資料庫的分工應該很清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"我們的 LiveFit 專案呢，前端用 Vue.js 寫的，後端是 Node.js，資料庫用 PostgreSQL。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"這麼多東西，要怎麼在我的電腦上跑起來？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好問題！這就要講到一個神奇的工具——Docker。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在軟體開發中，最常見的問題就是：「在我的電腦上可以跑啊！為什麼換一台電腦就壞掉了？」",scene:"sport",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"聽起來很麻煩⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Docker 就是來解決這個問題的！它可以把整個執行環境打包成一個「容器」。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"想像你要搬家，與其把東西一件一件搬，不如把整個房間打包成一個貨櫃。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"不管搬到哪裡，打開貨櫃就是一模一樣的環境！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"哦！所以 Docker 就像是幫程式打包好的貨櫃？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！而且前任後端雖然把專案搞得一團糟，但至少有一件事做對了⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他用 Docker 把整個環境打包好了。只要你安裝 Docker，一個指令就能把三個服務全部跑起來！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"三個服務？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對，前端、後端、資料庫，各自跑在一個容器裡，但可以互相溝通。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"來，我帶你用互動的方式理解 Docker 的運作原理！",scene:"sport",coachExpression:"praise"},{type:"interactiveSlide",slideId:"docker-intro",title:"Docker 互動實驗室",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在應該對 Docker 和容器的概念更清楚了吧！",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我很久以前就想問了⋯⋯海姐，你不是健身房老闆嗎？為什麼感覺懂得比我還多？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 哈，終於問了啊。",scene:"sport",coachExpression:"blush"},{type:"dialogue",speaker:"海克絲",text:"其實我以前是工程師，還當過全端技術主管呢。寫了快十年的 Code。",scene:"sport",coachExpression:"proud"},{type:"dialogue",speaker:"你",text:"什麼！？那為什麼會轉行開健身房？",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實我以前重訓也當過瑜伽老師，後來想說來挑戰看看，把兩個專業結合起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"工程師的經驗讓我知道怎麼設計系統，健身教練的經驗讓我知道怎麼照顧人。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"所以就開了這間健身房，想做一個真正能幫助人的運動媒合平台。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來是這樣⋯⋯難怪你講這些技術東西這麼順。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(輕笑) 所以啊，你要是敢給我爆肝加班，我可是會直接把你從電腦前拖走的喔。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"好、好的！我會注意的⋯⋯",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，基本概念講完了。來驗收一下你學到了多少！",scene:"sport",coachExpression:"normal"},{type:"quiz",title:"前後端與 Docker 小考",scene:"sport",coachExpression:"praise",questions:[{id:"d1",prompt:"前端的主要職責是什麼？",options:[{id:"a",label:"使用者看到的畫面，負責互動與呈現"},{id:"b",label:"處理商業邏輯和資料運算"},{id:"c",label:"儲存所有的資料"}],correctOptionId:"a",explanation:"前端負責使用者看到的畫面，處理互動與呈現。"},{id:"d2",prompt:"後端的主要職責是什麼？",options:[{id:"a",label:"設計漂亮的使用者介面"},{id:"b",label:"處理商業邏輯，決定要做什麼、怎麼做"},{id:"c",label:"備份資料到雲端"}],correctOptionId:"b",explanation:"後端負責處理商業邏輯，是系統的大腦。"},{id:"d3",prompt:"資料庫的主要職責是什麼？",options:[{id:"a",label:"執行程式碼"},{id:"b",label:"顯示網頁"},{id:"c",label:"儲存所有資料（會員、訂單、商品等）"}],correctOptionId:"c",explanation:"資料庫負責儲存所有資料，像是倉庫一樣。"},{id:"d4",prompt:"使用者點擊「購買課程」後，系統的處理順序是什麼？",options:[{id:"a",label:"前端 → 後端 → 資料庫 → 後端 → 前端"},{id:"b",label:"資料庫 → 後端 → 前端"},{id:"c",label:"前端 → 資料庫 → 後端"}],correctOptionId:"a",explanation:"使用者操作前端，前端向後端發請求，後端存取資料庫，再回傳結果給前端顯示。"},{id:"d5",prompt:"Docker 主要解決什麼問題？",options:[{id:"a",label:"讓程式碼執行得更快"},{id:"b",label:"解決「在我的電腦可以跑，換台電腦就壞掉」的環境問題"},{id:"c",label:"自動修復程式碼的 Bug"}],correctOptionId:"b",explanation:"Docker 把執行環境打包起來，讓程式在任何電腦上都能用同樣的方式運行。"},{id:"d6",prompt:"Container（容器）是什麼？",options:[{id:"a",label:"一種程式語言"},{id:"b",label:"Docker 打包出來的執行環境，像是一個貨櫃"},{id:"c",label:"用來存放檔案的資料夾"}],correctOptionId:"b",explanation:"Container 就是 Docker 打包出來的「貨櫃」，裡面包含程式碼和執行環境。"},{id:"d7",prompt:"為什麼這個專案要用 Docker？",options:[{id:"a",label:"因為程式碼太大，需要壓縮"},{id:"b",label:"因為要確保每個人的開發環境一致，避免「在我電腦可以跑」的問題"},{id:"c",label:"因為 Docker 是免費的"}],correctOptionId:"b",explanation:"Docker 把執行環境打包成容器，讓專案在任何電腦上都能用同樣的方式運行，同時也方便管理多個服務。"},{id:"d8",prompt:"LiveFit 專案啟動後會有幾個 Container？",options:[{id:"a",label:"1 個"},{id:"b",label:"2 個"},{id:"c",label:"3 個（前端、後端、資料庫）"}],correctOptionId:"c",explanation:"LiveFit 有三個服務：前端、後端、資料庫，各自跑在一個容器裡。"},{id:"d9",prompt:"前端服務跑在哪個 Port？",options:[{id:"a",label:"localhost:3000"},{id:"b",label:"localhost:8080"},{id:"c",label:"localhost:5432"}],correctOptionId:"a",explanation:"前端服務跑在 Port 3000。"},{id:"d10",prompt:"如何確認後端服務是否正常運作？",options:[{id:"a",label:"打開 localhost:3000 看 CSS 樣式是否正確"},{id:"b",label:"打開 localhost:8080/healthcheck 看是否回傳 OK"},{id:"c",label:"重新啟動電腦"}],correctOptionId:"b",explanation:"後端服務跑在 Port 8080，可以用 /healthcheck 端點確認是否正常。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握前後端和 Docker 的基本概念了。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那接下來就交給你嘍！",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"好的！我會照著教學把 Docker 裝好，然後把專案跑起來。",scene:"sport",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"記得截圖給我看喔！這樣我才能跟合夥人報告進度。",scene:"sport",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"加油，今天結束後你就能親眼看到 LiveFit 在你電腦上運作了！",scene:"sport",coachExpression:"praise"},{type:"celebration",chapterTitle:"第三天：把專案跑起來",scene:"sport",coachExpression:"normal"}],C0={id:3,title:"第三天：把專案跑起來",nodes:A0},R0=[{type:"dialogue",speaker:"海克絲",text:"糟糕！我跟合夥人昨天看網站的時候發現，Logo 忘了改掉！",scene:"meeting",coachExpression:"shocked"},{type:"dialogue",speaker:"旁白",text:"今日任務文件：https://hackmd.io/YAjRRYJhSMqm_eRp0gnHJQ?view",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"忘了改？怎麼說？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你看，現在網站上的 Logo 是「LiveFit+」，但我們目前應該要用「LiveFit」才對。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「+」有什麼差別嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個「+」是要留給之後用的。我們才剛起步，現在應該先叫 LiveFit 就好。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"等之後平台做起來了、會員變多了、功能更完整了，再升級成 LiveFit+。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個「+」代表的是進化版，就像 iPhone 變成 iPhone Plus 一樣。現在就用掉，以後要升級就沒梗了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！所以要把「+」先拿掉，等 2.0 再加回來？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！設計師已經做好正確的 Logo 了，檔名是 logo-text-v2.png，你幫我換上去。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(指著螢幕上的 Logo) 話說，如果我現在要你改這個 Logo，你知道要去哪裡找檔案嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"呃⋯⋯這個專案資料夾這麼多層，Logo 到底放在哪？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 別急，改東西之前，要先搞懂專案的資料夾結構。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"Logo 這種圖片屬於「靜態資源」，不會隨著使用者操作而變動的東西，通常會放在 public/ 資料夾裡。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"等等，什麼是「靜態資源」？那有「動態」的嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的微笑) 問得好！這個觀念很重要，搞懂之後你才知道要去哪裡改東西。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"來，我先說一個災難故事給你聽⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你知道前任後端工程師是怎麼處理教練列表的嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"不知道⋯⋯怎麼做的？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他把所有教練的資料都「寫死」在前端程式碼裡。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"什麼王小明、李小華、50 個教練的名字、照片、專長⋯⋯全部直接寫在 HTML 裡面。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"這樣有什麼問題嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問題可大了！有一天我打電話給他說：「王小明教練離職了，幫我從網站上移除。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他說好，然後打開程式碼，找到那段 HTML，刪掉。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我又說：「對了，李小華要改名叫李大華，順便更新他的照片。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"他說好⋯⋯繼續改程式碼。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"我又說：「還有，我們新簽了 10 個教練，資料 Email 給你了。」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"然後他就崩潰了。",scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"(冒冷汗) 我好像知道問題在哪了⋯⋯",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"沒錯！每次教練資料變動，都要改程式碼、重新部署網站。萬一改錯，網站就爆炸了。",scene:"meeting",coachExpression:"normal"},{type:"choice",prompt:"你覺得教練資料應該放在哪裡比較好？",options:[{id:"a",label:"繼續寫死在 HTML 裡",response:"(搖頭) 這樣每次資料變動都要改程式碼，太沒效率了，而且容易出錯。",responseExpression:"sigh",isCorrect:!1},{id:"b",label:"放在資料庫，透過 API 取得",response:"(拍手) 答對了！把資料存在資料庫，需要的時候透過 API 取得，這樣改資料就不用動到程式碼了。",responseExpression:"praise",isCorrect:!0},{id:"c",label:"寫在 CSS 檔案裡",response:"(忍不住笑) CSS 是用來設定樣式的，不是存資料的地方啦！",responseExpression:"biglaugh",isCorrect:!1},{id:"d",label:"放在 public/ 資料夾",response:"public/ 資料夾是放「靜態資源」的，像是圖片、Logo。教練資料會經常變動，不適合放這裡。",responseExpression:"normal",isCorrect:!1}],scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"你剛剛提到的「靜態」和「動態」，這是很重要的觀念。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用簡報解釋給你聽。",scene:"meeting",coachExpression:"normal"},{type:"interactiveSlide",slideId:"static-dynamic",title:"靜態 vs 動態 互動實驗室",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？現在知道靜態和動態的差別了吧！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！Logo 是靜態的，去 public/ 找；教練資料是動態的，要去資料庫改。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 完全正確！你學得很快嘛。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"等等，那像是教練自己要新增課程的話呢？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"教練登入自己帳號，就可以用介面新增課程，不用勞煩工程師改程式碼嘍？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的微笑) 沒錯！這就是動態資料的好處。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"讓我透過示範給你看，教練是怎麼透過網頁新增課程的。",scene:"meeting",coachExpression:"normal"},{type:"interactiveSlide",slideId:"coach-backend",title:"教練後台：新增課程流程",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"看到了嗎？教練自己操作介面，資料就存進資料庫了。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"使用者刷新網頁，就能看到最新的課程列表。完全不需要工程師介入！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！這就是為什麼動態資料要存在資料庫的原因。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那我再考考你幾個問題，確認你真的懂了。",scene:"meeting",coachExpression:"normal"},{type:"quiz",title:"靜態資源 vs 動態資料 小考",scene:"meeting",coachExpression:"praise",questions:[{id:"q1",prompt:"如果把所有教練資料「寫死」在前端程式碼裡，會發生什麼問題？",options:[{id:"a",label:"網站跑得比較快"},{id:"b",label:"每次教練資料變動都要改程式碼並重新部署"},{id:"c",label:"教練可以自己修改資料"}],correctOptionId:"b",explanation:"寫死的資料每次變動都需要改程式碼並重新部署，非常沒效率，而且容易出錯。"},{id:"q2",prompt:"為什麼教練資料不適合當作「靜態資源」？",options:[{id:"a",label:"因為教練資料太大"},{id:"b",label:"因為教練資料會經常變動（新增、修改、刪除）"},{id:"c",label:"因為靜態資源比較貴"}],correctOptionId:"b",explanation:"教練會離職、新進、改名、換照片，資料經常變動，所以應該存在資料庫。"},{id:"q3",prompt:"以下哪個屬於「靜態資源」？",options:[{id:"a",label:"會員的個人資料"},{id:"b",label:"網站的 Logo 圖片"},{id:"c",label:"課程的預約紀錄"}],correctOptionId:"b",explanation:"Logo 幾乎不會變動，屬於靜態資源。會員資料和預約紀錄會經常變動，是動態資料。"},{id:"q4",prompt:"以下哪個屬於「動態資料」？",options:[{id:"a",label:"網站的背景圖片"},{id:"b",label:"網站的 favicon 小圖示"},{id:"c",label:"教練列表"}],correctOptionId:"c",explanation:"教練列表會隨著教練新增或離職而變動，是動態資料，應該存在資料庫。"},{id:"q5",prompt:"靜態資源通常放在專案的哪個資料夾？",options:[{id:"a",label:"src/pages/"},{id:"b",label:"public/ 或 src/assets/"},{id:"c",label:"node_modules/"}],correctOptionId:"b",explanation:"靜態資源通常放在 public/（不會被編譯）或 src/assets/（會被編譯處理）。"},{id:"q6",prompt:"在 LiveFit 專案中，Logo 圖片放在哪裡？",options:[{id:"a",label:"frontend/src/components/"},{id:"b",label:"frontend/public/"},{id:"c",label:"backend/images/"}],correctOptionId:"b",explanation:"Logo 是靜態資源，放在 frontend/public/ 資料夾。"},{id:"q7",prompt:"如果要修改網站使用的 Logo，除了換圖片檔案，還需要改什麼？",options:[{id:"a",label:"只要換圖片就好，不用改其他東西"},{id:"b",label:"找到引用這張圖片的程式碼，改成新的檔名"},{id:"c",label:"重新安裝整個專案"}],correctOptionId:"b",explanation:"換圖片後，要開啟 LayoutHeader.vue 檔案，找到引用圖片的程式碼，把圖片檔名換成新的。"},{id:"q8",prompt:"用 LiveFit 來比喻，「Logo」和「教練列表」分別對應什麼？",options:[{id:"a",label:"Logo = 動態資料，教練列表 = 靜態資源"},{id:"b",label:"Logo = 靜態資源，教練列表 = 動態資料"},{id:"c",label:"兩個都是靜態資源"}],correctOptionId:"b",explanation:"Logo 很少換（靜態資源），教練列表隨時可能變動（動態資料）。"},{id:"q9",prompt:"動態資料的正確處理方式是？",options:[{id:"a",label:"直接寫死在 HTML 裡面"},{id:"b",label:"存在資料庫，前端透過 API 取得"},{id:"c",label:"放在 public/ 資料夾"}],correctOptionId:"b",explanation:"動態資料應該存在資料庫，前端透過 API 請求後端，後端從資料庫取得資料再回傳。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握靜態和動態的觀念了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那現在你應該知道怎麼換 Logo 了吧？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"知道了！去 frontend/public/ 找到圖片，然後去 LayoutHeader.vue 把檔名改成新的。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，設計師做好的新 Logo 在這裡，你先下載下來。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"這是新版 Logo（logo-text-v2.png），請在圖片上按右鍵 → 另存圖片",scene:"meeting",coachExpression:"normal",image:"/images/logo-text-v2.png",showSaveHint:!0},{type:"dialogue",speaker:"海克絲",text:"下載好之後，把這張圖片放到 frontend/public/ 資料夾裡面。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"然後打開 LayoutHeader.vue，把 Logo 的檔名從 logo-text.png 改成 logo-text-v2.png。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"了解！我這就去換 Logo。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"記得換完之後重新整理網頁，確認 Logo 有更新。如果沒變，可能是瀏覽器快取，按 Ctrl+F5 強制重新整理試試（Mac 是按 Cmd+R）。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對了，以後遇到要改東西，先問自己：這個東西會經常變動嗎？",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"會經常變動的，去資料庫改；不會變動的，去檔案改。搞清楚這點，找東西就快多了。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"那接下來就拜託你嘍！加油！",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，考你一個業界小知識。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"假設你是新人工程師，到職第一天主管跟你說：「幫我改個 Logo，應該很快吧？」",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"在大型公司的複雜專案中，你覺得實際上可能要多久？",scene:"meeting",coachExpression:"normal"},{type:"choice",prompt:"改個 Logo 實際上要多久？",scene:"meeting",coachExpression:"normal",options:[{id:"a",label:"5 分鐘，不就換張圖嗎",response:"(搖頭) 那是主管心裡想的時間啦！實際上新人要面對的可多了⋯⋯",responseExpression:"normal",isCorrect:!1},{id:"b",label:"1～2 小時，找一下檔案而已",response:"(搖頭) 太樂觀了！那是在小專案或你已經很熟的情況。大型專案可沒這麼簡單⋯⋯",responseExpression:"normal",isCorrect:!1},{id:"c",label:"3～5 天，甚至更久",response:"(點頭) 沒錯！你很有業界 sense。主管心裡想「不就換張圖？」但新人實際上要面對的可多了⋯⋯",responseExpression:"praise",isCorrect:!0}]},{type:"dialogue",speaker:"海克絲",text:`搞懂專案架構 1～2 小時
等權限開通 1 天
問同事圖片放哪結果他在開會等半天
本地環境跑不起來找 DevOps 等半天
發 PR 等 Code Review 數小時到隔天
CI/CD 跑失敗查原因 1～2 小時
部署測試環境 PM 要驗收等半天
上 Production 發現 CDN 快取是舊的再等 1 小時
⋯⋯加一加，就是 3～5 天了！`,scene:"meeting",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"所以先搞懂專案結構真的很重要，懂了之後才能越來越快。",scene:"meeting",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我知道了！那我現在就去把 Logo 換掉。",scene:"meeting",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，交給你嘍！加油！",scene:"meeting",coachExpression:"praise"},{type:"celebration",chapterTitle:"第四天：改一個 Logo 而已",scene:"meeting",coachExpression:"praise"}],P0={id:4,title:"第四天：改一個 Logo 而已",nodes:R0},I0=[{type:"dialogue",speaker:"旁白",text:"今日任務文件：https://hackmd.io/D_v5KoZWR3Kg3Et2MWJHOg?view",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你盯著 LiveFit 的教練列表頁面，看著一個個教練的照片和資料...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"海克絲，我有個問題。這頁面上的教練資料，是從哪裡來的？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"難道是寫死在網頁裡面嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(搖頭) 當然不是囉！你昨天不是才學過，會經常變動的資料要存在資料庫嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"對對對，我記得！但是...資料庫的資料要怎麼跑到網頁上？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(微微一笑) 好問題！這些資料是從網路上「要」來的。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"從網路上要來的？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對！你平常輸入一個網址，知道背後發生什麼事嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"呃...網頁就跑出來了？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 那是你看到的結果。讓我告訴你背後發生了什麼事...",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"drag-sort",title:"資料流填空挑戰",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"怎麼樣？原來輸入網址背後有這麼多事情在發生吧！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"原來如此！所以不是魔法，是有一整套流程在跑。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那個名字就叫做「網路請求」，接下來我們來看簡報吧！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"network-request",title:"什麼是網路請求？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"喔～所以這就叫「網路請求」！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來我每天上網都在發網路請求，只是不知道而已。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 沒錯！打開 Google、看 YouTube、滑 IG...通通都是網路請求。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"那這跟 API 有什麼關係？我一直聽到 API 這個詞...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"問得好！API 就是一種網路請求，差別只在於「回傳什麼」。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用簡報解釋給你看...",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"api-intro",title:"什麼是 API？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來 API 就是這樣！一般網址回傳網頁給人看，API 回傳資料給程式用。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍手) 完全正確！你抓到重點了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"所以回到你一開始的問題——教練資料從哪來？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我知道了！前端發網路請求到 API，API 回傳教練資料，前端再把資料顯示出來！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) Bingo！接下來讓我們透過互動示範，看看 LiveFit 的 API 實際運作方式吧！",scene:"normal",coachExpression:"praise"},{type:"interactiveSlide",slideId:"api-demo",title:"LiveFit API 互動操作",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來每個功能背後都對應一個 API！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 沒錯！你剛剛親手操作的每一個動作，都是在呼叫不同的 API。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"對了海克絲，LiveFit 總共有幾個 API 啊？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出得意的微笑) LiveFit 目前設計了超過 30 個 API 喔！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"30 個！？這麼多？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對啊！你想想看，光是使用者就有：註冊、登入、登出、取得個人資料、修改個人資料...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"教練有：取得教練列表、取得單一教練、新增課程、修改課程、刪除課程...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"課程有：取得課程列表、預約課程、取消預約、查看預約紀錄...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"每個功能背後都是一個 API。學會 API，你就能自己串接各種服務了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"等等，所以後端工程師的工作就是開發 API 去連接自己的資料庫嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(搖搖頭) 不只喔！這只是其中一部分。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"那以後我要去接別人的金流服務、第三方登入，他們是不是也像這樣子的方式來接資料呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(眼睛一亮) 你問到重點了！沒錯，原理完全一樣！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"不管是金流、第三方登入、簡訊通知、雲端儲存...這些服務都有提供 API。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"後端工程師很大一部分的工作，就是整合這些第三方服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"所以不是單純做自己的服務，更多是要把各種服務「串」起來？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) Exactly！讓我用簡報來解釋這個概念。",scene:"normal",coachExpression:"praise"},{type:"interactiveSlide",slideId:"third-party",title:"整合第三方服務",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來後端工程師像是「中央調度站」，要整合這麼多服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對！所以學會 API 非常重要，因為幾乎所有服務都是透過 API 來串接的。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"我懂了！學會 API，就能接金流、接登入、接各種服務！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(欣慰地笑) 沒錯！這就是後端工程師的核心技能之一。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(壓低聲音) 對了，跟你說個秘密...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"什麼秘密？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實 LiveFit 的金流功能...目前還沒做好。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"蛤？！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(嘆氣) 前一任後端工程師離職前沒時間做完，所以金流那塊一直是空的。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"等你把基本功都學會、功能測試都正常之後...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(看著你) 就要請你來開發金流串接囉！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"(緊張) 我...我可以嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(拍拍你的肩) 放心，到時候你已經準備好了。現在先把基礎打好！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，最後讓我用選擇題考考你！",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"API 與網路請求小考",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"當你在瀏覽器輸入網址按下 Enter，第一步會發生什麼事？",options:[{id:"a",label:"網頁直接出現"},{id:"b",label:"電腦透過網路去找伺服器"},{id:"c",label:"資料庫開始查詢資料"}],correctOptionId:"b",explanation:"輸入網址後，電腦會先透過網路找到伺服器，發送請求，等伺服器回傳內容後，網頁才會顯示。"},{id:"q2",prompt:"「網路請求」指的是什麼？",options:[{id:"a",label:"在網路上搜尋東西"},{id:"b",label:"電腦和伺服器之間「一來一往」的溝通過程"},{id:"c",label:"申請網路服務"}],correctOptionId:"b",explanation:"網路請求是你的電腦發送 Request 給伺服器，伺服器回傳 Response 的過程。"},{id:"q3",prompt:"一般網址和 API 的差別是什麼？",options:[{id:"a",label:"一般網址回傳 HTML 網頁，API 回傳 JSON 資料"},{id:"b",label:"一般網址比較慢，API 比較快"},{id:"c",label:"一般網址免費，API 要付費"}],correctOptionId:"a",explanation:"一般網址回傳 HTML（給人看的網頁），API 回傳 JSON（給程式用的資料）。"},{id:"q4",prompt:"為什麼教練資料要透過 API 取得，而不是寫死在網頁裡？",options:[{id:"a",label:"因為寫死比較慢"},{id:"b",label:"因為教練資料會變動，透過 API 可以取得最新資料"},{id:"c",label:"因為 API 比較便宜"}],correctOptionId:"b",explanation:"教練可能會新增、離職、改資料，透過 API 從資料庫取得，才能確保資料是最新的。"},{id:"q5",prompt:"API 的全名是什麼？",options:[{id:"a",label:"Application Programming Interface（應用程式介面）"},{id:"b",label:"Advanced Program Integration"},{id:"c",label:"Auto Page Import"}],correctOptionId:"a",explanation:"API 是 Application Programming Interface 的縮寫，意思是「應用程式介面」。"},{id:"q6",prompt:"當使用者在網站上購買課程，後端需要做什麼？",options:[{id:"a",label:"直接把錢存到公司帳戶"},{id:"b",label:"呼叫金流 API，讓第三方服務處理付款"},{id:"c",label:"自己寫程式處理信用卡資訊"}],correctOptionId:"b",explanation:"後端工程師透過呼叫金流 API（如綠界、藍新）來處理付款，不需要自己處理敏感的信用卡資訊。"},{id:"q7",prompt:"後端工程師的工作主要是什麼？",options:[{id:"a",label:"只負責連接自己的資料庫"},{id:"b",label:"開發 API 並整合各種第三方服務"},{id:"c",label:"設計網頁的畫面"}],correctOptionId:"b",explanation:"後端工程師除了連接自己的資料庫，更多工作是整合金流、登入、通知等第三方服務的 API。"},{id:"q8",prompt:"以下哪些是常見的第三方服務？",options:[{id:"a",label:"金流、第三方登入、雲端儲存"},{id:"b",label:"HTML、CSS、JavaScript"},{id:"c",label:"滑鼠、鍵盤、螢幕"}],correctOptionId:"a",explanation:"金流（綠界、LINE Pay）、第三方登入（Google、Facebook）、雲端儲存（AWS S3）都是常見的第三方服務。"},{id:"q9",prompt:"在完整的資料流中，順序是什麼？",options:[{id:"a",label:"資料庫 → 前端 → 後端 → 使用者"},{id:"b",label:"前端 → 後端 → 資料庫 → 後端 → 前端"},{id:"c",label:"使用者 → 資料庫 → 前端 → 後端"}],correctOptionId:"b",explanation:"正確順序：前端發請求 → 後端處理 → 資料庫查詢 → 後端回傳 → 前端顯示。"},{id:"q10",prompt:"JSON 資料格式的特色是什麼？",options:[{id:"a",label:"只有人類看得懂"},{id:"b",label:"用大括號 {} 和鍵值對 key: value 組成，程式可以輕鬆讀取"},{id:"c",label:"只能存數字"}],correctOptionId:"b",explanation:"JSON 使用 {} 和 key: value 格式，是程式之間交換資料的標準格式，易於讀取和解析。"},{id:"q11",prompt:"為什麼要使用第三方金流服務，而不是自己處理付款？",options:[{id:"a",label:"因為自己寫比較慢"},{id:"b",label:"因為信用卡資訊很敏感，需要專業的安全認證和法規遵循"},{id:"c",label:"因為第三方服務比較便宜"}],correctOptionId:"b",explanation:"處理信用卡需要 PCI DSS 安全認證，自己做成本高且風險大，交給專業的金流服務更安全可靠。"},{id:"q12",prompt:"LiveFit 有超過 30 個 API，以下哪個不是 API 的常見功能？",options:[{id:"a",label:"使用者註冊、登入、登出"},{id:"b",label:"設計網頁按鈕的顏色"},{id:"c",label:"取得教練列表、預約課程"}],correctOptionId:"b",explanation:"API 處理資料的存取和操作，網頁按鈕顏色是前端 CSS 的工作，不是 API 的功能。"},{id:"q13",prompt:"當前端要顯示教練資料時，正確的做法是？",options:[{id:"a",label:"直接把教練資料寫死在 HTML 裡"},{id:"b",label:"前端直接連資料庫查詢"},{id:"c",label:"前端呼叫後端 API，API 從資料庫取得資料後回傳"}],correctOptionId:"c",explanation:"前端不能直接連資料庫（會暴露帳密），要透過後端 API 取得資料，這樣更安全也更好維護。"},{id:"q14",prompt:"以下哪個是 Google 第三方登入的優點？",options:[{id:"a",label:"使用者不需要記新密碼，可以用 Google 帳號直接登入"},{id:"b",label:"可以看到使用者的 Google 密碼"},{id:"c",label:"登入速度會變慢"}],correctOptionId:"a",explanation:"第三方登入讓使用者用現有帳號登入，不用記新密碼，提升使用體驗。我們只會拿到授權資訊，不會拿到密碼。"},{id:"q15",prompt:"後端工程師被稱為「中央調度站」的原因是？",options:[{id:"a",label:"因為後端工程師薪水最高"},{id:"b",label:"因為後端要整合前端、資料庫、和各種第三方服務"},{id:"c",label:"因為後端工程師負責管理公司"}],correctOptionId:"b",explanation:"後端就像中央調度站，負責接收前端請求、處理商業邏輯、存取資料庫、串接第三方服務，再把結果回傳給前端。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 太棒了！你已經掌握 API 的基本觀念了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，API 就是網路請求，只是回傳 JSON 資料給程式用。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"學會 API 之後，你就能自己串接各種網路服務了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"謝謝海克絲！我現在對 API 有更清楚的認識了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，今天就到這裡，明天我們來學習更多！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第五天：學會 API，各種服務自己接！",scene:"normal",coachExpression:"praise"}],D0={id:5,title:"第五天：學會 API，各種服務自己接！",nodes:I0},L0=[{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/lqJOD_PJTRepkArlKV57yg",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對了，你對資料庫的部分熟悉了嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"呃...還沒有很熟...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(驚訝) 什麼？你應該知道我們是用 PostgreSQL 吧？那你對資料庫的概念熟嗎？",scene:"normal",coachExpression:"shocked"},{type:"dialogue",speaker:"你",text:"(一臉茫然) PostgreSQL...是那個有大象圖案的嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑了笑) 其實沒那麼難啦！你有用過 Excel 嗎？",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"當然有啊！我還會用公式算成績呢！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"那你就已經知道一半的資料庫概念了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"真的嗎？Excel 跟資料庫有什麼關係？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"資料庫就像一堆有組織的 Excel 表格。今天我們先來認識什麼是「資料表」，以及 LiveFit 用了哪些表。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"讓我用簡報解釋給你看，先從「資料表設計」的基本概念開始！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"table-design",title:"資料表設計入門",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此！所以主鍵就像身分證號碼，外來鍵就是連到別張表的暗號！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 完全正確！你抓到重點了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"而且正規化很重要——把表格拆開，避免重複輸入和修改災難。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我懂了！那 LiveFit 的資料表長什麼樣子呢？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出滿意的微笑) 問得好！其實 LiveFit 的資料庫裡有蠻多張資料表的...",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"像是使用者、教練、課程、預約紀錄、堂數方案、購買紀錄、技能...加起來超過十張！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(驚訝) 這麼多！？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別擔心，今天我們先認識其中 4 張最核心的資料表就好。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"分別是：堂數方案表、技能表、使用者表、還有購買紀錄表。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"搞懂這 4 張表，你就能理解 LiveFit 的核心運作邏輯了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"好！那我們開始吧！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"livefit-database",title:"LiveFit 資料庫探險",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 LiveFit 背後有這麼多資料表在運作！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 沒錯！你剛剛看到的 4 張表，就是 LiveFit 的核心。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"讓我整理一下... CREDIT_PACKAGE 是堂數方案，SKILL 是技能清單...",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"USER 是使用者資料，還可以用 role 區分學員和教練！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"CREDIT_PURCHASE 是購買紀錄，用外來鍵連到 USER 和 CREDIT_PACKAGE！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(鼓掌) 太棒了！你已經掌握 LiveFit 資料庫的全貌了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"對了，你還記得為什麼購買紀錄要記錄「當時的價格」嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"因為方案可能會漲價！所以要把購買當下的價格記錄下來！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！資料庫設計有很多細節要注意，你今天學得不錯。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(收起笑容，語氣變得認真) 好，最後讓我考考你！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"這次有 13 題，分成兩部分：資料庫觀念 4 題，LiveFit 資料表 9 題。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(深呼吸) 好，我準備好了！",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"資料表設計小考",scene:"normal",coachExpression:"praise",questions:[{id:"q1",prompt:"主鍵（Primary Key）的特性是什麼？",options:[{id:"a",label:"可以重複"},{id:"b",label:"絕對不能重複，就像身分證號碼"},{id:"c",label:"可以不填"}],correctOptionId:"b",explanation:"主鍵就像身分證號碼，每筆資料都有唯一的編號，絕對不能重複。"},{id:"q2",prompt:"如果把「金額」欄位設定為數字，可以輸入「五十萬」嗎？",options:[{id:"a",label:"可以，資料庫很彈性"},{id:"b",label:"不行，資料庫會擋下來"},{id:"c",label:"要看心情"}],correctOptionId:"b",explanation:"資料型態很重要！如果欄位設定為數字，就只能輸入數字，輸入文字會被擋下來。"},{id:"q3",prompt:"為什麼要把資料「正規化」（拆成多張表）？",options:[{id:"a",label:"看起來比較專業"},{id:"b",label:"避免重複輸入，改一次就好"},{id:"c",label:"電腦規定的"}],correctOptionId:"b",explanation:"正規化可以避免同一份資料重複出現，修改時只要改一個地方就好，不用改 100 個地方。"},{id:"q4",prompt:"外來鍵（Foreign Key）的作用是什麼？",options:[{id:"a",label:"讓表格變漂亮"},{id:"b",label:"用編號連到別張表的資料"},{id:"c",label:"加密用的"}],correctOptionId:"b",explanation:"外來鍵就是「連到別張表的暗號」，用編號來建立表格之間的關聯。"},{id:"q5",prompt:"CREDIT_PACKAGE 表是用來存什麼資料？",options:[{id:"a",label:"會員資料"},{id:"b",label:"堂數方案（7堂、14堂、21堂組合包）"},{id:"c",label:"課程時間"}],correctOptionId:"b",explanation:"CREDIT_PACKAGE 表存放堂數方案，像是 7 堂、14 堂、21 堂的組合包。"},{id:"q6",prompt:"CREDIT_PACKAGE 表的 credit_amount 欄位代表什麼？",options:[{id:"a",label:"價格"},{id:"b",label:"這個方案有幾堂課"},{id:"c",label:"建立時間"}],correctOptionId:"b",explanation:"credit_amount 代表這個方案包含幾堂課，例如 7、14、21。"},{id:"q7",prompt:"SKILL 表的 name 欄位為什麼不能重複？",options:[{id:"a",label:"因為一種技能只需要記錄一次"},{id:"b",label:"為了省空間"},{id:"c",label:"沒有原因"}],correctOptionId:"a",explanation:"每種技能只需要記錄一次，例如「重訓」只要有一筆資料就好，不需要重複。"},{id:"q8",prompt:"USER 表的 role 欄位有什麼作用？",options:[{id:"a",label:"記錄使用者的年齡"},{id:"b",label:"分辨是學員（user）還是教練（coach）"},{id:"c",label:"記錄使用者的密碼"}],correctOptionId:"b",explanation:"role 欄位用來分辨使用者的身份，user 代表學員，coach 代表教練。"},{id:"q9",prompt:"王小明、李燕容、小美剛註冊時，他們的 role 是什麼？",options:[{id:"a",label:"都是 coach"},{id:"b",label:"都是 user"},{id:"c",label:"有的是 user 有的是 coach"}],correctOptionId:"b",explanation:"剛註冊的會員預設都是 user（學員），要變成教練需要管理員升級。"},{id:"q10",prompt:"如果李燕容想從學員變成教練，要怎麼做？",options:[{id:"a",label:"重新註冊一個新帳號"},{id:"b",label:"把她的 role 從 user 改成 coach"},{id:"c",label:"刪除她的資料"}],correctOptionId:"b",explanation:"只要把 role 欄位從 user 改成 coach，李燕容就能從學員變成教練，不需要重新註冊。"},{id:"q11",prompt:"USER 表的 email 欄位為什麼不能重複？",options:[{id:"a",label:"每個信箱只能註冊一次"},{id:"b",label:"為了好看"},{id:"c",label:"可以重複啊"}],correctOptionId:"a",explanation:"一個 Email 只能註冊一個帳號，這樣才能確保每個人只有一個帳號。"},{id:"q12",prompt:"CREDIT_PURCHASE 表的 user_id 是什麼意思？",options:[{id:"a",label:"使用者的密碼"},{id:"b",label:"連到 USER 表，代表「誰買的」"},{id:"c",label:"購買金額"}],correctOptionId:"b",explanation:"user_id 是外來鍵，連到 USER 表，記錄這筆購買是哪位會員買的。"},{id:"q13",prompt:"為什麼購買紀錄要記錄「當時的價格」？",options:[{id:"a",label:"因為方案可能會漲價，要保留購買當時的價格"},{id:"b",label:"為了好看"},{id:"c",label:"沒有原因"}],correctOptionId:"a",explanation:"方案價格可能會調整，把購買當下的價格記錄下來，才能保留正確的金額。"}]},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 很好！你已經掌握資料表的基本觀念了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"記住，資料庫是系統的心臟，資料出錯比畫面出錯嚴重多了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我懂了！主鍵不能重複、外來鍵建立關聯、正規化避免災難！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的笑容) 今天先把「表格怎麼看」學起來，明天我們再來學怎麼用 SQL 操作資料。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"看懂資料表之間的關聯，你就能理解整個系統是怎麼運作的！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"謝謝海克絲！我現在知道 LiveFit 的資料是怎麼存放的了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"好，今天就到這裡。回去好好消化，明天見！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第六天：資料庫幼幼班",scene:"normal",coachExpression:"praise"}],U0={id:6,title:"第六天：資料庫幼幼班",nodes:L0},N0=[{type:"dialogue",speaker:"旁白",text:"📋 今日任務文件：https://hackmd.io/jgEjtsDLTaulGdegVNFeHQ",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(一臉嚴肅地走過來) 我偷偷跑去問你培訓班的教練了，他是我前同事。",scene:"normal",coachExpression:"angry"},{type:"dialogue",speaker:"你",text:"(心裡一沉) 問...問什麼？",scene:"normal",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(叉著腰) 他偷爆料說你的資料庫學得很差！",scene:"normal",coachExpression:"angry"},{type:"dialogue",speaker:"你",text:"呃...那個...",scene:"normal",coachExpression:"angry"},{type:"dialogue",speaker:"海克絲",text:"(打開電腦) 沒關係！今天要來惡補一下！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"昨天你學會看資料表了，今天來學怎麼「跟資料庫說話」！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"跟資料庫說話？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對！資料庫聽不懂中文，但它聽得懂 SQL。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"SQL 就是跟資料庫溝通的語言，學會這幾個關鍵字，你就能查資料、新增資料、修改資料、刪除資料！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"聽起來很厲害欸！但是...我還以為都是用後端程式來操控資料庫欸？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(搖搖頭) 這是很多新手的迷思！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"其實操作資料庫不只能用程式碼，還可以用圖形化工具！像是 DBeaver，讓你用滑鼠點點就能操作資料庫。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"真的假的？那不是很方便！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"對啊！開發的時候用 DBeaver 查資料超方便，不用每次都寫程式。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"今天要把這些通通補起來！先讓我用簡報解釋給你看。",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"database-access",title:"資料庫操作方式",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"原來如此！後端程式用於正式環境自動化操作，DBeaver 用於開發除錯！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(點頭) 完全正確！兩種方式是互補的。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"不管用哪種方式，背後都是在執行 SQL。接下來就讓我教你 SQL 的基本語法！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"好！我準備好了！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"sql-basics",title:"SQL 語法基礎",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"哇！原來 SQL 有「查詢三兄弟」跟「操作三劍客」！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(笑) 你記得很清楚嘛！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"SELECT + FROM + WHERE 用來查資料，INSERT、UPDATE、DELETE 用來操作資料！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"而且 UPDATE 和 DELETE 一定要加 WHERE，不然會影響全部資料！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(滿意地點頭) 這個超級重要！忘記加 WHERE 是新手最常犯的錯誤。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"好，概念你都懂了，接下來要實際練習了！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(緊張) 練...練習？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"別緊張！我準備了 12 題 SQL 拼湊練習，涵蓋 CREDIT_PACKAGE、SKILL、USER 三張表。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(認真) 這是今天最重要的部分，你的表現會影響後面的挑戰喔！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"(深呼吸) 好！我來挑戰！",scene:"normal",coachExpression:"normal"},{type:"interactiveSlide",slideId:"sql-practice",title:"SQL 練習場",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(鼓掌) 你完成了！SQL 練習場的成績我記下來了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"SQL 是後端工程師的必備技能，學會這六個關鍵字，你就能跟資料庫對話了！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"我懂了！SELECT、FROM、WHERE 查資料，INSERT、UPDATE、DELETE 操作資料！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"還有最重要的一點是？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"UPDATE 和 DELETE 一定要加 WHERE，不然會影響全部資料！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"(露出欣慰的笑容) 太好了！你已經從昨天的資料庫小白進步了不少。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"(突然想起什麼) 對了！剛剛給你的那組神秘序號...",scene:"normal",coachExpression:"normal",condition:"sqlPerfect"},{type:"dialogue",speaker:"你",text:"那組序號是做什麼用的？",scene:"normal",coachExpression:"normal",condition:"sqlPerfect"},{type:"dialogue",speaker:"海克絲",text:"(抓抓頭) 呃...我忘了。",scene:"normal",coachExpression:"normal",condition:"sqlPerfect"},{type:"dialogue",speaker:"你",text:"...蛤？",scene:"normal",coachExpression:"normal",condition:"sqlPerfect"},{type:"dialogue",speaker:"海克絲",text:"(尷尬) 總之先記好！說不定之後會用到！",scene:"normal",coachExpression:"praise",condition:"sqlPerfect"},{type:"dialogue",speaker:"海克絲",text:"好，今天就到這裡。DBeaver 是開發時的好夥伴，可以讓你直接看到資料庫裡面有什麼，除錯的時候超好用！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"謝謝海克絲！我現在對 SQL 有基本概念了！",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"回去好好複習，明天見！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第七天：SQL 語法入門",scene:"normal",coachExpression:"praise"}],F0={id:7,title:"第七天：SQL 語法入門",nodes:N0},O0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 8 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 8 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第八天：測試章節",scene:"normal",coachExpression:"praise"}],k0={id:8,title:"第八天：測試章節",nodes:O0},B0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 9 - 這是測試用章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 9 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"celebration",chapterTitle:"第九天：測試章節",scene:"normal",coachExpression:"praise"}],z0={id:9,title:"第九天：測試章節",nodes:B0},H0=[{type:"dialogue",speaker:"海克絲",text:"【測試模式】Day 10 - 這是最後一天的測試章節，所有答案都選 A",scene:"normal",coachExpression:"normal"},{type:"quiz",title:"Day 10 測試題",scene:"normal",coachExpression:"normal",questions:[{id:"q1",prompt:"1 + 0 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q2",prompt:"2 - 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q3",prompt:"1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q4",prompt:"1 ÷ 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q5",prompt:"0 + 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q6",prompt:"3 - 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q7",prompt:"1 × 1 × 1 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q8",prompt:"2 ÷ 2 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q9",prompt:"10 - 9 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"},{id:"q10",prompt:"100 ÷ 100 = ?",options:[{id:"a",label:"1"},{id:"b",label:"2"}],correctOptionId:"a",explanation:"答案是 1"}]},{type:"dialogue",speaker:"海克絲",text:"感謝你的努力，專案終於上線了！",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"後面還有很多挑戰，沒關係，我們就一起突破吧！",scene:"normal",coachExpression:"praise"},{type:"celebration",chapterTitle:"第十天：專案上線！",scene:"normal",coachExpression:"praise"}],V0={id:10,title:"第十天：專案上線！",nodes:H0},G0=[{type:"dialogue",speaker:"旁白",text:"專案勉強上線了，但到處都是 Bug。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你看著滿屏的錯誤回報，開始瘋狂地修復。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：完蛋了... 海姐一定會發現我根本不適任...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：我不能讓她失望。她錄取我... 搞不好本來就是個錯誤。）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"凌晨一點...兩點...三點...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你灌下今晚第四杯濃縮咖啡。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"再一下... 再修一個就好...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"螢幕上的字開始變得模糊。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：這些 Bug... 海姐之前好像有提過類似的問題...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：早知道她在教的時候，我就認真聽了...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：她說過的那些東西，我當時怎麼都沒放在心上...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你想起今天下午海克絲交代的話。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（回憶）「{name}，上線後不管發生什麼事，今晚十點前一定要離開公司。」",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：這... 這是一種考驗吧？她是在測試我夠不夠拼...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你用力揉了揉眼睛，繼續敲著鍵盤。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"肩膀傳來劇烈的痠痛，但你選擇忽略。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：海姐之前也說過要注意肩膀... 我怎麼什麼都沒聽進去...）",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"突然，視線開始發黑。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"不、不行... 還有三個 Bug...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機響了。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"來電顯示：海姐",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"喂？{name}？你還在公司嗎？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你想說話，但聲音卡在喉嚨。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"{name}？你還好嗎？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"回答我！{name}！",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機從手中滑落。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你聽見海克絲在電話那頭大喊著什麼。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但那聲音越來越遠...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"像是隔著一層厚厚的水。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"畫面逐漸變黑。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"黑暗中，隱約傳來一個熟悉的聲音。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（遠遠的）{name}... 你聽得到嗎...？",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（遠遠的）拜託... 回答我...！",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"那聲音越來越模糊...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（幾乎聽不見）如果... 我能早點發現就好了...",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"遠方，隱約傳來救護車的聲音。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"嗚——嗚——",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"海克絲和救護人員的身影，從遠方緩緩走來。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但你已經看不清楚了。",scene:"dark",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"一切，歸於寂靜。",scene:"dark",coachExpression:"normal"},{type:"endingComplete",endingType:"bad",title:et.bad.title,icon:et.bad.icon,color:et.bad.color,scene:"dark",coachExpression:"normal"}],W0={id:et.bad.chapterId,title:`結局：${et.bad.title}`,nodes:G0},X0=[{type:"dialogue",speaker:"旁白",text:"清晨六點，你被手機震動吵醒。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"不是鬧鐘，是系統通知。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"📱 系統：「LiveFit 已成功部署上線。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（揉揉眼睛）「上線了...？」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你下意識地打開後台。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"三個 Bug 回報。都是小問題，但確實存在。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（盯著螢幕）「...果然。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：我就知道。還是有漏掉的地方。）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你嘆了口氣，開始逐一檢視錯誤訊息。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"手機又震動了一下。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你期待看到海克絲的訊息。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但只是系統推播：「您有 3 則未讀通知。」",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：...她沒傳訊息。）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：是不是因為這幾個 Bug，她很失望？）",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你放下手機，盯著天花板。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"專案上線了。這是事實。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但心裡總覺得...好像少了什麼。",scene:"home",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"【公司，早上九點】",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你比平常早到公司，海克絲已經在了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"她正看著電腦，手邊放著一杯還在冒煙的咖啡。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（抬頭）「早。坐下吧。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（站得筆直）「海姐，關於那三個 Bug，我已經看過了，我現在馬上——」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（打斷）「{name}。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「坐下。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你乖乖坐下，背挺得像根竹竿。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（轉過螢幕讓你看）「你看這個。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"螢幕上是 LiveFit 的後台數據。",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"海克絲",text:"「上線十二小時，87 個人註冊，0 個系統崩潰。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「你知道這代表什麼嗎？」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"你",text:"（低頭）「...但是有 3 個 Bug...」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"（嘆氣）「我問你，健身的時候，有人第一天就能硬舉 100 公斤嗎？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"（愣住）「...沒有。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「那有人第一次寫的系統，完全沒有 Bug 嗎？」",scene:"normal",coachExpression:"confused"},{type:"dialogue",speaker:"你",text:"「...」",scene:"normal",coachExpression:"confused"},{type:"dialogue",speaker:"海克絲",text:"（語氣放緩）「{name}，你做到了。專案上線了，系統穩定運作。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「那三個 Bug，我們今天一起修就好。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你聽著她的話，但心裡那個聲音還是很大聲。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：可是...如果我再仔細一點，就不會有這些問題了...）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"（看著你的表情，沉默了一下）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「你是不是覺得，99 分跟 0 分一樣？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"你",text:"（抬頭）「...蛤？」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（站起來，走到窗邊）「我以前也這樣。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「覺得只要不是 100 分，就是失敗。只要有一個漏洞，之前的努力就全部白費。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（轉頭看你）「但這種想法，會把你封印住的。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「封印...？」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「你會困在『不夠好』的牢籠裡，永遠走不出來。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"「明明已經做到 99 分了，卻只盯著那 1 分看。」",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"旁白",text:"你低下頭，不知道該說什麼。",scene:"normal",coachExpression:"sigh"},{type:"dialogue",speaker:"海克絲",text:"（走回座位，語氣變得溫和）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「{name}，我不是要你放棄追求完美。」",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「我是希望你在追求的路上，也能看見自己已經走了多遠。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"你抬起頭，看著海克絲。",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"旁白",text:"她的表情沒有失望，只有一種...你看不太懂的東西。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"「今天的任務：修完那三個 Bug，然後六點準時下班。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"「這是老闆的命令。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"你",text:"（點頭）「...好。」",scene:"normal",coachExpression:"proud"},{type:"dialogue",speaker:"海克絲",text:"（微微一笑）「走吧，先去吃早餐。修 Bug 之前，先把自己餵飽。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"【傍晚，離開公司】",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"六點整，你關上電腦。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"Bug 修完了。系統運作正常。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"但心裡那個聲音，還是隱隱作響。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：下次...我要做得更好。）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（內心：不能再讓海姐幫我收尾了。）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你走出公司，天色還亮著。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"這是你入職以來，第一次在天黑之前離開。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"風吹過來，有點涼。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"（看著天空）",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"「...也許，我還需要再努力一點吧。」",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你背起背包，往車站走去。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"腳步不快，但很穩。",scene:"normal",coachExpression:"normal"},{type:"endingComplete",endingType:"normal",title:et.normal.title,icon:et.normal.icon,color:et.normal.color,scene:"normal",coachExpression:"normal"}],q0={id:et.normal.chapterId,title:`結局：${et.normal.title}`,nodes:X0},$0=[{type:"dialogue",speaker:"旁白",text:"辦公室裡，系統穩健上線中。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"早安，正式的後端工程師。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"LiveFit 第一天就有 500 人註冊，後端穩穩的，沒有任何 Bug。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"你看著訊息，嘴角不自覺地上揚。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"還記得第一天你連環境都架不起來嗎？",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"現在的你，已經能獨立扛起整個後端了。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"這是你應得的。記住這種感覺——穩健帶來的踏實。",scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"海克絲",text:"後端的路還很長，但我相信你已經準備好了。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"海克絲",text:"加油，{name}。",scene:"normal",coachExpression:"praise"},{type:"endingComplete",endingType:"true",title:et.true.title,icon:et.true.icon,color:et.true.color,canTriggerHidden:!0,scene:"normal",coachExpression:"praise"},{type:"dialogue",speaker:"旁白",text:"下班了，走在回家的路上。",scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:`街道傳來一段不同以往的旋律，你拿下耳機，靜靜聆聽...

（建議：開啟音樂，聆聽結局配樂 🎵）`,scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你正準備關掉手機，突然收到一封新信件。",scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:`寄件者：海克絲
主旨：給你的一封信`,scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你點開信件。",scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:`{name}，

恭喜你正式成為正職員工！你好棒！

附件裡有一個壓縮檔，是我想送給你的禮物。

密碼的話...你應該知道的 😉

—— 海姐`,scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你看著附件，想起了第七天在資料庫裡看到的那串亂碼。",scene:"end",coachExpression:"normal"},{type:"passwordInput",prompt:"請輸入解壓縮密碼...",hint:"提示：還記得第七天拿到的那串亂碼嗎？",scene:"end",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"解壓縮成功！裡面是一個影片檔：「給未來的你.mp4」",scene:"end",coachExpression:"normal"},{type:"interactiveSlide",slideId:"video-message",title:"給未來的你",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"旁白",text:"你關掉影片，看著窗外的陽光。",scene:"normal",coachExpression:"normal"},{type:"dialogue",speaker:"你",text:"謝謝你，海姐。",scene:"normal",coachExpression:"praise"},{type:"endingComplete",endingType:"hidden",title:et.hidden.title,icon:et.hidden.icon,color:et.hidden.color,scene:"normal",coachExpression:"praise"}],Y0={id:et.true.chapterId,title:`結局：${et.true.title} / ${et.hidden.title}`,nodes:$0},du={1:M0,2:w0,3:C0,4:P0,5:D0,6:U0,7:F0,8:k0,9:z0,10:V0,101:W0,102:q0,103:Y0};function j0(t){return du[t]}const la=7,K0=10,Dp=[4,5,6,7,8,9,10];const fu="179",Z0=0,Bd=1,J0=2,Lp=1,Q0=2,ni=3,ki=0,cn=1,Gn=2,Li=0,qr=1,zs=2,zd=3,Hd=4,ev=5,ir=100,tv=101,nv=102,iv=103,rv=104,sv=200,ov=201,av=202,lv=203,$l=204,Yl=205,cv=206,uv=207,dv=208,fv=209,hv=210,pv=211,mv=212,gv=213,xv=214,jl=0,Kl=1,Zl=2,ts=3,Jl=4,Ql=5,ec=6,tc=7,Up=0,_v=1,vv=2,Ui=0,bv=1,yv=2,Ev=3,Sv=4,Mv=5,Tv=6,wv=7,Np=300,ns=301,is=302,nc=303,ic=304,Ca=306,rc=1e3,or=1001,sc=1002,In=1003,Av=1004,uo=1005,Kt=1006,Ka=1007,ar=1008,hi=1009,Fp=1010,Op=1011,Hs=1012,hu=1013,mr=1014,ai=1015,Zs=1016,pu=1017,mu=1018,Vs=1020,kp=35902,Bp=1021,zp=1022,Rn=1023,Gs=1026,Ws=1027,Hp=1028,gu=1029,Vp=1030,xu=1031,_u=1033,Go=33776,Wo=33777,Xo=33778,qo=33779,oc=35840,ac=35841,lc=35842,cc=35843,uc=36196,dc=37492,fc=37496,hc=37808,pc=37809,mc=37810,gc=37811,xc=37812,_c=37813,vc=37814,bc=37815,yc=37816,Ec=37817,Sc=37818,Mc=37819,Tc=37820,wc=37821,$o=36492,Ac=36494,Cc=36495,Gp=36283,Rc=36284,Pc=36285,Ic=36286,Cv=3200,Rv=3201,Pv=0,Iv=1,Pi="",yn="srgb",rs="srgb-linear",ca="linear",mt="srgb",br=7680,Vd=519,Dv=512,Lv=513,Uv=514,Wp=515,Nv=516,Fv=517,Ov=518,kv=519,Dc=35044,Gd="300 es",Xn=2e3,ua=2001;class os{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Za=Math.PI/180,Lc=180/Math.PI;function Ni(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[t&255]+Xt[t>>8&255]+Xt[t>>16&255]+Xt[t>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[n&63|128]+Xt[n>>8&255]+"-"+Xt[n>>16&255]+Xt[n>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function ot(t,e,n){return Math.max(e,Math.min(n,t))}function Bv(t,e){return(t%e+e)%e}function Ja(t,e,n){return(1-n)*t+n*e}function Wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function gt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,n=0){at.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Js{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3];const f=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d;return}if(a===1){e[n+0]=f,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(d!==x||l!==f||c!==p||u!==g){let m=1-a;const h=l*f+c*p+u*g+d*x,w=h>=0?1:-1,S=1-h*h;if(S>Number.EPSILON){const D=Math.sqrt(S),L=Math.atan2(D,h*w);m=Math.sin(m*L)/D,a=Math.sin(a*L)/D}const y=a*w;if(l=l*m+f*y,c=c*m+p*y,u=u*m+g*y,d=d*m+x*y,m===1-a){const D=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=D,c*=D,u*=D,d*=D}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[o],f=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*d+l*p-c*f,e[n+1]=l*g+u*f+c*d-a*p,e[n+2]=c*g+u*p+a*f-l*d,e[n+3]=u*g-a*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),d=a(s/2),f=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"YXZ":this._x=f*u*d+c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"ZXY":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d-f*p*g;break;case"ZYX":this._x=f*u*d-c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d+f*p*g;break;case"YZX":this._x=f*u*d+c*p*g,this._y=c*p*d+f*u*g,this._z=c*u*g-f*p*d,this._w=c*u*d-f*p*g;break;case"XZY":this._x=f*u*d-c*p*g,this._y=c*p*d-f*u*g,this._z=c*u*g+f*p*d,this._w=c*u*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+a+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-n)*u)/c,f=Math.sin(n*u)/c;return this._w=o*d+this._w*f,this._x=i*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class J{constructor(e=0,n=0,i=0){J.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Wd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Wd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),d=2*(s*i-o*n);return this.x=n+l*c+o*d-a*u,this.y=i+l*u+a*c-s*d,this.z=r+l*d+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qa.copy(this).projectOnVector(e),this.sub(Qa)}reflect(e){return this.sub(Qa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new J,Wd=new Js;class tt{constructor(e,n,i,r,s,o,a,l,c){tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=r[0],m=r[3],h=r[6],w=r[1],S=r[4],y=r[7],D=r[2],L=r[5],P=r[8];return s[0]=o*x+a*w+l*D,s[3]=o*m+a*S+l*L,s[6]=o*h+a*y+l*P,s[1]=c*x+u*w+d*D,s[4]=c*m+u*S+d*L,s[7]=c*h+u*y+d*P,s[2]=f*x+p*w+g*D,s[5]=f*m+p*S+g*L,s[8]=f*h+p*y+g*P,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=u*o-a*c,f=a*l-u*s,p=c*s-o*l,g=n*d+i*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*c-u*i)*x,e[2]=(a*i-r*o)*x,e[3]=f*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(el.makeScale(e,n)),this}rotate(e){return this.premultiply(el.makeRotation(-e)),this}translate(e,n){return this.premultiply(el.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const el=new tt;function Xp(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function da(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function zv(){const t=da("canvas");return t.style.display="block",t}const Xd={};function $r(t){t in Xd||(Xd[t]=!0,console.warn(t))}function Hv(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qd=new tt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$d=new tt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vv(){const t={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===mt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===mt&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Pi?ca:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return $r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[rs]:{primaries:e,whitePoint:i,transfer:ca,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:qd,fromXYZ:$d,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}}),t}const ut=Vv();function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Yr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let yr;class Gv{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=da("canvas")),yr.width=e.width,yr.height=e.height;const r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=da("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ci(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ci(n[i]/255)*255):n[i]=ci(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wv=0;class vu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wv++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tl(r[o].image)):s.push(tl(r[o]))}else s=tl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Gv.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xv=0;const nl=new J;class Vt extends os{constructor(e=Vt.DEFAULT_IMAGE,n=Vt.DEFAULT_MAPPING,i=or,r=or,s=Kt,o=ar,a=Rn,l=hi,c=Vt.DEFAULT_ANISOTROPY,u=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xv++}),this.uuid=Ni(),this.name="",this.source=new vu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nl).x}get height(){return this.source.getSize(nl).y}get depth(){return this.source.getSize(nl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Np)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rc:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rc:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=Np;Vt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],h=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,y=(p+1)/2,D=(h+1)/2,L=(u+f)/4,P=(d+x)/4,R=(g+m)/4;return S>y&&S>D?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=L/i,s=P/i):y>D?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=L/r,s=R/r):D<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(D),i=P/s,r=R/s),this.set(i,r,s,n),this}let w=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(d-x)/w,this.z=(f-u)/w,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=ot(this.x,e.x,n.x),this.y=ot(this.y,e.y,n.y),this.z=ot(this.z,e.z,n.z),this.w=ot(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=ot(this.x,e,n),this.y=ot(this.y,e,n),this.z=ot(this.z,e,n),this.w=ot(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(ot(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qv extends os{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new Vt(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new vu(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gr extends qv{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qp extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $v extends Vt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=In,this.minFilter=In,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=new J(1/0,1/0,1/0),n=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,wn):wn.fromBufferAttribute(s,o),wn.applyMatrix4(e.matrixWorld),this.expandByPoint(wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),fo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),fo.copy(i.boundingBox)),fo.applyMatrix4(e.matrixWorld),this.union(fo)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wn),wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ho.subVectors(this.max,ps),Er.subVectors(e.a,ps),Sr.subVectors(e.b,ps),Mr.subVectors(e.c,ps),_i.subVectors(Sr,Er),vi.subVectors(Mr,Sr),qi.subVectors(Er,Mr);let n=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-qi.z,qi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,qi.z,0,-qi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-qi.y,qi.x,0];return!il(n,Er,Sr,Mr,ho)||(n=[1,0,0,0,1,0,0,0,1],!il(n,Er,Sr,Mr,ho))?!1:(po.crossVectors(_i,vi),n=[po.x,po.y,po.z],il(n,Er,Sr,Mr,ho))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Zn=[new J,new J,new J,new J,new J,new J,new J,new J],wn=new J,fo=new Qs,Er=new J,Sr=new J,Mr=new J,_i=new J,vi=new J,qi=new J,ps=new J,ho=new J,po=new J,$i=new J;function il(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){$i.fromArray(t,s);const a=r.x*Math.abs($i.x)+r.y*Math.abs($i.y)+r.z*Math.abs($i.z),l=e.dot($i),c=n.dot($i),u=i.dot($i);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Yv=new Qs,ms=new J,rl=new J;class Ra{constructor(e=new J,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Yv.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);const n=ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(rl)),this.expandByPoint(ms.copy(e.center).sub(rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Jn=new J,sl=new J,mo=new J,bi=new J,ol=new J,go=new J,al=new J;class $p{constructor(e=new J,n=new J(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jn)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Jn.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Jn.copy(this.origin).addScaledVector(this.direction,n),Jn.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sl.copy(e).add(n).multiplyScalar(.5),mo.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(sl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(mo),a=bi.dot(this.direction),l=-bi.dot(mo),c=bi.lengthSq(),u=Math.abs(1-o*o);let d,f,p,g;if(u>0)if(d=o*l-a,f=o*a-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,p=d*(d+o*f+2*a)+f*(o*d+f+2*l)+c}else f=s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-o*s+a)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(o*s+a)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=o>0?-s:s,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(sl).addScaledVector(mo,f),p}intersectSphere(e,n){Jn.subVectors(e.center,this.origin);const i=Jn.dot(this.direction),r=Jn.dot(Jn)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(a=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Jn)!==null}intersectTriangle(e,n,i,r,s){ol.subVectors(n,e),go.subVectors(i,e),al.crossVectors(ol,go);let o=this.direction.dot(al),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,e);const l=a*this.direction.dot(go.crossVectors(bi,go));if(l<0)return null;const c=a*this.direction.dot(ol.cross(bi));if(c<0||l+c>o)return null;const u=-a*bi.dot(al);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,u,d,f,p,g,x,m){const h=this.elements;return h[0]=e,h[4]=n,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=f,h[3]=p,h[7]=g,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Tr.setFromMatrixColumn(e,0).length(),s=1/Tr.setFromMatrixColumn(e,1).length(),o=1/Tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=p+g*c,n[5]=f-x*c,n[9]=-a*l,n[2]=x-f*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*d,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=x+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*u,p=l*d,g=c*u,x=c*d;n[0]=f-x*a,n[4]=-o*d,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=x-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*u,p=o*d,g=a*u,x=a*d;n[0]=l*u,n[4]=g*c-p,n[8]=f*c+x,n[1]=l*d,n[5]=x*c+f,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=x-f*d,n[8]=g*d+p,n[1]=d,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*d+g,n[10]=f-x*d}else if(e.order==="XZY"){const f=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+x,n[5]=o*u,n[9]=p*d-g,n[2]=g*d-p,n[6]=a*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jv,e,Kv)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),yi.crossVectors(i,fn),yi.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),yi.crossVectors(i,fn)),yi.normalize(),xo.crossVectors(fn,yi),r[0]=yi.x,r[4]=xo.x,r[8]=fn.x,r[1]=yi.y,r[5]=xo.y,r[9]=fn.y,r[2]=yi.z,r[6]=xo.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],h=i[14],w=i[3],S=i[7],y=i[11],D=i[15],L=r[0],P=r[4],R=r[8],b=r[12],E=r[1],I=r[5],B=r[9],q=r[13],H=r[2],j=r[6],$=r[10],z=r[14],U=r[3],ne=r[7],fe=r[11],Ee=r[15];return s[0]=o*L+a*E+l*H+c*U,s[4]=o*P+a*I+l*j+c*ne,s[8]=o*R+a*B+l*$+c*fe,s[12]=o*b+a*q+l*z+c*Ee,s[1]=u*L+d*E+f*H+p*U,s[5]=u*P+d*I+f*j+p*ne,s[9]=u*R+d*B+f*$+p*fe,s[13]=u*b+d*q+f*z+p*Ee,s[2]=g*L+x*E+m*H+h*U,s[6]=g*P+x*I+m*j+h*ne,s[10]=g*R+x*B+m*$+h*fe,s[14]=g*b+x*q+m*z+h*Ee,s[3]=w*L+S*E+y*H+D*U,s[7]=w*P+S*I+y*j+D*ne,s[11]=w*R+S*B+y*$+D*fe,s[15]=w*b+S*q+y*z+D*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],h=e[15];return g*(+s*l*d-r*c*d-s*a*f+i*c*f+r*a*p-i*l*p)+x*(+n*l*p-n*c*f+s*o*f-r*o*p+r*c*u-s*l*u)+m*(+n*c*d-n*a*p-s*o*d+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-n*l*d+n*a*f+r*o*d-i*o*f+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],h=e[15],w=d*m*c-x*f*c+x*l*p-a*m*p-d*l*h+a*f*h,S=g*f*c-u*m*c-g*l*p+o*m*p+u*l*h-o*f*h,y=u*x*c-g*d*c+g*a*p-o*x*p-u*a*h+o*d*h,D=g*d*l-u*x*l-g*a*f+o*x*f+u*a*m-o*d*m,L=n*w+i*S+r*y+s*D;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return e[0]=w*P,e[1]=(x*f*s-d*m*s-x*r*p+i*m*p+d*r*h-i*f*h)*P,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*h+i*l*h)*P,e[3]=(d*l*s-a*f*s-d*r*c+i*f*c+a*r*p-i*l*p)*P,e[4]=S*P,e[5]=(u*m*s-g*f*s+g*r*p-n*m*p-u*r*h+n*f*h)*P,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*h-n*l*h)*P,e[7]=(o*f*s-u*l*s+u*r*c-n*f*c-o*r*p+n*l*p)*P,e[8]=y*P,e[9]=(g*d*s-u*x*s-g*i*p+n*x*p+u*i*h-n*d*h)*P,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*h+n*a*h)*P,e[11]=(u*a*s-o*d*s-u*i*c+n*d*c+o*i*p-n*a*p)*P,e[12]=D*P,e[13]=(u*x*r-g*d*r+g*i*f-n*x*f-u*i*m+n*d*m)*P,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*P,e[15]=(o*d*r-u*a*r+u*i*l-n*d*l-o*i*f+n*a*f)*P,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,d=a+a,f=s*c,p=s*u,g=s*d,x=o*u,m=o*d,h=a*d,w=l*c,S=l*u,y=l*d,D=i.x,L=i.y,P=i.z;return r[0]=(1-(x+h))*D,r[1]=(p+y)*D,r[2]=(g-S)*D,r[3]=0,r[4]=(p-y)*L,r[5]=(1-(f+h))*L,r[6]=(m+w)*L,r[7]=0,r[8]=(g+S)*P,r[9]=(m-w)*P,r[10]=(1-(f+x))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Tr.set(r[0],r[1],r[2]).length();const o=Tr.set(r[4],r[5],r[6]).length(),a=Tr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],An.copy(this);const c=1/s,u=1/o,d=1/a;return An.elements[0]*=c,An.elements[1]*=c,An.elements[2]*=c,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=d,An.elements[9]*=d,An.elements[10]*=d,n.setFromRotationMatrix(An),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Xn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Xn)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===ua)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Xn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Xn)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===ua)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Tr=new J,An=new Dt,jv=new J(0,0,0),Kv=new J(1,1,1),yi=new J,xo=new J,fn=new J,Yd=new Dt,jd=new Js;class pi{constructor(e=0,n=0,i=0,r=pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return jd.setFromEuler(this),this.setFromQuaternion(jd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pi.DEFAULT_ORDER="XYZ";class Yp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zv=0;const Kd=new J,wr=new Js,Qn=new Dt,_o=new J,gs=new J,Jv=new J,Qv=new Js,Zd=new J(1,0,0),Jd=new J(0,1,0),Qd=new J(0,0,1),ef={type:"added"},eb={type:"removed"},Ar={type:"childadded",child:null},ll={type:"childremoved",child:null};class an extends os{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new J,n=new pi,i=new Js,r=new J(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Dt},normalMatrix:{value:new tt}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,n){return wr.setFromAxisAngle(e,n),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(Zd,e)}rotateY(e){return this.rotateOnAxis(Jd,e)}rotateZ(e){return this.rotateOnAxis(Qd,e)}translateOnAxis(e,n){return Kd.copy(e).applyQuaternion(this.quaternion),this.position.add(Kd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Zd,e)}translateY(e){return this.translateOnAxis(Jd,e)}translateZ(e){return this.translateOnAxis(Qd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?_o.copy(e):_o.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(gs,_o,this.up):Qn.lookAt(_o,gs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),wr.setFromRotationMatrix(Qn),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ef),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(eb),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ef),Ar.child=e,this.dispatchEvent(Ar),Ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,e,Jv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,Qv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),d=o(e.shapes),f=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new J(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new J,ei=new J,cl=new J,ti=new J,Cr=new J,Rr=new J,tf=new J,ul=new J,dl=new J,fl=new J,hl=new It,pl=new It,ml=new It;class Sn{constructor(e=new J,n=new J,i=new J){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),ei.subVectors(i,n),cl.subVectors(e,n);const o=Cn.dot(Cn),a=Cn.dot(ei),l=Cn.dot(cl),c=ei.dot(ei),u=ei.dot(cl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-a*u)*f,g=(o*u-a*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ti.x),l.addScaledVector(o,ti.y),l.addScaledVector(a,ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return hl.setScalar(0),pl.setScalar(0),ml.setScalar(0),hl.fromBufferAttribute(e,n),pl.fromBufferAttribute(e,i),ml.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(hl,s.x),o.addScaledVector(pl,s.y),o.addScaledVector(ml,s.z),o}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),ei.subVectors(e,n),Cn.cross(ei).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Cn.cross(ei).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Sn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Sn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Cr.subVectors(r,i),Rr.subVectors(s,i),ul.subVectors(e,i);const l=Cr.dot(ul),c=Rr.dot(ul);if(l<=0&&c<=0)return n.copy(i);dl.subVectors(e,r);const u=Cr.dot(dl),d=Rr.dot(dl);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Cr,o);fl.subVectors(e,s);const p=Cr.dot(fl),g=Rr.dot(fl);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Rr,a);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return tf.subVectors(s,r),a=(d-u)/(d-u+(p-g)),n.copy(r).addScaledVector(tf,a);const h=1/(m+x+f);return o=x*h,a=f*h,n.copy(i).addScaledVector(Cr,o).addScaledVector(Rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},vo={h:0,s:0,l:0};function gl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ut.workingColorSpace){return this.r=e,this.g=n,this.b=i,ut.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ut.workingColorSpace){if(e=Bv(e,1),n=ot(n,0,1),i=ot(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=gl(o,s,e+1/3),this.g=gl(o,s,e),this.b=gl(o,s,e-1/3)}return ut.colorSpaceToWorking(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=jp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return ut.workingToColorSpace(qt.copy(this),e),Math.round(ot(qt.r*255,0,255))*65536+Math.round(ot(qt.g*255,0,255))*256+Math.round(ot(qt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ut.workingColorSpace){ut.workingToColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ut.workingColorSpace){return ut.workingToColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=yn){ut.workingToColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+n,Ei.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ei),e.getHSL(vo);const i=Ja(Ei.h,vo.h,n),r=Ja(Ei.s,vo.s,n),s=Ja(Ei.l,vo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Ze;Ze.NAMES=jp;let tb=0;class as extends os{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=qr,this.side=ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Yl,this.blendEquation=ir,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==ki&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Yl&&(i.blendDst=this.blendDst),this.blendEquation!==ir&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bu extends as{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pi,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new J,bo=new at;let nb=0;class on{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:nb++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dc,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)bo.fromBufferAttribute(this,n),bo.applyMatrix3(e),this.setXY(n,bo.x,bo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wn(n,this.array)),n}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wn(n,this.array)),n}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wn(n,this.array)),n}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dc&&(e.usage=this.usage),e}}class Kp extends on{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Zp extends on{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class dr extends on{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ib=0;const bn=new Dt,xl=new an,Pr=new J,hn=new Qs,xs=new Qs,Ht=new J;class Fn extends os{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xp(e)?Zp:Kp)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new tt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,n,i){return bn.makeTranslation(e,n,i),this.applyMatrix4(bn),this}scale(e,n,i){return bn.makeScale(e,n,i),this.applyMatrix4(bn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new dr(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];hn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,hn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,hn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(hn.min),this.boundingBox.expandByPoint(hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const i=this.boundingSphere.center;if(hn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(hn.min,xs.min),hn.expandByPoint(Ht),Ht.addVectors(hn.max,xs.max),hn.expandByPoint(Ht)):(hn.expandByPoint(xs.min),hn.expandByPoint(xs.max))}hn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Ht.fromBufferAttribute(a,c),l&&(Pr.fromBufferAttribute(e,c),Ht.add(Pr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new on(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new J,l[R]=new J;const c=new J,u=new J,d=new J,f=new at,p=new at,g=new at,x=new J,m=new J;function h(R,b,E){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,b),d.fromBufferAttribute(i,E),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,E),u.sub(c),d.sub(c),p.sub(f),g.sub(f);const I=1/(p.x*g.y-g.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(I),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(I),a[R].add(x),a[b].add(x),a[E].add(x),l[R].add(m),l[b].add(m),l[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,b=w.length;R<b;++R){const E=w[R],I=E.start,B=E.count;for(let q=I,H=I+B;q<H;q+=3)h(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const S=new J,y=new J,D=new J,L=new J;function P(R){D.fromBufferAttribute(r,R),L.copy(D);const b=a[R];S.copy(b),S.sub(D.multiplyScalar(D.dot(b))).normalize(),y.crossVectors(L,b);const I=y.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,I)}for(let R=0,b=w.length;R<b;++R){const E=w[R],I=E.start,B=E.count;for(let q=I,H=I+B;q<H;q+=3)P(e.getX(q+0)),P(e.getX(q+1)),P(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new on(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const r=new J,s=new J,o=new J,a=new J,l=new J,c=new J,u=new J,d=new J;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=n.count;f<p;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),u.subVectors(o,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,d=a.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*u;for(let h=0;h<u;h++)f[g++]=c[p++]}return new on(f,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const f=c[u],p=e(f,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,p=d.length;f<p;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nf=new Dt,Yi=new $p,yo=new Ra,rf=new J,Eo=new J,So=new J,Mo=new J,_l=new J,To=new J,sf=new J,wo=new J;class qn extends an{constructor(e=new Fn,n=new bu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){To.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(_l.fromBufferAttribute(d,e),o?To.addScaledVector(_l,u):To.addScaledVector(_l.sub(n),u))}n.add(To)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yo.copy(i.boundingSphere),yo.applyMatrix4(s),Yi.copy(e.ray).recast(e.near),!(yo.containsPoint(Yi.origin)===!1&&(Yi.intersectSphere(yo,rf)===null||Yi.origin.distanceToSquared(rf)>(e.far-e.near)**2))&&(nf.copy(s).invert(),Yi.copy(e.ray).applyMatrix4(nf),!(i.boundingBox!==null&&Yi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yi)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,D=S;y<D;y+=3){const L=a.getX(y),P=a.getX(y+1),R=a.getX(y+2);r=Ao(this,h,e,i,c,u,d,L,P,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const w=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);r=Ao(this,o,e,i,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){const m=f[g],h=o[m.materialIndex],w=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=w,D=S;y<D;y+=3){const L=y,P=y+1,R=y+2;r=Ao(this,h,e,i,c,u,d,L,P,R),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,h=x;m<h;m+=3){const w=m,S=m+1,y=m+2;r=Ao(this,o,e,i,c,u,d,w,S,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function rb(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ki,a),l===null)return null;wo.copy(a),wo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(wo);return c<n.near||c>n.far?null:{distance:c,point:wo.clone(),object:t}}function Ao(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Eo),t.getVertexPosition(l,So),t.getVertexPosition(c,Mo);const u=rb(t,e,n,i,Eo,So,Mo,sf);if(u){const d=new J;Sn.getBarycoord(sf,Eo,So,Mo,d),r&&(u.uv=Sn.getInterpolatedAttribute(r,a,l,c,d,new at)),s&&(u.uv1=Sn.getInterpolatedAttribute(s,a,l,c,d,new at)),o&&(u.normal=Sn.getInterpolatedAttribute(o,a,l,c,d,new J),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new J,materialIndex:0};Sn.getNormal(Eo,So,Mo,f.normal),u.face=f,u.barycoord=d}return u}class eo extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new dr(c,3)),this.setAttribute("normal",new dr(u,3)),this.setAttribute("uv",new dr(d,2));function g(x,m,h,w,S,y,D,L,P,R,b){const E=y/P,I=D/R,B=y/2,q=D/2,H=L/2,j=P+1,$=R+1;let z=0,U=0;const ne=new J;for(let fe=0;fe<$;fe++){const Ee=fe*I-q;for(let Me=0;Me<j;Me++){const Qe=Me*E-B;ne[x]=Qe*w,ne[m]=Ee*S,ne[h]=H,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[h]=L>0?1:-1,u.push(ne.x,ne.y,ne.z),d.push(Me/P),d.push(1-fe/R),z+=1}}for(let fe=0;fe<R;fe++)for(let Ee=0;Ee<P;Ee++){const Me=f+Ee+j*fe,Qe=f+Ee+j*(fe+1),We=f+(Ee+1)+j*(fe+1),ie=f+(Ee+1)+j*fe;l.push(Me,Qe,ie),l.push(Qe,We,ie),U+=6}a.addGroup(p,U,b),p+=U,f+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function sb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Jp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}const ob={clone:ss,merge:tn};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Bi extends as{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Qp extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new J,of=new at,af=new at;class En extends Qp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Lc*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lc*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,n){return this.getViewBounds(e,of,af),n.subVectors(af,of)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Za*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ir=-90,Dr=1;class cb extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Ir,Dr,e,n);r.layers=this.layers,this.add(r);const s=new En(Ir,Dr,e,n);s.layers=this.layers,this.add(s);const o=new En(Ir,Dr,e,n);o.layers=this.layers,this.add(o);const a=new En(Ir,Dr,e,n);a.layers=this.layers,this.add(a);const l=new En(Ir,Dr,e,n);l.layers=this.layers,this.add(l);const c=new En(Ir,Dr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Xn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ua)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class em extends Vt{constructor(e=[],n=ns,i,r,s,o,a,l,c,u){super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ub extends gr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new em(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new eo(5,5,5),s=new Bi({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Li});s.uniforms.tEquirect.value=n;const o=new qn(r,s),a=n.minFilter;return n.minFilter===ar&&(n.minFilter=Kt),new cb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Es extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Es,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Es,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Es,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),h=this._getHandJoint(c,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(db)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Es;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class tm extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pi,this.environmentIntensity=1,this.environmentRotation=new pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class fb{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Dc,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new J;class fa{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyMatrix4(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.applyNormalMatrix(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Qt.fromBufferAttribute(this,n),Qt.transformDirection(e),this.setXYZ(n,Qt.x,Qt.y,Qt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Wn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=gt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Wn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Wn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Wn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Wn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=gt(n,this.array),i=gt(i,this.array),r=gt(r,this.array),s=gt(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new on(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nm extends as{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Lr;const _s=new J,Ur=new J,Nr=new J,Fr=new at,vs=new at,im=new Dt,Co=new J,bs=new J,Ro=new J,lf=new at,bl=new at,cf=new at;class hb extends an{constructor(e=new nm){if(super(),this.isSprite=!0,this.type="Sprite",Lr===void 0){Lr=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new fb(n,5);Lr.setIndex([0,1,2,0,2,3]),Lr.setAttribute("position",new fa(i,3,0,!1)),Lr.setAttribute("uv",new fa(i,2,3,!1))}this.geometry=Lr,this.material=e,this.center=new at(.5,.5),this.count=1}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ur.setFromMatrixScale(this.matrixWorld),im.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ur.multiplyScalar(-Nr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Po(Co.set(-.5,-.5,0),Nr,o,Ur,r,s),Po(bs.set(.5,-.5,0),Nr,o,Ur,r,s),Po(Ro.set(.5,.5,0),Nr,o,Ur,r,s),lf.set(0,0),bl.set(1,0),cf.set(1,1);let a=e.ray.intersectTriangle(Co,bs,Ro,!1,_s);if(a===null&&(Po(bs.set(-.5,.5,0),Nr,o,Ur,r,s),bl.set(0,1),a=e.ray.intersectTriangle(Co,Ro,bs,!1,_s),a===null))return;const l=e.ray.origin.distanceTo(_s);l<e.near||l>e.far||n.push({distance:l,point:_s.clone(),uv:Sn.getInterpolation(_s,Co,bs,Ro,lf,bl,cf,new at),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Po(t,e,n,i,r,s){Fr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(vs.x=s*Fr.x-r*Fr.y,vs.y=r*Fr.x+s*Fr.y):vs.copy(Fr),t.copy(e),t.x+=vs.x,t.y+=vs.y,t.applyMatrix4(im)}const yl=new J,pb=new J,mb=new tt;class Qi{constructor(e=new J(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yl.subVectors(i,n).cross(pb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||mb.getNormalMatrix(e),r=this.coplanarPoint(yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ji=new Ra,gb=new at(.5,.5),Io=new J;class rm{constructor(e=new Qi,n=new Qi,i=new Qi,r=new Qi,s=new Qi,o=new Qi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Xn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],p=s[7],g=s[8],x=s[9],m=s[10],h=s[11],w=s[12],S=s[13],y=s[14],D=s[15];if(r[0].setComponents(c-o,p-u,h-g,D-w).normalize(),r[1].setComponents(c+o,p+u,h+g,D+w).normalize(),r[2].setComponents(c+a,p+d,h+x,D+S).normalize(),r[3].setComponents(c-a,p-d,h-x,D-S).normalize(),i)r[4].setComponents(l,f,m,y).normalize(),r[5].setComponents(c-l,p-f,h-m,D-y).normalize();else if(r[4].setComponents(c-l,p-f,h-m,D-y).normalize(),n===Xn)r[5].setComponents(c+l,p+f,h+m,D+y).normalize();else if(n===ua)r[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(e){ji.center.set(0,0,0);const n=gb.distanceTo(e.center);return ji.radius=.7071067811865476+n,ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Io.x=r.normal.x>0?e.max.x:e.min.x,Io.y=r.normal.y>0?e.max.y:e.min.y,Io.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Io)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends as{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const uf=new Dt,Nc=new $p,Do=new Ra,Lo=new J;class df extends an{constructor(e=new Fn,n=new Uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(r),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;uf.copy(r).invert(),Nc.copy(e.ray).applyMatrix4(uf);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);Lo.fromBufferAttribute(d,m),ff(Lo,m,l,r,e,n,this)}}else{const f=Math.max(0,o.start),p=Math.min(d.count,o.start+o.count);for(let g=f,x=p;g<x;g++)Lo.fromBufferAttribute(d,g),ff(Lo,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ff(t,e,n,i,r,s,o){const a=Nc.distanceSqToPoint(t);if(a<n){const l=new J;Nc.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class jr extends Vt{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sm extends Vt{constructor(e,n,i=mr,r,s,o,a=In,l=In,c,u=Gs,d=1){if(u!==Gs&&u!==Ws)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new vu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class to extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,d=e/a,f=n/l,p=[],g=[],x=[],m=[];for(let h=0;h<u;h++){const w=h*f-o;for(let S=0;S<c;S++){const y=S*d-s;g.push(y,-w,0),x.push(0,0,1),m.push(S/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let w=0;w<a;w++){const S=w+c*h,y=w+c*(h+1),D=w+1+c*(h+1),L=w+1+c*h;p.push(S,y,L),p.push(y,D,L)}this.setIndex(p),this.setAttribute("position",new dr(g,3)),this.setAttribute("normal",new dr(x,3)),this.setAttribute("uv",new dr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.widthSegments,e.heightSegments)}}class xb extends as{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _b extends as{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class om extends Qp{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class vb extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function hf(t,e,n,i){const r=yb(i);switch(n){case Bp:return t*e;case Hp:return t*e/r.components*r.byteLength;case gu:return t*e/r.components*r.byteLength;case Vp:return t*e*2/r.components*r.byteLength;case xu:return t*e*2/r.components*r.byteLength;case zp:return t*e*3/r.components*r.byteLength;case Rn:return t*e*4/r.components*r.byteLength;case _u:return t*e*4/r.components*r.byteLength;case Go:case Wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ac:case cc:return Math.max(t,16)*Math.max(e,8)/4;case oc:case lc:return Math.max(t,8)*Math.max(e,8)/2;case uc:case dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case mc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case gc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Mc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case wc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case $o:case Ac:case Cc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Gp:case Rc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Pc:case Ic:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yb(t){switch(t){case hi:case Fp:return{byteLength:1,components:1};case Hs:case Op:case Zs:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case mr:case hu:case ai:return{byteLength:4,components:1};case kp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);function am(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Eb(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function i(a,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,a),d.length===0)t.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var Sb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mb=`#ifdef USE_ALPHAHASH
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
#endif`,Tb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ab=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Cb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rb=`#ifdef USE_AOMAP
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
#endif`,Pb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ib=`#ifdef USE_BATCHING
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
#endif`,Db=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ub=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Nb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fb=`#ifdef USE_IRIDESCENCE
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
#endif`,Ob=`#ifdef USE_BUMPMAP
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
#endif`,kb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qb=`#define PI 3.141592653589793
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
} // validated`,$b=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yb=`vec3 transformedNormal = objectNormal;
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
#endif`,jb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Qb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ey=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ty=`#ifdef USE_ENVMAP
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
#endif`,ny=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iy=`#ifdef USE_ENVMAP
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
#endif`,ry=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sy=`#ifdef USE_ENVMAP
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
#endif`,oy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ay=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ly=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uy=`#ifdef USE_GRADIENTMAP
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
}`,dy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,py=`uniform bool receiveShadow;
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
#endif`,my=`#ifdef USE_ENVMAP
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
#endif`,gy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_y=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,by=`PhysicalMaterial material;
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
#endif`,yy=`struct PhysicalMaterial {
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
}`,Ey=`
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
#endif`,Sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ty=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ay=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Cy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ry=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dy=`#if defined( USE_POINTS_UV )
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
#endif`,Ly=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ny=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ky=`#ifdef USE_MORPHTARGETS
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
#endif`,By=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Hy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xy=`#ifdef USE_NORMALMAP
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
#endif`,qy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$y=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ky=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,aE=`float getShadowMask() {
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
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
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
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
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
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
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
#endif`,xE=`#ifdef USE_TRANSMISSION
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
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const EE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SE=`uniform sampler2D t2D;
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
}`,ME=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
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
}`,RE=`#if DEPTH_PACKING == 3200
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
}`,PE=`#define DISTANCE
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
}`,IE=`#define DISTANCE
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,LE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UE=`uniform float scale;
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
}`,NE=`uniform vec3 diffuse;
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
}`,FE=`#include <common>
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
}`,OE=`uniform vec3 diffuse;
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
}`,kE=`#define LAMBERT
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
}`,BE=`#define LAMBERT
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
}`,zE=`#define MATCAP
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
}`,HE=`#define MATCAP
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
}`,VE=`#define NORMAL
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
}`,GE=`#define NORMAL
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
}`,WE=`#define PHONG
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
}`,XE=`#define PHONG
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
}`,qE=`#define STANDARD
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
}`,$E=`#define STANDARD
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
}`,YE=`#define TOON
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
}`,jE=`#define TOON
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
}`,KE=`uniform float size;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,JE=`#include <common>
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
}`,QE=`uniform vec3 color;
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
}`,eS=`uniform float rotation;
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
}`,tS=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Sb,alphahash_pars_fragment:Mb,alphamap_fragment:Tb,alphamap_pars_fragment:wb,alphatest_fragment:Ab,alphatest_pars_fragment:Cb,aomap_fragment:Rb,aomap_pars_fragment:Pb,batching_pars_vertex:Ib,batching_vertex:Db,begin_vertex:Lb,beginnormal_vertex:Ub,bsdfs:Nb,iridescence_fragment:Fb,bumpmap_pars_fragment:Ob,clipping_planes_fragment:kb,clipping_planes_pars_fragment:Bb,clipping_planes_pars_vertex:zb,clipping_planes_vertex:Hb,color_fragment:Vb,color_pars_fragment:Gb,color_pars_vertex:Wb,color_vertex:Xb,common:qb,cube_uv_reflection_fragment:$b,defaultnormal_vertex:Yb,displacementmap_pars_vertex:jb,displacementmap_vertex:Kb,emissivemap_fragment:Zb,emissivemap_pars_fragment:Jb,colorspace_fragment:Qb,colorspace_pars_fragment:ey,envmap_fragment:ty,envmap_common_pars_fragment:ny,envmap_pars_fragment:iy,envmap_pars_vertex:ry,envmap_physical_pars_fragment:my,envmap_vertex:sy,fog_vertex:oy,fog_pars_vertex:ay,fog_fragment:ly,fog_pars_fragment:cy,gradientmap_pars_fragment:uy,lightmap_pars_fragment:dy,lights_lambert_fragment:fy,lights_lambert_pars_fragment:hy,lights_pars_begin:py,lights_toon_fragment:gy,lights_toon_pars_fragment:xy,lights_phong_fragment:_y,lights_phong_pars_fragment:vy,lights_physical_fragment:by,lights_physical_pars_fragment:yy,lights_fragment_begin:Ey,lights_fragment_maps:Sy,lights_fragment_end:My,logdepthbuf_fragment:Ty,logdepthbuf_pars_fragment:wy,logdepthbuf_pars_vertex:Ay,logdepthbuf_vertex:Cy,map_fragment:Ry,map_pars_fragment:Py,map_particle_fragment:Iy,map_particle_pars_fragment:Dy,metalnessmap_fragment:Ly,metalnessmap_pars_fragment:Uy,morphinstance_vertex:Ny,morphcolor_vertex:Fy,morphnormal_vertex:Oy,morphtarget_pars_vertex:ky,morphtarget_vertex:By,normal_fragment_begin:zy,normal_fragment_maps:Hy,normal_pars_fragment:Vy,normal_pars_vertex:Gy,normal_vertex:Wy,normalmap_pars_fragment:Xy,clearcoat_normal_fragment_begin:qy,clearcoat_normal_fragment_maps:$y,clearcoat_pars_fragment:Yy,iridescence_pars_fragment:jy,opaque_fragment:Ky,packing:Zy,premultiplied_alpha_fragment:Jy,project_vertex:Qy,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:oE,shadowmask_pars_fragment:aE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:dE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:xE,uv_pars_fragment:_E,uv_pars_vertex:vE,uv_vertex:bE,worldpos_vertex:yE,background_vert:EE,background_frag:SE,backgroundCube_vert:ME,backgroundCube_frag:TE,cube_vert:wE,cube_frag:AE,depth_vert:CE,depth_frag:RE,distanceRGBA_vert:PE,distanceRGBA_frag:IE,equirect_vert:DE,equirect_frag:LE,linedashed_vert:UE,linedashed_frag:NE,meshbasic_vert:FE,meshbasic_frag:OE,meshlambert_vert:kE,meshlambert_frag:BE,meshmatcap_vert:zE,meshmatcap_frag:HE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:WE,meshphong_frag:XE,meshphysical_vert:qE,meshphysical_frag:$E,meshtoon_vert:YE,meshtoon_frag:jE,points_vert:KE,points_frag:ZE,shadow_vert:JE,shadow_frag:QE,sprite_vert:eS,sprite_frag:tS},Re={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},Vn={basic:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:tn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:tn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:tn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Ze(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:tn([Re.points,Re.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:tn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:tn([Re.common,Re.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:tn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:tn([Re.sprite,Re.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:tn([Re.common,Re.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:tn([Re.lights,Re.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Vn.physical={uniforms:tn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Uo={r:0,b:0,g:0},Ki=new pi,nS=new Dt;function iS(t,e,n,i,r,s,o){const a=new Ze(0);let l=s===!0?0:1,c,u,d=null,f=0,p=null;function g(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?n:e).get(y)),y}function x(S){let y=!1;const D=g(S);D===null?h(a,l):D&&D.isColor&&(h(D,1),y=!0);const L=t.xr.getEnvironmentBlendMode();L==="additive"?i.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(S,y){const D=g(y);D&&(D.isCubeTexture||D.mapping===Ca)?(u===void 0&&(u=new qn(new eo(1,1,1),new Bi({name:"BackgroundCubeMaterial",uniforms:ss(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Ki.copy(y.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),u.material.uniforms.envMap.value=D,u.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(nS.makeRotationFromEuler(Ki)),u.material.toneMapped=ut.getTransfer(D.colorSpace)!==mt,(d!==D||f!==D.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=D,f=D.version,p=t.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):D&&D.isTexture&&(c===void 0&&(c=new qn(new to(2,2),new Bi({name:"BackgroundMaterial",uniforms:ss(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:ki,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=D,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ut.getTransfer(D.colorSpace)!==mt,D.matrixAutoUpdate===!0&&D.updateMatrix(),c.material.uniforms.uvTransform.value.copy(D.matrix),(d!==D||f!==D.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=D,f=D.version,p=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function h(S,y){S.getRGB(Uo,Jp(t)),i.buffers.color.setClear(Uo.r,Uo.g,Uo.b,y,o)}function w(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),l=y,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,h(a,l)},render:x,addToRenderList:m,dispose:w}}function rS(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(E,I,B,q,H){let j=!1;const $=d(q,B,I);s!==$&&(s=$,c(s.object)),j=p(E,q,B,H),j&&g(E,q,B,H),H!==null&&e.update(H,t.ELEMENT_ARRAY_BUFFER),(j||o)&&(o=!1,y(E,I,B,q),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return t.createVertexArray()}function c(E){return t.bindVertexArray(E)}function u(E){return t.deleteVertexArray(E)}function d(E,I,B){const q=B.wireframe===!0;let H=i[E.id];H===void 0&&(H={},i[E.id]=H);let j=H[I.id];j===void 0&&(j={},H[I.id]=j);let $=j[q];return $===void 0&&($=f(l()),j[q]=$),$}function f(E){const I=[],B=[],q=[];for(let H=0;H<n;H++)I[H]=0,B[H]=0,q[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:B,attributeDivisors:q,object:E,attributes:{},index:null}}function p(E,I,B,q){const H=s.attributes,j=I.attributes;let $=0;const z=B.getAttributes();for(const U in z)if(z[U].location>=0){const fe=H[U];let Ee=j[U];if(Ee===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(Ee=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(Ee=E.instanceColor)),fe===void 0||fe.attribute!==Ee||Ee&&fe.data!==Ee.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function g(E,I,B,q){const H={},j=I.attributes;let $=0;const z=B.getAttributes();for(const U in z)if(z[U].location>=0){let fe=j[U];fe===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const Ee={};Ee.attribute=fe,fe&&fe.data&&(Ee.data=fe.data),H[U]=Ee,$++}s.attributes=H,s.attributesNum=$,s.index=q}function x(){const E=s.newAttributes;for(let I=0,B=E.length;I<B;I++)E[I]=0}function m(E){h(E,0)}function h(E,I){const B=s.newAttributes,q=s.enabledAttributes,H=s.attributeDivisors;B[E]=1,q[E]===0&&(t.enableVertexAttribArray(E),q[E]=1),H[E]!==I&&(t.vertexAttribDivisor(E,I),H[E]=I)}function w(){const E=s.newAttributes,I=s.enabledAttributes;for(let B=0,q=I.length;B<q;B++)I[B]!==E[B]&&(t.disableVertexAttribArray(B),I[B]=0)}function S(E,I,B,q,H,j,$){$===!0?t.vertexAttribIPointer(E,I,B,H,j):t.vertexAttribPointer(E,I,B,q,H,j)}function y(E,I,B,q){x();const H=q.attributes,j=B.getAttributes(),$=I.defaultAttributeValues;for(const z in j){const U=j[z];if(U.location>=0){let ne=H[z];if(ne===void 0&&(z==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),z==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const fe=ne.normalized,Ee=ne.itemSize,Me=e.get(ne);if(Me===void 0)continue;const Qe=Me.buffer,We=Me.type,ie=Me.bytesPerElement,_e=We===t.INT||We===t.UNSIGNED_INT||ne.gpuType===hu;if(ne.isInterleavedBufferAttribute){const F=ne.data,oe=F.stride,se=ne.offset;if(F.isInstancedInterleavedBuffer){for(let de=0;de<U.locationSize;de++)h(U.location+de,F.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let de=0;de<U.locationSize;de++)m(U.location+de);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let de=0;de<U.locationSize;de++)S(U.location+de,Ee/U.locationSize,We,fe,oe*ie,(se+Ee/U.locationSize*de)*ie,_e)}else{if(ne.isInstancedBufferAttribute){for(let F=0;F<U.locationSize;F++)h(U.location+F,ne.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let F=0;F<U.locationSize;F++)m(U.location+F);t.bindBuffer(t.ARRAY_BUFFER,Qe);for(let F=0;F<U.locationSize;F++)S(U.location+F,Ee/U.locationSize,We,fe,Ee*ie,Ee/U.locationSize*F*ie,_e)}}else if($!==void 0){const fe=$[z];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(U.location,fe);break;case 3:t.vertexAttrib3fv(U.location,fe);break;case 4:t.vertexAttrib4fv(U.location,fe);break;default:t.vertexAttrib1fv(U.location,fe)}}}}w()}function D(){R();for(const E in i){const I=i[E];for(const B in I){const q=I[B];for(const H in q)u(q[H].object),delete q[H];delete I[B]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const I=i[E.id];for(const B in I){const q=I[B];for(const H in q)u(q[H].object),delete q[H];delete I[B]}delete i[E.id]}function P(E){for(const I in i){const B=i[I];if(B[E.id]===void 0)continue;const q=B[E.id];for(const H in q)u(q[H].object),delete q[H];delete B[E.id]}}function R(){b(),o=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:w}}function sS(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,d){d!==0&&(t.drawArraysInstanced(i,c,u,d),n.update(u,i,d))}function a(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];n.update(p,i,1)}function l(c,u,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=u[x]*f[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function oS(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==Rn&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const R=P===Zs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==hi&&i.convert(P)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ai&&!R)}function l(P){if(P==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),h=t.getParameter(t.MAX_VERTEX_ATTRIBS),w=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,L=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:y,vertexTextures:D,maxSamples:L}}function aS(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qi,a=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||r;return r=f,i=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,h=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const w=s?0:i,S=w*4;let y=h.clippingState||null;l.value=y,y=u(g,f,S,p);for(let D=0;D!==S;++D)y[D]=n[D];h.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const h=p+x*4,w=f.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<h)&&(m=new Float32Array(h));for(let S=0,y=p;S!==x;++S,y+=4)o.copy(d[S]).applyMatrix4(w,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function lS(t){let e=new WeakMap;function n(o,a){return a===nc?o.mapping=ns:a===ic&&(o.mapping=is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nc||a===ic)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new ub(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const zr=4,pf=[.125,.215,.35,.446,.526,.582],rr=20,El=new om,mf=new Ze;let Sl=null,Ml=0,Tl=0,wl=!1;const er=(1+Math.sqrt(5))/2,Or=1/er,gf=[new J(-er,Or,0),new J(er,Or,0),new J(-Or,0,er),new J(Or,0,er),new J(0,er,-Or),new J(0,er,Or),new J(-1,1,-1),new J(1,1,-1),new J(-1,1,1),new J(1,1,1)],cS=new J;class xf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=cS}=s;Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sl,Ml,Tl),this._renderer.xr.enabled=wl,e.scissorTest=!1,No(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sl=this._renderer.getRenderTarget(),Ml=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Zs,format:Rn,colorSpace:rs,depthBuffer:!1},r=_f(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_f(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uS(s)),this._blurMaterial=dS(s,e,n)}return r}_compileMaterial(e){const n=new qn(this._lodPlanes[0],e);this._renderer.compile(n,El)}_sceneToCubeUV(e,n,i,r,s){const l=new En(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(mf),d.toneMapping=Ui,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const x=new bu({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),m=new qn(new eo,x);let h=!1;const w=e.background;w?w.isColor&&(x.color.copy(w),e.background=null,h=!0):(x.color.copy(mf),h=!0);for(let S=0;S<6;S++){const y=S%3;y===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):y===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const D=this._cubeSize;No(r,y*D,S>2?D:0,D,D),d.setRenderTarget(r),h&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=w}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ns||e.mapping===is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new qn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;No(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,El)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(r-s-1)%gf.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new qn(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*rr-1),x=s/g,m=isFinite(s)?1+Math.floor(u*x):rr;m>rr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rr}`);const h=[];let w=0;for(let P=0;P<rr;++P){const R=P/x,b=Math.exp(-R*R/2);h.push(b),P===0?w+=b:P<m&&(w+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/w;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=h,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-i;const y=this._sizeLods[r],D=3*y*(r>S-zr?r-S+zr:0),L=4*(this._cubeSize-y);No(n,D,L,3*y,2*y),l.setRenderTarget(n),l.render(d,El)}}function uS(t){const e=[],n=[],i=[];let r=t;const s=t-zr+1+pf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-zr?l=pf[o-t+zr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,d=1+c,f=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,x=3,m=2,h=1,w=new Float32Array(x*g*p),S=new Float32Array(m*g*p),y=new Float32Array(h*g*p);for(let L=0;L<p;L++){const P=L%3*2/3-1,R=L>2?0:-1,b=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];w.set(b,x*g*L),S.set(f,m*g*L);const E=[L,L,L,L,L,L];y.set(E,h*g*L)}const D=new Fn;D.setAttribute("position",new on(w,x)),D.setAttribute("uv",new on(S,m)),D.setAttribute("faceIndex",new on(y,h)),e.push(D),r>zr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _f(t,e,n){const i=new gr(t,e,n);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function No(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function dS(t,e,n){const i=new Float32Array(rr),r=new J(0,1,0);return new Bi({name:"SphericalGaussianBlur",defines:{n:rr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function vf(){return new Bi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Li,depthTest:!1,depthWrite:!1})}function bf(){return new Bi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Li,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}function fS(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===nc||l===ic,u=l===ns||l===is;if(c||u){let d=e.get(a);const f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new xf(t)),d=c?n.fromEquirectangular(a,d):n.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),d.texture;if(d!==void 0)return d.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new xf(t)),d=c?n.fromEquirectangular(a):n.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,e.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function hS(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&$r("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function pS(t,e,n,i){const r={},s=new WeakMap;function o(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(d,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const w=p.array;x=p.version;for(let S=0,y=w.length;S<y;S+=3){const D=w[S+0],L=w[S+1],P=w[S+2];f.push(D,L,L,P,P,D)}}else if(g!==void 0){const w=g.array;x=g.version;for(let S=0,y=w.length/3-1;S<y;S+=3){const D=S+0,L=S+1,P=S+2;f.push(D,L,L,P,P,D)}}else return;const m=new(Xp(f)?Zp:Kp)(f,1);m.version=x;const h=s.get(d);h&&e.remove(h),s.set(d,m)}function u(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function mS(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,p){t.drawElements(i,p,s,f*o),n.update(p,i,1)}function c(f,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,f*o,g),n.update(p,i,g))}function u(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,f,0,g);let m=0;for(let h=0;h<g;h++)m+=p[h];n.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<f.length;h++)c(f[h]/o,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,f,0,x,0,g);let h=0;for(let w=0;w<g;w++)h+=p[w]*x[w];n.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function gS(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xS(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(a);if(f===void 0||f.count!==d){let b=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let y=a.attributes.position.count*S,D=1;y>e.maxTextureSize&&(D=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const L=new Float32Array(y*D*4*d),P=new qp(L,y,D,d);P.type=ai,P.needsUpdate=!0;const R=S*4;for(let E=0;E<d;E++){const I=m[E],B=h[E],q=w[E],H=y*D*4*E;for(let j=0;j<I.count;j++){const $=j*R;p===!0&&(r.fromBufferAttribute(I,j),L[H+$+0]=r.x,L[H+$+1]=r.y,L[H+$+2]=r.z,L[H+$+3]=0),g===!0&&(r.fromBufferAttribute(B,j),L[H+$+4]=r.x,L[H+$+5]=r.y,L[H+$+6]=r.z,L[H+$+7]=0),x===!0&&(r.fromBufferAttribute(q,j),L[H+$+8]=r.x,L[H+$+9]=r.y,L[H+$+10]=r.z,L[H+$+11]=q.itemSize===4?r.w:1)}}f={count:d,texture:P,size:new at(y,D)},i.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function _S(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const lm=new Vt,yf=new sm(1,1),cm=new qp,um=new $v,dm=new em,Ef=[],Sf=[],Mf=new Float32Array(16),Tf=new Float32Array(9),wf=new Float32Array(4);function ls(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ef[r];if(s===void 0&&(s=new Float32Array(r),Ef[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Bt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Pa(t,e){let n=Sf[e];n===void 0&&(n=new Int32Array(e),Sf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function vS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function yS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Bt(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function ES(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function SS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;wf.set(i),t.uniformMatrix2fv(this.addr,!1,wf),zt(n,i)}}function MS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Tf.set(i),t.uniformMatrix3fv(this.addr,!1,Tf),zt(n,i)}}function TS(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Bt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Bt(n,i))return;Mf.set(i),t.uniformMatrix4fv(this.addr,!1,Mf),zt(n,i)}}function wS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function AS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function CS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function RS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function PS(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function IS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Bt(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function DS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Bt(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function LS(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Bt(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function US(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(yf.compareFunction=Wp,s=yf):s=lm,n.setTexture2D(e||s,r)}function NS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||um,r)}function FS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||dm,r)}function OS(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||cm,r)}function kS(t){switch(t){case 5126:return vS;case 35664:return bS;case 35665:return yS;case 35666:return ES;case 35674:return SS;case 35675:return MS;case 35676:return TS;case 5124:case 35670:return wS;case 35667:case 35671:return AS;case 35668:case 35672:return CS;case 35669:case 35673:return RS;case 5125:return PS;case 36294:return IS;case 36295:return DS;case 36296:return LS;case 35678:case 36198:case 36298:case 36306:case 35682:return US;case 35679:case 36299:case 36307:return NS;case 35680:case 36300:case 36308:case 36293:return FS;case 36289:case 36303:case 36311:case 36292:return OS}}function BS(t,e){t.uniform1fv(this.addr,e)}function zS(t,e){const n=ls(e,this.size,2);t.uniform2fv(this.addr,n)}function HS(t,e){const n=ls(e,this.size,3);t.uniform3fv(this.addr,n)}function VS(t,e){const n=ls(e,this.size,4);t.uniform4fv(this.addr,n)}function GS(t,e){const n=ls(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function WS(t,e){const n=ls(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function XS(t,e){const n=ls(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qS(t,e){t.uniform1iv(this.addr,e)}function $S(t,e){t.uniform2iv(this.addr,e)}function YS(t,e){t.uniform3iv(this.addr,e)}function jS(t,e){t.uniform4iv(this.addr,e)}function KS(t,e){t.uniform1uiv(this.addr,e)}function ZS(t,e){t.uniform2uiv(this.addr,e)}function JS(t,e){t.uniform3uiv(this.addr,e)}function QS(t,e){t.uniform4uiv(this.addr,e)}function eM(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||lm,s[o])}function tM(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||um,s[o])}function nM(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||dm,s[o])}function iM(t,e,n){const i=this.cache,r=e.length,s=Pa(n,r);Bt(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||cm,s[o])}function rM(t){switch(t){case 5126:return BS;case 35664:return zS;case 35665:return HS;case 35666:return VS;case 35674:return GS;case 35675:return WS;case 35676:return XS;case 5124:case 35670:return qS;case 35667:case 35671:return $S;case 35668:case 35672:return YS;case 35669:case 35673:return jS;case 5125:return KS;case 36294:return ZS;case 36295:return JS;case 36296:return QS;case 35678:case 36198:case 36298:case 36306:case 35682:return eM;case 35679:case 36299:case 36307:return tM;case 35680:case 36300:case 36308:case 36293:return nM;case 36289:case 36303:case 36311:case 36292:return iM}}class sM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=kS(n.type)}}class oM{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=rM(n.type)}}class aM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function Af(t,e){t.seq.push(e),t.map[e.id]=e}function lM(t,e,n){const i=t.name,r=i.length;for(Al.lastIndex=0;;){const s=Al.exec(i),o=Al.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Af(n,c===void 0?new sM(a,t,e):new oM(a,t,e));break}else{let d=n.map[a];d===void 0&&(d=new aM(a),Af(n,d)),n=d}}}class Yo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);lM(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Cf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const cM=37297;let uM=0;function dM(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Rf=new tt;function fM(t){ut._getMatrix(Rf,ut.workingColorSpace,t);const e=`mat3( ${Rf.elements.map(n=>n.toFixed(4))} )`;switch(ut.getTransfer(t)){case ca:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Pf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+dM(t.getShaderSource(e),a)}else return s}function hM(t,e){const n=fM(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function pM(t,e){let n;switch(e){case bv:n="Linear";break;case yv:n="Reinhard";break;case Ev:n="Cineon";break;case Sv:n="ACESFilmic";break;case Tv:n="AgX";break;case wv:n="Neutral";break;case Mv:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fo=new J;function mM(){ut.getLuminanceCoefficients(Fo);const t=Fo.x.toFixed(4),e=Fo.y.toFixed(4),n=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gM(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function xM(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function _M(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Ss(t){return t!==""}function If(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Df(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vM=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fc(t){return t.replace(vM,yM)}const bM=new Map;function yM(t,e){let n=nt[e];if(n===void 0){const i=bM.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fc(n)}const EM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(t){return t.replace(EM,SM)}function SM(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Uf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function MM(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Lp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Q0?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ni&&(e="SHADOWMAP_TYPE_VSM"),e}function TM(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ns:case is:e="ENVMAP_TYPE_CUBE";break;case Ca:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wM(t){let e="ENVMAP_MODE_REFLECTION";return t.envMap&&t.envMapMode===is&&(e="ENVMAP_MODE_REFRACTION"),e}function AM(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case _v:e="ENVMAP_BLENDING_MIX";break;case vv:e="ENVMAP_BLENDING_ADD";break}return e}function CM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function RM(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=MM(n),c=TM(n),u=wM(n),d=AM(n),f=CM(n),p=gM(n),g=xM(s),x=r.createProgram();let m,h,w=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ss).join(`
`),h.length>0&&(h+=`
`)):(m=[Uf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),h=[Uf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ui?"#define TONE_MAPPING":"",n.toneMapping!==Ui?nt.tonemapping_pars_fragment:"",n.toneMapping!==Ui?pM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,hM("linearToOutputTexel",n.outputColorSpace),mM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ss).join(`
`)),o=Fc(o),o=If(o,n),o=Df(o,n),a=Fc(a),a=If(a,n),a=Df(a,n),o=Lf(o),a=Lf(a),n.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",n.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const S=w+m+o,y=w+h+a,D=Cf(r,r.VERTEX_SHADER,S),L=Cf(r,r.FRAGMENT_SHADER,y);r.attachShader(x,D),r.attachShader(x,L),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function P(I){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(x)||"",q=r.getShaderInfoLog(D)||"",H=r.getShaderInfoLog(L)||"",j=B.trim(),$=q.trim(),z=H.trim();let U=!0,ne=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(U=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,D,L);else{const fe=Pf(r,D,"vertex"),Ee=Pf(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+fe+`
`+Ee)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):($===""||z==="")&&(ne=!1);ne&&(I.diagnostics={runnable:U,programLog:j,vertexShader:{log:$,prefix:m},fragmentShader:{log:z,prefix:h}})}r.deleteShader(D),r.deleteShader(L),R=new Yo(r,x),b=_M(r,x)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(x,cM)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=uM++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=L,this}let PM=0;class IM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new DM(e),n.set(e,i)),i}}class DM{constructor(e){this.id=PM++,this.code=e,this.usedTimes=0}}function LM(t,e,n,i,r,s,o){const a=new Yp,l=new IM,c=new Set,u=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return c.add(b),b===0?"uv":`uv${b}`}function m(b,E,I,B,q){const H=B.fog,j=q.geometry,$=b.isMeshStandardMaterial?B.environment:null,z=(b.isMeshStandardMaterial?n:e).get(b.envMap||$),U=z&&z.mapping===Ca?z.image.height:null,ne=g[b.type];b.precision!==null&&(p=r.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const fe=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ee=fe!==void 0?fe.length:0;let Me=0;j.morphAttributes.position!==void 0&&(Me=1),j.morphAttributes.normal!==void 0&&(Me=2),j.morphAttributes.color!==void 0&&(Me=3);let Qe,We,ie,_e;if(ne){const he=Vn[ne];Qe=he.vertexShader,We=he.fragmentShader}else Qe=b.vertexShader,We=b.fragmentShader,l.update(b),ie=l.getVertexShaderID(b),_e=l.getFragmentShaderID(b);const F=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),se=q.isInstancedMesh===!0,de=q.isBatchedMesh===!0,Pe=!!b.map,A=!!b.matcap,_=!!z,O=!!b.aoMap,X=!!b.lightMap,Z=!!b.bumpMap,W=!!b.normalMap,pe=!!b.displacementMap,Q=!!b.emissiveMap,le=!!b.metalnessMap,ce=!!b.roughnessMap,Ce=b.anisotropy>0,M=b.clearcoat>0,v=b.dispersion>0,N=b.iridescence>0,Y=b.sheen>0,ae=b.transmission>0,K=Ce&&!!b.anisotropyMap,Ie=M&&!!b.clearcoatMap,me=M&&!!b.clearcoatNormalMap,Le=M&&!!b.clearcoatRoughnessMap,Ue=N&&!!b.iridescenceMap,ge=N&&!!b.iridescenceThicknessMap,Ae=Y&&!!b.sheenColorMap,Oe=Y&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,Te=!!b.specularColorMap,$e=!!b.specularIntensityMap,k=ae&&!!b.transmissionMap,be=ae&&!!b.thicknessMap,Se=!!b.gradientMap,ke=!!b.alphaMap,ve=b.alphaTest>0,ue=!!b.alphaHash,He=!!b.extensions;let Ke=Ui;b.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ke=t.toneMapping);const re={shaderID:ne,shaderType:b.type,shaderName:b.name,vertexShader:Qe,fragmentShader:We,defines:b.defines,customVertexShaderID:ie,customFragmentShaderID:_e,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:de,batchingColor:de&&q._colorsTexture!==null,instancing:se,instancingColor:se&&q.instanceColor!==null,instancingMorph:se&&q.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:F===null?t.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:rs,alphaToCoverage:!!b.alphaToCoverage,map:Pe,matcap:A,envMap:_,envMapMode:_&&z.mapping,envMapCubeUVHeight:U,aoMap:O,lightMap:X,bumpMap:Z,normalMap:W,displacementMap:f&&pe,emissiveMap:Q,normalMapObjectSpace:W&&b.normalMapType===Iv,normalMapTangentSpace:W&&b.normalMapType===Pv,metalnessMap:le,roughnessMap:ce,anisotropy:Ce,anisotropyMap:K,clearcoat:M,clearcoatMap:Ie,clearcoatNormalMap:me,clearcoatRoughnessMap:Le,dispersion:v,iridescence:N,iridescenceMap:Ue,iridescenceThicknessMap:ge,sheen:Y,sheenColorMap:Ae,sheenRoughnessMap:Oe,specularMap:Ne,specularColorMap:Te,specularIntensityMap:$e,transmission:ae,transmissionMap:k,thicknessMap:be,gradientMap:Se,opaque:b.transparent===!1&&b.blending===qr&&b.alphaToCoverage===!1,alphaMap:ke,alphaTest:ve,alphaHash:ue,combine:b.combine,mapUv:Pe&&x(b.map.channel),aoMapUv:O&&x(b.aoMap.channel),lightMapUv:X&&x(b.lightMap.channel),bumpMapUv:Z&&x(b.bumpMap.channel),normalMapUv:W&&x(b.normalMap.channel),displacementMapUv:pe&&x(b.displacementMap.channel),emissiveMapUv:Q&&x(b.emissiveMap.channel),metalnessMapUv:le&&x(b.metalnessMap.channel),roughnessMapUv:ce&&x(b.roughnessMap.channel),anisotropyMapUv:K&&x(b.anisotropyMap.channel),clearcoatMapUv:Ie&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(b.sheenRoughnessMap.channel),specularMapUv:Ne&&x(b.specularMap.channel),specularColorMapUv:Te&&x(b.specularColorMap.channel),specularIntensityMapUv:$e&&x(b.specularIntensityMap.channel),transmissionMapUv:k&&x(b.transmissionMap.channel),thicknessMapUv:be&&x(b.thicknessMap.channel),alphaMapUv:ke&&x(b.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(W||Ce),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!j.attributes.uv&&(Pe||ke),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:oe,skinning:q.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:Me,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Pe&&b.map.isVideoTexture===!0&&ut.getTransfer(b.map.colorSpace)===mt,decodeVideoTextureEmissive:Q&&b.emissiveMap.isVideoTexture===!0&&ut.getTransfer(b.emissiveMap.colorSpace)===mt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Gn,flipSided:b.side===cn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:He&&b.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&b.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return re.vertexUv1s=c.has(1),re.vertexUv2s=c.has(2),re.vertexUv3s=c.has(3),c.clear(),re}function h(b){const E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)E.push(I),E.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(w(E,b),S(E,b),E.push(t.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function w(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function S(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){const E=g[b.type];let I;if(E){const B=Vn[E];I=ob.clone(B.uniforms)}else I=b.uniforms;return I}function D(b,E){let I;for(let B=0,q=u.length;B<q;B++){const H=u[B];if(H.cacheKey===E){I=H,++I.usedTimes;break}}return I===void 0&&(I=new RM(t,E,b,s),u.push(I)),I}function L(b){if(--b.usedTimes===0){const E=u.indexOf(b);u[E]=u[u.length-1],u.pop(),b.destroy()}}function P(b){l.remove(b)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:y,acquireProgram:D,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:R}}function UM(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function NM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Nf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ff(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d,f,p,g,x,m){let h=t[e];return h===void 0?(h={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},t[e]=h):(h.id=d.id,h.object=d,h.geometry=f,h.material=p,h.groupOrder=g,h.renderOrder=d.renderOrder,h.z=x,h.group=m),e++,h}function a(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):n.push(h)}function l(d,f,p,g,x,m){const h=o(d,f,p,g,x,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):n.unshift(h)}function c(d,f){n.length>1&&n.sort(d||NM),i.length>1&&i.sort(f||Nf),r.length>1&&r.sort(f||Nf)}function u(){for(let d=e,f=t.length;d<f;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function FM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Ff,t.set(i,[o])):r>=s.length?(o=new Ff,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function OM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new J,color:new Ze};break;case"SpotLight":n={position:new J,direction:new J,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new J,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new J,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new J,halfWidth:new J,halfHeight:new J};break}return t[e.id]=n,n}}}function kM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let BM=0;function zM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function HM(t){const e=new OM,n=kM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new J);const r=new J,s=new Dt,o=new Dt;function a(c){let u=0,d=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let p=0,g=0,x=0,m=0,h=0,w=0,S=0,y=0,D=0,L=0,P=0;c.sort(zM);for(let b=0,E=c.length;b<E;b++){const I=c[b],B=I.color,q=I.intensity,H=I.distance,j=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=B.r*q,d+=B.g*q,f+=B.b*q;else if(I.isLightProbe){for(let $=0;$<9;$++)i.probe[$].addScaledVector(I.sh.coefficients[$],q);P++}else if(I.isDirectionalLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const z=I.shadow,U=n.get(I);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.directionalShadow[p]=U,i.directionalShadowMap[p]=j,i.directionalShadowMatrix[p]=I.shadow.matrix,w++}i.directional[p]=$,p++}else if(I.isSpotLight){const $=e.get(I);$.position.setFromMatrixPosition(I.matrixWorld),$.color.copy(B).multiplyScalar(q),$.distance=H,$.coneCos=Math.cos(I.angle),$.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),$.decay=I.decay,i.spot[x]=$;const z=I.shadow;if(I.map&&(i.spotLightMap[D]=I.map,D++,z.updateMatrices(I),I.castShadow&&L++),i.spotLightMatrix[x]=z.matrix,I.castShadow){const U=n.get(I);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,i.spotShadow[x]=U,i.spotShadowMap[x]=j,y++}x++}else if(I.isRectAreaLight){const $=e.get(I);$.color.copy(B).multiplyScalar(q),$.halfWidth.set(I.width*.5,0,0),$.halfHeight.set(0,I.height*.5,0),i.rectArea[m]=$,m++}else if(I.isPointLight){const $=e.get(I);if($.color.copy(I.color).multiplyScalar(I.intensity),$.distance=I.distance,$.decay=I.decay,I.castShadow){const z=I.shadow,U=n.get(I);U.shadowIntensity=z.intensity,U.shadowBias=z.bias,U.shadowNormalBias=z.normalBias,U.shadowRadius=z.radius,U.shadowMapSize=z.mapSize,U.shadowCameraNear=z.camera.near,U.shadowCameraFar=z.camera.far,i.pointShadow[g]=U,i.pointShadowMap[g]=j,i.pointShadowMatrix[g]=I.shadow.matrix,S++}i.point[g]=$,g++}else if(I.isHemisphereLight){const $=e.get(I);$.skyColor.copy(I.color).multiplyScalar(q),$.groundColor.copy(I.groundColor).multiplyScalar(q),i.hemi[h]=$,h++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==h||R.numDirectionalShadows!==w||R.numPointShadows!==S||R.numSpotShadows!==y||R.numSpotMaps!==D||R.numLightProbes!==P)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=y+D-L,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=h,R.numDirectionalShadows=w,R.numPointShadows=S,R.numSpotShadows=y,R.numSpotMaps=D,R.numLightProbes=P,i.version=BM++)}function l(c,u){let d=0,f=0,p=0,g=0,x=0;const m=u.matrixWorldInverse;for(let h=0,w=c.length;h<w;h++){const S=c[h];if(S.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),d++}else if(S.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(S.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function Of(t){const e=new HM(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function VM(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Of(t),e.set(r,[a])):s>=o.length?(a=new Of(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const GM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WM=`uniform sampler2D shadow_pass;
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
}`;function XM(t,e,n){let i=new rm;const r=new at,s=new at,o=new It,a=new xb({depthPacking:Rv}),l=new _b,c={},u=n.maxTextureSize,d={[ki]:cn,[cn]:ki,[Gn]:Gn},f=new Bi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:GM,fragmentShader:WM}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new qn(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lp;let h=this.type;this.render=function(L,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const b=t.getRenderTarget(),E=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Li),B.buffers.depth.getReversed()?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=h!==ni&&this.type===ni,H=h===ni&&this.type!==ni;for(let j=0,$=L.length;j<$;j++){const z=L[j],U=z.shadow;if(U===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const ne=U.getFrameExtents();if(r.multiply(ne),s.copy(U.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ne.x),r.x=s.x*ne.x,U.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ne.y),r.y=s.y*ne.y,U.mapSize.y=s.y)),U.map===null||q===!0||H===!0){const Ee=this.type!==ni?{minFilter:In,magFilter:In}:{};U.map!==null&&U.map.dispose(),U.map=new gr(r.x,r.y,Ee),U.map.texture.name=z.name+".shadowMap",U.camera.updateProjectionMatrix()}t.setRenderTarget(U.map),t.clear();const fe=U.getViewportCount();for(let Ee=0;Ee<fe;Ee++){const Me=U.getViewport(Ee);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),B.viewport(o),U.updateMatrices(z,Ee),i=U.getFrustum(),y(P,R,U.camera,z,this.type)}U.isPointLightShadow!==!0&&this.type===ni&&w(U,R),U.needsUpdate=!1}h=this.type,m.needsUpdate=!1,t.setRenderTarget(b,E,I)};function w(L,P){const R=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,p.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new gr(r.x,r.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,t.setRenderTarget(L.mapPass),t.clear(),t.renderBufferDirect(P,null,R,f,x,null),p.uniforms.shadow_pass.value=L.mapPass.texture,p.uniforms.resolution.value=L.mapSize,p.uniforms.radius.value=L.radius,t.setRenderTarget(L.map),t.clear(),t.renderBufferDirect(P,null,R,p,x,null)}function S(L,P,R,b){let E=null;const I=R.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(I!==void 0)E=I;else if(E=R.isPointLight===!0?l:a,t.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=E.uuid,q=P.uuid;let H=c[B];H===void 0&&(H={},c[B]=H);let j=H[q];j===void 0&&(j=E.clone(),H[q]=j,P.addEventListener("dispose",D)),E=j}if(E.visible=P.visible,E.wireframe=P.wireframe,b===ni?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:d[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,R.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const B=t.properties.get(E);B.light=R}return E}function y(L,P,R,b,E){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===ni)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,L.matrixWorld);const q=e.update(L),H=L.material;if(Array.isArray(H)){const j=q.groups;for(let $=0,z=j.length;$<z;$++){const U=j[$],ne=H[U.materialIndex];if(ne&&ne.visible){const fe=S(L,ne,b,E);L.onBeforeShadow(t,L,P,R,q,fe,U),t.renderBufferDirect(R,null,q,fe,L,U),L.onAfterShadow(t,L,P,R,q,fe,U)}}}else if(H.visible){const j=S(L,H,b,E);L.onBeforeShadow(t,L,P,R,q,j,null),t.renderBufferDirect(R,null,q,j,L,null),L.onAfterShadow(t,L,P,R,q,j,null)}}const B=L.children;for(let q=0,H=B.length;q<H;q++)y(B[q],P,R,b,E)}function D(L){L.target.removeEventListener("dispose",D);for(const R in c){const b=c[R],E=L.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}const qM={[jl]:Kl,[Zl]:ec,[Jl]:tc,[ts]:Ql,[Kl]:jl,[ec]:Zl,[tc]:Jl,[Ql]:ts};function $M(t,e){function n(){let k=!1;const be=new It;let Se=null;const ke=new It(0,0,0,0);return{setMask:function(ve){Se!==ve&&!k&&(t.colorMask(ve,ve,ve,ve),Se=ve)},setLocked:function(ve){k=ve},setClear:function(ve,ue,He,Ke,re){re===!0&&(ve*=Ke,ue*=Ke,He*=Ke),be.set(ve,ue,He,Ke),ke.equals(be)===!1&&(t.clearColor(ve,ue,He,Ke),ke.copy(be))},reset:function(){k=!1,Se=null,ke.set(-1,0,0,0)}}}function i(){let k=!1,be=!1,Se=null,ke=null,ve=null;return{setReversed:function(ue){if(be!==ue){const He=e.get("EXT_clip_control");ue?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),be=ue;const Ke=ve;ve=null,this.setClear(Ke)}},getReversed:function(){return be},setTest:function(ue){ue?F(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(ue){Se!==ue&&!k&&(t.depthMask(ue),Se=ue)},setFunc:function(ue){if(be&&(ue=qM[ue]),ke!==ue){switch(ue){case jl:t.depthFunc(t.NEVER);break;case Kl:t.depthFunc(t.ALWAYS);break;case Zl:t.depthFunc(t.LESS);break;case ts:t.depthFunc(t.LEQUAL);break;case Jl:t.depthFunc(t.EQUAL);break;case Ql:t.depthFunc(t.GEQUAL);break;case ec:t.depthFunc(t.GREATER);break;case tc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ke=ue}},setLocked:function(ue){k=ue},setClear:function(ue){ve!==ue&&(be&&(ue=1-ue),t.clearDepth(ue),ve=ue)},reset:function(){k=!1,Se=null,ke=null,ve=null,be=!1}}}function r(){let k=!1,be=null,Se=null,ke=null,ve=null,ue=null,He=null,Ke=null,re=null;return{setTest:function(he){k||(he?F(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(he){be!==he&&!k&&(t.stencilMask(he),be=he)},setFunc:function(he,bt,On){(Se!==he||ke!==bt||ve!==On)&&(t.stencilFunc(he,bt,On),Se=he,ke=bt,ve=On)},setOp:function(he,bt,On){(ue!==he||He!==bt||Ke!==On)&&(t.stencilOp(he,bt,On),ue=he,He=bt,Ke=On)},setLocked:function(he){k=he},setClear:function(he){re!==he&&(t.clearStencil(he),re=he)},reset:function(){k=!1,be=null,Se=null,ke=null,ve=null,ue=null,He=null,Ke=null,re=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,w=null,S=null,y=null,D=null,L=null,P=new Ze(0,0,0),R=0,b=!1,E=null,I=null,B=null,q=null,H=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,z=0;const U=t.getParameter(t.VERSION);U.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(U)[1]),$=z>=1):U.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),$=z>=2);let ne=null,fe={};const Ee=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),Qe=new It().fromArray(Ee),We=new It().fromArray(Me);function ie(k,be,Se,ke){const ve=new Uint8Array(4),ue=t.createTexture();t.bindTexture(k,ue),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<Se;He++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(be,0,t.RGBA,1,1,ke,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(be+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return ue}const _e={};_e[t.TEXTURE_2D]=ie(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=ie(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[t.TEXTURE_2D_ARRAY]=ie(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=ie(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),F(t.DEPTH_TEST),o.setFunc(ts),Z(!1),W(Bd),F(t.CULL_FACE),O(Li);function F(k){u[k]!==!0&&(t.enable(k),u[k]=!0)}function oe(k){u[k]!==!1&&(t.disable(k),u[k]=!1)}function se(k,be){return d[k]!==be?(t.bindFramebuffer(k,be),d[k]=be,k===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=be),k===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=be),!0):!1}function de(k,be){let Se=p,ke=!1;if(k){Se=f.get(be),Se===void 0&&(Se=[],f.set(be,Se));const ve=k.textures;if(Se.length!==ve.length||Se[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,He=ve.length;ue<He;ue++)Se[ue]=t.COLOR_ATTACHMENT0+ue;Se.length=ve.length,ke=!0}}else Se[0]!==t.BACK&&(Se[0]=t.BACK,ke=!0);ke&&t.drawBuffers(Se)}function Pe(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const A={[ir]:t.FUNC_ADD,[tv]:t.FUNC_SUBTRACT,[nv]:t.FUNC_REVERSE_SUBTRACT};A[iv]=t.MIN,A[rv]=t.MAX;const _={[sv]:t.ZERO,[ov]:t.ONE,[av]:t.SRC_COLOR,[$l]:t.SRC_ALPHA,[hv]:t.SRC_ALPHA_SATURATE,[dv]:t.DST_COLOR,[cv]:t.DST_ALPHA,[lv]:t.ONE_MINUS_SRC_COLOR,[Yl]:t.ONE_MINUS_SRC_ALPHA,[fv]:t.ONE_MINUS_DST_COLOR,[uv]:t.ONE_MINUS_DST_ALPHA,[pv]:t.CONSTANT_COLOR,[mv]:t.ONE_MINUS_CONSTANT_COLOR,[gv]:t.CONSTANT_ALPHA,[xv]:t.ONE_MINUS_CONSTANT_ALPHA};function O(k,be,Se,ke,ve,ue,He,Ke,re,he){if(k===Li){x===!0&&(oe(t.BLEND),x=!1);return}if(x===!1&&(F(t.BLEND),x=!0),k!==ev){if(k!==m||he!==b){if((h!==ir||y!==ir)&&(t.blendEquation(t.FUNC_ADD),h=ir,y=ir),he)switch(k){case qr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zs:t.blendFunc(t.ONE,t.ONE);break;case zd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Hd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case qr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case zs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case zd:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hd:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}w=null,S=null,D=null,L=null,P.set(0,0,0),R=0,m=k,b=he}return}ve=ve||be,ue=ue||Se,He=He||ke,(be!==h||ve!==y)&&(t.blendEquationSeparate(A[be],A[ve]),h=be,y=ve),(Se!==w||ke!==S||ue!==D||He!==L)&&(t.blendFuncSeparate(_[Se],_[ke],_[ue],_[He]),w=Se,S=ke,D=ue,L=He),(Ke.equals(P)===!1||re!==R)&&(t.blendColor(Ke.r,Ke.g,Ke.b,re),P.copy(Ke),R=re),m=k,b=!1}function X(k,be){k.side===Gn?oe(t.CULL_FACE):F(t.CULL_FACE);let Se=k.side===cn;be&&(Se=!Se),Z(Se),k.blending===qr&&k.transparent===!1?O(Li):O(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const ke=k.stencilWrite;a.setTest(ke),ke&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Q(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?F(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function Z(k){E!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),E=k)}function W(k){k!==Z0?(F(t.CULL_FACE),k!==I&&(k===Bd?t.cullFace(t.BACK):k===J0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),I=k}function pe(k){k!==B&&($&&t.lineWidth(k),B=k)}function Q(k,be,Se){k?(F(t.POLYGON_OFFSET_FILL),(q!==be||H!==Se)&&(t.polygonOffset(be,Se),q=be,H=Se)):oe(t.POLYGON_OFFSET_FILL)}function le(k){k?F(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function ce(k){k===void 0&&(k=t.TEXTURE0+j-1),ne!==k&&(t.activeTexture(k),ne=k)}function Ce(k,be,Se){Se===void 0&&(ne===null?Se=t.TEXTURE0+j-1:Se=ne);let ke=fe[Se];ke===void 0&&(ke={type:void 0,texture:void 0},fe[Se]=ke),(ke.type!==k||ke.texture!==be)&&(ne!==Se&&(t.activeTexture(Se),ne=Se),t.bindTexture(k,be||_e[k]),ke.type=k,ke.texture=be)}function M(){const k=fe[ne];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function v(){try{t.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{t.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ae(){try{t.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ie(){try{t.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{t.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Le(){try{t.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(){try{t.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ge(){try{t.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ae(k){Qe.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Qe.copy(k))}function Oe(k){We.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),We.copy(k))}function Ne(k,be){let Se=c.get(be);Se===void 0&&(Se=new WeakMap,c.set(be,Se));let ke=Se.get(k);ke===void 0&&(ke=t.getUniformBlockIndex(be,k.name),Se.set(k,ke))}function Te(k,be){const ke=c.get(be).get(k);l.get(be)!==ke&&(t.uniformBlockBinding(be,ke,k.__bindingPointIndex),l.set(be,ke))}function $e(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},ne=null,fe={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,h=null,w=null,S=null,y=null,D=null,L=null,P=new Ze(0,0,0),R=0,b=!1,E=null,I=null,B=null,q=null,H=null,Qe.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:F,disable:oe,bindFramebuffer:se,drawBuffers:de,useProgram:Pe,setBlending:O,setMaterial:X,setFlipSided:Z,setCullFace:W,setLineWidth:pe,setPolygonOffset:Q,setScissorTest:le,activeTexture:ce,bindTexture:Ce,unbindTexture:M,compressedTexImage2D:v,compressedTexImage3D:N,texImage2D:Ue,texImage3D:ge,updateUBOMapping:Ne,uniformBlockBinding:Te,texStorage2D:me,texStorage3D:Le,texSubImage2D:Y,texSubImage3D:ae,compressedTexSubImage2D:K,compressedTexSubImage3D:Ie,scissor:Ae,viewport:Oe,reset:$e}}function YM(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,v){return p?new OffscreenCanvas(M,v):da("canvas")}function x(M,v,N){let Y=1;const ae=Ce(M);if((ae.width>N||ae.height>N)&&(Y=N/Math.max(ae.width,ae.height)),Y<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const K=Math.floor(Y*ae.width),Ie=Math.floor(Y*ae.height);d===void 0&&(d=g(K,Ie));const me=v?g(K,Ie):d;return me.width=K,me.height=Ie,me.getContext("2d").drawImage(M,0,0,K,Ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+K+"x"+Ie+")."),me}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),M;return M}function m(M){return M.generateMipmaps}function h(M){t.generateMipmap(M)}function w(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function S(M,v,N,Y,ae=!1){if(M!==null){if(t[M]!==void 0)return t[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let K=v;if(v===t.RED&&(N===t.FLOAT&&(K=t.R32F),N===t.HALF_FLOAT&&(K=t.R16F),N===t.UNSIGNED_BYTE&&(K=t.R8)),v===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.R8UI),N===t.UNSIGNED_SHORT&&(K=t.R16UI),N===t.UNSIGNED_INT&&(K=t.R32UI),N===t.BYTE&&(K=t.R8I),N===t.SHORT&&(K=t.R16I),N===t.INT&&(K=t.R32I)),v===t.RG&&(N===t.FLOAT&&(K=t.RG32F),N===t.HALF_FLOAT&&(K=t.RG16F),N===t.UNSIGNED_BYTE&&(K=t.RG8)),v===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RG8UI),N===t.UNSIGNED_SHORT&&(K=t.RG16UI),N===t.UNSIGNED_INT&&(K=t.RG32UI),N===t.BYTE&&(K=t.RG8I),N===t.SHORT&&(K=t.RG16I),N===t.INT&&(K=t.RG32I)),v===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGB8UI),N===t.UNSIGNED_SHORT&&(K=t.RGB16UI),N===t.UNSIGNED_INT&&(K=t.RGB32UI),N===t.BYTE&&(K=t.RGB8I),N===t.SHORT&&(K=t.RGB16I),N===t.INT&&(K=t.RGB32I)),v===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),N===t.UNSIGNED_INT&&(K=t.RGBA32UI),N===t.BYTE&&(K=t.RGBA8I),N===t.SHORT&&(K=t.RGBA16I),N===t.INT&&(K=t.RGBA32I)),v===t.RGB&&N===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),v===t.RGBA){const Ie=ae?ca:ut.getTransfer(Y);N===t.FLOAT&&(K=t.RGBA32F),N===t.HALF_FLOAT&&(K=t.RGBA16F),N===t.UNSIGNED_BYTE&&(K=Ie===mt?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(M,v){let N;return M?v===null||v===mr||v===Vs?N=t.DEPTH24_STENCIL8:v===ai?N=t.DEPTH32F_STENCIL8:v===Hs&&(N=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===mr||v===Vs?N=t.DEPTH_COMPONENT24:v===ai?N=t.DEPTH_COMPONENT32F:v===Hs&&(N=t.DEPTH_COMPONENT16),N}function D(M,v){return m(M)===!0||M.isFramebufferTexture&&M.minFilter!==In&&M.minFilter!==Kt?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function L(M){const v=M.target;v.removeEventListener("dispose",L),R(v),v.isVideoTexture&&u.delete(v)}function P(M){const v=M.target;v.removeEventListener("dispose",P),E(v)}function R(M){const v=i.get(M);if(v.__webglInit===void 0)return;const N=M.source,Y=f.get(N);if(Y){const ae=Y[v.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(M),Object.keys(Y).length===0&&f.delete(N)}i.remove(M)}function b(M){const v=i.get(M);t.deleteTexture(v.__webglTexture);const N=M.source,Y=f.get(N);delete Y[v.__cacheKey],o.memory.textures--}function E(M){const v=i.get(M);if(M.depthTexture&&(M.depthTexture.dispose(),i.remove(M.depthTexture)),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let ae=0;ae<v.__webglFramebuffer[Y].length;ae++)t.deleteFramebuffer(v.__webglFramebuffer[Y][ae]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const N=M.textures;for(let Y=0,ae=N.length;Y<ae;Y++){const K=i.get(N[Y]);K.__webglTexture&&(t.deleteTexture(K.__webglTexture),o.memory.textures--),i.remove(N[Y])}i.remove(M)}let I=0;function B(){I=0}function q(){const M=I;return M>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+r.maxTextures),I+=1,M}function H(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function j(M,v){const N=i.get(M);if(M.isVideoTexture&&le(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&N.__version!==M.version){const Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{_e(N,M,v);return}}else M.isExternalTexture&&(N.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+v)}function $(M,v){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){_e(N,M,v);return}n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+v)}function z(M,v){const N=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){_e(N,M,v);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+v)}function U(M,v){const N=i.get(M);if(M.version>0&&N.__version!==M.version){F(N,M,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+v)}const ne={[rc]:t.REPEAT,[or]:t.CLAMP_TO_EDGE,[sc]:t.MIRRORED_REPEAT},fe={[In]:t.NEAREST,[Av]:t.NEAREST_MIPMAP_NEAREST,[uo]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Ka]:t.LINEAR_MIPMAP_NEAREST,[ar]:t.LINEAR_MIPMAP_LINEAR},Ee={[Dv]:t.NEVER,[kv]:t.ALWAYS,[Lv]:t.LESS,[Wp]:t.LEQUAL,[Uv]:t.EQUAL,[Ov]:t.GEQUAL,[Nv]:t.GREATER,[Fv]:t.NOTEQUAL};function Me(M,v){if(v.type===ai&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Kt||v.magFilter===Ka||v.magFilter===uo||v.magFilter===ar||v.minFilter===Kt||v.minFilter===Ka||v.minFilter===uo||v.minFilter===ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,ne[v.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,ne[v.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,ne[v.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,fe[v.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,fe[v.minFilter]),v.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,Ee[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===In||v.minFilter!==uo&&v.minFilter!==ar||v.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function Qe(M,v){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",L));const Y=v.source;let ae=f.get(Y);ae===void 0&&(ae={},f.set(Y,ae));const K=H(v);if(K!==M.__cacheKey){ae[K]===void 0&&(ae[K]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),ae[K].usedTimes++;const Ie=ae[M.__cacheKey];Ie!==void 0&&(ae[M.__cacheKey].usedTimes--,Ie.usedTimes===0&&b(v)),M.__cacheKey=K,M.__webglTexture=ae[K].texture}return N}function We(M,v,N){return Math.floor(Math.floor(M/N)/v)}function ie(M,v,N,Y){const K=M.updateRanges;if(K.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,N,Y,v.data);else{K.sort((ge,Ae)=>ge.start-Ae.start);let Ie=0;for(let ge=1;ge<K.length;ge++){const Ae=K[Ie],Oe=K[ge],Ne=Ae.start+Ae.count,Te=We(Oe.start,v.width,4),$e=We(Ae.start,v.width,4);Oe.start<=Ne+1&&Te===$e&&We(Oe.start+Oe.count-1,v.width,4)===Te?Ae.count=Math.max(Ae.count,Oe.start+Oe.count-Ae.start):(++Ie,K[Ie]=Oe)}K.length=Ie+1;const me=t.getParameter(t.UNPACK_ROW_LENGTH),Le=t.getParameter(t.UNPACK_SKIP_PIXELS),Ue=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let ge=0,Ae=K.length;ge<Ae;ge++){const Oe=K[ge],Ne=Math.floor(Oe.start/4),Te=Math.ceil(Oe.count/4),$e=Ne%v.width,k=Math.floor(Ne/v.width),be=Te,Se=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,$e),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,$e,k,be,Se,N,Y,v.data)}M.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,me),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Le),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ue)}}function _e(M,v,N){let Y=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Y=t.TEXTURE_3D);const ae=Qe(M,v),K=v.source;n.bindTexture(Y,M.__webglTexture,t.TEXTURE0+N);const Ie=i.get(K);if(K.version!==Ie.__version||ae===!0){n.activeTexture(t.TEXTURE0+N);const me=ut.getPrimaries(ut.workingColorSpace),Le=v.colorSpace===Pi?null:ut.getPrimaries(v.colorSpace),Ue=v.colorSpace===Pi||me===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let ge=x(v.image,!1,r.maxTextureSize);ge=ce(v,ge);const Ae=s.convert(v.format,v.colorSpace),Oe=s.convert(v.type);let Ne=S(v.internalFormat,Ae,Oe,v.colorSpace,v.isVideoTexture);Me(Y,v);let Te;const $e=v.mipmaps,k=v.isVideoTexture!==!0,be=Ie.__version===void 0||ae===!0,Se=K.dataReady,ke=D(v,ge);if(v.isDepthTexture)Ne=y(v.format===Ws,v.type),be&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ne,ge.width,ge.height):n.texImage2D(t.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Ae,Oe,null));else if(v.isDataTexture)if($e.length>0){k&&be&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,$e[0].width,$e[0].height);for(let ve=0,ue=$e.length;ve<ue;ve++)Te=$e[ve],k?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ae,Oe,Te.data):n.texImage2D(t.TEXTURE_2D,ve,Ne,Te.width,Te.height,0,Ae,Oe,Te.data);v.generateMipmaps=!1}else k?(be&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,ge.width,ge.height),Se&&ie(v,ge,Ae,Oe)):n.texImage2D(t.TEXTURE_2D,0,Ne,ge.width,ge.height,0,Ae,Oe,ge.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Ne,$e[0].width,$e[0].height,ge.depth);for(let ve=0,ue=$e.length;ve<ue;ve++)if(Te=$e[ve],v.format!==Rn)if(Ae!==null)if(k){if(Se)if(v.layerUpdates.size>0){const He=hf(Te.width,Te.height,v.format,v.type);for(const Ke of v.layerUpdates){const re=Te.data.subarray(Ke*He/Te.data.BYTES_PER_ELEMENT,(Ke+1)*He/Te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,Ke,Te.width,Te.height,1,Ae,re)}v.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,ge.depth,Ae,Te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ve,Ne,Te.width,Te.height,ge.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?Se&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ve,0,0,0,Te.width,Te.height,ge.depth,Ae,Oe,Te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ve,Ne,Te.width,Te.height,ge.depth,0,Ae,Oe,Te.data)}else{k&&be&&n.texStorage2D(t.TEXTURE_2D,ke,Ne,$e[0].width,$e[0].height);for(let ve=0,ue=$e.length;ve<ue;ve++)Te=$e[ve],v.format!==Rn?Ae!==null?k?Se&&n.compressedTexSubImage2D(t.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ae,Te.data):n.compressedTexImage2D(t.TEXTURE_2D,ve,Ne,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Te.width,Te.height,Ae,Oe,Te.data):n.texImage2D(t.TEXTURE_2D,ve,Ne,Te.width,Te.height,0,Ae,Oe,Te.data)}else if(v.isDataArrayTexture)if(k){if(be&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,Ne,ge.width,ge.height,ge.depth),Se)if(v.layerUpdates.size>0){const ve=hf(ge.width,ge.height,v.format,v.type);for(const ue of v.layerUpdates){const He=ge.data.subarray(ue*ve/ge.data.BYTES_PER_ELEMENT,(ue+1)*ve/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ue,ge.width,ge.height,1,Ae,Oe,He)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Oe,ge.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ne,ge.width,ge.height,ge.depth,0,Ae,Oe,ge.data);else if(v.isData3DTexture)k?(be&&n.texStorage3D(t.TEXTURE_3D,ke,Ne,ge.width,ge.height,ge.depth),Se&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Ae,Oe,ge.data)):n.texImage3D(t.TEXTURE_3D,0,Ne,ge.width,ge.height,ge.depth,0,Ae,Oe,ge.data);else if(v.isFramebufferTexture){if(be)if(k)n.texStorage2D(t.TEXTURE_2D,ke,Ne,ge.width,ge.height);else{let ve=ge.width,ue=ge.height;for(let He=0;He<ke;He++)n.texImage2D(t.TEXTURE_2D,He,Ne,ve,ue,0,Ae,Oe,null),ve>>=1,ue>>=1}}else if($e.length>0){if(k&&be){const ve=Ce($e[0]);n.texStorage2D(t.TEXTURE_2D,ke,Ne,ve.width,ve.height)}for(let ve=0,ue=$e.length;ve<ue;ve++)Te=$e[ve],k?Se&&n.texSubImage2D(t.TEXTURE_2D,ve,0,0,Ae,Oe,Te):n.texImage2D(t.TEXTURE_2D,ve,Ne,Ae,Oe,Te);v.generateMipmaps=!1}else if(k){if(be){const ve=Ce(ge);n.texStorage2D(t.TEXTURE_2D,ke,Ne,ve.width,ve.height)}Se&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ae,Oe,ge)}else n.texImage2D(t.TEXTURE_2D,0,Ne,Ae,Oe,ge);m(v)&&h(Y),Ie.__version=K.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function F(M,v,N){if(v.image.length!==6)return;const Y=Qe(M,v),ae=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+N);const K=i.get(ae);if(ae.version!==K.__version||Y===!0){n.activeTexture(t.TEXTURE0+N);const Ie=ut.getPrimaries(ut.workingColorSpace),me=v.colorSpace===Pi?null:ut.getPrimaries(v.colorSpace),Le=v.colorSpace===Pi||Ie===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ue=v.isCompressedTexture||v.image[0].isCompressedTexture,ge=v.image[0]&&v.image[0].isDataTexture,Ae=[];for(let ue=0;ue<6;ue++)!Ue&&!ge?Ae[ue]=x(v.image[ue],!0,r.maxCubemapSize):Ae[ue]=ge?v.image[ue].image:v.image[ue],Ae[ue]=ce(v,Ae[ue]);const Oe=Ae[0],Ne=s.convert(v.format,v.colorSpace),Te=s.convert(v.type),$e=S(v.internalFormat,Ne,Te,v.colorSpace),k=v.isVideoTexture!==!0,be=K.__version===void 0||Y===!0,Se=ae.dataReady;let ke=D(v,Oe);Me(t.TEXTURE_CUBE_MAP,v);let ve;if(Ue){k&&be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,$e,Oe.width,Oe.height);for(let ue=0;ue<6;ue++){ve=Ae[ue].mipmaps;for(let He=0;He<ve.length;He++){const Ke=ve[He];v.format!==Rn?Ne!==null?k?Se&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,0,0,Ke.width,Ke.height,Ne,Ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,$e,Ke.width,Ke.height,0,Ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,0,0,Ke.width,Ke.height,Ne,Te,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He,$e,Ke.width,Ke.height,0,Ne,Te,Ke.data)}}}else{if(ve=v.mipmaps,k&&be){ve.length>0&&ke++;const ue=Ce(Ae[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ke,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(ge){k?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ae[ue].width,Ae[ue].height,Ne,Te,Ae[ue].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Ae[ue].width,Ae[ue].height,0,Ne,Te,Ae[ue].data);for(let He=0;He<ve.length;He++){const re=ve[He].image[ue].image;k?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,0,0,re.width,re.height,Ne,Te,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,$e,re.width,re.height,0,Ne,Te,re.data)}}else{k?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,Ne,Te,Ae[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,Ne,Te,Ae[ue]);for(let He=0;He<ve.length;He++){const Ke=ve[He];k?Se&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,0,0,Ne,Te,Ke.image[ue]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ue,He+1,$e,Ne,Te,Ke.image[ue])}}}m(v)&&h(t.TEXTURE_CUBE_MAP),K.__version=ae.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function oe(M,v,N,Y,ae,K){const Ie=s.convert(N.format,N.colorSpace),me=s.convert(N.type),Le=S(N.internalFormat,Ie,me,N.colorSpace),Ue=i.get(v),ge=i.get(N);if(ge.__renderTarget=v,!Ue.__hasExternalTextures){const Ae=Math.max(1,v.width>>K),Oe=Math.max(1,v.height>>K);ae===t.TEXTURE_3D||ae===t.TEXTURE_2D_ARRAY?n.texImage3D(ae,K,Le,Ae,Oe,v.depth,0,Ie,me,null):n.texImage2D(ae,K,Le,Ae,Oe,0,Ie,me,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,ae,ge.__webglTexture,0,pe(v)):(ae===t.TEXTURE_2D||ae>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,ae,ge.__webglTexture,K),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(M,v,N){if(t.bindRenderbuffer(t.RENDERBUFFER,M),v.depthBuffer){const Y=v.depthTexture,ae=Y&&Y.isDepthTexture?Y.type:null,K=y(v.stencilBuffer,ae),Ie=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,me=pe(v);Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,me,K,v.width,v.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,me,K,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,K,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ie,t.RENDERBUFFER,M)}else{const Y=v.textures;for(let ae=0;ae<Y.length;ae++){const K=Y[ae],Ie=s.convert(K.format,K.colorSpace),me=s.convert(K.type),Le=S(K.internalFormat,Ie,me,K.colorSpace),Ue=pe(v);N&&Q(v)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Le,v.width,v.height):Q(v)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ue,Le,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Le,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(M,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=i.get(v.depthTexture);Y.__renderTarget=v,(!Y.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),j(v.depthTexture,0);const ae=Y.__webglTexture,K=pe(v);if(v.depthTexture.format===Gs)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(v.depthTexture.format===Ws)Q(v)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function Pe(M){const v=i.get(M),N=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const Y=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Y){const ae=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Y.removeEventListener("dispose",ae)};Y.addEventListener("dispose",ae),v.__depthDisposeCallback=ae}v.__boundDepthTexture=Y}if(M.depthTexture&&!v.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const Y=M.texture.mipmaps;Y&&Y.length>0?de(v.__webglFramebuffer[0],M):de(v.__webglFramebuffer,M)}else if(N){v.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[Y]),v.__webglDepthbuffer[Y]===void 0)v.__webglDepthbuffer[Y]=t.createRenderbuffer(),se(v.__webglDepthbuffer[Y],M,!1);else{const ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,K)}}else{const Y=M.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),se(v.__webglDepthbuffer,M,!1);else{const ae=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,K=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,K),t.framebufferRenderbuffer(t.FRAMEBUFFER,ae,t.RENDERBUFFER,K)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function A(M,v,N){const Y=i.get(M);v!==void 0&&oe(Y.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&Pe(M)}function _(M){const v=M.texture,N=i.get(M),Y=i.get(v);M.addEventListener("dispose",P);const ae=M.textures,K=M.isWebGLCubeRenderTarget===!0,Ie=ae.length>1;if(Ie||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=v.version,o.memory.textures++),K){N.__webglFramebuffer=[];for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer[me]=[];for(let Le=0;Le<v.mipmaps.length;Le++)N.__webglFramebuffer[me][Le]=t.createFramebuffer()}else N.__webglFramebuffer[me]=t.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){N.__webglFramebuffer=[];for(let me=0;me<v.mipmaps.length;me++)N.__webglFramebuffer[me]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(Ie)for(let me=0,Le=ae.length;me<Le;me++){const Ue=i.get(ae[me]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=t.createTexture(),o.memory.textures++)}if(M.samples>0&&Q(M)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const Le=ae[me];N.__webglColorRenderbuffer[me]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[me]);const Ue=s.convert(Le.format,Le.colorSpace),ge=s.convert(Le.type),Ae=S(Le.internalFormat,Ue,ge,Le.colorSpace,M.isXRRenderTarget===!0),Oe=pe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,Ae,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,N.__webglColorRenderbuffer[me])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),se(N.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(K){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),Me(t.TEXTURE_CUBE_MAP,v);for(let me=0;me<6;me++)if(v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)oe(N.__webglFramebuffer[me][Le],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le);else oe(N.__webglFramebuffer[me],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(v)&&h(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ie){for(let me=0,Le=ae.length;me<Le;me++){const Ue=ae[me],ge=i.get(Ue);let Ae=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(Ae=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ae,ge.__webglTexture),Me(Ae,Ue),oe(N.__webglFramebuffer,M,Ue,t.COLOR_ATTACHMENT0+me,Ae,0),m(Ue)&&h(Ae)}n.unbindTexture()}else{let me=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(me=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(me,Y.__webglTexture),Me(me,v),v.mipmaps&&v.mipmaps.length>0)for(let Le=0;Le<v.mipmaps.length;Le++)oe(N.__webglFramebuffer[Le],M,v,t.COLOR_ATTACHMENT0,me,Le);else oe(N.__webglFramebuffer,M,v,t.COLOR_ATTACHMENT0,me,0);m(v)&&h(me),n.unbindTexture()}M.depthBuffer&&Pe(M)}function O(M){const v=M.textures;for(let N=0,Y=v.length;N<Y;N++){const ae=v[N];if(m(ae)){const K=w(M),Ie=i.get(ae).__webglTexture;n.bindTexture(K,Ie),h(K),n.unbindTexture()}}}const X=[],Z=[];function W(M){if(M.samples>0){if(Q(M)===!1){const v=M.textures,N=M.width,Y=M.height;let ae=t.COLOR_BUFFER_BIT;const K=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ie=i.get(M),me=v.length>1;if(me)for(let Ue=0;Ue<v.length;Ue++)n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Le=M.texture.mipmaps;Le&&Le.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Ue=0;Ue<v.length;Ue++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(ae|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(ae|=t.STENCIL_BUFFER_BIT)),me){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const ge=i.get(v[Ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ge,0)}t.blitFramebuffer(0,0,N,Y,0,0,N,Y,ae,t.NEAREST),l===!0&&(X.length=0,Z.length=0,X.push(t.COLOR_ATTACHMENT0+Ue),M.depthBuffer&&M.resolveDepthBuffer===!1&&(X.push(K),Z.push(K),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Z)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,X))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),me)for(let Ue=0;Ue<v.length;Ue++){n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.RENDERBUFFER,Ie.__webglColorRenderbuffer[Ue]);const ge=i.get(v[Ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ie.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ue,t.TEXTURE_2D,ge,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&l){const v=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function pe(M){return Math.min(r.maxSamples,M.samples)}function Q(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function le(M){const v=o.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function ce(M,v){const N=M.colorSpace,Y=M.format,ae=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==rs&&N!==Pi&&(ut.getTransfer(N)===mt?(Y!==Rn||ae!==hi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),v}function Ce(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=$,this.setTexture3D=z,this.setTextureCube=U,this.rebindTextures=A,this.setupRenderTarget=_,this.updateRenderTargetMipmap=O,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Q}function jM(t,e){function n(i,r=Pi){let s;const o=ut.getTransfer(r);if(i===hi)return t.UNSIGNED_BYTE;if(i===pu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===mu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===kp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Fp)return t.BYTE;if(i===Op)return t.SHORT;if(i===Hs)return t.UNSIGNED_SHORT;if(i===hu)return t.INT;if(i===mr)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Zs)return t.HALF_FLOAT;if(i===Bp)return t.ALPHA;if(i===zp)return t.RGB;if(i===Rn)return t.RGBA;if(i===Gs)return t.DEPTH_COMPONENT;if(i===Ws)return t.DEPTH_STENCIL;if(i===Hp)return t.RED;if(i===gu)return t.RED_INTEGER;if(i===Vp)return t.RG;if(i===xu)return t.RG_INTEGER;if(i===_u)return t.RGBA_INTEGER;if(i===Go||i===Wo||i===Xo||i===qo)if(o===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Go)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Go)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oc||i===ac||i===lc||i===cc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===oc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ac)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===dc||i===fc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uc||i===dc)return o===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===hc||i===pc||i===mc||i===gc||i===xc||i===_c||i===vc||i===bc||i===yc||i===Ec||i===Sc||i===Mc||i===Tc||i===wc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===hc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===pc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===mc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===gc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===xc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===_c)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===vc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===yc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ec)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Sc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Mc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Tc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===wc)return o===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Ac||i===Cc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===$o)return o===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ac)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Cc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Gp||i===Rc||i===Pc||i===Ic)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===$o)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ic)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Vs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class fm extends Vt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}}const KM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZM=`
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

}`;class JM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new fm(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Bi({vertexShader:KM,fragmentShader:ZM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new qn(new to(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class QM extends os{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,f=null,p=null,g=null;const x=new JM,m={},h=n.getContextAttributes();let w=null,S=null;const y=[],D=[],L=new at;let P=null;const R=new En;R.viewport=new It;const b=new En;b.viewport=new It;const E=[R,b],I=new vb;let B=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let _e=y[ie];return _e===void 0&&(_e=new vl,y[ie]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ie){let _e=y[ie];return _e===void 0&&(_e=new vl,y[ie]=_e),_e.getGripSpace()},this.getHand=function(ie){let _e=y[ie];return _e===void 0&&(_e=new vl,y[ie]=_e),_e.getHandSpace()};function H(ie){const _e=D.indexOf(ie.inputSource);if(_e===-1)return;const F=y[_e];F!==void 0&&(F.update(ie.inputSource,ie.frame,c||o),F.dispatchEvent({type:ie.type,data:ie.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",$);for(let ie=0;ie<y.length;ie++){const _e=D[ie];_e!==null&&(D[ie]=null,y[ie].disconnect(_e))}B=null,q=null,x.reset();for(const ie in m)delete m[ie];e.setRenderTarget(w),p=null,f=null,d=null,r=null,S=null,We.stop(),i.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",$),h.xrCompatible!==!0&&await n.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),typeof XRWebGLBinding<"u"&&(d=new XRWebGLBinding(r,n)),d!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let F=null,oe=null,se=null;h.depth&&(se=h.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,F=h.stencil?Ws:Gs,oe=h.stencil?Vs:mr);const de={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};f=d.createProjectionLayer(de),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new gr(f.textureWidth,f.textureHeight,{format:Rn,type:hi,depthTexture:new sm(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,F),stencilBuffer:h.stencil,colorSpace:e.outputColorSpace,samples:h.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const F={antialias:h.antialias,alpha:!0,depth:h.depth,stencil:h.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,F),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new gr(p.framebufferWidth,p.framebufferHeight,{format:Rn,type:hi,colorSpace:e.outputColorSpace,stencilBuffer:h.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),We.setContext(r),We.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(ie){for(let _e=0;_e<ie.removed.length;_e++){const F=ie.removed[_e],oe=D.indexOf(F);oe>=0&&(D[oe]=null,y[oe].disconnect(F))}for(let _e=0;_e<ie.added.length;_e++){const F=ie.added[_e];let oe=D.indexOf(F);if(oe===-1){for(let de=0;de<y.length;de++)if(de>=D.length){D.push(F),oe=de;break}else if(D[de]===null){D[de]=F,oe=de;break}if(oe===-1)break}const se=y[oe];se&&se.connect(F)}}const z=new J,U=new J;function ne(ie,_e,F){z.setFromMatrixPosition(_e.matrixWorld),U.setFromMatrixPosition(F.matrixWorld);const oe=z.distanceTo(U),se=_e.projectionMatrix.elements,de=F.projectionMatrix.elements,Pe=se[14]/(se[10]-1),A=se[14]/(se[10]+1),_=(se[9]+1)/se[5],O=(se[9]-1)/se[5],X=(se[8]-1)/se[0],Z=(de[8]+1)/de[0],W=Pe*X,pe=Pe*Z,Q=oe/(-X+Z),le=Q*-X;if(_e.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(le),ie.translateZ(Q),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),se[10]===-1)ie.projectionMatrix.copy(_e.projectionMatrix),ie.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const ce=Pe+Q,Ce=A+Q,M=W-le,v=pe+(oe-le),N=_*A/Ce*ce,Y=O*A/Ce*ce;ie.projectionMatrix.makePerspective(M,v,N,Y,ce,Ce),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function fe(ie,_e){_e===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(_e.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;let _e=ie.near,F=ie.far;x.texture!==null&&(x.depthNear>0&&(_e=x.depthNear),x.depthFar>0&&(F=x.depthFar)),I.near=b.near=R.near=_e,I.far=b.far=R.far=F,(B!==I.near||q!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),B=I.near,q=I.far),I.layers.mask=ie.layers.mask|6,R.layers.mask=I.layers.mask&3,b.layers.mask=I.layers.mask&5;const oe=ie.parent,se=I.cameras;fe(I,oe);for(let de=0;de<se.length;de++)fe(se[de],oe);se.length===2?ne(I,R,b):I.projectionMatrix.copy(R.projectionMatrix),Ee(ie,I,oe)};function Ee(ie,_e,F){F===null?ie.matrix.copy(_e.matrixWorld):(ie.matrix.copy(F.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(_e.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(_e.projectionMatrix),ie.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Lc*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(I)},this.getCameraTexture=function(ie){return m[ie]};let Me=null;function Qe(ie,_e){if(u=_e.getViewerPose(c||o),g=_e,u!==null){const F=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let oe=!1;F.length!==I.cameras.length&&(I.cameras.length=0,oe=!0);for(let A=0;A<F.length;A++){const _=F[A];let O=null;if(p!==null)O=p.getViewport(_);else{const Z=d.getViewSubImage(f,_);O=Z.viewport,A===0&&(e.setRenderTargetTextures(S,Z.colorTexture,Z.depthStencilTexture),e.setRenderTarget(S))}let X=E[A];X===void 0&&(X=new En,X.layers.enable(A),X.viewport=new It,E[A]=X),X.matrix.fromArray(_.transform.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale),X.projectionMatrix.fromArray(_.projectionMatrix),X.projectionMatrixInverse.copy(X.projectionMatrix).invert(),X.viewport.set(O.x,O.y,O.width,O.height),A===0&&(I.matrix.copy(X.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),oe===!0&&I.cameras.push(X)}const se=r.enabledFeatures;if(se&&se.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&d){const A=d.getDepthInformation(F[0]);A&&A.isValid&&A.texture&&x.init(A,r.renderState)}if(se&&se.includes("camera-access")&&(e.state.unbindTexture(),d))for(let A=0;A<F.length;A++){const _=F[A].camera;if(_){let O=m[_];O||(O=new fm,m[_]=O);const X=d.getCameraImage(_);O.sourceTexture=X}}}for(let F=0;F<y.length;F++){const oe=D[F],se=y[F];oe!==null&&se!==void 0&&se.update(oe,_e,c||o)}Me&&Me(ie,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const We=new am;We.setAnimationLoop(Qe),this.setAnimationLoop=function(ie){Me=ie},this.dispose=function(){}}}const Zi=new pi,eT=new Dt;function tT(t,e){function n(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,Jp(t)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,w,S,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),d(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),f(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),g(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),x(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,w,S):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,n(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===cn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,n(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===cn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,n(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,n(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,n(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const w=e.get(h),S=w.envMap,y=w.envMapRotation;S&&(m.envMap.value=S,Zi.copy(y),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),m.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(Zi)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,n(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,n(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,w,S){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*w,m.scale.value=S*.5,h.map&&(m.map.value=h.map,n(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,n(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,n(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function d(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function f(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,n(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,n(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,w){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,n(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,n(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,n(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,n(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,n(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===cn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,n(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,n(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,n(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,n(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,n(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,n(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,n(h.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const w=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function nT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,S){const y=S.program;i.uniformBlockBinding(w,y)}function c(w,S){let y=r[w.id];y===void 0&&(g(w),y=u(w),r[w.id]=y,w.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(w,D);const L=e.render.frame;s[w.id]!==L&&(f(w),s[w.id]=L)}function u(w){const S=d();w.__bindingPointIndex=S;const y=t.createBuffer(),D=w.__size,L=w.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,D,L),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,y),y}function d(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(w){const S=r[w.id],y=w.uniforms,D=w.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let L=0,P=y.length;L<P;L++){const R=Array.isArray(y[L])?y[L]:[y[L]];for(let b=0,E=R.length;b<E;b++){const I=R[b];if(p(I,L,b,D)===!0){const B=I.__offset,q=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let j=0;j<q.length;j++){const $=q[j],z=x($);typeof $=="number"||typeof $=="boolean"?(I.__data[0]=$,t.bufferSubData(t.UNIFORM_BUFFER,B+H,I.__data)):$.isMatrix3?(I.__data[0]=$.elements[0],I.__data[1]=$.elements[1],I.__data[2]=$.elements[2],I.__data[3]=0,I.__data[4]=$.elements[3],I.__data[5]=$.elements[4],I.__data[6]=$.elements[5],I.__data[7]=0,I.__data[8]=$.elements[6],I.__data[9]=$.elements[7],I.__data[10]=$.elements[8],I.__data[11]=0):($.toArray(I.__data,H),H+=z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,B,I.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(w,S,y,D){const L=w.value,P=S+"_"+y;if(D[P]===void 0)return typeof L=="number"||typeof L=="boolean"?D[P]=L:D[P]=L.clone(),!0;{const R=D[P];if(typeof L=="number"||typeof L=="boolean"){if(R!==L)return D[P]=L,!0}else if(R.equals(L)===!1)return R.copy(L),!0}return!1}function g(w){const S=w.uniforms;let y=0;const D=16;for(let P=0,R=S.length;P<R;P++){const b=Array.isArray(S[P])?S[P]:[S[P]];for(let E=0,I=b.length;E<I;E++){const B=b[E],q=Array.isArray(B.value)?B.value:[B.value];for(let H=0,j=q.length;H<j;H++){const $=q[H],z=x($),U=y%D,ne=U%z.boundary,fe=U+ne;y+=ne,fe!==0&&D-fe<z.storage&&(y+=D-fe),B.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=y,y+=z.storage}}}const L=y%D;return L>0&&(y+=D-L),w.__size=y,w.__cache={},this}function x(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function m(w){const S=w.target;S.removeEventListener("dispose",m);const y=o.indexOf(S.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function h(){for(const w in r)t.deleteBuffer(r[w]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class hm{constructor(e={}){const{canvas:n=zv(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const w=[],S=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let D=!1;this._outputColorSpace=yn;let L=0,P=0,R=null,b=-1,E=null;const I=new It,B=new It;let q=null;const H=new Ze(0);let j=0,$=n.width,z=n.height,U=1,ne=null,fe=null;const Ee=new It(0,0,$,z),Me=new It(0,0,$,z);let Qe=!1;const We=new rm;let ie=!1,_e=!1;const F=new Dt,oe=new J,se=new It,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pe=!1;function A(){return R===null?U:1}let _=i;function O(T,V){return n.getContext(T,V)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${fu}`),n.addEventListener("webglcontextlost",Se,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",ve,!1),_===null){const V="webgl2";if(_=O(V,T),_===null)throw O(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let X,Z,W,pe,Q,le,ce,Ce,M,v,N,Y,ae,K,Ie,me,Le,Ue,ge,Ae,Oe,Ne,Te,$e;function k(){X=new hS(_),X.init(),Ne=new jM(_,X),Z=new oS(_,X,e,Ne),W=new $M(_,X),Z.reversedDepthBuffer&&f&&W.buffers.depth.setReversed(!0),pe=new gS(_),Q=new UM,le=new YM(_,X,W,Q,Z,Ne,pe),ce=new lS(y),Ce=new fS(y),M=new Eb(_),Te=new rS(_,M),v=new pS(_,M,pe,Te),N=new _S(_,v,M,pe),ge=new xS(_,Z,le),me=new aS(Q),Y=new LM(y,ce,Ce,X,Z,Te,me),ae=new tT(y,Q),K=new FM,Ie=new VM(X),Ue=new iS(y,ce,Ce,W,N,p,l),Le=new XM(y,N,Z),$e=new nT(_,pe,Z,W),Ae=new sS(_,X,pe),Oe=new mS(_,X,pe),pe.programs=Y.programs,y.capabilities=Z,y.extensions=X,y.properties=Q,y.renderLists=K,y.shadowMap=Le,y.state=W,y.info=pe}k();const be=new QM(y,_);this.xr=be,this.getContext=function(){return _},this.getContextAttributes=function(){return _.getContextAttributes()},this.forceContextLoss=function(){const T=X.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=X.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return U},this.setPixelRatio=function(T){T!==void 0&&(U=T,this.setSize($,z,!1))},this.getSize=function(T){return T.set($,z)},this.setSize=function(T,V,ee=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=T,z=V,n.width=Math.floor(T*U),n.height=Math.floor(V*U),ee===!0&&(n.style.width=T+"px",n.style.height=V+"px"),this.setViewport(0,0,T,V)},this.getDrawingBufferSize=function(T){return T.set($*U,z*U).floor()},this.setDrawingBufferSize=function(T,V,ee){$=T,z=V,U=ee,n.width=Math.floor(T*ee),n.height=Math.floor(V*ee),this.setViewport(0,0,T,V)},this.getCurrentViewport=function(T){return T.copy(I)},this.getViewport=function(T){return T.copy(Ee)},this.setViewport=function(T,V,ee,te){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,V,ee,te),W.viewport(I.copy(Ee).multiplyScalar(U).round())},this.getScissor=function(T){return T.copy(Me)},this.setScissor=function(T,V,ee,te){T.isVector4?Me.set(T.x,T.y,T.z,T.w):Me.set(T,V,ee,te),W.scissor(B.copy(Me).multiplyScalar(U).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(T){W.setScissorTest(Qe=T)},this.setOpaqueSort=function(T){ne=T},this.setTransparentSort=function(T){fe=T},this.getClearColor=function(T){return T.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(T=!0,V=!0,ee=!0){let te=0;if(T){let G=!1;if(R!==null){const ye=R.texture.format;G=ye===_u||ye===xu||ye===gu}if(G){const ye=R.texture.type,De=ye===hi||ye===mr||ye===Hs||ye===Vs||ye===pu||ye===mu,Ve=Ue.getClearColor(),Be=Ue.getClearAlpha(),Ye=Ve.r,je=Ve.g,Ge=Ve.b;De?(g[0]=Ye,g[1]=je,g[2]=Ge,g[3]=Be,_.clearBufferuiv(_.COLOR,0,g)):(x[0]=Ye,x[1]=je,x[2]=Ge,x[3]=Be,_.clearBufferiv(_.COLOR,0,x))}else te|=_.COLOR_BUFFER_BIT}V&&(te|=_.DEPTH_BUFFER_BIT),ee&&(te|=_.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),_.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Se,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",ve,!1),Ue.dispose(),K.dispose(),Ie.dispose(),Q.dispose(),ce.dispose(),Ce.dispose(),N.dispose(),Te.dispose(),$e.dispose(),Y.dispose(),be.dispose(),be.removeEventListener("sessionstart",On),be.removeEventListener("sessionend",Eu),Hi.stop()};function Se(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const T=pe.autoReset,V=Le.enabled,ee=Le.autoUpdate,te=Le.needsUpdate,G=Le.type;k(),pe.autoReset=T,Le.enabled=V,Le.autoUpdate=ee,Le.needsUpdate=te,Le.type=G}function ve(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ue(T){const V=T.target;V.removeEventListener("dispose",ue),He(V)}function He(T){Ke(T),Q.remove(T)}function Ke(T){const V=Q.get(T).programs;V!==void 0&&(V.forEach(function(ee){Y.releaseProgram(ee)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,V,ee,te,G,ye){V===null&&(V=de);const De=G.isMesh&&G.matrixWorld.determinant()<0,Ve=vm(T,V,ee,te,G);W.setMaterial(te,De);let Be=ee.index,Ye=1;if(te.wireframe===!0){if(Be=v.getWireframeAttribute(ee),Be===void 0)return;Ye=2}const je=ee.drawRange,Ge=ee.attributes.position;let rt=je.start*Ye,pt=(je.start+je.count)*Ye;ye!==null&&(rt=Math.max(rt,ye.start*Ye),pt=Math.min(pt,(ye.start+ye.count)*Ye)),Be!==null?(rt=Math.max(rt,0),pt=Math.min(pt,Be.count)):Ge!=null&&(rt=Math.max(rt,0),pt=Math.min(pt,Ge.count));const At=pt-rt;if(At<0||At===1/0)return;Te.setup(G,te,Ve,ee,Be);let Et,_t=Ae;if(Be!==null&&(Et=M.get(Be),_t=Oe,_t.setIndex(Et)),G.isMesh)te.wireframe===!0?(W.setLineWidth(te.wireframeLinewidth*A()),_t.setMode(_.LINES)):_t.setMode(_.TRIANGLES);else if(G.isLine){let Xe=te.linewidth;Xe===void 0&&(Xe=1),W.setLineWidth(Xe*A()),G.isLineSegments?_t.setMode(_.LINES):G.isLineLoop?_t.setMode(_.LINE_LOOP):_t.setMode(_.LINE_STRIP)}else G.isPoints?_t.setMode(_.POINTS):G.isSprite&&_t.setMode(_.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)$r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))_t.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Xe=G._multiDrawStarts,St=G._multiDrawCounts,ct=G._multiDrawCount,un=Be?M.get(Be).bytesPerElement:1,xr=Q.get(te).currentProgram.getUniforms();for(let dn=0;dn<ct;dn++)xr.setValue(_,"_gl_DrawID",dn),_t.render(Xe[dn]/un,St[dn])}else if(G.isInstancedMesh)_t.renderInstances(rt,At,G.count);else if(ee.isInstancedBufferGeometry){const Xe=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,St=Math.min(ee.instanceCount,Xe);_t.renderInstances(rt,At,St)}else _t.render(rt,At)};function re(T,V,ee){T.transparent===!0&&T.side===Gn&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,io(T,V,ee),T.side=ki,T.needsUpdate=!0,io(T,V,ee),T.side=Gn):io(T,V,ee)}this.compile=function(T,V,ee=null){ee===null&&(ee=T),h=Ie.get(ee),h.init(V),S.push(h),ee.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),T!==ee&&T.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights();const te=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let De=0;De<ye.length;De++){const Ve=ye[De];re(Ve,ee,G),te.add(Ve)}else re(ye,ee,G),te.add(ye)}),h=S.pop(),te},this.compileAsync=function(T,V,ee=null){const te=this.compile(T,V,ee);return new Promise(G=>{function ye(){if(te.forEach(function(De){Q.get(De).currentProgram.isReady()&&te.delete(De)}),te.size===0){G(T);return}setTimeout(ye,10)}X.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let he=null;function bt(T){he&&he(T)}function On(){Hi.stop()}function Eu(){Hi.start()}const Hi=new am;Hi.setAnimationLoop(bt),typeof self<"u"&&Hi.setContext(self),this.setAnimationLoop=function(T){he=T,be.setAnimationLoop(T),T===null?Hi.stop():Hi.start()},be.addEventListener("sessionstart",On),be.addEventListener("sessionend",Eu),this.render=function(T,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(V),V=be.getCamera()),T.isScene===!0&&T.onBeforeRender(y,T,V,R),h=Ie.get(T,S.length),h.init(V),S.push(h),F.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),We.setFromProjectionMatrix(F,Xn,V.reversedDepth),_e=this.localClippingEnabled,ie=me.init(this.clippingPlanes,_e),m=K.get(T,w.length),m.init(),w.push(m),be.enabled===!0&&be.isPresenting===!0){const ye=y.xr.getDepthSensingMesh();ye!==null&&Ia(ye,V,-1/0,y.sortObjects)}Ia(T,V,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,fe),Pe=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,Pe&&Ue.addToRenderList(m,T),this.info.render.frame++,ie===!0&&me.beginShadows();const ee=h.state.shadowsArray;Le.render(ee,T,V),ie===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const te=m.opaque,G=m.transmissive;if(h.setupLights(),V.isArrayCamera){const ye=V.cameras;if(G.length>0)for(let De=0,Ve=ye.length;De<Ve;De++){const Be=ye[De];Mu(te,G,T,Be)}Pe&&Ue.render(T);for(let De=0,Ve=ye.length;De<Ve;De++){const Be=ye[De];Su(m,T,Be,Be.viewport)}}else G.length>0&&Mu(te,G,T,V),Pe&&Ue.render(T),Su(m,T,V);R!==null&&P===0&&(le.updateMultisampleRenderTarget(R),le.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(y,T,V),Te.resetDefaultState(),b=-1,E=null,S.pop(),S.length>0?(h=S[S.length-1],ie===!0&&me.setGlobalState(y.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Ia(T,V,ee,te){if(T.visible===!1)return;if(T.layers.test(V.layers)){if(T.isGroup)ee=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(V);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||We.intersectsSprite(T)){te&&se.setFromMatrixPosition(T.matrixWorld).applyMatrix4(F);const De=N.update(T),Ve=T.material;Ve.visible&&m.push(T,De,Ve,ee,se.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||We.intersectsObject(T))){const De=N.update(T),Ve=T.material;if(te&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),se.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),se.copy(De.boundingSphere.center)),se.applyMatrix4(T.matrixWorld).applyMatrix4(F)),Array.isArray(Ve)){const Be=De.groups;for(let Ye=0,je=Be.length;Ye<je;Ye++){const Ge=Be[Ye],rt=Ve[Ge.materialIndex];rt&&rt.visible&&m.push(T,De,rt,ee,se.z,Ge)}}else Ve.visible&&m.push(T,De,Ve,ee,se.z,null)}}const ye=T.children;for(let De=0,Ve=ye.length;De<Ve;De++)Ia(ye[De],V,ee,te)}function Su(T,V,ee,te){const G=T.opaque,ye=T.transmissive,De=T.transparent;h.setupLightsView(ee),ie===!0&&me.setGlobalState(y.clippingPlanes,ee),te&&W.viewport(I.copy(te)),G.length>0&&no(G,V,ee),ye.length>0&&no(ye,V,ee),De.length>0&&no(De,V,ee),W.buffers.depth.setTest(!0),W.buffers.depth.setMask(!0),W.buffers.color.setMask(!0),W.setPolygonOffset(!1)}function Mu(T,V,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[te.id]===void 0&&(h.state.transmissionRenderTarget[te.id]=new gr(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?Zs:hi,minFilter:ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));const ye=h.state.transmissionRenderTarget[te.id],De=te.viewport||I;ye.setSize(De.z*y.transmissionResolutionScale,De.w*y.transmissionResolutionScale);const Ve=y.getRenderTarget(),Be=y.getActiveCubeFace(),Ye=y.getActiveMipmapLevel();y.setRenderTarget(ye),y.getClearColor(H),j=y.getClearAlpha(),j<1&&y.setClearColor(16777215,.5),y.clear(),Pe&&Ue.render(ee);const je=y.toneMapping;y.toneMapping=Ui;const Ge=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),h.setupLightsView(te),ie===!0&&me.setGlobalState(y.clippingPlanes,te),no(T,ee,te),le.updateMultisampleRenderTarget(ye),le.updateRenderTargetMipmap(ye),X.has("WEBGL_multisampled_render_to_texture")===!1){let rt=!1;for(let pt=0,At=V.length;pt<At;pt++){const Et=V[pt],_t=Et.object,Xe=Et.geometry,St=Et.material,ct=Et.group;if(St.side===Gn&&_t.layers.test(te.layers)){const un=St.side;St.side=cn,St.needsUpdate=!0,Tu(_t,ee,te,Xe,St,ct),St.side=un,St.needsUpdate=!0,rt=!0}}rt===!0&&(le.updateMultisampleRenderTarget(ye),le.updateRenderTargetMipmap(ye))}y.setRenderTarget(Ve,Be,Ye),y.setClearColor(H,j),Ge!==void 0&&(te.viewport=Ge),y.toneMapping=je}function no(T,V,ee){const te=V.isScene===!0?V.overrideMaterial:null;for(let G=0,ye=T.length;G<ye;G++){const De=T[G],Ve=De.object,Be=De.geometry,Ye=De.group;let je=De.material;je.allowOverride===!0&&te!==null&&(je=te),Ve.layers.test(ee.layers)&&Tu(Ve,V,ee,Be,je,Ye)}}function Tu(T,V,ee,te,G,ye){T.onBeforeRender(y,V,ee,te,G,ye),T.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(y,V,ee,te,T,ye),G.transparent===!0&&G.side===Gn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,y.renderBufferDirect(ee,V,te,G,T,ye),G.side=ki,G.needsUpdate=!0,y.renderBufferDirect(ee,V,te,G,T,ye),G.side=Gn):y.renderBufferDirect(ee,V,te,G,T,ye),T.onAfterRender(y,V,ee,te,G,ye)}function io(T,V,ee){V.isScene!==!0&&(V=de);const te=Q.get(T),G=h.state.lights,ye=h.state.shadowsArray,De=G.state.version,Ve=Y.getParameters(T,G.state,ye,V,ee),Be=Y.getProgramCacheKey(Ve);let Ye=te.programs;te.environment=T.isMeshStandardMaterial?V.environment:null,te.fog=V.fog,te.envMap=(T.isMeshStandardMaterial?Ce:ce).get(T.envMap||te.environment),te.envMapRotation=te.environment!==null&&T.envMap===null?V.environmentRotation:T.envMapRotation,Ye===void 0&&(T.addEventListener("dispose",ue),Ye=new Map,te.programs=Ye);let je=Ye.get(Be);if(je!==void 0){if(te.currentProgram===je&&te.lightsStateVersion===De)return Au(T,Ve),je}else Ve.uniforms=Y.getUniforms(T),T.onBeforeCompile(Ve,y),je=Y.acquireProgram(Ve,Be),Ye.set(Be,je),te.uniforms=Ve.uniforms;const Ge=te.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ge.clippingPlanes=me.uniform),Au(T,Ve),te.needsLights=ym(T),te.lightsStateVersion=De,te.needsLights&&(Ge.ambientLightColor.value=G.state.ambient,Ge.lightProbe.value=G.state.probe,Ge.directionalLights.value=G.state.directional,Ge.directionalLightShadows.value=G.state.directionalShadow,Ge.spotLights.value=G.state.spot,Ge.spotLightShadows.value=G.state.spotShadow,Ge.rectAreaLights.value=G.state.rectArea,Ge.ltc_1.value=G.state.rectAreaLTC1,Ge.ltc_2.value=G.state.rectAreaLTC2,Ge.pointLights.value=G.state.point,Ge.pointLightShadows.value=G.state.pointShadow,Ge.hemisphereLights.value=G.state.hemi,Ge.directionalShadowMap.value=G.state.directionalShadowMap,Ge.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ge.spotShadowMap.value=G.state.spotShadowMap,Ge.spotLightMatrix.value=G.state.spotLightMatrix,Ge.spotLightMap.value=G.state.spotLightMap,Ge.pointShadowMap.value=G.state.pointShadowMap,Ge.pointShadowMatrix.value=G.state.pointShadowMatrix),te.currentProgram=je,te.uniformsList=null,je}function wu(T){if(T.uniformsList===null){const V=T.currentProgram.getUniforms();T.uniformsList=Yo.seqWithValue(V.seq,T.uniforms)}return T.uniformsList}function Au(T,V){const ee=Q.get(T);ee.outputColorSpace=V.outputColorSpace,ee.batching=V.batching,ee.batchingColor=V.batchingColor,ee.instancing=V.instancing,ee.instancingColor=V.instancingColor,ee.instancingMorph=V.instancingMorph,ee.skinning=V.skinning,ee.morphTargets=V.morphTargets,ee.morphNormals=V.morphNormals,ee.morphColors=V.morphColors,ee.morphTargetsCount=V.morphTargetsCount,ee.numClippingPlanes=V.numClippingPlanes,ee.numIntersection=V.numClipIntersection,ee.vertexAlphas=V.vertexAlphas,ee.vertexTangents=V.vertexTangents,ee.toneMapping=V.toneMapping}function vm(T,V,ee,te,G){V.isScene!==!0&&(V=de),le.resetTextureUnits();const ye=V.fog,De=te.isMeshStandardMaterial?V.environment:null,Ve=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:rs,Be=(te.isMeshStandardMaterial?Ce:ce).get(te.envMap||De),Ye=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,je=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ge=!!ee.morphAttributes.position,rt=!!ee.morphAttributes.normal,pt=!!ee.morphAttributes.color;let At=Ui;te.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(At=y.toneMapping);const Et=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,_t=Et!==void 0?Et.length:0,Xe=Q.get(te),St=h.state.lights;if(ie===!0&&(_e===!0||T!==E)){const Jt=T===E&&te.id===b;me.setState(te,T,Jt)}let ct=!1;te.version===Xe.__version?(Xe.needsLights&&Xe.lightsStateVersion!==St.state.version||Xe.outputColorSpace!==Ve||G.isBatchedMesh&&Xe.batching===!1||!G.isBatchedMesh&&Xe.batching===!0||G.isBatchedMesh&&Xe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Xe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Xe.instancing===!1||!G.isInstancedMesh&&Xe.instancing===!0||G.isSkinnedMesh&&Xe.skinning===!1||!G.isSkinnedMesh&&Xe.skinning===!0||G.isInstancedMesh&&Xe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Xe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Xe.instancingMorph===!1&&G.morphTexture!==null||Xe.envMap!==Be||te.fog===!0&&Xe.fog!==ye||Xe.numClippingPlanes!==void 0&&(Xe.numClippingPlanes!==me.numPlanes||Xe.numIntersection!==me.numIntersection)||Xe.vertexAlphas!==Ye||Xe.vertexTangents!==je||Xe.morphTargets!==Ge||Xe.morphNormals!==rt||Xe.morphColors!==pt||Xe.toneMapping!==At||Xe.morphTargetsCount!==_t)&&(ct=!0):(ct=!0,Xe.__version=te.version);let un=Xe.currentProgram;ct===!0&&(un=io(te,V,G));let xr=!1,dn=!1,cs=!1;const Mt=un.getUniforms(),xn=Xe.uniforms;if(W.useProgram(un.program)&&(xr=!0,dn=!0,cs=!0),te.id!==b&&(b=te.id,dn=!0),xr||E!==T){W.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Mt.setValue(_,"projectionMatrix",T.projectionMatrix),Mt.setValue(_,"viewMatrix",T.matrixWorldInverse);const ln=Mt.map.cameraPosition;ln!==void 0&&ln.setValue(_,oe.setFromMatrixPosition(T.matrixWorld)),Z.logarithmicDepthBuffer&&Mt.setValue(_,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Mt.setValue(_,"isOrthographic",T.isOrthographicCamera===!0),E!==T&&(E=T,dn=!0,cs=!0)}if(G.isSkinnedMesh){Mt.setOptional(_,G,"bindMatrix"),Mt.setOptional(_,G,"bindMatrixInverse");const Jt=G.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),Mt.setValue(_,"boneTexture",Jt.boneTexture,le))}G.isBatchedMesh&&(Mt.setOptional(_,G,"batchingTexture"),Mt.setValue(_,"batchingTexture",G._matricesTexture,le),Mt.setOptional(_,G,"batchingIdTexture"),Mt.setValue(_,"batchingIdTexture",G._indirectTexture,le),Mt.setOptional(_,G,"batchingColorTexture"),G._colorsTexture!==null&&Mt.setValue(_,"batchingColorTexture",G._colorsTexture,le));const _n=ee.morphAttributes;if((_n.position!==void 0||_n.normal!==void 0||_n.color!==void 0)&&ge.update(G,ee,un),(dn||Xe.receiveShadow!==G.receiveShadow)&&(Xe.receiveShadow=G.receiveShadow,Mt.setValue(_,"receiveShadow",G.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(xn.envMap.value=Be,xn.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&V.environment!==null&&(xn.envMapIntensity.value=V.environmentIntensity),dn&&(Mt.setValue(_,"toneMappingExposure",y.toneMappingExposure),Xe.needsLights&&bm(xn,cs),ye&&te.fog===!0&&ae.refreshFogUniforms(xn,ye),ae.refreshMaterialUniforms(xn,te,U,z,h.state.transmissionRenderTarget[T.id]),Yo.upload(_,wu(Xe),xn,le)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Yo.upload(_,wu(Xe),xn,le),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Mt.setValue(_,"center",G.center),Mt.setValue(_,"modelViewMatrix",G.modelViewMatrix),Mt.setValue(_,"normalMatrix",G.normalMatrix),Mt.setValue(_,"modelMatrix",G.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const Jt=te.uniformsGroups;for(let ln=0,Da=Jt.length;ln<Da;ln++){const Vi=Jt[ln];$e.update(Vi,un),$e.bind(Vi,un)}}return un}function bm(T,V){T.ambientLightColor.needsUpdate=V,T.lightProbe.needsUpdate=V,T.directionalLights.needsUpdate=V,T.directionalLightShadows.needsUpdate=V,T.pointLights.needsUpdate=V,T.pointLightShadows.needsUpdate=V,T.spotLights.needsUpdate=V,T.spotLightShadows.needsUpdate=V,T.rectAreaLights.needsUpdate=V,T.hemisphereLights.needsUpdate=V}function ym(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,V,ee){const te=Q.get(T);te.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),Q.get(T.texture).__webglTexture=V,Q.get(T.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,V){const ee=Q.get(T);ee.__webglFramebuffer=V,ee.__useDefaultFramebuffer=V===void 0};const Em=_.createFramebuffer();this.setRenderTarget=function(T,V=0,ee=0){R=T,L=V,P=ee;let te=!0,G=null,ye=!1,De=!1;if(T){const Be=Q.get(T);if(Be.__useDefaultFramebuffer!==void 0)W.bindFramebuffer(_.FRAMEBUFFER,null),te=!1;else if(Be.__webglFramebuffer===void 0)le.setupRenderTarget(T);else if(Be.__hasExternalTextures)le.rebindTextures(T,Q.get(T.texture).__webglTexture,Q.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ge=T.depthTexture;if(Be.__boundDepthTexture!==Ge){if(Ge!==null&&Q.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");le.setupDepthRenderbuffer(T)}}const Ye=T.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(De=!0);const je=Q.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(je[V])?G=je[V][ee]:G=je[V],ye=!0):T.samples>0&&le.useMultisampledRTT(T)===!1?G=Q.get(T).__webglMultisampledFramebuffer:Array.isArray(je)?G=je[ee]:G=je,I.copy(T.viewport),B.copy(T.scissor),q=T.scissorTest}else I.copy(Ee).multiplyScalar(U).floor(),B.copy(Me).multiplyScalar(U).floor(),q=Qe;if(ee!==0&&(G=Em),W.bindFramebuffer(_.FRAMEBUFFER,G)&&te&&W.drawBuffers(T,G),W.viewport(I),W.scissor(B),W.setScissorTest(q),ye){const Be=Q.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_CUBE_MAP_POSITIVE_X+V,Be.__webglTexture,ee)}else if(De){const Be=V;for(let Ye=0;Ye<T.textures.length;Ye++){const je=Q.get(T.textures[Ye]);_.framebufferTextureLayer(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0+Ye,je.__webglTexture,ee,Be)}}else if(T!==null&&ee!==0){const Be=Q.get(T.texture);_.framebufferTexture2D(_.FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Be.__webglTexture,ee)}b=-1},this.readRenderTargetPixels=function(T,V,ee,te,G,ye,De,Ve=0){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be){W.bindFramebuffer(_.FRAMEBUFFER,Be);try{const Ye=T.textures[Ve],je=Ye.format,Ge=Ye.type;if(!Z.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Z.textureTypeReadable(Ge)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=T.width-te&&ee>=0&&ee<=T.height-G&&(T.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ve),_.readPixels(V,ee,te,G,Ne.convert(je),Ne.convert(Ge),ye))}finally{const Ye=R!==null?Q.get(R).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(T,V,ee,te,G,ye,De,Ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=Q.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Be=Be[De]),Be)if(V>=0&&V<=T.width-te&&ee>=0&&ee<=T.height-G){W.bindFramebuffer(_.FRAMEBUFFER,Be);const Ye=T.textures[Ve],je=Ye.format,Ge=Ye.type;if(!Z.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Z.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const rt=_.createBuffer();_.bindBuffer(_.PIXEL_PACK_BUFFER,rt),_.bufferData(_.PIXEL_PACK_BUFFER,ye.byteLength,_.STREAM_READ),T.textures.length>1&&_.readBuffer(_.COLOR_ATTACHMENT0+Ve),_.readPixels(V,ee,te,G,Ne.convert(je),Ne.convert(Ge),0);const pt=R!==null?Q.get(R).__webglFramebuffer:null;W.bindFramebuffer(_.FRAMEBUFFER,pt);const At=_.fenceSync(_.SYNC_GPU_COMMANDS_COMPLETE,0);return _.flush(),await Hv(_,At,4),_.bindBuffer(_.PIXEL_PACK_BUFFER,rt),_.getBufferSubData(_.PIXEL_PACK_BUFFER,0,ye),_.deleteBuffer(rt),_.deleteSync(At),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,V=null,ee=0){const te=Math.pow(2,-ee),G=Math.floor(T.image.width*te),ye=Math.floor(T.image.height*te),De=V!==null?V.x:0,Ve=V!==null?V.y:0;le.setTexture2D(T,0),_.copyTexSubImage2D(_.TEXTURE_2D,ee,0,0,De,Ve,G,ye),W.unbindTexture()};const Sm=_.createFramebuffer(),Mm=_.createFramebuffer();this.copyTextureToTexture=function(T,V,ee=null,te=null,G=0,ye=null){ye===null&&(G!==0?($r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ye=G,G=0):ye=0);let De,Ve,Be,Ye,je,Ge,rt,pt,At;const Et=T.isCompressedTexture?T.mipmaps[ye]:T.image;if(ee!==null)De=ee.max.x-ee.min.x,Ve=ee.max.y-ee.min.y,Be=ee.isBox3?ee.max.z-ee.min.z:1,Ye=ee.min.x,je=ee.min.y,Ge=ee.isBox3?ee.min.z:0;else{const _n=Math.pow(2,-G);De=Math.floor(Et.width*_n),Ve=Math.floor(Et.height*_n),T.isDataArrayTexture?Be=Et.depth:T.isData3DTexture?Be=Math.floor(Et.depth*_n):Be=1,Ye=0,je=0,Ge=0}te!==null?(rt=te.x,pt=te.y,At=te.z):(rt=0,pt=0,At=0);const _t=Ne.convert(V.format),Xe=Ne.convert(V.type);let St;V.isData3DTexture?(le.setTexture3D(V,0),St=_.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(le.setTexture2DArray(V,0),St=_.TEXTURE_2D_ARRAY):(le.setTexture2D(V,0),St=_.TEXTURE_2D),_.pixelStorei(_.UNPACK_FLIP_Y_WEBGL,V.flipY),_.pixelStorei(_.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),_.pixelStorei(_.UNPACK_ALIGNMENT,V.unpackAlignment);const ct=_.getParameter(_.UNPACK_ROW_LENGTH),un=_.getParameter(_.UNPACK_IMAGE_HEIGHT),xr=_.getParameter(_.UNPACK_SKIP_PIXELS),dn=_.getParameter(_.UNPACK_SKIP_ROWS),cs=_.getParameter(_.UNPACK_SKIP_IMAGES);_.pixelStorei(_.UNPACK_ROW_LENGTH,Et.width),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,Et.height),_.pixelStorei(_.UNPACK_SKIP_PIXELS,Ye),_.pixelStorei(_.UNPACK_SKIP_ROWS,je),_.pixelStorei(_.UNPACK_SKIP_IMAGES,Ge);const Mt=T.isDataArrayTexture||T.isData3DTexture,xn=V.isDataArrayTexture||V.isData3DTexture;if(T.isDepthTexture){const _n=Q.get(T),Jt=Q.get(V),ln=Q.get(_n.__renderTarget),Da=Q.get(Jt.__renderTarget);W.bindFramebuffer(_.READ_FRAMEBUFFER,ln.__webglFramebuffer),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,Da.__webglFramebuffer);for(let Vi=0;Vi<Be;Vi++)Mt&&(_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(T).__webglTexture,G,Ge+Vi),_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Q.get(V).__webglTexture,ye,At+Vi)),_.blitFramebuffer(Ye,je,De,Ve,rt,pt,De,Ve,_.DEPTH_BUFFER_BIT,_.NEAREST);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||Q.has(T)){const _n=Q.get(T),Jt=Q.get(V);W.bindFramebuffer(_.READ_FRAMEBUFFER,Sm),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,Mm);for(let ln=0;ln<Be;ln++)Mt?_.framebufferTextureLayer(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_n.__webglTexture,G,Ge+ln):_.framebufferTexture2D(_.READ_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,_n.__webglTexture,G),xn?_.framebufferTextureLayer(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,Jt.__webglTexture,ye,At+ln):_.framebufferTexture2D(_.DRAW_FRAMEBUFFER,_.COLOR_ATTACHMENT0,_.TEXTURE_2D,Jt.__webglTexture,ye),G!==0?_.blitFramebuffer(Ye,je,De,Ve,rt,pt,De,Ve,_.COLOR_BUFFER_BIT,_.NEAREST):xn?_.copyTexSubImage3D(St,ye,rt,pt,At+ln,Ye,je,De,Ve):_.copyTexSubImage2D(St,ye,rt,pt,Ye,je,De,Ve);W.bindFramebuffer(_.READ_FRAMEBUFFER,null),W.bindFramebuffer(_.DRAW_FRAMEBUFFER,null)}else xn?T.isDataTexture||T.isData3DTexture?_.texSubImage3D(St,ye,rt,pt,At,De,Ve,Be,_t,Xe,Et.data):V.isCompressedArrayTexture?_.compressedTexSubImage3D(St,ye,rt,pt,At,De,Ve,Be,_t,Et.data):_.texSubImage3D(St,ye,rt,pt,At,De,Ve,Be,_t,Xe,Et):T.isDataTexture?_.texSubImage2D(_.TEXTURE_2D,ye,rt,pt,De,Ve,_t,Xe,Et.data):T.isCompressedTexture?_.compressedTexSubImage2D(_.TEXTURE_2D,ye,rt,pt,Et.width,Et.height,_t,Et.data):_.texSubImage2D(_.TEXTURE_2D,ye,rt,pt,De,Ve,_t,Xe,Et);_.pixelStorei(_.UNPACK_ROW_LENGTH,ct),_.pixelStorei(_.UNPACK_IMAGE_HEIGHT,un),_.pixelStorei(_.UNPACK_SKIP_PIXELS,xr),_.pixelStorei(_.UNPACK_SKIP_ROWS,dn),_.pixelStorei(_.UNPACK_SKIP_IMAGES,cs),ye===0&&V.generateMipmaps&&_.generateMipmap(St),W.unbindTexture()},this.copyTextureToTexture3D=function(T,V,ee=null,te=null,G=0){return $r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,V,ee,te,G)},this.initRenderTarget=function(T){Q.get(T).__webglFramebuffer===void 0&&le.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?le.setTextureCube(T,0):T.isData3DTexture?le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?le.setTexture2DArray(T,0):le.setTexture2D(T,0),W.unbindTexture()},this.resetState=function(){L=0,P=0,R=null,W.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),n.unpackColorSpace=ut._getUnpackColorSpace()}}const iT=gn({__name:"LogoThreeFx",props:{sparkleCount:{},padding:{}},setup(t){const e=t,n=it(null),i=it(null);let r=null;function s(){const c=document.createElement("canvas");c.width=128,c.height=128;const u=c.getContext("2d");if(!u)return new Vt;const d=u.createRadialGradient(128/2,128/2,0,128/2,128/2,128/2);d.addColorStop(0,"rgba(255,255,255,1)"),d.addColorStop(.15,"rgba(255,255,255,0.8)"),d.addColorStop(.4,"rgba(255,255,255,0.3)"),d.addColorStop(.7,"rgba(255,255,255,0.1)"),d.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=d,u.fillRect(0,0,128,128);const f=new jr(c);return f.minFilter=Kt,f.magFilter=Kt,f}function o(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Vt;u.clearRect(0,0,256,256);const d=256/2,f=256/2;u.save(),u.translate(d,f);const p=u.createRadialGradient(0,0,0,0,0,256*.12);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(.5,"rgba(255,255,255,0.7)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.arc(0,0,256*.12,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";const g=(m,h,w)=>{const S=u.createLinearGradient(-m,0,m,0);S.addColorStop(0,"rgba(255,255,255,0)"),S.addColorStop(.35,`rgba(255,255,255,${w*.4})`),S.addColorStop(.5,`rgba(255,255,255,${w})`),S.addColorStop(.65,`rgba(255,255,255,${w*.4})`),S.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=S,u.beginPath(),u.moveTo(-m,0),u.lineTo(0,-h),u.lineTo(m,0),u.lineTo(0,h),u.closePath(),u.fill()};g(256*.48,256*.025,.95),u.rotate(Math.PI/2),g(256*.48,256*.025,.95),u.rotate(Math.PI/4),g(256*.32,256*.015,.6),u.rotate(Math.PI/2),g(256*.32,256*.015,.6),u.restore();const x=new jr(c);return x.minFilter=Kt,x.magFilter=Kt,x}function a(){const c=document.createElement("canvas");c.width=256,c.height=256;const u=c.getContext("2d");if(!u)return new Vt;u.clearRect(0,0,256,256);const d=256/2,f=256/2;u.save(),u.translate(d,f);const p=u.createRadialGradient(0,0,0,0,0,256*.1);p.addColorStop(0,"rgba(255,255,255,1)"),p.addColorStop(.6,"rgba(255,255,255,0.6)"),p.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=p,u.beginPath(),u.arc(0,0,256*.1,0,Math.PI*2),u.fill(),u.globalCompositeOperation="lighter";for(let x=0;x<6;x++){const m=x*Math.PI/3;u.save(),u.rotate(m);const h=u.createLinearGradient(0,0,256*.42,0);h.addColorStop(0,"rgba(255,255,255,0.9)"),h.addColorStop(.25,"rgba(255,255,255,0.5)"),h.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=h,u.beginPath(),u.moveTo(0,-256*.018),u.lineTo(256*.42,0),u.lineTo(0,256*.018),u.closePath(),u.fill(),u.restore()}u.restore();const g=new jr(c);return g.minFilter=Kt,g.magFilter=Kt,g}return Yn(async()=>{if(!n.value||!i.value)return;const l=i.value,c=new hm({canvas:l,alpha:!0,antialias:!0,premultipliedAlpha:!0});c.setClearColor(0,0),c.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const u=new tm,d=new om(-1,1,1,-1,.1,10);d.position.z=2;const f=()=>{const H=e.padding??0,j=n.value?.clientWidth??1,$=n.value?.clientHeight??1,z=j+H*2,U=$+H*2;c.setSize(z,U,!1),d.left=-z/2,d.right=z/2,d.top=U/2,d.bottom=-U/2,d.updateProjectionMatrix()},p=new ResizeObserver(()=>f());p.observe(n.value),f();const g=s(),x=o(),m=a(),h=new Es;u.add(h);const w=e.sparkleCount??60,S=[],y=(H,j)=>H+Math.random()*(j-H),D=H=>{let j,$,z;const U=Math.random();let ne;switch(U<.45?ne=new Ze().setHSL(.11+Math.random()*.04,.85,.85):U<.85?ne=new Ze().setHSL(.14,.2,.98):ne=new Ze().setHSL(.58,.5,.92),H){case"fourStar":j=x,$=y(35,70),z=y(.5,1);break;case"sixStar":j=m,$=y(28,50),z=y(.6,1.1);break;default:j=g,$=y(10,28),z=y(1,2.2)}const fe=new nm({map:j,transparent:!0,depthWrite:!1,blending:zs,color:ne,opacity:0,rotation:y(0,Math.PI*2)}),Ee=new hb(fe);return Ee.scale.set($,$,1),h.add(Ee),{sprite:Ee,type:H,speed:z,phase:y(0,Math.PI*2),baseScale:$,rotationSpeed:H==="soft"?0:y(-.2,.2),baseX:0,baseY:0,floatRadius:y(1,5),floatSpeed:y(.4,1.2)}},L=()=>{const H=e.padding??0,j=(n.value?.clientWidth??1)+H*2,$=(n.value?.clientHeight??1)+H*2;for(const z of S){if(z.type==="fourStar"||z.type==="sixStar"){const ne=y(0,Math.PI*2),fe=j*y(.3,.48),Ee=$*y(.25,.45),Me=Math.cos(ne)*fe,Qe=Math.sin(ne)*Ee;z.baseX=Me,z.baseY=Qe}else{const ne=y(-j*.42,j*.42),fe=y(-$*.38,$*.38);z.baseX=ne,z.baseY=fe}z.sprite.position.set(z.baseX,z.baseY,0)}},P=Math.floor(w*.15),R=Math.floor(w*.1),b=w-P-R;for(let H=0;H<P;H++)S.push(D("fourStar"));for(let H=0;H<R;H++)S.push(D("sixStar"));for(let H=0;H<b;H++)S.push(D("soft"));L();const E=new ResizeObserver(()=>{f(),L()});E.observe(n.value);let I=0;const B=new bb,q=()=>{const H=B.getElapsedTime();for(const j of S){const $=Math.sin(H*j.speed+j.phase),z=Math.sin(H*j.speed*1.7+j.phase*.5),U=.5+.35*$+.15*z,ne=Math.pow(Math.max(0,U),2.2),fe=j.type==="soft"?.15:.08,Ee=j.type==="soft"?.75:.92,Me=j.sprite.material;Me.opacity=fe+(Ee-fe)*ne;const Qe=j.type==="soft"?.75+.4*ne:.65+.5*ne,We=j.baseScale*Qe;j.sprite.scale.set(We,We,1),j.rotationSpeed!==0&&(Me.rotation+=j.rotationSpeed*.016);const ie=Math.sin(H*j.floatSpeed+j.phase)*j.floatRadius,_e=Math.cos(H*j.floatSpeed*.8+j.phase*1.3)*j.floatRadius;j.sprite.position.set(j.baseX+ie,j.baseY+_e,0)}c.render(u,d),I=window.requestAnimationFrame(q)};I=window.requestAnimationFrame(q),r=()=>{window.cancelAnimationFrame(I),p.disconnect(),E.disconnect(),c.dispose(),g.dispose(),x.dispose(),m.dispose(),h.clear()}}),Fi(()=>{r?.(),r=null}),(l,c)=>(xe(),we("div",{ref_key:"containerEl",ref:n,class:"absolute inset-0 overflow-visible"},[C("canvas",{ref_key:"canvasEl",ref:i,class:"pointer-events-none absolute",style:fr({left:`-${e.padding??0}px`,top:`-${e.padding??0}px`,width:`calc(100% + ${(e.padding??0)*2}px)`,height:`calc(100% + ${(e.padding??0)*2}px)`})},null,4)],512))}}),rT={class:"relative min-h-screen overflow-hidden bg-slate-950"},sT={class:"absolute inset-x-0 bottom-[220px] top-0 flex items-end justify-center overflow-hidden md:bottom-0 md:block","aria-hidden":"true"},oT=["src"],aT={class:"relative z-10 flex min-h-screen flex-col justify-end px-5 pt-4 md:justify-center md:px-16 md:py-12 lg:px-24",style:{"padding-bottom":"calc(2rem + env(safe-area-inset-bottom, 0px))"}},lT={class:"w-full max-w-md md:max-w-md"},cT={class:"relative mb-6 inline-block md:mb-10"},uT=["src"],dT={class:"space-y-2.5 md:space-y-3"},fT=["disabled"],hT={class:"relative flex items-center justify-between"},pT={key:0,class:"text-xs text-white/40"},mT={key:1,class:"hidden rounded bg-white/10 px-2 py-0.5 text-xs text-white/60 sm:inline-block"},gT=["disabled"],xT={class:"relative flex items-center justify-between"},_T={class:"text-base md:text-lg"},vT={key:0,class:"ml-2 text-sm font-normal text-white/50"},bT={key:0,class:"text-xs text-white/40"},yT={class:"relative flex items-center justify-between"},ET={class:"text-xs text-white/30"},ST={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},MT={class:"space-y-2"},TT=["onClick"],wT={class:"flex items-center justify-between"},AT={class:"flex items-center gap-2"},CT={key:0,class:"flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white"},RT={class:"font-semibold text-white"},PT={class:"flex items-center gap-2"},IT=["disabled"],DT={class:"flex items-center justify-between"},LT={class:"flex items-center gap-2"},UT={key:0,class:"text-lg"},NT={key:1,class:"text-lg"},FT={class:"mx-4 w-full max-w-md rounded-2xl border border-white/15 bg-slate-900/95 p-6 shadow-2xl"},OT={class:"mb-4 text-sm text-white/50"},kT={class:"space-y-2"},BT={class:"text-2xl"},zT={class:"flex-1 font-semibold text-white"},HT={class:"flex h-8 w-8 items-center justify-center rounded-full bg-slate-700/50 text-xl blur-[3px]"},VT={class:"flex-1 font-semibold text-slate-400"},GT=gn({__name:"StartView",setup(t){const e=uu(),n=Pp(),i=Ip(),r="/backend-camp-game/";Yn(()=>{n.loadFromStorage(),i.loadFromStorage()});const s=ze(()=>!!n.name),o=K0,a=ze(()=>Math.min(i.currentChapter,o)),l=ze(()=>i.currentChapter>o);function c(){i.reset(),e.push({name:"chapter",params:{id:"1"}})}function u(){if(l.value){const P=Fd(i.endingType);e.push({name:"chapter",params:{id:String(P)}})}else e.push({name:"chapter",params:{id:String(i.currentChapter)}})}function d(){n.clear(),i.resetAll()}const f=it(!1),p=ze(()=>Object.values(du).filter(P=>P.id<=la).map(P=>{const R=i.quizScores[P.id],b=i.isChapterCompleted(P.id);return{id:P.id,title:P.title,completed:b,score:P.id<=3?b?100:null:R?R.percentage:null,hasScore:P.id<=3?b:R!=null}}));function g(){f.value=!0}function x(){f.value=!1}function m(P){i.setCurrentChapter(P),i.setNodeIndex(P,0),f.value=!1,e.push({name:"chapter",params:{id:String(P)}})}const h=ze(()=>Dp.every(P=>{const R=i.quizScores[P];return R&&R.total>0}));function w(){f.value=!1;const P=Fd(i.endingType);e.push({name:"chapter",params:{id:String(P)}})}function S(P){if(f.value&&P.key==="Escape"){x();return}P.key==="Enter"&&!s.value&&c()}Yn(()=>window.addEventListener("keydown",S)),Fi(()=>window.removeEventListener("keydown",S));const y=it(!1);function D(){y.value=!0}function L(){y.value=!1}return(P,R)=>(xe(),we("div",rT,[C("div",{class:"absolute inset-0 animate-bgSlowZoom bg-cover bg-center saturate-95",style:fr({backgroundImage:`url(${Pt(r)}images/scene/normal.png)`})},null,4),R[20]||(R[20]=C("div",{class:"absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_30%,transparent_20%,rgba(2,6,23,0.9)_60%)] md:bg-[radial-gradient(ellipse_120%_100%_at_75%_50%,transparent_30%,rgba(2,6,23,0.85)_70%)]"},null,-1)),R[21]||(R[21]=C("div",{class:"absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent md:from-slate-950/90 md:via-transparent md:to-slate-950/40"},null,-1)),C("div",sT,[C("img",{class:"pointer-events-none h-auto w-[85vw] max-w-[380px] object-contain object-bottom opacity-80 drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] motion-safe:animate-coachBreath md:absolute md:bottom-0 md:right-0 md:h-[85vh] md:max-h-[900px] md:w-auto md:max-w-none md:translate-x-[5%] md:opacity-100",src:`${Pt(r)}images/coach/normal.png`,alt:"教練"},null,8,oT)]),C("main",aT,[C("div",lT,[C("div",cT,[C("img",{src:`${Pt(r)}images/logo.png`,alt:"新人後端生存指南",class:"block w-[min(320px,80vw)] select-none drop-shadow-[0_18px_60px_rgba(255,255,255,0.14)] md:w-[min(420px,75vw)]",draggable:"false"},null,8,uT),Tt(iT,{class:"pointer-events-none absolute inset-0 z-10",sparkleCount:50,padding:40}),R[0]||(R[0]=C("div",{class:"pointer-events-none absolute -inset-6 -z-10 rounded-[32px] bg-[radial-gradient(circle_at_40%_40%,rgba(251,191,36,0.15),transparent_60%),radial-gradient(circle_at_60%_60%,rgba(251,191,36,0.1),transparent_65%)] blur-2xl md:-inset-8"},null,-1))]),C("nav",dT,[C("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/20 bg-slate-900/80 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-amber-400/40 hover:bg-slate-800/80 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-white/20 disabled:hover:bg-slate-900/80 md:px-5 md:py-4",type:"button",disabled:s.value,onClick:c},[R[2]||(R[2]=C("span",{class:"absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 to-amber-600"},null,-1)),R[3]||(R[3]=C("span",{class:"absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100 group-disabled:opacity-0"},null,-1)),C("span",hT,[R[1]||(R[1]=C("span",{class:"text-base md:text-lg"},"開始遊戲",-1)),s.value?(xe(),we("span",pT,"有進度")):(xe(),we("span",mT,"Enter"))])],8,fT),C("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/15 bg-slate-900/60 px-4 py-3.5 text-left font-bold text-white backdrop-blur-sm transition-all duration-200 hover:border-white/30 hover:bg-slate-800/60 active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-white/30 disabled:cursor-not-allowed disabled:opacity-40 md:px-5 md:py-4",type:"button",disabled:!s.value,onClick:u},[R[5]||(R[5]=C("span",{class:"absolute left-0 top-0 h-full w-1 bg-white/30"},null,-1)),C("span",xT,[C("span",_T,[R[4]||(R[4]=ur(" 繼續遊戲 ",-1)),s.value?(xe(),we("span",vT,Fe(Pt(n).name),1)):st("",!0)]),s.value?(xe(),we("span",bT,Fe(l.value?"進入結局":`Day ${a.value}`),1)):st("",!0)])],8,gT),C("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-sky-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-sky-400/40 md:px-5",type:"button",onClick:g},[...R[6]||(R[6]=[C("span",{class:"absolute left-0 top-0 h-full w-1 bg-sky-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),C("span",{class:"relative flex items-center justify-between"},[C("span",{class:"text-sm md:text-base"},"章節選擇"),C("span",{class:"text-xs text-white/30"},"跳關")],-1)])]),C("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-amber-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-amber-400/40 md:px-5",type:"button",onClick:D},[R[8]||(R[8]=C("span",{class:"absolute left-0 top-0 h-full w-1 bg-amber-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1)),C("span",yT,[R[7]||(R[7]=C("span",{class:"text-sm md:text-base"},"進度成就",-1)),C("span",ET,Fe(Pt(i).unlockedCount)+"/"+Fe(Pt(i).totalAchievements),1)])]),C("button",{class:"group relative w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-left font-medium text-white/70 backdrop-blur-sm transition-all duration-200 hover:border-rose-400/30 hover:bg-slate-800/50 hover:text-white active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-rose-400/40 md:px-5",type:"button",onClick:d},[...R[9]||(R[9]=[C("span",{class:"absolute left-0 top-0 h-full w-1 bg-rose-500/50 opacity-0 transition-opacity group-hover:opacity-100"},null,-1),C("span",{class:"relative flex items-center justify-between"},[C("span",{class:"text-sm md:text-base"},"刪除存檔"),C("span",{class:"hidden text-xs text-white/30 sm:inline-block"},"⌫")],-1)])])]),R[10]||(R[10]=C("p",{class:"mt-6 cursor-default select-none text-center text-xs text-white/30 md:mt-8 md:text-left"}," v1.0 · 2025 後端新手生存指南 ",-1))])]),(xe(),Yt(Fu,{to:"body"},[Tt(Bl,{name:"fade"},{default:ea(()=>[f.value?(xe(),we("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:gd(x,["self"])},[C("div",ST,[C("div",{class:"mb-4 flex items-center justify-between"},[R[12]||(R[12]=C("h2",{class:"text-lg font-bold text-white"},"章節選擇",-1)),C("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:x},[...R[11]||(R[11]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[C("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),R[14]||(R[14]=C("p",{class:"mb-4 text-sm text-white/50"},"選擇要跳轉的章節，進度將從該章節開始重新計算。",-1)),C("div",MT,[(xe(!0),we(ht,null,pr(p.value,b=>(xe(),we("button",{key:b.id,class:Ot(["group w-full rounded-xl border px-4 py-3 text-left transition-all hover:border-amber-400/40 hover:bg-slate-800",b.completed?"border-emerald-500/30 bg-emerald-900/20":"border-white/10 bg-slate-800/50"]),onClick:E=>m(b.id)},[C("div",wT,[C("span",AT,[b.completed?(xe(),we("span",CT,[...R[13]||(R[13]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[C("polyline",{points:"20 6 9 17 4 12"})],-1)])])):st("",!0),C("span",RT,Fe(b.title),1)]),C("span",PT,[b.hasScore?(xe(),we("span",{key:0,class:Ot(["h-2.5 w-2.5 rounded-full",b.score===100?"bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.6)]":b.score>=85?"bg-emerald-400":"bg-rose-400"])},null,2)):st("",!0),C("span",{class:Ot(["text-xs",b.completed?"text-emerald-400":"text-white/40"])},Fe(b.completed?"已通關":`Day ${b.id}`),3)])])],10,TT))),128)),C("button",{class:Ot(["group w-full rounded-xl border px-4 py-3 text-left transition-all",h.value?"border-amber-500/30 bg-amber-900/20 hover:border-amber-400/50 hover:bg-amber-900/40":"cursor-not-allowed border-white/5 bg-slate-800/30 opacity-50"]),disabled:!h.value,onClick:w},[C("div",DT,[C("span",LT,[h.value?(xe(),we("span",UT,"🎬")):(xe(),we("span",NT,"🔒")),C("span",{class:Ot(["font-semibold",h.value?"text-amber-400":"text-white/40"])},"結局",2)]),C("span",{class:Ot(["text-xs",h.value?"text-amber-400":"text-white/30"])},Fe(h.value?"已解鎖":"通關 Day 10 解鎖"),3)])],10,IT)]),R[15]||(R[15]=C("p",{class:"mt-4 text-center text-xs text-white/30"},"按 ESC 關閉",-1))])])):st("",!0)]),_:1})])),(xe(),Yt(Fu,{to:"body"},[Tt(Bl,{name:"fade"},{default:ea(()=>[y.value?(xe(),we("div",{key:0,class:"fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm",onClick:gd(L,["self"])},[C("div",FT,[C("div",{class:"mb-4 flex items-center justify-between"},[R[17]||(R[17]=C("h2",{class:"text-lg font-bold text-white"},"進度成就",-1)),C("button",{class:"rounded-full p-1 text-white/50 hover:bg-white/10 hover:text-white",onClick:L},[...R[16]||(R[16]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[C("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),C("p",OT," 已解鎖 "+Fe(Pt(i).unlockedCount)+" / "+Fe(Pt(i).totalAchievements)+" 個成就 ",1),C("div",kT,[(xe(!0),we(ht,null,pr(Pt(i).allAchievements,b=>(xe(),we("div",{key:b.id,class:Ot(["flex items-center gap-4 rounded-xl border px-4 py-3",b.unlocked?"border-amber-500/30 bg-amber-900/20":"border-white/5 bg-slate-900/50"])},[b.unlocked?(xe(),we(ht,{key:0},[C("span",BT,Fe(b.icon),1),C("p",zT,Fe(b.description),1),R[18]||(R[18]=C("span",{class:"flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 text-white"},[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3"},[C("polyline",{points:"20 6 9 17 4 12"})])],-1))],64)):(xe(),we(ht,{key:1},[C("span",HT,Fe(b.icon),1),C("p",VT,Fe(b.description),1),R[19]||(R[19]=C("span",{class:"flex h-6 w-6 items-center justify-center rounded-full border border-slate-700 text-slate-600"},[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[C("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),C("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})])],-1))],64))],2))),128))])])])):st("",!0)]),_:1})]))]))}}),WT=au(GT,[["__scopeId","data-v-ea26d0a2"]]),Oc="HEX_",kc="_2025",pm="-";function XT(t){return t.match(/.{1,4}/g)?.join(pm)||t}function qT(t){return t.split(pm).join("")}function mm(t){return t.split("").reverse().join("")}function $T(t){const e=new TextEncoder().encode(t),n=String.fromCharCode(...e);return btoa(n)}function YT(t){try{const e=atob(t),n=Uint8Array.from(e,i=>i.charCodeAt(0));return new TextDecoder().decode(n)}catch{return""}}function jT(t){const e=Oc+t+kc,n=mm(e),i=$T(n);return XT(i)}function KT(t){try{const e=qT(t),n=YT(e),i=mm(n);return i.startsWith(Oc)&&i.endsWith(kc)?i.slice(Oc.length,-kc.length):""}catch{return""}}function ZT(t,e){return KT(t)===e}function kf(t){return jT(t)}const JT={class:"absolute inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},QT={class:"w-[min(520px,calc(100vw-32px))] rounded-2xl border border-slate-900/15 bg-white/95 p-4 shadow-[0_18px_60px_rgba(0,0,0,0.28)]"},ew={class:"font-extrabold text-slate-900"},tw=["placeholder"],nw={class:"mt-3 flex justify-end gap-2.5"},iw=["disabled"],Bf=gn({__name:"NameInputModal",props:{title:{},placeholder:{},initialValue:{}},emits:["submit","cancel"],setup(t,{emit:e}){const n=t,i=e,r=it(n.initialValue??"");vg(()=>{n.initialValue!=null&&!r.value&&(r.value=n.initialValue)});const s=ze(()=>r.value.trim().length>0);function o(){s.value&&i("submit",r.value.trim())}return(a,l)=>(xe(),we("div",JT,[C("div",QT,[C("div",ew,Fe(t.title),1),Jc(C("input",{class:"mt-3 w-full rounded-xl border border-slate-900/20 px-3 py-3 text-base outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/20",type:"text",placeholder:t.placeholder??"輸入名字...","onUpdate:modelValue":l[0]||(l[0]=c=>r.value=c),onKeydown:fp(o,["enter"])},null,40,tw),[[dp,r.value]]),C("div",nw,[C("button",{class:"rounded-xl border border-slate-900/15 bg-white/80 px-3 py-2 font-bold text-slate-900 hover:bg-white active:scale-[0.99]",type:"button",onClick:l[1]||(l[1]=c=>a.$emit("cancel"))}," 取消 "),C("button",{class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60",type:"button",disabled:!s.value,onClick:o}," 確定 ",8,iw)])])]))}}),rw={class:"absolute inset-0 z-60 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},sw={class:"grid h-[min(720px,calc(100vh-24px))] w-[min(1120px,calc(100vw-24px))] grid-rows-[auto_1fr_auto] overflow-hidden rounded-2xl border border-slate-900/15 bg-amber-50"},ow={class:"flex justify-between gap-4 border-b border-slate-900/10 bg-white/60 px-4 py-3.5"},aw={class:"font-black text-slate-900"},lw={class:"mt-0.5 font-extrabold text-slate-700"},cw={key:0,class:"mt-1 text-xs font-semibold text-slate-600"},uw={class:"flex items-center gap-2.5"},dw={class:"font-extrabold text-slate-700"},fw=["disabled"],hw={class:"grid grid-cols-1 gap-3.5 overflow-y-auto p-3.5 md:grid-cols-[1.1fr_1fr]"},pw={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},mw={class:"mt-2.5 rounded-2xl border border-slate-900/10 bg-white/85 p-3"},gw={class:"flex justify-between gap-2.5"},xw={class:"font-mono text-sm font-black text-slate-900"},_w={class:"text-sm font-extrabold text-slate-500"},vw={class:"mt-1.5 font-black text-slate-700"},bw={class:"mt-3"},yw={class:"grid gap-2"},Ew={class:"font-mono text-xs font-extrabold text-slate-700"},Sw={class:"mt-2.5 text-xl font-black text-slate-900"},Mw={class:"mt-2.5 font-semibold leading-7 text-slate-700"},Tw={class:"h-full rounded-2xl border border-slate-900/10 bg-white/70 p-3.5"},ww={class:"font-mono text-sm font-black text-slate-900/75"},Aw={class:"mt-2.5 h-[calc(100%-34px)] overflow-auto rounded-2xl bg-slate-900/95 p-3 text-[13px] leading-6 text-slate-200"},Cw={class:"grid grid-cols-[1fr_auto_1fr] items-center gap-3 border-t border-slate-900/10 bg-white/60 px-3.5 py-3"},Rw=["disabled"],Pw={class:"flex justify-center gap-2"},Iw=["disabled"],Dw=gn({__name:"SlidesModal",props:{title:{},slides:{},mustFinish:{type:Boolean}},emits:["close"],setup(t,{emit:e}){const n=t,i=e,r=it(0),s=ze(()=>n.slides[r.value]),o=ze(()=>r.value>=n.slides.length-1);function a(){r.value=Math.max(0,r.value-1)}function l(){r.value=Math.min(n.slides.length-1,r.value+1)}function c(){n.mustFinish&&!o.value||i("close")}return(u,d)=>(xe(),we("div",rw,[C("div",sw,[C("header",ow,[C("div",null,[C("div",aw,Fe(t.title),1),C("div",lw,Fe(s.value.title),1),s.value.subtitle?(xe(),we("div",cw,Fe(s.value.subtitle),1)):st("",!0)]),C("div",uw,[C("div",dw,"步驟 "+Fe(r.value+1)+"/"+Fe(t.slides.length),1),C("button",{class:"rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2 font-extrabold text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:t.mustFinish&&!o.value,onClick:c}," 關閉 ",8,fw)])]),C("div",hw,[C("section",null,[C("div",pw,[d[2]||(d[2]=C("div",{class:"inline-block rounded-full bg-amber-300/60 px-3 py-1 text-xs font-black text-slate-900"}," 互動式簡報 ",-1)),s.value.commit?(xe(),we(ht,{key:0},[C("div",mw,[C("div",gw,[C("div",xw,Fe(s.value.commit.sha),1),C("div",_w,Fe(s.value.commit.when),1)]),C("div",vw,Fe(s.value.commit.message),1)]),C("div",bw,[d[0]||(d[0]=C("div",{class:"mb-2 font-black text-slate-900"},"本次變更檔案",-1)),C("div",yw,[(xe(!0),we(ht,null,pr(s.value.commit.files,f=>(xe(),we("div",{key:f.path,class:"flex items-center gap-2.5 rounded-xl border border-slate-900/10 bg-white/80 px-3 py-2.5"},[C("span",{class:Ot(["grid h-6 w-7 place-items-center rounded-lg border border-slate-900/10 text-xs font-black",f.change==="A"?"bg-emerald-500/15 text-emerald-800":f.change==="M"?"bg-blue-500/15 text-blue-700":"bg-rose-500/15 text-rose-800"])},Fe(f.change),3),C("span",Ew,Fe(f.path),1)]))),128))])])],64)):(xe(),we(ht,{key:1},[C("div",Sw,Fe(s.value.title),1),C("div",Mw,Fe(s.value.body),1),d[1]||(d[1]=ux('<div class="mt-3 flex flex-wrap gap-2"><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">版本控制</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">Commit 更新點</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">看懂改動</span><span class="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-black text-slate-900">回到安全點</span></div>',1))],64))])]),C("section",null,[C("div",Tw,[C("div",ww,Fe(s.value.commit?"changes.diff":"notes.txt"),1),C("pre",Aw,[C("code",null,Fe(s.value.commit?s.value.commit.diffPreview:s.value.body??""),1)])])])]),C("footer",Cw,[C("button",{class:"justify-self-start rounded-full border border-slate-900/10 bg-white/80 px-4 py-2 font-black text-slate-900 hover:bg-white disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:r.value===0,onClick:a}," 上一部 ",8,Rw),C("div",Pw,[(xe(!0),we(ht,null,pr(t.slides.length,f=>(xe(),we("span",{key:f,class:Ot(["h-2 w-2 rounded-full bg-slate-900/20",f-1===r.value?"bg-amber-500":""])},null,2))),128))]),C("button",{class:"justify-self-end rounded-full border border-amber-500/25 bg-amber-300/80 px-4 py-2 font-black text-slate-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:o.value,onClick:l}," 下一部 ",8,Iw)])])]))}}),Lw={class:"fixed inset-0 z-50 grid place-items-center bg-slate-950/70",role:"dialog","aria-modal":"true"},Uw={class:"flex max-h-[90vh] w-[min(760px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-slate-900/15 bg-white/95"},Nw={class:"flex items-center justify-between gap-2.5 border-b border-slate-900/10 px-4 py-3.5"},Fw={class:"font-black text-slate-900"},Ow={class:"text-sm font-extrabold text-slate-500"},kw={class:"flex-1 overflow-y-auto px-4 py-4"},Bw={class:"text-lg font-black text-slate-900"},zw={class:"mt-3 grid gap-2.5"},Hw=["value","disabled"],Vw={class:"font-extrabold text-slate-700"},Gw={class:"font-black text-slate-900"},Ww={class:"mt-1.5 font-bold leading-7 text-slate-700"},Xw={class:"flex shrink-0 justify-between border-t border-slate-900/10 px-4 pb-4 pt-3"},qw={class:"flex gap-2.5"},$w=["disabled"],Yw=gn({__name:"QuizModal",props:{title:{},questions:{},chapterId:{}},emits:["done","cancel"],setup(t,{emit:e}){const n=t,i=e,r=it(0),s=it(null),o=it(!1),a=it(0),l=it(0),c=it(!1),u=ze(()=>n.questions[r.value]),d=ze(()=>n.questions.length),f=ze(()=>r.value>=n.questions.length-1),p=ze(()=>o.value&&s.value===u.value.correctOptionId);function g(){if(!s.value||o.value)return;o.value=!0;const h=s.value===u.value.correctOptionId;!c.value&&h&&(l.value+=1),c.value=!0,h&&(a.value+=1)}function x(){s.value=null,o.value=!1}function m(){if(o.value){if(f.value){i("done",{correctCount:a.value,total:d.value,firstAttemptCorrect:l.value});return}r.value+=1,s.value=null,o.value=!1,c.value=!1}}return(h,w)=>(xe(),we("div",Lw,[C("div",Uw,[C("header",Nw,[C("div",Fw,Fe(t.title),1),C("div",Ow,"第 "+Fe(r.value+1)+"/"+Fe(d.value)+" 題",1)]),C("div",kw,[C("div",Bw,Fe(u.value.prompt),1),C("div",zw,[(xe(!0),we(ht,null,pr(u.value.options,S=>(xe(),we("label",{key:S.id,class:Ot(["flex cursor-pointer items-center gap-2.5 rounded-2xl border border-slate-900/10 bg-white/80 px-3 py-3",o.value?"cursor-default opacity-90":"hover:bg-white"])},[Jc(C("input",{type:"radio",name:"quiz",value:S.id,"onUpdate:modelValue":w[0]||(w[0]=y=>s.value=y),disabled:o.value},null,8,Hw),[[jx,s.value]]),C("span",Vw,Fe(S.label),1)],2))),128))]),o.value?(xe(),we("div",{key:0,class:Ot(["mt-3 rounded-2xl border px-3 py-3",p.value?"border-emerald-500/25 bg-emerald-500/10":"border-amber-500/25 bg-amber-500/10"])},[C("div",Gw,Fe(p.value?"答對了":"差一點"),1),C("div",Ww,Fe(u.value.explanation),1)],2)):st("",!0)]),C("footer",Xw,[C("button",{class:"rounded-xl border border-slate-300 bg-white px-3 py-2 font-bold text-slate-600 hover:bg-slate-50 active:scale-[0.99]",type:"button",onClick:w[1]||(w[1]=S=>i("cancel"))}," 取消測驗 "),C("div",qw,[o.value?p.value?(xe(),we("button",{key:1,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:m},Fe(f.value?"完成":"下一題"),1)):(xe(),we("button",{key:2,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99]",type:"button",onClick:x}," 重新作答 ")):(xe(),we("button",{key:0,class:"rounded-xl border border-amber-500/25 bg-amber-300/80 px-3 py-2 font-black text-slate-900 hover:bg-amber-300 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-55",type:"button",disabled:!s.value,onClick:g}," 提交 ",8,$w))])])])]))}}),jw={class:"fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90",role:"dialog","aria-modal":"true"},Kw={class:"mb-4 rounded-full border border-amber-400/30 bg-amber-400/20 px-4 py-1.5 text-lg font-bold text-amber-300"},Zw={class:"mb-6 text-xl font-bold text-white/90"},Jw={class:"text-amber-400"},Qw={key:0,class:"mb-6 rounded-xl border-2 border-amber-500/50 bg-gradient-to-r from-amber-500/20 to-yellow-500/20 px-6 py-4"},eA={class:"flex items-center gap-3"},tA={class:"flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/30 text-2xl"},nA={class:"text-left"},iA={class:"text-sm font-bold text-amber-400"},rA={class:"text-xs text-amber-300/80"},sA={key:0,class:"mt-3 rounded-lg bg-slate-900/50 p-3 text-center"},oA={class:"mt-1 font-mono text-lg font-bold tracking-wider text-amber-400"},aA=gn({__name:"CelebrationModal",props:{playerName:{},chapterTitle:{},reward:{}},emits:["close"],setup(t,{emit:e}){const n=e,i=it(null),r=it(null),s=it(!1);let o=null;function a(d){const p=document.createElement("canvas");p.width=64,p.height=64;const g=p.getContext("2d"),x=g.createRadialGradient(64/2,64/2,0,64/2,64/2,64/2);return x.addColorStop(0,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 1)`),x.addColorStop(.3,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 0.8)`),x.addColorStop(.6,`rgba(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)}, 0.3)`),x.addColorStop(1,"rgba(0, 0, 0, 0)"),g.fillStyle=x,g.fillRect(0,0,64,64),new jr(p)}function l(){const f=document.createElement("canvas");f.width=64,f.height=64;const p=f.getContext("2d");p.fillStyle="rgba(0, 0, 0, 0)",p.fillRect(0,0,64,64),p.fillStyle="#FFD700",p.beginPath();const g=64/2,x=64/2,m=4,h=64/2-2,w=64/6;for(let S=0;S<m*2;S++){const y=S%2===0?h:w,D=S*Math.PI/m-Math.PI/2,L=g+Math.cos(D)*y,P=x+Math.sin(D)*y;S===0?p.moveTo(L,P):p.lineTo(L,P)}return p.closePath(),p.fill(),p.shadowColor="#FFD700",p.shadowBlur=10,p.fill(),new jr(f)}function c(d){const f=document.createElement("canvas");f.width=16,f.height=32;const p=f.getContext("2d");return p.fillStyle=`rgb(${Math.floor(d.r*255)}, ${Math.floor(d.g*255)}, ${Math.floor(d.b*255)})`,p.fillRect(0,0,16,32),new jr(f)}function u(){if(!r.value||!i.value)return;const d=new hm({canvas:r.value,alpha:!0,antialias:!0});d.setClearColor(0,0),d.setPixelRatio(Math.min(window.devicePixelRatio||1,2));const f=i.value.clientWidth,p=i.value.clientHeight;d.setSize(f,p,!1);const g=new tm,x=new En(60,f/p,.1,1e3);x.position.z=500;const m=[new Ze(16739179),new Ze(16767293),new Ze(7064439),new Ze(5084927),new Ze(13218303),new Ze(16752453),new Ze(16196997)],h=[];function w(z,U){const ne=m[Math.floor(Math.random()*m.length)],fe=80+Math.floor(Math.random()*60),Ee=new Fn,Me=new Float32Array(fe*3),Qe=new Float32Array(fe),We=[];for(let oe=0;oe<fe;oe++){Me[oe*3]=z,Me[oe*3+1]=U,Me[oe*3+2]=0,Qe[oe]=8+Math.random()*12;const se=Math.random()*Math.PI*2,de=Math.acos(2*Math.random()-1),Pe=3+Math.random()*5;We.push(new J(Math.sin(de)*Math.cos(se)*Pe,Math.sin(de)*Math.sin(se)*Pe,Math.cos(de)*Pe*.3))}Ee.setAttribute("position",new on(Me,3)),Ee.setAttribute("size",new on(Qe,1));const ie=new Uc({map:a(ne),size:20,transparent:!0,blending:zs,depthWrite:!1,vertexColors:!1}),_e=new df(Ee,ie);g.add(_e);const F=50+Math.random()*150;h.push({particles:_e,velocities:We,life:0,maxLife:120+Math.random()*60,phase:"rising",riseVelocity:new J(0,8+Math.random()*4,0),targetY:F})}const S=30,y=new Fn,D=new Float32Array(S*3),L=new Float32Array(S),P=[];for(let z=0;z<S;z++){const U=(Math.random()-.5)*f*.9,ne=(Math.random()-.5)*p*.7;D[z*3]=U,D[z*3+1]=ne,D[z*3+2]=-50,L[z]=15+Math.random()*25,P.push({baseX:U,baseY:ne,floatSpeed:.5+Math.random()*1,floatRadius:5+Math.random()*15,rotateSpeed:.02+Math.random()*.03,twinkleSpeed:2+Math.random()*3,twinklePhase:Math.random()*Math.PI*2})}y.setAttribute("position",new on(D,3)),y.setAttribute("size",new on(L,1));const R=new Uc({map:l(),size:30,transparent:!0,blending:zs,depthWrite:!1}),b=new df(y,R);g.add(b);const E=60,I=[],B=[new Ze(16739179),new Ze(16767293),new Ze(7064439),new Ze(5084927),new Ze(16196997),new Ze(16752453)];for(let z=0;z<E;z++){const U=B[Math.floor(Math.random()*B.length)],ne=new to(8+Math.random()*8,16+Math.random()*16),fe=new bu({map:c(U),side:Gn,transparent:!0,opacity:.9}),Ee=new qn(ne,fe);Ee.position.set((Math.random()-.5)*f,p/2+Math.random()*200,(Math.random()-.5)*100),Ee.rotation.set(Math.random()*Math.PI,Math.random()*Math.PI,Math.random()*Math.PI),g.add(Ee),I.push({mesh:Ee,velocity:new J((Math.random()-.5)*2,-2-Math.random()*3,(Math.random()-.5)*1),rotationSpeed:new J((Math.random()-.5)*.1,(Math.random()-.5)*.1,(Math.random()-.5)*.1),swayPhase:Math.random()*Math.PI*2,swaySpeed:2+Math.random()*2})}let q=0,H;setTimeout(()=>w(-100,-p/2-50),100),setTimeout(()=>w(100,-p/2-50),400),setTimeout(()=>w(0,-p/2-50),700),setTimeout(()=>{s.value=!0},800);function j(){H=requestAnimationFrame(j),q++;for(let U=h.length-1;U>=0;U--){const ne=h[U],fe=ne.particles.geometry.attributes.position.array,Ee=fe.length/3;if(ne.phase==="rising"){for(let Me=0;Me<Ee;Me++)fe[Me*3+1]+=ne.riseVelocity.y;fe[1]>=ne.targetY&&(ne.phase="exploding")}else{ne.life++;const Me=ne.life/ne.maxLife;for(let We=0;We<Ee;We++){const ie=ne.velocities[We];fe[We*3]+=ie.x*(1-Me*.5),fe[We*3+1]+=ie.y*(1-Me*.5)-.15,fe[We*3+2]+=ie.z*(1-Me*.5)}const Qe=ne.particles.material;Qe.opacity=1-Me,ne.life>=ne.maxLife&&(g.remove(ne.particles),ne.particles.geometry.dispose(),ne.particles.material.dispose(),h.splice(U,1))}ne.particles.geometry.attributes.position.needsUpdate=!0}if(q%90===0&&h.length<5){const U=(Math.random()-.5)*f*.6;w(U,-p/2-50)}const z=b.geometry.attributes.position.array;for(let U=0;U<S;U++){const ne=P[U],fe=q*.02;z[U*3]=ne.baseX+Math.sin(fe*ne.floatSpeed)*ne.floatRadius,z[U*3+1]=ne.baseY+Math.cos(fe*ne.floatSpeed*.7)*ne.floatRadius*.5;const Ee=Math.sin(fe*ne.twinkleSpeed+ne.twinklePhase)*.5+.5;b.geometry.attributes.size.array[U]=15+Ee*25}b.geometry.attributes.position.needsUpdate=!0,b.geometry.attributes.size.needsUpdate=!0,b.rotation.z+=5e-4;for(const U of I)U.mesh.position.add(U.velocity),U.mesh.rotation.x+=U.rotationSpeed.x,U.mesh.rotation.y+=U.rotationSpeed.y,U.mesh.rotation.z+=U.rotationSpeed.z,U.swayPhase+=.05,U.mesh.position.x+=Math.sin(U.swayPhase*U.swaySpeed)*.5,U.mesh.position.y<-p/2-50&&(U.mesh.position.y=p/2+50,U.mesh.position.x=(Math.random()-.5)*f);d.render(g,x)}j();const $=()=>{if(!i.value)return;const z=i.value.clientWidth,U=i.value.clientHeight;d.setSize(z,U,!1),x.aspect=z/U,x.updateProjectionMatrix()};window.addEventListener("resize",$),o=()=>{cancelAnimationFrame(H),window.removeEventListener("resize",$);for(const z of h)g.remove(z.particles),z.particles.geometry.dispose(),z.particles.material.dispose();g.remove(b),y.dispose(),R.dispose();for(const z of I)g.remove(z.mesh),z.mesh.geometry.dispose(),z.mesh.material.dispose();d.dispose()}}return Yn(()=>{u()}),Fi(()=>{o?.(),o=null}),(d,f)=>(xe(),we("div",jw,[C("div",{ref_key:"containerEl",ref:i,class:"absolute inset-0"},[C("canvas",{ref_key:"canvasEl",ref:r,class:"h-full w-full"},null,512)],512),C("div",{class:Ot(["relative z-10 flex flex-col items-center px-6 text-center transition-all duration-700",s.value?"translate-y-0 opacity-100":"translate-y-8 opacity-0"])},[f[3]||(f[3]=C("div",{class:"mb-6 flex h-28 w-28 items-center justify-center rounded-full border-4 border-amber-400 bg-gradient-to-br from-amber-400 to-amber-600 shadow-[0_0_60px_rgba(251,191,36,0.5)]"},[C("svg",{class:"h-14 w-14 text-white",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24"},[C("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"3",d:"M5 13l4 4L19 7"})])],-1)),f[4]||(f[4]=C("h2",{class:"mb-2 text-3xl font-black text-white drop-shadow-[0_2px_10px_rgba(251,191,36,0.5)] md:text-4xl"}," 恭喜完成！ ",-1)),C("div",Kw,Fe(t.chapterTitle),1),C("p",Zw,[C("span",Jw,Fe(t.playerName),1),f[1]||(f[1]=ur("，你做到了！ ",-1))]),t.reward?(xe(),we("div",Qw,[C("div",eA,[C("div",tA,Fe(t.reward.icon),1),C("div",nA,[C("div",iA,Fe(t.reward.title),1),C("div",rA,Fe(t.reward.description),1)])]),t.reward.code?(xe(),we("div",sA,[f[2]||(f[2]=C("div",{class:"text-xs text-amber-300/70"},"記住這組密碼，之後會用到：",-1)),C("div",oA,Fe(t.reward.code),1)])):st("",!0)])):st("",!0),C("button",{class:"rounded-xl border border-amber-400/40 bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3 text-lg font-black text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-400 hover:to-amber-500 hover:shadow-amber-500/50 active:scale-[0.98]",type:"button",onClick:f[0]||(f[0]=p=>n("close"))}," 繼續前進 ")],2)]))}}),lA="modulepreload",cA=function(t){return"/backend-camp-game/"+t},zf={},Nt=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){let l=function(c){return Promise.all(c.map(u=>Promise.resolve(u).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=o?.nonce||o?.getAttribute("nonce");r=l(n.map(c=>{if(c=cA(c),c in zf)return;zf[c]=!0;const u=c.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":lA,u||(f.as="script"),f.crossOrigin="",f.href=c,a&&f.setAttribute("nonce",a),document.head.appendChild(f),u)return new Promise((p,g)=>{f.addEventListener("load",p),f.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${c}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})},uA={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},dA={key:0,class:"relative h-full w-full overflow-hidden bg-black"},fA={key:1,class:"relative flex h-[95vh] w-[95vw] max-w-7xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-100 shadow-2xl"},hA={class:"flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4"},pA={class:"text-lg font-bold text-slate-800"},mA={class:"flex-1 overflow-y-auto"},gA={key:1,class:"flex h-full items-center justify-center text-slate-500"},xA=768,gm=gn({__name:"InteractiveSlideModal",props:{slideId:{},title:{},isMusicPlaying:{type:Boolean,default:!1}},emits:["close","sqlPracticeComplete","toggleMusic","switchToEndingMusic"],setup(t,{emit:e}){const n=t,i=e,r=it(!1);function s(){r.value=window.innerWidth<xA}Yn(()=>{s(),window.addEventListener("resize",s)}),Fi(()=>{window.removeEventListener("resize",s)});const o={"git-intro":Lt(()=>Nt(()=>import("./GitIntroSlide-DrNL9Bg5.js"),__vite__mapDeps([0,1,2]))),"docker-intro":Lt(()=>Nt(()=>import("./DockerIntroSlide-h-jGbRX2.js"),__vite__mapDeps([3,1,4]))),"architecture-intro":Lt(()=>Nt(()=>import("./ArchitectureIntroSlide-B3HOzpf7.js"),__vite__mapDeps([5,1,6]))),"static-dynamic":Lt(()=>Nt(()=>import("./StaticDynamicSlide-C8xyL1_O.js"),__vite__mapDeps([7,1,8]))),"coach-backend":Lt(()=>Nt(()=>import("./CoachBackendSlide-Bkixb7Av.js"),__vite__mapDeps([9,1,10]))),"url-request":Lt(()=>Nt(()=>import("./UrlRequestSlide-TysiDRrM.js"),__vite__mapDeps([11,1,12]))),"network-request":Lt(()=>Nt(()=>import("./NetworkRequestSlide-DF-aAShl.js"),__vite__mapDeps([13,1,14]))),"api-intro":Lt(()=>Nt(()=>import("./ApiIntroSlide-DIECRfLA.js"),__vite__mapDeps([15,1,16]))),"api-demo":Lt(()=>Nt(()=>import("./ApiDemoSlide-C-ksq9KX.js"),__vite__mapDeps([17,18]))),"drag-quiz":Lt(()=>Nt(()=>import("./DragQuizSlide-CkOtESvb.js"),__vite__mapDeps([19,20]))),"drag-sort":Lt(()=>Nt(()=>import("./DragSortSlide-DPfOa03j.js"),__vite__mapDeps([21,22]))),"data-flow":Lt(()=>Nt(()=>import("./DataFlowSlide-BwJt8Pa4.js"),__vite__mapDeps([23,24]))),"third-party":Lt(()=>Nt(()=>import("./ThirdPartySlide-CP40qKjW.js"),__vite__mapDeps([25,26]))),"database-intro":Lt(()=>Nt(()=>import("./DatabaseIntroSlide-BfCP5rfw.js"),__vite__mapDeps([27,1,28]))),"table-design":Lt(()=>Nt(()=>import("./TableDesignSlide-BlyjpDhV.js"),__vite__mapDeps([29,1]))),"livefit-database":Lt(()=>Nt(()=>import("./LivefitDatabaseSlide-CklnzPLi.js"),__vite__mapDeps([30,1]))),"database-access":Lt(()=>Nt(()=>import("./DatabaseAccessSlide-Vmlzr4RI.js"),__vite__mapDeps([31,1,32]))),"sql-practice":Lt(()=>Nt(()=>import("./SqlPracticeSlide-DhlZZGp9.js"),__vite__mapDeps([33,34]))),"sql-basics":Lt(()=>Nt(()=>import("./SqlBasicsSlide-GJhpASmT.js"),__vite__mapDeps([35,1,36]))),"video-message":Lt(()=>Nt(()=>import("./VideoMessageSlide-CHKdTg1R.js"),__vite__mapDeps([37,38])))},a=ze(()=>o[n.slideId]||null),l=ze(()=>["video-message"].includes(n.slideId));function c(u){n.slideId==="sql-practice"&&u&&i("sqlPracticeComplete",u),i("close")}return(u,d)=>(xe(),we("div",uA,[l.value?(xe(),we("div",dA,[a.value?(xe(),Yt(zu(a.value),{key:0,isMobile:r.value,isMusicPlaying:t.isMusicPlaying,onComplete:c,onToggleMusic:d[0]||(d[0]=f=>i("toggleMusic")),onSwitchToEndingMusic:d[1]||(d[1]=f=>i("switchToEndingMusic"))},null,40,["isMobile","isMusicPlaying"])):st("",!0)])):(xe(),we("div",fA,[C("header",hA,[C("h2",pA,Fe(t.title),1),C("button",{type:"button",class:"flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600",onClick:d[2]||(d[2]=f=>i("close"))},[...d[3]||(d[3]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2"},[C("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])])]),C("main",mA,[a.value?(xe(),Yt(zu(a.value),{key:0,isMobile:r.value,onComplete:c},null,40,["isMobile"])):(xe(),we("div",gA," 找不到簡報元件："+Fe(t.slideId),1))])]))]))}}),_A={class:"fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"},vA={class:"relative mx-4 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl md:flex-row"},bA={class:"hidden w-64 shrink-0 flex-col items-center justify-center border-r border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-6 md:flex"},yA=["src"],EA={class:"flex flex-1 flex-col"},SA={class:"border-b border-slate-700 bg-slate-800 px-6 py-4"},MA={class:"flex items-center gap-3"},TA=["src"],wA={class:"flex-1 overflow-y-auto p-6"},AA={class:"mb-6 rounded-xl border-2 border-amber-400/50 bg-gradient-to-br from-amber-900/30 to-orange-900/20 p-4"},CA={class:"text-lg font-medium leading-relaxed text-amber-50"},RA={key:0,class:"space-y-3"},PA=["onClick"],IA={class:"flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-slate-500 bg-slate-700 text-sm font-bold text-slate-300"},DA={class:"text-white"},LA={key:1,class:"space-y-4"},UA={class:"mb-2 flex items-center gap-2"},NA={key:0,class:"rounded-full bg-green-500/20 px-2 py-0.5 text-xs font-bold text-green-400"},FA={key:1,class:"rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-bold text-orange-400"},OA={class:"flex items-center gap-3"},kA={class:"text-white"},BA={class:"rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-900/20 to-orange-900/20 p-4"},zA={class:"leading-relaxed text-white"},HA={key:0,class:"border-t border-slate-700 bg-slate-800 px-6 py-4"},VA=gn({__name:"ChoiceModal",props:{prompt:{},options:{},coachExpression:{}},emits:["select"],setup(t,{emit:e}){const n=t,i=e,r=it(null),s=it(null),o=it(!1),a=ze(()=>o.value&&r.value?r.value.responseExpression||"normal":n.coachExpression||"normal"),l=ze(()=>`/backend-camp-game/images/coach/${a.value}.png`),c=ze(()=>r.value?.isCorrect===!0);function u(p,g){r.value=p,s.value=g,o.value=!0}function d(){r.value=null,s.value=null,o.value=!1}function f(){r.value&&c.value&&i("select",r.value)}return(p,g)=>(xe(),we("div",_A,[C("div",vA,[C("div",bA,[C("img",{src:l.value,alt:"海克絲",class:"h-auto max-h-[300px] w-full object-contain transition-all duration-300"},null,8,yA),g[0]||(g[0]=C("div",{class:"mt-4 text-center"},[C("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-3 py-1 text-sm font-black text-amber-100"}," 海克絲 ")],-1))]),C("div",EA,[C("header",SA,[C("div",MA,[C("img",{src:l.value,alt:"海克絲",class:"h-12 w-12 rounded-full border-2 border-amber-400/50 object-cover md:hidden"},null,8,TA),g[1]||(g[1]=C("div",null,[C("h2",{class:"text-lg font-bold text-white"},"海克絲的提問"),C("p",{class:"text-xs text-slate-400"},"選擇你認為正確的答案")],-1))])]),C("main",wA,[C("div",AA,[C("p",CA,Fe(t.prompt),1)]),o.value?(xe(),we("div",LA,[C("div",{class:Ot(["rounded-xl border-2 bg-slate-800 p-4",r.value?.isCorrect?"border-green-500":"border-orange-500"])},[C("div",UA,[g[2]||(g[2]=C("span",{class:"text-sm text-slate-400"},"你的回答",-1)),r.value?.isCorrect?(xe(),we("span",NA,"正確！")):(xe(),we("span",FA,"不太對喔"))]),C("div",OA,[C("span",{class:Ot(["flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold",r.value?.isCorrect?"border-green-500 bg-green-500/20 text-green-400":"border-orange-500 bg-orange-500/20 text-orange-400"])},Fe(s.value!==null?s.value+1:""),3),C("p",kA,Fe(r.value?.label),1)])],2),C("div",BA,[g[3]||(g[3]=C("div",{class:"mb-2 flex items-center gap-2"},[C("span",{class:"inline-flex items-center rounded-full border border-amber-300/35 bg-amber-300/20 px-2 py-0.5 text-xs font-black text-amber-100"},"海克絲")],-1)),C("p",zA,Fe(r.value?.response),1)])])):(xe(),we("div",RA,[(xe(!0),we(ht,null,pr(t.options,(x,m)=>(xe(),we("button",{key:x.id,class:"flex w-full items-center gap-3 rounded-xl border-2 border-slate-600 bg-slate-800 p-4 text-left transition-all hover:border-amber-400 hover:bg-slate-700",onClick:h=>u(x,m)},[C("span",IA,Fe(m+1),1),C("span",DA,Fe(x.label),1)],8,PA))),128))]))]),o.value?(xe(),we("footer",HA,[c.value?(xe(),we("button",{key:0,class:"w-full rounded-xl border border-amber-300/35 bg-amber-300/20 py-3 font-bold text-white transition-all hover:bg-amber-300/30 active:scale-[0.99]",onClick:f}," 繼續 ")):(xe(),we("button",{key:1,class:"w-full rounded-xl border border-orange-400/35 bg-orange-400/20 py-3 font-bold text-white transition-all hover:bg-orange-400/30 active:scale-[0.99]",onClick:d}," 再想想看 "))])):st("",!0)])])]))}}),GA={key:0,class:"flex min-h-screen min-h-[100dvh] flex-col bg-slate-950 pt-14"},WA={class:"pointer-events-none fixed inset-0 z-0"},XA={key:1,class:"absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_90%,rgba(2,6,23,0),rgba(2,6,23,0.7))]"},qA={key:3,class:"dark-vignette absolute inset-0"},$A={class:"fixed inset-x-0 top-0 z-20 grid grid-cols-[auto_1fr_auto] items-center gap-2.5 px-4 py-3"},YA={class:"text-center text-sm font-black text-white/90"},jA=["title"],KA={key:0,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},ZA={key:1,xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},JA={class:"relative z-10 flex flex-1 flex-col justify-end"},QA={key:0,class:"pointer-events-none fixed inset-x-0 z-0 flex items-end justify-center",style:{top:"56px",bottom:"160px"}},e1=["src"],t1={key:1,class:"relative z-10 mb-4 max-h-[45vh] flex-1 overflow-y-auto px-4 md:max-h-[55vh]"},n1={class:"flex min-h-full items-center justify-center py-4"},i1={class:"relative"},r1=["src"],s1={key:2,class:"flex flex-1 flex-col items-center justify-center px-4"},o1={key:0,class:"ending-bad-fade w-full max-w-md rounded-2xl border border-rose-500/30 bg-black/80 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden"},a1={class:"mb-4 flex flex-col items-center gap-2"},l1={class:"text-4xl"},c1={class:"mb-2 text-4xl font-bold text-rose-400 glitch-text"},u1={key:1,class:"ending-normal-fade w-full max-w-md rounded-2xl border border-sky-500/30 bg-slate-900/90 px-8 py-10 text-center backdrop-blur-md relative overflow-hidden"},d1={class:"mb-4 flex flex-col items-center gap-2"},f1={class:"text-5xl moon-float"},h1={class:"mb-2 text-4xl font-bold text-sky-400"},p1={key:2,class:"w-full max-w-md rounded-2xl border border-white/20 bg-black/80 px-8 py-10 text-center backdrop-blur-md"},m1={class:"mb-4 text-6xl"},g1={class:"mb-2 text-3xl font-bold text-white"},x1={key:0,class:"mt-6 text-center"},_1={key:3,class:"relative z-20 px-3 pb-safe-bottom md:pb-6"},v1={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},b1={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},y1=["innerHTML"],E1={class:"mt-3 flex justify-end gap-2.5"},S1=["disabled"],M1=["disabled"],T1={key:4,class:"relative z-20 px-3 pb-safe-bottom md:pb-6"},w1={class:"mx-auto w-full max-w-[1100px] rounded-2xl border border-white/15 bg-slate-950/95 p-4 backdrop-blur"},A1={class:"min-h-[72px] whitespace-pre-wrap text-white/90 leading-7 font-semibold"},C1={class:"mb-4"},R1={key:0,class:"mb-3 text-sm text-rose-400"},P1={key:1,class:"mt-3 text-xs text-white/30"},I1={key:0,class:"fixed right-4 top-16 z-30 rounded-xl border border-white/20 bg-slate-900/95 px-4 py-3 shadow-lg backdrop-blur"},D1={class:"flex items-center gap-3"},L1={class:"text-2xl"},U1={class:"font-bold text-white"},N1=gn({__name:"ChapterView",setup(t){const e=b0(),n=uu(),i=Pp(),r=Ip(),s=ze(()=>Number(e.params.id)||1),o=ze(()=>j0(s.value));Di(o,re=>{if(!re){n.push({name:"start"});return}s.value<=100&&s.value>la&&n.push({name:"start"})},{immediate:!0}),Di(s,()=>{h.value&&Z(h.value)}),Yn(()=>{i.loadFromStorage(),r.loadFromStorage(),Ee.value&&setTimeout(()=>{_e()},500)});function a(re,he=!1){const bt="/backend-camp-game/";return re===101?`${bt}audio/bgm-ending-bad.mp3`:re===102?`${bt}audio/bgm-ending-normal.mp3`:re===103&&he?`${bt}audio/bgm-ending-true.mp3`:`${bt}audio/background.mp3`}const l=it(new Audio(a(s.value)));l.value.loop=!0,l.value.volume=.1;const c=it(!1);Di(s,re=>{const he=c.value;l.value.pause(),l.value.currentTime=0,l.value=new Audio(a(re)),l.value.loop=!0,l.value.volume=.1,he&&l.value.play().catch(()=>{})});function u(){c.value?l.value.pause():l.value.play().catch(()=>{}),c.value=!c.value}const d=it(!1);function f(){s.value===103&&(d.value||(d.value=!0,l.value.pause(),l.value.currentTime=0,l.value=new Audio(a(103,!0)),l.value.loop=!0,l.value.volume=.1,l.value.play().catch(()=>{}),c.value=!0))}Fi(()=>{l.value.pause(),l.value.currentTime=0});const p=ze(()=>o.value?.nodes??[]),g=it(0),x=ze(()=>{if(s.value===103)return Math.min(g.value,p.value.length-1);const re=r.getNodeIndex(s.value);return Math.min(re,p.value.length-1)});function m(re,he){re===103?g.value=he:r.setNodeIndex(re,he)}const h=ze(()=>p.value[x.value]),w=ze(()=>h.value?.type==="inputName"),S=ze(()=>h.value?.type==="slides"),y=ze(()=>h.value?.type==="quiz"),D=ze(()=>h.value?.type==="celebration"),L=ze(()=>h.value?.type==="interactiveSlide"),P=ze(()=>h.value?.type==="choice"),R=ze(()=>h.value?.type==="passwordInput"),b=ze(()=>h.value?.type==="endingComplete"),E=ze(()=>h.value?.type==="inputName"?h.value:null),I=ze(()=>h.value?.type==="slides"?h.value:null),B=ze(()=>h.value?.type==="quiz"?h.value:null),q=ze(()=>h.value?.type==="celebration"?h.value:null),H=ze(()=>h.value?.type==="interactiveSlide"?h.value:null),j=ze(()=>h.value?.type==="choice"?h.value:null),$=ze(()=>h.value?.type==="passwordInput"?h.value:null),z=ze(()=>h.value?.type==="endingComplete"?h.value:null),U=it(""),ne=it(""),fe=it(null),Ee=ze(()=>s.value>=100),Me=it(!1),Qe=it(""),We=it(""),ie={[et.bad.chapterId]:{icon:et.bad.icon,title:et.bad.description,type:"bad"},[et.normal.chapterId]:{icon:et.normal.icon,title:et.normal.description,type:"normal"},[et.true.chapterId]:{icon:et.true.icon,title:et.true.description,type:"true"}};function _e(){const re=ie[s.value];re&&(Qe.value=re.icon,We.value=re.title,Me.value=!0,r.unlockEndingAchievement(re.type),setTimeout(()=>{Me.value=!1},3e3))}function F(){Qe.value=et.hidden.icon,We.value=et.hidden.description,Me.value=!0,r.unlockEndingAchievement("hidden"),setTimeout(()=>{Me.value=!1},3e3)}const oe=ze(()=>{if(h.value?.type==="dialogue"&&h.value.image){const re=h.value.image;return re.startsWith("/")?`/backend-camp-game/${re.slice(1)}`:re}return null}),se=ze(()=>h.value?.type==="dialogue"&&h.value.image?h.value.showSaveHint===!0:!1),de=it(""),Pe=it(null);function A(re){const he=i.name||"你";let bt=re.split("{name}").join(he);return bt.includes("{password}")&&i.name&&(bt=bt.split("{password}").join(kf(i.name))),bt}const _=it(!1);ze(()=>s.value!==7||i.name||h.value?.type!=="dialogue"?!1:h.value.text.includes("{password}"));function O(re){const he=/(https?:\/\/[^\s]+)/g;return re.replace(he,'<a href="$1" target="_blank" rel="noopener noreferrer" class="text-amber-400 underline hover:text-amber-300">[連結]</a>')}function X(re){Pe.value&&window.clearInterval(Pe.value),de.value="";let he=0;Pe.value=window.setInterval(()=>{he+=1,de.value=re.slice(0,he),he>=re.length&&(Pe.value&&window.clearInterval(Pe.value),Pe.value=null)},16)}function Z(re){if(re?.type==="dialogue"&&re.text.includes("{password}")&&!i.name){_.value=!0;return}re?.type==="dialogue"?X(A(re.text)):(Pe.value&&window.clearInterval(Pe.value),Pe.value=null,de.value="")}function W(re){i.setName(re),_.value=!1,h.value&&Z(h.value)}function pe(){_.value=!1;const re=Math.max(x.value-1,0);m(s.value,re),Z(p.value[re])}Yn(()=>{h.value&&Z(h.value)});function Q(re){return re.type==="dialogue"&&re.condition&&re.condition==="sqlPerfect"?fe.value?.isPerfect===!0:!0}function le(re){let he=re;for(;he<p.value.length-1;)if(he++,Q(p.value[he]))return he;return p.value.length-1}function ce(){if(h.value?.type!=="dialogue")return;const re=le(x.value);m(s.value,re),Z(p.value[re])}function Ce(re){for(let he=re-1;he>=0;he--){const bt=p.value[he];if(bt?.type==="dialogue"&&Q(bt))return he}return-1}const M=ze(()=>h.value?.type!=="dialogue"?!1:Ce(x.value)>=0);function v(){if(h.value?.type!=="dialogue")return;const re=Ce(x.value);re>=0&&(m(s.value,re),Z(p.value[re]))}function N(){n.push({name:"start"})}function Y(re){i.setName(re);const he=Math.min(x.value+1,p.value.length-1);m(s.value,he),Z(p.value[he])}function ae(){const re=Math.min(x.value+1,p.value.length-1);m(s.value,re),Z(p.value[re])}function K(){if(H.value?.slideId==="video-message"){F(),n.push({name:"start"});return}const re=Math.min(x.value+1,p.value.length-1);m(s.value,re),Z(p.value[re])}function Ie(re){fe.value=re,r.saveQuizScore(s.value,re.score,re.total),re.isPerfect&&r.setDay7Item(!0)}function me(re){const he=Math.min(x.value+1,p.value.length-1);m(s.value,he),Z(p.value[he])}function Le(re){r.saveQuizScore(s.value,re.firstAttemptCorrect,re.total);const he=Math.min(x.value+1,p.value.length-1);m(s.value,he),Z(p.value[he])}function Ue(){const re=Math.max(x.value-1,0);m(s.value,re),Z(p.value[re])}function ge(){s.value===7&&r.setDay7Item(!0),r.completeChapter(s.value);const re=s.value+1;if(s.value>=la){n.push({name:"start"});return}if(du[re])n.push({name:"chapter",params:{id:String(re)}});else{const he=r.endingType,bt={bad:101,normal:102,true:103,hidden:103}[he]||101;n.push({name:"chapter",params:{id:String(bt)}})}}function Ae(){if(!i.name){ne.value="找不到玩家名字，請重新開始遊戲";return}if(ZT(U.value,i.name)){ne.value="",U.value="",F();const re=Math.min(x.value+1,p.value.length-1);m(s.value,re),Z(p.value[re])}else ne.value="密碼錯誤，請再試一次"}function Oe(){n.push({name:"start"})}function Ne(){f();const re=Math.min(x.value+1,p.value.length-1);m(s.value,re),Z(p.value[re])}const Te=ze(()=>b.value?z.value?.canTriggerHidden===!0:!1),$e=ze(()=>h.value?.scene==="dark"),k=ze(()=>{const re=h.value?.scene??"normal";return re==="dark"||re==="home"||re==="end"}),be=ze(()=>{const re=h.value?.scene??"normal";return re==="dark"||re==="home"?"/backend-camp-game/images/scene/normal.png":re==="end"?"/backend-camp-game/images/scene/end.png":`/backend-camp-game/images/scene/${re}.png`}),Se=ze(()=>`/backend-camp-game/images/coach/${h.value?.coachExpression??"normal"}.png`),ke=ze(()=>h.value?.type!=="dialogue"?"海克絲":h.value.speaker==="你"?i.name||"你":h.value.speaker),ve=ze(()=>h.value?.type!=="dialogue"||h.value.speaker==="海克絲"?"border-amber-300/35 bg-amber-300/20 text-amber-100":h.value.speaker==="你"?"border-sky-400/35 bg-sky-400/20 text-sky-100":"border-slate-400/35 bg-slate-400/20 text-slate-200"),ue=ze(()=>h.value?.type==="dialogue"&&Pe.value!=null);function He(){h.value?.type==="dialogue"&&(Pe.value&&window.clearInterval(Pe.value),Pe.value=null,de.value=A(h.value.text))}function Ke(re){w.value||S.value||y.value||D.value||L.value||P.value||(re.key==="Enter"||re.key===" "||re.key==="ArrowRight"?(re.preventDefault(),ue.value?He():h.value?.type==="dialogue"&&ce()):re.key==="ArrowLeft"&&(re.preventDefault(),M.value&&v()))}return Yn(()=>window.addEventListener("keydown",Ke)),Fi(()=>window.removeEventListener("keydown",Ke)),(re,he)=>o.value?(xe(),we("div",GA,[C("div",WA,[$e.value?st("",!0):(xe(),we("div",{key:0,class:"absolute inset-0 bg-cover bg-center scale-[1.02] saturate-95",style:fr({backgroundImage:`url(${be.value})`})},null,4)),$e.value?st("",!0):(xe(),we("div",XA)),$e.value?(xe(),we("div",{key:2,class:"dark-bg-flicker absolute inset-0 bg-cover bg-center scale-[1.02] saturate-50",style:fr({backgroundImage:`url(${be.value})`})},null,4)):st("",!0),$e.value?(xe(),we("div",qA)):st("",!0)]),C("header",$A,[C("button",{class:"rounded-full border border-white/20 bg-white/10 px-3 py-2 text-sm font-extrabold text-white hover:bg-white/15 active:scale-[0.99]",type:"button",onClick:N}," 返回開始 "),C("div",YA,Fe(o.value.title),1),C("button",{class:"flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/15 active:scale-[0.99]",type:"button",title:c.value?"關閉音樂":"開啟音樂",onClick:u},[c.value?(xe(),we("svg",KA,[...he[1]||(he[1]=[C("path",{d:"M9 18V5l12-2v13"},null,-1),C("circle",{cx:"6",cy:"18",r:"3"},null,-1),C("circle",{cx:"18",cy:"16",r:"3"},null,-1)])])):(xe(),we("svg",ZA,[...he[2]||(he[2]=[C("path",{d:"M9 18V5l12-2v13"},null,-1),C("circle",{cx:"6",cy:"18",r:"3"},null,-1),C("circle",{cx:"18",cy:"16",r:"3"},null,-1),C("line",{x1:"1",y1:"1",x2:"23",y2:"23",stroke:"currentColor","stroke-width":"2"},null,-1)])]))],8,jA)]),C("main",JA,[!oe.value&&!y.value&&!S.value&&!D.value&&!L.value&&!P.value&&!b.value&&!k.value?(xe(),we("div",QA,[C("img",{class:"h-full w-auto max-w-[85vw] object-contain object-bottom",src:Se.value,alt:"教練"},null,8,e1)])):st("",!0),oe.value?(xe(),we("div",t1,[C("div",n1,[C("div",i1,[C("img",{src:oe.value,alt:"展示圖片",class:"max-h-[40vh] max-w-full rounded-xl border-2 border-white/30 bg-black/50 p-6 object-contain shadow-2xl md:max-h-[50vh]"},null,8,r1),se.value?(xe(),we(ht,{key:0},[he[3]||(he[3]=C("div",{class:"absolute -left-12 top-1/2 -translate-y-1/2 text-3xl md:-left-16 md:text-4xl"}," 👉 ",-1)),he[4]||(he[4]=C("div",{class:"absolute -left-12 top-1/2 mt-8 -translate-y-1/2 rounded-lg bg-amber-500 px-3 py-1.5 text-sm font-bold text-white shadow-lg md:-left-16"}," 右鍵另存 ",-1))],64)):st("",!0)])])])):st("",!0),b.value&&z.value?(xe(),we("div",s1,[z.value.endingType==="bad"?(xe(),we("div",o1,[he[6]||(he[6]=C("div",{class:"glitch-overlay absolute inset-0 pointer-events-none"},null,-1)),C("div",a1,[C("div",l1,Fe(z.value.icon),1),he[5]||(he[5]=C("div",{class:"flex justify-center items-center text-rose-500/60"},[C("svg",{class:"w-28 h-6",viewBox:"0 0 120 30",fill:"none",stroke:"currentColor","stroke-width":"2"},[C("path",{d:"M0,15 L30,15 L35,5 L40,25 L45,10 L50,20 L55,15 L120,15",class:"heartbeat-line"})])],-1))]),he[7]||(he[7]=C("p",{class:"mb-2 text-lg font-semibold text-white/70"},"壞結局",-1)),C("h1",c1," 「"+Fe(z.value.title)+"」 ",1),he[8]||(he[8]=C("p",{class:"mb-6 text-xl font-bold text-rose-300/80 tracking-widest"},"燃 燒 殆 盡",-1)),he[9]||(he[9]=C("div",{class:"mx-auto max-w-sm rounded-xl border border-rose-900/50 bg-rose-950/30 px-6 py-4"},[C("p",{class:"text-base text-white/90 leading-relaxed"}," 「你的身體比你誠實。它替你按下了那個你不敢按的暫停鍵。」 ")],-1)),he[10]||(he[10]=C("p",{class:"mt-6 text-sm text-white/50 italic"},"進入章節選擇，將每個關卡刷到完美吧！",-1)),C("button",{class:"mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:Oe}," 再試一次 ")])):z.value.endingType==="normal"?(xe(),we("div",u1,[he[11]||(he[11]=C("div",{class:"moon-glow absolute inset-0 pointer-events-none"},null,-1)),C("div",d1,[C("div",f1,Fe(z.value.icon),1)]),he[12]||(he[12]=C("p",{class:"mb-2 text-lg font-semibold text-white/70"},"普通結局",-1)),C("h1",h1," 「"+Fe(z.value.title)+"」 ",1),he[13]||(he[13]=C("p",{class:"mb-6 text-xl font-bold text-sky-300/80 tracking-widest"},"穩 健 前 行",-1)),he[14]||(he[14]=C("div",{class:"mx-auto max-w-sm rounded-xl border border-sky-900/50 bg-sky-950/30 px-6 py-4"},[C("p",{class:"text-base text-white/90 leading-relaxed"}," 「你已經做得很好了，但你還沒學會這樣告訴自己。」 ")],-1)),he[15]||(he[15]=C("p",{class:"mt-6 text-sm text-white/50 italic"},"進入章節選擇，挑戰完美結局吧！",-1)),C("button",{class:"mt-4 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:Oe}," 繼續努力 ")])):(xe(),we("div",p1,[C("div",m1,Fe(z.value.icon),1),C("h1",g1,Fe(z.value.endingType==="hidden"?"達成彩蛋結局":"結局"),1),C("p",{class:Ot(["text-2xl font-bold",{"text-rose-400":z.value.color==="rose","text-sky-400":z.value.color==="sky","text-emerald-400":z.value.color==="emerald","text-amber-400":z.value.color==="amber"}])}," 「"+Fe(z.value.title)+"」 ",3),Te.value?(xe(),we("div",x1,[he[16]||(he[16]=C("p",{class:"mb-4 text-white/60"},"下班後，你手機收到一封 Email...",-1)),C("button",{class:"rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50",onClick:Ne}," 查看 Email ")])):st("",!0),Te.value?st("",!0):(xe(),we("button",{key:1,class:"mt-6 rounded-xl border border-white/20 bg-slate-800/50 px-6 py-3 font-semibold text-white transition-all hover:border-white/40 hover:bg-slate-800",onClick:Oe}," 返回首頁 "))]))])):st("",!0),!y.value&&!S.value&&!D.value&&!L.value&&!P.value&&!b.value&&!R.value?(xe(),we("div",_1,[C("div",v1,[C("div",{class:Ot(["mb-2 inline-flex items-center rounded-full border px-3 py-1 text-sm font-black",ve.value])},Fe(ke.value),3),C("div",b1,[h.value?.type==="dialogue"?(xe(),we("span",{key:0,innerHTML:O(de.value)},null,8,y1)):h.value?.type==="inputName"?(xe(),we(ht,{key:1},[ur(Fe(E.value?.prompt),1)],64)):h.value?.type==="slides"?(xe(),we(ht,{key:2},[ur("我們先看一段簡報，把 Git 的重點抓起來。")],64)):(xe(),we(ht,{key:3},[ur("來，快速確認一下你抓到重點了沒有。")],64))]),C("div",E1,[C("button",{class:"rounded-xl border border-white/20 bg-white/10 px-3 py-2 font-black text-white hover:bg-white/15 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-30",type:"button",disabled:!M.value,onClick:v}," 上一句 ",8,S1),C("button",{class:"rounded-xl border border-amber-300/35 bg-amber-300/20 px-3 py-2 font-black text-white hover:bg-amber-300/25 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-50",type:"button",disabled:h.value?.type!=="dialogue",onClick:ce}," 下一句 ",8,M1)])])])):st("",!0),R.value&&$.value?(xe(),we("div",T1,[C("div",w1,[he[17]||(he[17]=C("div",{class:"mb-2 inline-flex items-center rounded-full border border-amber-400/35 bg-amber-400/20 px-3 py-1 text-sm font-black text-amber-200"}," 輸入密碼 ",-1)),C("div",A1,[C("p",C1,Fe($.value.prompt),1),Jc(C("input",{"onUpdate:modelValue":he[0]||(he[0]=bt=>U.value=bt),type:"text",class:"mb-3 w-full max-w-md rounded-xl border border-white/20 bg-slate-800 px-4 py-3 text-white placeholder-white/40 focus:border-amber-400/50 focus:outline-none",placeholder:"輸入密碼...",onKeyup:fp(Ae,["enter"])},null,544),[[dp,U.value]]),ne.value?(xe(),we("p",R1,Fe(ne.value),1)):st("",!0),C("button",{class:"rounded-xl border border-amber-500/50 bg-amber-900/30 px-6 py-3 font-semibold text-amber-400 transition-all hover:border-amber-400 hover:bg-amber-900/50",onClick:Ae}," 確認 "),$.value.hint?(xe(),we("p",P1,Fe($.value.hint),1)):st("",!0)])])])):st("",!0)]),Tt(Bl,{name:"achievement"},{default:ea(()=>[Me.value?(xe(),we("div",I1,[C("div",D1,[C("span",L1,Fe(Qe.value),1),C("div",null,[he[18]||(he[18]=C("p",{class:"text-xs text-white/50"},"恭喜達成成就",-1)),C("p",U1,Fe(We.value),1)])])])):st("",!0)]),_:1}),w.value&&E.value?(xe(),Yt(Bf,{key:0,title:E.value.prompt,placeholder:"例如：小明",initialValue:Pt(i).name,onSubmit:Y,onCancel:N},null,8,["title","initialValue"])):st("",!0),_.value?(xe(),Yt(Bf,{key:1,title:"在解鎖序號前，請先告訴我你的名字",placeholder:"輸入你的名字",initialValue:Pt(i).name,onSubmit:W,onCancel:pe},null,8,["initialValue"])):st("",!0),S.value&&I.value?(xe(),Yt(Dw,{key:2,title:I.value.title,slides:I.value.slides,mustFinish:I.value.mustFinish,onClose:ae},null,8,["title","slides","mustFinish"])):st("",!0),y.value&&B.value?(xe(),Yt(Yw,{key:3,title:B.value.title,questions:B.value.questions,chapterId:s.value,onDone:Le,onCancel:Ue},null,8,["title","questions","chapterId"])):st("",!0),D.value&&q.value?(xe(),Yt(aA,{key:4,playerName:Pt(i).name||"你",chapterTitle:q.value.chapterTitle,reward:s.value===7&&fe.value?.isPerfect?{icon:"🔑",title:"獲得隱藏道具！",description:"海克絲的神秘序號",code:Pt(kf)(Pt(i).name)}:void 0,onClose:ge},null,8,["playerName","chapterTitle","reward"])):st("",!0),L.value&&H.value?(xe(),Yt(gm,{key:5,slideId:H.value.slideId,title:H.value.title,isMusicPlaying:c.value,onClose:K,onSqlPracticeComplete:Ie,onToggleMusic:u,onSwitchToEndingMusic:f},null,8,["slideId","title","isMusicPlaying"])):st("",!0),P.value&&j.value?(xe(),Yt(VA,{key:6,prompt:j.value.prompt,options:j.value.options,coachExpression:j.value.coachExpression,onSelect:me},null,8,["prompt","options","coachExpression"])):st("",!0)])):st("",!0)}}),F1=au(N1,[["__scopeId","data-v-8a82901d"]]),O1={class:"min-h-screen bg-slate-900 p-8"},k1={class:"mx-auto max-w-4xl"},B1={class:"mb-8"},z1={class:"grid gap-4 md:grid-cols-2"},H1=["onClick"],V1={class:"mb-2"},G1={class:"font-bold text-white group-hover:text-blue-400"},W1={class:"text-sm text-slate-400"},X1=gn({__name:"DevView",setup(t){const e=uu(),n=[{id:"git-intro",title:"Day 2｜Git 互動實驗室：Repository 概念",description:"教導 Git Repository 的基本概念，包含 git init、Working Directory 和 .git 隱藏資料夾"},{id:"architecture-intro",title:"Day 3｜系統架構入門：前端、後端、資料庫",description:"用電商購物流程說明三層架構，展示前端 → 後端 → 資料庫的資料流向"},{id:"docker-intro",title:"Day 3｜Docker 互動實驗室：容器化概念",description:"解釋 Docker 解決的問題，用貨櫃比喻容器，展示 LiveFit 的 3 個容器服務"},{id:"static-dynamic",title:"Day 4｜靜態與動態網站比較",description:"比較靜態網站和動態網站的差異，說明後端處理資料的流程"},{id:"coach-backend",title:"Day 4｜後端角色說明",description:"海克絲說明後端工程師的角色定位與日常工作"},{id:"drag-sort",title:"Day 5｜拖曳排序：HTTP 請求流程",description:"透過拖曳排序互動，學習 HTTP 請求從瀏覽器到伺服器的完整流程"},{id:"network-request",title:"Day 5｜網路請求視覺化",description:"視覺化展示網路請求的過程，包含 DNS 查詢、TCP 連線等步驟"},{id:"api-intro",title:"Day 5｜API 基礎概念",description:"介紹 API 的基本概念，用餐廳點餐比喻說明 API 的運作方式"},{id:"api-demo",title:"Day 5｜API 實際操作示範",description:"實際操作 API 請求，體驗 GET、POST 等 HTTP 方法"},{id:"third-party",title:"Day 5｜第三方 API 服務",description:"介紹第三方 API 服務，如何整合外部服務到自己的應用程式"},{id:"table-design",title:"Day 6｜資料表設計入門",description:"從 Excel 到資料庫的正規化概念，包含主鍵、外來鍵、資料型態、正規化動畫展示"},{id:"livefit-database",title:"Day 6｜LiveFit 資料庫探險",description:"用 LiveFit 業務流程認識 4 張資料表：CREDIT_PACKAGE、SKILL、USER、CREDIT_PURCHASE"},{id:"database-access",title:"Day 7｜資料庫操作方式",description:"破除迷思！認識兩種資料庫操作方式：後端程式 vs 管理工具（DBeaver）"},{id:"sql-basics",title:"Day 7｜SQL 語法基礎",description:"學習 SQL 六大天王：SELECT、FROM、WHERE（查詢）+ INSERT、UPDATE、DELETE（操作）"},{id:"sql-practice",title:"Day 7｜SQL 練習場",description:"透過點擊拼湊 SQL 語法，練習 INSERT、UPDATE、DELETE 操作"}],i=it(null);function r(a){i.value=a}function s(){i.value=null}function o(){e.push({name:"start"})}return(a,l)=>(xe(),we("div",O1,[C("div",k1,[C("div",{class:"mb-8 flex items-center justify-between"},[l[0]||(l[0]=C("div",null,[C("h1",{class:"flex items-center gap-3 text-2xl font-bold text-white"}," 互動式簡報列表 "),C("p",{class:"mt-2 text-slate-400"},"點擊卡片預覽簡報內容")],-1)),C("button",{class:"rounded-lg border border-slate-600 bg-slate-800 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-700",onClick:o}," 返回遊戲 ")]),C("section",B1,[C("div",z1,[(xe(),we(ht,null,pr(n,c=>C("div",{key:c.id,class:"group cursor-pointer rounded-xl border border-slate-700 bg-slate-800 p-5 transition-all hover:border-blue-500 hover:bg-slate-750",onClick:u=>r(c)},[C("div",V1,[C("h3",G1,Fe(c.title),1)]),C("p",W1,Fe(c.description),1),l[1]||(l[1]=C("div",{class:"mt-4 flex items-center gap-2 text-sm text-blue-400 opacity-0 transition-opacity group-hover:opacity-100"},[C("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-4 w-4",viewBox:"0 0 256 256",fill:"currentColor"},[C("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"})]),ur(" 點擊預覽 ")],-1))],8,H1)),64))])])]),i.value?(xe(),Yt(gm,{key:0,slideId:i.value.id,title:i.value.title,onClose:s},null,8,["slideId","title"])):st("",!0)]))}});function xm(){try{const t=localStorage.getItem("livefit.progress");return t?JSON.parse(t):{}}catch{return{}}}function q1(){const e=xm().quizScores||{};return Dp.every(n=>{const i=e[n];return i&&i.total>0})}function $1(){const t=xm(),e=t.quizScores||{},n=[4,5,6,7,8,9,10],i=[];for(const o of n){const a=e[o];if(a&&a.total>0){const l=a.correct??a.score??0;i.push(l/a.total*100)}}if(i.length===0)return"bad";const r=Math.round(i.reduce((o,a)=>o+a,0)/i.length);return i.every(o=>o===100)&&i.length===7&&t.hasDay7Item?"hidden":r===100?"true":r>=85?"normal":"bad"}function Y1(t){return{bad:101,normal:102,true:103,hidden:103}[t]}function j1(t){return!(t>la)}const _m=v0({history:Z_("/backend-camp-game/"),routes:[{path:"/",name:"start",component:WT},{path:"/chapter/:id",name:"chapter",component:F1},{path:"/dev",name:"dev",component:X1}]});_m.beforeEach((t,e,n)=>{if(t.name==="chapter"){const i=Number(t.params.id);if(i>=100){if(!q1())return n({name:"start"});const r=$1(),s=Y1(r);if(i!==s)return n({name:"chapter",params:{id:s.toString()}})}else if(!j1(i))return n({name:"start"})}n()});n_(h_).use(s_()).use(_m).mount("#app");export{K1 as A,Pt as B,ht as F,Fu as T,au as _,Yt as a,ea as b,ze as c,gn as d,C as e,we as f,ur as g,st as h,Jc as i,pr as j,gd as k,Yn as l,fr as m,Ot as n,xe as o,ux as p,kf as q,it as r,Tt as s,Fe as t,Pp as u,Z1 as v,Di as w,J1 as x,Bl as y,dp as z};
