var ge=Object.create;var p=Object.defineProperty,xe=Object.defineProperties,be=Object.getOwnPropertyDescriptor,he=Object.getOwnPropertyDescriptors,ye=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,Te=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))w.call(e,t)&&S(r,t,e[t]);if(v)for(var t of v(e))Ce.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>xe(r,he(e)),ve=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var we=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ye(e))!w.call(r,n)&&n!=="default"&&p(r,n,{get:()=>e[n],enumerable:!(t=be(e,n))||t.enumerable});return r},R=r=>we(ve(p(r!=null?ge(Te(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var P=(r,e,t)=>new Promise((n,i)=>{var o=a=>{try{s(t.next(a))}catch(f){i(f)}},c=a=>{try{s(t.throw(a))}catch(f){i(f)}},s=a=>a.done?n(a.value):Promise.resolve(a.value).then(o,c);s((t=t.apply(r,e)).next())});var q=u((Fn,A)=>{function Se(r,e,t,n){var i=-1,o=r==null?0:r.length;for(n&&o&&(t=r[++i]);++i<o;)t=e(t,r[i],i,r);return t}A.exports=Se});var L=u((Jn,O)=>{function Re(r){return function(e){return r==null?void 0:r[e]}}O.exports=Re});var M=u(($n,j)=>{var Pe=L(),Ae={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},qe=Pe(Ae);j.exports=qe});var U=u((Bn,N)=>{var Oe=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Oe});var E=u((Yn,_)=>{var Le=U(),je=typeof self=="object"&&self&&self.Object===Object&&self,Me=Le||je||Function("return this")();_.exports=Me});var x=u((Kn,Z)=>{var Ne=E(),Ue=Ne.Symbol;Z.exports=Ue});var k=u((Qn,D)=>{function _e(r,e){for(var t=-1,n=r==null?0:r.length,i=Array(n);++t<n;)i[t]=e(r[t],t,r);return i}D.exports=_e});var I=u((Xn,z)=>{var Ee=Array.isArray;z.exports=Ee});var H=u((ru,G)=>{var W=x(),V=Object.prototype,Ze=V.hasOwnProperty,De=V.toString,m=W?W.toStringTag:void 0;function ke(r){var e=Ze.call(r,m),t=r[m];try{r[m]=void 0;var n=!0}catch(o){}var i=De.call(r);return n&&(e?r[m]=t:delete r[m]),i}G.exports=ke});var J=u((eu,F)=>{var ze=Object.prototype,Ie=ze.toString;function We(r){return Ie.call(r)}F.exports=We});var K=u((tu,Y)=>{var $=x(),Ve=H(),Ge=J(),He="[object Null]",Fe="[object Undefined]",B=$?$.toStringTag:void 0;function Je(r){return r==null?r===void 0?Fe:He:B&&B in Object(r)?Ve(r):Ge(r)}Y.exports=Je});var X=u((nu,Q)=>{function $e(r){return r!=null&&typeof r=="object"}Q.exports=$e});var er=u((uu,rr)=>{var Be=K(),Ye=X(),Ke="[object Symbol]";function Qe(r){return typeof r=="symbol"||Ye(r)&&Be(r)==Ke}rr.exports=Qe});var or=u((iu,ar)=>{var tr=x(),Xe=k(),rt=I(),et=er(),tt=1/0,nr=tr?tr.prototype:void 0,ur=nr?nr.toString:void 0;function ir(r){if(typeof r=="string")return r;if(rt(r))return Xe(r,ir)+"";if(et(r))return ur?ur.call(r):"";var e=r+"";return e=="0"&&1/r==-tt?"-0":e}ar.exports=ir});var b=u((au,sr)=>{var nt=or();function ut(r){return r==null?"":nt(r)}sr.exports=ut});var lr=u((ou,fr)=>{var it=M(),at=b(),ot=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ft="\\ufe20-\\ufe2f",lt="\\u20d0-\\u20ff",dt=st+ft+lt,ct="["+dt+"]",mt=RegExp(ct,"g");function pt(r){return r=at(r),r&&r.replace(ot,it).replace(mt,"")}fr.exports=pt});var cr=u((su,dr)=>{var gt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function xt(r){return r.match(gt)||[]}dr.exports=xt});var pr=u((fu,mr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}mr.exports=ht});var Nr=u((lu,Mr)=>{var gr="\\ud800-\\udfff",yt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",Ct="\\u20d0-\\u20ff",vt=yt+Tt+Ct,xr="\\u2700-\\u27bf",br="a-z\\xdf-\\xf6\\xf8-\\xff",wt="\\xac\\xb1\\xd7\\xf7",St="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Rt="\\u2000-\\u206f",Pt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",hr="A-Z\\xc0-\\xd6\\xd8-\\xde",At="\\ufe0e\\ufe0f",yr=wt+St+Rt+Pt,Tr="['\u2019]",Cr="["+yr+"]",qt="["+vt+"]",vr="\\d+",Ot="["+xr+"]",wr="["+br+"]",Sr="[^"+gr+yr+vr+xr+br+hr+"]",Lt="\\ud83c[\\udffb-\\udfff]",jt="(?:"+qt+"|"+Lt+")",Mt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Pr="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+hr+"]",Nt="\\u200d",Ar="(?:"+wr+"|"+Sr+")",Ut="(?:"+d+"|"+Sr+")",qr="(?:"+Tr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+Tr+"(?:D|LL|M|RE|S|T|VE))?",Lr=jt+"?",jr="["+At+"]?",_t="(?:"+Nt+"(?:"+[Mt,Rr,Pr].join("|")+")"+jr+Lr+")*",Et="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Zt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dt=jr+Lr+_t,kt="(?:"+[Ot,Rr,Pr].join("|")+")"+Dt,zt=RegExp([d+"?"+wr+"+"+qr+"(?="+[Cr,d,"$"].join("|")+")",Ut+"+"+Or+"(?="+[Cr,d+Ar,"$"].join("|")+")",d+"?"+Ar+"+"+qr,d+"+"+Or,Zt,Et,vr,kt].join("|"),"g");function It(r){return r.match(zt)||[]}Mr.exports=It});var _r=u((du,Ur)=>{var Wt=cr(),Vt=pr(),Gt=b(),Ht=Nr();function Ft(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Vt(r)?Ht(r):Wt(r):r.match(e)||[]}Ur.exports=Ft});var Zr=u((cu,Er)=>{var Jt=q(),$t=lr(),Bt=_r(),Yt="['\u2019]",Kt=RegExp(Yt,"g");function Qt(r){return function(e){return Jt(Bt($t(e).replace(Kt,"")),r,"")}}Er.exports=Qt});var kr=u((mu,Dr)=>{function Xt(r,e,t){var n=-1,i=r.length;e<0&&(e=-e>i?0:i+e),t=t>i?i:t,t<0&&(t+=i),i=e>t?0:t-e>>>0,e>>>=0;for(var o=Array(i);++n<i;)o[n]=r[n+e];return o}Dr.exports=Xt});var Ir=u((pu,zr)=>{var rn=kr();function en(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:rn(r,e,t)}zr.exports=en});var y=u((gu,Wr)=>{var tn="\\ud800-\\udfff",nn="\\u0300-\\u036f",un="\\ufe20-\\ufe2f",an="\\u20d0-\\u20ff",on=nn+un+an,sn="\\ufe0e\\ufe0f",fn="\\u200d",ln=RegExp("["+fn+tn+on+sn+"]");function dn(r){return ln.test(r)}Wr.exports=dn});var Gr=u((xu,Vr)=>{function cn(r){return r.split("")}Vr.exports=cn});var Qr=u((bu,Kr)=>{var Hr="\\ud800-\\udfff",mn="\\u0300-\\u036f",pn="\\ufe20-\\ufe2f",gn="\\u20d0-\\u20ff",xn=mn+pn+gn,bn="\\ufe0e\\ufe0f",hn="["+Hr+"]",T="["+xn+"]",C="\\ud83c[\\udffb-\\udfff]",yn="(?:"+T+"|"+C+")",Fr="[^"+Hr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",$r="[\\ud800-\\udbff][\\udc00-\\udfff]",Tn="\\u200d",Br=yn+"?",Yr="["+bn+"]?",Cn="(?:"+Tn+"(?:"+[Fr,Jr,$r].join("|")+")"+Yr+Br+")*",vn=Yr+Br+Cn,wn="(?:"+[Fr+T+"?",T,Jr,$r,hn].join("|")+")",Sn=RegExp(C+"(?="+C+")|"+wn+vn,"g");function Rn(r){return r.match(Sn)||[]}Kr.exports=Rn});var re=u((hu,Xr)=>{var Pn=Gr(),An=y(),qn=Qr();function On(r){return An(r)?qn(r):Pn(r)}Xr.exports=On});var te=u((yu,ee)=>{var Ln=Ir(),jn=y(),Mn=re(),Nn=b();function Un(r){return function(e){e=Nn(e);var t=jn(e)?Mn(e):void 0,n=t?t[0]:e.charAt(0),i=t?Ln(t,1).join(""):e.slice(1);return n[r]()+i}}ee.exports=Un});var ue=u((Tu,ne)=>{var _n=te(),En=_n("toUpperCase");ne.exports=En});var ae=u((Cu,ie)=>{var Zn=Zr(),Dn=ue(),kn=Zn(function(r,e,t){return r+(t?" ":"")+Dn(e)});ie.exports=kn});var de=u(le=>{"use strict";var Gn=/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;le.validate=function(r){if(!r||r.length>254)return!1;var e=Gn.test(r);if(!e)return!1;var t=r.split("@");if(t[0].length>64)return!1;var n=t[1].split(".");return!n.some(function(i){return i.length>63})}});var oe=R(ae());function zn(r){return g(l({},r),{json:JSON.stringify(Wn(r),null,2)})}var In=`
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
</svg>`;function Wn(r){let{name:e,category:t,description:n,author:i,result:o,params:c,about:s,video:a}=r,{icon:f=se}=r;return f==="glide"&&(f=In),{name:e,category:t,description:n,author:i,result:o,about:s,icon:f,video:a,params:Object.entries(c).map(([me,pe])=>l({name:me},pe))}}var Vn={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:se,about:void 0,video:void 0,run(){return P(this,null,function*(){})}},h=class{constructor(e={},t=[]){this.definition=l(l({},Vn),e),this.requiredParams=[...t]}with(e,t=[]){return new h(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withDescription(e){return this.with({description:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(e,t,n){return n===void 0&&(n=(0,oe.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:n}})})}withRequiredParam(e,t,n){return this.withParam(e,t,n).with({},[t])}withStringParam(e,t){return this.withParam("string",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,n=this.requiredParams,i=Object.keys(t);function o(...c){let s={};if(c.forEach(({value:a},f)=>{s[i[f]]=a}),!n.some(a=>s[a]===void 0))return e(s)}return zn(g(l({},this.definition),{run:o}))}};function fe(r,e){return new h({name:r,category:e})}var ce=R(de()),Ru=fe("Email Validator","Text").withDescription("Indicates whether text is an email.").withBooleanResult().withStringParam("email").withExample({email:"hello@world.co"}).run(({email:r})=>r!==void 0&&ce.default.validate(r));export{Ru as default};
//# sourceMappingURL=function.js.map
