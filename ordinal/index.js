(()=>{var zr=Object.create;var O=Object.defineProperty,Ur=Object.defineProperties,_r=Object.getOwnPropertyDescriptor,Ir=Object.getOwnPropertyDescriptors,Er=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,kr=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var D=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))W.call(r,t)&&D(e,t,r[t]);if(F)for(var t of F(r))Fr.call(r,t)&&D(e,t,r[t]);return e},N=(e,r)=>Ur(e,Ir(r)),Wr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Dr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Er(r))!W.call(e,o)&&o!=="default"&&O(e,o,{get:()=>r[o],enumerable:!(t=_r(r,o))||t.enumerable});return e},Z=e=>Dr(Wr(O(e!=null?zr(kr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var U=(e,r,t)=>new Promise((o,s)=>{var g=n=>{try{i(t.next(n))}catch(a){s(a)}},f=n=>{try{i(t.throw(n))}catch(a){s(a)}},i=n=>n.done?o(n.value):Promise.resolve(n.value).then(g,f);i((t=t.apply(e,r)).next())});var G=c((da,H)=>{function Zr(e,r,t,o){var s=-1,g=e==null?0:e.length;for(o&&g&&(t=e[++s]);++s<g;)t=r(t,e[s],s,e);return t}H.exports=Zr});var B=c((ca,V)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Hr});var K=c((ma,J)=>{var Gr=B(),Vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Gr(Vr);J.exports=Br});var Y=c((ga,$)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Jr});var X=c((pa,Q)=>{var Kr=Y(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();Q.exports=Yr});var M=c((ba,ee)=>{var Qr=X(),Xr=Qr.Symbol;ee.exports=Xr});var ne=c((ha,re)=>{function en(e,r){for(var t=-1,o=e==null?0:e.length,s=Array(o);++t<o;)s[t]=r(e[t],t,e);return s}re.exports=en});var ae=c((xa,te)=>{var rn=Array.isArray;te.exports=rn});var se=c((va,oe)=>{var ue=M(),ie=Object.prototype,nn=ie.hasOwnProperty,tn=ie.toString,R=ue?ue.toStringTag:void 0;function an(e){var r=nn.call(e,R),t=e[R];try{e[R]=void 0;var o=!0}catch(g){}var s=tn.call(e);return o&&(r?e[R]=t:delete e[R]),s}oe.exports=an});var le=c((ya,fe)=>{var un=Object.prototype,on=un.toString;function sn(e){return on.call(e)}fe.exports=sn});var ge=c((Ca,me)=>{var de=M(),fn=se(),ln=le(),dn="[object Null]",cn="[object Undefined]",ce=de?de.toStringTag:void 0;function mn(e){return e==null?e===void 0?cn:dn:ce&&ce in Object(e)?fn(e):ln(e)}me.exports=mn});var be=c((Ta,pe)=>{function gn(e){return e!=null&&typeof e=="object"}pe.exports=gn});var xe=c((Sa,he)=>{var pn=ge(),bn=be(),hn="[object Symbol]";function xn(e){return typeof e=="symbol"||bn(e)&&pn(e)==hn}he.exports=xn});var we=c((wa,Se)=>{var ve=M(),vn=ne(),yn=ae(),Cn=xe(),Tn=1/0,ye=ve?ve.prototype:void 0,Ce=ye?ye.toString:void 0;function Te(e){if(typeof e=="string")return e;if(yn(e))return vn(e,Te)+"";if(Cn(e))return Ce?Ce.call(e):"";var r=e+"";return r=="0"&&1/e==-Tn?"-0":r}Se.exports=Te});var q=c((Pa,Pe)=>{var Sn=we();function wn(e){return e==null?"":Sn(e)}Pe.exports=wn});var Ae=c((Ra,Re)=>{var Pn=K(),Rn=q(),An=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,On="\\u0300-\\u036f",Nn="\\ufe20-\\ufe2f",Mn="\\u20d0-\\u20ff",qn=On+Nn+Mn,Ln="["+qn+"]",jn=RegExp(Ln,"g");function zn(e){return e=Rn(e),e&&e.replace(An,Pn).replace(jn,"")}Re.exports=zn});var Ne=c((Aa,Oe)=>{var Un=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function _n(e){return e.match(Un)||[]}Oe.exports=_n});var qe=c((Oa,Me)=>{var In=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function En(e){return In.test(e)}Me.exports=En});var $e=c((Na,Ke)=>{var Le="\\ud800-\\udfff",kn="\\u0300-\\u036f",Fn="\\ufe20-\\ufe2f",Wn="\\u20d0-\\u20ff",Dn=kn+Fn+Wn,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Zn="\\xac\\xb1\\xd7\\xf7",Hn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Gn="\\u2000-\\u206f",Vn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ue="A-Z\\xc0-\\xd6\\xd8-\\xde",Bn="\\ufe0e\\ufe0f",_e=Zn+Hn+Gn+Vn,Ie="['\u2019]",Ee="["+_e+"]",Jn="["+Dn+"]",ke="\\d+",Kn="["+je+"]",Fe="["+ze+"]",We="[^"+Le+_e+ke+je+ze+Ue+"]",$n="\\ud83c[\\udffb-\\udfff]",Yn="(?:"+Jn+"|"+$n+")",Qn="[^"+Le+"]",De="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Ue+"]",Xn="\\u200d",He="(?:"+Fe+"|"+We+")",et="(?:"+P+"|"+We+")",Ge="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Be=Yn+"?",Je="["+Bn+"]?",rt="(?:"+Xn+"(?:"+[Qn,De,Ze].join("|")+")"+Je+Be+")*",nt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",at=Je+Be+rt,ut="(?:"+[Kn,De,Ze].join("|")+")"+at,it=RegExp([P+"?"+Fe+"+"+Ge+"(?="+[Ee,P,"$"].join("|")+")",et+"+"+Ve+"(?="+[Ee,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,tt,nt,ke,ut].join("|"),"g");function ot(e){return e.match(it)||[]}Ke.exports=ot});var Qe=c((Ma,Ye)=>{var st=Ne(),ft=qe(),lt=q(),dt=$e();function ct(e,r,t){return e=lt(e),r=t?void 0:r,r===void 0?ft(e)?dt(e):st(e):e.match(r)||[]}Ye.exports=ct});var er=c((qa,Xe)=>{var mt=G(),gt=Ae(),pt=Qe(),bt="['\u2019]",ht=RegExp(bt,"g");function xt(e){return function(r){return mt(pt(gt(r).replace(ht,"")),e,"")}}Xe.exports=xt});var nr=c((La,rr)=>{function vt(e,r,t){var o=-1,s=e.length;r<0&&(r=-r>s?0:s+r),t=t>s?s:t,t<0&&(t+=s),s=r>t?0:t-r>>>0,r>>>=0;for(var g=Array(s);++o<s;)g[o]=e[o+r];return g}rr.exports=vt});var ar=c((ja,tr)=>{var yt=nr();function Ct(e,r,t){var o=e.length;return t=t===void 0?o:t,!r&&t>=o?e:yt(e,r,t)}tr.exports=Ct});var _=c((za,ur)=>{var Tt="\\ud800-\\udfff",St="\\u0300-\\u036f",wt="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",Rt=St+wt+Pt,At="\\ufe0e\\ufe0f",Ot="\\u200d",Nt=RegExp("["+Ot+Tt+Rt+At+"]");function Mt(e){return Nt.test(e)}ur.exports=Mt});var or=c((Ua,ir)=>{function qt(e){return e.split("")}ir.exports=qt});var pr=c((_a,gr)=>{var sr="\\ud800-\\udfff",Lt="\\u0300-\\u036f",jt="\\ufe20-\\ufe2f",zt="\\u20d0-\\u20ff",Ut=Lt+jt+zt,_t="\\ufe0e\\ufe0f",It="["+sr+"]",I="["+Ut+"]",E="\\ud83c[\\udffb-\\udfff]",Et="(?:"+I+"|"+E+")",fr="[^"+sr+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",kt="\\u200d",cr=Et+"?",mr="["+_t+"]?",Ft="(?:"+kt+"(?:"+[fr,lr,dr].join("|")+")"+mr+cr+")*",Wt=mr+cr+Ft,Dt="(?:"+[fr+I+"?",I,lr,dr,It].join("|")+")",Zt=RegExp(E+"(?="+E+")|"+Dt+Wt,"g");function Ht(e){return e.match(Zt)||[]}gr.exports=Ht});var hr=c((Ia,br)=>{var Gt=or(),Vt=_(),Bt=pr();function Jt(e){return Vt(e)?Bt(e):Gt(e)}br.exports=Jt});var vr=c((Ea,xr)=>{var Kt=ar(),$t=_(),Yt=hr(),Qt=q();function Xt(e){return function(r){r=Qt(r);var t=$t(r)?Yt(r):void 0,o=t?t[0]:r.charAt(0),s=t?Kt(t,1).join(""):r.slice(1);return o[e]()+s}}xr.exports=Xt});var Cr=c((ka,yr)=>{var ea=vr(),ra=ea("toUpperCase");yr.exports=ra});var Sr=c((Fa,Tr)=>{var na=er(),ta=Cr(),aa=na(function(e,r,t){return e+(t?" ":"")+ta(r)});Tr.exports=aa});var Mr=c((j,Nr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Or(j))==="object"?Nr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},o=function(n){return n!==n},s=function(n){return isFinite(n)&&!o(parseFloat(n))},g=function(n){var a=Object.prototype.toString.call(n);return a==="[object Array]"},f={intword:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(n,u)},compactInteger:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var u=parseInt(n,10),l=u<0?"-":"",d=Math.abs(u),m=String(d),y=m.length,h=[13,10,7,4],C=["T","B","M","k"];if(d<1e3)return""+l+m;if(y>h[0]+3)return u.toExponential(a).replace("e+","x10^");for(var x=void 0,v=0;v<h.length;v++){var T=h[v];if(y>=T){x=T;break}}var b=y-x+1,p=m.split(""),S=p.slice(0,b),Lr=p.slice(b,b+a+1),k=S.join(""),A=Lr.join("");A.length<a&&(A+=""+Array(a-A.length+1).join("0"));var z=void 0;if(a===0)z=""+l+k+C[h.indexOf(x)];else{var jr=Number(k+"."+A).toFixed(a);z=""+l+jr+C[h.indexOf(x)]}return z},intComma:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(n,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(n){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var u in r)if(r.hasOwnProperty(u)){var l=r[u];if(n>=l)return f.formatNumber(n/l,a,"")+" "+u+"B"}return n>=1024?f.formatNumber(n/1024,0)+" KB":f.formatNumber(n,0)+f.pluralize(n," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],u=arguments.length<=2||arguments[2]===void 0?",":arguments[2],l=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(b,p,S){return S?b.substr(0,S)+p:""},m=function(b,p,S){return b.substr(S).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(b,p,S){return S?p+f.toFixed(Math.abs(b),S).split(".")[1]:""},h=f.normalizePrecision(a),C=n<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(n||0),h),10)),v=x.length>3?x.length%3:0;return C+d(x,u,v)+m(x,u,v)+y(n,l,h)},toFixed:function(n,a){a=t(a)?a:f.normalizePrecision(a,0);var u=Math.pow(10,a);return(Math.round(n*u)/u).toFixed(a)},normalizePrecision:function(n,a){return n=Math.round(Math.abs(n)),o(n)?a:n},ordinal:function(n){var a=parseInt(n,10);if(a===0)return n;var u=a%100;if([11,12,13].indexOf(u)>=0)return a+"th";var l=a%10,d=void 0;switch(l){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+a+d},times:function(n){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(s(n)&&n>=0){var u=parseFloat(n),l=["never","once","twice"];if(t(a[u]))return String(a[u]);var d=t(l[u])&&l[u].toString();return d||u.toString()+" times"}return null},pluralize:function(n,a,u){return t(n)&&t(a)?(u=t(u)?u:a+"s",parseInt(n,10)===1?a:u):null},truncate:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>a?n.substring(0,a-u.length)+u:n},truncateWords:function(n,a){for(var u=n.split(" "),l="",d=0;d<a;)t(u[d])&&(l+=u[d]+" "),d++;return u.length>a?l+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],l=void 0;return s(n)&&s(a)&&n>a&&(l=a+u),(l||n).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(n,a,u){var l=n.length,d=void 0;if(l<2)return String(n);if(l===2)return n.join(" and ");if(t(a)&&l>a){var m=l-a;d=a,u=t(u)?u:", and "+m+" "+f.pluralize(m,"other")}else d=-1,u=", and "+n[l-1];return n.slice(0,d).join(", ")+u},dictionary:function(n){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],u=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],l="";if(t(n)&&(typeof n=="undefined"?"undefined":Or(n))==="object"&&!g(n)){var d=[];for(var m in n)if(n.hasOwnProperty(m)){var y=n[m];d.push(""+m+a+y)}return d.join(u)}return l},frequency:function(n,a){if(!g(n))return null;var u=n.length,l=f.times(u);return u===0?l+" "+a:a+" "+l},pace:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||a===0)return"No "+f.pluralize(0,u);for(var l="Approximately",d=void 0,m=void 0,y=n/a,h=0;h<e.length;++h){var C=e[h];if(m=y*C.value,m>1){d=C.name;break}}d||(l="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return u=f.pluralize(x,u),l+" "+x+" "+u+" per "+d},nl2br:function(n){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,a)},br2nl:function(n){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,a)},capitalize:function(n){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(a?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(n){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,u=/\S+[A-Z]+\S*/,l=/\s+/,d=/-/,m=void 0;return m=function(h){for(var C=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],T=h.split(C?d:l),b=0;b<T.length;++b){var p=T[b];if(p.indexOf("-")!==-1){v.push(m(p,!0,b===0||b===T.length-1));continue}if(x&&(b===0||b===T.length-1)){v.push(u.test(p)?p:f.capitalize(p));continue}u.test(p)?v.push(p):a.test(p)?v.push(p.toLowerCase()):v.push(f.capitalize(p))}return v.join(C?"-":" ")},m(n)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var wr=Z(Sr());function Pr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Pr):e}function ua(e,r){return U(this,null,function*(){var i;let{data:{key:t,params:o}}=e,s,g;try{s=yield r(...o)}catch(n){s=void 0;try{g=n.toString()}catch(a){g="Exception can't be stringified."}}let f={key:t};s!==void 0&&(s=Pr(s),f.result={type:"string",value:s}),g!==void 0&&(f.error=g),((i=e.source)==null?void 0:i.postMessage).call(i,f,"*")})}function ia(e){return typeof window!="undefined"&&window.addEventListener("message",r=>ua(r,e.run)),N(w({},e),{json:JSON.stringify(sa(e),null,2)})}var oa=`
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
    `,Rr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function sa(e){let{name:r,category:t,description:o,author:s,result:g,params:f,about:i,video:n}=e,{icon:a=Rr}=e;return a==="glide"&&(a=oa),{name:r,category:t,description:o,author:s,result:g,about:i,icon:a,video:n,params:Object.entries(f).map(([u,l])=>w({name:u},l))}}var fa={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Rr,about:void 0,video:void 0,run(){return U(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=w(w({},fa),r),this.requiredParams=[...t]}with(r,t=[]){return new L(w(w({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withDescription(r){return this.with({description:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,o){return o===void 0&&(o=(0,wr.default)(t)),this.with({params:N(w({},this.definition.params),{[t]:{type:r,displayName:o}})})}withRequiredParam(r,t,o){return this.withParam(r,t,o).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,o=this.requiredParams,s=Object.keys(t);function g(...f){let i={};if(f.forEach(({value:n},a)=>{i[s[a]]=n}),!o.some(n=>i[n]===void 0))return r(i)}return ia(N(w({},this.definition),{run:g}))}};function Ar(e,r){return new L({name:e,category:r})}var qr=Z(Mr()),Za=Ar("Ordinal","Number").withDescription("Converts an integer to its ordinal as a string.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withExample({number:22}).run(({number:e})=>qr.default.ordinal(e));})();
//# sourceMappingURL=index.js.map
