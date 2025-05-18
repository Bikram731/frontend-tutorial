console.log('this is promises');
let prom= new Promise((resolve, reject) => {
    let a=Math.random();
    if(a<0.5){
        reject("not supporting");
    }
    else{
    setTimeout(()=>{
     console.log("done");
     resolve("biki");
    },3000)
}
})
let prom2= new Promise((resolve, reject) => {
    let a2=Math.random();
    if(a2<0.5){
        reject("not supporting 2");
    }
    else{
    setTimeout(()=>{
     console.log("done 2");
     resolve("biki 2");
    },1000)
}
})
let p3=Promise.all([prom,prom2]);
p3.then((a)=>{
    console.log(a);
}).catch((er)=>{
    console.log(er);
})
// if both promises resolve then only both resolves are returned only when resolved ,but promise.allsettled used when resolve or reject we dont care we get status or value
// promise.race only when all promises are racing waits for first to be settled ,promise.any for first to resolve if all all rejected then aggregate error
// promise.resolve->returns resolve promise
// promise.reject
// catch used when reject or then used for resolve as when error is there user should use something


