//strings,numbers,array etc..are objects 
// var myCar=new Object()
// myCar.maxspeed=50;
// myCar.driver="Shaun";
// myCar.drive=function(){
//     document.write("now driving<br>");
// };
// myCar.drive();

// var myCar2={
//     maxspeed:70,
//     driver:"net-ninja",
//     drive:function(speed,time){
//         document.write("<br>"+speed*time);
//     }
// };
// document.write(myCar2.maxspeed);
// myCar2.drive(50,2);

//================================================//
//this keyword
// var myCar2={
//     maxspeed:70,
//     driver:"net-ninja",
//     drive:function(speed,time){
//         console.log(speed*time);
//     },
//     LogDriver:function(){
//         console.log("driver name is: "+this.driver);
//     }
// };


// var myCar3 = {
//     maxspeed: 70,
//     driver: "saun",
//     drive: function (speed, time) {
//         console.log(speed * time);
//     },
//     test: function () {
//         console.log(this);
//     }
// };
// console.log(myCar2.maxspeed);
// myCar2.drive(50,2)
// myCar2.LogDriver();
//myCar3.test();
//console.log(myCar2.maxspeed);
//myCar2.drive(50,2);

//==============================================//
//constructor in javaScript
// var Car=function(maxSpeed,driver){
//     this.maxSpeed=maxSpeed;
//     this.driver=driver;
//     this.drive=function(speed,time){
//         console.log(speed*time);
//     };
//     this.carName=function(){
//         console.log("Car name is "+this.driver);
//     };
// }
// var myCar = new Car(70,"ninja man");
// var myCar2 = new Car(80, "audi");
// var myCar3 = new Car(60, "benj");
// var myCar4 = new Car(50, "range-rover");
// myCar.drive(30,2);
// myCar2.carName();
//==================================================//
//the date object//
var myDate=new Date();
console.log(myDate);
