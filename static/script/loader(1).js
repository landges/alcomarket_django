!function(){var e,t,c,n,i,o,s,a,d;if(window.PopMechanicMutex)return;if(window.PopMechanicMutex=!0,e="1.46.2",i="static.popmechanic.ru",!(s=document.getElementById("popmechanic-script"))){a=document.getElementsByTagName("script");for(var r=0;r<a.length;r++)-1<a[r].src.indexOf("static.popmechanic.ru")&&-1<a[r].src.indexOf("?c=")&&(s=a[r])}o=s.src.split("?c=")[1].split("&")[0],-1!==document.location.toString().indexOf("pm-test-form=")&&(d=document.location.toString().split("pm-test-form=")[1].split("&")[0]),(n=window.PopMechanic||{loaded:!1,onLoad:!1,customs:{}}).client=o,n.formHash=d,n.isTesting=!!d,n.loadedTimestamp=Date.now(),window.PopMechanic=n,(t=document.createElement("script")).async="async",t.defer="defer",t.charset="utf-8",t.src="//"+i+"/service/forms.js?v="+e,(c=document.createElement("link")).rel="stylesheet",c.href="//"+i+"/service/styles.css?v="+e,document.head.appendChild(c),document.getElementsByTagName("head")[0].appendChild(t)}();