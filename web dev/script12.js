console.log("biki is a hacker");
setTimeout(()=>{
    console.log("i am a settimeout");
},2000);
console.log("the end");
// due to both sychronous and asychronous nature of javascript settimeout execution will be delayed for 2s and the end will be executed before it
// if 0s then also settimeout will be after "the end"
const fn=() => {
  console.log("nothing");
}

const callback=(arg,fn) => {
   console.log(arg);
   fn();
}

const loadscript=(src,callback) => {
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Harry",fn);
    document.head.append(sc);
}
loadscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback);
// promise is used to call many function inside functions so to avoid pyramid and to handle code easily
