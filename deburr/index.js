(()=>{var pe=Object.create;var m=Object.defineProperty,me=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,he=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var A=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&A(r,t,e[t]);if(w)for(var t of w(e))ye.call(e,t)&&A(r,t,e[t]);return r},x=(r,e)=>me(r,ge(e)),Te=r=>m(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of be(e))!R.call(r,n)&&n!=="default"&&m(r,n,{get:()=>e[n],enumerable:!(t=xe(e,n))||t.enumerable});return r},P=r=>Ce(Te(m(r!=null?pe(he(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var g=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(l){u(l)}},f=a=>{try{s(t.throw(a))}catch(l){u(l)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,f);s((t=t.apply(r,e)).next())});var L=i((Gu,O)=>{function ve(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}O.exports=ve});var q=i((Vu,j)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}j.exports=Se});var U=i((Hu,M)=>{var we=q(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=we(Re);M.exports=Ae});var D=i((Fu,_)=>{var Pe=typeof global=="object"&&global&&global.Object===Object&&global;_.exports=Pe});var N=i((Ju,E)=>{var Oe=D(),Le=typeof self=="object"&&self&&self.Object===Object&&self,je=Oe||Le||Function("return this")();E.exports=je});var b=i((Bu,k)=>{var qe=N(),Me=qe.Symbol;k.exports=Me});var I=i((Yu,Z)=>{function Ue(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}Z.exports=Ue});var z=i(($u,W)=>{var _e=Array.isArray;W.exports=_e});var F=i((Ku,H)=>{var G=b(),V=Object.prototype,De=V.hasOwnProperty,Ee=V.toString,p=G?G.toStringTag:void 0;function Ne(r){var e=De.call(r,p),t=r[p];try{r[p]=void 0;var n=!0}catch(o){}var u=Ee.call(r);return n&&(e?r[p]=t:delete r[p]),u}H.exports=Ne});var B=i((Qu,J)=>{var ke=Object.prototype,Ze=ke.toString;function Ie(r){return Ze.call(r)}J.exports=Ie});var Q=i((Xu,K)=>{var Y=b(),We=F(),ze=B(),Ge="[object Null]",Ve="[object Undefined]",$=Y?Y.toStringTag:void 0;function He(r){return r==null?r===void 0?Ve:Ge:$&&$ in Object(r)?We(r):ze(r)}K.exports=He});var rr=i((rn,X)=>{function Fe(r){return r!=null&&typeof r=="object"}X.exports=Fe});var tr=i((en,er)=>{var Je=Q(),Be=rr(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}er.exports=$e});var sr=i((tn,ar)=>{var ur=b(),Ke=I(),Qe=z(),Xe=tr(),rt=1/0,nr=ur?ur.prototype:void 0,ir=nr?nr.toString:void 0;function or(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,or)+"";if(Xe(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}ar.exports=or});var h=i((un,fr)=>{var et=sr();function tt(r){return r==null?"":et(r)}fr.exports=tt});var T=i((nn,dr)=>{var ut=U(),nt=h(),it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ft=ot+at+st,dt="["+ft+"]",lt=RegExp(dt,"g");function ct(r){return r=nt(r),r&&r.replace(it,ut).replace(lt,"")}dr.exports=ct});var cr=i((on,lr)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(pt)||[]}lr.exports=mt});var mr=i((an,pr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return xt.test(r)}pr.exports=gt});var Ur=i((sn,Mr)=>{var xr="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Tt=bt+ht+yt,gr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",wt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",yr=Ct+vt+St+wt,Tr="['\u2019]",Cr="["+yr+"]",At="["+Tt+"]",vr="\\d+",Pt="["+gr+"]",Sr="["+br+"]",wr="[^"+xr+yr+vr+gr+br+hr+"]",Ot="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+Ot+")",jt="[^"+xr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+hr+"]",qt="\\u200d",Pr="(?:"+Sr+"|"+wr+")",Mt="(?:"+c+"|"+wr+")",Or="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",jr=Lt+"?",qr="["+Rt+"]?",Ut="(?:"+qt+"(?:"+[jt,Rr,Ar].join("|")+")"+qr+jr+")*",_t="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=qr+jr+Ut,Nt="(?:"+[Pt,Rr,Ar].join("|")+")"+Et,kt=RegExp([c+"?"+Sr+"+"+Or+"(?="+[Cr,c,"$"].join("|")+")",Mt+"+"+Lr+"(?="+[Cr,c+Pr,"$"].join("|")+")",c+"?"+Pr+"+"+Or,c+"+"+Lr,Dt,_t,vr,Nt].join("|"),"g");function Zt(r){return r.match(kt)||[]}Mr.exports=Zt});var Dr=i((fn,_r)=>{var It=cr(),Wt=mr(),zt=h(),Gt=Ur();function Vt(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?Wt(r)?Gt(r):It(r):r.match(e)||[]}_r.exports=Vt});var Nr=i((dn,Er)=>{var Ht=L(),Ft=T(),Jt=Dr(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Ht(Jt(Ft(e).replace(Yt,"")),r,"")}}Er.exports=$t});var Zr=i((ln,kr)=>{function Kt(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}kr.exports=Kt});var Wr=i((cn,Ir)=>{var Qt=Zr();function Xt(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Qt(r,e,t)}Ir.exports=Xt});var C=i((pn,zr)=>{var ru="\\ud800-\\udfff",eu="\\u0300-\\u036f",tu="\\ufe20-\\ufe2f",uu="\\u20d0-\\u20ff",nu=eu+tu+uu,iu="\\ufe0e\\ufe0f",ou="\\u200d",au=RegExp("["+ou+ru+nu+iu+"]");function su(r){return au.test(r)}zr.exports=su});var Vr=i((mn,Gr)=>{function fu(r){return r.split("")}Gr.exports=fu});var Qr=i((xn,Kr)=>{var Hr="\\ud800-\\udfff",du="\\u0300-\\u036f",lu="\\ufe20-\\ufe2f",cu="\\u20d0-\\u20ff",pu=du+lu+cu,mu="\\ufe0e\\ufe0f",xu="["+Hr+"]",v="["+pu+"]",S="\\ud83c[\\udffb-\\udfff]",gu="(?:"+v+"|"+S+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",bu="\\u200d",Yr=gu+"?",$r="["+mu+"]?",hu="(?:"+bu+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",yu=$r+Yr+hu,Tu="(?:"+[Fr+v+"?",v,Jr,Br,xu].join("|")+")",Cu=RegExp(S+"(?="+S+")|"+Tu+yu,"g");function vu(r){return r.match(Cu)||[]}Kr.exports=vu});var re=i((gn,Xr)=>{var Su=Vr(),wu=C(),Ru=Qr();function Au(r){return wu(r)?Ru(r):Su(r)}Xr.exports=Au});var te=i((bn,ee)=>{var Pu=Wr(),Ou=C(),Lu=re(),ju=h();function qu(r){return function(e){e=ju(e);var t=Ou(e)?Lu(e):void 0,n=t?t[0]:e.charAt(0),u=t?Pu(t,1).join(""):e.slice(1);return n[r]()+u}}ee.exports=qu});var ne=i((hn,ue)=>{var Mu=te(),Uu=Mu("toUpperCase");ue.exports=Uu});var oe=i((yn,ie)=>{var _u=Nr(),Du=ne(),Eu=_u(function(r,e,t){return r+(t?" ":"")+Du(e)});ie.exports=Eu});var ae=P(oe());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Nu(r,e){return g(this,null,function*(){var s;let{data:{key:t,params:n}}=r,u,o;try{u=yield e(...n)}catch(a){u=void 0;try{o=a.toString()}catch(l){o="Exception can't be stringified."}}let f={key:t};u!==void 0&&(u=se(u),f.result={type:"string",value:u}),o!==void 0&&(f.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function ku(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Nu(e,r.run)),x(d({},r),{json:JSON.stringify(Iu(r),null,2)})}var Zu=`
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
</svg>`;function Iu(r){let{name:e,description:t,author:n,result:u,params:o,about:f,video:s}=r,{icon:a=fe}=r;return a==="glide"&&(a=Zu),{name:e,description:t,author:n,result:u,about:f,icon:a,video:s,params:Object.entries(o).map(([l,ce])=>d({name:l},ce))}}var Wu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return g(this,null,function*(){})}},y=class{constructor(e={}){this.definition=d(d({},Wu),e)}with(e){return new y(d(d({},this.definition),e))}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,ae.default)(t)),this.with({params:x(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=Object.keys(t);function u(...o){return g(this,null,function*(){let f={};o.forEach(({value:a},l)=>{f[n[l]]=a});let s=e(f);return Promise.resolve(s)})}return ku(x(d({},this.definition),{run:u}))}};function de(r){return new y({name:r})}var le=P(T()),vn=de("Deburr Text").withDescription("Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"d\xE9j\xE0 vu"}).run(({text:r})=>r===void 0?void 0:(0,le.default)(r));})();
//# sourceMappingURL=index.js.map
