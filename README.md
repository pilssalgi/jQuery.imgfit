
# jQuery.imgfit


# HowToUse
>##code
  ```css
  img-wrap {
    position: absolute;
    width: 80%;
    height: 80%;
    left: 10%; top:10%;
    background-color: #444;
    overflow: hidden;
  }
  ```
  ```html
  <div id="img-wrap">
    <img src="img/img2.jpg" class="fitimg">
  </div>
  ```
  ```javascript
  $('.fitimg').imgfit();
  ```
  ```javascript
  $('.fitimg').imgfit({
    align       : "c", 
    fit         : "contain", 
    canvasMode  : true, 
    position    : "absolute", 
    callBack    : function(){} 
  });
  ```
>###parameters
   ```
   align      : "c" , "l", "t", "r", "b", "lt", "lr", "rt", "rb"
   fit        : "cover" , "contain", "width", "height"
   canvsMode  : true , false
   position   : "absolute","relative"
   callBack   : function(){}
   ```





