(()=>{var ce=Object.create;var p=Object.defineProperty,me=Object.defineProperties,pe=Object.getOwnPropertyDescriptor,ge=Object.getOwnPropertyDescriptors,xe=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,be=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,he=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))he.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>me(r,ge(e)),Te=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var ye=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of xe(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=pe(e,i))||t.enumerable});return r},Ce=r=>ye(Te(p(r!=null?ce(be(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var T=(r,e,t)=>new Promise((i,n)=>{var a=o=>{try{s(t.next(o))}catch(f){n(f)}},d=o=>{try{s(t.throw(o))}catch(f){n(f)}},s=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,d);s((t=t.apply(r,e)).next())});var A=u((zi,P)=>{function we(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}P.exports=we});var O=u((Vi,q)=>{function ve(r){return function(e){return r==null?void 0:r[e]}}q.exports=ve});var j=u((Hi,L)=>{var Re=O(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pe=Re(Se);L.exports=Pe});var N=u((Fi,M)=>{var Ae=typeof global=="object"&&global&&global.Object===Object&&global;M.exports=Ae});var D=u((Ji,U)=>{var qe=N(),Oe=typeof self=="object"&&self&&self.Object===Object&&self,Le=qe||Oe||Function("return this")();U.exports=Le});var x=u((Bi,_)=>{var je=D(),Me=je.Symbol;_.exports=Me});var k=u((Yi,E)=>{function Ne(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}E.exports=Ne});var Z=u(($i,I)=>{var Ue=Array.isArray;I.exports=Ue});var V=u((Ki,z)=>{var W=x(),G=Object.prototype,De=G.hasOwnProperty,_e=G.toString,m=W?W.toStringTag:void 0;function Ee(r){var e=De.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=_e.call(r);return i&&(e?r[m]=t:delete r[m]),n}z.exports=Ee});var F=u((Qi,H)=>{var ke=Object.prototype,Ie=ke.toString;function Ze(r){return Ie.call(r)}H.exports=Ze});var $=u((Xi,Y)=>{var J=x(),We=V(),Ge=F(),ze="[object Null]",Ve="[object Undefined]",B=J?J.toStringTag:void 0;function He(r){return r==null?r===void 0?Ve:ze:B&&B in Object(r)?We(r):Ge(r)}Y.exports=He});var Q=u((rn,K)=>{function Fe(r){return r!=null&&typeof r=="object"}K.exports=Fe});var rr=u((en,X)=>{var Je=$(),Be=Q(),Ye="[object Symbol]";function $e(r){return typeof r=="symbol"||Be(r)&&Je(r)==Ye}X.exports=$e});var ar=u((tn,ur)=>{var er=x(),Ke=k(),Qe=Z(),Xe=rr(),rt=1/0,tr=er?er.prototype:void 0,ir=tr?tr.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Qe(r))return Ke(r,nr)+"";if(Xe(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-rt?"-0":e}ur.exports=nr});var b=u((nn,or)=>{var et=ar();function tt(r){return r==null?"":et(r)}or.exports=tt});var fr=u((un,sr)=>{var it=j(),nt=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,at="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",ft=at+ot+st,dt="["+ft+"]",lt=RegExp(dt,"g");function ct(r){return r=nt(r),r&&r.replace(ut,it).replace(lt,"")}sr.exports=ct});var lr=u((an,dr)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(r){return r.match(mt)||[]}dr.exports=pt});var mr=u((on,cr)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(r){return gt.test(r)}cr.exports=xt});var Mr=u((sn,jr)=>{var pr="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=bt+ht+Tt,gr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",hr=Ct+wt+vt+Rt,Tr="['\u2019]",yr="["+hr+"]",Pt="["+yt+"]",Cr="\\d+",At="["+gr+"]",wr="["+xr+"]",vr="[^"+pr+hr+Cr+gr+xr+br+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",Lt="[^"+pr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+br+"]",jt="\\u200d",Pr="(?:"+wr+"|"+vr+")",Mt="(?:"+c+"|"+vr+")",Ar="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",qr="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Or=Ot+"?",Lr="["+St+"]?",Nt="(?:"+jt+"(?:"+[Lt,Rr,Sr].join("|")+")"+Lr+Or+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Lr+Or+Nt,Et="(?:"+[At,Rr,Sr].join("|")+")"+_t,kt=RegExp([c+"?"+wr+"+"+Ar+"(?="+[yr,c,"$"].join("|")+")",Mt+"+"+qr+"(?="+[yr,c+Pr,"$"].join("|")+")",c+"?"+Pr+"+"+Ar,c+"+"+qr,Dt,Ut,Cr,Et].join("|"),"g");function It(r){return r.match(kt)||[]}jr.exports=It});var Ur=u((fn,Nr)=>{var Zt=lr(),Wt=mr(),Gt=b(),zt=Mr();function Vt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Wt(r)?zt(r):Zt(r):r.match(e)||[]}Nr.exports=Vt});var _r=u((dn,Dr)=>{var Ht=A(),Ft=fr(),Jt=Ur(),Bt="['\u2019]",Yt=RegExp(Bt,"g");function $t(r){return function(e){return Ht(Jt(Ft(e).replace(Yt,"")),r,"")}}Dr.exports=$t});var kr=u((ln,Er)=>{function Kt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Er.exports=Kt});var Zr=u((cn,Ir)=>{var Qt=kr();function Xt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Qt(r,e,t)}Ir.exports=Xt});var y=u((mn,Wr)=>{var ri="\\ud800-\\udfff",ei="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ei+ti+ii,ui="\\ufe0e\\ufe0f",ai="\\u200d",oi=RegExp("["+ai+ri+ni+ui+"]");function si(r){return oi.test(r)}Wr.exports=si});var zr=u((pn,Gr)=>{function fi(r){return r.split("")}Gr.exports=fi});var Kr=u((gn,$r)=>{var Vr="\\ud800-\\udfff",di="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",mi=di+li+ci,pi="\\ufe0e\\ufe0f",gi="["+Vr+"]",C="["+mi+"]",w="\\ud83c[\\udffb-\\udfff]",xi="(?:"+C+"|"+w+")",Hr="[^"+Vr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Br=xi+"?",Yr="["+pi+"]?",hi="(?:"+bi+"(?:"+[Hr,Fr,Jr].join("|")+")"+Yr+Br+")*",Ti=Yr+Br+hi,yi="(?:"+[Hr+C+"?",C,Fr,Jr,gi].join("|")+")",Ci=RegExp(w+"(?="+w+")|"+yi+Ti,"g");function wi(r){return r.match(Ci)||[]}$r.exports=wi});var Xr=u((xn,Qr)=>{var vi=zr(),Ri=y(),Si=Kr();function Pi(r){return Ri(r)?Si(r):vi(r)}Qr.exports=Pi});var ee=u((bn,re)=>{var Ai=Zr(),qi=y(),Oi=Xr(),Li=b();function ji(r){return function(e){e=Li(e);var t=qi(e)?Oi(e):void 0,i=t?t[0]:e.charAt(0),n=t?Ai(t,1).join(""):e.slice(1);return i[r]()+n}}re.exports=ji});var ie=u((hn,te)=>{var Mi=ee(),Ni=Mi("toUpperCase");te.exports=Ni});var ue=u((Tn,ne)=>{var Ui=_r(),Di=ie(),_i=Ui(function(r,e,t){return r+(t?" ":"")+Di(e)});ne.exports=_i});var ae=Ce(ue());function oe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(oe):r}function Ei(r,e){return T(this,null,function*(){var s;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(o){n=void 0;try{a=o.toString()}catch(f){a="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=oe(n),d.result={type:"string",value:n}),a!==void 0&&(d.error=a),((s=r.source)==null?void 0:s.postMessage).call(s,d,"*")})}function ki(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ei(e,r.run)),g(l({},r),{json:JSON.stringify(Zi(r),null,2)})}var Ii=`
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
</svg>`;function Zi(r){let{name:e,category:t,description:i,author:n,result:a,params:d,about:s,video:o}=r,{icon:f=se}=r;return f==="glide"&&(f=Ii),{name:e,category:t,description:i,author:n,result:a,about:s,icon:f,video:o,params:Object.entries(d).map(([de,le])=>l({name:de},le))}}var Wi={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,tests:[],run(){return T(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[],example:n=e}=this.definition;return this.with({example:n,tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,ae.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...d){let s={};if(d.forEach(({value:o},f)=>{s[n[f]]=o}),!i.some(o=>s[o]===void 0))return e(s)}return ki(g(l({},this.definition),{run:a}))}};function fe(r){return new h({name:r})}var wn=fe("Trim Whitespace").withCategory("Text").withDescription("Remove whitespace around text.").withStringResult().withStringParam("text").withExample({text:" hello "}).run(({text:r})=>r==null?void 0:r.trim());})();
//# sourceMappingURL=index.js.map
