var or=Object.create;var p=Object.defineProperty,sr=Object.defineProperties,dr=Object.getOwnPropertyDescriptor,fr=Object.getOwnPropertyDescriptors,lr=Object.getOwnPropertyNames,v=Object.getOwnPropertySymbols,cr=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var w=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))C.call(r,t)&&w(e,t,r[t]);if(v)for(var t of v(r))pr.call(r,t)&&w(e,t,r[t]);return e},S=(e,r)=>sr(e,fr(r)),gr=e=>p(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var mr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of lr(r))!C.call(e,i)&&i!=="default"&&p(e,i,{get:()=>r[i],enumerable:!(t=dr(r,i))||t.enumerable});return e},xr=e=>mr(gr(p(e!=null?or(cr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var b=(e,r,t)=>new Promise((i,u)=>{var a=o=>{try{d(t.next(o))}catch(l){u(l)}},s=o=>{try{d(t.throw(o))}catch(l){u(l)}},d=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,s);d((t=t.apply(e,r)).next())});var P=n((Zn,R)=>{function br(e,r,t,i){var u=-1,a=e==null?0:e.length;for(i&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}R.exports=br});var A=n((kn,L)=>{function hr(e){return function(r){return e==null?void 0:e[r]}}L.exports=hr});var O=n((In,q)=>{var yr=A(),Tr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},vr=yr(Tr);q.exports=vr});var M=n((Vn,j)=>{var Cr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Cr});var U=n((Wn,N)=>{var wr=M(),Sr=typeof self=="object"&&self&&self.Object===Object&&self,Rr=wr||Sr||Function("return this")();N.exports=Rr});var g=n((Gn,_)=>{var Pr=U(),Lr=Pr.Symbol;_.exports=Lr});var E=n((zn,D)=>{function Ar(e,r){for(var t=-1,i=e==null?0:e.length,u=Array(i);++t<i;)u[t]=r(e[t],t,e);return u}D.exports=Ar});var Z=n((Fn,H)=>{var qr=Array.isArray;H.exports=qr});var W=n((Jn,V)=>{var k=g(),I=Object.prototype,Or=I.hasOwnProperty,jr=I.toString,c=k?k.toStringTag:void 0;function Mr(e){var r=Or.call(e,c),t=e[c];try{e[c]=void 0;var i=!0}catch(a){}var u=jr.call(e);return i&&(r?e[c]=t:delete e[c]),u}V.exports=Mr});var z=n((Bn,G)=>{var Nr=Object.prototype,Ur=Nr.toString;function _r(e){return Ur.call(e)}G.exports=_r});var $=n(($n,B)=>{var F=g(),Dr=W(),Er=z(),Hr="[object Null]",Zr="[object Undefined]",J=F?F.toStringTag:void 0;function kr(e){return e==null?e===void 0?Zr:Hr:J&&J in Object(e)?Dr(e):Er(e)}B.exports=kr});var Y=n((Kn,K)=>{function Ir(e){return e!=null&&typeof e=="object"}K.exports=Ir});var Q=n((Yn,X)=>{var Vr=$(),Wr=Y(),Gr="[object Symbol]";function zr(e){return typeof e=="symbol"||Wr(e)&&Vr(e)==Gr}X.exports=zr});var ue=n((Xn,ie)=>{var ee=g(),Fr=E(),Jr=Z(),Br=Q(),$r=1/0,re=ee?ee.prototype:void 0,te=re?re.toString:void 0;function ne(e){if(typeof e=="string")return e;if(Jr(e))return Fr(e,ne)+"";if(Br(e))return te?te.call(e):"";var r=e+"";return r=="0"&&1/e==-$r?"-0":r}ie.exports=ne});var m=n((Qn,ae)=>{var Kr=ue();function Yr(e){return e==null?"":Kr(e)}ae.exports=Yr});var se=n((ei,oe)=>{var Xr=O(),Qr=m(),et=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,rt="\\u0300-\\u036f",tt="\\ufe20-\\ufe2f",nt="\\u20d0-\\u20ff",it=rt+tt+nt,ut="["+it+"]",at=RegExp(ut,"g");function ot(e){return e=Qr(e),e&&e.replace(et,Xr).replace(at,"")}oe.exports=ot});var fe=n((ri,de)=>{var st=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function dt(e){return e.match(st)||[]}de.exports=dt});var ce=n((ti,le)=>{var ft=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function lt(e){return ft.test(e)}le.exports=lt});var je=n((ni,Oe)=>{var pe="\\ud800-\\udfff",ct="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",gt="\\u20d0-\\u20ff",mt=ct+pt+gt,ge="\\u2700-\\u27bf",me="a-z\\xdf-\\xf6\\xf8-\\xff",xt="\\xac\\xb1\\xd7\\xf7",bt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",ht="\\u2000-\\u206f",yt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Tt="\\ufe0e\\ufe0f",be=xt+bt+ht+yt,he="['\u2019]",ye="["+be+"]",vt="["+mt+"]",Te="\\d+",Ct="["+ge+"]",ve="["+me+"]",Ce="[^"+pe+be+Te+ge+me+xe+"]",wt="\\ud83c[\\udffb-\\udfff]",St="(?:"+vt+"|"+wt+")",Rt="[^"+pe+"]",we="(?:\\ud83c[\\udde6-\\uddff]){2}",Se="[\\ud800-\\udbff][\\udc00-\\udfff]",f="["+xe+"]",Pt="\\u200d",Re="(?:"+ve+"|"+Ce+")",Lt="(?:"+f+"|"+Ce+")",Pe="(?:"+he+"(?:d|ll|m|re|s|t|ve))?",Le="(?:"+he+"(?:D|LL|M|RE|S|T|VE))?",Ae=St+"?",qe="["+Tt+"]?",At="(?:"+Pt+"(?:"+[Rt,we,Se].join("|")+")"+qe+Ae+")*",qt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ot="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",jt=qe+Ae+At,Mt="(?:"+[Ct,we,Se].join("|")+")"+jt,Nt=RegExp([f+"?"+ve+"+"+Pe+"(?="+[ye,f,"$"].join("|")+")",Lt+"+"+Le+"(?="+[ye,f+Re,"$"].join("|")+")",f+"?"+Re+"+"+Pe,f+"+"+Le,Ot,qt,Te,Mt].join("|"),"g");function Ut(e){return e.match(Nt)||[]}Oe.exports=Ut});var Ne=n((ii,Me)=>{var _t=fe(),Dt=ce(),Et=m(),Ht=je();function Zt(e,r,t){return e=Et(e),r=t?void 0:r,r===void 0?Dt(e)?Ht(e):_t(e):e.match(r)||[]}Me.exports=Zt});var _e=n((ui,Ue)=>{var kt=P(),It=se(),Vt=Ne(),Wt="['\u2019]",Gt=RegExp(Wt,"g");function zt(e){return function(r){return kt(Vt(It(r).replace(Gt,"")),e,"")}}Ue.exports=zt});var Ee=n((ai,De)=>{function Ft(e,r,t){var i=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++i<u;)a[i]=e[i+r];return a}De.exports=Ft});var Ze=n((oi,He)=>{var Jt=Ee();function Bt(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Jt(e,r,t)}He.exports=Bt});var h=n((si,ke)=>{var $t="\\ud800-\\udfff",Kt="\\u0300-\\u036f",Yt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",Qt=Kt+Yt+Xt,en="\\ufe0e\\ufe0f",rn="\\u200d",tn=RegExp("["+rn+$t+Qt+en+"]");function nn(e){return tn.test(e)}ke.exports=nn});var Ve=n((di,Ie)=>{function un(e){return e.split("")}Ie.exports=un});var Ke=n((fi,$e)=>{var We="\\ud800-\\udfff",an="\\u0300-\\u036f",on="\\ufe20-\\ufe2f",sn="\\u20d0-\\u20ff",dn=an+on+sn,fn="\\ufe0e\\ufe0f",ln="["+We+"]",y="["+dn+"]",T="\\ud83c[\\udffb-\\udfff]",cn="(?:"+y+"|"+T+")",Ge="[^"+We+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Fe="[\\ud800-\\udbff][\\udc00-\\udfff]",pn="\\u200d",Je=cn+"?",Be="["+fn+"]?",gn="(?:"+pn+"(?:"+[Ge,ze,Fe].join("|")+")"+Be+Je+")*",mn=Be+Je+gn,xn="(?:"+[Ge+y+"?",y,ze,Fe,ln].join("|")+")",bn=RegExp(T+"(?="+T+")|"+xn+mn,"g");function hn(e){return e.match(bn)||[]}$e.exports=hn});var Xe=n((li,Ye)=>{var yn=Ve(),Tn=h(),vn=Ke();function Cn(e){return Tn(e)?vn(e):yn(e)}Ye.exports=Cn});var er=n((ci,Qe)=>{var wn=Ze(),Sn=h(),Rn=Xe(),Pn=m();function Ln(e){return function(r){r=Pn(r);var t=Sn(r)?Rn(r):void 0,i=t?t[0]:r.charAt(0),u=t?wn(t,1).join(""):r.slice(1);return i[e]()+u}}Qe.exports=Ln});var tr=n((pi,rr)=>{var An=er(),qn=An("toUpperCase");rr.exports=qn});var ir=n((gi,nr)=>{var On=_e(),jn=tr(),Mn=On(function(e,r,t){return e+(t?" ":"")+jn(r)});nr.exports=Mn});var Nn=xr(ir());function ur(e){return S(x({},e),{json:JSON.stringify(Dn(e),null,2)})}var Un=`
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
    `,_n=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Dn(e){let{name:r,description:t,author:i,result:u,params:a,about:s,video:d}=e,{icon:o=_n}=e;return o==="glide"&&(o=Un),{name:r,description:t,author:i,result:u,about:s,icon:o,video:d,params:Object.entries(a).map(([l,ar])=>x({name:l},ar))}}var En=(e,r,t)=>b(void 0,null,function*(){let i=e==null?void 0:e.value;if(i===void 0)return;let u=r==null?void 0:r.value;if(u===void 0)return;let a=t==null?void 0:t.value;if(a===void 0)return;let{data:s}=yield fetch(`https://translation.googleapis.com/language/translate/v2?key=${a}`,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({q:[i],target:u})}).then(d=>d.json());if(s!==void 0&&s.translations!==void 0&&s.translations.length>0)return s.translations[0].translatedText}),bi=ur({name:"Google Translate",description:"Translate from one language to another",author:"David Siegel <david@glideapps.com>",video:"https://www.youtube.com/watch?v=A3knNbGfXh4",about:`
      Find supported languages at [cloud.google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages).
    `,params:{text:{displayName:"Text",type:"string"},language:{displayName:"Target Language",type:"string"},key:{displayName:"API Key",type:"string"}},result:{type:"string"},run:En,example:{text:"Hello, world!",language:"es"},icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.74 30.15L20.66 25.13L20.72 25.07C24.2 21.19 26.68 16.73 28.14 12.01H34V8H20V4H16V8H2V11.98H24.34C22.99 15.84 20.88 19.5 18 22.7C16.14 20.63 14.6 18.38 13.38 16H9.38C10.84 19.26 12.84 22.34 15.34 25.12L5.17 35.17L8 38L18 28L24.22 34.22L25.74 30.15ZM37 20H33L24 44H28L30.25 38H39.75L42 44H46L37 20ZM31.75 34L35 25.33L38.25 34H31.75Z" fill="currentColor"/>
      </svg>
    `});export{bi as default};
//# sourceMappingURL=function.js.map