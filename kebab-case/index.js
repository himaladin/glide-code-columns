(()=>{var xe=Object.create;var m=Object.defineProperty,be=Object.defineProperties,ge=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&A(r,t,e[t]);if(w)for(var t of w(e))Te.call(e,t)&&A(r,t,e[t]);return r},x=(r,e)=>be(r,he(e)),ve=r=>m(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Se=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!R.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=ge(e,n))||t.enumerable});return r},P=r=>Se(ve(m(r!=null?xe(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var b=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(d){u(d)}},f=a=>{try{s(t.throw(a))}catch(d){u(d)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,f);s((t=t.apply(r,e)).next())});var L=i((Ju,O)=>{function we(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}O.exports=we});var q=i((Bu,j)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}j.exports=Re});var U=i((Yu,M)=>{var Ae=q(),Pe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(Pe);M.exports=Oe});var E=i(($u,_)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;_.exports=Le});var k=i((Ku,N)=>{var je=E(),qe=typeof self=="object"&&self&&self.Object===Object&&self,Me=je||qe||Function("return this")();N.exports=Me});var g=i((Qu,D)=>{var Ue=k(),_e=Ue.Symbol;D.exports=_e});var W=i((Xu,Z)=>{function Ee(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}Z.exports=Ee});var z=i((rn,I)=>{var Ne=Array.isArray;I.exports=Ne});var F=i((en,H)=>{var G=g(),V=Object.prototype,ke=V.hasOwnProperty,De=V.toString,p=G?G.toStringTag:void 0;function Ze(r){var e=ke.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(o){}var u=De.call(r);return n&&(e?r[p]=t:delete r[p]),u}H.exports=Ze});var B=i((tn,J)=>{var We=Object.prototype,Ie=We.toString;function ze(r){return Ie.call(r)}J.exports=ze});var Q=i((un,K)=>{var Y=g(),Ge=F(),Ve=B(),He="[object Null]",Fe="[object Undefined]",$=Y?Y.toStringTag:void 0;function Je(r){return r==null?r===void 0?Fe:He:$&&$ in Object(r)?Ge(r):Ve(r)}K.exports=Je});var rr=i((nn,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=i((on,er)=>{var Ye=Q(),$e=rr(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}er.exports=Qe});var sr=i((an,ar)=>{var ur=g(),Xe=W(),rt=z(),et=tr(),tt=1/0,nr=ur?ur.prototype:void 0,ir=nr?nr.toString:void 0;function or(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,or)+"";if(et(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}ar.exports=or});var h=i((sn,fr)=>{var ut=sr();function nt(r){return r==null?"":ut(r)}fr.exports=nt});var dr=i((fn,lr)=>{var it=U(),ot=h(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",dt=st+ft+lt,ct="["+dt+"]",pt=RegExp(ct,"g");function mt(r){return r=ot(r),r&&r.replace(at,it).replace(pt,"")}lr.exports=mt});var pr=i((ln,cr)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(xt)||[]}cr.exports=bt});var xr=i((dn,mr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return gt.test(r)}mr.exports=ht});var _r=i((cn,Ur)=>{var br="\\ud800-\\udfff",yt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",vt=yt+Ct+Tt,gr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",Cr=St+wt+Rt+At,Tr="['\u2019]",vr="["+Cr+"]",Ot="["+vt+"]",Sr="\\d+",Lt="["+gr+"]",wr="["+hr+"]",Rr="[^"+br+Cr+Sr+gr+hr+yr+"]",jt="\\ud83c[\\udffb-\\udfff]",qt="(?:"+Ot+"|"+jt+")",Mt="[^"+br+"]",Ar="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+yr+"]",Ut="\\u200d",Or="(?:"+wr+"|"+Rr+")",_t="(?:"+c+"|"+Rr+")",Lr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",qr=qt+"?",Mr="["+Pt+"]?",Et="(?:"+Ut+"(?:"+[Mt,Ar,Pr].join("|")+")"+Mr+qr+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Mr+qr+Et,Zt="(?:"+[Lt,Ar,Pr].join("|")+")"+Dt,Wt=RegExp([c+"?"+wr+"+"+Lr+"(?="+[vr,c,"$"].join("|")+")",_t+"+"+jr+"(?="+[vr,c+Or,"$"].join("|")+")",c+"?"+Or+"+"+Lr,c+"+"+jr,kt,Nt,Sr,Zt].join("|"),"g");function It(r){return r.match(Wt)||[]}Ur.exports=It});var Nr=i((pn,Er)=>{var zt=pr(),Gt=xr(),Vt=h(),Ht=_r();function Ft(r,e,t){return r=Vt(r),e=t?void 0:e,e===void 0?Gt(r)?Ht(r):zt(r):r.match(e)||[]}Er.exports=Ft});var C=i((mn,kr)=>{var Jt=L(),Bt=dr(),Yt=Nr(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}kr.exports=Qt});var Zr=i((xn,Dr)=>{function Xt(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}Dr.exports=Xt});var Ir=i((bn,Wr)=>{var ru=Zr();function eu(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:ru(r,e,t)}Wr.exports=eu});var T=i((gn,zr)=>{var tu="\\ud800-\\udfff",uu="\\u0300-\\u036f",nu="\\ufe20-\\ufe2f",iu="\\u20d0-\\u20ff",ou=uu+nu+iu,au="\\ufe0e\\ufe0f",su="\\u200d",fu=RegExp("["+su+tu+ou+au+"]");function lu(r){return fu.test(r)}zr.exports=lu});var Vr=i((hn,Gr)=>{function du(r){return r.split("")}Gr.exports=du});var Qr=i((yn,Kr)=>{var Hr="\\ud800-\\udfff",cu="\\u0300-\\u036f",pu="\\ufe20-\\ufe2f",mu="\\u20d0-\\u20ff",xu=cu+pu+mu,bu="\\ufe0e\\ufe0f",gu="["+Hr+"]",v="["+xu+"]",S="\\ud83c[\\udffb-\\udfff]",hu="(?:"+v+"|"+S+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",yu="\\u200d",Yr=hu+"?",$r="["+bu+"]?",Cu="(?:"+yu+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",Tu=$r+Yr+Cu,vu="(?:"+[Fr+v+"?",v,Jr,Br,gu].join("|")+")",Su=RegExp(S+"(?="+S+")|"+vu+Tu,"g");function wu(r){return r.match(Su)||[]}Kr.exports=wu});var re=i((Cn,Xr)=>{var Ru=Vr(),Au=T(),Pu=Qr();function Ou(r){return Au(r)?Pu(r):Ru(r)}Xr.exports=Ou});var te=i((Tn,ee)=>{var Lu=Ir(),ju=T(),qu=re(),Mu=h();function Uu(r){return function(e){e=Mu(e);var t=ju(e)?qu(e):void 0,n=t?t[0]:e.charAt(0),u=t?Lu(t,1).join(""):e.slice(1);return n[r]()+u}}ee.exports=Uu});var ne=i((vn,ue)=>{var _u=te(),Eu=_u("toUpperCase");ue.exports=Eu});var oe=i((Sn,ie)=>{var Nu=C(),ku=ne(),Du=Nu(function(r,e,t){return r+(t?" ":"")+ku(e)});ie.exports=Du});var ce=i((Rn,de)=>{var Vu=C(),Hu=Vu(function(r,e,t){return r+(t?"-":"")+e.toLowerCase()});de.exports=Hu});var ae=P(oe());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Zu(r,e){return b(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,o;try{u=yield e(...n)}catch(a){u=void 0;try{o=a.toString()}catch(d){o="Exception can't be stringified."}}let f={key:t};u!==void 0&&(u=se(u),f.result={type:"string",value:u}),o!==void 0&&(f.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function Wu(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Zu(e,r.run)),x(l({},r),{json:JSON.stringify(zu(r),null,2)})}var Iu=`
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
    `,fe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function zu(r){let{name:e,description:t,author:n,result:u,params:o,about:f,video:s}=r,{icon:a=fe}=r;return a==="glide"&&(a=Iu),{name:e,description:t,author:n,result:u,about:f,icon:a,video:s,params:Object.entries(o).map(([d,me])=>l({name:d},me))}}var Gu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return b(this,null,function*(){})}},y=class{constructor(e={}){this.definition=l(l({},Gu),e)}with(e){return new y(l(l({},this.definition),e))}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,ae.default)(t)),this.with({params:x(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=Object.keys(t);function u(...o){return b(this,null,function*(){let f={};o.forEach(({value:a},d)=>{f[n[d]]=a});let s=e(f);return Promise.resolve(s)})}return Wu(x(l({},this.definition),{run:u}))}};function le(r){return new y({name:r})}var pe=P(ce()),Pn=le("Kebab Case").withDescription('"hello world" \u2192 "hello-world"').withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"helloWorld"}).run(({text:r})=>r===void 0?void 0:(0,pe.default)(r));})();
//# sourceMappingURL=index.js.map
