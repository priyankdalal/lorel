/*
@@@@
js for lorel calculator
*/
function drop_handler(ev) {
 ev.preventDefault();
 ev.srcElement.style.top=ev.clientY+ "px";
 ev.srcElement.style.left=(ev.clientX-(parseInt(ev.srcElement.offsetWidth/2)))+ "px";
}
