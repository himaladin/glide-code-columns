(()=>{var cr=Object.create;var m=Object.defineProperty,fr=Object.defineProperties,mr=Object.getOwnPropertyDescriptor,pr=Object.getOwnPropertyDescriptors,gr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var R=(e,r,t)=>r in e?m(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&R(e,t,r[t]);if(w)for(var t of w(r))xr.call(r,t)&&R(e,t,r[t]);return e},P=(e,r)=>fr(e,pr(r)),hr=e=>m(e,"__esModule",{value:!0});var u=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Tr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of gr(r))!v.call(e,n)&&n!=="default"&&m(e,n,{get:()=>r[n],enumerable:!(t=mr(r,n))||t.enumerable});return e},yr=e=>Tr(hr(m(e!=null?cr(br(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var p=(e,r,t)=>new Promise((n,i)=>{var a=o=>{try{s(t.next(o))}catch(d){i(d)}},l=o=>{try{s(t.throw(o))}catch(d){i(d)}},s=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,l);s((t=t.apply(e,r)).next())});var A=u((zi,S)=>{function Cr(e,r,t,n){var i=-1,a=e==null?0:e.length;for(n&&a&&(t=e[++i]);++i<a;)t=r(t,e[i],i,e);return t}S.exports=Cr});var M=u((Gi,q)=>{function wr(e){return function(r){return e==null?void 0:e[r]}}q.exports=wr});var L=u((Wi,O)=>{var vr=M(),Rr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Pr=vr(Rr);O.exports=Pr});var U=u((Fi,j)=>{var Sr=typeof global=="object"&&global&&global.Object===Object&&global;j.exports=Sr});var V=u((Ji,N)=>{var Ar=U(),qr=typeof self=="object"&&self&&self.Object===Object&&self,Mr=Ar||qr||Function("return this")();N.exports=Mr});var g=u((Bi,_)=>{var Or=V(),Lr=Or.Symbol;_.exports=Lr});var D=u(($i,H)=>{function jr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}H.exports=jr});var E=u((Yi,Z)=>{var Ur=Array.isArray;Z.exports=Ur});var G=u((Ki,z)=>{var I=g(),k=Object.prototype,Nr=k.hasOwnProperty,Vr=k.toString,f=I?I.toStringTag:void 0;function _r(e){var r=Nr.call(e,f),t=e[f];try{e[f]=void 0;var n=!0}catch(a){}var i=Vr.call(e);return n&&(r?e[f]=t:delete e[f]),i}z.exports=_r});var F=u((Qi,W)=>{var Hr=Object.prototype,Dr=Hr.toString;function Zr(e){return Dr.call(e)}W.exports=Zr});var Y=u((Xi,$)=>{var J=g(),Er=G(),Ir=F(),kr="[object Null]",zr="[object Undefined]",B=J?J.toStringTag:void 0;function Gr(e){return e==null?e===void 0?zr:kr:B&&B in Object(e)?Er(e):Ir(e)}$.exports=Gr});var Q=u((en,K)=>{function Wr(e){return e!=null&&typeof e=="object"}K.exports=Wr});var ee=u((rn,X)=>{var Fr=Y(),Jr=Q(),Br="[object Symbol]";function $r(e){return typeof e=="symbol"||Jr(e)&&Fr(e)==Br}X.exports=$r});var ae=u((tn,ue)=>{var re=g(),Yr=D(),Kr=E(),Qr=ee(),Xr=1/0,te=re?re.prototype:void 0,ie=te?te.toString:void 0;function ne(e){if(typeof e=="string")return e;if(Kr(e))return Yr(e,ne)+"";if(Qr(e))return ie?ie.call(e):"";var r=e+"";return r=="0"&&1/e==-Xr?"-0":r}ue.exports=ne});var b=u((nn,oe)=>{var et=ae();function rt(e){return e==null?"":et(e)}oe.exports=rt});var de=u((un,se)=>{var tt=L(),it=b(),nt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",at="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",st=ut+at+ot,dt="["+st+"]",lt=RegExp(dt,"g");function ct(e){return e=it(e),e&&e.replace(nt,tt).replace(lt,"")}se.exports=ct});var ce=u((an,le)=>{var ft=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function mt(e){return e.match(ft)||[]}le.exports=mt});var me=u((on,fe)=>{var pt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function gt(e){return pt.test(e)}fe.exports=gt});var je=u((sn,Le)=>{var pe="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",ht="\\u20d0-\\u20ff",Tt=bt+xt+ht,ge="\\u2700-\\u27bf",be="a-z\\xdf-\\xf6\\xf8-\\xff",yt="\\xac\\xb1\\xd7\\xf7",Ct="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",wt="\\u2000-\\u206f",vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xe="A-Z\\xc0-\\xd6\\xd8-\\xde",Rt="\\ufe0e\\ufe0f",he=yt+Ct+wt+vt,Te="['\u2019]",ye="["+he+"]",Pt="["+Tt+"]",Ce="\\d+",St="["+ge+"]",we="["+be+"]",ve="[^"+pe+he+Ce+ge+be+xe+"]",At="\\ud83c[\\udffb-\\udfff]",qt="(?:"+Pt+"|"+At+")",Mt="[^"+pe+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xe+"]",Ot="\\u200d",Se="(?:"+we+"|"+ve+")",Lt="(?:"+c+"|"+ve+")",Ae="(?:"+Te+"(?:d|ll|m|re|s|t|ve))?",qe="(?:"+Te+"(?:D|LL|M|RE|S|T|VE))?",Me=qt+"?",Oe="["+Rt+"]?",jt="(?:"+Ot+"(?:"+[Mt,Re,Pe].join("|")+")"+Oe+Me+")*",Ut="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Vt=Oe+Me+jt,_t="(?:"+[St,Re,Pe].join("|")+")"+Vt,Ht=RegExp([c+"?"+we+"+"+Ae+"(?="+[ye,c,"$"].join("|")+")",Lt+"+"+qe+"(?="+[ye,c+Se,"$"].join("|")+")",c+"?"+Se+"+"+Ae,c+"+"+qe,Nt,Ut,Ce,_t].join("|"),"g");function Dt(e){return e.match(Ht)||[]}Le.exports=Dt});var Ne=u((dn,Ue)=>{var Zt=ce(),Et=me(),It=b(),kt=je();function zt(e,r,t){return e=It(e),r=t?void 0:r,r===void 0?Et(e)?kt(e):Zt(e):e.match(r)||[]}Ue.exports=zt});var _e=u((ln,Ve)=>{var Gt=A(),Wt=de(),Ft=Ne(),Jt="['\u2019]",Bt=RegExp(Jt,"g");function $t(e){return function(r){return Gt(Ft(Wt(r).replace(Bt,"")),e,"")}}Ve.exports=$t});var De=u((cn,He)=>{function Yt(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),t=t>i?i:t,t<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var a=Array(i);++n<i;)a[n]=e[n+r];return a}He.exports=Yt});var Ee=u((fn,Ze)=>{var Kt=De();function Qt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Kt(e,r,t)}Ze.exports=Qt});var h=u((mn,Ie)=>{var Xt="\\ud800-\\udfff",ei="\\u0300-\\u036f",ri="\\ufe20-\\ufe2f",ti="\\u20d0-\\u20ff",ii=ei+ri+ti,ni="\\ufe0e\\ufe0f",ui="\\u200d",ai=RegExp("["+ui+Xt+ii+ni+"]");function oi(e){return ai.test(e)}Ie.exports=oi});var ze=u((pn,ke)=>{function si(e){return e.split("")}ke.exports=si});var Ke=u((gn,Ye)=>{var Ge="\\ud800-\\udfff",di="\\u0300-\\u036f",li="\\ufe20-\\ufe2f",ci="\\u20d0-\\u20ff",fi=di+li+ci,mi="\\ufe0e\\ufe0f",pi="["+Ge+"]",T="["+fi+"]",y="\\ud83c[\\udffb-\\udfff]",gi="(?:"+T+"|"+y+")",We="[^"+Ge+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Je="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Be=gi+"?",$e="["+mi+"]?",xi="(?:"+bi+"(?:"+[We,Fe,Je].join("|")+")"+$e+Be+")*",hi=$e+Be+xi,Ti="(?:"+[We+T+"?",T,Fe,Je,pi].join("|")+")",yi=RegExp(y+"(?="+y+")|"+Ti+hi,"g");function Ci(e){return e.match(yi)||[]}Ye.exports=Ci});var Xe=u((bn,Qe)=>{var wi=ze(),vi=h(),Ri=Ke();function Pi(e){return vi(e)?Ri(e):wi(e)}Qe.exports=Pi});var rr=u((xn,er)=>{var Si=Ee(),Ai=h(),qi=Xe(),Mi=b();function Oi(e){return function(r){r=Mi(r);var t=Ai(r)?qi(r):void 0,n=t?t[0]:r.charAt(0),i=t?Si(t,1).join(""):r.slice(1);return n[e]()+i}}er.exports=Oi});var ir=u((hn,tr)=>{var Li=rr(),ji=Li("toUpperCase");tr.exports=ji});var ur=u((Tn,nr)=>{var Ui=_e(),Ni=ir(),Vi=Ui(function(e,r,t){return e+(t?" ":"")+Ni(r)});nr.exports=Vi});var _i=yr(ur());function ar(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(ar):e}function Hi(e,r){return p(this,null,function*(){var s;let{data:{key:t,params:n}}=e,i,a;try{i=yield r(...n)}catch(o){i=void 0;try{a=o.toString()}catch(d){a="Exception can't be stringified."}}let l={key:t};i!==void 0&&(i=ar(i),l.result={type:"string",value:i}),a!==void 0&&(l.error=a),((s=e.source)==null?void 0:s.postMessage).call(s,l,"*")})}function or(e){return typeof window!="undefined"&&window.addEventListener("message",r=>Hi(r,e.run)),P(x({},e),{json:JSON.stringify(Ei(e),null,2)})}var Di=`
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
    `,Zi=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Ei(e){let{name:r,category:t,description:n,author:i,result:a,params:l,about:s,video:o}=e,{icon:d=Zi}=e;return d==="glide"&&(d=Di),{name:r,category:t,description:n,author:i,result:a,about:s,icon:d,video:o,params:Object.entries(l).map(([dr,lr])=>x({name:dr},lr))}}function sr(e,r){let t="?"+Object.entries(r).map(([n,i])=>`${encodeURIComponent(n)}=${encodeURIComponent(i)}`).join("&");return e+t}var C;(function(r){r.UPC_A="UPC_A"})(C||(C={}));var Ii=(e,r)=>p(void 0,null,function*(){let{value:t}=e,{value:n=500}=r;if(t!==void 0)return sr("https://mobiledemand-barcode.azurewebsites.net/barcode/image",{content:t,size:n,symbology:C.UPC_A,format:"png",text:!0})}),Rn=or({name:"Barcode",category:"Image",description:"Generates barcode images",about:`
      Uses [ruggedtabletpc.com](https://ruggedtabletpc.com) to generate images of barcodes.

      Only supports 11-digit barcodes for now.
    `,author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:12345678910,size:250},result:{type:"image-uri"},run:Ii,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4H1V44H3V4Z" fill="currentColor"/>
    <path d="M47 4H45V44H47V4Z" fill="currentColor"/>
    <path d="M8 4H6V39H8V4Z" fill="currentColor"/>
    <path d="M42 4H40V39H42V4Z" fill="currentColor"/>
    <path d="M37 4H35V39H37V4Z" fill="currentColor"/>
    <path d="M18 4H11V39H18V4Z" fill="currentColor"/>
    <path d="M33 4H27V39H33V4Z" fill="currentColor"/>
    <path d="M24 4H21V39H24V4Z" fill="currentColor"/>
    </svg>`});})();
//# sourceMappingURL=index.js.map
