console.log("I am a tutorial on loops");
let a=1;
for(let i=0;i<100;i++){
    console.log(a+i);
}
let ob = {
     name:"biki",
     role:"programmer",
     company:"codewithbiki AI"
}
for (const key in ob) {
    
        const element = ob[key];
        console.log(key,element);
    
}
for(const c of "biki"){
    console.log(c);
}
// forin loop for key
// forof loop for iterators
// let i=5;
// while(i>4){
//     console.log(i);
//     i--;
// }
let i=0;
do{
    console.log(i);
    i++;
}while(i<6);
// do loop runs atleast one time