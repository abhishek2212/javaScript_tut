// function mulNum(a,b){//define function 
//     return a*b;//return function
// }
// var c=mulNum(45,2);//function call
// document.write("<h2>"+c+"</h2>");

//variable scopes

var firstNum=20;//gloabl variable are defined out side the functions.
function localVar(){
    var secondNum=30;//local variable are defined inside the functions.
}

document.write(firstNum);

document.getElementById("demo").innerHTML="Hello abhishek tiwari"