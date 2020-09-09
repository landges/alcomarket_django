var ct_ijc_v_1 = function(selector) {
  function inject(element, value, expected_id) {
    if (element) {
      if (expected_id && (element && element.parentNode)) {
        if (element.id === expected_id) {
          element.innerHTML = value;
        }
      } else {
        element.innerHTML = value;
      }
    }
  }
  
  function html(value) {
    if (document.body && document.readyState === "complete") {
      initInject();
    } else {
      window.addEventListener('load', initInject);
    }
  
    function initInject() {
      if(selector && (selector.indexOf("#") == 0 || selector.indexOf(".") == 0)) {
        if(selector.indexOf("#") == 0) {
          inject(document.getElementById(selector.substring(1)), value, selector.substring(1));
        }
        if(selector.indexOf(".")== 0 && document.getElementsByClassName) {
          var elements = document.getElementsByClassName(selector.substring(1));
          for(var i = 0 ;  i < elements.length; i++){ inject(elements[i], value);
          }
        }
      }
      window.removeEventListener('load', initInject);
    }
  }
  
  return { html:html}
};
                        
                                                            ct_ijc_v_1('#ct_custom').html('');
var ct_c=function(c){try{var t;return 0<(t="object"==typeof c?c:document.querySelectorAll(c)).length?[].slice.call(t):0}catch(c){console.log(c)}},ct_contains=function(c,n){try{var e=[];return ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t=c.firstChild;if(t)for(;3===t.nodeType&&-1!=t.nodeValue.indexOf(n)&&e.push(c),t=t.nextSibling;);}),0<e.length?e:0}catch(c){console.log(c)}},ct_not=function(c,t){try{var n=[];return 0==ct_c(t)?ct_c(c):(ct_c(c)&&ct_c(t)&&[].forEach.call(ct_c(c),function(c){-1==Array.from(ct_c(t)).indexOf(c)&&n.push(c)}),0<n.length?n:0)}catch(c){console.log(c)}},ct_html=function(c,t){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&(c.innerHTML=t)})}catch(c){console.log(c)}},ct_repl=function(c,o,l){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){var t,n,e=c.firstChild;if(e)for(;3===e.nodeType&&(n=(t=e.nodeValue).replace(o,l))!==t&&(e.nodeValue=n),e=e.nextSibling;);})}catch(c){console.log(c)}},ct_repl_a=function(c,t,n){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.setAttribute(t,n)})}catch(c){console.log(c)}},ct_event_listen=function(c,t,n){try{"string"==typeof c&&(c=[c]),[].forEach.call(c,function(c){document.addEventListener(c,{handleEvent:function(c){ct_c(t)&&-1!=[].slice.call(ct_c(t)).indexOf(c.target)&&n()}})})}catch(c){console.log(c)}},ct_remove=function(c){try{ct_c(c)&&[].forEach.call(ct_c(c),function(c){c&&c.parentNode.removeChild(c)})}catch(c){console.log(c)}},ct_ready=function(c){try{c(),"loading"===document.readyState&&document.addEventListener("DOMContentLoaded",c),"complete"!==document.readyState&&window.addEventListener("load",c)}catch(c){console.log(c)}};
 
function ct_replace(){
ct_repl('body *',/\(495\).118.06.95/gi,'(495) 186 35 39');
ct_repl_a('a[href*="4951180695"],a[href*="(495) 118 06 95"]','href','tel:+74951863539');
}

ct_ready(ct_replace);

void('');
                                                    window.calltouch_phone = "74951863539";        if (window.ct_create_session && typeof window.ct_create_session === 'function') {
          window.ct_create_session({ sessionId: 129765961, siteId: 34112, modId: '731wjkak', setCookie: true, endSessionTime: 1598735819, phones: {"153874":"474944"}, domain: 'alcomarket.ru', setCtCookie: '1200000000100950004', setLkCookie: null, denialTime: 15, phoneNumbers: ['74951863539'] });
        } else {
          var xmlHttp = new XMLHttpRequest();
          xmlHttp.open( "GET", 'https://mod.calltouch.ru/set_attrs_by_get.php?siteId=34112&sessionId=129765961&attrs={"clientError_NO_CT_CREATE_SESSION": 1}', true );
          xmlHttp.send( null );
        }
        
window.ctw = {};
window.ctw.clientFormConfig = {}
window.ctw.clientFormConfig.getClientFormsSettingsUrl = "//mod.calltouch.ru/callback_widget_user_form_find.php";
window.ctw.clientFormConfig.sendClientFormsRequestUrl = "//mod.calltouch.ru/callback_request_user_form_create.php";
(function (targetWindow, nameSpace, params){
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="//mod.calltouch.ru/",n(n.s=127)}({127:function(e,t,n){"use strict";n.r(t);var r=n(7),o=n.n(r);function a(e,t,n){try{var r=new(XMLHttpRequest||ActiveXObject)("MSXML2.XMLHTTP.3.0");r.open(t?"POST":"GET",e,1),r.timeout=6e4,r.setRequestHeader("Content-type","application/json"),r.onreadystatechange=function(){if(4===r.readyState&&n)if(200===r.status){var e=function(e){var t;try{t=JSON.parse(e)}catch(e){}return t}(r.response);e?e.data?n(!0,o()({},e.data)):e.error?n(!1,o()({},e.error)):n(!1,{type:"unknown_error",message:"Unknown JSON format",details:{}}):n(!1,{type:"unknown_error",message:"JSON parse error",details:{}})}else 0===r.status?n(!1,{type:"unknown_error",message:"Request timeout exceeded or connection reset",details:{}}):n(!1,{type:"unknown_error",message:"Unexpected HTTP code: ".concat(r.statusText),details:{}})},r.send(t)}catch(e){n&&n(!1,{type:"unknown_error",message:"Unexpected js exception",details:{}})}}!function(e,t,n){var r=e||window,o=t||"ctw";r[o]||(r[o]={});var c=r[o].clientFormConfig||{},u=c.getClientFormsSettingsUrl,i=c.sendClientFormsRequestUrl;r[o].getRouteKeyData=function(e,t){var r=1e6*Math.random(),o="".concat(u,"?siteId=").concat(n.siteId,"&routeKey=").concat(e,"&pageUrl=").concat(n.pageUrl,"&sessionId=").concat(n.sessionId);a("".concat(o,"&rand=").concat(Math.floor(r)),null,t)},r[o].createRequest=function(e,t,r,o){var c=4<arguments.length&&void 0!==arguments[4]?arguments[4]:null,u=1e6*Math.random(),s={siteId:n.siteId,phone:t,sessionId:n.sessionId,workMode:1,pageUrl:n.pageUrl,routeKey:e,fields:r,scheduleTime:c};a("".concat(i,"?rand=").concat(Math.floor(u)),JSON.stringify(s),o)}}(targetWindow,nameSpace,params)},15:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},7:function(e,t,n){var r=n(15);e.exports=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}}});
})(window, "ctw", {"siteId":34112,"sessionId":129765961,"pageUrl":"https:\/\/alcomarket.ru\/"})


var call_value = '129765961';
var call_value_731wjkak = call_value;
if(window.onSessionCallValue) {
    onSessionCallValue('129765961', '');
}
