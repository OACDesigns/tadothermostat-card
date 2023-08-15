import"lit-html/is-server.js";function t(t,e,i,o){var s,n=arguments.length,r=n<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,o);else for(var a=t.length-1;a>=0;a--)(s=t[a])&&(r=(n<3?s(r):n>3?s(e,i,r):s(e,i))||r);return n>3&&r&&Object.defineProperty(e,i,r),r}"function"==typeof SuppressedError&&SuppressedError;
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),o=new Map;class s{constructor(t,e){if(this._$cssResult$=!0,e!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=o.get(this.cssText);return e&&void 0===t&&(o.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const n=(t,...e)=>{const o=1===t.length?t[0]:e.reduce(((e,i,o)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[o+1]),t[0]);return new s(o,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new s("string"==typeof t?t:t+"",i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window.trustedTypes,c=l?l.emptyScript:"",d=window.reactiveElementPolyfillSupport,h={toAttribute(t,e){switch(e){case Boolean:t=t?c:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},p=(t,e)=>e!==t&&(e==e||t==t),u={attribute:!0,type:String,converter:h,reflect:!1,hasChanged:p};class g extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const o=this._$Eh(i,e);void 0!==o&&(this._$Eu.set(o,i),t.push(o))})),t}static createProperty(t,e=u){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);void 0!==o&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const s=this[t];this[e]=o,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||u}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{e?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((e=>{const i=document.createElement("style"),o=window.litNonce;void 0!==o&&i.setAttribute("nonce",o),i.textContent=e.cssText,t.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=u){var o,s;const n=this.constructor._$Eh(t,i);if(void 0!==n&&!0===i.reflect){const r=(null!==(s=null===(o=i.converter)||void 0===o?void 0:o.toAttribute)&&void 0!==s?s:h.toAttribute)(e,i.type);this._$Ei=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this._$Ei=null}}_$AK(t,e){var i,o,s;const n=this.constructor,r=n._$Eu.get(t);if(void 0!==r&&this._$Ei!==r){const t=n.getPropertyOptions(r),a=t.converter,l=null!==(s=null!==(o=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==o?o:"function"==typeof a?a:null)&&void 0!==s?s:h.fromAttribute;this._$Ei=r,this[r]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let o=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||p)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var f;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(a=globalThis.reactiveElementVersions)&&void 0!==a?a:globalThis.reactiveElementVersions=[]).push("1.2.1");const v=globalThis.trustedTypes,_=v?v.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,$="?"+m,b=`<${$}>`,y=document,w=(t="")=>y.createComment(t),A=t=>null===t||"object"!=typeof t&&"function"!=typeof t,E=Array.isArray,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,x=/-->/g,k=/>/g,C=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,T=/'/g,O=/"/g,P=/^(?:script|style|textarea)$/i,U=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),H=Symbol.for("lit-noChange"),N=Symbol.for("lit-nothing"),R=new WeakMap,M=y.createTreeWalker(y,129,null,!1),L=(t,e)=>{const i=t.length-1,o=[];let s,n=2===e?"<svg>":"",r=S;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,d=0;for(;d<i.length&&(r.lastIndex=d,l=r.exec(i),null!==l);)d=r.lastIndex,r===S?"!--"===l[1]?r=x:void 0!==l[1]?r=k:void 0!==l[2]?(P.test(l[2])&&(s=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=s?s:S,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?O:T):r===O||r===T?r=C:r===x||r===k?r=S:(r=C,s=void 0);const h=r===C&&t[e+1].startsWith("/>")?" ":"";n+=r===S?i+b:c>=0?(o.push(a),i.slice(0,c)+"$lit$"+i.slice(c)+m+h):i+m+(-2===c?(o.push(void 0),e):h)}const a=n+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(a):a,o]};class V{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let s=0,n=0;const r=t.length-1,a=this.parts,[l,c]=L(t,e);if(this.el=V.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(o=M.nextNode())&&a.length<r;){if(1===o.nodeType){if(o.hasAttributes()){const t=[];for(const e of o.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=c[n++];if(t.push(e),void 0!==i){const t=o.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?K:"@"===e[1]?F:D})}else a.push({type:6,index:s})}for(const e of t)o.removeAttribute(e)}if(P.test(o.tagName)){const t=o.textContent.split(m),e=t.length-1;if(e>0){o.textContent=v?v.emptyScript:"";for(let i=0;i<e;i++)o.append(t[i],w()),M.nextNode(),a.push({type:2,index:++s});o.append(t[e],w())}}}else if(8===o.nodeType)if(o.data===$)a.push({type:2,index:s});else{let t=-1;for(;-1!==(t=o.data.indexOf(m,t+1));)a.push({type:7,index:s}),t+=m.length-1}s++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function z(t,e,i=t,o){var s,n,r,a;if(e===H)return e;let l=void 0!==o?null===(s=i._$Cl)||void 0===s?void 0:s[o]:i._$Cu;const c=A(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(n=null==l?void 0:l._$AO)||void 0===n||n.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,o)),void 0!==o?(null!==(r=(a=i)._$Cl)&&void 0!==r?r:a._$Cl=[])[o]=l:i._$Cu=l),void 0!==l&&(e=z(t,l._$AS(t,e.values),l,o)),e}class j{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:o}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:y).importNode(i,!0);M.currentNode=s;let n=M.nextNode(),r=0,a=0,l=o[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new I(n,n.nextSibling,this,t):1===l.type?e=new l.ctor(n,l.name,l.strings,this,t):6===l.type&&(e=new W(n,this,t)),this.v.push(e),l=o[++a]}r!==(null==l?void 0:l.index)&&(n=M.nextNode(),r++)}return s}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class I{constructor(t,e,i,o){var s;this.type=2,this._$AH=N,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cg=null===(s=null==o?void 0:o.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),A(t)?t===N||null==t||""===t?(this._$AH!==N&&this._$AR(),this._$AH=N):t!==this._$AH&&t!==H&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):(t=>{var e;return E(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])})(t)?this.A(t):this.$(t)}M(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==N&&A(this._$AH)?this._$AA.nextSibling.data=t:this.S(y.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:o}=t,s="number"==typeof o?this._$AC(t):(void 0===o.el&&(o.el=V.createElement(o.h,this.options)),o);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.m(i);else{const t=new j(s,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=R.get(t.strings);return void 0===e&&R.set(t.strings,e=new V(t)),e}A(t){E(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const s of t)o===e.length?e.push(i=new I(this.M(w()),this.M(w()),this,this.options)):i=e[o],i._$AI(s),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class D{constructor(t,e,i,o,s){this.type=1,this._$AH=N,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=N}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const s=this.strings;let n=!1;if(void 0===s)t=z(this,t,e,0),n=!A(t)||t!==this._$AH&&t!==H,n&&(this._$AH=t);else{const o=t;let r,a;for(t=s[0],r=0;r<s.length-1;r++)a=z(this,o[i+r],e,r),a===H&&(a=this._$AH[r]),n||(n=!A(a)||a!==this._$AH[r]),a===N?t=N:t!==N&&(t+=(null!=a?a:"")+s[r+1]),this._$AH[r]=a}n&&!o&&this.k(t)}k(t){t===N?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends D{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===N?void 0:t}}const B=v?v.emptyScript:"";class K extends D{constructor(){super(...arguments),this.type=4}k(t){t&&t!==N?this.element.setAttribute(this.name,B):this.element.removeAttribute(this.name)}}class F extends D{constructor(t,e,i,o,s){super(t,e,i,o,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=z(this,t,e,0))&&void 0!==i?i:N)===H)return;const o=this._$AH,s=t===N&&o!==N||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==N&&(o===N||s);s&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class W{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Y=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var J,X;null==Y||Y(V,I),(null!==(f=globalThis.litHtmlVersions)&&void 0!==f?f:globalThis.litHtmlVersions=[]).push("2.1.2");class Z extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,i)=>{var o,s;const n=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:e;let r=n._$litPart$;if(void 0===r){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;n._$litPart$=r=new I(e.insertBefore(w(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return H}}Z.finalized=!0,Z._$litElement$=!0,null===(J=globalThis.litElementHydrateSupport)||void 0===J||J.call(globalThis,{LitElement:Z});const G=globalThis.litElementPolyfillSupport;null==G||G({LitElement:Z}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Q=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:o}=e;return{kind:i,elements:o,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,tt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function et(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):tt(t,e)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var it,ot,st;null===(it=window.HTMLSlotElement)||void 0===it||it.prototype.assignedElements,function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(ot||(ot={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(st||(st={}));var nt=["closed","locked","off"],rt=function(t,e,i,o){o=o||{},i=null==i?{}:i;var s=new Event(e,{bubbles:void 0===o.bubbles||o.bubbles,cancelable:Boolean(o.cancelable),composed:void 0===o.composed||o.composed});return s.detail=i,t.dispatchEvent(s),s},at=function(t){rt(window,"haptic",t)},lt=function(t,e,i,o){if(o||(o={action:"more-info"}),!o.confirmation||o.confirmation.exemptions&&o.confirmation.exemptions.some((function(t){return t.user===e.user.id}))||(at("warning"),confirm(o.confirmation.text||"Are you sure you want to "+o.action+"?")))switch(o.action){case"more-info":(i.entity||i.camera_image)&&rt(t,"hass-more-info",{entityId:i.entity?i.entity:i.camera_image});break;case"navigate":o.navigation_path&&function(t,e,i){void 0===i&&(i=!1),i?history.replaceState(null,"",e):history.pushState(null,"",e),rt(window,"location-changed",{replace:i})}(0,o.navigation_path);break;case"url":o.url_path&&window.open(o.url_path);break;case"toggle":i.entity&&(function(t,e){(function(t,e,i){void 0===i&&(i=!0);var o,s=function(t){return t.substr(0,t.indexOf("."))}(e),n="group"===s?"homeassistant":s;switch(s){case"lock":o=i?"unlock":"lock";break;case"cover":o=i?"open_cover":"close_cover";break;default:o=i?"turn_on":"turn_off"}t.callService(n,o,{entity_id:e})})(t,e,nt.includes(t.states[e].state))}(e,i.entity),at("success"));break;case"call-service":if(!o.service)return void at("failure");var s=o.service.split(".",2);e.callService(s[0],s[1],o.service_data,o.target),at("success");break;case"fire-dom-event":rt(t,"ll-custom",o)}};function ct(t){return void 0!==t&&"none"!==t.action}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");const dt={required:{icon:"tune",name:"Required",secondary:"Required options for this card to function",show:!0},actions:{icon:"gesture-tap-hold",name:"Actions",secondary:"Perform actions based on tapping/clicking",show:!1,options:{tap:{icon:"gesture-tap",name:"Tap",secondary:"Set the action to perform on tap",show:!1},hold:{icon:"gesture-tap-hold",name:"Hold",secondary:"Set the action to perform on hold",show:!1},double_tap:{icon:"gesture-double-tap",name:"Double Tap",secondary:"Set the action to perform on double tap",show:!1}}},appearance:{icon:"palette",name:"Appearance",secondary:"Customize the name, icon, etc",show:!1}};let ht=class extends Z{setConfig(t){this._config=t}get _name(){return this._config&&this._config.name||""}get _entity(){return this._config&&this._config.entity||""}get _show_warning(){return this._config&&this._config.show_warning||!1}get _show_error(){return this._config&&this._config.show_error||!1}get _tap_action(){return this._config&&this._config.tap_action||{action:"more-info"}}get _hold_action(){return this._config&&this._config.hold_action||{action:"none"}}get _double_tap_action(){return this._config&&this._config.double_tap_action||{action:"none"}}render(){if(!this.hass)return U``;const t=Object.keys(this.hass.states).filter((t=>"climate"===t.substr(0,t.indexOf("."))));return U`
      <div class="card-config">
        <div class="option" @click=${this._toggleOption} .option=${"required"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${dt.required.icon}`}></ha-icon>
            <div class="title">${dt.required.name}</div>
          </div>
          <div class="secondary">${dt.required.secondary}</div>
        </div>
        ${dt.required.show?U`
              <div class="values">
                <paper-dropdown-menu
                  label="Entity (Required)"
                  @value-changed=${this._valueChanged}
                  .configValue=${"entity"}
                >
                  <paper-listbox slot="dropdown-content" .selected=${t.indexOf(this._entity)}>
                    ${t.map((t=>U`
                        <paper-item>${t}</paper-item>
                      `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"actions"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${dt.actions.icon}`}></ha-icon>
            <div class="title">${dt.actions.name}</div>
          </div>
          <div class="secondary">${dt.actions.secondary}</div>
        </div>
        ${dt.actions.show?U`
              <div class="values">
                <div class="option" @click=${this._toggleAction} .option=${"tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${dt.actions.options.tap.icon}`}></ha-icon>
                    <div class="title">${dt.actions.options.tap.name}</div>
                  </div>
                  <div class="secondary">${dt.actions.options.tap.secondary}</div>
                </div>
                ${dt.actions.options.tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"hold"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${dt.actions.options.hold.icon}`}></ha-icon>
                    <div class="title">${dt.actions.options.hold.name}</div>
                  </div>
                  <div class="secondary">${dt.actions.options.hold.secondary}</div>
                </div>
                ${dt.actions.options.hold.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
                <div class="option" @click=${this._toggleAction} .option=${"double_tap"}>
                  <div class="row">
                    <ha-icon .icon=${`mdi:${dt.actions.options.double_tap.icon}`}></ha-icon>
                    <div class="title">${dt.actions.options.double_tap.name}</div>
                  </div>
                  <div class="secondary">${dt.actions.options.double_tap.secondary}</div>
                </div>
                ${dt.actions.options.double_tap.show?U`
                      <div class="values">
                        <paper-item>Action Editors Coming Soon</paper-item>
                      </div>
                    `:""}
              </div>
            `:""}
        <div class="option" @click=${this._toggleOption} .option=${"appearance"}>
          <div class="row">
            <ha-icon .icon=${`mdi:${dt.appearance.icon}`}></ha-icon>
            <div class="title">${dt.appearance.name}</div>
          </div>
          <div class="secondary">${dt.appearance.secondary}</div>
        </div>
        ${dt.appearance.show?U`
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
    `}_toggleAction(t){this._toggleThing(t,dt.actions.options)}_toggleOption(t){this._toggleThing(t,dt)}_toggleThing(t,e){const i=!e[t.target.option].show;for(const[t]of Object.entries(e))e[t].show=!1;e[t.target.option].show=i,this._toggle=!this._toggle}_valueChanged(t){if(!this._config||!this.hass)return;const e=t.target;this[`_${e.configValue}`]!==e.value&&(e.configValue&&(""===e.value?delete this._config[e.configValue]:this._config=Object.assign(Object.assign({},this._config),{[e.configValue]:void 0!==e.checked?e.checked:e.value})),rt(this,"config-changed",{config:this._config}))}static get styles(){return n`
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
    `}};t([et()],ht.prototype,"hass",void 0),t([et()],ht.prototype,"_config",void 0),t([et()],ht.prototype,"_toggle",void 0),ht=t([Q("tadothermostat-card-editor")],ht);const pt="tadothermostat-card";class ut{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}const gt="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.maxTouchPoints>0;class ft extends HTMLElement{constructor(){super(),this.holdTime=500,this.held=!1,this.ripple=document.createElement("mwc-ripple")}connectedCallback(){Object.assign(this.style,{position:"absolute",width:gt?"100px":"50px",height:gt?"100px":"50px",transform:"translate(-50%, -50%)",pointerEvents:"none",zIndex:"999"}),this.appendChild(this.ripple),this.ripple.primary=!0,["touchcancel","mouseout","mouseup","touchmove","mousewheel","wheel","scroll"].forEach((t=>{document.addEventListener(t,(()=>{clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0}),{passive:!0})}))}bind(t,e){if(t.actionHandler)return;t.actionHandler=!0,t.addEventListener("contextmenu",(t=>{const e=t||window.event;return e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0,e.returnValue=!1,!1}));const i=t=>{let e,i;this.held=!1,t.touches?(e=t.touches[0].pageX,i=t.touches[0].pageY):(e=t.pageX,i=t.pageY),this.timer=window.setTimeout((()=>{this.startAnimation(e,i),this.held=!0}),this.holdTime)},o=i=>{i.preventDefault(),["touchend","touchcancel"].includes(i.type)&&void 0===this.timer||(clearTimeout(this.timer),this.stopAnimation(),this.timer=void 0,this.held?rt(t,"action",{action:"hold"}):e.hasDoubleClick?"click"===i.type&&i.detail<2||!this.dblClickTimeout?this.dblClickTimeout=window.setTimeout((()=>{this.dblClickTimeout=void 0,rt(t,"action",{action:"tap"})}),250):(clearTimeout(this.dblClickTimeout),this.dblClickTimeout=void 0,rt(t,"action",{action:"double_tap"})):rt(t,"action",{action:"tap"}))};t.addEventListener("touchstart",i,{passive:!0}),t.addEventListener("touchend",o),t.addEventListener("touchcancel",o),t.addEventListener("mousedown",i,{passive:!0}),t.addEventListener("click",o),t.addEventListener("keyup",(t=>{13===t.keyCode&&o(t)}))}startAnimation(t,e){Object.assign(this.style,{left:`${t}px`,top:`${e}px`,display:null}),this.ripple.disabled=!1,this.ripple.active=!0,this.ripple.unbounded=!0}stopAnimation(){this.ripple.active=!1,this.ripple.disabled=!0,this.style.display="none"}}customElements.define("action-handler-tadothermostat",ft);const vt=(t,e)=>{const i=(()=>{const t=document.body;if(t.querySelector("action-handler-tadothermostat"))return t.querySelector("action-handler-tadothermostat");const e=document.createElement("action-handler-tadothermostat");return t.appendChild(e),e})();i&&i.bind(t,e)},_t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends ut{update(t,[e]){return vt(t.element,e),H}render(t){}});var mt={version:"Version",invalid_configuration:"Invalid configuration",show_warning:"Show Warning"},$t={common:mt},bt={version:"Versjon",invalid_configuration:"Ikke gyldig konfiguration",show_warning:"Vis advarsel"},yt={common:bt};const wt={en:Object.freeze({__proto__:null,common:mt,default:$t}),nb:Object.freeze({__proto__:null,common:bt,default:yt})};function At(t,e="",i=""){const o=(localStorage.getItem("selectedLanguage")||"en").replace(/['"]+/g,"").replace("-","_");let s;try{s=t.split(".").reduce(((t,e)=>t[e]),wt[o])}catch(e){s=t.split(".").reduce(((t,e)=>t[e]),wt.en)}return void 0===s&&(s=t.split(".").reduce(((t,e)=>t[e]),wt.en)),""!==e&&""!==i&&(s=s.replace(e,i)),s}var Et=({css:t})=>new Function("css","return css`ha-card{height:150px;font-family:Helvetica Neue, Arial, sans-serif;color:white}.ha-card *,.ha-card *:after,.ha-card *:before{box-sizing:border-box}.ha-card-body{height:100%;padding:10px 16px;position:relative}.fg{z-index:1;position:absolute;bottom:10px;left:16px;right:16px}.fg-temp *{display:inline-block}.fg-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.fg-location{font-size:13px;line-height:14px}.fg-mode{opacity:0.7;font-weight:500;font-size:11px;line-height:12px}.fg .temp-large,.fg .temp-degree,.fg .temp-small{font-weight:700;font-size:52px;line-height:63px}.fg .temp-small{left:-22px;position:relative;font-size:22px;line-height:23px}.bg-svgicon{width:40%;height:40%;position:absolute;right:5%;top:5%;fill:#688396}.disconnected .fg-temp{display:none}.disconnected{background:radial-gradient(circle farthest-side at left top, rgba(55,100,149,0.8), rgba(55,100,149,0.5)),#243f5c}.off{background:radial-gradient(circle farthest-side at left top, rgba(159,179,194,0.8), rgba(159,179,194,0.5)),#688396}.heating{background:radial-gradient(circle farthest-side at left top, rgba(255,208,0,0.8), rgba(255,208,0,0.5)),#fb0}.idle{background:radial-gradient(circle farthest-side at left top, rgba(68,198,120,0.8), rgba(68,198,120,0.5)),#17ab69}.setpoint-5{background:radial-gradient(circle farthest-side at left top, rgba(60,150,114,0.8), rgba(60,150,114,0.5)),#3c868b}.setpoint-6{background:radial-gradient(circle farthest-side at left top, rgba(60,153,115,0.8), rgba(60,153,115,0.5)),#398b8e}.setpoint-7{background:radial-gradient(circle farthest-side at left top, rgba(60,158,116,0.8), rgba(60,158,116,0.5)),#36908f}.setpoint-8{background:radial-gradient(circle farthest-side at left top, rgba(61,162,117,0.8), rgba(61,162,117,0.5)),#33938e}.setpoint-9{background:radial-gradient(circle farthest-side at left top, rgba(61,166,117,0.8), rgba(61,166,117,0.5)),#30958c}.setpoint-10{background:radial-gradient(circle farthest-side at left top, rgba(61,170,118,0.8), rgba(61,170,118,0.5)),#2d988a}.setpoint-11{background:radial-gradient(circle farthest-side at left top, rgba(62,174,118,0.8), rgba(62,174,118,0.5)),#2a9a87}.setpoint-12{background:radial-gradient(circle farthest-side at left top, rgba(62,178,119,0.8), rgba(62,178,119,0.5)),#289d84}.setpoint-13{background:radial-gradient(circle farthest-side at left top, rgba(62,182,119,0.8), rgba(62,182,119,0.5)),#259f81}.setpoint-14{background:radial-gradient(circle farthest-side at left top, rgba(62,187,119,0.8), rgba(62,187,119,0.5)),#22a27d}.setpoint-15{background:radial-gradient(circle farthest-side at left top, rgba(62,191,119,0.8), rgba(62,191,119,0.5)),#1fa478}.setpoint-16{background:radial-gradient(circle farthest-side at left top, rgba(63,194,119,0.8), rgba(63,194,119,0.5)),#1ca674}.setpoint-17{background:radial-gradient(circle farthest-side at left top, rgba(66,196,120,0.8), rgba(66,196,120,0.5)),#1aa96e}.setpoint-18{background:radial-gradient(circle farthest-side at left top, rgba(68,198,120,0.8), rgba(68,198,120,0.5)),#17ab69}.setpoint-19{background:radial-gradient(circle farthest-side at left top, rgba(255,208,0,0.8), rgba(255,208,0,0.5)),#fb0}.setpoint-20{background:radial-gradient(circle farthest-side at left top, rgba(255,197,0,0.8), rgba(255,197,0,0.5)),#fa0}.setpoint-21{background:radial-gradient(circle farthest-side at left top, rgba(255,186,0,0.8), rgba(255,186,0,0.5)),#f90}.setpoint-22{background:radial-gradient(circle farthest-side at left top, rgba(255,174,0,0.8), rgba(255,174,0,0.5)),#f80}.setpoint-23{background:radial-gradient(circle farthest-side at left top, rgba(255,163,0,0.8), rgba(255,163,0,0.5)),#f70}.setpoint-24{background:radial-gradient(circle farthest-side at left top, rgba(255,152,0,0.8), rgba(255,152,0,0.5)),#f60}.setpoint-25{background:radial-gradient(circle farthest-side at left top, rgba(255,140,0,0.8), rgba(255,140,0,0.5)),#f50}\n`;")(t);console.info(`%c  ${pt.toUpperCase()}  \n%c  Version 0.1.0    `,"color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray"),window.customCards=window.customCards||[],window.customCards.push({type:pt,name:"Tado Thermostat",description:"A card to emulate the tado app."});let St=class extends Z{constructor(){super(...arguments),this._sensorAvailable=!1}static async getConfigElement(){return document.createElement("tadothermostat-card-editor")}static getStubConfig(){return{}}setConfig(t){if(!t.entity)throw new Error("You need to define a single entity");if(!t||t.show_error)throw new Error(At("common.invalid_configuration"));t.test_gui&&function(){var t=document.querySelector("home-assistant");if(t=(t=(t=(t=(t=(t=(t=(t=t&&t.shadowRoot)&&t.querySelector("home-assistant-main"))&&t.shadowRoot)&&t.querySelector("app-drawer-layout partial-panel-resolver"))&&t.shadowRoot||t)&&t.querySelector("ha-panel-lovelace"))&&t.shadowRoot)&&t.querySelector("hui-root")){var e=t.lovelace;return e.current_view=t.___curView,e}return null}().setEditMode(!0),this._config=Object.assign({name:"Tado Thermostat Card"},t)}shouldUpdate(){return!0}render(){if(this._config.show_warning)return this.showWarning(At("common.show_warning"));const t=this.parseClimateValues(),e=t[0],i=t[1],o=t[2];return U`
      <ha-card
        class="ha-card ${i}"
        @action=${this._handleAction}
        .actionHandler=${_t({hasHold:ct(this._config.hold_action),hasDoubleClick:ct(this._config.double_tap_action)})}
        tabindex="0"
        aria-label=${`Tadothermostat: ${this._config.entity}`}
      >
        <div class="ha-card-body">
          <div class="placement bg-svgicon">
            ${o}
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
    `}parseClimateValues(){const t=this._getAttributeValueForKey("temperature"),e=this._getAttributeValueForKey("min_temp"),i=this._getAttributeValueForKey("hvac_action");let o="No remote access",s="disconnected",n=U`
        ${this.svg_no_remote_access()}
      `;if("off"==i&&(o="5"==e?"Frost protection":"Turned Off",s="off",n=U`
        ${this.svg_power_off()}
      `),"heating"==i){let e="setpoint-";e+=t.toString().split(".")[0],o=`Heating to ${t}°`,s="heating "+e,n=U``}if("idle"==i){let e="setpoint-";e+=t.toString().split(".")[0],o=`Set to ${t}°`,s="idle "+e,n=U``}return[o,s,n]}parseClimateTemp(t){let e=0,i="";const o=this._getAttributeValueForKey("current_temperature");if("small"==t){try{i=o.toString().split(".")[1],e=parseInt(i,10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e}try{i=o.toString().split(".")[0],e=parseInt(i,10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e}parseClimateTempRound(){let t,e=0,i="",o=0,s="",n=!0;const r=this._getAttributeValueForKey("current_temperature");try{t=r.toString().split("."),o=parseInt(t[0],10),e=parseInt(t[1],10),isNaN(e)&&(e=0)}catch(t){console.log(t.message)}return e>=7&&(o+=1,n=!1),e<=3&&(n=!1),i=n?e.toString():"",s=o.toString(),U`
      <div class="temp-large">${s}</div>
      <div class="temp-degree"><span>&deg;</span></div>
      <div class="temp-small">${i}</div>
    `}_getAttributeValueForKey(t){if(!this.hass||!this._config)return"";const e=this._config.entity?this._config.entity:void 0,i=this._config.entity?this.hass.states[this._config.entity]:void 0;if(!e&&!i)return"";if(null==(null==i?void 0:i.attributes))return"";let o="";return t in(null==i?void 0:i.attributes)&&(o=null==i?void 0:i.attributes[t]),o}svg_no_remote_access(){return U`
      <svg class="svg_logo" viewBox="0 0 83 56">
        <path
          fill-rule="evenodd"
          d="M58.21 13.81l.007-.007a2.754 2.754 0 0 1 3.894.007 2.774 2.774 0 0 1 0 3.916L46.104 33.794a1 1 0 0 0 0 1.412l16.007 16.068a2.774 2.774 0 0 1-.007 3.923 2.754 2.754 0 0 1-3.894-.007L42.208 39.127l-.002-.003a1 1 0 0 0-1.414.003L24.79 55.19a2.753 2.753 0 0 1-3.9 0 2.774 2.774 0 0 1 0-3.916l16.007-16.068a1 1 0 0 0 0-1.412L20.89 17.726a2.774 2.774 0 0 1 .007-3.924 2.753 2.753 0 0 1 3.893.008l16.002 16.063.002.003a1 1 0 0 0 1.414-.003L58.21 13.81zM0 34.486a2.498 2.498 0 0 1 2.498-2.499h28.088a1 1 0 0 1 .707.293l1.5 1.498a1 1 0 0 1 0 1.415l-1.5 1.498a1 1 0 0 1-.707.293H2.498A2.498 2.498 0 0 1 0 34.486zm51.707-2.204a1 1 0 0 1 .709-.295h28.086a2.498 2.498 0 1 1 0 4.997h-28.09a1 1 0 0 1-.704-.29l-1.5-1.489a1 1 0 0 1-.003-1.414l1.502-1.509z"
        />
      </svg>
    `}svg_power_off(){return U`
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
    `}_handleAction(t){this.hass&&this._config&&t.detail.action&&function(t,e,i,o){var s;"double_tap"===o&&i.double_tap_action?s=i.double_tap_action:"hold"===o&&i.hold_action?s=i.hold_action:"tap"===o&&i.tap_action&&(s=i.tap_action),lt(t,e,i,s)}(this,this.hass,this._config,t.detail.action)}showWarning(t){return U`
      <hui-warning>${t}</hui-warning>
    `}showError(t){const e=document.createElement("hui-error-card");return e.setConfig({type:"error",error:t,origConfig:this._config}),U`
      ${e}
    `}static get styles(){return[Et({css:n})]}};t([et({type:Object})],St.prototype,"hass",void 0),t([et({type:Object})],St.prototype,"_config",void 0),St=t([Q("tadothermostat-card")],St);export{St as TadothermostatCard};
