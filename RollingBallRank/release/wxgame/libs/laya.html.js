!function(t,e,i){i.un,i.uns;var n=i.static,h=i.class,l=i.getset,s=(i.__newvec,laya.utils.Browser,laya.display.css.CSSStyle),r=laya.utils.ClassUtils,a=(laya.events.Event,laya.utils.HTMLChar),o=laya.net.Loader,d=(laya.display.Node,laya.maths.Rectangle),u=laya.renders.Render,c=(laya.renders.RenderContext,laya.renders.RenderSprite,laya.display.Sprite),f=laya.utils.Stat,_=laya.display.Text,g=laya.resource.Texture,y=laya.net.URL,p=laya.utils.Utils,m=function(){function t(){}return h(t,"laya.html.utils.HTMLParse"),t.parse=function(e,i,n){i=(i="<root>"+(i=i.replace(/<br>/g,"<br/>"))+"</root>").replace(t.spacePattern,t.char255);var h=p.parseXMLFromString(i);t._parseXML(e,h.childNodes[0].childNodes,n)},t._parseXML=function(e,i,n,h){var l=0,s=0;if(i.join||i.item)for(l=0,s=i.length;l<s;++l)t._parseXML(e,i[l],n,h);else{var a,o;if(3==i.nodeType){var d;return void(e instanceof laya.html.dom.HTMLDivElement?(null==i.nodeName&&(i.nodeName="#text"),o=i.nodeName.toLowerCase(),(d=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(a=r.getInstance(o))&&(e.addChild(a),a.innerTEXT=d.replace(t.char255AndOneSpacePattern," "))):(d=i.textContent.replace(/^\s+|\s+$/g,"")).length>0&&(e.innerTEXT=d.replace(t.char255AndOneSpacePattern," ")))}if("#comment"==(o=i.nodeName.toLowerCase()))return;if(a=r.getInstance(o)){(a=e.addChild(a)).URI=n,a.href=h;var u=i.attributes;if(u&&u.length>0)for(l=0,s=u.length;l<s;++l){var c=u[l],f=c.nodeName,_=c.value;a._setAttributes(f,_)}t._parseXML(a,i.childNodes,n,a.href)}else t._parseXML(e,i.childNodes,n,h)}},t.char255=String.fromCharCode(255),t.spacePattern=/&nbsp;|&#160;/g,t.char255AndOneSpacePattern=new RegExp(String.fromCharCode(255)+"|(\\s+)","g"),t}(),w=function(){function t(){}return h(t,"laya.html.utils.Layout"),t.later=function(e){null==t._will&&(t._will=[],i.stage.frameLoop(1,null,function(){if(!(t._will.length<1)){for(var e=0;e<t._will.length;e++)laya.html.utils.Layout.layout(t._will[e]);t._will.length=0}})),t._will.push(e)},t.layout=function(e){if(!e||!e._style)return null;if(0==(512&e._style._type))return null;e.getStyle()._type&=-513;var i=t._multiLineLayout(e);return u.isConchApp&&e.layaoutCallNative&&e.layaoutCallNative(),i},t._multiLineLayout=function(e){function i(){I.y=C,C+=I.h+f,0==I.h&&(C+=g),I.mWidth=R,R=0,I=new x,H.push(I),I.h=0,T=0,W=!0,A=!1}if(_.RightToLeft)return t._multiLineLayout2(e);var n=new Array;e._addChildsToLayout(n);var h,l,s,r,a,o=0,d=n.length,u=e._getCSSStyle(),c=u.letterSpacing,f=u.leading,g=u.lineHeight,y=u._widthAuto()||!u.wordWrap,p=y?999999:e.width,m=(e.height,0),w=u.italic?u.fontSize/3:0,v=u._getAlign(),S=u._getValign(),L=0!==S||0!==v||0!=g,T=0,C=0,E=0,M=0,H=new Array,I=H[0]=new x,A=!1,N=!1;I.h=0,u.italic&&(p-=u.fontSize/3);var R=0,W=!0;for(o=0;o<d;o++)if(null!=(h=n[o]))if(W=!1,h instanceof laya.html.dom.HTMLBrElement)i(),I.y=C;else{if(h._isChar()){if((r=h).isWord)A=N||"\n"===r.char,I.wordStartIndex=I.elements.length;else{if(H.length>0&&T+E>p&&I.wordStartIndex>0){var U=0;U=I.elements.length-I.wordStartIndex+1,I.elements.length=I.wordStartIndex,o-=U,i();continue}A=!1,R+=r.width}E=r.width+c,M=r.height,N=!1,(A=A||T+E>p)&&i(),I.minTextHeight=Math.min(I.minTextHeight,h.height)}else a=h,s=(l=h._getCSSStyle()).padding,0===l._getCssFloat()||(L=!0),A=N||l.lineElement,E=a.width*a._style._tf.scaleX+s[1]+s[3]+c,M=a.height*a._style._tf.scaleY+s[0]+s[2],N=l.lineElement,(A=A||T+E>p&&l.wordWrap)&&i();I.elements.push(h),I.h=Math.max(I.h,M),h.x=T,h.y=C,T+=E,I.w=T-c,I.y=C,m=Math.max(T+w,m)}else W||(T+=t.DIV_ELEMENT_PADDING),I.wordStartIndex=I.elements.length;if(C=I.y+I.h,L){var b=0,P=p;for(y&&e.width>0&&(P=e.width),o=0,d=H.length;o<d;o++)H[o].updatePos(0,P,o,b,v,S,g),b+=Math.max(g,H[o].h+f);C=b}return y&&(e.width=m),C>e.height&&(e.height=C),[m,C]},t._multiLineLayout2=function(e){function i(){H.y=T,T+=H.h+f,0==H.h&&(T+=_),H.mWidth=N,N=0,H=new x,M.push(H),H.h=0,L=0,R=!0,I=!1}var n=new Array;e._addChildsToLayout(n);var h,l,s,r,a,o=0,d=n.length,u=e._getCSSStyle(),c=u.letterSpacing,f=u.leading,_=u.lineHeight,g=u._widthAuto()||!u.wordWrap,y=g?999999:e.width,p=(e.height,0),m=u.italic?u.fontSize/3:0,w=2-u._getAlign(),v=u._getValign(),S=0!==v||0!==w||0!=_,L=0,T=0,C=0,E=0,M=new Array,H=M[0]=new x,I=!1,A=!1;H.h=0,u.italic&&(y-=u.fontSize/3);var N=0,R=!0;for(o=0;o<d;o++)if(null!=(h=n[o]))if(R=!1,h instanceof laya.html.dom.HTMLBrElement)i(),H.y=T;else{if(h._isChar()){if((r=h).isWord)I=A||"\n"===r.char,H.wordStartIndex=H.elements.length;else{if(M.length>0&&L+C>y&&H.wordStartIndex>0){var W=0;W=H.elements.length-H.wordStartIndex+1,H.elements.length=H.wordStartIndex,o-=W,i();continue}I=!1,N+=r.width}C=r.width+c,E=r.height,A=!1,(I=I||L+C>y)&&i(),H.minTextHeight=Math.min(H.minTextHeight,h.height)}else a=h,s=(l=h._getCSSStyle()).padding,0===l._getCssFloat()||(S=!0),I=A||l.lineElement,C=a.width*a._style._tf.scaleX+s[1]+s[3]+c,E=a.height*a._style._tf.scaleY+s[0]+s[2],A=l.lineElement,(I=I||L+C>y&&l.wordWrap)&&i();H.elements.push(h),H.h=Math.max(H.h,E),h.x=L,h.y=T,L+=C,H.w=L-c,H.y=T,p=Math.max(L+m,p)}else R||(L+=t.DIV_ELEMENT_PADDING),H.wordStartIndex=H.elements.length;if(T=H.y+H.h,S){var U=0,b=y;for(o=0,d=M.length;o<d;o++)M[o].updatePos(0,b,o,U,w,v,_),U+=Math.max(_,M[o].h+f);T=U}for(g&&(e.width=p),T>e.height&&(e.height=T),o=0,d=M.length;o<d;o++)M[o].revertOrder(y);return[p,T]},t._will=null,t.DIV_ELEMENT_PADDING=0,t}(),x=function(){function t(){this.x=0,this.y=0,this.w=0,this.h=0,this.wordStartIndex=0,this.minTextHeight=99999,this.mWidth=0,this.elements=new Array}h(t,"laya.html.utils.LayoutLine");var e=t.prototype;return e.updatePos=function(t,e,i,n,h,l,s){var r,a=0;this.elements.length>0&&(a=(r=this.elements[this.elements.length-1]).x+r.width-this.elements[0].x);var o=0,d=NaN;1===h&&(o=(e-a)/2),2===h&&(o=e-a),0===s||0!=l||(l=1);for(var u=0,c=this.elements.length;u<c;u++){var f=(r=this.elements[u])._getCSSStyle();switch(0!==o&&(r.x+=o),f._getValign()){case 0:r.y=n;break;case 1:var _=0;99999!=this.minTextHeight&&(_=this.minTextHeight);var g=(_+s)/2;g=Math.max(g,this.h),d=(laya.html.dom.HTMLImageElement,n+g-r.height),r.y=d;break;case 2:r.y=n+(s-r.height)}}},e.revertOrder=function(t){var e;if(this.elements.length>0){var i=0,n=0;for(n=this.elements.length,i=0;i<n;i++)(e=this.elements[i]).x=t-e.x-e.width}},t}(),v=function(t){function e(){this.URI=null,this._href=null,e.__super.call(this),this._text=e._EMPTYTEXT,this.setStyle(new s(this)),this._getCSSStyle().valign="middle",this.mouseEnabled=!0}h(e,"laya.html.dom.HTMLElement",t);var n=e.prototype;return n.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative();var i=this._getWords();i?laya.html.dom.HTMLElement.fillWords(this,i,0,0,this.style.font,this.style.color,this.style.underLine):this.graphics.clear()},n.appendChild=function(t){return this.addChild(t)},n._getWords2=function(){var t=this._text.text;if(!t||0===t.length)return null;var e,i,n=0,h=0;if(this._text.drawWords)i=this._text.drawWords;else{for(h=(e=t.split(" ")).length-1,i=[],n=0;n<h;n++)i.push(e[n]," ");h>=0&&i.push(e[h]),this._text.drawWords=i}var l=this._text.words;if(l&&l.length===i.length)return l;null===l&&(this._text.words=l=[]),l.length=i.length;var s,r=this.style,o=r.font;for(n=0,h=i.length;n<h;n++){s=p.measureText(i[n],o);var d=l[n]=new a(i[n],s.width,s.height||r.fontSize,r);if(d.char.length>1&&(d.charNum=d.char),this.href){var u=new c;this.addChild(u),d.setSprite(u)}}return l},n._getWords=function(){if(!_.CharacterCache)return this._getWords2();var t=this._text.text;if(!t||0===t.length)return null;var e=this._text.words;if(e&&e.length===t.length)return e;null===e&&(this._text.words=e=[]),e.length=t.length;for(var i,n=this.style,h=n.font,l=0,s=t.length;l<s;l++){i=p.measureText(t.charAt(l),h);var r=e[l]=new a(t.charAt(l),i.width,i.height||n.fontSize,n);if(this.href){var o=new c;this.addChild(o),r.setSprite(o)}}return e},n.showLinkSprite=function(){var t=this._text.words;if(t)for(var e,i,n=[],h=0;h<t.length;h++)i=t[h],(e=new c).graphics.drawRect(0,0,i.width,i.height,"#ff0000"),e.width=i.width,e.height=i.height,this.addChild(e),n.push(e)},n._layoutLater=function(){var t=this.style;512&t._type||(t.widthed(this)&&(this._childs.length>0||null!=this._getWords())&&t.block?(w.later(this),t._type|=512):this.parent&&this.parent._layoutLater())},n._setAttributes=function(e,i){switch(e){case"style":return void this.style.cssText(i);case"class":return void(this.className=i)}t.prototype._setAttributes.call(this,e,i)},n.updateHref=function(){if(null!=this._href){var t=this._getWords();if(t)for(var e,i,n=0;n<t.length;n++)(i=(e=t[n]).getSprite())&&(i.size(e.width,e.height),i.on("click",this,this.onLinkHandler))}},n.onLinkHandler=function(t){switch(t.type){case"click":for(var e=this;e;)e.event("link",[this.href]),e=e.parent}},n.formatURL=function(t){return this.URI?y.formatURL(t,this.URI?this.URI.path:null):t},l(0,n,"href",function(){return this._href},function(t){this._href=t,null!=t&&(this._getCSSStyle().underLine=1,this.updateHref())}),l(0,n,"color",null,function(t){this.style.color=t}),l(0,n,"onClick",null,function(t){i._runScript("fn=function(event){"+t+";}"),this.on("click",this,void 0)}),l(0,n,"id",null,function(t){L.document.setElementById(t,this)}),l(0,n,"innerTEXT",function(){return this._text.text},function(t){this.text=t}),l(0,n,"style",function(){return this._style}),l(0,n,"text",function(){return this._text.text},function(t){this._text==e._EMPTYTEXT?this._text={text:t,words:null}:(this._text.text=t,this._text.words&&(this._text.words.length=0)),u.isConchApp&&this.layaoutCallNative(),this._renderType|=2048,this.repaint(),this.updateHref()}),l(0,n,"parent",t.prototype._$get_parent,function(t){if(t instanceof laya.html.dom.HTMLElement){var e=t;this.URI||(this.URI=e.URI),this.style.inherit(e.style)}i.superSet(c,this,"parent",t)}),l(0,n,"className",null,function(t){this.style.attrs(L.document.styleSheets["."+t])}),e.fillWords=function(t,e,i,n,h,l,s){t.graphics.clear();for(var r=0,a=e.length;r<a;r++){var o=e[r];t.graphics.fillText(o.char,o.x+i,o.y+n,h,l,"left",s)}},e._EMPTYTEXT={text:null,words:null},e}(c),S=(function(t){function e(){e.__super.call(this),this.style.lineElement=!0,this.style.block=!0}h(e,"laya.html.dom.HTMLBrElement",v)}(),function(t){function e(){this.contextHeight=NaN,this.contextWidth=NaN,e.__super.call(this),this.style.block=!0,this.style.lineElement=!0,this.style.width=200,this.style.height=200}h(e,"laya.html.dom.HTMLDivElement",t);var n=e.prototype;return n.appendHTML=function(t){m.parse(this,t,this.URI),this.layout()},n._addChildsToLayout=function(t){var e=this._getWords();if(null==e&&0==this._childs.length)return!1;e&&e.forEach(function(e){t.push(e)});for(var i=!0,n=0,h=this._childs.length;n<h;n++){var l=this._childs[n];i?i=!1:t.push(null),l._addToLayout(t)}return!0},n._addToLayout=function(t){this.layout()},n.layout=function(){if(this.style){this.style._type|=512;var t=w.layout(this);if(t){this._$P.mHtmlBounds||this._set$P("mHtmlBounds",new d);var e=this._$P.mHtmlBounds;e.x=e.y=0,e.width=this.contextWidth=t[0],e.height=this.contextHeight=t[1],this.setBounds(e)}}},l(0,n,"height",function(){return this._height?this._height:this.contextHeight},t.prototype._$set_height),l(0,n,"innerHTML",null,function(t){this.destroyChildren(),this.appendHTML(t)}),l(0,n,"width",function(){return this._width?this._width:this.contextWidth},function(t){var e=!1;e=0===t?t!=this._width:t!=this.width,i.superSet(v,this,"width",t),e&&this.layout()}),e}(v)),L=function(t){function e(){this.all=new Array,this.styleSheets=s.styleSheets,e.__super.call(this)}h(e,"laya.html.dom.HTMLDocument",v);var i=e.prototype;return i.getElementById=function(t){return this.all[t]},i.setElementById=function(t,e){this.all[t]=e},n(e,["document",function(){return this.document=new e}]),e}();(function(t){function e(){this._tex=null,this._url=null,this._renderArgs=[],e.__super.call(this),this.style.block=!0}h(e,"laya.html.dom.HTMLImageElement",v);var i=e.prototype;i._addToLayout=function(t){!this._style.absolute&&t.push(this)},i.render=function(t,e,i){!this._tex||!this._tex.loaded||!this._tex.loaded||this._width<1||this._height<1||(f.spriteCount++,this._renderArgs[0]=this._tex,this._renderArgs[1]=this.x,this._renderArgs[2]=this.y,this._renderArgs[3]=this.width||this._tex.width,this._renderArgs[4]=this.height||this._tex.height,t.ctx.drawTexture2(e,i,this.style.translateX,this.style.translateY,this.transform,this.style.alpha,this.style.blendMode,this._renderArgs))},i.layaoutCallNative=function(){var t=0;if(this._childs&&(t=this._childs.length)>0)for(var e=0;e<t;e++)this._childs[e].layaoutCallNative&&this._childs[e].layaoutCallNative()},l(0,i,"src",null,function(t){function e(){var t=i._style;t.widthed(i)||i._tex.width,t.heighted(i)||i._tex.height;t.widthed(i)||i._width==i._tex.width||(i.width=i._tex.width,i.parent&&i.parent._layoutLater()),t.heighted(i)||i._height==i._tex.height||(i.height=i._tex.height,i.parent&&i.parent._layoutLater()),u.isConchApp&&(i._renderArgs[0]=i._tex,i._renderArgs[1]=i.x,i._renderArgs[2]=i.y,i._renderArgs[3]=i.width||i._tex.width,i._renderArgs[4]=i.height||i._tex.height,i.graphics.drawTexture(i._tex,0,0,i._renderArgs[3],i._renderArgs[4])),i.repaint(),i.parentRepaint()}var i=this;if(t=this.formatURL(t),this._url!=t){this._url=t;var n=this._tex=o.getRes(t);n||(this._tex=n=new g,n.load(t),o.cacheRes(t,n)),n.loaded?e():n.on("loaded",null,e)}})})(),function(t){function e(){this.type=null,e.__super.call(this),this.visible=!1}h(e,"laya.html.dom.HTMLLinkElement",t);var i=e.prototype;i._onload=function(t){switch(this.type){case"text/css":s.parseCSS(t,this.URI)}},l(0,i,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t),this.URI=new y(t);var i=new o;i.once("complete",null,function(t){e._onload(t)}),i.load(t,"text")}),e._cuttingStyle=new RegExp("((@keyframes[\\s\\t]+|)(.+))[\\t\\n\\r\\s]*{","g")}(v),function(t){function e(){e.__super.call(this),this.visible=!1}h(e,"laya.html.dom.HTMLStyleElement",t);l(0,e.prototype,"text",t.prototype._$get_text,function(t){s.parseCSS(t,null)})}(v),function(t){function e(){e.__super.call(this),this._getCSSStyle().valign="middle"}h(e,"laya.html.dom.HTMLIframeElement",t);l(0,e.prototype,"href",t.prototype._$get_href,function(t){var e=this;t=this.formatURL(t);var i=new o;i.once("complete",null,function(i){var n=e.URI;e.URI=new y(t),e.innerHTML=i,!n||(e.URI=n)}),i.load(t,"text")})}(S)}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});for(var i in Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});