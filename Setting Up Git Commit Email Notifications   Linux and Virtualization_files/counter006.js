(function(){var t=Math.random()<_atc.famp,B=_ate,z=document,o=window,g={},n={},v={},q={};function s(w,d,a){w/=d;w=Math.round(w*10)/10;if((w+"").length>4){w=Math.round(w);}return w+a;}function l(a){var d=(""+a).split(".").shift().length;if(isNaN(a)){return a;}else{if(d<4){return Math.round(a);}else{if(d<7){return s(a,1000,"K");}else{if(d<10){return s(a,1000000,"M");}else{return s(a,1000000000,"B");}}}}}function r(d){try{if(o.JSON&&o.JSON.parse){return JSON.parse(d);}}catch(a){return{};}}function p(d){try{if(o.JSON&&o.JSON.stringify){return JSON.stringify(d);}}catch(a){return"";}}function j(d){var a=_ate.cookie.rck("_atshc");if(a){return(r(a)||{})[d]||-1;}return-1;}function e(d,w){var a=_ate.cookie.rck("_atshc"),D;if(a){a=r(a);D=(a||{})[d]||0;if(D&&w>=D){delete a[d];_ate.cookie.sck("_atshc",p(a),1,1);}}}function A(d){var a=_ate.cookie.rck("_atshc"),w=C(d)+1;d.shares=w;x(d,l(w));if(!a){a={};}else{a=r(a);}if(a[d.url]){delete a[d.url];}n[d.url]=a[d.url]=w;_ate.cookie.sck("_atshc",p(a),1,1);}function C(a){var d=0;if(a&&a.shares){d=a.shares;if(isNaN(d)){d=0;}}return d;}function x(a,J){if(!a){return;}var N=a.className.indexOf("pill_style")>-1,K=(parseInt(J)!==0),F=!a.firstChild,L=a.addthis_conf||{},M=a.addthis_share||{};if(a.firstChild&&a.firstChild.nodeType==3){a.removeChild(a.firstChild);}if(F){var E=z.ce("a"),w=z.ce("a"),d=z.ce("span"),I=z.createTextNode("Share"),G=(document.compatMode=="BackCompat"),D=[],H;a.style.display="none";E.className="addthis_button_expanded";w.className="atc_s addthis_button_compact";w.appendChild(d);if(K&&N){a.className+=" addthis_nonzero";}if(G&&_ate.bro.msi&&N){E.style.lineHeight="20px";}L.ui_offset_top=(_ate.bro.msi?0:20)+(_ate.bro.ffx&&!G?15:0);L.ui_offset_left=0;L.product="sco"+(N?"pl":"")+"-"+_atc.ver;if(N){D=[w,E];}else{D=[E,w];}while(H=D.shift()){a.appendChild(H);}addthis.button(w,L,M);addthis._render([E],{conf:L,share:M},{nohover:true,singleservice:L.service||"more"});}J=z.createTextNode(J);if(!N){if(a.firstChild&&a.firstChild.firstChild){a.firstChild.removeChild(a.firstChild.firstChild);}(a.firstChild)?a.firstChild.appendChild(J):a.appendChild(J);}else{if(a.firstChild&&a.firstChild.nextSibling&&a.firstChild.nextSibling.firstChild){a.firstChild.nextSibling.removeChild(a.firstChild.nextSibling.firstChild);}if(!K){if(a.className){a.className=a.className.replace(/addthis_nonzero/g,"");}}else{if(a.className.indexOf("addthis_nonzero")==-1){a.className+=" addthis_nonzero";}a.firstChild.nextSibling.appendChild(J);}}a.style.display="block";a.href="#";}function c(a,d){a.shares=d;x(a,l(d));}function m(d,E,F,a){var w=0,D=j(d.url);if(E.error){w="?";}else{w=E.shares;}if(!isNaN(D)&&((isNaN(w)&&D>0)||D>w)){w=D;}else{e(d.url,w);}if(!n[d.url]){n[d.url]=w;}if(a){F(d,E);}else{F(d,w);}}function b(d,D){if(!d){D({error:{message:"no url provided",code:-10}});}if(q[d]){D(q[d]);}var a=d,w=_ate.util.scb("sc",d,function(F){if(t){var G=((new Date()).getTime()-_ate.cbs["time_"+w]),E=new Image();B.imgz.push(E);E.src="//m.addthisedge.com/live/t00/mu.gif?a=sc&r="+(1/t)+"&"+(isNaN(G)?"err=1":"t="+G);}if(!F.url){F.url=d;}q[d]=F;D(q[d]);},function(){q[d]={error:{message:"server timed out",code:999}};D(q[d]);});a=B.util.gUD(d).toLowerCase()+B.util.gUQS(d);_ate.ajs("//api-public.addthis.com/url/shares.json?url="+_euc(a)+"&callback="+w,1);}function y(d,E,a){var D=j(d.url),w=d.url;if(!v[w]){v[w]=[];}v[w].push(d);_ate.ed.addEventListener("addthis.menu.share",function(F){try{if(F.data.service&&_ate.track.mgu(F.data.url,{clean:1,defrag:1})==w){if(F.data.service=="facebook_unlike"||(_atc.ver>=300&&(F.data.service=="more"||F.data.service=="email"))||F.data.service=="google_unplusone"){return;}A(d);}}catch(F){}});if(n[w]!==undefined){E(d,n[w]);}else{if(w){if(!isNaN(D)&&D>0){E(d,D);}_ate.track.apc("sco"+(d.className.indexOf("pill_style")>-1?"pl":"")+"-"+_atc.ver);if(v[w].length>1){return;}b(w,function(G){if(G&&!G.error&&G.shares){n[w]=G.shares;}if(v[w]){for(var F=0;F<v[w].length;F++){m(v[w][F],G,E);}}});}}}var h={services:{facebook:{cb:function(d){var w=d.params,a=d.data;if(a.data.length){d.callbackFunc({elem:w.elem,service:w.service,countUrl:w.countUrl,count:a.data[0].total_count,share:a.data[0]});}},ajs:function(a){var d=a.params,w=a.cbname;_ate.ajs(this.baseUrl+_euc(d.countUrl)+"\"&"+this.jsonpParam+"="+w,1);},baseUrl:"https://graph.facebook.com/fql?q=SELECT url, normalized_url, share_count, like_count, comment_count, total_count,commentsbox_count, comments_fbid, click_count FROM link_stat WHERE url=\""},twitter:{baseUrl:"http://urls.api.twitter.com/1/urls/count.json?url="},pinterest_share:{baseUrl:"http://api.pinterest.com/v1/urls/count.json?url="},reddit:{cb:function(F){var H=F.params,E=F.data,d=0,D=0,G=0,w;if(E.data&&E.data.children){w=E.data.children;for(var a=0;a<=w.length-1;a+=1){if(w[a].data&&w[a].data.downs!=null&&w[a].data.ups!=null){d+=w[a].data.ups;D+=w[a].data.downs;G+=w[a].data.score;}}F.callbackFunc({elem:H.elem,service:H.service,countUrl:H.countUrl,ups:+d,downs:+D,count:+G});}},baseUrl:"http://www.reddit.com/api/info.json?url=",jsonpParam:"jsonp"},delicious:{cb:function(d){var w=d.params,a=d.data;if(a.length){d.callbackFunc({elem:w.elem,service:w.service,countUrl:w.countUrl,count:+a[0].total_posts});}},baseUrl:"http://feeds.delicious.com/v2/json/urlinfo/data?url="},vk:{ajs:function(a){var d=a.params;if(!window.VK){VK={Share:{count:function(){clearTimeout(a.timeout);var w=this.counts[arguments[0]];a.callbackFunc({elem:w.elem,service:w.service,countUrl:w.countUrl,count:+arguments[1]});}}};}VK.Share.counts=VK.Share.counts||[];VK.Share.counts.push(d);_ate.ajs(this.baseUrl+(VK.Share.counts.length-1)+"&url="+_euc(d.countUrl),1);},baseUrl:"http://vk.com/share.php?act=count&index="},linkedin:{baseUrl:"http://www.linkedin.com/countserv/count/share?url="},odnoklassniki_ru:{ajs:function(a){var d=a.params,w=a.cbname;_ate.ajs(this.baseUrl+_euc(d.countUrl)+"&"+this.jsonpParam+"="+w,1);},baseUrl:"http://www.odnoklassniki.ru/dk?st.cmd=shareData&ref=",jsonpParam:"cb"},defaults:{cb:function(d){var w=d.params,a=d.data;if(a.count){d.callbackFunc({elem:w.elem,service:w.service,countUrl:w.countUrl,count:+a.count});}},ajs:function(a){var d=a.params,w=a.cbname;_ate.ajs(this.baseUrl+_euc(d.countUrl)+"&"+this.jsonpParam+"="+w,1);},jsonpParam:"callback"}},timeout:10000,getCounts:function(E,d){if(!h||!h.services||!h.services.defaults){d({elem:E.elem,service:E.service,countUrl:E.countUrl,error:"Could not find necessary JavaScript object",count:"?"});return;}if(!h.services[E.service]||!h.services[E.service].baseUrl){d({elem:E.elem,service:E.service,countUrl:E.countUrl,error:"Service not supported",count:"?"});return;}var a=h.services[E.service],D=h.services.defaults,w,F;a.jsonpParam=a.jsonpParam||D.jsonpParam||"callback";w=setTimeout(function(){d({elem:E.elem,service:E.service,countUrl:E.countUrl,error:"Service request timed out",count:"?"});},h.timeout);F=_ate.util.scb("rcb",E.countUrl,function(G){clearTimeout(w);if(a.cb){a.cb({params:E,data:G,callbackFunc:d});}else{if(D.cb){D.cb({params:E,data:G,callbackFunc:d});}}});if(a.ajs){a.ajs.call(a,{params:E,callbackFunc:d,cbname:F,timeout:w});}else{if(D.ajs){D.ajs.call(a,{params:E,callbackFunc:d,cbname:F});}}return this;}};function k(G,w,F){if(G){G=_ate.util.select(G);for(var D=0;D<G.length;D++){var a=G[D],E=((a.parentNode||{}).className||"").indexOf("addthis_toolbox")>-1?addthis.util.getAttributes(a.parentNode,w,F):((((a.parentNode||{}).parentNode||{}).className||"").indexOf("addthis_toolbox")>-1?addthis.util.getAttributes(a.parentNode.parentNode,w,F):null),d=addthis.util.getAttributes(a,E?E.conf:w,E?E.share:F,true);if(!a.ost){if(a.className.indexOf("addthis_counter")==-1){a.className+=" addthis_counter";}if(_ate.bro.ie6&&a.className.indexOf("compatmode")==-1){a.className+=((a.className.indexOf("bubble_style")>-1)?" bubble":" ")+"compatmode"+_ate.bro.mod;}if(_ate.bro.ie6&&a.className.indexOf("ie6")==-1){a.className+=" ie6";}else{if(_ate.bro.ie7&&a.className.indexOf("ie7")==-1){a.className+=" ie7";}}a.url=(F||d.share||o.addthis_share||{}).trackurl||_ate.track.mgu((F||{}).url||d.share.url||(o.addthis_share||{}).url,{clean:1,defrag:1});a.addthis_conf=d.conf;a.addthis_share=d.share;a.ost=1;if(d.conf&&d.conf.service){h.getCounts({elem:a,service:d.conf.service,countUrl:a.url},function(H){x(H.elem,l(H.count));});}else{y(a,function(H,I){c(H,I);});}}}}}function u(w,a,d){k(w,a,d);}function i(G,d,F){if(G){G=_ate.util.select(G);for(var w=0;w<G.length;w++){var E=G[w],D=((E.parentNode||{}).className||"").indexOf("addthis_toolbox")>-1?addthis.util.getAttributes(E.parentNode,d,F):null,a=addthis.util.getAttributes(E,D?D.conf:d,D?D.share:F,true);if(!E.ost){E.url=(F||a.share||o.addthis_share||{}).trackurl||_ate.track.mgu((F||{}).url||a.share.url||(o.addthis_share||{}).url,{clean:1,defrag:1});E.addthis_conf=a.conf;E.addthis_share=a.share;E.ost=1;b(E.url,function(H){E.innerHTML=H.error?"?":H.shares;});}}}}function f(){addthis.count=i;addthis.counter=u;addthis.data.getShareCount=function(d,a){if(!a){a=addthis_share;}b(typeof(a)=="string"?a:a.trackurl||a.url,d);};addthis.count.ost=1;addthis.counter.ost=1;}if(_adr.isReady){f();return u;}else{addthis.addEventListener("addthis.ready",f);return addthis;}})();