let a = [1,2,3,4,5];
// console.log(a);
// console.log(a.length);
// a[0] = 45;
// then 1st index will change  bu tnot in strings
// console.log(a.toString());
// console.log(a.join(" and "));
// a.pop();
// console.log(a);
// a.push(100);
// a.push("BIKI");
// a.unshift("bik");
// console.log(a);
// a.shift();
// /removes first element
//  delete a[3];
//  memory allocated but no element
//  console.log(a);
// concat a1.concat(a2,a3); but do not change existing array
// sort func
// a.splice(1,2);
// delete 2 elemenst form 1 index
// /slice func opposite of splice

// console.log(a);
let newarr=[];
newarr=a.map(e=>{
    return e**2;
})
// console.log(newarr);
// const seven=(e=>{
//     if(e>7){
//         return true;
//     }
//     return false;
// })
// console.log(newarr.filter(seven));
const mul=((a,b)=>{
    return a*b;
})
console.log(newarr.reduce(mul));
// array.from()to convert into array