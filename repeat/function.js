var Ve=Object.create;var g=Object.defineProperty,ze=Object.defineProperties,He=Object.getOwnPropertyDescriptor,Be=Object.getOwnPropertyDescriptors,Je=Object.getOwnPropertyNames,S=Object.getOwnPropertySymbols,$e=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,Ye=Object.prototype.propertyIsEnumerable;var q=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,c=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&q(r,t,e[t]);if(S)for(var t of S(e))Ye.call(e,t)&&q(r,t,e[t]);return r},b=(r,e)=>ze(r,Be(e)),Xe=r=>g(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Ke=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of Je(e))!v.call(r,n)&&n!=="default"&&g(r,n,{get:()=>e[n],enumerable:!(t=He(e,n))||t.enumerable});return r},A=r=>Ke(Xe(g(r!=null?Ve($e(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var O=(r,e,t)=>new Promise((n,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},l=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,l);s((t=t.apply(r,e)).next())});var L=i((mu,j)=>{function Qe(r,e,t,n){var u=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}j.exports=Qe});var M=i((pu,I)=>{function rt(r){return function(e){return r==null?void 0:r[e]}}I.exports=rt});var _=i((gu,N)=>{var et=M(),tt={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},it=et(tt);N.exports=it});var U=i((bu,E)=>{var nt=typeof global=="object"&&global&&global.Object===Object&&global;E.exports=nt});var F=i((xu,D)=>{var ut=U(),at=typeof self=="object"&&self&&self.Object===Object&&self,ot=ut||at||Function("return this")();D.exports=ot});var x=i((hu,k)=>{var st=F(),ft=st.Symbol;k.exports=ft});var Z=i((Tu,G)=>{function ct(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}G.exports=ct});var V=i((yu,W)=>{var dt=Array.isArray;W.exports=dt});var J=i((wu,B)=>{var z=x(),H=Object.prototype,lt=H.hasOwnProperty,mt=H.toString,m=z?z.toStringTag:void 0;function pt(r){var e=lt.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(o){}var u=mt.call(r);return n&&(e?r[m]=t:delete r[m]),u}B.exports=pt});var Y=i((Cu,$)=>{var gt=Object.prototype,bt=gt.toString;function xt(r){return bt.call(r)}$.exports=xt});var y=i((Ru,Q)=>{var X=x(),ht=J(),Tt=Y(),yt="[object Null]",wt="[object Undefined]",K=X?X.toStringTag:void 0;function Ct(r){return r==null?r===void 0?wt:yt:K&&K in Object(r)?ht(r):Tt(r)}Q.exports=Ct});var er=i((Pu,rr)=>{function Rt(r){return r!=null&&typeof r=="object"}rr.exports=Rt});var w=i((Su,tr)=>{var Pt=y(),St=er(),vt="[object Symbol]";function qt(r){return typeof r=="symbol"||St(r)&&Pt(r)==vt}tr.exports=qt});var sr=i((vu,or)=>{var ir=x(),At=Z(),Ot=V(),jt=w(),Lt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(Ot(r))return At(r,ar)+"";if(jt(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-Lt?"-0":e}or.exports=ar});var p=i((qu,fr)=>{var It=sr();function Mt(r){return r==null?"":It(r)}fr.exports=Mt});var dr=i((Au,cr)=>{var Nt=_(),_t=p(),Et=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Ut="\\u0300-\\u036f",Dt="\\ufe20-\\ufe2f",Ft="\\u20d0-\\u20ff",kt=Ut+Dt+Ft,Gt="["+kt+"]",Zt=RegExp(Gt,"g");function Wt(r){return r=_t(r),r&&r.replace(Et,Nt).replace(Zt,"")}cr.exports=Wt});var mr=i((Ou,lr)=>{var Vt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function zt(r){return r.match(Vt)||[]}lr.exports=zt});var gr=i((ju,pr)=>{var Ht=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function Bt(r){return Ht.test(r)}pr.exports=Bt});var Nr=i((Lu,Mr)=>{var br="\\ud800-\\udfff",Jt="\\u0300-\\u036f",$t="\\ufe20-\\ufe2f",Yt="\\u20d0-\\u20ff",Xt=Jt+$t+Yt,xr="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",Kt="\\xac\\xb1\\xd7\\xf7",Qt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ri="\\u2000-\\u206f",ei=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Tr="A-Z\\xc0-\\xd6\\xd8-\\xde",ti="\\ufe0e\\ufe0f",yr=Kt+Qt+ri+ei,wr="['\u2019]",Cr="["+yr+"]",ii="["+Xt+"]",Rr="\\d+",ni="["+xr+"]",Pr="["+hr+"]",Sr="[^"+br+yr+Rr+xr+hr+Tr+"]",ui="\\ud83c[\\udffb-\\udfff]",ai="(?:"+ii+"|"+ui+")",oi="[^"+br+"]",vr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+Tr+"]",si="\\u200d",Ar="(?:"+Pr+"|"+Sr+")",fi="(?:"+d+"|"+Sr+")",Or="(?:"+wr+"(?:d|ll|m|re|s|t|ve))?",jr="(?:"+wr+"(?:D|LL|M|RE|S|T|VE))?",Lr=ai+"?",Ir="["+ti+"]?",ci="(?:"+si+"(?:"+[oi,vr,qr].join("|")+")"+Ir+Lr+")*",di="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",li="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",mi=Ir+Lr+ci,pi="(?:"+[ni,vr,qr].join("|")+")"+mi,gi=RegExp([d+"?"+Pr+"+"+Or+"(?="+[Cr,d,"$"].join("|")+")",fi+"+"+jr+"(?="+[Cr,d+Ar,"$"].join("|")+")",d+"?"+Ar+"+"+Or,d+"+"+jr,li,di,Rr,pi].join("|"),"g");function bi(r){return r.match(gi)||[]}Mr.exports=bi});var Er=i((Iu,_r)=>{var xi=mr(),hi=gr(),Ti=p(),yi=Nr();function wi(r,e,t){return r=Ti(r),e=t?void 0:e,e===void 0?hi(r)?yi(r):xi(r):r.match(e)||[]}_r.exports=wi});var Dr=i((Mu,Ur)=>{var Ci=L(),Ri=dr(),Pi=Er(),Si="['\u2019]",vi=RegExp(Si,"g");function qi(r){return function(e){return Ci(Pi(Ri(e).replace(vi,"")),r,"")}}Ur.exports=qi});var kr=i((Nu,Fr)=>{function Ai(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++n<u;)o[n]=r[n+e];return o}Fr.exports=Ai});var Zr=i((_u,Gr)=>{var Oi=kr();function ji(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:Oi(r,e,t)}Gr.exports=ji});var C=i((Eu,Wr)=>{var Li="\\ud800-\\udfff",Ii="\\u0300-\\u036f",Mi="\\ufe20-\\ufe2f",Ni="\\u20d0-\\u20ff",_i=Ii+Mi+Ni,Ei="\\ufe0e\\ufe0f",Ui="\\u200d",Di=RegExp("["+Ui+Li+_i+Ei+"]");function Fi(r){return Di.test(r)}Wr.exports=Fi});var zr=i((Uu,Vr)=>{function ki(r){return r.split("")}Vr.exports=ki});var Qr=i((Du,Kr)=>{var Hr="\\ud800-\\udfff",Gi="\\u0300-\\u036f",Zi="\\ufe20-\\ufe2f",Wi="\\u20d0-\\u20ff",Vi=Gi+Zi+Wi,zi="\\ufe0e\\ufe0f",Hi="["+Hr+"]",R="["+Vi+"]",P="\\ud83c[\\udffb-\\udfff]",Bi="(?:"+R+"|"+P+")",Br="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",Ji="\\u200d",Yr=Bi+"?",Xr="["+zi+"]?",$i="(?:"+Ji+"(?:"+[Br,Jr,$r].join("|")+")"+Xr+Yr+")*",Yi=Xr+Yr+$i,Xi="(?:"+[Br+R+"?",R,Jr,$r,Hi].join("|")+")",Ki=RegExp(P+"(?="+P+")|"+Xi+Yi,"g");function Qi(r){return r.match(Ki)||[]}Kr.exports=Qi});var ee=i((Fu,re)=>{var rn=zr(),en=C(),tn=Qr();function nn(r){return en(r)?tn(r):rn(r)}re.exports=nn});var ie=i((ku,te)=>{var un=Zr(),an=C(),on=ee(),sn=p();function fn(r){return function(e){e=sn(e);var t=an(e)?on(e):void 0,n=t?t[0]:e.charAt(0),u=t?un(t,1).join(""):e.slice(1);return n[r]()+u}}te.exports=fn});var ue=i((Gu,ne)=>{var cn=ie(),dn=cn("toUpperCase");ne.exports=dn});var oe=i((Zu,ae)=>{var ln=Dr(),mn=ue(),pn=ln(function(r,e,t){return r+(t?" ":"")+mn(e)});ae.exports=pn});var le=i((Vu,de)=>{var Tn=9007199254740991,yn=Math.floor;function wn(r,e){var t="";if(!r||e<1||e>Tn)return t;do e%2&&(t+=r),e=yn(e/2),e&&(r+=r);while(e);return t}de.exports=wn});var pe=i((zu,me)=>{function Cn(r,e){return r===e||r!==r&&e!==e}me.exports=Cn});var T=i((Hu,ge)=>{function Rn(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}ge.exports=Rn});var xe=i((Bu,be)=>{var Pn=y(),Sn=T(),vn="[object AsyncFunction]",qn="[object Function]",An="[object GeneratorFunction]",On="[object Proxy]";function jn(r){if(!Sn(r))return!1;var e=Pn(r);return e==qn||e==An||e==vn||e==On}be.exports=jn});var Te=i((Ju,he)=>{var Ln=9007199254740991;function In(r){return typeof r=="number"&&r>-1&&r%1==0&&r<=Ln}he.exports=In});var we=i(($u,ye)=>{var Mn=xe(),Nn=Te();function _n(r){return r!=null&&Nn(r.length)&&!Mn(r)}ye.exports=_n});var Re=i((Yu,Ce)=>{var En=9007199254740991,Un=/^(?:0|[1-9]\d*)$/;function Dn(r,e){var t=typeof r;return e=e??En,!!e&&(t=="number"||t!="symbol"&&Un.test(r))&&r>-1&&r%1==0&&r<e}Ce.exports=Dn});var Se=i((Xu,Pe)=>{var Fn=pe(),kn=we(),Gn=Re(),Zn=T();function Wn(r,e,t){if(!Zn(t))return!1;var n=typeof e;return(n=="number"?kn(t)&&Gn(e,t.length):n=="string"&&e in t)?Fn(t[e],r):!1}Pe.exports=Wn});var qe=i((Ku,ve)=>{var Vn=/\s/;function zn(r){for(var e=r.length;e--&&Vn.test(r.charAt(e)););return e}ve.exports=zn});var Oe=i((Qu,Ae)=>{var Hn=qe(),Bn=/^\s+/;function Jn(r){return r&&r.slice(0,Hn(r)+1).replace(Bn,"")}Ae.exports=Jn});var Me=i((ra,Ie)=>{var $n=Oe(),je=T(),Yn=w(),Le=0/0,Xn=/^[-+]0x[0-9a-f]+$/i,Kn=/^0b[01]+$/i,Qn=/^0o[0-7]+$/i,ru=parseInt;function eu(r){if(typeof r=="number")return r;if(Yn(r))return Le;if(je(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=je(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=$n(r);var t=Kn.test(r);return t||Qn.test(r)?ru(r.slice(2),t?2:8):Xn.test(r)?Le:+r}Ie.exports=eu});var Ee=i((ea,_e)=>{var tu=Me(),Ne=1/0,iu=17976931348623157e292;function nu(r){if(!r)return r===0?r:0;if(r=tu(r),r===Ne||r===-Ne){var e=r<0?-1:1;return e*iu}return r===r?r:0}_e.exports=nu});var De=i((ta,Ue)=>{var uu=Ee();function au(r){var e=uu(r),t=e%1;return e===e?t?e-t:e:0}Ue.exports=au});var ke=i((ia,Fe)=>{var ou=le(),su=Se(),fu=De(),cu=p();function du(r,e,t){return(t?su(r,e,t):e===void 0)?e=1:e=fu(e),ou(cu(r),e)}Fe.exports=du});var se=A(oe());function gn(r){return b(c({},r),{json:JSON.stringify(xn(r),null,2)})}var bn=`
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
</svg>`;function xn(r){let{name:e,category:t,description:n,author:u,result:o,params:l,about:s,video:a}=r,{icon:f=fe}=r;return f==="glide"&&(f=bn),{name:e,category:t,description:n,author:u,result:o,about:s,icon:f,video:a,params:Object.entries(l).map(([Ze,We])=>c({name:Ze},We))}}var hn={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:fe,about:void 0,video:void 0,tests:[],run(){return O(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=c(c({},hn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(c(c({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:n=[]}=this.definition;return this.with({tests:[...n,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,se.default)(t)),this.with({params:b(c({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}run(e){let{params:t}=this.definition,n=this.requiredParams,u=Object.keys(t);function o(...l){let s={};if(l.forEach(({value:a},f)=>{s[u[f]]=a}),!n.some(a=>s[a]===void 0))return e(s)}return gn(b(c({},this.definition),{run:o}))}};function ce(r){return new h({name:r})}var Ge=A(ke()),ua=ce("Repeat Text").withCategory("Text").withDescription("Repeats the given string n times.").withAuthor("lodash Project","lodash.com").withRequiredStringParam("text").withRequiredNumberParam("n","Repetitions").withStringResult().withTest({text:"*",n:8},"********").run(({text:r,n:e})=>(0,Ge.default)(r,e));export{ua as default};
//# sourceMappingURL=function.js.map
