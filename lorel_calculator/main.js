/*
@@@@
js for lorel calculator
*/
function drop_handler(ev) {
 ev.preventDefault();
 ev.srcElement.style.top=ev.clientY+ "px";
 ev.srcElement.style.left=(ev.clientX-(parseInt(ev.srcElement.offsetWidth/2)))+ "px";
}
function keypad_toggle(){
  var drawer=document.getElementsByClassName("lorel-drawer")[0];
  var state=drawer.getAttribute("data-toggle");
  var ribbon=document.getElementsByClassName("lorel-row")[0];
  var keypad=document.getElementsByClassName("lorel-row")[1];
  if(state=="1"){
    ribbon.classList.add("mem-ribbon-hide");
    ribbon.classList.remove("mem-ribbon-show");
    keypad.classList.add("basic-keypad-hide");
    keypad.classList.remove("basic-keypad-show");
    drawer.setAttribute("data-toggle","0");
    drawer.children[0].classList.add("rotate-plus");
    drawer.children[0].classList.remove("rotate-minus");
  }else{
    ribbon.classList.add("mem-ribbon-show");
    ribbon.classList.remove("mem-ribbon-hide");
    keypad.classList.add("basic-keypad-show");
    keypad.classList.remove("basic-keypad-hide");
    drawer.setAttribute("data-toggle","1");
    drawer.style.transform="rotateZ(0deg)";
    drawer.children[0].classList.add("rotate-minus");
    drawer.children[0].classList.remove("rotate-plus");
  }
}
(function(w){
  function LorelCalculator(){
    var currentResult=0;
    var prevResult=0;
  }
  LorelCalculator.prototype.animate=function(){};
  LorelCalculator.prototype.slideUp=function(el,eta){
    var h=el.offsetHeight-5;
    var pulse=parseInt(h/40);
    var t=0;
    var timer=setInterval(function(){
      if(t>eta)
        timer.clearInterval();
      var mt=el.style.marginTop;
      mt=parseInt(mt.substr(0,mt.length-2));
      el.style.marginTop=mt+"px";
      t+=40;
    },40);
  };
  LorelCalculator.prototype.slideDown=function(el,eta){
    //-TODO
  };
  w['lorel_calculator']= new LorelCalculator();
})(window);
