function t(t,e,i,s){var n,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(r=(o<3?n(r):o>3?n(e,i,r):n(e,i))||r);return o>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=n.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&n.set(e,t))}return t}toString(){return this.cssText}}const r=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new o(i,t,s)},a=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,s))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",p=c.reactiveElementPolyfillSupport,u={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},g=(t,e)=>e!==t&&(e==e||t==t),f={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:g},_="finalized";class m extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=f){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||f}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(a(t))}else void 0!==t&&e.push(a(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,s)=>{i?t.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((i=>{const s=document.createElement("style"),n=e.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=i.cssText,t.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=f){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:u).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:u;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||g)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m[_]=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:m}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.3");const y=window,b=y.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,$="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,A="?"+S,x=`<${A}>`,C=document,E=()=>C.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,P=Array.isArray,T="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,U=/>/g,V=RegExp(`>|${T}(?:([^\\s"'>=/]+)(${T}*=${T}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,H=/"/g,M=/^(?:script|style|textarea|title)$/i,j=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),L=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),I=new WeakMap,q=C.createTreeWalker(C,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}const D=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===N?"!--"===l[1]?r=O:void 0!==l[1]?r=U:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=V):void 0!==l[3]&&(r=V):r===V?">"===l[0]?(r=null!=n?n:N,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?V:'"'===l[3]?H:R):r===H||r===R?r=V:r===O||r===U?r=N:(r=V,n=void 0);const h=r===V&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+x:c>=0?(s.push(a),i.slice(0,c)+$+i.slice(c)+S+h):i+S+(-2===c?(s.push(void 0),e):h)}return[B(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class F{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=D(t,e);if(this.el=F.createElement(l,i),q.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=q.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith($)||e.startsWith(S)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+$).split(S),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?X:"?"===e[1]?G:"@"===e[1]?Q:Y})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(S),e=t.length-1;if(e>0){s.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],E()),q.nextNode(),a.push({type:2,index:++n});s.append(t[e],E())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(S,t+1));)a.push({type:7,index:n}),t+=S.length-1}n++}}static createElement(t,e){const i=C.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===L)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=k(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:C).importNode(i,!0);q.currentNode=n;let o=q.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new J(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new tt(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=q.nextNode(),r++)}return q.currentNode=C,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class J{constructor(t,e,i,s){var n;this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),k(t)?t===z||null==t||""===t?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==L&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>P(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==z&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(C.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=F.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new K(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=I.get(t.strings);return void 0===e&&I.set(t.strings,e=new F(t)),e}T(t){P(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new J(this.k(E()),this.k(E()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Y{constructor(t,e,i,s,n){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=z}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==L,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===L&&(a=this._$AH[r]),o||(o=!k(a)||a!==this._$AH[r]),a===z?t=z:t!==z&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class X extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}}const Z=b?b.emptyScript:"";class G extends Y{constructor(){super(...arguments),this.type=4}j(t){t&&t!==z?this.element.setAttribute(this.name,Z):this.element.removeAttribute(this.name)}}class Q extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:z)===L)return;const s=this._$AH,n=t===z&&s!==z||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==z&&(s===z||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class tt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const et=y.litHtmlPolyfillSupport;null==et||et(F,J),(null!==(v=y.litHtmlVersions)&&void 0!==v?v:y.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var it,st;class nt extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new J(e.insertBefore(E(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return L}}nt.finalized=!0,nt._$litElement$=!0,null===(it=globalThis.litElementHydrateSupport)||void 0===it||it.call(globalThis,{LitElement:nt});const ot=globalThis.litElementPolyfillSupport;null==ot||ot({LitElement:nt}),(null!==(st=globalThis.litElementVersions)&&void 0!==st?st:globalThis.litElementVersions=[]).push("3.3.3");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function at(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):rt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var lt,ct,dt;null===(lt=window.HTMLSlotElement)||void 0===lt||lt.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ct||(ct={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(dt||(dt={}));var ht=["closed","locked","off"],pt=function(t,e,i,s){s=s||{},i=null==i?{}:i;var n=new Event(e,{bubbles:void 0===s.bubbles||s.bubbles,cancelable:Boolean(s.cancelable),composed:void 0===s.composed||s.composed});return n.detail=i,t.dispatchEvent(n),n},ut=function(t){pt(window,"haptic",t)},gt=function(t,e,i,s){if(s||(s={action:"more-info"}),!s.confirmation||s.confirmation.exemptions&&s.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(ut("warning"),confirm(s.confirmation.text||"Are you sure you want to "+s.action+"?")))switch(s.action){case"more-info":(i.entity||i.camera_image)&&pt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":s.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),pt(window,"location-changed",{replace:i})}(0,s.navigation_path);break;case"url":s.url_path&&window.open(s.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var s,n=function(t){return t.substr(0,t.indexOf("."))}(e),o="group"===n?"homeassistant":n;switch(n){case"lock":s=i?"unlock":"lock";break;case"cover":s=i?"open_cover":"close_cover";break;default:s=i?"turn_on":"turn_off"}t.callService(o,s,{entity_id:e})})(t,e,ht.includes(t.states[e].state))}(e,i.entity),ut("success"));break;case"call-service":if(!s.service)return void ut("failure");var n=s.service.split(".",2);e.callService(n[0],n[1],s.service_data,s.target),ut("success");break;case"fire-dom-event":pt(t,"ll-custom",s)}};function ft(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _t="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,mt=(t,e,i=null)=>{for(;e!==i;){const i=e.nextSibling;t.removeChild(e),e=i}},vt=`{{lit-${String(Math.random()).slice(2)}}}`,yt=`\x3c!--${vt}--\x3e`,bt=new RegExp(`${vt}|${yt}`),wt="$lit$";class $t{constructor(t,e){this.parts=[],this.element=e;const i=[],s=[],n=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:l,values:{length:c}}=t;for(;a<c;){const t=n.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:i}=e;let s=0;for(let t=0;t<i;t++)St(e[t].name,wt)&&s++;for(;s-- >0;){const e=l[a],i=Ct.exec(e)[2],s=i.toLowerCase()+wt,n=t.getAttribute(s);t.removeAttribute(s);const o=n.split(bt);this.parts.push({type:"attribute",index:r,name:i,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),n.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(vt)>=0){const s=t.parentNode,n=e.split(bt),o=n.length-1;for(let e=0;e<o;e++){let i,o=n[e];if(""===o)i=xt();else{const t=Ct.exec(o);null!==t&&St(t[2],wt)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-5)+t[3]),i=document.createTextNode(o)}s.insertBefore(i,t),this.parts.push({type:"node",index:++r})}""===n[o]?(s.insertBefore(xt(),t),i.push(t)):t.data=n[o],a+=o}}else if(8===t.nodeType)if(t.data===vt){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(xt(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(i.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(vt,e+1));)this.parts.push({type:"node",index:-1}),a++}}else n.currentNode=s.pop()}for(const t of i)t.parentNode.removeChild(t)}}const St=(t,e)=>{const i=t.length-e.length;return i>=0&&t.slice(i)===e},At=t=>-1!==t.index,xt=()=>document.createComment(""),Ct=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Et(t,e){const{element:{content:i},parts:s}=t,n=document.createTreeWalker(i,133,null,!1);let o=Pt(s),r=s[o],a=-1,l=0;const c=[];let d=null;for(;n.nextNode();){a++;const t=n.currentNode;for(t.previousSibling===d&&(d=null),e.has(t)&&(c.push(t),null===d&&(d=t)),null!==d&&l++;void 0!==r&&r.index===a;)r.index=null!==d?-1:r.index-l,o=Pt(s,o),r=s[o]}c.forEach((t=>t.parentNode.removeChild(t)))}const kt=t=>{let e=11===t.nodeType?0:1;const i=document.createTreeWalker(t,133,null,!1);for(;i.nextNode();)e++;return e},Pt=(t,e=-1)=>{for(let i=e+1;i<t.length;i++){const e=t[i];if(At(e))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Tt=new WeakMap,Nt=t=>"function"==typeof t&&Tt.has(t),Ot={},Ut={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class Vt{constructor(t,e,i){this.__parts=[],this.template=t,this.processor=e,this.options=i}update(t){let e=0;for(const i of this.__parts)void 0!==i&&i.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=_t?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],i=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let n,o=0,r=0,a=s.nextNode();for(;o<i.length;)if(n=i[o],At(n)){for(;r<n.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===n.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,n.name,n.strings,this.options));o++}else this.__parts.push(void 0),o++;return _t&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Rt=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:t=>t}),Ht=` ${vt} `;class Mt{constructor(t,e,i,s){this.strings=t,this.values=e,this.type=i,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",i=!1;for(let s=0;s<t;s++){const t=this.strings[s],n=t.lastIndexOf("\x3c!--");i=(n>-1||i)&&-1===t.indexOf("--\x3e",n+1);const o=Ct.exec(t);e+=null===o?t+(i?Ht:yt):t.substr(0,o.index)+o[1]+o[2]+wt+o[3]+vt}return e+=this.strings[t],e}getTemplateElement(){const t=document.createElement("template");let e=this.getHTML();return void 0!==Rt&&(e=Rt.createHTML(e)),t.innerHTML=e,t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const jt=t=>null===t||!("object"==typeof t||"function"==typeof t),Lt=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class zt{constructor(t,e,i){this.dirty=!0,this.element=t,this.name=e,this.strings=i,this.parts=[];for(let t=0;t<i.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new It(this)}_getValue(){const t=this.strings,e=t.length-1,i=this.parts;if(1===e&&""===t[0]&&""===t[1]){const t=i[0].value;if("symbol"==typeof t)return String(t);if("string"==typeof t||!Lt(t))return t}let s="";for(let n=0;n<e;n++){s+=t[n];const e=i[n];if(void 0!==e){const t=e.value;if(jt(t)||!Lt(t))s+="string"==typeof t?t:String(t);else for(const e of t)s+="string"==typeof e?e:String(e)}}return s+=t[e],s}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class It{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===Ot||jt(t)&&t===this.value||(this.value=t,Nt(t)||(this.committer.dirty=!0))}commit(){for(;Nt(this.value);){const t=this.value;this.value=Ot,t(this)}this.value!==Ot&&this.committer.commit()}}class qt{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(xt()),this.endNode=t.appendChild(xt())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=xt()),t.__insert(this.endNode=xt())}insertAfterPart(t){t.__insert(this.startNode=xt()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){if(null===this.startNode.parentNode)return;for(;Nt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Ot,t(this)}const t=this.__pendingValue;t!==Ot&&(jt(t)?t!==this.value&&this.__commitText(t):t instanceof Mt?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):Lt(t)?this.__commitIterable(t):t===Ut?(this.value=Ut,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,i="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=i:this.__commitNode(document.createTextNode(i)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof Vt&&this.value.template===e)this.value.update(t.values);else{const i=new Vt(e,t.processor,this.options),s=i._clone();i.update(t.values),this.__commitNode(s),this.value=i}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let i,s=0;for(const n of t)i=e[s],void 0===i&&(i=new qt(this.options),e.push(i),0===s?i.appendIntoPart(this):i.insertAfterPart(e[s-1])),i.setValue(n),i.commit(),s++;s<e.length&&(e.length=s,this.clear(i&&i.endNode))}clear(t=this.startNode){mt(this.startNode.parentNode,t.nextSibling,this.endNode)}}class Bt{constructor(t,e,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=i}setValue(t){this.__pendingValue=t}commit(){for(;Nt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Ot,t(this)}if(this.__pendingValue===Ot)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=Ot}}class Dt extends zt{constructor(t,e,i){super(t,e,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new Ft(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Ft extends It{}let Wt=!1;(()=>{try{const t={get capture(){return Wt=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}})();class Kt{constructor(t,e,i){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=i,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;Nt(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=Ot,t(this)}if(this.__pendingValue===Ot)return;const t=this.__pendingValue,e=this.value,i=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=Jt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=Ot}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const Jt=t=>t&&(Wt?{capture:t.capture,passive:t.passive,once:t.once}:t.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function Yt(t){let e=Xt.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},Xt.set(t.type,e));let i=e.stringsArray.get(t.strings);if(void 0!==i)return i;const s=t.strings.join(vt);return i=e.keyString.get(s),void 0===i&&(i=new $t(t,t.getTemplateElement()),e.keyString.set(s,i)),e.stringsArray.set(t.strings,i),i}const Xt=new Map,Zt=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const Gt=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(t,e,i,s){const n=e[0];if("."===n){return new Dt(t,e.slice(1),i).parts}if("@"===n)return[new Kt(t,e.slice(1),s.eventContext)];if("?"===n)return[new Bt(t,e.slice(1),i)];return new zt(t,e,i).parts}handleTextExpression(t){return new qt(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.4.1");const Qt=(t,...e)=>new Mt(t,e,"html",Gt)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,te=(t,e)=>`${t}--${e}`;let ee=!0;void 0===window.ShadyCSS?ee=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),ee=!1);const ie=t=>e=>{const i=te(e.type,t);let s=Xt.get(i);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},Xt.set(i,s));let n=s.stringsArray.get(e.strings);if(void 0!==n)return n;const o=e.strings.join(vt);if(n=s.keyString.get(o),void 0===n){const i=e.getTemplateElement();ee&&window.ShadyCSS.prepareTemplateDom(i,t),n=new $t(e,i),s.keyString.set(o,n)}return s.stringsArray.set(e.strings,n),n},se=["html","svg"],ne=new Set,oe=(t,e,i)=>{ne.add(t);const s=i?i.element:document.createElement("template"),n=e.querySelectorAll("style"),{length:o}=n;if(0===o)return void window.ShadyCSS.prepareTemplateStyles(s,t);const r=document.createElement("style");for(let t=0;t<o;t++){const e=n[t];e.parentNode.removeChild(e),r.textContent+=e.textContent}(t=>{se.forEach((e=>{const i=Xt.get(te(e,t));void 0!==i&&i.keyString.forEach((t=>{const{element:{content:e}}=t,i=new Set;Array.from(e.querySelectorAll("style")).forEach((t=>{i.add(t)})),Et(t,i)}))}))})(t);const a=s.content;i?function(t,e,i=null){const{element:{content:s},parts:n}=t;if(null==i)return void s.appendChild(e);const o=document.createTreeWalker(s,133,null,!1);let r=Pt(n),a=0,l=-1;for(;o.nextNode();)for(l++,o.currentNode===i&&(a=kt(e),i.parentNode.insertBefore(e,i));-1!==r&&n[r].index===l;){if(a>0){for(;-1!==r;)n[r].index+=a,r=Pt(n,r);return}r=Pt(n,r)}}(i,r,a.firstChild):a.insertBefore(r,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,t);const l=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)e.insertBefore(l.cloneNode(!0),e.firstChild);else if(i){a.insertBefore(r,a.firstChild);const t=new Set;t.add(r),Et(i,t)}};window.JSCompiler_renameProperty=(t,e)=>t;const re={toAttribute(t,e){switch(e){case Boolean:return t?"":null;case Object:case Array:return null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){switch(e){case Boolean:return null!==t;case Number:return null===t?null:Number(t);case Object:case Array:return JSON.parse(t)}return t}},ae=(t,e)=>e!==t&&(e==e||t==t),le={attribute:!0,type:String,converter:re,reflect:!1,hasChanged:ae},ce="finalized";class de extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const t=[];return this._classProperties.forEach(((e,i)=>{const s=this._attributeNameForProperty(i,e);void 0!==s&&(this._attributeToPropertyMap.set(s,i),t.push(s))})),t}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const t=Object.getPrototypeOf(this)._classProperties;void 0!==t&&t.forEach(((t,e)=>this._classProperties.set(e,t)))}}static createProperty(t,e=le){if(this._ensureClassProperties(),this._classProperties.set(t,e),e.noAccessor||this.prototype.hasOwnProperty(t))return;const i="symbol"==typeof t?Symbol():`__${t}`,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdateInternal(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this._classProperties&&this._classProperties.get(t)||le}static finalize(){const t=Object.getPrototypeOf(this);if(t.hasOwnProperty(ce)||t.finalize(),this[ce]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const t=this.properties,e=[...Object.getOwnPropertyNames(t),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(t):[]];for(const i of e)this.createProperty(i,t[i])}}static _attributeNameForProperty(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}static _valueHasChanged(t,e,i=ae){return i(t,e)}static _propertyValueFromAttribute(t,e){const i=e.type,s=e.converter||re,n="function"==typeof s?s:s.fromAttribute;return n?n(t,i):t}static _propertyValueToAttribute(t,e){if(void 0===e.reflect)return;const i=e.type,s=e.converter;return(s&&s.toAttribute||re.toAttribute)(t,i)}initialize(){this._updateState=0,this._updatePromise=new Promise((t=>this._enableUpdatingResolver=t)),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach(((t,e)=>{if(this.hasOwnProperty(e)){const t=this[e];delete this[e],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(e,t)}}))}_applyInstanceProperties(){this._instanceProperties.forEach(((t,e)=>this[e]=t)),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(t,e,i){e!==i&&this._attributeToProperty(t,i)}_propertyToAttribute(t,e,i=le){const s=this.constructor,n=s._attributeNameForProperty(t,i);if(void 0!==n){const t=s._propertyValueToAttribute(e,i);if(void 0===t)return;this._updateState=8|this._updateState,null==t?this.removeAttribute(n):this.setAttribute(n,t),this._updateState=-9&this._updateState}}_attributeToProperty(t,e){if(8&this._updateState)return;const i=this.constructor,s=i._attributeToPropertyMap.get(t);if(void 0!==s){const t=i.getPropertyOptions(s);this._updateState=16|this._updateState,this[s]=i._propertyValueFromAttribute(e,t),this._updateState=-17&this._updateState}}requestUpdateInternal(t,e,i){let s=!0;if(void 0!==t){const n=this.constructor;i=i||n.getPropertyOptions(t),n._valueHasChanged(this[t],e,i.hasChanged)?(this._changedProperties.has(t)||this._changedProperties.set(t,e),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(t,i))):s=!1}!this._hasRequestedUpdate&&s&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(t,e){return this.requestUpdateInternal(t,e),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(t){}const t=this.performUpdate();return null!=t&&await t,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let t=!1;const e=this._changedProperties;try{t=this.shouldUpdate(e),t?this.update(e):this._markUpdated()}catch(e){throw t=!1,this._markUpdated(),e}t&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(e)),this.updated(e))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._updatePromise}shouldUpdate(t){return!0}update(t){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach(((t,e)=>this._propertyToAttribute(e,this[e],t))),this._reflectingProperties=void 0),this._markUpdated()}updated(t){}firstUpdated(t){}}de[ce]=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const he=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?Object.assign(Object.assign({},e),{finisher(i){i.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function pe(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):he(t,e)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const ue=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ge=Symbol();class fe{constructor(t,e){if(e!==ge)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return void 0===this._styleSheet&&(ue?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const _e=(t,...e)=>{const i=e.reduce(((e,i,s)=>e+(t=>{if(t instanceof fe)return t.cssText;if("number"==typeof t)return t;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+t[s+1]),t[0]);return new fe(i,ge)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.5.1");const me={};class ve extends de{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const t=this.getStyles();if(Array.isArray(t)){const e=(t,i)=>t.reduceRight(((t,i)=>Array.isArray(i)?e(i,t):(t.add(i),t)),i),i=e(t,new Set),s=[];i.forEach((t=>s.unshift(t))),this._styles=s}else this._styles=void 0===t?[]:[t];this._styles=this._styles.map((t=>{if(t instanceof CSSStyleSheet&&!ue){const e=Array.prototype.slice.call(t.cssRules).reduce(((t,e)=>t+e.cssText),"");return new fe(String(e),ge)}return t}))}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow(this.constructor.shadowRootOptions)}adoptStyles(){const t=this.constructor._styles;0!==t.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ue?this.renderRoot.adoptedStyleSheets=t.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(t.map((t=>t.cssText)),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(t){const e=this.render();super.update(t),e!==me&&this.constructor.render(e,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach((t=>{const e=document.createElement("style");e.textContent=t.cssText,this.renderRoot.appendChild(e)})))}render(){return me}}ve.finalized=!0,ve.render=(t,e,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const s=i.scopeName,n=Zt.has(e),o=ee&&11===e.nodeType&&!!e.host,r=o&&!ne.has(s),a=r?document.createDocumentFragment():e;if(((t,e,i)=>{let s=Zt.get(e);void 0===s&&(mt(e,e.firstChild),Zt.set(e,s=new qt(Object.assign({templateFactory:Yt},i))),s.appendInto(e)),s.setValue(t),s.commit()})(t,a,Object.assign({templateFactory:ie(s)},i)),r){const t=Zt.get(a);Zt.delete(a);const i=t.value instanceof Vt?t.value.template:void 0;oe(s,a,i),mt(e,e.firstChild),e.appendChild(a),Zt.set(e,t)}!n&&o&&window.ShadyCSS.styleElement(e.host)},ve.shadowRootOptions={mode:"open"};const ye={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let be=class extends ve{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return Qt``;const t=Object.keys(this.hass.states).filter((t=>"climate"===t.substr(0,t.indexOf("."))));return Qt`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${ye.required.icon}`}></ha-icon>
            <div class="title">${ye.required.name}</div>
          </div>
          <div class="secondary">${ye.required.secondary}</div>
        </div>
        ${ye.required.show?Qt`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map((t=>Qt`
                        <paper-item>${t}</paper-item>
                      `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${ye.actions.icon}`}></ha-icon>
            <div class="title">${ye.actions.name}</div>
          </div>
          <div class="secondary">${ye.actions.secondary}</div>
        </div>
        ${ye.actions.show?Qt`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${ye.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${ye.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${ye.actions.options.tap.secondary}</div>
                </div>
                ${ye.actions.options.tap.show?Qt`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${ye.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${ye.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${ye.actions.options.hold.secondary}</div>
                </div>
                ${ye.actions.options.hold.show?Qt`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${ye.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${ye.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${ye.actions.options.double_tap.secondary}</div>
                </div>
                ${ye.actions.options.double_tap.show?Qt`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${ye.appearance.icon}`}></ha-icon>
            <div class="title">${ye.appearance.name}</div>
          </div>
          <div class="secondary">${ye.appearance.secondary}</div>
        </div>
        ${ye.appearance.show?Qt`
              <div class="values">
                <paper-input
                  label="Name (Optional)"
                  .value=${this._name}
                  .configValue=${"name"}
                  @value-changed=${this._valueChanged}
                ></paper-input>
                <br />
                <ha-switch
                  aria-label=${"Toggle warning "+(this._show_warning?"off":"on")}
                  .checked=${!1!==this._show_warning}
                  .configValue=${"show_warning"}
                  @change=${this._valueChanged}
                  >Show Warning?</ha-switch
                >
                <ha-switch
                  aria-label=${"Toggle error "+(this._show_error?"off":"on")}
                  .checked=${!1!==this._show_error}
                  .configValue=${"show_error"}
                  @change=${this._valueChanged}
                  >Show Error?</ha-switch
                >
              </div>
            `:""}
      </div>
    `}_toggleAction(t){this._toggleThing(t,ye.actions.options)}_toggleOption(t){this._toggleThing(t,ye)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),pt(this,"config-changed",{config:this._config}))}static get styles(){return _e`
      .option {
        padding: 4px 0px;
        cursor: pointer;
      }
      .row {
        display: flex;
        margin-bottom: -14px;
        pointer-events: none;
      }
      .title {
        padding-left: 16px;
        margin-top: -6px;
        pointer-events: none;
      }
      .secondary {
        padding-left: 40px;
        color: var(--secondary-text-color);
        pointer-events: none;
      }
      .values {
        padding-left: 16px;
        background: var(--secondary-background-color);
      }
      ha-switch {
        padding-bottom: 8px;
      }
    `}};var we;t([pe()],be.prototype,"hass",void 0),t([pe()],be.prototype,"_config",void 0),t([pe()],be.prototype,"_toggle",void 0),be=t([(we="tadothermostat-card-editor",t=>"function"==typeof t?((t,e)=>(window.customElements.define(t,e),e))(we,t):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(we,t))],be);const $e="tadothermostat-card";class Se{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const Ae="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class xe extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:Ae?"100px":"50px",height:Ae?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},s=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?pt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,pt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,pt(t,"action",{action:"double_tap"})):pt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",s),t.addEventListener("touchcancel",s),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",s),t.addEventListener("keyup",(t=>{13===t.keyCode&&s(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-tadothermostat",xe);const Ce=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-tadothermostat"))return t.querySelector("action-handler-tadothermostat");const e=document.createElement("action-handler-tadothermostat");return t.appendChild(e),e})();i&&i.bind(t,e)},Ee=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends Se{update(t,[e]){return Ce(t.element,e),L}render(t){}});var ke={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},Pe={common:ke},Te={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},Ne={common:Te};const Oe={en:Object.freeze({__proto__:null,common:ke,default:Pe}),nb:Object.freeze({__proto__:null,common:Te,default:Ne})};function Ue(t,e="",i=""){const s=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let n;try{n=t.split(".").reduce(((t,e)=>t[e]),Oe[s])}catch(e){n=t.split(".").reduce(((t,e)=>t[e]),Oe.en)}return void 0===n&&(n=t.split(".").reduce(((t,e)=>t[e]),Oe.en)),""!==e&&""!==i&&(n=n.replace(e,i)),n}var Ve=({css:t})=>new Function("css","return css`ha-card{height:150px;font-family:Helvetica Neue, Arial, sans-serif;color:white}.ha-card *,.ha-card *:after,.ha-card *:before{box-sizing:border-box}.ha-card-body{height:100%;padding:10px 16px;position:relative}.fg{z-index:1;position:absolute;bottom:10px;left:16px;right:16px}.fg-temp *{display:inline-block}.fg-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fg-location{font-size:13px;line-height:14px}.fg-mode{opacity:0.7;font-weight:500;font-size:11px;line-height:12px}.fg .temp-large,.fg .temp-degree,.fg .temp-small{font-weight:700;font-size:52px;line-height:63px}.fg .temp-small{left:-22px;position:relative;font-size:22px;line-height:23px}.bg-svgicon{width:40%;height:40%;position:absolute;right:5%;top:5%;fill:#688396}.disconnected .fg-temp{display:none}.disconnected{background:radial-gradient(circle farthest-side at left top, rgba(55,100,149,0.8), rgba(55,100,149,0.5)),#243f5c}.off{background:radial-gradient(circle farthest-side at left top, rgba(159,179,194,0.8), rgba(159,179,194,0.5)),#688396}.heating{background:radial-gradient(circle farthest-side at left top, rgba(255,208,0,0.8), rgba(255,208,0,0.5)),#fb0}.idle{background:radial-gradient(circle farthest-side at left top, rgba(68,198,120,0.8), rgba(68,198,120,0.5)),#17ab69}.setpoint-5{background:radial-gradient(circle farthest-side at left top, rgba(60,150,114,0.8), rgba(60,150,114,0.5)),#3c868b}.setpoint-6{background:radial-gradient(circle farthest-side at left top, rgba(60,153,115,0.8), rgba(60,153,115,0.5)),#398b8e}.setpoint-7{background:radial-gradient(circle farthest-side at left top, rgba(60,158,116,0.8), rgba(60,158,116,0.5)),#36908f}.setpoint-8{background:radial-gradient(circle farthest-side at left top, rgba(61,162,117,0.8), rgba(61,162,117,0.5)),#33938e}.setpoint-9{background:radial-gradient(circle farthest-side at left top, rgba(61,166,117,0.8), rgba(61,166,117,0.5)),#30958c}.setpoint-10{background:radial-gradient(circle farthest-side at left top, rgba(61,170,118,0.8), rgba(61,170,118,0.5)),#2d988a}.setpoint-11{background:radial-gradient(circle farthest-side at left top, rgba(62,174,118,0.8), rgba(62,174,118,0.5)),#2a9a87}.setpoint-12{background:radial-gradient(circle farthest-side at left top, rgba(62,178,119,0.8), rgba(62,178,119,0.5)),#289d84}.setpoint-13{background:radial-gradient(circle farthest-side at left top, rgba(62,182,119,0.8), rgba(62,182,119,0.5)),#259f81}.setpoint-14{background:radial-gradient(circle farthest-side at left top, rgba(62,187,119,0.8), rgba(62,187,119,0.5)),#22a27d}.setpoint-15{background:radial-gradient(circle farthest-side at left top, rgba(62,191,119,0.8), rgba(62,191,119,0.5)),#1fa478}.setpoint-16{background:radial-gradient(circle farthest-side at left top, rgba(63,194,119,0.8), rgba(63,194,119,0.5)),#1ca674}.setpoint-17{background:radial-gradient(circle farthest-side at left top, rgba(66,196,120,0.8), rgba(66,196,120,0.5)),#1aa96e}.setpoint-18{background:radial-gradient(circle farthest-side at left top, rgba(68,198,120,0.8), rgba(68,198,120,0.5)),#17ab69}.setpoint-19{background:radial-gradient(circle farthest-side at left top, rgba(255,208,0,0.8), rgba(255,208,0,0.5)),#fb0}.setpoint-20{background:radial-gradient(circle farthest-side at left top, rgba(255,197,0,0.8), rgba(255,197,0,0.5)),#fa0}.setpoint-21{background:radial-gradient(circle farthest-side at left top, rgba(255,186,0,0.8), rgba(255,186,0,0.5)),#f90}.setpoint-22{background:radial-gradient(circle farthest-side at left top, rgba(255,174,0,0.8), rgba(255,174,0,0.5)),#f80}.setpoint-23{background:radial-gradient(circle farthest-side at left top, rgba(255,163,0,0.8), rgba(255,163,0,0.5)),#f70}.setpoint-24{background:radial-gradient(circle farthest-side at left top, rgba(255,152,0,0.8), rgba(255,152,0,0.5)),#f60}.setpoint-25{background:radial-gradient(circle farthest-side at left top, rgba(255,140,0,0.8), rgba(255,140,0,0.5)),#f50}\n`;")(t);console.info(`%c  ${$e.toUpperCase()}  \n%c  Version 0.1.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:$e,name:"Tado Thermostat",description:"A card to emulate the tado app."});let Re=class extends nt{constructor(){super(...arguments),this._sensorAvailable=!1}static async getConfigElement(){return document.createElement("tadothermostat-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t.entity)throw new Error("You need to define a single entity");if(!t||t.show_error)throw new Error(Ue("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Tado Thermostat Card"},t)}shouldUpdate(){return!0}render(){if(this._config.show_warning)return this.showWarning(Ue("common.show_warning"));const t=this.parseClimateValues(),e=t[0],i=t[1],s=t[2];return j`
      <ha-card
        class="ha-card ${i}"
        @action=${this._handleAction}
        .actionHandler=${Ee({hasHold:ft(this._config.hold_action),hasDoubleClick:ft(this._config.double_tap_action)})}
        tabindex="0"
        aria-label=${`Tadothermostat: ${this._config.entity}`}
      >
        <div class="ha-card-body">
          <div class="placement bg-svgicon">
            ${s}
          </div>
          <div class="placement fg">
            <div class="fg-temp">
              <!-- <p>testing works</p> -->
              ${this.parseClimateTempRound()}
            </div>
            <div class="fg-text fg-location">${this._getAttributeValueForKey("friendly_name")}</div>
            <div class="fg-text fg-mode">${e}</div>
          </div>
        </div>
      </ha-card>
    `}parseClimateValues(){const t=this._getAttributeValueForKey("temperature"),e=this._getAttributeValueForKey("min_temp"),i=this._getAttributeValueForKey("hvac_action");let s="No remote access",n="disconnected",o=j`
        ${this.svg_no_remote_access()}
      `;if("off"==i&&(s="5"==e?"Frost protection":"Turned Off",n="off",o=j`
        ${this.svg_power_off()}
      `),"heating"==i){let e="setpoint-";e+=t.toString().split(".")[0],s=`Heating to ${t}°`,n="heating "+e,o=j``}if("idle"==i){let e="setpoint-";e+=t.toString().split(".")[0],s=`Set to ${t}°`,n="idle "+e,o=j``}return[s,n,o]}parseClimateTemp(t){let e=0,i="";const s=this._getAttributeValueForKey("current_temperature");if("small"==t){try{i=s.toString().split(".")[1],e=parseInt(i,10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e}try{i=s.toString().split(".")[0],e=parseInt(i,10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e}parseClimateTempRound(){let t,e=0,i="",s=0,n="",o=!0;const r=this._getAttributeValueForKey("current_temperature");try{t=r.toString().split("."),s=parseInt(t[0],10),e=parseInt(t[1],10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e>=7&&(s+=1,o=!1),e<=3&&(o=!1),i=o?e.toString():"",n=s.toString(),j`
      <div class="temp-large">${n}</div>
      <div class="temp-degree"><span>&deg;</span></div>
      <div class="temp-small">${i}</div>
    `}_getAttributeValueForKey(t){if(!this.hass||!this._config)return"";const e=this._config.entity?this._config.entity:void 0,i=this._config.entity?this.hass.states[this._config.entity]:void 0;if(!e&&!i)return"";if(null==(null==i?void 0:i.attributes))return"";let s="";return t in(null==i?void 0:i.attributes)&&(s=null==i?void 0:i.attributes[t]),s}svg_no_remote_access(){return j`
      <svg class="svg_logo" viewBox="0 0 83 56">
        <path
          fill-rule="evenodd"
          d="M58.21 13.81l.007-.007a2.754 2.754 0 0 1 3.894.007 2.774 2.774 0 0 1 0 3.916L46.104 33.794a1 1 0 0 0 0 1.412l16.007 16.068a2.774 2.774 0 0 1-.007 3.923 2.754 2.754 0 0 1-3.894-.007L42.208 39.127l-.002-.003a1 1 0 0 0-1.414.003L24.79 55.19a2.753 2.753 0 0 1-3.9 0 2.774 2.774 0 0 1 0-3.916l16.007-16.068a1 1 0 0 0 0-1.412L20.89 17.726a2.774 2.774 0 0 1 .007-3.924 2.753 2.753 0 0 1 3.893.008l16.002 16.063.002.003a1 1 0 0 0 1.414-.003L58.21 13.81zM0 34.486a2.498 2.498 0 0 1 2.498-2.499h28.088a1 1 0 0 1 .707.293l1.5 1.498a1 1 0 0 1 0 1.415l-1.5 1.498a1 1 0 0 1-.707.293H2.498A2.498 2.498 0 0 1 0 34.486zm51.707-2.204a1 1 0 0 1 .709-.295h28.086a2.498 2.498 0 1 1 0 4.997h-28.09a1 1 0 0 1-.704-.29l-1.5-1.489a1 1 0 0 1-.003-1.414l1.502-1.509z"
        />
      </svg>
    `}svg_power_off(){return j`
      <svg class="svg_logo" viewBox="0 0 68 71">
        <g fill-rule="evenodd">
          <path
            d="M34.001 39C36.211 39 38 37.331 38 35.276V3.724C38 1.669 36.21 0 34.001 0 31.791 0 30 1.669 30 3.724v31.552C30 37.331 31.792 39 34.001 39"
          />
          <path
            d="M44.808 9.011a3.788 3.788 0 0 0 1.574 5.142c8.613 4.563 13.964 13.411 13.964 23.09 0 14.423-11.82 26.158-26.346 26.158S7.656 51.666 7.656 37.244c0-9.68 5.349-18.528 13.962-23.091a3.788 3.788 0 0 0 1.574-5.142 3.844 3.844 0 0 0-5.178-1.563C6.902 13.336 0 24.752 0 37.244 0 55.856 15.253 71 34 71s34-15.144 34-33.756c0-12.492-6.902-23.908-18.011-29.796-1.866-.988-4.185-.287-5.181 1.563z"
          />
        </g>
      </svg>
    `}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,s){var n;"double_tap"===s&&i.double_tap_action?n=i.double_tap_action:"hold"===s&&i.hold_action?n=i.hold_action:"tap"===s&&i.tap_action&&(n=i.tap_action),gt(t,e,i,n)}(this,this.hass,this._config,t.detail.action)}showWarning(t){return j`
      <hui-warning>${t}</hui-warning>
    `}showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),j`
      ${e}
    `}static get styles(){return[Ve({css:r})]}};t([at({type:Object})],Re.prototype,"hass",void 0),t([at({type:Object})],Re.prototype,"_config",void 0),Re=t([(t=>e=>"function"==typeof e?((t,e)=>(customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){customElements.define(t,e)}}})(t,e))("tadothermostat-card")],Re);export{Re as TadothermostatCard};
