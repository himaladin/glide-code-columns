(()=>{var pr=Object.create;var m=Object.defineProperty,xr=Object.defineProperties,br=Object.getOwnPropertyDescriptor,hr=Object.getOwnPropertyDescriptors,Tr=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,yr=Object.getPrototypeOf,P=Object.prototype.hasOwnProperty,wr=Object.prototype.propertyIsEnumerable;var q=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))P.call(r,t)&&q(e,t,r[t]);if(S)for(var t of S(r))wr.call(r,t)&&q(e,t,r[t]);return e},p=(e,r)=>xr(e,hr(r)),Cr=e=>m(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var vr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of Tr(r))!P.call(e,n)&&n!=="default"&&m(e,n,{get:()=>r[n],enumerable:!(t=br(r,n))||t.enumerable});return e},Rr=e=>vr(Cr(m(e!=null?pr(yr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var y=(e,r,t)=>new Promise((n,i)=>{var o=a=>{try{s(t.next(a))}catch(d){i(d)}},c=a=>{try{s(t.throw(a))}catch(d){i(d)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(e,r)).next())});var O=u(($n,A)=>{function Sr(e,r,t,n){var i=-1,o=e==null?0:e.length;for(n&&o&&(t=e[++i]);++i<o;)t=r(t,e[i],i,e);return t}A.exports=Sr});var j=u((Bn,E)=>{function Pr(e){return function(r){return e==null?void 0:e[r]}}E.exports=Pr});var M=u((Qn,L)=>{var qr=j(),Ar={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Or=qr(Ar);L.exports=Or});var N=u((Yn,U)=>{var Er=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Er});var I=u((Kn,D)=>{var jr=N(),Lr=typeof self=="object"&&self&&self.Object===Object&&self,Mr=jr||Lr||Function("return this")();D.exports=Mr});var x=u((Xn,_)=>{var Ur=I(),Nr=Ur.Symbol;_.exports=Nr});var G=u((ei,k)=>{function Dr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}k.exports=Dr});var Z=u((ri,H)=>{var Ir=Array.isArray;H.exports=Ir});var F=u((ti,z)=>{var V=x(),W=Object.prototype,_r=W.hasOwnProperty,kr=W.toString,g=V?V.toStringTag:void 0;function Gr(e){var r=_r.call(e,g),t=e[g];try{e[g]=void 0;var n=!0}catch(o){}var i=kr.call(e);return n&&(r?e[g]=t:delete e[g]),i}z.exports=Gr});var $=u((ni,J)=>{var Hr=Object.prototype,Zr=Hr.toString;function Vr(e){return Zr.call(e)}J.exports=Vr});var K=u((ii,Y)=>{var B=x(),Wr=F(),zr=$(),Fr="[object Null]",Jr="[object Undefined]",Q=B?B.toStringTag:void 0;function $r(e){return e==null?e===void 0?Jr:Fr:Q&&Q in Object(e)?Wr(e):zr(e)}Y.exports=$r});var ee=u((ui,X)=>{function Br(e){return e!=null&&typeof e=="object"}X.exports=Br});var te=u((oi,re)=>{var Qr=K(),Yr=ee(),Kr="[object Symbol]";function Xr(e){return typeof e=="symbol"||Yr(e)&&Qr(e)==Kr}re.exports=Xr});var se=u((ai,ae)=>{var ne=x(),et=G(),rt=Z(),tt=te(),nt=1/0,ie=ne?ne.prototype:void 0,ue=ie?ie.toString:void 0;function oe(e){if(typeof e=="string")return e;if(rt(e))return et(e,oe)+"";if(tt(e))return ue?ue.call(e):"";var r=e+"";return r=="0"&&1/e==-nt?"-0":r}ae.exports=oe});var b=u((si,de)=>{var it=se();function ut(e){return e==null?"":it(e)}de.exports=ut});var le=u((di,ce)=>{var ot=M(),at=b(),st=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,dt="\\u0300-\\u036f",ct="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",ft=dt+ct+lt,gt="["+ft+"]",mt=RegExp(gt,"g");function pt(e){return e=at(e),e&&e.replace(st,ot).replace(mt,"")}ce.exports=pt});var ge=u((ci,fe)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function bt(e){return e.match(xt)||[]}fe.exports=bt});var pe=u((li,me)=>{var ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Tt(e){return ht.test(e)}me.exports=Tt});var Ue=u((fi,Me)=>{var xe="\\ud800-\\udfff",yt="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",vt=yt+wt+Ct,be="\\u2700-\\u27bf",he="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Pt="\\u2000-\\u206f",qt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Te="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",ye=Rt+St+Pt+qt,we="['\u2019]",Ce="["+ye+"]",Ot="["+vt+"]",ve="\\d+",Et="["+be+"]",Re="["+he+"]",Se="[^"+xe+ye+ve+be+he+Te+"]",jt="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+Ot+"|"+jt+")",Mt="[^"+xe+"]",Pe="(?:\\ud83c[\\udde6-\\uddff]){2}",qe="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+Te+"]",Ut="\\u200d",Ae="(?:"+Re+"|"+Se+")",Nt="(?:"+f+"|"+Se+")",Oe="(?:"+we+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+we+"(?:D|LL|M|RE|S|T|VE))?",je=Lt+"?",Le="["+At+"]?",Dt="(?:"+Ut+"(?:"+[Mt,Pe,qe].join("|")+")"+Le+je+")*",It="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",_t="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Le+je+Dt,Gt="(?:"+[Et,Pe,qe].join("|")+")"+kt,Ht=RegExp([f+"?"+Re+"+"+Oe+"(?="+[Ce,f,"$"].join("|")+")",Nt+"+"+Ee+"(?="+[Ce,f+Ae,"$"].join("|")+")",f+"?"+Ae+"+"+Oe,f+"+"+Ee,_t,It,ve,Gt].join("|"),"g");function Zt(e){return e.match(Ht)||[]}Me.exports=Zt});var De=u((gi,Ne)=>{var Vt=ge(),Wt=pe(),zt=b(),Ft=Ue();function Jt(e,r,t){return e=zt(e),r=t?void 0:r,r===void 0?Wt(e)?Ft(e):Vt(e):e.match(r)||[]}Ne.exports=Jt});var _e=u((mi,Ie)=>{var $t=O(),Bt=le(),Qt=De(),Yt="['\u2019]",Kt=RegExp(Yt,"g");function Xt(e){return function(r){return $t(Qt(Bt(r).replace(Kt,"")),e,"")}}Ie.exports=Xt});var Ge=u((pi,ke)=>{function en(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),t=t>i?i:t,t<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var o=Array(i);++n<i;)o[n]=e[n+r];return o}ke.exports=en});var Ze=u((xi,He)=>{var rn=Ge();function tn(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:rn(e,r,t)}He.exports=tn});var w=u((bi,Ve)=>{var nn="\\ud800-\\udfff",un="\\u0300-\\u036f",on="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",sn=un+on+an,dn="\\ufe0e\\ufe0f",cn="\\u200d",ln=RegExp("["+cn+nn+sn+dn+"]");function fn(e){return ln.test(e)}Ve.exports=fn});var ze=u((hi,We)=>{function gn(e){return e.split("")}We.exports=gn});var Xe=u((Ti,Ke)=>{var Fe="\\ud800-\\udfff",mn="\\u0300-\\u036f",pn="\\ufe20-\\ufe2f",xn="\\u20d0-\\u20ff",bn=mn+pn+xn,hn="\\ufe0e\\ufe0f",Tn="["+Fe+"]",C="["+bn+"]",v="\\ud83c[\\udffb-\\udfff]",yn="(?:"+C+"|"+v+")",Je="[^"+Fe+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",Be="[\\ud800-\\udbff][\\udc00-\\udfff]",wn="\\u200d",Qe=yn+"?",Ye="["+hn+"]?",Cn="(?:"+wn+"(?:"+[Je,$e,Be].join("|")+")"+Ye+Qe+")*",vn=Ye+Qe+Cn,Rn="(?:"+[Je+C+"?",C,$e,Be,Tn].join("|")+")",Sn=RegExp(v+"(?="+v+")|"+Rn+vn,"g");function Pn(e){return e.match(Sn)||[]}Ke.exports=Pn});var rr=u((yi,er)=>{var qn=ze(),An=w(),On=Xe();function En(e){return An(e)?On(e):qn(e)}er.exports=En});var nr=u((wi,tr)=>{var jn=Ze(),Ln=w(),Mn=rr(),Un=b();function Nn(e){return function(r){r=Un(r);var t=Ln(r)?Mn(r):void 0,n=t?t[0]:r.charAt(0),i=t?jn(t,1).join(""):r.slice(1);return n[e]()+i}}tr.exports=Nn});var ur=u((Ci,ir)=>{var Dn=nr(),In=Dn("toUpperCase");ir.exports=In});var ar=u((vi,or)=>{var _n=_e(),kn=ur(),Gn=_n(function(e,r,t){return e+(t?" ":"")+kn(r)});or.exports=Gn});var sr=Rr(ar());function dr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(dr):e}function Hn(e,r){return y(this,null,function*(){var s;let{data:{key:t,params:n}}=e,i,o;try{i=yield r(...n)}catch(a){i=void 0;try{o=a.toString()}catch(d){o="Exception can't be stringified."}}let c={key:t};i!==void 0&&(i=dr(i),c.result={type:"string",value:i}),o!==void 0&&(c.error=o),((s=e.source)==null?void 0:s.postMessage).call(s,c,"*")})}function Zn(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Hn(r,e.run)),p(l({},e),{json:JSON.stringify(Wn(e),null,2)})}var Vn=`
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
    `,cr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Wn(e){let{name:r,category:t,description:n,author:i,result:o,params:c,about:s,video:a}=e,{icon:d=cr}=e;return d==="glide"&&(d=Vn),{name:r,category:t,description:n,author:i,result:o,about:s,icon:d,video:a,params:Object.entries(c).map(([gr,mr])=>l({name:gr},mr))}}var zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:cr,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},h=class{constructor(r={},t=[]){this.definition=l(l({},zn),r),this.requiredParams=[...t]}with(r,t=[]){return new h(l(l({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,n){return n===void 0&&(n=(0,sr.default)(t)),this.with({params:p(l({},this.definition.params),{[t]:{type:r,displayName:n}})})}withRequiredParam(r,t,n){return this.withParam(r,t,n).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}run(r){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},d)=>{s[i[d]]=a}),!n.some(a=>s[a]===void 0))return r(s)}return Zn(p(l({},this.definition),{run:o}))}};function T(e){return new h({name:e})}var R=["base64","url"];function lr(e){switch(e){case"base64":return{encode:btoa.bind(window),decode:atob.bind(window)};case"url":return{encode:encodeURIComponent,decode:decodeURIComponent}}}function Fn(e,r){var t,n;return(n=(t=lr(r))==null?void 0:t.encode)==null?void 0:n.call(t,e)}function fr(e,r){var t,n;return(n=(t=lr(r))==null?void 0:t.decode)==null?void 0:n.call(t,e)}var Pi=T("Encode Text").withCategory("Encoding").withDescription("Encode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${R.join(", ")})`).withStringResult().withTest({text:"Hello, world!"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"base64"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"url"},"Hello%2C%20world!").run(({text:e,encoding:r="base64"})=>Fn(e,r));var ji=T("Decode Text").withCategory("Encoding").withDescription("Decode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${R.join(", ")})`).withStringResult().withTest({text:"SGVsbG8sIHdvcmxkIQ=="},"Hello, world!").withTest({text:"SGVsbG8sIHdvcmxkIQ==",encoding:"base64"},"Hello, world!").withTest({text:"Hello%2C%20world!",encoding:"url"},"Hello, world!").run(({text:e,encoding:r="base64"})=>fr(e,r));})();
//# sourceMappingURL=index.js.map
