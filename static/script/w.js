(function(k,f){function u(a){return a?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null}function B(a,c,b,d,g,e){if(!a||/^(?:expires|max\-age|path|domain|secure)$/i.test(a))return!1;var m="";if(b)switch(b.constructor){case Number:m=Infinity===b?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+b;break;case String:m="; expires="+b;break;case Date:m="; expires="+b.toUTCString()}document.cookie=
    encodeURIComponent(a)+"="+encodeURIComponent(c)+m+(g?"; domain="+g:"")+"; path="+(d?d:"/")+(e?"; secure":"");return!0}function C(a,c,b){a.addEventListener?a.addEventListener(c,b,!1):a.attachEvent("on"+c,b)}function D(){var a=(new Date).getTime();return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a/16);return("x"==c?b:b&3|8).toString(16)})}function q(a){if(a.length){var c=a[0]+"";if(c){if(0<c.indexOf(":")){c=c.split(":");var b=c[0];c=c[1];
    if(n[b])b=n[b][c];else{l[b]&&l[b].push(a);return}}else b=v[c];b&&(a=Array.prototype.slice.call(a),a.shift(),c={},a.length&&"object"===typeof a[a.length-1]&&(c=a.pop()),b(c,a))}}}function w(a){for(var c=0;c<a.length;++c)q(a[c])}var E=function(a,c){var b=document.createElement("img");b.width=1;b.height=1;b.src=a+"?"+c},F=function(a,c,b){var d=k.XMLHttpRequest;if(!d)return!1;d=new d;if(!("withCredentials"in d))return!1;d.open("POST",a,!0);d.withCredentials=!0;b&&(d.onreadystatechange=function(){if(4==
    d.readyState)if(200==d.status){var a=d.responseText;d=null;b(!0,a)}else d=null,b(!1)});d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.send(c)},G=function(a,c,b){var d=k.XDomainRequest;if(!d)return!1;d=new d;d.open("POST",a,!0);b&&(d.onerror=function(){d=null;b(!1)},d.onload=function(){var a=d.responseText;d=null;b(!0,a)});d.setRequestHeader("Content-Type","application/x-www-form-urlencoded");d.send(c);return!0},H=function(a,c,b){var d=k.ActiveXObject;if(!d)return!1;try{var g=
    new d("Microsoft.XMLHTTP")}catch(m){return!1}g.open("POST",a,!0);b&&(g.onreadystatechange=function(){if(4==g.readyState){var a=g.responseText;g=null;b(!0,a)}});g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");g.send(c)},r=null,x=function(a,c){for(var b in a)a.hasOwnProperty(b)&&c(b,a[b])},e=function(){this.values=[]};e.prototype.set=function(a,c){this.values[a]&&(this.values[a].value=c)};e.prototype.get=function(a){var c=this.values[a];if(!c)return f;a=c.value;f===a&&c.generator&&
(a=c.generator());return a};e.prototype.has=function(a){return f!=this.values[a]};e.prototype.map=function(a){var c,b=this.values;for(c in b)b.hasOwnProperty(c)&&a(c,b[c])};var h=new e;e=function(a,c,b,d){h.values[a]={protocolName:c,value:b,generator:d};return a};var I=function(a){var c={};h.map(function(b,d){var g=d.protocolName,e=d.value;a.hasOwnProperty(b)&&(e=a[b],delete a[b]);g&&(f===e&&d.generator&&(e=d.generator()),f!==e&&null!==e&&(c[g]=e+""))});x(a,function(a,d){c[a]=d});return c};e("cmd",
    "c");var y=e("apiKey","a");e("customerId","cid");var z=e("browserId","bid");e("page","p",f,function(){return document.location.href});e(f,"_v",1);var J=e("customerUtmaCookieName",f,f,function(){var a=k[k.GoogleAnalyticsObject||"ga"];a&&a.getAll&&(a=a.getAll())&&(a=a[0])&&a.get&&a.get("cookieName");return"_ga"});e("customerUtma","cutma",f,function(){var a=h.get(J);return u(a)});e("callback",f);var K=e("useBeacon",f,!0),L=e("syncPeriod",f,30),t=function(a){return"https://collector.retailcrm.pro/"+a},
    M=function(a){var c=[],b;for(b in a)a.hasOwnProperty(b)&&c.push(encodeURIComponent(b)+"="+encodeURIComponent(a[b]));return c.join("&")},p=function(a){r=1*new Date;if(h.get(y)){var c=a.callback;a=M(I(a));if(c){var b=t("a/call");var d=function(a,b){if(a){var d=N(b);a=d?!!d.success:!1}c(a,d)}}else b=t("a/notify");if(!c&&h.get(K)&&navigator.sendBeacon&&navigator.sendBeacon(b,a))return!0;if(2E3>a.length&&!d)E(b,a);else if(8192>a.length)F(b,a,d)||G(b,a,d)||H(b,a,d);else return!1;return!0}},N=function(a){return k.JSON&&
    JSON.parse?JSON.parse(a):eval("(function(){return "+a+";})()")},v={};e=function(a,c){v[a]=c};e("create",function(a,c){if(c.length){h.set(y,c[0]);x(a,function(a,b){h.has(a)&&h.set(a,b)});if(!h.get(z)){var b=u("_rc");if(!b){b=D();var d=new Date;d.setYear(d.getFullYear()+2);B("_rc",b,d)}h.set(z,b)}A()}});e("send.pageView",function(a,c){p({cmd:"pageView"})});e("send.order",function(a,c){a.cmd="send-order";p(a)});e("send.cart",function(a,c){a.cmd="send-cart";p(a)});e("send",function(a,c){c.length&&q(["send."+
c[0],a])});var n={},l={};e("require",function(a,c){var b=c[0];if(b&&!n[b]&&!l[b]){l[b]=[];l[b].options=a||{};var d=document.createElement("script");b=t("plugins/"+b+".js");d.async=!0;d.type="text/javascript";d.src=b;b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(d,b)}});e("define",function(a,c){var b=c[0],d=c[1];if(b&&d&&!n[b]&&l[b]){n[b]=d;var e=l[b],f=e.options||{};delete l[b];d(f);w(e);f.callback&&f.callback()}});var A=function(){var a=1*new Date,c=h.get(L);r&&a-r>1E3*(c?
    c:60)&&p({cmd:"online"});setTimeout(A,1E4)};(function(a,c){a[c]=a[c]||function(){a[c].q.push(arguments)};var b=a[c];b.l=b.l||1*new Date;var d=b.q||[];b.q={push:function(a){q(a)}};b.get=function(a){return h.get(a)};w(d);C(k,"unload",function(a){p({cmd:"pageUnload"})})})(k,k.retailCRMObject||"_rc")})(window);
