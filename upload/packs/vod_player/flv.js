
(function(a){typeof a.CMP=="undefined"&&(a.CMP=function(){var b=/msie/.test(navigator.userAgent.toLowerCase()),c=function(a,b){if(b&&typeof b=="object")for(var c in b)a[c]=b[c];return a},d=function(a,d,e,f,g,h,i){i=c({width:d,height:e,id:a},i),h=c({allowfullscreen:"true",allowscriptaccess:"always"},h);var j,k,l=[];if(g){j=g;if(typeof g=="object"){for(var m in g)l.push(m+"="+encodeURIComponent(g[m]));j=l.join("&")}h.flashvars=j}k="<object ",k+=b?'classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ':'type="application/x-shockwave-flash" data="'+f+'" ';for(var m in i)k+=m+'="'+i[m]+'" ';k+=b?'><param name="movie" value="'+f+'" />':">";for(m in h)k+='<param name="'+m+'" value="'+h[m]+'" />';return k+="<param name='wmode' value='opaque' /></object>",k},e=function(c){var d=document.getElementById(c);if(!d||d.nodeName.toLowerCase()!="object")d=b?a[c]:document[c];return d},f=function(a){if(a){for(var b in a)typeof a[b]=="function"&&(a[b]=null);a.parentNode.removeChild(a)}},g=function(a){if(a){var c=typeof a=="string"?e(a):a;if(c&&c.nodeName.toLowerCase()=="object")return b?(c.style.display="none",function(){c.readyState==4?f(c):setTimeout(arguments.callee,15)}()):c.parentNode.removeChild(c),!0}return!1};return{create:function(){return d.apply(this,arguments)},write:function(){var a=d.apply(this,arguments);return document.write(a),a},get:function(a){return e(a)},remove:function(a){return g(a)}}}());var b=function(b){b=b||a.event;var c=b.target||b.srcElement;if(c&&typeof c.cmp_version=="function"){var d=c.skin("list.tree","maxVerticalScrollPosition");if(d>0)return c.focus(),b.preventDefault&&b.preventDefault(),!1}};a.addEventListener&&a.addEventListener("DOMMouseScroll",b,!1),a.onmousewheel=document.onmousewheel=b})(window);



var cmpo;
function cmp_loaded(key) {
        cmpo = CMP.get("cmp");
        if (cmpo) {
                cmpo.addEventListener("model_state", "cmp_model_state");
        }
}
//状态完成事件，自动播放下一页
function cmp_model_state(state) {
        if (state == "completed") {
                if( xurl != "" &&  xurl != "#") {
                       top.window.location =  xurl;
                }else{
                       top.location.reload(); 
                }
        }
}

//CMP全局配置

var flashvars = {
	//播放地址
	src : unescape(url),
	//自动播放
	auto_play : "1",
	//不加载默认配置和列表
	url : "",
	lists : "",
	//名称链接
	label : "",
	name : window.parent.document.title,
	link : window.parent.location.href,
	//启用取样播放，如果mp3无需跨域可以关闭此项
	sound_sample : "1",
	//插件设置
	plugins : parent.cs_root + "packs/vod_player/cmp/sharing.swf",
	//皮肤
	skin : parent.cs_root + "packs/vod_player/cmp/vplayer.swf",
	api : "cmp_loaded"
};

function $Showhtml(){
    document.getElementById('playad').style.display = "none";
	if(isWap){
		document.getElementById('playlist').innerHTML = '<video src="'+unescape(url)+'" controls="controls" autoplay="autoplay" width="'+width+'" height="'+height+'"></video>';
	}else{
		document.getElementById('playlist').innerHTML = CMP.create("cmp", "100%", height, parent.cs_root + "packs/vod_player/cmp/cmp.swf", flashvars);
	}
}
if(parent.cs_adloadtime){
	setTimeout("$Showhtml();",parent.cs_adloadtime*1000);
}
