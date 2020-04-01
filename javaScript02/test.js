// var youlikemeet=true;
// //if statement
// if(youlikemeet){
//     document.write("you like meet");
// }else{
//     document.write("you hate meet");
// }

// var myAge=2;
// if(myAge==23){
//     document.write("you are age is 23");
// }else if(myAge>22){
//     document.write("you are over 22");
// }else if(myAge>10){
//     document.write("you are over 10");
// }else{
//     document.write("You are not over 10!");
// }


//===========================================//
//logical operators//
/*
var myAge=31;
if(myAge>=18 && myAge<=30){
    document.write("your age in between 18 to 30");
}else{
    document.write("your age is above 30");
}

*/
/*===================================================*/
//LOOP//

//while loop
// var a=1;
// while(a<=10){
//     document.write("<h1>"+a+"</h1>");
//     a++;
// }

//for loop
// var i=0;
// for(i=1;i<=10;i++){
//     document.write("<h2>"+i+"</h2>");
// }

//do-while loop
// var i=1;
// do{
//     document.write("<h2>"+i+"</h2>");
//     i++;
// }while(i<=10);


//break & continue

var i=1;
for(i;i<=20;i++){
    if(i===5||i===3){
        //break;
        continue;
    }
    document.write("<h2>"+i+"</h2>");
    if(i===7){
        break;
    }
}
document.write("<h2> break the statement at line number 7</h2>")

