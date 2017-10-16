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
  LorelCalculator.drawerState="opened";
  LorelCalculator.prototype.init=function(){

  };
  LorelCalculator.prototype.toggle_keypad=function(){
    var drawer=document.getElementById("lorel-drawer");
    var mRibbon=document.getElementById("lorel-mem-ribbon");
    var bKeypad=document.getElementById("lorel-basic-keypad");
    if(LorelCalculator.drawerState=="closed"){
      mRibbon.classList.add("mem-ribbon-show");
      mRibbon.classList.remove("mem-ribbon-hide");
      bKeypad.classList.add("basic-keypad-show");
      bKeypad.classList.remove("basic-keypad-hide");
      LorelCalculator.drawerState="opened";
      drawer.style.transform="rotateZ(0deg)";
      drawer.children[0].classList.add("rotate-minus");
      drawer.children[0].classList.remove("rotate-plus");
    }else{
      mRibbon.classList.add("mem-ribbon-hide");
      mRibbon.classList.remove("mem-ribbon-show");
      bKeypad.classList.add("basic-keypad-hide");
      bKeypad.classList.remove("basic-keypad-show");
      LorelCalculator.drawerState="closed";
      drawer.children[0].classList.add("rotate-plus");
      drawer.children[0].classList.remove("rotate-minus");
    }
  };
  w['lorel_calculator']= new LorelCalculator();
})(window);
