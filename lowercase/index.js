(()=>{var xe=Object.create;var p=Object.defineProperty,be=Object.defineProperties,he=Object.getOwnPropertyDescriptor,ye=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,Ce=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&P(r,t,e[t]);if(S)for(var t of S(e))we.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>be(r,ye(e)),ve=r=>p(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Se=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of Te(e))!R.call(r,u)&&u!=="default"&&p(r,u,{get:()=>e[u],enumerable:!(t=he(e,u))||t.enumerable});return r},A=r=>Se(ve(p(r!=null?xe(Ce(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((u,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},d=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(o,d);s((t=t.apply(r,e)).next())});var O=i((Bu,q)=>{function Re(r,e,t,u){var n=-1,o=r==null?0:r.length;for(u&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}q.exports=Re});var j=i((Yu,L)=>{function Pe(r){return function(e){return r==null?void 0:r[e]}}L.exports=Pe});var N=i(($u,M)=>{var Ae=j(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Oe=Ae(qe);M.exports=Oe});var _=i((Ku,U)=>{var Le=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Le});var D=i((Qu,E)=>{var je=_(),Me=typeof self=="object"&&self&&self.Object===Object&&self,Ne=je||Me||Function("return this")();E.exports=Ne});var x=i((Xu,k)=>{var Ue=D(),_e=Ue.Symbol;k.exports=_e});var I=i((rn,Z)=>{function Ee(r,e){for(var t=-1,u=r==null?0:r.length,n=Array(u);++t<u;)n[t]=e(r[t],t,r);return n}Z.exports=Ee});var z=i((en,W)=>{var De=Array.isArray;W.exports=De});var H=i((tn,F)=>{var G=x(),V=Object.prototype,ke=V.hasOwnProperty,Ze=V.toString,m=G?G.toStringTag:void 0;function Ie(r){var e=ke.call(r,m),t=r[m];try{r[m]=void 0;var u=!0}catch(o){}var n=Ze.call(r);return u&&(e?r[m]=t:delete r[m]),n}F.exports=Ie});var B=i((un,J)=>{var We=Object.prototype,ze=We.toString;function Ge(r){return ze.call(r)}J.exports=Ge});var Q=i((nn,K)=>{var Y=x(),Ve=H(),Fe=B(),He="[object Null]",Je="[object Undefined]",$=Y?Y.toStringTag:void 0;function Be(r){return r==null?r===void 0?Je:He:$&&$ in Object(r)?Ve(r):Fe(r)}K.exports=Be});var rr=i((on,X)=>{function Ye(r){return r!=null&&typeof r=="object"}X.exports=Ye});var tr=i((an,er)=>{var $e=Q(),Ke=rr(),Qe="[object Symbol]";function Xe(r){return typeof r=="symbol"||Ke(r)&&$e(r)==Qe}er.exports=Xe});var sr=i((sn,ar)=>{var ur=x(),rt=I(),et=z(),tt=tr(),ut=1/0,nr=ur?ur.prototype:void 0,ir=nr?nr.toString:void 0;function or(r){if(typeof r=="string")return r;if(et(r))return rt(r,or)+"";if(tt(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-ut?"-0":e}ar.exports=or});var b=i((fn,fr)=>{var nt=sr();function it(r){return r==null?"":nt(r)}fr.exports=it});var lr=i((dn,dr)=>{var ot=N(),at=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ct=ft+dt+lt,mt="["+ct+"]",pt=RegExp(mt,"g");function gt(r){return r=at(r),r&&r.replace(st,ot).replace(pt,"")}dr.exports=gt});var mr=i((ln,cr)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(xt)||[]}cr.exports=bt});var gr=i((cn,pr)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function yt(r){return ht.test(r)}pr.exports=yt});var Ur=i((mn,Nr)=>{var xr="\\ud800-\\udfff",Tt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",vt=Tt+Ct+wt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",St="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",At=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",Tr=St+Rt+Pt+At,Cr="['\u2019]",wr="["+Tr+"]",Ot="["+vt+"]",vr="\\d+",Lt="["+br+"]",Sr="["+hr+"]",Rr="[^"+xr+Tr+vr+br+hr+yr+"]",jt="\\ud83c[\\udffb-\\udfff]",Mt="(?:"+Ot+"|"+jt+")",Nt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+yr+"]",Ut="\\u200d",qr="(?:"+Sr+"|"+Rr+")",_t="(?:"+c+"|"+Rr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=Mt+"?",Mr="["+qt+"]?",Et="(?:"+Ut+"(?:"+[Nt,Pr,Ar].join("|")+")"+Mr+jr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",kt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Zt=Mr+jr+Et,It="(?:"+[Lt,Pr,Ar].join("|")+")"+Zt,Wt=RegExp([c+"?"+Sr+"+"+Or+"(?="+[wr,c,"$"].join("|")+")",_t+"+"+Lr+"(?="+[wr,c+qr,"$"].join("|")+")",c+"?"+qr+"+"+Or,c+"+"+Lr,kt,Dt,vr,It].join("|"),"g");function zt(r){return r.match(Wt)||[]}Nr.exports=zt});var Er=i((pn,_r)=>{var Gt=mr(),Vt=gr(),Ft=b(),Ht=Ur();function Jt(r,e,t){return r=Ft(r),e=t?void 0:e,e===void 0?Vt(r)?Ht(r):Gt(r):r.match(e)||[]}_r.exports=Jt});var T=i((gn,Dr)=>{var Bt=O(),Yt=lr(),$t=Er(),Kt="['\u2019]",Qt=RegExp(Kt,"g");function Xt(r){return function(e){return Bt($t(Yt(e).replace(Qt,"")),r,"")}}Dr.exports=Xt});var Zr=i((xn,kr)=>{function ru(r,e,t){var u=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++u<n;)o[u]=r[u+e];return o}kr.exports=ru});var Wr=i((bn,Ir)=>{var eu=Zr();function tu(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:eu(r,e,t)}Ir.exports=tu});var C=i((hn,zr)=>{var uu="\\ud800-\\udfff",nu="\\u0300-\\u036f",iu="\\ufe20-\\ufe2f",ou="\\u20d0-\\u20ff",au=nu+iu+ou,su="\\ufe0e\\ufe0f",fu="\\u200d",du=RegExp("["+fu+uu+au+su+"]");function lu(r){return du.test(r)}zr.exports=lu});var Vr=i((yn,Gr)=>{function cu(r){return r.split("")}Gr.exports=cu});var Qr=i((Tn,Kr)=>{var Fr="\\ud800-\\udfff",mu="\\u0300-\\u036f",pu="\\ufe20-\\ufe2f",gu="\\u20d0-\\u20ff",xu=mu+pu+gu,bu="\\ufe0e\\ufe0f",hu="["+Fr+"]",w="["+xu+"]",v="\\ud83c[\\udffb-\\udfff]",yu="(?:"+w+"|"+v+")",Hr="[^"+Fr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",Tu="\\u200d",Yr=yu+"?",$r="["+bu+"]?",Cu="(?:"+Tu+"(?:"+[Hr,Jr,Br].join("|")+")"+$r+Yr+")*",wu=$r+Yr+Cu,vu="(?:"+[Hr+w+"?",w,Jr,Br,hu].join("|")+")",Su=RegExp(v+"(?="+v+")|"+vu+wu,"g");function Ru(r){return r.match(Su)||[]}Kr.exports=Ru});var re=i((Cn,Xr)=>{var Pu=Vr(),Au=C(),qu=Qr();function Ou(r){return Au(r)?qu(r):Pu(r)}Xr.exports=Ou});var te=i((wn,ee)=>{var Lu=Wr(),ju=C(),Mu=re(),Nu=b();function Uu(r){return function(e){e=Nu(e);var t=ju(e)?Mu(e):void 0,u=t?t[0]:e.charAt(0),n=t?Lu(t,1).join(""):e.slice(1);return u[r]()+n}}ee.exports=Uu});var ne=i((vn,ue)=>{var _u=te(),Eu=_u("toUpperCase");ue.exports=Eu});var oe=i((Sn,ie)=>{var Du=T(),ku=ne(),Zu=Du(function(r,e,t){return r+(t?" ":"")+ku(e)});ie.exports=Zu});var ce=i((Pn,le)=>{var Fu=T(),Hu=Fu(function(r,e,t){return r+(t?" ":"")+e.toLowerCase()});le.exports=Hu});var ae=A(oe());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Iu(r,e){return y(this,null,function*(){var s;let{data:{key:t,params:u}}=r,n,o;try{n=yield e(...u)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=se(n),d.result={type:"string",value:n}),o!==void 0&&(d.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function Wu(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Iu(e,r.run)),g(l({},r),{json:JSON.stringify(Gu(r),null,2)})}var zu=`
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
</svg>`;function Gu(r){let{name:e,category:t,description:u,author:n,result:o,params:d,about:s,video:a}=r,{icon:f=fe}=r;return f==="glide"&&(f=zu),{name:e,category:t,description:u,author:n,result:o,about:s,icon:f,video:a,params:Object.entries(d).map(([pe,ge])=>l({name:pe},ge))}}var Vu={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return y(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Vu),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,u){return u===void 0&&(u=(0,ae.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return this.withParam(e,t,u).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,u=this.requiredParams,n=Object.keys(t);function o(...d){let s={};if(d.forEach(({value:a},f)=>{s[n[f]]=a}),!u.some(a=>s[a]===void 0))return e(s)}return Wu(g(l({},this.definition),{run:o}))}};function de(r,e){return new h({name:r,category:e})}var me=A(ce()),qn=de("Lowercase Text","Text").withDescription("Converts string, as space separated words, to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"--Foo-Bar--"}).run(({text:r})=>r===void 0?void 0:(0,me.default)(r));})();
//# sourceMappingURL=index.js.map
