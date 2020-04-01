// console.log(document.getElementsByClassName("content"));

var myContent=document.getElementsByClassName("content");
//console.log(myContent.length);

var myH2=document.getElementsByTagName("h2");
myH2[0].innerHTML="hi tiwari";
myH2[1].style.color="red";
// console.log(myH2)

var myId=document.getElementById("div-id1")
myId.style.color="green";
// console.log(myId);

//======================================//
var myBody=document.getElementsByTagName("body");
//myBody[0].innerHTML="i am a paragraph tag";

var myId2=document.getElementById("div-id2");
myId2.textContent="hello mr. abhishek";

var chngAttr=document.getElementById("div-id2");
//chngAttr.style.backgroundColor="green";
//or
chngAttr.setAttribute("style","background-color:red")

//console.log(chngAttr.getAttribute("class"));
//console.log(chngAttr.setAttribute("class","pie"));

//===================================================//
//Adding elements
var newLi=document.createElement("li");
// console.log(newLi);
var newA=document.createElement("a");

var menu=document.getElementById("main").getElementsByTagName("ul")[0];
// console.log(menu);

menu.appendChild(newLi);
newLi.appendChild(newA);
newA.setAttribute("href","#");
newA.innerHTML="blog";

//adding element on the top
menu.insertBefore(newLi,menu.getElementsByTagName("li")[0]);

//removing elements
var parent=document.getElementById("main").getElementsByTagName("ul")[0];
//console.log(parent);
var child=parent.getElementsByTagName("li")[1];
//console.log(child);
var rmoved=parent.removeChild(child);
//console.log(rmoved);
parent.appendChild(rmoved);

//event in javaScript
var title=document.getElementById("page-title");
title.onclick=function(){
    //alert("you clicked me");
};
title.onmousemove=function(){
    alert("you hovered your mouse over here");
};
