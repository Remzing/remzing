"use strict";var clientId,clientSecret,reqCommentCountUrl,valine,repoIssuesUrl="https://api.github.com/repos/userName/userRepo/issues",COMMENT_CACHE_KEY="commentKey",ADMIN_NAME="removeif";function ajaxReqForGitHub(e,t,n){$.ajax({type:"get",url:e,headers:{Accept:"application/json; charset=utf-8",Authorization:""+t},data:"",contentType:"application/json",dataType:"json",error:function(){console.log("req error")},success:function(e){n(e)}})}function writeHtmlCommentCountValueById(t,e,n){ajaxReqForGitHub((reqCommentCountUrl=e+"?t="+(new Date).getTime()+"&labels=Gitalk,")+t,n,function(e){try{0<e.length&&$("#"+t).html(e[0].comments)}catch(e){console.error(e)}})}function writeHtmlValineCommentCountValueById(t,e){e.Q(t).count().then(function(e){$("#"+md5(t)).html(e)})}function fillComments(e,s){var c=[],m=e.length-1;$.each(e,function(t,n){var e,a=n.body.trim(),r=!0,l="\n\n",o=-1<(a=(a=a.replace(" ","")).replace("&nbsp;","")).indexOf(">"),i=a.split(l);if(2!=i.length&&(i=a.split("\r\n\r\n")),2==i.length&&o)a=i[1];else if(2<i.length&&o)a=a.substr(a.indexOf(l)+4);else for(a=a.replace(/(-)+>/g," to ");r;){-1!=a.lastIndexOf(">")?a=null==(e=a.substr(a.lastIndexOf(">")+1))||""==e?(r=!0,a.substr(0,a.lastIndexOf(">")-1)):(r=!1,e):r=!1}a=dealWtihContentStr(a),ajaxReqForGitHub(n.issue_url,s,function(e){addCommentInfo(e,c,n,m,t,a)})})}function dealWtihContentStr(e){return null!=e&&""!=e||(e="内容为空！"),28<(e=(e=e.replace(/![\s\w\](?:http(s)?:\/\/)+[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+\)/g,"[图片]")).replace(/(?:http(s)?:\/\/)+[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+/g,"[网址]")).length&&(e=e.substr(0,28),e+="..."),e}function addCommentInfo(e,t,n,a,r,l){var o=e.body.substr(0,e.body.indexOf("\n")-1),i=n.user.login;null!=i&&""!=i&&i==ADMIN_NAME&&(i+="[博主]"),t.push({content:l,date:n.created_at,userName:i,userUrl:n.user.html_url,userAvatar:n.user.avatar_url,url:o}),a==r&&dealWithResultArr(t)}function dealWithResultArr(e){renderCommentData(e=e.sort(function(e,t){return t.date.localeCompare(e.date)}));var t={};t.date=(new Date).getTime(),6<(t.data=e).length&&localStorage.setItem(COMMENT_CACHE_KEY,JSON.stringify(t))}function loadCommentDataAndRender(t){ajaxReqForGitHub(repoIssuesUrl+"/comments?sort=created&direction=desc&per_page=7&page=1",t,function(e){fillComments(e,t)})}function renderCommentData(e){if(0<e.length){for(var t="<div class='comment-content'>",n=0;n<e.length;n++){var a=e[n],r=a.content;t+="<div class='card-comment-item'><a href=\""+a.userUrl+"\"target=\"_blank\"><img class='ava' src='"+a.userAvatar+"'/></a><div class='item-header-text'><a href='"+a.userUrl+"' target='_blank'>"+a.userName+"</a>&nbsp;发表于"+getDateDiff(new Date(a.date).getTime())+'</div><div class="item-text"><a href ="'+a.url+'#comment-container">'+r+"</a></div></div>"}t+="</div>",$(".body_hot_comment").html(t),loadPjax()}else $(".body_hot_comment").html("无数据记录！")}function loadIndexHotData(e){var t,n="",a="";0<$("#index_hot_div").length&&(t=$("#index_hot_div"),ajaxReqForGitHub(repoIssuesUrl+"?per_page=10&sort=comments",e,function(e){$.each(e,function(e,t){n=0<=e&e<4?'class="item level3"':4<=e&e<7?'class="item level2"':7<=e&e<9?'class="item level1"':'class="item level0"',a+='<a href ="'+t.body.substr(0,t.body.indexOf("\n")-1)+'" '+n+">"+t.title.substr(0,t.title.indexOf("-")-1)+"&nbsp;🔥"+101*t.comments+"</a>&nbsp;&nbsp;"}),t.html(""),""==a?t.append("无数据记录！"):(t.append(a),loadPjax())}))}function renderValineComment(e,m){0<$(".body_hot_comment").length&&e.Q("*").limit(8).find().then(function(e){for(var t=[],n=0;n<e.length;n++){var a=e[n]._serverData.nick;a==m&&(a+="[博主]");var r=e[n]._serverData.comment,l=e[n]._serverData.url,o=e[n]._serverData.insertedAt,i=e[n]._serverData.link,s=e[n]._serverData.mail;r=dealWtihContentStr(r=r.replace(/<\/?.+?>/g,""));var c="https://gravatar.loli.net/avatar/"+md5(s)+"?d=mp";s.endsWith("@qq.com")&&(c="https://q2.qlogo.cn/headimg_dl?dst_uin="+s.replace("@qq.com","")+"&spec=100"),t.push({content:r,date:new Date(o.getTime()-288e5).Format("yyyy-MM-ddThh:mm:ssZ"),userName:a,userUrl:i,userAvatar:c,url:l})}dealWithResultArr(t)})}function loadIssueData(o,s,c,m,u){setTimeout(function(){var e,t={},n=localStorage.getItem(COMMENT_CACHE_KEY),a={};if(""!=n||null!=n)try{t=(a=JSON.parse(n)).data}catch(e){n=""}u?"function"==typeof Valine&&(ADMIN_NAME=c,null!=valine&&null!=valine||(valine=new Valine({el:"#comment-container-no",notify:!1,verify:!1,appId:o,appKey:s,placeholder:"留下您的高见！",avatar:"mp",avatarForce:!1,meta:["nick","mail","link"],pageSize:10,visitor:!1,highlight:!0,recordIP:!1}))):(repoIssuesUrl=repoIssuesUrl.replace("userName",c).replace("userRepo",m),ADMIN_NAME=c,e="Basic "+btoa((clientId=o)+":"+(clientSecret=s))),""==n||null==n||6e4<(new Date).getTime()-a.date?u?renderValineComment(valine,ADMIN_NAME):loadCommentDataAndRender(e):(console.log("load cache data..."),renderCommentData(t)),loadIndexHotData(e);var r=document.getElementsByClassName("display-none-class");if(null!=r&&0<r.length)for(i=0;i<r.length;i++){var l=r[i].innerText;u?writeHtmlValineCommentCountValueById(l,valine):writeHtmlCommentCountValueById(l,repoIssuesUrl,e)}console.log("~~~~欢迎光临！记得有时间多来看看哦，https://removeif.github.io/ ~~~~")},500)}function loadPjax(){"function"==typeof Pjax&&(new Pjax({elements:"a",selectors:[".section","title"],cache:!0,cacheBust:!1}),document.addEventListener("pjax:complete",function(){}))}