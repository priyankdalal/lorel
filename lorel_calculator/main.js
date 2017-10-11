/*
@@@@
js for lorel calculator
*/
function drop_handler(ev) {
 ev.preventDefault();
 ev.srcElement.style.top=ev.clientY+ "px";
 ev.srcElement.style.left=(ev.clientX-(parseInt(ev.srcElement.offsetWidth/2)))+ "px";
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

  };
  w['lorel_calculator']= new LorelCalculator();
})(window);
