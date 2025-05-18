let a=6;
function fact(n){
    let ar=Array.from(Array(n+1).keys());
    console.log(ar.slice(1,));
    let c=ar.slice(1,).reduce((a,b)=>{
        return a*b;
    });
    console.log(c);
}
fact(a);