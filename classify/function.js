var hr=Object.create;var b=Object.defineProperty,xr=Object.defineProperties,yr=Object.getOwnPropertyDescriptor,Tr=Object.getOwnPropertyDescriptors,wr=Object.getOwnPropertyNames,q=Object.getOwnPropertySymbols,vr=Object.getPrototypeOf,A=Object.prototype.hasOwnProperty,Cr=Object.prototype.propertyIsEnumerable;var O=(e,r,t)=>r in e?b(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))A.call(r,t)&&O(e,t,r[t]);if(q)for(var t of q(r))Cr.call(r,t)&&O(e,t,r[t]);return e},h=(e,r)=>xr(e,Tr(r)),Pr=e=>b(e,"__esModule",{value:!0});var a=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var Sr=(e,r,t)=>{if(r&&typeof r=="object"||typeof r=="function")for(let i of wr(r))!A.call(e,i)&&i!=="default"&&b(e,i,{get:()=>r[i],enumerable:!(t=yr(r,i))||t.enumerable});return e},Rr=e=>Sr(Pr(b(e!=null?hr(vr(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var j=(e,r,t)=>new Promise((i,n)=>{var u=o=>{try{l(t.next(o))}catch(c){n(c)}},s=o=>{try{l(t.throw(o))}catch(c){n(c)}},l=o=>o.done?i(o.value):Promise.resolve(o.value).then(u,s);l((t=t.apply(e,r)).next())});var L=a(($i,M)=>{function qr(e,r,t,i){var n=-1,u=e==null?0:e.length;for(i&&u&&(t=e[++n]);++n<u;)t=r(t,e[n],n,e);return t}M.exports=qr});var N=a((Qi,E)=>{function Ar(e){return function(r){return e==null?void 0:e[r]}}E.exports=Ar});var z=a((Xi,D)=>{var Or=N(),jr={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Mr=Or(jr);D.exports=Mr});var _=a((en,U)=>{var Lr=typeof global=="object"&&global&&global.Object===Object&&global;U.exports=Lr});var I=a((rn,k)=>{var Er=_(),Nr=typeof self=="object"&&self&&self.Object===Object&&self,Dr=Er||Nr||Function("return this")();k.exports=Dr});var x=a((tn,F)=>{var zr=I(),Ur=zr.Symbol;F.exports=Ur});var J=a((nn,Z)=>{function _r(e,r){for(var t=-1,i=e==null?0:e.length,n=Array(i);++t<i;)n[t]=r(e[t],t,e);return n}Z.exports=_r});var W=a((an,V)=>{var kr=Array.isArray;V.exports=kr});var Y=a((un,B)=>{var G=x(),H=Object.prototype,Ir=H.hasOwnProperty,Fr=H.toString,g=G?G.toStringTag:void 0;function Zr(e){var r=Ir.call(e,g),t=e[g];try{e[g]=void 0;var i=!0}catch(u){}var n=Fr.call(e);return i&&(r?e[g]=t:delete e[g]),n}B.exports=Zr});var $=a((on,K)=>{var Jr=Object.prototype,Vr=Jr.toString;function Wr(e){return Vr.call(e)}K.exports=Wr});var re=a((sn,ee)=>{var Q=x(),Gr=Y(),Hr=$(),Br="[object Null]",Yr="[object Undefined]",X=Q?Q.toStringTag:void 0;function Kr(e){return e==null?e===void 0?Yr:Br:X&&X in Object(e)?Gr(e):Hr(e)}ee.exports=Kr});var ie=a((ln,te)=>{function $r(e){return e!=null&&typeof e=="object"}te.exports=$r});var ae=a((cn,ne)=>{var Qr=re(),Xr=ie(),et="[object Symbol]";function rt(e){return typeof e=="symbol"||Xr(e)&&Qr(e)==et}ne.exports=rt});var fe=a((fn,ce)=>{var ue=x(),tt=J(),it=W(),nt=ae(),at=1/0,oe=ue?ue.prototype:void 0,se=oe?oe.toString:void 0;function le(e){if(typeof e=="string")return e;if(it(e))return tt(e,le)+"";if(nt(e))return se?se.call(e):"";var r=e+"";return r=="0"&&1/e==-at?"-0":r}ce.exports=le});var y=a((dn,de)=>{var ut=fe();function ot(e){return e==null?"":ut(e)}de.exports=ot});var pe=a((mn,me)=>{var st=z(),lt=y(),ct=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ft="\\u0300-\\u036f",dt="\\ufe20-\\ufe2f",mt="\\u20d0-\\u20ff",pt=ft+dt+mt,gt="["+pt+"]",bt=RegExp(gt,"g");function ht(e){return e=lt(e),e&&e.replace(ct,st).replace(bt,"")}me.exports=ht});var be=a((pn,ge)=>{var xt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function yt(e){return e.match(xt)||[]}ge.exports=yt});var xe=a((gn,he)=>{var Tt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function wt(e){return Tt.test(e)}he.exports=wt});var Ue=a((bn,ze)=>{var ye="\\ud800-\\udfff",vt="\\u0300-\\u036f",Ct="\\ufe20-\\ufe2f",Pt="\\u20d0-\\u20ff",St=vt+Ct+Pt,Te="\\u2700-\\u27bf",we="a-z\\xdf-\\xf6\\xf8-\\xff",Rt="\\xac\\xb1\\xd7\\xf7",qt="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",At="\\u2000-\\u206f",Ot=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",ve="A-Z\\xc0-\\xd6\\xd8-\\xde",jt="\\ufe0e\\ufe0f",Ce=Rt+qt+At+Ot,Pe="['\u2019]",Se="["+Ce+"]",Mt="["+St+"]",Re="\\d+",Lt="["+Te+"]",qe="["+we+"]",Ae="[^"+ye+Ce+Re+Te+we+ve+"]",Et="\\ud83c[\\udffb-\\udfff]",Nt="(?:"+Mt+"|"+Et+")",Dt="[^"+ye+"]",Oe="(?:\\ud83c[\\udde6-\\uddff]){2}",je="[\\ud800-\\udbff][\\udc00-\\udfff]",m="["+ve+"]",zt="\\u200d",Me="(?:"+qe+"|"+Ae+")",Ut="(?:"+m+"|"+Ae+")",Le="(?:"+Pe+"(?:d|ll|m|re|s|t|ve))?",Ee="(?:"+Pe+"(?:D|LL|M|RE|S|T|VE))?",Ne=Nt+"?",De="["+jt+"]?",_t="(?:"+zt+"(?:"+[Dt,Oe,je].join("|")+")"+De+Ne+")*",kt="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",It="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ft=De+Ne+_t,Zt="(?:"+[Lt,Oe,je].join("|")+")"+Ft,Jt=RegExp([m+"?"+qe+"+"+Le+"(?="+[Se,m,"$"].join("|")+")",Ut+"+"+Ee+"(?="+[Se,m+Me,"$"].join("|")+")",m+"?"+Me+"+"+Le,m+"+"+Ee,It,kt,Re,Zt].join("|"),"g");function Vt(e){return e.match(Jt)||[]}ze.exports=Vt});var ke=a((hn,_e)=>{var Wt=be(),Gt=xe(),Ht=y(),Bt=Ue();function Yt(e,r,t){return e=Ht(e),r=t?void 0:r,r===void 0?Gt(e)?Bt(e):Wt(e):e.match(r)||[]}_e.exports=Yt});var Fe=a((xn,Ie)=>{var Kt=L(),$t=pe(),Qt=ke(),Xt="['\u2019]",ei=RegExp(Xt,"g");function ri(e){return function(r){return Kt(Qt($t(r).replace(ei,"")),e,"")}}Ie.exports=ri});var Je=a((yn,Ze)=>{function ti(e,r,t){var i=-1,n=e.length;r<0&&(r=-r>n?0:n+r),t=t>n?n:t,t<0&&(t+=n),n=r>t?0:t-r>>>0,r>>>=0;for(var u=Array(n);++i<n;)u[i]=e[i+r];return u}Ze.exports=ti});var We=a((Tn,Ve)=>{var ii=Je();function ni(e,r,t){var i=e.length;return t=t===void 0?i:t,!r&&t>=i?e:ii(e,r,t)}Ve.exports=ni});var C=a((wn,Ge)=>{var ai="\\ud800-\\udfff",ui="\\u0300-\\u036f",oi="\\ufe20-\\ufe2f",si="\\u20d0-\\u20ff",li=ui+oi+si,ci="\\ufe0e\\ufe0f",fi="\\u200d",di=RegExp("["+fi+ai+li+ci+"]");function mi(e){return di.test(e)}Ge.exports=mi});var Be=a((vn,He)=>{function pi(e){return e.split("")}He.exports=pi});var tr=a((Cn,rr)=>{var Ye="\\ud800-\\udfff",gi="\\u0300-\\u036f",bi="\\ufe20-\\ufe2f",hi="\\u20d0-\\u20ff",xi=gi+bi+hi,yi="\\ufe0e\\ufe0f",Ti="["+Ye+"]",P="["+xi+"]",S="\\ud83c[\\udffb-\\udfff]",wi="(?:"+P+"|"+S+")",Ke="[^"+Ye+"]",$e="(?:\\ud83c[\\udde6-\\uddff]){2}",Qe="[\\ud800-\\udbff][\\udc00-\\udfff]",vi="\\u200d",Xe=wi+"?",er="["+yi+"]?",Ci="(?:"+vi+"(?:"+[Ke,$e,Qe].join("|")+")"+er+Xe+")*",Pi=er+Xe+Ci,Si="(?:"+[Ke+P+"?",P,$e,Qe,Ti].join("|")+")",Ri=RegExp(S+"(?="+S+")|"+Si+Pi,"g");function qi(e){return e.match(Ri)||[]}rr.exports=qi});var nr=a((Pn,ir)=>{var Ai=Be(),Oi=C(),ji=tr();function Mi(e){return Oi(e)?ji(e):Ai(e)}ir.exports=Mi});var ur=a((Sn,ar)=>{var Li=We(),Ei=C(),Ni=nr(),Di=y();function zi(e){return function(r){r=Di(r);var t=Ei(r)?Ni(r):void 0,i=t?t[0]:r.charAt(0),n=t?Li(t,1).join(""):r.slice(1);return i[e]()+n}}ar.exports=zi});var sr=a((Rn,or)=>{var Ui=ur(),_i=Ui("toUpperCase");or.exports=_i});var cr=a((qn,lr)=>{var ki=Fe(),Ii=sr(),Fi=ki(function(e,r,t){return e+(t?" ":"")+Ii(r)});lr.exports=Fi});var gr=a((On,w)=>{w.exports=function(e){return new d(e)};var pr=w.exports.STATE_KEYS=["categories","docCount","totalDocuments","vocabulary","vocabularySize","wordCount","wordFrequencyCount","options"];w.exports.fromJson=function(e){var r;try{r=JSON.parse(e)}catch(i){throw new Error("Naivebayes.fromJson expects a valid JSON string.")}var t=new d(r.options);return pr.forEach(function(i){if(typeof r[i]=="undefined"||r[i]===null)throw new Error("Naivebayes.fromJson: JSON string is missing an expected property: `"+i+"`.");t[i]=r[i]}),t};var Gi=function(e){var r=/[^(a-zA-ZA-Яa-я0-9_)+\s]/g,t=e.replace(r," ");return t.split(/\s+/)};function d(e){if(this.options={},typeof e!="undefined"){if(!e||typeof e!="object"||Array.isArray(e))throw TypeError("NaiveBayes got invalid `options`: `"+e+"`. Pass in an object.");this.options=e}this.tokenizer=this.options.tokenizer||Gi,this.vocabulary={},this.vocabularySize=0,this.totalDocuments=0,this.docCount={},this.wordCount={},this.wordFrequencyCount={},this.categories={}}d.prototype.initializeCategory=function(e){return this.categories[e]||(this.docCount[e]=0,this.wordCount[e]=0,this.wordFrequencyCount[e]={},this.categories[e]=!0),this};d.prototype.learn=async function(e,r){var t=this;t.initializeCategory(r),t.docCount[r]++,t.totalDocuments++;var i=await t.tokenizer(e),n=t.frequencyTable(i);return Object.keys(n).forEach(function(u){t.vocabulary[u]||(t.vocabulary[u]=!0,t.vocabularySize++);var s=n[u];t.wordFrequencyCount[r][u]?t.wordFrequencyCount[r][u]+=s:t.wordFrequencyCount[r][u]=s,t.wordCount[r]+=s}),t};d.prototype.categorize=async function(e){var r=this,t=-1/0,i=null,n=await r.tokenizer(e),u=r.frequencyTable(n);return Object.keys(r.categories).forEach(function(s){var l=r.docCount[s]/r.totalDocuments,o=Math.log(l);Object.keys(u).forEach(function(c){var p=u[c],v=r.tokenProbability(c,s);o+=p*Math.log(v)}),o>t&&(t=o,i=s)}),i};d.prototype.tokenProbability=function(e,r){var t=this.wordFrequencyCount[r][e]||0,i=this.wordCount[r];return(t+1)/(i+this.vocabularySize)};d.prototype.frequencyTable=function(e){var r=Object.create(null);return e.forEach(function(t){r[t]?r[t]++:r[t]=1}),r};d.prototype.toJson=function(){var e={},r=this;pr.forEach(function(i){e[i]=r[i]});var t=JSON.stringify(e);return t}});var fr=Rr(cr());function Zi(e){return h(f({},e),{json:JSON.stringify(Vi(e),null,2)})}var Ji=`
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
    `,dr=`<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0002 34.828L2.58624 25.414C1.80524 24.633 1.80524 23.367 2.58624 22.586L12.0002 13.172L14.8292 16L6.82924 24L14.8292 32L12.0002 34.828Z" fill="currentColor"/>
<path d="M36.0004 34.828L33.1714 32L41.1714 24L33.1714 16L36.0004 13.172L45.4144 22.586C46.1954 23.367 46.1954 24.633 45.4144 25.414L36.0004 34.828Z" fill="currentColor"/>
<path d="M26.5485 5.57617L17.5723 41.4553L21.4527 42.4261L30.4289 6.54697L26.5485 5.57617Z" fill="currentColor"/>
</svg>`;function Vi(e){let{name:r,category:t,released:i,description:n,author:u,result:s,params:l,about:o,video:c}=e,{icon:p=dr}=e;return p==="glide"&&(p=Ji),{name:r,category:t,released:i,description:n,author:u,result:s,about:o,icon:p,video:c,params:Object.entries(l).map(([v,br])=>f({name:v},br))}}var Wi={name:"Glide Column",category:"General",released:void 0,description:"No description",author:"Glide <hello@glideapps.com>",params:{},result:{type:"string"},icon:dr,about:void 0,video:void 0,tests:[],run(){return j(this,null,function*(){})}},T=class{constructor(r={},t=[]){this.definition=f(f({},Wi),r),this.requiredParams=[...t]}with(r,t=[]){return new T(f(f({},this.definition),r),[...this.requiredParams,...t])}withName(r){return this.with({name:r})}withCategory(r){return this.with({category:r})}withReleased(r){return this.with({released:r})}withDescription(r){return this.with({description:r})}withAbout(r){return this.with({about:r})}withVideo(r){return this.with({video:r})}withIcon(r){return this.with({icon:r})}withAuthor(r,t){return this.with({author:`${r} <${t}>`})}withTest(r,t){let{tests:i=[]}=this.definition;return this.with({tests:[...i,{params:r,expectedResult:t}]})}withResult(r){return this.with({result:{type:r}})}withStringResult(){return this.withResult("string")}withPrimitiveResult(){return this.withResult("primitive")}withNumberResult(){return this.withResult("number")}withBooleanResult(){return this.withResult("boolean")}withStringArrayResult(){return this.withResult({kind:"array",items:"string"})}withNumberArrayResult(){return this.withResult({kind:"array",items:"number"})}withPrimitiveArrayResult(){return this.withResult({kind:"array",items:"primitive"})}withParam(r,t,i){return i===void 0&&(i=(0,fr.default)(t)),this.with({params:h(f({},this.definition.params),{[t]:{type:r,displayName:i}})})}withRequiredParam(r,t,i){return this.withParam(r,t,i).with({},[t])}withPrimitiveParam(r,t){return this.withParam("primitive",r,t)}withStringParam(r,t){return this.withParam("string",r,t)}withDateParam(r,t){return this.withParam("date-time",r,t)}withNumberParam(r,t){return this.withParam("number",r,t)}withRequiredPrimitiveParam(r,t){return this.withRequiredParam("primitive",r,t)}withRequiredStringParam(r,t){return this.withRequiredParam("string",r,t)}withRequiredDateParam(r,t){return this.withRequiredParam("date-time",r,t)}withRequiredNumberParam(r,t){return this.withRequiredParam("number",r,t)}withStringArrayParam(r,t){return this.withParam({kind:"array",items:"string"},r,t)}withNumberArrayParam(r,t){return this.withParam({kind:"array",items:"number"},r,t)}withPrimitiveArrayParam(r,t){return this.withParam({kind:"array",items:"primitive"},r,t)}withExample(r){return this.with({example:r})}run(r){let{params:t}=this.definition,i=this.requiredParams,n=Object.keys(t);function u(...s){let l={};if(s.forEach(({value:o},c)=>{l[n[c]]=o}),!i.some(o=>l[o]===void 0))return r(l)}return Zi(h(f({},this.definition),{run:u}))}};function mr(e){return new T({name:e})}var Hi=gr(),Bi="",R={};function Yi(e){var r;return(r=R[e])!=null?r:R[e]=Hi()}var Mn=mr("Classify Text").withCategory("Machine Learning").withDescription("Categorize text based on examples.").withAuthor("ttezel","https://github.com/ttezel/bayes").withAbout(`
      The Classify Text column takes training data in the form of text values, and known categories for those text values. When it sees new text values without categories provided, it tries to infer the category based on the examples it's seen.

      **This is just a proof of concept. Because Glide does not guarantee that all columns are evaluated (it only evaluates columns required to show the current screen), this will usually not produce good results.**`).withVideo("https://www.youtube.com/watch?v=Qu9MM8YAAM0").withRequiredStringParam("phrase").withStringParam("category","Training Data").withStringParam("id","Classifier ID").withStringResult().run(({id:e=Bi,phrase:r,category:t})=>{let i=Yi(e);return t!==void 0?(i.learn(r,t),t):i.categorize(r)});export{Mn as default};
//# sourceMappingURL=function.js.map