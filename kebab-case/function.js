var ge=Object.create;var p=Object.defineProperty,be=Object.defineProperties,xe=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,Te=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,ye=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,f=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))Ce.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>be(r,he(e)),we=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ve=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of Te(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=xe(e,i))||t.enumerable});return r},P=r=>ve(we(p(r!=null?ge(ye(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var A=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(d){u(d)}},c=a=>{try{s(t.throw(a))}catch(d){u(d)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var O=n((Fi,q)=>{function Re(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}q.exports=Re});var j=n((Ji,L)=>{function Se(r){return function(e){return r==null?void 0:r[e]}}L.exports=Se});var N=n((Bi,M)=>{var Pe=j(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qe=Pe(Ae);M.exports=qe});var _=n((Ki,U)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Oe});var E=n((Yi,D)=>{var Le=_(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();D.exports=Me});var b=n(($i,k)=>{var Ne=E(),Ue=Ne.Symbol;k.exports=Ue});var Z=n((Qi,I)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}I.exports=_e});var G=n((Xi,W)=>{var De=Array.isArray;W.exports=De});var F=n((rn,H)=>{var z=b(),V=Object.prototype,Ee=V.hasOwnProperty,ke=V.toString,m=z?z.toStringTag:void 0;function Ie(r){var e=Ee.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var u=ke.call(r);return i&&(e?r[m]=t:delete r[m]),u}H.exports=Ie});var B=n((en,J)=>{var Ze=Object.prototype,We=Ze.toString;function Ge(r){return We.call(r)}J.exports=Ge});var Q=n((tn,$)=>{var K=b(),ze=F(),Ve=B(),He="[object Null]",Fe="[object Undefined]",Y=K?K.toStringTag:void 0;function Je(r){return r==null?r===void 0?Fe:He:Y&&Y in Object(r)?ze(r):Ve(r)}$.exports=Je});var rr=n((nn,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=n((un,er)=>{var Ke=Q(),Ye=rr(),$e="[object Symbol]";function Qe(r){return typeof r=="symbol"||Ye(r)&&Ke(r)==$e}er.exports=Qe});var sr=n((an,or)=>{var ir=b(),Xe=Z(),rt=G(),et=tr(),tt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=ar});var x=n((on,dr)=>{var it=sr();function nt(r){return r==null?"":it(r)}dr.exports=nt});var lr=n((sn,fr)=>{var ut=N(),at=x(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",ft="\\u20d0-\\u20ff",lt=st+dt+ft,ct="["+lt+"]",mt=RegExp(ct,"g");function pt(r){return r=at(r),r&&r.replace(ot,ut).replace(mt,"")}fr.exports=pt});var mr=n((dn,cr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(r){return r.match(gt)||[]}cr.exports=bt});var gr=n((fn,pr)=>{var xt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return xt.test(r)}pr.exports=ht});var Ur=n((ln,Nr)=>{var br="\\ud800-\\udfff",Tt="\\u0300-\\u036f",yt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",wt=Tt+yt+Ct,xr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Rt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",St="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",yr=vt+Rt+St+Pt,Cr="['\u2019]",wr="["+yr+"]",qt="["+wt+"]",vr="\\d+",Ot="["+xr+"]",Rr="["+hr+"]",Sr="[^"+br+yr+vr+xr+hr+Tr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+qt+"|"+Lt+")",Mt="[^"+br+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",Ar="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+Tr+"]",Nt="\\u200d",qr="(?:"+Rr+"|"+Sr+")",Ut="(?:"+l+"|"+Sr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Mr="["+At+"]?",_t="(?:"+Nt+"(?:"+[Mt,Pr,Ar].join("|")+")"+Mr+jr+")*",Dt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Et="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Mr+jr+_t,It="(?:"+[Ot,Pr,Ar].join("|")+")"+kt,Zt=RegExp([l+"?"+Rr+"+"+Or+"(?="+[wr,l,"$"].join("|")+")",Ut+"+"+Lr+"(?="+[wr,l+qr,"$"].join("|")+")",l+"?"+qr+"+"+Or,l+"+"+Lr,Et,Dt,vr,It].join("|"),"g");function Wt(r){return r.match(Zt)||[]}Nr.exports=Wt});var Dr=n((cn,_r)=>{var Gt=mr(),zt=gr(),Vt=x(),Ht=Ur();function Ft(r,e,t){return r=Vt(r),e=t?void 0:e,e===void 0?zt(r)?Ht(r):Gt(r):r.match(e)||[]}_r.exports=Ft});var T=n((mn,Er)=>{var Jt=O(),Bt=lr(),Kt=Dr(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Qt(r){return function(e){return Jt(Kt(Bt(e).replace($t,"")),r,"")}}Er.exports=Qt});var Ir=n((pn,kr)=>{function Xt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}kr.exports=Xt});var Wr=n((gn,Zr)=>{var ri=Ir();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}Zr.exports=ei});var y=n((bn,Gr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,oi="\\ufe0e\\ufe0f",si="\\u200d",di=RegExp("["+si+ti+ai+oi+"]");function fi(r){return di.test(r)}Gr.exports=fi});var Vr=n((xn,zr)=>{function li(r){return r.split("")}zr.exports=li});var Qr=n((hn,$r)=>{var Hr="\\ud800-\\udfff",ci="\\u0300-\\u036f",mi="\\ufe20-\\ufe2f",pi="\\u20d0-\\u20ff",gi=ci+mi+pi,bi="\\ufe0e\\ufe0f",xi="["+Hr+"]",C="["+gi+"]",w="\\ud83c[\\udffb-\\udfff]",hi="(?:"+C+"|"+w+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",Ti="\\u200d",Kr=hi+"?",Yr="["+bi+"]?",yi="(?:"+Ti+"(?:"+[Fr,Jr,Br].join("|")+")"+Yr+Kr+")*",Ci=Yr+Kr+yi,wi="(?:"+[Fr+C+"?",C,Jr,Br,xi].join("|")+")",vi=RegExp(w+"(?="+w+")|"+wi+Ci,"g");function Ri(r){return r.match(vi)||[]}$r.exports=Ri});var re=n((Tn,Xr)=>{var Si=Vr(),Pi=y(),Ai=Qr();function qi(r){return Pi(r)?Ai(r):Si(r)}Xr.exports=qi});var te=n((yn,ee)=>{var Oi=Wr(),Li=y(),ji=re(),Mi=x();function Ni(r){return function(e){e=Mi(e);var t=Li(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),u=t?Oi(t,1).join(""):e.slice(1);return i[r]()+u}}ee.exports=Ni});var ne=n((Cn,ie)=>{var Ui=te(),_i=Ui("toUpperCase");ie.exports=_i});var ae=n((wn,ue)=>{var Di=T(),Ei=ne(),ki=Di(function(r,e,t){return r+(t?" ":"")+Ei(e)});ue.exports=ki});var le=n((Rn,fe)=>{var zi=T(),Vi=zi(function(r,e,t){return r+(t?"-":"")+e.toLowerCase()});fe.exports=Vi});var oe=P(ae());function Ii(r){return g(f({},r),{json:JSON.stringify(Wi(r),null,2)})}var Zi=`
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
</svg>`;function Wi(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:d=se}=r;return d==="glide"&&(d=Zi),{name:e,category:t,description:i,author:u,result:o,about:s,icon:d,video:a,params:Object.entries(c).map(([me,pe])=>f({name:me},pe))}}var Gi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return A(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=f(f({},Gi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(f(f({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:g(f({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},d)=>{s[u[d]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return Ii(g(f({},this.definition),{run:o}))}};function de(r){return new h({name:r})}var ce=P(le()),Pn=de("Kebab Case").withCategory("Text").withDescription('"hello world" \u2192 "hello-world"').withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withTest({text:"helloWorld"},"hello-world").run(({text:r})=>r===void 0?void 0:(0,ce.default)(r));export{Pn as default};
//# sourceMappingURL=function.js.map
