(()=>{var zr=Object.create;var O=Object.defineProperty,Ir=Object.defineProperties,Ur=Object.getOwnPropertyDescriptor,_r=Object.getOwnPropertyDescriptors,Dr=Object.getOwnPropertyNames,F=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,k=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable;var W=(e,r,n)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,S=(e,r)=>{for(var n in r||(r={}))k.call(r,n)&&W(e,n,r[n]);if(F)for(var n of F(r))Fr.call(r,n)&&W(e,n,r[n]);return e},M=(e,r)=>Ir(e,_r(r)),kr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Dr(r))!k.call(e,s)&&s!=="default"&&O(e,s,{get:()=>r[s],enumerable:!(n=Ur(r,s))||n.enumerable});return e},Z=e=>Wr(kr(O(e!=null?zr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var I=(e,r,n)=>new Promise((s,o)=>{var g=t=>{try{u(n.next(t))}catch(a){o(a)}},f=t=>{try{u(n.throw(t))}catch(a){o(a)}},u=t=>t.done?s(t.value):Promise.resolve(t.value).then(g,f);u((n=n.apply(e,r)).next())});var G=c((la,H)=>{function Zr(e,r,n,s){var o=-1,g=e==null?0:e.length;for(s&&g&&(n=e[++o]);++o<g;)n=r(n,e[o],o,e);return n}H.exports=Zr});var B=c((ca,V)=>{function Hr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Hr});var K=c((ma,J)=>{var Gr=B(),Vr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Br=Gr(Vr);J.exports=Br});var Y=c((ga,$)=>{var Jr=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Jr});var X=c((pa,Q)=>{var Kr=Y(),$r=typeof self=="object"&&self&&self.Object===Object&&self,Yr=Kr||$r||Function("return this")();Q.exports=Yr});var q=c((ha,ee)=>{var Qr=X(),Xr=Qr.Symbol;ee.exports=Xr});var te=c((ba,re)=>{function et(e,r){for(var n=-1,s=e==null?0:e.length,o=Array(s);++n<s;)o[n]=r(e[n],n,e);return o}re.exports=et});var ae=c((va,ne)=>{var rt=Array.isArray;ne.exports=rt});var oe=c((xa,se)=>{var ie=q(),ue=Object.prototype,tt=ue.hasOwnProperty,nt=ue.toString,R=ie?ie.toStringTag:void 0;function at(e){var r=tt.call(e,R),n=e[R];try{e[R]=void 0;var s=!0}catch(g){}var o=nt.call(e);return s&&(r?e[R]=n:delete e[R]),o}se.exports=at});var de=c((ya,fe)=>{var it=Object.prototype,ut=it.toString;function st(e){return ut.call(e)}fe.exports=st});var ge=c((Ta,me)=>{var le=q(),ot=oe(),ft=de(),dt="[object Null]",lt="[object Undefined]",ce=le?le.toStringTag:void 0;function ct(e){return e==null?e===void 0?lt:dt:ce&&ce in Object(e)?ot(e):ft(e)}me.exports=ct});var he=c((Ca,pe)=>{function mt(e){return e!=null&&typeof e=="object"}pe.exports=mt});var ve=c((wa,be)=>{var gt=ge(),pt=he(),ht="[object Symbol]";function bt(e){return typeof e=="symbol"||pt(e)&&gt(e)==ht}be.exports=bt});var Se=c((Sa,we)=>{var xe=q(),vt=te(),xt=ae(),yt=ve(),Tt=1/0,ye=xe?xe.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(xt(e))return vt(e,Ce)+"";if(yt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tt?"-0":r}we.exports=Ce});var N=c((Pa,Pe)=>{var Ct=Se();function wt(e){return e==null?"":Ct(e)}Pe.exports=wt});var Ae=c((Ra,Re)=>{var St=K(),Pt=N(),Rt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,At="\\u0300-\\u036f",Ot="\\ufe20-\\ufe2f",Mt="\\u20d0-\\u20ff",qt=At+Ot+Mt,Nt="["+qt+"]",Lt=RegExp(Nt,"g");function jt(e){return e=Pt(e),e&&e.replace(Rt,St).replace(Lt,"")}Re.exports=jt});var Me=c((Aa,Oe)=>{var zt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function It(e){return e.match(zt)||[]}Oe.exports=It});var Ne=c((Oa,qe)=>{var Ut=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function _t(e){return Ut.test(e)}qe.exports=_t});var $e=c((Ma,Ke)=>{var Le="\\ud800-\\udfff",Dt="\\u0300-\\u036f",Et="\\ufe20-\\ufe2f",Ft="\\u20d0-\\u20ff",kt=Dt+Et+Ft,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",Zt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ht="\\u2000-\\u206f",Gt=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ie="A-Z\\xc0-\\xd6\\xd8-\\xde",Vt="\\ufe0e\\ufe0f",Ue=Wt+Zt+Ht+Gt,_e="['\u2019]",De="["+Ue+"]",Bt="["+kt+"]",Ee="\\d+",Jt="["+je+"]",Fe="["+ze+"]",ke="[^"+Le+Ue+Ee+je+ze+Ie+"]",Kt="\\ud83c[\\udffb-\\udfff]",$t="(?:"+Bt+"|"+Kt+")",Yt="[^"+Le+"]",We="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Ie+"]",Qt="\\u200d",He="(?:"+Fe+"|"+ke+")",Xt="(?:"+P+"|"+ke+")",Ge="(?:"+_e+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+_e+"(?:D|LL|M|RE|S|T|VE))?",Be=$t+"?",Je="["+Vt+"]?",en="(?:"+Qt+"(?:"+[Yt,We,Ze].join("|")+")"+Je+Be+")*",rn="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",tn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nn=Je+Be+en,an="(?:"+[Jt,We,Ze].join("|")+")"+nn,un=RegExp([P+"?"+Fe+"+"+Ge+"(?="+[De,P,"$"].join("|")+")",Xt+"+"+Ve+"(?="+[De,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,tn,rn,Ee,an].join("|"),"g");function sn(e){return e.match(un)||[]}Ke.exports=sn});var Qe=c((qa,Ye)=>{var on=Me(),fn=Ne(),dn=N(),ln=$e();function cn(e,r,n){return e=dn(e),r=n?void 0:r,r===void 0?fn(e)?ln(e):on(e):e.match(r)||[]}Ye.exports=cn});var er=c((Na,Xe)=>{var mn=G(),gn=Ae(),pn=Qe(),hn="['\u2019]",bn=RegExp(hn,"g");function vn(e){return function(r){return mn(pn(gn(r).replace(bn,"")),e,"")}}Xe.exports=vn});var tr=c((La,rr)=>{function xn(e,r,n){var s=-1,o=e.length;r<0&&(r=-r>o?0:o+r),n=n>o?o:n,n<0&&(n+=o),o=r>n?0:n-r>>>0,r>>>=0;for(var g=Array(o);++s<o;)g[s]=e[s+r];return g}rr.exports=xn});var ar=c((ja,nr)=>{var yn=tr();function Tn(e,r,n){var s=e.length;return n=n===void 0?s:n,!r&&n>=s?e:yn(e,r,n)}nr.exports=Tn});var U=c((za,ir)=>{var Cn="\\ud800-\\udfff",wn="\\u0300-\\u036f",Sn="\\ufe20-\\ufe2f",Pn="\\u20d0-\\u20ff",Rn=wn+Sn+Pn,An="\\ufe0e\\ufe0f",On="\\u200d",Mn=RegExp("["+On+Cn+Rn+An+"]");function qn(e){return Mn.test(e)}ir.exports=qn});var sr=c((Ia,ur)=>{function Nn(e){return e.split("")}ur.exports=Nn});var pr=c((Ua,gr)=>{var or="\\ud800-\\udfff",Ln="\\u0300-\\u036f",jn="\\ufe20-\\ufe2f",zn="\\u20d0-\\u20ff",In=Ln+jn+zn,Un="\\ufe0e\\ufe0f",_n="["+or+"]",_="["+In+"]",D="\\ud83c[\\udffb-\\udfff]",Dn="(?:"+_+"|"+D+")",fr="[^"+or+"]",dr="(?:\\ud83c[\\udde6-\\uddff]){2}",lr="[\\ud800-\\udbff][\\udc00-\\udfff]",En="\\u200d",cr=Dn+"?",mr="["+Un+"]?",Fn="(?:"+En+"(?:"+[fr,dr,lr].join("|")+")"+mr+cr+")*",kn=mr+cr+Fn,Wn="(?:"+[fr+_+"?",_,dr,lr,_n].join("|")+")",Zn=RegExp(D+"(?="+D+")|"+Wn+kn,"g");function Hn(e){return e.match(Zn)||[]}gr.exports=Hn});var br=c((_a,hr)=>{var Gn=sr(),Vn=U(),Bn=pr();function Jn(e){return Vn(e)?Bn(e):Gn(e)}hr.exports=Jn});var xr=c((Da,vr)=>{var Kn=ar(),$n=U(),Yn=br(),Qn=N();function Xn(e){return function(r){r=Qn(r);var n=$n(r)?Yn(r):void 0,s=n?n[0]:r.charAt(0),o=n?Kn(n,1).join(""):r.slice(1);return s[e]()+o}}vr.exports=Xn});var Tr=c((Ea,yr)=>{var ea=xr(),ra=ea("toUpperCase");yr.exports=ra});var wr=c((Fa,Cr)=>{var ta=er(),na=Tr(),aa=ta(function(e,r,n){return e+(n?" ":"")+na(r)});Cr.exports=aa});var qr=c((j,Mr)=>{"use strict";var Or=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Or(j))==="object"?Mr.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},n=function(t){return typeof t!="undefined"&&t!==null},s=function(t){return t!==t},o=function(t){return isFinite(t)&&!s(parseFloat(t))},g=function(t){var a=Object.prototype.toString.call(t);return a==="[object Array]"},f={intword:function(t,a){var i=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(t,i)},compactInteger:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var i=parseInt(t,10),d=i<0?"-":"",l=Math.abs(i),m=String(l),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(l<1e3)return""+d+m;if(y>b[0]+3)return i.toExponential(a).replace("e+","x10^");for(var v=void 0,x=0;x<b.length;x++){var C=b[x];if(y>=C){v=C;break}}var h=y-v+1,p=m.split(""),w=p.slice(0,h),Lr=p.slice(h,h+a+1),E=w.join(""),A=Lr.join("");A.length<a&&(A+=""+Array(a-A.length+1).join("0"));var z=void 0;if(a===0)z=""+d+E+T[b.indexOf(v)];else{var jr=Number(E+"."+A).toFixed(a);z=""+d+jr+T[b.indexOf(v)]}return z},intComma:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(t,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(t){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var i in r)if(r.hasOwnProperty(i)){var d=r[i];if(t>=d)return f.formatNumber(t/d,a,"")+" "+i+"B"}return t>=1024?f.formatNumber(t/1024,0)+" KB":f.formatNumber(t,0)+f.pluralize(t," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],i=arguments.length<=2||arguments[2]===void 0?",":arguments[2],d=arguments.length<=3||arguments[3]===void 0?".":arguments[3],l=function(h,p,w){return w?h.substr(0,w)+p:""},m=function(h,p,w){return h.substr(w).replace(/(\d{3})(?=\d)/g,"$1"+p)},y=function(h,p,w){return w?p+f.toFixed(Math.abs(h),w).split(".")[1]:""},b=f.normalizePrecision(a),T=t<0&&"-"||"",v=String(parseInt(f.toFixed(Math.abs(t||0),b),10)),x=v.length>3?v.length%3:0;return T+l(v,i,x)+m(v,i,x)+y(t,d,b)},toFixed:function(t,a){a=n(a)?a:f.normalizePrecision(a,0);var i=Math.pow(10,a);return(Math.round(t*i)/i).toFixed(a)},normalizePrecision:function(t,a){return t=Math.round(Math.abs(t)),s(t)?a:t},ordinal:function(t){var a=parseInt(t,10);if(a===0)return t;var i=a%100;if([11,12,13].indexOf(i)>=0)return a+"th";var d=a%10,l=void 0;switch(d){case 1:l="st";break;case 2:l="nd";break;case 3:l="rd";break;default:l="th"}return""+a+l},times:function(t){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(o(t)&&t>=0){var i=parseFloat(t),d=["never","once","twice"];if(n(a[i]))return String(a[i]);var l=n(d[i])&&d[i].toString();return l||i.toString()+" times"}return null},pluralize:function(t,a,i){return n(t)&&n(a)?(i=n(i)?i:a+"s",parseInt(t,10)===1?a:i):null},truncate:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],i=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return t.length>a?t.substring(0,a-i.length)+i:t},truncateWords:function(t,a){for(var i=t.split(" "),d="",l=0;l<a;)n(i[l])&&(d+=i[l]+" "),l++;return i.length>a?d+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],i=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],d=void 0;return o(t)&&o(a)&&t>a&&(d=a+i),(d||t).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(t,a,i){var d=t.length,l=void 0;if(d<2)return String(t);if(d===2)return t.join(" and ");if(n(a)&&d>a){var m=d-a;l=a,i=n(i)?i:", and "+m+" "+f.pluralize(m,"other")}else l=-1,i=", and "+t[d-1];return t.slice(0,l).join(", ")+i},dictionary:function(t){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],i=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],d="";if(n(t)&&(typeof t=="undefined"?"undefined":Or(t))==="object"&&!g(t)){var l=[];for(var m in t)if(t.hasOwnProperty(m)){var y=t[m];l.push(""+m+a+y)}return l.join(i)}return d},frequency:function(t,a){if(!g(t))return null;var i=t.length,d=f.times(i);return i===0?d+" "+a:a+" "+d},pace:function(t,a){var i=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(t===0||a===0)return"No "+f.pluralize(0,i);for(var d="Approximately",l=void 0,m=void 0,y=t/a,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){l=T.name;break}}l||(d="Less than",m=1,l=e[e.length-1].name);var v=Math.round(m);return i=f.pluralize(v,i),d+" "+v+" "+i+" per "+l},nl2br:function(t){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return t.replace(/\n/g,a)},br2nl:function(t){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return t.replace(/\<br\s*\/?\>/g,a)},capitalize:function(t){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+t.charAt(0).toUpperCase()+(a?t.slice(1).toLowerCase():t.slice(1))},capitalizeAll:function(t){return t.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(t){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,i=/\S+[A-Z]+\S*/,d=/\s+/,l=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],v=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],x=[],C=b.split(T?l:d),h=0;h<C.length;++h){var p=C[h];if(p.indexOf("-")!==-1){x.push(m(p,!0,h===0||h===C.length-1));continue}if(v&&(h===0||h===C.length-1)){x.push(i.test(p)?p:f.capitalize(p));continue}i.test(p)?x.push(p):a.test(p)?x.push(p.toLowerCase()):x.push(f.capitalize(p))}return x.join(T?"-":" ")},m(t)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var Sr=Z(wr());function Pr(e){return e instanceof Date?e.toISOString():Array.isArray(e)?e.map(Pr):e}function ia(e,r){return I(this,null,function*(){var u;let{data:{key:n,params:s}}=e,o,g;try{o=yield r(...s)}catch(t){o=void 0;try{g=t.toString()}catch(a){g="Exception can't be stringified."}}let f={key:n};o!==void 0&&(o=Pr(o),f.result={type:"string",value:o}),g!==void 0&&(f.error=g),((u=e.source)==null?void 0:u.postMessage).call(u,f,"*")})}function ua(e){return typeof window!="undefined"&&window.addEventListener("message",r=>ia(r,e.run)),M(S({},e),{json:JSON.stringify(oa(e),null,2)})}var sa=`
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
</svg>`;function oa(e){let{name:r,category:n,description:s,author:o,result:g,params:f,about:u,video:t}=e,{icon:a=Rr}=e;return a==="glide"&&(a=sa),{name:r,category:n,description:s,author:o,result:g,about:u,icon:a,video:t,params:Object.entries(f).map(([i,d])=>S({name:i},d))}}var fa={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Rr,about:void 0,video:void 0,tests:[],run(){return I(this,null,function*(){})}},L=class{constructor(r={},n=[]){this.definition=S(S({},fa),r),this.requiredParams=[...n]}with(r,n=[]){return new L(S(S({},this.definition),r),[...this.requiredParams,...n])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withAuthor(r,n){return this.with({author:`${r} <${n}>`})}withTest(r,n){let{tests:s=[]}=this.definition;return this.with({tests:[...s,{params:r,expectedResult:n}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,n,s){return s===void 0&&(s=(0,Sr.default)(n)),this.with({params:M(S({},this.definition.params),{[n]:{type:r,displayName:s}})})}withRequiredParam(r,n,s){return this.withParam(r,n,s).with({},[n])}withPrimitiveParam(r,n){return this.withParam("primitive",r,n)}withStringParam(r,n){return this.withParam("string",r,n)}withDateParam(r,n){return this.withParam("date-time",r,n)}withNumberParam(r,n){return this.withParam("number",r,n)}withRequiredPrimitiveParam(r,n){return this.withRequiredParam("primitive",r,n)}withRequiredStringParam(r,n){return this.withRequiredParam("string",r,n)}withRequiredDateParam(r,n){return this.withRequiredParam("date-time",r,n)}withRequiredNumberParam(r,n){return this.withRequiredParam("number",r,n)}run(r){let{params:n}=this.definition,s=this.requiredParams,o=Object.keys(n);function g(...f){let u={};if(f.forEach(({value:t},a)=>{u[o[a]]=t}),!s.some(t=>u[t]===void 0))return r(u)}return ua(M(S({},this.definition),{run:g}))}};function Ar(e){return new L({name:e})}var Nr=Z(qr()),Za=Ar("Compact Integer").withCategory("Number").withDescription("Converts an integer into its most compact representation.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withNumberParam("decimals","Decimal Places").withTest({number:123456789},"123M").withTest({number:123456789,decimals:2},"123.46M").run(({number:e,decimals:r})=>Nr.default.compactInteger(e,r));})();
//# sourceMappingURL=index.js.map