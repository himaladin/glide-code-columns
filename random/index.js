(()=>{var ut=Object.create;var E=Object.defineProperty,at=Object.defineProperties,ot=Object.getOwnPropertyDescriptor,st=Object.getOwnPropertyDescriptors,ft=Object.getOwnPropertyNames,Q=Object.getOwnPropertySymbols,ct=Object.getPrototypeOf,rr=Object.prototype.hasOwnProperty,lt=Object.prototype.propertyIsEnumerable;var er=(t,e,i)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,A=(t,e)=>{for(var i in e||(e={}))rr.call(e,i)&&er(t,i,e[i]);if(Q)for(var i of Q(e))lt.call(e,i)&&er(t,i,e[i]);return t},_=(t,e)=>at(t,st(e)),dt=t=>E(t,"__esModule",{value:!0});var m=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var xt=(t,e,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of ft(e))!rr.call(t,c)&&c!=="default"&&E(t,c,{get:()=>e[c],enumerable:!(i=ot(e,c))||i.enumerable});return t},tr=t=>xt(dt(E(t!=null?ut(ct(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var Z=(t,e,i)=>new Promise((c,l)=>{var x=u=>{try{r(i.next(u))}catch(o){l(o)}},s=u=>{try{r(i.throw(u))}catch(o){l(o)}},r=u=>u.done?c(u.value):Promise.resolve(u.value).then(x,s);r((i=i.apply(t,e)).next())});var nr=m((Vn,ir)=>{function mt(t,e,i,c){var l=-1,x=t==null?0:t.length;for(c&&x&&(i=t[++l]);++l<x;)i=e(i,t[l],l,t);return i}ir.exports=mt});var ar=m((Zn,ur)=>{function pt(t){return function(e){return t==null?void 0:t[e]}}ur.exports=pt});var sr=m((Wn,or)=>{var gt=ar(),ht={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},bt=gt(ht);or.exports=bt});var cr=m((Xn,fr)=>{var yt=typeof global=="object"&&global&&global.Object===Object&&global;fr.exports=yt});var dr=m((Fn,lr)=>{var wt=cr(),vt=typeof self=="object"&&self&&self.Object===Object&&self,Tt=wt||vt||Function("return this")();lr.exports=Tt});var z=m((Hn,xr)=>{var Ct=dr(),Pt=Ct.Symbol;xr.exports=Pt});var pr=m((Jn,mr)=>{function Rt(t,e){for(var i=-1,c=t==null?0:t.length,l=Array(c);++i<c;)l[i]=e(t[i],i,t);return l}mr.exports=Rt});var hr=m((Bn,gr)=>{var St=Array.isArray;gr.exports=St});var vr=m((Yn,wr)=>{var br=z(),yr=Object.prototype,At=yr.hasOwnProperty,qt=yr.toString,D=br?br.toStringTag:void 0;function jt(t){var e=At.call(t,D),i=t[D];try{t[D]=void 0;var c=!0}catch(x){}var l=qt.call(t);return c&&(e?t[D]=i:delete t[D]),l}wr.exports=jt});var Cr=m(($n,Tr)=>{var Ot=Object.prototype,Mt=Ot.toString;function Lt(t){return Mt.call(t)}Tr.exports=Lt});var Ar=m((Kn,Sr)=>{var Pr=z(),Nt=vr(),Ut=Cr(),Dt="[object Null]",kt="[object Undefined]",Rr=Pr?Pr.toStringTag:void 0;function Et(t){return t==null?t===void 0?kt:Dt:Rr&&Rr in Object(t)?Nt(t):Ut(t)}Sr.exports=Et});var jr=m((Qn,qr)=>{function _t(t){return t!=null&&typeof t=="object"}qr.exports=_t});var Mr=m((ru,Or)=>{var zt=Ar(),Gt=jr(),It="[object Symbol]";function Vt(t){return typeof t=="symbol"||Gt(t)&&zt(t)==It}Or.exports=Vt});var Er=m((eu,kr)=>{var Lr=z(),Zt=pr(),Wt=hr(),Xt=Mr(),Ft=1/0,Nr=Lr?Lr.prototype:void 0,Ur=Nr?Nr.toString:void 0;function Dr(t){if(typeof t=="string")return t;if(Wt(t))return Zt(t,Dr)+"";if(Xt(t))return Ur?Ur.call(t):"";var e=t+"";return e=="0"&&1/t==-Ft?"-0":e}kr.exports=Dr});var G=m((tu,_r)=>{var Ht=Er();function Jt(t){return t==null?"":Ht(t)}_r.exports=Jt});var Gr=m((iu,zr)=>{var Bt=sr(),Yt=G(),$t=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt="\\u0300-\\u036f",Qt="\\ufe20-\\ufe2f",ri="\\u20d0-\\u20ff",ei=Kt+Qt+ri,ti="["+ei+"]",ii=RegExp(ti,"g");function ni(t){return t=Yt(t),t&&t.replace($t,Bt).replace(ii,"")}zr.exports=ni});var Vr=m((nu,Ir)=>{var ui=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function ai(t){return t.match(ui)||[]}Ir.exports=ai});var Wr=m((uu,Zr)=>{var oi=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function si(t){return oi.test(t)}Zr.exports=si});var fe=m((au,se)=>{var Xr="\\ud800-\\udfff",fi="\\u0300-\\u036f",ci="\\ufe20-\\ufe2f",li="\\u20d0-\\u20ff",di=fi+ci+li,Fr="\\u2700-\\u27bf",Hr="a-z\\xdf-\\xf6\\xf8-\\xff",xi="\\xac\\xb1\\xd7\\xf7",mi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",pi="\\u2000-\\u206f",gi=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Jr="A-Z\\xc0-\\xd6\\xd8-\\xde",hi="\\ufe0e\\ufe0f",Br=xi+mi+pi+gi,Yr="['\u2019]",$r="["+Br+"]",bi="["+di+"]",Kr="\\d+",yi="["+Fr+"]",Qr="["+Hr+"]",re="[^"+Xr+Br+Kr+Fr+Hr+Jr+"]",wi="\\ud83c[\\udffb-\\udfff]",vi="(?:"+bi+"|"+wi+")",Ti="[^"+Xr+"]",ee="(?:\\ud83c[\\udde6-\\uddff]){2}",te="[\\ud800-\\udbff][\\udc00-\\udfff]",M="["+Jr+"]",Ci="\\u200d",ie="(?:"+Qr+"|"+re+")",Pi="(?:"+M+"|"+re+")",ne="(?:"+Yr+"(?:d|ll|m|re|s|t|ve))?",ue="(?:"+Yr+"(?:D|LL|M|RE|S|T|VE))?",ae=vi+"?",oe="["+hi+"]?",Ri="(?:"+Ci+"(?:"+[Ti,ee,te].join("|")+")"+oe+ae+")*",Si="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Ai="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",qi=oe+ae+Ri,ji="(?:"+[yi,ee,te].join("|")+")"+qi,Oi=RegExp([M+"?"+Qr+"+"+ne+"(?="+[$r,M,"$"].join("|")+")",Pi+"+"+ue+"(?="+[$r,M+ie,"$"].join("|")+")",M+"?"+ie+"+"+ne,M+"+"+ue,Ai,Si,Kr,ji].join("|"),"g");function Mi(t){return t.match(Oi)||[]}se.exports=Mi});var le=m((ou,ce)=>{var Li=Vr(),Ni=Wr(),Ui=G(),Di=fe();function ki(t,e,i){return t=Ui(t),e=i?void 0:e,e===void 0?Ni(t)?Di(t):Li(t):t.match(e)||[]}ce.exports=ki});var xe=m((su,de)=>{var Ei=nr(),_i=Gr(),zi=le(),Gi="['\u2019]",Ii=RegExp(Gi,"g");function Vi(t){return function(e){return Ei(zi(_i(e).replace(Ii,"")),t,"")}}de.exports=Vi});var pe=m((fu,me)=>{function Zi(t,e,i){var c=-1,l=t.length;e<0&&(e=-e>l?0:l+e),i=i>l?l:i,i<0&&(i+=l),l=e>i?0:i-e>>>0,e>>>=0;for(var x=Array(l);++c<l;)x[c]=t[c+e];return x}me.exports=Zi});var he=m((cu,ge)=>{var Wi=pe();function Xi(t,e,i){var c=t.length;return i=i===void 0?c:i,!e&&i>=c?t:Wi(t,e,i)}ge.exports=Xi});var W=m((lu,be)=>{var Fi="\\ud800-\\udfff",Hi="\\u0300-\\u036f",Ji="\\ufe20-\\ufe2f",Bi="\\u20d0-\\u20ff",Yi=Hi+Ji+Bi,$i="\\ufe0e\\ufe0f",Ki="\\u200d",Qi=RegExp("["+Ki+Fi+Yi+$i+"]");function rn(t){return Qi.test(t)}be.exports=rn});var we=m((du,ye)=>{function en(t){return t.split("")}ye.exports=en});var qe=m((xu,Ae)=>{var ve="\\ud800-\\udfff",tn="\\u0300-\\u036f",nn="\\ufe20-\\ufe2f",un="\\u20d0-\\u20ff",an=tn+nn+un,on="\\ufe0e\\ufe0f",sn="["+ve+"]",X="["+an+"]",F="\\ud83c[\\udffb-\\udfff]",fn="(?:"+X+"|"+F+")",Te="[^"+ve+"]",Ce="(?:\\ud83c[\\udde6-\\uddff]){2}",Pe="[\\ud800-\\udbff][\\udc00-\\udfff]",cn="\\u200d",Re=fn+"?",Se="["+on+"]?",ln="(?:"+cn+"(?:"+[Te,Ce,Pe].join("|")+")"+Se+Re+")*",dn=Se+Re+ln,xn="(?:"+[Te+X+"?",X,Ce,Pe,sn].join("|")+")",mn=RegExp(F+"(?="+F+")|"+xn+dn,"g");function pn(t){return t.match(mn)||[]}Ae.exports=pn});var Oe=m((mu,je)=>{var gn=we(),hn=W(),bn=qe();function yn(t){return hn(t)?bn(t):gn(t)}je.exports=yn});var Le=m((pu,Me)=>{var wn=he(),vn=W(),Tn=Oe(),Cn=G();function Pn(t){return function(e){e=Cn(e);var i=vn(e)?Tn(e):void 0,c=i?i[0]:e.charAt(0),l=i?wn(i,1).join(""):e.slice(1);return c[t]()+l}}Me.exports=Pn});var Ue=m((gu,Ne)=>{var Rn=Le(),Sn=Rn("toUpperCase");Ne.exports=Sn});var ke=m((hu,De)=>{var An=xe(),qn=Ue(),jn=An(function(t,e,i){return t+(i?" ":"")+qn(e)});De.exports=jn});var Ve=m((Ie,H)=>{(function(t,e,i){function c(r){var u=this,o=s();u.next=function(){var n=2091639*u.s0+u.c*23283064365386963e-26;return u.s0=u.s1,u.s1=u.s2,u.s2=n-(u.c=n|0)},u.c=1,u.s0=o(" "),u.s1=o(" "),u.s2=o(" "),u.s0-=o(r),u.s0<0&&(u.s0+=1),u.s1-=o(r),u.s1<0&&(u.s1+=1),u.s2-=o(r),u.s2<0&&(u.s2+=1),o=null}function l(r,u){return u.c=r.c,u.s0=r.s0,u.s1=r.s1,u.s2=r.s2,u}function x(r,u){var o=new c(r),n=u&&u.state,a=o.next;return a.int32=function(){return o.next()*4294967296|0},a.double=function(){return a()+(a()*2097152|0)*11102230246251565e-32},a.quick=a,n&&(typeof n=="object"&&l(n,o),a.state=function(){return l(o,{})}),a}function s(){var r=4022871197,u=function(o){o=String(o);for(var n=0;n<o.length;n++){r+=o.charCodeAt(n);var a=.02519603282416938*r;r=a>>>0,a-=r,a*=r,r=a>>>0,a-=r,r+=a*4294967296}return(r>>>0)*23283064365386963e-26};return u}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.alea=x})(Ie,typeof H=="object"&&H,typeof define=="function"&&define)});var We=m((Ze,J)=>{(function(t,e,i){function c(s){var r=this,u="";r.x=0,r.y=0,r.z=0,r.w=0,r.next=function(){var n=r.x^r.x<<11;return r.x=r.y,r.y=r.z,r.z=r.w,r.w^=r.w>>>19^n^n>>>8},s===(s|0)?r.x=s:u+=s;for(var o=0;o<u.length+64;o++)r.x^=u.charCodeAt(o)|0,r.next()}function l(s,r){return r.x=s.x,r.y=s.y,r.z=s.z,r.w=s.w,r}function x(s,r){var u=new c(s),o=r&&r.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,d=(a+f)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.xor128=x})(Ze,typeof J=="object"&&J,typeof define=="function"&&define)});var Fe=m((Xe,B)=>{(function(t,e,i){function c(s){var r=this,u="";r.next=function(){var n=r.x^r.x>>>2;return r.x=r.y,r.y=r.z,r.z=r.w,r.w=r.v,(r.d=r.d+362437|0)+(r.v=r.v^r.v<<4^(n^n<<1))|0},r.x=0,r.y=0,r.z=0,r.w=0,r.v=0,s===(s|0)?r.x=s:u+=s;for(var o=0;o<u.length+64;o++)r.x^=u.charCodeAt(o)|0,o==u.length&&(r.d=r.x<<10^r.x>>>4),r.next()}function l(s,r){return r.x=s.x,r.y=s.y,r.z=s.z,r.w=s.w,r.v=s.v,r.d=s.d,r}function x(s,r){var u=new c(s),o=r&&r.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,d=(a+f)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.xorwow=x})(Xe,typeof B=="object"&&B,typeof define=="function"&&define)});var Je=m((He,Y)=>{(function(t,e,i){function c(s){var r=this;r.next=function(){var o=r.x,n=r.i,a,f,d;return a=o[n],a^=a>>>7,f=a^a<<24,a=o[n+1&7],f^=a^a>>>10,a=o[n+3&7],f^=a^a>>>3,a=o[n+4&7],f^=a^a<<7,a=o[n+7&7],a=a^a<<13,f^=a^a<<9,o[n]=f,r.i=n+1&7,f};function u(o,n){var a,f,d=[];if(n===(n|0))f=d[0]=n;else for(n=""+n,a=0;a<n.length;++a)d[a&7]=d[a&7]<<15^n.charCodeAt(a)+d[a+1&7]<<13;for(;d.length<8;)d.push(0);for(a=0;a<8&&d[a]===0;++a);for(a==8?f=d[7]=-1:f=d[a],o.x=d,o.i=0,a=256;a>0;--a)o.next()}u(r,s)}function l(s,r){return r.x=s.x.slice(),r.i=s.i,r}function x(s,r){s==null&&(s=+new Date);var u=new c(s),o=r&&r.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,d=(a+f)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(o.x&&l(o,u),n.state=function(){return l(u,{})}),n}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.xorshift7=x})(He,typeof Y=="object"&&Y,typeof define=="function"&&define)});var Ye=m((Be,$)=>{(function(t,e,i){function c(s){var r=this;r.next=function(){var o=r.w,n=r.X,a=r.i,f,d;return r.w=o=o+1640531527|0,d=n[a+34&127],f=n[a=a+1&127],d^=d<<13,f^=f<<17,d^=d>>>15,f^=f>>>12,d=n[a]=d^f,r.i=a,d+(o^o>>>16)|0};function u(o,n){var a,f,d,w,q,P=[],L=128;for(n===(n|0)?(f=n,n=null):(n=n+"\0",f=0,L=Math.max(L,n.length)),d=0,w=-32;w<L;++w)n&&(f^=n.charCodeAt((w+32)%n.length)),w===0&&(q=f),f^=f<<10,f^=f>>>15,f^=f<<4,f^=f>>>13,w>=0&&(q=q+1640531527|0,a=P[w&127]^=f+q,d=a==0?d+1:0);for(d>=128&&(P[(n&&n.length||0)&127]=-1),d=127,w=4*128;w>0;--w)f=P[d+34&127],a=P[d=d+1&127],f^=f<<13,a^=a<<17,f^=f>>>15,a^=a>>>12,P[d]=f^a;o.w=q,o.X=P,o.i=d}u(r,s)}function l(s,r){return r.i=s.i,r.w=s.w,r.X=s.X.slice(),r}function x(s,r){s==null&&(s=+new Date);var u=new c(s),o=r&&r.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,d=(a+f)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(o.X&&l(o,u),n.state=function(){return l(u,{})}),n}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.xor4096=x})(Be,typeof $=="object"&&$,typeof define=="function"&&define)});var Ke=m(($e,K)=>{(function(t,e,i){function c(s){var r=this,u="";r.next=function(){var n=r.b,a=r.c,f=r.d,d=r.a;return n=n<<25^n>>>7^a,a=a-f|0,f=f<<24^f>>>8^d,d=d-n|0,r.b=n=n<<20^n>>>12^a,r.c=a=a-f|0,r.d=f<<16^a>>>16^d,r.a=d-n|0},r.a=0,r.b=0,r.c=2654435769|0,r.d=1367130551,s===Math.floor(s)?(r.a=s/4294967296|0,r.b=s|0):u+=s;for(var o=0;o<u.length+20;o++)r.b^=u.charCodeAt(o)|0,r.next()}function l(s,r){return r.a=s.a,r.b=s.b,r.c=s.c,r.d=s.d,r}function x(s,r){var u=new c(s),o=r&&r.state,n=function(){return(u.next()>>>0)/4294967296};return n.double=function(){do var a=u.next()>>>11,f=(u.next()>>>0)/4294967296,d=(a+f)/(1<<21);while(d===0);return d},n.int32=u.next,n.quick=n,o&&(typeof o=="object"&&l(o,u),n.state=function(){return l(u,{})}),n}e&&e.exports?e.exports=x:i&&i.amd?i(function(){return x}):this.tychei=x})($e,typeof K=="object"&&K,typeof define=="function"&&define)});var Qe=m(()=>{});var et=m((rt,V)=>{(function(t,e,i){var c=256,l=6,x=52,s="random",r=i.pow(c,l),u=i.pow(2,x),o=u*2,n=c-1,a;function f(p,g,y){var b=[];g=g==!0?{entropy:!0}:g||{};var h=P(q(g.entropy?[p,N(e)]:p??L(),3),b),v=new d(b),C=function(){for(var T=v.g(l),S=r,R=0;T<u;)T=(T+R)*c,S*=c,R=v.g(1);for(;T>=o;)T/=2,S/=2,R>>>=1;return(T+R)/S};return C.int32=function(){return v.g(4)|0},C.quick=function(){return v.g(4)/4294967296},C.double=C,P(N(v.S),e),(g.pass||y||function(T,S,R,j){return j&&(j.S&&w(j,v),T.state=function(){return w(v,{})}),R?(i[s]=T,S):T})(C,h,"global"in g?g.global:this==i,g.state)}function d(p){var g,y=p.length,b=this,h=0,v=b.i=b.j=0,C=b.S=[];for(y||(p=[y++]);h<c;)C[h]=h++;for(h=0;h<c;h++)C[h]=C[v=n&v+p[h%y]+(g=C[h])],C[v]=g;(b.g=function(T){for(var S,R=0,j=b.i,k=b.j,U=b.S;T--;)S=U[j=n&j+1],R=R*c+U[n&(U[j]=U[k=n&k+S])+(U[k]=S)];return b.i=j,b.j=k,R})(c)}function w(p,g){return g.i=p.i,g.j=p.j,g.S=p.S.slice(),g}function q(p,g){var y=[],b=typeof p,h;if(g&&b=="object")for(h in p)try{y.push(q(p[h],g-1))}catch(v){}return y.length?y:b=="string"?p:p+"\0"}function P(p,g){for(var y=p+"",b,h=0;h<y.length;)g[n&h]=n&(b^=g[n&h]*19)+y.charCodeAt(h++);return N(g)}function L(){try{var p;return a&&(p=a.randomBytes)?p=p(c):(p=new Uint8Array(c),(t.crypto||t.msCrypto).getRandomValues(p)),N(p)}catch(b){var g=t.navigator,y=g&&g.plugins;return[+new Date,t,y,t.screen,N(e)]}}function N(p){return String.fromCharCode.apply(0,p)}if(P(i.random(),e),typeof V=="object"&&V.exports){V.exports=f;try{a=Qe()}catch(p){}}else typeof define=="function"&&define.amd?define(function(){return f}):i["seed"+s]=f})(typeof self!="undefined"?self:rt,[],Math)});var it=m((vu,tt)=>{var Dn=Ve(),kn=We(),En=Fe(),_n=Je(),zn=Ye(),Gn=Ke(),O=et();O.alea=Dn;O.xor128=kn;O.xorwow=En;O.xorshift7=_n;O.xor4096=zn;O.tychei=Gn;tt.exports=O});var Ee=tr(ke());function _e(t){return t instanceof Date?t.toISOString():Array.isArray(t)?t.map(_e):t}function On(t,e){return Z(this,null,function*(){var r;let{data:{key:i,params:c}}=t,l,x;try{l=yield e(...c)}catch(u){l=void 0;try{x=u.toString()}catch(o){x="Exception can't be stringified."}}let s={key:i};l!==void 0&&(l=_e(l),s.result={type:"string",value:l}),x!==void 0&&(s.error=x),((r=t.source)==null?void 0:r.postMessage).call(r,s,"*")})}function Mn(t){return typeof window!="undefined"&&window.addEventListener("message",e=>On(e,t.run)),_(A({},t),{json:JSON.stringify(Nn(t),null,2)})}var Ln=`
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
    `,ze=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Nn(t){let{name:e,category:i,released:c,description:l,author:x,result:s,params:r,about:u,video:o}=t,{icon:n=ze}=t;return n==="glide"&&(n=Ln),{name:e,category:i,released:c,description:l,author:x,result:s,about:u,icon:n,video:o,params:Object.entries(r).map(([a,f])=>A({name:a},f))}}var Un={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:ze,about:void 0,video:void 0,tests:[],run(){return Z(this,null,function*(){})}},I=class{constructor(e={},i=[]){this.definition=A(A({},Un),e),this.requiredParams=[...i]}with(e,i=[]){return new I(A(A({},this.definition),e),[...this.requiredParams,...i])}withName(e){return this.with({name:e})}withCategory(e){return this.with({category:e})}withReleased(e){return this.with({released:e})}withDescription(e){return this.with({description:e})}withAbout(e){return this.with({about:e})}withVideo(e){return this.with({video:e})}withIcon(e){return this.with({icon:e})}withAuthor(e,i){return this.with({author:`${e} <${i}>`})}withTest(e,i){let{tests:c=[]}=this.definition;return this.with({tests:[...c,{params:e,expectedResult:i}]})}withResult(e){return this.with({result:{type:e}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(e,i,c){return c===void 0&&(c=(0,Ee.default)(i)),this.with({params:_(A({},this.definition.params),{[i]:{type:e,displayName:c}})})}withRequiredParam(e,i,c){return this.withParam(e,i,c).with({},[i])}withPrimitiveParam(e,i){return this.withParam("primitive",e,i)}withStringParam(e,i){return this.withParam("string",e,i)}withDateParam(e,i){return this.withParam("date-time",e,i)}withNumberParam(e,i){return this.withParam("number",e,i)}withRequiredPrimitiveParam(e,i){return this.withRequiredParam("primitive",e,i)}withRequiredStringParam(e,i){return this.withRequiredParam("string",e,i)}withRequiredDateParam(e,i){return this.withRequiredParam("date-time",e,i)}withRequiredNumberParam(e,i){return this.withRequiredParam("number",e,i)}withStringArrayParam(e,i){return this.withParam({kind:"array",items:"string"},e,i)}withNumberArrayParam(e,i){return this.withParam({kind:"array",items:"number"},e,i)}withPrimitiveArrayParam(e,i){return this.withParam({kind:"array",items:"primitive"},e,i)}withExample(e){return this.with({example:e})}run(e){let{params:i}=this.definition,c=this.requiredParams,l=Object.keys(i);function x(...s){let r={};if(s.forEach(({value:u},o)=>{r[l[o]]=u}),!c.some(u=>r[u]===void 0))return e(r)}return Mn(_(A({},this.definition),{run:x}))}};function Ge(t){return new I({name:t})}var nt=tr(it()),Cu=Ge("Random Number").withCategory("Number").withDescription("Turn any value into a stable random number.").withAuthor("davidbau","github.com/davidbau/seedrandom").withVideo("https://www.youtube.com/watch?v=GtOt7EBNEwQ").withRequiredPrimitiveParam("seed").withNumberResult().withTest({seed:"Glide"},.3711851882348728).run(({seed:t})=>(0,nt.default)(t)());})();
//# sourceMappingURL=index.js.map