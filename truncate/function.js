var jr=Object.create;var O=Object.defineProperty,zr=Object.defineProperties,Ur=Object.getOwnPropertyDescriptor,_r=Object.getOwnPropertyDescriptors,Ir=Object.getOwnPropertyNames,k=Object.getOwnPropertySymbols,Er=Object.getPrototypeOf,F=Object.prototype.hasOwnProperty,kr=Object.prototype.propertyIsEnumerable;var W=(e,r,n)=>r in e?O(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,w=(e,r)=>{for(var n in r||(r={}))F.call(r,n)&&W(e,n,r[n]);if(k)for(var n of k(r))kr.call(r,n)&&W(e,n,r[n]);return e},M=(e,r)=>zr(e,_r(r)),Fr=e=>O(e,"__esModule",{value:!0});var c=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Wr=(e,r,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of Ir(r))!F.call(e,o)&&o!=="default"&&O(e,o,{get:()=>r[o],enumerable:!(n=Ur(r,o))||n.enumerable});return e},D=e=>Wr(Fr(O(e!=null?jr(Er(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Z=(e,r,n)=>new Promise((o,l)=>{var h=t=>{try{i(n.next(t))}catch(a){l(a)}},f=t=>{try{i(n.throw(t))}catch(a){l(a)}},i=t=>t.done?o(t.value):Promise.resolve(t.value).then(h,f);i((n=n.apply(e,r)).next())});var G=c((fa,H)=>{function Dr(e,r,n,o){var l=-1,h=e==null?0:e.length;for(o&&h&&(n=e[++l]);++l<h;)n=r(n,e[l],l,e);return n}H.exports=Dr});var B=c((la,V)=>{function Zr(e){return function(r){return e==null?void 0:e[r]}}V.exports=Zr});var K=c((da,J)=>{var Hr=B(),Gr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Vr=Hr(Gr);J.exports=Vr});var Y=c((ca,$)=>{var Br=typeof global=="object"&&global&&global.Object===Object&&global;$.exports=Br});var X=c((ma,Q)=>{var Jr=Y(),Kr=typeof self=="object"&&self&&self.Object===Object&&self,$r=Jr||Kr||Function("return this")();Q.exports=$r});var N=c((ga,ee)=>{var Yr=X(),Qr=Yr.Symbol;ee.exports=Qr});var te=c((pa,re)=>{function Xr(e,r){for(var n=-1,o=e==null?0:e.length,l=Array(o);++n<o;)l[n]=r(e[n],n,e);return l}re.exports=Xr});var ae=c((ha,ne)=>{var et=Array.isArray;ne.exports=et});var se=c((ba,oe)=>{var ue=N(),ie=Object.prototype,rt=ie.hasOwnProperty,tt=ie.toString,R=ue?ue.toStringTag:void 0;function nt(e){var r=rt.call(e,R),n=e[R];try{e[R]=void 0;var o=!0}catch(h){}var l=tt.call(e);return o&&(r?e[R]=n:delete e[R]),l}oe.exports=nt});var le=c((xa,fe)=>{var at=Object.prototype,ut=at.toString;function it(e){return ut.call(e)}fe.exports=it});var ge=c((va,me)=>{var de=N(),ot=se(),st=le(),ft="[object Null]",lt="[object Undefined]",ce=de?de.toStringTag:void 0;function dt(e){return e==null?e===void 0?lt:ft:ce&&ce in Object(e)?ot(e):st(e)}me.exports=dt});var he=c((ya,pe)=>{function ct(e){return e!=null&&typeof e=="object"}pe.exports=ct});var xe=c((Ta,be)=>{var mt=ge(),gt=he(),pt="[object Symbol]";function ht(e){return typeof e=="symbol"||gt(e)&&mt(e)==pt}be.exports=ht});var we=c((Ca,Se)=>{var ve=N(),bt=te(),xt=ae(),vt=xe(),yt=1/0,ye=ve?ve.prototype:void 0,Te=ye?ye.toString:void 0;function Ce(e){if(typeof e=="string")return e;if(xt(e))return bt(e,Ce)+"";if(vt(e))return Te?Te.call(e):"";var r=e+"";return r=="0"&&1/e==-yt?"-0":r}Se.exports=Ce});var q=c((Sa,Pe)=>{var Tt=we();function Ct(e){return e==null?"":Tt(e)}Pe.exports=Ct});var Ae=c((wa,Re)=>{var St=K(),wt=q(),Pt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Rt="\\u0300-\\u036f",At="\\ufe20-\\ufe2f",Ot="\\u20d0-\\u20ff",Mt=Rt+At+Ot,Nt="["+Mt+"]",qt=RegExp(Nt,"g");function Lt(e){return e=wt(e),e&&e.replace(Pt,St).replace(qt,"")}Re.exports=Lt});var Me=c((Pa,Oe)=>{var jt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function zt(e){return e.match(jt)||[]}Oe.exports=zt});var qe=c((Ra,Ne)=>{var Ut=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function _t(e){return Ut.test(e)}Ne.exports=_t});var $e=c((Aa,Ke)=>{var Le="\\ud800-\\udfff",It="\\u0300-\\u036f",Et="\\ufe20-\\ufe2f",kt="\\u20d0-\\u20ff",Ft=It+Et+kt,je="\\u2700-\\u27bf",ze="a-z\\xdf-\\xf6\\xf8-\\xff",Wt="\\xac\\xb1\\xd7\\xf7",Dt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Zt="\\u2000-\\u206f",Ht=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Ue="A-Z\\xc0-\\xd6\\xd8-\\xde",Gt="\\ufe0e\\ufe0f",_e=Wt+Dt+Zt+Ht,Ie="['\u2019]",Ee="["+_e+"]",Vt="["+Ft+"]",ke="\\d+",Bt="["+je+"]",Fe="["+ze+"]",We="[^"+Le+_e+ke+je+ze+Ue+"]",Jt="\\ud83c[\\udffb-\\udfff]",Kt="(?:"+Vt+"|"+Jt+")",$t="[^"+Le+"]",De="(?:\\ud83c[\\udde6-\\uddff]){2}",Ze="[\\ud800-\\udbff][\\udc00-\\udfff]",P="["+Ue+"]",Yt="\\u200d",He="(?:"+Fe+"|"+We+")",Qt="(?:"+P+"|"+We+")",Ge="(?:"+Ie+"(?:d|ll|m|re|s|t|ve))?",Ve="(?:"+Ie+"(?:D|LL|M|RE|S|T|VE))?",Be=Kt+"?",Je="["+Gt+"]?",Xt="(?:"+Yt+"(?:"+[$t,De,Ze].join("|")+")"+Je+Be+")*",en="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rn="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",tn=Je+Be+Xt,nn="(?:"+[Bt,De,Ze].join("|")+")"+tn,an=RegExp([P+"?"+Fe+"+"+Ge+"(?="+[Ee,P,"$"].join("|")+")",Qt+"+"+Ve+"(?="+[Ee,P+He,"$"].join("|")+")",P+"?"+He+"+"+Ge,P+"+"+Ve,rn,en,ke,nn].join("|"),"g");function un(e){return e.match(an)||[]}Ke.exports=un});var Qe=c((Oa,Ye)=>{var on=Me(),sn=qe(),fn=q(),ln=$e();function dn(e,r,n){return e=fn(e),r=n?void 0:r,r===void 0?sn(e)?ln(e):on(e):e.match(r)||[]}Ye.exports=dn});var er=c((Ma,Xe)=>{var cn=G(),mn=Ae(),gn=Qe(),pn="['\u2019]",hn=RegExp(pn,"g");function bn(e){return function(r){return cn(gn(mn(r).replace(hn,"")),e,"")}}Xe.exports=bn});var tr=c((Na,rr)=>{function xn(e,r,n){var o=-1,l=e.length;r<0&&(r=-r>l?0:l+r),n=n>l?l:n,n<0&&(n+=l),l=r>n?0:n-r>>>0,r>>>=0;for(var h=Array(l);++o<l;)h[o]=e[o+r];return h}rr.exports=xn});var ar=c((qa,nr)=>{var vn=tr();function yn(e,r,n){var o=e.length;return n=n===void 0?o:n,!r&&n>=o?e:vn(e,r,n)}nr.exports=yn});var U=c((La,ur)=>{var Tn="\\ud800-\\udfff",Cn="\\u0300-\\u036f",Sn="\\ufe20-\\ufe2f",wn="\\u20d0-\\u20ff",Pn=Cn+Sn+wn,Rn="\\ufe0e\\ufe0f",An="\\u200d",On=RegExp("["+An+Tn+Pn+Rn+"]");function Mn(e){return On.test(e)}ur.exports=Mn});var or=c((ja,ir)=>{function Nn(e){return e.split("")}ir.exports=Nn});var pr=c((za,gr)=>{var sr="\\ud800-\\udfff",qn="\\u0300-\\u036f",Ln="\\ufe20-\\ufe2f",jn="\\u20d0-\\u20ff",zn=qn+Ln+jn,Un="\\ufe0e\\ufe0f",_n="["+sr+"]",_="["+zn+"]",I="\\ud83c[\\udffb-\\udfff]",In="(?:"+_+"|"+I+")",fr="[^"+sr+"]",lr="(?:\\ud83c[\\udde6-\\uddff]){2}",dr="[\\ud800-\\udbff][\\udc00-\\udfff]",En="\\u200d",cr=In+"?",mr="["+Un+"]?",kn="(?:"+En+"(?:"+[fr,lr,dr].join("|")+")"+mr+cr+")*",Fn=mr+cr+kn,Wn="(?:"+[fr+_+"?",_,lr,dr,_n].join("|")+")",Dn=RegExp(I+"(?="+I+")|"+Wn+Fn,"g");function Zn(e){return e.match(Dn)||[]}gr.exports=Zn});var br=c((Ua,hr)=>{var Hn=or(),Gn=U(),Vn=pr();function Bn(e){return Gn(e)?Vn(e):Hn(e)}hr.exports=Bn});var vr=c((_a,xr)=>{var Jn=ar(),Kn=U(),$n=br(),Yn=q();function Qn(e){return function(r){r=Yn(r);var n=Kn(r)?$n(r):void 0,o=n?n[0]:r.charAt(0),l=n?Jn(n,1).join(""):r.slice(1);return o[e]()+l}}xr.exports=Qn});var Tr=c((Ia,yr)=>{var Xn=vr(),ea=Xn("toUpperCase");yr.exports=ea});var Sr=c((Ea,Cr)=>{var ra=er(),ta=Tr(),na=ra(function(e,r,n){return e+(n?" ":"")+ta(r)});Cr.exports=na});var Mr=c((j,Or)=>{"use strict";var Ar=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol?"symbol":typeof e};(function(e,r){(typeof j=="undefined"?"undefined":Ar(j))==="object"?Or.exports=r():typeof define=="function"&&define.amd?define([],function(){return e.Humanize=r()}):e.Humanize=r()})(j,function(){var e=[{name:"second",value:1e3},{name:"minute",value:6e4},{name:"hour",value:36e5},{name:"day",value:864e5},{name:"week",value:6048e5}],r={P:Math.pow(2,50),T:Math.pow(2,40),G:Math.pow(2,30),M:Math.pow(2,20)},n=function(t){return typeof t!="undefined"&&t!==null},o=function(t){return t!==t},l=function(t){return isFinite(t)&&!o(parseFloat(t))},h=function(t){var a=Object.prototype.toString.call(t);return a==="[object Array]"},f={intword:function(t,a){var u=arguments.length<=2||arguments[2]===void 0?2:arguments[2];return f.compactInteger(t,u)},compactInteger:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];a=Math.max(a,0);var u=parseInt(t,10),s=u<0?"-":"",d=Math.abs(u),m=String(d),y=m.length,b=[13,10,7,4],T=["T","B","M","k"];if(d<1e3)return""+s+m;if(y>b[0]+3)return u.toExponential(a).replace("e+","x10^");for(var x=void 0,v=0;v<b.length;v++){var C=b[v];if(y>=C){x=C;break}}var p=y-x+1,g=m.split(""),S=g.slice(0,p),qr=g.slice(p,p+a+1),E=S.join(""),A=qr.join("");A.length<a&&(A+=""+Array(a-A.length+1).join("0"));var z=void 0;if(a===0)z=""+s+E+T[b.indexOf(x)];else{var Lr=Number(E+"."+A).toFixed(a);z=""+s+Lr+T[b.indexOf(x)]}return z},intComma:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1];return f.formatNumber(t,a)},intcomma:function(){return f.intComma.apply(f,arguments)},fileSize:function(t){var a=arguments.length<=1||arguments[1]===void 0?2:arguments[1];for(var u in r)if(r.hasOwnProperty(u)){var s=r[u];if(t>=s)return f.formatNumber(t/s,a,"")+" "+u+"B"}return t>=1024?f.formatNumber(t/1024,0)+" KB":f.formatNumber(t,0)+f.pluralize(t," byte")},filesize:function(){return f.fileSize.apply(f,arguments)},formatNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?0:arguments[1],u=arguments.length<=2||arguments[2]===void 0?",":arguments[2],s=arguments.length<=3||arguments[3]===void 0?".":arguments[3],d=function(p,g,S){return S?p.substr(0,S)+g:""},m=function(p,g,S){return p.substr(S).replace(/(\d{3})(?=\d)/g,"$1"+g)},y=function(p,g,S){return S?g+f.toFixed(Math.abs(p),S).split(".")[1]:""},b=f.normalizePrecision(a),T=t<0&&"-"||"",x=String(parseInt(f.toFixed(Math.abs(t||0),b),10)),v=x.length>3?x.length%3:0;return T+d(x,u,v)+m(x,u,v)+y(t,s,b)},toFixed:function(t,a){a=n(a)?a:f.normalizePrecision(a,0);var u=Math.pow(10,a);return(Math.round(t*u)/u).toFixed(a)},normalizePrecision:function(t,a){return t=Math.round(Math.abs(t)),o(t)?a:t},ordinal:function(t){var a=parseInt(t,10);if(a===0)return t;var u=a%100;if([11,12,13].indexOf(u)>=0)return a+"th";var s=a%10,d=void 0;switch(s){case 1:d="st";break;case 2:d="nd";break;case 3:d="rd";break;default:d="th"}return""+a+d},times:function(t){var a=arguments.length<=1||arguments[1]===void 0?{}:arguments[1];if(l(t)&&t>=0){var u=parseFloat(t),s=["never","once","twice"];if(n(a[u]))return String(a[u]);var d=n(s[u])&&s[u].toString();return d||u.toString()+" times"}return null},pluralize:function(t,a,u){return n(t)&&n(a)?(u=n(u)?u:a+"s",parseInt(t,10)===1?a:u):null},truncate:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"...":arguments[2];return t.length>a?t.substring(0,a-u.length)+u:t},truncateWords:function(t,a){for(var u=t.split(" "),s="",d=0;d<a;)n(u[d])&&(s+=u[d]+" "),d++;return u.length>a?s+"...":null},truncatewords:function(){return f.truncateWords.apply(f,arguments)},boundedNumber:function(t){var a=arguments.length<=1||arguments[1]===void 0?100:arguments[1],u=arguments.length<=2||arguments[2]===void 0?"+":arguments[2],s=void 0;return l(t)&&l(a)&&t>a&&(s=a+u),(s||t).toString()},truncatenumber:function(){return f.boundedNumber.apply(f,arguments)},oxford:function(t,a,u){var s=t.length,d=void 0;if(s<2)return String(t);if(s===2)return t.join(" and ");if(n(a)&&s>a){var m=s-a;d=a,u=n(u)?u:", and "+m+" "+f.pluralize(m,"other")}else d=-1,u=", and "+t[s-1];return t.slice(0,d).join(", ")+u},dictionary:function(t){var a=arguments.length<=1||arguments[1]===void 0?" is ":arguments[1],u=arguments.length<=2||arguments[2]===void 0?", ":arguments[2],s="";if(n(t)&&(typeof t=="undefined"?"undefined":Ar(t))==="object"&&!h(t)){var d=[];for(var m in t)if(t.hasOwnProperty(m)){var y=t[m];d.push(""+m+a+y)}return d.join(u)}return s},frequency:function(t,a){if(!h(t))return null;var u=t.length,s=f.times(u);return u===0?s+" "+a:a+" "+s},pace:function(t,a){var u=arguments.length<=2||arguments[2]===void 0?"time":arguments[2];if(t===0||a===0)return"No "+f.pluralize(0,u);for(var s="Approximately",d=void 0,m=void 0,y=t/a,b=0;b<e.length;++b){var T=e[b];if(m=y*T.value,m>1){d=T.name;break}}d||(s="Less than",m=1,d=e[e.length-1].name);var x=Math.round(m);return u=f.pluralize(x,u),s+" "+x+" "+u+" per "+d},nl2br:function(t){var a=arguments.length<=1||arguments[1]===void 0?"<br/>":arguments[1];return t.replace(/\n/g,a)},br2nl:function(t){var a=arguments.length<=1||arguments[1]===void 0?`\r
`:arguments[1];return t.replace(/\<br\s*\/?\>/g,a)},capitalize:function(t){var a=arguments.length<=1||arguments[1]===void 0?!1:arguments[1];return""+t.charAt(0).toUpperCase()+(a?t.slice(1).toLowerCase():t.slice(1))},capitalizeAll:function(t){return t.replace(/(?:^|\s)\S/g,function(a){return a.toUpperCase()})},titleCase:function(t){var a=/\b(a|an|and|at|but|by|de|en|for|if|in|of|on|or|the|to|via|vs?\.?)\b/i,u=/\S+[A-Z]+\S*/,s=/\s+/,d=/-/,m=void 0;return m=function(b){for(var T=arguments.length<=1||arguments[1]===void 0?!1:arguments[1],x=arguments.length<=2||arguments[2]===void 0?!0:arguments[2],v=[],C=b.split(T?d:s),p=0;p<C.length;++p){var g=C[p];if(g.indexOf("-")!==-1){v.push(m(g,!0,p===0||p===C.length-1));continue}if(x&&(p===0||p===C.length-1)){v.push(u.test(g)?g:f.capitalize(g));continue}u.test(g)?v.push(g):a.test(g)?v.push(g.toLowerCase()):v.push(f.capitalize(g))}return v.join(T?"-":" ")},m(t)},titlecase:function(){return f.titleCase.apply(f,arguments)}};return f})});var wr=D(Sr());function aa(e){return M(w({},e),{json:JSON.stringify(ia(e),null,2)})}var ua=`
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
</svg>`;function ia(e){let{name:r,category:n,description:o,author:l,result:h,params:f,about:i,video:t}=e,{icon:a=Pr}=e;return a==="glide"&&(a=ua),{name:r,category:n,description:o,author:l,result:h,about:i,icon:a,video:t,params:Object.entries(f).map(([u,s])=>w({name:u},s))}}var oa={name:"Glide Column",category:"General",description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:Pr,about:void 0,video:void 0,tests:[],run(){return Z(this,null,function*(){})}},L=class{constructor(r={},n=[]){this.definition=w(w({},oa),r),this.requiredParams=[...n]}with(r,n=[]){return new L(w(w({},this.definition),r),[...this.requiredParams,...n])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withDescription(r){return this.with({description:r})}withAuthor(r,n){return this.with({author:`${r} <${n}>`})}withTest(r,n){var o;return this.with({tests:[...(o=this.definition.tests)!=null?o:[],{params:r,expectedResult:n}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withParam(r,n,o){return o===void 0&&(o=(0,wr.default)(n)),this.with({params:M(w({},this.definition.params),{[n]:{type:r,displayName:o}})})}withRequiredParam(r,n,o){return this.withParam(r,n,o).with({},[n])}withStringParam(r,n){return this.withParam("string",r,n)}withNumberParam(r,n){return this.withParam("number",r,n)}withRequiredStringParam(r,n){return this.withRequiredParam("string",r,n)}withRequiredNumberParam(r,n){return this.withRequiredParam("number",r,n)}withExample(r){return this.with({example:r})}run(r){let{params:n}=this.definition,o=this.requiredParams,l=Object.keys(n);function h(...f){let i={};if(f.forEach(({value:t},a)=>{i[l[a]]=t}),!o.some(t=>i[t]===void 0))return r(i)}return aa(M(w({},this.definition),{run:h}))}};function Rr(e){return new L({name:e})}var Nr=D(Mr()),Wa=Rr("Truncate Text").withCategory("Text").withDescription('Truncates a string if it is longer than the specified number of characters. Truncated strings will end with a translatable ellipsis sequence ("\u2026").').withAuthor("HubSpot","https://github.com/HubSpot/humanize").withStringResult().withRequiredStringParam("string").withNumberParam("length").withStringParam("ending").withExample({string:"long text is good for you",length:19}).run(({string:e,length:r,ending:n})=>Nr.default.truncate(e,r,n));export{Wa as default};
//# sourceMappingURL=function.js.map
