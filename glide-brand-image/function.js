var lr=Object.create;var g=Object.defineProperty,mr=Object.defineProperties,pr=Object.getOwnPropertyDescriptor,gr=Object.getOwnPropertyDescriptors,hr=Object.getOwnPropertyNames,w=Object.getOwnPropertySymbols,br=Object.getPrototypeOf,v=Object.prototype.hasOwnProperty,xr=Object.prototype.propertyIsEnumerable;var S=(e,r,t)=>r in e?g(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,l=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&S(e,t,r[t]);if(w)for(var t of w(r))xr.call(r,t)&&S(e,t,r[t]);return e},P=(e,r)=>mr(e,gr(r)),yr=e=>g(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Tr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of hr(r))!v.call(e,n)&&n!=="default"&&g(e,n,{get:()=>r[n],enumerable:!(t=pr(r,n))||t.enumerable});return e},Cr=e=>Tr(yr(g(e!=null?lr(br(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var c=(e,r,t)=>new Promise((n,i)=>{var u=s=>{try{f(t.next(s))}catch(d){i(d)}},o=s=>{try{f(t.throw(s))}catch(d){i(d)}},f=s=>s.done?n(s.value):Promise.resolve(s.value).then(u,o);f((t=t.apply(e,r)).next())});var O=a((Hi,q)=>{function wr(e,r,t,n){var i=-1,u=e==null?0:e.length;for(n&&u&&(t=e[++i]);++i<u;)t=r(t,e[i],i,e);return t}q.exports=wr});var L=a((Ji,j)=>{function vr(e){return function(r){return e==null?void 0:e[r]}}j.exports=vr});var D=a((Bi,M)=>{var Sr=L(),Pr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Rr=Sr(Pr);M.exports=Rr});var U=a(($i,N)=>{var Ar=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=Ar});var E=a((Yi,_)=>{var qr=U(),Or=typeof self=="object"&&self&&self.Object===Object&&self,jr=qr||Or||Function("return this")();_.exports=jr});var h=a((Ki,I)=>{var Lr=E(),Mr=Lr.Symbol;I.exports=Mr});var W=a((Xi,G)=>{function Dr(e,r){for(var t=-1,n=e==null?0:e.length,i=Array(n);++t<n;)i[t]=r(e[t],t,e);return i}G.exports=Dr});var k=a((Qi,Z)=>{var Nr=Array.isArray;Z.exports=Nr});var H=a((en,F)=>{var V=h(),z=Object.prototype,Ur=z.hasOwnProperty,_r=z.toString,p=V?V.toStringTag:void 0;function Er(e){var r=Ur.call(e,p),t=e[p];try{e[p]=void 0;var n=!0}catch(u){}var i=_r.call(e);return n&&(r?e[p]=t:delete e[p]),i}F.exports=Er});var B=a((rn,J)=>{var Ir=Object.prototype,Gr=Ir.toString;function Wr(e){return Gr.call(e)}J.exports=Wr});var X=a((tn,K)=>{var $=h(),Zr=H(),kr=B(),Vr="[object Null]",zr="[object Undefined]",Y=$?$.toStringTag:void 0;function Fr(e){return e==null?e===void 0?zr:Vr:Y&&Y in Object(e)?Zr(e):kr(e)}K.exports=Fr});var ee=a((nn,Q)=>{function Hr(e){return e!=null&&typeof e=="object"}Q.exports=Hr});var te=a((an,re)=>{var Jr=X(),Br=ee(),$r="[object Symbol]";function Yr(e){return typeof e=="symbol"||Br(e)&&Jr(e)==$r}re.exports=Yr});var oe=a((un,se)=>{var ie=h(),Kr=W(),Xr=k(),Qr=te(),et=1/0,ne=ie?ie.prototype:void 0,ae=ne?ne.toString:void 0;function ue(e){if(typeof e=="string")return e;if(Xr(e))return Kr(e,ue)+"";if(Qr(e))return ae?ae.call(e):"";var r=e+"";return r=="0"&&1/e==-et?"-0":r}se.exports=ue});var b=a((sn,de)=>{var rt=oe();function tt(e){return e==null?"":rt(e)}de.exports=tt});var fe=a((on,ce)=>{var it=D(),nt=b(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ut="\\u0300-\\u036f",st="\\ufe20-\\ufe2f",ot="\\u20d0-\\u20ff",dt=ut+st+ot,ct="["+dt+"]",ft=RegExp(ct,"g");function lt(e){return e=nt(e),e&&e.replace(at,it).replace(ft,"")}ce.exports=lt});var me=a((dn,le)=>{var mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function pt(e){return e.match(mt)||[]}le.exports=pt});var ge=a((cn,pe)=>{var gt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(e){return gt.test(e)}pe.exports=ht});var Ne=a((fn,De)=>{var he="\\ud800-\\udfff",bt="\\u0300-\\u036f",xt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",Tt=bt+xt+yt,be="\\u2700-\\u27bf",xe="a-z\\xdf-\\xf6\\xf8-\\xff",Ct="\\xac\\xb1\\xd7\\xf7",wt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",vt="\\u2000-\\u206f",St=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ye="A-Z\\xc0-\\xd6\\xd8-\\xde",Pt="\\ufe0e\\ufe0f",Te=Ct+wt+vt+St,Ce="['\u2019]",we="["+Te+"]",Rt="["+Tt+"]",ve="\\d+",At="["+be+"]",Se="["+xe+"]",Pe="[^"+he+Te+ve+be+xe+ye+"]",qt="\\ud83c[\\udffb-\\udfff]",Ot="(?:"+Rt+"|"+qt+")",jt="[^"+he+"]",Re="(?:\\ud83c[\\udde6-\\uddff]){2}",Ae="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ye+"]",Lt="\\u200d",qe="(?:"+Se+"|"+Pe+")",Mt="(?:"+m+"|"+Pe+")",Oe="(?:"+Ce+"(?:d|ll|m|re|s|t|ve))?",je="(?:"+Ce+"(?:D|LL|M|RE|S|T|VE))?",Le=Ot+"?",Me="["+Pt+"]?",Dt="(?:"+Lt+"(?:"+[jt,Re,Ae].join("|")+")"+Me+Le+")*",Nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ut="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Me+Le+Dt,Et="(?:"+[At,Re,Ae].join("|")+")"+_t,It=RegExp([m+"?"+Se+"+"+Oe+"(?="+[we,m,"$"].join("|")+")",Mt+"+"+je+"(?="+[we,m+qe,"$"].join("|")+")",m+"?"+qe+"+"+Oe,m+"+"+je,Ut,Nt,ve,Et].join("|"),"g");function Gt(e){return e.match(It)||[]}De.exports=Gt});var _e=a((ln,Ue)=>{var Wt=me(),Zt=ge(),kt=b(),Vt=Ne();function zt(e,r,t){return e=kt(e),r=t?void 0:r,r===void 0?Zt(e)?Vt(e):Wt(e):e.match(r)||[]}Ue.exports=zt});var Ie=a((mn,Ee)=>{var Ft=O(),Ht=fe(),Jt=_e(),Bt="['\u2019]",$t=RegExp(Bt,"g");function Yt(e){return function(r){return Ft(Jt(Ht(r).replace($t,"")),e,"")}}Ee.exports=Yt});var We=a((pn,Ge)=>{function Kt(e,r,t){var n=-1,i=e.length;r<0&&(r=-r>i?0:i+r),t=t>i?i:t,t<0&&(t+=i),i=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(i);++n<i;)u[n]=e[n+r];return u}Ge.exports=Kt});var ke=a((gn,Ze)=>{var Xt=We();function Qt(e,r,t){var n=e.length;return t=t===void 0?n:t,!r&&t>=n?e:Xt(e,r,t)}Ze.exports=Qt});var y=a((hn,Ve)=>{var ei="\\ud800-\\udfff",ri="\\u0300-\\u036f",ti="\\ufe20-\\ufe2f",ii="\\u20d0-\\u20ff",ni=ri+ti+ii,ai="\\ufe0e\\ufe0f",ui="\\u200d",si=RegExp("["+ui+ei+ni+ai+"]");function oi(e){return si.test(e)}Ve.exports=oi});var Fe=a((bn,ze)=>{function di(e){return e.split("")}ze.exports=di});var Qe=a((xn,Xe)=>{var He="\\ud800-\\udfff",ci="\\u0300-\\u036f",fi="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",mi=ci+fi+li,pi="\\ufe0e\\ufe0f",gi="["+He+"]",T="["+mi+"]",C="\\ud83c[\\udffb-\\udfff]",hi="(?:"+T+"|"+C+")",Je="[^"+He+"]",Be="(?:\\ud83c[\\udde6-\\uddff]){2}",$e="[\\ud800-\\udbff][\\udc00-\\udfff]",bi="\\u200d",Ye=hi+"?",Ke="["+pi+"]?",xi="(?:"+bi+"(?:"+[Je,Be,$e].join("|")+")"+Ke+Ye+")*",yi=Ke+Ye+xi,Ti="(?:"+[Je+T+"?",T,Be,$e,gi].join("|")+")",Ci=RegExp(C+"(?="+C+")|"+Ti+yi,"g");function wi(e){return e.match(Ci)||[]}Xe.exports=wi});var rr=a((yn,er)=>{var vi=Fe(),Si=y(),Pi=Qe();function Ri(e){return Si(e)?Pi(e):vi(e)}er.exports=Ri});var ir=a((Tn,tr)=>{var Ai=ke(),qi=y(),Oi=rr(),ji=b();function Li(e){return function(r){r=ji(r);var t=qi(r)?Oi(r):void 0,n=t?t[0]:r.charAt(0),i=t?Ai(t,1).join(""):r.slice(1);return n[e]()+i}}tr.exports=Li});var ar=a((Cn,nr)=>{var Mi=ir(),Di=Mi("toUpperCase");nr.exports=Di});var sr=a((wn,ur)=>{var Ni=Ie(),Ui=ar(),_i=Ni(function(e,r,t){return e+(t?" ":"")+Ui(r)});ur.exports=_i});var R={timeoutSeconds:5*60};function A(e){return(new Date().getTime()-e.getTime())/1e3}var x=class{constructor(r=R){this.cache=new Map;this.props=l(l({},r),R)}get(r){return c(this,null,function*(){var i;let{timestamp:t,item:n}=(i=this.cache.get(r))!=null?i:{timestamp:new Date(0)};if(A(t)<this.props.timeoutSeconds)return n;this.cache.delete(r)})}getWith(r,t){return c(this,null,function*(){var u;let{timestamp:n,item:i}=(u=this.cache.get(r))!=null?u:{timestamp:new Date(0)};if(A(n)<this.props.timeoutSeconds)return i;{let o=yield t(r);return this.set(r,o),o}})}set(r,t){return this.cache.set(r,{timestamp:new Date,item:t})}fetch(n){return c(this,arguments,function*(r,t=r){return yield this.getWith(t,()=>fetch(r).then(i=>i.json()))})}};var Ei=Cr(sr());function or(e){return P(l({},e),{json:JSON.stringify(Wi(e),null,2)})}var Ii=`
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
    `,Gi=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Wi(e){let{name:r,category:t,description:n,author:i,result:u,params:o,about:f,video:s}=e,{icon:d=Gi}=e;return d==="glide"&&(d=Ii),{name:r,category:t,description:n,author:i,result:u,about:f,icon:d,video:s,params:Object.entries(o).map(([cr,fr])=>l({name:cr},fr))}}function Zi(e){let r=`${e}`,t=0;if(r.length===0)return t;for(let n=0;n<r.length;n++){let i=r.charCodeAt(n);t=(t<<5)-t+i,t=t&t}return t}var dr="3d",ki=new x({timeoutSeconds:Number.MAX_SAFE_INTEGER}),Vi=(e,r)=>c(void 0,null,function*(){var s;let{value:t=dr}=e,{value:n}=r;if(n===void 0)return;let i=yield ki.fetch("https://column.sh/glide-brand-image/images.json"),u=(s=i[t])!=null?s:i[dr],o=Math.abs(Zi(n));return`https://column.sh${u[o%u.length]}`}),Rn=or({name:"Glide Brand Image",category:"Glide",description:"Glide 3D Data Shapes",author:"David Siegel <david@glideapps.com>",params:{category:{displayName:"Category (3d, avatar, or gradient)",type:"string"},random:{displayName:"Seed Value",type:"string"}},example:{category:"3d",random:"glideapps.com"},result:{type:"image-uri"},run:Vi,icon:"glide"});export{Rn as default};
//# sourceMappingURL=function.js.map
