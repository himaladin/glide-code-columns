(()=>{var pe=Object.create;var p=Object.defineProperty,ge=Object.defineProperties,be=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertyNames,R=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var P=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&P(r,t,e[t]);if(R)for(var t of R(e))ye.call(e,t)&&P(r,t,e[t]);return r},g=(r,e)=>ge(r,xe(e)),Ce=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var we=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of he(e))!S.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=be(e,i))||t.enumerable});return r},A=r=>we(Ce(p(r!=null?pe(Te(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((i,n)=>{var a=o=>{try{s(t.next(o))}catch(d){n(d)}},f=o=>{try{s(t.throw(o))}catch(d){n(d)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,f);s((t=t.apply(r,e)).next())});var O=u((Vi,q)=>{function ve(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}q.exports=ve});var j=u((Hi,L)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}L.exports=Re});var N=u((Fi,M)=>{var Se=j(),Pe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Se(Pe);M.exports=Ae});var D=u((Ji,U)=>{var qe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=qe});var E=u((Bi,_)=>{var Oe=D(),Le=typeof self=="object"&&self&&self.Object===Object&&self,je=Oe||Le||Function("return this")();_.exports=je});var b=u((Yi,k)=>{var Me=E(),Ne=Me.Symbol;k.exports=Ne});var Z=u(($i,I)=>{function Ue(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}I.exports=Ue});var G=u((Ki,W)=>{var De=Array.isArray;W.exports=De});var F=u((Qi,H)=>{var z=b(),V=Object.prototype,_e=V.hasOwnProperty,Ee=V.toString,m=z?z.toStringTag:void 0;function ke(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=Ee.call(r);return i&&(e?r[m]=t:delete r[m]),n}H.exports=ke});var B=u((Xi,J)=>{var Ie=Object.prototype,Ze=Ie.toString;function We(r){return Ze.call(r)}J.exports=We});var Q=u((rn,K)=>{var Y=b(),Ge=F(),ze=B(),Ve="[object Null]",He="[object Undefined]",$=Y?Y.toStringTag:void 0;function Fe(r){return r==null?r===void 0?He:Ve:$&&$ in Object(r)?Ge(r):ze(r)}K.exports=Fe});var rr=u((en,X)=>{function Je(r){return r!=null&&typeof r=="object"}X.exports=Je});var tr=u((tn,er)=>{var Be=Q(),Ye=rr(),$e="[object Symbol]";function Ke(r){return typeof r=="symbol"||Ye(r)&&Be(r)==$e}er.exports=Ke});var sr=u((nn,or)=>{var ir=b(),Qe=Z(),Xe=G(),rt=tr(),et=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(Xe(r))return Qe(r,ar)+"";if(rt(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-et?"-0":e}or.exports=ar});var x=u((un,dr)=>{var tt=sr();function it(r){return r==null?"":tt(r)}dr.exports=it});var y=u((an,fr)=>{var nt=N(),ut=x(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",ft=ot+st+dt,lt="["+ft+"]",ct=RegExp(lt,"g");function mt(r){return r=ut(r),r&&r.replace(at,nt).replace(ct,"")}fr.exports=mt});var cr=u((on,lr)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(r){return r.match(pt)||[]}lr.exports=gt});var pr=u((sn,mr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return bt.test(r)}mr.exports=xt});var Nr=u((dn,Mr)=>{var gr="\\ud800-\\udfff",ht="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Ct=ht+Tt+yt,br="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",Tr=wt+vt+Rt+St,yr="['\u2019]",Cr="["+Tr+"]",At="["+Ct+"]",wr="\\d+",qt="["+br+"]",vr="["+xr+"]",Rr="[^"+gr+Tr+wr+br+xr+hr+"]",Ot="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+Ot+")",jt="[^"+gr+"]",Sr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+hr+"]",Mt="\\u200d",Ar="(?:"+vr+"|"+Rr+")",Nt="(?:"+c+"|"+Rr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Lt+"?",jr="["+Pt+"]?",Ut="(?:"+Mt+"(?:"+[jt,Sr,Pr].join("|")+")"+jr+Lr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=jr+Lr+Ut,kt="(?:"+[qt,Sr,Pr].join("|")+")"+Et,It=RegExp([c+"?"+vr+"+"+qr+"(?="+[Cr,c,"$"].join("|")+")",Nt+"+"+Or+"(?="+[Cr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+qr,c+"+"+Or,_t,Dt,wr,kt].join("|"),"g");function Zt(r){return r.match(It)||[]}Mr.exports=Zt});var Dr=u((fn,Ur)=>{var Wt=cr(),Gt=pr(),zt=x(),Vt=Nr();function Ht(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?Gt(r)?Vt(r):Wt(r):r.match(e)||[]}Ur.exports=Ht});var Er=u((ln,_r)=>{var Ft=O(),Jt=y(),Bt=Dr(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Ft(Bt(Jt(e).replace($t,"")),r,"")}}_r.exports=Kt});var Ir=u((cn,kr)=>{function Qt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}kr.exports=Qt});var Wr=u((mn,Zr)=>{var Xt=Ir();function ri(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Xt(r,e,t)}Zr.exports=ri});var C=u((pn,Gr)=>{var ei="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ui=ti+ii+ni,ai="\\ufe0e\\ufe0f",oi="\\u200d",si=RegExp("["+oi+ei+ui+ai+"]");function di(r){return si.test(r)}Gr.exports=di});var Vr=u((gn,zr)=>{function fi(r){return r.split("")}zr.exports=fi});var Qr=u((bn,Kr)=>{var Hr="\\ud800-\\udfff",li="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",pi=li+ci+mi,gi="\\ufe0e\\ufe0f",bi="["+Hr+"]",w="["+pi+"]",v="\\ud83c[\\udffb-\\udfff]",xi="(?:"+w+"|"+v+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",hi="\\u200d",Yr=xi+"?",$r="["+gi+"]?",Ti="(?:"+hi+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",yi=$r+Yr+Ti,Ci="(?:"+[Fr+w+"?",w,Jr,Br,bi].join("|")+")",wi=RegExp(v+"(?="+v+")|"+Ci+yi,"g");function vi(r){return r.match(wi)||[]}Kr.exports=vi});var re=u((xn,Xr)=>{var Ri=Vr(),Si=C(),Pi=Qr();function Ai(r){return Si(r)?Pi(r):Ri(r)}Xr.exports=Ai});var te=u((hn,ee)=>{var qi=Wr(),Oi=C(),Li=re(),ji=x();function Mi(r){return function(e){e=ji(e);var t=Oi(e)?Li(e):void 0,i=t?t[0]:e.charAt(0),n=t?qi(t,1).join(""):e.slice(1);return i[r]()+n}}ee.exports=Mi});var ne=u((Tn,ie)=>{var Ni=te(),Ui=Ni("toUpperCase");ie.exports=Ui});var ae=u((yn,ue)=>{var Di=Er(),_i=ne(),Ei=Di(function(r,e,t){return r+(t?" ":"")+_i(e)});ue.exports=Ei});var oe=A(ae());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function ki(r,e){return T(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(o){n=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let f={key:t};n!==void 0&&(n=se(n),f.result={type:"string",value:n}),a!==void 0&&(f.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,f,"*")})}function Ii(r){return typeof window!="undefined"&&window.addEventListener("message",e=>ki(e,r.run)),g(l({},r),{json:JSON.stringify(Wi(r),null,2)})}var Zi=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Wi(r){let{name:e,category:t,description:i,author:n,result:a,params:f,about:s,video:o}=r,{icon:d=de}=r;return d==="glide"&&(d=Zi),{name:e,category:t,description:i,author:n,result:a,about:s,icon:d,video:o,params:Object.entries(f).map(([ce,me])=>l({name:ce},me))}}var Gi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Gi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...f){let s={};if(f.forEach(({value:o},d)=>{s[n[d]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return Ii(g(l({},this.definition),{run:a}))}};function fe(r){return new h({name:r})}var le=A(y()),vn=fe("Deburr Text").withCategory("Text").withDescription("Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"d\xE9j\xE0 vu"},"deja vu").run(({text:r})=>r===void 0?void 0:(0,le.default)(r));})();
//# sourceMappingURL=index.js.map
