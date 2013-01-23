/*
	jQuery Zoom v1.6.1
	(c) 2013 Jack Moore - jacklmoore.com/zoom
	updated: 2013-01-23
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(o){var t={url:!1,icon:!0,callback:!1,target:!1,duration:120,on:"mouseover"};o.zoom=function(t,n,e){var i,u,a,c,r,d=o(t).css("position");return o(t).css({position:/(absolute|fixed)/.test()?d:"relative",overflow:"hidden"}),o(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width,height:e.height,border:"none",maxWidth:"none"}).appendTo(t),{init:function(){i=o(t).outerWidth(),u=o(t).outerHeight(),a=(e.width-i)/o(n).outerWidth(),c=(e.height-u)/o(n).outerHeight(),r=o(n).offset()},move:function(o){var t=o.pageX-r.left,n=o.pageY-r.top;n=Math.max(Math.min(n,u),0),t=Math.max(Math.min(t,i),0),e.style.left=t*-a+"px",e.style.top=n*-c+"px"}}},o.fn.zoom=function(n){return this.each(function(){var e=o.extend({},t,n||{}),i=e.target||this,u=this,a=new Image,c=o(a),r="mousemove",d=!1;(e.url||(e.url=o(u).find("img").attr("src"),e.url))&&(e.icon&&o('<div class="zoomIcon"/>').appendTo(o(u)),a.onload=function(){function t(t){s.init(),s.move(t),c.stop().fadeTo(o.support.opacity?e.duration:0,1)}function n(){c.stop().fadeTo(e.duration,0)}var s=o.zoom(i,u,a);"grab"===e.on?o(u).mousedown(function(e){o(document).one("mouseup",function(){n(),o(document).unbind(r,s.move)}),t(e),o(document)[r](s.move),e.preventDefault()}):"click"===e.on?o(u).click(function(e){return d?void 0:(d=!0,t(e),o(document)[r](s.move),o(document).one("click",function(){n(),d=!1,o(document).unbind(r,s.move)}),!1)}):(s.init(),o(u).hover(t,n)[r](s.move)),o.isFunction(e.callback)&&e.callback.call(a)},a.src=e.url)})},o.fn.zoom.defaults=t})(window.jQuery);