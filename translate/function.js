var sr=Object.create;var g=Object.defineProperty,dr=Object.defineProperties,fr=Object.getOwnPropertyDescriptor,lr=Object.getOwnPropertyDescriptors,cr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,gr=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,pr=Object.prototype.propertyIsEnumerable;var C=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&C(e,t,r[t]);if(w)for(var t of w(r))pr.call(r,t)&&C(e,t,r[t]);return e},R=(e,r)=>dr(e,lr(r)),mr=e=>g(e,"__esModule",{value:!0});var n=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var xr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of cr(r))!v.call(e,i)&&i!=="default"&&g(e,i,{get:()=>r[i],enumerable:!(t=fr(r,i))||t.enumerable});return e},br=e=>xr(mr(g(e!=null?sr(gr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var b=(e,r,t)=>new Promise((i,u)=>{var a=o=>{try{d(t.next(o))}catch(f){u(f)}},s=o=>{try{d(t.throw(o))}catch(f){u(f)}},d=o=>o.done?i(o.value):Promise.resolve(o.value).then(a,s);d((t=t.apply(e,r)).next())});var P=n((Zn,S)=>{function hr(e,r,t,i){var u=-1,a=e==null?0:e.length;for(i&&a&&(t=e[++u]);++u<a;)t=r(t,e[u],u,e);return t}S.exports=hr});var L=n((kn,A)=>{function yr(e){return function(r){return e==null?void 0:e[r]}}A.exports=yr});var O=n((Gn,q)=>{var Tr=L(),wr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},vr=Tr(wr);q.exports=vr});var M=n((Vn,j)=>{var Cr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Cr});var U=n((Wn,N)=>{var Rr=M(),Sr=typeof self=="object"&&self&&self.Object===Object&&self,Pr=Rr||Sr||Function("return this")();N.exports=Pr});var p=n((zn,D)=>{var Ar=U(),Lr=Ar.Symbol;D.exports=Lr});var E=n((Fn,_)=>{function qr(e,r){for(var t=-1,i=e==null?0:e.length,u=Array(i);++t<i;)u[t]=r(e[t],t,e);return u}_.exports=qr});var I=n((Jn,H)=>{var Or=Array.isArray;H.exports=Or});var V=n((Bn,G)=>{var Z=p(),k=Object.prototype,jr=k.hasOwnProperty,Mr=k.toString,c=Z?Z.toStringTag:void 0;function Nr(e){var r=jr.call(e,c),t=e[c];try{e[c]=void 0;var i=!0}catch(a){}var u=Mr.call(e);return i&&(r?e[c]=t:delete e[c]),u}G.exports=Nr});var z=n(($n,W)=>{var Ur=Object.prototype,Dr=Ur.toString;function _r(e){return Dr.call(e)}W.exports=_r});var $=n((Kn,B)=>{var F=p(),Er=V(),Hr=z(),Ir="[object Null]",Zr="[object Undefined]",J=F?F.toStringTag:void 0;function kr(e){return e==null?e===void 0?Zr:Ir:J&&J in Object(e)?Er(e):Hr(e)}B.exports=kr});var Y=n((Yn,K)=>{function Gr(e){return e!=null&&typeof e=="object"}K.exports=Gr});var Q=n((Xn,X)=>{var Vr=$(),Wr=Y(),zr="[object Symbol]";function Fr(e){return typeof e=="symbol"||Wr(e)&&Vr(e)==zr}X.exports=Fr});var ue=n((Qn,ie)=>{var ee=p(),Jr=E(),Br=I(),$r=Q(),Kr=1/0,re=ee?ee.prototype:void 0,te=re?re.toString:void 0;function ne(e){if(typeof e=="string")return e;if(Br(e))return Jr(e,ne)+"";if($r(e))return te?te.call(e):"";var r=e+"";return r=="0"&&1/e==-Kr?"-0":r}ie.exports=ne});var m=n((ei,ae)=>{var Yr=ue();function Xr(e){return e==null?"":Yr(e)}ae.exports=Xr});var se=n((ri,oe)=>{var Qr=O(),et=m(),rt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,tt="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",it="\\u20d0-\\u20ff",ut=tt+nt+it,at="["+ut+"]",ot=RegExp(at,"g");function st(e){return e=et(e),e&&e.replace(rt,Qr).replace(ot,"")}oe.exports=st});var fe=n((ti,de)=>{var dt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(e){return e.match(dt)||[]}de.exports=ft});var ce=n((ni,le)=>{var lt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ct(e){return lt.test(e)}le.exports=ct});var je=n((ii,Oe)=>{var ge="\\ud800-\\udfff",gt="\\u0300-\\u036f",pt="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",xt=gt+pt+mt,pe="\\u2700-\\u27bf",me="a-z\\xdf-\\xf6\\xf8-\\xff",bt="\\xac\\xb1\\xd7\\xf7",ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",yt="\\u2000-\\u206f",Tt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",wt="\\ufe0e\\ufe0f",be=bt+ht+yt+Tt,he="['\u2019]",ye="["+be+"]",vt="["+xt+"]",Te="\\d+",Ct="["+pe+"]",we="["+me+"]",ve="[^"+ge+be+Te+pe+me+xe+"]",Rt="\\ud83c[\\udffb-\\udfff]",St="(?:"+vt+"|"+Rt+")",Pt="[^"+ge+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Re="[\\ud800-\\udbff][\\udc00-\\udfff]",l="["+xe+"]",At="\\u200d",Se="(?:"+we+"|"+ve+")",Lt="(?:"+l+"|"+ve+")",Pe="(?:"+he+"(?:d|ll|m|re|s|t|ve))?",Ae="(?:"+he+"(?:D|LL|M|RE|S|T|VE))?",Le=St+"?",qe="["+wt+"]?",qt="(?:"+At+"(?:"+[Pt,Ce,Re].join("|")+")"+qe+Le+")*",Ot="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",jt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Mt=qe+Le+qt,Nt="(?:"+[Ct,Ce,Re].join("|")+")"+Mt,Ut=RegExp([l+"?"+we+"+"+Pe+"(?="+[ye,l,"$"].join("|")+")",Lt+"+"+Ae+"(?="+[ye,l+Se,"$"].join("|")+")",l+"?"+Se+"+"+Pe,l+"+"+Ae,jt,Ot,Te,Nt].join("|"),"g");function Dt(e){return e.match(Ut)||[]}Oe.exports=Dt});var Ne=n((ui,Me)=>{var _t=fe(),Et=ce(),Ht=m(),It=je();function Zt(e,r,t){return e=Ht(e),r=t?void 0:r,r===void 0?Et(e)?It(e):_t(e):e.match(r)||[]}Me.exports=Zt});var De=n((ai,Ue)=>{var kt=P(),Gt=se(),Vt=Ne(),Wt="['\u2019]",zt=RegExp(Wt,"g");function Ft(e){return function(r){return kt(Vt(Gt(r).replace(zt,"")),e,"")}}Ue.exports=Ft});var Ee=n((oi,_e)=>{function Jt(e,r,t){var i=-1,u=e.length;r<0&&(r=-r>u?0:u+r),t=t>u?u:t,t<0&&(t+=u),u=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(u);++i<u;)a[i]=e[i+r];return a}_e.exports=Jt});var Ie=n((si,He)=>{var Bt=Ee();function $t(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:Bt(e,r,t)}He.exports=$t});var h=n((di,Ze)=>{var Kt="\\ud800-\\udfff",Yt="\\u0300-\\u036f",Xt="\\ufe20-\\ufe2f",Qt="\\u20d0-\\u20ff",en=Yt+Xt+Qt,rn="\\ufe0e\\ufe0f",tn="\\u200d",nn=RegExp("["+tn+Kt+en+rn+"]");function un(e){return nn.test(e)}Ze.exports=un});var Ge=n((fi,ke)=>{function an(e){return e.split("")}ke.exports=an});var Ke=n((li,$e)=>{var Ve="\\ud800-\\udfff",on="\\u0300-\\u036f",sn="\\ufe20-\\ufe2f",dn="\\u20d0-\\u20ff",fn=on+sn+dn,ln="\\ufe0e\\ufe0f",cn="["+Ve+"]",y="["+fn+"]",T="\\ud83c[\\udffb-\\udfff]",gn="(?:"+y+"|"+T+")",We="[^"+Ve+"]",ze="(?:\\ud83c[\\udde6-\\uddff]){2}",Fe="[\\ud800-\\udbff][\\udc00-\\udfff]",pn="\\u200d",Je=gn+"?",Be="["+ln+"]?",mn="(?:"+pn+"(?:"+[We,ze,Fe].join("|")+")"+Be+Je+")*",xn=Be+Je+mn,bn="(?:"+[We+y+"?",y,ze,Fe,cn].join("|")+")",hn=RegExp(T+"(?="+T+")|"+bn+xn,"g");function yn(e){return e.match(hn)||[]}$e.exports=yn});var Xe=n((ci,Ye)=>{var Tn=Ge(),wn=h(),vn=Ke();function Cn(e){return wn(e)?vn(e):Tn(e)}Ye.exports=Cn});var er=n((gi,Qe)=>{var Rn=Ie(),Sn=h(),Pn=Xe(),An=m();function Ln(e){return function(r){r=An(r);var t=Sn(r)?Pn(r):void 0,i=t?t[0]:r.charAt(0),u=t?Rn(t,1).join(""):r.slice(1);return i[e]()+u}}Qe.exports=Ln});var tr=n((pi,rr)=>{var qn=er(),On=qn("toUpperCase");rr.exports=On});var ir=n((mi,nr)=>{var jn=De(),Mn=tr(),Nn=jn(function(e,r,t){return e+(t?" ":"")+Mn(r)});nr.exports=Nn});var Un=br(ir());function ur(e){return R(x({},e),{json:JSON.stringify(En(e),null,2)})}var Dn=`
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
</svg>`;function En(e){let{name:r,category:t,description:i,author:u,result:a,params:s,about:d,video:o}=e,{icon:f=_n}=e;return f==="glide"&&(f=Dn),{name:r,category:t,description:i,author:u,result:a,about:d,icon:f,video:o,params:Object.entries(s).map(([ar,or])=>x({name:ar},or))}}var Hn=(e,r,t)=>b(void 0,null,function*(){let i=e==null?void 0:e.value;if(i===void 0)return;let u=r==null?void 0:r.value;if(u===void 0)return;let a=t==null?void 0:t.value;if(a===void 0)return;let{data:s}=yield fetch(`https://translation.googleapis.com/language/translate/v2?key=${a}`,{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify({q:[i],target:u})}).then(d=>d.json());if(s!==void 0&&s.translations!==void 0&&s.translations.length>0)return s.translations[0].translatedText}),hi=ur({name:"Google Translate",category:"Data & APIs",description:"Translate from one language to another",author:"David Siegel <david@glideapps.com>",video:"https://www.youtube.com/watch?v=A3knNbGfXh4",about:`
      Find supported languages at [cloud.google.com/translate/docs/languages](https://cloud.google.com/translate/docs/languages).
    `,params:{text:{displayName:"Text",type:"string"},language:{displayName:"Target Language",type:"string"},key:{displayName:"API Key",type:"string"}},result:{type:"string"},run:Hn,example:{text:"Hello, world!",language:"es"},icon:`
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25.74 30.15L20.66 25.13L20.72 25.07C24.2 21.19 26.68 16.73 28.14 12.01H34V8H20V4H16V8H2V11.98H24.34C22.99 15.84 20.88 19.5 18 22.7C16.14 20.63 14.6 18.38 13.38 16H9.38C10.84 19.26 12.84 22.34 15.34 25.12L5.17 35.17L8 38L18 28L24.22 34.22L25.74 30.15ZM37 20H33L24 44H28L30.25 38H39.75L42 44H46L37 20ZM31.75 34L35 25.33L38.25 34H31.75Z" fill="currentColor"/>
      </svg>
    `});export{hi as default};
//# sourceMappingURL=function.js.map
