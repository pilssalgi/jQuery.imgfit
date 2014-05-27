/**
 * 2014.03.
 * imgfit ver 0.0.2
 * Author : Heonwongeun
 * FaceBook : https://www.facebook.com/heo.wongeun
 */

(function(){
    var _bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
    jQuery.fn.imgfit = function(option){
        var $this       = $(this);
        if(!$.fn.imgfitClass){
            $.fn.imgfitClass = function($img,option){
                if(typeof window.imgfitID == 'undefined')window.imgfitID = 0;
                else window.imgfitID++;

                var _this       = this,
                    _img        = $img[0],
                    fitTarget   = undefined;

                this.id = Number(window.imgfitID);
                this.ratio              = undefined;
                this.naturalWidth       = undefined;
                this.naturalHeight      = undefined;
                this.canvas             = undefined;
                this.ctx                = undefined;
                this.$img               = $img;
                this.parent             = $img.parent();
                this.config             = { align : "c", fit : "all", canvasMode : false, position:'absolute', callBack : undefined, autoResize : true };
                this.css                = { width : 'auto', height : 'auto', left : 0, top : 0};
                this.ratio              = _img.naturalWidth/_img.naturalHeight;
                $.extend(this.config,option);

                this.init = function(option){
                    $.extend(this.config,option);
                    if(!this.ratio){
                        var image = new Image();
                        image.onload = function(){
                            _this.naturalWidth  = image.width;
                            _this.naturalHeight = image.height;
                            _img.naturalWidth   = image.width;
                            _img.naturalHeight  = image.height;
                            _this.ratio = image.width/image.height;
                            _this.setting();
                        }
                        image.src = $img.attr("src");
                    }else{
                        _this.setting();
                    }
                }

                var className = $img.context.className;
                this.setting = function(){
                    $img.css({position:this.config.position});
                    if(this.config.canvasMode && !this.$canvas){
                        this.$canvas            = $('<canvas id="imgfit-canvas-'+this.id+'"></canvas>').css({position:this.config.position}).appendTo(this.parent);
                        this.canvas             = this.$canvas[0]
                        this.ctx                = this.canvas.getContext("2d");
                        this.canvas.width       = _img.naturalWidth;
                        this.canvas.height      = _img.naturalHeight;
                        fitTarget = this.$canvas;
                        setTimeout(function(){
                            _this.ctx.drawImage(_img,0,0);
                        },10);
                    }

                    if(this.config.canvasMode){
                        fitTarget = this.$canvas;
                        this.$canvas.css({display:'block'});
                        $img.css({display:'none'});
                    }else{
                        fitTarget = $img;
                        $img.css({display:'block'});
                        if(this.$canvas){
                            this.$canvas.css({display:'none'});        
                        }
                    }
                    
                    if(!this.isAddEvent){
                        this.isAddEvent = true;    
                        $(window).on('resize',this.onResize);
                    }
                    this.fit();                   
                }

                this.fit = function(){
                    var frameW  = this.parent.width(),
                        frameH  = this.parent.height();

                    if(frameW/this.ratio < frameH){
                        this.css.width   = frameH*this.ratio;
                        this.css.height  = frameH;
                    }else{
                        this.css.width   = frameW;
                        this.css.height  = frameW/this.ratio;
                    }

                    switch(this.config.fit){
                        case 'all'      :   break;
                        case 'width'    :   this.css.width   = frameW;
                                            this.css.height  = frameW/this.ratio; 
                                            break;

                        case 'height'   :   this.css.width   = frameH*this.ratio;
                                            this.css.height  = frameH;
                                            break;
                    }

                    this.css.left    = (frameW-this.css.width)*0.5;
                    this.css.top     = (frameH-this.css.height)*0.5;

                    switch(this.config.align){
                        case 'l'    :   this.css.left = 0;
                                        break;
                        case 'r'    :   this.css.left = (frameW-this.css.width);
                                        break;
                        case 't'    :   this.css.top = 0;
                                        break;
                        case 'b'    :   this.css.top = (frameH-this.css.height);
                                        break;
                        case 'lt'   :   this.css.left = 0; this.css.top = 0;
                                        break;
                        case 'lb'   :   this.css.left = 0; this.css.top = (frameH-this.css.height);
                                        break;
                        case 'rt'   :   this.css.left = (frameW-this.css.width); this.css.top = 0;
                                        break;
                        case 'rb'   :   this.css.left = (frameW-this.css.width); this.css.top = (frameH-this.css.height);
                                        break;
                    }

                    fitTarget.css(this.css);
                }

                this.onResize = function(){
                    if(_this.config.autoResize){
                        _this.fit();
                        if(_this.config.callBack){
                            _this.config.callBack.apply(_this);
                        }    
                    }
                }

                this.init(option);
                return this;
            }
            $.fn.imgfitClass.prototype.constructor = $.fn.imgfitClass;
            // console.log($.fn.imgfitClass)
        }


        $this.each(function(i){
            var $img    = $(this),
                img     = $img[0];
            if(!img.imgfit){
                img.imgfit = new $.fn.imgfitClass($img,option);
            }else{
                img.imgfit.init(option);
            }
        });

        return this;
    }
}).call(jQuery)


/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.8.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e}(this,this.document);