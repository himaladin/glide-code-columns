var se=Object.create;var c=Object.defineProperty,le=Object.defineProperties,fe=Object.getOwnPropertyDescriptor,de=Object.getOwnPropertyDescriptors,ce=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,pe=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var T=(r,e,t)=>e in r?c(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,x=(r,e)=>{for(var t in e||(e={}))y.call(e,t)&&T(r,t,e[t]);if(C)for(var t of C(e))me.call(e,t)&&T(r,t,e[t]);return r},v=(r,e)=>le(r,de(e)),ge=r=>c(r,"__esModule",{value:!0});var i=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var xe=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of ce(e))!y.call(r,n)&&n!=="default"&&c(r,n,{get:()=>e[n],enumerable:!(t=fe(e,n))||t.enumerable});return r},be=r=>xe(ge(c(r!=null?se(pe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var b=(r,e,t)=>new Promise((n,u)=>{var a=o=>{try{l(t.next(o))}catch(f){u(f)}},g=o=>{try{l(t.throw(o))}catch(f){u(f)}},l=o=>o.done?n(o.value):Promise.resolve(o.value).then(a,g);l((t=t.apply(r,e)).next())});var R=i((En,w)=>{function he(r,e,t,n){var u=-1,a=r==null?0:r.length;for(n&&a&&(t=r[++u]);++u<a;)t=e(t,r[u],u,r);return t}w.exports=he});var P=i((In,S)=>{function He(r){return function(e){return r==null?void 0:r[e]}}S.exports=He});var q=i((kn,M)=>{var Ve=P(),Ce={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},ye=Ve(Ce);M.exports=ye});var O=i((zn,A)=>{var Te=typeof global=="object"&&global&&global.Object===Object&&global;A.exports=Te});var L=i((Wn,j)=>{var ve=O(),we=typeof self=="object"&&self&&self.Object===Object&&self,Re=ve||we||Function("return this")();j.exports=Re});var p=i((Gn,Z)=>{var Se=L(),Pe=Se.Symbol;Z.exports=Pe});var N=i((Fn,U)=>{function Me(r,e){for(var t=-1,n=r==null?0:r.length,u=Array(n);++t<n;)u[t]=e(r[t],t,r);return u}U.exports=Me});var D=i((Jn,_)=>{var qe=Array.isArray;_.exports=qe});var z=i(($n,k)=>{var E=p(),I=Object.prototype,Ae=I.hasOwnProperty,Oe=I.toString,d=E?E.toStringTag:void 0;function je(r){var e=Ae.call(r,d),t=r[d];try{r[d]=void 0;var n=!0}catch(a){}var u=Oe.call(r);return n&&(e?r[d]=t:delete r[d]),u}k.exports=je});var G=i((Bn,W)=>{var Le=Object.prototype,Ze=Le.toString;function Ue(r){return Ze.call(r)}W.exports=Ue});var B=i((Qn,$)=>{var F=p(),Ne=z(),_e=G(),De="[object Null]",Ee="[object Undefined]",J=F?F.toStringTag:void 0;function Ie(r){return r==null?r===void 0?Ee:De:J&&J in Object(r)?Ne(r):_e(r)}$.exports=Ie});var Y=i((Yn,Q)=>{function ke(r){return r!=null&&typeof r=="object"}Q.exports=ke});var X=i((Kn,K)=>{var ze=B(),We=Y(),Ge="[object Symbol]";function Fe(r){return typeof r=="symbol"||We(r)&&ze(r)==Ge}K.exports=Fe});var ur=i((Xn,ir)=>{var rr=p(),Je=N(),$e=D(),Be=X(),Qe=1/0,er=rr?rr.prototype:void 0,tr=er?er.toString:void 0;function nr(r){if(typeof r=="string")return r;if($e(r))return Je(r,nr)+"";if(Be(r))return tr?tr.call(r):"";var e=r+"";return e=="0"&&1/r==-Qe?"-0":e}ir.exports=nr});var m=i((ri,or)=>{var Ye=ur();function Ke(r){return r==null?"":Ye(r)}or.exports=Ke});var sr=i((ei,ar)=>{var Xe=q(),rt=m(),et=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,tt="\\u0300-\\u036f",nt="\\ufe20-\\ufe2f",it="\\u20d0-\\u20ff",ut=tt+nt+it,ot="["+ut+"]",at=RegExp(ot,"g");function st(r){return r=rt(r),r&&r.replace(et,Xe).replace(at,"")}ar.exports=st});var fr=i((ti,lr)=>{var lt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ft(r){return r.match(lt)||[]}lr.exports=ft});var cr=i((ni,dr)=>{var dt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ct(r){return dt.test(r)}dr.exports=ct});var Ar=i((ii,qr)=>{var pr="\\ud800-\\udfff",pt="\\u0300-\\u036f",mt="\\ufe20-\\ufe2f",gt="\\u20d0-\\u20ff",xt=pt+mt+gt,mr="\\u2700-\\u27bf",gr="a-z\\xdf-\\xf6\\xf8-\\xff",bt="\\xac\\xb1\\xd7\\xf7",ht="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ht="\\u2000-\\u206f",Vt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",Ct="\\ufe0e\\ufe0f",br=bt+ht+Ht+Vt,hr="['\u2019]",Hr="["+br+"]",yt="["+xt+"]",Vr="\\d+",Tt="["+mr+"]",Cr="["+gr+"]",yr="[^"+pr+br+Vr+mr+gr+xr+"]",vt="\\ud83c[\\udffb-\\udfff]",wt="(?:"+yt+"|"+vt+")",Rt="[^"+pr+"]",Tr="(?:\\ud83c[\\udde6-\\uddff]){2}",vr="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+xr+"]",St="\\u200d",wr="(?:"+Cr+"|"+yr+")",Pt="(?:"+s+"|"+yr+")",Rr="(?:"+hr+"(?:d|ll|m|re|s|t|ve))?",Sr="(?:"+hr+"(?:D|LL|M|RE|S|T|VE))?",Pr=wt+"?",Mr="["+Ct+"]?",Mt="(?:"+St+"(?:"+[Rt,Tr,vr].join("|")+")"+Mr+Pr+")*",qt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",At="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ot=Mr+Pr+Mt,jt="(?:"+[Tt,Tr,vr].join("|")+")"+Ot,Lt=RegExp([s+"?"+Cr+"+"+Rr+"(?="+[Hr,s,"$"].join("|")+")",Pt+"+"+Sr+"(?="+[Hr,s+wr,"$"].join("|")+")",s+"?"+wr+"+"+Rr,s+"+"+Sr,At,qt,Vr,jt].join("|"),"g");function Zt(r){return r.match(Lt)||[]}qr.exports=Zt});var jr=i((ui,Or)=>{var Ut=fr(),Nt=cr(),_t=m(),Dt=Ar();function Et(r,e,t){return r=_t(r),e=t?void 0:e,e===void 0?Nt(r)?Dt(r):Ut(r):r.match(e)||[]}Or.exports=Et});var Zr=i((oi,Lr)=>{var It=R(),kt=sr(),zt=jr(),Wt="['\u2019]",Gt=RegExp(Wt,"g");function Ft(r){return function(e){return It(zt(kt(e).replace(Gt,"")),r,"")}}Lr.exports=Ft});var Nr=i((ai,Ur)=>{function Jt(r,e,t){var n=-1,u=r.length;e<0&&(e=-e>u?0:u+e),t=t>u?u:t,t<0&&(t+=u),u=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(u);++n<u;)a[n]=r[n+e];return a}Ur.exports=Jt});var Dr=i((si,_r)=>{var $t=Nr();function Bt(r,e,t){var n=r.length;return t=t===void 0?n:t,!e&&t>=n?r:$t(r,e,t)}_r.exports=Bt});var h=i((li,Er)=>{var Qt="\\ud800-\\udfff",Yt="\\u0300-\\u036f",Kt="\\ufe20-\\ufe2f",Xt="\\u20d0-\\u20ff",rn=Yt+Kt+Xt,en="\\ufe0e\\ufe0f",tn="\\u200d",nn=RegExp("["+tn+Qt+rn+en+"]");function un(r){return nn.test(r)}Er.exports=un});var kr=i((fi,Ir)=>{function on(r){return r.split("")}Ir.exports=on});var Qr=i((di,Br)=>{var zr="\\ud800-\\udfff",an="\\u0300-\\u036f",sn="\\ufe20-\\ufe2f",ln="\\u20d0-\\u20ff",fn=an+sn+ln,dn="\\ufe0e\\ufe0f",cn="["+zr+"]",H="["+fn+"]",V="\\ud83c[\\udffb-\\udfff]",pn="(?:"+H+"|"+V+")",Wr="[^"+zr+"]",Gr="(?:\\ud83c[\\udde6-\\uddff]){2}",Fr="[\\ud800-\\udbff][\\udc00-\\udfff]",mn="\\u200d",Jr=pn+"?",$r="["+dn+"]?",gn="(?:"+mn+"(?:"+[Wr,Gr,Fr].join("|")+")"+$r+Jr+")*",xn=$r+Jr+gn,bn="(?:"+[Wr+H+"?",H,Gr,Fr,cn].join("|")+")",hn=RegExp(V+"(?="+V+")|"+bn+xn,"g");function Hn(r){return r.match(hn)||[]}Br.exports=Hn});var Kr=i((ci,Yr)=>{var Vn=kr(),Cn=h(),yn=Qr();function Tn(r){return Cn(r)?yn(r):Vn(r)}Yr.exports=Tn});var re=i((pi,Xr)=>{var vn=Dr(),wn=h(),Rn=Kr(),Sn=m();function Pn(r){return function(e){e=Sn(e);var t=wn(e)?Rn(e):void 0,n=t?t[0]:e.charAt(0),u=t?vn(t,1).join(""):e.slice(1);return n[r]()+u}}Xr.exports=Pn});var te=i((mi,ee)=>{var Mn=re(),qn=Mn("toUpperCase");ee.exports=qn});var ie=i((gi,ne)=>{var An=Zr(),On=te(),jn=An(function(r,e,t){return r+(t?" ":"")+On(e)});ne.exports=jn});var Ln=be(ie());function ue(r){return v(x({},r),{json:JSON.stringify(Nn(r),null,2)})}var Zn=`
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
    `,Un=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Nn(r){let{name:e,description:t,author:n,result:u,params:a,about:g,video:l}=r,{icon:o=Un}=r;return o==="glide"&&(o=Zn),{name:e,description:t,author:n,result:u,about:g,icon:o,video:l,params:Object.entries(a).map(([f,ae])=>x({name:f},ae))}}function oe(r,e){let t="?"+Object.entries(e).map(([n,u])=>`${encodeURIComponent(n)}=${encodeURIComponent(u)}`).join("&");return r+t}var _n=(r,e)=>b(void 0,null,function*(){let{value:t}=r,{value:n=500}=e;if(t!==void 0)return oe("https://api.qrserver.com/v1/create-qr-code/",{data:t,size:`${n}x${n}`,margin:0})}),Vi=ue({name:"QR Code",description:"Generate QR codes",about:`
      Uses [goQR.me](https://goqr.me/api/)'s QR code generation API.
    `,video:"https://www.youtube.com/watch?v=142TGhaTMtI",author:"David Siegel <david@glideapps.com>",params:{content:{displayName:"Content",type:"primitive"},size:{displayName:"Size",type:"number"}},example:{content:"https://glideapps.com",size:250},result:{type:"image-uri"},run:_n,icon:`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 2H2V16H16V2ZM14 14H4V4H14V14Z" fill="currentColor"/>
      <path d="M31 42H29V46H46V44H31V42Z" fill="currentColor"/>
      <path d="M12 6H6V12H12V6Z" fill="currentColor"/>
      <path d="M2 46H16V32H2V46ZM4 34H14V44H4V34Z" fill="currentColor"/>
      <path d="M12 36H6V42H12V36Z" fill="currentColor"/>
      <path d="M32 2V16H46V2H32ZM44 14H34V4H44V14Z" fill="currentColor"/>
      <path d="M42 6H36V12H42V6Z" fill="currentColor"/>
      <path d="M46 18H42V22H46V18Z" fill="currentColor"/>
      <path d="M6 26H2V30H6V26Z" fill="currentColor"/>
      <path d="M23 18H15V20H25V16V14H27V10H25H23H21V6H23V8H30V2H28V6H25V2H24H20H19V12H23V14H19V16H23V18Z" fill="currentColor"/>
      <path d="M5 24H9H11H12V26H8V28H12V30H20V28H14V26V22H11V19H9V22H7V18H2V20H5V24Z" fill="currentColor"/>
      <path d="M24 42V37H20V33H18V39H22V42H18V44H22V46H27V44H24V42Z" fill="currentColor"/>
      <path d="M34 22H30V17H28V24H38V22H36V20H39V18H36H34H32V20H34V22Z" fill="currentColor"/>
      <path d="M32 40H35V42H39V40V38V35H35V38H32V35H30V38H28V30H26V28H24V22H17V26H19V24H22V28V32H26V38V40H28H30H32Z" fill="currentColor"/>
      <path d="M44 27H41H39H34V31H32V27H30V33H36V29H39V32H41V29H44V35H41V41H46V39H43V37H46V29V27V24H44V27Z" fill="currentColor"/>
      </svg>
      `});export{Vi as default};
//# sourceMappingURL=function.js.map