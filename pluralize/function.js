var jr=Object.create;var O=Object.defineProperty,zr=Object.defineProperties,Ur=Object.getOwnPropertyDescriptor,_r=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty,kr=Object.prototype.propertyIsEnumerable;var W=(e,r,t)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,w=(e,r)=>{for(var t in r||(r={}))F.call(r,t)&&W(e,t,r[t]);if(k)for(var t of k(r))kr.call(r,t)&&W(e,t,r[t]);return e},M=(e,r)=>zr(e,_r(r)),Fr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let s of Ir(r))!F.call(e,s)&&s!=="default"&&O(e,s,{get:()=>r[s],enumerable:!(t=Ur(r,s))||t.enumerable});return e},D=e=>Wr(Fr(O(e!=null?jr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Z=(e,r,t)=>new Promise((s,l)=>{var h=n=>{try{i(t.next(n))}catch(a){l(a)}},f=n=>{try{i(t.throw(n))}catch(a){l(a)}},i=n=>n.done?s(n.value):Promise.resolve(n.value).then(h,f);i((t=t.apply(e,r)).next())});var G=c((fa,H)=>{function Dr(e,r,t,s){var l=-1,h=e==null?0:e.length;for(s&&h&&(t=e[++l]);++l<h;)t=r(t,e[l],l,e);return t}H.exports=Dr});var B=c((la,V)=>{function Zr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Zr});var K=c((da,J)=>{var Hr=B(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vr=Hr(Gr);J.exports=Vr});var Y=c((ca,$)=>{var Br=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Br});var X=c((ma,Q)=>{var Jr=Y(),Kr=typeof self=="object"&&self&&self.Object===Object&&self,$r=Jr||Kr||Function("return this")();Q.exports=$r});var N=c((ga,ee)=>{var Yr=X(),Qr=Yr.Symbol;ee.exports=Qr});var ne=c((pa,re)=>{function Xr(e,r){for(var t=-1,s=e==null?0:e.length,l=Array(s);++t<s;)l[t]=r(e[t],t,e);return l}re.exports=Xr});var ae=c((ha,te)=>{var en=Array.isArray;te.exports=en});var se=c((ba,oe)=>{var ue=N(),ie=Object.prototype,rn=ie.hasOwnProperty,nn=ie.toString,R=ue?ue.toStringTag:void 0;function tn(e){var r=rn.call(e,R),t=e[R];try{e[R]=void 0;var s=!0}catch(h){}var l=nn.call(e);return s&&(r?e[R]=t:delete e[R]),l}oe.exports=tn});var le=c((xa,fe)=>{var an=Object.prototype,un=an.toString;function on(e){return un.call(e)}fe.exports=on});var ge=c((va,me)=>{var de=N(),sn=se(),fn=le(),ln="[object Null]",dn="[object Undefined]",ce=de?de.toStringTag:void 0;function cn(e){return e==null?e===void 0?dn:ln:ce&&ce in Object(e)?sn(e):fn(e)}me.exports=cn});var he=c((ya,pe)=>{function mn(e){return e!=null&&typeof e=="object"}pe.exports=mn});var xe=c((Ta,be)=>{var gn=ge(),pn=he(),hn="[object Symbol]";function bn(e){return typeof e=="symbol"||pn(e)&&gn(e)==hn}be.exports=bn});var we=c((Ca,Se)=>{var ve=N(),xn=ne(),vn=ae(),yn=xe(),Tn=1/0,ye=ve?ve.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(vn(e))return xn(e,Ce)+"";if(yn(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-Tn?"-0":r}Se.exports=Ce});var q=c((Sa,Pe)=>{var Cn=we();function Sn(e){return e==null?"":Cn(e)}Pe.exports=Sn});var Ae=c((wa,Re)=>{var wn=K(),Pn=q(),Rn=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,An="\\u0300-\\u036f",On="\\ufe20-\\ufe2f",Mn="\\u20d0-\\u20ff",Nn=An+On+Mn,qn="["+Nn+"]",Ln=RegExp(qn,"g");function jn(e){return e=Pn(e),e&&e.replace(Rn,wn).replace(Ln,"")}Re.exports=jn});var Me=c((Pa,Oe)=>{var zn=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function Un(e){return e.match(zn)||[]}Oe.exports=Un});var qe=c((Ra,Ne)=>{var _n=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function In(e){return _n.test(e)}Ne.exports=In});var $e=c((Aa,Ke)=>{var Le="\\ud800-\\udfff",En="\\u0300-\\u036f",kn="\\ufe20-\\ufe2f",Fn="\\u20d0-\\u20ff",Wn=En+kn+Fn,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Dn="\\xac\\xb1\\xd7\\xf7",Zn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Hn="\\u2000-\\u206f",Gn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ue="A-Z\\xc0-\\xd6\\xd8-\\xde",Vn="\\ufe0e\\ufe0f",_e=Dn+Zn+Hn+Gn,Ie="['\u2019]",Ee="["+_e+"]",Bn="["+Wn+"]",ke="\\d+",Jn="["+je+"]",Fe="["+ze+"]",We="[^"+Le+_e+ke+je+ze+Ue+"]",Kn="\\ud83c[\\udffb-\\udfff]",$n="(?:"+Bn+"|"+Kn+")",Yn="[^"+Le+"]",De="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Ue+"]",Qn="\\u200d",He="(?:"+Fe+"|"+We+")",Xn="(?:"+P+"|"+We+")",Ge="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Be=$n+"?",Je="["+Vn+"]?",et="(?:"+Qn+"(?:"+[Yn,De,Ze].join("|")+")"+Je+Be+")*",rt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",nt="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tt=Je+Be+et,at="(?:"+[Jn,De,Ze].join("|")+")"+tt,ut=RegExp([P+"?"+Fe+"+"+Ge+"(?="+[Ee,P,"$"].join("|")+")",Xn+"+"+Ve+"(?="+[Ee,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,nt,rt,ke,at].join("|"),"g");function it(e){return e.match(ut)||[]}Ke.exports=it});var Qe=c((Oa,Ye)=>{var ot=Me(),st=qe(),ft=q(),lt=$e();function dt(e,r,t){return e=ft(e),r=t?void 0:r,r===void 0?st(e)?lt(e):ot(e):e.match(r)||[]}Ye.exports=dt});var er=c((Ma,Xe)=>{var ct=G(),mt=Ae(),gt=Qe(),pt="['\u2019]",ht=RegExp(pt,"g");function bt(e){return function(r){return ct(gt(mt(r).replace(ht,"")),e,"")}}Xe.exports=bt});var nr=c((Na,rr)=>{function xt(e,r,t){var s=-1,l=e.length;r<0&&(r=-r>l?0:l+r),t=t>l?l:t,t<0&&(t+=l),l=r>t?0:t-r>>>0,r>>>=0;for(var h=Array(l);++s<l;)h[s]=e[s+r];return h}rr.exports=xt});var ar=c((qa,tr)=>{var vt=nr();function yt(e,r,t){var s=e.length;return t=t===void 0?s:t,!r&&t>=s?e:vt(e,r,t)}tr.exports=yt});var U=c((La,ur)=>{var Tt="\\ud800-\\udfff",Ct="\\u0300-\\u036f",St="\\ufe20-\\ufe2f",wt="\\u20d0-\\u20ff",Pt=Ct+St+wt,Rt="\\ufe0e\\ufe0f",At="\\u200d",Ot=RegExp("["+At+Tt+Pt+Rt+"]");function Mt(e){return Ot.test(e)}ur.exports=Mt});var or=c((ja,ir)=>{function Nt(e){return e.split("")}ir.exports=Nt});var pr=c((za,gr)=>{var sr="\\ud800-\\udfff",qt="\\u0300-\\u036f",Lt="\\ufe20-\\ufe2f",jt="\\u20d0-\\u20ff",zt=qt+Lt+jt,Ut="\\ufe0e\\ufe0f",_t="["+sr+"]",_="["+zt+"]",I="\\ud83c[\\udffb-\\udfff]",It="(?:"+_+"|"+I+")",fr="[^"+sr+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",Et="\\u200d",cr=It+"?",mr="["+Ut+"]?",kt="(?:"+Et+"(?:"+[fr,lr,dr].join("|")+")"+mr+cr+")*",Ft=mr+cr+kt,Wt="(?:"+[fr+_+"?",_,lr,dr,_t].join("|")+")",Dt=RegExp(I+"(?="+I+")|"+Wt+Ft,"g");function Zt(e){return e.match(Dt)||[]}gr.exports=Zt});var br=c((Ua,hr)=>{var Ht=or(),Gt=U(),Vt=pr();function Bt(e){return Gt(e)?Vt(e):Ht(e)}hr.exports=Bt});var vr=c((_a,xr)=>{var Jt=ar(),Kt=U(),$t=br(),Yt=q();function Qt(e){return function(r){r=Yt(r);var t=Kt(r)?$t(r):void 0,s=t?t[0]:r.charAt(0),l=t?Jt(t,1).join(""):r.slice(1);return s[e]()+l}}xr.exports=Qt});var Tr=c((Ia,yr)=>{var Xt=vr(),ea=Xt("toUpperCase");yr.exports=ea});var Sr=c((Ea,Cr)=>{var ra=er(),na=Tr(),ta=ra(function(e,r,t){return e+(t?" ":"")+na(r)});Cr.exports=ta});var Mr=c((j,Or)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Ar(j))==="object"?Or.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},t=function(n){return typeof n!="undefined"&&n!==null},s=function(n){return n!==n},l=function(n){return isFinite(n)&&!s(parseFloat(n))},h=function(n){var a=Object.prototype.toString.call(n);return a==="[object Array]"},f={intword:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(n,u)},compactInteger:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var u=parseInt(n,10),o=u<0?"-":"",d=Math.abs(u),m=String(d),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+o+m;if(y>b[0]+3)return u.toExponential(a).replace("e+","x10^");for(var x=void 0,v=0;v<b.length;v++){var C=b[v];if(y>=C){x=C;break}}var p=y-x+1,g=m.split(""),S=g.slice(0,p),qr=g.slice(p,p+a+1),E=S.join(""),A=qr.join("");A.length<a&&(A+=""+Array(a-A.length+1).join("0"));var z=void 0;if(a===0)z=""+o+E+T[b.indexOf(x)];else{var Lr=Number(E+"."+A).toFixed(a);z=""+o+Lr+T[b.indexOf(x)]}return z},intComma:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(n,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(n){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var u in r)if(r.hasOwnProperty(u)){var o=r[u];if(n>=o)return f.formatNumber(n/o,a,"")+" "+u+"B"}return n>=1024?f.formatNumber(n/1024,0)+" KB":f.formatNumber(n,0)+f.pluralize(n," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],u=arguments.length<=2||arguments[2]===void 0?",":arguments[2],o=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(p,g,S){return S?p.substr(0,S)+g:""},m=function(p,g,S){return p.substr(S).replace(/(\d{3})(?=\d)/g,"$1"+g)},y=function(p,g,S){return S?g+f.toFixed(Math.abs(p),S).split(".")[1]:""},b=f.normalizePrecision(a),T=n<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(n||0),b),10)),v=x.length>3?x.length%3:0;return T+d(x,u,v)+m(x,u,v)+y(n,o,b)},toFixed:function(n,a){a=t(a)?a:f.normalizePrecision(a,0);var u=Math.pow(10,a);return(Math.round(n*u)/u).toFixed(a)},normalizePrecision:function(n,a){return n=Math.round(Math.abs(n)),s(n)?a:n},ordinal:function(n){var a=parseInt(n,10);if(a===0)return n;var u=a%100;if([11,12,13].indexOf(u)>=0)return a+"th";var o=a%10,d=void 0;switch(o){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+a+d},times:function(n){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(l(n)&&n>=0){var u=parseFloat(n),o=["never","once","twice"];if(t(a[u]))return String(a[u]);var d=t(o[u])&&o[u].toString();return d||u.toString()+" times"}return null},pluralize:function(n,a,u){return t(n)&&t(a)?(u=t(u)?u:a+"s",parseInt(n,10)===1?a:u):null},truncate:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return n.length>a?n.substring(0,a-u.length)+u:n},truncateWords:function(n,a){for(var u=n.split(" "),o="",d=0;d<a;)t(u[d])&&(o+=u[d]+" "),d++;return u.length>a?o+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(n){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],o=void 0;return l(n)&&l(a)&&n>a&&(o=a+u),(o||n).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(n,a,u){var o=n.length,d=void 0;if(o<2)return String(n);if(o===2)return n.join(" and ");if(t(a)&&o>a){var m=o-a;d=a,u=t(u)?u:", and "+m+" "+f.pluralize(m,"other")}else d=-1,u=", and "+n[o-1];return n.slice(0,d).join(", ")+u},dictionary:function(n){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],u=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],o="";if(t(n)&&(typeof n=="undefined"?"undefined":Ar(n))==="object"&&!h(n)){var d=[];for(var m in n)if(n.hasOwnProperty(m)){var y=n[m];d.push(""+m+a+y)}return d.join(u)}return o},frequency:function(n,a){if(!h(n))return null;var u=n.length,o=f.times(u);return u===0?o+" "+a:a+" "+o},pace:function(n,a){var u=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(n===0||a===0)return"No "+f.pluralize(0,u);for(var o="Approximately",d=void 0,m=void 0,y=n/a,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){d=T.name;break}}d||(o="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return u=f.pluralize(x,u),o+" "+x+" "+u+" per "+d},nl2br:function(n){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return n.replace(/\n/g,a)},br2nl:function(n){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return n.replace(/\<br\s*\/?\>/g,a)},capitalize:function(n){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+n.charAt(0).toUpperCase()+(a?n.slice(1).toLowerCase():n.slice(1))},capitalizeAll:function(n){return n.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(n){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,u=/\S+[A-Z]+\S*/,o=/\s+/,d=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],C=b.split(T?d:o),p=0;p<C.length;++p){var g=C[p];if(g.indexOf("-")!==-1){v.push(m(g,!0,p===0||p===C.length-1));continue}if(x&&(p===0||p===C.length-1)){v.push(u.test(g)?g:f.capitalize(g));continue}u.test(g)?v.push(g):a.test(g)?v.push(g.toLowerCase()):v.push(f.capitalize(g))}return v.join(T?"-":" ")},m(n)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var wr=D(Sr());function aa(e){return M(w({},e),{json:JSON.stringify(ia(e),null,2)})}var ua=`
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
    `,Pr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function ia(e){let{name:r,category:t,description:s,author:l,result:h,params:f,about:i,video:n}=e,{icon:a=Pr}=e;return a==="glide"&&(a=ua),{name:r,category:t,description:s,author:l,result:h,about:i,icon:a,video:n,params:Object.entries(f).map(([u,o])=>w({name:u},o))}}var oa={name:"Glide Column",category:"No category",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Pr,about:void 0,video:void 0,run(){return Z(this,null,function*(){})}},L=class{constructor(r={},t=[]){this.definition=w(w({},oa),r),this.requiredParams=[...t]}with(r,t=[]){return new L(w(w({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withDescription(r){return this.with({description:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,t,s){return s===void 0&&(s=(0,wr.default)(t)),this.with({params:M(w({},this.definition.params),{[t]:{type:r,displayName:s}})})}withRequiredParam(r,t,s){return this.withParam(r,t,s).with({},[t])}withStringParam(r,t){return this.withParam("string",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,s=this.requiredParams,l=Object.keys(t);function h(...f){let i={};if(f.forEach(({value:n},a)=>{i[l[a]]=n}),!s.some(n=>i[n]===void 0))return r(i)}return aa(M(w({},this.definition),{run:h}))}};function Rr(e,r){return new L({name:e,category:r})}var Nr=D(Mr()),Wa=Rr("Pluralize Text","Text").withDescription("Returns the plural version of a given word if the value is not 1. The default suffix is 's'.").withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredNumberParam("number").withStringParam("singular").withStringParam("plural").withExample({number:3,singular:"duck",plural:"duckies"}).run(({number:e,singular:r,plural:t})=>Nr.default.pluralize(e,r,t));export{Wa as default};
//# sourceMappingURL=function.js.map
