function n(name){
    console.log("Hey" + name + "you are nice!")
}

n(" biki ");
function sum(a,b){
    console.log(a+b);
}
sum(3, 5);
// return can also work like in c++ 
 function s(a,b,c=3){
    return a+b+c;
 }
 result = s(2,5);
 resu=s(2,5,1);
 console.log(result,resu);
 r=s(3);
//  it will return NaN as b is undefined not a number
const func1=(x)=>{
    console.log("I am an arrow function",x);
}
func1(34);
func1(66);