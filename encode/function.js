var lr=Object.create;var m=Object.defineProperty,gr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,xr=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,c=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&R(e,t,r[t]);if(C)for(var t of C(r))hr.call(r,t)&&R(e,t,r[t]);return e},p=(e,r)=>gr(e,pr(r)),Tr=e=>m(e,"__esModule",{value:!0});var i=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var yr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of xr(r))!v.call(e,n)&&n!=="default"&&m(e,n,{get:()=>r[n],enumerable:!(t=mr(r,n))||t.enumerable});return e},wr=e=>yr(Tr(m(e!=null?lr(br(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var S=(e,r,t)=>new Promise((n,u)=>{var a=o=>{try{s(t.next(o))}catch(d){u(d)}},l=o=>{try{s(t.throw(o))}catch(d){u(d)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(e,r)).next())});var A=i((zn,P)=>{function Cr(e,r,t,n){var u=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}P.exports=Cr});var O=i((Fn,q)=>{function vr(e){return function(r){return e==null?void 0:e[r]}}q.exports=vr});var j=i((Jn,L)=>{var Rr=O(),Sr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pr=Rr(Sr);L.exports=Pr});var M=i((Bn,E)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;E.exports=Ar});var N=i(($n,U)=>{var qr=M(),Or=typeof self=="object"&&self&&self.Object===Object&&self,Lr=qr||Or||Function("return this")();U.exports=Lr});var x=i((Yn,D)=>{var jr=N(),Er=jr.Symbol;D.exports=Er});var I=i((Kn,_)=>{function Mr(e,r){for(var t=-1,n=e==null?0:e.length,u=Array(n);++t<n;)u[t]=r(e[t],t,e);return u}_.exports=Mr});var G=i((Qn,k)=>{var Ur=Array.isArray;k.exports=Ur});var V=i((Xn,W)=>{var Z=x(),H=Object.prototype,Nr=H.hasOwnProperty,Dr=H.toString,g=Z?Z.toStringTag:void 0;function _r(e){var r=Nr.call(e,g),t=e[g];try{e[g]=void 0;var n=!0}catch(a){}var u=Dr.call(e);return n&&(r?e[g]=t:delete e[g]),u}W.exports=_r});var F=i((ei,z)=>{var Ir=Object.prototype,kr=Ir.toString;function Gr(e){return kr.call(e)}z.exports=Gr});var Y=i((ri,$)=>{var J=x(),Zr=V(),Hr=F(),Wr="[object Null]",Vr="[object Undefined]",B=J?J.toStringTag:void 0;function zr(e){return e==null?e===void 0?Vr:Wr:B&&B in Object(e)?Zr(e):Hr(e)}$.exports=zr});var Q=i((ti,K)=>{function Fr(e){return e!=null&&typeof e=="object"}K.exports=Fr});var ee=i((ni,X)=>{var Jr=Y(),Br=Q(),$r="[object Symbol]";function Yr(e){return typeof e=="symbol"||Br(e)&&Jr(e)==$r}X.exports=Yr});var oe=i((ii,ue)=>{var re=x(),Kr=I(),Qr=G(),Xr=ee(),et=1/0,te=re?re.prototype:void 0,ne=te?te.toString:void 0;function ie(e){if(typeof e=="string")return e;if(Qr(e))return Kr(e,ie)+"";if(Xr(e))return ne?ne.call(e):"";var r=e+"";return r=="0"&&1/e==-et?"-0":r}ue.exports=ie});var b=i((ui,ae)=>{var rt=oe();function tt(e){return e==null?"":rt(e)}ae.exports=tt});var de=i((oi,se)=>{var nt=j(),it=b(),ut=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ot="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",st="\\u20d0-\\u20ff",dt=ot+at+st,ct="["+dt+"]",ft=RegExp(ct,"g");function lt(e){return e=it(e),e&&e.replace(ut,nt).replace(ft,"")}se.exports=lt});var fe=i((ai,ce)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(e){return e.match(gt)||[]}ce.exports=mt});var ge=i((si,le)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function xt(e){return pt.test(e)}le.exports=xt});var Ee=i((di,je)=>{var me="\\ud800-\\udfff",bt="\\u0300-\\u036f",ht="\\ufe20-\\ufe2f",Tt="\\u20d0-\\u20ff",yt=bt+ht+Tt,pe="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",be="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",he=wt+Ct+vt+Rt,Te="['\u2019]",ye="["+he+"]",Pt="["+yt+"]",we="\\d+",At="["+pe+"]",Ce="["+xe+"]",ve="[^"+me+he+we+pe+xe+be+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Pt+"|"+qt+")",Lt="[^"+me+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+be+"]",jt="\\u200d",Pe="(?:"+Ce+"|"+ve+")",Et="(?:"+f+"|"+ve+")",Ae="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",Oe=Ot+"?",Le="["+St+"]?",Mt="(?:"+jt+"(?:"+[Lt,Re,Se].join("|")+")"+Le+Oe+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=Le+Oe+Mt,_t="(?:"+[At,Re,Se].join("|")+")"+Dt,It=RegExp([f+"?"+Ce+"+"+Ae+"(?="+[ye,f,"$"].join("|")+")",Et+"+"+qe+"(?="+[ye,f+Pe,"$"].join("|")+")",f+"?"+Pe+"+"+Ae,f+"+"+qe,Nt,Ut,we,_t].join("|"),"g");function kt(e){return e.match(It)||[]}je.exports=kt});var Ue=i((ci,Me)=>{var Gt=fe(),Zt=ge(),Ht=b(),Wt=Ee();function Vt(e,r,t){return e=Ht(e),r=t?void 0:r,r===void 0?Zt(e)?Wt(e):Gt(e):e.match(r)||[]}Me.exports=Vt});var De=i((fi,Ne)=>{var zt=A(),Ft=de(),Jt=Ue(),Bt="['\u2019]",$t=RegExp(Bt,"g");function Yt(e){return function(r){return zt(Jt(Ft(r).replace($t,"")),e,"")}}Ne.exports=Yt});var Ie=i((li,_e)=>{function Kt(e,r,t){var n=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++n<u;)a[n]=e[n+r];return a}_e.exports=Kt});var Ge=i((gi,ke)=>{var Qt=Ie();function Xt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Qt(e,r,t)}ke.exports=Xt});var T=i((mi,Ze)=>{var en="\\ud800-\\udfff",rn="\\u0300-\\u036f",tn="\\ufe20-\\ufe2f",nn="\\u20d0-\\u20ff",un=rn+tn+nn,on="\\ufe0e\\ufe0f",an="\\u200d",sn=RegExp("["+an+en+un+on+"]");function dn(e){return sn.test(e)}Ze.exports=dn});var We=i((pi,He)=>{function cn(e){return e.split("")}He.exports=cn});var Ke=i((xi,Ye)=>{var Ve="\\ud800-\\udfff",fn="\\u0300-\\u036f",ln="\\ufe20-\\ufe2f",gn="\\u20d0-\\u20ff",mn=fn+ln+gn,pn="\\ufe0e\\ufe0f",xn="["+Ve+"]",y="["+mn+"]",w="\\ud83c[\\udffb-\\udfff]",bn="(?:"+y+"|"+w+")",ze="[^"+Ve+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",hn="\\u200d",Be=bn+"?",$e="["+pn+"]?",Tn="(?:"+hn+"(?:"+[ze,Fe,Je].join("|")+")"+$e+Be+")*",yn=$e+Be+Tn,wn="(?:"+[ze+y+"?",y,Fe,Je,xn].join("|")+")",Cn=RegExp(w+"(?="+w+")|"+wn+yn,"g");function vn(e){return e.match(Cn)||[]}Ye.exports=vn});var Xe=i((bi,Qe)=>{var Rn=We(),Sn=T(),Pn=Ke();function An(e){return Sn(e)?Pn(e):Rn(e)}Qe.exports=An});var rr=i((hi,er)=>{var qn=Ge(),On=T(),Ln=Xe(),jn=b();function En(e){return function(r){r=jn(r);var t=On(r)?Ln(r):void 0,n=t?t[0]:r.charAt(0),u=t?qn(t,1).join(""):r.slice(1);return n[e]()+u}}er.exports=En});var nr=i((Ti,tr)=>{var Mn=rr(),Un=Mn("toUpperCase");tr.exports=Un});var ur=i((yi,ir)=>{var Nn=De(),Dn=nr(),_n=Nn(function(e,r,t){return e+(t?" ":"")+Dn(r)});ir.exports=_n});var or=wr(ur());function In(e){return p(c({},e),{json:JSON.stringify(Gn(e),null,2)})}var kn=`
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
    `,ar=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Gn(e){let{name:r,category:t,description:n,author:u,result:a,params:l,about:s,video:o}=e,{icon:d=ar}=e;return d==="glide"&&(d=kn),{name:r,category:t,description:n,author:u,result:a,about:s,icon:d,video:o,params:Object.entries(l).map(([cr,fr])=>c({name:cr},fr))}}var Zn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ar,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(r={},t=[]){this.definition=c(c({},Zn),r),this.requiredParams=[...t]}with(r,t=[]){return new h(c(c({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,n){return n===void 0&&(n=(0,or.default)(t)),this.with({params:p(c({},this.definition.params),{[t]:{type:r,displayName:n}})})}withRequiredParam(r,t,n){return this.withParam(r,t,n).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}run(r){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function a(...l){let s={};if(l.forEach(({value:o},d)=>{s[u[d]]=o}),!n.some(o=>s[o]===void 0))return r(s)}return In(p(c({},this.definition),{run:a}))}};function sr(e){return new h({name:e})}var Hn=["base64","url"];function dr(e){switch(e){case"base64":return{encode:btoa.bind(window),decode:atob.bind(window)};case"url":return{encode:encodeURIComponent,decode:decodeURIComponent}}}function Wn(e,r){var t,n;return(n=(t=dr(r))==null?void 0:t.encode)==null?void 0:n.call(t,e)}function vi(e,r){var t,n;return(n=(t=dr(r))==null?void 0:t.decode)==null?void 0:n.call(t,e)}var Ri=sr("Encode Text").withCategory("Encoding").withDescription("Encode text in a variety of formats.").withRequiredStringParam("text").withStringParam("encoding",`Encoding (${Hn.join(", ")})`).withStringResult().withTest({text:"Hello, world!"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"base64"},"SGVsbG8sIHdvcmxkIQ==").withTest({text:"Hello, world!",encoding:"url"},"Hello%2C%20world!").run(({text:e,encoding:r="base64"})=>Wn(e,r));export{vi as decode,Ri as default,Wn as encode,Hn as encodingTypes};
//# sourceMappingURL=function.js.map
