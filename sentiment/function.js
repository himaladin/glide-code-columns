var bi=Object.create;var U=Object.defineProperty,gi=Object.defineProperties,xi=Object.getOwnPropertyDescriptor,yi=Object.getOwnPropertyDescriptors,vi=Object.getOwnPropertyNames,xe=Object.getOwnPropertySymbols,wi=Object.getPrototypeOf,ye=Object.prototype.hasOwnProperty,Ti=Object.prototype.propertyIsEnumerable;var ve=(r,e,t)=>e in r?U(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,g=(r,e)=>{for(var t in e||(e={}))ye.call(e,t)&&ve(r,t,e[t]);if(xe)for(var t of xe(e))Ti.call(e,t)&&ve(r,t,e[t]);return r},j=(r,e)=>gi(r,yi(e)),Ci=r=>U(r,"__esModule",{value:!0});var l=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Pi=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of vi(e))!ye.call(r,n)&&n!=="default"&&U(r,n,{get:()=>e[n],enumerable:!(t=xi(e,n))||t.enumerable});return r},we=r=>Pi(Ci(U(r!=null?bi(wi(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var v=(r,e,t)=>new Promise((n,i)=>{var s=c=>{try{o(t.next(c))}catch(d){i(d)}},u=c=>{try{o(t.throw(c))}catch(d){i(d)}},o=c=>c.done?n(c.value):Promise.resolve(c.value).then(s,u);o((t=t.apply(r,e)).next())});var Ce=l((Ba,Te)=>{function Ri(r,e,t,n){var i=-1,s=r==null?0:r.length;for(n&&s&&(t=r[++i]);++i<s;)t=e(t,r[i],i,r);return t}Te.exports=Ri});var Re=l((Fa,Pe)=>{function Si(r){return function(e){return r==null?void 0:r[e]}}Pe.exports=Si});var qe=l((Ha,Se)=>{var qi=Re(),Ai={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ei=qi(Ai);Se.exports=Ei});var Ee=l((Va,Ae)=>{var Oi=typeof global=="object"&&global&&global.Object===Object&&global;Ae.exports=Oi});var Ne=l((Wa,Oe)=>{var Ni=Ee(),Li=typeof self=="object"&&self&&self.Object===Object&&self,Ui=Ni||Li||Function("return this")();Oe.exports=Ui});var D=l((Ja,Le)=>{var ji=Ne(),Di=ji.Symbol;Le.exports=Di});var je=l((za,Ue)=>{function Mi(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}Ue.exports=Mi});var Me=l((Za,De)=>{var ki=Array.isArray;De.exports=ki});var Be=l((Ga,Ie)=>{var ke=D(),_e=Object.prototype,_i=_e.hasOwnProperty,Ii=_e.toString,E=ke?ke.toStringTag:void 0;function Bi(r){var e=_i.call(r,E),t=r[E];try{r[E]=void 0;var n=!0}catch(s){}var i=Ii.call(r);return n&&(e?r[E]=t:delete r[E]),i}Ie.exports=Bi});var He=l(($a,Fe)=>{var Fi=Object.prototype,Hi=Fi.toString;function Vi(r){return Hi.call(r)}Fe.exports=Vi});var ze=l((Ka,Je)=>{var Ve=D(),Wi=Be(),Ji=He(),zi="[object Null]",Zi="[object Undefined]",We=Ve?Ve.toStringTag:void 0;function Gi(r){return r==null?r===void 0?Zi:zi:We&&We in Object(r)?Wi(r):Ji(r)}Je.exports=Gi});var Ge=l((Xa,Ze)=>{function $i(r){return r!=null&&typeof r=="object"}Ze.exports=$i});var Ke=l((Ya,$e)=>{var Ki=ze(),Xi=Ge(),Yi="[object Symbol]";function Qi(r){return typeof r=="symbol"||Xi(r)&&Ki(r)==Yi}$e.exports=Qi});var tr=l((Qa,rr)=>{var Xe=D(),en=je(),rn=Me(),tn=Ke(),nn=1/0,Ye=Xe?Xe.prototype:void 0,Qe=Ye?Ye.toString:void 0;function er(r){if(typeof r=="string")return r;if(rn(r))return en(r,er)+"";if(tn(r))return Qe?Qe.call(r):"";var e=r+"";return e=="0"&&1/r==-nn?"-0":e}rr.exports=er});var M=l((eu,ir)=>{var sn=tr();function an(r){return r==null?"":sn(r)}ir.exports=an});var sr=l((ru,nr)=>{var un=qe(),on=M(),ln=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,cn="\\u0300-\\u036f",fn="\\ufe20-\\ufe2f",dn="\\u20d0-\\u20ff",pn=cn+fn+dn,mn="["+pn+"]",hn=RegExp(mn,"g");function bn(r){return r=on(r),r&&r.replace(ln,un).replace(hn,"")}nr.exports=bn});var ur=l((tu,ar)=>{var gn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xn(r){return r.match(gn)||[]}ar.exports=xn});var lr=l((iu,or)=>{var yn=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function vn(r){return yn.test(r)}or.exports=vn});var Ar=l((nu,qr)=>{var cr="\\ud800-\\udfff",wn="\\u0300-\\u036f",Tn="\\ufe20-\\ufe2f",Cn="\\u20d0-\\u20ff",Pn=wn+Tn+Cn,fr="\\u2700-\\u27bf",dr="a-z\\xdf-\\xf6\\xf8-\\xff",Rn="\\xac\\xb1\\xd7\\xf7",Sn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",qn="\\u2000-\\u206f",An=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",pr="A-Z\\xc0-\\xd6\\xd8-\\xde",En="\\ufe0e\\ufe0f",mr=Rn+Sn+qn+An,hr="['\u2019]",br="["+mr+"]",On="["+Pn+"]",gr="\\d+",Nn="["+fr+"]",xr="["+dr+"]",yr="[^"+cr+mr+gr+fr+dr+pr+"]",Ln="\\ud83c[\\udffb-\\udfff]",Un="(?:"+On+"|"+Ln+")",jn="[^"+cr+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",wr="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+pr+"]",Dn="\\u200d",Tr="(?:"+xr+"|"+yr+")",Mn="(?:"+P+"|"+yr+")",Cr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Pr="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",Rr=Un+"?",Sr="["+En+"]?",kn="(?:"+Dn+"(?:"+[jn,vr,wr].join("|")+")"+Sr+Rr+")*",_n="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",In="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Bn=Sr+Rr+kn,Fn="(?:"+[Nn,vr,wr].join("|")+")"+Bn,Hn=RegExp([P+"?"+xr+"+"+Cr+"(?="+[br,P,"$"].join("|")+")",Mn+"+"+Pr+"(?="+[br,P+Tr,"$"].join("|")+")",P+"?"+Tr+"+"+Cr,P+"+"+Pr,In,_n,gr,Fn].join("|"),"g");function Vn(r){return r.match(Hn)||[]}qr.exports=Vn});var Or=l((su,Er)=>{var Wn=ur(),Jn=lr(),zn=M(),Zn=Ar();function Gn(r,e,t){return r=zn(r),e=t?void 0:e,e===void 0?Jn(r)?Zn(r):Wn(r):r.match(e)||[]}Er.exports=Gn});var Lr=l((au,Nr)=>{var $n=Ce(),Kn=sr(),Xn=Or(),Yn="['\u2019]",Qn=RegExp(Yn,"g");function es(r){return function(e){return $n(Xn(Kn(e).replace(Qn,"")),r,"")}}Nr.exports=es});var jr=l((uu,Ur)=>{function rs(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var s=Array(i);++n<i;)s[n]=r[n+e];return s}Ur.exports=rs});var Mr=l((ou,Dr)=>{var ts=jr();function is(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ts(r,e,t)}Dr.exports=is});var z=l((lu,kr)=>{var ns="\\ud800-\\udfff",ss="\\u0300-\\u036f",as="\\ufe20-\\ufe2f",us="\\u20d0-\\u20ff",os=ss+as+us,ls="\\ufe0e\\ufe0f",cs="\\u200d",fs=RegExp("["+cs+ns+os+ls+"]");function ds(r){return fs.test(r)}kr.exports=ds});var Ir=l((cu,_r)=>{function ps(r){return r.split("")}_r.exports=ps});var Zr=l((fu,zr)=>{var Br="\\ud800-\\udfff",ms="\\u0300-\\u036f",hs="\\ufe20-\\ufe2f",bs="\\u20d0-\\u20ff",gs=ms+hs+bs,xs="\\ufe0e\\ufe0f",ys="["+Br+"]",Z="["+gs+"]",G="\\ud83c[\\udffb-\\udfff]",vs="(?:"+Z+"|"+G+")",Fr="[^"+Br+"]",Hr="(?:\\ud83c[\\udde6-\\uddff]){2}",Vr="[\\ud800-\\udbff][\\udc00-\\udfff]",ws="\\u200d",Wr=vs+"?",Jr="["+xs+"]?",Ts="(?:"+ws+"(?:"+[Fr,Hr,Vr].join("|")+")"+Jr+Wr+")*",Cs=Jr+Wr+Ts,Ps="(?:"+[Fr+Z+"?",Z,Hr,Vr,ys].join("|")+")",Rs=RegExp(G+"(?="+G+")|"+Ps+Cs,"g");function Ss(r){return r.match(Rs)||[]}zr.exports=Ss});var $r=l((du,Gr)=>{var qs=Ir(),As=z(),Es=Zr();function Os(r){return As(r)?Es(r):qs(r)}Gr.exports=Os});var Xr=l((pu,Kr)=>{var Ns=Mr(),Ls=z(),Us=$r(),js=M();function Ds(r){return function(e){e=js(e);var t=Ls(e)?Us(e):void 0,n=t?t[0]:e.charAt(0),i=t?Ns(t,1).join(""):e.slice(1);return n[r]()+i}}Kr.exports=Ds});var Qr=l((mu,Yr)=>{var Ms=Xr(),ks=Ms("toUpperCase");Yr.exports=ks});var rt=l((hu,et)=>{var _s=Lr(),Is=Qr(),Bs=_s(function(r,e,t){return r+(t?" ":"")+Is(e)});et.exports=Bs});var K=l((xu,ut)=>{"use strict";ut.exports=function(e,t){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(t,i)}}});var h=l((yu,ct)=>{"use strict";var Js=K(),T=Object.prototype.toString;function X(r){return T.call(r)==="[object Array]"}function Y(r){return typeof r=="undefined"}function zs(r){return r!==null&&!Y(r)&&r.constructor!==null&&!Y(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function Zs(r){return T.call(r)==="[object ArrayBuffer]"}function Gs(r){return typeof FormData!="undefined"&&r instanceof FormData}function $s(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&r.buffer instanceof ArrayBuffer,e}function Ks(r){return typeof r=="string"}function Xs(r){return typeof r=="number"}function ot(r){return r!==null&&typeof r=="object"}function _(r){if(T.call(r)!=="[object Object]")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}function Ys(r){return T.call(r)==="[object Date]"}function Qs(r){return T.call(r)==="[object File]"}function ea(r){return T.call(r)==="[object Blob]"}function lt(r){return T.call(r)==="[object Function]"}function ra(r){return ot(r)&&lt(r.pipe)}function ta(r){return typeof URLSearchParams!="undefined"&&r instanceof URLSearchParams}function ia(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function na(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Q(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),X(r))for(var t=0,n=r.length;t<n;t++)e.call(null,r[t],t,r);else for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.call(null,r[i],i,r)}function ee(){var r={};function e(i,s){_(r[s])&&_(i)?r[s]=ee(r[s],i):_(i)?r[s]=ee({},i):X(i)?r[s]=i.slice():r[s]=i}for(var t=0,n=arguments.length;t<n;t++)Q(arguments[t],e);return r}function sa(r,e,t){return Q(e,function(i,s){t&&typeof i=="function"?r[s]=Js(i,t):r[s]=i}),r}function aa(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}ct.exports={isArray:X,isArrayBuffer:Zs,isBuffer:zs,isFormData:Gs,isArrayBufferView:$s,isString:Ks,isNumber:Xs,isObject:ot,isPlainObject:_,isUndefined:Y,isDate:Ys,isFile:Qs,isBlob:ea,isFunction:lt,isStream:ra,isURLSearchParams:ta,isStandardBrowserEnv:na,forEach:Q,merge:ee,extend:sa,trim:ia,stripBOM:aa}});var re=l((vu,dt)=>{"use strict";var R=h();function ft(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}dt.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(R.isURLSearchParams(t))i=t.toString();else{var s=[];R.forEach(t,function(c,d){c===null||typeof c=="undefined"||(R.isArray(c)?d=d+"[]":c=[c],R.forEach(c,function(f){R.isDate(f)?f=f.toISOString():R.isObject(f)&&(f=JSON.stringify(f)),s.push(ft(d)+"="+ft(f))}))}),i=s.join("&")}if(i){var u=e.indexOf("#");u!==-1&&(e=e.slice(0,u)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}});var mt=l((wu,pt)=>{"use strict";var ua=h();function I(){this.handlers=[]}I.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1};I.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};I.prototype.forEach=function(e){ua.forEach(this.handlers,function(n){n!==null&&e(n)})};pt.exports=I});var bt=l((Tu,ht)=>{"use strict";var oa=h();ht.exports=function(e,t){oa.forEach(e,function(i,s){s!==t&&s.toUpperCase()===t.toUpperCase()&&(e[t]=i,delete e[s])})}});var te=l((Cu,gt)=>{"use strict";gt.exports=function(e,t,n,i,s){return e.config=t,n&&(e.code=n),e.request=i,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}});var ie=l((Pu,xt)=>{"use strict";var la=te();xt.exports=function(e,t,n,i,s){var u=new Error(e);return la(u,t,n,i,s)}});var vt=l((Ru,yt)=>{"use strict";var ca=ie();yt.exports=function(e,t,n){var i=n.config.validateStatus;!n.status||!i||i(n.status)?e(n):t(ca("Request failed with status code "+n.status,n.config,null,n.request,n))}});var Tt=l((Su,wt)=>{"use strict";var B=h();wt.exports=B.isStandardBrowserEnv()?function(){return{write:function(t,n,i,s,u,o){var c=[];c.push(t+"="+encodeURIComponent(n)),B.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),B.isString(s)&&c.push("path="+s),B.isString(u)&&c.push("domain="+u),o===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(t){var n=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()});var Pt=l((qu,Ct)=>{"use strict";Ct.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}});var St=l((Au,Rt)=>{"use strict";Rt.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}});var At=l((Eu,qt)=>{"use strict";var fa=Pt(),da=St();qt.exports=function(e,t){return e&&!fa(t)?da(e,t):t}});var Ot=l((Ou,Et)=>{"use strict";var ne=h(),pa=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];Et.exports=function(e){var t={},n,i,s;return e&&ne.forEach(e.split(`
`),function(o){if(s=o.indexOf(":"),n=ne.trim(o.substr(0,s)).toLowerCase(),i=ne.trim(o.substr(s+1)),n){if(t[n]&&pa.indexOf(n)>=0)return;n==="set-cookie"?t[n]=(t[n]?t[n]:[]).concat([i]):t[n]=t[n]?t[n]+", "+i:i}}),t}});var Ut=l((Nu,Lt)=>{"use strict";var Nt=h();Lt.exports=Nt.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),n;function i(s){var u=s;return e&&(t.setAttribute("href",u),u=t.href),t.setAttribute("href",u),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return n=i(window.location.href),function(u){var o=Nt.isString(u)?i(u):u;return o.protocol===n.protocol&&o.host===n.host}}():function(){return function(){return!0}}()});var O=l((Lu,jt)=>{"use strict";function se(r){this.message=r}se.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};se.prototype.__CANCEL__=!0;jt.exports=se});var ue=l((Uu,Dt)=>{"use strict";var F=h(),ma=vt(),ha=Tt(),ba=re(),ga=At(),xa=Ot(),ya=Ut(),ae=ie(),va=N(),wa=O();Dt.exports=function(e){return new Promise(function(n,i){var s=e.data,u=e.headers,o=e.responseType,c;function d(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}F.isFormData(s)&&delete u["Content-Type"];var a=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",m=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";u.Authorization="Basic "+btoa(f+":"+m)}var A=ga(e.baseURL,e.url);a.open(e.method.toUpperCase(),ba(A,e.params,e.paramsSerializer),!0),a.timeout=e.timeout;function be(){if(!!a){var x="getAllResponseHeaders"in a?xa(a.getAllResponseHeaders()):null,C=!o||o==="text"||o==="json"?a.responseText:a.response,w={data:C,status:a.status,statusText:a.statusText,headers:x,config:e,request:a};ma(function(J){n(J),d()},function(J){i(J),d()},w),a=null}}if("onloadend"in a?a.onloadend=be:a.onreadystatechange=function(){!a||a.readyState!==4||a.status===0&&!(a.responseURL&&a.responseURL.indexOf("file:")===0)||setTimeout(be)},a.onabort=function(){!a||(i(ae("Request aborted",e,"ECONNABORTED",a)),a=null)},a.onerror=function(){i(ae("Network Error",e,null,a)),a=null},a.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||va.transitional;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),i(ae(C,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",a)),a=null},F.isStandardBrowserEnv()){var ge=(e.withCredentials||ya(A))&&e.xsrfCookieName?ha.read(e.xsrfCookieName):void 0;ge&&(u[e.xsrfHeaderName]=ge)}"setRequestHeader"in a&&F.forEach(u,function(C,w){typeof s=="undefined"&&w.toLowerCase()==="content-type"?delete u[w]:a.setRequestHeader(w,C)}),F.isUndefined(e.withCredentials)||(a.withCredentials=!!e.withCredentials),o&&o!=="json"&&(a.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&a.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&a.upload&&a.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(x){!a||(i(!x||x&&x.type?new wa("canceled"):x),a.abort(),a=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),a.send(s)})}});var N=l((ju,_t)=>{"use strict";var p=h(),Mt=bt(),Ta=te(),Ca={"Content-Type":"application/x-www-form-urlencoded"};function kt(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Pa(){var r;return typeof XMLHttpRequest!="undefined"?r=ue():typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]"&&(r=ue()),r}function Ra(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(n){if(n.name!=="SyntaxError")throw n}return(t||JSON.stringify)(r)}var H={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:Pa(),transformRequest:[function(e,t){return Mt(t,"Accept"),Mt(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e)?e:p.isArrayBufferView(e)?e.buffer:p.isURLSearchParams(e)?(kt(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):p.isObject(e)||t&&t["Content-Type"]==="application/json"?(kt(t,"application/json"),Ra(e)):e}],transformResponse:[function(e){var t=this.transitional||H.transitional,n=t&&t.silentJSONParsing,i=t&&t.forcedJSONParsing,s=!n&&this.responseType==="json";if(s||i&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(u){if(s)throw u.name==="SyntaxError"?Ta(u,this,"E_JSON_PARSE"):u}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){H.headers[e]={}});p.forEach(["post","put","patch"],function(e){H.headers[e]=p.merge(Ca)});_t.exports=H});var Bt=l((Du,It)=>{"use strict";var Sa=h(),qa=N();It.exports=function(e,t,n){var i=this||qa;return Sa.forEach(n,function(u){e=u.call(i,e,t)}),e}});var oe=l((Mu,Ft)=>{"use strict";Ft.exports=function(e){return!!(e&&e.__CANCEL__)}});var Wt=l((ku,Vt)=>{"use strict";var Ht=h(),le=Bt(),Aa=oe(),Ea=N(),Oa=O();function ce(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new Oa("canceled")}Vt.exports=function(e){ce(e),e.headers=e.headers||{},e.data=le.call(e,e.data,e.headers,e.transformRequest),e.headers=Ht.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),Ht.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var t=e.adapter||Ea.adapter;return t(e).then(function(i){return ce(e),i.data=le.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Aa(i)||(ce(e),i&&i.response&&(i.response.data=le.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})}});var fe=l((_u,Jt)=>{"use strict";var b=h();Jt.exports=function(e,t){t=t||{};var n={};function i(a,f){return b.isPlainObject(a)&&b.isPlainObject(f)?b.merge(a,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function s(a){if(b.isUndefined(t[a])){if(!b.isUndefined(e[a]))return i(void 0,e[a])}else return i(e[a],t[a])}function u(a){if(!b.isUndefined(t[a]))return i(void 0,t[a])}function o(a){if(b.isUndefined(t[a])){if(!b.isUndefined(e[a]))return i(void 0,e[a])}else return i(void 0,t[a])}function c(a){if(a in t)return i(e[a],t[a]);if(a in e)return i(void 0,e[a])}var d={url:u,method:u,data:u,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:c};return b.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var m=d[f]||s,A=m(f);b.isUndefined(A)&&m!==c||(n[f]=A)}),n}});var de=l((Iu,zt)=>{zt.exports={version:"0.23.0"}});var $t=l((Bu,Gt)=>{"use strict";var Na=de().version,pe={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){pe[r]=function(n){return typeof n===r||"a"+(e<1?"n ":" ")+r}});var Zt={};pe.transitional=function(e,t,n){function i(s,u){return"[Axios v"+Na+"] Transitional option '"+s+"'"+u+(n?". "+n:"")}return function(s,u,o){if(e===!1)throw new Error(i(u," has been removed"+(t?" in "+t:"")));return t&&!Zt[u]&&(Zt[u]=!0,console.warn(i(u," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(s,u,o):!0}};function La(r,e,t){if(typeof r!="object")throw new TypeError("options must be an object");for(var n=Object.keys(r),i=n.length;i-- >0;){var s=n[i],u=e[s];if(u){var o=r[s],c=o===void 0||u(o,s,r);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(t!==!0)throw Error("Unknown option "+s)}}Gt.exports={assertOptions:La,validators:pe}});var ri=l((Fu,ei)=>{"use strict";var Kt=h(),Ua=re(),Xt=mt(),Yt=Wt(),V=fe(),Qt=$t(),S=Qt.validators;function L(r){this.defaults=r,this.interceptors={request:new Xt,response:new Xt}}L.prototype.request=function(e){typeof e=="string"?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},e=V(this.defaults,e),e.method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;t!==void 0&&Qt.assertOptions(t,{silentJSONParsing:S.transitional(S.boolean),forcedJSONParsing:S.transitional(S.boolean),clarifyTimeoutError:S.transitional(S.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(e)===!1||(i=i&&m.synchronous,n.unshift(m.fulfilled,m.rejected))});var s=[];this.interceptors.response.forEach(function(m){s.push(m.fulfilled,m.rejected)});var u;if(!i){var o=[Yt,void 0];for(Array.prototype.unshift.apply(o,n),o=o.concat(s),u=Promise.resolve(e);o.length;)u=u.then(o.shift(),o.shift());return u}for(var c=e;n.length;){var d=n.shift(),a=n.shift();try{c=d(c)}catch(f){a(f);break}}try{u=Yt(c)}catch(f){return Promise.reject(f)}for(;s.length;)u=u.then(s.shift(),s.shift());return u};L.prototype.getUri=function(e){return e=V(this.defaults,e),Ua(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};Kt.forEach(["delete","get","head","options"],function(e){L.prototype[e]=function(t,n){return this.request(V(n||{},{method:e,url:t,data:(n||{}).data}))}});Kt.forEach(["post","put","patch"],function(e){L.prototype[e]=function(t,n,i){return this.request(V(i||{},{method:e,url:t,data:n}))}});ei.exports=L});var ii=l((Hu,ti)=>{"use strict";var ja=O();function q(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var t=this;this.promise.then(function(n){if(!!t._listeners){var i,s=t._listeners.length;for(i=0;i<s;i++)t._listeners[i](n);t._listeners=null}}),this.promise.then=function(n){var i,s=new Promise(function(u){t.subscribe(u),i=u}).then(n);return s.cancel=function(){t.unsubscribe(i)},s},r(function(i){t.reason||(t.reason=new ja(i),e(t.reason))})}q.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};q.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};q.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};q.source=function(){var e,t=new q(function(i){e=i});return{token:t,cancel:e}};ti.exports=q});var si=l((Vu,ni)=>{"use strict";ni.exports=function(e){return function(n){return e.apply(null,n)}}});var ui=l((Wu,ai)=>{"use strict";ai.exports=function(e){return typeof e=="object"&&e.isAxiosError===!0}});var ci=l((Ju,me)=>{"use strict";var oi=h(),Da=K(),W=ri(),Ma=fe(),ka=N();function li(r){var e=new W(r),t=Da(W.prototype.request,e);return oi.extend(t,W.prototype,e),oi.extend(t,e),t.create=function(i){return li(Ma(r,i))},t}var y=li(ka);y.Axios=W;y.Cancel=O();y.CancelToken=ii();y.isCancel=oe();y.VERSION=de().version;y.all=function(e){return Promise.all(e)};y.spread=si();y.isAxiosError=ui();me.exports=y;me.exports.default=y});var di=l((zu,fi)=>{fi.exports=ci()});var tt=we(rt());function Fs(r){return j(g({},r),{json:JSON.stringify(Vs(r),null,2)})}var Hs=`
        <svg
          width="48"
          height="48"
          viewBox="0 0 26 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 14.85L14.3 0V7.29C14.3 11.4653 11.0406 14.85 7.02 14.85H0Z"
            fill="currentColor"
          />
          <path
            d="M11.7 19.71C11.7 15.5347 14.9594 12.15 18.98 12.15H26L11.7 27V19.71Z"
            fill="currentColor"
          />
        </svg>
    `,it=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Vs(r){let{name:e,category:t,released:n,description:i,author:s,result:u,params:o,about:c,video:d}=r,{icon:a=it}=r;return a==="glide"&&(a=Hs),{name:e,category:t,released:n,description:i,author:s,result:u,about:c,icon:a,video:d,params:Object.entries(o).map(([f,m])=>g({name:f},m))}}var Ws={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:it,about:void 0,video:void 0,tests:[],run(){return v(this,null,function*(){})}},k=class{constructor(e={},t=[]){this.definition=g(g({},Ws),e),this.requiredParams=[...t]}with(e,t=[]){return new k(g(g({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,n){return n===void 0&&(n=(0,tt.default)(t)),this.with({params:j(g({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function s(...u){let o={};if(u.forEach(({value:c},d)=>{o[i[d]]=c}),!n.some(c=>o[c]===void 0))return e(o)}return Fs(j(g({},this.definition),{run:s}))}};function nt(r){return new k({name:r})}var st={timeoutSeconds:5*60};function at(r){return(new Date().getTime()-r.getTime())/1e3}var $=class{constructor(e=st){this.cache=new Map;this.props=g(g({},e),st)}get(e){return v(this,null,function*(){var i;let{timestamp:t,item:n}=(i=this.cache.get(e))!=null?i:{timestamp:new Date(0)};if(at(t)<this.props.timeoutSeconds)return n;this.cache.delete(e)})}getWith(e,t){return v(this,null,function*(){var s;let{timestamp:n,item:i}=(s=this.cache.get(e))!=null?s:{timestamp:new Date(0)};if(at(n)<this.props.timeoutSeconds)return i;{let u=yield t(e);return this.set(e,u),u}})}set(e,t){return this.cache.set(e,{timestamp:new Date,item:t})}fetch(n){return v(this,arguments,function*(e,t=e){return yield this.getWith(t,()=>fetch(e).then(i=>i.json()))})}};var pi=we(di()),_a=new $({timeoutSeconds:5*60}),he={sentiment:r=>r.type,score:r=>r.score,full:JSON.stringify},mi="sentiment",$u=nt("Text Sentiment").withAuthor("twinword inc.","help@twinword.com").withCategory("Data & APIs").withDescription("Is this comment positive or negative? Find out the tone.").withAbout(`
    Subscribe and get an API key at [rapidapi.com/twinword/api/sentiment-analysis](https://rapidapi.com/twinword/api/sentiment-analysis/).
  `).withRequiredStringParam("text").withRequiredStringParam("apiKey","API Key").withStringParam("interpretation",`Result (${Object.keys(he).join(", ")})`).withPrimitiveResult().run(n=>v(void 0,[n],function*({text:r,apiKey:e,interpretation:t=mi}){var o;let i=(o=he[t])!=null?o:he[mi];function s(){return v(this,null,function*(){try{return(yield pi.default.get("https://twinword-sentiment-analysis.p.rapidapi.com/analyze/",{params:{text:r},headers:{"x-rapidapi-host":"twinword-sentiment-analysis.p.rapidapi.com","x-rapidapi-key":e}})).data}catch(c){return}})}let u=yield _a.getWith(r,s);return i(u)}));export{$u as default};
//# sourceMappingURL=function.js.map