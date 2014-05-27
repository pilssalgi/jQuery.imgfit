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
            // types       = ['fit'],
            // config      = { align : "c", fit : "all", canvasMode : false },
            // isIE        = navigator.userAgent.toLowerCase().indexOf("trident/7.0") !== -1?true:false;

        (function(){
            var i = 0, n= $this.length;
            for(i; i<n; i++){
                $img = $this[i];
                console.log($img);
            }
        }).call(this)
        // $.extend(config,option);
        // function init(){
        //     if(config.canvasMode)if(!Modernizr.canvas)config.canvasMode = false;

        //     $this.each(function(i){
        //         var _this   = this,
        //             $img    = $(this),
        //             img     = $img[0];

        //         img.ratio        = img.naturalWidth/img.naturalHeight;
        //         img.parent       = $img.parent();

        //         if($img.css('position') == 'static')$img.css({position:'absolute'});

        //         if(!img.ratio){
        //             var image = new Image();
        //             image.onload = function(){
        //                 img.naturalWidth    = image.width;
        //                 img.naturalHeight   = image.height;
        //                 img.ratio           = image.width/image.height;
        //                 setting($img,img)
        //             }
        //             image.src = $img.attr("src");
        //         }else{
        //             setting($img,img)
        //         }
        //     });
        // }

        function setting($img,img){
            // if(config.canvasMode){
            //     var parent      = $img.parent(),
            //         className   = $img.context.className;

            //     $img.css({display:'none',opacity:0});
            //     $img.removeClass(className);

            //     img.canvas           = $('<canvas id="imgfit-canvas-'+1+'" class="'+className+'"></canvas>').css({position:'absolute'}).appendTo(parent)[0]
            //     img.ctx              = img.canvas.getContext("2d");
            //     img.canvas.width     = img.naturalWidth;
            //     img.canvas.height    = img.naturalHeight;
            // }

            // img.fitimage = new FitImage();
        }

        function ImageFit($img,option){
            this.config = { align : "c", fit : "all", canvasMode : false };
            $.extend(this.config,option);
            // isIE        = navigator.userAgent.toLowerCase().indexOf("trident/7.0") !== -1?true:false;

            init = function(){
                // if(config.canvasMode)if(!Modernizr.canvas)config.canvasMode = false;

                // $this.each(function(i){
                //     var _this   = this,
                //         $img    = $(this),
                //         img     = $img[0];

                //     img.ratio        = img.naturalWidth/img.naturalHeight;
                //     img.parent       = $img.parent();

                //     if($img.css('position') == 'static')$img.css({position:'absolute'});

                //     if(!img.ratio){
                //         var image = new Image();
                //         image.onload = function(){
                //             img.naturalWidth    = image.width;
                //             img.naturalHeight   = image.height;
                //             img.ratio           = image.width/image.height;
                //             setting($img,img)
                //         }
                //         image.src = $img.attr("src");
                //     }else{
                //         setting($img,img)
                //     }
                // });
            }


            this.resize = function(){
                // console.log(this);
            }

            return this;
        }
        ImageFit.prototype.constructor = ImageFit;

        // function fit(){
        //     img.each(function(i){
        //         var img     = $(this),
        //             data    = img[0],
        //             frameW  = data.parent.width(),
        //             frameH  = data.parent.height(),
        //             css     = { width : 'auto', height : 'auto', left : 0, top : 0};

        //         if(frameW/data.ratio < frameH){
        //             css.width   = frameH*data.ratio;
        //             css.height  = frameH;
        //         }else{
        //             css.width   = frameW;
        //             css.height  = frameW/data.ratio;
        //         }

        //         switch(config.fit){
        //             case 'all'      :   break;
        //             case 'width'    :   css.width   = frameW;
        //                                 css.height  = frameW/data.ratio; 
        //                                 // css.left    = 0; css.top = (frameH-css.height)*0.5;
        //                                 break;

        //             case 'height'   :   css.width   = frameH*data.ratio;
        //                                 css.height  = frameH;
        //                                 // css.left = (frameW-css.width)*0.5; css.top = 0;
        //                                 break;
        //         }

        //         css.left    = (frameW-css.width)*0.5;
        //         css.top     = (frameH-css.height)*0.5;


        //         switch(config.align){
        //             case 'l'    :   css.left = 0;
        //                             break;
        //             case 'r'    :   css.left = (frameW-css.width);
        //                             break;
        //             case 't'    :   css.top = 0;
        //                             break;
        //             case 'b'    :   css.top = (frameH-css.height);
        //                             break;
        //             case 'lt'   :   css.left = 0; css.top = 0;
        //                             break;
        //             case 'lb'   :   css.left = 0; css.top = (frameH-css.height);
        //                             break;
        //             case 'rt'   :   css.left = (frameW-css.width); css.top = 0;
        //                             break;
        //             case 'rb'   :   css.left = (frameW-css.width); css.top = (frameH-css.height);
        //                             break;
        //         }

               

        //         if(config.canvasMode){
        //             var canvas = data.canvas;
        //             if(canvas.width == 0 || canvas.height == 0 ){
        //                 canvas.width     = img.width();
        //                 canvas.height    = img.height();
        //                 data.ctx.drawImage(img[0],0,0);
        //                 // console.log(canvas.width);
        //             }else{
                        
        //                 // data.ctx.drawImage(img[0],0,0);
        //             }

        //             $(canvas).css(css);
                    
        //         }else{
        //             img.css(css);
        //         }

                
        //     });
        // }

        // init();
        return this;
    }
}).call(jQuery)


/* Modernizr 2.8.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-canvas-teststyles-testprop-testallprops-prefixes-domprefixes
 */
;window.Modernizr=function(a,b,c){function y(a){i.cssText=a}function z(a,b){return y(l.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b){for(var d in a){var e=a[d];if(!B(e,"-")&&i[e]!==c)return b=="pfx"?e:!0}return!1}function D(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}function E(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return A(b,"string")||A(b,"undefined")?C(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),D(e,b,c))}var d="2.8.2",e={},f=b.documentElement,g="modernizr",h=b.createElement(g),i=h.style,j,k={}.toString,l=" -webkit- -moz- -o- -ms- ".split(" "),m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v=function(a,c,d,e){var h,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:g+(d+1),l.appendChild(j);return h=["&#173;",'<style id="s',g,'">',a,"</style>"].join(""),l.id=g,(m?l:n).innerHTML+=h,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=f.style.overflow,f.style.overflow="hidden",f.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),f.style.overflow=k),!!i},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")};for(var F in p)x(p,F)&&(u=F.toLowerCase(),e[u]=p[F](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof enableClasses!="undefined"&&enableClasses&&(f.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),h=j=null,e._version=d,e._prefixes=l,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return C([a])},e.testAllProps=E,e.testStyles=v,e}(this,this.document);