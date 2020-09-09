window.PopMechanicTns||(PopMechanicTns=function(){var t=window,e=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},n=window,i=n.cancelAnimationFrame||n.mozCancelAnimationFrame||function(t){clearTimeout(t)};function a(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function r(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function o(t,e,n,i){return i&&t.setItem(e,n),n}function s(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var u=document.documentElement;function l(t){var e="";return t.fake&&(e=u.style.overflow,t.style.background="",t.style.overflow=u.style.overflow="hidden",u.appendChild(t)),e}function c(t,e){t.fake&&(t.remove(),u.style.overflow=e,u.offsetHeight)}function f(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function d(t){return("insertRule"in t?t.cssRules:t.rules).length}function v(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var p="classList"in document.createElement("_"),h=p?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},m=p?function(t,e){h(t,e)||t.classList.add(e)}:function(t,e){h(t,e)||(t.className+=" "+e)},y=p?function(t,e){h(t,e)&&t.classList.remove(e)}:function(t,e){h(t,e)&&(t.className=t.className.replace(e,""))};function g(t,e){return t.hasAttribute(e)}function x(t,e){return t.getAttribute(e)}function b(t){return void 0!==t.item}function w(t,e){if(t=b(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function C(t,e){t=b(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function M(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function T(t){return"none"!==window.getComputedStyle(t).display}function E(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),a=(t.length,0);a<t.length;a++){var r=t[a];if(void 0!==i.style[r])return r}return!1}function k(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var N=!1;try{var B=Object.defineProperty({},"passive",{get:function(){N=!0}});window.addEventListener("test",null,B)}catch(t){}var L=!!N&&{passive:!0};function D(t,e){for(var n in e){var i=("touchstart"===n||"touchmove"===n)&&L;t.addEventListener(n,e[n],i)}}function I(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&L;t.removeEventListener(n,e[n],i)}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var O=function(t){t=a({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var n=document,u=window,p={},b=t.useLocalStorage;if(b){var N=navigator.userAgent,B=new Date;try{(p=u.localStorage)?(p.setItem(B,B),b=p.getItem(B)==B,p.removeItem(B)):b=!1,b||(p={})}catch(N){b=!1}b&&(p.tnsApp&&p.tnsApp!==N&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){p.removeItem(t)}),localStorage.tnsApp=N)}for(var L,S,P,H,R,W,z,q=p.tC?r(p.tC):o(p,"tC",function(){var t=document,e=s(),n=l(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],f=0;f<3;f++)if(r=u[f],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?c(e,n):i.remove(),a}(),b),j=p.tPL?r(p.tPL):o(p,"tPL",function(){var t,e=document,n=s(),i=l(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?c(n,i):a.remove(),t}(),b),F=p.tMQ?r(p.tMQ):o(p,"tMQ",(S=document,H=l(P=s()),R=S.createElement("div"),z="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",(W=S.createElement("style")).type="text/css",R.className="tns-mq-test",P.appendChild(W),P.appendChild(R),W.styleSheet?W.styleSheet.cssText=z:W.appendChild(S.createTextNode(z)),L=window.getComputedStyle?window.getComputedStyle(R).position:R.currentStyle.position,P.fake?c(P,H):R.remove(),"absolute"===L),b),Q=p.tTf?r(p.tTf):o(p,"tTf",E("transform"),b),V=p.t3D?r(p.t3D):o(p,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=s(),a=l(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?c(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(Q),b),X=p.tTDu?r(p.tTDu):o(p,"tTDu",E("transitionDuration"),b),Y=p.tTDe?r(p.tTDe):o(p,"tTDe",E("transitionDelay"),b),K=p.tADu?r(p.tADu):o(p,"tADu",E("animationDuration"),b),U=p.tADe?r(p.tADe):o(p,"tADe",E("animationDelay"),b),G=p.tTE?r(p.tTE):o(p,"tTE",k(X,"Transition"),b),J=p.tAE?r(p.tAE):o(p,"tAE",k(K,"Animation"),b),_=u.console&&"function"==typeof u.console.warn,Z=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],$={},tt=Z.length;tt--;){var et=Z[tt];if("string"==typeof t[et]){var nt=t[et],it=n.querySelector(nt);if($[et]=nt,!it||!it.nodeName)return void(_&&console.warn("Can't find",t[et]));t[et]=it}}if(!(t.container.children.length<1)){var at=t.responsive,rt=t.nested,ot="carousel"===t.mode;if(at){0 in at&&(t=a(t,at[0]),delete at[0]);var st={};for(var ut in at){var lt=at[ut];lt="number"==typeof lt?{items:lt}:lt,st[ut]=lt}at=st,st=null}if(ot&&"outer"!==rt||function t(e){for(var n in e)ot||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===rt&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(t),!ot){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var ct=t.animateIn,ft=t.animateOut,dt=t.animateDelay,vt=t.animateNormal}var pt,ht="horizontal"===t.axis,mt=n.createElement("div"),yt=n.createElement("div"),gt=t.container,xt=gt.parentNode,bt=gt.outerHTML,wt=gt.children,Ct=wt.length,Mt=Nn(),At=!0;at&&Xn();var Tt,Et,kt,Nt,Bt,Lt,Dt=t.autoWidth,It=Dn("fixedWidth"),Ot=Dn("edgePadding"),St=Dn("gutter"),Pt=Bn(),Ht=Dt?1:Math.floor(Dn("items")),Rt=Dn("slideBy"),Wt=t.viewportMax||t.fixedWidthViewportWidth,zt=Dn("arrowKeys"),qt=Dn("speed"),jt=t.rewind,Ft=!jt&&t.loop,Qt=Dn("autoHeight"),Vt=Dn("controls"),Xt=Dn("controlsText"),Yt=Dn("nav"),Kt=Dn("touch"),Ut=Dn("mouseDrag"),Gt=Dn("autoplay"),Jt=Dn("autoplayTimeout"),_t=Dn("autoplayText"),Zt=Dn("autoplayHoverPause"),$t=Dn("autoplayResetOnVisibility"),te=(Lt=document.createElement("style"),document.querySelector("head").appendChild(Lt),Lt.sheet?Lt.sheet:Lt.styleSheet),ee=t.lazyload,ne=[],ie=Ft?(Nt=function(){if(Dt||It&&!Wt)return Ct-1;var e=It?"fixedWidth":"items",n=[];if((It||t[e]<Ct)&&n.push(t[e]),at)for(var i in at){var a=at[i][e];a&&(It||a<Ct)&&n.push(a)}return n.length||n.push(0),Math.ceil(It?Wt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Bt=ot?Math.ceil((5*Nt-Ct)/2):4*Nt-Ct,Bt=Math.max(Nt,Bt),Ln("edgePadding")?Bt+1:Bt):0,ae=ot?Ct+2*ie:Ct+ie,re=!(!It&&!Dt||Ft),oe=It?di():null,se=!ot||!Ft,ue=ht?"left":"top",le="",ce="",fe=It?function(){return Math.floor(-oe/(It+St))+1}:Dt?function(){for(var t=ae,e=t-1;t--;)Tt[t]>-oe&&(e=t);return e}:function(){return Ft||ot?Math.max(0,ae-Math.ceil(Ht)):ae-1},de=En(Dn("startIndex")),ve=de,pe=0,he=Dt?null:fe(),me=t.swipeAngle,ye=!me||"?",ge=!1,xe=t.onInit,be=new function(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){this.topics[t]&&this.topics[t].forEach(function(t){t(e)})}}},we=" tns-slider tns-"+t.mode,Ce=gt.id||(kt=window.tnsId,window.tnsId=kt?kt+1:1,"tns"+window.tnsId),Me=Dn("disable"),Ae=!1,Te=t.freezable,Ee=!(!Te||Dt)&&Vn(),ke=!1,Ne={click:wi,keydown:function(t){switch((t=Bi(t)).keyCode){case 37:case 38:case 33:Ue.disabled||wi(t,-1);break;case 39:case 40:case 34:Ge.disabled||wi(t,1);break;case 36:bi("first",t);break;case 35:bi("last",t)}}},Be={click:function(t){ge&&xi();for(var e=(t=Bi(t)).target||t.srcElement;e!==$e&&!g(e,"data-nav");)e=e.parentNode;g(e,"data-nav")&&bi(an=[].indexOf.call(Ze,e),t)},keydown:function(e){var i=n.activeElement;if(g(i,"data-nav")){var a=(e=Bi(e)).keyCode,r=[].indexOf.call(Ze,i),o=en.length,s=en.indexOf(r);switch(t.navContainer&&(o=Ct,s=r),a){case 37:case 33:0<s&&Ni(Ze[u(s-1)]);break;case 38:case 36:0<s&&Ni(Ze[u(0)]);break;case 39:case 34:s<o-1&&Ni(Ze[u(s+1)]);break;case 40:case 35:s<o-1&&Ni(Ze[u(o-1)]);break;case 13:case 32:bi(an=r,e)}}function u(e){return t.navContainer?e:en[e]}}},Le={mouseover:function(){ln&&(Mi(),cn=!0)},mouseout:function(){cn&&(Ci(),cn=!1)}},De={visibilitychange:function(){n.hidden?ln&&(Mi(),dn=!0):dn&&(Ci(),dn=!1)}},Ie={keydown:function(t){switch((t=Bi(t)).keyCode){case 37:wi(t,-1);break;case 39:wi(t,1)}}},Oe={touchstart:Oi,touchmove:Si,touchend:Hi,touchcancel:Hi},Se={mousedown:Oi,mousemove:Si,mouseup:Hi,mouseleave:Hi},Pe=Ln("controls"),He=Ln("nav"),Re=!!Dt||t.navAsThumbnails,We=Ln("autoplay"),ze=Ln("touch"),qe=Ln("mouseDrag"),je="tns-slide-active",Fe="tns-complete",Qe={load:_n,error:_n};if(Pe)var Ve,Xe,Ye=t.controlsContainer,Ke=t.controlsContainer?t.controlsContainer.outerHTML:"",Ue=t.prevButton,Ge=t.nextButton,Je=t.prevButton?t.prevButton.outerHTML:"",_e=t.nextButton?t.nextButton.outerHTML:"";if(He)var Ze,$e=t.navContainer,tn=t.navContainer?t.navContainer.outerHTML:"",en=[],nn=en,an=-1,rn=kn(),on=rn,sn="tns-nav-active";if(We)var un,ln,cn,fn,dn,vn="forward"===t.autoplayDirection?1:-1,pn=t.autoplayButton,hn=t.autoplayButton?t.autoplayButton.outerHTML:"",mn=["<span class='tns-visually-hidden'>"," animation</span>"];if(ze||qe)var yn,gn={},xn={},bn=!1,wn=0,Cn=ht?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Dt||Tn(Me||Ee),Q&&(ue=Q,le="translate",V?(le+=ht?"3d(":"3d(0px, ",ce=ht?", 0px, 0px)":", 0px)"):(le+=ht?"X(":"Y(",ce=")")),function(){at&&Xn(),function(){if(Ln("gutter"),mt.className="tns-outer",yt.className="tns-inner",mt.id=Ce+"-ow",yt.id=Ce+"-iw",Qt&&(yt.className+=" tns-ah"),""===gt.id&&(gt.id=Ce),we+=j||Dt?" tns-subpixel":" tns-no-subpixel",we+=q?" tns-calc":" tns-no-calc",we+=" tns-"+t.axis,gt.className+=we,ot){var e=n.createElement("div");e.className="tns-ovh",mt.appendChild(e),e.appendChild(yt)}else mt.appendChild(yt);xt.insertBefore(mt,gt),yt.appendChild(gt)}();for(var e=0;e<Ct;e++){var i=wt[e];i.id||(i.id=Ce+"-item"+e),m(i,"tns-item"),!ot&&vt&&m(i,vt),w(i,{"aria-hidden":"true",tabindex:"-1"})}if(ie){for(var a=n.createDocumentFragment(),r=n.createDocumentFragment(),o=ie;o--;){var s=o%Ct,l=wt[s].cloneNode(!0);if(C(l,"id"),r.insertBefore(l,r.firstChild),ot){var c=wt[Ct-1-s].cloneNode(!0);C(c,"id"),a.appendChild(c)}}gt.insertBefore(a,gt.firstChild),gt.appendChild(r),wt=gt.children}(function(){for(var e=de,n=de+Math.min(Ct,Ht);e<n;e++){var i=wt[e];w(i,{"aria-hidden":"false"}),C(i,["tabindex"]),m(i,je),ot||(i.style.left=100*(e-de)/Ht+"%",m(i,ct),y(i,vt))}if(ht&&(j||Dt?(f(te,"#"+Ce+" > .tns-item","font-size:"+u.getComputedStyle(wt[0]).fontSize+";",d(te)),f(te,"#"+Ce,"font-size:0;",d(te))):v(wt,function(t,e){var n;t.style.marginLeft=(n=e,q?q+"("+100*n+"% / "+ae+")":100*n/ae+"%")})),F){var a=In(t.edgePadding,t.gutter,t.fixedWidth,t.speed);f(te,"#"+Ce+"-iw",a,d(te)),ot&&(a=ht&&!Dt?"width:"+On(t.fixedWidth,t.gutter,t.items)+";":"",X&&(a+=Rn(qt)),f(te,"#"+Ce,a,d(te))),a=ht&&!Dt?Sn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(a+=Pn(t.gutter)),ot||(X&&(a+=Rn(qt)),K&&(a+=Wn(qt))),a&&f(te,"#"+Ce+" > .tns-item",a,d(te))}else{yt.style.cssText=In(Ot,St,It),ot&&ht&&!Dt&&(gt.style.width=On(It,St,Ht));a=ht&&!Dt?Sn(It,St,Ht):"";St&&(a+=Pn(St)),a&&f(te,"#"+Ce+" > .tns-item",a,d(te))}if(at&&F)for(var r in at){r=parseInt(r);var o=at[r],s=(a="",""),l="",c="",p=Dt?null:Dn("items",r),h=Dn("fixedWidth",r),g=Dn("speed",r),x=Dn("edgePadding",r),b=Dn("gutter",r);("edgePadding"in o||"gutter"in o)&&(s="#"+Ce+"-iw{"+In(x,b,h,g)+"}"),ot&&ht&&!Dt&&("fixedWidth"in o||"items"in o||It&&"gutter"in o)&&(l="width:"+On(h,b,p)+";"),X&&"speed"in o&&(l+=Rn(g)),l&&(l="#"+Ce+"{"+l+"}"),("fixedWidth"in o||It&&"gutter"in o||!ot&&"items"in o)&&(c+=Sn(h,b,p)),"gutter"in o&&(c+=Pn(b)),!ot&&"speed"in o&&(X&&(c+=Rn(g)),K&&(c+=Wn(g))),c&&(c="#"+Ce+" > .tns-item{"+c+"}"),(a=s+l+c)&&te.insertRule("@media (min-width: "+r/16+"em) {"+a+"}",te.cssRules.length)}})(),zn()}();var Mn=Ft?ot?function(){var t=pe,e=he;t+=Rt,e-=Rt,Ot?(t+=1,e-=1):It&&Pt%(It+St)&&(e-=1),ie&&(e<de?de-=Ct:de<t&&(de+=Ct))}:function(){if(he<de)for(;pe+Ct<=de;)de-=Ct;else if(de<pe)for(;de<=he-Ct;)de+=Ct}:function(){de=Math.max(pe,Math.min(he,de))},An=ot?function(){var t,e,n,i,a,r,o,s,u,l,c;ci(gt,""),X||!qt?(hi(),qt&&T(gt)||xi()):(t=gt,e=ue,n=le,i=ce,a=vi(),r=qt,o=xi,s=Math.min(r,10),u=0<=a.indexOf("%")?"%":"px",a=a.replace(u,""),l=Number(t.style[e].replace(n,"").replace(i,"").replace(u,"")),c=(a-l)/r*s,setTimeout(function a(){r-=s,l+=c,t.style[e]=n+l+u+i,0<r?setTimeout(a,s):o()},s)),ht||Ri()}:function(){ne=[];var t={};t[G]=t[J]=xi,I(wt[ve],t),D(wt[de],t),mi(ve,ct,ft,!0),mi(de,vt,ct),G&&J&&qt&&T(gt)||xi()};return{version:"2.8.6",getInfo:zi,events:be,goTo:bi,play:function(){Gt&&!ln&&(Ti(),fn=!1)},pause:function(){ln&&(Ei(),fn=!0)},isOn:At,updateSliderHeight:ii,refresh:zn,destroy:function(){if(te.disabled=!0,te.ownerNode&&te.ownerNode.remove(),I(u,{resize:Fn}),zt&&I(n,Ie),Ye&&I(Ye,Ne),$e&&I($e,Be),I(gt,Le),I(gt,De),pn&&I(pn,{click:ki}),Gt&&clearInterval(un),ot&&G){var e={};e[G]=xi,I(gt,e)}Kt&&I(gt,Oe),Ut&&I(gt,Se);var i=[bt,Ke,Je,_e,tn,hn];for(var a in Z.forEach(function(e,n){var a="container"===e?mt:t[e];if("object"==typeof a){var r=!!a.previousElementSibling&&a.previousElementSibling,o=a.parentNode;a.outerHTML=i[n],t[e]=r?r.nextElementSibling:o.firstElementChild}}),Z=ct=ft=dt=vt=ht=mt=yt=gt=xt=bt=wt=Ct=pt=Mt=Dt=It=Ot=St=Pt=Ht=Rt=Wt=zt=qt=jt=Ft=Qt=te=ee=Tt=ne=ie=ae=re=oe=se=ue=le=ce=fe=de=ve=pe=he=me=ye=ge=xe=be=we=Ce=Me=Ae=Te=Ee=ke=Ne=Be=Le=De=Ie=Oe=Se=Pe=He=Re=We=ze=qe=je=Fe=Qe=Et=Vt=Xt=Ye=Ke=Ue=Ge=Ve=Xe=Yt=$e=tn=Ze=en=nn=an=rn=on=sn=Gt=Jt=vn=_t=Zt=pn=hn=$t=mn=un=ln=cn=fn=dn=gn=xn=yn=bn=wn=Cn=Kt=Ut=null,this)"rebuild"!==a&&(this[a]=null);At=!1},rebuild:function(){return O(a(t,$))}}}function Tn(t){t&&(Vt=Yt=Kt=Ut=zt=Gt=Zt=$t=!1)}function En(t){return t=t?Math.max(0,Math.min(Ft?Ct-1:Ct-Ht,t)):0,ot?t+ie:t}function kn(t){for(null==t&&(t=de),ot&&(t-=ie);t<0;)t+=Ct;return Math.floor(t%Ct)}function Nn(){return u.innerWidth||n.documentElement.clientWidth||n.body.clientWidth}function Bn(){return function t(e){return e?e.clientWidth||t(e.parentNode):0}(xt)-(2*Ot-St)}function Ln(e){if(t[e])return!0;if(at)for(var n in at)if(at[n][e])return!0;return!1}function Dn(e,n){if(null==n&&(n=Mt),"items"===e&&It)return Math.floor(Pt/(It+St))||1;var i=t[e];if(at)for(var a in at)n>=parseInt(a)&&e in at[a]&&(i=at[a][e]);return"slideBy"===e&&"page"===i&&(i=Dn("items")),ot||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function In(t,e,n,i){var a="";if(t){var r=t;e&&(r-=e),a=ht?"margin: 0 "+r+"px 0 "+t+"px;":"margin: "+t+"px 0 "+r+"px 0;"}else if(e&&!n){var o="-"+e+"px";a="margin: 0 "+(ht?o+" 0 0":"0 "+o+" 0")+";"}return X&&i&&(a+=Rn(i)),a}function On(t,e,n){return t?(t+e)*ae+"px":q?q+"("+100*ae+"% / "+n+")":100*ae/n+"%"}function Sn(t,e,n){var i;if(t)i=t+e+"px";else{ot||(n=Math.floor(n));var a=ot?ae:n;i=q?q+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==rt?i+";":i+" !important;"}function Pn(t){var e="";return!1!==t&&(e=(ht?"padding-":"margin-")+(ht?"right":"bottom")+": "+t+"px;"),e}function Hn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Rn(t){return Hn(X,18)+"transition-duration:"+t/1e3+"s;"}function Wn(t){return Hn(K,17)+"animation-duration:"+t/1e3+"s;"}function zn(){if(Ln("autoHeight")||Dt||!ht){var t=gt.querySelectorAll("img");v(t,function(t){var e=t.src;e.indexOf("data:image")<0?(D(t,Qe),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e):m(t,Fe)}),e(function(){ti(function(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}(t),function(){if(Et=!0,Dt){var t=Ft?de:Ct-1;!function n(){wt[t-1].getBoundingClientRect().right.toFixed(2)===wt[t].getBoundingClientRect().left.toFixed(2)?e():setTimeout(function(){n()},16)}()}else e();function e(){ht&&!Dt||(ai(),Dt?(oe=di(),Te&&(Ee=Vn()),he=fe(),Tn(Me||Ee)):Ri()),ot&&pi(),qn(),jn()}})})}else ot&&pi(),qn(),jn()}function qn(){if(We){var e=Gt?"stop":"start";pn?w(pn,{"data-action":e}):t.autoplayButtonOutput&&(mt.insertAdjacentHTML("afterbegin",'<button data-action="'+e+'" type="button">'+mn[0]+e+mn[1]+_t[0]+"</button>"),pn=mt.querySelector("[data-action]")),pn&&D(pn,{click:ki}),Gt&&(Ti(),Zt&&D(gt,Le),$t&&D(gt,De))}if(He){var n=ot?ie:0;if($e){w($e,{"aria-label":"Carousel Pagination"}),Ze=$e.children;for(var i=0;i<Ct;i++){var a=Ze[i];a&&w(a,{"data-nav":i,tabindex:"-1","aria-selected":"false","aria-controls":wt[n+i].id})}}else{var r="",o=Re?"":'style="display:none"';for(i=0;i<Ct;i++)r+='<button data-nav="'+i+'" tabindex="-1" aria-selected="false" aria-controls="'+wt[n+i].id+'" '+o+' type="button"></button>';r='<div class="tns-nav" aria-label="Carousel Pagination">'+r+"</div>",mt.insertAdjacentHTML("afterbegin",r),$e=mt.querySelector(".tns-nav"),Ze=$e.children}if(Wi(),X){var s=X.substring(0,X.length-18).toLowerCase(),u="transition: all "+qt/1e3+"s";s&&(u="-"+s+"-"+u),f(te,"[aria-controls^="+Ce+"-item]",u,d(te))}w(Ze[rn],{tabindex:"0","aria-selected":"true"}),m(Ze[rn],sn),D($e,Be)}Pe&&(Ye||Ue&&Ge?(Ye&&(Ue=Ye.children[0],Ge=Ye.children[1],w(Ye,{"aria-label":"Carousel Navigation",tabindex:"0"}),w(Ye.children,{"aria-controls":Ce,tabindex:"-1"})),w(Ue,{"data-controls":"prev"}),w(Ge,{"data-controls":"next"})):(mt.insertAdjacentHTML("afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+Ce+'" type="button">'+Xt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+Ce+'" type="button">'+Xt[1]+"</button></div>"),Ye=mt.querySelector(".tns-controls"),Ue=Ye.children[0],Ge=Ye.children[1]),Ve=oi(Ue),Xe=oi(Ge),li(),Ye?D(Ye,Ne):(D(Ue,Ne),D(Ge,Ne))),Yn()}function jn(){if(ot&&G){var t={};t[G]=xi,D(gt,t)}Kt&&D(gt,Oe),Ut&&D(gt,Se),zt&&D(n,Ie),"inner"===rt?be.on("outerResized",function(){Qn(),be.emit("innerLoaded",zi())}):(at||It||Dt||Qt||!ht)&&D(u,{resize:Fn}),"outer"===rt?be.on("innerLoaded",$n):Qt&&!Me&&$n(),Jn(),Me?Gn():Ee&&Un(),be.on("indexChanged",ei),"function"==typeof xe&&xe(zi()),"inner"===rt&&be.emit("innerLoaded",zi())}function Fn(t){e(function(){Qn(Bi(t))})}function Qn(t){if(At){"outer"===rt&&be.emit("outerResized",zi(t)),Mt=Nn();var e,i=pt,a=!1;at&&(Xn(),(e=i!==pt)&&be.emit("newBreakpointStart",zi(t)));var r,o,s,u,l=Ht,c=Me,p=Ee,h=zt,g=Vt,x=Yt,b=Kt,w=Ut,C=Gt,T=Zt,E=$t,k=de;if(e){var N=It,B=Qt,L=Xt,O=_t;if(!F)var S=St,P=Ot}if(zt=Dn("arrowKeys"),Vt=Dn("controls"),Yt=Dn("nav"),Kt=Dn("touch"),Ut=Dn("mouseDrag"),Gt=Dn("autoplay"),Zt=Dn("autoplayHoverPause"),$t=Dn("autoplayResetOnVisibility"),e&&(Me=Dn("disable"),It=Dn("fixedWidth"),qt=Dn("speed"),Qt=Dn("autoHeight"),Xt=Dn("controlsText"),_t=Dn("autoplayText"),Jt=Dn("autoplayTimeout"),F||(Ot=Dn("edgePadding"),St=Dn("gutter"))),Tn(Me),Pt=Bn(),ht&&!Dt||Me||(ai(),ht||(Ri(),a=!0)),(It||Dt)&&(oe=di(),he=fe()),(e||It)&&(Ht=Dn("items"),Rt=Dn("slideBy"),(o=Ht!==l)&&(It||Dt||(he=fe()),Mn())),e&&Me!==c&&(Me?Gn():function(){if(Ae){if(te.disabled=!1,gt.className+=we,pi(),Ft)for(var t=ie;t--;)ot&&A(wt[t]),A(wt[ae-t-1]);if(!ot)for(var e=de,n=de+Ct;e<n;e++){var i=wt[e],a=e<de+Ht?ct:vt;i.style.left=100*(e-de)/Ht+"%",m(i,a)}Kn(),Ae=!1}}()),Te&&(e||It||Dt)&&(Ee=Vn())!==p&&(Ee?(hi(vi(En(0))),Un()):(function(){if(ke){if(Ot&&F&&(yt.style.margin=""),ie)for(var t="tns-transparent",e=ie;e--;)ot&&y(wt[e],t),y(wt[ae-e-1],t);Kn(),ke=!1}}(),a=!0)),Tn(Me||Ee),Gt||(Zt=$t=!1),zt!==h&&(zt?D(n,Ie):I(n,Ie)),Vt!==g&&(Vt?Ye?A(Ye):(Ue&&A(Ue),Ge&&A(Ge)):Ye?M(Ye):(Ue&&M(Ue),Ge&&M(Ge))),Yt!==x&&(Yt?(A($e),Wi()):M($e)),Kt!==b&&(Kt?D(gt,Oe):I(gt,Oe)),Ut!==w&&(Ut?D(gt,Se):I(gt,Se)),Gt!==C&&(Gt?(pn&&A(pn),ln||fn||Ti()):(pn&&M(pn),ln&&Ei())),Zt!==T&&(Zt?D(gt,Le):I(gt,Le)),$t!==E&&($t?D(n,De):I(n,De)),e&&(It!==N&&(a=!0),Qt!==B&&(Qt||(yt.style.height="")),Vt&&Xt!==L&&(Ue.innerHTML=Xt[0],Ge.innerHTML=Xt[1]),pn&&_t!==O)){var H=Gt?1:0,R=pn.innerHTML,W=R.length-O[H].length;R.substring(W)===O[H]&&(pn.innerHTML=R.substring(0,W)+_t[H])}if((r=de!==k)&&(be.emit("indexChanged",zi()),a=!0),o&&(r||ei(),ot||function(){for(var t=de+Math.min(Ct,Ht),e=ae;e--;){var n=wt[e];de<=e&&e<t?(m(n,"tns-moving"),n.style.left=100*(e-de)/Ht+"%",m(n,ct),y(n,vt)):n.style.left&&(n.style.left="",m(n,vt),y(n,ct)),y(n,ft)}setTimeout(function(){v(wt,function(t){y(t,"tns-moving")})},300)}()),!Me&&!Ee){if(e&&!F&&(Ot===P&&St===S||(yt.style.cssText=In(Ot,St,It)),ht)){ot&&(gt.style.width=On(It,St,Ht));var z=Sn(It,St,Ht)+Pn(St);u=d(s=te)-1,"deleteRule"in s?s.deleteRule(u):s.removeRule(u),f(te,"#"+Ce+" > .tns-item",z,d(te))}Qt&&$n(),a&&(pi(),ve=de)}e&&be.emit("newBreakpointEnd",zi(t))}}function Vn(){return It||Dt?It?(It+St)*Ct<=Pt+2*Ot:(Ft?Tt[Ct]:fi())<=Pt+2*Ot:Ct<=Ht}function Xn(){for(var t in pt=0,at)(t=parseInt(t))<=Mt&&(pt=t)}function Yn(){!Gt&&pn&&M(pn),!Yt&&$e&&M($e),Vt||(Ye?M(Ye):(Ue&&M(Ue),Ge&&M(Ge)))}function Kn(){Gt&&pn&&A(pn),Yt&&$e&&A($e),Vt&&(Ye?A(Ye):(Ue&&A(Ue),Ge&&A(Ge)))}function Un(){if(!ke){if(Ot&&(yt.style.margin="0px"),ie)for(var t="tns-transparent",e=ie;e--;)ot&&m(wt[e],t),m(wt[ae-e-1],t);Yn(),ke=!0}}function Gn(){if(!Ae){if(te.disabled=!0,gt.className=gt.className.replace(we.substring(1),""),C(gt,["style"]),Ft)for(var t=ie;t--;)ot&&M(wt[t]),M(wt[ae-t-1]);if(ht&&ot||C(yt,["style"]),!ot)for(var e=de,n=de+Ct;e<n;e++){var i=wt[e];C(i,["style"]),y(i,ct),y(i,vt)}Yn(),Ae=!0}}function Jn(){if(ee&&!Me){var t=de;if(Dt)for(var e=de+1,n=e,i=Tt[de]+Pt+Ot-St;Tt[e]<i;)n=++e;else n=de+Ht;for(Ot&&(t-=1,Dt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,ae));t<n;t++)v(wt[t].querySelectorAll(".tns-lazy-img"),function(t){var e={};if(e[G]=function(t){t.stopPropagation()},D(t,e),!h(t,"loaded")){var n=x(t,"data-srcset");n&&(t.srcset=n),t.src=x(t,"data-src"),m(t,"loaded")}})}}function _n(t){var e=Li(t);m(e,Fe),I(e,Qe)}function Zn(t,e){for(var n=[],i=t,a=Math.min(t+e,ae);i<a;i++)v(wt[i].querySelectorAll("img"),function(t){n.push(t)});return n}function $n(){var t=Qt?Zn(de,Ht):Zn(ie,Ct);e(function(){ti(t,ii)})}function ti(t,n){return Et?n():(t.forEach(function(e,n){h(e,Fe)&&t.splice(n,1)}),t.length?void e(function(){ti(t,n)}):n())}function ei(){Jn(),function(){for(var t=de+Math.min(Ct,Ht),e=ae;e--;){var n=wt[e];de<=e&&e<t?g(n,"tabindex")&&(w(n,{"aria-hidden":"false"}),C(n,["tabindex"]),m(n,je)):(g(n,"tabindex")||w(n,{"aria-hidden":"true",tabindex:"-1"}),h(n,je)&&y(n,je))}}(),li(),Wi(),function(){if(Yt&&(rn=-1!==an?an:kn(),an=-1,rn!==on)){var t=Ze[on],e=Ze[rn];w(t,{tabindex:"-1","aria-selected":"false"}),w(e,{tabindex:"0","aria-selected":"true"}),y(t,sn),m(e,sn),on=rn}}()}function ni(t,e){for(var n=[],i=t,a=Math.min(t+e,ae);i<a;i++)n.push(wt[i].offsetHeight);return Math.max.apply(null,n)}function ii(){var t=Qt?ni(de,Ht):ni(ie,Ct);yt.style.height!==t&&(yt.style.height=t+"px")}function ai(){Tt=[0];for(var t,e=ht?"left":"top",n=wt[0].getBoundingClientRect()[e],i=1;i<ae;i++)t=wt[i].getBoundingClientRect()[e],Tt.push(t-n)}function ri(t){return t.nodeName.toLowerCase()}function oi(t){return"button"===ri(t)}function si(t){return"true"===t.getAttribute("aria-disabled")}function ui(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function li(){if(Vt&&!jt&&!Ft){var t=Ve?Ue.disabled:si(Ue),e=Xe?Ge.disabled:si(Ge),n=de<=pe,i=!jt&&he<=de;n&&!t&&ui(Ve,Ue,!0),!n&&t&&ui(Ve,Ue,!1),i&&!e&&ui(Xe,Ge,!0),!i&&e&&ui(Xe,Ge,!1)}}function ci(t,e){X&&(t.style[X]=e)}function fi(){return It?(It+St)*ae:Tt[ae-1]+wt[ae-1].getBoundingClientRect().width}function di(){var t=Pt-(fi()-St);return Ot&&(t+=Ot-St),0<t&&(t=0),t}function vi(t){var e;return null==t&&(t=de),e=ht&&!Dt?It?-(It+St)*t:100*-t/(Q?ae:Ht):-Tt[t],re&&(e=Math.max(e,oe)),e+(!ht||Dt||It?"px":"%")}function pi(t){ci(gt,"0s"),hi(t)}function hi(t){null==t&&(t=vi()),gt.style[ue]=le+t+ce}function mi(t,e,n,i){var a=t+Ht;Ft||(a=Math.min(a,ae));for(var r=t;r<a;r++){var o=wt[r];i||(o.style.left=100*(r-de)/Ht+"%"),dt&&Y&&(o.style[Y]=o.style[U]=dt*(r-t)/1e3+"s"),y(o,e),m(o,n),i&&ne.push(o)}}function yi(t,e){se&&Mn(),(de!==ve||e)&&(be.emit("indexChanged",zi()),be.emit("transitionStart",zi()),Qt&&$n(),ln&&t&&0<=["click","keydown"].indexOf(t.type)&&Ei(),ge=!0,An())}function gi(t){return t.toLowerCase().replace(/-/g,"")}function xi(t){if(ot||ge){if(be.emit("transitionEnd",zi(t)),!ot&&0<ne.length)for(var e=0;e<ne.length;e++){var n=ne[e];n.style.left="",U&&Y&&(n.style[U]="",n.style[Y]=""),y(n,ft),m(n,vt)}if(!t||!ot&&t.target.parentNode===gt||t.target===gt&&gi(t.propertyName)===gi(ue)){if(!se){var i=de;Mn(),de!==i&&(be.emit("indexChanged",zi()),pi())}"inner"===rt&&be.emit("innerLoaded",zi()),ge=!1,ve=de}}}function bi(t,e){if(!Ee)if("prev"===t)wi(e,-1);else if("next"===t)wi(e,1);else{ge&&xi();var n=kn(),i=0;if("first"===t?i=-n:"last"===t?i=ot?Ct-Ht-n:Ct-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(Ct-1,t))),i=t-n)),!ot&&i&&Math.abs(i)<Ht){var a=0<i?1:-1;i+=pe<=de+i-Ct?Ct*a:2*Ct*a*-1}de+=i,ot&&Ft&&(de<pe&&(de+=Ct),he<de&&(de-=Ct)),kn(de)!==kn(ve)&&yi(e)}}function wi(t,e){var n;if(ge&&xi(),!e){for(var i=(t=Bi(t)).target||t.srcElement;i!==Ye&&[Ue,Ge].indexOf(i)<0;)i=i.parentNode;var a=[Ue,Ge].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(jt){if(de===pe&&-1===e)return void bi("last",t);if(de===he&&1===e)return void bi("first",t)}e&&(de+=Rt*e,Dt&&(de=Math.floor(de)),yi(n||t&&"keydown"===t.type?t:null))}function Ci(){un=setInterval(function(){wi(null,vn)},Jt),ln=!0}function Mi(){clearInterval(un),ln=!1}function Ai(t,e){w(pn,{"data-action":t}),pn.innerHTML=mn[0]+t+mn[1]+e}function Ti(){Ci(),pn&&Ai("stop",_t[1])}function Ei(){Mi(),pn&&Ai("start",_t[0])}function ki(){ln?(Ei(),fn=!0):(Ti(),fn=!1)}function Ni(t){t.focus()}function Bi(t){return Di(t=t||u.event)?t.changedTouches[0]:t}function Li(t){return t.target||u.event.srcElement}function Di(t){return 0<=t.type.indexOf("touch")}function Ii(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Oi(t){ge&&xi(),bn=!0,ot&&(i(wn),wn=0);var e=Bi(t);be.emit(Di(t)?"touchStart":"dragStart",zi(t)),!Di(t)&&0<=["img","a"].indexOf(ri(Li(t)))&&Ii(t),xn.x=gn.x=parseInt(e.clientX),xn.y=gn.y=parseInt(e.clientY),ot&&(yn=parseFloat(gt.style[ue].replace(le,"").replace(ce,"")),ci(gt,"0s"))}function Si(t){if(bn){var n=Bi(t);xn.x=parseInt(n.clientX),xn.y=parseInt(n.clientY),ot&&!wn&&(wn=e(function(){!function t(n){if(ye){if(i(wn),bn&&(wn=e(function(){t(n)})),Pi(),ye){try{n.type&&be.emit(Di(n)?"touchMove":"dragMove",zi(n))}catch(t){}var a=yn,r=Cn(xn,gn);if(!ht||It||Dt)a+=r,a+="px";else a+=Q?r*Ht*100/(Pt*ae):100*r/Pt,a+="%";gt.style[ue]=le+a+ce}}else bn=!1}(t)}))}}function Pi(){var e,n,i,a,r,o;"?"===ye&&xn.x!==gn.x&&xn.y!==gn.y&&(r=xn.y-gn.y,o=xn.x-gn.x,e=Math.atan2(r,o)*(180/Math.PI),i=!1,90-(n=me)<=(a=Math.abs(90-Math.abs(e)))?i="horizontal":a<=n&&(i="vertical"),ye=i===t.axis)}function Hi(t){if(bn){ot&&(i(wn),ci(gt,"")),bn=!1;var n=Bi(t);xn.x=parseInt(n.clientX),xn.y=parseInt(n.clientY);var a=Cn(xn,gn);if(5<=Math.abs(a)){if(!Di(t)){var r=Li(t);D(r,{click:function t(e){Ii(e),I(r,{click:t})}})}ot?wn=e(function(){if(ht&&!Dt){var e=-a*Ht/Pt;e=0<a?Math.floor(e):Math.ceil(e),de+=e}else{var n=-(yn+a);if(n<=0)de=pe;else if(n>=Tt[Tt.length-1])de=he;else for(var i=0;i<ae&&n>=Tt[i];)n>Tt[de=i]&&a<0&&(de+=1),i++}yi(t,a),be.emit(Di(t)?"touchEnd":"dragEnd",zi(t))}):(Pi(),ye&&wi(t,0<a?-1:1))}}me&&(ye="?")}function Ri(){yt.style.height=Tt[de+Ht]-Tt[de]+"px"}function Wi(){Yt&&!Re&&(function(){en=[];for(var t=kn()%Ht;t<Ct;)ot&&!Ft&&Ct<t+Ht&&(t=Ct-Ht),en.push(t),t+=Ht;(Ft&&en.length*Ht<Ct||!Ft&&0<en[0])&&en.unshift(0)}(),en!==nn&&(v(Ze,function(t,e){en.indexOf(e)<0?M(t):A(t)}),nn=en))}function zi(t){return{container:gt,slideItems:wt,navContainer:$e,navItems:Ze,controlsContainer:Ye,hasControls:Pe,prevButton:Ue,nextButton:Ge,items:Ht,slideBy:Rt,cloneCount:ie,slideCount:Ct,slideCountNew:ae,index:de,indexCached:ve,navCurrentIndex:rn,navCurrentIndexCached:on,visibleNavIndexes:en,visibleNavIndexesCached:nn,sheet:te,event:t||{}}}_&&console.warn("No slides found in",t.container)};return O}(),window.PopMechanicTnsQ=window.PopMechanicTnsQ||[],window.PopMechanicTnsQ.push=function(t){t()},window.PopMechanicTnsQ.forEach(function(t){t()}));