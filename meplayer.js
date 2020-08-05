"use strict";function _typeof2(e){return(_typeof2="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(r){var n={};function a(e){if(n[e])return n[e].exports;var t=n[e]={exports:{},id:e,loaded:!1};return r[e].call(t.exports,t,t.exports,a),t.loaded=!0,t.exports}a.m=r,a.c=n,a.p="",a(0)}([function(n,e,a){(function(e){var H=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){a=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},t="function"==typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)},N=a(1),j=r(a(2)),F=r(a(3)),I=r(a(4)),D=r(a(5));function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}var P="object"==("undefined"==typeof window?"undefined":t(window))&&window.window===window?window:"object"==(void 0===e?"undefined":t(e))&&e.global===e?e:void 0;P.mePlayer=function(e,t){var r,n,s,c,a,i,l,o,u,p,y,d,m,v,f,h,g,E,S,T,x,L,b;function _(){i?m.play():(F.removeClass(p,"meplayer-isplaying"),t())}function w(){b=this.duration,setTimeout(function(){F.removeClass(p,"meplayer-isloading"),h.querySelector(".meplayer-duration-text").innerText=F.parseSec(b.toFixed(0))},1e3)}function C(){b=this.duration}function M(){var e,t,r,n,a,i=m.currentTime,l=m.currentTime.toFixed(3),o=i/b*100;E.style.width=o.toFixed(2)+"%",f.innerText=F.parseSec(i),c&&s===N.THEME_DEFAULT&&(e=j.currentIndex(l),r=(t=x.querySelectorAll("p"))[e-1],n=t[e],a=t[e+1],n.className.includes("meplayer-lyric-current")||(F.removeClass(x.querySelector(".meplayer-lyric-current"),"meplayer-lyric-current"),x.querySelector(".meplayer-lyric-pre")&&F.removeClass(x.querySelector(".meplayer-lyric-pre"),"meplayer-lyric-pre"),x.querySelector(".meplayer-lyric-next")&&F.removeClass(x.querySelector(".meplayer-lyric-next"),"meplayer-lyric-next"),F.addClass(n,"meplayer-lyric-current"),r&&F.addClass(r,"meplayer-lyric-pre"),a&&F.addClass(a,"meplayer-lyric-next"),x.style.webkitTransform="translateY(-"+20*e+"px)",x.style.transform="translateY(-"+20*e+"px)"))}function A(){var e,t;m.paused?(m.play(),s!==N.THEME_DEFAULT||c||I.draw(),p.addEventListener("mousewheel",(t=null,e=function(e){t&&clearTimeout(t),p.className.includes("meplayer-adjusting-volume")||F.addClass(p,"meplayer-adjusting-volume"),e.wheelDeltaY<0&&.05<m.volume&&(m.volume-=.05),0<e.wheelDeltaY&&m.volume<.95&&(m.volume+=.05),s===N.THEME_DEFAULT?T.style.width=100*m.volume+"%":S.querySelector("i").style.opacity=m.volume,e.preventDefault(),t=setTimeout(function(){F.removeClass(p,"meplayer-adjusting-volume")},1e3)}))):(m.pause(),I.stop(),p.removeEventListener("mousewheel",e)),F.toggleClass(p,"meplayer-isplaying")}function q(){var e=(event.pageX-F.getAbsLeft(this))/this.offsetWidth;E.style.width=100*e+"%",m.currentTime=(e*b).toFixed(0)}e.music&&e.music.src?(r=e.music,n=D.$(e.target)||document.querySelector(".meplayer"),s=e.theme||N.THEME_DEFAULT,c=!!r.lrc,a=r.cover||"https://unsplash.it/78/?random",i=r.loop||!1,l=e.autoplay,u='<div class="'+((o=s===N.THEME_DEFAULT?"meplayer-container":"meplayer-container-mini")+" "+(c?"meplayer-haslrc":"")+" meplayer-isloading")+'">\n                             <audio src='+r.src+' preload="auto"></audio>\n                             <div class="meplayer-info">\n                             <div class="meplayer-info-cover"><img src='+a+' alt=""></div>\n                             <div class="meplayer-meta">\n                             <div class="meplayer-meta-title">'+r.title+'</div>\n                             <div class="meplayer-meta-author">'+r.author+'</div>\n                             <div class="meplayer-meta-time-tick"><span class="meplayer-meta-time-tick-text"></span></div>\n                             </div>\n                             </div>\n                             <canvas class="meplayer-spectrum"></canvas>\n                             <div class="meplayer-lyric"><div class="meplayer-lyric-area"></div></div>\n                             <div class="meplayer-control"><div class="meplayer-control-play"><i class="icon-play"></i><i class="icon-pause"></i></div></div>\n                             <div class="meplayer-volume-bg"><div class="meplayer-volume"><i class="icon-volume"></i><div class="meplayer-volume-progress"></div></div></div>\n                             <div class="meplayer-duration"><i class="icon-clock"></i><span class="meplayer-duration-text">loading</span></div>\n                             <div class="meplayer-loadingsign"><i class="icon-spin animate-spin"></i>loading</div>\n                             <div class="meplayer-timeline-bg"><div class="meplayer-timeline"><div class="meplayer-timeline-passed"></div></div></div>\n                             </div>',n.innerHTML=u,p=n.querySelector("."+o),y=D.init(p).select(["audio",".meplayer-control-play",".meplayer-meta-time-tick-text",".meplayer-duration",".meplayer-timeline",".meplayer-timeline-passed",".meplayer-volume",".meplayer-volume-progress",".meplayer-lyric-area",".meplayer-spectrum"]),d=H(y,10),m=d[0],v=d[1],f=d[2],h=d[3],g=d[4],E=d[5],S=d[6],T=d[7],x=d[8],L=d[9],c?j.parse(r.lrc).renderTo(x):I.init(L),m.addEventListener("ended",_),m.addEventListener("canplaythrough",w),m.addEventListener("durationchange",C),m.addEventListener("timeupdate",M),v.addEventListener("click",A),g.addEventListener("click",q),l&&A(),P.mePlayerMethod={play:function(){m.paused&&(F.addClass(p,"meplayer-isplaying"),m.play())},pause:function(){m.paused||(F.removeClass(p,"meplayer-isplaying"),m.pause())},toggleTheme:function(){var t=.03,r=0,n=200;return F.addClass(p,"meplayer-changing-theme"),s=s===N.THEME_DEFAULT?N.THEME_MINI:N.THEME_DEFAULT,function e(){r++;p.style.opacity-=t;p.style.opacity<=0&&(t*=-1,p.style.opacity=0,F.toggleClass(p,"meplayer-container-mini"),F.toggleClass(p,"meplayer-container"));p.style.opacity<1&&r<n?requestAnimationFrame(e):setTimeout(function(){F.removeClass(p,"meplayer-changing-theme")},500)}(),s}}):console.error("必须指定音乐地址哦~")},void 0!==n&&void 0!==n.exports&&(n.exports=P.mePlayer)}).call(e,function(){return this}())},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});t.THEME_DEFAULT="default",t.THEME_MINI="mini",t.LYRIC_CURRENT_CLASS="meplayer-lyric-current",t.LYRIC_NEXT_CLASS="meplayer-lyric-next"},function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.currentIndex=t.renderTo=t.parse=void 0;var d,n=r(1);t.parse=function(e){for(var t=e.split("\n"),r=[],n=t.length,a=/\[(\d{2}):(\d{2})\.(\d{2,3})]/g,i=/\[(\d{2}):(\d{2})\.(\d{2,3})]/,l=0;l<n;l++){var o=t[l].match(a),s=t[l].replace(a,"").replace(/^\s+|\s+$/g,"");if(s&&null!=o)for(var c=o.length,u=0;u<c;u++){var p=i.exec(o[u]),y=60*p[1]+parseInt(p[2])+parseInt(p[3])/(2===(p[3]+"").length?100:1e3);r.push({time:y,text:s})}}return r.sort(function(e,t){return e.time-t.time}),d=r,this},t.renderTo=function(e){if(d){for(var t="",r=0;r<d.length;r++)t+="<p>"+d[r].text+"</p>";return e.innerHTML=t,e.querySelector("p").className=n.LYRIC_CURRENT_CLASS,e.querySelector("p + p").className=n.LYRIC_NEXT_CLASS,this}console.error("未指定歌词文本！")},t.currentIndex=function(e){if(e<d[0].time)return 0;for(var t=0,r=d.length;t<r&&!(e>=d[t].time&&(!d[t+1]||e<=d[t+1].time));t++);return t}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.toggleClass=function(e,t){var r,n;e.classList?e.classList.toggle(t):(0<=(n=(r=e.className.split(" ")).indexOf(t))?r.splice(n,1):r.push(t),e.className=r.join(" "))},t.addClass=function(e,t){e.classList?e.classList.add(t):e.className+=" "+t},t.removeClass=function(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")},t.getAbsLeft=function(e){for(var t=e.offsetLeft;e.offsetParent;)t+=(e=e.offsetParent).offsetLeft;return t},t.parseSec=function(e){var t=e/60|0,r=e%60|0;return(t<10?"0"+t:t)+":"+(r<10?"0"+r:r)}},function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var l,o,s=[],r=!1,c=Math.random;function n(){o.clearRect(0,-l.height/2,l.width,l.height);for(var e=0;e<s.length;e++){var t=s[e].getHeight();o.fillRect(e+s[e].xSpace,-t/2,s[e].width,t)}r||requestAnimationFrame(n)}t.init=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:220,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:30,n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:"#D94240";(l=e).width=t,l.height=r,(o=l.getContext("2d")).fillStyle=n,o.translate(0,r/2);for(var a=0;a<64;a++){var i={xSpace:0==a?0:5*a,width:1,getHeight:function(e){var t=28<1.5*e?28:1.5*e,r=.5<c()?1:-1,n=e;return function(){return t<=(n+=r)?(r*=-1,n=t):n<=1&&(r*=-1,n=1),.9<c()&&(r*=-1),n}}(.8<c()?8*c()+11:6*c()+2)};s.push(i)}},t.draw=function(){r=!1,n()},t.stop=function(){r=!0}},function(e,t){var c;function u(e,t){var r;return t=t||document,"string"==typeof e?r=t.querySelector(e):e.toString().includes("HTMLDivElement")&&(r=e),r}Object.defineProperty(t,"__esModule",{value:!0}),t.init=function(e){return c=u(e),this},t.select=function(e){var t;if(Array.isArray(e)){var r=[],n=!0,a=!1,i=void 0;try{for(var l,o=e[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var s=l.value;r.push(u(s,c))}}catch(e){a=!0,i=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw i}}t=r}else t=u(e,c);return t},t.$=u}]);