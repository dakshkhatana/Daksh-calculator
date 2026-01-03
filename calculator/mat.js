const display=document.getElementById("disp");
function show(x){
    display.value +=x;
}
function clear(){
    display.value ="";
}
function calc(){
    var tot=eval(display.value);
    display.value=tot;
}
document.getElementById("o").onclick= () =>show(1);
document.getElementById("t").onclick= () =>show(2);
document.getElementById("th").onclick= () =>show(3);
document.getElementById("f").onclick= () =>show(4);
document.getElementById("fi").onclick= () =>show(5);
document.getElementById("s").onclick= () =>show(6);
document.getElementById("se").onclick= () =>show(7);
document.getElementById("e").onclick= () =>show(8);
document.getElementById("n").onclick= () =>show(9);
document.getElementById("z").onclick= () =>show(0);
document.getElementById("plus").onclick= () =>show("+");
document.getElementById("minus").onclick= () =>show("-");
document.getElementById("mult").onclick= () =>show("*");
document.getElementById("div").onclick= () =>show("/");
document.getElementById("clear").onclick= () =>clear();
document.getElementById("equal").onclick= () =>calc();