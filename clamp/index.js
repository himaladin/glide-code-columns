(()=>{var le=Object.create;var g=Object.defineProperty,ce=Object.defineProperties,me=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,be=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))P.call(e,t)&&q(r,t,e[t]);if(S)for(var t of S(e))xe.call(e,t)&&q(r,t,e[t]);return r},m=(r,e)=>ce(r,pe(e)),he=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Te=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let u of ge(e))!P.call(r,u)&&u!=="default"&&g(r,u,{get:()=>e[u],enumerable:!(t=me(e,u))||t.enumerable});return r},ye=r=>Te(he(g(r!=null?le(be(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var b=(r,e,t)=>new Promise((u,n)=>{var o=a=>{try{s(t.next(a))}catch(f){n(f)}},l=a=>{try{s(t.throw(a))}catch(f){n(f)}},s=a=>a.done?u(a.value):Promise.resolve(a.value).then(o,l);s((t=t.apply(r,e)).next())});var O=i((zu,A)=>{function Ce(r,e,t,u){var n=-1,o=r==null?0:r.length;for(u&&o&&(t=r[++n]);++n<o;)t=e(t,r[n],n,r);return t}A.exports=Ce});var j=i((Gu,L)=>{function we(r){return function(e){return r==null?void 0:r[e]}}L.exports=we});var N=i((Vu,M)=>{var ve=j(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=ve(Re);M.exports=Se});var _=i((Hu,U)=>{var Pe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Pe});var D=i((Fu,E)=>{var qe=_(),Ae=typeof self=="object"&&self&&self.Object===Object&&self,Oe=qe||Ae||Function("return this")();E.exports=Oe});var x=i((Ju,k)=>{var Le=D(),je=Le.Symbol;k.exports=je});var I=i((Bu,Z)=>{function Me(r,e){for(var t=-1,u=r==null?0:r.length,n=Array(u);++t<u;)n[t]=e(r[t],t,r);return n}Z.exports=Me});var z=i((Yu,W)=>{var Ne=Array.isArray;W.exports=Ne});var F=i(($u,H)=>{var G=x(),V=Object.prototype,Ue=V.hasOwnProperty,_e=V.toString,p=G?G.toStringTag:void 0;function Ee(r){var e=Ue.call(r,p),t=r[p];try{r[p]=void 0;var u=!0}catch(o){}var n=_e.call(r);return u&&(e?r[p]=t:delete r[p]),n}H.exports=Ee});var B=i((Ku,J)=>{var De=Object.prototype,ke=De.toString;function Ze(r){return ke.call(r)}J.exports=Ze});var Q=i((Qu,K)=>{var Y=x(),Ie=F(),We=B(),ze="[object Null]",Ge="[object Undefined]",$=Y?Y.toStringTag:void 0;function Ve(r){return r==null?r===void 0?Ge:ze:$&&$ in Object(r)?Ie(r):We(r)}K.exports=Ve});var rr=i((Xu,X)=>{function He(r){return r!=null&&typeof r=="object"}X.exports=He});var tr=i((rn,er)=>{var Fe=Q(),Je=rr(),Be="[object Symbol]";function Ye(r){return typeof r=="symbol"||Je(r)&&Fe(r)==Be}er.exports=Ye});var sr=i((en,ar)=>{var ur=x(),$e=I(),Ke=z(),Qe=tr(),Xe=1/0,nr=ur?ur.prototype:void 0,ir=nr?nr.toString:void 0;function or(r){if(typeof r=="string")return r;if(Ke(r))return $e(r,or)+"";if(Qe(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-Xe?"-0":e}ar.exports=or});var h=i((tn,fr)=>{var rt=sr();function et(r){return r==null?"":rt(r)}fr.exports=et});var lr=i((un,dr)=>{var tt=N(),ut=h(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,it="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",at="\\u20d0-\\u20ff",st=it+ot+at,ft="["+st+"]",dt=RegExp(ft,"g");function lt(r){return r=ut(r),r&&r.replace(nt,tt).replace(dt,"")}dr.exports=lt});var mr=i((nn,cr)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(ct)||[]}cr.exports=mt});var gr=i((on,pr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return pt.test(r)}pr.exports=gt});var Ur=i((an,Nr)=>{var br="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Tt=bt+xt+ht,xr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",yr=yt+Ct+wt+vt,Cr="['\u2019]",wr="["+yr+"]",St="["+Tt+"]",vr="\\d+",Pt="["+xr+"]",Rr="["+hr+"]",Sr="[^"+br+yr+vr+xr+hr+Tr+"]",qt="\\ud83c[\\udffb-\\udfff]",At="(?:"+St+"|"+qt+")",Ot="[^"+br+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+Tr+"]",Lt="\\u200d",Ar="(?:"+Rr+"|"+Sr+")",jt="(?:"+c+"|"+Sr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=At+"?",Mr="["+Rt+"]?",Mt="(?:"+Lt+"(?:"+[Ot,Pr,qr].join("|")+")"+Mr+jr+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Mr+jr+Mt,Et="(?:"+[Pt,Pr,qr].join("|")+")"+_t,Dt=RegExp([c+"?"+Rr+"+"+Or+"(?="+[wr,c,"$"].join("|")+")",jt+"+"+Lr+"(?="+[wr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+Or,c+"+"+Lr,Ut,Nt,vr,Et].join("|"),"g");function kt(r){return r.match(Dt)||[]}Nr.exports=kt});var Er=i((sn,_r)=>{var Zt=mr(),It=gr(),Wt=h(),zt=Ur();function Gt(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?It(r)?zt(r):Zt(r):r.match(e)||[]}_r.exports=Gt});var kr=i((fn,Dr)=>{var Vt=O(),Ht=lr(),Ft=Er(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function Yt(r){return function(e){return Vt(Ft(Ht(e).replace(Bt,"")),r,"")}}Dr.exports=Yt});var Ir=i((dn,Zr)=>{function $t(r,e,t){var u=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(n);++u<n;)o[u]=r[u+e];return o}Zr.exports=$t});var zr=i((ln,Wr)=>{var Kt=Ir();function Qt(r,e,t){var u=r.length;return t=t===void 0?u:t,!e&&t>=u?r:Kt(r,e,t)}Wr.exports=Qt});var C=i((cn,Gr)=>{var Xt="\\ud800-\\udfff",ru="\\u0300-\\u036f",eu="\\ufe20-\\ufe2f",tu="\\u20d0-\\u20ff",uu=ru+eu+tu,nu="\\ufe0e\\ufe0f",iu="\\u200d",ou=RegExp("["+iu+Xt+uu+nu+"]");function au(r){return ou.test(r)}Gr.exports=au});var Hr=i((mn,Vr)=>{function su(r){return r.split("")}Vr.exports=su});var Xr=i((pn,Qr)=>{var Fr="\\ud800-\\udfff",fu="\\u0300-\\u036f",du="\\ufe20-\\ufe2f",lu="\\u20d0-\\u20ff",cu=fu+du+lu,mu="\\ufe0e\\ufe0f",pu="["+Fr+"]",w="["+cu+"]",v="\\ud83c[\\udffb-\\udfff]",gu="(?:"+w+"|"+v+")",Jr="[^"+Fr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",bu="\\u200d",$r=gu+"?",Kr="["+mu+"]?",xu="(?:"+bu+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",hu=Kr+$r+xu,Tu="(?:"+[Jr+w+"?",w,Br,Yr,pu].join("|")+")",yu=RegExp(v+"(?="+v+")|"+Tu+hu,"g");function Cu(r){return r.match(yu)||[]}Qr.exports=Cu});var ee=i((gn,re)=>{var wu=Hr(),vu=C(),Ru=Xr();function Su(r){return vu(r)?Ru(r):wu(r)}re.exports=Su});var ue=i((bn,te)=>{var Pu=zr(),qu=C(),Au=ee(),Ou=h();function Lu(r){return function(e){e=Ou(e);var t=qu(e)?Au(e):void 0,u=t?t[0]:e.charAt(0),n=t?Pu(t,1).join(""):e.slice(1);return u[r]()+n}}te.exports=Lu});var ie=i((xn,ne)=>{var ju=ue(),Mu=ju("toUpperCase");ne.exports=Mu});var ae=i((hn,oe)=>{var Nu=kr(),Uu=ie(),_u=Nu(function(r,e,t){return r+(t?" ":"")+Uu(e)});oe.exports=_u});var R=ye(ae());function se(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(se):r}function Eu(r,e){return b(this,null,function*(){var s;let{data:{key:t,params:u}}=r,n,o;try{n=yield e(...u)}catch(a){n=void 0;try{o=a.toString()}catch(f){o="Exception can't be stringified."}}let l={key:t};n!==void 0&&(n=se(n),l.result={type:"string",value:n}),o!==void 0&&(l.error=o),((s=r.source)==null?void 0:s.postMessage).call(s,l,"*")})}function Du(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Eu(e,r.run)),m(d({},r),{json:JSON.stringify(Zu(r),null,2)})}var ku=`
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
</svg>`;function Zu(r){let{name:e,description:t,author:u,result:n,params:o,about:l,video:s}=r,{icon:a=fe}=r;return a==="glide"&&(a=ku),{name:e,description:t,author:u,result:n,about:l,icon:a,video:s,params:Object.entries(o).map(([f,y])=>d({name:f},y))}}var Iu={name:"Glide Column",description:"No Description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,run(){return b(this,null,function*(){})}},T=class{constructor(e={},t=[]){this.definition=d(d({},Iu),e),this.requiredParams=[...t]}with(e,t=[]){return new T(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,u){return u===void 0&&(u=(0,R.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:u}})})}withRequiredParam(e,t,u){return u===void 0&&(u=(0,R.default)(t)),this.with({params:m(d({},this.definition.params),{[t]:{type:e,displayName:u}})},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,u=this.requiredParams,n=Object.keys(t);function o(...l){return b(this,null,function*(){let s={};if(l.forEach(({value:f},y)=>{s[n[y]]=f}),u.some(f=>s[f]===void 0))return;let a=e(s);return Promise.resolve(a)})}return Du(m(d({},this.definition),{run:o}))}};function de(r){return new T({name:r})}var Cn=de("Clamp").withDescription("Clamps a number within inclusive lower and upper bounds.").withNumberResult().withRequiredNumberParam("number").withRequiredNumberParam("lower","Lower Bound").withRequiredNumberParam("upper","Upper Bound").withExample({number:-10,lower:-5,upper:5}).run(({number:r,lower:e,upper:t})=>Math.max(e,Math.min(r,t)));})();
//# sourceMappingURL=index.js.map