var me=Object.create;var p=Object.defineProperty,pe=Object.defineProperties,ge=Object.getOwnPropertyDescriptor,xe=Object.getOwnPropertyDescriptors,be=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,he=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&R(r,t,e[t]);if(w)for(var t of w(e))ye.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>pe(r,xe(e)),Te=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ce=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of be(e))!S.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=ge(e,n))||t.enumerable});return r},P=r=>Ce(Te(p(r!=null?me(he(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var A=(r,e,t)=>new Promise((n,i)=>{var o=a=>{try{s(t.next(a))}catch(f){i(f)}},c=a=>{try{s(t.throw(a))}catch(f){i(f)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var O=u((Gn,q)=>{function ve(r,e,t,n){var i=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++i]);++i<o;)t=e(t,r[i],i,r);return t}q.exports=ve});var j=u((Vn,L)=>{function we(r){return function(e){return r==null?void 0:r[e]}}L.exports=we});var N=u((Hn,M)=>{var Se=j(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pe=Se(Re);M.exports=Pe});var _=u((Fn,U)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Ae});var D=u((Jn,E)=>{var qe=_(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();E.exports=Le});var x=u((Bn,k)=>{var je=D(),Me=je.Symbol;k.exports=Me});var I=u((Yn,Z)=>{function Ne(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}Z.exports=Ne});var z=u(($n,W)=>{var Ue=Array.isArray;W.exports=Ue});var F=u((Kn,H)=>{var G=x(),V=Object.prototype,_e=V.hasOwnProperty,Ee=V.toString,m=G?G.toStringTag:void 0;function De(r){var e=_e.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(o){}var i=Ee.call(r);return n&&(e?r[m]=t:delete r[m]),i}H.exports=De});var B=u((Qn,J)=>{var ke=Object.prototype,Ze=ke.toString;function Ie(r){return Ze.call(r)}J.exports=Ie});var Q=u((Xn,K)=>{var Y=x(),We=F(),ze=B(),Ge="[object Null]",Ve="[object Undefined]",$=Y?Y.toStringTag:void 0;function He(r){return r==null?r===void 0?Ve:Ge:$&&$ in Object(r)?We(r):ze(r)}K.exports=He});var rr=u((ru,X)=>{function Fe(r){return r!=null&&typeof r=="object"}X.exports=Fe});var tr=u((eu,er)=>{var Je=Q(),Be=rr(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}er.exports=$e});var sr=u((tu,or)=>{var nr=x(),Ke=I(),Qe=z(),Xe=tr(),rt=1/0,ur=nr?nr.prototype:void 0,ir=ur?ur.toString:void 0;function ar(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,ar)+"";if(Xe(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}or.exports=ar});var b=u((nu,fr)=>{var et=sr();function tt(r){return r==null?"":et(r)}fr.exports=tt});var y=u((uu,dr)=>{var nt=N(),ut=b(),it=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ft=at+ot+st,dt="["+ft+"]",lt=RegExp(dt,"g");function ct(r){return r=ut(r),r&&r.replace(it,nt).replace(lt,"")}dr.exports=ct});var cr=u((iu,lr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}lr.exports=pt});var pr=u((au,mr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return gt.test(r)}mr.exports=xt});var Nr=u((ou,Mr)=>{var gr="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Tt=bt+ht+yt,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",vt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",yr=Ct+vt+wt+St,Tr="['\u2019]",Cr="["+yr+"]",Pt="["+Tt+"]",vr="\\d+",At="["+xr+"]",wr="["+br+"]",Sr="[^"+gr+yr+vr+xr+br+hr+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",Lt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+hr+"]",jt="\\u200d",Ar="(?:"+wr+"|"+Sr+")",Mt="(?:"+l+"|"+Sr+")",qr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Ot+"?",jr="["+Rt+"]?",Nt="(?:"+jt+"(?:"+[Lt,Rr,Pr].join("|")+")"+jr+Lr+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=jr+Lr+Nt,Dt="(?:"+[At,Rr,Pr].join("|")+")"+Et,kt=RegExp([l+"?"+wr+"+"+qr+"(?="+[Cr,l,"$"].join("|")+")",Mt+"+"+Or+"(?="+[Cr,l+Ar,"$"].join("|")+")",l+"?"+Ar+"+"+qr,l+"+"+Or,_t,Ut,vr,Dt].join("|"),"g");function Zt(r){return r.match(kt)||[]}Mr.exports=Zt});var _r=u((su,Ur)=>{var It=cr(),Wt=pr(),zt=b(),Gt=Nr();function Vt(r,e,t){return r=zt(r),e=t?void 0:e,e===void 0?Wt(r)?Gt(r):It(r):r.match(e)||[]}Ur.exports=Vt});var Dr=u((fu,Er)=>{var Ht=O(),Ft=y(),Jt=_r(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Ht(Jt(Ft(e).replace(Yt,"")),r,"")}}Er.exports=$t});var Zr=u((du,kr)=>{function Kt(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=r[n+e];return o}kr.exports=Kt});var Wr=u((lu,Ir)=>{var Qt=Zr();function Xt(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Qt(r,e,t)}Ir.exports=Xt});var T=u((cu,zr)=>{var rn="\\ud800-\\udfff",en="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",un=en+tn+nn,an="\\ufe0e\\ufe0f",on="\\u200d",sn=RegExp("["+on+rn+un+an+"]");function fn(r){return sn.test(r)}zr.exports=fn});var Vr=u((mu,Gr)=>{function dn(r){return r.split("")}Gr.exports=dn});var Qr=u((pu,Kr)=>{var Hr="\\ud800-\\udfff",ln="\\u0300-\\u036f",cn="\\ufe20-\\ufe2f",mn="\\u20d0-\\u20ff",pn=ln+cn+mn,gn="\\ufe0e\\ufe0f",xn="["+Hr+"]",C="["+pn+"]",v="\\ud83c[\\udffb-\\udfff]",bn="(?:"+C+"|"+v+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",hn="\\u200d",Yr=bn+"?",$r="["+gn+"]?",yn="(?:"+hn+"(?:"+[Fr,Jr,Br].join("|")+")"+$r+Yr+")*",Tn=$r+Yr+yn,Cn="(?:"+[Fr+C+"?",C,Jr,Br,xn].join("|")+")",vn=RegExp(v+"(?="+v+")|"+Cn+Tn,"g");function wn(r){return r.match(vn)||[]}Kr.exports=wn});var re=u((gu,Xr)=>{var Sn=Vr(),Rn=T(),Pn=Qr();function An(r){return Rn(r)?Pn(r):Sn(r)}Xr.exports=An});var te=u((xu,ee)=>{var qn=Wr(),On=T(),Ln=re(),jn=b();function Mn(r){return function(e){e=jn(e);var t=On(e)?Ln(e):void 0,n=t?t[0]:e.charAt(0),i=t?qn(t,1).join(""):e.slice(1);return n[r]()+i}}ee.exports=Mn});var ue=u((bu,ne)=>{var Nn=te(),Un=Nn("toUpperCase");ne.exports=Un});var ae=u((hu,ie)=>{var _n=Dr(),En=ue(),Dn=_n(function(r,e,t){return r+(t?" ":"")+En(e)});ie.exports=Dn});var oe=P(ae());function kn(r){return g(d({},r),{json:JSON.stringify(In(r),null,2)})}var Zn=`
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
    `,se=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function In(r){let{name:e,category:t,description:n,author:i,result:o,params:c,about:s,video:a}=r,{icon:f=se}=r;return f==="glide"&&(f=Zn),{name:e,category:t,description:n,author:i,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([le,ce])=>d({name:le},ce))}}var Wn={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,run(){return A(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Wn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,oe.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[i[f]]=a}),!n.some(a=>s[a]===void 0))return e(s)}return kn(g(d({},this.definition),{run:o}))}};function fe(r,e){return new h({name:r,category:e})}var de=P(y()),Cu=fe("Deburr Text","Text").withDescription("Deburrs string by converting Latin-1 Supplement and Latin Extended-A letters to basic Latin letters and removing combining diacritical marks.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"d\xE9j\xE0 vu"}).run(({text:r})=>r===void 0?void 0:(0,de.default)(r));export{Cu as default};
//# sourceMappingURL=function.js.map
