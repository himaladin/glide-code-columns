var le=Object.create;var p=Object.defineProperty,ce=Object.defineProperties,me=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,be=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&R(r,t,e[t]);if(w)for(var t of w(e))xe.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>ce(r,pe(e)),he=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of ge(e))!v.call(r,u)&&u!=="default"&&p(r,u,{get:()=>e[u],enumerable:!(t=me(e,u))||t.enumerable});return r},Te=r=>ye(he(p(r!=null?le(be(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((u,i)=>{var o=a=>{try{s(t.next(a))}catch(f){i(f)}},c=a=>{try{s(t.throw(a))}catch(f){i(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var q=n((Wu,P)=>{function Ce(r,e,t,u){var i=-1,o=r==null?0:r.length;for(u&&o&&(t=r[++i]);++i<o;)t=e(t,r[i],i,r);return t}P.exports=Ce});var O=n((Gu,A)=>{function we(r){return function(e){return r==null?void 0:r[e]}}A.exports=we});var M=n((zu,L)=>{var ve=O(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=ve(Re);L.exports=Se});var N=n((Vu,j)=>{var Pe=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Pe});var _=n((Hu,U)=>{var qe=N(),Ae=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||Ae||Function("return this")();U.exports=Oe});var b=n((Fu,E)=>{var Le=_(),Me=Le.Symbol;E.exports=Me});var k=n((Ju,D)=>{function je(r,e){for(var t=-1,u=r==null?0:r.length,i=Array(u);++t<u;)i[t]=e(r[t],t,r);return i}D.exports=je});var Z=n((Bu,I)=>{var Ne=Array.isArray;I.exports=Ne});var V=n((Yu,z)=>{var W=b(),G=Object.prototype,Ue=G.hasOwnProperty,_e=G.toString,m=W?W.toStringTag:void 0;function Ee(r){var e=Ue.call(r,m),t=r[m];try{r[m]=void 0;var u=!0}catch(o){}var i=_e.call(r);return u&&(e?r[m]=t:delete r[m]),i}z.exports=Ee});var F=n(($u,H)=>{var De=Object.prototype,ke=De.toString;function Ie(r){return ke.call(r)}H.exports=Ie});var $=n((Ku,Y)=>{var J=b(),Ze=V(),We=F(),Ge="[object Null]",ze="[object Undefined]",B=J?J.toStringTag:void 0;function Ve(r){return r==null?r===void 0?ze:Ge:B&&B in Object(r)?Ze(r):We(r)}Y.exports=Ve});var Q=n((Qu,K)=>{function He(r){return r!=null&&typeof r=="object"}K.exports=He});var rr=n((Xu,X)=>{var Fe=$(),Je=Q(),Be="[object Symbol]";function Ye(r){return typeof r=="symbol"||Je(r)&&Fe(r)==Be}X.exports=Ye});var ar=n((rn,ir)=>{var er=b(),$e=k(),Ke=Z(),Qe=rr(),Xe=1/0,tr=er?er.prototype:void 0,ur=tr?tr.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Ke(r))return $e(r,nr)+"";if(Qe(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-Xe?"-0":e}ir.exports=nr});var x=n((en,or)=>{var rt=ar();function et(r){return r==null?"":rt(r)}or.exports=et});var fr=n((tn,sr)=>{var tt=M(),ut=x(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=it+at+ot,ft="["+st+"]",dt=RegExp(ft,"g");function lt(r){return r=ut(r),r&&r.replace(nt,tt).replace(dt,"")}sr.exports=lt});var lr=n((un,dr)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(ct)||[]}dr.exports=mt});var mr=n((nn,cr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return pt.test(r)}cr.exports=gt});var jr=n((an,Mr)=>{var pr="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",yt=bt+xt+ht,gr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Tt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",hr=Tt+Ct+wt+vt,yr="['\u2019]",Tr="["+hr+"]",St="["+yt+"]",Cr="\\d+",Pt="["+gr+"]",wr="["+br+"]",vr="[^"+pr+hr+Cr+gr+br+xr+"]",qt="\\ud83c[\\udffb-\\udfff]",At="(?:"+St+"|"+qt+")",Ot="[^"+pr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+xr+"]",Lt="\\u200d",Pr="(?:"+wr+"|"+vr+")",Mt="(?:"+l+"|"+vr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Ar="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Or=At+"?",Lr="["+Rt+"]?",jt="(?:"+Lt+"(?:"+[Ot,Rr,Sr].join("|")+")"+Lr+Or+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Lr+Or+jt,Et="(?:"+[Pt,Rr,Sr].join("|")+")"+_t,Dt=RegExp([l+"?"+wr+"+"+qr+"(?="+[Tr,l,"$"].join("|")+")",Mt+"+"+Ar+"(?="+[Tr,l+Pr,"$"].join("|")+")",l+"?"+Pr+"+"+qr,l+"+"+Ar,Ut,Nt,Cr,Et].join("|"),"g");function kt(r){return r.match(Dt)||[]}Mr.exports=kt});var Ur=n((on,Nr)=>{var It=lr(),Zt=mr(),Wt=x(),Gt=jr();function zt(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?Zt(r)?Gt(r):It(r):r.match(e)||[]}Nr.exports=zt});var Er=n((sn,_r)=>{var Vt=q(),Ht=fr(),Ft=Ur(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function Yt(r){return function(e){return Vt(Ft(Ht(e).replace(Bt,"")),r,"")}}_r.exports=Yt});var kr=n((fn,Dr)=>{function $t(r,e,t){var u=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(i);++u<i;)o[u]=r[u+e];return o}Dr.exports=$t});var Zr=n((dn,Ir)=>{var Kt=kr();function Qt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Kt(r,e,t)}Ir.exports=Qt});var y=n((ln,Wr)=>{var Xt="\\ud800-\\udfff",ru="\\u0300-\\u036f",eu="\\ufe20-\\ufe2f",tu="\\u20d0-\\u20ff",uu=ru+eu+tu,nu="\\ufe0e\\ufe0f",iu="\\u200d",au=RegExp("["+iu+Xt+uu+nu+"]");function ou(r){return au.test(r)}Wr.exports=ou});var zr=n((cn,Gr)=>{function su(r){return r.split("")}Gr.exports=su});var Kr=n((mn,$r)=>{var Vr="\\ud800-\\udfff",fu="\\u0300-\\u036f",du="\\ufe20-\\ufe2f",lu="\\u20d0-\\u20ff",cu=fu+du+lu,mu="\\ufe0e\\ufe0f",pu="["+Vr+"]",T="["+cu+"]",C="\\ud83c[\\udffb-\\udfff]",gu="(?:"+T+"|"+C+")",Hr="[^"+Vr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",bu="\\u200d",Br=gu+"?",Yr="["+mu+"]?",xu="(?:"+bu+"(?:"+[Hr,Fr,Jr].join("|")+")"+Yr+Br+")*",hu=Yr+Br+xu,yu="(?:"+[Hr+T+"?",T,Fr,Jr,pu].join("|")+")",Tu=RegExp(C+"(?="+C+")|"+yu+hu,"g");function Cu(r){return r.match(Tu)||[]}$r.exports=Cu});var Xr=n((pn,Qr)=>{var wu=zr(),vu=y(),Ru=Kr();function Su(r){return vu(r)?Ru(r):wu(r)}Qr.exports=Su});var ee=n((gn,re)=>{var Pu=Zr(),qu=y(),Au=Xr(),Ou=x();function Lu(r){return function(e){e=Ou(e);var t=qu(e)?Au(e):void 0,u=t?t[0]:e.charAt(0),i=t?Pu(t,1).join(""):e.slice(1);return u[r]()+i}}re.exports=Lu});var ue=n((bn,te)=>{var Mu=ee(),ju=Mu("toUpperCase");te.exports=ju});var ie=n((xn,ne)=>{var Nu=Er(),Uu=ue(),_u=Nu(function(r,e,t){return r+(t?" ":"")+Uu(e)});ne.exports=_u});var ae=Te(ie());function Eu(r){return g(d({},r),{json:JSON.stringify(ku(r),null,2)})}var Du=`
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
    `,oe=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function ku(r){let{name:e,category:t,description:u,author:i,result:o,params:c,about:s,video:a}=r,{icon:f=oe}=r;return f==="glide"&&(f=Du),{name:e,category:t,description:u,author:i,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([fe,de])=>d({name:fe},de))}}var Iu={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:oe,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Iu),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){var u;return this.with({tests:[...(u=this.definition.tests)!=null?u:[],{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,u){return u===void 0&&(u=(0,ae.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return this.withParam(e,t,u).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,u=this.requiredParams,i=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[i[f]]=a}),!u.some(a=>s[a]===void 0))return e(s)}return Eu(g(d({},this.definition),{run:o}))}};function se(r){return new h({name:r})}var Tn=se("Clamp").withCategory("Number").withDescription("Clamps a number within inclusive lower and upper bounds.").withNumberResult().withRequiredNumberParam("number").withRequiredNumberParam("lower","Lower Bound").withRequiredNumberParam("upper","Upper Bound").withExample({number:-10,lower:-5,upper:5}).withTest({number:-10,lower:-5,upper:5},-5).withTest({number:10,lower:-5,upper:5},5).run(({number:r,lower:e,upper:t})=>Math.max(e,Math.min(r,t)));export{Tn as default};
//# sourceMappingURL=function.js.map
