var le=Object.create;var p=Object.defineProperty,ce=Object.defineProperties,me=Object.getOwnPropertyDescriptor,pe=Object.getOwnPropertyDescriptors,ge=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))v.call(e,t)&&R(r,t,e[t]);if(w)for(var t of w(e))be.call(e,t)&&R(r,t,e[t]);return r},g=(r,e)=>ce(r,pe(e)),he=r=>p(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var Te=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ge(e))!v.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=me(e,i))||t.enumerable});return r},ye=r=>Te(he(p(r!=null?le(xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var S=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var A=n((Wi,P)=>{function Ce(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}P.exports=Ce});var O=n((Gi,q)=>{function we(r){return function(e){return r==null?void 0:r[e]}}q.exports=we});var j=n((Hi,L)=>{var ve=O(),Re={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Se=ve(Re);L.exports=Se});var N=n((zi,M)=>{var Pe=typeof global=="object"&&global&&global.Object===Object&&global;M.exports=Pe});var E=n((Vi,U)=>{var Ae=N(),qe=typeof self=="object"&&self&&self.Object===Object&&self,Oe=Ae||qe||Function("return this")();U.exports=Oe});var x=n((Fi,_)=>{var Le=E(),je=Le.Symbol;_.exports=je});var k=n((Ji,D)=>{function Me(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}D.exports=Me});var Z=n((Bi,I)=>{var Ne=Array.isArray;I.exports=Ne});var z=n((Yi,H)=>{var W=x(),G=Object.prototype,Ue=G.hasOwnProperty,Ee=G.toString,m=W?W.toStringTag:void 0;function _e(r){var e=Ue.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(o){}var u=Ee.call(r);return i&&(e?r[m]=t:delete r[m]),u}H.exports=_e});var F=n(($i,V)=>{var De=Object.prototype,ke=De.toString;function Ie(r){return ke.call(r)}V.exports=Ie});var $=n((Ki,Y)=>{var J=x(),Ze=z(),We=F(),Ge="[object Null]",He="[object Undefined]",B=J?J.toStringTag:void 0;function ze(r){return r==null?r===void 0?He:Ge:B&&B in Object(r)?Ze(r):We(r)}Y.exports=ze});var Q=n((Qi,K)=>{function Ve(r){return r!=null&&typeof r=="object"}K.exports=Ve});var rr=n((Xi,X)=>{var Fe=$(),Je=Q(),Be="[object Symbol]";function Ye(r){return typeof r=="symbol"||Je(r)&&Fe(r)==Be}X.exports=Ye});var ar=n((rn,ur)=>{var er=x(),$e=k(),Ke=Z(),Qe=rr(),Xe=1/0,tr=er?er.prototype:void 0,ir=tr?tr.toString:void 0;function nr(r){if(typeof r=="string")return r;if(Ke(r))return $e(r,nr)+"";if(Qe(r))return ir?ir.call(r):"";var e=r+"";return e=="0"&&1/r==-Xe?"-0":e}ur.exports=nr});var b=n((en,or)=>{var rt=ar();function et(r){return r==null?"":rt(r)}or.exports=et});var fr=n((tn,sr)=>{var tt=j(),it=b(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=ut+at+ot,ft="["+st+"]",dt=RegExp(ft,"g");function lt(r){return r=it(r),r&&r.replace(nt,tt).replace(dt,"")}sr.exports=lt});var lr=n((nn,dr)=>{var ct=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(r){return r.match(ct)||[]}dr.exports=mt});var mr=n((un,cr)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(r){return pt.test(r)}cr.exports=gt});var Mr=n((an,jr)=>{var pr="\\ud800-\\udfff",xt="\\u0300-\\u036f",bt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Tt=xt+bt+ht,gr="\\u2700-\\u27bf",xr="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",br="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",hr=yt+Ct+wt+vt,Tr="['\u2019]",yr="["+hr+"]",St="["+Tt+"]",Cr="\\d+",Pt="["+gr+"]",wr="["+xr+"]",vr="[^"+pr+hr+Cr+gr+xr+br+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+St+"|"+At+")",Ot="[^"+pr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+br+"]",Lt="\\u200d",Pr="(?:"+wr+"|"+vr+")",jt="(?:"+l+"|"+vr+")",Ar="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",qr="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Or=qt+"?",Lr="["+Rt+"]?",Mt="(?:"+Lt+"(?:"+[Ot,Rr,Sr].join("|")+")"+Lr+Or+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Et=Lr+Or+Mt,_t="(?:"+[Pt,Rr,Sr].join("|")+")"+Et,Dt=RegExp([l+"?"+wr+"+"+Ar+"(?="+[yr,l,"$"].join("|")+")",jt+"+"+qr+"(?="+[yr,l+Pr,"$"].join("|")+")",l+"?"+Pr+"+"+Ar,l+"+"+qr,Ut,Nt,Cr,_t].join("|"),"g");function kt(r){return r.match(Dt)||[]}jr.exports=kt});var Ur=n((on,Nr)=>{var It=lr(),Zt=mr(),Wt=b(),Gt=Mr();function Ht(r,e,t){return r=Wt(r),e=t?void 0:e,e===void 0?Zt(r)?Gt(r):It(r):r.match(e)||[]}Nr.exports=Ht});var _r=n((sn,Er)=>{var zt=A(),Vt=fr(),Ft=Ur(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function Yt(r){return function(e){return zt(Ft(Vt(e).replace(Bt,"")),r,"")}}Er.exports=Yt});var kr=n((fn,Dr)=>{function $t(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Dr.exports=$t});var Zr=n((dn,Ir)=>{var Kt=kr();function Qt(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Kt(r,e,t)}Ir.exports=Qt});var T=n((ln,Wr)=>{var Xt="\\ud800-\\udfff",ri="\\u0300-\\u036f",ei="\\ufe20-\\ufe2f",ti="\\u20d0-\\u20ff",ii=ri+ei+ti,ni="\\ufe0e\\ufe0f",ui="\\u200d",ai=RegExp("["+ui+Xt+ii+ni+"]");function oi(r){return ai.test(r)}Wr.exports=oi});var Hr=n((cn,Gr)=>{function si(r){return r.split("")}Gr.exports=si});var Kr=n((mn,$r)=>{var zr="\\ud800-\\udfff",fi="\\u0300-\\u036f",di="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",ci=fi+di+li,mi="\\ufe0e\\ufe0f",pi="["+zr+"]",y="["+ci+"]",C="\\ud83c[\\udffb-\\udfff]",gi="(?:"+y+"|"+C+")",Vr="[^"+zr+"]",Fr="(?:\\ud83c[\\udde6-\\uddff]){2}",Jr="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="\\u200d",Br=gi+"?",Yr="["+mi+"]?",bi="(?:"+xi+"(?:"+[Vr,Fr,Jr].join("|")+")"+Yr+Br+")*",hi=Yr+Br+bi,Ti="(?:"+[Vr+y+"?",y,Fr,Jr,pi].join("|")+")",yi=RegExp(C+"(?="+C+")|"+Ti+hi,"g");function Ci(r){return r.match(yi)||[]}$r.exports=Ci});var Xr=n((pn,Qr)=>{var wi=Hr(),vi=T(),Ri=Kr();function Si(r){return vi(r)?Ri(r):wi(r)}Qr.exports=Si});var ee=n((gn,re)=>{var Pi=Zr(),Ai=T(),qi=Xr(),Oi=b();function Li(r){return function(e){e=Oi(e);var t=Ai(e)?qi(e):void 0,i=t?t[0]:e.charAt(0),u=t?Pi(t,1).join(""):e.slice(1);return i[r]()+u}}re.exports=Li});var ie=n((xn,te)=>{var ji=ee(),Mi=ji("toUpperCase");te.exports=Mi});var ue=n((bn,ne)=>{var Ni=_r(),Ui=ie(),Ei=Ni(function(r,e,t){return r+(t?" ":"")+Ui(e)});ne.exports=Ei});var ae=ye(ue());function _i(r){return g(d({},r),{json:JSON.stringify(ki(r),null,2)})}var Di=`
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
</svg>`;function ki(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:f=oe}=r;return f==="glide"&&(f=Di),{name:e,category:t,description:i,author:u,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([fe,de])=>d({name:fe},de))}}var Ii={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:oe,about:void 0,video:void 0,tests:[],run(){return S(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Ii),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[],example:u=e}=this.definition;return this.with({example:u,tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,ae.default)(t)),this.with({params:g(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[u[f]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return _i(g(d({},this.definition),{run:o}))}};function se(r){return new h({name:r})}var yn=se("Extract Matching Text").withCategory("Code").withDescription("Extract text matching a regular expression.").withStringResult().withStringParam("text").withStringParam("regex","Regular Expression").withExample({text:"Hello, world.",regex:"Hello, (.+)."}).run(({text:r,regex:e})=>{var t;if(e!==void 0)return(t=r==null?void 0:r.match(e))==null?void 0:t[1]});export{yn as default};
//# sourceMappingURL=function.js.map