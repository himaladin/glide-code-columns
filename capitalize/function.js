var ge=Object.create;var g=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,S=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var R=(r,e,t)=>e in r?g(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,d=(r,e)=>{for(var t in e||(e={}))S.call(e,t)&&R(r,t,e[t]);if(w)for(var t of w(e))Ce.call(e,t)&&R(r,t,e[t]);return r},x=(r,e)=>xe(r,he(e)),ve=r=>g(r,"__esModule",{value:!0});var n=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var we=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of ye(e))!S.call(r,i)&&i!=="default"&&g(r,i,{get:()=>e[i],enumerable:!(t=be(e,i))||t.enumerable});return r},P=r=>we(ve(g(r!=null?ge(Te(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var q=(r,e,t)=>new Promise((i,u)=>{var o=a=>{try{s(t.next(a))}catch(f){u(f)}},c=a=>{try{s(t.throw(a))}catch(f){u(f)}},s=a=>a.done?i(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var O=n((Ji,A)=>{function Se(r,e,t,i){var u=-1,o=r==null?0:r.length;for(i&&o&&(t=r[++u]);++u<o;)t=e(t,r[u],u,r);return t}A.exports=Se});var j=n((Bi,L)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}L.exports=Re});var N=n((Yi,M)=>{var Pe=j(),qe={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Pe(qe);M.exports=Ae});var _=n(($i,U)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Oe});var D=n((Ki,E)=>{var Le=_(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();E.exports=Me});var b=n((Qi,k)=>{var Ne=D(),Ue=Ne.Symbol;k.exports=Ue});var I=n((Xi,Z)=>{function _e(r,e){for(var t=-1,i=r==null?0:r.length,u=Array(i);++t<i;)u[t]=e(r[t],t,r);return u}Z.exports=_e});var W=n((rn,z)=>{var Ee=Array.isArray;z.exports=Ee});var V=n((en,H)=>{var F=b(),G=Object.prototype,De=G.hasOwnProperty,ke=G.toString,p=F?F.toStringTag:void 0;function Ze(r){var e=De.call(r,p),t=r[p];try{r[p]=void 0;var i=!0}catch(o){}var u=ke.call(r);return i&&(e?r[p]=t:delete r[p]),u}H.exports=Ze});var B=n((tn,J)=>{var Ie=Object.prototype,ze=Ie.toString;function We(r){return ze.call(r)}J.exports=We});var Q=n((nn,K)=>{var Y=b(),Fe=V(),Ge=B(),He="[object Null]",Ve="[object Undefined]",$=Y?Y.toStringTag:void 0;function Je(r){return r==null?r===void 0?Ve:He:$&&$ in Object(r)?Fe(r):Ge(r)}K.exports=Je});var rr=n((un,X)=>{function Be(r){return r!=null&&typeof r=="object"}X.exports=Be});var tr=n((an,er)=>{var Ye=Q(),$e=rr(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||$e(r)&&Ye(r)==Ke}er.exports=Qe});var sr=n((on,or)=>{var ir=b(),Xe=I(),rt=W(),et=tr(),tt=1/0,nr=ir?ir.prototype:void 0,ur=nr?nr.toString:void 0;function ar(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ar)+"";if(et(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}or.exports=ar});var m=n((sn,fr)=>{var it=sr();function nt(r){return r==null?"":it(r)}fr.exports=nt});var lr=n((fn,dr)=>{var ut=N(),at=m(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ft+dt,ct="["+lt+"]",pt=RegExp(ct,"g");function mt(r){return r=at(r),r&&r.replace(ot,ut).replace(pt,"")}dr.exports=mt});var pr=n((dn,cr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}cr.exports=xt});var gr=n((ln,mr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}mr.exports=ht});var Ur=n((cn,Nr)=>{var xr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",vt=yt+Tt+Ct,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yr="A-Z\\xc0-\\xd6\\xd8-\\xde",qt="\\ufe0e\\ufe0f",Tr=wt+St+Rt+Pt,Cr="['\u2019]",vr="["+Tr+"]",At="["+vt+"]",wr="\\d+",Ot="["+br+"]",Sr="["+hr+"]",Rr="[^"+xr+Tr+wr+br+hr+yr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+At+"|"+Lt+")",Mt="[^"+xr+"]",Pr="(?:\\ud83c[\\udde6-\\uddff]){2}",qr="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+yr+"]",Nt="\\u200d",Ar="(?:"+Sr+"|"+Rr+")",Ut="(?:"+l+"|"+Rr+")",Or="(?:"+Cr+"(?:d|ll|m|re|s|t|ve))?",Lr="(?:"+Cr+"(?:D|LL|M|RE|S|T|VE))?",jr=jt+"?",Mr="["+qt+"]?",_t="(?:"+Nt+"(?:"+[Mt,Pr,qr].join("|")+")"+Mr+jr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",kt=Mr+jr+_t,Zt="(?:"+[Ot,Pr,qr].join("|")+")"+kt,It=RegExp([l+"?"+Sr+"+"+Or+"(?="+[vr,l,"$"].join("|")+")",Ut+"+"+Lr+"(?="+[vr,l+Ar,"$"].join("|")+")",l+"?"+Ar+"+"+Or,l+"+"+Lr,Dt,Et,wr,Zt].join("|"),"g");function zt(r){return r.match(It)||[]}Nr.exports=zt});var Er=n((pn,_r)=>{var Wt=pr(),Ft=gr(),Gt=m(),Ht=Ur();function Vt(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Ft(r)?Ht(r):Wt(r):r.match(e)||[]}_r.exports=Vt});var kr=n((mn,Dr)=>{var Jt=O(),Bt=lr(),Yt=Er(),$t="['\u2019]",Kt=RegExp($t,"g");function Qt(r){return function(e){return Jt(Yt(Bt(e).replace(Kt,"")),r,"")}}Dr.exports=Qt});var Ir=n((gn,Zr)=>{function Xt(r,e,t){var i=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(u);++i<u;)o[i]=r[i+e];return o}Zr.exports=Xt});var Wr=n((xn,zr)=>{var ri=Ir();function ei(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:ri(r,e,t)}zr.exports=ei});var y=n((bn,Fr)=>{var ti="\\ud800-\\udfff",ii="\\u0300-\\u036f",ni="\\ufe20-\\ufe2f",ui="\\u20d0-\\u20ff",ai=ii+ni+ui,oi="\\ufe0e\\ufe0f",si="\\u200d",fi=RegExp("["+si+ti+ai+oi+"]");function di(r){return fi.test(r)}Fr.exports=di});var Hr=n((hn,Gr)=>{function li(r){return r.split("")}Gr.exports=li});var Xr=n((yn,Qr)=>{var Vr="\\ud800-\\udfff",ci="\\u0300-\\u036f",pi="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",gi=ci+pi+mi,xi="\\ufe0e\\ufe0f",bi="["+Vr+"]",T="["+gi+"]",C="\\ud83c[\\udffb-\\udfff]",hi="(?:"+T+"|"+C+")",Jr="[^"+Vr+"]",Br="(?:\\ud83c[\\udde6-\\uddff]){2}",Yr="[\\ud800-\\udbff][\\udc00-\\udfff]",yi="\\u200d",$r=hi+"?",Kr="["+xi+"]?",Ti="(?:"+yi+"(?:"+[Jr,Br,Yr].join("|")+")"+Kr+$r+")*",Ci=Kr+$r+Ti,vi="(?:"+[Jr+T+"?",T,Br,Yr,bi].join("|")+")",wi=RegExp(C+"(?="+C+")|"+vi+Ci,"g");function Si(r){return r.match(wi)||[]}Qr.exports=Si});var ee=n((Tn,re)=>{var Ri=Hr(),Pi=y(),qi=Xr();function Ai(r){return Pi(r)?qi(r):Ri(r)}re.exports=Ai});var ie=n((Cn,te)=>{var Oi=Wr(),Li=y(),ji=ee(),Mi=m();function Ni(r){return function(e){e=Mi(e);var t=Li(e)?ji(e):void 0,i=t?t[0]:e.charAt(0),u=t?Oi(t,1).join(""):e.slice(1);return i[r]()+u}}te.exports=Ni});var v=n((vn,ne)=>{var Ui=ie(),_i=Ui("toUpperCase");ne.exports=_i});var ae=n((wn,ue)=>{var Ei=kr(),Di=v(),ki=Ei(function(r,e,t){return r+(t?" ":"")+Di(e)});ue.exports=ki});var le=n((Rn,de)=>{var Fi=m(),Gi=v();function Hi(r){return Gi(Fi(r).toLowerCase())}de.exports=Hi});var oe=P(ae());function Zi(r){return x(d({},r),{json:JSON.stringify(zi(r),null,2)})}var Ii=`
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
</svg>`;function zi(r){let{name:e,category:t,description:i,author:u,result:o,params:c,about:s,video:a}=r,{icon:f=se}=r;return f==="glide"&&(f=Ii),{name:e,category:t,description:i,author:u,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([pe,me])=>d({name:pe},me))}}var Wi={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,run(){return q(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=d(d({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new h(d(d({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,i){return i===void 0&&(i=(0,oe.default)(t)),this.with({params:x(d({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,u=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[u[f]]=a}),!i.some(a=>s[a]===void 0))return e(s)}return Zi(x(d({},this.definition),{run:o}))}};function fe(r,e){return new h({name:r,category:e})}var ce=P(le()),qn=fe("Capitalize Text","Text").withDescription("Converts the first character of string to upper case and the remaining to lower case.").withAuthor("lodash Project","lodash.com").withStringResult().withStringParam("text").withExample({text:"HELLO"}).run(({text:r})=>r===void 0?void 0:(0,ce.default)(r));export{qn as default};
//# sourceMappingURL=function.js.map
