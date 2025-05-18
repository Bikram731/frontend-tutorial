let button=document.getElementById("btn");
// list of mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events
button.addEventListener("click",()=>{
        // alert("i was clicked yaya");
        document.querySelector(".box").innerHTML="yeah you were clicked";
})
button.addEventListener("contextmenu",()=>{
    alert("i was clicked yaya");
    // rightclick
    
})
document.addEventListener("keydown",(e)=>{
    console.log(e);
    console.log(e.key)
    // it will show the action u performed in console like pressed G on keyboard 
    
})
// focus event
// click action that u do(the click event is fired), ()=>action ka reaction, browser events mdn
// dblclick for double click


