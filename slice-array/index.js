(()=>{var me=Object.create;var p=Object.defineProperty,pe=Object.defineProperties,ge=Object.getOwnPropertyDescriptor,be=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertyNames,C=Object.getOwnPropertySymbols,xe=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable;var S=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,l=(r,e)=>{for(var t in e||(e={}))R.call(e,t)&&S(r,t,e[t]);if(C)for(var t of C(e))Te.call(e,t)&&S(r,t,e[t]);return r},g=(r,e)=>pe(r,be(e)),ye=r=>p(r,"__esModule",{value:!0});var u=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var we=(r,e,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of he(e))!R.call(r,i)&&i!=="default"&&p(r,i,{get:()=>e[i],enumerable:!(t=ge(e,i))||t.enumerable});return r},ve=r=>we(ye(p(r!=null?me(xe(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var y=(r,e,t)=>new Promise((i,n)=>{var a=s=>{try{o(t.next(s))}catch(f){n(f)}},d=s=>{try{o(t.throw(s))}catch(f){n(f)}},o=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,d);o((t=t.apply(r,e)).next())});var q=u((zi,A)=>{function Pe(r,e,t,i){var n=-1,a=r==null?0:r.length;for(i&&a&&(t=r[++n]);++n<a;)t=e(t,r[n],n,r);return t}A.exports=Pe});var L=u((Fi,O)=>{function Ce(r){return function(e){return r==null?void 0:r[e]}}O.exports=Ce});var j=u((Hi,M)=>{var Re=L(),Se={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Ae=Re(Se);M.exports=Ae});var U=u((Ji,N)=>{var qe=typeof global=="object"&&global&&global.Object===Object&&global;N.exports=qe});var D=u((Bi,k)=>{var Oe=U(),Le=typeof self=="object"&&self&&self.Object===Object&&self,Me=Oe||Le||Function("return this")();k.exports=Me});var b=u((Yi,_)=>{var je=D(),Ne=je.Symbol;_.exports=Ne});var I=u(($i,E)=>{function Ue(r,e){for(var t=-1,i=r==null?0:r.length,n=Array(i);++t<i;)n[t]=e(r[t],t,r);return n}E.exports=Ue});var Z=u((Ki,V)=>{var ke=Array.isArray;V.exports=ke});var F=u((Qi,z)=>{var W=b(),G=Object.prototype,De=G.hasOwnProperty,_e=G.toString,m=W?W.toStringTag:void 0;function Ee(r){var e=De.call(r,m),t=r[m];try{r[m]=void 0;var i=!0}catch(a){}var n=_e.call(r);return i&&(e?r[m]=t:delete r[m]),n}z.exports=Ee});var J=u((Xi,H)=>{var Ie=Object.prototype,Ve=Ie.toString;function Ze(r){return Ve.call(r)}H.exports=Ze});var K=u((rn,$)=>{var B=b(),We=F(),Ge=J(),ze="[object Null]",Fe="[object Undefined]",Y=B?B.toStringTag:void 0;function He(r){return r==null?r===void 0?Fe:ze:Y&&Y in Object(r)?We(r):Ge(r)}$.exports=He});var X=u((en,Q)=>{function Je(r){return r!=null&&typeof r=="object"}Q.exports=Je});var er=u((tn,rr)=>{var Be=K(),Ye=X(),$e="[object Symbol]";function Ke(r){return typeof r=="symbol"||Ye(r)&&Be(r)==$e}rr.exports=Ke});var sr=u((nn,ar)=>{var tr=b(),Qe=I(),Xe=Z(),rt=er(),et=1/0,ir=tr?tr.prototype:void 0,nr=ir?ir.toString:void 0;function ur(r){if(typeof r=="string")return r;if(Xe(r))return Qe(r,ur)+"";if(rt(r))return nr?nr.call(r):"";var e=r+"";return e=="0"&&1/r==-et?"-0":e}ar.exports=ur});var h=u((un,or)=>{var tt=sr();function it(r){return r==null?"":tt(r)}or.exports=it});var lr=u((an,dr)=>{var nt=j(),ut=h(),at=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,st="\\u0300-\\u036f",ot="\\ufe20-\\ufe2f",dt="\\u20d0-\\u20ff",lt=st+ot+dt,ft="["+lt+"]",ct=RegExp(ft,"g");function mt(r){return r=ut(r),r&&r.replace(at,nt).replace(ct,"")}dr.exports=mt});var cr=u((sn,fr)=>{var pt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function gt(r){return r.match(pt)||[]}fr.exports=gt});var pr=u((on,mr)=>{var bt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function ht(r){return bt.test(r)}mr.exports=ht});var Nr=u((dn,jr)=>{var gr="\\ud800-\\udfff",xt="\\u0300-\\u036f",Tt="\\ufe20-\\ufe2f",yt="\\u20d0-\\u20ff",wt=xt+Tt+yt,br="\\u2700-\\u27bf",hr="a-z\\xdf-\\xf6\\xf8-\\xff",vt="\\xac\\xb1\\xd7\\xf7",Pt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ct="\\u2000-\\u206f",Rt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",xr="A-Z\\xc0-\\xd6\\xd8-\\xde",St="\\ufe0e\\ufe0f",Tr=vt+Pt+Ct+Rt,yr="['\u2019]",wr="["+Tr+"]",At="["+wt+"]",vr="\\d+",qt="["+br+"]",Pr="["+hr+"]",Cr="[^"+gr+Tr+vr+br+hr+xr+"]",Ot="\\ud83c[\\udffb-\\udfff]",Lt="(?:"+At+"|"+Ot+")",Mt="[^"+gr+"]",Rr="(?:\\ud83c[\\udde6-\\uddff]){2}",Sr="[\\ud800-\\udbff][\\udc00-\\udfff]",c="["+xr+"]",jt="\\u200d",Ar="(?:"+Pr+"|"+Cr+")",Nt="(?:"+c+"|"+Cr+")",qr="(?:"+yr+"(?:d|ll|m|re|s|t|ve))?",Or="(?:"+yr+"(?:D|LL|M|RE|S|T|VE))?",Lr=Lt+"?",Mr="["+St+"]?",Ut="(?:"+jt+"(?:"+[Mt,Rr,Sr].join("|")+")"+Mr+Lr+")*",kt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Dt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",_t=Mr+Lr+Ut,Et="(?:"+[qt,Rr,Sr].join("|")+")"+_t,It=RegExp([c+"?"+Pr+"+"+qr+"(?="+[wr,c,"$"].join("|")+")",Nt+"+"+Or+"(?="+[wr,c+Ar,"$"].join("|")+")",c+"?"+Ar+"+"+qr,c+"+"+Or,Dt,kt,vr,Et].join("|"),"g");function Vt(r){return r.match(It)||[]}jr.exports=Vt});var kr=u((ln,Ur)=>{var Zt=cr(),Wt=pr(),Gt=h(),zt=Nr();function Ft(r,e,t){return r=Gt(r),e=t?void 0:e,e===void 0?Wt(r)?zt(r):Zt(r):r.match(e)||[]}Ur.exports=Ft});var _r=u((fn,Dr)=>{var Ht=q(),Jt=lr(),Bt=kr(),Yt="['\u2019]",$t=RegExp(Yt,"g");function Kt(r){return function(e){return Ht(Bt(Jt(e).replace($t,"")),r,"")}}Dr.exports=Kt});var Ir=u((cn,Er)=>{function Qt(r,e,t){var i=-1,n=r.length;e<0&&(e=-e>n?0:n+e),t=t>n?n:t,t<0&&(t+=n),n=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(n);++i<n;)a[i]=r[i+e];return a}Er.exports=Qt});var Zr=u((mn,Vr)=>{var Xt=Ir();function ri(r,e,t){var i=r.length;return t=t===void 0?i:t,!e&&t>=i?r:Xt(r,e,t)}Vr.exports=ri});var w=u((pn,Wr)=>{var ei="\\ud800-\\udfff",ti="\\u0300-\\u036f",ii="\\ufe20-\\ufe2f",ni="\\u20d0-\\u20ff",ui=ti+ii+ni,ai="\\ufe0e\\ufe0f",si="\\u200d",oi=RegExp("["+si+ei+ui+ai+"]");function di(r){return oi.test(r)}Wr.exports=di});var zr=u((gn,Gr)=>{function li(r){return r.split("")}Gr.exports=li});var Qr=u((bn,Kr)=>{var Fr="\\ud800-\\udfff",fi="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",mi="\\u20d0-\\u20ff",pi=fi+ci+mi,gi="\\ufe0e\\ufe0f",bi="["+Fr+"]",v="["+pi+"]",P="\\ud83c[\\udffb-\\udfff]",hi="(?:"+v+"|"+P+")",Hr="[^"+Fr+"]",Jr="(?:\\ud83c[\\udde6-\\uddff]){2}",Br="[\\ud800-\\udbff][\\udc00-\\udfff]",xi="\\u200d",Yr=hi+"?",$r="["+gi+"]?",Ti="(?:"+xi+"(?:"+[Hr,Jr,Br].join("|")+")"+$r+Yr+")*",yi=$r+Yr+Ti,wi="(?:"+[Hr+v+"?",v,Jr,Br,bi].join("|")+")",vi=RegExp(P+"(?="+P+")|"+wi+yi,"g");function Pi(r){return r.match(vi)||[]}Kr.exports=Pi});var re=u((hn,Xr)=>{var Ci=zr(),Ri=w(),Si=Qr();function Ai(r){return Ri(r)?Si(r):Ci(r)}Xr.exports=Ai});var te=u((xn,ee)=>{var qi=Zr(),Oi=w(),Li=re(),Mi=h();function ji(r){return function(e){e=Mi(e);var t=Oi(e)?Li(e):void 0,i=t?t[0]:e.charAt(0),n=t?qi(t,1).join(""):e.slice(1);return i[r]()+n}}ee.exports=ji});var ne=u((Tn,ie)=>{var Ni=te(),Ui=Ni("toUpperCase");ie.exports=Ui});var ae=u((yn,ue)=>{var ki=_r(),Di=ne(),_i=ki(function(r,e,t){return r+(t?" ":"")+Di(e)});ue.exports=_i});var se=ve(ae());function oe(r){return r instanceof Date?r.toISOString():Array.isArray(r)?r.map(oe):r}function Ei(r,e){return y(this,null,function*(){var o;let{data:{key:t,params:i}}=r,n,a;try{n=yield e(...i)}catch(s){n=void 0;try{a=s.toString()}catch(f){a="Exception can't be stringified."}}let d={key:t};n!==void 0&&(n=oe(n),d.result={type:"string",value:n}),a!==void 0&&(d.error=a),((o=r.source)==null?void 0:o.postMessage).call(o,d,"*")})}function Ii(r){return typeof window!="undefined"&&window.addEventListener("message",e=>Ei(e,r.run)),g(l({},r),{json:JSON.stringify(Zi(r),null,2)})}var Vi=`
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
    `,de=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Zi(r){let{name:e,category:t,released:i,description:n,author:a,result:d,params:o,about:s,video:f}=r,{icon:T=de}=r;return T==="glide"&&(T=Vi),{name:e,category:t,released:i,description:n,author:a,result:d,about:s,icon:T,video:f,params:Object.entries(o).map(([fe,ce])=>l({name:fe},ce))}}var Wi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:de,about:void 0,video:void 0,tests:[],run(){return y(this,null,function*(){})}},x=class{constructor(e={},t=[]){this.definition=l(l({},Wi),e),this.requiredParams=[...t]}with(e,t=[]){return new x(l(l({},this.definition),e),[...this.requiredParams,...t])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,t){return this.with({author:`${e} <${t}>`})}withTest(e,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:e,expectedResult:t}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withImageResult(){return this.withResult("image-uri")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,t,i){return i===void 0&&(i=(0,se.default)(t)),this.with({params:g(l({},this.definition.params),{[t]:{type:e,displayName:i}})})}withRequiredParam(e,t,i){return this.withParam(e,t,i).with({},[t])}withPrimitiveParam(e,t){return this.withParam("primitive",e,t)}withStringParam(e,t){return this.withParam("string",e,t)}withDateParam(e,t){return this.withParam("date-time",e,t)}withNumberParam(e,t){return this.withParam("number",e,t)}withRequiredPrimitiveParam(e,t){return this.withRequiredParam("primitive",e,t)}withRequiredStringParam(e,t){return this.withRequiredParam("string",e,t)}withRequiredDateParam(e,t){return this.withRequiredParam("date-time",e,t)}withRequiredNumberParam(e,t){return this.withRequiredParam("number",e,t)}withStringArrayParam(e,t){return this.withParam({kind:"array",items:"string"},e,t)}withRequiredStringArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"string"},e,t)}withNumberArrayParam(e,t){return this.withParam({kind:"array",items:"number"},e,t)}withPrimitiveArrayParam(e,t){return this.withParam({kind:"array",items:"primitive"},e,t)}withRequiredPrimitiveArrayParam(e,t){return this.withRequiredParam({kind:"array",items:"primitive"},e,t)}withExample(e){return this.with({example:e})}run(e){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function a(...d){let o={};if(d.forEach(({value:s},f)=>{o[n[f]]=s}),!i.some(s=>o[s]===void 0))return e(o)}return Ii(g(l({},this.definition),{run:a}))}};function le(r){return new x({name:r})}var Pn=le("Slice Array").withCategory("Array").withReleased("direct").withDescription("Produces a subsection of an array by specifying the start and end indices").withPrimitiveArrayResult().withRequiredPrimitiveArrayParam("values").withNumberParam("start").withNumberParam("end").withTest({values:["0","1","2","3","4"],start:0,end:1},["0"]).withTest({values:["0","1","2","3","4"],start:2,end:void 0},["2","3","4"]).withTest({values:["0","1","2","3","4"],start:void 0,end:3},["0","1","2"]).withTest({values:["0","1","2","3","4"],start:1,end:3},["1","2"]).withTest({values:["0","1","2","3","4"],start:-2,end:-1},["3"]).withTest({values:["0","1","2","3","4"],start:2,end:-1},["2","3"]).withTest({values:void 0},void 0).run(({values:r,start:e,end:t})=>[...r].slice(e,t));})();
//# sourceMappingURL=index.js.map