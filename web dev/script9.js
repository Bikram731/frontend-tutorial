console.log("BIKI");
let cont=document.getElementsByClassName("box");
console.log(cont);
cont[2].style.backgroundColor="red";
document.getElementById("bo").style.backgroundColor="green";
// document.getElementsByClassName
document.querySelector(".box").style.backgroundColor="green";
// first element of class box is selected
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="red";
})
// it will return html collection
// document.getElementsByTagName("div")
// document.getElementsByName it gives element by name attribute
// e=document.getElementsByTagName("div");
// e[3].matches("#bo");
// true
// e[3].closest(".conatiner") it go on to the parents then uske parent until it matches
// div.container
// .contains returns element which contains another element
// div.queryselector(".container").contains("e[3]")
